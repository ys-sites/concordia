import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, FileStack, Layers, Play, Repeat, Settings2, Target, X } from 'lucide-react';
import type { CourseId } from '../../types';
import type { GateContent } from '../../data/gates/types';
import type { Lesson, Step } from '../model';
import { loadGate } from '../../data/gates';
import { COURSE_BY_ID, courseClass } from '../courses';
import { href } from '../router';
import { updateProgress } from '../progress/store';
import { useCourseQuestions } from '../questions';
import { MathText } from '../../utils/mathRenderer';
import { QuizRunner } from '../quiz/QuizRunner';
import type { QuizCat } from '../practice/pool';
import { CAT_INFO, QUIZ_CATS, buildPool, pickQuiz } from '../practice/pool';
import '../styles/practice.css';

// Build your own quiz: 1 where the questions come from (class notes, previous exams, or everything) ·
// 2 what to cover (chapters or single subtopics) · 3 which kinds of questions · 4 how many, in what order,
// with feedback or timed · then the quiz runs on this page. The choices are remembered in this browser.
type Stage = 'source' | 'cover' | 'kind' | 'setup' | 'run';
type SourceFilter = 'all' | 'notes' | 'exam';
interface Settings {
  source: SourceFilter;
  topics: string[];
  cats: QuizCat[];
  n: number; // 0 = all
  order: 'notes' | 'mixed';
  mode: 'practice' | 'exam';
}
const DEFAULTS: Settings = { source: 'all', topics: [], cats: ['repeat', 'similar'], n: 10, order: 'notes', mode: 'practice' };
const KEY = (c: CourseId) => `concordia.practice.${c}`;
const load = (c: CourseId): Settings => {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY(c)) ?? '{}') };
  } catch {
    return DEFAULTS;
  }
};
const STAGES: { id: Stage; label: string }[] = [
  { id: 'source', label: 'Source' },
  { id: 'cover', label: 'What to cover' },
  { id: 'kind', label: 'Question types' },
  { id: 'setup', label: 'Set up' },
  { id: 'run', label: 'Quiz' }
];
const SOURCE_INFO: Record<SourceFilter, { title: string; desc: string }> = {
  all: { title: 'Everything', desc: 'Class notes and previous exams together — the full question pool.' },
  notes: { title: 'Class notes', desc: 'Questions from the teacher’s notes, tutorials and worked examples.' },
  exam: { title: 'Previous exams', desc: 'Questions that actually appeared on earlier midterms, quizzes and finals.' }
};

export const PracticeBuilder: React.FC<{ course: CourseId }> = ({ course }) => {
  const c = COURSE_BY_ID[course];
  const [gate, setGate] = useState<GateContent | null>(null);
  const idx = useCourseQuestions(course);
  const initial = useMemo(() => load(course), [course]);
  const [source, setSource] = useState<SourceFilter>(initial.source);
  const [topics, setTopics] = useState<Set<string>>(() => new Set(initial.topics));
  const [cats, setCats] = useState<Set<QuizCat>>(() => new Set(initial.cats));
  const [n, setN] = useState(initial.n);
  const [order, setOrder] = useState(initial.order);
  const [mode, setMode] = useState(initial.mode);
  const [stage, setStage] = useState<Stage>('source');
  const [run, setRun] = useState<{ lesson: Lesson; step: Step } | null>(null);

  useEffect(() => {
    let alive = true;
    loadGate(course).then((g) => alive && setGate(g));
    return () => {
      alive = false;
    };
  }, [course]);
  useEffect(() => {
    try {
      localStorage.setItem(KEY(course), JSON.stringify({ source, topics: [...topics], cats: [...cats], n, order, mode }));
    } catch {
      // the choices just won't be remembered
    }
  }, [course, source, topics, cats, n, order, mode]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const pool = useMemo(() => (gate && idx ? buildPool(course, gate, (id) => idx.byId.has(id)) : []), [gate, idx, course]);
  const visiblePool = useMemo(() => (source === 'all' ? pool : pool.filter((e) => e.src === source)), [pool, source]);
  const topicName = useMemo(() => new Map(gate?.topics.map((t) => [t.id, t.name]) ?? []), [gate]);
  const allTopicIds = useMemo(() => gate?.topics.map((t) => t.id).filter((t) => visiblePool.some((e) => e.topic === t)) ?? [], [gate, visiblePool]);
  const topicOrder = allTopicIds.filter((t) => topics.has(t));
  const selected = visiblePool.filter((e) => topics.has(e.topic));
  const quizPool = selected.filter((e) => cats.has(e.cat));
  const total = quizPool.length;
  const take = n === 0 ? total : Math.min(n, total);
  const count = (pred: (e: (typeof pool)[number]) => boolean) => visiblePool.filter(pred).length;
  const sourcePhrase = source === 'all' ? 'class notes and previous exams' : source === 'exam' ? 'previous exams' : 'class notes';

  const toggle = <T,>(set: React.Dispatch<React.SetStateAction<Set<T>>>, v: T) =>
    set((cur) => {
      const next = new Set(cur);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });
  const toggleChapter = (ids: string[]) =>
    setTopics((cur) => {
      const next = new Set(cur);
      const all = ids.every((t) => next.has(t));
      for (const t of ids) all ? next.delete(t) : next.add(t);
      return next;
    });

  const title = () => {
    if (!gate) return '';
    const whole = gate.subjects.filter((s) => s.topics.length && s.topics.filter((t) => allTopicIds.includes(t)).every((t) => topics.has(t)));
    const covered = new Set(whole.flatMap((s) => s.topics));
    const parts = [...whole.map((s) => s.name), ...topicOrder.filter((t) => !covered.has(t)).map((t) => topicName.get(t) ?? t)];
    return parts.length <= 3 ? parts.join(' · ') : `${parts.slice(0, 3).join(' · ')} and ${parts.length - 3} more`;
  };

  const start = () => {
    const ids = pickQuiz(quizPool, take, order, topicOrder).map((e) => e.id);
    const id = `custom-${Date.now().toString(36)}`;
    const step: Step = {
      id,
      kind: mode === 'exam' ? 'exam' : 'practice',
      title: `Your quiz: ${title()}`,
      minutes: ids.length * (mode === 'exam' ? 3 : 2),
      questionIds: ids,
      size: 0,
      ordered: true,
      passMark: 0.7,
      ...(mode === 'exam' ? { timeLimit: Math.max(5, ids.length * 3) } : {})
    };
    // only the latest built quiz is kept to resume
    updateProgress((s) => {
      for (const k of Object.keys(s.quizzes)) if (k.startsWith(`${course}/custom-`)) delete s.quizzes[k];
    });
    setRun({ lesson: { id: 'custom', title: step.title, summary: '', objectives: [], topicTags: topicOrder, minutes: step.minutes, steps: [step] }, step });
    setStage('run');
  };

  const can = (s: Stage) => s === 'source' || s === 'cover' || (s === 'kind' && topics.size > 0) || (s === 'setup' && total > 0) || (s === 'run' && !!run);
  const at = STAGES.findIndex((s) => s.id === stage);

  return (
    <div className={`lx-wrap lx-pb ${courseClass(course)}`}>
      <header className="lx-pb-head">
        <a className="lx-link" href={href({ name: 'course', course, tab: 'exam' })}>
          <ArrowLeft size={14} aria-hidden /> {c.code} exam prep
        </a>
        <h1 className="lx-h1">
          <Target size={26} aria-hidden /> Build your own quiz
        </h1>
        <p className="lx-lead">Choose where the questions come from, the chapters or just the subtopics you need, which kinds of questions, and go. After each answer: the worked solution, where the question comes from, and the slides that teach it.</p>
        <ol className="lx-pb-steps">
          {STAGES.map((s, i) => (
            <li key={s.id} className={`${i === at ? 'is-now' : ''}${i < at ? ' is-past' : ''}`}>
              <button type="button" disabled={!can(s.id)} onClick={() => setStage(s.id)} aria-current={i === at ? 'step' : undefined}>
                <span className="lx-pb-n lx-num">{i < at ? <Check size={13} /> : i + 1}</span> {s.label}
              </button>
            </li>
          ))}
        </ol>
      </header>

      {!gate || !idx ? (
        <div className="lx-route-loading" aria-busy="true" />
      ) : stage === 'source' ? (
        <section className="lx-pb-card">
          <h2 className="lx-h2">1 · Where do the questions come from?</h2>
          <p className="lx-meta">Previous exams are not listed as papers anywhere on this site — their questions live here, inside the quiz builder.</p>
          <div className="lx-pb-cats">
            {(['notes', 'exam', 'all'] as SourceFilter[]).map((k) => {
              const m = k === 'all' ? pool.length : pool.filter((e) => e.src === k).length;
              const on = source === k;
              return (
                <button key={k} type="button" className={`lx-pb-cat${on ? ' is-on' : ''}`} onClick={() => setSource(k)} disabled={!m} aria-pressed={on}>
                  <span className="lx-pb-cat-top">
                    <span className="lx-chip">{k === 'notes' ? <BookOpen size={13} aria-hidden /> : k === 'exam' ? <FileStack size={13} aria-hidden /> : <Layers size={13} aria-hidden />}</span>
                    <span className="lx-pb-check" aria-hidden>
                      {on && <Check size={14} />}
                    </span>
                  </span>
                  <strong>{SOURCE_INFO[k].title}</strong>
                  <span className="lx-meta">{SOURCE_INFO[k].desc}</span>
                  <b className="lx-num">
                    {m} question{m === 1 ? '' : 's'}
                  </b>
                </button>
              );
            })}
          </div>
          <div className="lx-pb-actions">
            <button type="button" className="lx-btn lx-btn--accent" onClick={() => setStage('cover')}>
              Next: what to cover <ArrowRight size={16} />
            </button>
          </div>
        </section>
      ) : stage === 'cover' ? (
        <section className="lx-pb-card">
          <h2 className="lx-h2">2 · What do you want to cover?</h2>
          <p className="lx-meta">From {sourcePhrase}. Click a chapter to take all of it, or pick only the subtopics you want inside it. Chapters follow the order of the teacher’s notes.</p>
          <div className="lx-pb-tools">
            <button type="button" className="lx-btn lx-btn--sm" onClick={() => setTopics(new Set(allTopicIds))}>
              <Layers size={14} /> Everything
            </button>
            <button type="button" className="lx-btn lx-btn--sm" onClick={() => setTopics(new Set())} disabled={!topics.size}>
              <X size={14} /> Clear
            </button>
            <span className="lx-meta lx-num">
              {topicOrder.length} subtopic{topicOrder.length === 1 ? '' : 's'} · {selected.length} questions
            </span>
          </div>
          <div className="lx-pb-chapters">
            {gate.subjects.map((s) => {
              const ids = s.topics.filter((t) => allTopicIds.includes(t));
              if (!ids.length) return null;
              const on = ids.filter((t) => topics.has(t)).length;
              const state = on === 0 ? '' : on === ids.length ? 'is-all' : 'is-part';
              const inCh = (e: (typeof pool)[number]) => ids.includes(e.topic);
              const examN = count((e) => inCh(e) && e.src === 'exam');
              const repeatN = count((e) => inCh(e) && e.cat === 'repeat');
              const meta =
                source === 'exam'
                  ? `${count(inCh)} from previous exams · ${repeatN} repeated`
                  : source === 'notes'
                    ? `${count(inCh)} from class notes`
                    : `${examN} from previous exams · ${repeatN} repeated · ${count(inCh)} in total`;
              return (
                <div key={s.id} className={`lx-pb-chapter ${state}`}>
                  <button type="button" className="lx-pb-chapter-head" onClick={() => toggleChapter(ids)} aria-pressed={state === 'is-all'}>
                    <span className="lx-pb-check" aria-hidden>
                      {state === 'is-all' ? <Check size={14} /> : state === 'is-part' ? '–' : ''}
                    </span>
                    <span className="lx-pb-chapter-text">
                      <span className="lx-chip">{s.ch}</span>
                      <strong>
                        <MathText text={s.name} />
                      </strong>
                      <span className="lx-meta lx-num">{meta}</span>
                    </span>
                  </button>
                  <div className="lx-pb-topics">
                    {ids.map((t) => {
                      const k = count((e) => e.topic === t);
                      const r = count((e) => e.topic === t && e.cat === 'repeat');
                      return (
                        <button key={t} type="button" className={`lx-pb-topic${topics.has(t) ? ' is-on' : ''}`} onClick={() => toggle(setTopics, t)} aria-pressed={topics.has(t)} title={`${k} questions${r ? `, ${r} repeated on past papers` : ''}`}>
                          {topics.has(t) && <Check size={13} aria-hidden />}
                          <MathText text={topicName.get(t) ?? t} />
                          <span className="lx-num lx-pb-k">{k}</span>
                          {r > 0 && (
                            <span className="lx-num lx-pb-r">
                              <Repeat size={11} aria-hidden /> {r}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lx-pb-actions">
            <button type="button" className="lx-btn" onClick={() => setStage('source')}>
              <ArrowLeft size={16} /> Back
            </button>
            <button type="button" className="lx-btn lx-btn--accent" disabled={!topics.size} onClick={() => setStage('kind')}>
              Next: question types <ArrowRight size={16} />
            </button>
          </div>
        </section>
      ) : stage === 'kind' ? (
        <section className="lx-pb-card">
          <h2 className="lx-h2">3 · Which questions?</h2>
          <p className="lx-meta">
            For <b>{title()}</b>, from {sourcePhrase}. Pick one or more; the counts are for what you chose in step 2.
          </p>
          <div className="lx-pb-cats">
            {QUIZ_CATS.map((k) => {
              const m = selected.filter((e) => e.cat === k).length;
              const on = cats.has(k);
              return (
                <button key={k} type="button" className={`lx-pb-cat is-${k}${on ? ' is-on' : ''}`} onClick={() => toggle(setCats, k)} disabled={!m} aria-pressed={on}>
                  <span className="lx-pb-cat-top">
                    <span className="lx-chip">{CAT_INFO[k].short}</span>
                    <span className="lx-pb-check" aria-hidden>
                      {on && <Check size={14} />}
                    </span>
                  </span>
                  <strong>{CAT_INFO[k].title}</strong>
                  <span className="lx-meta">{CAT_INFO[k].desc}</span>
                  <b className="lx-num">
                    {m} question{m === 1 ? '' : 's'}
                  </b>
                </button>
              );
            })}
          </div>
          <div className="lx-pb-actions">
            <button type="button" className="lx-btn" onClick={() => setStage('cover')}>
              <ArrowLeft size={16} /> Back
            </button>
            <button type="button" className="lx-btn lx-btn--accent" disabled={!total} onClick={() => setStage('setup')}>
              Next: set up ({total}) <ArrowRight size={16} />
            </button>
          </div>
        </section>
      ) : stage === 'setup' ? (
        <section className="lx-pb-card">
          <h2 className="lx-h2">
            <Settings2 size={20} aria-hidden /> 4 · Set up
          </h2>
          <div className="lx-pb-setup">
            <fieldset>
              <legend>How many questions</legend>
              <div className="lx-pb-opts">
                {[5, 10, 15, 20].map((k) => (
                  <button key={k} type="button" className={`lx-chip-btn${n === k ? ' is-on' : ''}`} aria-pressed={n === k} onClick={() => setN(k)} disabled={k > total && k !== 5}>
                    {k}
                  </button>
                ))}
                <button type="button" className={`lx-chip-btn${n === 0 ? ' is-on' : ''}`} aria-pressed={n === 0} onClick={() => setN(0)}>
                  All {total}
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Order</legend>
              <div className="lx-pb-opts">
                <button type="button" className={`lx-chip-btn${order === 'notes' ? ' is-on' : ''}`} aria-pressed={order === 'notes'} onClick={() => setOrder('notes')}>
                  Teacher’s notes order
                </button>
                <button type="button" className={`lx-chip-btn${order === 'mixed' ? ' is-on' : ''}`} aria-pressed={order === 'mixed'} onClick={() => setOrder('mixed')}>
                  Mixed, like an exam
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Feedback</legend>
              <div className="lx-pb-opts">
                <button type="button" className={`lx-chip-btn${mode === 'practice' ? ' is-on' : ''}`} aria-pressed={mode === 'practice'} onClick={() => setMode('practice')}>
                  After every answer
                </button>
                <button type="button" className={`lx-chip-btn${mode === 'exam' ? ' is-on' : ''}`} aria-pressed={mode === 'exam'} onClick={() => setMode('exam')}>
                  Timed, answers at the end
                </button>
              </div>
            </fieldset>
          </div>
          <p className="lx-pb-summary">
            <b>Your quiz:</b> {take} question{take === 1 ? '' : 's'} on {title()}, drawn from {sourcePhrase}:{' '}
            {QUIZ_CATS.filter((k) => cats.has(k))
              .map((k) => CAT_INFO[k].title.toLowerCase())
              .join(', ')}
            , spread across every subtopic you picked with repeated ones first.
            {mode === 'exam' ? ` Timed at ${Math.max(5, take * 3)} minutes.` : ''}
          </p>
          <div className="lx-pb-actions">
            <button type="button" className="lx-btn" onClick={() => setStage('kind')}>
              <ArrowLeft size={16} /> Back
            </button>
            <button type="button" className="lx-btn lx-btn--accent" disabled={!take} onClick={start}>
              <Play size={16} /> Start the quiz
            </button>
          </div>
        </section>
      ) : run ? (
        <section className="lx-pb-run">
          <button type="button" className="lx-btn lx-btn--sm" onClick={() => setStage('source')}>
            <ArrowLeft size={14} /> Change the quiz
          </button>
          <QuizRunner key={run.step.id} course={course} lesson={run.lesson} step={run.step} autoStart onContinue={() => setStage('source')} continueLabel="Build another quiz" />
        </section>
      ) : null}
    </div>
  );
};

export default PracticeBuilder;
