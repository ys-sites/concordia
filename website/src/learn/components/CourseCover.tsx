import React, { useId, useState } from 'react';
import type { CourseId } from '../../types';
import { COURSE_BY_ID } from '../courses';

// Each course's cover is a small illustrated landscape in flat, layered vector (gradient sky, sun, hills in
// receding tones, a foreground with the subject in it), drawn in the course's own colours:
//   ENGR 213  dawn over a river that winds like a solution curve, wind streaks as its direction field
//   MIAE 221  sunset over faceted crystal mountains
//   MIAE 215  twilight lake, a cabin whose window glows with a loop of C++
//   INDU 211  a factory by the river, trucks on the delivery route between the houses
// 16:9, scales to any width, no images to download.
// `alt` is the same scene at another time of day (and mirrored), used on recommendation cards so they never
// look identical to the course card next to them.
const W = 320;
const H = 180;

type ArtProps = { id: string; alt?: boolean };

const Sky: React.FC<{ id: string; stops: [string, string, string] }> = ({ id, stops }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor={stops[0]} />
    <stop offset="0.55" stopColor={stops[1]} />
    <stop offset="1" stopColor={stops[2]} />
  </linearGradient>
);

const Stars: React.FC<{ color?: string }> = ({ color = '#ffffff' }) => (
  <g fill={color}>
    {[
      [24, 18], [58, 34], [96, 14], [132, 28], [170, 12], [204, 30], [246, 16], [286, 26], [310, 50], [40, 52], [150, 46]
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={i % 3 ? 1 : 1.6} opacity={0.75 + (i % 2) * 0.2} />
    ))}
  </g>
);

const Moon: React.FC<{ x: number; y: number; r?: number; color?: string }> = ({ x, y, r = 14, color = '#fff8d6' }) => (
  <g>
    <circle cx={x} cy={y} r={r * 1.9} fill={color} opacity="0.14" />
    <path d={`M${x} ${y - r} a${r} ${r} 0 1 0 ${r * 0.86} ${r * 1.57} a${r * 0.8} ${r * 0.8} 0 1 1 -${r * 0.86} -${r * 1.57} Z`} fill={color} />
  </g>
);

// smooth ridge through (x, y) points, closed down to the bottom of the frame
const ridge = (pts: [number, number][]) => {
  let d = `M0 ${H} L${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const mx = (x0 + x1) / 2;
    d += ` C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`;
  }
  return `${d} L${W} ${H} Z`;
};
const hills = (base: number, amp: number, n: number, phase: number): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const x = (i / n) * W;
    return [x, base - amp * Math.abs(Math.sin(i * 1.7 + phase)) - amp * 0.4 * Math.sin(i * 0.9 + phase * 2)];
  });

const Birds: React.FC<{ x: number; y: number; color: string; s?: number }> = ({ x, y, color, s = 1 }) => (
  <g fill="none" stroke={color} strokeWidth={1.4} strokeLinecap="round" transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 0 q4 -4 8 0 q4 -4 8 0" />
    <path d="M20 -8 q3 -3 6 0 q3 -3 6 0" />
    <path d="M10 -14 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
  </g>
);

const Pine: React.FC<{ x: number; y: number; h: number; color: string }> = ({ x, y, h, color }) => (
  <path d={`M${x} ${y - h} L${x + h * 0.32} ${y - h * 0.45} L${x + h * 0.16} ${y - h * 0.45} L${x + h * 0.4} ${y} L${x - h * 0.4} ${y} L${x - h * 0.16} ${y - h * 0.45} L${x - h * 0.32} ${y - h * 0.45} Z`} fill={color} />
);

const Odes: React.FC<ArtProps> = ({ id, alt }) => (
  <g>
    <defs>
      <Sky id={`${id}s`} stops={alt ? ['#1e1b5e', '#5a5fd0', '#f7a8c4'] : ['#5b7cfa', '#a9b8ff', '#ffd3a8']} />
      <linearGradient id={`${id}r`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffe2c2" />
        <stop offset="1" stopColor="#8fa6ff" />
      </linearGradient>
    </defs>
    <rect width={W} height={H} fill={`url(#${id}s)`} />
    {alt ? (
      <>
        <Stars />
        <Moon x={226} y={58} r={15} />
      </>
    ) : (
      <>
        <circle cx="214" cy="92" r="30" fill="#fff4d6" opacity="0.55" />
        <circle cx="214" cy="92" r="19" fill="#fff8e6" />
      </>
    )}
    {/* wind streaks: the direction field */}
    <g stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round">
      {[
        [26, 40, 22, -4],
        [70, 30, 20, -2],
        [118, 46, 24, 2],
        [40, 66, 18, 3],
        [258, 34, 22, 4],
        [290, 58, 16, 6],
        [150, 22, 18, -1]
      ].map(([x, y, l, dy], i) => (
        <line key={i} x1={x} y1={y} x2={x + l} y2={y + dy} />
      ))}
    </g>
    <path d={ridge(hills(112, 22, 7, 0.4))} fill="#8b9df0" />
    <path d={ridge(hills(128, 18, 6, 1.9))} fill="#6176de" />
    <path d={ridge(hills(146, 14, 5, 3.1))} fill="#3f53bd" />
    {/* the river: a solution curve flowing to the horizon */}
    <path d="M150 112 C142 124 176 132 166 142 C152 156 104 158 88 180 L156 180 C168 162 214 156 204 140 C196 128 160 122 156 112 Z" fill={`url(#${id}r)`} opacity="0.95" />
    <path d={ridge([[0, 160], [60, 152], [120, 166], [180, 158], [250, 168], [320, 156]])} fill="#26337f" />
    {[18, 34, 52, 268, 284, 300].map((x, i) => (
      <Pine key={i} x={x} y={166 + (i % 2) * 4} h={22 + (i % 3) * 6} color="#1b2563" />
    ))}
    <Birds x={84} y={62} color="#2e3f9e" />
  </g>
);

const Crystals: React.FC<ArtProps> = ({ id, alt }) => {
  // faceted peaks: [peak x, peak y, half width, base y]
  const peaks: [number, number, number, number, string, string][] = [
    [70, 70, 62, 150, '#f6a5c0', '#e07ba0'],
    [180, 52, 74, 150, '#ef8db1', '#cf5d88'],
    [276, 78, 60, 150, '#f6a5c0', '#e07ba0']
  ];
  return (
    <g>
      <defs>
        <Sky id={`${id}s`} stops={alt ? ['#5b1a4a', '#c2507f', '#ffb3c7'] : ['#ff8fb1', '#ffc2a8', '#ffe6b8']} />
      </defs>
      <rect width={W} height={H} fill={`url(#${id}s)`} />
      {alt ? (
        <>
          <Stars color="#ffe4ee" />
          <Moon x={124} y={60} r={13} color="#fff0f5" />
        </>
      ) : (
        <circle cx="120" cy="96" r="24" fill="#fff1d6" />
      )}
      {peaks.map(([px, py, hw, by, light, dark], i) => (
        <g key={i}>
          <path d={`M${px - hw} ${by} L${px} ${py} L${px - hw * 0.18} ${by} Z`} fill={light} />
          <path d={`M${px - hw * 0.18} ${by} L${px} ${py} L${px + hw} ${by} Z`} fill={dark} />
          <path d={`M${px} ${py} L${px - hw * 0.08} ${py + 18} L${px + hw * 0.16} ${py + 14} Z`} fill="#fff" opacity="0.55" />
        </g>
      ))}
      <path d={ridge([[0, 150], [80, 144], [160, 152], [240, 142], [320, 150]])} fill="#a83866" />
      {/* foreground crystal cluster */}
      <g transform="translate(232 178)">
        {[
          [-30, -58, 12, '#ffd0e0', '#e86b98'],
          [-6, -78, 14, '#ffe2ec', '#d84a7f'],
          [20, -50, 11, '#ffd0e0', '#e86b98'],
          [-52, -36, 9, '#ffe2ec', '#c93e72']
        ].map(([x, h, w, a, b], i) => (
          <g key={i}>
            <path d={`M${Number(x) - Number(w)} 0 L${Number(x) - Number(w)} ${Number(h) + Number(w) * 1.2} L${x} ${h} L${x} 0 Z`} fill={String(a)} />
            <path d={`M${x} 0 L${x} ${h} L${Number(x) + Number(w)} ${Number(h) + Number(w) * 1.2} L${Number(x) + Number(w)} 0 Z`} fill={String(b)} />
          </g>
        ))}
      </g>
      <path d={ridge([[0, 166], [70, 160], [150, 170], [220, 168], [320, 162]])} fill="#7d1f48" />
      {[
        [40, 40],
        [150, 30],
        [292, 44],
        [250, 18]
      ].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 5} L${x + 1.4} ${y - 1.4} L${x + 5} ${y} L${x + 1.4} ${y + 1.4} L${x} ${y + 5} L${x - 1.4} ${y + 1.4} L${x - 5} ${y} L${x - 1.4} ${y - 1.4} Z`} fill="#fff" opacity="0.85" />
      ))}
    </g>
  );
};

const Cabin: React.FC<ArtProps> = ({ id, alt }) => (
  <g>
    <defs>
      <Sky id={`${id}s`} stops={alt ? ['#5fc9ad', '#a8ead2', '#fff1c4'] : ['#0f3d3a', '#1f7a63', '#9fe0b8']} />
    </defs>
    <rect width={W} height={H} fill={`url(#${id}s)`} />
    {alt && (
      <g>
        <circle cx="70" cy="52" r="30" fill="#fffbe6" opacity="0.35" />
        <circle cx="70" cy="52" r="18" fill="#fff6cf" />
        <g fill="#ffffff" opacity="0.85">
          <ellipse cx="150" cy="34" rx="22" ry="7" />
          <ellipse cx="166" cy="29" rx="14" ry="7" />
          <ellipse cx="262" cy="50" rx="18" ry="6" />
          <ellipse cx="274" cy="46" rx="10" ry="5" />
        </g>
      </g>
    )}
    {!alt && [
      [30, 22],
      [64, 40],
      [110, 16],
      [150, 34],
      [196, 20],
      [240, 44],
      [276, 14],
      [300, 36],
      [86, 12]
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={i % 3 ? 1.1 : 1.7} fill="#eafff4" opacity="0.9" />
    ))}
    {!alt && <path d="M258 40 a14 14 0 1 0 12 22 a11 11 0 1 1 -12 -22 Z" fill="#fff8d6" />}
    <path d={ridge(hills(110, 20, 6, 0.8))} fill="#2f8f72" />
    <path d={ridge(hills(126, 14, 5, 2.4))} fill="#1d6e57" />
    {/* lake */}
    <rect x="0" y="138" width={W} height="42" fill="#3aa585" />
    <g stroke="#bff3dc" strokeOpacity="0.6" strokeWidth="1.4" strokeLinecap="round">
      <line x1="40" y1="150" x2="70" y2="150" />
      <line x1="120" y1="160" x2="160" y2="160" />
      <line x1="230" y1="152" x2="250" y2="152" />
    </g>
    {/* cabin with a screen of code in the window */}
    <g transform="translate(186 92)">
      <path d="M-4 22 L32 -2 L68 22 Z" fill="#0d3b31" />
      <rect x="2" y="20" width="60" height="30" fill="#14513f" />
      <rect x="10" y="26" width="26" height="18" rx="2" fill="#fff3b0" />
      <g fontFamily="'JetBrains Mono', Consolas, monospace" fontSize="4.6" fontWeight="700" fill="#0f5a45">
        <text x="12" y="31.5">for(i=0;i</text>
        <text x="14" y="36.5">sum+=a[i];</text>
        <text x="12" y="41.5">{'}'}</text>
      </g>
      <rect x="44" y="30" width="10" height="20" fill="#0d3b31" />
      {/* the window's glow on the water */}
      <rect x="12" y="52" width="22" height="3" rx="1.5" fill="#fff3b0" opacity="0.55" />
      <rect x="16" y="58" width="14" height="2" rx="1" fill="#fff3b0" opacity="0.35" />
    </g>
    {[24, 44, 62, 132, 150, 290, 306].map((x, i) => (
      <Pine key={i} x={x} y={142} h={26 + (i % 3) * 8} color="#0b3a2e" />
    ))}
  </g>
);

const Factory: React.FC<ArtProps> = ({ id, alt }) => (
  <g>
    <defs>
      <Sky id={`${id}s`} stops={alt ? ['#4a1d0c', '#c2541c', '#ffc27a'] : ['#ff9a4d', '#ffc98a', '#ffe7c2']} />
    </defs>
    <rect width={W} height={H} fill={`url(#${id}s)`} />
    {alt ? (
      <>
        <Stars color="#ffe9cc" />
        <Moon x={84} y={52} r={13} color="#fff1d6" />
      </>
    ) : (
      <circle cx="78" cy="60" r="20" fill="#fff3d8" />
    )}
    <path d={ridge(hills(104, 16, 6, 1.2))} fill="#f0a866" />
    <path d={ridge(hills(120, 12, 5, 2.7))} fill="#e08947" />
    {/* factory */}
    <g transform="translate(180 72)">
      <rect x="20" y="0" width="9" height="40" fill="#7a3a12" />
      <rect x="36" y="10" width="9" height="30" fill="#7a3a12" />
      <circle cx="26" cy="-8" r="7" fill="#fff" opacity="0.75" />
      <circle cx="34" cy="-16" r="9" fill="#fff" opacity="0.6" />
      <circle cx="44" cy="0" r="6" fill="#fff" opacity="0.7" />
      <path d="M0 40 L0 22 L18 30 L18 22 L36 30 L36 22 L54 30 L54 22 L72 30 L72 40 Z" fill="#9c4a17" />
      <rect x="0" y="40" width="72" height="22" fill="#b65a1f" />
      {[8, 22, 36, 50].map((x) => (
        <rect key={x} x={x} y="46" width="9" height="7" fill="#ffd79a" />
      ))}
    </g>
    <path d={ridge([[0, 136], [80, 130], [160, 138], [240, 132], [320, 136]])} fill="#c96a28" />
    {/* the delivery route between houses */}
    <path d="M14 168 C60 140 96 172 140 150 S220 144 254 160 S300 170 312 152" fill="none" stroke="#fff1db" strokeWidth="6" strokeLinecap="round" />
    <path d="M14 168 C60 140 96 172 140 150 S220 144 254 160 S300 170 312 152" fill="none" stroke="#c96a28" strokeWidth="1.4" strokeDasharray="5 5" />
    {[
      [14, 168],
      [140, 150],
      [254, 160],
      [312, 152]
    ].map(([x, y], i) => (
      <g key={i} transform={`translate(${x - 9} ${y - 22})`}>
        <path d="M0 9 L9 1 L18 9 Z" fill="#7a3a12" />
        <rect x="2" y="9" width="14" height="11" fill="#fff6e8" />
        <rect x="7" y="13" width="4" height="7" fill="#b65a1f" />
      </g>
    ))}
    <g transform="translate(74 150)">
      <rect x="0" y="0" width="16" height="9" rx="1.5" fill="#7a3a12" />
      <rect x="16" y="3" width="7" height="6" rx="1.5" fill="#9c4a17" />
      <circle cx="5" cy="10" r="2.4" fill="#3b1a07" />
      <circle cx="18" cy="10" r="2.4" fill="#3b1a07" />
    </g>
    <path d={ridge([[0, 174], [100, 170], [200, 176], [320, 170]])} fill="#a24f17" />
    <Birds x={230} y={36} color="#8a3f10" s={0.9} />
  </g>
);

const ART: Record<CourseId, React.FC<ArtProps>> = { ENGR213: Odes, MIAE221: Crystals, MIAE215: Cabin, INDU211: Factory };
const GENERATED_COVERS: Partial<Record<CourseId, string>> = {
  MIAE221: '/course-covers/miae221-fallback.png',
  MIAE215: '/course-covers/miae215-fallback.png',
  INDU211: '/course-covers/indu211-fallback.png'
};

// variant 'course' = the course's own cover; 'reco' = the alternate scene for recommendation cards
export const CourseCover: React.FC<{ course: CourseId; className?: string; label?: boolean; variant?: 'course' | 'reco' }> = ({
  course,
  className = '',
  label = true,
  variant = 'course'
}) => {
  const c = COURSE_BY_ID[course];
  const Art = ART[course];
  const id = useId().replace(/:/g, '');
  const [imageFailed, setImageFailed] = useState(false);
  const alt = variant === 'reco';
  // mirror the alternate scene too (not MIAE 215's: its window holds readable code)
  const flip = alt && course !== 'MIAE215' ? `translate(${W} 0) scale(-1 1)` : undefined;
  // Generated subject artwork is the meaningful fallback for a learning card with no lesson video.
  // The original vector illustration remains a no-network, no-blank fallback if an asset is unavailable.
  const generatedCover = GENERATED_COVERS[course];
  // ENGR 213 deliberately keeps its hand-drawn night landscape for recommendations.
  // It reads cleanly at a small card size while the river and wind streaks still echo a solution curve and direction field.
  if (generatedCover && !imageFailed) {
    return (
      <div className={`lx-cover lx-cover--generated lx-c-${course} ${className}`} role="img" aria-label={`${c.code}: ${c.title}`}>
        <img src={generatedCover} alt="" loading="lazy" decoding="async" onError={() => setImageFailed(true)} />
        {label && <span className="lx-cover-label">{c.code}</span>}
      </div>
    );
  }
  return (
    <svg className={`lx-cover lx-c-${course} ${className}`} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${c.code}: ${c.title}`} preserveAspectRatio="xMidYMid slice">
      <g transform={flip}>
        <Art id={id} alt={alt} />
      </g>
      {label && (
        <g>
          <rect x="12" y="12" rx="7" width={c.code.length * 7.6 + 18} height="24" fill="#ffffff" opacity="0.92" />
          <text x="21" y="28.5" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="12.5" fill="var(--lx-accent-deep)">
            {c.code}
          </text>
        </g>
      )}
    </svg>
  );
};
