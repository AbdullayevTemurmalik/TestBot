import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  RotateCcw, 
  ShieldAlert, 
  X, 
  Check, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function ConfirmModal({ 
  isOpen, 
  type = 'warning', // 'warning' | 'danger' | 'time' | 'reload'
  title, 
  message, 
  confirmText = "Tushundim", 
  cancelText = null, 
  onConfirm, 
  onCancel 
}) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'time':
        return <Clock size={28} className="text-amber-500" />;
      case 'danger':
        return <ShieldAlert size={28} className="text-rose-500" />;
      case 'reload':
        return <RotateCcw size={28} className="text-sky-500" />;
      case 'warning':
      default:
        return <AlertTriangle size={28} className="text-amber-500" />;
    }
  };

  const getBadgeClass = () => {
    switch (type) {
      case 'time': return 'modal-badge-amber';
      case 'danger': return 'modal-badge-rose';
      case 'reload': return 'modal-badge-sky';
      case 'warning':
      default: return 'modal-badge-amber';
    }
  };

  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal-backdrop" onClick={onCancel || onConfirm} />
      
      <div className="confirm-modal-box">
        <div className="confirm-modal-header">
          <div className={`confirm-icon-badge ${getBadgeClass()}`}>
            {getIcon()}
          </div>
          {onCancel && (
            <button className="confirm-close-btn" onClick={onCancel}>
              <X size={18} />
            </button>
          )}
        </div>

        <div className="confirm-modal-body">
          <h3 className="confirm-title">{title}</h3>
          <p className="confirm-message">{message}</p>
        </div>

        <div className="confirm-modal-footer">
          {cancelText && onCancel && (
            <button type="button" className="confirm-btn-cancel" onClick={onCancel}>
              <span>{cancelText}</span>
            </button>
          )}
          <button 
            type="button" 
            className={`confirm-btn-action ${type === 'danger' ? 'danger-action' : 'primary-action'}`} 
            onClick={onConfirm}
          >
            <span>{confirmText}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
