import React, { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, CalendarDays, CheckCircle2, Clock3, Flame, ListChecks, Pencil, PlayCircle, RotateCcw, Target, Trophy, X } from 'lucide-react';
import type { CourseId } from '../../types';
import type { Curriculum, Lesson, Step } from '../model';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { courseProgress, isDone, nextStep, useCurricula } from '../data';
import { href } from '../router';
import { streak, today, useProgress, type ProgressState } from '../progress/store';
import { buildStudyPlan, DAILY_REVIEW_LIMIT, daysUntil, masteryByLesson, readiness, reviewQueue, suggestions, type ReviewQueueItem, type TopicMastery } from '../progress/insights';
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
  const step: Step = { id: 'review', kind: 'check', title: `Review: ${COURSE_BY_ID[course].code}`, minutes: 0, questionIds: ids, size: ids.length, passMark: 0.7 };
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

interface PlannerCourse {
  id: CourseId;
  cur: Curriculum;
  exam?: ReminderItem;
  due: ReviewQueueItem[];
  started: boolean;
}

const planDayLabel = (iso: string) => {
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(year, month - 1, day, 12);
  return date.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' });
};

const studyTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return hours ? `${hours} h${rest ? ` ${rest} min` : ''}` : `${rest} min`;
};

const StudyPlanSimulator: React.FC<{
  courses: PlannerCourse[];
  progress: ProgressState;
  selectedCourse: CourseId | null;
  onReview: (course: CourseId) => void;
}> = ({ courses, progress, selectedCourse, onReview }) => {
  const initial =
    selectedCourse ??
    courses
      .filter((item) => item.exam && item.exam.left >= 0)
      .sort((a, b) => (a.exam?.left ?? Number.MAX_SAFE_INTEGER) - (b.exam?.left ?? Number.MAX_SAFE_INTEGER))[0]?.id ??
    courses.find((item) => item.started)?.id ??
    courses[0]?.id;
  const [planCourse, setPlanCourse] = useState<CourseId>(initial ?? COURSES[0].id);
  const row = courses.find((item) => item.id === planCourse) ?? courses[0];
  const [examDate, setExamDate] = useState(row?.exam?.date ?? '');
  const [hoursPerDay, setHoursPerDay] = useState(1.5);

  useEffect(() => {
    if (selectedCourse) setPlanCourse(selectedCourse);
  }, [selectedCourse]);

  useEffect(() => {
    setExamDate(row?.exam?.date ?? '');
  }, [row?.id, row?.exam?.date]);

  const plan = useMemo(
    () =>
      row && examDate
        ? buildStudyPlan(row.cur, progress, row.due.map((item) => item.id), examDate, hoursPerDay, row.exam?.kind === 'final' ? 'final' : 'midterm')
        : null,
    [examDate, hoursPerDay, progress, row]
  );
  if (!row) return null;

  const isPast = !!examDate && daysUntil(examDate) < 0;
  const requiredDaily = plan?.daysAvailable ? Math.ceil((plan.totalMinutes / plan.daysAvailable / 60) * 10) / 10 : 0;
  const reminderMatches = row.exam?.date === examDate;

  return (
    <section className={`lx-study-plan ${courseClass(row.id)}`} aria-labelledby="study-plan-title">
      <div className="lx-study-plan-head">
        <div>
          <h2 id="study-plan-title" className="lx-h2">Can I finish before the exam?</h2>
          <p className="lx-meta">Adjust the date or daily time. Your plan updates instantly and stays on this device.</p>
        </div>
        <span className="lx-local-badge">Browser local</span>
      </div>

      <div className="lx-plan-controls" aria-label="Study plan inputs">
        <label>
          <span>Course</span>
          <select value={row.id} onChange={(event) => setPlanCourse(event.target.value as CourseId)}>
            {courses.map((item) => (
              <option key={item.id} value={item.id}>{COURSE_BY_ID[item.id].code}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Exam date</span>
          <input type="date" value={examDate} min={today()} onChange={(event) => setExamDate(event.target.value)} />
          <small>{reminderMatches && row.exam ? `From ${row.exam.title}` : row.exam ? 'Custom date' : 'No reminder yet'}</small>
        </label>
        <label>
          <span>Hours per day</span>
          <input
            type="number"
            inputMode="decimal"
            min="0.25"
            max="12"
            step="0.25"
            value={hoursPerDay}
            onChange={(event) => setHoursPerDay(Math.min(12, Math.max(0.25, Number(event.target.value) || 0.25)))}
          />
          <small>Focused study time</small>
        </label>
      </div>

      {!examDate ? (
        <div className="lx-plan-empty">
          <CalendarDays size={24} aria-hidden />
          <div><strong>Add an exam date to build the plan.</strong><span>The date can come from a reminder or be entered here.</span></div>
        </div>
      ) : isPast || !plan ? (
        <div className="lx-plan-empty is-warning" role="alert">
          <AlertTriangle size={24} aria-hidden />
          <div><strong>This exam date has passed.</strong><span>Choose today or a future date to simulate a plan.</span></div>
        </div>
      ) : (
        <>
          <div className={`lx-plan-verdict ${plan.finishable ? 'is-finishable' : 'is-over'}`} aria-live="polite">
            {plan.totalMinutes === 0 ? (
              <div><CheckCircle2 size={22} aria-hidden /><span><strong>You are caught up.</strong>No unfinished steps in this exam scope or review questions are waiting.</span></div>
            ) : plan.finishable ? (
              <div><CheckCircle2 size={22} aria-hidden /><span><strong>Yes — this is finishable.</strong>You can finish by {plan.finishDate ? planDayLabel(plan.finishDate) : 'the exam'} with {studyTime(plan.availableMinutes - plan.totalMinutes)} of buffer.</span></div>
            ) : (
              <div><AlertTriangle size={22} aria-hidden /><span><strong>Not at {hoursPerDay} hours a day.</strong>You are short by {studyTime(plan.unscheduledMinutes)}. Plan for about {requiredDaily} hours a day or move the date.</span></div>
            )}
          </div>

          <div className="lx-plan-metrics" aria-label="Plan summary">
            <div><Clock3 size={18} aria-hidden /><strong>{studyTime(plan.totalMinutes)}</strong><span>Total work</span></div>
            <div><CalendarDays size={18} aria-hidden /><strong>{plan.daysAvailable}</strong><span>Study days</span></div>
            <div><PlayCircle size={18} aria-hidden /><strong>{plan.remainingLessons}</strong><span>Lessons left</span></div>
            <div><ListChecks size={18} aria-hidden /><strong>{plan.reviewQuestions}</strong><span>Reviews today</span></div>
          </div>

          {plan.days.length ? (
            <div className="lx-plan-schedule">
              <div className="lx-plan-schedule-head">
                <h3 className="lx-h3">Your day-by-day plan</h3>
                <span className="lx-meta">{daysUntil(examDate) === 0 ? 'Urgent plan for today' : 'Exam day is kept free'}</span>
              </div>
              <ol>
                {plan.days.map((day, index) => (
                  <li key={day.iso}>
                    <div className="lx-plan-day">
                      <span>{index === 0 ? 'Today' : `Day ${index + 1}`}</span>
                      <strong>{planDayLabel(day.iso)}</strong>
                    </div>
                    <ul className="lx-plan-tasks">
                      {day.tasks.map((task) => (
                        <li key={task.id}>
                          {task.kind === 'review' ? (
                            <button type="button" className="lx-linkbtn" onClick={() => onReview(row.id)}>{task.title}</button>
                          ) : (
                            <a href={href({ name: 'learn', course: row.id, lesson: task.lessonId!, step: task.stepId })}>{task.title}</a>
                          )}
                          <span className="lx-num">{task.minutes} min</span>
                        </li>
                      ))}
                    </ul>
                    <strong className="lx-plan-total lx-num">{studyTime(day.minutes)}</strong>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
};

export const MyLearning: React.FC = () => {
  const curricula = useCurricula();
  const p = useProgress((s) => s);
  const [course, setCourse] = useState<CourseId | null>(null);
  const [review, setReview] = useState<{ course: CourseId; ids: string[] } | null>(null);
  const reminders = useReminders();
  const [examEdit, setExamEdit] = useState<{ item?: ReminderItem; course: CourseId } | null>(null);

  const data = useMemo(() => {
    if (!curricula) return null;
    const examDates = Object.fromEntries(COURSES.map((c) => [c.id, nextExam(reminders, c.id)?.date ?? null])) as Partial<Record<CourseId, string | null>>;
    const dailyQueue = reviewQueue(p.questions, {
      curricula: COURSES.map((c) => curricula[c.id]),
      examDates,
      limit: DAILY_REVIEW_LIMIT
    });
    return COURSES.map((c) => {
      const cur = curricula[c.id];
      const prog = courseProgress(cur, p.steps);
      const exam = nextExam(reminders, c.id);
      const date = exam?.date ?? null;
      const left = date ? daysUntil(date) : null;
      const due = dailyQueue.filter((item) => item.course === c.id);
      const courseSuggestions = suggestions(cur, p, exam).flatMap((item) =>
        item.kind !== 'review'
          ? [item]
          : due.length
            ? [{ ...item, title: `Review ${due.length} question${due.length === 1 ? '' : 's'}`, minutes: Math.ceil(due.length * 1.5) }]
            : []
      );
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
        due,
        suggestions: courseSuggestions,
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
  const openReview = (id: CourseId) => {
    const ids = data.find((item) => item.c.id === id)?.due.map((item) => item.id) ?? [];
    if (ids.length) setReview({ course: id, ids });
  };

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
                <RecoCard key={i} cur={d.cur} s={s} onReview={openReview} />
              ))}
            </div>
          </section>

          <StudyPlanSimulator
            courses={data.map((item) => ({ id: item.c.id, cur: item.cur, exam: item.exam, due: item.due, started: item.started }))}
            progress={p}
            selectedCourse={course}
            onReview={openReview}
          />

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
                      {rows.map((m) => {
                        const practice = m.strength === 'weak' ? m.lesson.steps.find((step) => step.kind === 'practice' || step.kind === 'check') : undefined;
                        return (
                        <li key={m.lesson.id}>
                          <a
                            href={href({ name: 'learn', course: d.c.id, lesson: m.lesson.id, ...(practice ? { step: practice.id } : {}) })}
                            aria-label={practice ? `${m.lesson.title}: open ${practice.title}` : undefined}
                          >
                            {m.lesson.title}
                          </a>
                          <span className="lx-mastery-bar" aria-hidden>
                            <span className={STRENGTH[m.strength].cls} style={{ width: `${m.accuracy !== null ? Math.max(6, Math.round(m.accuracy * 100)) : 0}%` }} />
                          </span>
                          <span className={`lx-mastery-tag ${STRENGTH[m.strength].cls}`}>
                            {m.strength === 'weak' ? <AlertTriangle size={13} aria-hidden /> : m.strength === 'strong' ? <CheckCircle2 size={13} aria-hidden /> : null}
                            {STRENGTH[m.strength].label}
                            {m.accuracy !== null && <span className="lx-num"> · {Math.round(m.accuracy * 100)}%</span>}
                          </span>
                        </li>
                        );
                      })}
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
            <p className="lx-meta">Up to {DAILY_REVIEW_LIMIT} a day: flagged and missed questions first, then up to five from each weak or 7-day-stale topic.</p>
            {data.filter((d) => d.due.length).length ? (
              <ul className="lx-review-q">
                {data
                  .filter((d) => d.due.length)
                  .map((d) => (
                    <li key={d.c.id} className={courseClass(d.c.id)}>
                      <span>
                        <strong className="lx-num">{d.due.length}</strong> in {d.c.code}
                      </span>
                      <button type="button" className="lx-btn lx-btn--sm lx-btn--accent" onClick={() => openReview(d.c.id)}>
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
                  {!d.exam && (
                    <button type="button" className="lx-linkbtn lx-ready-date" onClick={() => setExamEdit({ course: d.c.id })}>
                      <CalendarDays size={13} aria-hidden /> Add the exam date
                    </button>
                  )}
                </span>
                {d.exam && (
                  <button type="button" className="lx-icon-btn lx-ready-edit" onClick={() => setExamEdit({ item: d.exam, course: d.c.id })} aria-label={`Change the ${d.c.code} ${d.exam.title.toLowerCase()} date or details`} title="Change the date or details">
                    <Pencil size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {examEdit && <ReminderDialog item={examEdit.item} preset={{ course: examEdit.course, kind: 'midterm' }} onClose={() => setExamEdit(null)} />}
      {review && <ReviewSession course={review.course} ids={review.ids} onClose={() => setReview(null)} />}
    </div>
  );
};

export default MyLearning;
