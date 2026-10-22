import React, { useMemo, useState } from 'react';
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Clapperboard,
  FileText,
  GraduationCap,
  HelpCircle,
  LibraryBig,
  PlayCircle,
  Timer,
  CalendarClock
} from 'lucide-react';
import type { CourseId } from '../../types';
import type { Curriculum, Lesson, Section, VideoCard } from '../model';
import { COURSE_BY_ID, courseClass } from '../courses';
import { SUMMARY, courseProgress, fmtClock, fmtHours, fmtMinutes, lessonProgress, nextStep, useCurriculum } from '../data';
import { CourseTab, href, navigate } from '../router';
import { useProgress } from '../progress/store';
import { daysUntil, readiness } from '../progress/insights';
import { fmtDay, nextExam, useReminders } from '../reminders';
import { CourseCover } from '../components/CourseCover';
import { StepIcon } from '../components/StepIcon';
import { ResourceLibrary } from '../components/ResourceLibrary';
import { VideoLibrary } from '../components/VideoLibrary';
import { getVideoUrl } from '../../utils/pdfUrl';
import '../styles/course.css';

const lessonHref = (c: CourseId, l: Lesson, done: Record<string, number>) => {
  const open = l.steps.find((s) => !s.optional && !done[`${c}/${s.id}`]) ?? l.steps[0];
  return href({ name: 'learn', course: c, lesson: l.id, step: open?.id });
};

// ── the curriculum accordion ─────────────────────────────────────────────────────
const SectionBlock: React.FC<{ cur: Curriculum; section: Section; open: boolean; onToggle: () => void; done: Record<string, number> }> = ({ cur, section, open, onToggle, done }) => {
  const minutes = section.lessons.reduce((n, l) => n + l.minutes, 0);
  const complete = section.lessons.filter((l) => lessonProgress(cur.id, l, done).complete).length;
  return (
    <div className={`lx-acc${open ? ' is-open' : ''}`}>
      <h3>
        <button type="button" className="lx-acc-head" aria-expanded={open} onClick={onToggle}>
          <ChevronDown size={18} className="lx-acc-chev" aria-hidden />
          <span className="lx-acc-title">
            <strong>{section.title}</strong>
            <span className="lx-meta">{section.subtitle}</span>
          </span>
          <span className="lx-acc-meta lx-meta lx-num">
            {complete ? `${complete} / ` : ''}
            {section.lessons.length} lessons · {fmtMinutes(minutes)}
          </span>
        </button>
      </h3>
      {open && (
        <ul className="lx-acc-body">
          {section.lessons.map((l) => {
            const p = lessonProgress(cur.id, l, done);
            const counts = l.steps.reduce<Record<string, number>>((m, s) => ((m[s.kind] = (m[s.kind] ?? 0) + 1), m), {});
            const qs = l.steps.reduce((n, s) => n + (s.questionIds?.length ?? 0), 0);
            return (
              <li key={l.id}>
                <a className="lx-lesson-row" href={lessonHref(cur.id, l, done)}>
                  <span className={`lx-lesson-state${p.complete ? ' is-done' : p.started ? ' is-started' : ''}`} aria-hidden>
                    {p.complete ? <Check size={14} strokeWidth={3} /> : null}
                  </span>
                  <span className="lx-lesson-main">
                    <span className="lx-lesson-title">{l.title}</span>
                    <span className="lx-lesson-sub lx-meta">
                      {counts.video ? (
                        <span>
                          <PlayCircle size={13} aria-hidden /> {counts.video} video{counts.video > 1 ? 's' : ''}
                        </span>
                      ) : null}
                      {counts.notes || counts.reading ? (
                        <span>
                          <FileText size={13} aria-hidden /> notes
                        </span>
                      ) : null}
                      {qs ? (
                        <span>
                          <HelpCircle size={13} aria-hidden /> {qs} questions
                        </span>
                      ) : null}
                      {l.steps.some((s) => s.timeLimit) ? (
                        <span>
                          <Timer size={13} aria-hidden /> timed
                        </span>
                      ) : null}
                    </span>
                  </span>
                  <span className="lx-lesson-time lx-meta lx-num">
                    {p.started && !p.complete ? `${p.done}/${p.total} · ` : ''}
                    {fmtMinutes(l.minutes)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Curriculum: React.FC<{ cur: Curriculum; sections: Section[]; done: Record<string, number> }> = ({ cur, sections, done }) => {
  const [open, setOpen] = useState<Set<string>>(() => new Set(sections.slice(0, 1).map((s) => s.id)));
  const all = open.size === sections.length;
  const lessons = sections.reduce((n, s) => n + s.lessons.length, 0);
  const minutes = sections.reduce((n, s) => n + s.lessons.reduce((m, l) => m + l.minutes, 0), 0);
  return (
    <div>
      <div className="lx-acc-bar">
        <span className="lx-meta lx-num">
          {sections.length} sections · {lessons} lessons · {fmtMinutes(minutes)} in total
        </span>
        <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => setOpen(all ? new Set() : new Set(sections.map((s) => s.id)))}>
          {all ? 'Collapse all sections' : 'Expand all sections'}
        </button>
      </div>
      <div className="lx-acc-list">
        {sections.map((s) => (
          <SectionBlock
            key={s.id}
            cur={cur}
            section={s}
            done={done}
            open={open.has(s.id)}
            onToggle={() =>
              setOpen((o) => {
                const n = new Set(o);
                if (n.has(s.id)) n.delete(s.id);
                else n.add(s.id);
                return n;
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

// ── exam prep tab ────────────────────────────────────────────────────────────────
const ExamTab: React.FC<{ cur: Curriculum; done: Record<string, number> }> = ({ cur, done }) => {
  const p = useProgress((s) => s);
  const exam = nextExam(useReminders(), cur.id);
  const left = exam ? daysUntil(exam.date) : null;
  const r = useMemo(() => readiness(cur, p), [cur, p]);
  const sections = cur.sections.filter((s) => s.examPrep);
  return (
    <div className="lx-exam-tab">
      <div className="lx-exam-head lx-panel lx-panel-pad">
        <div>
          <p className="lx-meta">{exam ? `Next exam · ${fmtDay(exam.date)}${exam.time ? ` · ${exam.time}` : ''}` : 'Midterm'}</p>
          <h3 className="lx-h2">{exam ? exam.title : cur.midterm.label}</h3>
          {exam?.detail && <p className="lx-exam-scope">{exam.detail}</p>}
          {(!exam || exam.kind === 'midterm') && <p className="lx-exam-scope">{cur.midterm.scope}</p>}
        </div>
        <div className="lx-exam-figs">
          {left !== null && left >= 0 && (
            <div>
              <CalendarClock size={18} aria-hidden />
              <strong className="lx-num">{left === 0 ? 'Today' : `${left} day${left === 1 ? '' : 's'}`}</strong>
              <span className="lx-meta">left</span>
            </div>
          )}
          <div>
            <span className="lx-ring" style={{ ['--p' as string]: r.pct, ['--size' as string]: '52px' }}>
              <span>{r.pct}%</span>
            </span>
            <span className="lx-meta">
              ready · {r.covered} of {r.total} lessons started
            </span>
          </div>
        </div>
      </div>
      <p className="lx-exam-note lx-meta">Past papers are practised one question at a time in the quiz, with the worked solution after each answer. No exam is shown as a PDF.</p>
      <Curriculum cur={cur} sections={sections} done={done} />
    </div>
  );
};

// ── page ─────────────────────────────────────────────────────────────────────────
export const CoursePage: React.FC<{ course: CourseId; tab: CourseTab; folder?: string }> = ({ course, tab, folder }) => {
  const cur = useCurriculum(course);
  const c = COURSE_BY_ID[course];
  const s = SUMMARY[course].stats;
  const done = useProgress((st) => st.steps);
  const lastPlace = useProgress((st) => st.lastByCourse[course]);
  const prog = useMemo(() => (cur ? courseProgress(cur, done) : null), [cur, done]);
  const next = useMemo(() => (cur ? nextStep(cur, done, lastPlace?.stepId) : null), [cur, done, lastPlace]);
  const sideExam = nextExam(useReminders(), course);
  const ctaHref = next ? href({ name: 'learn', course, lesson: next.lesson.id, step: next.step.id }) : href({ name: 'learn', course, lesson: SUMMARY[course].start.lessonId });
  const started = !!prog && prog.done > 0;
  const tabs: { id: CourseTab; label: string }[] = [
    { id: 'overview', label: 'Course content' },
    { id: 'videos', label: `Videos (${s.videos})` },
    { id: 'exam', label: 'Exam prep' },
    { id: 'resources', label: `Resources (${s.documents})` }
  ];
  return (
    <div className={`lx-course ${courseClass(course)}`}>
      <div className={`lx-wrap lx-course-layout${tab === 'videos' ? ' is-wide' : ''}`}>
        <div className="lx-course-main">
          <section className="lx-course-hero">
            <nav className="lx-crumbs lx-meta" aria-label="Breadcrumb">
              <a href="#/">Courses</a> <span aria-hidden>›</span> <span>{c.code}</span>
            </nav>
            <h1 className="lx-h1">{c.title}</h1>
            <p className="lx-lead">{c.blurb}</p>
            <ul className="lx-course-facts lx-num">
              <li>
                <LibraryBig size={16} aria-hidden /> {s.lessons} lessons
              </li>
              <li>
                <Clapperboard size={16} aria-hidden /> {s.videos} videos · {fmtHours(s.videoMinutes)}
              </li>
              <li>
                <HelpCircle size={16} aria-hidden /> {s.questions} practice questions
              </li>
              <li>
                <GraduationCap size={16} aria-hidden /> {sideExam ? `${sideExam.title}: ${fmtDay(sideExam.date)}${sideExam.time ? `, ${sideExam.time}` : ''}` : `Midterm: ${SUMMARY[course].midterm.label}`}
              </li>
            </ul>
            <div className="lx-course-mobile-cta">
              <a className="lx-btn lx-btn--accent lx-btn--lg" href={ctaHref}>
                <PlayCircle size={18} /> {started ? `Continue · ${prog?.pct ?? 0}%` : 'Start course'}
              </a>
            </div>
          </section>

          <div className="lx-tabs lx-course-tabs" role="tablist" aria-label="Course">
            {tabs.map((t) => (
              <button key={t.id} type="button" role="tab" className="lx-tab" aria-selected={tab === t.id} onClick={() => navigate({ name: 'course', course, tab: t.id }, { replace: true })}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="lx-course-panel" role="tabpanel">
            {!cur ? (
              <div className="lx-route-loading" aria-busy="true" />
            ) : tab === 'overview' ? (
              <>
                <section className="lx-learn-box">
                  <h2 className="lx-h2">What you’ll learn</h2>
                  <ul>
                    {cur.whatYouLearn.map((w) => (
                      <li key={w}>
                        <CheckCircle2 size={18} aria-hidden /> {w}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2 className="lx-h2 lx-section-title">Course content</h2>
                  <Curriculum cur={cur} sections={cur.sections.filter((x) => !x.examPrep)} done={done} />
                </section>
              </>
            ) : tab === 'videos' ? (
              <VideoLibrary cur={cur} />
            ) : tab === 'exam' ? (
              <ExamTab cur={cur} done={done} />
            ) : (
              <ResourceLibrary cur={cur} folder={folder} />
            )}
          </div>
        </div>

        <aside className="lx-course-side" aria-label="Start">
          <div className="lx-course-side-card">
            <CourseCover course={course} label={false} />
            <div className="lx-course-side-body">
              {prog && started ? (
                <div className="lx-course-side-prog">
                  <span className="lx-ring" style={{ ['--p' as string]: prog.pct }}>
                    <span>{prog.pct}%</span>
                  </span>
                  <span>
                    <strong className="lx-num">
                      {prog.lessonsDone} of {prog.lessons} lessons
                    </strong>
                    <span className="lx-meta">{next ? `Next: ${next.step.title}` : 'Course complete'}</span>
                  </span>
                </div>
              ) : null}
              <a className="lx-btn lx-btn--accent lx-btn--lg lx-btn--block" href={ctaHref}>
                <PlayCircle size={18} /> {started ? 'Continue' : 'Start course'}
              </a>
              <button type="button" className="lx-btn lx-btn--block" onClick={() => navigate({ name: 'course', course, tab: 'exam' }, { replace: true })}>
                <GraduationCap size={17} /> Exam prep
              </button>
              <p className="lx-meta lx-side-includes-title">This course includes</p>
              <ul className="lx-side-includes lx-num">
                <li>{fmtHours(s.videoMinutes)} of narrated video</li>
                <li>{s.questions} questions with worked solutions</li>
                <li>Every past paper as a timed practice exam</li>
                <li>{s.documents} documents: slides, guides and review sheets</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePage;
