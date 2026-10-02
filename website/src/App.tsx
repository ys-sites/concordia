import React, { useState, useEffect, useMemo } from 'react';
import { CourseId, CourseDocument } from './types';
import { COURSES_DATA } from './data/coursesData';
import { Navbar } from './components/Navbar';
import { HeroCourseSelector } from './components/HeroCourseSelector';
import { CourseWorkspace } from './components/CourseWorkspace';
import { PdfViewerModal } from './components/PdfViewerModal';
import { QuizEngine } from './components/QuizEngine';
import { QuizResults } from './components/QuizResults';
import { QuestionBankBrowser } from './components/QuestionBankBrowser';
import { DrillPicker } from './components/DrillPicker';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FilteredSubSite } from './components/FilteredSubSite';
import { FILTERED_COURSES_DATA } from './data/filteredDocumentsData';
import { audio } from './utils/audio';
import { parseHash, formatHash, RouteState } from './utils/navigationRouter';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
  // Check Filtered Document Vault for all courses
  for (const key of Object.keys(FILTERED_COURSES_DATA) as CourseId[]) {
    if (!courseId || key === courseId) {
      const cfg = FILTERED_COURSES_DATA[key];
      const allDocs = [...cfg.assessmentDocs, ...cfg.midtermPrepDocs, ...(cfg.termPaperDocs || [])];
      const found = allDocs.find(
        (d) => d.relativePath === decoded || d.relativePath === docPath || d.id === decoded || d.filename === decoded
      );
      if (found) return { ...found, summary: found.summary || found.title };
    }
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
        <FilteredSubSite />
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
        {viewMode === 'HERO' && (
          <HeroCourseSelector 
            onSelectCourse={handleSelectCourse}
            onStartQuiz={handleStartQuiz}
            onOpenQuestionBank={handleOpenQuestionBank}
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
      </main>

      <DrillPicker
        open={pickerOpen}
        initialCourseId={pickerCourse}
        onClose={() => setPickerOpen(false)}
        onStart={launchDrill}
      />

      {/* Embedded PDF Viewer Modal with direct slide jumping */}
      <PdfViewerModal 
        document={activePdfDoc}
        initialPage={activePdfPage}
        onClose={handleClosePdf}
      />

      {/* FormSubmit Contact Modal */}
      <ContactModal 
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

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
