// Miller Plane Explorer — Milestone 2, Module C (lesson `planes`).
//
// The plane is the intersection polygon computed by millerPlane() from the
// equation hx + ky + lz = d. Nothing is faked: move d and the polygon is
// recomputed; tap "Index this plane" and the intercepts, reciprocals and
// fraction-clearing are worked out from the plane you are looking at.
// BCC (110) is the worked example: x + y = 1 contains the body centre,
// because 1/2 + 1/2 = 1.
import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, RotateCcw, Shrink } from 'lucide-react';
import {
  atomsOnPlane,
  defaultPlaneOffset,
  formatMiller,
  formatPlaneFamily,
  millerPlane,
  planeFamily,
  planeFromIntercepts,
  type CellKind,
  type Vec3,
} from '../visualization/crystalMath';
import { PlaneScene } from './PlaneScene';
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

const PRESETS: { hkl: [number, number, number]; label: string; note: string }[] = [
  { hkl: [1, 0, 0], label: '(100)', note: 'parallel to y and z' },
  { hkl: [0, 1, 0], label: '(010)', note: 'parallel to x and z' },
  { hkl: [0, 0, 1], label: '(001)', note: 'parallel to x and y' },
  { hkl: [1, 1, 0], label: '(110)', note: 'BCC worked example' },
  { hkl: [1, 1, 1], label: '(111)', note: 'close-packed plane' },
  { hkl: [1, -1, 0], label: '(1−10)', note: 'negative index' },
  { hkl: [1, -1, 1], label: '(1−11)', note: 'negative index' },
  { hkl: [2, 0, 1], label: '(201)', note: 'fractional intercepts' },
];

const interceptStr = (v: number | null): string => (v === null ? '∞' : String(v));

const PRACTICE_QS: { intercepts: [number | null, number | null, number | null]; options: [number, number, number][] }[] = [
  { intercepts: [1, 1, null], options: [[1, 1, 0], [1, 0, 1], [1, 1, 1]] },
  { intercepts: [1, 1, 1], options: [[1, 1, 1], [1, 1, 0], [2, 1, 1]] },
  { intercepts: [0.5, null, 1], options: [[2, 0, 1], [1, 0, 2], [1, 0, 1]] },
  { intercepts: [1, null, null], options: [[1, 0, 0], [0, 1, 0], [1, 1, 0]] },
  { intercepts: [1, 1, 0.5], options: [[1, 1, 2], [1, 1, 1], [2, 2, 1]] },
];

export const PlaneLab: React.FC = () => {
  const [mode, setMode] = useState<Mode>('teach');
  const [stepIdx, setStepIdx] = useState(0);
  const [hkl, setHkl] = useState<[number, number, number]>([1, 1, 0]);
  const [d, setD] = useState(1);
  const [cell, setCell] = useState<CellKind>('bcc');
  const [showAtoms, setShowAtoms] = useState(true);
  const [preset, setPreset] = useState<CameraPreset>('iso');
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showIndexing, setShowIndexing] = useState(false);
  const [showNotation, setShowNotation] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [qIdx, setQIdx] = useState(0);
  const [gl] = useState(() => (typeof window === 'undefined' ? true : webglAvailable()));

  const [h, k, l] = hkl;
  const plane = useMemo(() => millerPlane(h, k, l, d), [h, k, l, d]);
  const density = useMemo(() => atomsOnPlane(cell, plane), [cell, plane]);
  const guided = mode !== 'explore';
  const hideNumbers = mode === 'challenge' && answer === null;
  const dMin = [h, k, l].reduce((s, v) => s + (v < 0 ? v : 0), 0);
  const dMax = [h, k, l].reduce((s, v) => s + (v > 0 ? v : 0), 0);
  const indexing = useMemo(
    () => planeFromIntercepts(plane.intercepts.x, plane.intercepts.y, plane.intercepts.z),
    [plane],
  );
  const fam = useMemo(() => planeFamily(hkl), [hkl]);
  const q = PRACTICE_QS[qIdx % PRACTICE_QS.length];
  const qAnswer = useMemo(() => planeFromIntercepts(q.intercepts[0], q.intercepts[1], q.intercepts[2]).hkl, [q]);
  const isBcc110 = h === 1 && k === 1 && l === 0 && cell === 'bcc';

  const setPlane = (next: [number, number, number], nextD?: number) => {
    setHkl(next);
    setD(nextD ?? defaultPlaneOffset(next[0], next[1], next[2]));
    setShowIndexing(false);
    setAnswer(null);
  };

  const setIndex = (axis: 0 | 1 | 2, raw: string) => {
    const v = Number(raw);
    if (!Number.isInteger(v) || Math.abs(v) > 6) return;
    const next: [number, number, number] = [...hkl] as [number, number, number];
    next[axis] = v;
    if (next[0] === 0 && next[1] === 0 && next[2] === 0) return;
    setPlane(next);
  };

  const stepDefs = [
    {
      phase: 'observe' as const,
      title: 'Look at the plane',
      body: 'A Miller plane is a slice through the unit cell. This one is drawn from its equation — rotate the cube and check where it actually cuts the edges. Try the presets: (100) is a face, (111) cuts off a corner.',
      formula: plane.equation,
    },
    {
      phase: 'identify' as const,
      title: 'Read the intercepts',
      body: `This plane meets the axes at x = ${interceptStr(plane.intercepts.x)}, y = ${interceptStr(plane.intercepts.y)}, z = ${interceptStr(plane.intercepts.z)}. ∞ means the plane never meets that axis — it runs parallel to it.`,
      formula: `intercepts ${interceptStr(plane.intercepts.x)}, ${interceptStr(plane.intercepts.y)}, ${interceptStr(plane.intercepts.z)}`,
    },
    {
      phase: 'manipulate' as const,
      title: 'Slide it — same plane, new position',
      body: 'Drag the d slider: the plane slides parallel to itself. Its (hkl) never changes — a translated plane is the same Miller plane. Slide it through the origin and watch the intercepts change sign.',
      formula: 'same (hkl), any d',
    },
    {
      phase: 'calculate' as const,
      title: 'Index it from the intercepts',
      body: 'Take reciprocals, clear the fractions. Press “Index this plane” and follow the lines for the plane on screen right now.',
      formula: 'reciprocals → clear fractions → (hkl)',
    },
    {
      phase: 'practice' as const,
      title: 'Check yourself — and the BCC (110) story',
      body: isBcc110
        ? 'This is the BCC (110) plane: x + y = 1. The body centre (1/2, 1/2, 1/2) lies on it because 1/2 + 1/2 = 1 — it is highlighted white. That is why (110) is the densest plane in BCC, and why slip happens there.'
        : 'Answer the question, then switch to the (110) preset with BCC to see the worked example.',
    },
  ];
  const step = stepDefs[Math.min(stepIdx, stepDefs.length - 1)];
  const go = (goD: number) => {
    setStepIdx((i) => Math.max(0, Math.min(stepDefs.length - 1, i + goD)));
    setAnswer(null);
  };

  return (
    <section className={`lx-cl${fullscreen ? ' is-full' : ''}`} aria-label="Miller Plane Explorer">
      <header className="lx-cl-head">
        <span className="lx-cl-fig">Fig 3 · Miller Plane Explorer</span>
        <h2 className="lx-h2">Miller planes: from intercepts to (hkl)</h2>
        <p className="lx-meta">Every plane is drawn from its equation — rotate the cube and verify the cut yourself.</p>
      </header>

      <div className="lx-cl-modes" role="group" aria-label="Learning mode">
        {(['explore', 'teach', 'practice', 'challenge'] as Mode[]).map((m) => (
          <button key={m} type="button" className={`lx-chip lx-chip-btn${mode === m ? ' is-on' : ''}`} aria-pressed={mode === m} onClick={() => (setMode(m), setStepIdx(0), setAnswer(null))}>
            {m === 'explore' ? 'Explore' : m === 'teach' ? 'Teach' : m === 'practice' ? 'Practice' : 'Challenge'}
          </button>
        ))}
      </div>

      <div className="lx-cl-cells" role="group" aria-label="Plane presets">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            className={`lx-cl-cell${hkl.join(',') === p.hkl.join(',') ? ' is-on' : ''}`}
            aria-pressed={hkl.join(',') === p.hkl.join(',')}
            onClick={() => setPlane(p.hkl)}
          >
            <strong>{p.label}</strong>
            <span>{p.note}</span>
          </button>
        ))}
      </div>

      <div className="lx-cl-stage">
        {gl ? (
          <PlaneScene h={h} k={k} l={l} d={d} cell={cell} preset={preset} autoOrbit={autoOrbit} showAtoms={showAtoms} />
        ) : (
          <div className="lx-cl-fallback">
            <p className="lx-meta" style={{ color: '#fff', maxWidth: 420, textAlign: 'center' }}>
              WebGL is unavailable in this browser, so the 3D plane cannot be drawn. The plane on screen is {formatMiller(hkl)}: {plane.equation}. Intercepts x = {interceptStr(plane.intercepts.x)}, y = {interceptStr(plane.intercepts.y)}, z = {interceptStr(plane.intercepts.z)}. All the numbers below are unchanged.
            </p>
          </div>
        )}
        <div className="lx-cl-stage-bar">
          <span className="lx-cl-readout" aria-live="polite">
            {hideNumbers ? (
              <>Challenge: index this plane yourself, then answer below.</>
            ) : (
              <>
                <strong>{formatMiller(hkl)}</strong> · {plane.equation} · {plane.polygon.length}-sided cut
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
        <button type="button" className={`lx-btn lx-btn--sm${showAtoms ? ' is-on' : ''}`} aria-pressed={showAtoms} onClick={() => setShowAtoms((s) => !s)}>
          Atoms
        </button>
        <button type="button" className="lx-btn lx-btn--sm" onClick={() => setShowNotation((s) => !s)} aria-expanded={showNotation}>
          [110] vs (110) vs ⟨110⟩ vs {'{110}'}
        </button>
      </div>

      {showNotation && (
        <div className="lx-cl-selected" role="note" style={{ display: 'block' }}>
          <p style={{ margin: '0 0 6px' }}>
            <strong>[110]</strong> is one direction — an arrow. <strong>(110)</strong> is one plane — a slice. <strong>⟨110⟩</strong> is the family of all equivalent directions (12 of them). <strong>{'{110}'}</strong> is the family of all equivalent planes (6 of them). Same numbers, four different objects — the brackets are the meaning.
          </p>
          <p className="lx-meta" style={{ margin: 0 }}>
            This plane's family {formatPlaneFamily(hkl)} holds {fam.length} planes. Its normal direction is [{h} {k} {l}] — the plane's normal is the direction with the same indices.
          </p>
        </div>
      )}

      <div className="lx-cl-settings" aria-label="Miller indices and plane position">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <strong>Miller indices</strong>
          {(['h', 'k', 'l'] as const).map((axis, i) => (
            <label key={axis} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {axis}
              <input
                type="number"
                inputMode="numeric"
                aria-label={`Miller index ${axis}`}
                defaultValue={hkl[i]}
                key={`${axis}-${hkl[i]}`}
                min={-6}
                max={6}
                step={1}
                onBlur={(e) => setIndex(i as 0 | 1 | 2, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                }}
                style={{ width: 56, font: 'inherit', padding: '4px 6px', border: '1px solid var(--lx-line-strong)', borderRadius: 6 }}
              />
            </label>
          ))}
        </div>
        <label>
          <span>Slide d ({d.toFixed(2)})</span>
          <input
            type="range"
            min={dMin}
            max={dMax}
            step={0.05}
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
            aria-label="Slide the plane parallel to itself"
          />
        </label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <strong>Cell</strong>
          {(['sc', 'bcc', 'fcc'] as CellKind[]).map((c) => (
            <button key={c} type="button" className={`lx-btn lx-btn--sm${cell === c ? ' is-on' : ''}`} onClick={() => setCell(c)}>
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="lx-cl-facts">
        <dl>
          <div>
            <dt>Plane</dt>
            <dd className="lx-num">{hideNumbers ? '?' : formatMiller(hkl)}</dd>
          </div>
          <div>
            <dt>Equation</dt>
            <dd className="lx-num">{hideNumbers ? '?' : plane.equation}</dd>
          </div>
          <div>
            <dt>Intercepts</dt>
            <dd className="lx-num">
              {hideNumbers ? '?' : `${interceptStr(plane.intercepts.x)}, ${interceptStr(plane.intercepts.y)}, ${interceptStr(plane.intercepts.z)}`}
            </dd>
          </div>
          <div>
            <dt>Atoms on plane</dt>
            <dd className="lx-num">{hideNumbers ? '?' : `${density.count} / cell`}</dd>
          </div>
          <div>
            <dt>Plane area</dt>
            <dd className="lx-num">{hideNumbers ? '?' : `${density.area.toFixed(3)} a²`}</dd>
          </div>
          <div>
            <dt>Planar density</dt>
            <dd className="lx-num">{hideNumbers ? '?' : `${density.density.toFixed(3)} / a²`}</dd>
          </div>
        </dl>
        {isBcc110 && (
          <p className="lx-meta">
            BCC (110), worked: the plane is x + y = 1, it cuts the cube at x = 1 and y = 1 and runs parallel to z. The body centre (1/2, 1/2, 1/2) lies on it — 1/2 + 1/2 = 1 — so it is highlighted white. Atoms on the plane: {density.count} per cell over {density.area.toFixed(3)} a², the densest plane in BCC.
          </p>
        )}
        <p className="lx-meta">
          {indexing.throughOrigin ? 'This plane passes through the origin (an intercept is 0). Slide d or pick a preset to index it — translated planes keep the same (hkl).' : `Tap “Index this plane” in the Calculate step to work out ${formatMiller(hkl)} from these intercepts.`}
        </p>
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
                {!showIndexing ? (
                  <button type="button" className="lx-btn lx-btn--sm" onClick={() => setShowIndexing(true)}>
                    Index this plane
                  </button>
                ) : (
                  <ol style={{ margin: '8px 0', paddingLeft: 20 }}>
                    {indexing.lines.map((l, i) => (
                      <li key={i} style={{ marginBottom: 4 }}>
                        {l}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}
            {step.phase === 'practice' && (
              <div className="lx-cl-check-q">
                <p>
                  <strong>
                    A plane cuts the axes at x = {interceptStr(q.intercepts[0])}, y = {interceptStr(q.intercepts[1])}, z = {interceptStr(q.intercepts[2])}. Which Miller indices?
                  </strong>
                </p>
                <div className="lx-cl-options" role="group" aria-label="Your answer">
                  {q.options.map((o, i) => (
                    <button
                      key={o.join(',')}
                      type="button"
                      className={`lx-btn lx-btn--sm${answer === i ? (JSON.stringify(o) === JSON.stringify(qAnswer) ? ' is-good' : ' is-bad') : ''}`}
                      onClick={() => setAnswer(i)}
                      disabled={answer !== null}
                    >
                      {formatMiller(o)}
                    </button>
                  ))}
                </div>
                {answer !== null && (
                  <p className="lx-meta" role="status">
                    {JSON.stringify(q.options[answer]) === JSON.stringify(qAnswer) ? 'Correct. ' : `Not quite — the answer is ${qAnswer ? formatMiller(qAnswer) : '—'}. `}
                    Reciprocals of {q.intercepts.map(interceptStr).join(', ')} clear to {qAnswer ? formatMiller(qAnswer) : '—'}.
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
        <p className="lx-meta">Explore mode: every control is live. Switch to Teach for the guided walkthrough, or Challenge to test yourself. Type Miller indices, slide d, and rotate the cube to check the cut.</p>
      )}
    </section>
  );
};

export default PlaneLab;
