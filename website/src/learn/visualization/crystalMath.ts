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
