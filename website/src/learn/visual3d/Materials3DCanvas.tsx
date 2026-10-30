import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import {
  CUBE_EDGES,
  directionFamily,
  millerPlane,
  planeFamily,
  unitCell,
  type CellKind,
  type Vec3,
} from '../visualization/crystalMath';
import { Arrow, Axes, CubeEdges, CylinderRod, centre } from '../crystal/SceneKit';

const Pill: React.FC<{ pos: Vec3; text: string; bg?: string }> = ({ pos, text, bg }) => (
  <Html position={pos} center className="lx-cl-label" zIndexRange={[10, 0]}>
    <span style={bg ? { background: bg } : undefined}>{text}</span>
  </Html>
);

export const Materials3DGroup: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  const animRef = useRef(0);
  const pulseRef = useRef<THREE.Group | null>(null);

  useFrame((_, dt) => {
    animRef.current += dt;
    if (pulseRef.current && (topicId === '3d:diffusion' || topicId === '3d:thermal-expansion')) {
      const t = animRef.current;
      pulseRef.current.position.y = Math.sin(t * 2.5) * 0.015;
    }
  });

  // ── 2. Atom Sharing ─────────────────────────────────────────────────────────
  if (topicId === '3d:atom-sharing') {
    const idx = Math.round(values.cellType ?? 2);
    const kind: CellKind = idx === 0 ? 'sc' : idx === 1 ? 'bcc' : 'fcc';
    const explode = values.explode ?? 0.35;
    const roleFilter = Math.round(values.highlightRole ?? 0);
    const m = unitCell(kind);
    return (
      <group>
        <CubeEdges color="#475569" opacity={0.75} />
        {m.atoms.map((a) => {
          const dir = centre(a.frac);
          const len = Math.hypot(dir[0], dir[1], dir[2]) || 1;
          const pos: Vec3 = [
            dir[0] + (dir[0] / len) * explode * 0.55,
            dir[1] + (dir[1] / len) * explode * 0.55,
            dir[2] + (dir[2] / len) * explode * 0.55,
          ];
          const isMatch =
            roleFilter === 0 ||
            (roleFilter === 1 && a.role === 'corner') ||
            (roleFilter === 2 && a.role === 'face') ||
            (roleFilter === 3 && a.role === 'body');
          const r = a.role === 'corner' ? 0.14 : a.role === 'face' ? 0.18 : 0.22;
          const col = a.role === 'corner' ? '#64748b' : a.role === 'face' ? '#f59e0b' : '#be123c';
          return (
            <mesh key={a.id} position={pos}>
              <sphereGeometry args={[r, 28, 22]} />
              <meshPhysicalMaterial
                color={col}
                roughness={0.2}
                metalness={0.18}
                clearcoat={0.75}
                transparent={!isMatch}
                opacity={isMatch ? 1 : 0.22}
              />
            </mesh>
          );
        })}
        <Pill pos={[-0.55, 0.65, -0.55]} text="Corner: 1/8 inside cell" bg="rgba(71,85,105,0.92)" />
        {kind === 'fcc' && <Pill pos={[0, 0.65, 0]} text="Face: 1/2 inside cell" bg="rgba(180,83,9,0.92)" />}
        {kind === 'bcc' && <Pill pos={[0, 0.28, 0]} text="Body center: 1 whole atom" bg="rgba(190,18,60,0.92)" />}
        <Axes />
      </group>
    );
  }

  // ── 3. Atomic Packing Factor (APF) ──────────────────────────────────────────
  if (topicId === '3d:apf') {
    const idx = Math.round(values.cellType ?? 2);
    const kind: CellKind = idx === 0 ? 'sc' : idx === 1 ? 'bcc' : idx === 2 ? 'fcc' : 'hcp';
    const voidOp = values.voidOpacity ?? 0.45;
    const fillScale = values.atomFill ?? 1;
    const m = unitCell(kind);
    return (
      <group>
        <CubeEdges color="#334155" opacity={0.8} />
        {/* Translucent interstitial void box */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.98, 0.98, 0.98]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transparent
            opacity={voidOp * 0.45}
            roughness={0.15}
            transmission={0.4}
            depthWrite={false}
          />
        </mesh>
        {m.atoms
          .filter((a) => kind !== 'hcp' || a.frac[2] <= 1)
          .map((a) => {
            const p = kind === 'hcp' ? ([a.cart[0] * 0.6, a.cart[1] * 0.6, (a.cart[2] - 0.8) * 0.6] as Vec3) : centre(a.frac);
            return (
              <mesh key={a.id} position={p}>
                <sphereGeometry args={[m.radius * 0.9 * fillScale, 28, 22]} />
                <meshPhysicalMaterial
                  color={a.role === 'corner' ? '#64748b' : a.role === 'face' ? '#f59e0b' : '#be123c'}
                  roughness={0.2}
                  metalness={0.2}
                  clearcoat={0.75}
                />
              </mesh>
            );
          })}
        <Pill
          pos={[0, 0.72, 0]}
          text={`${m.short}: ${(m.apf * 100).toFixed(1)}% Solid · ${(100 - m.apf * 100).toFixed(1)}% Empty Void`}
          bg="rgba(15,23,42,0.9)"
        />
      </group>
    );
  }

  // ── 4. Coordination Number ──────────────────────────────────────────────────
  if (topicId === '3d:coordination-number') {
    const mode = Math.round(values.cnMode ?? 1);
    const expand = 1 + (values.shellRadius ?? 0.15);
    const showBonds = Math.round(values.showBonds ?? 1) === 1;
    const neighbors: Vec3[] =
      mode === 0
        ? [
            [0.65, 0, 0],
            [-0.65, 0, 0],
            [0, 0.65, 0],
            [0, -0.65, 0],
            [0, 0, 0.65],
            [0, 0, -0.65],
          ]
        : mode === 1
          ? [
              [-0.5, -0.5, -0.5],
              [0.5, -0.5, -0.5],
              [-0.5, 0.5, -0.5],
              [0.5, 0.5, -0.5],
              [-0.5, -0.5, 0.5],
              [0.5, -0.5, 0.5],
              [-0.5, 0.5, 0.5],
              [0.5, 0.5, 0.5],
            ]
          : [
              [0.5, 0.5, 0],
              [-0.5, 0.5, 0],
              [0.5, -0.5, 0],
              [-0.5, -0.5, 0],
              [0.5, 0, 0.5],
              [-0.5, 0, 0.5],
              [0.5, 0, -0.5],
              [-0.5, 0, -0.5],
              [0, 0.5, 0.5],
              [0, -0.5, 0.5],
              [0, 0.5, -0.5],
              [0, -0.5, -0.5],
            ];
    return (
      <group>
        <CubeEdges color="#94a3b8" opacity={0.4} />
        {/* Reference central atom */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 32, 24]} />
          <meshPhysicalMaterial color="#be123c" roughness={0.18} metalness={0.2} clearcoat={0.8} />
        </mesh>
        {neighbors.map((n, i) => {
          const p: Vec3 = [n[0] * expand, n[1] * expand, n[2] * expand];
          return (
            <group key={i}>
              {showBonds && <CylinderRod start={[0, 0, 0]} end={p} color="#f59e0b" radius={0.018} />}
              <mesh position={p}>
                <sphereGeometry args={[0.145, 28, 20]} />
                <meshPhysicalMaterial color="#2563eb" roughness={0.22} metalness={0.15} clearcoat={0.7} />
              </mesh>
            </group>
          );
        })}
        <Pill
          pos={[0, 0.82, 0]}
          text={
            mode === 0
              ? 'SC · CN = 6 (Octahedral Shell)'
              : mode === 1
                ? 'BCC · CN = 8 (Body Diagonal Neighbors)'
                : 'FCC · CN = 12 (Cuboctahedral Shell)'
          }
        />
      </group>
    );
  }

  // ── 5. Lattice Parameter & Atomic Radius ────────────────────────────────────
  if (topicId === '3d:lattice-radius') {
    const mode = Math.round(values.cellType ?? 1);
    const R = values.radiusNm ?? 0.124;
    const kind: CellKind = mode === 0 ? 'sc' : mode === 1 ? 'bcc' : 'fcc';
    const m = unitCell(kind);
    const aNm = mode === 0 ? 2 * R : mode === 1 ? (4 * R) / Math.sqrt(3) : 2 * Math.sqrt(2) * R;
    const contactStart: Vec3 = [-0.5, -0.5, -0.5];
    const contactEnd: Vec3 =
      mode === 0 ? [0.5, -0.5, -0.5] : mode === 1 ? [0.5, 0.5, 0.5] : [0.5, 0.5, -0.5];
    return (
      <group>
        <CubeEdges color="#64748b" opacity={0.75} />
        <CylinderRod start={contactStart} end={contactEnd} color="#be123c" radius={0.024} />
        {m.atoms.map((a) => (
          <mesh key={a.id} position={centre(a.frac)}>
            <sphereGeometry args={[m.radius * 0.88, 28, 22]} />
            <meshPhysicalMaterial
              color={a.role === 'corner' ? '#94a3b8' : a.role === 'face' ? '#f59e0b' : '#be123c'}
              roughness={0.22}
              metalness={0.15}
              clearcoat={0.7}
              transparent
              opacity={0.78}
            />
          </mesh>
        ))}
        <Pill
          pos={[0, 0.72, 0]}
          text={
            mode === 0
              ? `SC Edge: a = 2R = ${aNm.toFixed(3)} nm`
              : mode === 1
                ? `BCC Body Diag: √3a = 4R → a = ${aNm.toFixed(3)} nm`
                : `FCC Face Diag: √2a = 4R → a = ${aNm.toFixed(3)} nm`
          }
          bg="rgba(190,18,60,0.92)"
        />
      </group>
    );
  }

  // ── 6. Theoretical Density ──────────────────────────────────────────────────
  if (topicId === '3d:theoretical-density') {
    const idx = Math.round(values.metalIdx ?? 0);
    const metals = [
      { name: 'Copper (Cu)', kind: 'fcc' as CellKind, n: 4, A: 63.55, col: '#d97706' },
      { name: 'α-Iron (Fe)', kind: 'bcc' as CellKind, n: 2, A: 55.85, col: '#475569' },
      { name: 'Aluminum (Al)', kind: 'fcc' as CellKind, n: 4, A: 26.98, col: '#94a3b8' },
      { name: 'Chromium (Cr)', kind: 'bcc' as CellKind, n: 2, A: 52.0, col: '#2563eb' },
    ];
    const met = metals[idx] ?? metals[0];
    const rCm = (values.radiusPm ?? 128) * 1e-10;
    const aCm = met.kind === 'fcc' ? 2 * Math.sqrt(2) * rCm : (4 * rCm) / Math.sqrt(3);
    const Vc = aCm ** 3;
    const rho = (met.n * met.A) / (Vc * 6.022e23);
    const m = unitCell(met.kind);
    return (
      <group>
        <CubeEdges color="#475569" opacity={0.8} />
        {m.atoms.map((a) => (
          <mesh key={a.id} position={centre(a.frac)}>
            <sphereGeometry args={[m.radius * 0.88, 28, 22]} />
            <meshPhysicalMaterial color={met.col} roughness={0.18} metalness={0.45} clearcoat={0.8} />
          </mesh>
        ))}
        <Pill
          pos={[0, 0.74, 0]}
          text={`${met.name} (${met.kind.toUpperCase()}) · n=${met.n} · ρ = ${rho.toFixed(2)} g/cm³`}
          bg="rgba(15,23,42,0.92)"
        />
      </group>
    );
  }

  // ── 9. Direction & Plane Families ───────────────────────────────────────────
  if (topicId === '3d:families') {
    const famIdx = Math.round(values.familyIdx ?? 1);
    const mode = Math.round(values.mode ?? 0);
    const seed: [number, number, number] =
      famIdx === 0 ? [1, 0, 0] : famIdx === 1 ? [1, 1, 0] : [1, 1, 1];
    const dirs = directionFamily(seed);
    const planes = planeFamily(seed).slice(0, 4);
    const colors = ['#be123c', '#2563eb', '#d97706', '#16a34a'];
    return (
      <group>
        <CubeEdges color="#64748b" opacity={0.65} />
        {(mode === 0 || mode === 2) &&
          dirs.map((d, i) => (
            <Arrow
              key={i}
              tail={[0.5, 0.5, 0.5]}
              head={[0.5 + d[0] * 0.46, 0.5 + d[1] * 0.46, 0.5 + d[2] * 0.46]}
              color={colors[i % colors.length]}
              width={2.1}
            />
          ))}
        {(mode === 1 || mode === 2) &&
          planes.map((hkl, idx) => {
            const pl = millerPlane(hkl[0], hkl[1], hkl[2], 1);
            if (pl.polygon.length < 3) return null;
            const pts = pl.polygon.map(centre);
            return (
              <group key={idx}>
                {pts.map((a, j) => (
                  <CylinderRod
                    key={j}
                    start={a}
                    end={pts[(j + 1) % pts.length]}
                    color={colors[idx % colors.length]}
                    radius={0.013}
                  />
                ))}
              </group>
            );
          })}
        <Pill
          pos={[0, 0.74, 0]}
          text={`Family ⟨${seed.join('')}⟩ (${dirs.length} directions) · {${seed.join('')}}`}
        />
        <Axes />
      </group>
    );
  }

  // ── 10. Linear & Planar Density ─────────────────────────────────────────────
  if (topicId === '3d:linear-planar-density') {
    const isFcc = Math.round(values.cellType ?? 1) === 1;
    const sliceKind = Math.round(values.sliceKind ?? 2);
    const m = unitCell(isFcc ? 'fcc' : 'bcc');
    const hkl: [number, number, number] = sliceKind === 2 ? [1, 1, 1] : [1, 1, 0];
    const pl = millerPlane(hkl[0], hkl[1], hkl[2], 1);
    const pts = pl.polygon.map(centre);
    return (
      <group>
        <CubeEdges color="#64748b" opacity={0.65} />
        {sliceKind === 0 ? (
          <Arrow tail={[0, 0, 0]} head={[1, 1, 0]} color="#be123c" width={3.2} label="[110] Line" />
        ) : (
          pts.map((a, i) => (
            <CylinderRod key={i} start={a} end={pts[(i + 1) % pts.length]} color="#be123c" radius={0.016} />
          ))
        )}
        {m.atoms.map((a) => (
          <mesh key={a.id} position={centre(a.frac)}>
            <sphereGeometry args={[m.radius * 0.85, 28, 20]} />
            <meshPhysicalMaterial
              color={a.role === 'corner' ? '#64748b' : '#2563eb'}
              roughness={0.2}
              metalness={0.18}
              clearcoat={0.75}
              transparent
              opacity={0.82}
            />
          </mesh>
        ))}
        <Pill
          pos={[0, 0.74, 0]}
          text={
            sliceKind === 0
              ? `${m.short} [110] Linear Density = 2 atoms / √2a`
              : `${m.short} (${hkl.join('')}) Planar Density = 2 atoms / plane area`
          }
        />
      </group>
    );
  }

  // ── 11. X-Ray Diffraction (Bragg's Law) ─────────────────────────────────────
  if (topicId === '3d:xrd-bragg') {
    const theta = ((values.thetaDeg ?? 22.2) * Math.PI) / 180;
    const dNm = values.dSpacing ?? 0.204;
    const lam = values.lambda ?? 0.154;
    const pathDiff = 2 * dNm * Math.sin(theta);
    const phaseRatio = pathDiff / lam;
    const isConstructive = Math.abs(phaseRatio - Math.round(phaseRatio)) < 0.08;
    const dVisual = dNm * 2.1;
    const dx = Math.cos(theta) * 1.1;
    const dy = Math.sin(theta) * 1.1;
    return (
      <group>
        {[-1, 0, 1].map((layer) => (
          <group key={layer} position={[0, layer * dVisual, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1.6, 1.2]} />
              <meshPhysicalMaterial color="#94a3b8" transparent opacity={0.28} side={THREE.DoubleSide} />
            </mesh>
            {[-0.6, -0.2, 0.2, 0.6].map((x) =>
              [-0.4, 0, 0.4].map((z) => (
                <mesh key={`${x}-${z}`} position={[x, 0, z]}>
                  <sphereGeometry args={[0.06, 20, 16]} />
                  <meshPhysicalMaterial color="#334155" roughness={0.2} metalness={0.3} clearcoat={0.7} />
                </mesh>
              )),
            )}
          </group>
        ))}
        {/* Incident & diffracted rays on top plane (y=0) */}
        <CylinderRod start={[-dx, dy, 0]} end={[0, 0, 0]} color="#2563eb" radius={0.018} />
        <CylinderRod start={[0, 0, 0]} end={[dx, dy, 0]} color={isConstructive ? '#16a34a' : '#dc2626'} radius={0.018} />
        {/* Incident & diffracted rays on second plane (y=-dVisual) */}
        <CylinderRod start={[-dx, dy - dVisual, 0]} end={[0, -dVisual, 0]} color="#2563eb" radius={0.018} />
        <CylinderRod start={[0, -dVisual, 0]} end={[dx, dy - dVisual, 0]} color={isConstructive ? '#16a34a' : '#dc2626'} radius={0.018} />
        <Pill
          pos={[0, 0.72, 0]}
          text={`2d sin θ = ${pathDiff.toFixed(3)} nm (${phaseRatio.toFixed(2)} λ) · ${isConstructive ? 'Constructive Peak!' : 'Out of Phase'}`}
          bg={isConstructive ? 'rgba(22,163,74,0.92)' : 'rgba(190,18,60,0.9)'}
        />
      </group>
    );
  }

  // ── 12. Atomic Defects ──────────────────────────────────────────────────────
  if (topicId === '3d:atomic-defects') {
    const kind = Math.round(values.defectKind ?? 3);
    const strain = values.strainScale ?? 1.0;
    const coords = [-0.6, -0.2, 0.2, 0.6];
    return (
      <group>
        {coords.map((x, ix) =>
          coords.map((y, iy) =>
            [-0.2, 0.2].map((z, iz) => {
              // Vacancy at (1, 2, 1)
              if ((kind === 0 || kind === 3) && ix === 1 && iy === 2 && iz === 1) {
                return (
                  <mesh key={`${ix}-${iy}-${iz}`} position={[x, y, z]}>
                    <sphereGeometry args={[0.11, 20, 16]} />
                    <meshBasicMaterial color="#dc2626" wireframe />
                  </mesh>
                );
              }
              // Substitutional large impurity at (2, 1, 1)
              const isSub = (kind === 2 || kind === 3) && ix === 2 && iy === 1 && iz === 1;
              return (
                <mesh
                  key={`${ix}-${iy}-${iz}`}
                  position={[x + (isSub ? 0.02 * strain : 0), y, z]}
                >
                  <sphereGeometry args={[isSub ? 0.155 : 0.11, 24, 18]} />
                  <meshPhysicalMaterial
                    color={isSub ? '#d97706' : '#64748b'}
                    roughness={0.22}
                    metalness={0.2}
                    clearcoat={0.75}
                  />
                </mesh>
              );
            }),
          ),
        )}
        {(kind === 1 || kind === 3) && (
          <mesh position={[0, 0, 0.2]}>
            <sphereGeometry args={[0.075, 24, 18]} />
            <meshPhysicalMaterial color="#be123c" roughness={0.18} clearcoat={0.85} />
          </mesh>
        )}
        <Pill pos={[-0.2, 0.72, 0.2]} text="Vacancy (Missing Atom) · Interstitial · Substitutional" />
      </group>
    );
  }

  // ── 13. Dislocations (Edge / Screw + Burgers Circuit) ───────────────────────
  if (topicId === '3d:dislocations') {
    const isScrew = Math.round(values.dislocType ?? 0) === 1;
    const glide = values.glidePos ?? 0;
    const showCircuit = Math.round(values.showCircuit ?? 1) === 1;
    const rows = [-0.6, -0.3, 0, 0.3, 0.6];
    return (
      <group>
        {rows.map((x, ix) =>
          [-0.45, -0.15, 0.15, 0.45].map((y, iy) =>
            [-0.3, 0, 0.3].map((z, iz) => {
              // Extra half plane for edge dislocation at ix === 2 && iy >= 2
              if (!isScrew && iy < 2 && ix === 2) return null;
              const shiftX = !isScrew && iy < 2 && ix > 2 ? -0.14 : 0;
              const shiftZ = isScrew && x > 0 ? (y + 0.5) * 0.25 : 0;
              const isCore = !isScrew && ix === 2 && iy === 2;
              return (
                <mesh
                  key={`${ix}-${iy}-${iz}`}
                  position={[x + shiftX + glide * 0.15, y, z + shiftZ]}
                >
                  <sphereGeometry args={[isCore ? 0.1 : 0.08, 22, 16]} />
                  <meshPhysicalMaterial
                    color={isCore ? '#be123c' : iy >= 2 ? '#2563eb' : '#64748b'}
                    roughness={0.22}
                    metalness={0.2}
                    clearcoat={0.75}
                  />
                </mesh>
              );
            }),
          ),
        )}
        {showCircuit && (
          <CylinderRod start={[-0.3, 0.15, 0.36]} end={[0.3, 0.15, 0.36]} color="#f59e0b" radius={0.022} />
        )}
        <Pill
          pos={[0, 0.72, 0]}
          text={isScrew ? 'Screw Dislocation: b ∥ t (Helical Shear)' : 'Edge Dislocation (⊥): Extra Half-Plane · b ⊥ t'}
        />
      </group>
    );
  }

  // ── 14. Grain Boundaries ────────────────────────────────────────────────────
  if (topicId === '3d:grain-boundaries') {
    const theta = ((values.misorientation ?? 24) * Math.PI) / 180;
    const scale = values.grainSize ?? 1.0;
    const pts = [-0.3, 0, 0.3];
    return (
      <group>
        {/* Grain Boundary Dividing Plane */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.025, 1.1, 1.1]} />
          <meshPhysicalMaterial color="#f59e0b" transparent opacity={0.45} />
        </mesh>
        {/* Left Grain (Orientation 0°) */}
        <group position={[-0.48, 0, 0]} scale={scale}>
          {pts.map((x) =>
            pts.map((y) =>
              pts.map((z) => (
                <mesh key={`L-${x}-${y}-${z}`} position={[x, y, z]}>
                  <sphereGeometry args={[0.075, 20, 16]} />
                  <meshPhysicalMaterial color="#2563eb" roughness={0.2} clearcoat={0.7} />
                </mesh>
              )),
            ),
          )}
        </group>
        {/* Right Grain (Rotated by θ) */}
        <group position={[0.48, 0, 0]} rotation={[0, 0, theta]} scale={scale}>
          {pts.map((x) =>
            pts.map((y) =>
              pts.map((z) => (
                <mesh key={`R-${x}-${y}-${z}`} position={[x, y, z]}>
                  <sphereGeometry args={[0.075, 20, 16]} />
                  <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.7} />
                </mesh>
              )),
            ),
          )}
        </group>
        <Pill pos={[0, 0.72, 0]} text={`Grain Misorientation θ = ${(values.misorientation ?? 24).toFixed(0)}°`} />
      </group>
    );
  }

  // ── 15. Slip Systems ────────────────────────────────────────────────────────
  if (topicId === '3d:slip-systems') {
    const shear = values.shearStep ?? 0.45;
    const kind = Math.round(values.crystalKind ?? 0);
    return (
      <group>
        {/* Slip plane divider */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.6, 1.2]} />
          <meshPhysicalMaterial color="#f59e0b" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
        {[-0.45, -0.15, 0.15, 0.45].map((x) =>
          [-0.35, -0.12, 0.12, 0.35].map((y) =>
            [-0.3, 0, 0.3].map((z) => {
              const topHalf = y > 0;
              const dx = topHalf ? shear * 0.32 : 0;
              return (
                <mesh key={`${x}-${y}-${z}`} position={[x + dx, y, z]}>
                  <sphereGeometry args={[0.085, 22, 16]} />
                  <meshPhysicalMaterial
                    color={topHalf ? '#be123c' : '#475569'}
                    roughness={0.2}
                    metalness={0.2}
                    clearcoat={0.75}
                  />
                </mesh>
              );
            }),
          ),
        )}
        <Pill
          pos={[0, 0.72, 0]}
          text={
            kind === 0
              ? 'FCC {111}⟨110⟩ = 12 Slip Systems (Ductile)'
              : kind === 1
                ? 'BCC {110}⟨111⟩ = 12 Slip Systems'
                : 'HCP {0001}⟨112̄0⟩ = 3 Slip Systems (Limited)'
          }
        />
      </group>
    );
  }

  // ── 16. Schmid's Law ────────────────────────────────────────────────────────
  if (topicId === '3d:schmids-law') {
    const sigma = values.sigma ?? 100;
    const phi = ((values.phiDeg ?? 45) * Math.PI) / 180;
    const lam = ((values.lambdaDeg ?? 45) * Math.PI) / 180;
    const mFactor = Math.cos(phi) * Math.cos(lam);
    const tauR = sigma * mFactor;
    return (
      <group>
        {/* Single crystal cylinder */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 1.35, 36]} />
          <meshPhysicalMaterial color="#cbd5e1" transparent opacity={0.42} roughness={0.2} clearcoat={0.6} />
        </mesh>
        {/* Tilted slip plane */}
        <group rotation={[0, 0, phi]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.46, 36]} />
            <meshPhysicalMaterial color="#be123c" transparent opacity={0.65} side={THREE.DoubleSide} />
          </mesh>
          {/* Plane normal n */}
          <CylinderRod start={[0, 0, 0]} end={[0, 0.65, 0]} color="#2563eb" radius={0.018} />
          {/* Slip direction s */}
          <CylinderRod start={[0, 0, 0]} end={[0.55, 0, 0]} color="#f59e0b" radius={0.02} />
        </group>
        {/* Tensile load axis */}
        <CylinderRod start={[0, -0.9, 0]} end={[0, 0.9, 0]} color="#0f172a" radius={0.014} />
        <Pill
          pos={[0, 0.82, 0]}
          text={`τ_R = σ cos φ cos λ = ${tauR.toFixed(1)} MPa (m = ${mFactor.toFixed(3)})`}
          bg="rgba(190,18,60,0.92)"
        />
      </group>
    );
  }

  // ── 17–20. Mechanical Specimen 3D Models (Stress-Strain, Elastic-Plastic, Necking, True Stress)
  if (
    topicId === '3d:stress-strain' ||
    topicId === '3d:elastic-plastic' ||
    topicId === '3d:necking-fracture' ||
    topicId === '3d:true-vs-engineering'
  ) {
    const strain =
      topicId === '3d:stress-strain'
        ? (values.strainPct ?? 4) / 100
        : topicId === '3d:elastic-plastic'
          ? (values.unloaded ? Math.max(0, (values.totalStrainPct ?? 3.5) - 0.35) : values.totalStrainPct ?? 3.5) / 100
          : topicId === '3d:true-vs-engineering'
            ? values.engStrain ?? 0.18
            : ((values.stageProgress ?? 72) / 100) * 0.28;
    const isFractured = topicId === '3d:necking-fracture' && (values.stageProgress ?? 72) >= 98;
    const neckDepth =
      topicId === '3d:necking-fracture'
        ? Math.max(0, ((values.stageProgress ?? 72) - 50) / 50) * 0.52
        : 0;
    const gaugeLen = 1.0 * (1 + strain * 1.4);
    const radius = 0.24 / Math.sqrt(1 + strain);
    const midRadius = Math.max(0.08, radius * (1 - neckDepth));

    return (
      <group rotation={[0, 0, Math.PI / 2]}>
        {/* Original Ghost Reference Cylinder A0 */}
        <mesh>
          <cylinderGeometry args={[0.24, 0.24, 1.0, 32]} />
          <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.35} />
        </mesh>
        {/* Grip Shoulders */}
        <mesh position={[0, gaugeLen / 2 + 0.22 + (isFractured ? 0.12 : 0), 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.32, 32]} />
          <meshPhysicalMaterial color="#475569" metalness={0.55} roughness={0.25} clearcoat={0.7} />
        </mesh>
        <mesh position={[0, -gaugeLen / 2 - 0.22 - (isFractured ? 0.12 : 0), 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.32, 32]} />
          <meshPhysicalMaterial color="#475569" metalness={0.55} roughness={0.25} clearcoat={0.7} />
        </mesh>
        {/* Upper & Lower Gauge Halves (tapered at center when necking) */}
        <mesh position={[0, gaugeLen / 4 + (isFractured ? 0.12 : 0), 0]}>
          <cylinderGeometry args={[radius, midRadius, gaugeLen / 2, 36]} />
          <meshPhysicalMaterial
            color={neckDepth > 0.15 ? '#be123c' : '#2563eb'}
            metalness={0.45}
            roughness={0.22}
            clearcoat={0.8}
          />
        </mesh>
        <mesh position={[0, -gaugeLen / 4 - (isFractured ? 0.12 : 0), 0]}>
          <cylinderGeometry args={[midRadius, radius, gaugeLen / 2, 36]} />
          <meshPhysicalMaterial
            color={neckDepth > 0.15 ? '#be123c' : '#2563eb'}
            metalness={0.45}
            roughness={0.22}
            clearcoat={0.8}
          />
        </mesh>
        <Pill
          pos={[0.58, 0, 0]}
          text={
            isFractured
              ? 'Cup-and-Cone Fracture Complete!'
              : neckDepth > 0
                ? `Localized Necking · A_neck = ${(midRadius / 0.24) ** 2 * 100 | 0}% A₀`
                : `Axial Strain ε = ${(strain * 100).toFixed(1)}% · Aᵢ / A₀ = ${(1 / (1 + strain)).toFixed(3)}`
          }
        />
      </group>
    );
  }

  // ── 21. Strengthening Mechanisms ────────────────────────────────────────────
  if (topicId === '3d:strengthening') {
    const mech = Math.round(values.mechanism ?? 0);
    const intensity = values.intensity ?? 0.65;
    return (
      <group>
        <CubeEdges color="#64748b" opacity={0.6} />
        {/* Gliding dislocation line */}
        <CylinderRod start={[-0.6, 0, -0.5]} end={[-0.1, 0, 0.5]} color="#be123c" radius={0.024} />
        {mech === 0 && (
          <mesh position={[0.05, 0, 0]}>
            <boxGeometry args={[0.04, 1.0, 1.0]} />
            <meshPhysicalMaterial color="#f59e0b" transparent opacity={0.55} />
          </mesh>
        )}
        {mech === 1 &&
          [-0.2, 0.25].map((z, i) => (
            <mesh key={i} position={[0.05, 0, z]}>
              <sphereGeometry args={[0.16 * (0.8 + intensity * 0.4), 24, 18]} />
              <meshPhysicalMaterial color="#d97706" roughness={0.2} clearcoat={0.8} />
            </mesh>
          ))}
        {mech === 2 &&
          [-0.3, 0, 0.3].map((y, i) => (
            <CylinderRod
              key={i}
              start={[0.05, -0.5, y]}
              end={[0.15, 0.5, -y]}
              color="#2563eb"
              radius={0.02}
            />
          ))}
        <Pill
          pos={[0, 0.72, 0]}
          text={
            mech === 0
              ? 'Hall–Petch Grain Boundary Barrier (σ_y = σ₀ + k_y d⁻¹/²)'
              : mech === 1
                ? 'Solid-Solution Solute Strain Field Pinning'
                : 'Strain Hardening (%CW Dislocation Forest)'
          }
        />
      </group>
    );
  }

  // ── 22. Diffusion ───────────────────────────────────────────────────────────
  if (topicId === '3d:diffusion') {
    const isVacancy = Math.round(values.diffMode ?? 0) === 1;
    return (
      <group ref={pulseRef}>
        {[-0.6, -0.2, 0.2, 0.6].map((x, ix) =>
          [-0.35, 0, 0.35].map((y, iy) =>
            [-0.2, 0.2].map((z, iz) => {
              if (isVacancy && ix === 2 && iy === 1 && iz === 1) {
                return (
                  <mesh key={`${ix}-${iy}-${iz}`} position={[x, y, z]}>
                    <sphereGeometry args={[0.1, 18, 14]} />
                    <meshBasicMaterial color="#dc2626" wireframe />
                  </mesh>
                );
              }
              return (
                <mesh key={`${ix}-${iy}-${iz}`} position={[x, y, z]}>
                  <sphereGeometry args={[0.105, 22, 16]} />
                  <meshPhysicalMaterial color="#64748b" roughness={0.25} metalness={0.2} clearcoat={0.7} />
                </mesh>
              );
            }),
          ),
        )}
        {/* Diffusing carbon/solute atoms */}
        {[
          [-0.4, 0, 0],
          [0, 0.18, 0],
          [0.4, -0.18, 0],
        ].map((p, i) => (
          <group key={i}>
            <mesh position={p as Vec3}>
              <sphereGeometry args={[isVacancy ? 0.105 : 0.068, 22, 16]} />
              <meshPhysicalMaterial color="#be123c" roughness={0.18} clearcoat={0.85} />
            </mesh>
            <CylinderRod
              start={p as Vec3}
              end={[(p[0] as number) + 0.22, p[1] as number, p[2] as number]}
              color="#f59e0b"
              radius={0.014}
            />
          </group>
        ))}
        <Pill
          pos={[0, 0.72, 0]}
          text={
            isVacancy
              ? 'Vacancy Diffusion: Substitutional Atom Jumps into Adjacent Vacancy'
              : 'Interstitial Diffusion: Small Solute Darts Rapidly Through Voids'
          }
        />
      </group>
    );
  }

  // ── 23. Thermal Expansion ───────────────────────────────────────────────────
  const tempK = values.tempK ?? 650;
  const asym = values.asymmetry ?? 0.75;
  const expansion = 1 + ((tempK - 100) / 1100) * 0.28 * asym;
  const grid = [-0.45, 0, 0.45];
  return (
    <group ref={pulseRef}>
      {grid.map((x) =>
        grid.map((y) =>
          grid.map((z) => (
            <mesh
              key={`${x}-${y}-${z}`}
              position={[x * expansion, y * expansion, z * expansion]}
            >
              <sphereGeometry args={[0.1, 24, 18]} />
              <meshPhysicalMaterial
                color={tempK > 700 ? '#e11d48' : tempK > 400 ? '#f59e0b' : '#2563eb'}
                roughness={0.2}
                metalness={0.2}
                clearcoat={0.8}
              />
            </mesh>
          )),
        ),
      )}
      <Pill
        pos={[0, 0.75, 0]}
        text={`T = ${tempK} K · Lattice Expansion ΔL/L₀ = +${((expansion - 1) * 100).toFixed(2)}%`}
      />
    </group>
  );
};

/** Synchronized 2D Companion Graph for Mechanical & Materials Topics (17–20) */
export const Materials2DGraph: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  const isMechanical =
    topicId === '3d:stress-strain' ||
    topicId === '3d:elastic-plastic' ||
    topicId === '3d:necking-fracture' ||
    topicId === '3d:true-vs-engineering';
  if (!isMechanical) return null;

  const eps = useMemo(() => {
    if (topicId === '3d:stress-strain') return (values.strainPct ?? 4) / 100;
    if (topicId === '3d:elastic-plastic') return (values.totalStrainPct ?? 3.5) / 100;
    if (topicId === '3d:true-vs-engineering') return values.engStrain ?? 0.18;
    return ((values.stageProgress ?? 72) / 100) * 0.3;
  }, [topicId, values]);

  const xPx = 45 + Math.min(1, eps / 0.3) * 280;
  const yEng =
    eps < 0.02
      ? 150 - (eps / 0.02) * 70
      : eps < 0.16
        ? 80 - ((eps - 0.02) / 0.14) * 35
        : 45 + ((eps - 0.16) / 0.14) * 32;
  const yTrue = eps < 0.02 ? yEng : 80 - ((eps - 0.02) / 0.28) * 58;

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: 12,
        padding: '10px 14px',
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 4 }}>
        Live Synchronized Stress–Strain Diagram (σ vs. ε)
      </div>
      <svg viewBox="0 0 360 175" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <line x1={45} y1={150} x2={340} y2={150} stroke="#64748b" strokeWidth={1.5} />
        <line x1={45} y1={150} x2={45} y2={15} stroke="#64748b" strokeWidth={1.5} />
        <text x={315} y={166} fontSize={11} fill="#475569">
          Strain ε
        </text>
        <text x={8} y={26} fontSize={11} fill="#475569">
          σ (MPa)
        </text>
        {/* Engineering curve */}
        <path
          d="M 45 150 L 64 80 Q 135 42 195 45 Q 265 48 325 78"
          fill="none"
          stroke="#2563eb"
          strokeWidth={2.5}
        />
        {/* True stress curve */}
        {topicId === '3d:true-vs-engineering' && (
          <path
            d="M 45 150 L 64 80 Q 160 32 325 18"
            fill="none"
            stroke="#be123c"
            strokeWidth={2.5}
            strokeDasharray="5 3"
          />
        )}
        {/* Elastic unloading recovery line */}
        {topicId === '3d:elastic-plastic' && values.unloaded === 1 && (
          <line
            x1={xPx}
            y1={yEng}
            x2={Math.max(45, xPx - 19)}
            y2={150}
            stroke="#16a34a"
            strokeWidth={2.5}
            strokeDasharray="4 2"
          />
        )}
        <circle cx={xPx} cy={yEng} r={5.5} fill="#2563eb" stroke="#fff" strokeWidth={1.5} />
        {topicId === '3d:true-vs-engineering' && (
          <circle cx={xPx} cy={yTrue} r={5.5} fill="#be123c" stroke="#fff" strokeWidth={1.5} />
        )}
      </svg>
    </div>
  );
};

