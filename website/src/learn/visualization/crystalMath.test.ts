// Tests for the Crystal Lab's single source of truth (crystalMath.ts).
// No test framework in this repo: run with `npm run test:crystal`
// (esbuild bundles this file, node runs it). Exit code 1 on any failure.
import { DIRECTIONS_SPEC, PLANES_SPEC, UNIT_CELLS_SPEC, validateSpec } from './registry';
import {
  CELL_KINDS,
  CUBE_EDGES,
  HCP_IDEAL_C_OVER_A,
  atomsOnPlane,
  clearFractions,
  defaultPlaneOffset,
  directionFamily,
  directionFromPoints,
  directionSteps,
  dist,
  formatDirection,
  formatFamily,
  formatMiller,
  formatPlaneFamily,
  fracToString,
  millerPlane,
  parseFraction,
  planeFamily,
  planeFromIntercepts,
  pointOnPlane,
  polygonArea,
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

console.log('Milestone 2 — direction steps, worked step by step');
const ex = directionSteps([0, 0, 0], [0.5, 1, 1 / 3]);
check('Example: diff is (1/2, 1, 1/3)', ex.diff[0] === 0.5 && ex.diff[1] === 1 && Math.abs(ex.diff[2] - 1 / 3) < 1e-9);
check('Example: multiplier is 6, scaled (3, 6, 2)', ex.multiplier === 6 && JSON.stringify(ex.scaled) === JSON.stringify([3, 6, 2]));
check('Example: GCD 1, final [3 6 2]', ex.gcdValue === 1 && JSON.stringify(ex.final) === JSON.stringify([3, 6, 2]));
check('Example: step lines show Start, End, End−Start, ×6, final', ex.lines.length === 6 && ex.lines[0].includes('Start') && ex.lines[3].includes('6'));
const neg = directionSteps([1, 0, 0], [0, 1, 0]);
check('Negative indices: (1,0,0) → (0,1,0) is [−1 1 0]', JSON.stringify(neg.final) === JSON.stringify([-1, 1, 0]));
check('Negative indices: bar notation [1̄ 1 0]', formatDirection([-1, 1, 0]) === '[1̄ 1 0]');
const frac = directionSteps([0, 0, 0], [1, 0.5, 0]);
check('Fractions reduce: (0,0,0) → (1,1/2,0) is [2 1 0]', JSON.stringify(frac.final) === JSON.stringify([2, 1, 0]) && frac.multiplier === 2 && frac.gcdValue === 1);
check('clearFractions: (1/2, 1, 1/3) × 6 = (3, 6, 2)', JSON.stringify(clearFractions([0.5, 1, 1 / 3]).ints) === JSON.stringify([3, 6, 2]));
check('parseFraction: "1/2", "-1/3", "0.5", "2", "x" → 0.5, -1/3, 0.5, 2, null', parseFraction('1/2') === 0.5 && parseFraction('-1/3') === -1 / 3 && parseFraction('0.5') === 0.5 && parseFraction('2') === 2 && parseFraction('x') === null);
check('fracToString: 1/2, −1/3, 2', fracToString(0.5) === '1/2' && fracToString(-1 / 3) === '−1/3' && fracToString(2) === '2');

console.log('Milestone 2 — direction & plane families');
check('⟨100⟩ has 6 directions', directionFamily([1, 0, 0]).length === 6);
check('⟨110⟩ has 12 directions', directionFamily([1, 1, 0]).length === 12);
check('⟨111⟩ has 8 directions', directionFamily([1, 1, 1]).length === 8);
check('⟨110⟩ contains [1 1̄ 0] and [0 1 1]', directionFamily([1, 1, 0]).some((d) => JSON.stringify(d) === JSON.stringify([1, -1, 0])) && directionFamily([1, 1, 0]).some((d) => JSON.stringify(d) === JSON.stringify([0, 1, 1])));
check('Family notation: ⟨110⟩', formatFamily([1, 1, 0]) === '⟨1 1 0⟩');
check('{100} has 3 planes', planeFamily([1, 0, 0]).length === 3);
check('{110} has 6 planes', planeFamily([1, 1, 0]).length === 6);
check('{111} has 4 planes', planeFamily([1, 1, 1]).length === 4);
check('{110} does not double-count opposite planes', !planeFamily([1, 1, 0]).some((p) => JSON.stringify(p) === JSON.stringify([-1, -1, 0])));
check('Plane family notation: {110}', formatPlaneFamily([1, 1, 0]) === '{1 1 0}');
check('Miller notation: (1 1̄ 0)', formatMiller([1, -1, 0]) === '(1 1̄ 0)');

console.log('Milestone 2 — planes from intercepts');
const p110i = planeFromIntercepts(1, 1, null);
check('(110) from intercepts (1, 1, ∞): reciprocals (1, 1, 0), (hkl) = (110)', JSON.stringify(p110i.hkl) === JSON.stringify([1, 1, 0]) && p110i.reciprocals[2] === null);
const p111i = planeFromIntercepts(1, 1, 1);
check('(111) from intercepts (1, 1, 1)', JSON.stringify(p111i.hkl) === JSON.stringify([1, 1, 1]));
const p201 = planeFromIntercepts(1 / 2, null, 1);
check('(201) from intercepts (1/2, ∞, 1): reciprocals (2, 0, 1)', JSON.stringify(p201.hkl) === JSON.stringify([2, 0, 1]));
const pOrig = planeFromIntercepts(0, 1, 1);
check('Plane through the origin is flagged, not indexed', pOrig.throughOrigin && pOrig.hkl === null);
check('Translated equivalent plane keeps (hkl): (111) d=1 and d=1.5 both (111)', millerPlane(1, 1, 1, 1).h === 1 && millerPlane(1, 1, 1, 1.5).h === 1 && millerPlane(1, 1, 1, 1.5).polygon.length === 6);
check('Default offset: (100)→1, (110)→1, (111)→1, (1−10)→0', defaultPlaneOffset(1, 0, 0) === 1 && defaultPlaneOffset(1, 1, 0) === 1 && defaultPlaneOffset(1, 1, 1) === 1 && defaultPlaneOffset(1, -1, 0) === 0);
check('(1−10) at its default offset cuts the cube as a 4-gon', millerPlane(1, -1, 0, defaultPlaneOffset(1, -1, 0)).polygon.length === 4);
check('(1̄10) intercepts: x=1, y=−1, z parallel', millerPlane(-1, 1, 0, 1).intercepts.x === -1 && millerPlane(-1, 1, 0, 1).intercepts.y === 1 && millerPlane(-1, 1, 0, 1).intercepts.z === null);
check('Planes parallel to axes: (010) has x,z = ∞; (001) has x,y = ∞', millerPlane(0, 1, 0, 1).intercepts.x === null && millerPlane(0, 1, 0, 1).intercepts.z === null && millerPlane(0, 0, 1, 1).intercepts.x === null && millerPlane(0, 0, 1, 1).intercepts.y === null);

console.log('Milestone 2 — atoms on planes (planar density)');
const bcc110 = atomsOnPlane('bcc', millerPlane(1, 1, 0, 1));
check('BCC (110): 2 atoms per plane cell (4 corners × 1/4 + body × 1)', Math.abs(bcc110.count - 2) < 1e-9, `got ${bcc110.count}`);
check('BCC (110): plane area is √2 a²', Math.abs(bcc110.area - Math.sqrt(2)) < 1e-9, `got ${bcc110.area}`);
check('BCC (110): density √2 atoms/a²', Math.abs(bcc110.density - Math.sqrt(2)) < 1e-9, `got ${bcc110.density}`);
check('BCC (110): body centre is on the plane and counted as interior (share 1)', bcc110.atoms.some((a) => a.atom.id === 'body' && a.position === 'interior' && a.inPlaneShare === 1));
const fcc100 = atomsOnPlane('fcc', millerPlane(1, 0, 0, 1));
check('FCC (100): 2 atoms per plane cell (4 corners × 1/4 + face centre × 1)', Math.abs(fcc100.count - 2) < 1e-9, `got ${fcc100.count}`);
check('FCC (100): plane area is 1 a²', Math.abs(fcc100.area - 1) < 1e-9);
check('Polygon area: (111) triangle is √3/2 a²', Math.abs(polygonArea(millerPlane(1, 1, 1, 1).polygon) - Math.sqrt(3) / 2) < 1e-9);
check('Atom-in-plane: BCC corner (1,0,0) is on (110), (0,0,0) is not', pointOnPlane([1, 0, 0], millerPlane(1, 1, 0, 1)) && !pointOnPlane([0, 0, 0], millerPlane(1, 1, 0, 1)));

console.log('Milestone 2 — registry specs validate');
check('Unit-cells spec validates', validateSpec(UNIT_CELLS_SPEC).length === 0);
check('Directions spec validates ([3 6 2] example)', validateSpec(DIRECTIONS_SPEC).length === 0);
check('Planes spec validates (BCC (110), d=1)', validateSpec(PLANES_SPEC).length === 0);
check('Invalid spec is rejected: (000) is not a plane', validateSpec({ ...PLANES_SPEC, parameters: { h: 0, k: 0, l: 0 } }).length > 0);
check('Invalid spec is rejected: zero-length direction', validateSpec({ ...DIRECTIONS_SPEC, parameters: { start: [0, 0, 0], end: [0, 0, 0] } }).length > 0);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  console.log(`Failures: ${failures.join('; ')}`);
  process.exit(1);
}
