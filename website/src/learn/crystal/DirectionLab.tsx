// Direction Explorer — Milestone 2, Module B (lesson `directions`).
//
// The student picks the tail and the head of an arrow in the cube; the
// calculation is shown one step at a time from directionSteps():
// Start → End → End − Start → clear fractions → reduce → [uvw].
// Every number comes from crystalMath.ts. Families ⟨uvw⟩ are shown as the
// whole set of equivalent arrows, faded, so a family is visibly not one arrow.
import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, RotateCcw, Shrink } from 'lucide-react';
import {
  directionFamily,
  directionSteps,
  formatDirection,
  formatFamily,
  fracToString,
  parseFraction,
  type Vec3,
} from '../visualization/crystalMath';
import { DirectionScene } from './DirectionScene';
import { MathText } from '../../utils/mathRenderer';
import type { CameraPreset } from './SceneKit';
import './crystalLab.css';

type Mode = 'explore' | 'teach' | 'practice' | 'challenge';

const PHASES = ['observe', 'identify', 'manipulate', 'calculate', 'practice'] as const;

const webglAvailable = (): boolean => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
};

const vecToString = (v: Vec3): string => `(${v.map(fracToString).join(', ')})`;

/** 2D fallback when WebGL is unavailable: isometric projection of the same arrow. */
const DirectionDiagram: React.FC<{ start: Vec3; end: Vec3 }> = ({ start, end }) => {
  const proj = (p: Vec3): [number, number] => [200 + (p[0] - p[1]) * 110, 170 - (p[0] + p[1]) * 55 - p[2] * 110];
  const cube: [Vec3, Vec3][] = [
    [[0, 0, 0], [1, 0, 0]],
    [[1, 0, 0], [1, 1, 0]],
    [[1, 1, 0], [0, 1, 0]],
    [[0, 1, 0], [0, 0, 0]],
    [[0, 0, 1], [1, 0, 1]],
    [[1, 0, 1], [1, 1, 1]],
    [[1, 1, 1], [0, 1, 1]],
    [[0, 1, 1], [0, 0, 1]],
    [[0, 0, 0], [0, 0, 1]],
    [[1, 0, 0], [1, 0, 1]],
    [[1, 1, 0], [1, 1, 1]],
    [[0, 1, 0], [0, 1, 1]],
  ];
  const [sx, sy] = proj(start);
  const [ex, ey] = proj(end);
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label={`Direction arrow from ${vecToString(start)} to ${vecToString(end)}`}>
      {cube.map(([a, b], i) => {
        const [ax, ay] = proj(a);
        const [bx, by] = proj(b);
        return <line key={i} x1={ax} y1={ay} x2={bx} y2={by} stroke="#64748b" strokeWidth={1.5} />;
      })}
      <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="#e11d48" strokeWidth={3} markerEnd="url(#dirArrow)" />
      <defs>
        <marker id="dirArrow" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="#e11d48" />
        </marker>
      </defs>
      <circle cx={sx} cy={sy} r={6} fill="#e11d48" />
      <circle cx={ex} cy={ey} r={6} fill="#f59e0b" />
      <text x={sx + 10} y={sy} fill="#fff" fontSize={13}>tail {vecToString(start)}</text>
      <text x={ex + 10} y={ey} fill="#fff" fontSize={13}>head {vecToString(end)}</text>
    </svg>
  );
};

const PRACTICE_QS: { start: Vec3; end: Vec3; options: [number, number, number][] }[] = [
  { start: [0, 0, 0], end: [1, 1, 0], options: [[1, 1, 0], [1, 0, 1], [1, 1, 1]] },
  { start: [0, 0, 0], end: [0.5, 1, 1 / 3], options: [[3, 6, 2], [1, 2, 1], [1, 2, 3]] },
  { start: [1, 0, 0], end: [0, 1, 0], options: [[-1, 1, 0], [1, 1, 0], [1, -1, 0]] },
  { start: [0, 0, 0], end: [1, 0.5, 0], options: [[2, 1, 0], [1, 1, 0], [1, 2, 0]] },
];

export const DirectionLab: React.FC = () => {
  const [mode, setMode] = useState<Mode>('teach');
  const [stepIdx, setStepIdx] = useState(0);
  const [start, setStart] = useState<Vec3>([0, 0, 0]);
  const [end, setEnd] = useState<Vec3>([1, 1, 0]);
  const [pickTarget, setPickTarget] = useState<'tail' | 'head'>('tail');
  const [showFamily, setShowFamily] = useState(false);
  const [preset, setPreset] = useState<CameraPreset>('iso');
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [calcReveal, setCalcReveal] = useState(1);
  const [answer, setAnswer] = useState<number | null>(null);
  const [qIdx, setQIdx] = useState(0);
  const [gl] = useState(() => (typeof window === 'undefined' ? true : webglAvailable()));

  const steps = useMemo(() => directionSteps(start, end), [start, end]);
  const guided = mode !== 'explore';
  const hideNumbers = mode === 'challenge' && answer === null;
  const family = useMemo(() => directionFamily(steps.final), [steps.final]);
  const q = PRACTICE_QS[qIdx % PRACTICE_QS.length];
  const qSteps = useMemo(() => directionSteps(q.start, q.end), [q]);

  const pick = (p: Vec3) => {
    if (pickTarget === 'tail') {
      setStart(p);
      setPickTarget('head');
    } else {
      setEnd(p);
      setPickTarget('tail');
    }
    setCalcReveal(1);
    setAnswer(null);
  };

  const setCoord = (which: 'start' | 'end', axis: 0 | 1 | 2, raw: string) => {
    const v = parseFraction(raw);
    if (v === null || v < -1 || v > 1) return;
    const next: Vec3 = [...(which === 'start' ? start : end)] as Vec3;
    next[axis] = v;
    if (which === 'start') setStart(next);
    else setEnd(next);
    setCalcReveal(1);
    setAnswer(null);
  };

  const loadExample = (s: Vec3, e: Vec3) => {
    setStart(s);
    setEnd(e);
    setCalcReveal(1);
    setAnswer(null);
  };

  const stepDefs = [
    {
      phase: 'observe' as const,
      title: 'Look at the arrow',
      body: 'A direction is an arrow in the crystal. Tap a point for the tail (red), then a point for the head (amber). Drag the cube to orbit it — the arrow moves with the crystal, because it is part of it.',
      formula: 'direction = head − tail',
    },
    {
      phase: 'identify' as const,
      title: 'Read the two points',
      body: `Tail = ${vecToString(start)}. Head = ${vecToString(end)}. Every point is written in fractional coordinates: 0 is one face of the cube, 1 is the opposite face, 1/2 is halfway.`,
      formula: `tail ${vecToString(start)} · head ${vecToString(end)}`,
    },
    {
      phase: 'manipulate' as const,
      title: 'Move the arrow — or type it',
      body: 'Tap new points, or type coordinates below (fractions like 1/2 or −1/3 work, and so do decimals). Try a negative index: put the head on the other side of the tail and watch the bar appear.',
      formula: 'type any tail and head, −1 to 1',
    },
    {
      phase: 'calculate' as const,
      title: 'Work it out, one step at a time',
      body: 'Subtract, clear the fractions, reduce. Press “Next step” to reveal each line — no step is skipped.',
      formula: `End − Start = ${vecToString(steps.diff)}`,
    },
    {
      phase: 'practice' as const,
      title: 'Check yourself',
      body: 'Answer, then check. In Challenge mode the answer stays hidden until you commit.',
    },
  ];
  const step = stepDefs[Math.min(stepIdx, stepDefs.length - 1)];
  const go = (d: number) => {
    setStepIdx((i) => Math.max(0, Math.min(stepDefs.length - 1, i + d)));
    setAnswer(null);
    setCalcReveal(1);
  };

  return (
    <section className={`lx-cl${fullscreen ? ' is-full' : ''}`} aria-label="Direction Explorer">
      <header className="lx-cl-head">
        <span className="lx-cl-fig">Fig 2 · Direction Explorer</span>
        <h2 className="lx-h2">Directions: from two points to [uvw]</h2>
        <p className="lx-meta">Pick a tail and a head — the calculation follows the arrow, step by step.</p>
      </header>

      <div className="lx-cl-modes" role="group" aria-label="Learning mode">
        {(['explore', 'teach', 'practice', 'challenge'] as Mode[]).map((m) => (
          <button key={m} type="button" className={`lx-chip lx-chip-btn${mode === m ? ' is-on' : ''}`} aria-pressed={mode === m} onClick={() => (setMode(m), setStepIdx(0), setAnswer(null))}>
            {m === 'explore' ? 'Explore' : m === 'teach' ? 'Teach' : m === 'practice' ? 'Practice' : 'Challenge'}
          </button>
        ))}
      </div>

      <div className="lx-cl-cells" role="group" aria-label="Examples">
        <button type="button" className="lx-cl-cell" onClick={() => loadExample([0, 0, 0], [1, 1, 0])}>
          <strong>[1 1 0]</strong>
          <span>(0,0,0) → (1,1,0)</span>
        </button>
        <button type="button" className="lx-cl-cell" onClick={() => loadExample([0, 0, 0], [0.5, 1, 1 / 3])}>
          <strong>[3 6 2]</strong>
          <span>(0,0,0) → (½,1,⅓)</span>
        </button>
        <button type="button" className="lx-cl-cell" onClick={() => loadExample([1, 0, 0], [0, 1, 0])}>
          <strong>[1̄ 1 0]</strong>
          <span>negative index</span>
        </button>
      </div>

      <div className="lx-cl-stage">
        {gl ? (
          <DirectionScene
            start={start}
            end={end}
            preset={preset}
            autoOrbit={autoOrbit}
            showFamily={showFamily}
            familyOf={steps.final}
            pickTarget={pickTarget}
            onPick={pick}
          />
        ) : (
          <div className="lx-cl-fallback">
            <DirectionDiagram start={start} end={end} />
            <p className="lx-meta">WebGL is unavailable in this browser, so you are seeing the 2D diagram of the same arrow. All the numbers below are unchanged.</p>
          </div>
        )}
        <div className="lx-cl-stage-bar">
          <span className="lx-cl-readout" aria-live="polite">
            {hideNumbers ? (
              <>Challenge: work out the direction yourself, then answer below.</>
            ) : (
              <>
                <strong>{formatDirection(steps.final)}</strong> · tail {vecToString(start)} → head {vecToString(end)}
              </>
            )}
          </span>
          <button type="button" className="lx-icon-btn lx-cl-fs" onClick={() => setFullscreen((f) => !f)} aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
            {fullscreen ? <Shrink size={18} /> : <Expand size={18} />}
          </button>
        </div>
      </div>

      <div className="lx-cl-cams" role="group" aria-label="Camera view">
        {(['iso', 'front', 'top', 'side'] as CameraPreset[]).map((p) => (
          <button key={p} type="button" className={`lx-btn lx-btn--sm${preset === p ? ' is-on' : ''}`} onClick={() => setPreset(p)}>
            {p === 'iso' ? 'Isometric' : p[0].toUpperCase() + p.slice(1)}
          </button>
        ))}
        <button type="button" className={`lx-btn lx-btn--sm${autoOrbit ? ' is-on' : ''}`} aria-pressed={autoOrbit} onClick={() => setAutoOrbit((a) => !a)}>
          <RotateCcw size={14} /> Auto-orbit
        </button>
        <button type="button" className={`lx-btn lx-btn--sm${showFamily ? ' is-on' : ''}`} aria-pressed={showFamily} onClick={() => setShowFamily((f) => !f)}>
          Show family {formatFamily(steps.final)}
        </button>
        <button type="button" className="lx-btn lx-btn--sm" onClick={() => setPickTarget(pickTarget === 'tail' ? 'head' : 'tail')}>
          Picking: {pickTarget}
        </button>
      </div>

      <div className="lx-cl-settings" aria-label="Tail and head coordinates">
        {(['start', 'end'] as const).map((which) => (
          <div key={which} style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <strong>{which === 'start' ? 'Tail' : 'Head'}</strong>
            {([0, 1, 2] as const).map((axis) => (
              <label key={axis} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {['x', 'y', 'z'][axis]}
                <input
                  type="text"
                  inputMode="decimal"
                  aria-label={`${which} ${['x', 'y', 'z'][axis]} coordinate`}
                  defaultValue={fracToString((which === 'start' ? start : end)[axis])}
                  key={`${which}-${axis}-${(which === 'start' ? start : end)[axis]}`}
                  onBlur={(e) => setCoord(which, axis, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                  }}
                  style={{ width: 56, font: 'inherit', padding: '4px 6px', border: '1px solid var(--lx-line-strong)', borderRadius: 6 }}
                />
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="lx-cl-facts">
        <dl>
          <div>
            <dt>Start</dt>
            <dd className="lx-num">{hideNumbers ? '?' : vecToString(start)}</dd>
          </div>
          <div>
            <dt>End</dt>
            <dd className="lx-num">{hideNumbers ? '?' : vecToString(end)}</dd>
          </div>
          <div>
            <dt>End − Start</dt>
            <dd className="lx-num">{hideNumbers ? '?' : vecToString(steps.diff)}</dd>
          </div>
          <div>
            <dt>Clear fractions</dt>
            <dd className="lx-num">{hideNumbers ? '?' : `× ${steps.multiplier}`}</dd>
          </div>
          <div>
            <dt>Direction</dt>
            <dd className="lx-num">{hideNumbers ? '?' : formatDirection(steps.final)}</dd>
          </div>
          <div>
            <dt>Family {formatFamily(steps.final)}</dt>
            <dd className="lx-num">{family.length} directions</dd>
          </div>
        </dl>
        {showFamily && (
          <p className="lx-meta">
            {formatFamily(steps.final)} is a <strong>family</strong> of {family.length} equivalent directions — every arrow in the faded set. A single arrow is just one member: {formatDirection(steps.final)}. Same rule, one bracket apart.
          </p>
        )}
      </div>

      {guided && (
        <div className="lx-cl-guide">
          <div className="lx-cl-phases" aria-label="Learning phases">
            {PHASES.map((p, i) => (
              <button
                key={p}
                type="button"
                className={`lx-cl-phase${step.phase === p ? ' is-now' : ''}${i < PHASES.indexOf(step.phase) ? ' is-done' : ''}`}
                onClick={() => {
                  const idx = stepDefs.findIndex((s) => s.phase === p);
                  if (idx >= 0) setStepIdx(idx);
                }}
              >
                {p === 'observe' ? 'Observe' : p === 'identify' ? 'Identify' : p === 'manipulate' ? 'Manipulate' : p === 'calculate' ? 'Calculate' : 'Practice'}
              </button>
            ))}
          </div>
          <div className="lx-cl-step">
            <span className="lx-cl-count lx-num" aria-live="polite">
              Step <b>{stepIdx + 1}</b> of {stepDefs.length}
            </span>
            <h3 className="lx-h3">{step.title}</h3>
            <p>{step.body}</p>
            {step.formula && (
              <p className="lx-cl-formula">
                <MathText text={`$${step.formula}$`} />
              </p>
            )}
            {step.phase === 'calculate' && (
              <div>
                <ol style={{ margin: '8px 0', paddingLeft: 20 }}>
                  {steps.lines.slice(0, calcReveal).map((l, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>
                      {l}
                    </li>
                  ))}
                </ol>
                {calcReveal < steps.lines.length && (
                  <button type="button" className="lx-btn lx-btn--sm" onClick={() => setCalcReveal((r) => r + 1)}>
                    Next step ({calcReveal} of {steps.lines.length})
                  </button>
                )}
              </div>
            )}
            {step.phase === 'practice' && (
              <div className="lx-cl-check-q">
                <p>
                  <strong>
                    What is the direction from {vecToString(q.start)} to {vecToString(q.end)}?
                  </strong>
                </p>
                <div className="lx-cl-options" role="group" aria-label="Your answer">
                  {q.options.map((o, i) => (
                    <button
                      key={o.join(',')}
                      type="button"
                      className={`lx-btn lx-btn--sm${answer === i ? (JSON.stringify(o) === JSON.stringify(qSteps.final) ? ' is-good' : ' is-bad') : ''}`}
                      onClick={() => setAnswer(i)}
                      disabled={answer !== null}
                    >
                      {formatDirection(o)}
                    </button>
                  ))}
                </div>
                {answer !== null && (
                  <p className="lx-meta" role="status">
                    {JSON.stringify(q.options[answer]) === JSON.stringify(qSteps.final) ? 'Correct. ' : `Not quite — the answer is ${formatDirection(qSteps.final)}. `}
                    End − Start = {vecToString(qSteps.diff)}, × {qSteps.multiplier} → {formatDirection(qSteps.final)}.
                    <button type="button" className="lx-btn lx-btn--sm" style={{ marginLeft: 8 }} onClick={() => (setAnswer(null), setQIdx((i) => i + 1))}>
                      Next question
                    </button>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {guided && (
        <div className="lx-cl-nav">
          <button type="button" className="lx-btn" onClick={() => go(-1)} disabled={stepIdx === 0} aria-label="Previous step">
            <ChevronLeft size={16} /> <span>Previous</span>
          </button>
          <span className="lx-cl-dots" aria-hidden>
            {stepDefs.map((_, i) => (
              <button key={i} type="button" className={i === stepIdx ? 'is-now' : ''} onClick={() => setStepIdx(i)} aria-label={`Go to step ${i + 1}`} />
            ))}
          </span>
          <button type="button" className="lx-btn lx-btn--primary" onClick={() => go(1)} disabled={stepIdx >= stepDefs.length - 1} aria-label="Next step">
            <span>Next</span> <ChevronRight size={16} />
          </button>
        </div>
      )}
      {!guided && (
        <p className="lx-meta">Explore mode: every control is live. Switch to Teach for the guided walkthrough, or Challenge to test yourself. Tap a point for the tail, tap another for the head.</p>
      )}
    </section>
  );
};

export default DirectionLab;
