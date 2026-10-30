// Direction Explorer 3D scene (Milestone 2, Module B) — Studio Edition.
// A unit cube with 27 tap-able lattice points (coords 0, 1/2, 1 on each axis).
// The student taps a tail, then a head; the arrow between them IS the
// direction — its coordinates come from directionSteps(), never from the camera.
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { directionFamily, formatDirection, type Vec3 } from '../visualization/crystalMath';
import {
  Arrow,
  Axes,
  CameraRig,
  CubeEdges,
  LabControls,
  PRESET_POS,
  StudioEnvironment,
  centre,
  type CameraPreset,
} from './SceneKit';

const GRID = [0, 0.5, 1];
const POINTS: Vec3[] = [];
for (const x of GRID) for (const y of GRID) for (const z of GRID) POINTS.push([x, y, z]);

const same = (a: Vec3, b: Vec3): boolean => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];

export const DirectionScene: React.FC<{
  start: Vec3;
  end: Vec3;
  preset: CameraPreset;
  autoOrbit: boolean;
  showFamily: boolean;
  familyOf: [number, number, number];
  pickTarget: 'tail' | 'head';
  onPick: (p: Vec3) => void;
}> = ({ start, end, preset, autoOrbit, showFamily, familyOf, onPick }) => {
  const controls = useRef<OrbitControlsImpl | null>(null);
  const [failed, setFailed] = useState(false);
  const family = showFamily ? directionFamily(familyOf) : [];
  if (failed) return null;
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: PRESET_POS[preset], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      onError={() => setFailed(true)}
      aria-label="Crystallographic direction in a unit cube. Tap a point for the tail, then a point for the head."
    >
      <StudioEnvironment floorY={-0.78} />
      <CameraRig preset={preset} autoOrbit={autoOrbit} controls={controls} />
      <CubeEdges color="#64748b" opacity={0.7} radius={0.011} />
      {family.map((d, i) => {
        const head: Vec3 = [0.5 + d[0] / 2, 0.5 + d[1] / 2, 0.5 + d[2] / 2];
        const tail: Vec3 = [0.5 - d[0] / 2, 0.5 - d[1] / 2, 0.5 - d[2] / 2];
        return <Arrow key={i} tail={tail} head={head} color="#64748b" width={1.4} opacity={0.32} />;
      })}
      <Arrow
        tail={start}
        head={end}
        color="#be123c"
        width={2.8}
        label={formatDirection(familyOf)}
      />
      {POINTS.map((p) => {
        const isTail = same(p, start);
        const isHead = same(p, end);
        const pos = centre(p);
        return (
          <mesh
            key={p.join(',')}
            position={pos}
            scale={isTail || isHead ? 1.45 : 1}
            onClick={(e) => {
              e.stopPropagation();
              onPick(p);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              document.body.style.cursor = '';
            }}
          >
            <sphereGeometry args={[0.044, 24, 20]} />
            <meshPhysicalMaterial
              color={isTail ? '#e11d48' : isHead ? '#d97706' : '#94a3b8'}
              emissive={isTail ? '#be123c' : isHead ? '#b45309' : '#000000'}
              emissiveIntensity={isTail || isHead ? 0.35 : 0}
              roughness={0.2}
              metalness={0.18}
              clearcoat={0.75}
            />
            {(isTail || isHead) && (
              <Html
                position={[0, isHead ? 0.12 : -0.12, 0]}
                center
                className="lx-cl-label"
                zIndexRange={[10, 0]}
              >
                <span className={isTail ? 'is-tail' : 'is-head'}>
                  {isTail ? 'tail' : 'head'} ({p.join(', ')})
                </span>
              </Html>
            )}
          </mesh>
        );
      })}
      <Axes />
      <LabControls controls={controls} autoOrbit={autoOrbit} />
    </Canvas>
  );
};
