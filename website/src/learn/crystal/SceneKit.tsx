// Shared 3D Studio Kit for the Crystal Lab & 3D Visual Learner scenes.
// Provides studio-grade 3-point + hemisphere lighting, 3D cylindrical tube
// primitives for crystal edges, axes, and vectors, a studio ground pedestal,
// and clean non-overlapping pill badges.
import React, { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { CUBE_EDGES, type Vec3 } from '../visualization/crystalMath';

export type CameraPreset = 'iso' | 'front' | 'top' | 'side';

export const centre = (p: Vec3): Vec3 => [p[0] - 0.5, p[1] - 0.5, p[2] - 0.5];
export const uncentre = (p: Vec3): Vec3 => [p[0] + 0.5, p[1] + 0.5, p[2] + 0.5];

export const AXIS_COLORS = { x: '#dc2626', y: '#16a34a', z: '#2563eb' };

export const PRESET_POS: Record<CameraPreset, Vec3> = {
  iso: [2.35, 1.85, 2.45],
  front: [0, 0.15, 3.3],
  top: [0, 3.3, 0.001],
  side: [3.3, 0.15, 0],
};

/** Studio lighting rig + subtle architectural ground shadow catcher */
export const StudioEnvironment: React.FC<{ floorY?: number; showFloor?: boolean }> = ({
  floorY = -0.82,
  showFloor = true,
}) => {
  const { gl } = useThree();
  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.08;
  }, [gl]);

  return (
    <group>
      <hemisphereLight args={['#ffffff', '#cbd5e1', 1.15]} />
      <directionalLight position={[4.5, 7, 5]} intensity={1.55} color="#fffaf0" />
      <directionalLight position={[-5, 3, -4]} intensity={0.65} color="#e0f2fe" />
      <pointLight position={[0, -3, 2]} intensity={0.35} color="#f8fafc" />
      {showFloor && (
        <group position={[0, floorY, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[2.2, 48]} />
            <meshBasicMaterial color="#e2e8f0" transparent opacity={0.45} />
          </mesh>
          <gridHelper args={[3.2, 16, '#cbd5e1', '#e2e8f0']} position={[0, 0.002, 0]} />
        </group>
      )}
    </group>
  );
};

/** Renders a smooth 3D cylindrical rod between two 3D points */
export const CylinderRod: React.FC<{
  start: Vec3;
  end: Vec3;
  radius?: number;
  color?: string;
  opacity?: number;
  metalness?: number;
  roughness?: number;
}> = ({
  start,
  end,
  radius = 0.014,
  color = '#64748b',
  opacity = 1,
  metalness = 0.25,
  roughness = 0.3,
}) => {
  const { mid, quat, len } = useMemo(() => {
    const a = new THREE.Vector3(...start);
    const b = new THREE.Vector3(...end);
    const dir = b.clone().sub(a);
    const l = dir.length();
    const m = a.clone().add(b).multiplyScalar(0.5);
    const q = new THREE.Quaternion();
    if (l > 1e-6) {
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    }
    return { mid: m, quat: q, len: l };
  }, [start[0], start[1], start[2], end[0], end[1], end[2]]);

  if (len < 1e-6) return null;
  return (
    <mesh position={mid} quaternion={quat}>
      <cylinderGeometry args={[radius, radius, len, 16]} />
      <meshPhysicalMaterial
        color={color}
        transparent={opacity < 1}
        opacity={opacity}
        metalness={metalness}
        roughness={roughness}
        clearcoat={0.5}
      />
    </mesh>
  );
};

export const CameraRig: React.FC<{
  preset: CameraPreset;
  autoOrbit: boolean;
  controls: React.RefObject<OrbitControlsImpl | null>;
}> = ({ preset, autoOrbit, controls }) => {
  const { camera } = useThree();
  const target = useRef<{ pos: THREE.Vector3; t: number } | null>(null);
  const lastPreset = useRef(preset);
  useEffect(() => {
    if (lastPreset.current === preset) return;
    lastPreset.current = preset;
    target.current = { pos: new THREE.Vector3(...PRESET_POS[preset]), t: 0 };
  }, [preset]);
  useEffect(() => {
    const orbit = controls.current;
    if (!orbit) return;
    // A manual orbit or zoom takes priority over a camera-preset transition.
    const stopTransition = () => { target.current = null; };
    orbit.addEventListener('start', stopTransition);
    return () => orbit.removeEventListener('start', stopTransition);
  }, [controls]);
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

/** Coordinate axes rendered from the crystallographic origin (-0.5, -0.5, -0.5) */
export const Axes: React.FC<{ origin?: Vec3 }> = ({ origin = [-0.5, -0.5, -0.5] }) => {
  const len = 1.32;
  return (
    <group>
      {(['x', 'y', 'z'] as const).map((ax) => {
        const end: Vec3 = [
          origin[0] + (ax === 'x' ? len : 0),
          origin[1] + (ax === 'y' ? len : 0),
          origin[2] + (ax === 'z' ? len : 0),
        ];
        const tipOffset: Vec3 = [
          end[0] + (ax === 'x' ? 0.12 : 0),
          end[1] + (ax === 'y' ? 0.12 : 0),
          end[2] + (ax === 'z' ? 0.12 : 0),
        ];
        const dir = new THREE.Vector3(
          ax === 'x' ? 1 : 0,
          ax === 'y' ? 1 : 0,
          ax === 'z' ? 1 : 0,
        );
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        return (
          <group key={ax}>
            <CylinderRod start={origin} end={end} radius={0.012} color={AXIS_COLORS[ax]} opacity={0.85} />
            <mesh position={end} quaternion={quat}>
              <coneGeometry args={[0.032, 0.09, 16]} />
              <meshPhysicalMaterial color={AXIS_COLORS[ax]} roughness={0.25} clearcoat={0.6} />
            </mesh>
            <Html position={tipOffset} center className="lx-cl-axis" zIndexRange={[10, 0]}>
              <span style={{ borderColor: AXIS_COLORS[ax], color: AXIS_COLORS[ax] }}>{ax}</span>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

export const CubeEdges: React.FC<{ color?: string; opacity?: number; radius?: number }> = ({
  color = '#64748b',
  opacity = 0.75,
  radius = 0.012,
}) => (
  <group>
    {CUBE_EDGES.map(([a, b], i) => (
      <CylinderRod key={i} start={centre(a)} end={centre(b)} color={color} opacity={opacity} radius={radius} />
    ))}
  </group>
);

/** Shared orbit controls: damping on, auto-orbit off under reduced motion. */
export const LabControls: React.FC<{
  controls: React.MutableRefObject<OrbitControlsImpl | null>;
  autoOrbit: boolean;
}> = ({ controls, autoOrbit }) => {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
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

/** A sleek 3D vector arrow from tail to head (fractional coords), drawn as a 3D shaft + precision cone head. */
export const Arrow: React.FC<{
  tail: Vec3;
  head: Vec3;
  color: string;
  width?: number;
  opacity?: number;
  label?: string;
}> = ({ tail, head, color, width = 2.5, opacity = 1, label }) => {
  const t = centre(tail);
  const h = centre(head);
  const dir = new THREE.Vector3(h[0] - t[0], h[1] - t[1], h[2] - t[2]);
  const len = dir.length();
  if (len < 1e-9) return null;

  const norm = dir.clone().normalize();
  const coneLen = Math.min(0.16, len * 0.32);
  const shaftEnd: Vec3 = [
    h[0] - norm.x * (coneLen * 0.7),
    h[1] - norm.y * (coneLen * 0.7),
    h[2] - norm.z * (coneLen * 0.7),
  ];
  const conePos = new THREE.Vector3(
    h[0] - norm.x * (coneLen * 0.5),
    h[1] - norm.y * (coneLen * 0.5),
    h[2] - norm.z * (coneLen * 0.5),
  );
  const mid = new THREE.Vector3((t[0] + h[0]) / 2, (t[1] + h[1]) / 2 + 0.09, (t[2] + h[2]) / 2);
  const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), norm);
  const radius = Math.max(0.009, width * 0.0085);

  return (
    <group>
      <CylinderRod start={t} end={shaftEnd} radius={radius} color={color} opacity={opacity} />
      <mesh position={conePos} quaternion={quat}>
        <coneGeometry args={[radius * 2.7, coneLen, 24]} />
        <meshPhysicalMaterial
          color={color}
          transparent={opacity < 1}
          opacity={opacity}
          roughness={0.2}
          metalness={0.2}
          clearcoat={0.7}
        />
      </mesh>
      {label && (
        <Html position={[mid.x, mid.y, mid.z]} center className="lx-cl-label" zIndexRange={[10, 0]}>
          <span>{label}</span>
        </Html>
      )}
    </group>
  );
};
