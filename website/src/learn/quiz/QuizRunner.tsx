import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Eye, Flag, GraduationCap, ListChecks, Play, RefreshCw, RotateCcw, Timer, Trophy, XCircle } from 'lucide-react';
import type { CourseId } from '../../types';
import type { LearnQuestion, Lesson, Step } from '../model';
import { LEVEL_LABEL } from '../model';
import { Answer, Attempt, QuizSession, recordAnswer, stepKey, toggleFlag, updateProgress, useProgress } from '../progress/store';
import { useCourseQuestions } from '../questions';
import { grade, isAnswered } from '../questions/grade';
import { QuestionView } from './QuestionView';
import { Explanation } from './Explanation';
import { MathText } from '../../utils/mathRenderer';
import '../styles/quiz.css';
import { scoreBucket, trackStudy, trackStudyOnce } from '../analytics';
import { boundedPracticeSize, practiceSizeVariant } from '../experiments';
import { COURSE_BY_ID } from '../courses';
import { examLabel } from '../examLabel';

// One quiz engine for every question in the site.
//   check     a few questions, instant feedback (in a lesson)
//   practice  a set drawn from the lesson's pool, feedback after each question
//   exam      timed practice with immediate feedback and worked solutions
// The session lives in the progress store, so a reload returns to the same question with the same answers.
type Mode = QuizSession['mode'];

const shuffle = <T,>(a: T[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

const LETTER = 'ABCDEFGH';
// what the student answered, in words, for the explanation and the AI tutor
const answerText = (q: LearnQuestion, a: Answer | undefined, order?: number[]) =>
  a === undefined ? undefined : Array.isArray(a) ? a.map((i) => `(${LETTER[(order ?? []).indexOf(i)] ?? LETTER[i]}) ${q.options?.[i] ?? ''}`).join(', ') : a.startsWith('self:') ? undefined : a;
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.max(0, Math.floor(s % 60))).padStart(2, '0')}`;

export interface QuizRunnerProps {
  course: CourseId;
  lesson: Lesson;
  step: Step;
  onFinished?: (passed: boolean) => void;
  onContinue?: () => void;
  continueLabel?: string;
  autoStart?: boolean; // a quiz built on the spot starts without the intro screen
}

// The question navigator: Prev, a numbered pill per question (right, wrong, answered, flagged, current), Next,
// and the mode, tally and clock under it. Questions not drawn yet (adaptive sets) show as dashes.
const QuestionNav: React.FC<{
  session: QuizSession;
  total: number;
  mode: string;
  exam: boolean;
  remaining: number | null;
  onGo: (i: number) => void;
  onNext: () => void;
  nextLabel: string;
  nextDisabled?: boolean;
}> = ({ session, total, mode, exam, remaining, onGo, onNext, nextLabel, nextDisabled = false }) => {
  const strip = useRef<HTMLDivElement>(null);
  // keep the current pill in view inside the strip (never scrolls the page)
  useEffect(() => {
    const el = strip.current?.querySelector<HTMLElement>('[aria-current="step"]');
    const box = strip.current;
    if (el && box) box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' });
  }, [session.i]);
  const right = session.order.filter((x) => session.checked[x] === true).length;
  const checked = session.order.filter((x) => session.checked[x] !== undefined).length;
  const answered = session.order.filter((x) => session.answers[x] !== undefined).length;
  return (
    <div className="lx-qnav">
      <div className="lx-qnav-row">
        <button type="button" className="lx-qnav-step" onClick={() => onGo(Math.max(0, session.i - 1))} disabled={session.i === 0} aria-label="Previous question">
          <ArrowLeft size={16} /> <span>Prev</span>
        </button>
        <div className="lx-qnav-strip" ref={strip} role="navigation" aria-label="Questions">
          {Array.from({ length: Math.max(total, session.order.length) }, (_, n) => {
            const qid = session.order[n];
            if (!qid)
              return (
                <span key={n} className="lx-qnav-pill is-later" aria-hidden>
                  {n + 1}
                </span>
              );
            const ok = session.checked[qid];
            const state = ok === true ? 'is-right' : ok === false ? 'is-wrong' : session.answers[qid] !== undefined ? 'is-answered' : '';
            const label = `Question ${n + 1}${ok === true ? ', right' : ok === false ? ', wrong' : session.answers[qid] !== undefined ? ', answered' : ''}${session.flags.includes(qid) ? ', flagged' : ''}`;
            return (
              <button
                key={qid}
                type="button"
                className={`lx-qnav-pill lx-num ${state}${n === session.i ? ' is-current' : ''}${session.flags.includes(qid) ? ' is-flagged' : ''}`}
                aria-current={n === session.i ? 'step' : undefined}
                aria-label={label}
                onClick={() => onGo(n)}
              >
                {n + 1}
              </button>
            );
          })}
        </div>
        <button type="button" className="lx-qnav-step" onClick={onNext} disabled={nextDisabled} aria-label={nextLabel === 'Submit answer' ? 'Submit answer' : 'Next question'}>
          <span>{nextLabel}</span> {nextLabel === 'Submit answer' ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />}
        </button>
      </div>
      <div className="lx-qnav-meta lx-meta lx-num">
        <span>{mode}</span>
        <span>{exam ? `${answered} of ${session.order.length} answered` : checked ? `${right} of ${checked} right` : `${session.order.length} questions`}</span>
        {remaining !== null && (
          <span className={`lx-timer lx-num${remaining < 120 ? ' is-low' : ''}`} role="timer" aria-label="Time left">
            <Clock size={15} aria-hidden /> {fmt(remaining)}
          </span>
        )}
      </div>
    </div>
  );
};

export const QuizRunner: React.FC<QuizRunnerProps> = ({ course, lesson, step, onFinished, onContinue, continueLabel, autoStart }) => {
  const key = stepKey(course, step.id);
  const session = useProgress((s) => s.quizzes[key]);
  const stats = useProgress((s) => s.questions);
  const attempts = useProgress((s) => s.attempts);
  const idx = useCourseQuestions(course);
  const [resumeAsked, setResumeAsked] = useState(false);
  const [closed, setClosed] = useState<Set<string>>(new Set()); // results rows the student folded away
  const nextBtn = useRef<HTMLButtonElement>(null);
  const [pickLevel, setPickLevel] = useState<'adaptive' | 1 | 2 | 3>('adaptive');
  const defaultMode: Mode = step.kind === 'check' ? 'check' : step.kind === 'exam' && step.timeLimit ? 'exam' : 'practice';
  const lastAttempt = useMemo(() => [...attempts].reverse().find((a) => a.course === course && a.stepId === step.id), [attempts, course, step.id]);

  const qs = useCallback((id: string): LearnQuestion | undefined => idx?.byId.get(id), [idx]);

  // ── session operations ─────────────────────────────────────────────────────────
  // questions not yet mastered come first: never seen or last wrong, then unsure, then by Leitner box
  const rank = useCallback(
    (id: string) => {
      const st = stats[id];
      return !st || !st.seen || st.last === 0 ? 0 : st.unsure ? 1 : 1 + st.box;
    },
    [stats]
  );
  const optionOrderFor = useCallback(
    (ids: string[]) => {
      const out: Record<string, number[]> = {};
      for (const id of ids) {
        const q = idx?.byId.get(id);
        if (q && (q.kind === 'mc' || q.kind === 'multi') && !q.keepOrder && q.options) out[id] = shuffle(q.options.map((_, i) => i));
      }
      return out;
    },
    [idx]
  );
  // the next question of a "start easy, build up" session: the current level first, then the nearest level
  const pickAdaptive = useCallback(
    (pool: string[], used: string[], level: 1 | 2 | 3): { id: string; level: 1 | 2 | 3 } | null => {
      const free = pool.filter((id) => !used.includes(id));
      for (const l of [level, level + 1, level - 1, level + 2, level - 2] as number[]) {
        if (l < 1 || l > 3) continue;
        const at = shuffle(free.filter((id) => idx?.byId.get(id)?.level === l)).sort((a, b) => rank(a) - rank(b));
        if (at.length) return { id: at[0], level: l as 1 | 2 | 3 };
      }
      return null;
    },
    [idx, rank]
  );

  const start = useCallback(
    (mode: Mode, ids?: string[], level: 'adaptive' | 1 | 2 | 3 | 'all' = 'all') => {
      if (!idx) return;
      let pool = (ids ?? step.questionIds ?? []).filter((id) => idx.byId.has(id));
      let order: string[];
      let adaptive: QuizSession['adaptive'];
      if (typeof level === 'number') pool = pool.filter((id) => idx.byId.get(id)!.level === level);
      const configured = step.size && step.size < pool.length ? step.size : undefined;
      const size = ids ? pool.length : mode === 'practice' ? boundedPracticeSize(pool.length, configured) : configured ?? pool.length;
      if (ids || step.ordered) order = pool;
      else if (level === 'adaptive') {
        const first = pickAdaptive(pool, [], 1);
        order = first ? [first.id] : [];
        adaptive = { level: first?.level ?? 1, size, pool };
      } else {
        order = shuffle(pool)
          .sort((a, b) => rank(a) - rank(b))
          .slice(0, size);
        // easy to hard within the set; random order inside each level
        order = mode === 'exam' ? order : shuffle(order).sort((a, b) => idx.byId.get(a)!.level - idx.byId.get(b)!.level);
      }
      const optionOrder = optionOrderFor(order);
      updateProgress((s) => {
        s.quizzes[key] = {
          course,
          lessonId: lesson.id,
          stepId: step.id,
          mode,
          order,
          optionOrder,
          i: 0,
          answers: {},
          checked: {},
          flags: [],
          confidence: {},
          hints: [],
          revealed: [],
          startedAt: Date.now(),
          elapsed: 0,
          ...(adaptive ? { adaptive } : {}),
          ...(typeof level === 'number' ? { only: level } : {}),
          ...(mode === 'exam' && step.timeLimit ? { timeLimit: Math.round(step.timeLimit * 60 * (order.length / Math.max(1, step.size || (step.questionIds?.length ?? order.length)))) || step.timeLimit * 60 } : {})
        };
      });
      setResumeAsked(true);
      setClosed(new Set());
      trackStudy('quiz_start', { course, lesson: lesson.id, step: step.id, mode, questions: size, practice_size_variant: mode === 'practice' ? practiceSizeVariant() : null });
    },
    [idx, step, key, course, lesson.id, pickAdaptive, rank, optionOrderFor]
  );

  useEffect(() => {
    if (autoStart && idx && !session) start(defaultMode);
  }, [autoStart, idx, session]); // eslint-disable-line react-hooks/exhaustive-deps

  const patch = (fn: (ss: QuizSession) => void) =>
    updateProgress((s) => {
      const ss = s.quizzes[key];
      if (ss) fn(ss);
    });

  // A saved session can outlive a deploy: a question may have been removed, or its options changed, since it was
  // started. Repair it rather than crash or grade against the wrong option: drop what is gone, reshuffle what changed.
  useEffect(() => {
    if (!idx || !session) return;
    const opts = (id: string) => idx.byId.get(id)?.options?.length ?? 0;
    const gone = session.order.filter((id) => !idx.byId.has(id));
    const changed = Object.keys(session.optionOrder).filter((id) => idx.byId.has(id) && session.optionOrder[id].length !== opts(id));
    const stale = Object.entries(session.answers)
      .filter(([id, a]) => idx.byId.has(id) && Array.isArray(a) && a.some((i) => i >= opts(id)))
      .map(([id]) => id);
    if (!gone.length && !changed.length && !stale.length) return;
    const fresh = optionOrderFor(changed);
    patch((ss) => {
      ss.order = ss.order.filter((id) => idx.byId.has(id));
      for (const id of [...gone, ...changed, ...stale]) {
        delete ss.answers[id];
        delete ss.checked[id];
      }
      for (const id of changed) {
        if (fresh[id]) ss.optionOrder[id] = fresh[id];
        else delete ss.optionOrder[id];
      }
      ss.i = Math.min(ss.i, Math.max(0, ss.order.length - 1));
      if (ss.adaptive) ss.adaptive.pool = ss.adaptive.pool.filter((id) => idx.byId.has(id));
    });
  }, [idx, session?.startedAt]); // eslint-disable-line react-hooks/exhaustive-deps

  const finish = useCallback(
    (ss: QuizSession) => {
      // exam: everything is graded now; practice and check were graded question by question. Open questions
      // in a timed exam wait for the student to mark them on the results screen.
      const pending: string[] = [];
      const results = ss.order.map((id) => {
        const q = qs(id);
        let ok = ss.checked[id];
        if (ok === undefined) {
          if (q?.kind === 'self' && ss.mode === 'exam') {
            pending.push(id);
            return { q: id, ok: false };
          }
          ok = q ? grade(q, ss.answers[id]) === true : false;
          if (q) recordAnswer(id, ok, { course, topic: q.topic, unsure: ss.confidence[id] === 'unsure' });
        }
        return { q: id, ok };
      });
      const score = results.filter((r) => r.ok).length;
      const attempt: Attempt = { course, lessonId: lesson.id, stepId: step.id, mode: ss.mode, at: Date.now(), score, total: results.length, seconds: Math.round(ss.elapsed), results };
      updateProgress((s) => {
        const cur = s.quizzes[key];
        if (cur) {
          cur.finished = true;
          for (const r of results) if (!pending.includes(r.q)) cur.checked[r.q] = r.ok;
          if (pending.length) cur.selfPending = pending;
        }
        s.attempts.push(attempt);
        if (s.attempts.length > 400) s.attempts.splice(0, s.attempts.length - 400);
      });
      trackStudy('quiz_complete', { course, lesson: lesson.id, step: step.id, mode: ss.mode, score_bucket: scoreBucket(score, results.length), questions: results.length });
      onFinished?.(results.length > 0 && score / results.length >= (step.passMark ?? 0.7));
    },
    [qs, course, lesson.id, step.id, step.passMark, key, onFinished]
  );

  // ── timer (active time; counts down in exam mode) ─────────────────────────────
  const elapsedRef = useRef(session?.elapsed ?? 0);
  const sessionRef = useRef(session);
  sessionRef.current = session;
  const [, force] = useState(0);
  useEffect(() => {
    elapsedRef.current = session?.elapsed ?? 0;
  }, [session?.startedAt]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!session || session.finished || (!resumeAsked && session.i + Object.keys(session.answers).length > 0)) return;
    let n = 0;
    const t = setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      elapsedRef.current += 1;
      n++;
      force((x) => x + 1);
      if (session.timeLimit && elapsedRef.current >= session.timeLimit) {
        clearInterval(t);
        patch((ss) => void (ss.elapsed = elapsedRef.current));
        finish({ ...session, elapsed: elapsedRef.current });
        return;
      }
      if (n % 10 === 0) patch((ss) => void (ss.elapsed = elapsedRef.current));
    }, 1000);
    return () => {
      clearInterval(t);
      patch((ss) => void (ss.elapsed = Math.max(ss.elapsed, elapsedRef.current)));
    };
  }, [session?.startedAt, session?.finished, resumeAsked]); // eslint-disable-line react-hooks/exhaustive-deps

  // Count a genuinely started quiz that is left unfinished. Keep the payload coarse and local:
  // no answer values or question text are recorded, and the once-key prevents unload/unmount duplicates.
  useEffect(() => {
    const recordAbandonment = () => {
      const current = sessionRef.current;
      if (!current || current.finished || elapsedRef.current < 5) return;
      trackStudyOnce(`quiz-abandon-${course}-${step.id}-${current.startedAt}`, 'quiz_abandon', {
        course,
        lesson: lesson.id,
        step: step.id,
        mode: current.mode,
        questions: current.order.length,
        answered: Object.keys(current.answers).length
      });
    };
    window.addEventListener('pagehide', recordAbandonment);
    return () => {
      window.removeEventListener('pagehide', recordAbandonment);
      recordAbandonment();
    };
  }, [course, lesson.id, step.id]);

  // once a question is checked, Enter moves on; focus goes to Next without scrolling, so the student stays on
  // the answer they are reading
  const checkedNow = session ? session.checked[session.order[session.i]] : undefined;
  useEffect(() => {
    if (checkedNow !== undefined) nextBtn.current?.focus({ preventScroll: true });
  }, [checkedNow, session?.i]); // eslint-disable-line react-hooks/exhaustive-deps

  // Enter submits an answer first; it can only move on after the result is visible.
  useEffect(() => {
    if (!session || session.finished) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || (e.target as HTMLElement).closest('input, textarea, button, a')) return;
      const id = session.order[session.i];
      const q = qs(id);
      if (!q) return;
      if (session.checked[id] === undefined && isAnswered(q, session.answers[id])) check(id);
      else if (session.checked[id] !== undefined) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!idx) {
    return (
      <div className="lx-quiz lx-quiz-loading" aria-busy="true">
        <span className="lx-spinner" /> Loading the questions…
      </div>
    );
  }

  const available = (step.questionIds ?? []).filter((id) => idx.byId.has(id));
  const configuredSetSize = step.size && step.size < available.length ? step.size : undefined;
  const setSize = step.kind === 'practice' ? boundedPracticeSize(available.length, configuredSetSize) : configuredSetSize ?? available.length;
  const mix = [1, 2, 3].map((l) => available.filter((id) => idx.byId.get(id)?.level === l).length);
  const sameKind = (ss: QuizSession): 'adaptive' | 1 | 2 | 3 | 'all' => (ss.adaptive ? 'adaptive' : ss.only ?? 'all');

  // ── intro ──────────────────────────────────────────────────────────────────────
  if (!session) {
    const isExam = step.kind === 'exam';
    return (
      <div className="lx-quiz lx-quiz-intro">
        <h2 className="lx-h2 lx-quiz-title">
          {isExam ? <GraduationCap size={24} aria-hidden /> : <ListChecks size={24} aria-hidden />} {step.title}
        </h2>
        <p className="lx-lead">
          {step.kind === 'check'
            ? `${available.length} quick questions on what you just learned. You see right away if you are right, with the worked solution.`
            : step.kind === 'practice'
              ? `${setSize} questions from a pool of ${available.length}, the ones you have not mastered first. Feedback and a worked solution after each.`
              : step.timeLimit
                ? `${setSize} questions${step.ordered ? ' in course order' : ''}. Submit each answer to see the result and worked solution immediately; the timer stays on while you practise.`
                : `${available.length} real past exam questions on this topic, with the worked solution${available.some((id) => idx.byId.get(id)?.videoId) ? ' and a video' : ''} after each.`}
        </p>
        <ul className="lx-quiz-facts lx-num">
          <li>
            <ListChecks size={16} aria-hidden /> {setSize} question{setSize === 1 ? '' : 's'}
          </li>
          {step.timeLimit && (
            <li>
              <Timer size={16} aria-hidden /> {step.timeLimit} minutes
            </li>
          )}
          <li>
            <CheckCircle2 size={16} aria-hidden /> Pass mark {Math.round((step.passMark ?? 0.7) * 100)}%
          </li>
        </ul>
        {step.kind === 'practice' && mix.filter(Boolean).length > 1 && (
          <div className="lx-diff">
            <div className="lx-diff-head">
              <strong>Difficulty</strong>
              <span className="lx-meta lx-num">
                {mix[0]} easy · {mix[1]} medium · {mix[2]} hard
              </span>
            </div>
            <div className="lx-diff-bar" aria-hidden>
              {mix.map((n, i) => (n ? <span key={i} className={`lx-lvl-${i + 1}`} style={{ flex: n }} /> : null))}
            </div>
            <div className="lx-diff-choices" role="radiogroup" aria-label="Difficulty">
              {(['adaptive', 1, 2, 3] as const).map((l) => {
                const n = l === 'adaptive' ? available.length : mix[l - 1];
                const mastered = l === 'adaptive' ? 0 : available.filter((id) => idx.byId.get(id)?.level === l && stats[id]?.last === 1).length;
                return (
                  <button
                    key={l}
                    type="button"
                    role="radio"
                    aria-checked={pickLevel === l}
                    disabled={!n}
                    className={`lx-diff-choice${pickLevel === l ? ' is-on' : ''}`}
                    onClick={() => setPickLevel(l)}
                  >
                    <strong>{l === 'adaptive' ? 'Start easy, build up' : LEVEL_LABEL[l]}</strong>
                    <span className="lx-meta lx-num">
                      {l === 'adaptive' ? 'Moves up a level after 3 right in a row' : `${n} questions${mastered ? ` · ${mastered} right last time` : ''}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {lastAttempt && (
          <p className="lx-meta lx-num">
            Last time: {lastAttempt.score} / {lastAttempt.total} ({Math.round((lastAttempt.score / Math.max(1, lastAttempt.total)) * 100)}%) on {new Date(lastAttempt.at).toLocaleDateString()}
          </p>
        )}
        <div className="lx-quiz-actions">
          {isExam && step.timeLimit ? (
            <>
              <button type="button" className="lx-btn lx-btn--primary lx-btn--lg" onClick={() => start('exam')}>
                <Timer size={18} /> Start timed ({step.timeLimit} min)
              </button>
              <button type="button" className="lx-btn lx-btn--lg" onClick={() => start('practice')}>
                <Play size={18} /> Practise without a timer
              </button>
            </>
          ) : (
            <button type="button" className="lx-btn lx-btn--primary lx-btn--lg" onClick={() => start(defaultMode, undefined, step.kind === 'practice' && mix.filter(Boolean).length > 1 ? pickLevel : 'all')} disabled={!available.length}>
              <Play size={18} /> Start
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── resume prompt (after a reload or coming back) ─────────────────────────────
  const started = session.i > 0 || Object.keys(session.answers).length > 0;
  if (!session.finished && started && !resumeAsked) {
    return (
      <div className="lx-quiz lx-quiz-intro">
        <h2 className="lx-h2 lx-quiz-title">
          <RotateCcw size={24} aria-hidden /> Pick up where you left off?
        </h2>
        <p className="lx-lead lx-num">
          You were on question {session.i + 1} of {session.order.length}, with {Object.keys(session.answers).length} answered
          {session.timeLimit ? ` and ${fmt(session.timeLimit - session.elapsed)} left on the clock` : ''}.
        </p>
        <div className="lx-quiz-actions">
          <button type="button" className="lx-btn lx-btn--primary lx-btn--lg" onClick={() => setResumeAsked(true)}>
            <Play size={18} /> Resume quiz
          </button>
          <button type="button" className="lx-btn lx-btn--lg" onClick={() => start(session.mode, undefined, sameKind(session))}>
            <RefreshCw size={18} /> Restart
          </button>
        </div>
      </div>
    );
  }

  // ── results ────────────────────────────────────────────────────────────────────
  if (session.finished) {
    const pending = session.selfPending ?? [];
    // an open answer marked after the exam updates this session and the saved attempt
    const markSelf = (qid: string, right: boolean) => {
      const qq = qs(qid);
      if (qq) recordAnswer(qid, right, { course, topic: qq.topic });
      patch((ss) => {
        ss.checked[qid] = right;
        ss.selfPending = (ss.selfPending ?? []).filter((x) => x !== qid);
      });
      updateProgress((s) => {
        const a = [...s.attempts].reverse().find((x) => x.course === course && x.stepId === step.id);
        const r = a?.results.find((x) => x.q === qid);
        if (a && r && r.ok !== right) {
          r.ok = right;
          a.score += right ? 1 : -1;
        }
      });
    };
    const results = session.order.map((id) => ({ id, ok: !!session.checked[id], q: qs(id) }));
    const score = results.filter((r) => r.ok).length;
    const pct = Math.round((score / Math.max(1, results.length)) * 100);
    const passed = pct >= Math.round((step.passMark ?? 0.7) * 100);
    const wrong = results.filter((r) => !r.ok).map((r) => r.id);
    return (
      <div className="lx-quiz lx-quiz-results">
        <div className={`lx-score ${passed ? 'is-pass' : 'is-fail'}`}>
          <span className="lx-ring" style={{ ['--p' as string]: pct, ['--size' as string]: '84px' }}>
            <span>{pct}%</span>
          </span>
          <div>
            <h2 className="lx-h2">
              {passed ? (
                <>
                  <Trophy size={22} aria-hidden /> {pct === 100 ? 'Perfect score' : 'Passed'}
                </>
              ) : (
                'Keep going'
              )}
            </h2>
            <p className="lx-lead lx-num">
              {score} of {results.length} right · {fmt(session.elapsed)} · pass mark {Math.round((step.passMark ?? 0.7) * 100)}%
            </p>
            {!passed && <p className="lx-meta">The ones you missed are now in your review queue; they come back until they stick.</p>}
          </div>
        </div>
        <div className="lx-quiz-actions">
          {onContinue && (
            <button type="button" className="lx-btn lx-btn--primary lx-btn--lg" onClick={onContinue}>
              {continueLabel ?? 'Continue'} <ArrowRight size={18} />
            </button>
          )}
          {wrong.length > 0 && (
            <button type="button" className="lx-btn lx-btn--lg" onClick={() => start(session.mode === 'exam' ? 'practice' : session.mode, wrong)}>
              <RotateCcw size={18} /> Retry the {wrong.length} I missed
            </button>
          )}
          <button type="button" className="lx-btn lx-btn--lg" onClick={() => start(session.mode, undefined, sameKind(session))}>
            <RefreshCw size={18} /> {step.ordered ? 'Sit it again' : 'New set'}
          </button>
        </div>
        {new Set(results.map((r) => r.q?.level)).size > 1 && (
          <ul className="lx-level-break lx-num" aria-label="By difficulty">
            {([1, 2, 3] as const).map((l) => {
              const at = results.filter((r) => r.q?.level === l);
              return at.length ? (
                <li key={l} className={`lx-lvl-${l}`}>
                  <span>{LEVEL_LABEL[l]}</span>
                  <strong>
                    {at.filter((r) => r.ok).length} / {at.length}
                  </strong>
                </li>
              ) : null;
            })}
          </ul>
        )}
        {pending.length > 0 && (
          <p className="lx-self-pending">
            <Eye size={16} aria-hidden /> {pending.length} open answer{pending.length > 1 ? 's' : ''} to mark: open {pending.length > 1 ? 'each one' : 'it'} below, compare with the solution and mark yourself. Your score updates as you go.
          </p>
        )}
        <h3 className="lx-h3 lx-review-title">Review your answers</h3>
        <ol className="lx-review">
          {results.map((r, i) =>
            r.q ? (
              <li key={r.id} className={r.ok ? 'is-right' : 'is-wrong'}>
                <button
                  type="button"
                  className="lx-review-row"
                  aria-expanded={!closed.has(r.id)}
                  onClick={() => setClosed((s) => (s.has(r.id) ? new Set([...s].filter((x) => x !== r.id)) : new Set([...s, r.id])))}
                >
                  {pending.includes(r.id) ? <Eye size={18} aria-label="to mark" className="lx-review-pending" /> : r.ok ? <CheckCircle2 size={18} aria-hidden /> : <XCircle size={18} aria-hidden />}
                  <span className="lx-num">{i + 1}.</span>
                  <span className="lx-review-q">
                    <MathText text={r.q.prompt.length > 160 ? r.q.prompt.slice(0, 160).replace(/\$[^$]*$/, '') + '…' : r.q.prompt} />
                  </span>
                  {session.flags.includes(r.id) && <Flag size={15} aria-label="flagged" />}
                </button>
                {pending.includes(r.id) && (
                  <span className="lx-self-mark lx-review-mark">
                    <button type="button" className="lx-btn lx-btn--good lx-btn--sm" onClick={() => markSelf(r.id, true)}>
                      <CheckCircle2 size={15} /> I got it right
                    </button>
                    <button type="button" className="lx-btn lx-btn--bad lx-btn--sm" onClick={() => markSelf(r.id, false)}>
                      <XCircle size={15} /> I missed it
                    </button>
                  </span>
                )}
                {!closed.has(r.id) && (
                  <div className="lx-review-body">
                    <p>
                      <strong>Answer: </strong>
                      <MathText text={r.q.answerText} />
                    </p>
                    <Explanation
                      q={r.q}
                      chosen={Array.isArray(session.answers[r.id]) ? (session.answers[r.id] as number[]) : undefined}
                      correct={pending.includes(r.id) ? null : r.ok}
                      order={session.optionOrder[r.id]}
                      yourAnswer={answerText(r.q, session.answers[r.id], session.optionOrder[r.id])}
                    />
                  </div>
                )}
              </li>
            ) : null
          )}
        </ol>
      </div>
    );
  }

  // ── a question ─────────────────────────────────────────────────────────────────
  const id = session.order[session.i];
  const q = qs(id);
  const exam = session.mode === 'exam';
  const result = session.checked[id];
  const shown = session.revealed.includes(id);
  const answered = q ? isAnswered(q, session.answers[id]) : false;
  const ad = session.adaptive;
  const adaptiveMore = !!ad && session.order.length < ad.size && !!pickAdaptive(ad.pool, session.order, ad.level);
  const last = session.i === session.order.length - 1 && !adaptiveMore;
  const remaining = session.timeLimit ? session.timeLimit - elapsedRef.current : null;

  function check(qid: string) {
    const qq = qs(qid);
    if (!qq) return;
    const ok = grade(qq, session!.answers[qid]);
    if (ok === null) return;
    recordAnswer(qid, ok, { course, topic: qq.topic, unsure: session!.confidence[qid] === 'unsure' });
    patch((ss) => {
      ss.checked[qid] = ok;
      if (ss.adaptive) {
        // three right in a row at this level: up one; two wrong in a row: back down one
        const atLevel = ss.order.filter((id) => ss.checked[id] !== undefined && qs(id)?.level === ss.adaptive!.level).map((id) => ss.checked[id]);
        const tail = atLevel.slice(-3);
        if (tail.length === 3 && tail.every(Boolean) && ss.adaptive.level < 3) ss.adaptive.level = (ss.adaptive.level + 1) as 2 | 3;
        else if (atLevel.slice(-2).length === 2 && atLevel.slice(-2).every((x) => !x) && ss.adaptive.level > 1) ss.adaptive.level = (ss.adaptive.level - 1) as 1 | 2;
      }
    });
  }
  // "Show answer": the answer and its worked steps now, even mid-exam. The question is graded as it stands
  // (unanswered or wrong counts as wrong); an open question is marked by the student after seeing it.
  function showAnswer(qid: string) {
    const qq = qs(qid);
    if (!qq) return;
    const ok = qq.kind === 'self' ? null : grade(qq, session!.answers[qid]) === true;
    if (ok !== null) recordAnswer(qid, ok, { course, topic: qq.topic });
    patch((ss) => {
      if (!ss.revealed.includes(qid)) ss.revealed.push(qid);
      if (ok !== null) ss.checked[qid] = ok;
    });
  }
  function next() {
    if (last) return finish({ ...session!, elapsed: elapsedRef.current });
    patch((ss) => {
      if (ss.adaptive && ss.i === ss.order.length - 1) {
        const n = pickAdaptive(ss.adaptive.pool, ss.order, ss.adaptive.level);
        if (n) {
          ss.order.push(n.id);
          Object.assign(ss.optionOrder, optionOrderFor([n.id]));
        }
      }
      ss.i = Math.min(ss.order.length - 1, ss.i + 1);
    });
  }

  return (
    <div className={`lx-quiz${exam ? ' is-exam' : ''}`}>
      {q?.pastPaper && (
        <div className="lx-exam-context" aria-label="Exam context">
          <span>{COURSE_BY_ID[course].code} · {COURSE_BY_ID[course].title}</span>
          <strong>{examLabel(typeof q.source === 'string' ? q.source : typeof q.pastPaper === 'string' ? q.pastPaper : undefined)}</strong>
        </div>
      )}
      <QuestionNav
        session={session}
        total={ad?.size ?? session.order.length}
        mode={exam ? 'Timed practice · feedback after each answer' : session.mode === 'check' ? 'Quick check' : ad ? `Building up · level ${ad.level} of 3` : session.only ? `Practice · ${LEVEL_LABEL[session.only].toLowerCase()} only` : 'Practice'}
        exam={exam}
        remaining={remaining}
        onGo={(n) => {
          // A later question cannot be reached until the current answer is submitted.
          if (n <= session.i || result !== undefined) patch((ss) => void (ss.i = n));
        }}
        onNext={() => {
          if (!q) return;
          if (result !== undefined) next();
          else if (q.kind !== 'self' && answered) check(id);
        }}
        nextLabel={result !== undefined ? 'Next' : 'Submit answer'}
        nextDisabled={result === undefined && (!answered || q?.kind === 'self')}
      />

      {q ? (
        <QuestionView
          key={q.id}
          q={q}
          index={session.i}
          total={ad?.size ?? session.order.length}
          examMode={false}
          optionOrder={session.optionOrder[id]}
          answer={session.answers[id]}
          result={result}
          revealed={session.revealed.includes(id)}
          flagged={session.flags.includes(id)}
          confidence={session.confidence[id]}
          hintShown={session.hints.includes(id)}
          locked={result !== undefined}
          onAnswer={(a) => patch((ss) => void (ss.answers[id] = a))}
          onCheck={() => check(id)}
          onFlag={() => {
            toggleFlag(id, course);
            patch((ss) => void (ss.flags = ss.flags.includes(id) ? ss.flags.filter((x) => x !== id) : [...ss.flags, id]));
          }}
          onConfidence={(c) => patch((ss) => void (ss.confidence[id] = c))}
          onHint={() => patch((ss) => void ss.hints.push(id))}
          onReveal={() => patch((ss) => void ss.revealed.push(id))}
          onSelf={(right) => {
            recordAnswer(id, right, { course, topic: q.topic });
            patch((ss) => {
              ss.answers[id] = right ? 'self:right' : 'self:wrong';
              ss.checked[id] = right;
            });
          }}
        />
      ) : (
        <p className="lx-empty">This question is no longer in the bank.</p>
      )}

      <div className="lx-quiz-nav">
        {(exam || session.i > 0) && (
          <button type="button" className="lx-btn" disabled={session.i === 0} onClick={() => patch((ss) => void (ss.i = Math.max(0, ss.i - 1)))}>
            <ArrowLeft size={17} /> Previous
          </button>
        )}
        <span className="lx-quiz-nav-spacer" />
        {result === undefined && !(q?.kind === 'self' && shown) && (
          <button type="button" className="lx-btn lx-btn--ghost" onClick={() => showAnswer(id)} title="See the answer and how it is done (counts as not right)">
            <Eye size={16} /> Show answer
          </button>
        )}
        {result === undefined ? (
          <>
            {q?.kind !== 'self' && (
              <button type="button" className="lx-btn lx-btn--primary" disabled={!answered} onClick={() => check(id)}>
                Submit answer <CheckCircle2 size={17} />
              </button>
            )}
          </>
        ) : (
          <button type="button" ref={nextBtn} className="lx-btn lx-btn--primary" onClick={next}>
            {last ? 'See results' : 'Next question'} <ArrowRight size={17} />
          </button>
        )}
      </div>
    </div>
  );
};
