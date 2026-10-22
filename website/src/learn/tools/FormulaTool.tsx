import React, { useMemo, useState } from 'react';
import { Calculator as CalcIcon, ListOrdered, RotateCcw } from 'lucide-react';
import type { Formula } from '../../data/gates/types';
import { CALCULATORS, CalcValues, defaultsFor } from '../../components/vault/calculators';
import { MathBlock, MathText } from '../../utils/mathRenderer';

// A formula you can play with: change the inputs, or load an exam's numbers, and see every step recomputed.
export const FormulaTool: React.FC<{ formula: Formula }> = ({ formula: f }) => {
  const calc = f.calc ? CALCULATORS[f.calc] : undefined;
  const [values, setValues] = useState<CalcValues>(() => (calc ? defaultsFor(calc) : {}));
  const [preset, setPreset] = useState<string | null>(null);
  const result = useMemo(() => (calc ? calc.compute(values) : null), [calc, values]);
  if (!calc) return <p className="lx-empty">No calculator for this formula.</p>;
  const inputs = calc.inputs.filter((i) => !i.modes || i.modes.includes(values.mode));
  const set = (k: string, v: string) => {
    setPreset(null);
    setValues((x) => ({ ...x, [k]: v }));
  };
  return (
    <div className="lx-tool">
      <header className="lx-tool-head">
        <span className="lx-quiz-icon" aria-hidden>
          <CalcIcon size={24} />
        </span>
        <div>
          <h2 className="lx-h2">{f.name}</h2>
          <p className="lx-meta">
            <MathText text={f.meaning} />
          </p>
        </div>
      </header>
      {f.tex && <MathBlock tex={f.tex} className="lx-tool-tex" />}
      {(f.presets?.length ?? 0) > 0 && (
        <div className="lx-tool-presets" role="group" aria-label="Load numbers from">
          <span className="lx-meta">Load the numbers of</span>
          {f.presets!.map((p) => (
            <button
              key={p.label}
              type="button"
              className={`lx-chip lx-chip-btn${preset === p.label ? ' is-on' : ''}`}
              onClick={() => {
                setPreset(p.label);
                const v = defaultsFor(calc);
                for (const [k, x] of Object.entries(p.values)) v[k] = String(x);
                setValues(v);
              }}
            >
              {p.label}
            </button>
          ))}
          <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => (setPreset(null), setValues(defaultsFor(calc)))}>
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      )}
      <div className="lx-tool-grid">
        <form className="lx-tool-inputs" onSubmit={(e) => e.preventDefault()}>
          {calc.modes && (
            <label className="lx-field">
              <span>Mode</span>
              <select className="lx-input" value={values.mode} onChange={(e) => set('mode', e.target.value)}>
                {calc.modes.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </label>
          )}
          {inputs.map((i) => (
            <label key={i.key} className="lx-field">
              <span>
                <MathText text={i.label} />
                {i.unit ? <span className="lx-meta"> ({i.unit})</span> : null}
              </span>
              {i.type === 'select' ? (
                <select className="lx-input" value={values[i.key]} onChange={(e) => set(i.key, e.target.value)}>
                  {i.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : i.type === 'area' ? (
                <textarea className="lx-input lx-input--mono" rows={i.rows ?? 4} value={values[i.key]} onChange={(e) => set(i.key, e.target.value)} />
              ) : (
                <input className="lx-input" inputMode={i.type === 'number' ? 'decimal' : 'text'} value={values[i.key]} onChange={(e) => set(i.key, e.target.value)} />
              )}
            </label>
          ))}
        </form>
        <div className="lx-tool-out" aria-live="polite">
          {result?.error ? (
            <p className="lx-ex-trap">{result.error}</p>
          ) : (
            <>
              <dl className="lx-tool-rows">
                {result?.rows.map((r) => (
                  <div key={r.label} className={r.main ? 'is-main' : ''}>
                    <dt>
                      <MathText text={r.label} />
                    </dt>
                    <dd>{r.plain ? r.plain : <MathText text={`$${r.tex}$`} />}</dd>
                  </div>
                ))}
              </dl>
              {result && result.steps.length > 0 && (
                <div className="lx-ex-block">
                  <h4 className="lx-ex-title">
                    <ListOrdered size={16} aria-hidden /> Every step
                  </h4>
                  <ol className="lx-ex-lines">
                    {result.steps.map((s, k) => (
                      <li key={k}>
                        <MathText text={s} />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormulaTool;
