import React, { useEffect, useMemo, useState } from 'react';
import { Calculator as CalcIcon, ListChecks, RotateCcw, Search } from 'lucide-react';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import type { Formula, GateContent, GateNav, Preset } from './vaultTypes';
import { CALCULATORS, CalcValues, defaultsFor } from './calculators';
import { ExamTag, GateIndex, RefsRow } from './shared';

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  focusFormula: string | null;
}

export const FormulaLab: React.FC<Props> = ({ content, idx, nav, focusFormula }) => {
  const [activeId, setActiveId] = useState<string>(focusFormula ?? content.formulas[0]?.id);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (focusFormula) setActiveId(focusFormula);
  }, [focusFormula]);

  const groups = useMemo(() => {
    const fl = filter.trim().toLowerCase();
    return content.topics
      .map((t) => ({
        topic: t,
        items: content.formulas.filter(
          (f) => f.topic === t.id && (!fl || f.name.toLowerCase().includes(fl) || f.meaning.toLowerCase().includes(fl) || t.name.toLowerCase().includes(fl))
        )
      }))
      .filter((g) => g.items.length > 0);
  }, [content, filter]);

  const active = idx.formula.get(activeId) ?? content.formulas[0];
  const onSheet = content.formulas.filter((f) => f.sheet).length;

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <CalcIcon size={17} /> Every calculation the midterm needs
        </h3>
        <p className="mg-section-sub" style={{ marginBottom: 0 }}>
          {content.formulas.length} formulas in teacher-notes order, {onSheet} of them printed on the official equation sheet. The sheet gives you
          the formula; you still have to recognise which one a question needs and get the units right. Each card has a live calculator: load a
          real midterm question, the slide example or the Callister example, then change the numbers the way the next exam will.
        </p>
      </section>

      <select className="mg-lab-select" value={active.id} onChange={(e) => setActiveId(e.target.value)} aria-label="Choose a formula">
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
        <nav className="mg-panel mg-lab-nav" aria-label="Formulas">
          <div className="mg-filters" style={{ marginBottom: 4 }}>
            <Search size={14} className="mg-muted" />
            <input className="mg-search" style={{ minWidth: 0 }} value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter…" />
          </div>
          {groups.map((g) => (
            <div key={g.topic.id}>
              <div className="mg-lab-group">
                {g.topic.ch} · {g.topic.name}
              </div>
              {g.items.map((f) => (
                <button key={f.id} type="button" className={`mg-lab-item ${f.id === active.id ? 'active' : ''}`} onClick={() => setActiveId(f.id)}>
                  <span>{f.name}</span>
                  {f.seen.filter((s) => idx.midtermIds.includes(idx.q.get(s)?.exam ?? '')).length > 0 && (
                    <small>×{f.seen.filter((s) => idx.midtermIds.includes(idx.q.get(s)?.exam ?? '')).length}</small>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <FormulaCard key={active.id} f={active} idx={idx} nav={nav} />
      </div>
    </div>
  );
};

const FormulaCard: React.FC<{ f: Formula; idx: GateIndex; nav: GateNav }> = ({ f, idx, nav }) => {
  const topic = idx.topic.get(f.topic);
  const midtermSeen = f.seen.map((s) => idx.q.get(s)).filter((q) => q && idx.midtermIds.includes(q.exam));
  const otherSeen = f.seen.map((s) => idx.q.get(s)).filter((q) => q && !idx.midtermIds.includes(q.exam));

  return (
    <article className="mg-panel mg-panel-pad">
      <div className="mg-q-head">
        <span className="mg-badge neutral">
          {topic?.ch} · {topic?.name}
        </span>
        {f.sheet ? <span className="mg-badge ok">On the equation sheet</span> : <span className="mg-badge warn">Not on the sheet: memorise</span>}
      </div>
      <h3 className="mg-section-title" style={{ fontSize: 19, marginTop: 6 }}>
        {f.name}
      </h3>
      <p className="mg-section-sub" style={{ marginBottom: 0 }}>
        <MathText text={f.meaning} />
      </p>

      <div className="mg-formula-box">
        <MathBlock tex={f.tex} />
      </div>

      {f.vars.length > 0 && (
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

      {f.calc && CALCULATORS[f.calc] && <CalcPanel f={f} idx={idx} />}

      <div className="mg-callouts" style={{ marginTop: 16 }}>
        <div className="mg-callout study">
          <b>
            <ListChecks size={12} style={{ verticalAlign: -1 }} /> How to use it
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

      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="mg-refs">
          <span className="mg-refs-label">Asked on midterms</span>
          {midtermSeen.length ? (
            midtermSeen.map((q) => <ExamTag key={q!.id} q={q!} idx={idx} onClick={() => nav.openQuestion(q!.id)} />)
          ) : (
            <span className="mg-small mg-muted">not yet</span>
          )}
        </div>
        {otherSeen.length > 0 && (
          <div className="mg-refs">
            <span className="mg-refs-label">Finals & tutorial set</span>
            {otherSeen.map((q) => (
              <ExamTag key={q!.id} q={q!} idx={idx} onClick={() => nav.openQuestion(q!.id)} />
            ))}
          </div>
        )}
        <RefsRow lec={f.lec} cal={f.cal} guide={f.guide} nav={nav} topic={f.topic} />
      </div>
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
  const presetAnswer = presetQ
    ? presetQ.opts
      ? `(${presetQ.ans}) ${presetQ.opts[presetQ.ans.charCodeAt(0) - 97] ?? ''}`
      : presetQ.ans
    : null;
  const inputs = calc.inputs.filter((i) => !i.modes || i.modes.includes(values.mode));

  return (
    <section className="mg-calc">
      <div className="mg-calc-head">
        <span>
          <CalcIcon size={14} style={{ verticalAlign: -2 }} /> Calculator
        </span>
        <button type="button" className="mg-btn small" onClick={reset}>
          <RotateCcw size={12} /> Reset
        </button>
      </div>
      <div className="mg-calc-body">
        {f.presets.length > 0 && (
          <div>
            <div className="mg-refs-label" style={{ marginBottom: 6 }}>
              Load the numbers from
            </div>
            <div className="mg-presets">
              {f.presets.map((p) => (
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
            <div key={i.key} className="mg-input">
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
              ) : (
                <input
                  id={`mg-${f.id}-${i.key}`}
                  inputMode={i.type === 'number' ? 'decimal' : 'text'}
                  value={values[i.key] ?? ''}
                  onChange={(e) => set(i.key, e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                />
              )}
              {i.type === 'text' && i.hint && <small>{i.hint}</small>}
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
            {presetQ.status === 'corrected' && <span className="mg-badge warn" style={{ marginLeft: 6 }}>posted key corrected</span>}
          </div>
        )}
      </div>
    </section>
  );
};

export default FormulaLab;
