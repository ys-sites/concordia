// Product-structure (BOM) tree drawn as SVG: shared by the solved-paper page and the exam replica.
import React from 'react';
import type { BomNode } from './vaultTypes';

export interface Placed {
  node: BomNode;
  x: number;
  y: number;
  depth: number;
  kids: Placed[];
}
export const COL = 74;
export const ROW = 76;
export const BW = 60;
export const BH = 28;
export const PAD = 14;

export const layout = (root: BomNode) => {
  const cursor = { x: 0 };
  let maxDepth = 0;
  const place = (node: BomNode, depth: number): Placed => {
    maxDepth = Math.max(maxDepth, depth);
    if (!node.k?.length) {
      const p = { node, x: cursor.x, y: depth * ROW, depth, kids: [] };
      cursor.x += COL;
      return p;
    }
    const kids = node.k.map((k) => place(k, depth + 1));
    return { node, x: (kids[0].x + kids[kids.length - 1].x) / 2, y: depth * ROW, depth, kids };
  };
  const root0 = place(root, 0);
  const noteW = root.note ? 130 : 0;
  return { root: root0, width: cursor.x - COL + BW + PAD * 2 + noteW, height: maxDepth * ROW + BH + PAD * 2 };
};

export const BomEdges: React.FC<{ p: Placed }> = ({ p }) => {
  if (!p.kids.length) return null;
  const midY = p.y + BH + (ROW - BH) / 2;
  const xs = p.kids.map((k) => k.x);
  return (
    <g>
      <path className="pg-edge" d={`M${p.x},${p.y + BH} V${midY} M${Math.min(...xs)},${midY} H${Math.max(...xs)}`} />
      {p.kids.map((k, i) => (
        <g key={i}>
          <path className="pg-edge" d={`M${k.x},${midY} V${k.y}`} />
          {k.node.q !== undefined && (
            <text className="pg-qty" x={k.x + 5} y={midY + (k.y - midY) / 2 + 4}>
              ({k.node.q})
            </text>
          )}
          <BomEdges p={k} />
        </g>
      ))}
    </g>
  );
};

export const BomNodes: React.FC<{ p: Placed; hot: string | null; setHot: (n: string | null) => void }> = ({ p, hot, setHot }) => (
  <g>
    <g
      className={`pg-node d${Math.min(p.depth, 3)} ${hot === p.node.n ? 'hot' : ''}`}
      onMouseEnter={() => setHot(p.node.n)}
      onMouseLeave={() => setHot(null)}
      onClick={() => setHot(hot === p.node.n ? null : p.node.n)}
    >
      <rect x={p.x - BW / 2} y={p.y} width={BW} height={BH} rx={6} />
      <text x={p.x} y={p.y + BH / 2 + 4} textAnchor="middle">
        {p.node.n}
      </text>
    </g>
    {p.node.note && (
      <text className="pg-qty" x={p.x + BW / 2 + 8} y={p.y + BH / 2 + 4}>
        {p.node.note}
      </text>
    )}
    {p.kids.map((k, i) => (
      <BomNodes key={i} p={k} hot={hot} setHot={setHot} />
    ))}
  </g>
);

