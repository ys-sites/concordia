import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Box,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Expand,
  Pause,
  Play,
  RotateCcw,
  Shrink,
  Sparkles,
} from 'lucide-react';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { MathText } from '../../utils/mathRenderer';
import { CameraRig, LabControls, PRESET_POS, StudioEnvironment, type CameraPreset } from '../crystal/SceneKit';
import CrystalLab from '../crystal/CrystalLab';
import DirectionLab from '../crystal/DirectionLab';
import PlaneLab from '../crystal/PlaneLab';
import { getVisual3DTopic, VISUAL_3D_TOPICS } from './catalog';
import { Materials2DGraph, Materials3DGroup } from './Materials3DCanvas';
import { Indu3DGroup } from './Indu3DCanvas';
import { Engr213LiveGraph, Engr213SimGroup } from './Engr213SimCanvas';
import { CoolingGraph } from './CoolingGraph';
import { Miae215Group } from './Miae215Canvas';
import { cleanNotation, getTutorGuideForTopic } from './tutorGuideData';
import '../crystal/crystalLab.css';
import './guidedLearner.css';

export const Visual3DLearner: React.FC<{ toolId: string }> = ({ toolId }) => {
  const spec = useMemo(() => getVisual3DTopic(toolId) ?? VISUAL_3D_TOPICS[0], [toolId]);

  const initialValues = useMemo(() => {
    const map: Record<string, number> = {};
    for (const c of spec.controls) map[c.key] = c.defaultValue;
    return map;
  }, [spec]);

  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const [preset, setPreset] = useState<CameraPreset>('iso');
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [guidedIdx, setGuidedIdx] = useState(0);
  const [partIdx, setPartIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
  );
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  useEffect(() => {
    setValues(initialValues);
    setAnswer(null);
    setGuidedIdx(0);
    setPartIdx(0);
    setIsPlaying(false);
  }, [initialValues]);

  const guide = useMemo(() => getTutorGuideForTopic(spec, values), [spec, values]);
  const cooling = spec.id === '3d:newton-cooling';
  const hasMechanicalGraph =
    spec.courseId === 'MIAE221' &&
    (spec.id === '3d:stress-strain' ||
      spec.id === '3d:elastic-plastic' ||
      spec.id === '3d:necking-fracture' ||
      spec.id === '3d:true-vs-engineering');
  const hasGraph = cooling || spec.courseId === 'ENGR213' || hasMechanicalGraph;
  const industrialMotionKey: Record<string, string> = {
    '3d:fixed-position-layout': 'craneAngle',
    '3d:material-handling': 'craneX',
    '3d:manufacturing-processes': 'cyclePos',
    '3d:bom-exploded': 'explode',
  };
  const motionControl = spec.controls.find((control) => control.key === industrialMotionKey[spec.id]);
  const industrialPlayable = spec.courseId !== 'INDU211' || Boolean(motionControl) || ['3d:product-layout', '3d:cellular-layout', '3d:hybrid-layout'].includes(spec.id);
  const playKey = spec.courseId === 'INDU211' ? motionControl?.key : guide.playConfig.controlKey;
  const playMin = spec.courseId === 'INDU211' ? motionControl?.min : guide.playConfig.min;
  const playMax = spec.courseId === 'INDU211' ? motionControl?.max : guide.playConfig.max;
  const playDuration = guide.playConfig.durationSec;

  // Play / Pause animation loop for primary parameter / time slider
  useEffect(() => {
    if (!isPlaying || reduceMotion || playKey === undefined || playMin === undefined || playMax === undefined) return;
    const controlKey = playKey, min = playMin, max = playMax, durationSec = playDuration;
    const span = Math.max(0.001, max - min);
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setValues((prev) => {
        const cur = prev[controlKey] ?? min;
        let next = cur + (span / Math.max(2, durationSec)) * dt;
        if (next > max) next = min;
        return { ...prev, [controlKey]: Number(next.toFixed(3)) };
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying, reduceMotion, playKey, playMin, playMax, playDuration]);

  // Delegate Topics 1, 7, 8 to the dedicated multi-phase Crystal/Direction/Plane labs
  if (spec.id === '3d:crystal-structures' || toolId === 'crystal-lab:unit-cells') {
    return <CrystalLab />;
  }
  if (spec.id === '3d:directions' || toolId === 'crystal-lab:directions') {
    return <DirectionLab />;
  }
  if (spec.id === '3d:planes' || toolId === 'crystal-lab:planes') {
    return <PlaneLab />;
  }

  const primaryCtrl =
    spec.controls.find((c) => c.key === guide.playConfig.controlKey) ?? spec.controls[0] ?? null;
  const primaryVal = primaryCtrl ? values[primaryCtrl.key] ?? primaryCtrl.defaultValue : 0;
  const activeStep = guide.guidedSteps[Math.min(guidedIdx, guide.guidedSteps.length - 1)];
  const activePart = guide.modelParts[Math.min(partIdx, guide.modelParts.length - 1)];

  return (
    <section
      className={`lx-cl lx-guided-tutor${fullscreen ? ' is-full' : ''}${reduceMotion ? ' is-reduced-motion' : ''}`}
      aria-label={`3D Visual Learner: ${spec.title}`}
    >
      {/* 1. Plain-Language Introduction: What you are looking at & why it matters */}
      <header className="lx-cl-head lx-tutor-banner">
        <div className="lx-tutor-banner__top">
          <span className="lx-cl-fig">
            <Box size={16} aria-hidden /> 3D Visual Learner #{spec.num} · {spec.sectionTitle}
          </span>
          <span className="lx-tutor-live-pill" aria-live="polite">
            {guide.liveReadoutBadge}
          </span>
        </div>
        <h2 className="lx-h2">3D Visual Learner: {spec.title}</h2>
        <p className="lx-tutor-plain">{guide.plainIntro}</p>
        <p className="lx-tutor-why">
          <strong>Why this matters:</strong> {guide.whyItMatters}
        </p>
      </header>

      {/* 2. Side-by-Side Stage & Compact Synchronized Graph */}
      <div className={`lx-guided-stage-grid${hasGraph ? ' has-graph' : ''}`}>
        <div className="lx-cl-stage">
          <Canvas
            dpr={[1, 2]}
            camera={{ position: PRESET_POS[preset], fov: 40 }}
            gl={{ alpha: true, antialias: true }}
            fallback={
              <p className="lx-guided-hint">
                The 3D view is unavailable in this browser. Use the controls, graph, and step-by-step guide below to explore the topic.
              </p>
            }
            aria-label={`3D interactive simulation for ${spec.title}`}
          >
            <StudioEnvironment floorY={-0.78} />
            <CameraRig preset={preset} autoOrbit={autoOrbit && !reduceMotion} controls={controlsRef} />
            {spec.courseId === 'MIAE221' && <Materials3DGroup topicId={spec.id} values={values} />}
            {spec.courseId === 'INDU211' && <Indu3DGroup topicId={spec.id} values={values} playing={isPlaying && !reduceMotion} />}
            {spec.courseId === 'ENGR213' && <Engr213SimGroup topicId={spec.id} values={values} />}
            {spec.courseId === 'MIAE215' && <Miae215Group topicId={spec.id} values={values} />}
            <LabControls controls={controlsRef} autoOrbit={autoOrbit && !reduceMotion} />
          </Canvas>
          <div className="lx-cl-stage-bar">
            <span className="lx-cl-readout" aria-live="polite">
              <strong>{spec.title}</strong> · {guide.liveReadoutBadge}
            </span>
            <button
              type="button"
              className="lx-icon-btn lx-cl-fs"
              onClick={() => setFullscreen((f) => !f)}
              aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {fullscreen ? <Shrink size={18} /> : <Expand size={18} />}
            </button>
          </div>
        </div>

        {hasGraph && (
          <div className="lx-guided-graph-col">
            {cooling ? (
              <CoolingGraph values={values} />
            ) : spec.courseId === 'ENGR213' ? (
              <Engr213LiveGraph topicId={spec.id} values={values} />
            ) : (
              <Materials2DGraph topicId={spec.id} values={values} />
            )}
          </div>
        )}
      </div>

      {/* Primary Interactive Bar: Play/Pause + Primary Slider + Reset + Reduce Motion */}
      {primaryCtrl && (
        <div className="lx-tutor-playbar" role="region" aria-label="Primary simulation control">
          {!reduceMotion && industrialPlayable && (
            <button
              type="button"
              className={`lx-btn lx-btn--sm ${isPlaying ? 'lx-btn--primary' : ''}`}
              onClick={() => setIsPlaying((p) => !p)}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Pause' : 'Play simulation'}</span>
            </button>
          )}
          <label className="lx-tutor-playbar__slider">
            <span>
              <strong>{cleanNotation(primaryCtrl.label)}:</strong>{' '}
              {Number.isInteger(primaryCtrl.step) ? primaryVal.toFixed(0) : primaryVal.toFixed(1)}
              {primaryCtrl.unit ? ` ${primaryCtrl.unit}` : ''}
            </span>
            <input
              type="range"
              min={primaryCtrl.min}
              max={primaryCtrl.max}
              step={primaryCtrl.step}
              value={primaryVal}
              onChange={(e) => {
                setIsPlaying(false);
                setValues((prev) => ({ ...prev, [primaryCtrl.key]: Number(e.target.value) }));
              }}
            />
          </label>
          <button
            type="button"
            className="lx-btn lx-btn--sm"
            onClick={() => {
              setIsPlaying(false);
              setValues(initialValues);
              setAnswer(null);
            }}
          >
            Reset
          </button>
          <label className="lx-tutor-motion-toggle">
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => {
                setReduceMotion(e.target.checked);
                if (e.target.checked) {
                  setIsPlaying(false);
                  setAutoOrbit(false);
                }
              }}
            />
            <span>Reduce motion</span>
          </label>
        </div>
      )}

      {/* 3. Guided One-at-a-Time Interaction Walkthrough */}
      {activeStep && (
        <div className="lx-tutor-walkthrough" role="region" aria-label="Guided step-by-step interaction">
          <div className="lx-tutor-walkthrough__head">
            <div className="lx-tutor-step-tabs" role="tablist" aria-label="Guided interaction steps">
              {guide.guidedSteps.map((s, idx) => (
                <button
                  key={s.stepNum}
                  type="button"
                  role="tab"
                  aria-selected={guidedIdx === idx}
                  className={`lx-tutor-step-tab${guidedIdx === idx ? ' is-active' : ''}`}
                  onClick={() => {
                    setGuidedIdx(idx);
                    setIsPlaying(false);
                    setValues((prev) => ({ ...prev, ...s.applyValues }));
                  }}
                >
                  Step {s.stepNum}: {s.title}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="lx-btn lx-btn--sm lx-btn--primary"
              onClick={() => {
                setIsPlaying(false);
                setValues((prev) => ({ ...prev, ...activeStep.applyValues }));
              }}
            >
              <Sparkles size={13} /> Apply this step to 3D model
            </button>
          </div>

          <div className="lx-tutor-step-grid">
            <div className="lx-tutor-step-card">
              <span className="lx-tutor-step-kicker">1. What to change</span>
              <p>{activeStep.whatToChange}</p>
            </div>
            <div className="lx-tutor-step-card">
              <span className="lx-tutor-step-kicker">2. What to observe</span>
              <p>{activeStep.whatToObserve}</p>
            </div>
            <div className="lx-tutor-step-card">
              <span className="lx-tutor-step-kicker">3. Why the result changes</span>
              <p>{activeStep.whyItChanges}</p>
            </div>
          </div>

          <div className="lx-tutor-step-nav">
            <button
              type="button"
              className="lx-btn lx-btn--sm"
              disabled={guidedIdx === 0}
              onClick={() => {
                const next = Math.max(0, guidedIdx - 1);
                setGuidedIdx(next);
                setIsPlaying(false);
                setValues((prev) => ({ ...prev, ...guide.guidedSteps[next].applyValues }));
              }}
            >
              <ChevronLeft size={14} /> Previous step
            </button>
            <span className="lx-meta">
              Guided Interaction {guidedIdx + 1} of {guide.guidedSteps.length}
            </span>
            <button
              type="button"
              className="lx-btn lx-btn--sm"
              disabled={guidedIdx >= guide.guidedSteps.length - 1}
              onClick={() => {
                const next = Math.min(guide.guidedSteps.length - 1, guidedIdx + 1);
                setGuidedIdx(next);
                setIsPlaying(false);
                setValues((prev) => ({ ...prev, ...guide.guidedSteps[next].applyValues }));
              }}
            >
              Next step <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* 2B. Progressive Disclosure: Introduce Important Parts of the Model One at a Time */}
      <details className="lx-guided-details" open={cooling}>
        <summary>Parts of the 3D model (what each part means, symbol &amp; unit)</summary>
        {activePart && (
          <div className="lx-tutor-parts">
            <div className="lx-tutor-part-pills" role="tablist" aria-label="Parts of the 3D model">
              {guide.modelParts.map((part, i) => (
                <button
                  key={part.partName}
                  type="button"
                  role="tab"
                  aria-selected={partIdx === i}
                  className={`lx-tutor-part-pill${partIdx === i ? ' is-active' : ''}`}
                  onClick={() => setPartIdx(i)}
                >
                  Part {i + 1}: {part.partName}
                </button>
              ))}
            </div>
            <div className="lx-tutor-part-card">
              <div className="lx-tutor-part-card__head">
                <strong>{activePart.partName}</strong>
                <span className="lx-tutor-part-symbol">{activePart.symbolAndUnit}</span>
              </div>
              <p className="lx-meta">
                <strong>In the 3D scene:</strong> {activePart.visualCue}
              </p>
              <p>{activePart.realMeaning}</p>
            </div>
          </div>
        )}
      </details>

      {/* 4. Worked Example & Step-by-Step Calculation */}
      <details className="lx-guided-details">
        <summary>Show the calculation (step-by-step worked example)</summary>
        <div className="lx-tutor-calc">
          <p className="lx-tutor-calc__problem">
            <strong>Problem:</strong> {guide.workedCalculation.problemStatement}
          </p>
          <p className="lx-tutor-calc__live">{guide.workedCalculation.liveSummary}</p>
          <ol className="lx-tutor-calc__steps">
            {guide.workedCalculation.steps.map((st, idx) => (
              <li key={idx}>
                <strong>{st.label}:</strong> {st.detail}
                {st.mathTex && (
                  <div className="lx-tutor-calc__math">
                    <MathText text={`$${st.mathTex}$`} />
                  </div>
                )}
              </li>
            ))}
          </ol>
          <p className="lx-tutor-calc__conclusion">
            <strong>Takeaway:</strong> {guide.workedCalculation.conclusion}
          </p>
        </div>
      </details>

      {/* Progressive Disclosure: All Model Parameters & Presets */}
      {spec.controls.length > 0 && (
        <details className="lx-guided-details">
          <summary>Adjust {cooling ? 'temperatures and cooling rate' : 'all model parameters'}</summary>
          {spec.presets.length > 0 && (
            <div className="lx-cl-cells" role="group" aria-label="Interactive presets" style={{ marginBottom: 10 }}>
              {spec.presets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  className="lx-cl-cell"
                  onClick={() => {
                    setIsPlaying(false);
                    setValues((prev) => ({ ...prev, ...p.values }));
                    setAnswer(null);
                  }}
                >
                  <strong>{cleanNotation(p.label)}</strong>
                  <span>{cleanNotation(p.note)}</span>
                </button>
              ))}
            </div>
          )}
          <div className="lx-cl-settings" aria-label="Interactive simulation controls">
            {spec.controls.map((ctrl) => {
              const v = values[ctrl.key] ?? ctrl.defaultValue;
              return (
                <label key={ctrl.key} style={{ flex: '1 1 220px', justifyContent: 'space-between' }}>
                  <span>
                    <strong>{cleanNotation(ctrl.label)}:</strong>{' '}
                    {Number.isInteger(ctrl.step) ? v : v.toFixed(2)}
                    {ctrl.unit ? ` ${ctrl.unit}` : ''}
                  </span>
                  <input
                    type="range"
                    min={ctrl.min}
                    max={ctrl.max}
                    step={ctrl.step}
                    value={v}
                    onChange={(e) => {
                      setIsPlaying(false);
                      setValues((prev) => ({ ...prev, [ctrl.key]: Number(e.target.value) }));
                    }}
                  />
                </label>
              );
            })}
          </div>
        </details>
      )}

      {/* Progressive Disclosure: Camera Options */}
      <details className="lx-guided-details">
        <summary>Camera options</summary>
        <div className="lx-cl-cams" role="group" aria-label="Camera view">
          {(['iso', 'front', 'top', 'side'] as CameraPreset[]).map((p) => (
            <button
              key={p}
              type="button"
              className={`lx-btn lx-btn--sm${preset === p ? ' is-on' : ''}`}
              onClick={() => setPreset(p)}
            >
              {p === 'iso' ? 'Isometric' : p[0].toUpperCase() + p.slice(1)}
            </button>
          ))}
          <button
            type="button"
            className={`lx-btn lx-btn--sm${autoOrbit ? ' is-on' : ''}`}
            aria-pressed={autoOrbit}
            disabled={reduceMotion}
            onClick={() => setAutoOrbit((a) => !a)}
          >
            <RotateCcw size={14} /> Auto-orbit
          </button>
        </div>
      </details>

      {/* 5. Short Prediction Question & Diagnostic Feedback */}
      <div className="lx-cl-guide">
        <div className="lx-cl-step">
          <div className="lx-cl-check-q" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
            <p>
              <strong>
                <CheckCircle2 size={15} style={{ verticalAlign: 'text-bottom', marginRight: 6 }} />
                Prediction Question: {cleanNotation(spec.check.q)}
              </strong>
            </p>
            <div className="lx-cl-options" role="group" aria-label="Check your understanding">
              {spec.check.options.map((opt, idx) => (
                <button
                  key={opt}
                  type="button"
                  className={`lx-btn lx-btn--sm${answer === idx ? (idx === spec.check.correct ? ' is-good' : ' is-bad') : ''}`}
                  onClick={() => setAnswer(idx)}
                >
                  {cleanNotation(opt)}
                </button>
              ))}
            </div>
            {answer !== null && (
              <p className="lx-meta" role="status" style={{ marginTop: 8 }}>
                <strong>
                  {answer === spec.check.correct
                    ? 'Correct! '
                    : 'Not quite — check how the model and formula behave: '}
                </strong>
                {cleanNotation(spec.check.why)}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visual3DLearner;
