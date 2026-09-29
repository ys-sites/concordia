import React, { useEffect, useState } from 'react';
import { CourseId } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { QUIZ_PLANS, MIDTERM_SECTION_ID, drillSize, questionPool } from '../data/quizSections';
import { Brain, X, ArrowLeft, Target, BookOpen, ChevronRight } from 'lucide-react';
import { audio } from '../utils/audio';

interface DrillPickerProps {
  open: boolean;
  initialCourseId: CourseId | null;
  onClose: () => void;
  onStart: (courseId: CourseId, sectionId: string) => void;
}

// Pop-up shown before every drill: pick the course (if not already chosen),
// then Midterm Review or a single chapter. Drills never mix courses.
export const DrillPicker: React.FC<DrillPickerProps> = ({ open, initialCourseId, onClose, onStart }) => {
  const [courseId, setCourseId] = useState<CourseId | null>(initialCourseId);

  useEffect(() => {
    if (open) setCourseId(initialCourseId);
  }, [open, initialCourseId]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const course = COURSES_DATA.find((c) => c.id === courseId) ?? null;
  const plan = courseId ? QUIZ_PLANS[courseId] : null;

  const start = (sectionId: string) => {
    if (!courseId) return;
    audio.playClick();
    onStart(courseId, sectionId);
  };

  return (
    <div className="dp-backdrop" onClick={onClose}>
      <div
        className="dp-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dp-title"
        onClick={(e) => e.stopPropagation()}
        style={course ? ({ '--accent': course.accentHex } as React.CSSProperties) : undefined}
      >
        <header className="dp-header">
          {course && !initialCourseId && (
            <button className="dp-icon-btn" onClick={() => setCourseId(null)} aria-label="Choose a different course">
              <ArrowLeft size={18} />
            </button>
          )}
          <div className="dp-heading">
            <span className="dp-eyebrow">
              <Brain size={14} /> Practice drill
            </span>
            <h2 id="dp-title">{course ? `${course.code} — what do you want to review?` : 'Which course do you want to practise?'}</h2>
          </div>
          <button className="dp-icon-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </header>

        {!course || !plan ? (
          <div className="dp-course-list">
            {COURSES_DATA.map((c) => (
              <button
                key={c.id}
                className="dp-course-btn"
                style={{ '--accent': c.accentHex } as React.CSSProperties}
                onClick={() => {
                  audio.playClick();
                  setCourseId(c.id);
                }}
              >
                <span className="dp-course-dot" />
                <span className="dp-course-text">
                  <strong>{c.code}</strong>
                  <span>{c.name}</span>
                </span>
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        ) : (
          <div className="dp-options">
            <button className="dp-option dp-option-midterm" onClick={() => start(MIDTERM_SECTION_ID)}>
              <span className="dp-option-icon">
                <Target size={20} />
              </span>
              <span className="dp-option-text">
                <strong>{plan.midterm.label}</strong>
                <span>{plan.midterm.detail}</span>
              </span>
              <span className="dp-count">
                {drillSize(course.id, MIDTERM_SECTION_ID)} Q
                <small>of {questionPool(course.id, MIDTERM_SECTION_ID).length}</small>
              </span>
            </button>

            <p className="dp-divider">or review one chapter</p>

            {plan.sections.map((s) => (
              <button key={s.id} className="dp-option" onClick={() => start(s.id)}>
                <span className="dp-option-icon">
                  <BookOpen size={18} />
                </span>
                <span className="dp-option-text">
                  <strong>{s.label}</strong>
                  <span>{s.detail}</span>
                </span>
                <span className="dp-count">
                  {drillSize(course.id, s.id)} Q
                  <small>of {questionPool(course.id, s.id).length}</small>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
