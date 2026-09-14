import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  AlertTriangle, 
  ArrowRight, 
  Lock, 
  User, 
  GraduationCap,
  Sparkles,
  Wifi,
  WifiOff
} from 'lucide-react';
import ConfirmModal from './ConfirmModal';

export default function QuizScreen({ 
  questions, 
  studentData, 
  initialIndex = 0, 
  initialAnswers = [], 
  quizStartTime, 
  totalDuration = 2400,
  onProgressUpdate,
  onComplete 
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(initialAnswers);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  // Modals state (custom modals instead of browser alert/confirm)
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'warning',
    title: '',
    message: '',
    confirmText: 'Tushundim',
    cancelText: null,
    onConfirm: null,
    onCancel: null
  });

  const calculateRemainingSeconds = () => {
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    return Math.max(0, totalDuration - elapsed);
  };

  const [timeLeft, setTimeLeft] = useState(calculateRemainingSeconds());
  const timerRef = useRef(null);
  const isFinishingRef = useRef(false);
  const quizCompletedRef = useRef(false);

  // Internet connection monitoring
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Keyboard reload (F5, Ctrl+R, Cmd+R) and back button (popstate) interception
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Diqqat! Test jarayoni davom etmoqda.";
      return e.returnValue;
    };

    const handleKeyDown = (e) => {
      if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && (e.key === 'r' || e.key === 'R'))) {
        e.preventDefault();
        setModalState({
          isOpen: true,
          type: 'reload',
          title: "Rostdan ham sahifani yangilamoqchimisiz?",
          message: "Test jarayoni davom etmoqda. Sahifani yangilash tavsiya etilmaydi. Agar yangilasangiz ham, barcha natijalaringiz va qolgan vaqtingiz xotirada to'liq saqlanib qoladi.",
          confirmText: "Ha, sahifani yangilash",
          cancelText: "Yo'q, testda qolish",
          onConfirm: () => {
            window.location.reload();
          },
          onCancel: () => {
            setModalState(prev => ({ ...prev, isOpen: false }));
          }
        });
      }
    };

    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
      setModalState({
        isOpen: true,
        type: 'danger',
        title: "Orqaga qaytish taqiqlangan!",
        message: "Olimpiada qoidalariga ko'ra, har bir savolga javob berilgach, oldingi savollarga qaytish imkoni yo'q. Faqat keyingi savollarga o'tishingiz mumkin.",
        confirmText: "Tushundim, davom etaman",
        cancelText: null,
        onConfirm: () => {
          setModalState(prev => ({ ...prev, isOpen: false }));
        },
        onCancel: null
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Timer countdown
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const remaining = calculateRemainingSeconds();
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timerRef.current);
        handleTimeExpire();
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [answers, currentIndex, quizStartTime]);

  const handleTimeExpire = () => {
    setModalState({
      isOpen: true,
      type: 'time',
      title: "Vaqt yakunlandi!",
      message: "Test uchun ajratilgan 40 daqiqalik vaqt to'liq yakunlandi. Barcha belgilangan javoblaringiz qabul qilindi va natijalaringiz hisoblandi.",
      confirmText: "Natijalarni ko'rish",
      cancelText: null,
      onConfirm: () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
        finishQuiz(answers);
      },
      onCancel: () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
        finishQuiz(answers);
      }
    });
  };

  const finishQuiz = (finalAnswers) => {
    if (quizCompletedRef.current) return;
    quizCompletedRef.current = true;
    isFinishingRef.current = true;

    if (timerRef.current) clearInterval(timerRef.current);

    const totalSecondsSpent = Math.max(1, Math.min(totalDuration, Math.round((Date.now() - quizStartTime) / 1000)));
    const minutes = Math.floor(totalSecondsSpent / 60);
    const seconds = totalSecondsSpent % 60;
    const timeSpentFormatted = `${minutes} daqiqa ${seconds} soniya`;

    const correctCount = finalAnswers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctCount / questions.length) * 100);
    const testId = `test_${Date.now()}_${(studentData?.fullName || '').replace(/\s+/g, '_')}`;

    onComplete({
      testId,
      score: correctCount,
      totalQuestions: questions.length,
      answers: finalAnswers,
      timeSpentFormatted,
      percentage,
      finishedAt: new Date().toISOString()
    });
  };

  const currentQuestion = questions[currentIndex];
  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleNext = () => {
    if (selectedOption === null || isFinishingRef.current) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const updatedAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedOption: selectedOption,
        correctOption: currentQuestion.correctAnswer,
        isCorrect: isCorrect
      }
    ];

    setAnswers(updatedAnswers);
    setSelectedOption(null);

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      if (onProgressUpdate) {
        onProgressUpdate(nextIndex, updatedAnswers);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      isFinishingRef.current = true;
      finishQuiz(updatedAnswers);
    }
  };

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.round(((currentIndex) / questions.length) * 100);
  const isTimeCritical = timeLeft < 300;

  return (
    <div className="quiz-page">
      {/* Top sticky bar */}
      <header className="quiz-top-bar">
        <div className="quiz-top-container">
          {/* User info */}
          <div className="quiz-user-info">
            <div className="quiz-avatar">
              <User size={18} />
            </div>
            <div className="quiz-user-details">
              <span className="quiz-user-name">{studentData.fullName}</span>
              <span className="quiz-user-class">
                <GraduationCap size={14} />
                {studentData.className.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Connection status indicator */}
          <div className={`connection-pill ${isOnline ? 'online' : 'offline'}`}>
            {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
            <span>{isOnline ? 'Aloqa faol' : 'Oflayn rejim (xavotir olmang)'}</span>
          </div>

          {/* Progress pill */}
          <div className="quiz-progress-badge">
            <span>Savol: <strong>{currentIndex + 1}</strong> / {questions.length}</span>
          </div>

          {/* Timer */}
          <div className={`quiz-timer ${isTimeCritical ? 'timer-critical' : ''}`}>
            <Clock size={18} className={isTimeCritical ? 'pulse' : ''} />
            <span className="timer-text">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Smooth progress bar */}
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Main Quiz Content */}
      <main className="quiz-main-container">
        <div className="quiz-card">
          {/* Card header */}
          <div className="question-meta-bar">
            <span className="question-number-tag">
              <Sparkles size={14} />
              {currentIndex + 1}-savol
            </span>
            <span className="no-return-tag">
              <Lock size={13} />
              Orqaga qaytish yopiq
            </span>
          </div>

          {/* Question Text */}
          <div className="question-text-wrap">
            <h2 className="question-text">{currentQuestion.question}</h2>
          </div>

          {/* Options Grid */}
          <div className="options-grid">
            {currentQuestion.options.map((optText, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(idx)}
                >
                  <div className="option-letter-box">
                    <span>{optionLetters[idx]}</span>
                  </div>
                  <div className="option-content-text">
                    {optText}
                  </div>
                  <div className="option-radio-ring">
                    {isSelected && <div className="radio-dot" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Card footer with warning and next button */}
          <div className="quiz-card-footer">
            <div className="footer-warning">
              <AlertTriangle size={16} className="warning-icon" />
              <span>Javobni tasdiqlaganingizdan so'ng, oldingi savolga qayta olmaysiz!</span>
            </div>

            <button
              type="button"
              className={`next-action-btn ${selectedOption === null || isFinishingRef.current ? 'disabled' : ''}`}
              disabled={selectedOption === null || isFinishingRef.current}
              onClick={handleNext}
            >
              <span>
                {currentIndex + 1 === questions.length ? "Testni yakunlash" : "Tasdiqlash va keyingisi"}
              </span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* Custom Confirmation & Alert Modal */}
      <ConfirmModal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
        confirmText={modalState.confirmText}
        cancelText={modalState.cancelText}
        onConfirm={modalState.onConfirm}
        onCancel={modalState.onCancel}
      />
    </div>
  );
}
