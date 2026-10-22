import React from 'react';
import type { CourseId } from '../../types';
import { COURSE_BY_ID } from '../courses';

// Each course's cover is drawn from its own subject, in its own colour: the direction field of an ODE, a face-
// centred cubic cell, a C++ loop, and a delivery route. 16:9, scales to any width.
const W = 320;
const H = 180;

const SlopeField: React.FC = () => {
  // a direction field in screen coordinates: every solution is pulled towards y = 96 while a wave rides on it,
  // and one solution curve is traced through it from an initial point
  const f = (x: number, y: number) => 0.9 * Math.cos(x / 26) - (y - 96) / 42;
  const segs: React.ReactNode[] = [];
  for (let x = 122; x <= 304; x += 18)
    for (let y = 20; y <= 168; y += 18) {
      const a = Math.atan(f(x, y));
      const dx = 6 * Math.cos(a);
      const dy = 6 * Math.sin(a);
      segs.push(<line key={`${x}-${y}`} x1={x - dx} y1={y - dy} x2={x + dx} y2={y + dy} />);
    }
  let y = 160;
  const pts: string[] = [];
  for (let x = 116; x <= 312; x += 1) {
    pts.push(`${x},${y.toFixed(1)}`);
    y += f(x, y);
  }
  return (
    <g>
      <g stroke="var(--lx-accent)" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round">
        {segs}
      </g>
      <polyline points={pts.join(' ')} fill="none" stroke="var(--lx-accent)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="116" cy="160" r="6" fill="var(--lx-accent)" />
    </g>
  );
};

const UnitCell: React.FC = () => {
  // isometric cube, atoms at 8 corners and 6 face centres
  const o = { x: 205, y: 132 };
  const s = 70;
  const P = (a: number, b: number, c: number) => ({ x: o.x + (a - b) * s * 0.87, y: o.y + (a + b) * s * 0.5 - c * s * 1.0 - 40 });
  const corners = [0, 1].flatMap((a) => [0, 1].flatMap((b) => [0, 1].map((c) => P(a, b, c))));
  const faces = [P(0.5, 0.5, 0), P(0.5, 0.5, 1), P(0.5, 0, 0.5), P(0.5, 1, 0.5), P(0, 0.5, 0.5), P(1, 0.5, 0.5)];
  const edges: [number[], number[]][] = [];
  for (const a of [0, 1]) for (const b of [0, 1]) edges.push([[a, b, 0], [a, b, 1]], [[a, 0, b], [a, 1, b]], [[0, a, b], [1, a, b]]);
  return (
    <g>
      <g stroke="var(--lx-accent)" strokeOpacity="0.45" strokeWidth="2">
        {edges.map(([p, q], i) => {
          const A = P(p[0], p[1], p[2]);
          const B = P(q[0], q[1], q[2]);
          return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />;
        })}
      </g>
      {[...corners, ...faces]
        .sort((a, b) => a.y - b.y)
        .map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={i % 3 ? 15 : 13} fill="var(--lx-accent)" fillOpacity={0.55 + (p.y / H) * 0.4} stroke="var(--lx-tint)" strokeWidth="2.5" />
        ))}
    </g>
  );
};

const CodeLoop: React.FC = () => {
  const lines: [string, string][] = [
    ['for (int i = 0; i < n; ++i) {', '0'],
    ['    if (a[i] > max)', '1'],
    ['        max = a[i];', '2'],
    ['    sum += a[i];', '1'],
    ['}', '0'],
    ['cout << sum / n;', '0']
  ];
  return (
    <g fontFamily="'JetBrains Mono', Consolas, monospace" fontSize="13.5" fontWeight="600">
      <rect x="124" y="26" width="182" height="128" rx="8" fill="var(--lx-surface)" opacity="0.7" />
      {lines.map(([t, depth], i) => (
        <text key={i} x="134" y={50 + i * 19} fill="var(--lx-accent)" fillOpacity={depth === '0' ? 1 : depth === '1' ? 0.8 : 0.62} xmlSpace="preserve">
          {t}
        </text>
      ))}
      <rect x="128" y="56" width="3" height="38" rx="1.5" fill="var(--lx-accent)" />
    </g>
  );
};

const Route: React.FC = () => {
  const pts = [
    [168, 128],
    [208, 60],
    [258, 42],
    [296, 86],
    [280, 140],
    [226, 152],
    [196, 104]
  ];
  const tour = [...pts, pts[0]].map(([x, y]) => `${x},${y}`).join(' ');
  return (
    <g>
      <polyline points={tour} fill="none" stroke="var(--lx-accent)" strokeWidth="3.5" strokeLinejoin="round" strokeDasharray="0" />
      {pts.map(([x, y], i) =>
        i === 0 ? (
          <rect key={i} x={x - 11} y={y - 11} width="22" height="22" rx="4" fill="var(--lx-accent)" />
        ) : (
          <circle key={i} cx={x} cy={y} r="9" fill="var(--lx-tint)" stroke="var(--lx-accent)" strokeWidth="3.5" />
        )
      )}
    </g>
  );
};

const ART: Record<CourseId, React.FC> = { ENGR213: SlopeField, MIAE221: UnitCell, MIAE215: CodeLoop, INDU211: Route };

export const CourseCover: React.FC<{ course: CourseId; className?: string; label?: boolean }> = ({ course, className = '', label = true }) => {
  const c = COURSE_BY_ID[course];
  const Art = ART[course];
  return (
    <svg className={`lx-cover lx-c-${course} ${className}`} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${c.code} cover`} preserveAspectRatio="xMidYMid slice">
      <rect width={W} height={H} fill="var(--lx-tint)" />
      <Art />
      {label && (
        <g>
          <text x="18" y="44" fontFamily="var(--lx-font)" fontWeight="800" fontSize="26" letterSpacing="-0.5" fill="var(--lx-accent-deep)">
            {c.code.split(' ')[0]}
          </text>
          <text x="18" y="76" fontFamily="var(--lx-font)" fontWeight="800" fontSize="34" letterSpacing="-0.5" fill="var(--lx-accent-deep)">
            {c.code.split(' ')[1]}
          </text>
        </g>
      )}
    </svg>
  );
};
