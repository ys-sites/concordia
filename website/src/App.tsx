import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { CourseId, CourseDocument } from './types';
import { COURSES_DATA, documentFromPath } from './data/coursesData';
import { Navbar } from './components/Navbar';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import { HeroCourseSelector } from './components/HeroCourseSelector';
import { Footer } from './components/Footer';
import { TEACHER_PRACTICE_FOLDER } from './data/teacherPracticeCourses';
import { audio } from './utils/audio';
import { parseHash, formatHash, RouteState } from './utils/navigationRouter';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { safeLazy } from './utils/safeLazy';

// Screens that need the ~1 MB question bank load on demand, so the first page paints fast
const QuizEngine = safeLazy(() => import('./components/QuizEngine').then((m) => ({ default: m.QuizEngine })));
const QuizResults = safeLazy(() => import('./components/QuizResults').then((m) => ({ default: m.QuizResults })));
const QuestionBankBrowser = safeLazy(() => import('./components/QuestionBankBrowser').then((m) => ({ default: m.QuestionBankBrowser })));
const DrillPicker = safeLazy(() => import('./components/DrillPicker').then((m) => ({ default: m.DrillPicker })));
// The course page carries KaTeX and the document lists; it is prefetched while idle after the first paint
const loadWorkspace = () => import('./components/CourseWorkspace');
const CourseWorkspace = safeLazy(() => loadWorkspace().then((m) => ({ default: m.CourseWorkspace })));
if (typeof window !== 'undefined') {
  // after the page has fully loaded, in idle time, so it never competes with the first render
  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback;
  const prefetch = () => {
    const run = () => {
      loadWorkspace().catch(() => {
        // Silently catch background prefetch failure to avoid triggering reload loops
      });
    };
    if (idle) idle(run, { timeout: 4000 });
    else setTimeout(run, 1500);
  };
  if (document.readyState === 'complete') prefetch();
  else window.addEventListener('load', prefetch, { once: true });
}
// Opened on demand, so neither ships in the first-load bundle
const PdfViewerModal = safeLazy(() => import('./components/PdfViewerModal').then((m) => ({ default: m.PdfViewerModal })));
const ContactModal = safeLazy(() => import('./components/ContactModal').then((m) => ({ default: m.ContactModal })));
const FilteredSubSite = safeLazy(() => import('./components/FilteredSubSite').then((m) => ({ default: m.FilteredSubSite })));

type ViewMode = 'HERO' | 'WORKSPACE' | 'QUIZ' | 'RESULTS' | 'QUESTION_BANK' | 'FILTERED_DOCUMENT';

function findDoc(courseId: CourseId | null, docPath: string | null): CourseDocument | null {
  if (!docPath) return null;
  const decoded = decodeURIComponent(docPath);
  for (const course of COURSES_DATA) {
    if (!courseId || course.id === courseId) {
      const found = course.documents.find(
        (d) => d.relativePath === decoded || d.relativePath === docPath || d.id === decoded || d.filename === decoded
      );
      if (found) return found;
    }
  }
  // Documents outside the course folders (protected sections, teacher exams): build the entry from its path
  if (/\.pdf$/i.test(decoded)) {
    const doc = documentFromPath(decoded);
    if (doc && (!courseId || doc.courseId === courseId)) return doc;
  }
  return null;
}

export function App() {
  const initialRoute = useMemo(() => parseHash(window.location.hash), []);

  const [viewMode, setViewMode] = useState<ViewMode>(initialRoute.viewMode);
  const [selectedCourseId, setSelectedCourseId] = useState<CourseId | null>(initialRoute.courseId);
  const [folderPath, setFolderPath] = useState<string[]>(initialRoute.folderPath);
  const [quizTarget, setQuizTarget] = useState<{ courseId: CourseId; sectionId: string } | null>(initialRoute.quizTarget);
  const [drillRun, setDrillRun] = useState<number>(0);
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);
  const [pickerCourse, setPickerCourse] = useState<CourseId | null>(null);
  const [activePdfDoc, setActivePdfDoc] = useState<CourseDocument | null>(() =>
    findDoc(initialRoute.courseId, initialRoute.docPath)
  );
  const [activePdfPage, setActivePdfPage] = useState<number | undefined>(undefined);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [quizResults, setQuizResults] = useState<any>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Initialize hash if empty
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }
  }, []);

  // Listen to browser Back/Forward (popstate) and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const route = parseHash(window.location.hash);
      setViewMode(route.viewMode);
      setSelectedCourseId(route.courseId);
      setFolderPath(route.folderPath);
      setQuizTarget(route.quizTarget);
      if (route.docPath) {
        setActivePdfDoc(findDoc(route.courseId, route.docPath));
      } else {
        setActivePdfDoc(null);
      }
    };

    window.addEventListener('popstate', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Central state & history pusher
  const navigateTo = (nextState: Partial<RouteState>, replace = false) => {
    const fullState: RouteState = {
      viewMode: nextState.viewMode !== undefined ? nextState.viewMode : viewMode,
      courseId: nextState.courseId !== undefined ? nextState.courseId : selectedCourseId,
      folderPath:
        nextState.folderPath !== undefined
          ? nextState.folderPath
          : nextState.courseId !== undefined && nextState.courseId !== selectedCourseId
          ? []
          : folderPath,
      docPath: nextState.docPath !== undefined ? nextState.docPath : null,
      quizTarget: nextState.quizTarget !== undefined ? nextState.quizTarget : null,
    };

    const newHash = formatHash(fullState);
    if (window.location.hash !== newHash) {
      if (replace) {
        window.history.replaceState(null, '', newHash);
      } else {
        window.history.pushState(null, '', newHash);
      }
    }

    setViewMode(fullState.viewMode);
    setSelectedCourseId(fullState.courseId);
    setFolderPath(fullState.folderPath);
    setQuizTarget(fullState.quizTarget);
    if (fullState.docPath) {
      setActivePdfDoc(findDoc(fullState.courseId, fullState.docPath));
    } else {
      setActivePdfDoc(null);
    }
    window.scrollTo(0, 0);
  };

  // Toggle sound
  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audio.enabled = nextState;
  };

  // Switch Course
  const handleSelectCourse = (courseId: CourseId | null) => {
    if (courseId === null) {
      navigateTo({ viewMode: 'HERO', courseId: null, folderPath: [], docPath: null, quizTarget: null });
    } else {
      navigateTo({ viewMode: 'WORKSPACE', courseId, folderPath: [], docPath: null, quizTarget: null });
    }
  };

  // Folder navigation inside a course workspace
  const handleFolderChange = (nextPath: string[]) => {
    navigateTo({ viewMode: 'WORKSPACE', courseId: selectedCourseId, folderPath: nextPath, docPath: null });
  };

  // View PDF Document (optionally jumping directly to a slide/page)
  const handleViewPdf = (doc: CourseDocument, initialPage?: number) => {
    setActivePdfPage(initialPage);
    setActivePdfDoc(doc);
    if (viewMode !== 'QUIZ' && viewMode !== 'RESULTS' && viewMode !== 'QUESTION_BANK') {
      navigateTo({ viewMode: 'WORKSPACE', courseId: doc.courseId, folderPath, docPath: doc.relativePath });
    }
  };

  // Close PDF Document
  const handleClosePdf = () => {
    setActivePdfPage(undefined);
    const cur = parseHash(window.location.hash);
    if (cur.docPath) {
      window.history.back();
    } else {
      setActivePdfDoc(null);
    }
  };

  // Start quiz picker
  const handleStartQuiz = (courseId: CourseId | 'ALL') => {
    setPickerCourse(courseId === 'ALL' ? null : courseId);
    setPickerOpen(true);
  };

  const launchDrill = (courseId: CourseId, sectionId: string) => {
    setPickerOpen(false);
    setDrillRun((n) => n + 1);
    navigateTo({
      viewMode: 'QUIZ',
      courseId,
      folderPath: [],
      docPath: null,
      quizTarget: { courseId, sectionId }
    });
  };

  // Complete Quiz Drill
  const handleQuizComplete = (results: any) => {
    setQuizResults(results);
    navigateTo({
      viewMode: 'RESULTS',
      courseId: results.courseId,
      folderPath: [],
      docPath: null,
      quizTarget: { courseId: results.courseId, sectionId: quizTarget?.sectionId || 'drill' }
    });
  };

  // Open Full Question Bank
  const handleOpenQuestionBank = () => {
    navigateTo({ viewMode: 'QUESTION_BANK', courseId: selectedCourseId, folderPath: [], docPath: null });
  };

  const handleExitQuiz = () => {
    if (selectedCourseId) {
      navigateTo({ viewMode: 'WORKSPACE', courseId: selectedCourseId, folderPath: [], docPath: null });
    } else {
      navigateTo({ viewMode: 'HERO', courseId: null, folderPath: [], docPath: null });
    }
  };

  const currentCourse = COURSES_DATA.find((c) => c.id === selectedCourseId) || null;

  if (viewMode === 'FILTERED_DOCUMENT') {
    return (
      <>
        <Suspense fallback={null}>
          <FilteredSubSite />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  return (
    <div className="app-root">
      {/* Universal Navigation Bar */}
      <Navbar 
        activeCourseId={selectedCourseId}
        onSelectCourse={handleSelectCourse}
        onStartQuiz={handleStartQuiz}
        onOpenQuestionBank={handleOpenQuestionBank}
        onOpenContact={() => setContactOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Dynamic Viewport */}
      <main className="main-content-layout">
        {/* a failed page shows a recovery card under the navbar instead of blanking the site; cleared on navigation */}
        <AppErrorBoundary resetKey={`${viewMode}|${selectedCourseId ?? ''}|${window.location.hash}`}>
        <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
        {viewMode === 'HERO' && (
          <HeroCourseSelector 
            onSelectCourse={handleSelectCourse}
            onStartQuiz={handleStartQuiz}
            onOpenQuestionBank={handleOpenQuestionBank}
            onOpenTeacherPractice={(courseId: CourseId) => {
              navigateTo({
                viewMode: 'WORKSPACE',
                courseId,
                folderPath: [TEACHER_PRACTICE_FOLDER],
                docPath: null
              });
            }}
          />
        )}

        {viewMode === 'WORKSPACE' && currentCourse && (
          <CourseWorkspace 
            course={currentCourse}
            folderPath={folderPath}
            onNavigateFolder={handleFolderChange}
            onBack={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                handleSelectCourse(null);
              }
            }}
            onStartQuiz={handleStartQuiz}
            onLaunchDrill={launchDrill}
            onViewPdf={handleViewPdf}
          />
        )}

        {viewMode === 'QUIZ' && quizTarget && (
          <QuizEngine 
            key={drillRun}
            courseId={quizTarget.courseId}
            sectionId={quizTarget.sectionId}
            onExit={handleExitQuiz}
            onOpenPdf={handleViewPdf}
            onComplete={handleQuizComplete}
          />
        )}

        {viewMode === 'RESULTS' && quizResults && (
          <QuizResults 
            results={quizResults}
            onRestartNewCycle={() => {
              setDrillRun((n) => n + 1);
              navigateTo({
                viewMode: 'QUIZ',
                courseId: quizResults.courseId,
                folderPath: [],
                docPath: null,
                quizTarget: { courseId: quizResults.courseId, sectionId: quizTarget?.sectionId || 'drill' }
              });
            }}
            onBackToCourse={() => {
              if (selectedCourseId) {
                navigateTo({ viewMode: 'WORKSPACE', courseId: selectedCourseId, folderPath: [], docPath: null });
              } else {
                navigateTo({ viewMode: 'HERO', courseId: null, folderPath: [], docPath: null });
              }
            }}
            onOpenPdf={handleViewPdf}
          />
        )}

        {viewMode === 'QUESTION_BANK' && (
          <QuestionBankBrowser 
            onBack={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else if (selectedCourseId) {
                navigateTo({ viewMode: 'WORKSPACE', courseId: selectedCourseId, folderPath: [], docPath: null });
              } else {
                navigateTo({ viewMode: 'HERO', courseId: null, folderPath: [], docPath: null });
              }
            }}
            onStartQuiz={handleStartQuiz}
            onOpenPdf={handleViewPdf}
          />
        )}
        </Suspense>
        </AppErrorBoundary>
      </main>

      {pickerOpen && (
        <Suspense fallback={null}>
          <DrillPicker open={pickerOpen} initialCourseId={pickerCourse} onClose={() => setPickerOpen(false)} onStart={launchDrill} />
        </Suspense>
      )}

      {/* Embedded PDF Viewer Modal with direct slide jumping */}
      {activePdfDoc && (
        <Suspense fallback={null}>
          <PdfViewerModal document={activePdfDoc} initialPage={activePdfPage} onClose={handleClosePdf} />
        </Suspense>
      )}

      {/* FormSubmit Contact Modal */}
      {contactOpen && (
        <Suspense fallback={null}>
          <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
        </Suspense>
      )}

      {/* High-Fidelity Professional Engineering Footer */}
      <Footer 
        onSelectCourse={handleSelectCourse}
        onStartQuiz={handleStartQuiz}
        onOpenQuestionBank={handleOpenQuestionBank}
        onOpenContact={() => setContactOpen(true)}
      />

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
