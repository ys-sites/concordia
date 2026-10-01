import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Mail, CheckCircle2, AlertCircle, MessageSquare, User, AtSign, Loader2 } from 'lucide-react';
import { audio } from '../utils/audio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Feedback or Collaboration');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const isSubmittingRef = useRef(false);

  // Reset status when opened
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
      isSubmittingRef.current = false;
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current || status === 'submitting') return;
    if (!email.trim() || !message.trim()) return;

    isSubmittingRef.current = true;
    setStatus('submitting');
    audio.playClick();

    try {
      const response = await fetch('https://formsubmit.co/ajax/sharafath2001@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim() || 'Visitor',
          email: email.trim(),
          _subject: `[Concordia Hub] ${subject}`,
          category: subject,
          message: message.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      let isSuccess = false;
      let errText = '';

      try {
        const data = await response.json();
        if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
          isSuccess = true;
        } else {
          errText = data.message || 'Submission could not be completed.';
        }
      } catch {
        if (response.ok) {
          isSuccess = true;
        } else {
          errText = 'Could not send message. Please try again.';
        }
      }

      if (isSuccess) {
        setStatus('success');
        audio.playCorrect();
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(errText || 'Could not send message. Please try again or email directly.');
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Could not send message. Please check your connection and try again.');
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div 
        className="contact-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          className="contact-modal-close" 
          onClick={onClose}
          aria-label="Close contact modal"
        >
          <X size={18} />
        </button>

        {status === 'success' ? (
          <div className="contact-success-state">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={48} className="text-emerald" />
            </div>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-desc">
              Thank you for reaching out. Your note has been delivered. We will review it and get back to you as soon as possible.
            </p>
            <div className="success-actions">
              <button 
                className="action-btn primary-glow-btn"
                onClick={() => setStatus('idle')}
              >
                Send Another Message
              </button>
              <button 
                className="action-btn secondary-btn"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="contact-modal-header">
              <div className="contact-header-badge">
                <Mail size={15} />
                <span>Contact & Feedback</span>
              </div>
              <h2 className="contact-modal-title">Reach Out</h2>
              <p className="contact-modal-subtitle">
                Have feedback regarding practice questions, suggestions for the study hub, or want to connect? Send a message directly.
              </p>
            </div>

            {/* Error Banner */}
            {status === 'error' && (
              <div className="contact-error-banner">
                <AlertCircle size={16} />
                <span>{errorMessage || 'Failed to send message. Please check your connection and try again.'}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field-group">
                  <label htmlFor="contact-name" className="contact-field-label">
                    <User size={13} />
                    <span>Your Name (Optional)</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex M. or Anonymous"
                    className="contact-input"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="contact-field-group">
                  <label htmlFor="contact-email" className="contact-field-label">
                    <AtSign size={13} />
                    <span>Your Email <strong className="text-rose">*</strong></span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="contact-input"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="contact-field-group">
                <label htmlFor="contact-subject" className="contact-field-label">
                  <MessageSquare size={13} />
                  <span>Topic / Category</span>
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="contact-select"
                  disabled={status === 'submitting'}
                >
                  <option value="General Feedback or Collaboration">General Feedback or Collaboration</option>
                  <option value="Practice Drill Feedback">Practice Drill / Quiz Question Feedback</option>
                </select>
              </div>

              <div className="contact-field-group">
                <label htmlFor="contact-message" className="contact-field-label">
                  <span>Message <strong className="text-rose">*</strong></span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your feedback, suggestions, or comments here..."
                  className="contact-textarea"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact-form-footer">
                <button
                  type="submit"
                  disabled={status === 'submitting' || !email.trim() || !message.trim()}
                  className="action-btn primary-glow-btn contact-submit-btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
