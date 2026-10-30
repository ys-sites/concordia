// Unit-cell 3D scene (React Three Fiber + Drei).
// Every atom position, radius and count comes from crystalMath.unitCell() —
// the scene never invents a coordinate. Camera movement never changes the
// maths: the camera only looks at the model.
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Line, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { CUBE_EDGES, HCP_IDEAL_C_OVER_A, dist, replicate, unitCell, type AtomSite, type CellKind, type Vec3 } from '../visualization/crystalMath';

export type CameraPreset = 'iso' | 'front' | 'top' | 'side';

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

const AXIS_COLORS = { x: '#f87171', y: '#4ade80', z: '#60a5fa' };
const ROLE_COLORS: Record<AtomSite['role'], string> = {
  corner: '#cbd5e1',
  face: '#fbbf24',
  body: '#e11d48',
  interior: '#e11d48',
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
  const bottom = corners.filter((a) => a.frac[2] === 0).sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const top = corners.filter((a) => a.frac[2] === 1).sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const edges: [Vec3, Vec3][] = [];
  for (let i = 0; i < 6; i++) {
    edges.push([sub(bottom[i].cart), sub(bottom[(i + 1) % 6].cart)]);
    edges.push([sub(top[i].cart), sub(top[(i + 1) % 6].cart)]);
    edges.push([sub(bottom[i].cart), sub(top[i].cart)]);
  }
  return edges;
};

const PRESET_POS: Record<CameraPreset, Vec3> = {
  iso: [2.4, 1.9, 2.4],
  front: [0, 0.15, 3.4],
  top: [0, 3.4, 0.001],
  side: [3.4, 0.15, 0],
};

const CameraRig: React.FC<{ preset: CameraPreset; autoOrbit: boolean; controls: React.RefObject<OrbitControlsImpl | null> }> = ({ preset, autoOrbit, controls }) => {
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
    // Ease toward the preset (anatomy: calm eased motion, never a snap).
    const k = 1 - Math.exp(-dt / 0.22);
    camera.position.lerp(target.current.pos, k);
    if (camera.position.distanceTo(target.current.pos) < 0.01) target.current = null;
  });
  return null;
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
  // Explode: move away from the cell centre along the atom's own radius
  // (anatomy exploded view — parts move along their real disassembly path).
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
  return (
    <mesh
      position={pos}
      scale={selected ? 1.18 : 1}
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
      <sphereGeometry args={[radius, 28, 20]} />
      <meshStandardMaterial
        color={selected ? '#ffffff' : ROLE_COLORS[site.role]}
        emissive={selected ? '#b3294a' : '#000000'}
        emissiveIntensity={selected ? 0.55 : 0}
        roughness={0.32}
        metalness={0.08}
        transparent={dimmed}
        opacity={dimmed ? 0.35 : 1}
      />
      {showLabel && (
        <Html distanceFactor={6} position={[0, radius + 0.18, 0]} center className="lx-cl-label" zIndexRange={[10, 0]}>
          <span>
            {site.role === 'corner' ? 'corner · 1/8' : site.role === 'face' ? 'face · 1/2' : site.role === 'body' ? 'body · 1' : 'inside · 1'}
          </span>
        </Html>
      )}
    </mesh>
  );
};

const Axes: React.FC = () => {
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

export const UnitCellScene: React.FC<{ scene: SceneState; onSelect: (id: string | null) => void }> = ({ scene, onSelect }) => {
  const controls = useRef<OrbitControlsImpl | null>(null);
  const model = useMemo(() => unitCell(scene.cell), [scene.cell]);
  const centre = centreOf(scene.cell);
  const atoms = useMemo(() => {
    const r = replicate(scene.cell, ...scene.replicate);
    return r.atoms;
  }, [scene.cell, scene.replicate]);
  const edges = useMemo(() => cellEdges(scene.cell), [scene.cell]);
  const displayRadius = model.radius * (scene.atomSize === 'touching' ? 0.92 : 0.45);
  const [failed, setFailed] = useState(false);
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Replicated cells: shift every cell's atoms so the block is centred.
  const blockOffset: Vec3 =
    scene.cell === 'hcp'
      ? [-(scene.replicate[0] - 1) / 2 + (scene.replicate[1] - 1) / 4, -((scene.replicate[1] - 1) * Math.sqrt(3)) / 4, -((scene.replicate[2] - 1) * HCP_IDEAL_C_OVER_A) / 2]
      : [-(scene.replicate[0] - 1) / 2, -(scene.replicate[1] - 1) / 2, -(scene.replicate[2] - 1) / 2];

  if (failed) return null;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: PRESET_POS[scene.preset], fov: 42 }}
      onCreated={({ gl }) => {
        gl.setClearColor('#0f172a');
      }}
      onError={() => setFailed(true)}
      aria-label={`${model.name} unit cell, interactive 3D model. Drag to orbit, scroll or pinch to zoom.`}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} />
      <CameraRig preset={scene.preset} autoOrbit={scene.autoOrbit && !reduced} controls={controls} />
      <group position={blockOffset}>
        {/* Cell edges — the cube stays a cube: 8 corners, 12 edges, unit length. */}
        {scene.replicate[0] * scene.replicate[1] * scene.replicate[2] === 1 &&
          edges.map(([a, b], i) => (
            <Line key={i} points={[a, b]} color="#94a3b8" lineWidth={scene.showWireframe ? 2 : 1.25} transparent opacity={0.95} />
          ))}
        {scene.replicate[0] * scene.replicate[1] * scene.replicate[2] > 1 &&
          edges.map(([a, b], i) => (
            <Line key={i} points={[a, b]} color="#475569" lineWidth={1} transparent opacity={0.5} />
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
            showLabel={scene.showLabels && (scene.selectedId === a.id || scene.showSharing)}
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
        onStart={() => {
          /* user takes over: the preset easing stops because CameraRig only
             eases while a preset target is pending */
        }}
      />
    </Canvas>
  );
};

/** Distance between two atoms, for the readout (from the model, not the camera). */
export const atomDistance = (a: AtomSite, b: AtomSite): number => dist(a.cart, b.cart);
