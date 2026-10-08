import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Layers, Repeat, Trophy, XCircle } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { DrillTarget, GateContent, GateNav } from './vaultTypes';
import type { GateIndex } from './shared';
import { repeatTypeOf } from './shared';
import { buildDrill, DrillItem, isDrillable, letter, loadStats, Stats } from './drill';
import { DrillRunner } from './DrillRunner';

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
}

// ── hidden-quiz item prep ─────────────────────────────────────────────────────
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

const prepHiddenItem = (it: DrillItem): DrillItem => {
  let out = it;
  if (out.kind === 'multi' && !out.prompt.includes(MULTI_STEM)) {
    out = { ...out, prompt: `${out.prompt} ${MULTI_STEM}` };
  }
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
        return fresh ? prepHiddenItem(fresh) : null;
      }
    };
  }
  return out;
};

export const HiddenQuiz: React.FC<Props> = ({ content, idx, nav }) => {
  const [stats, setStats] = useState<Stats>(() => loadStats(content.course));
  const [drill, setDrill] = useState<{ title: string; items: DrillItem[] } | null>(null);

  useEffect(() => {
    const onStats = () => setStats(loadStats(content.course));
    window.addEventListener('gate-stats', onStats);
    return () => window.removeEventListener('gate-stats', onStats);
  }, [content.course]);

  const papers = useMemo(() => content.questions.filter((q) => idx.paperIds.includes(q.exam)), [content, idx]);
  // Hidden folder = midterm prep only: topics that never appeared on a past
  // midterm/quiz paper are excluded from the quiz entirely.
  const midtermTopics = useMemo(() => {
    const s = new Set<string>();
    for (const q of papers) s.add(q.topic);
    return s;
  }, [papers]);
  const subjects = useMemo(() => content.subjects.filter((s) => s.topics.some((t) => midtermTopics.has(t))), [content, midtermTopics]);

  const repeats = useMemo(() => papers.filter((q) => repeatTypeOf(q.id, idx) && isDrillable(q)), [papers, idx]);
  const missedCount = Object.values(stats).filter((s) => s.last === 0).length;
  const allCount = useMemo(() => papers.filter(isDrillable).length, [papers]);
  const m = useMemo(() => {
    const keys = papers.filter(isDrillable).map((q) => q.id);
    const done = keys.filter((k) => stats[k]?.last === 1).length;
    return { done, total: keys.length };
  }, [papers, stats]);

  const start = (target: DrillTarget, title: string) => {
    const items = buildDrill(target, content, idx, loadStats(content.course)).map(prepHiddenItem);
    setDrill({ title, items });
  };

  if (drill) {
    return (
      <DrillRunner
        course={content.course}
        title={drill.title}
        items={drill.items}
        readAloud
        showReferences
        idx={idx}
        content={content}
        nav={nav}
        onClose={() => setDrill(null)}
        onOpenQuestion={nav.openQuestion}
      />
    );
  }

  return (
    <div className="mg-root" style={{ gap: 16 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Trophy size={17} /> Quiz drill
        </h3>
        <p className="mg-section-sub">
          The full drill experience — every repeat, everything you missed, every past-paper question — with read-aloud and worked step-by-step solutions. Midterm
          material only. You have mastered {m.done} of {m.total} past-paper questions so far.
        </p>
        <div className="mg-quick">
          <button type="button" onClick={() => start({ scope: 'repeats' }, 'Every repeated question')} disabled={!repeats.length}>
            <b>
              <Repeat size={15} /> Every repeated question ({repeats.length})
            </b>
            <span>The highest-value set: everything asked on more than one paper.</span>
          </button>
          <button type="button" onClick={() => start({ scope: 'missed' }, 'Everything I missed')} disabled={!missedCount}>
            <b>
              <XCircle size={15} /> Everything I missed ({missedCount})
            </b>
            <span>Questions and practice items whose last attempt was wrong.</span>
          </button>
          <button type="button" onClick={() => start({ scope: 'all' }, 'All past-paper questions')} disabled={!allCount}>
            <b>
              <Layers size={15} /> All past-paper questions ({allCount})
            </b>
            <span>Every question from every paper, in order.</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="mg-section-title" style={{ marginBottom: 10 }}>
          <BookOpen size={17} /> By subject, in the order of the teacher’s notes
        </h3>
        {subjects.map((s) => {
          const topics = s.topics.filter((t) => midtermTopics.has(t));
          return (
            <div key={s.id} className="mg-panel mg-panel-pad" style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>
                <span className="mg-badge neutral" style={{ marginRight: 8 }}>{s.ch}</span>
                <MathText text={s.name} />
              </div>
              <div className="mg-refs-label" style={{ marginBottom: 6 }}>Also appeared in midterms</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {topics.map((tid) => {
                  const t = idx.topic.get(tid);
                  const n = papers.filter((q) => q.topic === tid && isDrillable(q)).length;
                  return (
                    <button key={tid} type="button" className="mg-btn small" disabled={!n} onClick={() => start({ scope: 'topic', id: tid, mode: 'all' }, t?.name ?? tid)}>
                      {t?.name ?? tid} ({n})
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default HiddenQuiz;
