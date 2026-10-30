import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Vec3 } from '../visualization/crystalMath';
import { CylinderRod } from '../crystal/SceneKit';

const Pill: React.FC<{ pos: Vec3; text: string; bg?: string }> = ({ pos, text, bg }) => (
  <Html position={pos} center className="lx-cl-label" zIndexRange={[10, 0]}>
    <span style={bg ? { background: bg } : undefined}>{text}</span>
  </Html>
);

export const Indu3DGroup: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  const clockRef = useRef(0);
  const moverRef = useRef<THREE.Group | null>(null);

  useFrame((_, dt) => {
    clockRef.current += dt;
    if (moverRef.current) {
      const speed = values.lineSpeed ?? values.flowSpeed ?? values.speed ?? 1.0;
      moverRef.current.position.x = ((clockRef.current * 0.45 * speed) % 1.6) - 0.8;
    }
  });

  // ── 24. Product Layout (Assembly Line) ──────────────────────────────────────
  if (topicId === '3d:product-layout') {
    const stations = Math.round(values.stations ?? 5);
    const xs = Array.from({ length: stations }, (_, i) => -1.0 + (2.0 * i) / Math.max(1, stations - 1));
    return (
      <group>
        {/* Conveyor Belt Spine */}
        <mesh position={[0, -0.25, 0]}>
          <boxGeometry args={[2.5, 0.12, 0.38]} />
          <meshPhysicalMaterial color="#334155" roughness={0.35} metalness={0.4} />
        </mesh>
        {/* Workstations along the line */}
        {xs.map((x, i) => (
          <group key={i} position={[x, 0.02, -0.38]}>
            <mesh>
              <boxGeometry args={[0.26, 0.42, 0.28]} />
              <meshPhysicalMaterial color="#2563eb" roughness={0.22} metalness={0.25} clearcoat={0.7} />
            </mesh>
            <CylinderRod start={[0, 0.2, 0.1]} end={[0, 0.05, 0.35]} color="#f59e0b" radius={0.018} />
          </group>
        ))}
        {/* Moving products on the line */}
        <group ref={moverRef}>
          {[-0.5, 0, 0.5].map((dx, i) => (
            <mesh key={i} position={[dx, -0.1, 0]}>
              <boxGeometry args={[0.16, 0.16, 0.16]} />
              <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.8} />
            </mesh>
          ))}
        </group>
        <Pill pos={[0, 0.65, 0]} text={`Product Layout: ${stations} Sequential Stations · Continuous Paced Flow`} />
      </group>
    );
  }

  // ── 25. Process Layout (Functional Job Shop) ────────────────────────────────
  if (topicId === '3d:process-layout') {
    const opt = Math.round(values.swapDepts ?? 0) === 1;
    const depts: { name: string; pos: Vec3; col: string }[] = [
      { name: 'Lathes', pos: [-0.7, -0.1, -0.5], col: '#2563eb' },
      { name: 'Milling', pos: opt ? [-0.7, -0.1, 0.5] : [0.7, -0.1, 0.5], col: '#d97706' },
      { name: 'Drilling', pos: opt ? [0.7, -0.1, -0.5] : [-0.7, -0.1, 0.5], col: '#16a34a' },
      { name: 'Assembly', pos: [0.7, -0.1, opt ? 0.5 : -0.5], col: '#be123c' },
    ];
    return (
      <group>
        {depts.map((d, i) => (
          <group key={i} position={d.pos}>
            <mesh position={[0, -0.18, 0]}>
              <boxGeometry args={[0.9, 0.04, 0.7]} />
              <meshPhysicalMaterial color={d.col} transparent opacity={0.22} />
            </mesh>
            {[-0.22, 0.22].map((dx, j) => (
              <mesh key={j} position={[dx, 0.04, 0]}>
                <boxGeometry args={[0.26, 0.34, 0.26]} />
                <meshPhysicalMaterial color={d.col} roughness={0.22} metalness={0.2} clearcoat={0.7} />
              </mesh>
            ))}
            <Pill pos={[0, 0.36, 0]} text={d.name} bg="rgba(15,23,42,0.88)" />
          </group>
        ))}
        {/* Routing flow arrows */}
        <CylinderRod start={depts[0].pos} end={depts[1].pos} color="#be123c" radius={0.02} />
        <CylinderRod start={depts[1].pos} end={depts[2].pos} color="#2563eb" radius={0.02} />
        <CylinderRod start={depts[2].pos} end={depts[3].pos} color="#16a34a" radius={0.02} />
        <Pill
          pos={[0, 0.72, 0]}
          text={opt ? 'REL-Optimized Process Layout (Short Adjacency Links)' : 'Unoptimized Job-Shop (Long Diagonal Cross-Traffic)'}
        />
      </group>
    );
  }

  // ── 26. Cellular Layout (U-Shaped GT Cells) ─────────────────────────────────
  if (topicId === '3d:cellular-layout') {
    const cellOffsets = [-0.75, 0.75];
    const uPts: Vec3[] = [
      [-0.28, 0, 0.35],
      [-0.28, 0, -0.35],
      [0, 0, -0.45],
      [0.28, 0, -0.35],
      [0.28, 0, 0.35],
    ];
    return (
      <group>
        {cellOffsets.map((cx, ci) => (
          <group key={ci} position={[cx, -0.1, 0]}>
            {uPts.map((p, i) => (
              <group key={i}>
                <mesh position={p}>
                  <boxGeometry args={[0.2, 0.32, 0.2]} />
                  <meshPhysicalMaterial
                    color={ci === 0 ? '#2563eb' : '#be123c'}
                    roughness={0.22}
                    metalness={0.2}
                    clearcoat={0.75}
                  />
                </mesh>
                {i < uPts.length - 1 && (
                  <CylinderRod start={p} end={uPts[i + 1]} color="#f59e0b" radius={0.016} />
                )}
              </group>
            ))}
            {/* Operator inside the U-cell */}
            <mesh position={[0, 0.05, 0.05]}>
              <cylinderGeometry args={[0.09, 0.09, 0.36, 20]} />
              <meshPhysicalMaterial color="#16a34a" roughness={0.25} clearcoat={0.7} />
            </mesh>
            <Pill pos={[0, 0.42, 0]} text={`U-Cell ${ci === 0 ? 'A (Shafts)' : 'B (Gears)'}`} />
          </group>
        ))}
        <Pill pos={[0, 0.72, 0]} text="Cellular Layout: U-Shaped Part-Family Cells · Zero Backtracking" />
      </group>
    );
  }

  // ── 27. Fixed-Position Layout ───────────────────────────────────────────────
  if (topicId === '3d:fixed-position-layout') {
    const phase = Math.round(values.buildPhase ?? 2);
    const orbit = values.craneAngle ?? 1.0;
    return (
      <group>
        {/* Stationary Central Aircraft Fuselage & Wings */}
        <mesh position={[0, -0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 1.5, 28]} />
          <meshPhysicalMaterial color="#2563eb" roughness={0.2} metalness={0.35} clearcoat={0.8} />
        </mesh>
        {phase >= 2 && (
          <mesh position={[0, -0.05, 0]}>
            <boxGeometry args={[0.32, 0.05, 1.5]} />
            <meshPhysicalMaterial color="#64748b" roughness={0.22} metalness={0.4} clearcoat={0.7} />
          </mesh>
        )}
        {phase >= 3 &&
          [-0.45, 0.45].map((z, i) => (
            <mesh key={i} position={[0.1, -0.14, z]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.09, 0.09, 0.28, 20]} />
              <meshPhysicalMaterial color="#be123c" roughness={0.2} metalness={0.4} />
            </mesh>
          ))}
        {/* Mobile Cranes & Staging Teams around perimeter */}
        {[0, 1, 2, 3].map((i) => {
          const ang = (i * Math.PI) / 2 + orbit * 0.5;
          const p: Vec3 = [Math.cos(ang) * 0.95, 0, Math.sin(ang) * 0.95];
          return (
            <group key={i} position={p}>
              <mesh>
                <boxGeometry args={[0.22, 0.34, 0.22]} />
                <meshPhysicalMaterial color="#f59e0b" roughness={0.25} clearcoat={0.7} />
              </mesh>
              <CylinderRod start={[0, 0.1, 0]} end={[-p[0] * 0.55, 0.05, -p[2] * 0.55]} color="#475569" radius={0.014} />
            </group>
          );
        })}
        <Pill pos={[0, 0.72, 0]} text="Fixed-Position Layout: Product Stationary at Center · Cranes & Crews Converge" />
      </group>
    );
  }

  // ── 28. Hybrid Layout ───────────────────────────────────────────────────────
  if (topicId === '3d:hybrid-layout') {
    return (
      <group>
        {/* Upstream fabrication cells on left */}
        {[-0.45, 0.45].map((z, i) => (
          <group key={i} position={[-0.65, -0.05, z]}>
            <mesh>
              <boxGeometry args={[0.55, 0.3, 0.45]} />
              <meshPhysicalMaterial color="#2563eb" roughness={0.22} clearcoat={0.7} />
            </mesh>
            <CylinderRod start={[0.25, 0, 0]} end={[0.65, 0, -z]} color="#f59e0b" radius={0.018} />
          </group>
        ))}
        {/* Downstream Final Assembly Conveyor Spine on right */}
        <mesh position={[0.45, -0.18, 0]}>
          <boxGeometry args={[1.2, 0.12, 0.34]} />
          <meshPhysicalMaterial color="#334155" roughness={0.3} metalness={0.4} />
        </mesh>
        {[-0.05, 0.45, 0.95].map((x, i) => (
          <mesh key={i} position={[x, 0.02, 0]}>
            <boxGeometry args={[0.22, 0.24, 0.22]} />
            <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.8} />
          </mesh>
        ))}
        <Pill pos={[0, 0.72, 0]} text="Hybrid Layout: Upstream Feeder Cells → Downstream Paced Assembly Line" />
      </group>
    );
  }

  // ── 29. Material Handling (Conveyors, Forklifts, Bridge Cranes, AGVs) ───────
  if (topicId === '3d:material-handling') {
    const craneX = (values.craneX ?? 0.2) * 0.7;
    return (
      <group>
        {/* Overhead Bridge Crane Rails & Trolley */}
        <CylinderRod start={[-1.1, 0.55, -0.6]} end={[1.1, 0.55, -0.6]} color="#64748b" radius={0.025} />
        <CylinderRod start={[-1.1, 0.55, 0.6]} end={[1.1, 0.55, 0.6]} color="#64748b" radius={0.025} />
        <CylinderRod start={[craneX, 0.55, -0.6]} end={[craneX, 0.55, 0.6]} color="#f59e0b" radius={0.032} />
        <CylinderRod start={[craneX, 0.55, 0]} end={[craneX, 0.15, 0]} color="#0f172a" radius={0.014} />
        <mesh position={[craneX, 0.06, 0]}>
          <boxGeometry args={[0.24, 0.22, 0.24]} />
          <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.75} />
        </mesh>
        {/* Belt Conveyor */}
        <mesh position={[-0.55, -0.25, -0.42]}>
          <boxGeometry args={[1.0, 0.12, 0.28]} />
          <meshPhysicalMaterial color="#334155" roughness={0.3} />
        </mesh>
        {/* AGV & Forklift on floor */}
        <mesh position={[0.55, -0.22, 0.4]}>
          <boxGeometry args={[0.38, 0.14, 0.28]} />
          <meshPhysicalMaterial color="#2563eb" roughness={0.2} clearcoat={0.8} />
        </mesh>
        <Pill pos={[0, 0.76, 0]} text="Overhead Bridge Crane (Fixed Area) · Belt Conveyor (Fixed Path) · AGV/Forklift (Variable Path)" />
      </group>
    );
  }

  // ── 30. Warehouse Routing (TSP & Clark-Wright Aisles) ───────────────────────
  if (topicId === '3d:warehouse-routing') {
    const strat = Math.round(values.routeStrategy ?? 2);
    const depot: Vec3 = [0, -0.2, 0.75];
    const picks: Vec3[] = [
      [-0.65, -0.2, 0.25],
      [-0.65, -0.2, -0.45],
      [0, -0.2, -0.55],
      [0.65, -0.2, -0.35],
      [0.65, -0.2, 0.3],
    ];
    return (
      <group>
        {/* Warehouse Storage Racks */}
        {[-0.35, 0.35].map((x, i) => (
          <mesh key={i} position={[x, 0.05, -0.1]}>
            <boxGeometry args={[0.24, 0.55, 1.1]} />
            <meshPhysicalMaterial color="#64748b" roughness={0.3} metalness={0.25} transparent opacity={0.65} />
          </mesh>
        ))}
        {/* Depot Dock */}
        <mesh position={depot}>
          <boxGeometry args={[0.28, 0.22, 0.22]} />
          <meshPhysicalMaterial color="#16a34a" roughness={0.2} clearcoat={0.8} />
        </mesh>
        {picks.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.085, 22, 16]} />
            <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.8} />
          </mesh>
        ))}
        {strat === 0
          ? picks.map((p, i) => <CylinderRod key={i} start={depot} end={p} color="#dc2626" radius={0.015} />)
          : [depot, ...picks, depot].map((p, i, arr) =>
              i < arr.length - 1 ? (
                <CylinderRod
                  key={i}
                  start={p}
                  end={arr[i + 1]}
                  color={strat === 2 ? '#16a34a' : '#2563eb'}
                  radius={0.02}
                />
              ) : null,
            )}
        <Pill
          pos={[0, 0.72, 0]}
          text={
            strat === 0
              ? 'Naive Star Trips: High Out-and-Back Travel'
              : strat === 1
                ? 'Nearest-Neighbor TSP Single-Loop Tour'
                : 'Clark–Wright Savings Consolidated Route (Min Distance)'
          }
        />
      </group>
    );
  }

  // ── 31. Manufacturing Processes (Cutting, Casting, Forming, Joining) ────────
  if (topicId === '3d:manufacturing-processes') {
    const kind = Math.round(values.processKind ?? 0);
    const prog = values.cyclePos ?? 0.6;
    return (
      <group>
        {/* Workpiece Base Billet */}
        <mesh position={[0, -0.18, 0]}>
          <boxGeometry args={[1.1, kind === 2 ? 0.35 * (1 - prog * 0.35) : 0.32, 0.75]} />
          <meshPhysicalMaterial
            color={kind === 1 ? '#ea580c' : '#475569'}
            roughness={0.22}
            metalness={0.5}
            clearcoat={0.75}
          />
        </mesh>
        {/* Active Tool Head */}
        <mesh position={[0, 0.35 - prog * 0.22, 0]}>
          <cylinderGeometry args={[kind === 2 ? 0.45 : 0.14, kind === 3 ? 0.04 : 0.14, 0.5, 28]} />
          <meshPhysicalMaterial color="#be123c" roughness={0.2} metalness={0.4} clearcoat={0.8} />
        </mesh>
        <Pill
          pos={[0, 0.74, 0]}
          text={
            kind === 0
              ? '1. Cutting (CNC Milling): Subtractive Chip Removal'
              : kind === 1
                ? '2. Casting: Molten Metal Solidifies in Mold Cavity'
                : kind === 2
                  ? '3. Forming (Forging): Plastic Compression Without Chip Loss'
                  : '4. Joining (Welding): Permanent Coalescence Along Seam'
          }
        />
      </group>
    );
  }

  // ── 32. Bill of Materials (Exploded Assembly) ───────────────────────────────
  if (topicId === '3d:bom-exploded') {
    const exp = values.explode ?? 0.65;
    const qty = Math.round(values.orderQty ?? 50);
    return (
      <group>
        {/* Level 0 / Level 1 Main Top Frame Plate */}
        <mesh position={[0, 0.25 + exp * 0.45, 0]}>
          <boxGeometry args={[1.1, 0.14, 0.7]} />
          <meshPhysicalMaterial color="#2563eb" roughness={0.2} metalness={0.3} clearcoat={0.8} />
        </mesh>
        {/* Level 1: 2 Axle Subassemblies */}
        {[-0.38, 0.38].map((x, i) => (
          <group key={i} position={[x, 0, 0]}>
            <CylinderRod start={[0, 0, -0.45]} end={[0, 0, 0.45]} color="#64748b" radius={0.04} />
            {/* Level 2: 2 Wheels per Axle (4 total) */}
            {[-0.45 - exp * 0.35, 0.45 + exp * 0.35].map((z, j) => (
              <mesh key={j} position={[0, -exp * 0.2, z]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.1, 28]} />
                <meshPhysicalMaterial color="#be123c" roughness={0.22} clearcoat={0.75} />
              </mesh>
            ))}
          </group>
        ))}
        <Pill
          pos={[0, 0.85, 0]}
          text={`BOM Explosion (${qty} Units): ${qty} Frames · ${qty * 2} Axles · ${qty * 4} Wheels · ${qty * 8} Bearings`}
        />
      </group>
    );
  }

  // ── 33. Work Design & Ergonomics ────────────────────────────────────────────
  const binDist = (values.binDist ?? 35) / 60;
  const benchY = ((values.benchHeight ?? 95) - 95) * 0.01;
  const isOptimal = (values.binDist ?? 35) <= 45;
  return (
    <group position={[0, benchY, 0]}>
      {/* Workbench surface */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1.8, 0.08, 1.1]} />
        <meshPhysicalMaterial color="#cbd5e1" roughness={0.3} />
      </mesh>
      {/* Normal Reach Envelope (Green inner semicircle) */}
      <mesh position={[0, -0.14, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 36]} />
        <meshPhysicalMaterial color="#16a34a" transparent opacity={0.35} />
      </mesh>
      {/* Maximum Reach Envelope (Amber outer semicircle) */}
      <mesh position={[0, -0.15, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.92, 36]} />
        <meshPhysicalMaterial color="#f59e0b" transparent opacity={0.22} />
      </mesh>
      {/* Operator Torso */}
      <mesh position={[0, 0.15, 0.55]}>
        <cylinderGeometry args={[0.14, 0.16, 0.55, 24]} />
        <meshPhysicalMaterial color="#2563eb" roughness={0.22} clearcoat={0.7} />
      </mesh>
      {/* Parts Bins at adjustable reach radius */}
      {[-0.35, 0, 0.35].map((x, i) => (
        <mesh key={i} position={[x, -0.06, 0.35 - binDist]}>
          <boxGeometry args={[0.2, 0.16, 0.18]} />
          <meshPhysicalMaterial color={isOptimal ? '#16a34a' : '#dc2626'} roughness={0.2} clearcoat={0.8} />
        </mesh>
      ))}
      <Pill
        pos={[0, 0.72, 0]}
        text={
          isOptimal
            ? 'Ergonomic Normal Reach Zone: Forearm Sweep · Low Fatigue'
            : 'Overextended Reach (>45 cm): Requires Shoulder/Trunk Bending'
        }
        bg={isOptimal ? 'rgba(22,163,74,0.92)' : 'rgba(220,38,38,0.92)'}
      />
    </group>
  );
};

