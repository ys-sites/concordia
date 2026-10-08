import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Layers, ListChecks, Play, Repeat, Settings2, Shuffle, Sigma, Target, X } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { DrillTarget, GateContent, GateNav, QuizCat, QuizPreset } from './vaultTypes';
import type { GateIndex } from './shared';
import { repeatTypeOf } from './shared';
import { buildDrill, DrillItem, isDrillable, letter, loadStats } from './drill';
import { DrillRunner, Result } from './DrillRunner';
import { DrillModeCards } from './DrillsMenu';
import { buildPool, CAT_INFO, PoolEntry, pickQuiz, QUIZ_CATS } from './quizPool';
import { SourcePanel, VideoDepth } from './QuizExplain';
import { LessonCard } from './FormulaLab';

// ── quiz item prep ───────────────────────────────────────────────────────────────
// 1. Multi-answer questions say so in the stem itself (more visible than a badge).
// 2. Option order is shuffled per attempt so the correct answer moves around
//    ("none/all of the above" stays pinned last; items whose steps cite option
//    letters are left alone so the steps stay accurate).
const MULTI_STEM = '(Select all that apply)';
const PIN_LAST = /^(none|all) of the above\b/i;
const LETTER_REF = /\([a-e]\)/i;

const shuffleOptions = (it: DrillItem): DrillItem => {
  const opts = it.opts!;
  const pinned = opts.map((o, i) => ({ o, i })).filter((x) => PIN_LAST.test(x.o.trim()));
  const rest = opts.map((o, i) => ({ o, i })).filter((x) => !PIN_LAST.test(x.o.trim()));
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  const order = [...rest, ...pinned];
  const newPos = new Map(order.map((x, ni) => [x.i, ni] as const));
  const newOpts = order.map((x) => x.o);
  const newCorrect = it.correct.map((c) => letter(newPos.get(c.charCodeAt(0) - 97) ?? 0));
  const answerText = newCorrect.map((l) => `(${l}) ${newOpts[l.charCodeAt(0) - 97] ?? ''}`).join('; ');
  return { ...it, opts: newOpts, correct: newCorrect, answerText };
};

export const prepQuizItem = (it: DrillItem): DrillItem => {
  let out = it;
  if (out.kind === 'multi' && !out.prompt.includes(MULTI_STEM)) out = { ...out, prompt: `${out.prompt} ${MULTI_STEM}` };
  if ((out.kind === 'mc' || out.kind === 'multi') && out.opts && out.opts.length > 1) {
    const stepsCiteLetters = (out.steps ?? []).some((s) => LETTER_REF.test(s));
    if (!stepsCiteLetters) out = shuffleOptions(out);
  }
  if (out.regen) {
    const orig = out.regen;
    out = {
      ...out,
      regen: () => {
        const fresh = orig();
        return fresh ? prepQuizItem(fresh) : null;
      }
    };
  }
  return out;
};

// ── settings (remembered on this device) ─────────────────────────────────────────
type Stage = 'cover' | 'kind' | 'setup' | 'run';
interface Settings {
  topics: string[];
  cats: QuizCat[];
  n: number; // 0 = all
  order: 'notes' | 'mixed';
  depth: VideoDepth;
}
const DEFAULTS: Settings = { topics: [], cats: ['repeat', 'similar'], n: 10, order: 'notes', depth: 'quick' };
const settingsKey = (course: string) => `gate_skill_${course}`;
const loadSettings = (course: string): Settings => {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(settingsKey(course)) ?? '{}') };
  } catch {
    return DEFAULTS;
  }
};

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  preset: (QuizPreset & { nonce: number }) | null;
}

const STAGES: { id: Stage; label: string }[] = [
  { id: 'cover', label: 'What to cover' },
  { id: 'kind', label: 'Question types' },
  { id: 'setup', label: 'Set up' },
  { id: 'run', label: 'Quiz' }
];

export const SkillQuiz: React.FC<Props> = ({ content, idx, nav, preset }) => {
  const initial = useMemo(() => loadSettings(content.course), [content.course]);
  const [topics, setTopics] = useState<Set<string>>(() => new Set(initial.topics.filter((t) => idx.topic.has(t))));
  const [cats, setCats] = useState<Set<QuizCat>>(() => new Set(initial.cats));
  const [n, setN] = useState(initial.n);
  const [order, setOrder] = useState(initial.order);
  const [depth, setDepth] = useState<VideoDepth>(initial.depth);
  const [stage, setStage] = useState<Stage>('cover');
  const [run, setRun] = useState<{ title: string; items: DrillItem[]; nonce: number } | null>(null);
  const [peek, setPeek] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(settingsKey(content.course), JSON.stringify({ topics: [...topics], cats: [...cats], n, order, depth }));
    } catch {
      // settings just won't persist
    }
  }, [content.course, topics, cats, n, order, depth]);

  // Arriving from the plan or the analyzer with a chapter already chosen
  useEffect(() => {
    if (!preset) return;
    const fromSubjects = (preset.subjects ?? []).flatMap((s) => idx.subject.get(s)?.topics ?? []);
    const t = [...(preset.topics ?? []), ...fromSubjects].filter((x) => idx.topic.has(x));
    if (t.length) setTopics(new Set(t));
    if (preset.cats?.length) setCats(new Set(preset.cats));
    setRun(null);
    setStage('kind');
  }, [preset, idx]);

  const allTopicIds = useMemo(() => content.topics.map((t) => t.id), [content]);
  const allPool = useMemo(() => buildPool(content, idx, new Set(allTopicIds)), [content, idx, allTopicIds]);
  const countOf = (pred: (e: PoolEntry) => boolean) => allPool.filter(pred).length;
  const topicOrder = allTopicIds.filter((t) => topics.has(t));
  const selPool = useMemo(() => allPool.filter((e) => topics.has(e.topic)), [allPool, topics]);
  const quizPool = useMemo(() => selPool.filter((e) => cats.has(e.cat)), [selPool, cats]);
  const total = quizPool.length;
  const take = n === 0 ? total : Math.min(n, total);

  const toggleTopic = (id: string) =>
    setTopics((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const toggleSubject = (ids: string[]) =>
    setTopics((cur) => {
      const next = new Set(cur);
      const all = ids.every((t) => next.has(t));
      for (const t of ids) {
        if (all) next.delete(t);
        else next.add(t);
      }
      return next;
    });
  const toggleCat = (c: QuizCat) =>
    setCats((cur) => {
      const next = new Set(cur);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });

  const quizTitle = () => {
    const whole = content.subjects.filter((s) => s.topics.length && s.topics.every((t) => topics.has(t)));
    const covered = new Set(whole.flatMap((s) => s.topics));
    const loose = topicOrder.filter((t) => !covered.has(t)).map((t) => idx.topic.get(t)?.name ?? t);
    const parts = [...whole.map((s) => s.name), ...loose];
    return parts.length <= 3 ? parts.join(' · ') : `${parts.slice(0, 3).join(' · ')} and ${parts.length - 3} more`;
  };

  const start = (entries: PoolEntry[], title: string) => {
    setRun({ title, items: entries.map((e) => prepQuizItem(e.item)), nonce: Date.now() });
    setStage('run');
  };
  const startCustom = () => start(pickQuiz(quizPool, take, order, topicOrder), `Skill quiz: ${quizTitle()}`);
  const startTopicAgain = (topic: string) => {
    const pool = allPool.filter((e) => e.topic === topic && cats.has(e.cat));
    start(pickQuiz(pool.length ? pool : allPool.filter((e) => e.topic === topic), 10, order, [topic]), `Skill quiz: ${idx.topic.get(topic)?.name ?? topic}`);
  };
  const startMode = (target: DrillTarget, title: string) => {
    setRun({ title, items: buildDrill(target, content, idx, loadStats(content.course)).map(prepQuizItem), nonce: Date.now() });
    setStage('run');
  };

  // quick-start modes, past papers only
  const papers = useMemo(() => content.questions.filter((q) => idx.paperIds.includes(q.exam) && isDrillable(q)), [content, idx]);
  const repeats = papers.filter((q) => repeatTypeOf(q.id, idx));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stats = useMemo(() => loadStats(content.course), [content.course, stage]);
  const mastered = papers.filter((q) => stats[q.id]?.last === 1).length;

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Target size={17} /> Skill Quiz
        </h3>
        <p className="mg-section-sub" style={{ marginBottom: 12 }}>
          Build your own quiz: choose the chapter or just the subtopics you need, choose which kind of questions, and go. After every answer you get the worked
          solution, where the question comes from (past paper, teacher’s notes, textbook, your guides) and a video on the concept.
        </p>
        <ol className="sq-stepper">
          {STAGES.map((s, i) => {
            const at = STAGES.findIndex((x) => x.id === stage);
            const can = s.id === 'cover' || (s.id === 'kind' && topics.size > 0) || (s.id === 'setup' && topics.size > 0 && total > 0) || (s.id === 'run' && !!run);
            return (
              <li key={s.id} className={`${i === at ? 'now' : ''} ${i < at ? 'past' : ''}`}>
                <button type="button" disabled={!can} onClick={() => setStage(s.id)}>
                  <span className="n">{i < at ? <Check size={12} /> : i + 1}</span>
                  {s.label}
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      {stage === 'cover' && (
        <>
          <section className="mg-panel mg-panel-pad">
            <h3 className="mg-section-title">1 · What do you want to cover?</h3>
            <p className="mg-section-sub">
              Click a chapter to take all of it, or pick only the subtopics you want inside it. Chapters follow the order of the teacher’s notes.
            </p>
            <div className="sq-toolbar">
              <button type="button" className="mg-btn small" onClick={() => setTopics(new Set(allTopicIds))}>
                <Layers size={13} /> Everything
              </button>
              <button type="button" className="mg-btn small" onClick={() => setTopics(new Set())} disabled={!topics.size}>
                <X size={13} /> Clear
              </button>
              <span className="mg-small mg-muted">
                {topics.size} subtopic{topics.size === 1 ? '' : 's'} · {selPool.length} questions
              </span>
            </div>
            <div className="sq-subjects">
              {content.subjects.map((s) => {
                const on = s.topics.filter((t) => topics.has(t)).length;
                const state = on === 0 ? '' : on === s.topics.length ? 'all' : 'part';
                const paperN = countOf((e) => s.topics.includes(e.topic) && !!e.item.qid && idx.paperIds.includes(idx.q.get(e.item.qid)?.exam ?? ''));
                const repN = countOf((e) => s.topics.includes(e.topic) && e.cat === 'repeat');
                const allN = countOf((e) => s.topics.includes(e.topic));
                return (
                  <div key={s.id} className={`sq-subject ${state}`}>
                    <button type="button" className="sq-subject-head" onClick={() => toggleSubject(s.topics)} aria-pressed={state === 'all'}>
                      <span className="sq-check">{state === 'all' ? <Check size={13} /> : state === 'part' ? '–' : ''}</span>
                      <span style={{ minWidth: 0 }}>
                        <span className="mg-badge neutral">{s.ch}</span>
                        <span className="sq-subject-name">
                          <MathText text={s.name} />
                        </span>
                        <span className="sq-subject-meta">
                          {paperN} past-paper · {repN} repeated · {allN} in total
                        </span>
                      </span>
                    </button>
                    <div className="sq-topics">
                      {s.topics.map((tid) => {
                        const t = idx.topic.get(tid);
                        const c = countOf((e) => e.topic === tid);
                        const r = countOf((e) => e.topic === tid && e.cat === 'repeat');
                        return (
                          <button key={tid} type="button" className={`mg-chip ${topics.has(tid) ? 'active' : ''}`} onClick={() => toggleTopic(tid)} disabled={!c} title={`${c} questions${r ? `, ${r} repeated` : ''}`}>
                            {topics.has(tid) && <Check size={12} />}
                            {t?.name ?? tid}
                            <small className="sq-n">{c}</small>
                            {r > 0 && (
                              <small className="sq-rep">
                                <Repeat size={10} /> {r}
                              </small>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="dr-actions" style={{ marginTop: 14 }}>
              <button type="button" className="mg-btn primary" disabled={!topics.size} onClick={() => setStage('kind')}>
                Next: question types <ArrowRight size={14} />
              </button>
            </div>
          </section>

          <DrillModeCards
            masteredText={`Or jump straight in. You have mastered ${mastered} of ${papers.length} past-paper questions so far.`}
            modes={[
              { icon: <Shuffle size={15} />, title: <>Mock midterm</>, desc: '20 random past-paper questions, weighted towards the ones that keep coming back.', disabled: !papers.length, onClick: () => startMode({ scope: 'mock' }, 'Mock midterm') },
              { icon: <Repeat size={15} />, title: <>All repeated questions ({repeats.length})</>, desc: 'Everything asked on more than one paper.', disabled: !repeats.length, onClick: () => startMode({ scope: 'repeats' }, 'Every repeated question') },
              { icon: <Layers size={15} />, title: <>All past-paper questions ({papers.length})</>, desc: 'Every question from every paper, in order.', disabled: !papers.length, onClick: () => startMode({ scope: 'all' }, 'All past-paper questions') }
            ]}
          />
        </>
      )}

      {stage === 'kind' && (
        <section className="mg-panel mg-panel-pad">
          <h3 className="mg-section-title">2 · Which questions?</h3>
          <p className="mg-section-sub">
            For <b>{quizTitle()}</b>. Pick one or more; the counts are for what you chose in step 1.
          </p>
          <div className="sq-cats">
            {QUIZ_CATS.map((c) => {
              const k = selPool.filter((e) => e.cat === c).length;
              const on = cats.has(c);
              return (
                <button key={c} type="button" className={`sq-cat ${on ? 'on' : ''}`} onClick={() => toggleCat(c)} disabled={!k} aria-pressed={on}>
                  <span className="sq-cat-top">
                    <span className={`mg-badge ${CAT_INFO[c].cls}`}>{CAT_INFO[c].short}</span>
                    <span className="sq-check">{on && <Check size={13} />}</span>
                  </span>
                  <b>{CAT_INFO[c].title}</b>
                  <span>{CAT_INFO[c].desc}</span>
                  <strong>
                    {k} question{k === 1 ? '' : 's'}
                  </strong>
                </button>
              );
            })}
          </div>

          <div className="sq-table-wrap">
            <table className="sq-table">
              <thead>
                <tr>
                  <th>Subtopic</th>
                  {QUIZ_CATS.map((c) => (
                    <th key={c} className={cats.has(c) ? '' : 'off'}>
                      {CAT_INFO[c].short}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topicOrder.map((t) => (
                  <tr key={t}>
                    <td>{idx.topic.get(t)?.name}</td>
                    {QUIZ_CATS.map((c) => {
                      const k = selPool.filter((e) => e.topic === t && e.cat === c).length;
                      return (
                        <td key={c} className={`${cats.has(c) ? '' : 'off'} ${k ? '' : 'zero'}`}>
                          {k || '·'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dr-actions" style={{ marginTop: 14 }}>
            <button type="button" className="mg-btn" onClick={() => setStage('cover')}>
              <ArrowLeft size={14} /> Back
            </button>
            <button type="button" className="mg-btn primary" disabled={!total} onClick={() => setStage('setup')}>
              Next: set up ({total}) <ArrowRight size={14} />
            </button>
          </div>
        </section>
      )}

      {stage === 'setup' && (
        <section className="mg-panel mg-panel-pad">
          <h3 className="mg-section-title">
            <Settings2 size={17} /> 3 · Set up
          </h3>
          <div className="sq-setup">
            <div>
              <div className="mg-refs-label">How many questions</div>
              <div className="mg-presets">
                {[5, 10, 15, 20].map((k) => (
                  <button key={k} type="button" className={`mg-chip ${n === k ? 'active' : ''}`} onClick={() => setN(k)} disabled={k >= total && k !== 5}>
                    {k}
                  </button>
                ))}
                <button type="button" className={`mg-chip ${n === 0 ? 'active' : ''}`} onClick={() => setN(0)}>
                  All {total}
                </button>
              </div>
            </div>
            <div>
              <div className="mg-refs-label">Order</div>
              <div className="mg-presets">
                <button type="button" className={`mg-chip ${order === 'notes' ? 'active' : ''}`} onClick={() => setOrder('notes')}>
                  Teacher’s notes order
                </button>
                <button type="button" className={`mg-chip ${order === 'mixed' ? 'active' : ''}`} onClick={() => setOrder('mixed')}>
                  Mixed, like an exam
                </button>
              </div>
            </div>
            <div>
              <div className="mg-refs-label">Video after each question</div>
              <div className="mg-presets">
                <button type="button" className={`mg-chip ${depth === 'quick' ? 'active' : ''}`} onClick={() => setDepth('quick')}>
                  Quick explanation
                </button>
                <button type="button" className={`mg-chip ${depth === 'deep' ? 'active' : ''}`} onClick={() => setDepth('deep')}>
                  In depth
                </button>
              </div>
            </div>
          </div>
          <div className="mg-callout" style={{ marginTop: 14 }}>
            <b>Your quiz</b>
            {take} question{take === 1 ? '' : 's'} on {quizTitle()}, from:{' '}
            {QUIZ_CATS.filter((c) => cats.has(c))
              .map((c) => CAT_INFO[c].title.toLowerCase())
              .join(', ')}
            . Questions are spread across every subtopic you picked, repeated ones first. After each answer: the solution, its source, and a {depth === 'quick' ? 'short' : 'longer'} concept video.
          </div>
          <div className="dr-actions" style={{ marginTop: 14 }}>
            <button type="button" className="mg-btn" onClick={() => setStage('kind')}>
              <ArrowLeft size={14} /> Back
            </button>
            <button type="button" className="mg-btn primary" disabled={!take} onClick={startCustom}>
              <Play size={14} /> Start the quiz
            </button>
          </div>
        </section>
      )}

      {stage === 'run' && run && (
        <>
          <div className="sq-run-head">
            <button type="button" className="mg-btn small" onClick={() => setStage('cover')}>
              <ArrowLeft size={13} /> Change the quiz
            </button>
            <span className="mg-small mg-muted">Read aloud, hints, worked steps, sources and a video come with every question.</span>
          </div>
          <DrillRunner
            key={run.nonce}
            course={content.course}
            title={run.title}
            items={run.items}
            embedded
            readAloud
            onOpenQuestion={nav.openQuestion}
            renderExplain={(item) => <SourcePanel item={item} idx={idx} content={content} nav={nav} depth={depth} onDepth={setDepth} onLesson={setPeek} />}
            renderSummary={(results) => <QuizSummary results={results} idx={idx} content={content} onLesson={setPeek} onAgain={startTopicAgain} />}
          />
        </>
      )}

      {peek && <LessonDrawer id={peek} content={content} idx={idx} nav={nav} onClose={() => setPeek(null)} note="your quiz is still open behind this" />}
    </div>
  );
};

// A lesson opened on top of the quiz or plan, so you don't lose your place
export const LessonDrawer: React.FC<{ id: string; content: GateContent; idx: GateIndex; nav: GateNav; onClose: () => void; note: string }> = ({ id, content, idx, nav, onClose, note }) => {
  const f = idx.formula.get(id);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!f) return null;
  return (
    <div className="mg-drawer-backdrop" onClick={onClose}>
      <aside className="mg-drawer sq-lesson-drawer" role="dialog" aria-modal="true" aria-label="Lesson" onClick={(e) => e.stopPropagation()}>
        <div className="mg-drawer-head">
          <strong style={{ fontSize: 14, color: 'var(--text-primary)' }}>
            <Sigma size={14} style={{ verticalAlign: -2 }} /> Lesson · {note}
          </strong>
          <button type="button" className="mg-btn small" onClick={onClose} aria-label="Close">
            <X size={14} />
          </button>
        </div>
        <LessonCard key={f.id} f={f} content={content} idx={idx} nav={nav} />
      </aside>
    </div>
  );
};

// End-of-quiz breakdown: score per subtopic, with the lesson and a focused retry for weak ones
const QuizSummary: React.FC<{ results: Result[]; idx: GateIndex; content: GateContent; onLesson: (id: string) => void; onAgain: (topic: string) => void }> = ({ results, idx, content, onLesson, onAgain }) => {
  const byTopic = new Map<string, { ok: number; n: number }>();
  for (const r of results) {
    const t = r.item.topic ?? '?';
    const cur = byTopic.get(t) ?? { ok: 0, n: 0 };
    byTopic.set(t, { ok: cur.ok + (r.ok ? 1 : 0), n: cur.n + 1 });
  }
  const rows = content.topics.filter((t) => byTopic.has(t.id));
  if (!rows.length) return null;
  return (
    <div className="sq-summary">
      <div className="mg-refs-label" style={{ marginBottom: 6 }}>
        <ListChecks size={13} style={{ verticalAlign: -2 }} /> By subtopic
      </div>
      {rows.map((t) => {
        const s = byTopic.get(t.id)!;
        const pct = Math.round((100 * s.ok) / s.n);
        const lesson = content.formulas.find((f) => f.topic === t.id);
        return (
          <div key={t.id} className={`sq-sum-row ${pct < 70 ? 'weak' : ''}`}>
            <span className="name">{t.name}</span>
            <span className="bar">
              <span style={{ width: `${pct}%` }} />
            </span>
            <span className="score">
              {s.ok}/{s.n}
            </span>
            <span className="acts">
              {pct < 100 && lesson && (
                <button type="button" className="mg-btn small" onClick={() => onLesson(lesson.id)}>
                  <Sigma size={12} /> Lesson
                </button>
              )}
              {pct < 70 && (
                <button type="button" className="mg-btn small" onClick={() => onAgain(t.id)}>
                  <Repeat size={12} /> Quiz this again
                </button>
              )}
            </span>
          </div>
        );
      })}
      {idx.paperIds.length > 0 && <div className="mg-small mg-muted" style={{ marginTop: 6 }}>Below 70 % is flagged: do the lesson, then quiz that subtopic again.</div>}
    </div>
  );
};

export default SkillQuiz;
