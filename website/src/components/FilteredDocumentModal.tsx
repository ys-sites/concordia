import React, { useState, useEffect, useMemo } from 'react';
import {
  Lock,
  Unlock,
  KeyRound,
  X,
  FileText,
  Eye,
  ExternalLink,
  Video,
  BookOpen,
  GraduationCap,
  PlayCircle,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { CourseDocument } from '../types';
import { MathText } from '../utils/mathRenderer';
import { MIAE221_MIDTERM_QUESTIONS, MidtermQuestionDetail } from '../data/extra/miae221_midterm';

interface FilteredDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewPdf: (doc: CourseDocument) => void;
  onStartMidtermDrill: () => void;
}

const PASSWORD_KEY = '1001Nuit';
const SESSION_STORAGE_KEY = 'miae221_filtered_doc_unlocked';

export const DOC_FALL_2024: CourseDocument = {
  id: 'MIAE221:midterm-fall-2024',
  courseId: 'MIAE221',
  categoryId: '06 - Studocu - Midterms and Tests',
  categoryTitle: 'Midterms and Tests',
  title: '112451179 - Midterm Solutions for MIAE 221 - Fall 2024 Exam Review',
  filename: '112451179 - Midterm Solutions for MIAE 221 - Fall 2024 Exam Review.pdf',
  relativePath:
    'Miae 221/06 - Studocu - Midterms and Tests/112451179 - Midterm Solutions for MIAE 221 - Fall 2024 Exam Review.pdf',
  fileSizeBytes: 1565626,
  tags: ['Midterm', 'Exam', 'Fall 2024', 'Solutions'],
  summary: 'Official Fall 2024 midterm examination review problems with complete step-by-step solutions.'
};

export const DOC_WINTER_2025: CourseDocument = {
  id: 'MIAE221:midterm-a-2025',
  courseId: 'MIAE221',
  categoryId: '06 - Studocu - Midterms and Tests',
  categoryTitle: 'Midterms and Tests',
  title: '124560047 - MIAE 221-Midterm A-2025 Exam Solutions and Key Concepts',
  filename: '124560047 - MIAE 221-Midterm A-2025 Exam Solutions and Key Concepts.pdf',
  relativePath:
    'Miae 221/06 - Studocu - Midterms and Tests/124560047 - MIAE 221-Midterm A-2025 Exam Solutions and Key Concepts.pdf',
  fileSizeBytes: 1403173,
  tags: ['Midterm', 'Exam', 'Winter 2025', 'Solutions'],
  summary: 'MIAE 221 Midterm A 2025 / Winter 2026 exam solutions and key theoretical concepts.'
};

export const DOC_FILTERED_GUIDE: CourseDocument = {
  id: 'MIAE221:filtered-document-master-guide',
  courseId: 'MIAE221',
  categoryId: '06 - Studocu - Midterms and Tests',
  categoryTitle: 'Midterms and Tests',
  title: 'Filtered document - Midterm Master Solutions & Video Guide',
  filename: 'Filtered document - Midterm Master Solutions & Video Guide.pdf',
  relativePath:
    'Miae 221/06 - Studocu - Midterms and Tests/Filtered document - Midterm Master Solutions & Video Guide.pdf',
  fileSizeBytes: 456202,
  isMasterGuide: true,
  tags: ['Filtered document', 'Master Guide', 'Winter 2026', 'Video Solutions'],
  summary: 'Complete 40-question midterm master solution guide with slide mappings and YouTube video links.'
};

export const FilteredDocumentModal: React.FC<FilteredDocumentModalProps> = ({
  isOpen,
  onClose,
  onViewPdf,
  onStartMidtermDrill
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  // Check session storage on mount
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_STORAGE_KEY) === '1') {
      setIsUnlocked(true);
    }
  }, []);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setPasswordInput('');
      setHasAttempted(false);
    }
  }, [isOpen]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttempted(true);
    if (passwordInput === PASSWORD_KEY) {
      audio.playCorrect();
      setIsUnlocked(true);
      sessionStorage.setItem(SESSION_STORAGE_KEY, '1');
    } else {
      audio.playIncorrect();
    }
  };

  const handleLockAgain = () => {
    audio.playClick();
    setIsUnlocked(false);
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setPasswordInput('');
    setHasAttempted(false);
  };

  const toggleExpand = (id: string) => {
    audio.playClick();
    setExpandedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = useMemo(() => {
    return MIAE221_MIDTERM_QUESTIONS.filter((q) => {
      // Category filter
      if (selectedFilter === 'crystallography') {
        if (!['Q_MIAE221_MID_01', 'Q_MIAE221_MID_02', 'Q_MIAE221_MID_03', 'Q_MIAE221_MID_04'].includes(q.id))
          return false;
      } else if (selectedFilter === 'densities_xrd') {
        if (!['Q_MIAE221_MID_05', 'Q_MIAE221_MID_06', 'Q_MIAE221_MID_07'].includes(q.id)) return false;
      } else if (selectedFilter === 'defects') {
        if (!['Q_MIAE221_MID_08', 'Q_MIAE221_MID_09', 'Q_MIAE221_MID_10'].includes(q.id)) return false;
      } else if (selectedFilter === 'bonding_diffusion') {
        if (!['Q_MIAE221_MID_11', 'Q_MIAE221_MID_12', 'Q_MIAE221_MID_13', 'Q_MIAE221_MID_14'].includes(q.id))
          return false;
      } else if (selectedFilter === 'tensile') {
        if (
          ![
            'Q_MIAE221_MID_15',
            'Q_MIAE221_MID_16',
            'Q_MIAE221_MID_17',
            'Q_MIAE221_MID_18',
            'Q_MIAE221_MID_19',
            'Q_MIAE221_MID_20'
          ].includes(q.id)
        )
          return false;
      } else if (selectedFilter === 'true_false') {
        const num = parseInt(q.id.split('_').pop() || '0', 10);
        if (num < 21) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesRef = q.teacherDeck.toLowerCase().includes(query) || q.textbookRef.toLowerCase().includes(query);
        if (!matchesQ && !matchesTopic && !matchesRef) return false;
      }

      return true;
    });
  }, [selectedFilter, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="pdf-modal-backdrop" onClick={onClose} style={{ zIndex: 9999 }}>
      <div
        className="filtered-doc-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: isUnlocked ? '1120px' : '520px',
          maxHeight: '92vh',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(244, 63, 94, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'max-width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, rgba(244, 63, 94, 0.15), rgba(15, 23, 42, 0.9))'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: isUnlocked ? 'rgba(16, 185, 129, 0.18)' : 'rgba(244, 63, 94, 0.18)',
                color: isUnlocked ? '#10b981' : '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${isUnlocked ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`
              }}
            >
              {isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  Filtered document
                </h2>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: isUnlocked ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    color: isUnlocked ? '#10b981' : '#f43f5e',
                    border: `1px solid ${isUnlocked ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`
                  }}
                >
                  {isUnlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#94a3b8' }}>
                {isUnlocked
                  ? 'MIAE 221 Midterm Exam Master Solutions & Video Readiness System'
                  : 'MIAE 221 · Protected Examination File'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isUnlocked && (
              <button
                onClick={handleLockAgain}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#94a3b8',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Lock size={13} />
                <span>Lock</span>
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: 'none',
                color: '#94a3b8',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {!isUnlocked ? (
          /* Password Prompt Screen */
          <div style={{ padding: '36px 28px', textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(244, 63, 94, 0.12)',
                color: '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: '1px solid rgba(244, 63, 94, 0.25)'
              }}
            >
              <KeyRound size={32} />
            </div>

            <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 700 }}>
              Access Filtered document
            </h3>
            <p style={{ margin: '0 auto 24px', fontSize: '13px', color: '#94a3b8', maxWidth: '360px', lineHeight: 1.5 }}>
              This document is protected. Enter the access password to unlock the midterm exam review files and solution mapping system.
            </p>

            <form onSubmit={handleUnlock} style={{ maxWidth: '360px', margin: '0 auto' }}>
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter access password…"
                  autoFocus
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    color: '#f8fafc',
                    fontSize: '14px',
                    outline: 'none',
                    textAlign: 'center',
                    letterSpacing: '0.1em'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#f43f5e',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(244, 63, 94, 0.4)'
                }}
              >
                <Unlock size={16} />
                <span>Unlock Document</span>
              </button>
            </form>

            {/* Note when password doesn't work */}
            {hasAttempted && passwordInput !== PASSWORD_KEY && (
              <div
                style={{
                  marginTop: '20px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(234, 179, 8, 0.12)',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                  color: '#fde047',
                  fontSize: '13px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  maxWidth: '380px',
                  margin: '20px auto 0'
                }}
              >
                <AlertTriangle size={16} style={{ flexShrink: 0 }} />
                <span>This file contains data of the quiz, so its not importent</span>
              </div>
            )}
          </div>
        ) : (
          /* Unlocked Full System Screen */
          <div style={{ overflowY: 'auto', padding: '24px', flex: 1 }}>
            {/* Quick Hero Banner with Midterm Drill Launch */}
            <div
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                padding: '20px 24px',
                marginBottom: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={18} style={{ color: '#f43f5e' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Special Exam Skill Drill
                  </span>
                </div>
                <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 800 }}>
                  Winter 2026 / 2025 Midterm Exam Drill (40 Questions)
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#cbd5e1', maxWidth: '640px' }}>
                  Practice all 40 official midterm exam questions with instant scoring, KaTeX equations, and worked derivations.
                </p>
              </div>

              <button
                onClick={() => {
                  audio.playClick();
                  onClose();
                  onStartMidtermDrill();
                }}
                style={{
                  padding: '12px 20px',
                  borderRadius: '10px',
                  backgroundColor: '#f43f5e',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(244, 63, 94, 0.4)'
                }}
              >
                <PlayCircle size={18} />
                <span>Launch Midterm Drill</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Section 1: Midterm Exam PDF Documents */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={18} style={{ color: '#f43f5e' }} />
                  <span>Official Midterm Examination Documents</span>
                </h3>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>3 Published Reference Files</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '12px'
                }}
              >
                {/* Doc 1: Fall 2024 */}
                <div
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(59, 130, 246, 0.15)',
                          color: '#60a5fa',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        Fall 2024 Review
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>1.5 MB · 6 Pages</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '13.5px', marginBottom: '4px', lineHeight: 1.4 }}>
                      112451179 - Midterm Solutions for MIAE 221 - Fall 2024 Exam Review
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                      Authentic exam solutions by Dr. Martin Pugh with worked derivations and Scantron answers.
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    <button
                      onClick={() => {
                        audio.playClick();
                        onViewPdf(DOC_FALL_2024);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#f43f5e',
                        border: 'none',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Eye size={14} />
                      <span>View in Viewer</span>
                    </button>
                    <a
                      href={getPdfUrl(DOC_FALL_2024.relativePath)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#f8fafc',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>New Tab</span>
                    </a>
                  </div>
                </div>

                {/* Doc 2: Midterm A 2025 */}
                <div
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          color: '#34d399',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        Midterm A 2025
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>1.4 MB · 6 Pages</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '13.5px', marginBottom: '4px', lineHeight: 1.4 }}>
                      124560047 - MIAE 221-Midterm A-2025 Exam Solutions and Key Concepts
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                      Full exam solutions with step-by-step calculations and key conceptual highlights.
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    <button
                      onClick={() => {
                        audio.playClick();
                        onViewPdf(DOC_WINTER_2025);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#f43f5e',
                        border: 'none',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Eye size={14} />
                      <span>View in Viewer</span>
                    </button>
                    <a
                      href={getPdfUrl(DOC_WINTER_2025.relativePath)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#f8fafc',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>New Tab</span>
                    </a>
                  </div>
                </div>

                {/* Doc 3: Filtered Document Master Guide */}
                <div
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(244, 63, 94, 0.3)',
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(244, 63, 94, 0.15)',
                          color: '#f43f5e',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(244, 63, 94, 0.3)'
                        }}
                      >
                        Master Guide PDF
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>456 KB · Complete Solution Sheet</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '13.5px', marginBottom: '4px', lineHeight: 1.4 }}>
                      Filtered document - Midterm Master Solutions & Video Guide
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                      Comprehensive question-by-question breakdown, teacher slide citations, and textbook links.
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    <button
                      onClick={() => {
                        audio.playClick();
                        onViewPdf(DOC_FILTERED_GUIDE);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#f43f5e',
                        border: 'none',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Eye size={14} />
                      <span>View in Viewer</span>
                    </button>
                    <a
                      href={getPdfUrl(DOC_FILTERED_GUIDE.relativePath)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#f8fafc',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>New Tab</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Detailed Question-by-Question Curriculum & Video Mapping */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700 }}>
                    Question-by-Question Curriculum & Video Solutions (Winter 2026 Exam)
                  </h3>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#94a3b8' }}>
                    Every question mapped to Teacher Slides, Callister Textbook, and Organic Chemistry Tutor videos
                  </p>
                </div>

                <div style={{ position: 'relative', minWidth: '220px' }}>
                  <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics, questions…"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '8px 12px 8px 32px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                      color: '#f8fafc',
                      fontSize: '12.5px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Topic Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {[
                  { id: 'all', label: 'All 40 Questions' },
                  { id: 'crystallography', label: 'Crystallography (Q1–4)' },
                  { id: 'densities_xrd', label: 'APF & XRD (Q5–7)' },
                  { id: 'defects', label: 'Defects (Q8–10)' },
                  { id: 'bonding_diffusion', label: 'Bonding & Diffusion (Q11–14)' },
                  { id: 'tensile', label: 'Stress-Strain Curve (Q15–20)' },
                  { id: 'true_false', label: 'True / False (Q21–40)' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      audio.playClick();
                      setSelectedFilter(tab.id);
                    }}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: selectedFilter === tab.id ? '#f43f5e' : 'rgba(255, 255, 255, 0.1)',
                      backgroundColor: selectedFilter === tab.id ? 'rgba(244, 63, 94, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      color: selectedFilter === tab.id ? '#f43f5e' : '#94a3b8',
                      cursor: 'pointer'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Questions List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredQuestions.map((q: MidtermQuestionDetail, idx) => {
                  const isExpanded = !!expandedQuestions[q.id];
                  return (
                    <div
                      key={q.id}
                      style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Question Summary Bar */}
                      <div
                        onClick={() => toggleExpand(q.id)}
                        style={{
                          padding: '14px 18px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '12px',
                          cursor: 'pointer',
                          userSelect: 'none'
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                backgroundColor: 'rgba(244, 63, 94, 0.15)',
                                color: '#f43f5e',
                                padding: '2px 8px',
                                borderRadius: '4px'
                              }}
                            >
                              Question {q.id.replace('Q_MIAE221_MID_', '')}
                            </span>
                            <span style={{ fontSize: '11.5px', color: '#cbd5e1', fontWeight: 600 }}>
                              {q.topic}
                            </span>
                            <span style={{ fontSize: '11px', color: '#64748b' }}>· {q.difficulty}</span>
                          </div>

                          <div style={{ fontSize: '13.5px', color: '#f8fafc', lineHeight: 1.5, fontWeight: 500 }}>
                            <MathText text={q.question} />
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                          <a
                            href={q.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              audio.playClick();
                            }}
                            title={`Watch "${q.youtubeTitle}" on YouTube`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '6px 10px',
                              borderRadius: '6px',
                              backgroundColor: 'rgba(239, 68, 68, 0.12)',
                              color: '#ef4444',
                              border: '1px solid rgba(239, 68, 68, 0.3)',
                              fontSize: '11.5px',
                              fontWeight: 600,
                              textDecoration: 'none'
                            }}
                          >
                            <Video size={13} />
                            <span>Video Solution</span>
                          </a>

                          <button
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: '#94a3b8',
                              cursor: 'pointer',
                              padding: '4px'
                            }}
                          >
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div
                          style={{
                            padding: '16px 18px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            backgroundColor: 'rgba(15, 23, 42, 0.4)'
                          }}
                        >
                          {/* Options Grid */}
                          <div style={{ marginBottom: '14px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', marginBottom: '6px' }}>
                              Examination Options:
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '6px' }}>
                              {q.options.map((opt, i) => {
                                const isCorrect = i === q.correctIndex;
                                return (
                                  <div
                                    key={i}
                                    style={{
                                      padding: '8px 12px',
                                      borderRadius: '6px',
                                      fontSize: '12.5px',
                                      border: isCorrect ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                                      backgroundColor: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                                      color: isCorrect ? '#34d399' : '#cbd5e1',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px'
                                    }}
                                  >
                                    <span style={{ fontWeight: 700, opacity: 0.8 }}>
                                      {String.fromCharCode(65 + i)})
                                    </span>
                                    <span style={{ flex: 1 }}>
                                      <MathText text={opt} />
                                    </span>
                                    {isCorrect && <CheckCircle2 size={14} style={{ color: '#10b981', flexShrink: 0 }} />}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Reference Cards */}
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                              gap: '10px',
                              marginBottom: '14px'
                            }}
                          >
                            {/* Teacher Slide Card */}
                            <div
                              style={{
                                padding: '10px 14px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                                border: '1px solid rgba(59, 130, 246, 0.25)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#60a5fa', marginBottom: '3px' }}>
                                <GraduationCap size={14} />
                                <span>Teacher Lecture Slides</span>
                              </div>
                              <div style={{ fontSize: '12px', color: '#f8fafc', fontWeight: 600 }}>
                                {q.teacherDeck}
                              </div>
                              <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                                {q.teacherSlides}
                              </div>
                            </div>

                            {/* Callister Textbook Card */}
                            <div
                              style={{
                                padding: '10px 14px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(168, 85, 247, 0.08)',
                                border: '1px solid rgba(168, 85, 247, 0.25)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#c084fc', marginBottom: '3px' }}>
                                <BookOpen size={14} />
                                <span>Callister Textbook</span>
                              </div>
                              <div style={{ fontSize: '12px', color: '#f8fafc', fontWeight: 600 }}>
                                Materials Science & Engineering (10th/9th Ed.)
                              </div>
                              <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                                {q.textbookRef}
                              </div>
                            </div>

                            {/* YouTube Video Card */}
                            <div
                              style={{
                                padding: '10px 14px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                                border: '1px solid rgba(239, 68, 68, 0.25)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#f87171', marginBottom: '3px' }}>
                                <Video size={14} />
                                <span>Curated YouTube Video</span>
                              </div>
                              <div style={{ fontSize: '12px', color: '#f8fafc', fontWeight: 600 }}>
                                {q.youtubeChannel}
                              </div>
                              <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                                {q.youtubeTitle}
                              </div>
                            </div>
                          </div>

                          {/* Derivation / Step-by-Step Breakdown */}
                          <div
                            style={{
                              padding: '12px 14px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(15, 23, 42, 0.7)',
                              border: '1px solid rgba(255, 255, 255, 0.06)'
                            }}
                          >
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', marginBottom: '6px' }}>
                              Worked Derivation & Core Concept:
                            </div>
                            <p style={{ margin: '0 0 8px', fontSize: '12.5px', color: '#cbd5e1', lineHeight: 1.5 }}>
                              {q.explanation.coreConcept}
                            </p>
                            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12.5px', color: '#e2e8f0', lineHeight: 1.6 }}>
                              {q.explanation.stepByStep.map((step, sIdx) => (
                                <li key={sIdx} style={{ marginBottom: '3px' }}>
                                  <MathText text={step} />
                                </li>
                              ))}
                            </ul>
                            {q.explanation.commonTrap && (
                              <div style={{ marginTop: '8px', fontSize: '12px', color: '#fbbf24' }}>
                                <strong>⚠️ Common Exam Pitfall:</strong> {q.explanation.commonTrap}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
