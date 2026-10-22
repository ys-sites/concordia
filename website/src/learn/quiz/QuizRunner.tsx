import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Flag, GraduationCap, ListChecks, Play, RefreshCw, RotateCcw, Timer, Trophy, XCircle } from 'lucide-react';
import type { CourseId } from '../../types';
import type { LearnQuestion, Lesson, Step } from '../model';
import { Attempt, QuizSession, recordAnswer, stepKey, toggleFlag, updateProgress, useProgress } from '../progress/store';
import { useCourseQuestions } from '../questions';
import { grade, isAnswered } from '../questions/grade';
import { QuestionView } from './QuestionView';
import { Explanation } from './Explanation';
import { MathText } from '../../utils/mathRenderer';
import '../styles/quiz.css';

// One quiz engine for every question in the site.
//   check     a few questions, instant feedback (in a lesson)
//   practice  a set drawn from the lesson's pool, feedback after each question
//   exam      timed, answers revealed only at the end; past papers keep the paper's order
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

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.max(0, Math.floor(s % 60))).padStart(2, '0')}`;

export interface QuizRunnerProps {
  course: CourseId;
  lesson: Lesson;
  step: Step;
  onFinished?: (passed: boolean) => void;
  onContinue?: () => void;
  continueLabel?: string;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({ course, lesson, step, onFinished, onContinue, continueLabel }) => {
  const key = stepKey(course, step.id);
  const session = useProgress((s) => s.quizzes[key]);
  const stats = useProgress((s) => s.questions);
  const attempts = useProgress((s) => s.attempts);
  const idx = useCourseQuestions(course);
  const [resumeAsked, setResumeAsked] = useState(false);
  const [review, setReview] = useState<string | null>(null);
  const defaultMode: Mode = step.kind === 'check' ? 'check' : step.kind === 'exam' && step.timeLimit ? 'exam' : 'practice';
  const lastAttempt = useMemo(() => [...attempts].reverse().find((a) => a.course === course && a.stepId === step.id), [attempts, course, step.id]);

  const qs = useCallback((id: string): LearnQuestion | undefined => idx?.byId.get(id), [idx]);

  // ── session operations ─────────────────────────────────────────────────────────
  const start = useCallback(
    (mode: Mode, ids?: string[]) => {
      if (!idx) return;
      const pool = (ids ?? step.questionIds ?? []).filter((id) => idx.byId.has(id));
      let order: string[];
      if (ids || step.ordered) order = pool;
      else {
        const size = step.size && step.size < pool.length ? step.size : pool.length;
        // questions not yet mastered come first: never seen or last wrong, then unsure, then by Leitner box
        const rank = (id: string) => {
          const st = stats[id];
          return !st || !st.seen || st.last === 0 ? 0 : st.unsure ? 1 : 1 + st.box;
        };
        order = shuffle(pool)
          .sort((a, b) => rank(a) - rank(b))
          .slice(0, size);
        if (mode !== 'exam') order = shuffle(order);
      }
      const optionOrder: Record<string, number[]> = {};
      for (const id of order) {
        const q = idx.byId.get(id)!;
        if ((q.kind === 'mc' || q.kind === 'multi') && !q.keepOrder && q.options) optionOrder[id] = shuffle(q.options.map((_, i) => i));
      }
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
          ...(mode === 'exam' && step.timeLimit ? { timeLimit: Math.round(step.timeLimit * 60 * (order.length / Math.max(1, step.size || (step.questionIds?.length ?? order.length)))) || step.timeLimit * 60 } : {})
        };
      });
      setResumeAsked(true);
      setReview(null);
    },
    [idx, step, stats, key, course, lesson.id]
  );

  const patch = (fn: (ss: QuizSession) => void) =>
    updateProgress((s) => {
      const ss = s.quizzes[key];
      if (ss) fn(ss);
    });

  const finish = useCallback(
    (ss: QuizSession) => {
      // exam: everything is graded now; practice and check were graded question by question
      const results = ss.order.map((id) => {
        const q = qs(id);
        let ok = ss.checked[id];
        if (ok === undefined) {
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
          for (const r of results) cur.checked[r.q] = r.ok;
        }
        s.attempts.push(attempt);
        if (s.attempts.length > 400) s.attempts.splice(0, s.attempts.length - 400);
      });
      onFinished?.(results.length > 0 && score / results.length >= (step.passMark ?? 0.7));
    },
    [qs, course, lesson.id, step.id, step.passMark, key, onFinished]
  );

  // ── timer (active time; counts down in exam mode) ─────────────────────────────
  const elapsedRef = useRef(session?.elapsed ?? 0);
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

  // Enter checks or moves on (when focus is not in a text field, which handles its own Enter)
  useEffect(() => {
    if (!session || session.finished) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || (e.target as HTMLElement).closest('input, textarea, button, a')) return;
      const id = session.order[session.i];
      const q = qs(id);
      if (!q) return;
      if (session.mode !== 'exam' && session.checked[id] === undefined && isAnswered(q, session.answers[id])) check(id);
      else if (session.checked[id] !== undefined || session.mode === 'exam') next();
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
  const setSize = step.size && step.size < available.length ? step.size : available.length;

  // ── intro ──────────────────────────────────────────────────────────────────────
  if (!session) {
    const isExam = step.kind === 'exam';
    return (
      <div className="lx-quiz lx-quiz-intro">
        <span className="lx-quiz-icon" aria-hidden>
          {isExam ? <GraduationCap size={26} /> : <ListChecks size={26} />}
        </span>
        <h2 className="lx-h2">{step.title}</h2>
        <p className="lx-lead">
          {step.kind === 'check'
            ? `${available.length} quick questions on what you just learned. You see right away if you are right, with the worked solution.`
            : step.kind === 'practice'
              ? `${setSize} questions from a pool of ${available.length}, the ones you have not mastered first. Feedback and a worked solution after each.`
              : step.timeLimit
                ? `${setSize} questions${step.ordered ? ' in the paper’s order' : ''}. Sit them timed like the real exam and see everything at the end, or practise them with feedback after each.`
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
                <Play size={18} /> Practise with feedback
              </button>
            </>
          ) : (
            <button type="button" className="lx-btn lx-btn--primary lx-btn--lg" onClick={() => start(defaultMode)} disabled={!available.length}>
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
        <span className="lx-quiz-icon" aria-hidden>
          <RotateCcw size={26} />
        </span>
        <h2 className="lx-h2">Pick up where you left off?</h2>
        <p className="lx-lead lx-num">
          You were on question {session.i + 1} of {session.order.length}, with {Object.keys(session.answers).length} answered
          {session.timeLimit ? ` and ${fmt(session.timeLimit - session.elapsed)} left on the clock` : ''}.
        </p>
        <div className="lx-quiz-actions">
          <button type="button" className="lx-btn lx-btn--primary lx-btn--lg" onClick={() => setResumeAsked(true)}>
            <Play size={18} /> Resume quiz
          </button>
          <button type="button" className="lx-btn lx-btn--lg" onClick={() => start(session.mode)}>
            <RefreshCw size={18} /> Restart
          </button>
        </div>
      </div>
    );
  }

  // ── results ────────────────────────────────────────────────────────────────────
  if (session.finished) {
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
          <button type="button" className="lx-btn lx-btn--lg" onClick={() => start(session.mode)}>
            <RefreshCw size={18} /> {step.ordered ? 'Sit it again' : 'New set'}
          </button>
        </div>
        <h3 className="lx-h3 lx-review-title">Review your answers</h3>
        <ol className="lx-review">
          {results.map((r, i) =>
            r.q ? (
              <li key={r.id} className={r.ok ? 'is-right' : 'is-wrong'}>
                <button type="button" className="lx-review-row" aria-expanded={review === r.id} onClick={() => setReview(review === r.id ? null : r.id)}>
                  {r.ok ? <CheckCircle2 size={18} aria-hidden /> : <XCircle size={18} aria-hidden />}
                  <span className="lx-num">{i + 1}.</span>
                  <span className="lx-review-q">
                    <MathText text={r.q.prompt.length > 160 ? r.q.prompt.slice(0, 160).replace(/\$[^$]*$/, '') + '…' : r.q.prompt} />
                  </span>
                  {session.flags.includes(r.id) && <Flag size={15} aria-label="flagged" />}
                </button>
                {review === r.id && (
                  <div className="lx-review-body">
                    <p>
                      <strong>Answer: </strong>
                      <MathText text={r.q.answerText} />
                    </p>
                    <Explanation q={r.q} chosen={Array.isArray(session.answers[r.id]) ? (session.answers[r.id] as number[]) : undefined} correct={r.ok} />
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
  const answered = q ? isAnswered(q, session.answers[id]) : false;
  const last = session.i === session.order.length - 1;
  const remaining = session.timeLimit ? session.timeLimit - elapsedRef.current : null;

  function check(qid: string) {
    const qq = qs(qid);
    if (!qq) return;
    const ok = grade(qq, session!.answers[qid]);
    if (ok === null) return;
    recordAnswer(qid, ok, { course, topic: qq.topic, unsure: session!.confidence[qid] === 'unsure' });
    patch((ss) => void (ss.checked[qid] = ok));
  }
  function next() {
    if (last) finish({ ...session!, elapsed: elapsedRef.current });
    else patch((ss) => void (ss.i = Math.min(ss.order.length - 1, ss.i + 1)));
  }

  return (
    <div className={`lx-quiz${exam ? ' is-exam' : ''}`}>
      <div className="lx-quiz-bar">
        <div className="lx-quiz-progress" aria-hidden>
          <span style={{ width: `${((session.i + (result !== undefined ? 1 : 0)) / session.order.length) * 100}%` }} />
        </div>
        <span className="lx-meta lx-num">{exam ? 'Timed exam · answers at the end' : session.mode === 'check' ? 'Quick check' : 'Practice'}</span>
        {remaining !== null && (
          <span className={`lx-timer lx-num${remaining < 120 ? ' is-low' : ''}`} role="timer" aria-label="Time left">
            <Clock size={15} aria-hidden /> {fmt(remaining)}
          </span>
        )}
      </div>

      {exam && (
        <nav className="lx-navgrid" aria-label="Questions">
          {session.order.map((qid, i) => (
            <button
              key={qid}
              type="button"
              className={`${i === session.i ? 'is-current' : ''}${session.answers[qid] !== undefined ? ' is-answered' : ''}${session.flags.includes(qid) ? ' is-flagged' : ''}`}
              aria-current={i === session.i ? 'step' : undefined}
              onClick={() => patch((ss) => void (ss.i = i))}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      )}

      {q ? (
        <QuestionView
          key={q.id}
          q={q}
          index={session.i}
          total={session.order.length}
          examMode={exam}
          optionOrder={session.optionOrder[id]}
          answer={session.answers[id]}
          result={exam ? undefined : result}
          revealed={session.revealed.includes(id)}
          flagged={session.flags.includes(id)}
          confidence={session.confidence[id]}
          hintShown={session.hints.includes(id)}
          locked={!exam && result !== undefined}
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
        {exam ? (
          last ? (
            <button
              type="button"
              className="lx-btn lx-btn--primary"
              onClick={() => {
                const unanswered = session.order.filter((x) => session.answers[x] === undefined).length;
                if (!unanswered || window.confirm(`${unanswered} question${unanswered > 1 ? 's are' : ' is'} unanswered. Submit anyway?`)) finish({ ...session, elapsed: elapsedRef.current });
              }}
            >
              Submit the exam <CheckCircle2 size={17} />
            </button>
          ) : (
            <button type="button" className="lx-btn lx-btn--primary" onClick={next}>
              Next <ArrowRight size={17} />
            </button>
          )
        ) : result === undefined ? (
          q?.kind !== 'self' && (
            <>
              <button type="button" className="lx-btn lx-btn--ghost" onClick={next} title="Skip this question for now">
                Skip
              </button>
              <button type="button" className="lx-btn lx-btn--primary" disabled={!answered} onClick={() => check(id)}>
                Check answer
              </button>
            </>
          )
        ) : (
          <button type="button" className="lx-btn lx-btn--primary" onClick={next} autoFocus>
            {last ? 'See results' : 'Next question'} <ArrowRight size={17} />
          </button>
        )}
      </div>
    </div>
  );
};
