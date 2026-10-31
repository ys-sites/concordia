import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Vec3 } from '../visualization/crystalMath';
import { Arrow, CylinderRod } from '../crystal/SceneKit';
import { coolingAt, coolingInputs } from './coolingModel';

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
      const m = values.m ?? 1;
      const c = values.c ?? 0.8;
      const k = values.k ?? 9;
      const F0 = values.F0 ?? 0;
      const t = clockRef.current % 6;
      const w0 = Math.sqrt(k / m);
      const zeta = c / (2 * Math.sqrt(m * k));
      let yDisp = 0;
      if (F0 > 0 && c < 0.2) {
        yDisp = Math.min(0.45, 0.06 * t * Math.sin(w0 * t));
      } else if (zeta < 1) {
        const wd = w0 * Math.sqrt(1 - zeta * zeta);
        yDisp = 0.35 * Math.exp(-(c / (2 * m)) * t) * Math.cos(wd * t);
      } else {
        yDisp = 0.35 * (1 + w0 * t) * Math.exp(-w0 * t);
      }
      massRef.current.position.y = -0.15 + yDisp;
    }
  });

  // ── 34. Mixing Tank Problems ────────────────────────────────────────────────
  if (topicId === '3d:mixing-tank') {
    const ci = values.ci ?? 0.8;
    const ri = values.ri ?? 6;
    const ro = values.ro ?? 6;
    const A0 = values.A0 ?? 10;
    const fillRatio = Math.min(0.92, Math.max(0.28, 0.6 + (ri - ro) * 0.04));
    const liquidH = 1.1 * fillRatio;
    const eqSalt = ci * 100;
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
            color={ci > 0.4 ? '#2563eb' : '#38bdf8'}
            transparent
            opacity={0.72}
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
        {/* Inflow Pipe (Top Left) & Outflow Pipe (Bottom Right) */}
        <CylinderRod start={[-0.95, 0.65, 0]} end={[-0.35, 0.65, 0]} color="#16a34a" radius={0.045} />
        <CylinderRod start={[0.55, -0.48, 0]} end={[1.0, -0.48, 0]} color="#be123c" radius={0.045} />
        <Pill
          pos={[0, 0.82, 0]}
          text={`R_in = ${(ri * ci).toFixed(1)} kg/min · R_out = ${ro}(A/V) · A(0)=${A0} kg → A(∞)=${eqSalt.toFixed(0)} kg`}
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
          text={`${t.toFixed(1)} min · Object ${Tnow.toFixed(1)} °C · Surroundings ${Tm} °C`}
          bg="rgba(190,18,60,0.92)"
        />
      </group>
    );
  }

  // ── 36. Mass–Spring Systems ─────────────────────────────────────────────────
  if (topicId === '3d:mass-spring') {
    const m = values.m ?? 1;
    const c = values.c ?? 0.8;
    const k = values.k ?? 9;
    const disc = c * c - 4 * m * k;
    const regime =
      Math.abs(disc) < 0.2
        ? 'Critically Damped (Δ = 0)'
        : disc < 0
          ? 'Underdamped Oscillatory (Δ < 0)'
          : 'Overdamped Non-Oscillatory (Δ > 0)';
    return (
      <group>
        {/* Top Support Beam */}
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[1.2, 0.08, 0.4]} />
          <meshPhysicalMaterial color="#334155" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* Helical Spring Coils */}
        {[-0.25, 0.25].map((x, idx) => (
          <CylinderRod
            key={idx}
            start={[x, 0.68, 0]}
            end={[x, -0.1, 0]}
            color={idx === 0 ? '#2563eb' : '#64748b'}
            radius={idx === 0 ? 0.028 : 0.036}
          />
        ))}
        {/* Oscillating Mass Block */}
        <group ref={massRef} position={[0, -0.15, 0]}>
          <mesh>
            <boxGeometry args={[0.78, 0.36, 0.42]} />
            <meshPhysicalMaterial color="#be123c" roughness={0.2} metalness={0.25} clearcoat={0.8} />
          </mesh>
        </group>
        <Pill pos={[0, 0.9, 0]} text={`${regime} · ω₀ = ${Math.sqrt(k / m).toFixed(2)} rad/s`} />
      </group>
    );
  }

  // ── 37. LR/RC Circuits ──────────────────────────────────────────────────────
  if (topicId === '3d:lr-rc-circuit') {
    const mode = Math.round(values.circuitMode ?? 0);
    const tau = values.tau ?? 1.5;
    const E0 = values.E0 ?? 12;
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
        {mode === 0 ? (
          <mesh position={[0.75, -0.08, 0]}>
            <torusGeometry args={[0.16, 0.045, 16, 36]} />
            <meshPhysicalMaterial color="#2563eb" roughness={0.2} metalness={0.35} clearcoat={0.8} />
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
          text={
            mode === 0
              ? `LR Series Circuit · Time Constant τ = L/R = ${tau} s · E₀ = ${E0} V`
              : mode === 1
                ? `RC Charging Circuit · Time Constant τ = RC = ${tau} s`
                : `RC Discharging Circuit · Exponential Decay e^{-t/${tau}}`
          }
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
        text={`De Moivre: ${n} Roots Spaced by ${(360 / n).toFixed(0)}° on Circle of Radius r^(1/${n}) = ${rRoot.toFixed(2)}`}
      />
    </group>
  );
};

/** Synchronized Live 2D Mathematical Graph for ENGR 213 ODE Topics (34–38) */
export const Engr213LiveGraph: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  const { pathD, asymY, title, yLabel, readout } = useMemo(() => {
    const pts: string[] = [];
    const N = 80;
    if (topicId === '3d:mixing-tank') {
      const ci = values.ci ?? 0.8;
      const ri = values.ri ?? 6;
      const A0 = values.A0 ?? 10;
      const Aeq = ci * 100;
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 50;
        const A = Aeq + (A0 - Aeq) * Math.exp(-(ri / 100) * t);
        const x = 45 + (i / N) * 290;
        const y = 145 - Math.min(1, Math.max(0, A / 160)) * 120;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      const ay = 145 - Math.min(1, Aeq / 160) * 120;
      return {
        pathD: pts.join(' '),
        asymY: ay,
        title: 'Live Solution Curve A(t) — Salt Mass in Tank vs. Time t',
        yLabel: 'A(t) kg',
        readout: `Equilibrium Asymptote A(∞) = ${Aeq.toFixed(1)} kg`,
      };
    }
    if (topicId === '3d:newton-cooling') {
      const T0 = values.T0 ?? 160;
      const Tm = values.Tm ?? 25;
      const k = -(values.kMag ?? 0.12);
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 30;
        const T = Tm + (T0 - Tm) * Math.exp(k * t);
        const x = 45 + (i / N) * 290;
        const y = 145 - Math.min(1, Math.max(0, T / 200)) * 120;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      const ay = 145 - (Tm / 200) * 120;
      return {
        pathD: pts.join(' '),
        asymY: ay,
        title: 'Live Solution Curve T(t) = T_m + (T₀ − T_m)e^{kt}',
        yLabel: 'T(t) °C',
        readout: `Ambient Asymptote T_m = ${Tm}°C`,
      };
    }
    if (topicId === '3d:mass-spring') {
      const m = values.m ?? 1;
      const c = values.c ?? 0.8;
      const k = values.k ?? 9;
      const F0 = values.F0 ?? 0;
      const w0 = Math.sqrt(k / m);
      const zeta = c / (2 * Math.sqrt(m * k));
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 10;
        let val = 0;
        if (F0 > 0 && c < 0.2) val = Math.min(1, 0.12 * t * Math.sin(w0 * t));
        else if (zeta < 1) val = Math.exp(-(c / (2 * m)) * t) * Math.cos(w0 * Math.sqrt(1 - zeta * zeta) * t);
        else val = (1 + w0 * t) * Math.exp(-w0 * t);
        const x = 45 + (i / N) * 290;
        const y = 85 - val * 55;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      return {
        pathD: pts.join(' '),
        asymY: 85,
        title: 'Live Displacement Response x(t) vs. Time t',
        yLabel: 'x(t)',
        readout: `Discriminant Δ = c² − 4mk = ${(c * c - 4 * m * k).toFixed(2)}`,
      };
    }
    if (topicId === '3d:lr-rc-circuit') {
      const mode = Math.round(values.circuitMode ?? 0);
      const tau = values.tau ?? 1.5;
      for (let i = 0; i <= N; i++) {
        const t = (i / N) * 8;
        const frac = mode === 2 ? Math.exp(-t / tau) : 1 - Math.exp(-t / tau);
        const x = 45 + (i / N) * 290;
        const y = 145 - frac * 115;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
      }
      return {
        pathD: pts.join(' '),
        asymY: mode === 2 ? 145 : 30,
        title: 'Live Transient Response i(t) / q(t) vs. Time t',
        yLabel: mode === 0 ? 'i(t)' : 'q(t)',
        readout: `At t = τ (${tau} s), response reaches 63.2% of step change`,
      };
    }
    // 38: Complex Roots Euler Cosine projection Re(e^{iθ})
    const n = Math.round(values.nRoots ?? 4);
    for (let i = 0; i <= N; i++) {
      const ang = (i / N) * 2 * Math.PI;
      const x = 45 + (i / N) * 290;
      const y = 85 - Math.cos(n * ang) * 50;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return {
      pathD: pts.join(' '),
      asymY: 85,
      title: `Real Part Re(z^n) = r cos(${n}θ) — ${n} Zero Crossings per Period`,
      yLabel: 'Re(zⁿ)',
      readout: `Angular Root Spacing Δθ = 2π/${n} = ${(360 / n).toFixed(1)}°`,
    };
  }, [topicId, values]);

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: 12,
        padding: '10px 14px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 4 }}>
        <span>{title}</span>
        <span style={{ color: '#be123c' }}>{readout}</span>
      </div>
      <svg viewBox="0 0 360 165" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <line x1={45} y1={145} x2={340} y2={145} stroke="#94a3b8" strokeWidth={1.2} />
        <line x1={45} y1={145} x2={45} y2={15} stroke="#94a3b8" strokeWidth={1.2} />
        <line
          x1={45}
          y1={asymY}
          x2={340}
          y2={asymY}
          stroke="#16a34a"
          strokeWidth={1.4}
          strokeDasharray="5 4"
        />
        <path d={pathD} fill="none" stroke="#be123c" strokeWidth={2.6} />
        <text x={8} y={28} fontSize={11} fill="#475569">
          {yLabel}
        </text>
        <text x={312} y={160} fontSize={11} fill="#475569">
          Time t
        </text>
      </svg>
    </div>
  );
};

