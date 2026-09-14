import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';
import { getInputDraft, saveInputDraft } from '../services/storage';

export default function RegistrationScreen({ initialData, onProceed }) {
  // Boshlang'ich qiymatni initialData yoki draftdan olish
  const [fullName, setFullName] = useState(() => {
    return initialData?.fullName || getInputDraft()?.fullName || '';
  });

  const [className, setClassName] = useState(() => {
    return initialData?.className || getInputDraft()?.className || '';
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ fullName: false, className: false });

  // Input o'zgarganda real vaqtda draftni xotiraga saqlash
  const handleNameChange = (val) => {
    setFullName(val);
    saveInputDraft({ fullName: val, className });
    if (touched.fullName) {
      setErrors(prev => ({ ...prev, fullName: validateFullName(val) }));
    }
  };

  // Sinf formatlash va real vaqtda saqlash
  const handleClassChange = (e) => {
    let val = e.target.value.toLowerCase().replace(/\s+/g, '');
    
    // Agar foydalanuvchi to'g'ridan-to'g'ri raqam va harf yozsa (masalan '11b'), avtomatik '11-b' qilish
    if (/^\d{1,2}[a-zа-яёўқғҳ]$/i.test(val) && !val.includes('-')) {
      const numPart = val.match(/^\d+/)[0];
      const letterPart = val.slice(numPart.length);
      val = `${numPart}-${letterPart}`;
    }

    if (val.length > 4) {
      val = val.slice(0, 4);
    }

    setClassName(val);
    saveInputDraft({ fullName, className: val });

    if (touched.className) {
      setErrors(prev => ({ ...prev, className: validateClassName(val) }));
    }
  };

  const validateClassName = (val) => {
    if (!val.trim()) {
      return "Sinfni kiritish shart (masalan: 11-b)";
    }

    const regex = /^(1[0-1]|[1-9])-([a-zа-яёўқғҳ])$/i;
    if (!regex.test(val)) {
      const numMatch = val.match(/^(\d+)/);
      if (numMatch) {
        const gradeNum = parseInt(numMatch[1], 10);
        if (gradeNum > 11) {
          return "Maksimal sinf 11-sinf! 12 yoki undan katta sinf qabul qilinmaydi.";
        }
        if (gradeNum === 0) {
          return "Sinf 1 dan 11 gacha bo'lishi kerak.";
        }
      }
      return "Sinf formati noto'g'ri! Masalan: 11-b, 9-a, 10-v (Maksimal: 11-b)";
    }
    return "";
  };

  const validateFullName = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Ism va familiyangizni kiriting";
    }
    const parts = trimmed.split(/\s+/);
    if (parts.length < 2) {
      return "Iltimos, ism va familiyangizni to'liq kiriting (masalan: Aliyev Vali)";
    }
    if (trimmed.length < 5) {
      return "Ism va familiya kamida 5 ta harfdan iborat bo'lishi kerak";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ fullName: true, className: true });

    const nameErr = validateFullName(fullName);
    const classErr = validateClassName(className);

    setErrors({
      fullName: nameErr,
      className: classErr
    });

    if (!nameErr && !classErr) {
      const cleanData = {
        fullName: fullName.trim(),
        className: className.trim().toLowerCase()
      };
      saveInputDraft(cleanData);
      onProceed(cleanData);
    }
  };

  const quickClasses = ['11-a', '11-b', '10-a', '10-b', '9-a', '9-b', '8-a', '7-a'];

  const isClassValid = className && !validateClassName(className);
  const isNameValid = fullName && !validateFullName(fullName);

  return (
    <div className="registration-page">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <div className="registration-card">
        {/* Brand header */}
        <div className="card-top-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>Respublika Fan Olimpiadasi</span>
        </div>

        <div className="registration-header">
          <div className="olympiad-icon-wrapper">
            <BookOpen className="olympiad-icon" size={32} />
          </div>
          <h1 className="main-title">Informatika va Dasturlash</h1>
          <p className="subtitle">
            Bilimingizni sinovdan o'tkazing! 100 ta savoldan tasodifiy 40 ta test savollari.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="features-grid">
          <div className="feature-pill">
            <Clock size={18} className="feature-icon" />
            <div className="feature-text">
              <span className="feature-val">40 Daqiqa</span>
              <span className="feature-desc">Vaqt chegarasi</span>
            </div>
          </div>

          <div className="feature-pill">
            <Award size={18} className="feature-icon" />
            <div className="feature-text">
              <span className="feature-val">40 Ta Savol</span>
              <span className="feature-desc">Tasodifiy tanlov</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Ism Familiya input */}
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              <span>Ism va Familiyangiz</span>
              <span className="required-star">*</span>
            </label>
            <div className={`input-wrapper ${touched.fullName && errors.fullName ? 'has-error' : ''} ${isNameValid ? 'is-valid' : ''}`}>
              <User className="input-icon" size={20} />
              <input 
                id="fullName"
                type="text" 
                className="custom-input"
                placeholder="Masalan: Abdullayev Temur"
                value={fullName}
                onChange={(e) => handleNameChange(e.target.value)}
                onBlur={() => {
                  setTouched(prev => ({ ...prev, fullName: true }));
                  setErrors(prev => ({ ...prev, fullName: validateFullName(fullName) }));
                }}
                autoComplete="name"
              />
              {isNameValid && <CheckCircle2 className="valid-icon" size={18} />}
            </div>
            {touched.fullName && errors.fullName && (
              <div className="error-message">
                <AlertCircle size={14} />
                <span>{errors.fullName}</span>
              </div>
            )}
          </div>

          {/* Sinf input */}
          <div className="form-group">
            <div className="label-with-hint">
              <label className="form-label" htmlFor="className">
                <span>Sinfingiz</span>
                <span className="required-star">*</span>
              </label>
              <span className="label-hint">Format: 1-11 va harf (Maksimal: 11-b)</span>
            </div>
            <div className={`input-wrapper ${touched.className && errors.className ? 'has-error' : ''} ${isClassValid ? 'is-valid' : ''}`}>
              <GraduationCap className="input-icon" size={20} />
              <input 
                id="className"
                type="text" 
                className="custom-input class-input-style"
                placeholder="Masalan: 11-b"
                value={className}
                maxLength={4}
                onChange={handleClassChange}
                onBlur={() => {
                  setTouched(prev => ({ ...prev, className: true }));
                  setErrors(prev => ({ ...prev, className: validateClassName(className) }));
                }}
              />
              {isClassValid && <CheckCircle2 className="valid-icon" size={18} />}
            </div>

            {/* Quick class suggestions */}
            <div className="quick-suggestions">
              <span className="suggestions-title">Tezkor tanlash:</span>
              <div className="suggestions-pills">
                {quickClasses.map((qc) => (
                  <button
                    key={qc}
                    type="button"
                    className={`suggestion-pill ${className.toLowerCase() === qc ? 'active' : ''}`}
                    onClick={() => {
                      setClassName(qc);
                      saveInputDraft({ fullName, className: qc });
                      setTouched(prev => ({ ...prev, className: true }));
                      setErrors(prev => ({ ...prev, className: '' }));
                    }}
                  >
                    {qc}
                  </button>
                ))}
              </div>
            </div>

            {touched.className && errors.className && (
              <div className="error-message">
                <AlertCircle size={14} />
                <span>{errors.className}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-start-btn">
            <span>Keyingi bosqich: Qoidalar bilan tanishish</span>
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Security & System Info Footer */}
        <div className="card-footer-info">
          <HelpCircle size={15} />
          <span>Test natijalari bevosita ustozning Telegram profiliga yuboriladi</span>
        </div>
      </div>
    </div>
  );
}
