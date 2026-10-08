import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Calculator as CalcIcon, ChevronRight, Eye, ListChecks, RotateCcw, Search } from 'lucide-react';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import type { Formula, GateContent, GateNav, Preset } from './vaultTypes';
import { CALCULATORS, CalcValues, defaultsFor } from './calculators';
import { CodeBlock, ExamTag, GateIndex, RefsRow } from './shared';
import { lessonItems, loadStats, mastery } from './drill';
import { DrillRunner } from './DrillRunner';

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  focusFormula: string | null;
}

type Step = 'learn' | 'example' | 'calc' | 'practice';

export const FormulaLab: React.FC<Props> = ({ content, idx, nav, focusFormula }) => {
  const [activeId, setActiveId] = useState<string>(focusFormula ?? content.formulas[0]?.id);
  const [filter, setFilter] = useState('');
  const [stats, setStats] = useState(() => loadStats(content.course));

  useEffect(() => {
    if (focusFormula) setActiveId(focusFormula);
  }, [focusFormula]);
  useEffect(() => {
    const on = () => setStats(loadStats(content.course));
    window.addEventListener('gate-stats', on);
    return () => window.removeEventListener('gate-stats', on);
  }, [content.course]);

  const groups = useMemo(() => {
    const fl = filter.trim().toLowerCase();
    return content.topics
      .map((t) => ({
        topic: t,
        items: content.formulas.filter((f) => f.topic === t.id && (!fl || f.name.toLowerCase().includes(fl) || f.meaning.toLowerCase().includes(fl) || t.name.toLowerCase().includes(fl)))
      }))
      .filter((g) => g.items.length > 0);
  }, [content, filter]);

  // lesson item keys are stable, so build them once rather than re-running every calculator on each render
  const lessonKeys = useMemo(() => new Map(content.formulas.map((f) => [f.id, lessonItems(f, idx).map((it) => it.key)])), [content, idx]);
  const lessonMastery = (f: Formula) => mastery(lessonKeys.get(f.id) ?? [], stats);
  const active = idx.formula.get(activeId) ?? content.formulas[0];
  if (!active) return <p className="mg-small mg-muted">No lessons yet.</p>;

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <CalcIcon size={17} /> {content.labTitle}
        </h3>
        <p className="mg-section-sub" style={{ marginBottom: 0 }}>
          <MathText text={content.labBlurb} />
        </p>
      </section>

      <select className="mg-lab-select" value={active.id} onChange={(e) => setActiveId(e.target.value)} aria-label="Choose a lesson">
        {groups.map((g) => (
          <optgroup key={g.topic.id} label={`${g.topic.ch} · ${g.topic.name}`}>
            {g.items.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <div className="mg-lab">
        <nav className="mg-panel mg-lab-nav" aria-label="Lessons">
          <div className="mg-filters" style={{ marginBottom: 4 }}>
            <Search size={14} className="mg-muted" />
            <input className="mg-search" style={{ minWidth: 0 }} value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter…" />
          </div>
          {groups.map((g) => (
            <div key={g.topic.id}>
              <div className="mg-lab-group">
                {g.topic.ch} · {g.topic.name}
              </div>
              {g.items.map((f) => {
                const lm = lessonMastery(f);
                return (
                  <button key={f.id} type="button" className={`mg-lab-item ${f.id === active.id ? 'active' : ''}`} onClick={() => setActiveId(f.id)}>
                    <span>{f.name}</span>
                    {lm.total > 0 && lm.done === lm.total ? <small className="tick">✓</small> : lm.total > 0 ? <small>{lm.done}/{lm.total}</small> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <LessonCard key={active.id} f={active} content={content} idx={idx} nav={nav} />
      </div>
    </div>
  );
};

export const LessonCard: React.FC<{ f: Formula; content: GateContent; idx: GateIndex; nav: GateNav }> = ({ f, content, idx, nav }) => {
  const learn = f.learn;
  const hasCalc = !!(f.calc && CALCULATORS[f.calc]);
  const items = useMemo(() => lessonItems(f, idx), [f, idx]);
  const [step, setStep] = useState<Step>('learn');
  const [shown, setShown] = useState(1);
  const topic = idx.topic.get(f.topic);
  const paperSeen = f.seen.map((s) => idx.q.get(s)).filter((q) => q && idx.paperIds.includes(q.exam));
  const otherSeen = f.seen.map((s) => idx.q.get(s)).filter((q) => q && !idx.paperIds.includes(q.exam));

  const tabs: { id: Step; n: number; label: string; off?: boolean }[] = [
    { id: 'learn', n: 1, label: 'Understand' },
    { id: 'example', n: 2, label: 'Worked example', off: !learn?.example },
    { id: 'calc', n: 3, label: 'Calculator', off: !hasCalc },
    { id: 'practice', n: 4, label: `Practice (${items.length})`, off: !items.length }
  ];

  return (
    <article className="mg-panel mg-panel-pad" style={{ minWidth: 0 }}>
      <div className="mg-q-head">
        <span className="mg-badge neutral">
          {topic?.ch} · {topic?.name}
        </span>
        {f.sheet === true && <span className="mg-badge ok">On the formula sheet</span>}
        {f.sheet === false && <span className="mg-badge warn">Not on the sheet: memorise</span>}
      </div>
      <h3 className="mg-section-title" style={{ fontSize: 19, marginTop: 6 }}>
        {f.name}
      </h3>

      <div className="mg-steptabs" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} type="button" role="tab" aria-selected={step === t.id} className={`mg-steptab ${step === t.id ? 'active' : ''}`} disabled={t.off} onClick={() => setStep(t.id)}>
            <span className="n">{t.n}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {step === 'learn' && (
        <div>
          {learn?.idea && (
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-primary)', margin: '0 0 10px' }}>
              <MathText text={learn.idea} />
            </p>
          )}
          {!learn?.idea && (
            <p className="mg-section-sub">
              <MathText text={f.meaning} />
            </p>
          )}
          {f.tex && (
            <div className="mg-formula-box">
              <MathBlock tex={f.tex} />
            </div>
          )}
          {f.vars && f.vars.length > 0 && (
            <table className="mg-vars">
              <tbody>
                {f.vars.map(([sym, what, unit], i) => (
                  <tr key={i}>
                    <td>
                      <MathText text={sym.includes('\\') || /[_^]/.test(sym) ? `$${sym}$` : sym} />
                    </td>
                    <td>{what}</td>
                    <td className="mg-muted">{unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="mg-callouts" style={{ marginTop: 12 }}>
            {learn?.when && (
              <div className="mg-callout">
                <b>Use it when</b>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {learn.when.map((w, i) => (
                    <li key={i}>
                      <MathText text={w} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mg-callout study">
              <b>
                <ListChecks size={12} style={{ verticalAlign: -1 }} /> Steps
              </b>
              <ol style={{ margin: 0, paddingLeft: 18 }}>
                {f.steps.map((s, i) => (
                  <li key={i}>
                    <MathText text={s} />
                  </li>
                ))}
              </ol>
            </div>
            <div className="mg-callout trap">
              <b>Traps</b>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {f.traps.map((s, i) => (
                  <li key={i}>
                    <MathText text={s} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="mg-refs">
              <span className="mg-refs-label">Asked on past papers</span>
              {paperSeen.length ? paperSeen.map((q) => <ExamTag key={q!.id} q={q!} idx={idx} onClick={() => nav.openQuestion(q!.id)} />) : <span className="mg-small mg-muted">not yet</span>}
            </div>
            {otherSeen.length > 0 && (
              <div className="mg-refs">
                <span className="mg-refs-label">Finals & tutorial sets</span>
                {otherSeen.map((q) => (
                  <ExamTag key={q!.id} q={q!} idx={idx} onClick={() => nav.openQuestion(q!.id)} />
                ))}
              </div>
            )}
            <RefsRow lec={f.lec} cal={f.cal} guide={f.guide} nav={nav} topic={f.topic} content={content} />
          </div>
          {learn?.example && (
            <div className="dr-actions" style={{ marginTop: 14 }}>
              <button type="button" className="mg-btn primary" onClick={() => setStep('example')}>
                Next: worked example <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}

      {step === 'example' && learn?.example && (
        <div>
          <div className="mg-q-head">
            <BookOpen size={15} className="mg-muted" />
            <b style={{ fontSize: 14 }}>{learn.example.title}</b>
          </div>
          <div className="mg-callouts" style={{ marginBottom: 6 }}>
            <div className="mg-callout">
              <b>Given</b>
              <MathText text={learn.example.given} />
            </div>
            <div className="mg-callout">
              <b>Find</b>
              <MathText text={learn.example.find} />
            </div>
          </div>
          {learn.example.code && <CodeBlock code={learn.example.code} />}
          {learn.example.steps.slice(0, shown).map((s, i) => (
            <div key={i} className="mg-example-step">
              <span className="n">{i + 1}</span>
              <div>
                <MathText text={s.say} />
                {s.tex && <MathBlock tex={s.tex} />}
              </div>
            </div>
          ))}
          {shown >= learn.example.steps.length && (
            <div className="mg-answer-box">
              <MathText text={learn.example.answer} />
            </div>
          )}
          <div className="dr-actions" style={{ marginTop: 12 }}>
            {shown < learn.example.steps.length ? (
              <>
                <button type="button" className="mg-btn primary" onClick={() => setShown((n) => n + 1)}>
                  <Eye size={14} /> Next step ({shown}/{learn.example.steps.length})
                </button>
                <button type="button" className="mg-btn" onClick={() => setShown(learn.example.steps.length)}>
                  Show all
                </button>
              </>
            ) : (
              <button type="button" className="mg-btn primary" onClick={() => setStep(hasCalc ? 'calc' : 'practice')}>
                Next: {hasCalc ? 'try it in the calculator' : 'practice'} <ChevronRight size={14} />
              </button>
            )}
            <button type="button" className="mg-btn" onClick={() => setShown(1)}>
              <RotateCcw size={13} /> Restart
            </button>
          </div>
        </div>
      )}

      {step === 'calc' && hasCalc && (
        <div>
          <CalcPanel f={f} idx={idx} />
          {items.length > 0 && (
            <div className="dr-actions" style={{ marginTop: 12 }}>
              <button type="button" className="mg-btn primary" onClick={() => setStep('practice')}>
                Next: practice quiz <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}

      {step === 'practice' && items.length > 0 && (
        <div>
          <p className="mg-section-sub">
            Real exam questions plus new questions in the same style. Questions marked “Similar · new numbers” can be re-rolled as many times as you like.
          </p>
          <DrillRunner course={content.course} title={`${f.name}: practice`} items={items} embedded onOpenQuestion={nav.openQuestion} />
        </div>
      )}
    </article>
  );
};

const CalcPanel: React.FC<{ f: Formula; idx: GateIndex }> = ({ f, idx }) => {
  const calc = CALCULATORS[f.calc!];
  const [values, setValues] = useState<CalcValues>(() => defaultsFor(calc));
  const [preset, setPreset] = useState<Preset | null>(null);

  const apply = (p: Preset) => {
    const next = defaultsFor(calc);
    for (const [k, v] of Object.entries(p.values)) {
      // keep 2.3e-5 as typed rather than 0.000023
      next[k] = typeof v === 'number' && v !== 0 && (Math.abs(v) < 1e-3 || Math.abs(v) >= 1e5) ? v.toExponential().replace('e+', 'e') : String(v);
    }
    setValues(next);
    setPreset(p);
  };
  const reset = () => {
    setValues(defaultsFor(calc));
    setPreset(null);
  };
  const set = (k: string, v: string) => setValues((cur) => ({ ...cur, [k]: v }));

  const result = useMemo(() => calc.compute(values), [calc, values]);
  const presetQ = preset?.from ? idx.q.get(preset.from) : undefined;
  const presetAnswer = presetQ ? (presetQ.opts ? `(${presetQ.ans}) ${presetQ.opts[presetQ.ans.charCodeAt(0) - 97] ?? ''}` : presetQ.ans) : null;
  const inputs = calc.inputs.filter((i) => !i.modes || i.modes.includes(values.mode));
  const presets = f.presets ?? [];

  return (
    <section className="mg-calc" style={{ marginTop: 0 }}>
      <div className="mg-calc-head">
        <span>
          <CalcIcon size={14} style={{ verticalAlign: -2 }} /> Calculator
        </span>
        <button type="button" className="mg-btn small" onClick={reset}>
          <RotateCcw size={12} /> Reset
        </button>
      </div>
      <div className="mg-calc-body">
        {presets.length > 0 && (
          <div>
            <div className="mg-refs-label" style={{ marginBottom: 6 }}>
              Load the numbers from
            </div>
            <div className="mg-presets">
              {presets.map((p) => (
                <button key={p.label} type="button" className={`mg-chip ${preset?.label === p.label ? 'active' : ''}`} onClick={() => apply(p)}>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {calc.modes && (
          <div className="mg-tabs">
            {calc.modes.map((m) => (
              <button key={m.value} type="button" className={`mg-tab ${values.mode === m.value ? 'active' : ''}`} onClick={() => set('mode', m.value)}>
                {m.label}
              </button>
            ))}
          </div>
        )}

        <div className="mg-inputs">
          {inputs.map((i) => (
            <div key={i.key} className="mg-input" style={i.type === 'area' ? { gridColumn: '1 / -1' } : undefined}>
              <label htmlFor={`mg-${f.id}-${i.key}`}>
                {i.label} {i.unit && <span>({i.unit})</span>}
              </label>
              {i.type === 'select' ? (
                <select id={`mg-${f.id}-${i.key}`} value={values[i.key] ?? i.def} onChange={(e) => set(i.key, e.target.value)}>
                  {i.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : i.type === 'area' ? (
                <textarea
                  id={`mg-${f.id}-${i.key}`}
                  rows={i.rows ?? 5}
                  value={values[i.key] ?? ''}
                  onChange={(e) => set(i.key, e.target.value)}
                  spellCheck={false}
                  style={{ width: '100%', padding: '8px 10px', borderRadius: 7, border: '1px solid var(--border-highlight)', fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}
                />
              ) : (
                <input id={`mg-${f.id}-${i.key}`} inputMode={i.type === 'number' ? 'decimal' : 'text'} value={values[i.key] ?? ''} onChange={(e) => set(i.key, e.target.value)} spellCheck={false} autoComplete="off" />
              )}
              {(i.type === 'text' || i.type === 'area') && i.hint && <small>{i.hint}</small>}
            </div>
          ))}
        </div>

        {result.error ? (
          <div className="mg-calc-error">{result.error}</div>
        ) : (
          <>
            <div className="mg-results">
              {result.rows.map((r) => (
                <div key={r.label} className={`mg-result ${r.main ? 'main' : ''}`}>
                  <span>{r.label}</span>
                  {r.plain ? <div className="mg-small">{r.plain}</div> : <MathText text={`$${r.tex}$`} />}
                </div>
              ))}
            </div>
            <ol className="mg-steps">
              {result.steps.map((s, i) => (
                <li key={i}>
                  <MathText text={s} />
                </li>
              ))}
            </ol>
          </>
        )}

        {presetQ && presetAnswer && (
          <div className="mg-compare">
            <b>Compare with the exam:</b> <ExamTag q={presetQ} idx={idx} /> answer <MathText text={presetAnswer} />
            {presetQ.status === 'corrected' && (
              <span className="mg-badge warn" style={{ marginLeft: 6 }}>
                posted key corrected
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FormulaLab;
