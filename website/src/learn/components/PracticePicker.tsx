import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Brain, ChevronRight, FileStack, GraduationCap, RotateCcw, Target, Timer, X } from 'lucide-react';
import type { CourseId } from '../../types';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { useCurriculum } from '../data';
import { href } from '../router';
import { useProgress } from '../progress/store';
import { dueForReview } from '../progress/insights';
import './practicePicker.css';

// "Start a practice drill": pick a course, then what to practise (a topic's practice set, the timed mock,
// the review queue or the past papers). Every choice opens the matching step of the course player.
const Topics: React.FC<{ course: CourseId; onPick: () => void }> = ({ course, onPick }) => {
  const cur = useCurriculum(course);
  const questions = useProgress((s) => s.questions);
  if (!cur) return <div className="lx-quiz-loading" aria-busy="true"><span className="lx-spinner" /> Loading…</div>;
  const due = dueForReview(questions, course).length;
  const mock = cur.sections.flatMap((s) => s.lessons).find((l) => l.id === 'mock-midterm');
  const papers = cur.sections.flatMap((s) => s.lessons).filter((l) => l.id.startsWith('paper-'));
  return (
    <div className="lx-pp-topics">
      <div className="lx-pp-quick">
        <a className="lx-pp-tile is-build" href={href({ name: 'practice', course })} onClick={onPick}>
          <Target size={20} aria-hidden />
          <strong>Build your own quiz</strong>
          <span className="lx-meta">Pick chapters, subtopics and question types</span>
        </a>
        {mock && (
          <a className="lx-pp-tile" href={href({ name: 'learn', course, lesson: mock.id, step: mock.steps[0].id })} onClick={onPick}>
            <Timer size={20} aria-hidden />
            <strong>Mock midterm</strong>
            <span className="lx-meta">{mock.steps[0].size} questions · timed</span>
          </a>
        )}
        <a className="lx-pp-tile" href="#/my-learning" onClick={onPick}>
          <RotateCcw size={20} aria-hidden />
          <strong>Review queue</strong>
          <span className="lx-meta lx-num">{due ? `${due} due now` : 'nothing due yet'}</span>
        </a>
        {papers.length > 0 && (
          <a className="lx-pp-tile" href={href({ name: 'course', course, tab: 'exam' })} onClick={onPick}>
            <FileStack size={20} aria-hidden />
            <strong>Past papers</strong>
            <span className="lx-meta">{papers.length} papers, question by question</span>
          </a>
        )}
      </div>
      <p className="lx-meta lx-pp-label">Or practise one topic</p>
      {cur.sections
        .filter((s) => !s.examPrep)
        .map((s) => {
          const lessons = s.lessons.filter((l) => l.steps.some((st) => st.kind === 'practice' || st.kind === 'check'));
          if (!lessons.length) return null;
          return (
            <div key={s.id} className="lx-pp-sec">
              <strong className="lx-pp-sec-title">
                {s.title} <span className="lx-meta">· {s.subtitle}</span>
              </strong>
              <ul>
                {lessons.map((l) => {
                  const st = l.steps.find((x) => x.kind === 'practice') ?? l.steps.find((x) => x.kind === 'check')!;
                  return (
                    <li key={l.id}>
                      <a href={href({ name: 'learn', course, lesson: l.id, step: st.id })} onClick={onPick}>
                        <span>{l.title}</span>
                        <span className="lx-meta lx-num">{st.questionIds?.length ?? 0} questions</span>
                        <ChevronRight size={16} aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export const PracticePicker: React.FC<{ onClose: () => void; initial?: CourseId | null }> = ({ onClose, initial = null }) => {
  const [course, setCourse] = useState<CourseId | null>(initial);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return (
    <div className="lx-dialog-backdrop" onClick={onClose}>
      <div className={`lx-pp${course ? ` ${courseClass(course)}` : ''}`} role="dialog" aria-modal="true" aria-labelledby="lx-pp-title" onClick={(e) => e.stopPropagation()}>
        <header className="lx-pp-head">
          <div>
            <p className="lx-pp-kicker">
              <Brain size={16} aria-hidden /> Practice drill
            </p>
            <h2 id="lx-pp-title" className="lx-h2">
              {course ? `What do you want to practise in ${COURSE_BY_ID[course].code}?` : 'Which course do you want to practise?'}
            </h2>
          </div>
          <button ref={closeRef} type="button" className="lx-pp-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </header>
        {course ? (
          <>
            <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm lx-pp-back" onClick={() => setCourse(null)}>
              <ArrowLeft size={15} /> All courses
            </button>
            <Topics course={course} onPick={onClose} />
          </>
        ) : (
          <ul className="lx-pp-courses">
            {COURSES.map((c) => (
              <li key={c.id}>
                <button type="button" className={courseClass(c.id)} onClick={() => setCourse(c.id)}>
                  <span className="lx-pp-dot" aria-hidden />
                  <span>
                    <strong>{c.code}</strong>
                    <span>{c.title}</span>
                  </span>
                  <ChevronRight size={20} aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
        {!course && (
          <p className="lx-meta lx-pp-foot">
            <GraduationCap size={14} aria-hidden /> Every drill checks your answer, shows the worked solution and remembers what you missed.
          </p>
        )}
      </div>
    </div>
  );
};

export default PracticePicker;
