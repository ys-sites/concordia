import React, { useMemo } from 'react';
import { ArrowRight, Brain, Clock3, FileText, Flame, Info, ListChecks, PlayCircle, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import ShinyText from '../../components/reactbits/ShinyText';
import CountUp from '../../components/reactbits/CountUp';
import type { CourseId } from '../../types';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { SUMMARY, courseProgress, fmtHours, nextStep, useCurricula } from '../data';
import { href } from '../router';
import { streak, useProgress } from '../progress/store';
import { CourseCover } from '../components/CourseCover';
import { dueForReview, suggestions } from '../progress/insights';
import { nextExam, useReminders } from '../reminders';
import { ComingUp } from '../components/Reminders';
import { ContinueCard, RecoCard } from '../components/LearningCards';
import '../styles/home.css';
import '../styles/hero.css';

const CourseCard: React.FC<{ id: CourseId; pct: number | null; lessonsDone: number }> = ({ id, pct, lessonsDone }) => {
  const c = COURSE_BY_ID[id];
  const s = SUMMARY[id].stats;
  const started = pct !== null && pct > 0;
  return (
    <a className={`lx-course-card ${courseClass(id)}`} href={href({ name: 'course', course: id, tab: 'overview' })}>
      <CourseCover course={id} className="lx-course-card-cover" />
      <div className="lx-course-card-body">
        <h3 className="lx-h3">{c.title}</h3>
        <p className="lx-meta">
          {c.code} · {c.dept}
        </p>
        <p className="lx-course-card-stats lx-meta lx-num">
          {s.lessons} lessons · {fmtHours(s.minutes)} · {s.videos} videos · {s.questions} questions
        </p>
        {started ? (
          <div className="lx-course-card-progress">
            <div className="lx-bar" aria-hidden>
              <span style={{ width: `${pct}%` }} />
            </div>
            <span className="lx-meta lx-num">
              {pct}% complete · {lessonsDone} of {s.lessons} lessons
            </span>
          </div>
        ) : (
          <span className="lx-course-card-cta">
            Start course <ArrowRight size={15} />
          </span>
        )}
      </div>
    </a>
  );
};

export const Home: React.FC = () => {
  const curricula = useCurricula();
  const done = useProgress((s) => s.steps);
  const last = useProgress((s) => s.last);
  const lastByCourse = useProgress((s) => s.lastByCourse);
  const days = useProgress((s) => s.days);
  const questions = useProgress((s) => s.questions);
  const reminders = useReminders();

  const progress = useMemo(() => {
    if (!curricula) return null;
    return Object.fromEntries(COURSES.map((c) => [c.id, courseProgress(curricula[c.id], done)])) as Record<CourseId, ReturnType<typeof courseProgress>>;
  }, [curricula, done]);

  const progressState = useProgress((s) => s);
  const startedCourses = COURSES.filter((c) => lastByCourse[c.id] || Object.keys(done).some((k) => k.startsWith(c.id + '/')));
  // two per started course (or the first lesson of each course for a new visitor), at most four
  const recommended = useMemo(() => {
    if (!curricula) return [];
    const pool = startedCourses.length ? startedCourses : COURSES;
    return pool
      .flatMap((c) => suggestions(curricula[c.id], progressState, nextExam(reminders, c.id)).slice(0, startedCourses.length ? 2 : 1).map((s) => ({ s, cur: curricula[c.id] })))
      .slice(0, 4);
  }, [curricula, progressState, reminders]); // eslint-disable-line react-hooks/exhaustive-deps

  const due = useMemo(() => dueForReview(questions), [questions]);
  const run = streak(days);
  const minutesThisWeek = useMemo(() => {
    const now = Date.now();
    return Math.round(Object.entries(days).filter(([d]) => now - new Date(d).getTime() < 7 * 86_400_000).reduce((n, [, s]) => n + s, 0) / 60);
  }, [days]);

  const resume = last && curricula ? curricula[last.course] : null;
  const totals = COURSES.reduce(
    (t, c) => ({ documents: t.documents + SUMMARY[c.id].stats.documents, questions: t.questions + SUMMARY[c.id].stats.questions, videos: t.videos + SUMMARY[c.id].stats.videos }),
    { documents: 0, questions: 0, videos: 0 }
  );

  return (
    <div className="lx-home">
      <section className="lx-home-hero">
        <div className="lx-wrap lx-home-hero-inner">
          {/* the original hero, kept exactly as it was */}
          <div className="hero-header-box">
            <div className="status-chip">
              <Sparkles size={14} className="hero-sparkle" aria-hidden />
              <span>Fall 2026 Concordia Engineering Study Hub</span>
              <span className="live-dot" />
            </div>
            <h1 className="hero-headline">
              Master Your Engineering Courses with{' '}
              <ShinyText
                text="Interactive Precision"
                speed={4.5}
                color="#4338ca"
                shineColor="#ffffff"
                spread={120}
                pauseOnHover={true}
                gradient="linear-gradient(110deg, #4338ca 0%, #4f46e5 40%, #a5b4fc 50%, #4f46e5 60%, #4338ca 100%)"
              />
            </h1>
            <p className="hero-subtext">
              Study the step-by-step guides, summaries and rapid review sheets for each course, then test yourself with <strong>midterm or chapter-by-chapter drills</strong> built for exam mastery.
            </p>
            <div className="hero-disclaimer-card" role="note" aria-label="Academic Disclaimer">
              <Info size={16} className="hero-disclaimer-icon" />
              <p className="hero-disclaimer-text">
                <strong>Academic Disclaimer:</strong> This portal was created solely for comprehensive course review and interactive learning. While designed to help bridge foundational concepts and build intuition, it is not a substitute for official instruction. Please always consult your professor’s official lecture notes, course syllabus, and assigned textbook readings to further expand your knowledge and verify specific exam expectations.
              </p>
            </div>
            <div className="metric-pills-row">
              <div className="metric-pill">
                <FileText size={16} className="mp-indigo" />
                <span>
                  <strong>
                    <CountUp to={totals.documents} duration={1.2} />
                  </strong>{' '}
                  Verified PDFs & Guides
                </span>
              </div>
              <div className="metric-pill">
                <Brain size={16} className="mp-emerald" />
                <span>
                  <strong>
                    <CountUp to={totals.questions} duration={1.4} />
                  </strong>{' '}
                  Curated Practice & Drill Questions
                </span>
              </div>
              <div className="metric-pill">
                <Flame size={16} className="mp-rose" />
                <span>
                  <strong>Midterm &amp; chapter</strong> drills per course
                </span>
              </div>
              <div className="metric-pill">
                <ShieldCheck size={16} className="mp-cyan" />
                <span>
                  <strong>A+ Standard</strong> Step-by-Step Solutions
                </span>
              </div>
            </div>
          </div>
          {(run > 0 || minutesThisWeek > 0 || due.length > 0) && (
            <ul className="lx-home-stats" aria-label="Your week">
              <li>
                <Flame size={18} aria-hidden />
                <span>
                  <strong className="lx-num">{run}</strong> day streak
                </span>
              </li>
              <li>
                <Clock3 size={18} aria-hidden />
                <span>
                  <strong className="lx-num">{minutesThisWeek}</strong> min this week
                </span>
              </li>
              <li>
                <RotateCcw size={18} aria-hidden />
                <a href="#/my-learning">
                  <strong className="lx-num">{due.length}</strong> to review
                </a>
              </li>
            </ul>
          )}
        </div>
      </section>

      <div className="lx-wrap">
        <ComingUp />

        {curricula && startedCourses.length > 0 && (
          <section className="lx-home-section" aria-labelledby="lx-continue">
            <h2 id="lx-continue" className="lx-h2">
              Continue learning
            </h2>
            <div className="lx-cont-grid">
              {startedCourses.map((c) => (
                <ContinueCard key={c.id} cur={curricula[c.id]} p={progressState} />
              ))}
            </div>
          </section>
        )}

        {recommended.length > 0 && (
          <section className="lx-home-section" aria-labelledby="lx-reco">
            <h2 id="lx-reco" className="lx-h2">
              Recommended for you
            </h2>
            <div className="lx-reco-grid">
              {recommended.map(({ s, cur }, i) => (
                <RecoCard key={i} cur={cur} s={s} />
              ))}
            </div>
          </section>
        )}

        <section className="lx-home-section" id="lx-courses" aria-labelledby="lx-courses-title">
          <h2 id="lx-courses-title" className="lx-h2">
            {last ? 'Your courses' : 'Choose a course'}
          </h2>
          <div className="lx-course-grid">
            {COURSES.map((c) => (
              <CourseCard key={c.id} id={c.id} pct={progress ? progress[c.id].pct : null} lessonsDone={progress ? progress[c.id].lessonsDone : 0} />
            ))}
          </div>
        </section>

        <section className="lx-home-section lx-how" aria-labelledby="lx-how">
          <h2 id="lx-how" className="lx-h2">
            How a lesson works
          </h2>
          <ol className="lx-how-steps">
            <li>
              <strong>Watch</strong>
              <span>A short narrated video on the idea, built from the teacher’s slides.</span>
            </li>
            <li>
              <strong>Read the key notes</strong>
              <span>The idea, when to use it, the recipe and the traps, with the slide to open.</span>
            </li>
            <li>
              <strong>Check yourself</strong>
              <span>Three or four questions with instant feedback and a worked solution.</span>
            </li>
            <li>
              <strong>Practise</strong>
              <span>A practice set, then the real past exam questions on the same topic.</span>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Home;
