import React from 'react';
import { Html } from '@react-three/drei';
import { CylinderRod } from '../crystal/SceneKit';

/** Schematic edge-dislocation front, not an atomistic mechanics simulation. */
export const DislocationSchematic: React.FC<{ values: Record<string, number> }> = ({ values }) => {
  const front = Math.max(-1, Math.min(1, values.glidePos ?? 0)) * 0.6;
  const xs = [-0.6, -0.3, 0, 0.3, 0.6];
  const ys = [-0.45, -0.15, 0.15, 0.45];
  const zs = [-0.3, 0, 0.3];
  const smooth = (x: number) => Math.max(0, Math.min(1, (front - x + 0.3) / 0.6));
  return <group>
    {xs.flatMap((x) => ys.flatMap((y) => zs.map((z) => {
      const shift = y > 0 ? 0.18 * smooth(x) : 0;
      return <mesh key={`${x}:${y}:${z}`} position={[x + shift, y, z]}>
        <sphereGeometry args={[0.075, 18, 14]} />
        <meshPhysicalMaterial color={y > 0 ? '#2563eb' : '#64748b'} roughness={0.35} />
      </mesh>;
    })))}
    <CylinderRod start={[front, 0, -0.42]} end={[front, 0, 0.42]} color="#dc2626" radius={0.035} />
    <Html position={[0, 0.75, 0]} center className="lx-cl-label"><span>Red line: moving dislocation (schematic)</span></Html>
  </group>;
};
