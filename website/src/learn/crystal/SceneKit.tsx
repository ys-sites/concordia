// Shared 3D kit for the Crystal Lab scenes (Milestone 2).
// Same camera, axes and cube as the M1 UnitCellScene; the maths still lives
// only in crystalMath.ts. Fractional coordinates (0…1) are centred here by
// subtracting (0.5, 0.5, 0.5), so the cube sits at the origin.
import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Line, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { CUBE_EDGES, type Vec3 } from '../visualization/crystalMath';

export type CameraPreset = 'iso' | 'front' | 'top' | 'side';

export const centre = (p: Vec3): Vec3 => [p[0] - 0.5, p[1] - 0.5, p[2] - 0.5];
export const uncentre = (p: Vec3): Vec3 => [p[0] + 0.5, p[1] + 0.5, p[2] + 0.5];

export const AXIS_COLORS = { x: '#f87171', y: '#4ade80', z: '#60a5fa' };

export const PRESET_POS: Record<CameraPreset, Vec3> = {
  iso: [2.4, 1.9, 2.4],
  front: [0, 0.15, 3.4],
  top: [0, 3.4, 0.001],
  side: [3.4, 0.15, 0],
};

export const CameraRig: React.FC<{ preset: CameraPreset; autoOrbit: boolean; controls: React.RefObject<OrbitControlsImpl | null> }> = ({ preset, autoOrbit, controls }) => {
  const { camera } = useThree();
  const target = useRef<{ pos: THREE.Vector3; t: number } | null>(null);
  const lastPreset = useRef(preset);
  useEffect(() => {
    if (lastPreset.current === preset) return;
    lastPreset.current = preset;
    target.current = { pos: new THREE.Vector3(...PRESET_POS[preset]), t: 0 };
  }, [preset]);
  useFrame((_, dt) => {
    const c = controls.current;
    if (c) c.autoRotate = autoOrbit;
    if (!target.current) return;
    const k = 1 - Math.exp(-dt / 0.22);
    camera.position.lerp(target.current.pos, k);
    if (camera.position.distanceTo(target.current.pos) < 0.01) target.current = null;
  });
  return null;
};

export const Axes: React.FC = () => {
  const len = 1.5;
  return (
    <group>
      {(['x', 'y', 'z'] as const).map((ax) => {
        const end: Vec3 = ax === 'x' ? [len, 0, 0] : ax === 'y' ? [0, len, 0] : [0, 0, len];
        return (
          <group key={ax}>
            <Line points={[[0, 0, 0], end]} color={AXIS_COLORS[ax]} lineWidth={1.5} transparent opacity={0.9} />
            <Html distanceFactor={6} position={end} center className="lx-cl-axis" zIndexRange={[10, 0]}>
              <span style={{ color: AXIS_COLORS[ax] }}>{ax}</span>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

export const CubeEdges: React.FC<{ color?: string; opacity?: number }> = ({ color = '#94a3b8', opacity = 0.95 }) => (
  <group>
    {CUBE_EDGES.map(([a, b], i) => (
      <Line key={i} points={[centre(a), centre(b)]} color={color} lineWidth={1.25} transparent opacity={opacity} />
    ))}
  </group>
);

/** Shared orbit controls: damping on, auto-orbit off under reduced motion. */
export const LabControls: React.FC<{ controls: React.MutableRefObject<OrbitControlsImpl | null>; autoOrbit: boolean }> = ({ controls, autoOrbit }) => {
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enableDamping
      dampingFactor={0.12}
      autoRotate={autoOrbit && !reduced}
      autoRotateSpeed={0.9}
      minDistance={1.4}
      maxDistance={8}
    />
  );
};

/** An arrow from tail to head (fractional coords), drawn as a line + cone. */
export const Arrow: React.FC<{ tail: Vec3; head: Vec3; color: string; width?: number; opacity?: number }> = ({ tail, head, color, width = 2.5, opacity = 1 }) => {
  const t = centre(tail);
  const h = centre(head);
  const dir = new THREE.Vector3(h[0] - t[0], h[1] - t[1], h[2] - t[2]);
  const len = dir.length();
  if (len < 1e-9) return null;
  const mid = new THREE.Vector3((t[0] + h[0]) / 2, (t[1] + h[1]) / 2, (t[2] + h[2]) / 2);
  const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  const tip = new THREE.Vector3(h[0], h[1], h[2]);
  return (
    <group>
      <Line points={[t, h]} color={color} lineWidth={width} transparent opacity={opacity} />
      <mesh position={tip} quaternion={quat}>
        <coneGeometry args={[0.05, 0.16, 16]} />
        <meshStandardMaterial color={color} transparent opacity={opacity} />
      </mesh>
      <Html distanceFactor={6} position={[mid.x, mid.y, mid.z]} center className="lx-cl-label" zIndexRange={[10, 0]}>
        <span>direction</span>
      </Html>
    </group>
  );
};
