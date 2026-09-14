import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle, 
  Award, 
  BookOpen, 
  User, 
  GraduationCap, 
  RefreshCw, 
  Check, 
  X, 
  LogOut,
  SlidersHorizontal
} from 'lucide-react';
import { sendTestResultToTelegram } from '../services/telegram';
import ConfirmModal from './ConfirmModal';

export default function ResultScreen({ studentData, resultData, onRestart }) {
  const [telegramStatus, setTelegramStatus] = useState({ 
    loading: true, 
    success: false, 
    message: 'Natijalar yuborilmoqda...' 
  });
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'correct' | 'incorrect'
  const [showConfirmRestart, setShowConfirmRestart] = useState(false);
  
  // Takroriy (2 marta) yuborilishni oldini oluvchi himoya
  const hasSentRef = useRef(false);
  const isSendingRef = useRef(false);
  const questionRefs = useRef({});

  const { score, totalQuestions, answers = [], timeSpentFormatted, percentage } = resultData;
  const incorrectCount = totalQuestions - score;
  const optionLetters = ['A', 'B', 'C', 'D'];

  const sendKey = `tg_sent_${studentData.fullName}_${resultData.finishedAt}`;

  const performTelegramSend = async (isManualRetry = false) => {
    // Agar allaqachon yuborilgan bo'lsa va bu qo'lda qayta urinish bo'lmasa, qayta yubormaymiz!
    if (!isManualRetry) {
      if (hasSentRef.current || sessionStorage.getItem(sendKey) === 'true') {
        setTelegramStatus({ 
          loading: false, 
          success: true, 
          message: 'Natijalar ustozga muvaffaqiyatli yetkazilgan!' 
        });
        return;
      }
    }

    if (isSendingRef.current) return;
    isSendingRef.current = true;

    setTelegramStatus({ loading: true, success: false, message: 'Natijalar ustozga yuborilmoqda...' });

    const res = await sendTestResultToTelegram({
      fullName: studentData.fullName,
      className: studentData.className,
      score,
      totalQuestions,
      timeSpentFormatted,
      percentage,
      finishedAt: resultData.finishedAt,
      answers
    });

    isSendingRef.current = false;

    if (res.success) {
      hasSentRef.current = true;
      try {
        sessionStorage.setItem(sendKey, 'true');
      } catch (e) {}
      setTelegramStatus({ loading: false, success: true, message: 'Natijalar ustozga muvaffaqiyatli yetkazildi!' });
    } else {
      setTelegramStatus({ loading: false, success: false, message: res.message || 'Telegramga yuborishda xatolik yuz berdi' });
    }
  };

  useEffect(() => {
    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.error('Confetti error:', e);
      }
    }

    // Faqat 1 marta yuborish
    performTelegramSend(false);

    const handleOnline = () => {
      // Faqatgina oldin yuborilmagan bo'lsa internet paydo bo'lganda yuborish
      if (!hasSentRef.current && sessionStorage.getItem(sendKey) !== 'true') {
        performTelegramSend(false);
      }
    };
    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  const getGradeInfo = (pct) => {
    if (pct >= 86) return { title: "A'lo (5 baho)", color: "grade-gold", desc: "Ajoyib natija! Dasturlash va algoritmik bilimingiz juda yuqori darajada." };
    if (pct >= 71) return { title: "Yaxshi (4 baho)", color: "grade-blue", desc: "Yaxshi natija! Kichik kamchiliklar ustida ishlab bilimingizni yanada mustahkamlang." };
    if (pct >= 56) return { title: "Qoniqarli (3 baho)", color: "grade-amber", desc: "Qoniqarli. Nazariy va amaliy mavzularni ko'proq takrorlashingiz zarur." };
    return { title: "Qoniqarsiz (2 baho)", color: "grade-red", desc: "Mavzularni qaytadan chuqurroq o'rganib chiqish tavsiya etiladi." };
  };

  const gradeInfo = getGradeInfo(percentage);

  const scrollToQuestion = (idx) => {
    if (questionRefs.current[idx]) {
      questionRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const filteredAnswers = answers.map((ans, originalIdx) => ({ ...ans, originalIdx })).filter(item => {
    if (filterMode === 'correct') return item.isCorrect;
    if (filterMode === 'incorrect') return !item.isCorrect;
    return true;
  });

  return (
    <div className="result-page">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <div className="result-container">
        {/* Main Result Summary Card */}
        <div className="result-card">
          <div className="result-header">
            <div className="trophy-badge">
              <Trophy size={40} className="trophy-icon" />
            </div>
            <h1 className="result-title">Test Yakunlandi!</h1>
            <p className="result-subtitle">40 ta savoldan iborat olimpiada testi to'liq topshirildi</p>
          </div>

          {/* Student Info Bar */}
          <div className="student-result-banner">
            <div className="student-info-col">
              <span className="student-label">O'quvchi:</span>
              <span className="student-name">
                <User size={16} />
                {studentData.fullName}
              </span>
            </div>
            <div className="banner-divider" />
            <div className="student-info-col">
              <span className="student-label">Sinf:</span>
              <span className="student-class">
                <GraduationCap size={16} />
                {studentData.className.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Score & Grade Display */}
          <div className="stats-main-grid">
            <div className="circle-score-box">
              <span className="score-badge-label">To'plangan Ball:</span>
              <div className="score-number">{score}</div>
              <div className="score-total">/ {totalQuestions} ball ({percentage}%)</div>
              <div className="score-percent-pill">{percentage >= 56 ? "Sinovdan o'tdi" : "Yetarli emas"}</div>
            </div>

            <div className="grade-box">
              <span className="grade-badge-label">Umumiy baho:</span>
              <h3 className={`grade-badge-title ${gradeInfo.color}`}>{gradeInfo.title}</h3>
              <p className="grade-badge-desc">{gradeInfo.desc}</p>
            </div>
          </div>

          {/* Detailed Metric Cards */}
          <div className="metrics-row">
            <div className="metric-card success">
              <div className="metric-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <div className="metric-text">
                <span className="metric-val">{score} ta to'g'ri</span>
                <span className="metric-lbl">To'plangan ball: {score}</span>
              </div>
            </div>

            <div className="metric-card danger">
              <div className="metric-icon-wrap">
                <XCircle size={24} />
              </div>
              <div className="metric-text">
                <span className="metric-val">{incorrectCount} ta xato</span>
                <span className="metric-lbl">Yo'qotilgan ball: {incorrectCount}</span>
              </div>
            </div>

            <div className="metric-card time">
              <div className="metric-icon-wrap">
                <Clock size={24} />
              </div>
              <div className="metric-text">
                <span className="metric-val">{timeSpentFormatted}</span>
                <span className="metric-lbl">Sarflangan vaqt</span>
              </div>
            </div>
          </div>

          {/* Telegram Status Notification Box */}
          <div className={`telegram-status-box ${telegramStatus.loading ? 'loading' : telegramStatus.success ? 'success' : 'error'}`}>
            <div className="tg-status-icon">
              {telegramStatus.loading && <div className="tg-spinner" />}
              {!telegramStatus.loading && telegramStatus.success && <CheckCircle2 size={22} />}
              {!telegramStatus.loading && !telegramStatus.success && <AlertCircle size={22} />}
            </div>
            <div className="tg-status-content">
              <h4>Telegram Bot hisoboti (40 ta javob bilan)</h4>
              <p>{telegramStatus.message}</p>
            </div>
            {!telegramStatus.loading && !telegramStatus.success && (
              <button className="tg-retry-btn" onClick={() => performTelegramSend(true)}>
                <RefreshCw size={14} />
                <span>Qayta yuborish</span>
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="result-actions">
            <button 
              type="button" 
              className="btn-restart"
              onClick={() => setShowConfirmRestart(true)}
            >
              <LogOut size={18} />
              <span>Yangi ishtirokchi uchun boshlash (Chiqish)</span>
            </button>
          </div>
        </div>

        {/* 40 Questions Review Section: Green for Correct, Red for Incorrect */}
        <div className="review-section">
          <div className="review-header-flex">
            <div>
              <h3 className="review-title">40 ta savolning batafsil tahlili</h3>
              <p className="review-subtitle">
                To'g'ri javoblar <strong>yashil rangda</strong>, xato javoblar <strong>qizil rangda</strong> ko'rsatilgan
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              <button 
                type="button" 
                className={`filter-btn ${filterMode === 'all' ? 'active' : ''}`}
                onClick={() => setFilterMode('all')}
              >
                Barchasi ({answers.length})
              </button>
              <button 
                type="button" 
                className={`filter-btn btn-filter-green ${filterMode === 'correct' ? 'active' : ''}`}
                onClick={() => setFilterMode('correct')}
              >
                <Check size={14} />
                To'g'rilar ({score})
              </button>
              <button 
                type="button" 
                className={`filter-btn btn-filter-red ${filterMode === 'incorrect' ? 'active' : ''}`}
                onClick={() => setFilterMode('incorrect')}
              >
                <X size={14} />
                Xatolar ({incorrectCount})
              </button>
            </div>
          </div>

          {/* Quick 40-Number Matrix */}
          <div className="question-matrix-wrap">
            <span className="matrix-title">Savollar xaritasi:</span>
            <div className="question-matrix">
              {answers.map((ans, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`matrix-dot ${ans.isCorrect ? 'dot-correct' : 'dot-incorrect'}`}
                  title={`${idx + 1}-savol: ${ans.isCorrect ? "To'g'ri" : "Xato"}`}
                  onClick={() => scrollToQuestion(idx)}
                >
                  <span className="dot-num">{idx + 1}</span>
                  {ans.isCorrect ? <Check size={10} /> : <X size={10} />}
                </button>
              ))}
            </div>
          </div>

          {/* Review List of Questions */}
          <div className="review-list">
            {filteredAnswers.map((item) => {
              const originalIndex = item.originalIdx;
              return (
                <div 
                  key={originalIndex} 
                  ref={el => questionRefs.current[originalIndex] = el}
                  className={`review-card ${item.isCorrect ? 'card-correct' : 'card-incorrect'}`}
                >
                  {/* Question Card Header */}
                  <div className="review-meta">
                    <div className="review-q-num">
                      <span>Savol № {originalIndex + 1}</span>
                    </div>

                    <div className={`review-badge-status ${item.isCorrect ? 'badge-green' : 'badge-red'}`}>
                      {item.isCorrect ? (
                        <>
                          <CheckCircle2 size={16} />
                          <span>To'g'ri javob (+1 ball)</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} />
                          <span>Noto'g'ri javob (0 ball)</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Question Text */}
                  <h4 className="review-question-text">{item.question}</h4>

                  {/* Visual Options Breakdown */}
                  <div className="review-options-list">
                    <div className={`review-choice-row ${item.isCorrect ? 'choice-correct' : 'choice-incorrect'}`}>
                      <span className="choice-label">Siz tanlagan javob:</span>
                      <div className="choice-value">
                        <span className="choice-letter">
                          {item.selectedOption !== null && item.selectedOption !== undefined 
                            ? optionLetters[item.selectedOption] 
                            : 'Tanlanmagan'}
                        </span>
                        <span className="choice-status-text">
                          {item.isCorrect ? "To'g'ri tanlandi" : "Xato tanlandi"}
                        </span>
                      </div>
                    </div>

                    {!item.isCorrect && (
                      <div className="review-choice-row choice-should-be">
                        <span className="choice-label">Haqiqiy to'g'ri javob:</span>
                        <div className="choice-value">
                          <span className="choice-letter green-letter">
                            {optionLetters[item.correctOption]}
                          </span>
                          <span className="choice-status-text green-text">
                            To'g'ri variant
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Confirmation Modal before starting new user / logging out */}
      <ConfirmModal 
        isOpen={showConfirmRestart}
        type="danger"
        title="Yangi ishtirokchi uchun boshlash"
        message="Rostdan ham yangi o'quvchi uchun yangi test boshlamoqchimisiz? Oldingi o'quvchining barcha ma'lumotlari to'liq tozalanadi va toza login (ro'yxatdan o'tish) sahifasi ochiladi."
        confirmText="Ha, yangi test boshlash"
        cancelText="Yo'q, natijada qolish"
        onConfirm={() => {
          setShowConfirmRestart(false);
          onRestart();
        }}
        onCancel={() => setShowConfirmRestart(false)}
      />
    </div>
  );
}
