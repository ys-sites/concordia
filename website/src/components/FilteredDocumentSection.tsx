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
  Folder,
  Brain
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { CourseDocument } from '../types';
import { MathText } from '../utils/mathRenderer';
import { MIAE221_MIDTERM_QUESTIONS } from '../data/extra/miae221_midterm';

interface FilteredDocumentSectionProps {
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

const REFERENCE_DOCS = [DOC_FALL_2024, DOC_WINTER_2025, DOC_FILTERED_GUIDE];

const formatFileSize = (bytes?: number) => {
  if (!bytes) return '';
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
};

export const FilteredDocumentSection: React.FC<FilteredDocumentSectionProps> = ({
  onViewPdf,
  onStartMidtermDrill
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_STORAGE_KEY) === '1') {
      setIsUnlocked(true);
    }
  }, []);

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

  if (!isUnlocked) {
    return (
      <section className="fx-panel" style={{ padding: '40px 24px', textAlign: 'center' }}>
        <div
          style={{
            maxWidth: '440px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: 'rgba(79, 70, 229, 0.08)',
              color: 'var(--engr-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              border: '1px solid rgba(79, 70, 229, 0.2)'
            }}
          >
            <KeyRound size={28} />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Course Document Verification
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
            Enter the access key to continue to the protected course subsection.
          </p>

          <form onSubmit={handleUnlock}>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter access key…"
                autoFocus
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-highlight)',
                  backgroundColor: 'var(--bg-card-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  outline: 'none',
                  textAlign: 'center',
                  letterSpacing: '0.1em'
                }}
              />
            </div>

            <button
              type="submit"
              className="action-btn primary-glow-btn"
              style={{ width: '100%', justifyContent: 'center', padding: '12px', borderRadius: '8px', fontSize: '14px' }}
            >
              <Unlock size={16} />
              <span>Verify Access</span>
            </button>
          </form>

          {/* Note when password doesn't work */}
          {hasAttempted && passwordInput !== PASSWORD_KEY && (
            <div
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(217, 119, 6, 0.08)',
                border: '1px solid rgba(217, 119, 6, 0.25)',
                color: 'var(--status-warning)',
                fontSize: '13px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                lineHeight: 1.4
              }}
            >
              <AlertTriangle size={16} style={{ flexShrink: 0 }} />
              <span>This file contains data of the quiz, so its not importent</span>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Section 1: Literal View of Examination Reference Files */}
      <section className="fx-panel">
        <header className="fx-panel-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="fx-panel-icon"><Folder size={20} /></span>
            <div className="fx-panel-heading">
              <h2>Course Examination Files</h2>
            </div>
            <span className="fx-panel-meta">3 files</span>
          </div>

          <button
            onClick={() => {
              audio.playClick();
              onStartMidtermDrill();
            }}
            className="workspace-quiz-btn"
            style={{ fontSize: '13px', padding: '8px 16px' }}
          >
            <Brain size={16} />
            <span>Start Practice Drill (40 Questions)</span>
          </button>
        </header>

        <ol className="fx-file-list">
          {REFERENCE_DOCS.map((doc, idx) => {
            const url = getPdfUrl(doc.relativePath);
            return (
              <li key={doc.id} className="fx-file-row">
                <span className="fx-file-number">{idx + 1}</span>
                <FileText size={18} className="fx-file-icon" />
                <button
                  className="fx-file-main"
                  onClick={() => {
                    audio.playClick();
                    onViewPdf(doc);
                  }}
                >
                  <span className="fx-file-title">{doc.title}</span>
                  <span className="fx-file-meta">
                    <span className="fx-file-size">{formatFileSize(doc.fileSizeBytes)}</span>
                    {doc.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="fx-tag">
                        {tag}
                      </span>
                    ))}
                  </span>
                </button>
                <div className="fx-file-actions">
                  <button
                    className="fx-btn fx-btn-primary"
                    onClick={() => {
                      audio.playClick();
                      onViewPdf(doc);
                    }}
                    title="Open in modal PDF viewer"
                  >
                    <Eye size={14} />
                    <span>View</span>
                  </button>
                  <a
                    className="fx-btn fx-btn-tab"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open PDF directly in a new window / tab"
                    onClick={() => audio.playClick()}
                  >
                    <ExternalLink size={14} />
                    <span>New Tab</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Section 2: Curriculum-Mapped Question Explorer */}
      <section className="fx-panel">
        <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <span className="fx-panel-icon"><BookOpen size={20} /></span>
          <div className="fx-panel-heading" style={{ flex: 1 }}>
            <h2>Curriculum-Mapped Midterm Questions ({filteredQuestions.length})</h2>
          </div>

          {/* Search Box */}
          <div className="fx-search-box" style={{ maxWidth: '300px' }}>
            <Search size={15} />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or topics…"
            />
          </div>
        </header>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            padding: '14px 18px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-card-subtle)'
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
              className={`pill-btn ${selectedFilter === f.id ? 'active' : ''}`}
              style={{ fontSize: '12px', padding: '5px 12px' }}
            >
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Question Rows */}
        <ol className="fx-file-list">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedQuestions[q.id] || false;
            return (
              <li
                key={q.id}
                style={{
                  listStyle: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {/* Question Top Header */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--miae221-accent)',
                          backgroundColor: 'rgba(225, 29, 72, 0.1)',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {q.id.replace('Q_MIAE221_MID_', 'Question ')}
                      </span>
                      <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {q.topic}
                      </span>
                      <span
                        style={{
                          marginLeft: 'auto',
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          backgroundColor: 'var(--bg-card-subtle)',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {q.difficulty}
                      </span>
                    </div>

                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      <MathText text={q.question} />
                    </div>
                  </div>

                  <div style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {/* Expandable Worked Proof & References */}
                {isExpanded && (
                  <div
                    style={{
                      marginTop: '8px',
                      padding: '16px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px'
                    }}
                  >
                    {/* Answer Choices */}
                    <div>
                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
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
                                backgroundColor: isCorrect ? 'rgba(5, 150, 105, 0.08)' : 'var(--bg-surface)',
                                border: isCorrect ? '1px solid rgba(5, 150, 105, 0.35)' : '1px solid var(--border-subtle)',
                                color: isCorrect ? 'var(--status-correct)' : 'var(--text-secondary)',
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span style={{ fontWeight: 700, fontSize: '12px' }}>
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

                    {/* Derivation & Rationale */}
                    <div
                      style={{
                        padding: '14px 16px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(5, 150, 105, 0.06)',
                        border: '1px solid rgba(5, 150, 105, 0.2)'
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--status-correct)', marginBottom: '6px' }}>
                        Worked Derivation & Core Concept
                      </div>
                      <div style={{ fontSize: '13.5px', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '8px' }}>
                        <MathText text={q.explanation.coreConcept} />
                      </div>
                      {q.explanation.stepByStep && q.explanation.stepByStep.length > 0 && (
                        <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {q.explanation.stepByStep.map((step, sIdx) => (
                            <li key={sIdx} style={{ marginBottom: '4px' }}>
                              <MathText text={step} />
                            </li>
                          ))}
                        </ul>
                      )}
                      {q.explanation.commonTrap && (
                        <div style={{ marginTop: '8px', fontSize: '12.5px', color: 'var(--status-warning)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                          <span>Exam Trap: {q.explanation.commonTrap}</span>
                        </div>
                      )}
                    </div>

                    {/* Triad: Lecture Deck, Textbook & Video */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '12px'
                      }}
                    >
                      {/* Dr. Medraj Deck */}
                      <div
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--engr-accent)', marginBottom: '4px' }}>
                          <GraduationCap size={15} />
                          <span>Dr. Medraj's Lecture Deck</span>
                        </div>
                        <div style={{ fontSize: '12.5px', color: 'var(--text-primary)', fontWeight: 600 }}>{q.teacherDeck}</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{q.teacherSlides}</div>
                      </div>

                      {/* Callister Textbook */}
                      <div
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--indu-accent)', marginBottom: '4px' }}>
                          <BookOpen size={15} />
                          <span>Callister 10th Ed. Textbook</span>
                        </div>
                        <div style={{ fontSize: '12.5px', color: 'var(--text-primary)', fontWeight: 600 }}>{q.textbookRef}</div>
                      </div>

                      {/* YouTube Video Link */}
                      {q.youtubeUrl && (
                        <a
                          href={q.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: '12px 14px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#ef4444', marginBottom: '4px' }}>
                              <Video size={15} />
                              <span>The Organic Chemistry Tutor</span>
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 600 }}>
                              Watch Video Tutorial
                            </div>
                          </div>
                          <ExternalLink size={15} color="#ef4444" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};
