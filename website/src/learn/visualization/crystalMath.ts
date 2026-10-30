// Crystal geometry — pure mathematics, no rendering imports.
//
// Anatomy principle, applied directly: ONE small model drives both the moving
// parts AND every number the figure shows. The renderer, the labels, the
// readout and the guided steps all read from this module; no number about a
// cell is ever hardcoded in the UI. If this module is wrong, the lab is
// wrong — so it is covered by crystalMath.test.ts, including the BCC (110)
// audit (plane x + y = 1 must contain the body centre (1/2, 1/2, 1/2)).
//
// Conventions (stated in the UI, not hidden):
// - Cubic cells use fractional coordinates in a unit cube, a = 1. A cube stays
//   a cube: 8 corners, 12 edges, every edge length 1.
// - HCP uses the CONVENTIONAL hexagonal-prism cell: 12 corner atoms (share
//   1/6), 2 hexagonal-face centres (share 1/2), 3 interior atoms (share 1)
//   → 6 atoms per cell. The primitive cell holds 2 atoms. Ideal c/a = √(8/3).
// - Atom radius R is the touching radius (nearest neighbours touch).

export type CellKind = 'sc' | 'bcc' | 'fcc' | 'hcp';

export type Vec3 = [number, number, number];

export type AtomRole = 'corner' | 'face' | 'body' | 'interior';

export interface AtomSite {
  /** Stable id, e.g. 'corner-000', 'face-x1', 'body', 'hcp-mid-0'. */
  id: string;
  role: AtomRole;
  /** Fractional coordinates in the cell's own basis (cubic: unit cube; HCP: axial u, v, w). */
  frac: Vec3;
  /** Cartesian position with a = 1 (HCP: ideal c/a). The renderer scales this. */
  cart: Vec3;
  /** Fraction of this atom that belongs to one cell. */
  share: number;
  label: string;
}

export interface SharingRow {
  role: AtomRole;
  count: number;
  shareEach: string;
  shareEachValue: number;
  contributes: number;
  line: string;
}

export interface UnitCellModel {
  kind: CellKind;
  name: string;
  short: string;
  /** Atoms of ONE conventional cell. */
  atoms: AtomSite[];
  atomsPerCell: number;
  coordination: number;
  /** Atomic packing factor, 0–1. */
  apf: number;
  /** Radius in units of a (cubic) / a (HCP basal). */
  radius: number;
  /** a in terms of R, e.g. 'a = 2R'. */
  radiusRelation: string;
  /** R in terms of a, e.g. 'R = a/2'. */
  radiusFromA: string;
  closePackedDirection: string;
  closePackedPlane: string;
  /** Lattice parameters with a = 1. Cubic: [1,1,1]; HCP: [1,1,c/a]. */
  lattice: Vec3;
  /** How the atom count is built, for the guided Calculate step. */
  sharing: SharingRow[];
  /** HCP only: which convention is used and why. */
  conventionNote?: string;
  examples: string[];
}

const SQRT3 = Math.sqrt(3);
const SQRT2 = Math.sqrt(2);

/** Ideal HCP c/a for touching spheres. */
export const HCP_IDEAL_C_OVER_A = Math.sqrt(8 / 3); // ≈ 1.633

const corner = (id: string, frac: Vec3, share: number): AtomSite => ({
  id,
  role: 'corner',
  frac,
  cart: frac,
  share,
  label: `(${frac[0]}, ${frac[1]}, ${frac[2]})`,
});

const cubicCorners = (share: number): AtomSite[] => {
  const out: AtomSite[] = [];
  for (const x of [0, 1])
    for (const y of [0, 1])
      for (const z of [0, 1]) out.push(corner(`corner-${x}${y}${z}`, [x, y, z], share));
  return out;
};

const faceCentres = (): AtomSite[] => {
  const defs: { id: string; frac: Vec3; label: string }[] = [
    { id: 'face-x0', frac: [0, 0.5, 0.5], label: 'x = 0 face' },
    { id: 'face-x1', frac: [1, 0.5, 0.5], label: 'x = 1 face' },
    { id: 'face-y0', frac: [0.5, 0, 0.5], label: 'y = 0 face' },
    { id: 'face-y1', frac: [0.5, 1, 0.5], label: 'y = 1 face' },
    { id: 'face-z0', frac: [0.5, 0.5, 0], label: 'z = 0 face' },
    { id: 'face-z1', frac: [0.5, 0.5, 1], label: 'z = 1 face' },
  ];
  return defs.map((d) => ({ id: d.id, role: 'face' as const, frac: d.frac, cart: d.frac, share: 1 / 2, label: d.label }));
};

// HCP: axial basis a1 = (1, 0, 0), a2 = (-1/2, √3/2, 0), a3 = (0, 0, c/a).
const hcpToCart = (u: number, v: number, w: number): Vec3 => [
  u - v / 2,
  (v * SQRT3) / 2,
  w * HCP_IDEAL_C_OVER_A,
];

const hcpAtoms = (): AtomSite[] => {
  const atoms: AtomSite[] = [];
  // 12 prism corners: 6 basal vertices × 2 heights. Share 1/6 each.
  const verts: [number, number][] = [
    [1, 0],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [0, -1],
    [1, -1],
  ];
  verts.forEach(([u, v], i) => {
    for (const w of [0, 1]) {
      atoms.push({
        id: `corner-${i}-${w}`,
        role: 'corner',
        frac: [u, v, w],
        cart: hcpToCart(u, v, w),
        share: 1 / 6,
        label: `vertex ${i + 1}, ${w === 0 ? 'bottom' : 'top'}`,
      });
    }
  });
  // 2 hexagonal-face centres, on the prism axis. Share 1/2 each.
  for (const w of [0, 1]) {
    atoms.push({
      id: `hexface-${w}`,
      role: 'face',
      frac: [0, 0, w],
      cart: hcpToCart(0, 0, w),
      share: 1 / 2,
      label: `hexagonal face centre, ${w === 0 ? 'bottom' : 'top'}`,
    });
  }
  // 3 interior atoms at mid-height, radius a/√3, angles 30°/150°/270°.
  // Each touches its neighbours at distance a (verified in the tests).
  const mid: Vec3[] = [
    [2 / 3, 1 / 3, 1 / 2],
    [-1 / 3, 1 / 3, 1 / 2],
    [-1 / 3, -2 / 3, 1 / 2],
  ];
  mid.forEach((frac, i) => {
    atoms.push({
      id: `mid-${i}`,
      role: 'interior',
      frac,
      cart: hcpToCart(frac[0], frac[1], frac[2]),
      share: 1,
      label: `interior atom ${i + 1}, mid-height`,
    });
  });
  return atoms;
};

const sharingRows = (rows: Omit<SharingRow, 'line'>[]): SharingRow[] =>
  rows.map((r) => ({
    ...r,
    line: `${r.count} × ${r.shareEach} = ${fmtNum(r.contributes)}`,
  }));

const fmtNum = (n: number): string => {
  if (Number.isInteger(n)) return String(n);
  const f = fracString(n);
  return f ?? n.toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
};

/** Exact fraction string for the sharing values we use (1/8, 1/6, 1/2, 1). */
const fracString = (n: number): string | null => {
  if (Math.abs(n - 1 / 8) < 1e-12) return '1/8';
  if (Math.abs(n - 1 / 6) < 1e-12) return '1/6';
  if (Math.abs(n - 1 / 2) < 1e-12) return '1/2';
  if (Math.abs(n - 1) < 1e-12) return '1';
  return null;
};

export const unitCell = (kind: CellKind): UnitCellModel => {
  switch (kind) {
    case 'sc':
      return {
        kind,
        name: 'Simple cubic (SC)',
        short: 'SC',
        atoms: cubicCorners(1 / 8),
        atomsPerCell: 1,
        coordination: 6,
        apf: Math.PI / 6,
        radius: 1 / 2,
        radiusRelation: 'a = 2R',
        radiusFromA: 'R = a/2',
        closePackedDirection: '⟨100⟩',
        closePackedPlane: '— (no close-packed plane)',
        lattice: [1, 1, 1],
        sharing: sharingRows([{ role: 'corner', count: 8, shareEach: '1/8', shareEachValue: 1 / 8, contributes: 1 }]),
        examples: ['Polonium (α-Po)'],
      };
    case 'bcc': {
      const atoms = [...cubicCorners(1 / 8), { id: 'body', role: 'body' as const, frac: [0.5, 0.5, 0.5] as Vec3, cart: [0.5, 0.5, 0.5] as Vec3, share: 1, label: 'body centre (1/2, 1/2, 1/2)' }];
      return {
        kind,
        name: 'Body-centred cubic (BCC)',
        short: 'BCC',
        atoms,
        atomsPerCell: 2,
        coordination: 8,
        apf: (SQRT3 * Math.PI) / 8,
        radius: SQRT3 / 4,
        radiusRelation: 'a = 4R/√3',
        radiusFromA: 'R = a√3/4',
        closePackedDirection: '⟨111⟩',
        closePackedPlane: '{110}',
        lattice: [1, 1, 1],
        sharing: sharingRows([
          { role: 'corner', count: 8, shareEach: '1/8', shareEachValue: 1 / 8, contributes: 1 },
          { role: 'body', count: 1, shareEach: '1', shareEachValue: 1, contributes: 1 },
        ]),
        examples: ['Iron (α-Fe)', 'Chromium', 'Tungsten'],
      };
    }
    case 'fcc': {
      const atoms = [...cubicCorners(1 / 8), ...faceCentres()];
      return {
        kind,
        name: 'Face-centred cubic (FCC)',
        short: 'FCC',
        atoms,
        atomsPerCell: 4,
        coordination: 12,
        apf: (SQRT2 * Math.PI) / 6,
        radius: SQRT2 / 4,
        radiusRelation: 'a = 2√2 R',
        radiusFromA: 'R = a√2/4',
        closePackedDirection: '⟨110⟩',
        closePackedPlane: '{111}',
        lattice: [1, 1, 1],
        sharing: sharingRows([
          { role: 'corner', count: 8, shareEach: '1/8', shareEachValue: 1 / 8, contributes: 1 },
          { role: 'face', count: 6, shareEach: '1/2', shareEachValue: 1 / 2, contributes: 3 },
        ]),
        examples: ['Aluminium', 'Copper', 'Gold', 'Nickel'],
      };
    }
    case 'hcp':
      return {
        kind,
        name: 'Hexagonal close-packed (HCP)',
        short: 'HCP',
        atoms: hcpAtoms(),
        atomsPerCell: 6,
        coordination: 12,
        apf: (SQRT2 * Math.PI) / 6,
        radius: 1 / 2,
        radiusRelation: 'a = 2R, c/a = √(8/3) ≈ 1.633 (ideal)',
        radiusFromA: 'R = a/2',
        closePackedDirection: '⟨112̄0⟩',
        closePackedPlane: '{0001} (basal)',
        lattice: [1, 1, HCP_IDEAL_C_OVER_A],
        sharing: sharingRows([
          { role: 'corner', count: 12, shareEach: '1/6', shareEachValue: 1 / 6, contributes: 2 },
          { role: 'face', count: 2, shareEach: '1/2', shareEachValue: 1 / 2, contributes: 1 },
          { role: 'interior', count: 3, shareEach: '1', shareEachValue: 1, contributes: 3 },
        ]),
        conventionNote:
          'Conventional hexagonal-prism cell (6 atoms). The primitive cell — the smallest repeating unit — holds 2 atoms. ' +
          'Textbooks draw the prism because it shows the hexagonal symmetry; always say which cell you are counting.',
        examples: ['Magnesium', 'Titanium (α-Ti)', 'Zinc', 'Cobalt'],
      };
  }
};

export const CELL_KINDS: CellKind[] = ['sc', 'bcc', 'fcc', 'hcp'];

/** The 12 edges of the unit cube, as corner indices into cubicCorners order. */
export const CUBE_EDGES: [Vec3, Vec3][] = [
  [[0, 0, 0], [1, 0, 0]],
  [[1, 0, 0], [1, 1, 0]],
  [[1, 1, 0], [0, 1, 0]],
  [[0, 1, 0], [0, 0, 0]],
  [[0, 0, 1], [1, 0, 1]],
  [[1, 0, 1], [1, 1, 1]],
  [[1, 1, 1], [0, 1, 1]],
  [[0, 1, 1], [0, 0, 1]],
  [[0, 0, 0], [0, 0, 1]],
  [[1, 0, 0], [1, 0, 1]],
  [[1, 1, 0], [1, 1, 1]],
  [[0, 1, 0], [0, 1, 1]],
];

export const dist = (a: Vec3, b: Vec3): number =>
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);

/** Replicate one cell nx × ny × nz times (cubic cells translate by whole a; HCP by a1/a2/a3).
    Atoms shared between neighbouring cells coincide, so the result is
    de-duplicated by position: a 2×2×2 BCC block holds 27 corner positions +
    8 body centres = 35 distinct atoms, not 8 × 9 site copies. */
export const replicate = (kind: CellKind, nx: number, ny: number, nz: number): { atoms: AtomSite[]; cells: number } => {
  const base = unitCell(kind);
  const atoms: AtomSite[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < nx; i++)
    for (let j = 0; j < ny; j++)
      for (let k = 0; k < nz; k++) {
        for (const a of base.atoms) {
          const cart: Vec3 =
            kind === 'hcp'
              ? [
                  a.cart[0] + i - j / 2,
                  a.cart[1] + (j * SQRT3) / 2,
                  a.cart[2] + k * HCP_IDEAL_C_OVER_A,
                ]
              : [a.cart[0] + i, a.cart[1] + j, a.cart[2] + k];
          const key = cart.map((x) => x.toFixed(9)).join(',');
          if (seen.has(key)) continue;
          seen.add(key);
          atoms.push({ ...a, id: `${a.id}@${i}${j}${k}`, cart });
        }
      }
  return { atoms, cells: nx * ny * nz };
};

// ── Miller planes (Milestone 2 hook — pure geometry, used now by the BCC (110) audit) ──
export interface MillerPlane {
  h: number;
  k: number;
  l: number;
  /** Plane equation hx + ky + lz = d in fractional cubic coordinates. */
  d: number;
  equation: string;
  /** Vertices of the plane's intersection polygon with the unit cube, in order. */
  polygon: Vec3[];
  intercepts: { x: number | null; y: number | null; z: number | null };
}

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

/** A plane (hkl) through a cubic cell. d is chosen so the plane cuts the cell (d = 1 for (110)). */
export const millerPlane = (h: number, k: number, l: number, d = 1): MillerPlane => {
  const intercepts = {
    x: h !== 0 ? d / h : null,
    y: k !== 0 ? d / k : null,
    z: l !== 0 ? d / l : null,
  };
  // Intersect the plane with the unit cube: clip the cube's faces (Sutherland–Hodgman in 3D,
  // via the 12 cube edges — every polygon vertex lies on a cube edge).
  const pts: Vec3[] = [];
  for (const [a, b] of CUBE_EDGES) {
    const fa = h * a[0] + k * a[1] + l * a[2] - d;
    const fb = h * b[0] + k * b[1] + l * b[2] - d;
    if (Math.abs(fa) < 1e-9) pts.push(a);
    if (fa * fb < 0) {
      const t = fa / (fa - fb);
      pts.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1]), a[2] + t * (b[2] - a[2])]);
    }
  }
  // De-duplicate and order around the polygon centroid.
  const uniq: Vec3[] = [];
  for (const p of pts) if (!uniq.some((q) => dist(p, q) < 1e-9)) uniq.push(p);
  const c: Vec3 = [
    uniq.reduce((s, p) => s + p[0], 0) / Math.max(1, uniq.length),
    uniq.reduce((s, p) => s + p[1], 0) / Math.max(1, uniq.length),
    uniq.reduce((s, p) => s + p[2], 0) / Math.max(1, uniq.length),
  ];
  const n: Vec3 = [h, k, l];
  // Order by angle around the plane normal, using an orthonormal basis in the plane.
  const e1 = norm3(cross3(n, Math.abs(n[2]) < 0.9 ? [0, 0, 1] : [0, 1, 0]));
  const e2 = norm3(cross3(n, e1));
  const polygon = uniq
    .map((p) => ({ p, ang: Math.atan2(dot3([p[0] - c[0], p[1] - c[1], p[2] - c[2]], e2), dot3([p[0] - c[0], p[1] - c[1], p[2] - c[2]], e1)) }))
    .sort((a, b) => a.ang - b.ang)
    .map((x) => x.p);
  // Equation string, e.g. (110) → "x + y = 1".
  const signed = (v: number, s: string): string | null =>
    v === 0 ? null : v === 1 ? s : v === -1 ? `−${s}` : `${v}${s}`;
  const parts = [signed(h, 'x'), signed(k, 'y'), signed(l, 'z')].filter((x): x is string => x !== null);
  const equation = `${parts.join(' + ').replace(/\+ −/g, '− ')} = ${d}`;
  return {
    h,
    k,
    l,
    d,
    equation,
    polygon,
    intercepts,
  };
};

const dot3 = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross3 = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm3 = (a: Vec3): Vec3 => {
  const m = Math.sqrt(dot3(a, a)) || 1;
  return [a[0] / m, a[1] / m, a[2] / m];
};

/** True when fractional point p lies on plane hx + ky + lz = d. */
export const pointOnPlane = (p: Vec3, plane: MillerPlane, tol = 1e-9): boolean =>
  Math.abs(plane.h * p[0] + plane.k * p[1] + plane.l * p[2] - plane.d) <= tol;

// ── Crystallographic directions (Milestone 2 hook) ──
/** Head − tail, cleared of fractions, reduced to smallest integers: [uvw]. */
export const directionFromPoints = (start: Vec3, end: Vec3): [number, number, number] => {
  const diff: number[] = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
  // Clear fractions: multiply by the LCM of the denominators (denominators ≤ 12 here).
  const den = (x: number): number => {
    for (let d = 1; d <= 12; d++) if (Math.abs(x * d - Math.round(x * d)) < 1e-9) return d;
    return 1;
  };
  const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
  const m = diff.reduce((acc, x) => lcm(acc, den(x)), 1);
  const ints = diff.map((x) => Math.round(x * m));
  const g = ints.reduce((acc, x) => gcd(acc, x), 0) || 1;
  const reduced = ints.map((x) => x / g);
  // If all components are negative, flip the sign (convention: [uvw] and [ūv̄w̄] are opposite directions;
  // keep the computed sign — do NOT silently flip here; the caller shows the bar notation).
  return [reduced[0], reduced[1], reduced[2]];
};

export const formatDirection = (uvw: [number, number, number]): string => {
  const bar = (n: number): string => (n < 0 ? `${Math.abs(n)}̄` : String(n));
  return `[${uvw.map(bar).join(' ')}]`;
};

// ── Milestone 2: directions & planes — step-by-step, not just the answer ──

/** Parse "1/2", "-1/3", "0.5", "1", "-2" → a number, or null if not a valid coordinate. */
export const parseFraction = (s: string): number | null => {
  const t = s.trim();
  if (t === '') return null;
  const m = /^([+-]?\d+)\s*\/\s*([1-9]\d*)$/.exec(t);
  if (m) return Number(m[1]) / Number(m[2]);
  if (/^[+-]?(\d+\.?\d*|\.\d+)$/.test(t)) return Number(t);
  return null;
};

/** Smallest denominator (≤ 12) that makes x an integer, else 1. */
const denominatorOf = (x: number): number => {
  for (let d = 1; d <= 12; d++) if (Math.abs(x * d - Math.round(x * d)) < 1e-9) return d;
  return 1;
};

/** Multiply fractional values by the LCM of their denominators → smallest integers. */
export const clearFractions = (values: number[]): { multiplier: number; ints: number[] } => {
  const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
  const multiplier = values.reduce((acc, x) => lcm(acc, denominatorOf(x)), 1);
  return { multiplier, ints: values.map((x) => Math.round(x * multiplier)) };
};

/** Exact fraction string ("1/2", "−1/3", "2") for display; decimals otherwise. */
export const fracToString = (x: number): string => {
  if (Math.abs(x - Math.round(x)) < 1e-9) return String(Math.round(x));
  const d = denominatorOf(x);
  const n = Math.round(x * d);
  const sign = n < 0 ? '−' : '';
  return `${sign}${Math.abs(n)}/${d}`;
};

const vecToString = (v: Vec3): string => `(${v.map(fracToString).join(', ')})`;

export interface DirectionSteps {
  start: Vec3;
  end: Vec3;
  /** End − Start, as fractions. */
  diff: Vec3;
  /** Multiplier that clears the fractions. */
  multiplier: number;
  /** Diff × multiplier, before reduction. */
  scaled: [number, number, number];
  /** GCD of the scaled components. */
  gcdValue: number;
  final: [number, number, number];
  /** Human-readable lines for the guided Calculate step. */
  lines: string[];
}

/** The full worked calculation for a direction, step by step. */
export const directionSteps = (start: Vec3, end: Vec3): DirectionSteps => {
  const diff: Vec3 = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
  const { multiplier, ints } = clearFractions(diff);
  const scaled: [number, number, number] = [ints[0], ints[1], ints[2]];
  const gcdValue = scaled.reduce((acc, x) => gcd(acc, x), 0) || 1;
  const final: [number, number, number] = [scaled[0] / gcdValue, scaled[1] / gcdValue, scaled[2] / gcdValue];
  const lines = [
    `Start = ${vecToString(start)}`,
    `End = ${vecToString(end)}`,
    `End − Start = ${vecToString(diff)}`,
    multiplier === 1
      ? 'No fractions to clear — multiply by 1.'
      : `Multiply every component by ${multiplier}: (${scaled.join(', ')})`,
    gcdValue === 1 ? 'Already in smallest integers.' : `Divide by the GCD ${gcdValue}.`,
    `Final direction: ${formatDirection(final)}`,
  ];
  return { start, end, diff, multiplier, scaled, gcdValue, final, lines };
};

/** Miller indices (hkl) with bar notation, e.g. (1 1̄ 0). */
export const formatMiller = (hkl: [number, number, number]): string => {
  const bar = (n: number): string => (n < 0 ? `${Math.abs(n)}̄` : String(n));
  return `(${hkl.map(bar).join(' ')})`;
};

/** Direction family ⟨uvw⟩, e.g. ⟨110⟩. */
export const formatFamily = (uvw: [number, number, number]): string => {
  const bar = (n: number): string => (n < 0 ? `${Math.abs(n)}̄` : String(n));
  return `⟨${uvw.map(bar).join(' ')}⟩`;
};

/** Plane family {hkl}, e.g. {110}. */
export const formatPlaneFamily = (hkl: [number, number, number]): string => {
  const bar = (n: number): string => (n < 0 ? `${Math.abs(n)}̄` : String(n));
  return `{${hkl.map(bar).join(' ')}}`;
};

const permute3 = (v: [number, number, number]): [number, number, number][] => {
  const [a, b, c] = v;
  return [
    [a, b, c],
    [a, c, b],
    [b, a, c],
    [b, c, a],
    [c, a, b],
    [c, b, a],
  ];
};

/** All crystallographically equivalent directions in a cubic crystal (permutations + sign flips). */
export const directionFamily = (uvw: [number, number, number]): [number, number, number][] => {
  const seen = new Set<string>();
  const out: [number, number, number][] = [];
  for (const p of permute3(uvw))
    for (const sx of [1, -1])
      for (const sy of [1, -1])
        for (const sz of [1, -1]) {
          const d: [number, number, number] = [p[0] * sx, p[1] * sy, p[2] * sz];
          const key = d.join(',');
          if (!seen.has(key)) {
            seen.add(key);
            out.push(d);
          }
        }
  return out;
};

/** All equivalent planes in a cubic crystal. (hkl) and (−h−k−l) are the same
    family (parallel planes), so the sign is canonicalised: first non-zero index positive. */
export const planeFamily = (hkl: [number, number, number]): [number, number, number][] => {
  const seen = new Set<string>();
  const out: [number, number, number][] = [];
  for (const p of permute3(hkl))
    for (const sx of [1, -1])
      for (const sy of [1, -1])
        for (const sz of [1, -1]) {
          let d: [number, number, number] = [p[0] * sx, p[1] * sy, p[2] * sz];
          const first = d.find((x) => x !== 0);
          if (first !== undefined && first < 0) d = [-d[0], -d[1], -d[2]];
          const key = d.join(',');
          if (!seen.has(key)) {
            seen.add(key);
            out.push(d);
          }
        }
  return out;
};

/** Default offset d for hx + ky + lz = d so the plane cuts the unit cube in its
    standard textbook position: d = 1 when all indices are ≥ 0 (so (100) is the
    x = 1 face, (110) is x + y = 1, (111) is the corner triangle); the midpoint
    of the attainable range when signs are mixed (so (1−10) is the diagonal). */
export const defaultPlaneOffset = (h: number, k: number, l: number): number => {
  if (h >= 0 && k >= 0 && l >= 0) return 1;
  const vals = [h, k, l];
  const min = vals.reduce((s, v) => s + (v < 0 ? v : 0), 0);
  const max = vals.reduce((s, v) => s + (v > 0 ? v : 0), 0);
  return (min + max) / 2;
};

/** Orthonormal basis (e1, e2) in the plane hx + ky + lz = d — for rendering the polygon. */
export const planeBasis = (h: number, k: number, l: number): { e1: Vec3; e2: Vec3 } => {
  const n: Vec3 = [h, k, l];
  const e1 = norm3(cross3(n, Math.abs(n[2]) < 0.9 ? [0, 0, 1] : [0, 1, 0]));
  const e2 = norm3(cross3(n, e1));
  return { e1, e2 };
};

/** Area of a polygon (fan triangulation from its centroid). */
export const polygonArea = (polygon: Vec3[]): number => {
  if (polygon.length < 3) return 0;
  const c: Vec3 = [
    polygon.reduce((s, p) => s + p[0], 0) / polygon.length,
    polygon.reduce((s, p) => s + p[1], 0) / polygon.length,
    polygon.reduce((s, p) => s + p[2], 0) / polygon.length,
  ];
  let area = 0;
  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];
    const u: Vec3 = [a[0] - c[0], a[1] - c[1], a[2] - c[2]];
    const v: Vec3 = [b[0] - c[0], b[1] - c[1], b[2] - c[2]];
    const cr = cross3(u, v);
    area += Math.sqrt(dot3(cr, cr)) / 2;
  }
  return area;
};

export interface PlaneFromIntercepts {
  /** True when any intercept is 0: the plane passes through the origin, so it
      must be translated parallel to itself before indexing. */
  throughOrigin: boolean;
  /** Reciprocals 1/intercept (null = intercept ∞, axis parallel). */
  reciprocals: (number | null)[];
  /** Miller indices after clearing fractions, or null when through the origin. */
  hkl: [number, number, number] | null;
  multiplier: number;
  lines: string[];
}

/** Index a plane from its intercepts: reciprocals, then clear fractions.
    Pass null for an intercept at infinity (plane parallel to that axis). */
export const planeFromIntercepts = (x: number | null, y: number | null, z: number | null): PlaneFromIntercepts => {
  const intercepts = [x, y, z];
  const throughOrigin = intercepts.some((v) => v === 0);
  const reciprocals = intercepts.map((v) => (v === null ? null : v === 0 ? null : 1 / v));
  const lines: string[] = [
    `Intercepts: x = ${x === null ? '∞' : x}, y = ${y === null ? '∞' : y}, z = ${z === null ? '∞' : z}`,
  ];
  if (throughOrigin) {
    lines.push('An intercept is 0 — the plane passes through the origin. Translate it parallel to itself (move it one cell over) and index the translated plane; the indices are the same.');
    return { throughOrigin, reciprocals, hkl: null, multiplier: 1, lines };
  }
  const vals = reciprocals.map((v) => v ?? 0);
  lines.push(`Reciprocals: ${vals.map((v) => fracToString(v)).join(', ')} (∞ → 0)`);
  const { multiplier, ints } = clearFractions(vals);
  const g = ints.reduce((acc, v) => gcd(acc, v), 0) || 1;
  const hkl: [number, number, number] = [ints[0] / g, ints[1] / g, ints[2] / g];
  lines.push(
    multiplier === 1 ? 'No fractions to clear.' : `Clear fractions — multiply by ${multiplier}: (${ints.join(', ')})`,
    g === 1 ? 'Already in smallest integers.' : `Divide by the GCD ${g}.`,
    `Final plane: ${formatMiller(hkl)}`,
  );
  return { throughOrigin, reciprocals, hkl, multiplier, lines };
};

export interface AtomsOnPlane {
  /** Atoms whose centres lie on the plane, with their share inside the plane. */
  atoms: { atom: AtomSite; inPlaneShare: number; position: 'vertex' | 'edge' | 'interior' }[];
  /** Atoms per plane cell (shares summed). */
  count: number;
  /** Area of the plane's intersection with the unit cell, in units of a². */
  area: number;
  /** Planar atomic density, atoms per a². */
  density: number;
}

/** Which atoms of one cell are centred on a Miller plane, and the planar density.
    In-plane sharing mirrors the 3D rule one dimension down: a polygon vertex is
    shared by 4 plane cells (1/4), a point on a polygon edge by 2 (1/2), an
    interior point belongs to the plane cell alone (1). */
export const atomsOnPlane = (cell: CellKind, plane: MillerPlane): AtomsOnPlane => {
  const model = unitCell(cell);
  const poly = plane.polygon;
  const onPlane = model.atoms.filter((a) => pointOnPlane(a.frac, plane));
  const atoms = onPlane.map((atom) => {
    const p = atom.frac;
    let position: 'vertex' | 'edge' | 'interior' = 'interior';
    if (poly.some((v) => dist(p, v) < 1e-9)) position = 'vertex';
    else {
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i];
        const b = poly[(i + 1) % poly.length];
        const ab: Vec3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
        const ap: Vec3 = [p[0] - a[0], p[1] - a[1], p[2] - a[2]];
        const t = Math.max(0, Math.min(1, dot3(ap, ab) / (dot3(ab, ab) || 1)));
        const closest: Vec3 = [a[0] + t * ab[0], a[1] + t * ab[1], a[2] + t * ab[2]];
        if (dist(p, closest) < 1e-9) {
          position = 'edge';
          break;
        }
      }
    }
    return { atom, inPlaneShare: position === 'vertex' ? 1 / 4 : position === 'edge' ? 1 / 2 : 1, position };
  });
  const count = atoms.reduce((s, a) => s + a.inPlaneShare, 0);
  const area = polygonArea(poly);
  return { atoms, count, area, density: area > 0 ? count / area : 0 };
};
