// 2D fallback diagram for the Crystal Lab — the same model, drawn as SVG.
// Anatomy principle: the SVG still reads without WebGL. This is what a
// student sees when WebGL is unavailable, and it is also the static figure
// behind the 3D scene's sharing step. Positions come from crystalMath.
import React from 'react';
import { HCP_IDEAL_C_OVER_A, unitCell, type CellKind } from '../visualization/crystalMath';

const project = (x: number, y: number, z: number): [number, number] => {
  // Isometric-ish projection: x right-down, y left-down, z up.
  const px = 200 + (x - y) * 86;
  const py = 190 - z * 120 + (x + y) * 42;
  return [px, py];
};

const projectHcp = (x: number, y: number, z: number): [number, number] => {
  const px = 200 + x * 92 - y * 28;
  const py = 235 - z * 88 + y * 36;
  return [px, py];
};

/** HCP fallback: isometric 3D hexagonal prism with top/bottom hexagons, radial spokes, and 3 B-layer interior atoms. */
const HcpDiagram: React.FC<{ cell: 'hcp'; selectedId: string | null; onSelect: (id: string) => void }> = ({
  selectedId,
  onSelect,
}) => {
  const m = unitCell('hcp');
  const bottomCorners = m.atoms
    .filter((a) => a.role === 'corner' && a.frac[2] === 0)
    .sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const topCorners = m.atoms
    .filter((a) => a.role === 'corner' && a.frac[2] === 1)
    .sort((a, b) => Math.atan2(a.cart[1], a.cart[0]) - Math.atan2(b.cart[1], b.cart[0]));
  const mid = m.atoms.filter((a) => a.role === 'interior');
  const botPts = bottomCorners.map((a) => projectHcp(a.cart[0], a.cart[1], a.cart[2]));
  const topPts = topCorners.map((a) => projectHcp(a.cart[0], a.cart[1], a.cart[2]));
  const botCenter = projectHcp(0, 0, 0);
  const topCenter = projectHcp(0, 0, HCP_IDEAL_C_OVER_A);
  const midPts = mid.map((a) => projectHcp(a.cart[0], a.cart[1], a.cart[2]));

  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Hexagonal close-packed unit cell, 3D prism view">
      {/* Bottom & top hexagons + vertical pillars + basal spokes */}
      <polygon points={botPts.map((p) => p.join(',')).join(' ')} fill="none" stroke="#64748b" strokeWidth="1.6" />
      <polygon points={topPts.map((p) => p.join(',')).join(' ')} fill="none" stroke="#64748b" strokeWidth="1.6" />
      {botPts.map((b, i) => (
        <g key={`pillar-${i}`}>
          <line x1={b[0]} y1={b[1]} x2={topPts[i][0]} y2={topPts[i][1]} stroke="#64748b" strokeWidth="1.3" />
          <line x1={botCenter[0]} y1={botCenter[1]} x2={b[0]} y2={b[1]} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 2" />
          <line x1={topCenter[0]} y1={topCenter[1]} x2={topPts[i][0]} y2={topPts[i][1]} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 2" />
        </g>
      ))}
      {/* B-layer mid-plane triangle */}
      {midPts.length === 3 && (
        <polygon
          points={midPts.map((p) => p.join(',')).join(' ')}
          fill="rgba(190,18,60,0.12)"
          stroke="#be123c"
          strokeWidth="1.5"
        />
      )}
      {/* All 17 HCP atom sites */}
      {m.atoms.map((a) => {
        const [cx, cy] = projectHcp(a.cart[0], a.cart[1], a.cart[2]);
        const fill =
          selectedId === a.id
            ? '#ffffff'
            : a.role === 'interior'
              ? '#e11d48'
              : a.role === 'face'
                ? '#fbbf24'
                : '#3b82f6';
        return (
          <g key={a.id} onClick={() => onSelect(a.id)} style={{ cursor: 'pointer' }}>
            <circle cx={cx} cy={cy} r={a.role === 'interior' ? 11 : 9.5} fill={fill} stroke="#0f172a" strokeWidth="1.2" />
          </g>
        );
      })}
      <text x={200} y={322} textAnchor="middle" fill="#cbd5e1" fontSize={12.5}>
        HCP Hexagonal Prism · 12 corners × 1/6 + 2 faces × 1/2 + 3 interior × 1 = 6 atoms
      </text>
    </svg>
  );
};

export const CellDiagram: React.FC<{
  cell: CellKind;
  selectedId: string | null;
  onSelect: (id: string) => void;
}> = ({ cell, selectedId, onSelect }) => {
  const m = unitCell(cell);
  if (cell === 'hcp') return <HcpDiagram cell={cell} selectedId={selectedId} onSelect={onSelect} />;
  // Cubic: draw the 12 edges, then atoms back-to-front (by projected depth).
  const edges: [number, number, number, number, number, number][] = [
    [0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 1],
  ];
  const atoms = [...m.atoms].sort((a, b) => a.cart[0] + a.cart[1] - (b.cart[0] + b.cart[1]));
  const color = (a: (typeof m.atoms)[number]): string =>
    a.role === 'corner' ? '#cbd5e1' : a.role === 'face' ? '#fbbf24' : '#e11d48';
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label={`${m.name} unit cell diagram`}>
      {edges.map(([x1, y1, z1, x2, y2, z2], i) => {
        const [ax, ay] = project(x1, y1, z1);
        const [bx, by] = project(x2, y2, z2);
        return <line key={i} x1={ax} y1={ay} x2={bx} y2={by} stroke="#94a3b8" strokeWidth="1.5" />;
      })}
      {atoms.map((a) => {
        const [x, y] = project(a.cart[0], a.cart[1], a.cart[2]);
        const r = a.role === 'body' ? 17 : 14;
        return (
          <g key={a.id} onClick={() => onSelect(a.id)} style={{ cursor: 'pointer' }}>
            <circle cx={x} cy={y} r={r} fill={selectedId === a.id ? '#ffffff' : color(a)} stroke="#0f172a" strokeWidth={selectedId === a.id ? 2.5 : 1} />
            {selectedId === a.id && (
              <text x={x} y={y - r - 8} textAnchor="middle" fill="#ffffff" fontSize={12}>
                {a.role} · share {a.share === 1 ? '1' : a.share === 0.5 ? '1/2' : '1/8'}
              </text>
            )}
          </g>
        );
      })}
      <text x={200} y={322} textAnchor="middle" fill="#cbd5e1" fontSize={13}>
        {m.short} · {m.atomsPerCell} atom{m.atomsPerCell === 1 ? '' : 's'} per cell · APF {m.apf.toFixed(3)}
      </text>
    </svg>
  );
};
