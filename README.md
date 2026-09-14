# 🏆 Informatika va Dasturlash Fan Olimpiadasi Test Tizimi

Ushbu platforma 100 ta saralangan dasturlash va informatika savollari bazasidan foydalanuvchiga tasodifiy (random) tarzda 40 ta savol beruvchi, vaqt hisobi (1 soat), orqaga qaytmaslik qoidasi va Telegram bot orqali avtomatlashtirilgan hisobot yuborish imkoniyatiga ega professional test dasturidir.

---

## 🌟 Asosiy Xususiyatlari

1. **Kirish va Qat'iy Validatsiya**:
   - **Ism va Familiya** bitta maydonda to'liq kiritiladi (masalan: `Abdullayev Temur`).
   - **Sinf formati**: Qat'iy `1-11` oraliqdagi sinf va harf (masalan: `11-b`, `9-a`, `10-v`). 
   - 12 yoki undan katta sinflar (`12-b` va h.k.) mutlaqo qabul qilinmaydi.
   - Tezkor tanlash uchun sinf tugmalari mavjud.

2. **Ogohlantiruvchi Modal Qoidalar**:
   - Ism va sinf kiritilgach, testni boshlashdan oldin maxsus ogohlantirish darchasi ochiladi.
   - 1 soat vaqt berilishi, **orqaga qaytish imkoni yo'qligi** va natijalar Telegramga yuborilishi haqida ogohlantiradi.
   - Foydalanuvchi "Qoidalar bilan tanishdim" tugmasini tasdiqlaganidan so'ng test boshlanadi.

3. **40 Ta Tasodifiy (Random) Savol**:
   - 100 ta berilgan barcha savollar bazasidan har bir o'quvchiga Fisher-Yates algoritmi orqali takrorlanmas, to'liq tasodifiy 40 ta savol taqdim etiladi.

4. **1 Soatlik Taymer va Orqaga Qaytmaslik Rejimi**:
   - 60:00 dan boshlab orqaga sanovchi aniq taymer.
   - Har bir savolga javob tasdiqlangach, darhol keyingi savolga o'tiladi va orqaga qaytish yopiq.
   - Sahifani tasodifiy yopish yoki yangilashdan himoyalangan (`beforeunload` & `history lock`).

5. **Telegram Bot Integratsiyasi**:
   - Bot Token: `8753487378:AAG0iySUhHBt2NBjgEaEPB_QsJAqt-_Lg6c`
   - O'qituvchi / Hakam ID: `5387795208`
   - Test yakunlanishi bilan to'plangan ball, to'g'ri/xato javoblar, foiz, sarflangan vaqt va sana avtomatik tarzda Telegramga chiroyli formatda yuboriladi.

6. **Custom Oq-Ko'k Dizayn**:
   - Yengil, ko'zni charchatmaydigan och ko'k (`sky blue` / `azure`) zamonaviy dizayn.
   - Natijalar oynasida bayramona mushaklar (confetti), umumiy baho ko'rsatkichi va savollar tahlili.

---

## 🚀 Ishga Tushirish

Loyihaning katalogiga kiring:
```bash
cd /home/temurmalik/Desktop/olimpiada-test
```

Dasturni ishga tushirish uchun:
```bash
npm run dev
# yoki
./start.sh
```

Brauzeringizda quyidagi manzilni oching:
👉 **`http://localhost:5174/`** (yoki terminalda ko'rsatilgan port)
