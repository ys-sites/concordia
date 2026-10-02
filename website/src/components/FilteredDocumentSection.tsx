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
  AlertTriangle,
  Folder,
  Brain,
  Target,
  FileCheck,
  ClipboardList,
  Cpu,
  Layers
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { CourseDocument } from '../types';
import { CourseWithDocs } from '../data/coursesData';
import { MathText } from '../utils/mathRenderer';
import { MIAE221_MIDTERM_QUESTIONS } from '../data/extra/miae221_midterm';
import {
  FILTERED_COURSES_DATA,
  FilteredDocItem,
  AssessmentCategory
} from '../data/filteredDocumentsData';

interface FilteredDocumentSectionProps {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument) => void;
  onStartMidtermDrill: (sectionId?: string) => void;
}

const isPasswordValid = (input: string) => input.trim().toLowerCase() === '1001nuit';
const SESSION_STORAGE_KEY = 'concordia_filtered_doc_unlocked';

const formatFileSize = (bytes?: number) => {
  if (!bytes) return '';
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
};

const getCategoryBadgeStyle = (category: AssessmentCategory) => {
  switch (category) {
    case 'Midterm Exam':
      return { bg: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', border: 'rgba(239, 68, 68, 0.25)' };
    case 'Final Exam':
      return { bg: 'rgba(168, 85, 247, 0.1)', color: '#9333ea', border: 'rgba(168, 85, 247, 0.25)' };
    case 'Quiz / Test':
      return { bg: 'rgba(245, 158, 11, 0.1)', color: '#d97706', border: 'rgba(245, 158, 11, 0.25)' };
    case 'Assignment':
      return { bg: 'rgba(59, 130, 246, 0.1)', color: '#2563eb', border: 'rgba(59, 130, 246, 0.25)' };
    case 'Lab / Project':
      return { bg: 'rgba(16, 185, 129, 0.1)', color: '#059669', border: 'rgba(16, 185, 129, 0.25)' };
    default:
      return { bg: 'rgba(100, 116, 139, 0.1)', color: '#475569', border: 'rgba(100, 116, 139, 0.2)' };
  }
};

export const FilteredDocumentSection: React.FC<FilteredDocumentSectionProps> = ({
  course,
  onViewPdf,
  onStartMidtermDrill
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);

  // Section 1: Assessment Vault Filters
  const [assessmentFilter, setAssessmentFilter] = useState<string>('all');
  const [assessmentSearch, setAssessmentSearch] = useState<string>('');

  // Section 2: Midterm Prep Filters (MIAE 221 Questions Explorer)
  const [midtermFilter, setMidtermFilter] = useState<string>('all');
  const [midtermSearch, setMidtermSearch] = useState<string>('');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const courseConfig = FILTERED_COURSES_DATA[course.id as keyof typeof FILTERED_COURSES_DATA];

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_STORAGE_KEY) === '1') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttempted(true);
    if (isPasswordValid(passwordInput)) {
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

  // Section 1: Filtered assessment documents
  const allAssessmentDocs: FilteredDocItem[] = courseConfig?.assessmentDocs ?? [];
  const filteredAssessmentDocs = useMemo<FilteredDocItem[]>(() => {
    return allAssessmentDocs.filter((doc: FilteredDocItem) => {
      // Category filter
      if (assessmentFilter !== 'all' && doc.categoryType !== assessmentFilter) {
        return false;
      }
      // Search query
      if (assessmentSearch.trim()) {
        const q = assessmentSearch.trim().toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesFilename = doc.filename.toLowerCase().includes(q);
        const matchesCat = doc.categoryType.toLowerCase().includes(q);
        if (!matchesTitle && !matchesFilename && !matchesCat) return false;
      }
      return true;
    });
  }, [allAssessmentDocs, assessmentFilter, assessmentSearch]);

  // Section 2: Curated midterm prep docs
  const midtermPrepDocs: FilteredDocItem[] = courseConfig?.midtermPrepDocs ?? [];

  // Section 2: MIAE 221 Question Explorer
  const filteredQuestions = useMemo(() => {
    if (course.id !== 'MIAE221') return [];
    return MIAE221_MIDTERM_QUESTIONS.filter((q) => {
      if (midtermFilter === 'crystallography') {
        if (!['Q_MIAE221_MID_01', 'Q_MIAE221_MID_02', 'Q_MIAE221_MID_03', 'Q_MIAE221_MID_04'].includes(q.id))
          return false;
      } else if (midtermFilter === 'densities_xrd') {
        if (!['Q_MIAE221_MID_05', 'Q_MIAE221_MID_06', 'Q_MIAE221_MID_07'].includes(q.id)) return false;
      } else if (midtermFilter === 'defects') {
        if (!['Q_MIAE221_MID_08', 'Q_MIAE221_MID_09', 'Q_MIAE221_MID_10'].includes(q.id)) return false;
      } else if (midtermFilter === 'bonding_diffusion') {
        if (!['Q_MIAE221_MID_11', 'Q_MIAE221_MID_12', 'Q_MIAE221_MID_13', 'Q_MIAE221_MID_14'].includes(q.id))
          return false;
      } else if (midtermFilter === 'tensile') {
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
      } else if (midtermFilter === 'true_false') {
        const num = parseInt(q.id.split('_').pop() || '0', 10);
        if (num < 21) return false;
      }

      if (midtermSearch.trim()) {
        const query = midtermSearch.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesRef = q.teacherDeck.toLowerCase().includes(query) || q.textbookRef.toLowerCase().includes(query);
        if (!matchesQ && !matchesTopic && !matchesRef) return false;
      }

      return true;
    });
  }, [course.id, midtermFilter, midtermSearch]);

  // Counts for category badges
  const midtermCount = allAssessmentDocs.filter((d: FilteredDocItem) => d.categoryType === 'Midterm Exam').length;
  const finalCount = allAssessmentDocs.filter((d: FilteredDocItem) => d.categoryType === 'Final Exam').length;
  const quizCount = allAssessmentDocs.filter((d: FilteredDocItem) => d.categoryType === 'Quiz / Test').length;
  const assignmentCount = allAssessmentDocs.filter((d: FilteredDocItem) => d.categoryType === 'Assignment').length;
  const labCount = allAssessmentDocs.filter((d: FilteredDocItem) => d.categoryType === 'Lab / Project').length;

  if (!isUnlocked) {
    return (
      <section className="fx-panel" style={{ padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '440px', margin: '0 auto' }}>
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
            Enter the access key to unlock the <strong>{course.code}</strong> assessment vault and midterm preparation hub.
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

          {hasAttempted && !isPasswordValid(passwordInput) && (
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Overview Banner */}
      <div
        style={{
          padding: '16px 20px',
          borderRadius: '12px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: course.accentHex,
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '0.04em'
            }}
          >
            {course.code}
          </div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Filtered Document Gateway
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
              Two Curated Sections: Course Assessment Vault & Midterm Preparation Hub
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            audio.playClick();
            onStartMidtermDrill(courseConfig?.midtermDrillSectionId);
          }}
          className="workspace-quiz-btn"
          style={{ fontSize: '13px', padding: '8px 16px' }}
        >
          <Brain size={16} />
          <span>Launch Midterm Drill</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: ALL ASSIGNMENTS, QUIZZES, EXAMS, LABS & PROJECTS               */}
      {/* ========================================================================= */}
      <section className="fx-panel">
        <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
            <span className="fx-panel-icon"><Folder size={20} /></span>
            <div className="fx-panel-heading">
              <h2>Section 1: Course Assessment Vault</h2>
            </div>
            <span className="fx-panel-meta">
              {filteredAssessmentDocs.length} of {allAssessmentDocs.length} files
            </span>
          </div>

          {/* Search Box */}
          <div className="fx-search-box" style={{ maxWidth: '280px' }}>
            <Search size={15} />
            <input
              type="search"
              value={assessmentSearch}
              onChange={(e) => setAssessmentSearch(e.target.value)}
              placeholder={`Search ${course.code} assessments…`}
            />
          </div>
        </header>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            padding: '12px 18px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-card-subtle)'
          }}
        >
          {[
            { id: 'all', label: `All Assessments (${allAssessmentDocs.length})` },
            ...(midtermCount > 0 ? [{ id: 'Midterm Exam', label: `Midterms (${midtermCount})` }] : []),
            ...(finalCount > 0 ? [{ id: 'Final Exam', label: `Final Exams (${finalCount})` }] : []),
            ...(quizCount > 0 ? [{ id: 'Quiz / Test', label: `Quizzes & Tests (${quizCount})` }] : []),
            ...(assignmentCount > 0 ? [{ id: 'Assignment', label: `Assignments (${assignmentCount})` }] : []),
            ...(labCount > 0 ? [{ id: 'Lab / Project', label: `Labs & Projects (${labCount})` }] : [])
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => {
                audio.playClick();
                setAssessmentFilter(f.id);
              }}
              className={`pill-btn ${assessmentFilter === f.id ? 'active' : ''}`}
              style={{ fontSize: '12px', padding: '5px 12px' }}
            >
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* File List */}
        {filteredAssessmentDocs.length === 0 ? (
          <p className="fx-empty" style={{ padding: '32px' }}>
            No assessment files match your current search or filter.
          </p>
        ) : (
          <ol className="fx-file-list">
            {filteredAssessmentDocs.map((doc: FilteredDocItem, idx: number) => {
              const url = getPdfUrl(doc.relativePath);
              const badgeStyle = getCategoryBadgeStyle(doc.categoryType);
              return (
                <li key={doc.id} className="fx-file-row">
                  <span className="fx-file-number">{idx + 1}</span>
                  <FileText size={18} className="fx-file-icon" />
                  <button
                    className="fx-file-main"
                    onClick={() => {
                      audio.playClick();
                      onViewPdf({ ...doc, summary: doc.summary || doc.title });
                    }}
                  >
                    <span className="fx-file-title">{doc.title}</span>
                    <span className="fx-file-meta">
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          backgroundColor: badgeStyle.bg,
                          color: badgeStyle.color,
                          border: `1px solid ${badgeStyle.border}`
                        }}
                      >
                        {doc.categoryType}
                      </span>
                      <span className="fx-file-size">{formatFileSize(doc.fileSizeBytes)}</span>
                      {doc.isMidtermPrep && (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                            color: '#b45309'
                          }}
                        >
                          Midterm Scope
                        </span>
                      )}
                    </span>
                  </button>
                  <div className="fx-file-actions">
                    <button
                      className="fx-btn fx-btn-primary"
                      onClick={() => {
                        audio.playClick();
                        onViewPdf({ ...doc, summary: doc.summary || doc.title });
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
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: PREPARATION FOR MIDTERM                                        */}
      {/* ========================================================================= */}
      <section className="fx-panel">
        <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
            <span className="fx-panel-icon"><Target size={20} /></span>
            <div className="fx-panel-heading">
              <h2>Section 2: Preparation for Midterm</h2>
            </div>
            <span className="fx-panel-meta">{midtermPrepDocs.length} curated documents</span>
          </div>

          <button
            onClick={() => {
              audio.playClick();
              onStartMidtermDrill(courseConfig?.midtermDrillSectionId);
            }}
            className="workspace-quiz-btn"
            style={{ fontSize: '13px', padding: '8px 16px' }}
          >
            <Brain size={16} />
            <span>Start Midterm Practice Drill</span>
          </button>
        </header>

        {/* Midterm Coverage Notice */}
        {courseConfig?.midtermScope && (
          <div
            style={{
              margin: '14px 18px',
              padding: '14px 18px',
              borderRadius: '8px',
              background: 'rgba(234, 179, 8, 0.08)',
              border: '1px solid rgba(234, 179, 8, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'var(--text-secondary)'
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🎯 Midterm Exam Scope & Syllabus:</span>
            </div>
            <div>{courseConfig.midtermScope}</div>
          </div>
        )}

        {/* Curated Midterm Prep Documents */}
        <ol className="fx-file-list">
          {midtermPrepDocs.map((doc: FilteredDocItem, idx: number) => {
            const url = getPdfUrl(doc.relativePath);
            return (
              <li key={doc.id} className="fx-file-row">
                <span className="fx-file-number">{idx + 1}</span>
                <FileText size={18} className="fx-file-icon" />
                <button
                  className="fx-file-main"
                  onClick={() => {
                    audio.playClick();
                    onViewPdf({ ...doc, summary: doc.summary || doc.title });
                  }}
                >
                  <span className="fx-file-title">{doc.title}</span>
                  <span className="fx-file-meta">
                    <span className="fx-file-size">{formatFileSize(doc.fileSizeBytes)}</span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(225, 29, 72, 0.1)',
                        color: 'var(--miae221-accent)',
                        border: '1px solid rgba(225, 29, 72, 0.25)'
                      }}
                    >
                      Midterm Prep
                    </span>
                  </span>
                </button>
                <div className="fx-file-actions">
                  <button
                    className="fx-btn fx-btn-primary"
                    onClick={() => {
                      audio.playClick();
                      onViewPdf({ ...doc, summary: doc.summary || doc.title });
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

        {/* For MIAE 221: 40-Question Breakdown Explorer */}
        {course.id === 'MIAE221' && filteredQuestions.length > 0 && (
          <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
            <div
              style={{
                padding: '14px 18px',
                background: 'var(--bg-card-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} style={{ color: 'var(--miae221-accent)' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  40 Curriculum-Mapped Midterm Questions & Video Solutions
                </h3>
              </div>

              <div className="fx-search-box" style={{ maxWidth: '260px' }}>
                <Search size={14} />
                <input
                  type="search"
                  value={midtermSearch}
                  onChange={(e) => setMidtermSearch(e.target.value)}
                  placeholder="Filter 40 questions…"
                />
              </div>
            </div>

            {/* Sub-tabs for MIAE 221 questions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                padding: '10px 18px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)'
              }}
            >
              {[
                { id: 'all', label: 'All 40 Questions' },
                { id: 'crystallography', label: 'Crystallography (Q1–4)' },
                { id: 'densities_xrd', label: 'APF & XRD (Q5–7)' },
                { id: 'defects', label: 'Defects (Q8–10)' },
                { id: 'bonding_diffusion', label: 'Bonding & Diffusion (Q11–14)' },
                { id: 'tensile', label: 'Stress-Strain (Q15–20)' },
                { id: 'true_false', label: 'True / False (Q21–40)' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    audio.playClick();
                    setMidtermFilter(f.id);
                  }}
                  className={`pill-btn ${midtermFilter === f.id ? 'active' : ''}`}
                  style={{ fontSize: '11px', padding: '4px 10px' }}
                >
                  <span>{f.label}</span>
                </button>
              ))}
            </div>

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

                      <button
                        className="fx-btn"
                        style={{ border: 'none', background: 'transparent', padding: '6px', color: 'var(--text-muted)' }}
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>

                    {/* Expanded question solution and video links */}
                    {isExpanded && (
                      <div
                        style={{
                          backgroundColor: 'var(--bg-card-subtle)',
                          borderRadius: '8px',
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        {q.options && q.options.length > 0 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--text-muted)' }}>
                              EXAM OPTIONS:
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                              {q.options.map((opt, i) => (
                                <div
                                  key={i}
                                  style={{
                                    fontSize: '13px',
                                    padding: '8px 12px',
                                    borderRadius: '6px',
                                    backgroundColor:
                                      i === q.correctIndex ? 'rgba(34, 197, 94, 0.12)' : 'var(--bg-surface)',
                                    border: `1px solid ${i === q.correctIndex ? 'rgba(34, 197, 94, 0.35)' : 'var(--border-subtle)'}`,
                                    color: i === q.correctIndex ? 'var(--status-success)' : 'var(--text-secondary)',
                                    fontWeight: i === q.correctIndex ? 600 : 400
                                  }}
                                >
                                  <strong>{String.fromCharCode(65 + i)}.</strong> <MathText text={opt} />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--text-muted)' }}>
                            STEP-BY-STEP SOLUTION & METHOD:
                          </div>
                          <div style={{ fontSize: '13.5px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                            <MathText text={q.explanation.stepByStep ? q.explanation.stepByStep.join('\n\n') : q.explanation.coreConcept} />
                          </div>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            alignItems: 'center',
                            paddingTop: '10px',
                            borderTop: '1px solid var(--border-subtle)'
                          }}
                        >
                          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <GraduationCap size={15} style={{ color: 'var(--miae221-accent)' }} />
                            <span>{q.teacherDeck}</span>
                          </div>

                          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <BookOpen size={15} style={{ color: 'var(--engr-accent)' }} />
                            <span>{q.textbookRef}</span>
                          </div>

                          {q.youtubeUrl && (
                            <a
                              href={q.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="fx-btn fx-btn-video"
                              style={{
                                marginLeft: 'auto',
                                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                                color: '#ef4444',
                                borderColor: 'rgba(239, 68, 68, 0.3)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                textDecoration: 'none'
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                audio.playClick();
                              }}
                            >
                              <Video size={14} />
                              <span>{q.youtubeTitle || 'Watch Video Solution'}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </section>
    </div>
  );
};
