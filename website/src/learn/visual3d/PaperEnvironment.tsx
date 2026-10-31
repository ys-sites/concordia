import React, { Suspense, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

class EnvironmentBoundary extends React.Component<React.PropsWithChildren, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

/** Studio reflections and a paper ground, scoped to the three requested courses. */
export const PaperEnvironment: React.FC<{ floor?: boolean }> = ({ floor = true }) => {
  const { gl, scene } = useThree();
  useEffect(() => {
    const mapping = gl.toneMapping, exposure = gl.toneMappingExposure, intensity = scene.environmentIntensity;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 0.9;
    scene.environmentIntensity = 0.7;
    return () => { gl.toneMapping = mapping; gl.toneMappingExposure = exposure; scene.environmentIntensity = intensity; };
  }, [gl, scene]);
  return <>
    <color attach="background" args={['#fbf6ea']} />
    <hemisphereLight args={['#fffaf0', '#d8cbb5', 0.75]} />
    <directionalLight position={[4, 7, 5]} intensity={1.45} color="#fff8ec" />
    <directionalLight position={[-5, 3, -4]} intensity={0.45} color="#f0f5ff" />
    <EnvironmentBoundary><Suspense fallback={null}>
      <Environment files="/3d/product-layout/photo_studio_01_512.hdr" background={false} />
    </Suspense></EnvironmentBoundary>
    {floor && <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.78, 0]}>
      <circleGeometry args={[2.8, 64]} /><meshStandardMaterial color="#efe6d3" roughness={0.95} />
    </mesh>}
  </>;
};
