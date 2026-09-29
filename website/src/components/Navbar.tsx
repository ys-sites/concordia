import React from 'react';
import { CourseId } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { Sparkles, Brain, BookOpen, Volume2, VolumeX, Layers, Compass } from 'lucide-react';
import { audio } from '../utils/audio';
import { BrandMark } from './BrandMark';
import { PRACTICE_QUESTIONS } from '../data/questionsData';

interface NavbarProps {
  activeCourseId: CourseId | null;
  onSelectCourse: (id: CourseId | null) => void;
  onStartQuiz: (courseId: CourseId | 'ALL') => void;
  onOpenQuestionBank: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCourseId,
  onSelectCourse,
  onStartQuiz,
  onOpenQuestionBank,
  soundEnabled,
  onToggleSound
}) => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <div 
          className="brand-group" 
          onClick={() => {
            audio.playClick();
            onSelectCourse(null);
          }}
          title="Return to Course Selector"
        >
          <BrandMark size={40} />
          <div className="brand-text-block">
            <div className="brand-title">CONCORDIA <span className="brand-highlight">ENGINEERING</span></div>
            <div className="brand-sub">Unofficial student study hub</div>
          </div>
        </div>

        {/* Course Navigation Pills */}
        <nav className="course-nav-pills">
          <button 
            className={`pill-btn ${activeCourseId === null ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              onSelectCourse(null);
            }}
          >
            <Compass size={15} />
            <span>All Courses</span>
          </button>

          {COURSES_DATA.map((course) => {
            const isSelected = activeCourseId === course.id;
            return (
              <button
                key={course.id}
                className={`pill-btn course-pill ${isSelected ? 'active' : ''} pill-${course.color}`}
                onClick={() => {
                  audio.playClick();
                  onSelectCourse(course.id);
                }}
              >
                <span className="dot-indicator" style={{ backgroundColor: course.accentHex }} />
                <span>{course.code}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Question Bank Explorer */}
          <button
            className="action-btn secondary-btn"
            onClick={() => {
              audio.playClick();
              onOpenQuestionBank();
            }}
            title="Browse the full question bank"
          >
            <BookOpen size={16} />
            <span className="btn-text">Question Bank ({PRACTICE_QUESTIONS.length})</span>
          </button>

          {/* Sound Toggle */}
          <button
            className="action-icon-btn"
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) audio.playCorrect();
            }}
            title={soundEnabled ? "Mute sound effects" : "Turn on sound effects"}
            aria-label={soundEnabled ? "Mute sound effects" : "Turn on sound effects"}
          >
            {soundEnabled ? <Volume2 size={18} className="text-emerald" /> : <VolumeX size={18} className="text-muted" />}
          </button>

          {/* Practice drill: opens the course / chapter picker */}
          <button
            className="action-btn primary-glow-btn"
            onClick={() => {
              audio.playClick();
              onStartQuiz(activeCourseId || 'ALL');
            }}
          >
            <Brain size={17} className="pulse-glow" />
            <span>Practice Drill</span>
          </button>
        </div>
      </div>
    </header>
  );
};
