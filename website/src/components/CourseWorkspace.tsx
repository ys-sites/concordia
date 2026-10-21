import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument, CourseId } from '../types';
import {
  FileText,
  Search,
  ExternalLink,
  Eye,
  Brain,
  ArrowLeft,
  Folder,
  ChevronRight,
  Home,
  BookOpen,
  Library,
  Zap,
  Calculator,
  ClipboardList,
  Cpu,
  Target,
  Compass,
  Code,
  GraduationCap,
  Layers,
  Archive,
  FolderOpen,
  Video,
  Lock,
  X,
  AlertTriangle,
  Sparkles,
  Clapperboard,
  Download,
  Printer
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import {
  buildFolderTree,
  compareDocs,
  displayTitle,
  findFolder,
  FolderNode,
  splitFolderName,
  getVideoUrl,
  getTutorialExamInfo
} from '../utils/docOrganization';
// Password-protected sections carry the large protected-document list: load them only when opened
const FilteredDocumentSection = lazy(() => import('./FilteredDocumentSection').then((m) => ({ default: m.FilteredDocumentSection })));
const TermPaperVaultSection = lazy(() => import('./TermPaperVaultSection').then((m) => ({ default: m.TermPaperVaultSection })));
import { TspFactorialSimulator } from './TspFactorialSimulator';
import { GateGlyph } from './vault/GateGlyph';
import { hasGate, hasPaperDrill } from './vault/gateCourses';
import { WeeklyPath, WEEKLY_FOLDER, hasWeeklyPath } from './WeeklyPath';

// Hidden MIAE 221 folder, opened from the glyph after the course title. Loaded on demand.
const MidtermGate = lazy(() => import('./vault/MidtermGate'));
const GATE_FOLDER = 'Midterm Gate';

// Only MIAE 221 and MIAE 215 have teacher practice papers; the section (and its question data) loads on demand
const TeacherMidtermPracticeSection = lazy(() =>
  import('./TeacherMidtermPracticeSection').then((m) => ({ default: m.TeacherMidtermPracticeSection }))
);
const Engr213MidtermCompanion = lazy(() =>
  import('./Engr213MidtermCompanion').then((m) => ({ default: m.Engr213MidtermCompanion }))
);
// MIAE 221 narrated topic videos (folder name matches Miae 221/08 - Teacher Topics Explained AI Videos)
const Miae221TopicVideos = lazy(() => import('./Miae221TopicVideos'));
const MIAE_VIDEO_FOLDER = '08 - Teacher Topics Explained AI Videos';
const ExamCheatsheetSection = lazy(() =>
  import('./ExamCheatsheetSection').then((m) => ({ default: m.ExamCheatsheetSection }))
);
import { TEACHER_PRACTICE_FOLDER, hasTeacherPractice } from '../data/teacherPracticeCourses';

// The course badge opens a Skill Drill on last year's midterm paper (kept out of the hidden folder)
export const INDU_PREP_FOLDER = 'Industrial Engineering Midterm Preparation';

interface CourseWorkspaceProps {
  course: CourseWithDocs;
  folderPath?: string[];
  onNavigateFolder?: (path: string[]) => void;
  onBack: () => void;
  onStartQuiz: (courseId: CourseId) => void;
  onLaunchDrill?: (courseId: CourseId, sectionId: string) => void;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
}

const folderIcon = (name: string, size = 22) => {
  const n = name.toLowerCase();
  if (/archive|alternative/.test(n)) return <Archive size={size} />;
  if (/overview|syllabus|outline/.test(n)) return <Compass size={size} />;
  if (/lecture/.test(n)) return <BookOpen size={size} />;
  if (/topic guide|guides/.test(n)) return <Library size={size} />;
  if (/review sheet|rapid/.test(n)) return <Zap size={size} />;
  if (/problem|worked|practice/.test(n)) return <Calculator size={size} />;
  if (/assignment/.test(n)) return <ClipboardList size={size} />;
  if (/arduino|lab/.test(n)) return <Cpu size={size} />;
  if (/quiz|exam|midterm/.test(n)) return <Target size={size} />;
  if (/software|flowchart|code/.test(n)) return <Code size={size} />;
  if (/video|youtube|tutorial|problem solutions/i.test(n)) return <Video size={size} />;
  if (/mini course|lesson|leonard|dave/i.test(n)) return <GraduationCap size={size} />;
  if (/summary|chapter|calculus/.test(n)) return <Layers size={size} />;
  if (/filtered/.test(n)) return <Lock size={size} />;
  return <Folder size={size} />;
};

const formatFileSize = (bytes?: number) => {
  if (!bytes) return '';
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
};

const folderMeta = (node: FolderNode) => {
  const parts: string[] = [];
  if (node.folders.length) parts.push(`${node.folders.length} ${node.folders.length === 1 ? 'folder' : 'folders'}`);
  parts.push(`${node.totalDocs} ${node.totalDocs === 1 ? 'file' : 'files'}`);
  return parts.join(' · ');
};

export const CourseWorkspace: React.FC<CourseWorkspaceProps> = ({
  course,
  folderPath = [],
  onNavigateFolder,
  onBack,
  onStartQuiz,
  onLaunchDrill,
  onViewPdf
}) => {
  const [internalPath, setInternalPath] = useState<string[]>(folderPath);
  const [searchQuery, setSearchQuery] = useState<string>('');
  // Bumped when the Teacher Midterm Practice tab is clicked while already open: resets the section to its drill setup
  const [teacherResetKey, setTeacherResetKey] = useState<number>(0);


  // Keep internalPath synchronized with prop from navigationRouter
  useEffect(() => {
    setInternalPath((prev) => {
      if (prev.length === folderPath.length && prev.every((p, i) => p === folderPath[i])) {
        return prev;
      }
      return folderPath;
    });
  }, [folderPath]);

  const tree = useMemo(() => {
    const filteredDocs = course.documents.filter(
      (d) =>
        d.relativePath.split('/').length > 2 &&
        !/^(ENGR 213\.pdf|Paradis notes\.pdf|Engr 213 Tutor\.pdf)$/i.test(d.filename) &&
        !/^Engr 213\/ENGR 213\.pdf$/i.test(d.relativePath)
    );
    return buildFolderTree(filteredDocs);
  }, [course]);

  const activePath = folderPath !== undefined && folderPath.length >= 0 ? folderPath : internalPath;
  // Every course has a midterm blueprint; only MIAE 221 / MIAE 215 also have teacher practice papers (the exam drill)
  const hasPapers = hasTeacherPractice(course.id);
  const inTeacherPractice = activePath[0] === TEACHER_PRACTICE_FOLDER;
  const current = findFolder(tree, activePath) ?? tree;

  // Reset search when course changes
  useEffect(() => {
    setSearchQuery('');
  }, [course.id]);

  const openPath = (next: string[]) => {
    audio.playClick();
    setInternalPath(next);
    setSearchQuery('');
    if (onNavigateFolder) {
      onNavigateFolder(next);
    }
    window.scrollTo(0, 0);
  };

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return course.documents
      .filter((doc) =>
        [displayTitle(doc), doc.title, doc.filename, doc.relativePath].some((s) => s.toLowerCase().includes(q))
      )
      .sort((a, b) => a.relativePath.localeCompare(b.relativePath, undefined, { numeric: true }) || compareDocs(a, b));
  }, [course, searchQuery]);

  const isSearching = searchQuery.trim() !== '';

  const renderFolderTile = (node: FolderNode) => {
    const { index, name } = splitFolderName(node.name);
    return (
      <button key={node.name} className="fx-folder-tile" onClick={() => openPath(node.path)}>
        <span className="fx-folder-icon">{folderIcon(node.name)}</span>
        <span className="fx-folder-text">
          {index && <span className="fx-folder-index">{index}</span>}
          <span className="fx-folder-name">{name}</span>
          <span className="fx-folder-meta">{folderMeta(node)}</span>
        </span>
        <ChevronRight size={18} className="fx-folder-chevron" />
      </button>
    );
  };

  const renderFileRow = (doc: CourseDocument, number: number, showLocation = false) => {
    const url = getPdfUrl(doc.relativePath);
    const location = doc.relativePath.split('/').slice(1, -1).map((f) => splitFolderName(f).name);
    const examInfo = getTutorialExamInfo(doc);
    return (
      <li key={doc.id} className="fx-file-row">
        <span className="fx-file-number">{number}</span>
        <FileText size={18} className="fx-file-icon" />
        <button
          className="fx-file-main"
          onClick={() => {
            audio.playClick();
            onViewPdf(doc);
          }}
        >
          <span className="fx-file-title">{displayTitle(doc)}</span>
          <span className="fx-file-meta">
            {showLocation && location.length > 0 && <span className="fx-file-location">{location.join(' › ')}</span>}
            <span>PDF{doc.fileSizeBytes ? ` · ${formatFileSize(doc.fileSizeBytes)}` : ''}</span>
            {examInfo && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  color: examInfo.badgeColor,
                  backgroundColor: examInfo.badgeBg,
                  border: `1px solid ${examInfo.badgeColor}33`,
                  marginLeft: '4px'
                }}
              >
                {examInfo.badgeText}
              </span>
            )}
          </span>
        </button>
        <div className="fx-file-actions">
          {getVideoUrl(doc) && (
            <a
              className="fx-btn fx-btn-video"
              href={getVideoUrl(doc)!}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch tutorial video on YouTube"
              aria-label="Watch video"
              onClick={(e) => {
                e.stopPropagation();
                audio.playClick();
              }}
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                color: '#ef4444',
                borderColor: 'rgba(239, 68, 68, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Video size={14} />
              <span>Watch</span>
            </a>
          )}
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
            download={doc.filename}
            title={`Download ${doc.filename}`}
            aria-label="Download file"
            onClick={(e) => {
              e.stopPropagation();
              audio.playClick();
            }}
          >
            <Download size={14} />
            <span className="fx-btn-tab-text">Download</span>
          </a>
          <a 
            className="fx-btn fx-btn-tab" 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Open PDF directly in a new window / tab" 
            aria-label="Open in new window"
            onClick={(e) => {
              e.stopPropagation();
              audio.playClick();
            }}
          >
            <ExternalLink size={14} />
            <span className="fx-btn-tab-text">New Tab</span>
          </a>
        </div>
      </li>
    );
  };

  const currentLabel = splitFolderName(current.name);

  return (
    <div className="workspace-container" style={{ '--accent': course.accentHex } as React.CSSProperties}>
      {/* Course header */}
      <div className="workspace-header">
        <button
          className="back-btn"
          onClick={() => {
            audio.playClick();
            if (activePath.length > 0) {
              openPath(activePath.slice(0, -1));
            } else {
              onBack();
            }
          }}
        >
          <ArrowLeft size={16} />
          <span>{activePath.length > 0 ? 'Back to Parent Folder' : 'Back to All Courses'}</span>
        </button>

        <div className="workspace-title-row">
          <div>
            {hasPaperDrill(course.id) ? (
              <button
                type="button"
                className="course-badge"
                onClick={() => openPath([INDU_PREP_FOLDER])}
                title="Skill Drill: last year’s midterm paper"
                style={{
                  backgroundColor: course.accentHex,
                  cursor: 'pointer',
                  border: 'none',
                  display: 'inline-block'
                }}
              >
                {course.code}
              </button>
            ) : (
              <div className="course-badge" style={{ backgroundColor: course.accentHex }}>
                {course.code}
              </div>
            )}
            <h1 className="course-main-title">
              {hasGate(course.id) ? (
                <>
                  {course.name.split(' ').slice(0, -1).join(' ')}{' '}
                  {/* keep the glyph on the same line as the last word */}
                  <span style={{ whiteSpace: 'nowrap' }}>
                    {course.name.split(' ').slice(-1)}
                    <GateGlyph onOpen={() => openPath([GATE_FOLDER])} />
                  </span>
                </>
              ) : (
                course.name
              )}
            </h1>
            <p className="course-sub-description">{course.description}</p>
          </div>

          <div className="workspace-header-actions">
            <button
              className="workspace-quiz-btn"
              onClick={() => {
                audio.playClick();
                onStartQuiz(course.id);
              }}
            >
              <Brain size={18} />
              <span>Start a Practice Drill</span>
            </button>
          </div>
        </div>
      </div>

      {/* Study Aspect Switcher Tabs: course folders vs the midterm section (exam drill + blueprint) */}
      {(
        <div className="workspace-aspect-tabs" role="tablist" aria-label="Course sections">
          <button
            className={`aspect-tab-btn ${!inTeacherPractice ? 'active' : ''}`}
            role="tab"
            aria-selected={!inTeacherPractice}
            onClick={() => {
              if (inTeacherPractice) openPath([]);
            }}
          >
            <BookOpen size={16} />
            <span>Course Materials &amp; Guides</span>
          </button>

          <button
            className={`aspect-tab-btn aspect-tab-teacher ${inTeacherPractice ? 'active' : ''}`}
            role="tab"
            aria-selected={inTeacherPractice}
            title={hasPapers ? "Drill every question from the teacher's practice exam" : 'Midterm scope, format, instructor notes and traps'}
            onClick={() => {
              if (inTeacherPractice) {
                // Already open: back to the section's first tab at the top instead of doing nothing
                audio.playClick();
                setTeacherResetKey((k) => k + 1);
                window.scrollTo(0, 0);
              } else {
                openPath([TEACHER_PRACTICE_FOLDER]);
              }
            }}
          >
            <Target size={16} />
            <span>{hasPapers ? 'Teacher Midterm Practice' : 'Midterm Blueprint'}</span>
            {hasPapers && (
              <span className="aspect-badge-confirmed">{course.id === 'MIAE221' ? 'Exam Oct 30' : 'Official Prep'}</span>
            )}
          </button>
        </div>
      )}

      {/* Breadcrumb + search */}
      <div className="fx-toolbar">
        <nav className="fx-breadcrumb" aria-label="Folder path">
          <button className={`fx-crumb ${activePath.length === 0 ? 'current' : ''}`} onClick={() => openPath([])}>
            <Home size={14} />
            <span>{course.code}</span>
          </button>
          {activePath.map((seg, i) => (
            <React.Fragment key={seg}>
              <ChevronRight size={14} className="fx-crumb-sep" />
              <button
                className={`fx-crumb ${i === activePath.length - 1 ? 'current' : ''}`}
                onClick={() => openPath(activePath.slice(0, i + 1))}
              >
                {splitFolderName(seg).name}
              </button>
            </React.Fragment>
          ))}
        </nav>

        <div className="search-box fx-search">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder={`Search all ${course.documents.length} files in ${course.code}…`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
      </div>

      {isSearching ? (
        <section className="fx-panel">
          <header className="fx-panel-header">
            <Search size={18} />
            <h2>
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for “{searchQuery.trim()}”
            </h2>
          </header>
          {searchResults.length === 0 ? (
            <p className="fx-empty">No files match. Try a lecture number, chapter, or topic.</p>
          ) : (
            <ol className="fx-file-list">{searchResults.map((doc, i) => renderFileRow(doc, i + 1, true))}</ol>
          )}
        </section>
      ) : activePath.length === 0 ? (
        <section>


          <h2 className="fx-section-title">Course folders</h2>
          <div className="fx-folder-grid">
            {tree.folders.map(renderFolderTile)}
            {hasWeeklyPath(course.id) && (
              <button key="weekly-path" className="fx-folder-tile" onClick={() => openPath([WEEKLY_FOLDER])}>
                <span className="fx-folder-icon">
                  <Layers size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">★</span>
                  <span className="fx-folder-name">{WEEKLY_FOLDER}</span>
                  <span className="fx-folder-meta">Teacher’s notes + expanded guides, week by week</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            {course.id === 'INDU211' && (
              <button
                key="term-paper-vault"
                className="fx-folder-tile"
                onClick={() => openPath(['Term Paper & Final Project'])}
              >
                <span className="fx-folder-icon" style={{ color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
                  <Lock size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">05</span>
                  <span className="fx-folder-name">Term Paper & Final Project</span>
                  <span className="fx-folder-meta">Protected Vault · GenAI Project</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            {course.id === 'INDU211' && (
              <button
                key="tsp-simulator-lab"
                className="fx-folder-tile"
                onClick={() => openPath(['Factorial & TSP Routing Lab'])}
              >
                <span className="fx-folder-icon" style={{ color: '#d97706', backgroundColor: 'rgba(245, 158, 11, 0.12)' }}>
                  <Compass size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">06</span>
                  <span className="fx-folder-name">Factorial & TSP Routing Lab</span>
                  <span className="fx-folder-meta">Interactive Route Simulator & Exam Trainer</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            {course.id === 'ENGR213' && (
              <button
                key="engr213-midterm-companion"
                className="fx-folder-tile"
                onClick={() => openPath([TEACHER_PRACTICE_FOLDER])}
              >
                <span className="fx-folder-icon" style={{ color: '#4f46e5', backgroundColor: 'rgba(79, 70, 229, 0.12)' }}>
                  <Sparkles size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">★</span>
                  <span className="fx-folder-name">Midterm Mastery &amp; Interactive Study Co-Pilot</span>
                  <span className="fx-folder-meta">10s Method Classifier · Zero-Formula Vault · Past Exams</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            {course.id === 'ENGR213' && (
              <button
                key="engr213-tutor-videos"
                className="fx-folder-tile"
                onClick={() => openPath(['Tutor Videos'])}
              >
                <span className="fx-folder-icon" style={{ color: '#9333ea', backgroundColor: 'rgba(147, 51, 234, 0.12)' }}>
                  <Clapperboard size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">08</span>
                  <span className="fx-folder-name">Tutor Videos (AI-Generated from Code)</span>
                  <span className="fx-folder-meta">8 narrated motion-graphics lessons · captions</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            {course.id === 'MIAE221' && (
              <button key="miae221-topic-videos" className="fx-folder-tile" onClick={() => openPath([MIAE_VIDEO_FOLDER])}>
                <span className="fx-folder-icon" style={{ color: '#be185d', backgroundColor: 'rgba(190, 24, 93, 0.1)' }}>
                  <Clapperboard size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">{String(tree.folders.length).padStart(2, '0')}</span>
                  <span className="fx-folder-name">Teacher Topics Explained AI Videos</span>
                  <span className="fx-folder-meta">10 narrated topic videos · every subtopic · captions</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            {course.id === 'MIAE215' && (
              <button
                key="cheatsheet-for-exam"
                className="fx-folder-tile"
                onClick={() => openPath(['Cheatsheet for the Exam'])}
              >
                <span className="fx-folder-icon" style={{ color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.12)' }}>
                  <Sparkles size={22} />
                </span>
                <span className="fx-folder-text">
                  <span className="fx-folder-index">
                    {String(tree.folders.length).padStart(2, '0')}
                  </span>
                  <span className="fx-folder-name">Cheatsheet for the exam</span>
                  <span className="fx-folder-meta">Official 1-Page Cheatsheet · Single-Sided · Easy Download</span>
                </span>
                <ChevronRight size={18} className="fx-folder-chevron" />
              </button>
            )}
            <button
              key="filtered-document"
              className="fx-folder-tile"
              onClick={() => openPath(['Filtered document'])}
            >
              <span className="fx-folder-icon">
                <Lock size={22} />
              </span>
              <span className="fx-folder-text">
                <span className="fx-folder-index">
                  {/* after the cheatsheet tile (MIAE 215) or topic-videos tile (MIAE 221) */}
                  {String(tree.folders.length + (course.id === 'MIAE215' || course.id === 'MIAE221' ? 1 : 0)).padStart(2, '0')}
                </span>
                <span className="fx-folder-name">Filtered document</span>
                <span className="fx-folder-meta">2 Sections · Assessment Vault</span>
              </span>
              <ChevronRight size={18} className="fx-folder-chevron" />
            </button>
          </div>
        </section>
      ) : inTeacherPractice ? (
        <Suspense fallback={<p className="fx-empty">Opening…</p>}>
          <TeacherMidtermPracticeSection
            key={teacherResetKey}
            course={course}
            onViewPdf={onViewPdf}
            onLaunchDrill={(courseId, sectionId) => (onLaunchDrill ? onLaunchDrill(courseId, sectionId) : onStartQuiz(courseId))}
            onBack={() => openPath([])}
          />
        </Suspense>
      ) : activePath[0] === 'Cheatsheet for the Exam' && course.id === 'MIAE215' ? (
        <Suspense fallback={<p className="fx-empty">Opening Cheatsheet…</p>}>
          <ExamCheatsheetSection
            course={course}
            onViewPdf={onViewPdf}
            onBack={() => openPath([])}
          />
        </Suspense>
      ) : activePath[0] === MIAE_VIDEO_FOLDER && course.id === 'MIAE221' ? (
        <Suspense fallback={<p className="fx-empty">Opening topic videos…</p>}>
          <Miae221TopicVideos
            onLaunchDrill={(sectionId) => (onLaunchDrill ? onLaunchDrill(course.id, sectionId) : onStartQuiz(course.id))}
            onBack={() => openPath([])}
          />
        </Suspense>
      ) : activePath[0] === 'Tutor Videos' ? (
        <Suspense fallback={<p className="fx-empty">Opening Tutor Videos…</p>}>
          <Engr213MidtermCompanion
            onViewPdf={onViewPdf}
            onBack={() => openPath([])}
            initialTab="tutor_videos"
          />
        </Suspense>
      ) : activePath[0] === INDU_PREP_FOLDER && hasPaperDrill(course.id) ? (
        <Suspense fallback={<p className="fx-empty">Opening…</p>}>
          <MidtermGate key="paper" course={course} onViewPdf={onViewPdf} paper />
        </Suspense>
      ) : activePath[0] === GATE_FOLDER && hasGate(course.id) ? (
        <Suspense fallback={<p className="fx-empty">Opening…</p>}>
          <MidtermGate key="gate" course={course} onViewPdf={onViewPdf} />
        </Suspense>
      ) : activePath[0] === WEEKLY_FOLDER && hasWeeklyPath(course.id) ? (
        <WeeklyPath course={course} onViewPdf={onViewPdf} />
      ) : activePath[0] === 'Factorial & TSP Routing Lab' ? (
        <TspFactorialSimulator onBack={() => openPath([])} />
      ) : activePath[0] === 'Term Paper & Final Project' ? (
        <Suspense fallback={<p className="fx-empty">Opening…</p>}>
          <TermPaperVaultSection course={course} onViewPdf={onViewPdf} />
        </Suspense>
      ) : activePath[0] === 'Filtered document' ? (
        <Suspense fallback={<p className="fx-empty">Opening…</p>}>
        <FilteredDocumentSection
          course={course}
          onViewPdf={onViewPdf}
          onStartMidtermDrill={(sectionId) => {
            if (onLaunchDrill) {
              onLaunchDrill(course.id, sectionId || 'midterm');
            } else {
              onStartQuiz(course.id);
            }
          }}
        />
        </Suspense>
      ) : (
        <section className="fx-panel">
          <header className="fx-panel-header">
            <span className="fx-panel-icon">{folderIcon(current.name, 20)}</span>
            <div className="fx-panel-heading">
              {currentLabel.index && <span className="fx-folder-index">{currentLabel.index}</span>}
              <h2>{currentLabel.name}</h2>
            </div>
            <span className="fx-panel-meta">{folderMeta(current)}</span>
          </header>

          {course.id === 'INDU211' && /worked problems/i.test(current.name) && (
            <div
              style={{
                margin: '12px 16px 8px',
                padding: '14px 18px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.05))',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, color: '#b45309', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <Compass size={18} />
                  <span>Interactive Factorial Complexity & TSP Route Simulator</span>
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-secondary, #4b5563)', marginTop: '3px' }}>
                  Simulate Nearest Neighbor routing on the Fall 2025 and 2020 Midterms, test (n-1)! combinatorial explosion, and drill T/F/MTF exam traps.
                </div>
              </div>
              <button
                type="button"
                className="fx-primary-btn"
                style={{
                  background: '#f59e0b',
                  color: '#ffffff',
                  border: 'none',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '12.5px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onClick={() => openPath(['Factorial & TSP Routing Lab'])}
              >
                Launch Simulator &rarr;
              </button>
            </div>
          )}

          {/youtube|tutorial/i.test(current.name) && (
            <div
              style={{
                margin: '12px 16px 4px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(234, 179, 8, 0.08)',
                border: '1px solid rgba(234, 179, 8, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                fontSize: '12px',
                lineHeight: '1.45',
                color: 'var(--text-secondary)'
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🎯 Midterm Coverage Notice (Midterm covers Chapters 1–5):</span>
              </div>
              <div>
                • <strong style={{ color: '#16a34a' }}>Required for Midterm</strong>: <strong>05 - Traveling Salesperson Problem</strong> (Chapter 5: Materials Handling & Warehouse Routing — <em>2020 Midterm Exam Problem 2</em>).
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                • <strong>Final Exam Scope (After Chapter 5)</strong>: <strong>01</strong> (Forecasting - Ch 7), <strong>02 & 06</strong> (Linear Programming - Ch 14), <strong>04</strong> (Queuing - Ch 15), <strong>07</strong> (SPC & Cp - Ch 8), and <strong>03</strong> (PERT/CPM - Ch 17).
              </div>
            </div>
          )}

          {current.folders.length > 0 && (
            <div className="fx-folder-grid fx-subfolders">{current.folders.map(renderFolderTile)}</div>
          )}

          {current.docs.length > 0 ? (
            <ol className="fx-file-list">{current.docs.map((doc, i) => renderFileRow(doc, i + 1))}</ol>
          ) : (
            current.folders.length === 0 && (
              <p className="fx-empty">
                <FolderOpen size={16} /> This folder is empty.
              </p>
            )
          )}
        </section>
      )}

    </div>
  );
};
