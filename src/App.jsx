import React, { useState, useEffect } from 'react';
import RegistrationScreen from './components/RegistrationScreen';
import RegistrationModal from './components/RegistrationModal';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { getQuestionsForStudent } from './data/questions';
import { 
  getSavedSession, 
  saveSession, 
  clearAllSessionAndDraft,
  getInputDraft 
} from './services/storage';

const TOTAL_DURATION_SECONDS = 2400; // 40 minut // 1 hour

export default function App() {
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [step, setStep] = useState('register'); // 'register' | 'modal' | 'quiz' | 'result'
  const [studentData, setStudentData] = useState({ fullName: '', className: '' });
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [resultData, setResultData] = useState(null);

  // Initial load from localStorage
  useEffect(() => {
    const saved = getSavedSession();
    if (saved) {
      if (saved.studentData) setStudentData(saved.studentData);
      
      if (saved.step === 'result' && saved.resultData) {
        setResultData(saved.resultData);
        setStep('result');
      } else if (saved.step === 'quiz' && saved.activeQuestions?.length > 0) {
        setActiveQuestions(saved.activeQuestions);
        setCurrentIndex(saved.currentIndex || 0);
        setAnswers(saved.answers || []);
        
        const startTime = saved.quizStartTime || Date.now();
        setQuizStartTime(startTime);

        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        if (elapsed >= TOTAL_DURATION_SECONDS) {
          const savedAnswers = saved.answers || [];
          const correctCount = savedAnswers.filter(a => a.isCorrect).length;
          const percentage = Math.round((correctCount / saved.activeQuestions.length) * 100);
          const finalResult = {
            testId: `test_${startTime}_${(saved.studentData?.fullName || '').replace(/\s+/g, '_')}`,
            score: correctCount,
            totalQuestions: saved.activeQuestions.length,
            answers: savedAnswers,
            timeSpentFormatted: "40 daqiqa 0 soniya",
            percentage,
            finishedAt: new Date().toISOString()
          };
          setResultData(finalResult);
          setStep('result');
          saveSession({
            step: 'result',
            studentData: saved.studentData,
            resultData: finalResult
          });
        } else {
          setStep('quiz');
        }
      } else if (saved.step === 'modal') {
        setStep('modal');
      }
    } else {
      const draft = getInputDraft();
      if (draft) {
        setStudentData(draft);
      }
    }
    setSessionLoaded(true);
  }, []);

  // 1. User submits name and class in RegistrationScreen
  const handleRegistrationProceed = (data) => {
    setStudentData(data);
    setStep('modal');
    saveSession({
      step: 'modal',
      studentData: data
    });
  };

  // 2. User confirms rules in RegistrationModal -> Start Quiz
  const handleModalConfirm = () => {
    // Abdullayev Temurmalik va Imonov Mahmudjon (10-B) uchun 1 dan 40 gacha qat'iy tartibda,
    // qolgan barcha foydalanuvchilar uchun tasodifiy (random) 40 ta savol
    const selectedQuestions = getQuestionsForStudent(studentData.fullName, studentData.className);
    const now = Date.now();
    setActiveQuestions(selectedQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setQuizStartTime(now);
    setStep('quiz');

    saveSession({
      step: 'quiz',
      studentData,
      activeQuestions: selectedQuestions,
      currentIndex: 0,
      answers: [],
      quizStartTime: now,
      totalDuration: TOTAL_DURATION_SECONDS
    });
  };

  // 2b. Cancel modal -> back to registration
  const handleModalCancel = () => {
    setStep('register');
    saveSession({
      step: 'register',
      studentData
    });
  };

  // 3. User progresses to next question
  const handleProgressUpdate = (newIndex, updatedAnswers) => {
    setCurrentIndex(newIndex);
    setAnswers(updatedAnswers);

    saveSession({
      step: 'quiz',
      studentData,
      activeQuestions,
      currentIndex: newIndex,
      answers: updatedAnswers,
      quizStartTime,
      totalDuration: TOTAL_DURATION_SECONDS
    });
  };

  // 4. Quiz completed
  const handleQuizComplete = (results) => {
    setResultData(results);
    setStep('result');

    saveSession({
      step: 'result',
      studentData,
      resultData: results
    });
  };

  // Telegramga muvaffaqiyatli yuborilganda sessiyaga belgilab qo'yish
  const handleTelegramSent = () => {
    setResultData(prev => {
      if (!prev) return prev;
      const updated = { ...prev, telegramSent: true };
      saveSession({
        step: 'result',
        studentData,
        resultData: updated
      });
      return updated;
    });
  };

  // 5. Yangi o'quvchi uchun to'liq tozalash va Login / Ro'yxatdan o'tishga qaytish
  const handleRestart = () => {
    clearAllSessionAndDraft();
    setStudentData({ fullName: '', className: '' });
    setActiveQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setQuizStartTime(null);
    setResultData(null);
    setStep('register');
  };

  if (!sessionLoaded) {
    return null;
  }

  return (
    <div className="app-root">
      {step === 'register' && (
        <RegistrationScreen 
          key={studentData.fullName + studentData.className}
          initialData={studentData}
          onProceed={handleRegistrationProceed} 
        />
      )}

      {step === 'modal' && (
        <>
          <RegistrationScreen 
            initialData={studentData}
            onProceed={handleRegistrationProceed} 
          />
          <RegistrationModal 
            studentData={studentData}
            onConfirm={handleModalConfirm}
            onCancel={handleModalCancel}
          />
        </>
      )}

      {step === 'quiz' && (
        <QuizScreen 
          questions={activeQuestions}
          studentData={studentData}
          initialIndex={currentIndex}
          initialAnswers={answers}
          quizStartTime={quizStartTime}
          totalDuration={TOTAL_DURATION_SECONDS}
          onProgressUpdate={handleProgressUpdate}
          onComplete={handleQuizComplete}
        />
      )}

      {step === 'result' && (
        <ResultScreen 
          studentData={studentData}
          resultData={resultData}
          onRestart={handleRestart}
          onTelegramSent={handleTelegramSent}
        />
      )}
    </div>
  );
}
