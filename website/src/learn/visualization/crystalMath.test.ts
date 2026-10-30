// Tests for the Crystal Lab's single source of truth (crystalMath.ts).
// No test framework in this repo: run with `npm run test:crystal`
// (esbuild bundles this file, node runs it). Exit code 1 on any failure.
import {
  CELL_KINDS,
  CUBE_EDGES,
  HCP_IDEAL_C_OVER_A,
  directionFromPoints,
  dist,
  formatDirection,
  millerPlane,
  pointOnPlane,
  replicate,
  unitCell,
} from './crystalMath';

let passed = 0;
let failed = 0;
const failures: string[] = [];

const check = (name: string, ok: boolean, detail = '') => {
  if (ok) {
    passed++;
    console.log(`  ok  ${name}`);
  } else {
    failed++;
    failures.push(name);
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ''}`);
  }
};

const near = (a: number, b: number, tol = 1e-9): boolean => Math.abs(a - b) <= tol;

console.log('Unit-cell atom counts, coordination, APF');
for (const kind of CELL_KINDS) {
  const m = unitCell(kind);
  const counted = m.atoms.reduce((s, a) => s + a.share, 0);
  check(`${m.short}: sharing fractions sum to atoms/cell (${m.atomsPerCell})`, near(counted, m.atomsPerCell, 1e-9), `got ${counted}`);
  check(`${m.short}: sharing rows sum to atoms/cell`, near(m.sharing.reduce((s, r) => s + r.contributes, 0), m.atomsPerCell, 1e-9));
  check(`${m.short}: every atom share is 1/8, 1/6, 1/2 or 1`, m.atoms.every((a) => [1 / 8, 1 / 6, 1 / 2, 1].some((s) => near(a.share, s))));
}
check('SC: 1 atom/cell, CN 6, APF π/6, a = 2R', unitCell('sc').atomsPerCell === 1 && unitCell('sc').coordination === 6 && near(unitCell('sc').apf, Math.PI / 6) && near(unitCell('sc').radius, 0.5));
check('BCC: 2 atoms/cell, CN 8, APF √3π/8 ≈ 0.680, R = a√3/4', unitCell('bcc').atomsPerCell === 2 && unitCell('bcc').coordination === 8 && near(unitCell('bcc').apf, (Math.sqrt(3) * Math.PI) / 8) && near(unitCell('bcc').radius, Math.sqrt(3) / 4));
check('FCC: 4 atoms/cell, CN 12, APF √2π/6 ≈ 0.740, R = a√2/4', unitCell('fcc').atomsPerCell === 4 && unitCell('fcc').coordination === 12 && near(unitCell('fcc').apf, (Math.sqrt(2) * Math.PI) / 6) && near(unitCell('fcc').radius, Math.sqrt(2) / 4));

console.log('Cubic atom coordinates');
const bcc = unitCell('bcc');
check('BCC has 8 corners + 1 body atom', bcc.atoms.filter((a) => a.role === 'corner').length === 8 && bcc.atoms.filter((a) => a.role === 'body').length === 1);
check('BCC body centre is exactly (0.5, 0.5, 0.5)', bcc.atoms.some((a) => a.role === 'body' && a.frac[0] === 0.5 && a.frac[1] === 0.5 && a.frac[2] === 0.5));
const fcc = unitCell('fcc');
check('FCC has 8 corners + 6 face centres', fcc.atoms.filter((a) => a.role === 'corner').length === 8 && fcc.atoms.filter((a) => a.role === 'face').length === 6);
check('FCC face centres sit at face midpoints', fcc.atoms.filter((a) => a.role === 'face').every((a) => a.frac.filter((x) => x === 0.5).length === 2));
check('BCC corner atoms touch the body atom (distance a√3/2 = 2R)', near(dist(bcc.atoms.find((a) => a.role === 'body')!.cart, [0, 0, 0]), Math.sqrt(3) / 2));

console.log('The cube stays a cube (camera must never change this)');
check('Unit cube has 12 edges', CUBE_EDGES.length === 12);
check('Every cube edge has unit length', CUBE_EDGES.every(([a, b]) => near(dist(a, b), 1)));
check('Unit cube has 8 distinct corners', new Set(CUBE_EDGES.flat().map((p) => p.join(','))).size === 8);
check('Geometry is camera-independent: two calls give identical atoms', JSON.stringify(unitCell('bcc').atoms) === JSON.stringify(unitCell('bcc').atoms));

console.log('HCP convention');
const hcp = unitCell('hcp');
check('HCP conventional prism: 6 atoms/cell', hcp.atomsPerCell === 6);
check('HCP: 12 corners × 1/6 + 2 faces × 1/2 + 3 interior × 1 = 6', hcp.atoms.filter((a) => a.role === 'corner').length === 12 && hcp.atoms.filter((a) => a.role === 'face').length === 2 && hcp.atoms.filter((a) => a.role === 'interior').length === 3);
check('HCP: CN 12, APF 0.74 (same as FCC)', hcp.coordination === 12 && near(hcp.apf, 0.74, 0.001));
check('HCP: ideal c/a = √(8/3) ≈ 1.633', near(HCP_IDEAL_C_OVER_A, Math.sqrt(8 / 3)) && near(HCP_IDEAL_C_OVER_A, 1.633, 0.001));
check('HCP: convention note states prism vs primitive (2 atoms)', (hcp.conventionNote ?? '').includes('primitive') && (hcp.conventionNote ?? '').includes('2 atoms'));
const mid = hcp.atoms.filter((a) => a.role === 'interior');
const corner0 = hcp.atoms.find((a) => a.id === 'corner-0-0')!;
check('HCP: interior atoms sit at mid-height (z = c/2)', mid.every((a) => near(a.cart[2], HCP_IDEAL_C_OVER_A / 2)));
check('HCP: interior atom touches a corner atom at distance a = 2R', near(dist(mid[0].cart, corner0.cart), 1, 1e-9), `got ${dist(mid[0].cart, corner0.cart)}`);

console.log('Replication');
const repBcc = replicate('bcc', 2, 2, 2);
check('BCC 2×2×2: 8 cells, 35 distinct atoms (27 corners + 8 bodies — shared corners counted once)', repBcc.cells === 8 && repBcc.atoms.length === 35, `got ${repBcc.atoms.length}`);
check('Replication never draws two atoms at one position', repBcc.atoms.every((a, i) => repBcc.atoms.slice(i + 1).every((b) => dist(a.cart, b.cart) > 1e-9)));
const repHcp = replicate('hcp', 2, 1, 1);
const hcpNoCoincide = repHcp.atoms.every((a, i) => repHcp.atoms.slice(i + 1).every((b) => dist(a.cart, b.cart) > 1e-9));
check('HCP 2×1×1: 2 cells, no coincident atoms, more than one cell alone', repHcp.cells === 2 && repHcp.atoms.length > 6 && hcpNoCoincide, `got ${repHcp.atoms.length}`);

console.log('BCC (110) audit — the plane must be exact, not faked');
const p110 = millerPlane(1, 1, 0, 1);
check('BCC (110): equation is x + y = 1', p110.equation === 'x + y = 1', `got "${p110.equation}"`);
check('BCC (110): body centre (0.5, 0.5, 0.5) lies on the plane', pointOnPlane([0.5, 0.5, 0.5], p110));
check('BCC (110): plane cuts the cube at x = 1 and y = 1, parallel to z', p110.intercepts.x === 1 && p110.intercepts.y === 1 && p110.intercepts.z === null);
check('BCC (110): intersection polygon has 4 vertices, all on the plane', p110.polygon.length === 4 && p110.polygon.every((p) => pointOnPlane(p, p110)));
check('BCC (110): polygon vertices lie on the cube (0 ≤ coords ≤ 1)', p110.polygon.every((p) => p.every((x) => x >= -1e-9 && x <= 1 + 1e-9)));
const p111 = millerPlane(1, 1, 1, 1);
check('(111) at d=1: triangle cutting off one corner, equation x + y + z = 1', p111.polygon.length === 3 && p111.equation === 'x + y + z = 1', `got ${p111.polygon.length} vertices`);
const p111c = millerPlane(1, 1, 1, 1.5);
check('(111) through the centre (d=3/2): 6-vertex hexagon', p111c.polygon.length === 6 && p111c.polygon.every((p) => pointOnPlane(p, p111c)));
const p100 = millerPlane(1, 0, 0, 1);
check('(100): 4-vertex square, parallel to y and z', p100.polygon.length === 4 && p100.intercepts.y === null && p100.intercepts.z === null);

console.log('Crystallographic directions (Milestone 2 hook)');
check('Example: (0,0,0) → (1/2,1,1/3) is [3 6 2]', JSON.stringify(directionFromPoints([0, 0, 0], [0.5, 1, 1 / 3])) === JSON.stringify([3, 6, 2]));
check('Negative indices kept: (1,0,0) → (0,1,0) direction [−1 1 0]', JSON.stringify(directionFromPoints([1, 0, 0], [0, 1, 0])) === JSON.stringify([-1, 1, 0]));
check('Format: [1 -1 0] renders with a bar', formatDirection([1, -1, 0]) === '[1 1̄ 0]');

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  console.log(`Failures: ${failures.join('; ')}`);
  process.exit(1);
}
