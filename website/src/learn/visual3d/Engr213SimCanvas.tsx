import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Vec3 } from '../visualization/crystalMath';
import { Arrow, CylinderRod } from '../crystal/SceneKit';
import {
  circuitAt,
  circuitInputs,
  coolingAt,
  coolingInputs,
  massSpringAt,
  massSpringInputs,
  mixingTankAt,
  mixingTankInputs,
} from './coolingModel';

const Pill: React.FC<{ pos: Vec3; text: string; bg?: string }> = ({ pos, text, bg }) => (
  <Html position={pos} center className="lx-cl-label" zIndexRange={[10, 0]}>
    <span style={bg ? { background: bg } : undefined}>{text}</span>
  </Html>
);

export const Engr213SimGroup: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  const clockRef = useRef(0);
  const impellerRef = useRef<THREE.Group | null>(null);
  const massRef = useRef<THREE.Group | null>(null);

  useFrame((_, dt) => {
    clockRef.current += dt;
    if (impellerRef.current) {
      impellerRef.current.rotation.y += dt * 3.5;
    }
    if (massRef.current && topicId === '3d:mass-spring') {
      const ms = massSpringAt(massSpringInputs(values));
      massRef.current.position.y = -0.15 + Math.max(-0.42, Math.min(0.42, ms.x * 0.35));
    }
  });

  // ── 34. Mixing Tank Problems ────────────────────────────────────────────────
  if (topicId === '3d:mixing-tank') {
    const inp = mixingTankInputs(values);
    const state = mixingTankAt(inp);
    const fillRatio = Math.min(0.92, Math.max(0.22, state.volume / 220));
    const liquidH = 1.1 * fillRatio;
    const concSat = Math.min(1, Math.max(0, state.concentration / 1.4));
    const liquidCol = new THREE.Color().lerpColors(new THREE.Color('#38bdf8'), new THREE.Color('#1d4ed8'), concSat);
    return (
      <group>
        {/* Outer Glass Tank Cylinder */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 1.2, 36, 1, true]} />
          <meshPhysicalMaterial
            color="#94a3b8"
            transparent
            opacity={0.32}
            roughness={0.12}
            clearcoat={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Dynamic Brine Liquid Volume */}
        <mesh position={[0, -0.6 + liquidH / 2, 0]}>
          <cylinderGeometry args={[0.55, 0.55, liquidH, 36]} />
          <meshPhysicalMaterial
            color={liquidCol}
            transparent
            opacity={0.76}
            roughness={0.18}
            clearcoat={0.8}
          />
        </mesh>
        {/* Rotating Stirrer Impeller */}
        <group ref={impellerRef} position={[0, -0.35, 0]}>
          <CylinderRod start={[0, 0, 0]} end={[0, 1.0, 0]} color="#334155" radius={0.02} />
          <CylinderRod start={[-0.32, 0, 0]} end={[0.32, 0, 0]} color="#0f172a" radius={0.025} />
          <CylinderRod start={[0, 0, -0.32]} end={[0, 0, 0.32]} color="#0f172a" radius={0.025} />
        </group>
        {/* Inflow Pipe (Top Left, Green) & Outflow Pipe (Bottom Right, Red) */}
        <CylinderRod start={[-0.95, 0.65, 0]} end={[-0.35, 0.65, 0]} color="#16a34a" radius={0.045} />
        <CylinderRod start={[0.55, -0.48, 0]} end={[1.0, -0.48, 0]} color="#be123c" radius={0.045} />
        <Pill
          pos={[0, 0.82, 0]}
          text={`t = ${inp.t.toFixed(1)} min · Salt A(t) = ${state.saltKg.toFixed(1)} kg · Volume V(t) = ${state.volume.toFixed(0)} L`}
          bg="rgba(15,23,42,0.92)"
        />
      </group>
    );
  }

  // ── 35. Newton's Law of Cooling ─────────────────────────────────────────────
  if (topicId === '3d:newton-cooling') {
    const input = coolingInputs(values);
    const { surrounding: Tm, time: t } = input;
    const Tnow = coolingAt(input);
    const heatFrac = Math.max(0, Math.min(1, (Tnow - 10) / 170));
    const col = new THREE.Color().lerpColors(new THREE.Color('#2563eb'), new THREE.Color('#e11d48'), heatFrac);
    return (
      <group>
        {/* Ambient Cooling Bath Chamber */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[1.45, 1.0, 1.1]} />
          <meshPhysicalMaterial color="#38bdf8" transparent opacity={0.18} roughness={0.15} />
        </mesh>
        {/* Glowing Thermal Billet */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.72, 36]} />
          <meshPhysicalMaterial
            color={col}
            emissive={col}
            emissiveIntensity={heatFrac * 0.45}
            roughness={0.22}
            metalness={0.35}
            clearcoat={0.8}
          />
        </mesh>
        <Pill
          pos={[0, 0.72, 0]}
          text={`Time ${t.toFixed(1)} min · Object ${Tnow.toFixed(1)} °C · Surroundings ${Tm} °C`}
          bg="rgba(190,18,60,0.92)"
        />
      </group>
    );
  }

  // ── 36. Mass–Spring Systems ─────────────────────────────────────────────────
  if (topicId === '3d:mass-spring') {
    const inp = massSpringInputs(values);
    const state = massSpringAt(inp);
    const yMass = -0.15 + Math.max(-0.42, Math.min(0.42, state.x * 0.35));
    return (
      <group>
        {/* Top Support Beam */}
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[1.2, 0.08, 0.4]} />
          <meshPhysicalMaterial color="#334155" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* Helical Spring & Damper Struts */}
        {[-0.25, 0.25].map((x, idx) => (
          <CylinderRod
            key={idx}
            start={[x, 0.68, 0]}
            end={[x, yMass, 0]}
            color={idx === 0 ? '#2563eb' : '#64748b'}
            radius={idx === 0 ? 0.028 : 0.036}
          />
        ))}
        {/* Oscillating Mass Block */}
        <group ref={massRef} position={[0, yMass, 0]}>
          <mesh>
            <boxGeometry args={[0.78, 0.36, 0.42]} />
            <meshPhysicalMaterial color="#be123c" roughness={0.2} metalness={0.25} clearcoat={0.8} />
          </mesh>
        </group>
        <Pill
          pos={[0, 0.9, 0]}
          text={`t = ${inp.t.toFixed(1)} s · x(t) = ${state.x.toFixed(2)} m · ${state.regime}`}
          bg="rgba(15,23,42,0.92)"
        />
      </group>
    );
  }

  // ── 37. LR/RC Circuits ──────────────────────────────────────────────────────
  if (topicId === '3d:lr-rc-circuit') {
    const inp = circuitInputs(values);
    const state = circuitAt(inp);
    const loopPts: Vec3[] = [
      [-0.75, -0.15, -0.45],
      [0.75, -0.15, -0.45],
      [0.75, -0.15, 0.45],
      [-0.75, -0.15, 0.45],
      [-0.75, -0.15, -0.45],
    ];
    return (
      <group>
        {/* Circuit Wire Loop */}
        {loopPts.slice(0, 4).map((p, i) => (
          <CylinderRod key={i} start={p} end={loopPts[i + 1]} color="#475569" radius={0.022} />
        ))}
        {/* Voltage Source E0 (Left) */}
        <mesh position={[-0.75, -0.05, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.28, 24]} />
          <meshPhysicalMaterial color="#16a34a" roughness={0.2} clearcoat={0.8} />
        </mesh>
        {/* Resistor R (Back) */}
        <mesh position={[0, -0.12, -0.45]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 0.42, 20]} />
          <meshPhysicalMaterial color="#d97706" roughness={0.25} clearcoat={0.7} />
        </mesh>
        {/* Inductor L or Capacitor C (Right) */}
        {inp.mode === 0 ? (
          <mesh position={[0.75, -0.08, 0]}>
            <torusGeometry args={[0.16, 0.045, 16, 36]} />
            <meshPhysicalMaterial
              color="#2563eb"
              emissive="#1d4ed8"
              emissiveIntensity={state.fraction * 0.4}
              roughness={0.2}
              metalness={0.35}
              clearcoat={0.8}
            />
          </mesh>
        ) : (
          <group position={[0.75, -0.08, 0]}>
            <mesh position={[0, 0, -0.06]}>
              <boxGeometry args={[0.28, 0.24, 0.025]} />
              <meshPhysicalMaterial color="#be123c" metalness={0.4} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0.06]}>
              <boxGeometry args={[0.28, 0.24, 0.025]} />
              <meshPhysicalMaterial color="#2563eb" metalness={0.4} roughness={0.2} />
            </mesh>
          </group>
        )}
        <Pill
          pos={[0, 0.65, 0]}
          text={`t = ${inp.t.toFixed(1)} s · ${state.label} = ${state.value.toFixed(2)} ${state.unit} · τ = ${inp.tau} s`}
          bg="rgba(15,23,42,0.92)"
        />
      </group>
    );
  }

  // ── 38. Complex Numbers & Roots (De Moivre Polygon Wheel) ───────────────────
  const n = Math.round(values.nRoots ?? 4);
  const theta0 = ((values.thetaDeg ?? 60) * Math.PI) / 180;
  const rRoot = Math.pow(values.modulusR ?? 8, 1 / n);
  const visualR = Math.min(0.75, 0.35 + rRoot * 0.14);
  const rootPts: Vec3[] = Array.from({ length: n }, (_, k) => {
    const ang = (theta0 + 2 * Math.PI * k) / n;
    return [0.5 + Math.cos(ang) * visualR, 0.5 + Math.sin(ang) * visualR, 0.5];
  });

  return (
    <group>
      {/* Complex Plane Unit Circle Ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[visualR, 0.012, 16, 64]} />
        <meshPhysicalMaterial color="#64748b" roughness={0.25} />
      </mesh>
      {/* Regular n-gon connecting the n roots */}
      {rootPts.map((pt, k) => {
        const nextPt = rootPts[(k + 1) % n];
        return (
          <group key={k}>
            <Arrow tail={[0.5, 0.5, 0.5]} head={pt} color={k === 0 ? '#be123c' : '#2563eb'} width={2.2} />
            <CylinderRod
              start={[pt[0] - 0.5, pt[1] - 0.5, 0]}
              end={[nextPt[0] - 0.5, nextPt[1] - 0.5, 0]}
              color="#f59e0b"
              radius={0.011}
            />
          </group>
        );
      })}
      <Pill
        pos={[0, 0.82, 0]}
        text={`${n} Roots Spaced by ${(360 / n).toFixed(0)}° · Radius = ${rRoot.toFixed(2)}`}
      />
    </group>
  );
};

/** Synchronized Compact 2D Mathematical Graph for ENGR 213 ODE Topics (34, 36, 37, 38) */
export const Engr213LiveGraph: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  const { pathD, asymY, asymLabel, title, xLabel, yLabel, dotX, dotY, dotLabel, explanation } = useMemo(() => {
    const pts: string[] = [];
    const N = 80;
    if (topicId === '3d:mixing-tank') {
      const inp = mixingTankInputs(values);
      const now = mixingTankAt(inp);
      const maxMass = Math.max(160, inp.A0 * 1.15, now.equilibriumKg * 1.25);
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 50;
        const st = mixingTankAt({ ...inp, t });
        const x = 52 + (i / N) * 280;
        const y = 142 - Math.min(1, Math.max(0, st.saltKg / maxMass)) * 114;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      const ay = 142 - Math.min(1, Math.max(0, now.equilibriumKg / maxMass)) * 114;
      const dx = 52 + Math.min(1, Math.max(0, inp.t / 50)) * 280;
      const dy = 142 - Math.min(1, Math.max(0, now.saltKg / maxMass)) * 114;
      return {
        pathD: pts.join(' '),
        asymY: ay,
        asymLabel: inp.ri === inp.ro ? `Steady salt (${now.equilibriumKg.toFixed(0)} kg)` : `cᵢ·V(t) reference`,
        title: 'Salt Mass in Tank Over Time',
        xLabel: 'Time (minutes)',
        yLabel: 'Salt mass A(t) (kg)',
        dotX: dx,
        dotY: dy,
        dotLabel: `${inp.t.toFixed(1)} min, ${now.saltKg.toFixed(1)} kg`,
        explanation:
          now.netRate >= 0
            ? `Salt enters at ${now.rateIn.toFixed(2)} kg/min and leaves at ${now.rateOut.toFixed(2)} kg/min, so salt mass is rising.`
            : `Salt leaves (${now.rateOut.toFixed(2)} kg/min) faster than it enters (${now.rateIn.toFixed(2)} kg/min), so salt mass is falling.`,
      };
    }
    if (topicId === '3d:mass-spring') {
      const inp = massSpringInputs(values);
      const now = massSpringAt(inp);
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 10;
        const st = massSpringAt({ ...inp, t });
        const x = 52 + (i / N) * 280;
        const y = 85 - st.x * 52;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      const dx = 52 + Math.min(1, Math.max(0, inp.t / 10)) * 280;
      const dy = 85 - now.x * 52;
      return {
        pathD: pts.join(' '),
        asymY: 85,
        asymLabel: 'Equilibrium (x = 0)',
        title: 'Mass Position Over Time',
        xLabel: 'Time (seconds)',
        yLabel: 'Position x(t) (m)',
        dotX: dx,
        dotY: dy,
        dotLabel: `${inp.t.toFixed(1)} s, ${now.x.toFixed(2)} m`,
        explanation: `Regime: ${now.regime} (Δ = c² − 4mk = ${now.discriminant.toFixed(2)}).`,
      };
    }
    if (topicId === '3d:lr-rc-circuit') {
      const inp = circuitInputs(values);
      const now = circuitAt(inp);
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 8;
        const st = circuitAt({ ...inp, t });
        const x = 52 + (i / N) * 280;
        const y = 142 - st.fraction * 110;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      const dx = 52 + Math.min(1, Math.max(0, inp.t / 8)) * 280;
      const dy = 142 - now.fraction * 110;
      return {
        pathD: pts.join(' '),
        asymY: inp.mode === 2 ? 142 : 32,
        asymLabel: inp.mode === 2 ? 'Fully discharged (0)' : `Steady state (${now.steadyState.toFixed(1)} ${now.unit})`,
        title: `${now.label} Over Time`,
        xLabel: 'Time (seconds)',
        yLabel: `${now.label} (${now.unit})`,
        dotX: dx,
        dotY: dy,
        dotLabel: `${inp.t.toFixed(1)} s, ${now.value.toFixed(2)} ${now.unit}`,
        explanation: `At time constant τ = ${inp.tau} s, the circuit completes 63.2% of its total transition.`,
      };
    }
    // 38: Complex Roots Euler Cosine projection
    const n = Math.round(values.nRoots ?? 4);
    const theta0 = ((values.thetaDeg ?? 60) * Math.PI) / 180;
    for (let i = 0; i <= N; i++) {
      const ang = (i / N) * 2 * Math.PI;
      const x = 52 + (i / N) * 280;
      const y = 85 - Math.cos(n * ang - theta0) * 48;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    const k0Ang = (theta0 >= 0 ? theta0 : theta0 + 2 * Math.PI) / n;
    const dx = 52 + Math.min(1, Math.max(0, k0Ang / (2 * Math.PI))) * 280;
    const dy = 85 - 48;
    return {
      pathD: pts.join(' '),
      asymY: 85,
      asymLabel: 'Zero axis',
      title: `Harmonic Wave cos(${n}θ) Showing ${n} Root Cycles`,
      xLabel: 'Angle θ (0° to 360°)',
      yLabel: 'Real part',
      dotX: dx,
      dotY: dy,
      dotLabel: `k = 0 (${((theta0 * 180) / Math.PI / n).toFixed(0)}°)`,
      explanation: `The ${n} roots sit spaced equally by ${(360 / n).toFixed(1)}° around the circle of radius ${(Math.pow(values.modulusR ?? 8, 1 / n)).toFixed(2)}.`,
    };
  }, [topicId, values]);

  return (
    <aside className="lx-cooling-graph" aria-label={title}>
      <div className="lx-cooling-graph__head">
        <h3>{title}</h3>
        <span className="lx-cooling-graph__badge">{dotLabel}</span>
      </div>
      <p className="lx-cooling-graph__why">{explanation}</p>
      <svg viewBox="0 0 360 172" role="img" aria-label={`${title}. Selected point ${dotLabel}`}>
        <line x1={52} y1={142} x2={336} y2={142} stroke="#64748b" strokeWidth={1.3} />
        <line x1={52} y1={142} x2={52} y2={18} stroke="#64748b" strokeWidth={1.3} />
        {/* Dashed reference / steady-state line */}
        <line
          x1={52}
          y1={asymY}
          x2={336}
          y2={asymY}
          stroke="#0f766e"
          strokeWidth={1.5}
          strokeDasharray="5 4"
        />
        <text x={332} y={Math.max(26, asymY - 5)} textAnchor="end" fontSize={10} fontWeight={600} fill="#0f766e">
          {asymLabel}
        </text>
        {/* Solution curve */}
        <path d={pathD} fill="none" stroke="#be123c" strokeWidth={2.6} />
        {/* Vertical time guide & synchronized live dot */}
        <line x1={dotX} y1={142} x2={dotX} y2={dotY} stroke="#94a3b8" strokeWidth={1} strokeDasharray="2 2" />
        <circle cx={dotX} cy={dotY} r={5.5} fill="#be123c" stroke="#ffffff" strokeWidth={2} />
        <text
          x={Math.min(285, Math.max(58, dotX + 7))}
          y={Math.max(26, dotY - 7)}
          fontSize={10.5}
          fontWeight={700}
          fill="#be123c"
        >
          {dotLabel}
        </text>
        <text x={10} y={15} fontSize={10.5} fontWeight={600} fill="#334155">
          {yLabel}
        </text>
        <text x={194} y={164} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="#334155">
          {xLabel}
        </text>
      </svg>
    </aside>
  );
};
