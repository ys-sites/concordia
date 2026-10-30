// Miller Plane Explorer 3D scene (Milestone 2, Module C).
// The plane is the intersection polygon computed by millerPlane() from the
// equation hx + ky + lz = d — a real translucent polygon, never a positioned
// rectangle. Atoms come from unitCell(); the body-centre atom is highlighted
// exactly when pointOnPlane() says it lies on the plane.
import React, { useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { millerPlane, pointOnPlane, polygonArea, unitCell, type CellKind, type MillerPlane, type Vec3 } from '../visualization/crystalMath';
import { Axes, CameraRig, CubeEdges, LabControls, PRESET_POS, centre, type CameraPreset } from './SceneKit';

const PlaneMesh: React.FC<{ plane: MillerPlane }> = ({ plane }) => {
  const geom = useMemo(() => {
    const poly = plane.polygon;
    if (poly.length < 3) return null;
    const c: Vec3 = [
      poly.reduce((s, p) => s + p[0], 0) / poly.length,
      poly.reduce((s, p) => s + p[1], 0) / poly.length,
      poly.reduce((s, p) => s + p[2], 0) / poly.length,
    ];
    const positions: number[] = [];
    for (let i = 0; i < poly.length; i++) {
      const a = centre(poly[i]);
      const b = centre(poly[(i + 1) % poly.length]);
      const cc = centre(c);
      positions.push(cc[0], cc[1], cc[2], a[0], a[1], a[2], b[0], b[1], b[2]);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    g.computeVertexNormals();
    return g;
  }, [plane]);
  if (!geom || plane.polygon.length < 3) return null;
  const loop = [...plane.polygon.map(centre), centre(plane.polygon[0])];
  return (
    <group>
      <mesh geometry={geom}>
        <meshStandardMaterial color="#b3294a" transparent opacity={0.42} side={THREE.DoubleSide} roughness={0.4} metalness={0.05} />
      </mesh>
      <Line points={loop} color="#fda4af" lineWidth={2} transparent opacity={0.95} />
    </group>
  );
};

export const PlaneScene: React.FC<{
  h: number;
  k: number;
  l: number;
  d: number;
  cell: CellKind;
  preset: CameraPreset;
  autoOrbit: boolean;
  showAtoms: boolean;
}> = ({ h, k, l, d, cell, preset, autoOrbit, showAtoms }) => {
  const controls = useRef<OrbitControlsImpl | null>(null);
  const [failed, setFailed] = useState(false);
  const plane = useMemo(() => millerPlane(h, k, l, d), [h, k, l, d]);
  const model = useMemo(() => unitCell(cell), [cell]);
  if (failed) return null;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: PRESET_POS[preset], fov: 42 }}
      onCreated={({ gl }) => gl.setClearColor('#0f172a')}
      onError={() => setFailed(true)}
      aria-label={`Miller plane (${h} ${k} ${l}) in a ${model.short} unit cell. Drag to orbit, scroll or pinch to zoom.`}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} />
      <CameraRig preset={preset} autoOrbit={autoOrbit} controls={controls} />
      <CubeEdges />
      <PlaneMesh plane={plane} />
      {showAtoms &&
        model.atoms.map((a) => {
          const onPlane = pointOnPlane(a.frac, plane);
          const pos = centre(a.frac);
          return (
            <mesh key={a.id} position={pos}>
              <sphereGeometry args={[a.role === 'body' ? 0.11 : 0.085, 24, 18]} />
              <meshStandardMaterial
                color={onPlane ? '#ffffff' : a.role === 'body' ? '#e11d48' : '#cbd5e1'}
                emissive={onPlane ? '#b3294a' : '#000000'}
                emissiveIntensity={onPlane ? 0.6 : 0}
                roughness={0.32}
                metalness={0.08}
              />
            </mesh>
          );
        })}
      <Axes />
      <LabControls controls={controls} autoOrbit={autoOrbit} />
    </Canvas>
  );
};

/** Re-export for the lab readout (area is already in the polygon). */
export const planeArea = (h: number, k: number, l: number, d: number): number => polygonArea(millerPlane(h, k, l, d).polygon);
