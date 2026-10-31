import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, CheckCircle2, Expand, RotateCcw, Shrink } from 'lucide-react';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { CameraRig, LabControls, PRESET_POS, StudioEnvironment, type CameraPreset } from '../crystal/SceneKit';
import CrystalLab from '../crystal/CrystalLab';
import DirectionLab from '../crystal/DirectionLab';
import PlaneLab from '../crystal/PlaneLab';
import { getVisual3DTopic, VISUAL_3D_TOPICS } from './catalog';
import { Materials2DGraph, Materials3DGroup } from './Materials3DCanvas';
import { Indu3DGroup } from './Indu3DCanvas';
import { Engr213LiveGraph, Engr213SimGroup } from './Engr213SimCanvas';
import { Miae215Group } from './Miae215Canvas';
import '../crystal/crystalLab.css';

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
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  useEffect(() => {
    setValues(initialValues);
    setAnswer(null);
  }, [initialValues]);

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

  return (
    <section className={`lx-cl${fullscreen ? ' is-full' : ''}`} aria-label={`3D Visual Learner: ${spec.title}`}>
      <header className="lx-cl-head">
        <span className="lx-cl-fig">
          <Box size={16} aria-hidden /> 3D Visual Learner #{spec.num} · {spec.sectionTitle}
        </span>
        <h2 className="lx-h2">3D Visual Learner: {spec.title}</h2>
        <p className="lx-meta"><MathText text={spec.subtitle} autoMath /> — <MathText text={spec.summary} autoMath /></p>
      </header>

      {spec.presets.length > 0 && (
        <div className="lx-cl-cells" role="group" aria-label="Interactive presets">
          {spec.presets.map((p) => (
            <button
              key={p.label}
              type="button"
              className="lx-cl-cell"
              onClick={() => {
                setValues((prev) => ({ ...prev, ...p.values }));
                setAnswer(null);
              }}
            >
              <strong><MathText text={p.label} autoMath /></strong>
              <span><MathText text={p.note} autoMath /></span>
            </button>
          ))}
        </div>
      )}

      <div className="lx-cl-stage">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: PRESET_POS[preset], fov: 40 }}
          gl={{ alpha: true, antialias: true }}
          aria-label={`3D interactive simulation for ${spec.title}`}
        >
          <StudioEnvironment floorY={-0.78} />
          <CameraRig preset={preset} autoOrbit={autoOrbit} controls={controlsRef} />
          {spec.courseId === 'MIAE221' && <Materials3DGroup topicId={spec.id} values={values} />}
          {spec.courseId === 'INDU211' && <Indu3DGroup topicId={spec.id} values={values} />}
          {spec.courseId === 'ENGR213' && <Engr213SimGroup topicId={spec.id} values={values} />}
          {spec.courseId === 'MIAE215' && <Miae215Group topicId={spec.id} values={values} />}
          <LabControls controls={controlsRef} autoOrbit={autoOrbit} />
        </Canvas>
        <div className="lx-cl-stage-bar">
          <span className="lx-cl-readout" aria-live="polite">
            <strong>{spec.title}</strong> · {spec.subtitle} · Drag to orbit, scroll to zoom
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
          onClick={() => setAutoOrbit((a) => !a)}
        >
          <RotateCcw size={14} /> Auto-orbit
        </button>
      </div>

      {spec.controls.length > 0 && (
        <div className="lx-cl-settings" aria-label="Interactive simulation controls">
          {spec.controls.map((ctrl) => {
            const v = values[ctrl.key] ?? ctrl.defaultValue;
            return (
              <label key={ctrl.key} style={{ flex: '1 1 220px', justifyContent: 'space-between' }}>
                <span>
                  <strong><MathText text={ctrl.label} autoMath />:</strong> {Number.isInteger(ctrl.step) ? v : v.toFixed(2)}
                  {ctrl.unit ? ` ${ctrl.unit}` : ''}
                </span>
                <input
                  type="range"
                  min={ctrl.min}
                  max={ctrl.max}
                  step={ctrl.step}
                  value={v}
                  onChange={(e) => setValues((prev) => ({ ...prev, [ctrl.key]: Number(e.target.value) }))}
                />
              </label>
            );
          })}
        </div>
      )}

      {/* Synchronized Live 2D Graphs for Mechanical Testing (17–20) & ENGR 213 ODEs (34–38) */}
      {spec.courseId === 'MIAE221' && <Materials2DGraph topicId={spec.id} values={values} />}
      {spec.courseId === 'ENGR213' && <Engr213LiveGraph topicId={spec.id} values={values} />}

      <div className="lx-cl-guide">
        <div className="lx-cl-step">
          <h3 className="lx-h3">Core Governing Equation &amp; Visual Check</h3>
          <div className="lx-cl-formula" style={{ marginBottom: 12 }}>
            <MathBlock tex={spec.formula} />
          </div>
          <div className="lx-cl-check-q" style={{ marginTop: 8, paddingTop: 10 }}>
            <p>
              <strong>
                <CheckCircle2 size={15} style={{ verticalAlign: 'text-bottom', marginRight: 6 }} />
                <MathText text={spec.check.q} autoMath />
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
                  <MathText text={opt} />
                </button>
              ))}
            </div>
            {answer !== null && (
              <p className="lx-meta" role="status" style={{ marginTop: 8 }}>
                <strong>{answer === spec.check.correct ? 'Correct! ' : 'Review: '}</strong>
                <MathText text={spec.check.why} />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visual3DLearner;

