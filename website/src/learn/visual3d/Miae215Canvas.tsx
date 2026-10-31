import React from 'react';
import { Html } from '@react-three/drei';
import type { Vec3 } from '../visualization/crystalMath';
import { CylinderRod } from '../crystal/SceneKit';

const Pill: React.FC<{ pos: Vec3; text: string; bg?: string }> = ({ pos, text, bg }) => (
  <Html position={pos} center className="lx-cl-label" zIndexRange={[10, 0]}>
    <span style={bg ? { background: bg } : undefined}>{text}</span>
  </Html>
);

const MATRIX_VALS = [
  [3, 7, 2, 5],
  [8, 4, 9, 1],
  [2, 6, 5, 8],
  [9, 3, 4, 7],
];

export const Miae215Group: React.FC<{
  topicId: string;
  values: Record<string, number>;
}> = ({ topicId, values }) => {
  // ── 39. 2D Arrays (`int A[4][4]` 3D Grid & Nested Loop Traversal) ───────────
  if (topicId === '3d:2d-arrays') {
    const mode = Math.round(values.orderMode ?? 0);
    const stepK = Math.round(values.stepCell ?? 5);
    const cells = Array.from({ length: 16 }, (_, n) => ({ r: Math.floor(n / 4), c: n % 4 }));
    const traversal = mode === 1 ? [...cells].sort((a, b) => a.c - b.c || a.r - b.r)
      : mode === 2 ? cells.filter(({ r, c }) => r === c)
        : mode === 3 ? cells.filter(({ r, c }) => r <= c) : cells;
    const currentStep = Math.min(stepK, traversal.length - 1);

    return (
      <group>
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => {
            const val = MATRIX_VALS[r][c];
            const h = 0.08 + val * 0.055;
            const x = -0.66 + c * 0.44;
            const z = -0.66 + r * 0.44;
            const index = traversal.findIndex((cell) => cell.r === r && cell.c === c);
            const visited = index >= 0 && index <= currentStep;
            const isCurrent = index === currentStep;
            const col = isCurrent ? '#be123c' : visited ? '#2563eb' : '#94a3b8';
            return (
              <group key={`${r}-${c}`} position={[x, -0.35 + h / 2, z]}>
                <mesh>
                  <boxGeometry args={[0.32, h, 0.32]} />
                  <meshPhysicalMaterial
                    color={col}
                    roughness={0.2}
                    metalness={0.22}
                    clearcoat={0.75}
                  />
                </mesh>
                {isCurrent && (
                  <Pill
                    pos={[0, h / 2 + 0.16, 0]}
                    text={`A[${r}][${c}] = ${val} · example offset +${(r * 4 + c) * 4} bytes`}
                    bg="rgba(190,18,60,0.92)"
                  />
                )}
              </group>
            );
          }),
        )}
        <Pill
          pos={[0, 0.76, 0]}
          text={
            mode === 0
              ? 'Row-Major Order: for(r=0..3) for(c=0..3) A[r][c]'
              : mode === 1
                ? 'Column-Major Order: for(c=0..3) for(r=0..3) A[r][c]'
                : mode === 2
                  ? 'Main Diagonal Condition: if (r == c)'
                  : 'Upper Triangle Condition: if (r <= c)'
          }
        />
      </group>
    );
  }

  // ── 40. Memory Architecture (RAM Byte Blocks, sizeof, Array Strides, Pointers)
  if (topicId === '3d:memory-architecture') {
    const mode = Math.round(values.layoutMode ?? 0);
    const activeIdx = Math.round(values.activeIdx ?? 1);

    if (mode === 0) {
      // Data types sizeof comparison: char (1B), int (4B), double (8B)
      return (
        <group>
          {/* char c = 'A' (1 byte) */}
          <mesh position={[-0.78, -0.05, 0]}>
            <boxGeometry args={[0.24, 0.32, 0.32]} />
            <meshPhysicalMaterial color="#16a34a" roughness={0.2} clearcoat={0.8} />
          </mesh>
          <Pill pos={[-0.78, 0.32, 0]} text="char: 1 byte" bg="rgba(22,163,74,0.9)" />

          {/* int n = 42 (4 contiguous bytes) */}
          {[-0.36, -0.16, 0.04, 0.24].map((x, i) => (
            <mesh key={i} position={[x, -0.05, 0]}>
              <boxGeometry args={[0.17, 0.36, 0.36]} />
              <meshPhysicalMaterial color="#2563eb" roughness={0.2} clearcoat={0.8} />
            </mesh>
          ))}
          <Pill pos={[-0.06, 0.36, 0]} text="int: 4 bytes in this example" bg="rgba(37,99,235,0.9)" />

          {/* double d = 3.14 (8 contiguous bytes stacked 2x4) */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <mesh key={i} position={[0.4 + i * 0.1, -0.02, 0]}>
              <boxGeometry args={[0.085, 0.48, 0.48]} />
              <meshPhysicalMaterial color="#be123c" roughness={0.2} clearcoat={0.8} />
            </mesh>
          ))}
          <Pill pos={[0.78, 0.42, 0]} text="double: 8 bytes in this example" bg="rgba(190,18,60,0.9)" />
          <Pill pos={[0, 0.8, 0]} text="Example sizes vary by compiler and platform" />
        </group>
      );
    }

    // Contiguous int arr[4] + optional Pointer *p
    const slots = [0, 1, 2, 3];
    const targetX = -0.66 + activeIdx * 0.44;
    return (
      <group>
        {slots.map((i) => {
          const x = -0.66 + i * 0.44;
          const isSel = i === activeIdx;
          return (
            <group key={i} position={[x, -0.12, 0]}>
              <mesh>
                <boxGeometry args={[0.38, 0.34, 0.38]} />
                <meshPhysicalMaterial
                  color={isSel ? '#be123c' : '#2563eb'}
                  roughness={0.2}
                  clearcoat={0.8}
                />
              </mesh>
              <Pill
                pos={[0, -0.32, 0]}
                text={`arr[${i}] @ 0x${(0x1000 + i * 4).toString(16)}`}
                bg={isSel ? 'rgba(190,18,60,0.92)' : 'rgba(15,23,42,0.85)'}
              />
            </group>
          );
        })}
        {mode === 2 && (
          <group>
            {/* Pointer variable p storing the address of arr[activeIdx] */}
            <mesh position={[0, 0.42, -0.35]}>
              <boxGeometry args={[0.45, 0.24, 0.28]} />
              <meshPhysicalMaterial color="#d97706" roughness={0.2} clearcoat={0.8} />
            </mesh>
            <CylinderRod start={[0, 0.35, -0.25]} end={[targetX, 0.05, 0]} color="#d97706" radius={0.02} />
            <Pill
              pos={[0, 0.68, -0.35]}
              text={`int* p = &arr[${activeIdx}] (0x${(0x1000 + activeIdx * 4).toString(16)})`}
              bg="rgba(180,83,9,0.92)"
            />
          </group>
        )}
      </group>
    );
  }

  // ── 41. Arduino Hardware (3D Arduino Uno R3 + Pins + Sensor/PWM LED) ────────
  const focus = Math.round(values.pinFocus ?? 0);
  const adc = Math.round(values.adcRaw ?? 768);
  const pwm = Math.round((adc / 1023) * 255);
  const volts = (adc / 1023) * 5.0;

  return (
    <group>
      {/* Teal Arduino Uno R3 PCB Board */}
      <mesh position={[0, -0.12, 0]}>
        <boxGeometry args={[1.65, 0.08, 1.15]} />
        <meshPhysicalMaterial color="#0d9488" roughness={0.28} metalness={0.18} clearcoat={0.7} />
      </mesh>
      {/* Silver USB Type-B Connector & Black Barrel Jack */}
      <mesh position={[-0.72, 0.02, -0.26]}>
        <boxGeometry args={[0.32, 0.22, 0.26]} />
        <meshPhysicalMaterial color="#cbd5e1" metalness={0.75} roughness={0.2} />
      </mesh>
      <mesh position={[-0.7, 0.02, 0.32]}>
        <boxGeometry args={[0.3, 0.22, 0.22]} />
        <meshPhysicalMaterial color="#1e293b" roughness={0.3} />
      </mesh>
      {/* ATmega328P DIP-28 Microcontroller Chip */}
      <mesh position={[0.18, -0.02, 0.12]}>
        <boxGeometry args={[0.78, 0.1, 0.24]} />
        <meshPhysicalMaterial color="#0f172a" roughness={0.25} clearcoat={0.6} />
      </mesh>
      {/* Digital PWM Header Rail (Top Edge: D0–D13) */}
      <mesh position={[0.1, 0.02, -0.48]}>
        <boxGeometry args={[1.15, 0.16, 0.1]} />
        <meshPhysicalMaterial
          color={focus === 1 ? '#f59e0b' : '#1e293b'}
          roughness={0.25}
        />
      </mesh>
      {/* Analog Input Header Rail (Bottom Right: A0–A5) */}
      <mesh position={[0.38, 0.02, 0.48]}>
        <boxGeometry args={[0.58, 0.16, 0.1]} />
        <meshPhysicalMaterial
          color={focus === 2 ? '#2563eb' : '#1e293b'}
          roughness={0.25}
        />
      </mesh>
      {/* Power Header Rail (Bottom Left: 5V / 3.3V / GND) */}
      <mesh position={[-0.25, 0.02, 0.48]}>
        <boxGeometry args={[0.48, 0.16, 0.1]} />
        <meshPhysicalMaterial
          color={focus === 3 ? '#be123c' : '#1e293b'}
          roughness={0.25}
        />
      </mesh>
      {/* Breadboard: potentiometer supplies A0; D9 drives an LED through a resistor. */}
      <group position={[0.28, -0.06, 1.02]}>
        <mesh><boxGeometry args={[1.22, 0.1, 0.58]} /><meshStandardMaterial color="#f8fafc" roughness={0.85} /></mesh>
        {Array.from({ length: 12 }, (_, col) => [0, 1, 2, 3].map((row) => (
          <mesh key={`${col}-${row}`} position={[-0.52 + col * 0.095, 0.055, -0.19 + row * 0.12]}>
            <boxGeometry args={[0.024, 0.006, 0.024]} /><meshStandardMaterial color="#64748b" />
          </mesh>
        )))}
        <mesh position={[-0.31, 0.12, 0]}><cylinderGeometry args={[0.13, 0.13, 0.12, 24]} /><meshStandardMaterial color="#1d4ed8" roughness={0.55} /></mesh>
        <mesh position={[-0.31, 0.21, 0]}><cylinderGeometry args={[0.045, 0.045, 0.09, 16]} /><meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} /></mesh>
        <mesh position={[0.26, 0.18, 0]}><sphereGeometry args={[0.085, 20, 16]} /><meshStandardMaterial color="#e11d48" emissive="#e11d48" emissiveIntensity={(pwm / 255) * 1.3} /></mesh>
        <CylinderRod start={[0.26, 0.06, 0]} end={[0.26, 0.13, 0]} color="#94a3b8" radius={0.009} />
        <mesh position={[0.43, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.025, 0.025, 0.16, 12]} /><meshStandardMaterial color="#d6b77b" /></mesh>
        <Pill pos={[-0.31, 0.43, 0]} text="Potentiometer: input" />
        <Pill pos={[0.35, 0.43, 0]} text="LED + resistor: output" />
      </group>
      <CylinderRod start={[0.38, 0.1, 0.48]} end={[-0.03, 0.04, 1.02]} color="#2563eb" radius={0.012} />
      <CylinderRod start={[0.1, 0.1, -0.48]} end={[0.54, 0.04, 1.02]} color="#f59e0b" radius={0.012} />
      <CylinderRod start={[-0.25, 0.1, 0.48]} end={[0.01, 0.04, 0.83]} color="#ef4444" radius={0.012} />
      <CylinderRod start={[-0.15, 0.1, 0.48]} end={[0.71, 0.04, 1.02]} color="#1e293b" radius={0.012} />
      <Pill
        pos={[0, 0.72, 0]}
        text={`analogRead(A0) = ${adc} (${volts.toFixed(2)} V) → analogWrite(D9, ${pwm})`}
        bg="rgba(13,148,136,0.95)"
      />
    </group>
  );
};

