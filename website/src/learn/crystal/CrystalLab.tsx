// Crystal Lab — Milestone 1: the Unit Cell Explorer.
//
// Guided-learning engine modelled on the C++ CodeStepper (Previous/Next,
// progress, active-step highlight, compact mobile layout), applied to a live
// 3D model instead of code. Phases: Observe → Identify → Manipulate →
// Calculate → Practice. At every step the camera, highlight, formula and
// explanation stay synchronised — the step drives the scene, and the scene
// is the only place the numbers come from (crystalMath.ts).
//
// Modes: Explore (free), Teach (guided), Practice (guided + check yourself),
// Challenge (numbers hidden until you commit an answer).
import React, { useMemo, useState } from 'react';
import { WalkthroughPlay } from './WalkthroughPlay';
import { Box, ChevronLeft, ChevronRight, Expand, Eye, RotateCcw, Shrink, Sparkles } from 'lucide-react';
import { CELL_KINDS, formatDirection, unitCell, type CellKind } from '../visualization/crystalMath';
import { UnitCellScene, type CameraPreset, type SceneState } from './UnitCellScene';
import { CellDiagram } from './CellDiagram';
import './crystalLab.css';

type Mode = 'explore' | 'teach' | 'practice' | 'challenge';

interface LabStep {
  phase: 'observe' | 'identify' | 'manipulate' | 'calculate' | 'practice';
  title: string;
  body: string;
  formula?: string;
  scene?: Partial<SceneState>;
  /** Practice question shown at this step (Practice/Challenge modes). */
  check?: { q: string; options: string[]; correct: number; why: string };
}

const PHASES = ['observe', 'identify', 'manipulate', 'calculate', 'practice'] as const;

const webglAvailable = (): boolean => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
};

const stepsFor = (cell: CellKind): LabStep[] => {
  const m = unitCell(cell);
  const sharing = m.sharing.map((r) => r.line).join('  ·  ');
  return [
    {
      phase: 'observe',
      title: `Look at the ${m.short} cell`,
      body:
        m.short === 'HCP'
          ? `This is one ${m.name} hexagonal prism unit cell standing upright along its c-axis. Drag to orbit it, pinch or scroll to zoom. The 6 blue corner atoms on the bottom and top hexagons form the A layers (each shared by 6 cells = 1/6), the 2 amber face-center atoms sit at the center of the top and bottom hexagons (each shared by 2 cells = 1/2), and the 3 burgundy interior atoms form the B-layer triangle at mid-height (each 1 whole atom).`
          : `This is one ${m.name} unit cell — the smallest repeating brick of the crystal. Drag to orbit it, pinch or scroll to zoom. The burgundy atom belongs wholly to this cell; the corner atoms are shared with neighbours.`,
      formula: 'n = atoms per unit cell',
      scene: { preset: 'iso', explode: 0, showLabels: true, showSharing: false },
    },
    {
      phase: 'identify',
      title: 'Name every atom by its place',
      body:
        m.short === 'HCP'
          ? `Tap an atom. Each of the 12 hexagonal corner atoms sits where 6 hexagonal prisms meet (3 in the bottom layer, 3 in the top layer), so 1/6 of it belongs to this cell (12 × 1/6 = 2). The 2 top/bottom face-center atoms are shared by 2 cells (2 × 1/2 = 1). The 3 burgundy B-layer interior atoms sit completely inside the cell (3 × 1 = 3), giving n = 6 atoms.`
          : `Tap an atom. A corner atom sits where 8 cubic cells meet, so only 1/8 of it is yours. A face atom is shared by 2 cells (1/2). The ${m.short === 'BCC' ? 'body-centre' : 'face'} atom belongs to this cell alone.`,
      formula: m.short === 'HCP' ? 'corner = 1/6 · face = 1/2 · interior = 1' : 'corner = 1/8 · face = 1/2 · body = 1',
      scene: { preset: 'iso', explode: 0, showLabels: true, showSharing: true },
    },
    {
      phase: 'manipulate',
      title: 'Take it apart — then put it back',
      body:
        m.short === 'HCP'
          ? `Slide "Explode" and watch the top/bottom hexagonal A-layers and the middle B-layer triangle separate radially so you can clearly count all 12 corner atoms, 2 face-center atoms, and 3 interior B-layer atoms.`
          : `Slide "Explode" and watch each atom travel out along its own direction until its share is obvious: a corner atom is one eighth of a sphere. Try the 2 × 2 × 2 block too: corners that looked separate are the same atom, shared between cells.`,
      formula: 'explode: assembled → apart',
      scene: { preset: 'iso', explode: 0.6, showLabels: true, showSharing: true },
    },
    {
      phase: 'calculate',
      title: 'Count the atoms — show the fractions combining',
      body: `${sharing} — so n = ${m.atomsPerCell}. The packing factor follows from the geometry: ${m.radiusRelation}, so APF = ${m.apf.toFixed(3)} (${(m.apf * 100).toFixed(1)}% of the cell is filled). Coordination number ${m.coordination}: each atom touches ${m.coordination} neighbours.`,
      formula: `APF = ${m.apf.toFixed(3)} · CN = ${m.coordination} · ${m.radiusRelation}`,
      scene: { preset: 'iso', explode: 0, showLabels: false, showSharing: true },
    },
    {
      phase: 'practice',
      title: 'Check yourself',
      body: `No peeking at the readout above — answer, then check. In Challenge mode the numbers stay hidden until you commit.`,
      scene: { preset: 'iso', explode: 0, showLabels: false, showSharing: false },
      check: {
        q: `How many atoms are in one ${m.short} unit cell?`,
        options: ['1', '2', '4', '6'],
        correct: ['1', '2', '4', '6'].indexOf(String(m.atomsPerCell)),
        why: `${sharing} — total n = ${m.atomsPerCell}.`,
      },
    },
  ];
};

export const CrystalLab: React.FC = () => {
  const [cell, setCell] = useState<CellKind>('bcc');
  const [mode, setMode] = useState<Mode>('teach');
  const [stepIdx, setStepIdx] = useState(0);
  const [explode, setExplode] = useState(0);
  const [replicate, setReplicate] = useState<[number, number, number]>([1, 1, 1]);
  const [showLabels, setShowLabels] = useState(true);
  const [showSharing, setShowSharing] = useState(false);
  const [showAxes, setShowAxes] = useState(true);
  const [atomSize, setAtomSize] = useState<'touching' | 'small'>('touching');
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [preset, setPreset] = useState<CameraPreset>('iso');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [explodeOverride, setExplodeOverride] = useState<number | null>(null);
  const [presetOverride, setPresetOverride] = useState<CameraPreset | null>(null);
  const [gl] = useState(() => (typeof window === 'undefined' ? true : webglAvailable()));

  const model = useMemo(() => unitCell(cell), [cell]);
  const steps = useMemo(() => stepsFor(cell), [cell]);
  const guided = mode !== 'explore';
  const step = guided ? steps[Math.min(stepIdx, steps.length - 1)] : null;
  const hideNumbers = mode === 'challenge' && answer === null;

  const scene: SceneState = {
    cell,
    explode: explodeOverride ?? (guided && step?.scene?.explode !== undefined ? step.scene.explode : explode),
    replicate,
    showLabels: guided && step?.scene?.showLabels !== undefined ? step.scene.showLabels : showLabels,
    showSharing: guided && step?.scene?.showSharing !== undefined ? step.scene.showSharing : showSharing,
    showAxes,
    showWireframe: false,
    atomSize,
    autoOrbit,
    preset: presetOverride ?? (guided && step?.scene?.preset ? step.scene.preset : preset),
    selectedId,
  };

  const selected = selectedId ? model.atoms.find((a) => a.id === selectedId) ?? null : null;
  const go = (d: number) => {
    setStepIdx((i) => Math.max(0, Math.min(steps.length - 1, i + d)));
    setAnswer(null);
    setExplodeOverride(null);
    setPresetOverride(null);
  };
  const pickCell = (c: CellKind) => {
    setCell(c);
    setSelectedId(null);
    setAnswer(null);
    setStepIdx(0);
  };

  return (
    <section className={`lx-cl${fullscreen ? ' is-full' : ''}`} aria-label="Crystal Lab: unit cell explorer">
      <header className="lx-cl-head">
        <span className="lx-cl-fig">
          <Box size={18} aria-hidden /> Fig 1 · Crystal Lab
        </span>
        <h2 className="lx-h2">3D Visual Learner: Crystal Structures</h2>
        <p className="lx-meta">SC · BCC · FCC · HCP — one model drives the picture and every number below it.</p>
      </header>

      <WalkthroughPlay count={steps.length} onStart={() => { setMode('teach'); setStepIdx(0); setAnswer(null); setExplodeOverride(null); setPresetOverride(null); }} onStep={(i) => { setStepIdx(i); setAnswer(null); setExplodeOverride(null); setPresetOverride(null); }} />

      <div className="lx-cl-modes" role="group" aria-label="Learning mode">
        {(['explore', 'teach', 'practice', 'challenge'] as Mode[]).map((m) => (
          <button key={m} type="button" className={`lx-chip lx-chip-btn${mode === m ? ' is-on' : ''}`} aria-pressed={mode === m} onClick={() => (setMode(m), setStepIdx(0), setAnswer(null))}>
            {m === 'explore' ? 'Explore' : m === 'teach' ? 'Teach' : m === 'practice' ? 'Practice' : 'Challenge'}
          </button>
        ))}
      </div>

      <div className="lx-cl-cells" role="group" aria-label="Unit cell type">
        {CELL_KINDS.map((c) => {
          const m = unitCell(c);
          return (
            <button key={c} type="button" className={`lx-cl-cell${cell === c ? ' is-on' : ''}`} aria-pressed={cell === c} onClick={() => pickCell(c)}>
              <strong>{m.short}</strong>
              <span>{m.atomsPerCell} atoms · APF {m.apf.toFixed(2)}</span>
            </button>
          );
        })}
      </div>

      <div className="lx-cl-stage">
        {gl ? (
          <UnitCellScene scene={scene} onSelect={setSelectedId} />
        ) : (
          <div className="lx-cl-fallback">
            <CellDiagram cell={cell} selectedId={selectedId} onSelect={setSelectedId} />
            <p className="lx-meta">WebGL is unavailable in this browser, so you are seeing the 2D diagram of the same model. All the numbers below are unchanged.</p>
          </div>
        )}
        <div className="lx-cl-stage-bar">
          <span className="lx-cl-readout" aria-live="polite">
            {hideNumbers ? (
              <>Challenge: count the atoms yourself, then answer below.</>
            ) : (
              <>
                <strong>{model.short}</strong> · n = {model.atomsPerCell} · CN {model.coordination} · APF {model.apf.toFixed(3)} · {model.radiusRelation}
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
          <button key={p} type="button" className={`lx-btn lx-btn--sm${scene.preset === p ? ' is-on' : ''}`} onClick={() => (setPreset(p), setPresetOverride(p))}>
            {p === 'iso' ? 'Isometric' : p[0].toUpperCase() + p.slice(1)}
          </button>
        ))}
        <button type="button" className={`lx-btn lx-btn--sm${autoOrbit ? ' is-on' : ''}`} aria-pressed={autoOrbit} onClick={() => setAutoOrbit((a) => !a)}>
          <RotateCcw size={14} /> Auto-orbit
        </button>
        <button type="button" className="lx-btn lx-btn--sm" onClick={() => setSettingsOpen((o) => !o)} aria-expanded={settingsOpen}>
          Settings
        </button>
      </div>

      {settingsOpen && (
        <div className="lx-cl-settings">
          <label>
            <span>Explode</span>
            <input type="range" min={0} max={1} step={0.05} value={scene.explode} onChange={(e) => (setExplode(Number(e.target.value)), setExplodeOverride(Number(e.target.value)))} aria-label="Explode the cell apart" />
          </label>
          <label>
            <span>Repeat</span>
            <select value={replicate.join('×')} onChange={(e) => setReplicate(e.target.value === '1×1×1' ? [1, 1, 1] : [2, 2, 2])} aria-label="Repeat the cell">
              <option value="1×1×1">1 × 1 × 1</option>
              <option value="2×2×2">2 × 2 × 2</option>
            </select>
          </label>
          <label>
            <span>Atom size</span>
            <select value={atomSize} onChange={(e) => setAtomSize(e.target.value as 'touching' | 'small')}>
              <option value="touching">Touching</option>
              <option value="small">Small (see the edges)</option>
            </select>
          </label>
          <label className="lx-cl-check">
            <input type="checkbox" checked={showLabels} onChange={(e) => setShowLabels(e.target.checked)} /> Labels
          </label>
          <label className="lx-cl-check">
            <input type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} /> Axes
          </label>
          <label className="lx-cl-check">
            <input type="checkbox" checked={showSharing} onChange={(e) => setShowSharing(e.target.checked)} /> Highlight sharing
          </label>
        </div>
      )}

      {selected && (
        <div className="lx-cl-selected" role="status">
          <strong>{selected.label}</strong>
          <span>
            {selected.role === 'corner'
              ? cell === 'hcp'
                ? 'Hexagonal corner atom — shared by 6 hexagonal prisms (3 per layer × 2 layers), counts as 1/6.'
                : 'Corner atom — shared by 8 cubic cells, counts as 1/8.'
              : selected.role === 'face'
                ? 'Face-center atom — shared by 2 cells, counts as 1/2.'
                : selected.role === 'body'
                  ? 'Body-centre atom — belongs to this cell alone, counts as 1.'
                  : 'Interior B-layer atom — sits inside the mid-plane (z = c/2) and belongs to this cell alone, counts as 1.'}
          </span>
          <button type="button" className="lx-btn lx-btn--sm lx-btn--ghost" onClick={() => setSelectedId(null)}>
            Clear
          </button>
        </div>
      )}

      <div className="lx-cl-facts">
        <dl>
          <div>
            <dt>Atoms / cell</dt>
            <dd className="lx-num">{hideNumbers ? '?' : model.atomsPerCell}</dd>
          </div>
          <div>
            <dt>Coordination</dt>
            <dd className="lx-num">{hideNumbers ? '?' : model.coordination}</dd>
          </div>
          <div>
            <dt>APF</dt>
            <dd className="lx-num">{hideNumbers ? '?' : model.apf.toFixed(3)}</dd>
          </div>
          <div>
            <dt>Radius</dt>
            <dd>{hideNumbers ? '?' : model.radiusFromA}</dd>
          </div>
          <div>
            <dt>Close-packed</dt>
            <dd>
              {model.closePackedDirection} · {model.closePackedPlane}
            </dd>
          </div>
          <div>
            <dt>Examples</dt>
            <dd>{model.examples.join(', ')}</dd>
          </div>
        </dl>
        {model.conventionNote && <p className="lx-meta">{model.conventionNote}</p>}
      </div>

      {guided && step && (
        <div className="lx-cl-guide">
          <div className="lx-cl-phases" aria-label="Learning phases">
            {PHASES.map((p, i) => (
              <button
                key={p}
                type="button"
                className={`lx-cl-phase${step.phase === p ? ' is-now' : ''}${i < PHASES.indexOf(step.phase) ? ' is-done' : ''}`}
                onClick={() => {
                  const idx = steps.findIndex((s) => s.phase === p);
                  if (idx >= 0) setStepIdx(idx);
                }}
              >
                {p === 'observe' ? 'Observe' : p === 'identify' ? 'Identify' : p === 'manipulate' ? 'Manipulate' : p === 'calculate' ? 'Calculate' : 'Practice'}
              </button>
            ))}
          </div>
          <div className="lx-cl-step">
            <span className="lx-cl-count lx-num" aria-live="polite">
              Step <b>{stepIdx + 1}</b> of {steps.length}
            </span>
            <h3 className="lx-h3">{step.title}</h3>
            <p>{step.body}</p>
            {step.check && (
              <div className="lx-cl-check-q">
                <p>
                  <strong>{step.check.q}</strong>
                </p>
                <div className="lx-cl-options" role="group" aria-label="Your answer">
                  {step.check.options.map((o, i) => (
                    <button
                      key={o}
                      type="button"
                      className={`lx-btn lx-btn--sm${answer === i ? (i === step.check!.correct ? ' is-good' : ' is-bad') : ''}`}
                      onClick={() => setAnswer(i)}
                      disabled={answer !== null}
                    >
                      {o}
                    </button>
                  ))}
                </div>
                {answer !== null && (
                  <p className="lx-meta" role="status">
                    {answer === step.check.correct ? 'Correct. ' : 'Not quite — try the Calculate step again. '}
                    {step.check.why}
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
            {steps.map((_, i) => (
              <button key={i} type="button" className={i === stepIdx ? 'is-now' : ''} onClick={() => setStepIdx(i)} aria-label={`Go to step ${i + 1}`} />
            ))}
          </span>
          <button type="button" className="lx-btn lx-btn--primary" onClick={() => go(1)} disabled={stepIdx >= steps.length - 1} aria-label="Next step">
            <span>Next</span> <ChevronRight size={16} />
          </button>
        </div>
      )}

      {!guided && (
        <p className="lx-meta">
          <Eye size={14} aria-hidden /> Explore mode: every control is live. Switch to Teach for the guided walkthrough, or Challenge to test yourself. Drag the model to orbit · scroll or pinch to zoom · tap an atom to identify it.
        </p>
      )}
      <p className="lx-meta">
        <Sparkles size={13} aria-hidden /> Direction check ({formatDirection([3, 6, 2])} hook for Milestone 2): (0,0,0) → (½, 1, ⅓) clears to [3 6 2]. Planes and directions arrive in Milestone 2 — this lab is unit cells only.
      </p>
    </section>
  );
};

export default CrystalLab;
