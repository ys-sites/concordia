// 2D fallback diagram for the Crystal Lab — the same model, drawn as SVG.
// Anatomy principle: the SVG still reads without WebGL. This is what a
// student sees when WebGL is unavailable, and it is also the static figure
// behind the 3D scene's sharing step. Positions come from crystalMath.
import React from 'react';
import { unitCell, type CellKind } from '../visualization/crystalMath';

const project = (x: number, y: number, z: number): [number, number] => {
  // Isometric-ish projection: x right-down, y left-down, z up.
  const px = 200 + (x - y) * 86;
  const py = 190 - z * 120 + (x + y) * 42;
  return [px, py];
};

/** HCP fallback: a flat hexagon with its mid atoms, drawn from the model. */
const HcpDiagram: React.FC<{ cell: 'hcp'; selectedId: string | null; onSelect: (id: string) => void }> = ({ selectedId, onSelect }) => {
  const m = unitCell('hcp');
  const corners = m.atoms.filter((a) => a.role === 'corner' && a.frac[2] === 0);
  const pts = corners.map((a) => {
    const [x, y] = [a.cart[0], a.cart[1]];
    return [200 + x * 90, 190 - y * 90] as [number, number];
  });
  const mid = m.atoms.filter((a) => a.role === 'interior');
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Hexagonal close-packed unit cell, top view">
      <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={13} fill="#cbd5e1" stroke="#0f172a" strokeWidth="1" />
      ))}
      {mid.map((a) => (
        <g key={a.id} onClick={() => onSelect(a.id)} style={{ cursor: 'pointer' }}>
          <circle cx={200 + a.cart[0] * 90} cy={190 - a.cart[1] * 90} r={13} fill={selectedId === a.id ? '#ffffff' : '#e11d48'} stroke="#0f172a" strokeWidth="1" />
        </g>
      ))}
      <circle cx={200} cy={190} r={13} fill="#fbbf24" stroke="#0f172a" strokeWidth="1" />
      <text x={200} y={320} textAnchor="middle" fill="#cbd5e1" fontSize={13}>
        HCP — top view · 12 corners × 1/6 + 2 faces × 1/2 + 3 inside × 1 = 6 atoms
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
