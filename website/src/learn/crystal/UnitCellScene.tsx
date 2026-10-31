// Unit-cell 3D scene (React Three Fiber + Drei) — Studio Edition.
// Every atom position, radius and count comes from crystalMath.unitCell() —
// the scene never invents a coordinate. For HCP, crystallographic (x, y, z_c)
// is mapped so the hexagonal basal planes lie horizontally (XZ) and the c-axis
// stands vertically along Three.js Y, matching standard crystallography figures.
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
  corner: '#475569',
  face: '#d97706',
  body: '#be123c',
  interior: '#be123c',
};

const HCP_SCALE = 0.68;

/**
 * Convert crystallographic centered coordinates into Three.js Y-up studio coordinates.
 * - Cubic cells: centered at (0.5, 0.5, 0.5).
 * - HCP cell: crystallographic (x, y) basal plane maps to Three.js (x, -z),
 *   and crystallographic z (height along c-axis, 0..c/a) maps to vertical Three.js Y!
 */
export const toStagePos = (cell: CellKind, cart: Vec3): Vec3 => {
  if (cell === 'hcp') {
    return [
      cart[0] * HCP_SCALE,
      (cart[2] - HCP_IDEAL_C_OVER_A / 2) * HCP_SCALE,
      -cart[1] * HCP_SCALE,
    ];
  }
  return [cart[0] - 0.5, cart[1] - 0.5, cart[2] - 0.5];
};

interface EdgeSegment {
  start: Vec3;
  end: Vec3;
  color: string;
  radius: number;
  opacity: number;
}

/** Cell edges and structural guide lines in centred Three.js stage coordinates. */
const cellEdges = (cell: CellKind, wireRadius: number, mainOpacity: number): EdgeSegment[] => {
  if (cell !== 'hcp') {
    return CUBE_EDGES.map(([a, b]) => ({
      start: toStagePos(cell, a),
      end: toStagePos(cell, b),
      color: '#64748b',
      radius: wireRadius,
      opacity: mainOpacity,
    }));
  }

  const m = unitCell('hcp');
  const corners = m.atoms.filter((a) => a.role === 'corner');
  const bottom = corners
    .filter((a) => a.frac[2] === 0)
    .sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const top = corners
    .filter((a) => a.frac[2] === 1)
    .sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const bottomCenter = toStagePos('hcp', [0, 0, 0]);
  const topCenter = toStagePos('hcp', [0, 0, HCP_IDEAL_C_OVER_A]);
  const mids = m.atoms.filter((a) => a.role === 'interior').map((a) => toStagePos('hcp', a.cart));

  const segments: EdgeSegment[] = [];

  // 1. Outer hexagonal prism perimeter (6 bottom edges, 6 top edges, 6 vertical pillars)
  for (let i = 0; i < 6; i++) {
    const b0 = toStagePos('hcp', bottom[i].cart);
    const b1 = toStagePos('hcp', bottom[(i + 1) % 6].cart);
    const t0 = toStagePos('hcp', top[i].cart);
    const t1 = toStagePos('hcp', top[(i + 1) % 6].cart);

    segments.push({ start: b0, end: b1, color: '#334155', radius: wireRadius * 1.15, opacity: mainOpacity });
    segments.push({ start: t0, end: t1, color: '#334155', radius: wireRadius * 1.15, opacity: mainOpacity });
    segments.push({ start: b0, end: t0, color: '#475569', radius: wireRadius, opacity: mainOpacity * 0.9 });

    // 2. Six radial basal spokes on bottom and top hexagonal faces (forming the 6 equilateral triangles)
    segments.push({ start: bottomCenter, end: b0, color: '#94a3b8', radius: wireRadius * 0.72, opacity: 0.55 });
    segments.push({ start: topCenter, end: t0, color: '#94a3b8', radius: wireRadius * 0.72, opacity: 0.55 });
  }

  // 3. Central vertical c-axis connecting bottom face-center to top face-center
  segments.push({
    start: bottomCenter,
    end: topCenter,
    color: '#d97706',
    radius: wireRadius * 0.75,
    opacity: 0.5,
  });

  // 4. Mid-plane B-layer triangle connecting the 3 interior atoms at z = c/2
  if (mids.length === 3) {
    for (let i = 0; i < 3; i++) {
      segments.push({
        start: mids[i],
        end: mids[(i + 1) % 3],
        color: '#be123c',
        radius: wireRadius * 0.95,
        opacity: 0.75,
      });
    }
  }

  return segments;
};

const shareText = (site: AtomSite): string => {
  if (site.role === 'corner') {
    return Math.abs(site.share - 1 / 6) < 1e-4 ? 'corner · 1/6' : 'corner · 1/8';
  }
  if (site.role === 'face') return 'face center · 1/2';
  if (site.role === 'body') return 'body center · 1';
  return 'interior (B-layer) · 1';
};

const Atom: React.FC<{
  cell: CellKind;
  site: AtomSite;
  radius: number;
  explode: number;
  selected: boolean;
  dimmed: boolean;
  showLabel: boolean;
  onSelect: (id: string) => void;
}> = ({ cell, site, radius, explode, selected, dimmed, showLabel, onSelect }) => {
  const basePos = toStagePos(cell, site.cart);
  const len = Math.sqrt(basePos[0] ** 2 + basePos[1] ** 2 + basePos[2] ** 2) || 1;
  const pos: Vec3 = [
    basePos[0] + (basePos[0] / len) * explode * 0.52,
    basePos[1] + (basePos[1] / len) * explode * 0.52,
    basePos[2] + (basePos[2] / len) * explode * 0.52,
  ];
  const labelOffset: Vec3 = [
    (basePos[0] / len) * (radius + 0.12),
    (basePos[1] / len) * (radius + 0.12) + 0.07,
    (basePos[2] / len) * (radius + 0.12),
  ];

  // Distinct color palette for HCP ABAB layers vs cubic roles
  const color = selected
    ? '#2563eb'
    : cell === 'hcp'
      ? site.role === 'interior'
        ? '#be123c' // B-layer (3 interior atoms)
        : site.role === 'face'
          ? '#d97706' // Basal face centers (2 atoms, 1/2 each)
          : '#3b82f6' // Basal corner ring (12 atoms, 1/6 each)
      : ROLE_COLORS[site.role];

  return (
    <mesh
      position={pos}
      scale={selected ? 1.14 : 1}
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
        color={color}
        emissive={selected ? '#1d4ed8' : '#000000'}
        emissiveIntensity={selected ? 0.35 : 0}
        roughness={0.2}
        metalness={0.18}
        clearcoat={0.78}
        clearcoatRoughness={0.14}
        transparent={dimmed}
        opacity={dimmed ? 0.28 : 1}
      />
      {showLabel && (
        <Html position={labelOffset} center className="lx-cl-label" zIndexRange={[10, 0]}>
          <span>{shareText(site)}</span>
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
  const atoms = useMemo(() => {
    const r = replicate(scene.cell, ...scene.replicate);
    return r.atoms;
  }, [scene.cell, scene.replicate]);

  const wireRadius = scene.showWireframe ? 0.015 : 0.01;
  const mainOpacity = scene.replicate[0] * scene.replicate[1] * scene.replicate[2] === 1 ? 0.85 : 0.45;
  const edges = useMemo(
    () => cellEdges(scene.cell, wireRadius, mainOpacity),
    [scene.cell, wireRadius, mainOpacity],
  );

  const scaleFactor = scene.cell === 'hcp' ? HCP_SCALE : 1;
  const displayRadius =
    model.radius * scaleFactor * (scene.atomSize === 'touching' ? 0.92 : 0.38);

  const [failed, setFailed] = useState(false);
  const reduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const blockOffset: Vec3 =
    scene.cell === 'hcp'
      ? [
          (-(scene.replicate[0] - 1) / 2 + (scene.replicate[1] - 1) / 4) * HCP_SCALE,
          -((scene.replicate[2] - 1) * HCP_IDEAL_C_OVER_A * HCP_SCALE) / 2,
          ((scene.replicate[1] - 1) * Math.sqrt(3) * HCP_SCALE) / 4,
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
      <StudioEnvironment floorY={scene.cell === 'hcp' ? -0.82 : -0.78} />
      <CameraRig preset={scene.preset} autoOrbit={scene.autoOrbit && !reduced} controls={controls} />
      <group position={blockOffset}>
        {edges.map((seg, i) => (
          <CylinderRod
            key={i}
            start={seg.start}
            end={seg.end}
            color={seg.color}
            radius={seg.radius}
            opacity={seg.opacity}
          />
        ))}
        {atoms.map((a) => (
          <Atom
            key={a.id}
            cell={scene.cell}
            site={a}
            radius={displayRadius}
            explode={scene.explode}
            selected={scene.selectedId === a.id}
            dimmed={scene.selectedId !== null && scene.selectedId !== a.id && scene.showSharing}
            showLabel={
              scene.showLabels &&
              (scene.selectedId === a.id || (scene.showSharing && a.role !== 'corner'))
            }
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
