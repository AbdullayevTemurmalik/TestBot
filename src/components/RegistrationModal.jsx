import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Clock, 
  Undo2, 
  Shuffle, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  X,
  ArrowRight
} from 'lucide-react';

export default function RegistrationModal({ studentData, onConfirm, onCancel }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onCancel} />
      
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon-badge">
            <AlertTriangle className="icon-alert" size={26} />
          </div>
          <div className="modal-title-wrap">
            <h2 className="modal-title">Diqqat! Test qoidalari</h2>
            <p className="modal-subtitle">Iltimos, testni boshlashdan oldin shartlarni diqqat bilan o'qing</p>
          </div>
          <button className="modal-close-btn" onClick={onCancel} title="Bekor qilish">
            <X size={20} />
          </button>
        </div>

        {/* Student preview card */}
        <div className="student-badge-preview">
          <div className="badge-item">
            <span className="badge-label">O'quvchi:</span>
            <span className="badge-value">{studentData.fullName}</span>
          </div>
          <div className="badge-divider" />
          <div className="badge-item">
            <span className="badge-label">Sinf:</span>
            <span className="badge-value class-badge">{studentData.className.toUpperCase()}</span>
          </div>
        </div>

        {/* Rules List */}
        <div className="rules-list">
          <div className="rule-item highlight-rule">
            <div className="rule-icon-box danger">
              <Undo2 size={20} />
            </div>
            <div className="rule-content">
              <h4>Orqaga qaytish imkoni yo'q!</h4>
              <p>Har bir savolga javob berib, keyingisiga o'tganingizdan so'ng, oldingi savollarga qaytib javobni o'zgartira olmaysiz.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-box">
              <Clock size={20} />
            </div>
            <div className="rule-content">
              <h4>40 daqiqa vaqt beriladi</h4>
              <p>Jami 40 ta savol uchun 40 daqiqa vaqt ajratiladi. Vaqt tugagach test avtomatik ravishda yakunlanadi.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-box">
              <Shuffle size={20} />
            </div>
            <div className="rule-content">
              <h4>40 ta tasodifiy savol</h4>
              <p>100 ta savol bazasidan har bir ishtirokchiga mutlaqo alohida, tasodifiy 40 ta savol tanlab beriladi.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-box">
              <Send size={20} />
            </div>
            <div className="rule-content">
              <h4>Avtomatik Telegram hisoboti</h4>
              <p>Test yakunlangani zahoti sizning to'plagan ballingiz va natijangiz ustozning Telegram botiga yetkaziladi.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div className="rule-content">
              <h4>Xavfsizlik va himoya</h4>
              <p>Test davomida sahifani yangilash (reload) yoki brauzerni tasodifiy yopishdan saqlangan holatda davom etishingiz mumkin.</p>
            </div>
          </div>
        </div>

        {/* Agreement checkbox */}
        <div className="modal-agreement">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)} 
            />
            <span className="checkmark">
              {agreed && <CheckCircle2 size={16} />}
            </span>
            <span className="checkbox-text">
              Yuqoridagi barcha shart va qoidalar bilan to'liq tanishdim va testni boshlashga tayyorman.
            </span>
          </label>
        </div>

        {/* Footer actions */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onCancel}>
            Ortga qaytish
          </button>
          <button 
            className={`btn-primary ${!agreed ? 'btn-disabled' : ''}`}
            disabled={!agreed}
            onClick={onConfirm}
          >
            <span>Testni boshlash</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
