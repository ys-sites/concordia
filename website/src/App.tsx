import React, { useState } from 'react';
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
import { VisitorCounter } from './components/VisitorCounter';
import { audio } from './utils/audio';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

type ViewMode = 'HERO' | 'WORKSPACE' | 'QUIZ' | 'RESULTS' | 'QUESTION_BANK';

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('HERO');
  const [selectedCourseId, setSelectedCourseId] = useState<CourseId | null>(null);
  const [quizTarget, setQuizTarget] = useState<{ courseId: CourseId; sectionId: string } | null>(null);
  const [drillRun, setDrillRun] = useState<number>(0); // remounts the engine for a fresh shuffle
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);
  const [pickerCourse, setPickerCourse] = useState<CourseId | null>(null);
  const [activePdfDoc, setActivePdfDoc] = useState<CourseDocument | null>(null);
  const [quizResults, setQuizResults] = useState<any>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Toggle sound
  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audio.enabled = nextState;
  };

  // Switch Course
  const handleSelectCourse = (courseId: CourseId | null) => {
    if (courseId === null) {
      setSelectedCourseId(null);
      setViewMode('HERO');
    } else {
      setSelectedCourseId(courseId);
      setViewMode('WORKSPACE');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Every drill button opens the picker (course → midterm or chapter); drills never mix courses
  const handleStartQuiz = (courseId: CourseId | 'ALL') => {
    setPickerCourse(courseId === 'ALL' ? null : courseId);
    setPickerOpen(true);
  };

  const launchDrill = (courseId: CourseId, sectionId: string) => {
    setPickerOpen(false);
    setQuizTarget({ courseId, sectionId });
    setDrillRun((n) => n + 1);
    setViewMode('QUIZ');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Complete Quiz Drill
  const handleQuizComplete = (results: any) => {
    setQuizResults(results);
    setViewMode('RESULTS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Full Question Bank
  const handleOpenQuestionBank = () => {
    setViewMode('QUESTION_BANK');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || null;

  return (
    <div className="app-root">
      {/* Universal Navigation Bar */}
      <Navbar 
        activeCourseId={selectedCourseId}
        onSelectCourse={handleSelectCourse}
        onStartQuiz={handleStartQuiz}
        onOpenQuestionBank={handleOpenQuestionBank}
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
            onBack={() => setViewMode('HERO')}
            onStartQuiz={handleStartQuiz}
            onViewPdf={(doc) => setActivePdfDoc(doc)}
          />
        )}

        {viewMode === 'QUIZ' && quizTarget && (
          <QuizEngine 
            key={drillRun}
            courseId={quizTarget.courseId}
            sectionId={quizTarget.sectionId}
            onExit={() => {
              if (selectedCourseId) {
                setViewMode('WORKSPACE');
              } else {
                setViewMode('HERO');
              }
            }}
            onComplete={handleQuizComplete}
          />
        )}

        {viewMode === 'RESULTS' && quizResults && (
          <QuizResults 
            results={quizResults}
            onRestartNewCycle={() => {
              setDrillRun((n) => n + 1);
              setViewMode('QUIZ');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToCourse={() => {
              if (selectedCourseId) {
                setViewMode('WORKSPACE');
              } else {
                setViewMode('HERO');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {viewMode === 'QUESTION_BANK' && (
          <QuestionBankBrowser 
            onBack={() => {
              if (selectedCourseId) {
                setViewMode('WORKSPACE');
              } else {
                setViewMode('HERO');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartQuiz={handleStartQuiz}
          />
        )}
      </main>

      <DrillPicker
        open={pickerOpen}
        initialCourseId={pickerCourse}
        onClose={() => setPickerOpen(false)}
        onStart={launchDrill}
      />

      {/* Embedded PDF Viewer Modal */}
      <PdfViewerModal 
        document={activePdfDoc}
        onClose={() => setActivePdfDoc(null)}
      />

      {/* Futuristic Engineering Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-brand">CONCORDIA UNIVERSITY</span>
            <span className="footer-dept">Department of Mechanical, Industrial & Aerospace Engineering (MIAE)</span>
          </div>
          <div className="footer-center">
            <VisitorCounter />
          </div>
          <div className="footer-right">
            <span>Semester 1 Repository · ENGR 213 · INDU 211 · MIAE 215 · MIAE 221</span>
            <span className="live-status"><span className="pulse-dot"></span> System Operational</span>
          </div>
        </div>
      </footer>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
