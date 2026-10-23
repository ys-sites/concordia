import React, { useState, useMemo } from 'react';
import {
  Target,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Eye,
  ExternalLink,
  Brain,
  AlertTriangle,
  CheckCircle2,
  Code,
  Code2,
  Layers,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  PlayCircle,
  FileCode,
  GraduationCap,
  ListChecks,
  Shuffle,
  Zap,
  Printer,
  Clapperboard
} from 'lucide-react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument, CourseId } from '../types';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { MathText } from '../utils/mathRenderer';
import { TEACHER_EXAM_PRACTICE_DATA, TeacherExamFile } from '../data/teacherExamPracticeData';
import { TEACHER_EXAM_SETS, teacherQuestionsFor, teacherDrillId } from '../data/teacherExamQuestions';
import './TeacherMidtermPractice.css';
import { Engr213MidtermCompanion } from './Engr213MidtermCompanion';
import { CppCodeSimulator } from './CppCodeSimulator';
import { Miae215ExamPaper } from './Miae215ExamPaper';
import { CppCodeLab } from './CppCodeLab';
import { PracticeMidterm2026 } from './PracticeMidterm2026';
import { F23_A_TRACE, F23_B_TRACE } from '../data/cppTraceData';

interface TeacherMidtermPracticeSectionProps {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
  onLaunchDrill: (courseId: CourseId, sectionId: string) => void;
  onBack: () => void;
}

type TabType = 'drill' | 'blueprint' | 'files' | 'traps' | 'trace' | 'exam_paper' | 'code_lab' | 'practice_2026';

const DAY_MS = 86400000;

const MIAE221_VERIFIED_PAPERS = [
  {
    id: 'paper-1',
    term: '2025 Midterm Version A',
    prof: 'Department of MIAE Core',
    docId: '124560047',
    image: '/teacher-exams/miae221/image1.png',
    title: 'MIAE 221 - Midterm A - 2025 Exam Solutions & Key Concepts'
  },
  {
    id: 'paper-2',
    term: 'Fall 2024 Section X-A',
    prof: 'Dr. Martin Pugh',
    docId: '112451179',
    image: '/teacher-exams/miae221/image2.png',
    title: 'Midterm Solutions for MIAE 221 - Fall 2024 Exam Review'
  },
  {
    id: 'paper-3',
    term: 'Fall 2024 Section X-A (Clean)',
    prof: 'Dr. Martin Pugh',
    docId: '110496507',
    image: '/teacher-exams/miae221/image3.png',
    title: 'Fall 2024 Midterm Exam Clean Problem Set & Diagrams'
  },
  {
    id: 'paper-4',
    term: 'Fall 2024 Sections T & Y',
    prof: 'Drs. Martin Pugh & Navid Sharifi',
    docId: '108649883',
    image: '/teacher-exams/miae221/image4.png',
    title: 'Combined Sections T & Y Midterm Examination'
  },
  {
    id: 'paper-5',
    term: 'Fall 2025 Section X',
    prof: 'Dr. Sam Eskandarian',
    docId: '144474318',
    image: '/teacher-exams/miae221/image5.png',
    title: 'Section X Midterm Test on Crystallography & Defect Theory'
  },
  {
    id: 'paper-6',
    term: 'Winter 2026',
    prof: 'Drs. Mamadou Sy & Navid Sharifi',
    docId: '159540505',
    image: '/teacher-exams/miae221/image6.png',
    title: 'Winter 2026 Midterm Examination & Slip Calculations'
  },
  {
    id: 'paper-7',
    term: '2025 Practice Set',
    prof: 'Department of MIAE Multi-Section',
    docId: '174494848',
    image: '/teacher-exams/miae221/image7.png',
    title: '2025 Midterm Exam Structured Review & Question Bank'
  }
];

export const TeacherMidtermPracticeSection: React.FC<TeacherMidtermPracticeSectionProps> = ({
  course,
  onViewPdf,
  onLaunchDrill,
  onBack
}) => {
  if (course.id === 'ENGR213') {
    return <Engr213MidtermCompanion onViewPdf={onViewPdf} onBack={onBack} />;
  }

  const blueprint = TEACHER_EXAM_PRACTICE_DATA[course.id];
  const examQuestionCount = useMemo(() => teacherQuestionsFor(course.id).length, [course.id]);
  const hasPapers = examQuestionCount > 0;
  const [activeTab, setActiveTab] = useState<TabType>(hasPapers ? 'drill' : 'blueprint');
  const [tracePart, setTracePart] = useState<'part_a' | 'part_b' | 'tables'>('part_a');

  // Calculate live countdown days
  const daysToGo = useMemo(() => {
    if (!blueprint?.confirmedDate) return null;
    const target = new Date(blueprint.confirmedDate + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.round((target.getTime() - today.getTime()) / DAY_MS);
    return diff;
  }, [blueprint]);

  // Handle PDF opening
  const handleOpenPdf = (file: TeacherExamFile) => {
    audio.playClick();
    // Look for document in course.documents
    const found = course.documents.find(
      (d) =>
        d.filename.toLowerCase() === file.filename.toLowerCase() ||
        d.relativePath.toLowerCase().includes(file.filename.toLowerCase()) ||
        d.title.toLowerCase().includes(file.title.toLowerCase())
    );

    if (found) {
      onViewPdf(found);
    } else {
      // Fallback synthetic doc
      const fallbackDoc: CourseDocument = {
        id: `${course.id}:${file.id}`,
        courseId: course.id,
        categoryId: 'Teacher Midterm Practice',
        categoryTitle: 'Teacher Midterm Practice',
        title: file.title,
        filename: file.filename,
        relativePath: file.relativePath,
        tags: file.keyTopics,
        summary: file.description
      };
      onViewPdf(fallbackDoc);
    }
  };

  // The whole paper, in the paper's order: the closest thing to sitting the exam
  const startFullExam = () => {
    audio.playClick();
    onLaunchDrill(course.id, teacherDrillId({ topic: 'all', count: 'all', ordered: true }));
  };

  // No teacher papers: the course's own Midterm Review drill (built from the lecture material)
  const startMidtermReview = () => {
    audio.playClick();
    onLaunchDrill(course.id, blueprint?.featuredDrillSectionId ?? 'midterm');
  };

  if (!blueprint) {
    return (
      <div className="fx-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <h2>Teacher Midterm Practice</h2>
        <p className="fx-empty">Teacher practice data is being formatted for this course.</p>
        <button className="fx-btn fx-btn-primary" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Course Folders</span>
        </button>
      </div>
    );
  }

  return (
    <div className="teacher-practice-hub" style={{ '--accent': course.accentHex } as React.CSSProperties}>
      {/* Breadcrumb Header */}
      <div className="tp-header-banner">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to {course.code} Folders</span>
        </button>

        <div className="tp-badge-row">
          <span className="tp-course-pill" style={{ backgroundColor: course.accentHex }}>
            {course.code}
          </span>
          <span className="tp-verified-badge">
            <Sparkles size={14} /> {hasPapers ? 'Official Teacher Exam Materials' : 'Midterm Blueprint'}
          </span>
          {course.id === 'MIAE221' && (
            <span
              className="tp-verified-badge"
              style={{
                color: '#059669',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}
            >
              <Clapperboard size={14} /> 19 Step-by-Step Video Solves
            </span>
          )}
        </div>

        <h1 className="tp-main-title">{hasPapers ? 'Teacher Midterm Practice & Blueprint' : 'Midterm Blueprint & Scope'}</h1>
        <p className="tp-subtitle">
          {hasPapers
            ? 'Instructor-provided sample examinations, official marking keys, exam traps, and the confirmed curriculum scope.'
            : 'Confirmed midterm scope, exam format, calculator policy, instructor notes and common traps. No practice exam has been handed out for this course.'}
        </p>

        {/* Exam Countdown Card */}
        <div className="tp-countdown-bar">
          <div className="tp-countdown-left">
            <Calendar size={22} className="tp-calendar-icon" />
            <div>
              <div className="tp-date-label">{blueprint.dateLabel}</div>
              <div className="tp-date-sub">{blueprint.timeAndLocation}</div>
              {blueprint.assignmentNotice && (
                <div className="tp-assignment-notice">
                  <Clock size={13} /> {blueprint.assignmentNotice}
                </div>
              )}
            </div>
          </div>

          <div className="tp-countdown-right">
            {daysToGo !== null && (
              <div className="tp-countdown-pill">
                <span className="tp-days-number">{daysToGo > 0 ? daysToGo : 0}</span>
                <span className="tp-days-label">{daysToGo === 1 ? 'day to go' : 'days to go'}</span>
              </div>
            )}
            {hasPapers ? (
              <button className="tp-start-drill-btn" onClick={startFullExam}>
                <Brain size={18} />
                <span>Start Full Exam Drill ({examQuestionCount} Q)</span>
              </button>
            ) : (
              <button className="tp-start-drill-btn" onClick={startMidtermReview}>
                <Brain size={18} />
                <span>Start Midterm Review Drill</span>
              </button>
            )}
            {course.id === 'MIAE215' && (
              <button
                className="tp-start-drill-btn"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  borderColor: '#047857',
                  boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)'
                }}
                onClick={() => {
                  audio.playClick();
                  setActiveTab('code_lab');
                }}
              >
                <Code2 size={18} />
                <span>C++ Code Lab (60% Weight)</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tp-tab-row" role="tablist">
          {examQuestionCount > 0 && (
            <button
              className={`tp-tab-btn ${activeTab === 'drill' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'drill'}
              onClick={() => {
                audio.playClick();
                setActiveTab('drill');
              }}
            >
              <ListChecks size={16} />
              <span>Exam Drill ({examQuestionCount})</span>
            </button>
          )}
          {course.id === 'MIAE215' && (
            <button
              className={`tp-tab-btn ${activeTab === 'code_lab' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'code_lab'}
              onClick={() => {
                audio.playClick();
                setActiveTab('code_lab');
              }}
            >
              <Code2 size={16} />
              <span>C++ Midterm Code Lab (60%)</span>
            </button>
          )}
          {course.id === 'MIAE215' && (
            <button
              className={`tp-tab-btn ${activeTab === 'practice_2026' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'practice_2026'}
              onClick={() => {
                audio.playClick();
                setActiveTab('practice_2026');
              }}
            >
              <Clapperboard size={16} />
              <span>Practice Midterm 2026 · Video Solutions</span>
            </button>
          )}
          <button
            className={`tp-tab-btn ${activeTab === 'blueprint' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('blueprint');
            }}
          >
            <BookOpen size={16} />
            <span>Confirmed Scope & Format</span>
          </button>
          {blueprint.practiceFiles.length > 0 && (
            <button
              className={`tp-tab-btn ${activeTab === 'files' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setActiveTab('files');
              }}
            >
              <FileText size={16} />
              <span>Official Teacher Exams ({blueprint.practiceFiles.length})</span>
            </button>
          )}
          <button
            className={`tp-tab-btn ${activeTab === 'traps' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('traps');
            }}
          >
            <AlertTriangle size={16} />
            <span>Teacher Traps & Tricks</span>
          </button>
          {course.id === 'MIAE215' && (
            <>
              <button
                className={`tp-tab-btn ${activeTab === 'exam_paper' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setActiveTab('exam_paper');
                }}
              >
                <FileText size={16} />
                <span>Official Exam Paper Replica (31 Qs)</span>
              </button>
              <button
                className={`tp-tab-btn ${activeTab === 'trace' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setActiveTab('trace');
                }}
              >
                <Code size={16} />
                <span>Dr. Gordon Table Trace Lab</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tab 0: Exam Drill built from every question on the teacher's papers */}
      {activeTab === 'drill' && examQuestionCount > 0 && (
        <TeacherExamDrillSetup courseId={course.id} onStart={(id) => onLaunchDrill(course.id, id)} />
      )}

      {/* Tab 1: Confirmed Scope & Format */}
      {activeTab === 'blueprint' && (
        <div className="tp-tab-content">
          <div className="tp-card-grid-2">
            <div className="tp-info-card">
              <div className="tp-card-header">
                <Target size={18} style={{ color: course.accentHex }} />
                <h3>Confirmed Midterm Scope</h3>
              </div>
              <p className="tp-scope-text">
                <MathText text={blueprint.confirmedScope} />
              </p>
            </div>

            <div className="tp-info-card">
              <div className="tp-card-header">
                <Clock size={18} style={{ color: course.accentHex }} />
                <h3>Format & Calculator Policy</h3>
              </div>
              <div className="tp-policy-block">
                <strong>Exam Structure:</strong>
                <p>
                  <MathText text={blueprint.formatOverview} />
                </p>
              </div>
              <div className="tp-policy-block" style={{ marginTop: '0.75rem' }}>
                <strong>Calculator Policy:</strong>
                <p>
                  <MathText text={blueprint.calculatorPolicy} />
                </p>
              </div>
            </div>
          </div>

          <div className="tp-info-card" style={{ marginTop: '1.25rem' }}>
            <div className="tp-card-header">
              <GraduationCap size={18} style={{ color: course.accentHex }} />
              <h3>Course Coordinator & Instructor Notes</h3>
            </div>
            <ul className="tp-notes-list">
              {blueprint.instructorNotes.map((note, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="tp-bullet-icon" />
                  <span>
                    <MathText text={note} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {(course.id === 'MIAE215' || course.id === 'MIAE221') && (
            <div className="tp-info-card" style={{ marginTop: '1.25rem', border: '1.5px solid var(--accent)' }}>
              <div className="tp-card-header">
                <Sparkles size={18} style={{ color: course.accentHex }} />
                <h3>Official 1-Page Exam Cheatsheet &amp; Memory Aide</h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 12px' }}>
                {course.id === 'MIAE215'
                  ? 'Follows Dr. Gordon’s Moodle policy strictly: front-side only of 1 sheet, back completely blank, >= 10 pt font, Letter size. Print single-sided and you are 100% compliant.'
                  : 'Callister Chapters 1–7.4 condensed master formula and concept reference sheet. Formatted single-sided on Letter size.'}
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  className="tp-btn-primary"
                  style={{ textDecoration: 'none' }}
                  href={getPdfUrl(course.id === 'MIAE215'
                    ? 'Miae 215/03 - 1-Page Rapid Review Sheets/MIAE 215 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf'
                    : 'Miae 221/03 - 1-Page Rapid Review Sheets/MIAE 221 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.playClick()}
                >
                  <ExternalLink size={16} />
                  <span>Open PDF Cheatsheet</span>
                </a>
                <a
                  className="tp-btn-secondary"
                  href={course.id === 'MIAE215' ? '/cheatsheets/miae215-midterm.html' : '/cheatsheets/miae221-midterm.html'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.playClick()}
                >
                  <Printer size={15} />
                  <span>Printable Web Version (10pt)</span>
                </a>
                <a
                  className="tp-btn-secondary"
                  href={course.id === 'MIAE215' ? '/cheatsheets/miae215-cheatsheet.pdf' : '/cheatsheets/miae221-cheatsheet.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.playClick()}
                >
                  <ExternalLink size={15} />
                  <span>Public File (PDF)</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Official Practice Exams & Files */}
      {activeTab === 'files' && (
        <div className="tp-tab-content">
          {course.id === 'MIAE221' && (
            <div className="tp-archive-showcase">
              <div className="tp-archive-header">
                <div>
                  <span className="tp-archive-badge">
                    <Sparkles size={13} /> Multi-Instructor Post-2020 Exam Bank
                  </span>
                  <h3 className="tp-archive-title">Recent Post-2020 Midterm Exam Archive (2021–2026)</h3>
                  <p className="tp-archive-subtitle">
                    7 verified examination papers spanning Section X, Section X-A, Sections T &amp; Y, and multi-instructor classes taught by Drs. Mamoun Medraj, Martin Pugh, Navid Sharifi, Mamadou Sy, and Sam Eskandarian.
                  </p>
                </div>
                <div className="tp-archive-header-actions">
                  {blueprint.practiceFiles.find((f) => f.id === '221-recent-post2020-archive') && (
                    <button
                      className="tp-btn-primary"
                      onClick={() => {
                        const target = blueprint.practiceFiles.find((f) => f.id === '221-recent-post2020-archive');
                        if (target) handleOpenPdf(target);
                      }}
                    >
                      <Eye size={16} />
                      <span>Preview Master Guide (PDF)</span>
                    </button>
                  )}
                  {blueprint.practiceFiles.find((f) => f.id === '221-recent-post2020-archive') && (
                    <a
                      className="tp-btn-secondary"
                      href={getPdfUrl(blueprint.practiceFiles.find((f) => f.id === '221-recent-post2020-archive')!.relativePath)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audio.playClick()}
                    >
                      <ExternalLink size={15} />
                      <span>Open Archive</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="tp-archive-grid">
                {MIAE221_VERIFIED_PAPERS.map((paper) => (
                  <div key={paper.id} className="tp-archive-card">
                    <div className="tp-archive-img-wrap">
                      <img src={paper.image} alt={paper.title} className="tp-archive-img" loading="lazy" />
                    </div>
                    <div className="tp-archive-card-meta">
                      <span className="tp-archive-term">{paper.term}</span>
                      <span className="tp-archive-id">Studocu #{paper.docId}</span>
                    </div>
                    <h4 className="tp-archive-card-title">{paper.title}</h4>
                    <p className="tp-archive-card-prof">
                      <GraduationCap size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                      {paper.prof}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="tp-files-grid">
            {blueprint.practiceFiles.map((file) => {
              const url = getPdfUrl(file.relativePath);
              return (
                <div key={file.id} className="tp-file-card">
                  <div className="tp-file-top">
                    <span className="tp-file-badge">{file.badge}</span>
                    <span className="tp-file-year">{file.termYear}</span>
                  </div>

                  <h3 className="tp-file-title">{file.title}</h3>
                  <div className="tp-file-instructor">
                    <GraduationCap size={14} /> {file.instructor}
                  </div>
                  <p className="tp-file-desc">{file.description}</p>

                  <div className="tp-topic-tags">
                    {file.keyTopics.map((topic, i) => (
                      <span key={i} className="tp-tag">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="tp-file-actions">
                    {file.fileType === 'pdf' ? (
                      <>
                        <button className="tp-btn-primary" onClick={() => handleOpenPdf(file)}>
                          <Eye size={16} />
                          <span>Preview PDF</span>
                        </button>
                        {file.badge === '1-Page Memory Aide' && (
                          <a
                            className="tp-btn-secondary"
                            href={course.id === 'MIAE215' ? '/cheatsheets/miae215-midterm.html' : '/cheatsheets/miae221-midterm.html'}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open printable 10pt single-sided HTML version"
                            onClick={() => audio.playClick()}
                          >
                            <Printer size={14} />
                            <span>Print (10pt)</span>
                          </a>
                        )}
                        <a
                          className="tp-btn-secondary"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => audio.playClick()}
                        >
                          <ExternalLink size={14} />
                          <span>New Tab</span>
                        </a>
                      </>
                    ) : (
                      <button
                        className="tp-btn-primary"
                        onClick={() => {
                          audio.playClick();
                          setActiveTab('trace');
                        }}
                      >
                        <Code size={16} />
                        <span>Inspect Memory Trace</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Teacher Traps & Tricks */}
      {activeTab === 'traps' && (
        <div className="tp-tab-content">
          <div className="tp-traps-list">
            {blueprint.trapsAndTricks.map((item, idx) => (
              <div key={idx} className="tp-trap-card">
                <div className="tp-trap-title-row">
                  <span className="tp-trap-num">#{idx + 1}</span>
                  <h4>{item.title}</h4>
                </div>
                <p className="tp-trap-desc">
                  <MathText text={item.description} />
                </p>

                <div className="tp-trap-compare-grid">
                  <div className="tp-trap-box tp-correct">
                    <div className="tp-box-header">
                      <CheckCircle2 size={16} /> Verified Teacher Method
                    </div>
                    <p>
                      <MathText text={item.correctMethod} />
                    </p>
                  </div>
                  <div className="tp-trap-box tp-error">
                    <div className="tp-box-header">
                      <AlertTriangle size={16} /> Common Student Pitfall
                    </div>
                    <p>
                      <MathText text={item.commonTrap} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Dr. Gordon Table Trace Lab (MIAE 215 exclusive) */}
      {activeTab === 'trace' && course.id === 'MIAE215' && (
        <div className="tp-tab-content">
          <div className="tp-trace-container">
            <div className="tp-trace-intro">
              <Code size={20} style={{ color: '#10b981' }} />
              <div>
                <h3>Dr. Brandon Gordon’s Official Midterm Q2 Solution &amp; Interactive Simulator</h3>
                <p>
                  Extracted directly from Dr. Gordon's Fall 2023 Midterm Question 2 solution file. Follow the execution line-by-line below with Back, Next and Restart!
                </p>
              </div>
            </div>

            {/* Sub-tab Switcher for Tracing Lab */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '1rem 0' }}>
              <button
                type="button"
                className={`tp-tab-btn ${tracePart === 'part_a' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setTracePart('part_a');
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                  border: tracePart === 'part_a' ? '1.5px solid #2563eb' : '1px solid #cbd5e1',
                  background: tracePart === 'part_a' ? 'rgba(37, 99, 235, 0.1)' : 'var(--surface, #ffffff)',
                  color: tracePart === 'part_a' ? '#1d4ed8' : 'var(--text-secondary, #475569)',
                  cursor: 'pointer'
                }}
              >
                🎮 Part (a) Simulator: While Loop &amp; Break [14 Marks]
              </button>

              <button
                type="button"
                className={`tp-tab-btn ${tracePart === 'part_b' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setTracePart('part_b');
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                  border: tracePart === 'part_b' ? '1.5px solid #2563eb' : '1px solid #cbd5e1',
                  background: tracePart === 'part_b' ? 'rgba(37, 99, 235, 0.1)' : 'var(--surface, #ffffff)',
                  color: tracePart === 'part_b' ? '#1d4ed8' : 'var(--text-secondary, #475569)',
                  cursor: 'pointer'
                }}
              >
                🎮 Part (b) Simulator: For Loop &amp; Garbage Value [5 Marks]
              </button>

              <button
                type="button"
                className={`tp-tab-btn ${tracePart === 'tables' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setTracePart('tables');
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                  border: tracePart === 'tables' ? '1.5px solid #10b981' : '1px solid #cbd5e1',
                  background: tracePart === 'tables' ? 'rgba(16, 185, 129, 0.1)' : 'var(--surface, #ffffff)',
                  color: tracePart === 'tables' ? '#047857' : 'var(--text-secondary, #475569)',
                  cursor: 'pointer'
                }}
              >
                📋 Static Trace Tables &amp; Mark Scheme
              </button>
            </div>

            {tracePart === 'part_a' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <CppCodeSimulator
                  preloadedTrace={F23_A_TRACE}
                  codeSnippet={F23_A_TRACE.code}
                  options={F23_A_TRACE.options}
                  correctOptionIndex={F23_A_TRACE.correctOptionIndex}
                  whyWrong={F23_A_TRACE.whyWrong}
                />
              </div>
            )}

            {tracePart === 'part_b' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <CppCodeSimulator
                  preloadedTrace={F23_B_TRACE}
                  codeSnippet={F23_B_TRACE.code}
                  options={F23_B_TRACE.options}
                  correctOptionIndex={F23_B_TRACE.correctOptionIndex}
                  whyWrong={F23_B_TRACE.whyWrong}
                />
              </div>
            )}

            {tracePart === 'tables' && (
              <>
            <div className="tp-trace-card">
              <h4>Part (a) [14 Marks]: While Loop with Array Indexing &amp; Conditional Break</h4>
              <pre className="tp-code-block">
{`int a=1, b=2, B[] = { 11, 7, 6, 5 }; 
int i=0, sum = 0;
while(1) { 
    sum += B[i];
    if(i > 2) break; 
    a += B[i+1]; 
    i++; 
    cout << "\\n" << i << " " << a; // output on each step
} 
b = sum - i; 
cout << "\\n" << sum << " " << a << " " << b;`}
              </pre>

              <div className="tp-table-wrapper">
                <table className="tp-trace-table">
                  <thead>
                    <tr>
                      <th>Line</th>
                      <th><code>i</code></th>
                      <th><code>sum</code></th>
                      <th><code>a</code></th>
                      <th><code>b</code></th>
                      <th><code>cout</code> Output Box</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Init</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>2</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>Iteration 1</td>
                      <td>1</td>
                      <td>11</td>
                      <td>8</td>
                      <td>2</td>
                      <td><code>1 8</code></td>
                    </tr>
                    <tr>
                      <td>Iteration 2</td>
                      <td>2</td>
                      <td>18</td>
                      <td>14</td>
                      <td>2</td>
                      <td><code>2 14</code></td>
                    </tr>
                    <tr>
                      <td>Iteration 3</td>
                      <td>3</td>
                      <td>24</td>
                      <td>19</td>
                      <td>2</td>
                      <td><code>3 19</code></td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.08)' }}>
                      <td>Break & Final</td>
                      <td>3</td>
                      <td>29</td>
                      <td>19</td>
                      <td><strong>26</strong> (29 - 3)</td>
                      <td><strong><code>29 19 26</code></strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tp-trace-card" style={{ marginTop: '1.5rem' }}>
              <h4>Part (b) [5 Marks]: For Loop & Array Boundary Garbage Value (`G`)</h4>
              <pre className="tp-code-block">
{`int i;
double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;
for(i=0; i<4; i++) {
    if(A[i] < -0.11) {
        x += 1;
    } else if (A[i] > 0.1) {
        x -= 10;
    } else {
        x = 7 + 1/(i+1); // Note: 1/(i+1) integer truncates!
    }
    cout << "\\n" << x;
}
cout << "\\n" << A[i]; // i = 4 (out of bounds -> Garbage!)`}
              </pre>

              <div className="tp-output-box-visual">
                <strong>Final Output in Box:</strong>
                <div className="tp-output-lines">
                  <div>8</div>
                  <div>-2</div>
                  <div>7</div>
                  <div>-3</div>
                  <div className="tp-garbage-tag">Garbage (or G)</div>
                </div>
              </div>
            </div>
            </>
            )}
          </div>
        </div>
      )}

      {/* Tab 5: Official Dr. Gordon Exam Paper Replica (31 Questions) */}
      {activeTab === 'exam_paper' && course.id === 'MIAE215' && (
        <div className="tp-tab-content" style={{ padding: 0 }}>
          <Miae215ExamPaper
            onLaunchDrill={() =>
              onLaunchDrill(course.id, teacherDrillId({ topic: 'all', count: 'all', ordered: true }))
            }
          />
        </div>
      )}

      {/* Teacher's practice midterm (Fall 2026) with a video solution per question */}
      {activeTab === 'practice_2026' && course.id === 'MIAE215' && (
        <div className="tp-tab-content">
          <PracticeMidterm2026 />
        </div>
      )}

      {/* Tab 6: Interactive C++ Midterm Code Lab (55-60% Weight) */}
      {activeTab === 'code_lab' && course.id === 'MIAE215' && (
        <div className="tp-tab-content" style={{ padding: 0 }}>
          <CppCodeLab />
        </div>
      )}
    </div>
  );
};

const COUNT_CHOICES = [5, 10, 20] as const;

// Drill options: which subject (or everything), how many questions, and shuffled vs paper order
const TeacherExamDrillSetup: React.FC<{ courseId: CourseId; onStart: (sectionId: string) => void }> = ({ courseId, onStart }) => {
  const set = TEACHER_EXAM_SETS[courseId]!;
  const questions = useMemo(() => teacherQuestionsFor(courseId), [courseId]);
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of questions) counts[q.topic] = (counts[q.topic] ?? 0) + 1;
    return counts;
  }, [questions]);

  const [topic, setTopic] = useState<string>('all');
  const [count, setCount] = useState<number | 'all'>('all');
  const [ordered, setOrdered] = useState<boolean>(false);

  const topicLabel = set.topics.find((tp) => tp.id === topic)?.label;
  const poolSize = topic === 'all' ? questions.length : topicCounts[topicLabel ?? ''] ?? 0;
  const useAll = count === 'all' || count >= poolSize;
  const size = useAll ? poolSize : (count as number);

  const pick = (fn: () => void) => {
    audio.playClick();
    fn();
  };

  const start = (sectionId: string) => {
    audio.playClick();
    onStart(sectionId);
  };

  return (
    <div className="tp-tab-content tp-drill">
      <p className="tp-drill-intro">
        Every question from the teacher’s practice paper{courseId === 'MIAE215' ? 's' : ''} ({set.paper}). After each answer you get the
        worked solution, why each wrong option is wrong, and the exact question it came from.
      </p>

      <div className="tp-drill-quick">
        <button className="tp-drill-quick-btn" onClick={() => start(teacherDrillId({ topic: 'all', count: 'all', ordered: true }))}>
          <FileText size={20} />
          <strong>Full practice exam</strong>
          <span>All {questions.length} questions in the paper’s order</span>
        </button>
        <button className="tp-drill-quick-btn" onClick={() => start(teacherDrillId({ topic: 'all', count: 'all', ordered: false }))}>
          <Shuffle size={20} />
          <strong>Everything, shuffled</strong>
          <span>All {questions.length} questions in random order</span>
        </button>
        <button className="tp-drill-quick-btn" onClick={() => start(teacherDrillId({ topic: 'all', count: 10, ordered: false }))}>
          <Zap size={20} />
          <strong>Quick 10</strong>
          <span>10 random questions from every subject</span>
        </button>
      </div>

      <div className="tp-info-card tp-drill-custom">
        <div className="tp-card-header">
          <Target size={18} style={{ color: 'var(--accent)' }} />
          <h3>Build your own drill</h3>
        </div>

        <div className="tp-drill-label" id="tp-drill-subject">Subject</div>
        <div className="tp-chip-row" role="radiogroup" aria-labelledby="tp-drill-subject">
          <button className={`tp-chip ${topic === 'all' ? 'active' : ''}`} role="radio" aria-checked={topic === 'all'} onClick={() => pick(() => setTopic('all'))}>
            All subjects <small>{questions.length}</small>
          </button>
          {set.topics.map((tp) => (
            <button
              key={tp.id}
              className={`tp-chip ${topic === tp.id ? 'active' : ''}`}
              role="radio"
              aria-checked={topic === tp.id}
              onClick={() => pick(() => setTopic(tp.id))}
            >
              {tp.label} <small>{topicCounts[tp.label] ?? 0}</small>
            </button>
          ))}
        </div>

        <div className="tp-drill-label" id="tp-drill-count">Number of questions</div>
        <div className="tp-chip-row" role="radiogroup" aria-labelledby="tp-drill-count">
          {COUNT_CHOICES.filter((c) => c < poolSize).map((c) => (
            <button
              key={c}
              className={`tp-chip ${!useAll && count === c ? 'active' : ''}`}
              role="radio"
              aria-checked={!useAll && count === c}
              onClick={() => pick(() => setCount(c))}
            >
              {c}
            </button>
          ))}
          <button className={`tp-chip ${useAll ? 'active' : ''}`} role="radio" aria-checked={useAll} onClick={() => pick(() => setCount('all'))}>
            All {poolSize}
          </button>
        </div>

        <div className="tp-drill-label" id="tp-drill-order">Order</div>
        <div className="tp-chip-row" role="radiogroup" aria-labelledby="tp-drill-order">
          <button className={`tp-chip ${!ordered ? 'active' : ''}`} role="radio" aria-checked={!ordered} onClick={() => pick(() => setOrdered(false))}>
            Shuffled
          </button>
          <button className={`tp-chip ${ordered ? 'active' : ''}`} role="radio" aria-checked={ordered} onClick={() => pick(() => setOrdered(true))}>
            Paper order
          </button>
        </div>

        <button
          className="tp-start-drill-btn tp-drill-start"
          disabled={size === 0}
          onClick={() => start(teacherDrillId({ topic, count: useAll ? 'all' : size, ordered }))}
        >
          <Brain size={18} />
          <span>
            Start {size}-question drill{topicLabel ? ` · ${topicLabel}` : ''}
          </span>
        </button>
      </div>
    </div>
  );
};
