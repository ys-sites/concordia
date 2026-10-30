// Direction Explorer 3D scene (Milestone 2, Module B).
// A unit cube with 27 tap-able lattice points (coords 0, 1/2, 1 on each axis).
// The student taps a tail, then a head; the arrow between them IS the
// direction — its coordinates come from directionSteps(), never from the camera.
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { directionFamily, type Vec3 } from '../visualization/crystalMath';
import { Arrow, Axes, CameraRig, CubeEdges, LabControls, PRESET_POS, centre, type CameraPreset } from './SceneKit';

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
}> = ({ start, end, preset, autoOrbit, showFamily, familyOf, pickTarget, onPick }) => {
  const controls = useRef<OrbitControlsImpl | null>(null);
  const [failed, setFailed] = useState(false);
  const family = showFamily ? directionFamily(familyOf) : [];
  if (failed) return null;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: PRESET_POS[preset], fov: 42 }}
      onCreated={({ gl }) => gl.setClearColor('#0f172a')}
      onError={() => setFailed(true)}
      aria-label="Crystallographic direction in a unit cube. Tap a point for the tail, then a point for the head."
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} />
      <CameraRig preset={preset} autoOrbit={autoOrbit} controls={controls} />
      <CubeEdges />
      {family.map((d, i) => {
        const head: Vec3 = [0.5 + d[0] / 2, 0.5 + d[1] / 2, 0.5 + d[2] / 2];
        const tail: Vec3 = [0.5 - d[0] / 2, 0.5 - d[1] / 2, 0.5 - d[2] / 2];
        return <Arrow key={i} tail={tail} head={head} color="#94a3b8" width={1} opacity={0.28} />;
      })}
      <Arrow tail={start} head={end} color="#b3294a" />
      {POINTS.map((p) => {
        const isTail = same(p, start);
        const isHead = same(p, end);
        const pos = centre(p);
        return (
          <mesh
            key={p.join(',')}
            position={pos}
            scale={isTail || isHead ? 1.5 : 1}
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
            <sphereGeometry args={[0.045, 16, 12]} />
            <meshStandardMaterial
              color={isTail ? '#e11d48' : isHead ? '#f59e0b' : '#cbd5e1'}
              emissive={isTail || isHead ? '#b3294a' : '#000000'}
              emissiveIntensity={isTail || isHead ? 0.4 : 0}
              roughness={0.35}
            />
            {(isTail || isHead) && (
              <Html distanceFactor={6} position={[0, 0.14, 0]} center className="lx-cl-label" zIndexRange={[10, 0]}>
                <span>
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
