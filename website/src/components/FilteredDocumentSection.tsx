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
  CheckCircle2,
  ClipboardList,
  Cpu,
  Layers,
  Sparkles,
  Calendar,
  Award,
  Clock
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


export const extractExamDateScore = (doc: FilteredDocItem): number => {
  const str = `${doc.title} ${doc.filename} ${doc.relativePath}`;
  
  // 1. Explicit 4-digit years
  const yearMatches = str.match(/\b(19\d\d|20\d\d)\b/g);
  let year = 0;
  if (yearMatches && yearMatches.length > 0) {
    const years = yearMatches.map(y => parseInt(y, 10)).filter(y => y >= 1990 && y <= 2030);
    if (years.length > 0) {
      year = Math.max(...years);
    }
  }
  if (year === 0) {
    if (/2026|paradis|term paper|assignment/i.test(str)) {
      year = 2026;
    } else if (/final|midterm|quiz|test/i.test(str)) {
      year = 2020;
    } else {
      year = 2021;
    }
  }

  // 2. Term / Season bonus within the year (Fall > Summer > Winter)
  let termBonus = 0.5;
  if (/\bfall\b|\bautumn\b|\bf2\d|\bfall\s*20\d\d/i.test(str)) {
    termBonus = 0.75;
  } else if (/\bsummer\b|\bsum\b|\bs2\d/i.test(str)) {
    termBonus = 0.50;
  } else if (/\bwinter\b|\bwin\b|\bw2\d|\bwinter\s*20\d\d/i.test(str)) {
    termBonus = 0.25;
  }

  // 3. Quiz / Test number bonus (Test 2 > Test 1, Quiz 5 > Quiz 1)
  let numberBonus = 0;
  const testNumMatch = str.match(/(?:test|quiz|midterm|exam)\s*#?\s*(\d+)/i);
  if (testNumMatch) {
    numberBonus = Math.min(parseInt(testNumMatch[1], 10), 10) * 0.01;
  }

  return year + termBonus + numberBonus;
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
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return typeof window !== 'undefined' && (
        sessionStorage.getItem(SESSION_STORAGE_KEY) === '1' ||
        sessionStorage.getItem('miae221_filtered_doc_unlocked') === '1'
      );
    } catch {
      return false;
    }
  });
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
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
    setAssessmentFilter('all');
    setAssessmentSearch('');
    setMidtermFilter('all');
    setMidtermSearch('');
  }, [course.id]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim() || isUnlocking) return;

    if (isPasswordValid(passwordInput)) {
      audio.playCorrect();
      setIsUnlocking(true);
      setTimeout(() => {
        setIsUnlocked(true);
        setIsUnlocking(false);
        try {
          sessionStorage.setItem(SESSION_STORAGE_KEY, '1');
          sessionStorage.setItem('miae221_filtered_doc_unlocked', '1');
        } catch {
          // ignore
        }
      }, 350);
    } else {
      audio.playIncorrect();
      setHasAttempted(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 450);
    }
  };

  const handleLockAgain = () => {
    audio.playClick();
    setIsUnlocked(false);
    setPasswordInput('');
    setHasAttempted(false);
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem('miae221_filtered_doc_unlocked');
    } catch {
      // ignore
    }
  };

  const toggleExpand = (id: string) => {
    audio.playClick();
    setExpandedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Section 1: Filtered assessment documents (excludes Term Paper files which belong exclusively to the Term Paper Vault)
  const allAssessmentDocs: FilteredDocItem[] = (courseConfig?.assessmentDocs ?? []).filter(
    (doc) => !/Term Paper & Final Project/i.test(doc.relativePath)
  );
  const filteredAssessmentDocs = useMemo<FilteredDocItem[]>(() => {
    const list = allAssessmentDocs.filter((doc: FilteredDocItem) => {
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

    // Sort chronologically from most recent dates at the top to oldest at the bottom
    return [...list].sort((a, b) => extractExamDateScore(b) - extractExamDateScore(a));
  }, [allAssessmentDocs, assessmentFilter, assessmentSearch]);

  // Section 2: Curated midterm prep docs
  const midtermPrepDocs: FilteredDocItem[] = courseConfig?.midtermPrepDocs ?? [];
  const sortedMidtermPrepDocs = useMemo(() => {
    return [...midtermPrepDocs].sort((a, b) => extractExamDateScore(b) - extractExamDateScore(a));
  }, [midtermPrepDocs]);

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
      <section
        className={`fx-panel vault-card-enter ${isShaking ? 'shake-incorrect' : ''}`}
        style={{ padding: '48px 24px', textAlign: 'center', transition: 'all 0.2s ease' }}
      >
        <div style={{ maxWidth: '440px', margin: '0 auto' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: isUnlocking ? 'rgba(34, 197, 94, 0.12)' : 'rgba(79, 70, 229, 0.08)',
              color: isUnlocking ? 'var(--status-success)' : 'var(--engr-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              border: `1.5px solid ${isUnlocking ? 'rgba(34, 197, 94, 0.35)' : 'rgba(79, 70, 229, 0.2)'}`,
              transition: 'all 0.25s ease'
            }}
            className={isUnlocking ? 'pulse-correct' : ''}
          >
            {isUnlocking ? <CheckCircle2 size={30} /> : <KeyRound size={28} />}
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
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (hasAttempted) setHasAttempted(false);
                }}
                disabled={isUnlocking}
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
              disabled={isUnlocking}
              className="action-btn primary-glow-btn"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: isUnlocking ? '#16a34a' : undefined,
                borderColor: isUnlocking ? '#16a34a' : undefined
              }}
            >
              <Unlock size={16} />
              <span>{isUnlocking ? 'Access Granted…' : 'Verify Access'}</span>
            </button>
          </form>

          {hasAttempted && !isPasswordValid(passwordInput) && (
            <div
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#dc2626',
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
              <span>Incorrect access key. Please verify your credentials and try again.</span>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <div className="vault-unlocked-enter" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleLockAgain}
            className="fx-btn"
            style={{
              fontSize: '12.5px',
              padding: '7px 12px',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-card-subtle)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Re-lock this vault"
          >
            <Lock size={14} />
            <span>Lock Vault</span>
          </button>
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
      </div>


      {/* ========================================================================= */}
      {/* FEATURED SHOWCASE: ENGR 213 PARADIS NOTES                                 */}
      {/* ========================================================================= */}
      {course.id === 'ENGR213' && (
        <section
          className="fx-panel"
          style={{
            border: '1.5px solid rgba(2, 132, 199, 0.3)',
            background: 'linear-gradient(180deg, rgba(2, 132, 199, 0.04) 0%, rgba(2, 132, 199, 0.01) 100%)',
            boxShadow: '0 4px 20px -4px rgba(2, 132, 199, 0.08)'
          }}
        >
          <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <span className="fx-panel-icon" style={{ color: '#0284c7' }}><Sparkles size={20} /></span>
              <div className="fx-panel-heading">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h2 style={{ color: '#0369a1' }}>Featured: Paradis notes — In-Class Lecture & Tutorial Master Compendium</h2>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(2, 132, 199, 0.12)',
                      color: '#0284c7',
                      textTransform: 'uppercase'
                    }}
                  >
                    Fall 2026 · Midterm 1 Scope
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Comprehensive preparation compendium and official solved examination bank.
              Covers <strong>Lectures 1–5</strong>, <strong>Tutorials 1 & 3</strong>, <strong>Homework Sets 1–3</strong>, and the complete <strong>Midterm 1 Examination Syllabus: Chapter 2 + CH 17.1 & CH 17.2</strong>.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {/* Card 1: Regenerated Master Compendium */}
              <div
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1.5px solid rgba(2, 132, 199, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    🌟 Regenerated Master Guide
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>538 KB · 17 Pages</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>
                  Paradis notes — In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Typeset LaTeX compendium featuring Module 9: Get Ready for Midterm 1 (7-Day Active Revision Protocol, 8 step-by-step topic mastery walkthroughs for Ch 2 &amp; CH 17.1–17.2, and error audit log).
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '8px' }}>
                  <button
                    className="fx-btn fx-btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => {
                      audio.playClick();
                      onViewPdf({
                        id: 'ENGR213:filtered:paradis-master-guide',
                        courseId: 'ENGR213',
                        categoryId: 'Filtered-Vault',
                        categoryTitle: 'Paradis notes',
                        title: 'Paradis notes - In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium (Fall 2026)',
                        filename: 'Paradis notes - ENGR 213 In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium.pdf',
                        relativePath: 'Engr 213/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Paradis notes - ENGR 213 In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium.pdf',
                        fileSizeBytes: 537853,
                        tags: ['Paradis notes', 'Regenerated Master Guide', 'Midterm 1 Scope', '17 Pages'],
                        summary: 'Paradis notes master compendium (Fall 2026)'
                      });
                    }}
                  >
                    <Eye size={14} />
                    <span>View Guide</span>
                  </button>
                  <a
                    className="fx-btn fx-btn-tab"
                    href={getPdfUrl('Engr 213/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Paradis notes - ENGR 213 In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in a new tab"
                    onClick={() => audio.playClick()}
                  >
                    <ExternalLink size={14} />
                    <span>New Tab</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Solved Examination Bank (Winter 2025) */}
              <div
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    🎯 Solved Quizzes & Tests Bank
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>424 KB · 14 Solved Problems</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>
                  ENGR 213 — Quizzes & Term Tests Official Solved Examination Bank (Winter 2025)
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Full sequential solutions (Questions 1 to 14) for Quizzes 1–4, Test 1 Version 2, and Test 2 with complete analytical derivations.
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '8px' }}>
                  <button
                    className="fx-btn fx-btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => {
                      audio.playClick();
                      onViewPdf({
                        id: 'ENGR213:filtered:quiz-test-bank-2025',
                        courseId: 'ENGR213',
                        categoryId: 'Filtered-Vault',
                        categoryTitle: 'Assessment Vault',
                        title: 'ENGR 213 - Quizzes & Term Tests Official Solved Examination Bank (Winter 2025)',
                        filename: 'ENGR 213 - Quizzes & Term Tests Official Solved Examination Bank (Winter 2025).pdf',
                        relativePath: 'Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Quizzes & Term Tests Official Solved Examination Bank (Winter 2025).pdf',
                        fileSizeBytes: 424102,
                        tags: ['Quizzes 1–4', 'Test 1 V2', 'Test 2', '14 Solved Questions'],
                        summary: 'Official Solved Examination Bank (Winter 2025)'
                      });
                    }}
                  >
                    <Eye size={14} />
                    <span>View Exam Bank</span>
                  </button>
                  <a
                    className="fx-btn fx-btn-tab"
                    href={getPdfUrl('Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Quizzes & Term Tests Official Solved Examination Bank (Winter 2025).pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in a new tab"
                    onClick={() => audio.playClick()}
                  >
                    <ExternalLink size={14} />
                    <span>New Tab</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}



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
          {sortedMidtermPrepDocs.map((doc: FilteredDocItem, idx: number) => {
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
