import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertTriangle, ChevronLeft, ChevronRight, FileText, Keyboard, Pause, Play, RotateCcw, Terminal } from 'lucide-react';
import { tokenizeCpp } from '../../components/CppOptionView';
import type { Trace, TraceStep } from './interpreter';
import { inputFrom, traceCpp } from './interpreter';
import './codeStepper.css';

// Step through a program one line at a time: the line that runs, what it does and why, every variable and
// array (what changed is highlighted), what the program has printed and written, and the input it reads.
// The steps come from running the code (./interpreter.ts, checked against every course answer by
// npm run validate:cpp); a hand-written walkthrough, where the course has one, supplies the explanations.

interface HandTrace {
  code: string;
  steps: {
    lineNumber: number;
    explanation: string;
    variables: Record<string, string | number | boolean>;
    arrays?: Record<string, (string | number)[]>;
    changedVars?: string[];
    consoleOutput: string[];
    newOutput?: string;
    conditionEval?: { expression: string; result: boolean | string };
    iterationLabel?: string;
    trapWarning?: string;
  }[];
}
const fromHand = (t: HandTrace): Trace => ({
  code: t.code,
  output: t.steps[t.steps.length - 1]?.consoleOutput.join('\n') ?? '',
  steps: t.steps.map((s) => ({
    line: s.lineNumber,
    explanation: s.explanation,
    vars: Object.fromEntries(Object.entries(s.variables).map(([k, v]) => [k, String(v)])),
    arrays: Object.fromEntries(Object.entries(s.arrays ?? {}).map(([k, v]) => [k, { dims: [v.length], values: v.map(String) }])),
    changed: s.changedVars ?? [],
    output: s.consoleOutput.join('\n'),
    ...(s.newOutput ? { printed: s.newOutput } : {}),
    ...(s.conditionEval ? { condition: { expr: s.conditionEval.expression, value: s.conditionEval.result === true || s.conditionEval.result === 'true' } } : {}),
    ...(s.iterationLabel ? { label: s.iterationLabel } : {}),
    ...(s.trapWarning ? { trap: s.trapWarning.replace(/^⚠️\s*/, '') } : {})
  }))
});

export const CodeStepper: React.FC<{ code: string; questionId?: string; prompt?: string }> = ({ code, questionId, prompt }) => {
  const reads = /\bcin\s*>>/.test(code);
  const [input, setInput] = useState(() => inputFrom(code, prompt).join(' '));
  const [hand, setHand] = useState<Trace | null>(null);
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(false);
  const codeBox = useRef<HTMLDivElement>(null);

  // a hand-written walkthrough for this exact question, if the course has one (loaded on demand)
  useEffect(() => {
    let alive = true;
    setHand(null);
    if (reads) return;
    import('../../data/cppTraceData').then((m) => {
      const t = m.getTraceForQuestion(code, questionId?.replace(/^[a-z]:(MIAE215:)?(gordon-[^:]+:)?/, ''), prompt);
      if (alive && !t.id.startsWith('generic_')) setHand(fromHand(t as unknown as HandTrace));
    });
    return () => {
      alive = false;
    };
  }, [code, questionId, prompt, reads]);

  const run = useMemo(() => traceCpp(code, { input: input.split(/[\s,]+/).filter(Boolean) }), [code, input]);
  const trace = hand && !run.error && hand.output.replace(/\s+/g, ' ').trim() === run.output.replace(/\s+/g, ' ').trim() ? hand : run;
  const steps = trace.steps;
  const step: TraceStep | undefined = steps[Math.min(i, steps.length - 1)];
  useEffect(() => setI(0), [trace]);

  useEffect(() => {
    if (!auto) return;
    if (i >= steps.length - 1) {
      setAuto(false);
      return;
    }
    const t = setTimeout(() => setI((n) => Math.min(steps.length - 1, n + 1)), 1100);
    return () => clearTimeout(t);
  }, [auto, i, steps.length]);

  // keep the running line in view inside the code box (never scrolls the page)
  useEffect(() => {
    const box = codeBox.current;
    const el = box?.querySelector<HTMLElement>('.is-now');
    if (box && el && (el.offsetTop < box.scrollTop || el.offsetTop > box.scrollTop + box.clientHeight - 30)) box.scrollTop = el.offsetTop - box.clientHeight / 3;
  }, [i]);

  if (!step) return null;
  const lines = code.split('\n');
  const prevOut = steps[Math.max(0, i - 1)]?.output ?? '';
  const outNow = step.output;
  const fresh = i > 0 && outNow.startsWith(prevOut) ? outNow.slice(prevOut.length) : step.printed ?? '';
  const keys = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setI((n) => Math.min(steps.length - 1, n + 1));
    else if (e.key === 'ArrowLeft') setI((n) => Math.max(0, n - 1));
    else return;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="lx-cs" aria-label="Step through the code" onKeyDown={keys}>
      <header className="lx-cs-bar">
        <div className="lx-cs-controls">
          <button type="button" className="lx-btn lx-btn--sm" onClick={() => (setI(0), setAuto(false))} title="Restart">
            <RotateCcw size={15} /> <span className="lx-cs-hide">Restart</span>
          </button>
          <button type="button" className="lx-btn lx-btn--sm" onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} aria-label="Back one step">
            <ChevronLeft size={16} /> <span className="lx-cs-hide">Back</span>
          </button>
          <button type="button" className="lx-btn lx-btn--sm lx-btn--accent" onClick={() => setI((n) => Math.min(steps.length - 1, n + 1))} disabled={i >= steps.length - 1} aria-label="Next step">
            Next <ChevronRight size={16} />
          </button>
          <button type="button" className={`lx-btn lx-btn--sm${auto ? ' is-on' : ''}`} onClick={() => (i >= steps.length - 1 && setI(0), setAuto((a) => !a))} aria-pressed={auto}>
            {auto ? <Pause size={15} /> : <Play size={15} />} {auto ? 'Pause' : 'Auto'}
          </button>
        </div>
        <span className="lx-cs-count lx-num" aria-live="polite">
          Step <b>{Math.min(i, steps.length - 1) + 1}</b> of {steps.length}
          {step.label && <span className="lx-chip">{step.label}</span>}
        </span>
      </header>

      <div className="lx-cs-body">
        <div className="lx-cs-code" ref={codeBox} tabIndex={0} aria-label="The program; the arrow keys move through the steps">
          {lines.map((l, n) => (
            <div key={n} className={`lx-cs-line${n + 1 === step.line ? ' is-now' : ''}`}>
              <span className="lx-cs-ln lx-num" aria-hidden>
                {n + 1 === step.line ? '▶' : n + 1}
              </span>
              <code>
                {tokenizeCpp(l).map((t, k) => (
                  <span key={k} className={'tk-' + t.type}>
                    {t.text}
                  </span>
                ))}
                {l === '' ? ' ' : ''}
              </code>
            </div>
          ))}
        </div>

        <div className="lx-cs-side">
          <div className={`lx-cs-explain${step.trap ? ' has-trap' : ''}`}>
            <span className="lx-cs-tag">Line {step.line}</span>
            <p>{step.explanation}</p>
            {step.condition && <span className={`lx-cs-cond ${step.condition.value ? 'is-true' : 'is-false'}`}>{step.condition.value ? 'true' : 'false'}</span>}
            {step.trap && (
              <p className="lx-cs-trap">
                <AlertTriangle size={15} aria-hidden /> {step.trap}
              </p>
            )}
          </div>

          <div className="lx-cs-watch">
            <span className="lx-cs-tag">Variables and memory</span>
            {Object.keys(step.vars).length === 0 && Object.keys(step.arrays).length === 0 && <p className="lx-meta">Nothing declared yet.</p>}
            {Object.keys(step.vars).length > 0 && (
              <dl className="lx-cs-vars">
                {Object.entries(step.vars).map(([k, v]) => (
                  <div key={k} className={step.changed.includes(k) ? 'is-changed' : ''}>
                    <dt>{k}</dt>
                    <dd className={`lx-num${v === 'G' ? ' is-garbage' : ''}`}>{v === 'G' ? 'garbage' : v}</dd>
                  </div>
                ))}
              </dl>
            )}
            {Object.entries(step.arrays).map(([k, a]) => (
              <div key={k} className={`lx-cs-array${step.changed.includes(k) ? ' is-changed' : ''}`}>
                <span className="lx-cs-array-name">
                  {k}[{a.dims.join('][')}]
                </span>
                <div className="lx-cs-cells" style={{ ['--cols' as string]: a.dims.length > 1 ? a.dims[1] : Math.min(a.values.length, 10) }}>
                  {a.values.map((v, n) => (
                    <span key={n} className={`lx-cs-cell${v === 'G' ? ' is-garbage' : ''}`}>
                      <small className="lx-num">{a.dims.length > 1 ? `${Math.floor(n / a.dims[1])},${n % a.dims[1]}` : n}</small>
                      <b className="lx-num">{v}</b>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lx-cs-console">
            <span className="lx-cs-tag">
              <Terminal size={13} aria-hidden /> Console output
            </span>
            {outNow ? (
              <pre>
                {outNow.slice(0, outNow.length - fresh.length)}
                {fresh && <mark>{fresh}</mark>}
              </pre>
            ) : (
              <p className="lx-cs-empty">Nothing printed yet.</p>
            )}
          </div>

          {step.files &&
            Object.entries(step.files).map(([name, text]) => (
              <div key={name} className="lx-cs-file">
                <span className="lx-cs-tag">
                  <FileText size={13} aria-hidden /> File {name}
                </span>
                <pre>{text || '(empty)'}</pre>
              </div>
            ))}
        </div>
      </div>

      {reads && (
        <label className="lx-cs-input">
          <Keyboard size={16} aria-hidden />
          <span>Input the program reads (cin), separated by spaces</span>
          <input className="lx-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="4321" spellCheck={false} />
        </label>
      )}
      {trace.error && <p className="lx-cs-note is-error">{trace.error}</p>}
      {trace.waiting && <p className="lx-cs-note">The program stopped at a cin waiting for input: add values above and it runs on.</p>}
    </section>
  );
};