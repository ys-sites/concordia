import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Vec3 } from '../visualization/crystalMath';
import { CylinderRod } from '../crystal/SceneKit';
import { FactoryMachine } from './ProductLayoutScene';

const Pill: React.FC<{ pos: Vec3; text: string; bg?: string }> = ({ pos, text, bg }) => (
  <Html position={pos} center className="lx-cl-label" zIndexRange={[10, 0]}>
    <span style={bg ? { background: bg } : undefined}>{text}</span>
  </Html>
);

/** Small, distinct machine silhouettes keep layout diagrams tied to a real shop floor. */
const ShopMachine: React.FC<{ kind: 'lathe' | 'mill' | 'drill' | 'assembly'; color?: string }> = ({ kind, color }) => <FactoryMachine kind={kind} color={color} />;

const FactoryFloor: React.FC = () => <group>
  <mesh position={[0, -0.37, 0]}><boxGeometry args={[2.7, 0.06, 1.85]} /><meshStandardMaterial color="#efe6d3" roughness={0.9} /></mesh>
  {[-0.7, 0.7].map((z) => <mesh key={z} position={[0, -0.335, z]}><boxGeometry args={[2.5, 0.006, 0.02]} /><meshStandardMaterial color="#9a3b2a" /></mesh>)}
</group>;

export const Indu3DGroup: React.FC<{
  topicId: string;
  values: Record<string, number>;
  playing?: boolean;
}> = ({ topicId, values, playing = false }) => {
  const clockRef = useRef(0);
  const moverRef = useRef<THREE.Group | null>(null);

  useFrame((_, dt) => {
    if (!playing) return;
    clockRef.current += dt;
    if (moverRef.current) {
      const speed = values.lineSpeed ?? values.flowSpeed ?? values.speed ?? 1.0;
      if (topicId === '3d:cellular-layout') {
        const points = [[-1.03, 0.35], [-1.03, -0.35], [-0.75, -0.45], [-0.47, -0.35], [-0.47, 0.35]];
        const progress = (clockRef.current * 0.4 * speed) % (points.length - 1);
        const index = Math.floor(progress), t = progress - index;
        moverRef.current.position.x = points[index][0] * (1 - t) + points[index + 1][0] * t + (Math.round(values.cellFocus ?? 0) === 2 ? 1.5 : 0);
        moverRef.current.position.z = points[index][1] * (1 - t) + points[index + 1][1] * t;
      } else {
        moverRef.current.position.x = ((clockRef.current * 0.45 * speed) % 1.6) - 0.8;
      }
    }
  });

  // ── 24. Product Layout (Assembly Line) ──────────────────────────────────────
  if (topicId === '3d:product-layout') {
    const stations = Math.round(values.stations ?? 5);
    const xs = Array.from({ length: stations }, (_, i) => -1.0 + (2.0 * i) / Math.max(1, stations - 1));
    return (
      <group>
        <FactoryFloor />
        {/* Conveyor Belt Spine */}
        <mesh position={[0, -0.25, 0]}>
          <boxGeometry args={[2.5, 0.12, 0.38]} />
          <meshPhysicalMaterial color="#334155" roughness={0.35} metalness={0.4} />
        </mesh>
        {/* Workstations along the line */}
        {xs.map((x, i) => (
          <group key={i} position={[x, 0.02, -0.38]}>
            <ShopMachine kind={(['lathe', 'mill', 'drill', 'assembly'] as const)[i % 4]} color="#64748b" />
            <CylinderRod start={[0, 0.12, 0.1]} end={[0, -0.03, 0.35]} color="#f59e0b" radius={0.018} />
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
        <FactoryFloor />
        {depts.map((d, i) => (
          <group key={i} position={d.pos}>
            <mesh position={[0, -0.18, 0]}>
              <boxGeometry args={[0.9, 0.04, 0.7]} />
              <meshPhysicalMaterial color={d.col} transparent opacity={0.22} />
            </mesh>
            {[-0.22, 0.22].map((dx, j) => <group key={j} position={[dx, 0.04, 0]}><ShopMachine kind={(['lathe', 'mill', 'drill', 'assembly'] as const)[i]} color={d.col} /></group>)}
            <Pill pos={[0, 0.36, 0]} text={d.name} bg="rgba(15,23,42,0.88)" />
          </group>
        ))}
        {/* Routing flow arrows */}
        {(values.jobRoute ?? 2) !== 1 && <group>
          <CylinderRod start={depts[0].pos} end={depts[1].pos} color="#be123c" radius={0.02} />
          <CylinderRod start={depts[1].pos} end={depts[3].pos} color="#be123c" radius={0.02} />
        </group>}
        {(values.jobRoute ?? 2) !== 0 && <group>
          <CylinderRod start={depts[2].pos} end={depts[0].pos} color="#2563eb" radius={0.015} />
          <CylinderRod start={depts[0].pos} end={depts[3].pos} color="#2563eb" radius={0.015} />
        </group>}
        <Pill
          pos={[0, 0.72, 0]}
          text={opt ? 'Department arrangement B: compare the travel paths' : 'Department arrangement A: compare the travel paths'}
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
        <FactoryFloor />
        {cellOffsets.map((cx, ci) => (values.cellFocus ?? 0) !== 0 && (values.cellFocus ?? 0) !== ci + 1 ? null : (
          <group key={ci} position={[cx, -0.1, 0]}>
            {uPts.map((p, i) => (
              <group key={i}>
                <group position={p} scale={0.7}><ShopMachine kind={(['lathe', 'mill', 'drill', 'mill', 'assembly'] as const)[i]} color={ci === 0 ? '#2563eb' : '#be123c'} /></group>
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
        <group ref={moverRef} position={[(values.cellFocus ?? 0) === 2 ? 0.47 : -1.03, -0.04, 0.35]}><mesh><sphereGeometry args={[0.07, 16, 12]} /><meshStandardMaterial color="#f59e0b" /></mesh></group>
        <Pill pos={[0, 0.72, 0]} text="Cellular layout: different machines grouped for each part family" />
      </group>
    );
  }

  // ── 27. Fixed-Position Layout ───────────────────────────────────────────────
  if (topicId === '3d:fixed-position-layout') {
    const phase = Math.round(values.buildPhase ?? 2);
    const orbit = values.craneAngle ?? 1.0;
    return (
      <group>
        <FactoryFloor />
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
        {/* Gantry stays over the build bay while its trolley brings parts to the stationary product. */}
        {[-0.95, 0.95].map(z => <CylinderRod key={z} start={[0, -0.32, z]} end={[0, 0.62, z]} color="#d97706" radius={0.045} />)}
        <CylinderRod start={[0, 0.62, -0.95]} end={[0, 0.62, 0.95]} color="#d97706" radius={0.05} />
        <mesh position={[0, 0.59, Math.max(-0.6, Math.min(0.6, (orbit - 0.85) * 0.8))]}><boxGeometry args={[0.15, 0.12, 0.15]} /><meshStandardMaterial color="#334155" /></mesh>
        <CylinderRod start={[0, 0.55, Math.max(-0.6, Math.min(0.6, (orbit - 0.85) * 0.8))]} end={[0, 0.22, Math.max(-0.6, Math.min(0.6, (orbit - 0.85) * 0.8))]} color="#334155" radius={0.012} />
        <Pill pos={[0, 0.82, 0]} text="Fixed-position layout: the aircraft stays in place while resources come to it" />
      </group>
    );
  }

  // ── 28. Hybrid Layout ───────────────────────────────────────────────────────
  if (topicId === '3d:hybrid-layout') {
    return (
      <group>
        <FactoryFloor />
        {/* Upstream fabrication cells on left */}
        {(values.zoneHighlight ?? 0) !== 2 && [-0.45, 0.45].map((z, i) => (
          <group key={i} position={[-0.65, -0.05, z]}>
            <group position={[-0.12, 0, 0]} scale={0.85}><ShopMachine kind="mill" color="#64748b" /></group>
            <group position={[0.2, 0, 0]} scale={0.85}><ShopMachine kind="drill" color="#64748b" /></group>
            <CylinderRod start={[0.25, 0, 0]} end={[0.65, 0, -z]} color="#f59e0b" radius={0.018} />
          </group>
        ))}
        {/* Downstream Final Assembly Conveyor Spine on right */}
        {(values.zoneHighlight ?? 0) !== 1 && <group><mesh position={[0.45, -0.18, 0]}>
          <boxGeometry args={[1.2, 0.12, 0.34]} />
          <meshPhysicalMaterial color="#334155" roughness={0.3} metalness={0.4} />
        </mesh>
        {[-0.05, 0.45, 0.95].map((x, i) => (
          <mesh key={i} position={[x, 0.02, 0]}>
            <boxGeometry args={[0.22, 0.24, 0.22]} />
            <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.8} />
          </mesh>
        ))}
        <group ref={moverRef} position={[-0.8, 0.02, 0]}><mesh><boxGeometry args={[0.12, 0.12, 0.12]} /><meshStandardMaterial color="#f59e0b" /></mesh></group></group>}
        <Pill pos={[0, 0.72, 0]} text="Hybrid Layout: Upstream Feeder Cells → Downstream Paced Assembly Line" />
      </group>
    );
  }

  // ── 29. Material Handling (Conveyors, Forklifts, Bridge Cranes, AGVs) ───────
  if (topicId === '3d:material-handling') {
    const craneX = (values.craneX ?? 0.2) * 0.7;
    const focus = Math.round(values.equipFocus ?? 0);
    return (
      <group>
        <FactoryFloor />
        {/* Overhead Bridge Crane Rails & Trolley */}
        {(focus === 0 || focus === 2) && <group>
        <CylinderRod start={[-1.1, 0.55, -0.6]} end={[1.1, 0.55, -0.6]} color="#64748b" radius={0.025} />
        <CylinderRod start={[-1.1, 0.55, 0.6]} end={[1.1, 0.55, 0.6]} color="#64748b" radius={0.025} />
        <CylinderRod start={[craneX, 0.55, -0.6]} end={[craneX, 0.55, 0.6]} color="#f59e0b" radius={0.032} />
        <CylinderRod start={[craneX, 0.55, 0]} end={[craneX, 0.15, 0]} color="#0f172a" radius={0.014} />
        <mesh position={[craneX, 0.06, 0]}>
          <boxGeometry args={[0.24, 0.22, 0.24]} />
          <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.75} />
        </mesh>
        </group>}
        {/* Belt Conveyor */}
        {(focus === 0 || focus === 1) && <group>
        <mesh position={[-0.55, -0.25, -0.42]}>
          <boxGeometry args={[1.0, 0.12, 0.28]} />
          <meshPhysicalMaterial color="#334155" roughness={0.3} />
        </mesh>
        {[-0.8, -0.45, -0.1].map(x => <mesh key={x} position={[x, -0.14, -0.42]}><boxGeometry args={[0.17, 0.13, 0.17]} /><meshStandardMaterial color="#b45309" /></mesh>)}
        </group>}
        {/* AGV & Forklift on floor */}
        {(focus === 0 || focus === 3) && <group>
        <mesh position={[0.55, -0.22, 0.4]}>
          <boxGeometry args={[0.38, 0.14, 0.28]} />
          <meshPhysicalMaterial color="#2563eb" roughness={0.2} clearcoat={0.8} />
        </mesh>
        {[-0.12, 0.12].map(z => <mesh key={z} position={[0.55, -0.29, 0.4 + z]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.07, 0.07, 0.04, 16]} /><meshStandardMaterial color="#1e293b" /></mesh>)}
        <CylinderRod start={[0.73, -0.2, 0.4]} end={[0.73, 0.17, 0.4]} color="#334155" radius={0.018} />
        <CylinderRod start={[0.73, -0.2, 0.4]} end={[0.93, -0.2, 0.4]} color="#334155" radius={0.018} />
        <mesh position={[-0.3, -0.26, 0.45]}><boxGeometry args={[0.36, 0.1, 0.24]} /><meshStandardMaterial color="#0f766e" /></mesh>
        <mesh position={[-0.3, -0.15, 0.45]}><boxGeometry args={[0.23, 0.12, 0.18]} /><meshStandardMaterial color="#b45309" /></mesh>
        </group>}
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
      [0, -0.2, 0.15],
    ].slice(0, Math.max(3, Math.min(6, Math.round(values.stopsCount ?? 5)))) as Vec3[];
    // Use the front cross-aisle for every aisle change; no route cuts through racking.
    const route: Vec3[] = [depot];
    const visit = (p: Vec3) => {
      const previous = route[route.length - 1];
      if (previous[0] !== p[0]) route.push([previous[0], -0.2, 0.75], [p[0], -0.2, 0.75]);
      route.push(p);
    };
    picks.forEach(p => { visit(p); if (strat === 0) visit(depot); });
    if (strat !== 0) visit(depot);
    return (
      <group>
        <FactoryFloor />
        {/* Warehouse Storage Racks */}
        {[-0.35, 0.35].map((x, i) => <group key={i} position={[x, 0, -0.1]}>
          {[-0.09, 0.09].flatMap(dx => [-0.5, 0.5].map(z => <CylinderRod key={`${dx}:${z}`} start={[dx, -0.3, z]} end={[dx, 0.38, z]} color="#475569" radius={0.015} />))}
          {[-0.23, -0.02, 0.19].map(y => <group key={y}>
            <mesh position={[0, y, 0]}><boxGeometry args={[0.24, 0.025, 1.05]} /><meshStandardMaterial color="#64748b" /></mesh>
            {[-0.32, 0, 0.32].map(z => <mesh key={z} position={[0, y + 0.075, z]}><boxGeometry args={[0.19, 0.12, 0.23]} /><meshStandardMaterial color="#b98c5b" roughness={0.9} /></mesh>)}
          </group>)}
        </group>)}
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
        {route.slice(1).map((p, i) => <CylinderRod key={i} start={route[i]} end={p} color={strat === 0 ? '#dc2626' : '#2563eb'} radius={0.015} />)}
        <Pill
          pos={[0, 0.72, 0]}
          text={
            strat === 0
              ? 'Example: return to the depot after each pick'
              : 'Example: combine picks in one aisle-following trip (schematic)'
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
        <FactoryFloor />
        {kind === 0 && <group>
          {/* The tool travels across the billet. The shallow groove is a schematic of material removed. */}
          <mesh position={[0, -0.24, 0]}><boxGeometry args={[1.65, 0.14, 0.95]} /><meshStandardMaterial color="#475569" metalness={0.5} roughness={0.5} /></mesh>
          <mesh position={[-0.7, 0.05, -0.3]}><boxGeometry args={[0.2, 0.65, 0.2]} /><meshStandardMaterial color="#64748b" /></mesh>
          <mesh position={[0, 0.35, -0.3]}><boxGeometry args={[1.55, 0.13, 0.22]} /><meshStandardMaterial color="#64748b" /></mesh>
          <mesh position={[0, -0.09, 0]}><boxGeometry args={[1.05, 0.18, 0.55]} /><meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.35} /></mesh>
          <mesh position={[-0.46 + prog * 0.92, 0.14, 0]}><cylinderGeometry args={[0.08, 0.06, 0.37, 24]} /><meshStandardMaterial color="#334155" metalness={0.8} roughness={0.25} /></mesh>
          {prog > 0 && <mesh position={[-0.46 + prog * 0.46, 0.005, 0]}><boxGeometry args={[Math.max(0.01, prog * 0.92), 0.008, 0.16]} /><meshStandardMaterial color="#475569" /></mesh>}
        </group>}
        {kind === 1 && <group>
          {/* Cross-sectional mold: orange level illustrates filling, not a solidification solver. */}
          <mesh position={[0, -0.22, 0]}><boxGeometry args={[1.1, 0.1, 0.75]} /><meshStandardMaterial color="#78716c" /></mesh>
          {[-0.5, 0.5].map(x => <mesh key={x} position={[x, -0.05, 0]}><boxGeometry args={[0.1, 0.32, 0.75]} /><meshStandardMaterial color="#78716c" /></mesh>)}
          {[-0.33, 0.33].map(z => <mesh key={z} position={[0, -0.05, z]}><boxGeometry args={[0.9, 0.32, 0.09]} /><meshStandardMaterial color="#a8a29e" /></mesh>)}
          <mesh position={[0, -0.16 + prog * 0.13, 0]}><boxGeometry args={[0.85, Math.max(0.01, prog * 0.26), 0.55]} /><meshStandardMaterial color="#f97316" emissive="#9a3412" emissiveIntensity={0.4} /></mesh>
          <mesh position={[-0.5, 0.36, 0]} rotation={[0, 0, -0.5]}><cylinderGeometry args={[0.14, 0.1, 0.26, 20]} /><meshStandardMaterial color="#475569" metalness={0.5} /></mesh>
          {prog < 1 && <CylinderRod start={[-0.35, 0.31, 0]} end={[-0.18, -0.15 + prog * 0.26, 0]} color="#fb923c" radius={0.025} />}
        </group>}
        {kind === 2 && <group>
          <mesh position={[0, -0.26, 0]}><boxGeometry args={[1.3, 0.16, 0.8]} /><meshStandardMaterial color="#475569" /></mesh>
          {[-0.55, 0.55].map(x => <mesh key={x} position={[x, 0.08, -0.22]}><boxGeometry args={[0.13, 0.62, 0.13]} /><meshStandardMaterial color="#64748b" /></mesh>)}
          <mesh position={[0, 0.39, -0.22]}><boxGeometry args={[1.25, 0.14, 0.2]} /><meshStandardMaterial color="#475569" /></mesh>
          <mesh position={[0, 0.2 - prog * 0.13, 0]}><boxGeometry args={[0.9, 0.12, 0.6]} /><meshStandardMaterial color="#334155" metalness={0.4} /></mesh>
          <mesh position={[0, -0.12 - prog * 0.045, 0]}><boxGeometry args={[0.55 + prog * 0.24, 0.24 - prog * 0.09, 0.4 + prog * 0.1]} /><meshStandardMaterial color="#f97316" emissive="#9a3412" emissiveIntensity={0.35} /></mesh>
        </group>}
        {kind === 3 && <group>
          <mesh position={[0, -0.24, 0]}><boxGeometry args={[1.5, 0.12, 0.9]} /><meshStandardMaterial color="#475569" metalness={0.4} /></mesh>
          {[-0.3, 0.3].map(x => <mesh key={x} position={[x, -0.12, 0]}><boxGeometry args={[0.58, 0.12, 0.58]} /><meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.35} /></mesh>)}
          <CylinderRod start={[-0.6, 0.32, -0.25]} end={[0, 0.12, -0.29 + prog * 0.58]} color="#d97706" radius={0.055} />
          <CylinderRod start={[0, 0.12, -0.29 + prog * 0.58]} end={[0, -0.05, -0.29 + prog * 0.58]} color="#334155" radius={0.025} />
          <mesh position={[0, -0.055, -0.29 + prog * 0.29]}><boxGeometry args={[0.025, 0.015, Math.max(0.01, prog * 0.58)]} /><meshStandardMaterial color="#f59e0b" emissive="#f97316" emissiveIntensity={0.3} /></mesh>
        </group>}
        <Pill
          pos={[0, 0.74, 0]}
          text={
            kind === 0
              ? '1. Cutting (CNC Milling): Subtractive Chip Removal'
              : kind === 1
                ? '2. Casting: Molten Metal Fills a Mold (Schematic)'
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
              <group key={j} position={[0, -exp * 0.2, z]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.2, 0.2, 0.1, 28]} /><meshPhysicalMaterial color="#be123c" roughness={0.22} clearcoat={0.75} /></mesh>
                {[-0.065, 0.065].map(dz => <mesh key={dz} position={[0, 0, dz]}><torusGeometry args={[0.06, 0.014, 10, 24]} /><meshStandardMaterial color="#e2e8f0" metalness={0.7} /></mesh>)}
              </group>
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
  return (
    <group>
      {/* Workbench surface */}
      <mesh position={[0, -0.2 + benchY, 0]}>
        <boxGeometry args={[1.8, 0.08, 1.1]} />
        <meshPhysicalMaterial color="#cbd5e1" roughness={0.3} />
      </mesh>
      {/* Normal Reach Envelope (Green inner semicircle) */}
      <mesh position={[0, -0.14 + benchY, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 36]} />
        <meshPhysicalMaterial color="#16a34a" transparent opacity={0.35} />
      </mesh>
      {/* Maximum Reach Envelope (Amber outer semicircle) */}
      <mesh position={[0, -0.15 + benchY, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
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
        <mesh key={i} position={[x, -0.06 + benchY, 0.35 - binDist]}>
          <boxGeometry args={[0.2, 0.16, 0.18]} />
          <meshPhysicalMaterial color="#2563eb" roughness={0.2} clearcoat={0.8} />
        </mesh>
      ))}
      <Pill
        pos={[0, 0.72, 0]}
        text={`Bin distance: ${values.binDist ?? 35} cm. Reach zones are illustrative; assess the worker and task.`}
      />
      <Pill pos={[0, 0.94, 0]} text={`Example: 10 s normal time + ${values.allowancePct ?? 15}% allowance = ${(10 * (1 + (values.allowancePct ?? 15) / 100)).toFixed(1)} s standard time`} />
    </group>
  );
};

