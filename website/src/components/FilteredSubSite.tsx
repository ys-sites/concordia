import React, { useState, useEffect, useMemo } from 'react';
import {
  Lock,
  Unlock,
  KeyRound,
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
  ArrowRight,
  ArrowLeft,
  Volume2,
  VolumeX,
  Layers,
  HelpCircle
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { CourseDocument } from '../types';
import { MathText } from '../utils/mathRenderer';
import { MIAE221_MIDTERM_QUESTIONS, MidtermQuestionDetail } from '../data/extra/miae221_midterm';
import { PdfViewerModal } from './PdfViewerModal';
import { Footer } from './Footer';

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

export const FilteredSubSite: React.FC = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [activePdfDoc, setActivePdfDoc] = useState<CourseDocument | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Check session storage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_STORAGE_KEY) === '1') {
      setIsUnlocked(true);
    }
  }, []);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audio.enabled = next;
  };

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

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sub-site Header Navigation */}
      <header className="navbar-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="nav-container">
          <div className="nav-left">
            <a href="/#/" className="nav-logo" onClick={() => audio.playClick()}>
              <div className="nav-logo-mark" style={{ backgroundColor: '#f43f5e' }}>
                <Lock size={18} color="#ffffff" />
              </div>
              <div className="nav-logo-text">
                <span className="nav-title">Filtered document</span>
                <span className="nav-subtitle" style={{ color: '#f43f5e' }}>MIAE 221 · Sub-site Gateway</span>
              </div>
            </a>
          </div>

          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="/#/course/MIAE221"
              className="nav-btn nav-ghost-btn"
              onClick={() => audio.playClick()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'var(--text-secondary)'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to MIAE 221</span>
            </a>

            <button
              className="nav-btn nav-ghost-btn"
              onClick={handleToggleSound}
              title={soundEnabled ? 'Disable Audio Effects' : 'Enable Audio Effects'}
              aria-label="Toggle sound"
            >
              {soundEnabled ? <Volume2 size={18} color="#10b981" /> : <VolumeX size={18} color="#94a3b8" />}
            </button>

            {isUnlocked && (
              <button
                onClick={handleLockAgain}
                className="nav-btn"
                style={{
                  background: 'rgba(244, 63, 94, 0.12)',
                  borderColor: 'rgba(244, 63, 94, 0.35)',
                  color: '#f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Lock size={14} />
                <span>Lock Session</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Sub-Site Viewport */}
      <main className="main-content-layout" style={{ flex: 1, padding: '32px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        {!isUnlocked ? (
          /* Password Protected Lock Screen */
          <div
            style={{
              maxWidth: '480px',
              margin: '60px auto',
              padding: '40px 32px',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 35px rgba(244, 63, 94, 0.12)',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '18px',
                backgroundColor: 'rgba(244, 63, 94, 0.12)',
                color: '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                border: '1px solid rgba(244, 63, 94, 0.3)'
              }}
            >
              <KeyRound size={34} />
            </div>

            <h1 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em', color: '#f8fafc' }}>
              Access Filtered document
            </h1>
            <p style={{ margin: '0 auto 28px', fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>
              This sub-site contains protected examination review solutions and question analysis. Enter the access password to continue.
            </p>

            <form onSubmit={handleUnlock}>
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
                    padding: '14px 18px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    color: '#f8fafc',
                    fontSize: '15px',
                    outline: 'none',
                    textAlign: 'center',
                    letterSpacing: '0.12em'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '13px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#f43f5e',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 18px rgba(244, 63, 94, 0.45)',
                  transition: 'transform 0.15s ease'
                }}
              >
                <Unlock size={18} />
                <span>Unlock Sub-site</span>
              </button>
            </form>

            {/* Note when password doesn't work */}
            {hasAttempted && passwordInput !== PASSWORD_KEY && (
              <div
                style={{
                  marginTop: '24px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(234, 179, 8, 0.12)',
                  border: '1px solid rgba(234, 179, 8, 0.35)',
                  color: '#fde047',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  lineHeight: 1.4
                }}
              >
                <AlertTriangle size={18} style={{ flexShrink: 0 }} />
                <span>This file contains data of the quiz, so its not importent</span>
              </div>
            )}
          </div>
        ) : (
          /* Unlocked Full Sub-Site Hub */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Top Hub Banner */}
            <div
              style={{
                padding: '24px 28px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.12) 0%, rgba(30, 41, 59, 0.6) 100%)',
                border: '1px solid rgba(244, 63, 94, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '3px 9px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    Unlocked Master Sub-site
                  </span>
                  <span style={{ fontSize: '13px', color: '#94a3b8' }}>Materials Science (MIAE 221)</span>
                </div>
                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: '#f8fafc' }}>
                  Filtered document · Midterm Master Solutions & Readiness Portal
                </h1>
                <p style={{ margin: '6px 0 0', fontSize: '13.5px', color: '#94a3b8' }}>
                  Curriculum-grounded analysis of 40 exam problems mapped to Dr. Medraj's slides, Callister 10th edition, and Organic Chemistry Tutor video tutorials.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href="/#/quiz/MIAE221/midterm-drill"
                  className="nav-btn"
                  onClick={() => audio.playClick()}
                  style={{
                    backgroundColor: '#f43f5e',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 700,
                    textDecoration: 'none',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(244, 63, 94, 0.4)'
                  }}
                >
                  <Sparkles size={16} />
                  <span>Launch Midterm Drill</span>
                </a>
              </div>
            </div>

            {/* Special Exam Skill Drill Highlight Banner */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.18) 0%, rgba(99, 102, 241, 0.15) 100%)',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                borderRadius: '12px',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={18} color="#f43f5e" />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f43f5e' }}>
                    Special Exam Skill Drill
                  </span>
                </div>
                <h2 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 800, color: '#f8fafc' }}>
                  Winter 2026 / 2025 Midterm Exam Drill (40 Questions)
                </h2>
                <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
                  Practice all 40 official midterm exam questions with instant scoring, KaTeX equations, and worked derivations.
                </p>
              </div>

              <a
                href="/#/quiz/MIAE221/midterm-drill"
                onClick={() => audio.playClick()}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  backgroundColor: '#f43f5e',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(244, 63, 94, 0.45)',
                  cursor: 'pointer'
                }}
              >
                <PlayCircle size={18} />
                <span>Launch Midterm Drill</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* 3 Published Reference Files Cards */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={18} color="#f43f5e" />
                  <span>3 Published Reference Files</span>
                </h3>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Full text and scanned PDF reference materials</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '16px'
                }}
              >
                {/* Doc 1: Fall 2024 */}
                <div
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px'
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
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', lineHeight: 1.4 }}>
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
                        setActivePdfDoc(DOC_FALL_2024);
                      }}
                      style={{
                        flex: 1,
                        padding: '9px 14px',
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
                        padding: '9px 14px',
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
                    borderRadius: '12px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px'
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
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', lineHeight: 1.4 }}>
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
                        setActivePdfDoc(DOC_WINTER_2025);
                      }}
                      style={{
                        flex: 1,
                        padding: '9px 14px',
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
                        padding: '9px 14px',
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

                {/* Doc 3: Master Guide */}
                <div
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(244, 63, 94, 0.25)',
                    borderRadius: '12px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(244, 63, 94, 0.2)',
                          color: '#fb7185',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(244, 63, 94, 0.35)'
                        }}
                      >
                        Master Guide PDF
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>456 KB · Complete Solution Sheet</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', lineHeight: 1.4 }}>
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
                        setActivePdfDoc(DOC_FILTERED_GUIDE);
                      }}
                      style={{
                        flex: 1,
                        padding: '9px 14px',
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
                        padding: '9px 14px',
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

            {/* Curriculum-Mapped Question Explorer */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700 }}>
                    Official Midterm Question Mappings ({filteredQuestions.length} Questions)
                  </h3>
                  <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: '#94a3b8' }}>
                    Every question mapped to Teacher Slides, Callister Textbook, and Organic Chemistry Tutor videos
                  </p>
                </div>

                {/* Search Bar */}
                <div style={{ position: 'relative', width: '280px' }}>
                  <Search
                    size={15}
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics, questions…"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '8px 12px 8px 34px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Filter Tabs */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}
              >
                {[
                  { id: 'all', label: 'All 40 Questions' },
                  { id: 'crystallography', label: 'Crystallography (Q1–4)' },
                  { id: 'densities_xrd', label: 'APF & XRD (Q5–7)' },
                  { id: 'defects', label: 'Defects (Q8–10)' },
                  { id: 'bonding_diffusion', label: 'Bonding & Diffusion (Q11–14)' },
                  { id: 'tensile', label: 'Stress-Strain Curve (Q15–20)' },
                  { id: 'true_false', label: 'True / False (Q21–40)' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      audio.playClick();
                      setSelectedFilter(f.id);
                    }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: selectedFilter === f.id ? 700 : 500,
                      backgroundColor: selectedFilter === f.id ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedFilter === f.id ? '#fb7185' : '#94a3b8',
                      border: selectedFilter === f.id ? '1px solid rgba(244, 63, 94, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Question List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filteredQuestions.map((q) => {
                  const isExpanded = expandedQuestions[q.id] || false;
                  return (
                    <div
                      key={q.id}
                      style={{
                        backgroundColor: 'rgba(30, 41, 59, 0.55)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'border-color 0.2s ease'
                      }}
                    >
                      {/* Question Header Card */}
                      <div
                        onClick={() => toggleExpand(q.id)}
                        style={{
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                          cursor: 'pointer',
                          backgroundColor: isExpanded ? 'rgba(244, 63, 94, 0.06)' : 'transparent'
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 800,
                                color: '#f43f5e',
                                backgroundColor: 'rgba(244, 63, 94, 0.15)',
                                padding: '2px 8px',
                                borderRadius: '6px'
                              }}
                            >
                              {q.id.replace('Q_MIAE221_MID_', 'Question ')}
                            </span>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>•</span>
                            <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0' }}>{q.topic}</span>
                            <span
                              style={{
                                marginLeft: 'auto',
                                fontSize: '11px',
                                color: '#94a3b8',
                                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                padding: '2px 6px',
                                borderRadius: '4px'
                              }}
                            >
                              {q.difficulty}
                            </span>
                          </div>

                          <div style={{ fontSize: '14px', color: '#f8fafc', lineHeight: 1.5 }}>
                            <MathText text={q.question} />
                          </div>
                        </div>

                        <div style={{ color: '#94a3b8', flexShrink: 0 }}>
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      {/* Expandable Worked Derivation & Curriculum Citations */}
                      {isExpanded && (
                        <div
                          style={{
                            padding: '18px 20px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            backgroundColor: 'rgba(15, 23, 42, 0.45)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                          }}
                        >
                          {/* Options */}
                          <div>
                            <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
                              Answer Choices
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                              {q.options.map((opt, i) => {
                                const isCorrect = i === q.correctIndex;
                                return (
                                  <div
                                    key={i}
                                    style={{
                                      padding: '10px 14px',
                                      borderRadius: '8px',
                                      backgroundColor: isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                                      border: isCorrect ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(255, 255, 255, 0.06)',
                                      color: isCorrect ? '#34d399' : '#cbd5e1',
                                      fontSize: '13px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px'
                                    }}
                                  >
                                    <span style={{ fontWeight: 700, fontSize: '12px', minWidth: '18px' }}>
                                      {String.fromCharCode(65 + i)}.
                                    </span>
                                    <span>
                                      <MathText text={opt} />
                                    </span>
                                    {isCorrect && <CheckCircle2 size={16} style={{ marginLeft: 'auto', flexShrink: 0 }} />}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Worked Solution & Rationale */}
                          <div
                            style={{
                              padding: '14px 16px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(16, 185, 129, 0.08)',
                              border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}
                          >
                            <div style={{ fontWeight: 700, fontSize: '13px', color: '#10b981', marginBottom: '6px' }}>
                              Worked Derivation & Core Concept
                            </div>
                            <div style={{ fontSize: '13.5px', color: '#e2e8f0', lineHeight: 1.5, marginBottom: '8px' }}>
                              <MathText text={q.explanation.coreConcept} />
                            </div>
                            {q.explanation.stepByStep && q.explanation.stepByStep.length > 0 && (
                              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5 }}>
                                {q.explanation.stepByStep.map((step, idx) => (
                                  <li key={idx} style={{ marginBottom: '4px' }}>
                                    <MathText text={step} />
                                  </li>
                                ))}
                              </ul>
                            )}
                            {q.explanation.commonTrap && (
                              <div style={{ marginTop: '8px', fontSize: '12.5px', color: '#fde047', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                                <span>Exam Trap: {q.explanation.commonTrap}</span>
                              </div>
                            )}
                          </div>

                          {/* Teacher Slides, Textbook & Video Triad */}
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                              gap: '12px'
                            }}
                          >
                            {/* Teacher Slide Citation */}
                            <div
                              style={{
                                padding: '12px 14px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#60a5fa', marginBottom: '4px' }}>
                                <GraduationCap size={15} />
                                <span>Dr. Medraj's Lecture Deck</span>
                              </div>
                              <div style={{ fontSize: '12.5px', color: '#f8fafc', fontWeight: 600 }}>{q.teacherDeck}</div>
                              <div style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: '2px' }}>{q.teacherSlides}</div>
                            </div>

                            {/* Callister Textbook Citation */}
                            <div
                              style={{
                                padding: '12px 14px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(168, 85, 247, 0.08)',
                                border: '1px solid rgba(168, 85, 247, 0.2)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#c084fc', marginBottom: '4px' }}>
                                <BookOpen size={15} />
                                <span>Callister 10th Ed. Textbook</span>
                              </div>
                              <div style={{ fontSize: '12.5px', color: '#f8fafc', fontWeight: 600 }}>{q.textbookRef}</div>
                            </div>

                            {/* YouTube Organic Chemistry Tutor Link */}
                            {q.youtubeUrl && (
                              <a
                                href={q.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  padding: '12px 14px',
                                  borderRadius: '8px',
                                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                  border: '1px solid rgba(239, 68, 68, 0.3)',
                                  textDecoration: 'none',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  transition: 'background 0.15s ease'
                                }}
                              >
                                <div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#f87171', marginBottom: '4px' }}>
                                    <Video size={15} />
                                    <span>The Organic Chemistry Tutor</span>
                                  </div>
                                  <div style={{ fontSize: '12px', color: '#f8fafc', fontWeight: 600 }}>
                                    Watch Video Tutorial on Topic
                                  </div>
                                </div>
                                <ExternalLink size={16} color="#f87171" />
                              </a>
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
      </main>

      {/* Embedded PDF Viewer Modal for full reading */}
      <PdfViewerModal
        document={activePdfDoc}
        onClose={() => setActivePdfDoc(null)}
      />

      <Footer
        onSelectCourse={() => { window.location.href = '/#/'; }}
        onStartQuiz={() => { window.location.href = '/#/quiz/MIAE221/midterm-drill'; }}
        onOpenQuestionBank={() => { window.location.href = '/#/bank/MIAE221'; }}
        onOpenContact={() => {}}
      />
    </div>
  );
};

export default FilteredSubSite;
