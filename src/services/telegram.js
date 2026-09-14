const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

// In-flight parallel so'rovlarni birlashtirish xaritasi
const inFlightRequests = new Map();
// Xotiradagi yuborilgan testlar to'plami
const sentFingerprints = new Set();

/**
 * Har bir test topshirig'i uchun noyob identifikator (barmoq izi)
 */
export function getTestFingerprint(data) {
  if (!data) return 'tg_done_unknown';
  if (data.testId) {
    return `tg_done_${data.testId}`;
  }
  const normName = (data.fullName || '').toLowerCase().trim().replace(/\s+/g, '_');
  const normClass = (data.className || '').toLowerCase().trim();
  const dateKey = data.finishedAt ? data.finishedAt.substring(0, 19) : 'nodate';
  return `tg_done_${normName}_${normClass}_${dateKey}`;
}

/**
 * Ushbu test natijasi oldinroq botga yuborilganmi yoki yo'qligini tekshirish
 */
export function isTelegramResultSent(data) {
  if (!data) return false;
  if (data.telegramSent) return true;
  const fp = getTestFingerprint(data);
  if (sentFingerprints.has(fp)) return true;
  try {
    return localStorage.getItem(fp) === 'true';
  } catch (e) {
    return false;
  }
}

/**
 * Test natijasini yuborilgan deb belgilash
 */
export function markTelegramResultSent(data) {
  if (!data) return;
  const fp = getTestFingerprint(data);
  sentFingerprints.add(fp);
  try {
    localStorage.setItem(fp, 'true');
  } catch (e) {}
}

/**
 * Telegram bot orqali natijalarni va barcha 40 ta javobni yuborish (Faqat 1 marta yuboriladi!)
 * @param {Object} resultData
 * @returns {Promise<{success: boolean, message?: string, alreadySent?: boolean}>}
 */
export async function sendTestResultToTelegram(resultData) {
  // 1. Agar allaqachon muvaffaqiyatli yuborilgan bo'lsa, mutlaqo qayta yubormaymiz!
  if (isTelegramResultSent(resultData)) {
    return {
      success: true,
      message: "Natijalar allaqachon botga yuborilgan!",
      alreadySent: true
    };
  }

  const fingerprint = getTestFingerprint(resultData);

  // 2. Agar ayni vaqtda parallel ravishda yuborish so'rovi ketayotgan bo'lsa,
  // yangi fetch boshlamaymiz, mavjud so'rov natijasini kutamiz!
  if (inFlightRequests.has(fingerprint)) {
    return inFlightRequests.get(fingerprint);
  }

  const sendPromise = (async () => {
    const {
      fullName,
      className,
      score,
      totalQuestions = 40,
      timeSpentFormatted,
      percentage,
      finishedAt,
      answers = []
    } = resultData;

    // Token mavjudligini tekshirish
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram bot sozlamalari (.env) topilmadi!');
      return {
        success: false,
        message: 'Telegram sozlamalari (.env faylida) topilmadi.'
      };
    }

    // Brauzerda internet yo'qligini tekshirish
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined' && window.navigator.onLine === false) {
      return {
        success: false,
        message: "Internet aloqasi mavjud emas. Internet ulangach qayta urinib ko'ring."
      };
    }

  const dateStr = finishedAt ? new Date(finishedAt).toLocaleString('uz-UZ', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }) : new Date().toLocaleString('uz-UZ');

  let gradeBadge = "Qoniqarsiz (2)";
  if (percentage >= 86) gradeBadge = "A'lo (5)";
  else if (percentage >= 71) gradeBadge = "Yaxshi (4)";
  else if (percentage >= 56) gradeBadge = "Qoniqarli (3)";

  // 40 ta savolning har biriga berilgan javoblar ro'yxati
  let answersBreakdown = "";
  if (answers && answers.length > 0) {
    answersBreakdown += "\n<b>Barcha 40 ta savol natijalari:</b>\n<code>";
    for (let i = 0; i < answers.length; i += 2) {
      const a1 = answers[i];
      const a2 = answers[i + 1];

      const num1 = (i + 1).toString().padStart(2, '0');
      const u1 = a1.selectedOption !== null && a1.selectedOption !== undefined ? OPTION_LETTERS[a1.selectedOption] : '-';
      const c1 = OPTION_LETTERS[a1.correctOption];
      const s1 = a1.isCorrect ? `[+] ${num1}:${u1}` : `[-] ${num1}:${u1}(${c1})`;

      let line = s1.padEnd(16, ' ');

      if (a2) {
        const num2 = (i + 2).toString().padStart(2, '0');
        const u2 = a2.selectedOption !== null && a2.selectedOption !== undefined ? OPTION_LETTERS[a2.selectedOption] : '-';
        const c2 = OPTION_LETTERS[a2.correctOption];
        const s2 = a2.isCorrect ? `[+] ${num2}:${u2}` : `[-] ${num2}:${u2}(${c2})`;
        line += s2;
      }

      answersBreakdown += line + "\n";
    }
    answersBreakdown += "</code>\n<i>Izoh: [+] To'g'ri javob, [-] Xato javob (qavsda to'g'risi)</i>\n";
  }

  const text = `
<b>[FAN OLIMPIADASI TEST NATIJASI]</b>
━━━━━━━━━━━━━━━━━━━━━
<b>O'quvchi:</b> <code>${fullName}</code>
<b>Sinf:</b> <code>${className.toUpperCase()}</code>
<b>Baho:</b> <b>${gradeBadge}</b>

<b>To'plangan ball:</b> <b>${score} / ${totalQuestions}</b>
<b>To'g'ri javoblar:</b> <b>${score} ta</b>
<b>Xato javoblar:</b> <b>${totalQuestions - score} ta</b>
<b>Natija foizi:</b> <b>${percentage}%</b>
<b>Sarflangan vaqt:</b> <b>${timeSpentFormatted}</b>
<b>Topshirilgan vaqt:</b> ${dateStr}
━━━━━━━━━━━━━━━━━━━━━${answersBreakdown}━━━━━━━━━━━━━━━━━━━━━
<i>Informatika va dasturlash olimpiadasi tizimi</i>
  `.trim();

  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    if (data.ok) {
      markTelegramResultSent(resultData);
      return { success: true, message: 'Natijalar ustozga muvaffaqiyatli yuborildi!' };
    } else {
      console.error('Telegram API error:', data);
      return { success: false, message: data.description || 'Telegramga yuborishda xatolik yuz berdi' };
    }
  } catch (err) {
    console.error('Network or fetch error:', err);
    return { success: false, message: err.message || 'Tarmoq xatosi' };
  } finally {
    inFlightRequests.delete(fingerprint);
  }
  })();

  inFlightRequests.set(fingerprint, sendPromise);
  return sendPromise;
}
