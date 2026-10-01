import React from 'react';
import { CourseId } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { 
  Sigma, 
  Factory, 
  Terminal, 
  Atom, 
  ArrowRight, 
  Brain, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { audio } from '../utils/audio';
import { PRACTICE_QUESTIONS } from '../data/questionsData';
import { ShinyText, CountUp } from './reactbits';

interface HeroCourseSelectorProps {
  onSelectCourse: (id: CourseId) => void;
  onStartQuiz: (courseId: CourseId | 'ALL') => void;
  onOpenQuestionBank: () => void;
}

export const HeroCourseSelector: React.FC<HeroCourseSelectorProps> = ({
  onSelectCourse,
  onStartQuiz,
  onOpenQuestionBank
}) => {
  const getCourseIcon = (id: CourseId) => {
    switch (id) {
      case 'ENGR213': return <Sigma size={32} className="course-icon icon-engr" />;
      case 'INDU211': return <Factory size={32} className="course-icon icon-indu" />;
      case 'MIAE215': return <Terminal size={32} className="course-icon icon-miae215" />;
      case 'MIAE221': return <Atom size={32} className="course-icon icon-miae221" />;
    }
  };

  const totalDocs = COURSES_DATA.reduce((acc, c) => acc + c.documents.length, 0);

  return (
    <div className="hero-selector-section">
      {/* Top Banner & Header */}
      <div className="hero-header-box">
        <div className="status-chip">
          <Sparkles size={14} className="text-amber animate-spin-slow" />
          <span>Fall 2026 Concordia Engineering · Gina Cody School of ECS</span>
          <span className="live-dot" />
        </div>

        <h1 className="hero-headline">
          Master Your Engineering Courses with{' '}
          <ShinyText
            text="Interactive Precision"
            speed={5.5}
            delay={1.2}
            pauseOnHover={true}
            spread={120}
            shineColor="rgba(255, 255, 255, 0.95)"
            gradient="linear-gradient(120deg, #818cf8 0%, #c084fc 35%, rgba(255, 255, 255, 0.95) 50%, #c084fc 65%, #f43f5e 100%)"
            className="gradient-text"
          />
        </h1>
        <p className="hero-subtext">
          Study the step-by-step guides, summaries and rapid review sheets for each course, then test yourself with <strong>midterm or chapter-by-chapter drills</strong> built for exam mastery.
        </p>

        {/* Global Key Metric Pills */}
        <div className="metric-pills-row">
          <div className="metric-pill">
            <FileText size={16} className="text-indigo" />
            <span><strong><CountUp to={totalDocs} duration={1.2} /></strong> Verified PDFs & Guides</span>
          </div>
          <div className="metric-pill">
            <Brain size={16} className="text-emerald" />
            <span><strong><CountUp to={PRACTICE_QUESTIONS.length} duration={1.4} /></strong> Curated Practice & Drill Questions</span>
          </div>
          <div className="metric-pill">
            <Flame size={16} className="text-rose" />
            <span><strong>Midterm &amp; chapter</strong> drills per course</span>
          </div>
          <div className="metric-pill">
            <ShieldCheck size={16} className="text-cyan" />
            <span><strong>A+ Standard</strong> Step-by-Step Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Choice Prompt */}
      <div className="course-prompt-banner">
        <div className="prompt-left">
          <GraduationCap size={22} className="text-amber" />
          <div>
            <h2 className="prompt-title">Step 1: Select Your Course to Begin</h2>
            <p className="prompt-desc">Choose a subject to explore its materials, or start a drill for the midterm or a single chapter.</p>
          </div>
        </div>
        <div className="prompt-right">
          <button 
            className="all-classes-drill-btn"
            onClick={() => {
              audio.playClick();
              onStartQuiz('ALL');
            }}
          >
            <Brain size={16} />
            <span>Start a Practice Drill</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* 4 Interactive Course Cards Grid */}
      <div className="course-cards-grid">
        {COURSES_DATA.map((course) => {
          return (
            <div 
              key={course.id} 
              className={`course-card card-${course.color}`}
              style={{ '--accent-glow': course.borderGlow } as React.CSSProperties}
              onClick={() => {
                audio.playClick();
                onSelectCourse(course.id);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  audio.playClick();
                  onSelectCourse(course.id);
                }
              }}
            >
              {/* Card Header */}
              <div className="card-top">
                <div className="icon-wrapper">
                  {getCourseIcon(course.id)}
                </div>
                <div className="card-badges">
                  <span className="badge doc-badge">
                    <FileText size={12} />
                    {course.documents.length} Docs
                  </span>
                  <span className="badge q-badge">
                    <Brain size={12} />
                    {PRACTICE_QUESTIONS.filter(q => q.courseId === course.id).length} Questions
                  </span>
                </div>
              </div>

              {/* Course Title & Info */}
              <div className="card-body">
                <div className="course-code-tag">{course.code}</div>
                <h3 className="course-name">{course.name}</h3>
                <p className="course-desc">{course.description}</p>

                {/* Categories Pill Preview */}
                <div className="categories-tag-list">
                  {course.categories.slice(0, 4).map((cat, idx) => (
                    <span key={idx} className="category-mini-tag">
                      {cat.title}
                    </span>
                  ))}
                  {course.categories.length > 4 && (
                    <span className="category-mini-tag more-tag">
                      +{course.categories.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Actions */}
              <div className="card-actions">
                <button 
                  className="card-btn-explore"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    onSelectCourse(course.id);
                  }}
                >
                  <span>Open Course</span>
                  <ArrowRight size={15} />
                </button>

                <button 
                  className="card-btn-quiz"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    onStartQuiz(course.id);
                  }}
                  title="Choose midterm review or a chapter for this course"
                >
                  <Brain size={15} />
                  <span>Practice Drill</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
