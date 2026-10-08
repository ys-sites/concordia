import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CalendarClock, Check, CheckSquare, FileText, Flag, MapPin, PlayCircle, Repeat, SkipForward, Sigma, Target, Undo2, Video } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { GateContent, GateNav, LectureRef, PlanPhase, PlanStep } from './vaultTypes';
import type { GateIndex } from './shared';
import { LectureButton, MatchBadge, repeatTypeOf } from './shared';
import { buildDrill, DrillItem, fromQuestion, isDrillable, lessonItems, loadStats } from './drill';
import { DrillRunner } from './DrillRunner';
import { LessonCard } from './FormulaLab';
import { SourcePanel, TopicVideos, VideoDepth } from './QuizExplain';
import { LessonDrawer, prepQuizItem } from './SkillQuiz';

// ── progress & dates (this browser only) ─────────────────────────────────────────
const planKey = (course: string) => `gate_plan_${course}`;
const startKey = (course: string) => `gate_plan_start_${course}`;
const loadDone = (course: string): Set<string> => {
  try {
    return new Set(JSON.parse(localStorage.getItem(planKey(course)) ?? '[]'));
  } catch {
    return new Set();
  }
};

const DAY = 86400000;
const today0 = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};
const isoDate = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parseIso = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const daysUntil = (iso: string | null) => {
  if (!iso) return null;
  return Math.round((parseIso(iso).getTime() - today0().getTime()) / DAY);
};

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// The day the plan was first opened on this device anchors "Day N" plans
const planStart = (course: string): Date => {
  try {
    const s = localStorage.getItem(startKey(course));
    if (s) return parseIso(s);
    const t = today0();
    localStorage.setItem(startKey(course), isoDate(t));
    return t;
  } catch {
    return today0();
  }
};

// "Oct 7 – 11" → Oct 11; "Days 3–5" → plan day 5 (scaled to fit before the midterm)
const phaseDeadlines = (phases: PlanPhase[], midterm: string | null, start: Date): (Date | null)[] => {
  const year = midterm ? parseIso(midterm).getFullYear() : start.getFullYear();
  const dayEnds = phases.map((p) => {
    const d = p.when.match(/days?\s*(\d+)(?:\s*[–-]\s*(\d+))?/i);
    return d ? Number(d[2] ?? d[1]) : null;
  });
  const total = Math.max(0, ...dayEnds.map((x) => x ?? 0));
  const avail = midterm ? Math.round((parseIso(midterm).getTime() - start.getTime()) / DAY) : Infinity;
  const scale = total && avail > 0 && avail < total ? avail / total : 1;
  return phases.map((p, i) => {
    const m = p.when.match(/([A-Za-z]{3})[a-z]*\.?\s*(\d{1,2})(?:\s*[–-]\s*(?:([A-Za-z]{3})[a-z]*\.?\s*)?(\d{1,2}))?/);
    if (m && MONTHS.includes(m[1].toLowerCase())) {
      const mon = MONTHS.indexOf((m[3] ?? m[1]).toLowerCase());
      return new Date(year, mon, Number(m[4] ?? m[2]));
    }
    const end = dayEnds[i];
    return end ? new Date(start.getTime() + (Math.max(1, Math.ceil(end * scale)) - 1) * DAY) : null;
  });
};

const fmtDay = (d: Date) => d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
const relText = (d: Date) => {
  const n = Math.round((d.getTime() - today0().getTime()) / DAY);
  return n === 0 ? 'today' : n === 1 ? 'tomorrow' : n > 0 ? `in ${n} days` : `${-n} day${n === -1 ? '' : 's'} ago`;
};

const ICON: Record<PlanStep['kind'], React.ReactNode> = {
  doc: <FileText size={15} />,
  lesson: <Sigma size={15} />,
  videos: <Video size={15} />,
  drill: <PlayCircle size={15} />,
  cluster: <Repeat size={15} />,
  task: <CheckSquare size={15} />
};
const KIND_LABEL: Record<PlanStep['kind'], string> = {
  doc: 'Read',
  lesson: 'Lesson',
  videos: 'Watch',
  drill: 'Drill',
  cluster: 'Repeats',
  task: 'Task'
};

// Topics a document covers: slide references first, then "Part N" guides
const docTopicIds = (key: string, content: GateContent): string[] => {
  const d = content.docs[key];
  if (!d) return [];
  const base = d.path.split('/').pop() ?? '';
  const lm = content.lectureMatch;
  const hit = (r: LectureRef) => r.d === key || (r.l !== undefined && !!lm && new RegExp(lm.replace('{l}', String(r.l)), 'i').test(base));
  const ids = content.topics.filter((t) => t.lec.some(hit) || content.formulas.some((f) => f.topic === t.id && f.lec.some(hit))).map((t) => t.id);
  if (ids.length) return ids;
  const part = base.match(/^Part (\d+[A-Z]?)\b/i)?.[1];
  if (!part) return [];
  const g = `Part ${part}`;
  return content.topics.filter((t) => t.guide === g || content.formulas.some((f) => f.topic === t.id && f.guide === g)).map((t) => t.id);
};

const stepTopicIds = (s: PlanStep, content: GateContent, idx: GateIndex): string[] => {
  if (s.kind === 'lesson' && s.lesson) return [idx.formula.get(s.lesson)?.topic].filter((x): x is string => !!x);
  if ((s.kind === 'videos' || s.kind === 'cluster') && s.topic) return [s.topic];
  if (s.kind === 'drill' && s.drill && 'id' in s.drill) {
    const t = s.drill;
    if (t.scope === 'subject') return idx.subject.get(t.id)?.topics ?? [];
    if (t.scope === 'topic') return [t.id];
    if (t.scope === 'cluster') return [content.clusters.find((c) => c.id === t.id)?.topic].filter((x): x is string => !!x);
  }
  return [];
};

// ── the plan ─────────────────────────────────────────────────────────────────────
export const StudyPlan: React.FC<{ content: GateContent; idx: GateIndex; nav: GateNav }> = ({ content, idx, nav }) => {
  const [done, setDone] = useState<Set<string>>(() => loadDone(content.course));
  const [cur, setCur] = useState<string | null>(null);
  const [depth, setDepth] = useState<VideoDepth>('quick');
  const [peek, setPeek] = useState<string | null>(null);
  const [stats, setStats] = useState(() => loadStats(content.course));
  const hereRef = useRef<HTMLElement>(null);

  useEffect(() => setDone(loadDone(content.course)), [content.course]);
  useEffect(() => {
    const on = () => setStats(loadStats(content.course));
    window.addEventListener('gate-stats', on);
    return () => window.removeEventListener('gate-stats', on);
  }, [content.course]);

  const save = (next: Set<string>) => {
    try {
      localStorage.setItem(planKey(content.course), JSON.stringify([...next]));
    } catch {
      // progress just won't persist
    }
  };
  const setStepDone = (id: string, value: boolean) =>
    setDone((c) => {
      const next = new Set(c);
      if (value) next.add(id);
      else next.delete(id);
      save(next);
      return next;
    });

  const phases = content.plan.phases;
  const all = useMemo(() => phases.flatMap((p, pi) => p.steps.map((s, si) => ({ s, pi, si }))), [phases]);
  const start = useMemo(() => planStart(content.course), [content.course]);
  const deadlines = useMemo(() => phaseDeadlines(phases, content.midterm.date, start), [phases, content.midterm.date, start]);
  const days = daysUntil(content.midterm.date);

  const firstUndone = all.find((x) => !done.has(x.s.id));
  const here = all.find((x) => x.s.id === cur) ?? firstUndone ?? all[all.length - 1];
  const hereIdx = here ? all.indexOf(here) : -1;
  const allDone = !firstUndone;

  const go = (id: string | undefined, scroll = true) => {
    if (!id) return;
    setCur(id);
    if (scroll) setTimeout(() => hereRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
  };
  const doneAndNext = () => {
    if (!here) return;
    setStepDone(here.s.id, true);
    const after = all.slice(hereIdx + 1).find((x) => !done.has(x.s.id)) ?? all.find((x) => x.s.id !== here.s.id && !done.has(x.s.id));
    go(after?.s.id ?? here.s.id);
  };

  const phaseStatus = (pi: number) => {
    const p = phases[pi];
    const pd = p.steps.filter((s) => done.has(s.id)).length;
    const dl = deadlines[pi];
    if (pd === p.steps.length) return { cls: 'ok', text: 'Done' };
    if (dl && dl.getTime() < today0().getTime()) return { cls: 'late', text: `Behind: was due ${fmtDay(dl)}` };
    return { cls: '', text: dl ? `Finish by ${fmtDay(dl)} (${relText(dl)})` : 'No date' };
  };

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <CalendarClock size={17} /> Midterm preparation · {content.midterm.label}
        </h3>
        <p className="mg-section-sub" style={{ marginBottom: 8 }}>
          <b>Scope:</b> <MathText text={content.midterm.scope} />
          {days !== null && days >= 0 && (
            <>
              {' '}
              · <b>{days === 0 ? 'Today' : `${days} day${days === 1 ? '' : 's'} left`}</b>
            </>
          )}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-primary)', margin: 0 }}>
          <MathText text={content.plan.intro} />
        </p>
        <div className="mg-progress" style={{ marginTop: 12 }}>
          <span style={{ width: `${(100 * all.filter((x) => done.has(x.s.id)).length) / Math.max(1, all.length)}%` }} />
        </div>
        <div className="mg-small mg-muted" style={{ marginTop: 6 }}>
          {all.filter((x) => done.has(x.s.id)).length} of {all.length} steps done · everything below opens right here, no need to leave this page
        </div>

        <ol className="gp-timeline">
          {phases.map((p, pi) => {
            const pd = p.steps.filter((s) => done.has(s.id)).length;
            const st = phaseStatus(pi);
            return (
              <li key={pi} className={`${here?.pi === pi ? 'now' : ''} ${st.cls}`}>
                <button type="button" onClick={() => go((p.steps.find((s) => !done.has(s.id)) ?? p.steps[0])?.id)}>
                  <span className="ph">
                    {st.cls === 'ok' ? <Check size={12} /> : null} Phase {pi + 1}
                  </span>
                  <span className="t">{p.title}</span>
                  <span className="d">{deadlines[pi] ? fmtDay(deadlines[pi]!) : p.when}</span>
                  <span className="bar">
                    <span style={{ width: `${(100 * pd) / Math.max(1, p.steps.length)}%` }} />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      {here && (
        <section className="gp-here" ref={hereRef} style={{ scrollMarginTop: 90 }}>
          <div className="gp-here-top">
            <span className="gp-pin">
              <MapPin size={13} /> {allDone ? 'All steps done: keep revising' : 'You are here'}
            </span>
            <span>
              Phase {here.pi + 1} of {phases.length} · {phases[here.pi].title}
            </span>
            <span>
              Step {here.si + 1} of {phases[here.pi].steps.length}
            </span>
            {(() => {
              const st = phaseStatus(here.pi);
              return (
                <span className={`gp-due ${st.cls}`}>
                  <Flag size={12} /> {st.text}
                </span>
              );
            })()}
          </div>
          <h3 className="gp-here-title">
            <span className="ic">{ICON[here.s.kind]}</span>
            <MathText text={here.s.text} />
          </h3>
          <div className="gp-here-meta">
            {KIND_LABEL[here.s.kind]}
            {here.s.minutes ? ` · ≈ ${here.s.minutes} min` : ''}
            {done.has(here.s.id) ? ' · done ✓' : ''} · goal of this phase: <MathText text={phases[here.pi].goal} />
          </div>

          <div className="gp-here-body">
            <StepBody key={here.s.id} step={here.s} phase={phases[here.pi]} content={content} idx={idx} nav={nav} depth={depth} onDepth={setDepth} onLesson={setPeek} />
          </div>

          <div className="gp-here-actions">
            <button type="button" className="mg-btn" disabled={hereIdx <= 0} onClick={() => go(all[hereIdx - 1]?.s.id)}>
              <ArrowLeft size={14} /> Previous
            </button>
            <button type="button" className="mg-btn" disabled={hereIdx >= all.length - 1} onClick={() => go(all[hereIdx + 1]?.s.id)}>
              <SkipForward size={14} /> Skip for now
            </button>
            {done.has(here.s.id) ? (
              <button type="button" className="mg-btn" onClick={() => setStepDone(here.s.id, false)}>
                <Undo2 size={14} /> Not done yet
              </button>
            ) : (
              <button type="button" className="mg-btn primary" onClick={doneAndNext}>
                <Check size={14} /> Done, next step <ArrowRight size={14} />
              </button>
            )}
          </div>
        </section>
      )}

      <ChapterGlance content={content} idx={idx} nav={nav} stats={stats} onLesson={setPeek} />

      {phases.map((p, pi) => {
        const pd = p.steps.filter((s) => done.has(s.id)).length;
        const st = phaseStatus(pi);
        return (
          <section key={pi} className="mg-phase">
            <div className="mg-phase-head">
              <div className="mg-small mg-muted">
                Phase {pi + 1} · {p.when} · {pd}/{p.steps.length} · <span className={`gp-due-inline ${st.cls}`}>{st.text}</span>
              </div>
              <h4>{p.title}</h4>
              <div className="mg-small" style={{ color: 'var(--text-secondary)' }}>
                <MathText text={p.goal} />
              </div>
            </div>
            {p.steps.map((s) => (
              <div key={s.id} className={`mg-plan-step ${done.has(s.id) ? 'done' : ''} ${here?.s.id === s.id ? 'gp-current' : ''}`}>
                <input type="checkbox" checked={done.has(s.id)} onChange={() => setStepDone(s.id, !done.has(s.id))} aria-label="Done" />
                <div className="txt">
                  <MathText text={s.text} />
                  <div className="meta">
                    {KIND_LABEL[s.kind]}
                    {s.minutes ? ` · ≈ ${s.minutes} min` : ''}
                    {here?.s.id === s.id ? ' · you are here' : ''}
                  </div>
                </div>
                <button type="button" className="mg-btn small" onClick={() => go(s.id)}>
                  {ICON[s.kind]} Open here
                </button>
              </div>
            ))}
          </section>
        );
      })}

      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <BookOpen size={17} /> How the folder fits together
        </h3>
        <ul className="mg-points">
          <li>
            <b>This plan</b> is the main road: every step opens here with its lesson, video, reading focus or drill.
          </li>
          <li>
            <b>Pattern Analyzer & Drills</b>: what repeats on past papers, subject by subject.
          </li>
          <li>
            <b>{content.labTitle}</b>: every method in four steps (understand → worked example → calculator → practice quiz).
          </li>
          <li>
            <b>Video Revision Path</b>: all the videos, topic by topic.
          </li>
          <li>
            <b>Skill Quiz</b>: build a quiz for exactly the chapter or subtopics you want, with sources and a video after every answer.
          </li>
          <li>Your ticks, scores and missed questions stay on this device only.</li>
        </ul>
        <div className="mg-small mg-muted" style={{ marginTop: 8 }}>
          {idx.paperIds.length} past papers analysed · {content.formulas.length} lessons · {content.videoStops.length} video stops
        </div>
      </section>

      {peek && <LessonDrawer id={peek} content={content} idx={idx} nav={nav} onClose={() => setPeek(null)} note="your plan stays where you left it" />}
    </div>
  );
};

// ── one step, shown inline ───────────────────────────────────────────────────────
interface StepProps {
  step: PlanStep;
  phase: PlanPhase;
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  depth: VideoDepth;
  onDepth: (d: VideoDepth) => void;
  onLesson: (id: string) => void;
}

const InlineDrill: React.FC<StepProps & { items: DrillItem[]; title: string }> = ({ items, title, content, idx, nav, depth, onDepth, onLesson }) => (
  <DrillRunner
    course={content.course}
    title={title}
    items={items}
    embedded
    readAloud
    onOpenQuestion={nav.openQuestion}
    renderExplain={(item) => <SourcePanel item={item} idx={idx} content={content} nav={nav} depth={depth} onDepth={onDepth} onLesson={onLesson} />}
  />
);

const StepBody: React.FC<StepProps> = (props) => {
  const { step, phase, content, idx, nav, onLesson } = props;
  const [checkOpen, setCheckOpen] = useState(false);

  const drillItems = useMemo(() => {
    if (step.kind === 'drill' && step.drill) return buildDrill(step.drill, content, idx, loadStats(content.course)).map(prepQuizItem);
    if (step.kind === 'cluster' && step.topic) {
      const ids = content.clusters.filter((c) => c.topic === step.topic).flatMap((c) => c.members);
      return [...new Set(ids)]
        .map((id) => idx.q.get(id))
        .filter((q) => q && isDrillable(q))
        .map((q) => prepQuizItem(fromQuestion(q!, idx)));
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step.id]);

  if (step.kind === 'lesson' && step.lesson) {
    const f = idx.formula.get(step.lesson);
    return f ? <LessonCard f={f} content={content} idx={idx} nav={nav} /> : null;
  }
  if (step.kind === 'videos' && step.topic) return <TopicVideos topic={step.topic} content={content} idx={idx} nav={nav} />;
  if (step.kind === 'drill') {
    return drillItems.length ? (
      <>
        <p className="mg-section-sub">Answer each one, then read where it comes from and watch the concept video if you missed it.</p>
        <InlineDrill {...props} items={drillItems} title={step.text.replace(/\$[^$]*\$/g, '').slice(0, 80)} />
      </>
    ) : (
      <p className="mg-small mg-muted">Nothing to drill here yet. If this is “everything I missed”, you have no misses: well done.</p>
    );
  }
  if (step.kind === 'cluster' && step.topic) {
    const cls = content.clusters.filter((c) => c.topic === step.topic);
    return (
      <div>
        {cls.map((c) => (
          <div key={c.id} className="mg-callout" style={{ marginBottom: 8 }}>
            <b>
              <MatchBadge match={c.match} /> <span className="mg-badge neutral">{c.expect}</span> <MathText text={c.title} />
            </b>
            <div style={{ marginTop: 6 }}>
              <MathText text={c.changes} />
            </div>
            <div style={{ marginTop: 6 }}>
              <b style={{ display: 'inline' }}>Study: </b>
              <MathText text={c.study} />
            </div>
            <div style={{ marginTop: 4 }}>
              <b style={{ display: 'inline' }}>Trap: </b>
              <MathText text={c.trap} />
            </div>
          </div>
        ))}
        {drillItems.length > 0 && <InlineDrill {...props} items={drillItems} title="Every question in these repeat groups" />}
      </div>
    );
  }
  if (step.kind === 'doc' && step.doc) {
    const d = content.docs[step.doc];
    let topics = docTopicIds(step.doc, content);
    if (!topics.length) topics = [...new Set(phase.steps.flatMap((s) => stepTopicIds(s, content, idx)))];
    const base = d?.path.split('/').pop() ?? '';
    const lm = content.lectureMatch;
    const inDoc = (r: LectureRef) => r.d === step.doc || (r.l !== undefined && !!lm && new RegExp(lm.replace('{l}', String(r.l)), 'i').test(base));
    const papers = content.questions.filter((q) => topics.includes(q.topic) && idx.paperIds.includes(q.exam) && isDrillable(q));
    const check = [...papers.filter((q) => repeatTypeOf(q.id, idx)), ...papers.filter((q) => !repeatTypeOf(q.id, idx))].slice(0, 4).map((q) => prepQuizItem(fromQuestion(q, idx)));
    const checkItems = check.length
      ? check
      : content.formulas
          .filter((f) => topics.includes(f.topic))
          .flatMap((f) => lessonItems(f, idx))
          .slice(0, 4)
          .map(prepQuizItem);
    return (
      <div>
        <div className="gp-doc-open">
          <FileText size={18} />
          <span>
            <b>{d?.title ?? step.doc}</b>
            <span className="mg-small mg-muted" style={{ display: 'block' }}>
              Read it with the focus list below open beside it.
            </span>
          </span>
          <button type="button" className="mg-btn primary" onClick={() => nav.openDoc(step.doc!, step.page)}>
            <BookOpen size={14} /> Open the PDF{step.page ? ` at page ${step.page}` : ''}
          </button>
        </div>
        {topics.length > 0 && (
          <>
            <div className="mg-refs-label" style={{ margin: '12px 0 6px' }}>
              Read it with a purpose: what to get out of it
            </div>
            <div className="gp-focus-list">
              {topics.map((tid) => {
                const t = idx.topic.get(tid);
                if (!t) return null;
                const tq = content.questions.filter((q) => q.topic === tid && idx.paperIds.includes(q.exam));
                const rep = tq.filter((q) => repeatTypeOf(q.id, idx)).length;
                const lesson = content.formulas.find((f) => f.topic === tid);
                const refs = [...t.lec, ...(lesson?.lec ?? [])].filter(inDoc).slice(0, 3);
                return (
                  <div key={tid} className="gp-focus">
                    <div className="gp-focus-head">
                      <b>{t.name}</b>
                      <span className={`mg-badge ${tq.length >= 5 ? 'exact' : tq.length >= 2 ? 'template' : tq.length ? 'concept' : 'neutral'}`}>
                        {tq.length ? `asked ${tq.length}× on past papers` : 'not asked yet'}
                        {rep ? ` · ${rep} repeated` : ''}
                      </span>
                    </div>
                    {lesson && (
                      <p className="gp-focus-idea">
                        <MathText text={lesson.learn?.idea ?? lesson.meaning} />
                      </p>
                    )}
                    <div className="mg-refs">
                      {refs.map((r, i) => (
                        <LectureButton key={i} r={r} nav={nav} content={content} />
                      ))}
                      {lesson && (
                        <button type="button" className="mg-btn small" onClick={() => onLesson(lesson.id)}>
                          <Sigma size={13} /> Lesson
                        </button>
                      )}
                      <button type="button" className="mg-btn small" onClick={() => nav.openQuiz({ topics: [tid] })}>
                        <Target size={13} /> Quiz this
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {checkItems.length > 0 && (
          <div style={{ marginTop: 12 }}>
            {checkOpen ? (
              <InlineDrill {...props} items={checkItems} title="Quick check on this reading" />
            ) : (
              <button type="button" className="mg-btn" onClick={() => setCheckOpen(true)}>
                <PlayCircle size={14} /> After reading: quick check ({checkItems.length} questions)
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
  return <div className="mg-note">Do this one away from the screen, then mark it done.</div>;
};

// ── chapters at a glance ─────────────────────────────────────────────────────────
const ChapterGlance: React.FC<{ content: GateContent; idx: GateIndex; nav: GateNav; stats: ReturnType<typeof loadStats>; onLesson: (id: string) => void }> = ({ content, idx, nav, stats, onLesson }) => (
  <section className="mg-panel mg-panel-pad">
    <h3 className="mg-section-title">
      <Target size={17} /> Your chapters at a glance
    </h3>
    <p className="mg-section-sub">Mastery = past-paper questions you got right on your last try. Quiz a chapter, open its first lesson, or watch its videos from here.</p>
    <div className="gp-glance">
      {content.subjects.map((s) => {
        const qs = content.questions.filter((q) => s.topics.includes(q.topic) && idx.paperIds.includes(q.exam) && isDrillable(q));
        const ok = qs.filter((q) => stats[q.id]?.last === 1).length;
        const rep = qs.filter((q) => repeatTypeOf(q.id, idx)).length;
        const lesson = content.formulas.find((f) => s.topics.includes(f.topic));
        const vid = content.videoStops.find((v) => s.topics.includes(v.topic));
        const pct = qs.length ? Math.round((100 * ok) / qs.length) : 0;
        return (
          <div key={s.id} className="gp-chapter">
            <div className="mg-small mg-muted">{s.ch}</div>
            <b>
              <MathText text={s.name} />
            </b>
            <div className="gp-chapter-bar" aria-label={`${pct}% mastered`}>
              <span style={{ width: `${pct}%` }} />
            </div>
            <div className="mg-small mg-muted">
              {qs.length ? `${ok}/${qs.length} mastered · ${rep} repeated` : 'no past-paper questions yet'}
            </div>
            <div className="gp-chapter-acts">
              <button type="button" className="mg-btn small primary" onClick={() => nav.openQuiz({ subjects: [s.id] })}>
                <Target size={12} /> Quiz
              </button>
              {lesson && (
                <button type="button" className="mg-btn small" onClick={() => onLesson(lesson.id)}>
                  <Sigma size={12} /> Lesson
                </button>
              )}
              {vid && (
                <button type="button" className="mg-btn small" onClick={() => nav.openTopicVideos(vid.topic)}>
                  <Video size={12} /> Videos
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default StudyPlan;
