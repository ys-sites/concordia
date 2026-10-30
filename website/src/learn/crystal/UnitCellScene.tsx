// Unit-cell 3D scene (React Three Fiber + Drei) — Studio Edition.
// Every atom position, radius and count comes from crystalMath.unitCell() —
// the scene never invents a coordinate. Camera movement never changes the
// maths: the camera only looks at the model.
import React, { useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import {
  CUBE_EDGES,
  HCP_IDEAL_C_OVER_A,
  dist,
  replicate,
  unitCell,
  type AtomSite,
  type CellKind,
  type Vec3,
} from '../visualization/crystalMath';
import {
  Axes,
  CameraRig,
  CylinderRod,
  PRESET_POS,
  StudioEnvironment,
  type CameraPreset,
} from './SceneKit';

export type { CameraPreset };

export interface SceneState {
  cell: CellKind;
  explode: number; // 0 assembled … 1 fully apart
  replicate: [number, number, number];
  showLabels: boolean;
  showSharing: boolean;
  showAxes: boolean;
  showWireframe: boolean;
  atomSize: 'touching' | 'small';
  autoOrbit: boolean;
  preset: CameraPreset;
  selectedId: string | null;
}

const ROLE_COLORS: Record<AtomSite['role'], string> = {
  corner: '#64748b',
  face: '#f59e0b',
  body: '#be123c',
  interior: '#be123c',
};

const centreOf = (cell: CellKind): Vec3 =>
  cell === 'hcp' ? [0, 0, HCP_IDEAL_C_OVER_A / 2] : [0.5, 0.5, 0.5];

/** Cell edges in centred coordinates (cell centre at the origin). */
const cellEdges = (cell: CellKind): [Vec3, Vec3][] => {
  const c = centreOf(cell);
  const sub = (p: Vec3): Vec3 => [p[0] - c[0], p[1] - c[1], p[2] - c[2]];
  if (cell !== 'hcp') return CUBE_EDGES.map(([a, b]) => [sub(a), sub(b)]);
  const m = unitCell('hcp');
  const corners = m.atoms.filter((a) => a.role === 'corner');
  const bottom = corners
    .filter((a) => a.frac[2] === 0)
    .sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const top = corners
    .filter((a) => a.frac[2] === 1)
    .sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const edges: [Vec3, Vec3][] = [];
  for (let i = 0; i < 6; i++) {
    edges.push([sub(bottom[i].cart), sub(bottom[(i + 1) % 6].cart)]);
    edges.push([sub(top[i].cart), sub(top[(i + 1) % 6].cart)]);
    edges.push([sub(bottom[i].cart), sub(top[i].cart)]);
  }
  return edges;
};

const Atom: React.FC<{
  site: AtomSite;
  centre: Vec3;
  radius: number;
  explode: number;
  selected: boolean;
  dimmed: boolean;
  showLabel: boolean;
  onSelect: (id: string) => void;
}> = ({ site, centre, radius, explode, selected, dimmed, showLabel, onSelect }) => {
  const dir: Vec3 = [
    site.cart[0] - centre[0],
    site.cart[1] - centre[1],
    site.cart[2] - centre[2],
  ];
  const len = Math.sqrt(dir[0] ** 2 + dir[1] ** 2 + dir[2] ** 2) || 1;
  const pos: Vec3 = [
    site.cart[0] - centre[0] + (dir[0] / len) * explode * 0.55,
    site.cart[1] - centre[1] + (dir[1] / len) * explode * 0.55,
    site.cart[2] - centre[2] + (dir[2] / len) * explode * 0.55,
  ];
  const labelOffset: Vec3 = [
    (dir[0] / len) * (radius + 0.14),
    (dir[1] / len) * (radius + 0.14) + 0.08,
    (dir[2] / len) * (radius + 0.14),
  ];
  return (
    <mesh
      position={pos}
      scale={selected ? 1.16 : 1}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(site.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = '';
      }}
    >
      <sphereGeometry args={[radius, 36, 28]} />
      <meshPhysicalMaterial
        color={selected ? '#2563eb' : ROLE_COLORS[site.role]}
        emissive={selected ? '#1d4ed8' : '#000000'}
        emissiveIntensity={selected ? 0.35 : 0}
        roughness={0.2}
        metalness={0.18}
        clearcoat={0.75}
        clearcoatRoughness={0.15}
        transparent={dimmed}
        opacity={dimmed ? 0.3 : 1}
      />
      {showLabel && (
        <Html position={labelOffset} center className="lx-cl-label" zIndexRange={[10, 0]}>
          <span>
            {site.role === 'corner'
              ? 'corner · 1/8'
              : site.role === 'face'
                ? 'face · 1/2'
                : site.role === 'body'
                  ? 'body · 1'
                  : 'inside · 1'}
          </span>
        </Html>
      )}
    </mesh>
  );
};

export const UnitCellScene: React.FC<{ scene: SceneState; onSelect: (id: string | null) => void }> = ({
  scene,
  onSelect,
}) => {
  const controls = useRef<OrbitControlsImpl | null>(null);
  const model = useMemo(() => unitCell(scene.cell), [scene.cell]);
  const centre = centreOf(scene.cell);
  const atoms = useMemo(() => {
    const r = replicate(scene.cell, ...scene.replicate);
    return r.atoms;
  }, [scene.cell, scene.replicate]);
  const edges = useMemo(() => cellEdges(scene.cell), [scene.cell]);
  const displayRadius = model.radius * (scene.atomSize === 'touching' ? 0.92 : 0.44);
  const [failed, setFailed] = useState(false);
  const reduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const blockOffset: Vec3 =
    scene.cell === 'hcp'
      ? [
          -(scene.replicate[0] - 1) / 2 + (scene.replicate[1] - 1) / 4,
          -((scene.replicate[1] - 1) * Math.sqrt(3)) / 4,
          -((scene.replicate[2] - 1) * HCP_IDEAL_C_OVER_A) / 2,
        ]
      : [
          -(scene.replicate[0] - 1) / 2,
          -(scene.replicate[1] - 1) / 2,
          -(scene.replicate[2] - 1) / 2,
        ];

  if (failed) return null;
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: PRESET_POS[scene.preset], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      onError={() => setFailed(true)}
      aria-label={`${model.name} unit cell, interactive 3D model. Drag to orbit, scroll or pinch to zoom.`}
    >
      <StudioEnvironment floorY={scene.cell === 'hcp' ? -1.05 : -0.78} />
      <CameraRig preset={scene.preset} autoOrbit={scene.autoOrbit && !reduced} controls={controls} />
      <group position={blockOffset}>
        {edges.map(([a, b], i) => (
          <CylinderRod
            key={i}
            start={a}
            end={b}
            color="#64748b"
            radius={scene.showWireframe ? 0.016 : 0.011}
            opacity={scene.replicate[0] * scene.replicate[1] * scene.replicate[2] === 1 ? 0.8 : 0.45}
          />
        ))}
        {atoms.map((a) => (
          <Atom
            key={a.id}
            site={a}
            centre={centre}
            radius={displayRadius}
            explode={scene.explode}
            selected={scene.selectedId === a.id}
            dimmed={scene.selectedId !== null && scene.selectedId !== a.id && scene.showSharing}
            showLabel={scene.showLabels && (scene.selectedId === a.id || (scene.showSharing && a.role !== 'corner'))}
            onSelect={onSelect}
          />
        ))}
      </group>
      {scene.showAxes && <Axes />}
      <OrbitControls
        ref={controls}
        makeDefault
        enableDamping
        dampingFactor={0.12}
        autoRotate={scene.autoOrbit && !reduced}
        autoRotateSpeed={0.9}
        minDistance={1.4}
        maxDistance={8}
      />
    </Canvas>
  );
};

/** Distance between two atoms, for the readout (from the model, not the camera). */
export const atomDistance = (a: AtomSite, b: AtomSite): number => dist(a.cart, b.cart);
