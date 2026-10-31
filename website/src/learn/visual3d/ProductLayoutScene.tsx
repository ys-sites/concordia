import React, { Suspense, useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ContactShadows, Html, Line, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import './productLayoutScene.css';

const ROOT = '/3d/product-layout/';
const DECODER = `${ROOT}draco/`;
const MACHINES = ['27724', '27725', '27729', '27730', '27732'];
const MACHINE_COLORS = ['#568a87', '#6488ad', '#bd8667', '#78966d', '#a47e9a'];

export class AssetBoundary extends React.Component<React.PropsWithChildren, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <Html center><div className="lx-paper-note">The 3D equipment could not load. The lesson controls and guide remain available.</div></Html>
      : this.props.children;
  }
}

/** Normalize a model around its footprint without changing its original mesh or materials. */
function tintMaterial(object: THREE.Object3D, materialName: string, color: string) {
  const replacements = new Map<THREE.Material, THREE.Material>();
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const tint = (original: THREE.Material) => {
      if (original.name !== materialName || !(original instanceof THREE.MeshStandardMaterial)) return original;
      if (!replacements.has(original)) {
        const copy = original.clone();
        copy.color.set(color);
        replacements.set(original, copy);
      }
      return replacements.get(original)!;
    };
    child.material = Array.isArray(child.material) ? child.material.map(tint) : tint(child.material);
  });
}

function usePlacedAsset(id: string, largestDimension: number, rotation = 0, enamel?: string) {
  const gltf = useGLTF(`${ROOT}${id}.glb`, DECODER);
  return useMemo(() => {
    const object = gltf.scene.clone(true);
    if (enamel) tintMaterial(object, 'enamel', enamel);
    object.rotation.y = rotation;
    object.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(object);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = largestDimension / Math.max(size.x, size.y, size.z, 0.001);
    const root = new THREE.Group();
    object.position.set(-center.x, -bounds.min.y, -center.z);
    root.add(object);
    root.scale.setScalar(scale);
    return { root, height: size.y * scale, clips: gltf.animations };
  }, [gltf, largestDimension, rotation, enamel]);
}

const Machine: React.FC<{ id: string; x: number; color: string }> = ({ id, x, color }) => {
  const { root } = usePlacedAsset(id, 0.68, 0, color);
  return <primitive object={root} position={[x, -0.31, -0.49]} />;
};

/** Shared, scaled equipment models for the other industrial layout diagrams. */
export const FactoryMachine: React.FC<{ kind: 'lathe' | 'mill' | 'drill' | 'assembly'; color?: string }> = ({ kind, color }) => {
  const id = { lathe: '27724', mill: '27725', drill: '27729', assembly: '27763' }[kind];
  const { root } = usePlacedAsset(id, 0.4, 0, color || '#648f83');
  return <primitive object={root} position={[0, -0.2, 0]} />;
};

const Robot: React.FC<{ x: number; playing: boolean; speed: number }> = ({ x, playing, speed }) => {
  const { root, clips } = usePlacedAsset('27803', 0.52, Math.PI);
  const mixer = useMemo(() => new THREE.AnimationMixer(root), [root]);
  useEffect(() => {
    const actions = clips.map((clip) => mixer.clipAction(clip).play());
    return () => { actions.forEach((action) => action.stop()); mixer.stopAllAction(); mixer.uncacheRoot(root); };
  }, [clips, mixer, root]);
  useFrame((_, dt) => { if (playing) mixer.update(Math.min(dt, 0.1) * speed); });
  return <primitive object={root} position={[x, -0.31, 0.42]} />;
};

const Products: React.FC<{ speed: number; playing: boolean; beltTop: number }> = ({ speed, playing, beltTop }) => {
  const { root } = usePlacedAsset('27793', 0.27, Math.PI / 2);
  const copies = useMemo(() => ['#a8382c', '#338a8d', '#497ba9'].map((color) => {
    const copy = root.clone(true);
    tintMaterial(copy, 'steel', color);
    return copy;
  }), [root]);
  const groups = useRef<Array<THREE.Group | null>>([]);
  const distance = useRef(0);
  useFrame((_, dt) => {
    if (playing) distance.current += Math.min(dt, 0.1) * 0.23 * speed;
    groups.current.forEach((group, i) => {
      if (group) group.position.x = ((distance.current + i * (2.25 / 3)) % 2.25) - 1.125;
    });
  });
  return <>{copies.map((object, i) => (
    <group key={i} ref={(group) => { groups.current[i] = group; }} position={[-1.125 + i * 0.75, beltTop + 0.01, 0]}>
      <primitive object={object} />
    </group>
  ))}</>;
};

const FactoryModels: React.FC<{ stations: number; speed: number; playing: boolean }> = ({ stations, speed, playing }) => {
  const xs = Array.from({ length: stations }, (_, i) => -1 + 2 * i / Math.max(1, stations - 1));
  const belt = usePlacedAsset('34784', 2.45, Math.PI / 2);
  return <>
    {/* Adapt the full-scale conveyor to a narrow tabletop model. */}
    <group position={[0, -0.31, 0]} scale={[1, 0.18, 0.38]}><primitive object={belt.root} /></group>
    {xs.map((x, i) => <Machine key={`${i}-${MACHINES[i % MACHINES.length]}`} id={MACHINES[i % MACHINES.length]} x={x} color={MACHINE_COLORS[i % MACHINE_COLORS.length]} />)}
    <Robot x={-0.72} playing={playing} speed={speed} />
    <Robot x={0.72} playing={playing} speed={speed} />
    <Products speed={speed} playing={playing} beltTop={-0.31 + belt.height * 0.18} />
    <ContactShadows key={stations} position={[0, -0.33, 0]} scale={5} far={2} resolution={256} opacity={0.25} blur={2.5} frames={1} color="#564a3d" />
    {xs.map((x, i) => <Html key={i} position={[x, 0.51, -0.49]} center zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
      <span className="lx-paper-station" aria-hidden="true">{i + 1}</span>
    </Html>)}
  </>;
};

/** A tabletop illustration: dimensional stages remain explanatory, not a detailed factory simulation. */
export const ProductLayoutScene: React.FC<{ values: Record<string, number>; playing: boolean }> = ({ values, playing }) => {
  const stations = Math.max(3, Math.min(6, Math.round(values.stations ?? 5)));
  const speed = values.lineSpeed ?? 1;
  return <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.335, 0]}>
      <planeGeometry args={[5, 3]} />
      <meshStandardMaterial color="#efe6d3" roughness={0.92} />
    </mesh>
    <AssetBoundary><Suspense fallback={<Html center><span className="lx-paper-note">Loading factory model…</span></Html>}>
      <FactoryModels stations={stations} speed={speed} playing={playing} />
    </Suspense></AssetBoundary>
    <Line points={[[-1.15, -0.28, 0.72], [1.15, -0.28, 0.72]]} color="#9a3b2a" dashed dashSize={0.08} gapSize={0.055} lineWidth={1.5} />
    <Html fullscreen zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
      <span className="lx-paper-note lx-paper-heading">Product layout · {stations} stations in sequence</span>
    </Html>
    <Html position={[0.15, -0.05, 0.72]} center zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
      <span className="lx-paper-flow">Flow → · speed {speed.toFixed(1)}×</span>
    </Html>
  </group>;
};

export default ProductLayoutScene;
