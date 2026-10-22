import React, { useMemo, useState } from 'react';
import { AlertTriangle, CalendarDays, CheckCircle2, Flame, PlayCircle, RotateCcw, Target, Trophy, X } from 'lucide-react';
import type { CourseId } from '../../types';
import type { Lesson, Step } from '../model';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { courseProgress, isDone, nextStep, useCurricula } from '../data';
import { href } from '../router';
import { getProgress, streak, today, useProgress } from '../progress/store';
import { daysUntil, dueForReview, masteryByLesson, readiness, suggestions, TopicMastery } from '../progress/insights';
import type { ReminderItem } from '../reminders';
import { fmtDay, nextExam, useReminders, whenText } from '../reminders';
import { ReminderDialog, RemindersCard } from '../components/Reminders';
import { ContinueCard, RecoCard } from '../components/LearningCards';
import { WeekBars, ScoreLines, ScoreSeries } from '../components/Charts';
import { QuizRunner } from '../quiz/QuizRunner';
import '../styles/dashboard.css';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weekOf = (days: Record<string, number>) => {
  const now = new Date();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  return WEEKDAYS.map((label, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = today(d);
    return { label, date: d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' }), day: d.getDate(), minutes: Math.round((days[key] ?? 0) / 60), today: key === today(now), future: d > now };
  });
};

const STRENGTH: Record<TopicMastery['strength'], { label: string; cls: string }> = {
  strong: { label: 'Strong', cls: 'is-strong' },
  okay: { label: 'Okay', cls: 'is-okay' },
  weak: { label: 'Weak', cls: 'is-weak' },
  new: { label: 'Not started', cls: 'is-new' }
};

const ReviewSession: React.FC<{ course: CourseId; ids: string[]; onClose: () => void }> = ({ course, ids, onClose }) => {
  const lesson: Lesson = { id: 'review', title: 'Review queue', summary: '', objectives: [], topicTags: [], minutes: 0, steps: [] };
  const step: Step = { id: 'review', kind: 'practice', title: `Review: ${COURSE_BY_ID[course].code}`, minutes: 0, questionIds: ids, size: Math.min(15, ids.length), passMark: 0.7 };
  return (
    <div className="lx-dialog-backdrop" onClick={onClose}>
      <div className={`lx-dialog ${courseClass(course)}`} role="dialog" aria-modal="true" aria-label="Review" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lx-icon-btn lx-dialog-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <QuizRunner course={course} lesson={lesson} step={step} onContinue={onClose} continueLabel="Done" />
      </div>
    </div>
  );
};

export const MyLearning: React.FC = () => {
  const curricula = useCurricula();
  const p = useProgress((s) => s);
  const [course, setCourse] = useState<CourseId | null>(null);
  const [review, setReview] = useState<CourseId | null>(null);
  const reminders = useReminders();
  const [examEdit, setExamEdit] = useState<{ item?: ReminderItem; course: CourseId } | null>(null);

  const data = useMemo(() => {
    if (!curricula) return null;
    return COURSES.map((c) => {
      const cur = curricula[c.id];
      const prog = courseProgress(cur, p.steps);
      const exam = nextExam(reminders, c.id);
      const date = exam?.date ?? null;
      const left = date ? daysUntil(date) : null;
      const remaining = cur.sections.filter((s) => s.midterm).flatMap((s) => s.lessons).filter((l) => l.steps.some((st) => !st.optional && !isDone(p.steps, c.id, st)));
      return {
        c,
        cur,
        prog,
        started: prog.done > 0 || !!p.lastByCourse[c.id],
        next: nextStep(cur, p.steps, p.lastByCourse[c.id]?.stepId),
        minutesLeft: cur.sections.flatMap((s) => s.lessons).reduce((n, l) => n + l.steps.filter((st) => !st.optional && !isDone(p.steps, c.id, st)).reduce((m, st) => m + st.minutes, 0), 0),
        mastery: masteryByLesson(cur, p),
        ready: readiness(cur, p),
        due: dueForReview(p.questions, c.id),
        suggestions: suggestions(cur, p, exam),
        exam,
        date,
        left,
        remaining
      };
    });
  }, [curricula, p, reminders]);

  const week = useMemo(() => weekOf(p.days), [p.days]);
  const run = streak(p.days);
  const totalMinutes = Math.round(Object.values(p.days).reduce((n, s) => n + s, 0) / 60);
  const answered = Object.values(p.questions).filter((q) => q.seen > 0);
  const accuracy = answered.length ? Math.round((answered.filter((q) => q.last === 1).length / answered.length) * 100) : null;

  const series: ScoreSeries[] = useMemo(
    () =>
      COURSES.map((c) => ({
        course: c.id,
        points: p.attempts
          .filter((a) => a.course === c.id && a.total >= 3)
          .slice(-12)
          .map((a) => ({ at: a.at, pct: Math.round((a.score / a.total) * 100), label: new Date(a.at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) }))
      })).filter((s) => s.points.length),
    [p.attempts]
  );

  if (!data) return <div className="lx-route-loading" aria-busy="true" />;
  const started = data.filter((d) => d.started);
  const shown = course ? data.filter((d) => d.c.id === course) : started.length ? started : data;
  const allSuggestions = shown.flatMap((d) => d.suggestions.map((s) => ({ s, d }))).slice(0, 6);
  const completed = data.filter((d) => d.prog.lessons && d.prog.lessonsDone === d.prog.lessons).length;
  const totalDue = data.reduce((n, d) => n + d.due.length, 0);

  return (
    <div className="lx-wrap lx-dash">
      <header className="lx-dash-head">
        <div>
          <h1 className="lx-h1">My learning</h1>
          <p className="lx-lead">Your progress, what to work on next, and why. Everything here lives in this browser.</p>
        </div>
        <div className="lx-filter-row" role="group" aria-label="Course">
          <button type="button" className={`lx-chip lx-chip-btn${!course ? ' is-on' : ''}`} aria-pressed={!course} onClick={() => setCourse(null)}>
            All courses
          </button>
          {COURSES.map((c) => (
            <button key={c.id} type="button" className={`lx-chip lx-chip-btn${course === c.id ? ' is-on' : ''}`} aria-pressed={course === c.id} onClick={() => setCourse(c.id)}>
              {c.code}
            </button>
          ))}
        </div>
      </header>

      <div className="lx-dash-grid">
        <div className="lx-dash-main">
          <section aria-labelledby="dash-continue">
            <h2 id="dash-continue" className="lx-h2">
              Continue learning
            </h2>
            <div className="lx-cont-grid">
              {shown.map((d) => (
                <ContinueCard key={d.c.id} cur={d.cur} p={p} />
              ))}
            </div>
          </section>

          <section aria-labelledby="dash-reco">
            <h2 id="dash-reco" className="lx-h2">
              Recommended for you
            </h2>
            <div className="lx-reco-grid">
              {allSuggestions.map(({ s, d }, i) => (
                <RecoCard key={i} cur={d.cur} s={s} onReview={setReview} />
              ))}
            </div>
          </section>

          <section aria-labelledby="dash-mastery">
            <h2 id="dash-mastery" className="lx-h2">
              Mastery by topic
            </h2>
            {shown.map((d) => {
              const rows = d.mastery.filter((m) => !m.lesson.exam && (m.answered > 0 || m.stepsDone > 0));
              return (
                <div key={d.c.id} className={`lx-mastery ${courseClass(d.c.id)}`}>
                  <h3 className="lx-h3">{d.c.code}</h3>
                  {rows.length ? (
                    <ul>
                      {rows.map((m) => (
                        <li key={m.lesson.id}>
                          <a href={href({ name: 'learn', course: d.c.id, lesson: m.lesson.id })}>{m.lesson.title}</a>
                          <span className="lx-mastery-bar" aria-hidden>
                            <span className={STRENGTH[m.strength].cls} style={{ width: `${m.accuracy !== null ? Math.max(6, Math.round(m.accuracy * 100)) : 0}%` }} />
                          </span>
                          <span className={`lx-mastery-tag ${STRENGTH[m.strength].cls}`}>
                            {m.strength === 'weak' ? <AlertTriangle size={13} aria-hidden /> : m.strength === 'strong' ? <CheckCircle2 size={13} aria-hidden /> : null}
                            {STRENGTH[m.strength].label}
                            {m.accuracy !== null && <span className="lx-num"> · {Math.round(m.accuracy * 100)}%</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="lx-meta">Answer a few questions in {d.c.code} and each topic’s strength shows up here.</p>
                  )}
                </div>
              );
            })}
          </section>

          <section aria-labelledby="dash-scores">
            <h2 id="dash-scores" className="lx-h2">
              Score history
            </h2>
            <div className="lx-panel lx-panel-pad">
              <ScoreLines series={course ? series.filter((s) => s.course === course) : series} />
            </div>
          </section>
        </div>

        <aside className="lx-dash-side">
          <div className="lx-side-card lx-stats">
            <div>
              <Flame size={20} aria-hidden />
              <strong className="lx-num">{run}</strong>
              <span className="lx-meta">day streak</span>
            </div>
            <div>
              <Target size={20} aria-hidden />
              <strong className="lx-num">{answered.length}</strong>
              <span className="lx-meta">questions</span>
            </div>
            <div>
              <Trophy size={20} aria-hidden />
              <strong className="lx-num">{accuracy === null ? '–' : `${accuracy}%`}</strong>
              <span className="lx-meta">right</span>
            </div>
          </div>

          <div className="lx-side-card">
            <h2 className="lx-h3">Weekly streak</h2>
            <ol className="lx-week" aria-label="This week">
              {week.map((d) => (
                <li key={d.label} className={`${d.minutes ? 'is-on' : ''}${d.today ? ' is-today' : ''}${d.future ? ' is-future' : ''}`} title={`${d.date}: ${d.minutes} min`}>
                  <span>{d.label}</span>
                  <strong className="lx-num">{d.day}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="lx-tiles">
            <div className="lx-side-card">
              <PlayCircle size={20} aria-hidden />
              <strong className="lx-num">{started.length}</strong>
              <span className="lx-meta">courses in progress</span>
            </div>
            <div className="lx-side-card">
              <CheckCircle2 size={20} aria-hidden />
              <strong className="lx-num">{completed}</strong>
              <span className="lx-meta">courses completed</span>
            </div>
          </div>

          <div className="lx-side-card">
            <h2 className="lx-h3">Weekly study time</h2>
            <p className="lx-meta lx-num">
              {week.reduce((n, d) => n + d.minutes, 0)} min this week · {Math.floor(totalMinutes / 60)} h {totalMinutes % 60} min in total
            </p>
            <WeekBars days={week.filter((d) => !d.future || d.today)} />
          </div>

          <div className="lx-side-card">
            <h2 className="lx-h3">Review queue</h2>
            <p className="lx-meta">Questions you missed or were unsure about come back on a spaced schedule until they stick.</p>
            {data.filter((d) => d.due.length).length ? (
              <ul className="lx-review-q">
                {data
                  .filter((d) => d.due.length)
                  .map((d) => (
                    <li key={d.c.id} className={courseClass(d.c.id)}>
                      <span>
                        <strong className="lx-num">{d.due.length}</strong> in {d.c.code}
                      </span>
                      <button type="button" className="lx-btn lx-btn--sm lx-btn--accent" onClick={() => setReview(d.c.id)}>
                        <RotateCcw size={14} /> Review
                      </button>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="lx-meta">{totalDue ? '' : 'Nothing due. Practise a lesson and anything you miss lands here.'}</p>
            )}
          </div>

          <RemindersCard />

          <div className="lx-side-card">
            <h2 className="lx-h3">Exam readiness</h2>
            {data.map((d) => (
              <div key={d.c.id} className={`lx-ready ${courseClass(d.c.id)}`}>
                <span className="lx-ring" style={{ ['--p' as string]: d.ready.pct, ['--size' as string]: '44px' }}>
                  <span>{d.ready.pct}%</span>
                </span>
                <span className="lx-ready-text">
                  <strong>
                    {d.c.code}
                    {d.exam ? <span className="lx-ready-exam"> · {d.exam.title}</span> : null}
                  </strong>
                  {d.exam && d.left !== null ? (
                    <span className="lx-meta lx-num">
                      {fmtDay(d.exam.date)} · {whenText(d.left)}
                      {d.left > 0 && d.remaining.length ? ` · about ${Math.ceil(d.remaining.length / d.left)} lesson${Math.ceil(d.remaining.length / d.left) > 1 ? 's' : ''} a day` : ''}
                    </span>
                  ) : (
                    <span className="lx-meta">No exam date yet</span>
                  )}
                  <button type="button" className="lx-linkbtn lx-ready-date" onClick={() => setExamEdit({ item: d.exam, course: d.c.id })}>
                    <CalendarDays size={13} aria-hidden /> {d.exam ? 'Change the date or details' : 'Add the exam date'}
                  </button>
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {examEdit && <ReminderDialog item={examEdit.item} preset={{ course: examEdit.course, kind: 'midterm' }} onClose={() => setExamEdit(null)} />}
      {review && <ReviewSession course={review} ids={dueForReview(getProgress().questions, review)} onClose={() => setReview(null)} />}
    </div>
  );
};

export default MyLearning;
