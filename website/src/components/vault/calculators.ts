// Interactive calculators for the Formula Lab. Plain physics, so they live in the public bundle;
// the exam-specific presets that drive them are in the encrypted content.

export type CalcValues = Record<string, string>;

interface BaseInput {
  key: string;
  label: string;
  unit?: string;
  modes?: string[]; // only shown in these modes
}
export type CalcInput =
  | (BaseInput & { type: 'number'; def: string })
  | (BaseInput & { type: 'text'; def: string; hint?: string })
  | (BaseInput & { type: 'area'; def: string; hint?: string; rows?: number })
  | (BaseInput & { type: 'select'; def: string; options: { value: string; label: string }[] });

export interface CalcRow {
  label: string;
  tex: string; // KaTeX; ignored when plain is set
  plain?: string; // wrapping text for verdict-style rows
  main?: boolean;
}
export interface CalcResult {
  rows: CalcRow[];
  steps: string[];
  error?: string;
}
export interface Calculator {
  id: string;
  modes?: { value: string; label: string }[];
  inputs: CalcInput[];
  compute: (v: CalcValues) => CalcResult;
}

// ── helpers ──────────────────────────────────────────────────────────────────────
const NA = 6.022e23;
const K_EV = 8.62e-5;
const R_GAS = 8.314;
const E_CHARGE = 1.602e-19;
const EPS0 = 8.85e-12;

export const num = (s: string | undefined): number => {
  if (s === undefined) return NaN;
  const cleaned = String(s)
    .trim()
    .replace(/\s*[x×]\s*10\s*\^?\s*/i, 'e')
    .replace(/[−–]/g, '-')
    .replace(/,/g, '');
  return cleaned === '' ? NaN : Number(cleaned);
};

// Number → TeX, scientific notation outside [1e-3, 1e5)
export const fmt = (x: number, sig = 4): string => {
  if (!Number.isFinite(x)) return '\\text{—}';
  if (x === 0) return '0';
  const ax = Math.abs(x);
  if (ax < 1e-3 || ax >= 1e5) {
    const e = Math.floor(Math.log10(ax));
    let m = x / 10 ** e;
    let exp = e;
    if (Math.abs(Number(m.toPrecision(sig))) >= 10) {
      m /= 10;
      exp += 1;
    }
    return `${Number(m.toPrecision(sig))}\\times10^{${exp}}`;
  }
  return String(Number(x.toPrecision(sig)));
};

export const fail = (error: string): CalcResult => ({ rows: [], steps: [], error });
export const need = (...xs: number[]) => xs.every((x) => Number.isFinite(x));
const deg = (r: number) => (r * 180) / Math.PI;
const rad = (d: number) => (d * Math.PI) / 180;

type Struct = 'SC' | 'BCC' | 'FCC';
const STRUCT_OPTIONS = [
  { value: 'SC', label: 'Simple cubic' },
  { value: 'BCC', label: 'BCC' },
  { value: 'FCC', label: 'FCC' }
];
const STRUCT: Record<Struct, { n: number; cn: number; aOfR: (R: number) => number; rOfA: (a: number) => number; aTex: string }> = {
  SC: { n: 1, cn: 6, aOfR: (R) => 2 * R, rOfA: (a) => a / 2, aTex: 'a = 2R' },
  BCC: { n: 2, cn: 8, aOfR: (R) => (4 * R) / Math.sqrt(3), rOfA: (a) => (a * Math.sqrt(3)) / 4, aTex: 'a = 4R/\\sqrt3' },
  FCC: { n: 4, cn: 12, aOfR: (R) => 2 * R * Math.SQRT2, rOfA: (a) => a / (2 * Math.SQRT2), aTex: 'a = 2R\\sqrt2' }
};
const structOf = (s: string): Struct => (s === 'SC' || s === 'BCC' ? s : 'FCC');

// erf (Abramowitz & Stegun 7.1.26, |error| < 1.5e-7) and its inverse by bisection
export const erf = (x: number): number => {
  const sgn = Math.sign(x);
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-ax * ax);
  return sgn * y;
};
const erfInv = (y: number): number => {
  let lo = 0;
  let hi = 6;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (erf(mid) < y) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
};

// Rationals for Miller indices
interface Frac {
  n: number;
  d: number;
}
const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
const lcm = (a: number, b: number) => Math.abs(a * b) / gcd(a, b);
const toFrac = (x: number): Frac => {
  for (let d = 1; d <= 48; d++) {
    const n = Math.round(x * d);
    if (Math.abs(n / d - x) < 1e-9) return { n, d };
  }
  return { n: Math.round(x * 48), d: 48 };
};
const parseFrac = (raw: string): Frac | 'inf' | null => {
  const s = raw.trim().toLowerCase().replace(/[−–]/g, '-');
  if (/^[+-]?(inf|infinity|∞)$/.test(s)) return 'inf';
  const m = s.match(/^([+-]?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);
  if (m) {
    const v = Number(m[1]) / Number(m[2]);
    return Number.isFinite(v) ? toFrac(v) : null;
  }
  const v = Number(s);
  return s !== '' && Number.isFinite(v) ? toFrac(v) : null;
};
const fracTex = (f: Frac) => (f.d === 1 ? String(f.n) : `${f.n < 0 ? '-' : ''}\\tfrac{${Math.abs(f.n)}}{${f.d}}`);
const sub = (a: Frac, b: Frac): Frac => {
  const d = lcm(a.d, b.d);
  return toFrac((a.n * (d / a.d) - b.n * (d / b.d)) / d);
};
const clearToIntegers = (fs: Frac[]): number[] | null => {
  const L = fs.reduce((acc, f) => lcm(acc, f.d), 1);
  const ints = fs.map((f) => (f.n * L) / f.d);
  const g = ints.reduce((acc, x) => gcd(acc, Math.abs(x)), 0);
  return g === 0 ? null : ints.map((x) => x / g);
};
const millerTex = (ints: number[], open: string, close: string) =>
  `${open}${ints.map((x) => (x < 0 ? `\\bar{${-x}}` : String(x))).join('\\,')}${close}`;

// Planar / linear density in a cubic cell: atoms centred, geometric factor (area/a² or length/a)
const PLANE_TABLE: Record<Struct, Record<string, { n: number; g: number; exact: string }>> = {
  SC: {
    '100': { n: 1, g: 1, exact: '\\dfrac{1}{4R^2}' },
    '110': { n: 1, g: Math.SQRT2, exact: '\\dfrac{1}{4\\sqrt2\\,R^2}' },
    '111': { n: 0.5, g: Math.sqrt(3) / 2, exact: '\\dfrac{1}{4\\sqrt3\\,R^2}' }
  },
  BCC: {
    '100': { n: 1, g: 1, exact: '\\dfrac{3}{16R^2}' },
    '110': { n: 2, g: Math.SQRT2, exact: '\\dfrac{3}{8\\sqrt2\\,R^2}' },
    '111': { n: 0.5, g: Math.sqrt(3) / 2, exact: '\\dfrac{\\sqrt3}{16R^2}' }
  },
  FCC: {
    '100': { n: 2, g: 1, exact: '\\dfrac{1}{4R^2}' },
    '110': { n: 2, g: Math.SQRT2, exact: '\\dfrac{1}{4\\sqrt2\\,R^2}' },
    '111': { n: 2, g: Math.sqrt(3) / 2, exact: '\\dfrac{1}{2\\sqrt3\\,R^2}' }
  }
};
const LINE_TABLE: Record<Struct, Record<string, { n: number; g: number; exact: string }>> = {
  SC: {
    '100': { n: 1, g: 1, exact: '\\dfrac{1}{2R}' },
    '110': { n: 1, g: Math.SQRT2, exact: '\\dfrac{1}{2\\sqrt2\\,R}' },
    '111': { n: 1, g: Math.sqrt(3), exact: '\\dfrac{1}{2\\sqrt3\\,R}' }
  },
  BCC: {
    '100': { n: 1, g: 1, exact: '\\dfrac{\\sqrt3}{4R}' },
    '110': { n: 1, g: Math.SQRT2, exact: '\\dfrac{\\sqrt3}{4\\sqrt2\\,R}' },
    '111': { n: 2, g: Math.sqrt(3), exact: '\\dfrac{1}{2R}' }
  },
  FCC: {
    '100': { n: 1, g: 1, exact: '\\dfrac{1}{2\\sqrt2\\,R}' },
    '110': { n: 2, g: Math.SQRT2, exact: '\\dfrac{1}{2R}' },
    '111': { n: 1, g: Math.sqrt(3), exact: '\\dfrac{1}{2\\sqrt6\\,R}' }
  }
};

const reflectionAllowed = (s: Struct, h: number, k: number, l: number) => {
  if (s === 'BCC') return (h + k + l) % 2 === 0;
  if (s === 'FCC') {
    const odd = [h, k, l].map((x) => Math.abs(x) % 2);
    return odd.every((x) => x === odd[0]);
  }
  return true;
};

const nIn = (key: string, label: string, def: string, unit?: string, modes?: string[]): CalcInput => ({
  key,
  label,
  def,
  unit,
  modes,
  type: 'number'
});
const structIn = (modes?: string[]): CalcInput => ({ key: 'struct', label: 'Structure', type: 'select', def: 'FCC', options: STRUCT_OPTIONS, modes });

// ── calculators ─────────────────────────────────────────────────────────────────
export const CALCULATORS: Record<string, Calculator> = {
  ionic: {
    id: 'ionic',
    inputs: [nIn('XA', 'X_A (more electronegative)', '2.9'), nIn('XB', 'X_B', '1.0')],
    compute: (v) => {
      const a = num(v.XA);
      const b = num(v.XB);
      if (!need(a, b)) return fail('Enter both electronegativities.');
      const d = a - b;
      const ic = (1 - Math.exp(-0.25 * d * d)) * 100;
      return {
        rows: [
          { label: 'ΔX', tex: fmt(Math.abs(d), 3) },
          { label: '% ionic character', tex: `${fmt(ic, 3)}\\,\\%`, main: true },
          { label: 'Verdict', tex: '', plain: ic >= 50 ? 'Predominantly ionic' : ic >= 10 ? 'Mixed (polar covalent)' : 'Predominantly covalent' }
        ],
        steps: [`$\\%IC = \\{1 - e^{-0.25(${fmt(a, 3)} - ${fmt(b, 3)})^2}\\}\\times100 = \\{1 - e^{${fmt(-0.25 * d * d, 4)}}\\}\\times100 = ${fmt(ic, 3)}\\%$`]
      };
    }
  },

  bondwell: {
    id: 'bondwell',
    inputs: [nIn('A', 'A', '1.436', 'eV·nm'), nIn('B', 'B', '5.8e-6', 'eV·nmⁿ'), nIn('n', 'n', '9')],
    compute: (v) => {
      const A = num(v.A);
      const B = num(v.B);
      const n = num(v.n);
      if (!need(A, B, n) || A <= 0 || B <= 0 || n <= 1) return fail('Need A > 0, B > 0 and n > 1.');
      const r0 = Math.pow((n * B) / A, 1 / (n - 1));
      const E0 = -A / r0 + B / Math.pow(r0, n);
      return {
        rows: [
          { label: 'r₀', tex: `${fmt(r0)}\\ \\text{nm}`, main: true },
          { label: 'E₀', tex: `${fmt(E0)}\\ \\text{eV}`, main: true }
        ],
        steps: [
          `$\\frac{dE_N}{dr} = \\frac{A}{r^2} - \\frac{nB}{r^{n+1}} = 0 \\Rightarrow r_0 = \\left(\\frac{${fmt(n)}\\cdot${fmt(B)}}{${fmt(A)}}\\right)^{1/${fmt(n - 1)}} = ${fmt(r0)}$ nm`,
          `$E_0 = -\\frac{${fmt(A)}}{${fmt(r0)}} + \\frac{${fmt(B)}}{${fmt(r0)}^{${fmt(n)}}} = ${fmt(-A / r0)} + ${fmt(B / Math.pow(r0, n))} = ${fmt(E0)}$ eV`
        ]
      };
    }
  },

  ionforce: {
    id: 'ionforce',
    inputs: [nIn('z1', '|Z₁|', '1'), nIn('z2', '|Z₂|', '2'), nIn('r', 'r', '1.5', 'nm')],
    compute: (v) => {
      const z1 = Math.abs(num(v.z1));
      const z2 = Math.abs(num(v.z2));
      const r = num(v.r);
      if (!need(z1, z2, r) || r <= 0) return fail('Enter charges and a positive distance.');
      const F = (z1 * z2 * E_CHARGE ** 2) / (4 * Math.PI * EPS0 * (r * 1e-9) ** 2);
      return {
        rows: [
          { label: 'F_A (attractive)', tex: `${fmt(F)}\\ \\text{N}`, main: true },
          { label: 'F_R at equilibrium', tex: `${fmt(-F)}\\ \\text{N}` }
        ],
        steps: [`$F_A = \\frac{(${z1})(${z2})(1.602\\times10^{-19})^2}{4\\pi(8.85\\times10^{-12})(${fmt(r)}\\times10^{-9})^2} = ${fmt(F)}$ N`]
      };
    }
  },

  atoms: {
    id: 'atoms',
    modes: [
      { value: 'mass', label: 'From a mass' },
      { value: 'wire', label: 'From a wire (ρ, d, L)' }
    ],
    inputs: [
      nIn('mass', 'Mass', '15', 'g', ['mass']),
      nIn('d', 'Diameter', '0.7', 'mm', ['wire']),
      nIn('L', 'Length', '8', 'cm', ['wire']),
      nIn('rho', 'Density', '19.3', 'g/cm³', ['wire']),
      nIn('A', 'Atomic weight', '63.54', 'g/mol')
    ],
    compute: (v) => {
      const A = num(v.A);
      let m = num(v.mass);
      const steps: string[] = [];
      if (v.mode === 'wire') {
        const d = num(v.d);
        const L = num(v.L);
        const rho = num(v.rho);
        if (!need(d, L, rho)) return fail('Enter diameter, length and density.');
        const V = Math.PI * (d / 20) ** 2 * L;
        m = rho * V;
        steps.push(`$V = \\pi\\left(\\frac{${fmt(d)}\\text{ mm}}{2}\\right)^2 L = \\pi(${fmt(d / 20)}\\text{ cm})^2(${fmt(L)}\\text{ cm}) = ${fmt(V)}$ cm³`);
        steps.push(`$m = \\rho V = ${fmt(rho)}\\times${fmt(V)} = ${fmt(m)}$ g`);
      }
      if (!need(m, A) || A <= 0) return fail('Enter the mass and atomic weight.');
      const N = (m / A) * NA;
      steps.push(`$N = \\frac{m}{A}N_A = \\frac{${fmt(m)}}{${fmt(A)}}(6.022\\times10^{23}) = ${fmt(N)}$ atoms`);
      return { rows: [{ label: 'Atoms', tex: fmt(N), main: true }, { label: 'Moles', tex: fmt(m / A) }], steps };
    }
  },

  cubic: {
    id: 'cubic',
    inputs: [structIn(), nIn('R', 'Atomic radius R', '0.128', 'nm'), nIn('a', 'Lattice parameter a (optional)', '', 'nm')],
    compute: (v) => {
      const s = structOf(v.struct);
      const S = STRUCT[s];
      const aIn = num(v.a);
      const R0 = num(v.R);
      const a = Number.isFinite(aIn) && aIn > 0 ? aIn : S.aOfR(R0);
      if (!need(a) || a <= 0) return fail('Enter R or a.');
      const R = Number.isFinite(aIn) && aIn > 0 ? S.rOfA(a) : R0;
      const apf = (S.n * (4 / 3) * Math.PI * R ** 3) / a ** 3;
      const Vc = a ** 3;
      const perMm3 = 1 / (a * 1e-6) ** 3;
      return {
        rows: [
          { label: 'Atoms per cell n', tex: String(S.n) },
          { label: 'Coordination number', tex: String(S.cn) },
          { label: 'a', tex: `${fmt(a)}\\ \\text{nm}` },
          { label: 'APF', tex: fmt(apf, 3), main: true },
          { label: 'V_C', tex: `${fmt(Vc)}\\ \\text{nm}^3` },
          { label: 'Unit cells per mm³', tex: fmt(perMm3) }
        ],
        steps: [
          `$${S.aTex}$ → $a = ${fmt(a)}$ nm`,
          `$APF = \\frac{${S.n}\\cdot\\frac43\\pi(${fmt(R)})^3}{(${fmt(a)})^3} = ${fmt(apf, 3)}$`,
          `Cells per mm³ $= 1/a^3 = 1/(${fmt(a)}\\times10^{-6}\\text{ mm})^3 = ${fmt(perMm3)}$`
        ]
      };
    }
  },

  density: {
    id: 'density',
    modes: [
      { value: 'rho', label: 'Find ρ' },
      { value: 'a', label: 'Find a (from ρ)' }
    ],
    inputs: [structIn(), nIn('R', 'Atomic radius R', '0.128', 'nm', ['rho']), nIn('rho', 'Density ρ', '11.72', 'g/cm³', ['a']), nIn('A', 'Atomic weight A', '63.5', 'g/mol')],
    compute: (v) => {
      const s = structOf(v.struct);
      const S = STRUCT[s];
      const A = num(v.A);
      if (v.mode === 'a') {
        const rho = num(v.rho);
        if (!need(rho, A) || rho <= 0) return fail('Enter ρ and A.');
        const aCm = Math.cbrt((S.n * A) / (rho * NA));
        return {
          rows: [
            { label: 'a', tex: `${fmt(aCm)}\\ \\text{cm} = ${fmt(aCm * 1e7)}\\ \\text{nm}`, main: true },
            { label: 'R', tex: `${fmt(S.rOfA(aCm * 1e7))}\\ \\text{nm}` }
          ],
          steps: [
            `$a = \\sqrt[3]{\\frac{nA}{\\rho N_A}} = \\sqrt[3]{\\frac{${S.n}\\cdot${fmt(A)}}{${fmt(rho)}\\cdot6.022\\times10^{23}}} = ${fmt(aCm)}$ cm`,
            `$${S.aTex}$ → $R = ${fmt(S.rOfA(aCm * 1e7))}$ nm`
          ]
        };
      }
      const R = num(v.R);
      if (!need(R, A) || R <= 0) return fail('Enter R and A.');
      const aCm = S.aOfR(R) * 1e-7;
      const Vc = aCm ** 3;
      const rho = (S.n * A) / (Vc * NA);
      return {
        rows: [
          { label: 'a', tex: `${fmt(aCm * 1e7)}\\ \\text{nm}` },
          { label: 'V_C', tex: `${fmt(Vc)}\\ \\text{cm}^3` },
          { label: 'ρ', tex: `${fmt(rho)}\\ \\text{g/cm}^3`, main: true }
        ],
        steps: [
          `$${S.aTex} = ${fmt(aCm * 1e7)}$ nm $= ${fmt(aCm)}$ cm, $V_C = a^3 = ${fmt(Vc)}$ cm³`,
          `$\\rho = \\frac{nA}{V_CN_A} = \\frac{${S.n}\\cdot${fmt(A)}}{${fmt(Vc)}\\cdot6.022\\times10^{23}} = ${fmt(rho)}$ g/cm³`
        ]
      };
    }
  },

  direction: {
    id: 'direction',
    inputs: [
      { key: 'tx', label: 'Tail x', type: 'text', def: '1' },
      { key: 'ty', label: 'Tail y', type: 'text', def: '0' },
      { key: 'tz', label: 'Tail z', type: 'text', def: '0' },
      { key: 'hx', label: 'Head x', type: 'text', def: '0' },
      { key: 'hy', label: 'Head y', type: 'text', def: '1' },
      { key: 'hz', label: 'Head z', type: 'text', def: '1/2', hint: 'fractions like 1/3 are fine' }
    ],
    compute: (v) => {
      const tail = [v.tx, v.ty, v.tz].map(parseFrac);
      const head = [v.hx, v.hy, v.hz].map(parseFrac);
      if ([...tail, ...head].some((f) => f === null || f === 'inf')) return fail('Coordinates must be numbers or fractions (e.g. 1/4).');
      const diffs = head.map((h, i) => sub(h as Frac, tail[i] as Frac));
      const ints = clearToIntegers(diffs);
      if (!ints) return fail('Head and tail are the same point.');
      return {
        rows: [{ label: 'Direction', tex: millerTex(ints, '[', ']'), main: true }],
        steps: [
          `Head − tail $= (${diffs.map(fracTex).join(',\\ ')})$`,
          `Clear fractions and common factors → $(${ints.join(',\\ ')})$`,
          `Bar the negatives: $${millerTex(ints, '[', ']')}$`
        ]
      };
    }
  },

  plane: {
    id: 'plane',
    inputs: [
      { key: 'x', label: 'x-intercept', type: 'text', def: '1', hint: 'inf if parallel' },
      { key: 'y', label: 'y-intercept', type: 'text', def: 'inf' },
      { key: 'z', label: 'z-intercept', type: 'text', def: '1/2' }
    ],
    compute: (v) => {
      const ints = [v.x, v.y, v.z].map(parseFrac);
      if (ints.some((f) => f === null)) return fail('Intercepts must be numbers, fractions or inf.');
      if (ints.some((f) => f !== 'inf' && (f as Frac).n === 0)) return fail('An intercept of 0 means the plane passes through the origin. Move the origin to another corner first.');
      if (ints.every((f) => f === 'inf')) return fail('A plane cannot be parallel to all three axes.');
      const recips: Frac[] = ints.map((f) => (f === 'inf' ? { n: 0, d: 1 } : toFrac((f as Frac).d / (f as Frac).n)));
      const hkl = clearToIntegers(recips)!;
      const show = (f: Frac | 'inf') => (f === 'inf' ? '\\infty' : fracTex(f));
      return {
        rows: [{ label: 'Plane', tex: millerTex(hkl, '(', ')'), main: true }],
        steps: [
          `Intercepts $(${ints.map((f) => show(f as Frac | 'inf')).join(',\\ ')})$`,
          `Reciprocals $(${recips.map(fracTex).join(',\\ ')})$`,
          `Clear fractions → $${millerTex(hkl, '(', ')')}$`
        ]
      };
    }
  },

  pd: {
    id: 'pd',
    inputs: [
      structIn(),
      {
        key: 'kind',
        label: 'Type',
        type: 'select',
        def: 'plane',
        options: [
          { value: 'plane', label: 'Plane (planar density)' },
          { value: 'direction', label: 'Direction (linear density)' }
        ]
      },
      {
        key: 'hkl',
        label: 'Indices',
        type: 'select',
        def: '100',
        options: [
          { value: '100', label: '100' },
          { value: '110', label: '110' },
          { value: '111', label: '111' }
        ]
      },
      nIn('R', 'Atomic radius R', '0.128', 'nm'),
      nIn('a', 'Lattice parameter a (optional)', '', 'nm')
    ],
    compute: (v) => {
      const s = structOf(v.struct);
      const hkl = ['100', '110', '111'].includes(v.hkl) ? v.hkl : '100';
      const isPlane = v.kind !== 'direction';
      const row = (isPlane ? PLANE_TABLE : LINE_TABLE)[s][hkl];
      const aIn = num(v.a);
      const a = Number.isFinite(aIn) && aIn > 0 ? aIn : STRUCT[s].aOfR(num(v.R));
      if (!need(a) || a <= 0) return fail('Enter R or a.');
      const size = isPlane ? row.g * a * a : row.g * a;
      const val = row.n / size;
      const label = isPlane ? `(${hkl})` : `[${hkl}]`;
      const sizeTex = isPlane ? `${fmt(row.g, 4)}\\,a^2` : `${fmt(row.g, 4)}\\,a`;
      return {
        rows: [
          { label: `${isPlane ? 'PD' : 'LD'} ${s} ${label} in R`, tex: row.exact, main: true },
          { label: 'Atoms centred', tex: fmt(row.n, 3) },
          { label: isPlane ? 'Area' : 'Length', tex: `${sizeTex} = ${fmt(size)}\\ \\text{nm}${isPlane ? '^2' : ''}` },
          { label: 'Numeric', tex: `${fmt(val)}\\ \\text{atoms/nm}${isPlane ? '^2' : ''}` }
        ],
        steps: [
          `${s} ${label}: ${fmt(row.n, 3)} atom(s) centred on the ${isPlane ? 'plane' : 'vector'}; ${isPlane ? 'area' : 'length'} $= ${sizeTex}$ with $${STRUCT[s].aTex}$`,
          `$${isPlane ? 'PD' : 'LD'} = ${row.exact}$; with $a = ${fmt(a)}$ nm → $${fmt(val)}$ per nm${isPlane ? '²' : ''}`
        ]
      };
    }
  },

  bragg: {
    id: 'bragg',
    modes: [
      { value: 'forward', label: 'Structure → 2θ' },
      { value: 'reverse', label: '2θ → d, a, R' }
    ],
    inputs: [
      structIn(),
      nIn('R', 'Atomic radius R', '0.1387', 'nm', ['forward']),
      nIn('a', 'a (optional, overrides R)', '', 'nm', ['forward']),
      nIn('twoTheta', 'Measured 2θ', '36.12', '°', ['reverse']),
      nIn('h', 'h', '1'),
      nIn('k', 'k', '1'),
      nIn('l', 'l', '3'),
      nIn('lambda', 'Wavelength λ', '0.1542', 'nm'),
      nIn('n', 'Order n', '1')
    ],
    compute: (v) => {
      const s = structOf(v.struct);
      const S = STRUCT[s];
      const h = num(v.h);
      const k = num(v.k);
      const l = num(v.l);
      const lam = num(v.lambda);
      const n = num(v.n) || 1;
      if (!need(h, k, l, lam)) return fail('Enter h, k, l and λ.');
      const root = Math.sqrt(h * h + k * k + l * l);
      if (root === 0) return fail('(000) is not a plane.');
      const allowed = reflectionAllowed(s, h, k, l);
      const ruleRow: CalcRow = {
        label: 'Reflection rule',
        tex: '',
        plain: `${allowed ? 'Allowed' : 'Absent'} for ${s}${s === 'BCC' ? ' (h+k+l even)' : s === 'FCC' ? ' (all odd or all even)' : ''}`
      };
      if (v.mode === 'reverse') {
        const tt = num(v.twoTheta);
        if (!need(tt) || tt <= 0 || tt >= 180) return fail('2θ must be between 0 and 180°.');
        const th = tt / 2;
        const d = (n * lam) / (2 * Math.sin(rad(th)));
        const a = d * root;
        const R = S.rOfA(a);
        return {
          rows: [
            { label: 'θ', tex: `${fmt(th)}^\\circ` },
            { label: 'd', tex: `${fmt(d)}\\ \\text{nm}` },
            { label: 'a', tex: `${fmt(a)}\\ \\text{nm}` },
            { label: 'R', tex: `${fmt(R)}\\ \\text{nm}`, main: true },
            ruleRow
          ],
          steps: [
            `$\\theta = ${fmt(tt)}/2 = ${fmt(th)}^\\circ$`,
            `$d = \\frac{n\\lambda}{2\\sin\\theta} = \\frac{${fmt(n)}\\cdot${fmt(lam)}}{2\\sin${fmt(th)}^\\circ} = ${fmt(d)}$ nm`,
            `$a = d\\sqrt{h^2+k^2+l^2} = ${fmt(d)}\\sqrt{${h * h + k * k + l * l}} = ${fmt(a)}$ nm`,
            `$${S.aTex}$ → $R = ${fmt(R)}$ nm`
          ]
        };
      }
      const aIn = num(v.a);
      const a = Number.isFinite(aIn) && aIn > 0 ? aIn : S.aOfR(num(v.R));
      if (!need(a) || a <= 0) return fail('Enter R or a.');
      const d = a / root;
      const sinT = (n * lam) / (2 * d);
      if (sinT > 1) return fail(`sin θ = ${sinT.toFixed(3)} > 1: this reflection cannot occur with this wavelength.`);
      const th = deg(Math.asin(sinT));
      return {
        rows: [
          { label: 'a', tex: `${fmt(a)}\\ \\text{nm}` },
          { label: 'd_hkl', tex: `${fmt(d)}\\ \\text{nm}` },
          { label: 'θ', tex: `${fmt(th)}^\\circ` },
          { label: '2θ', tex: `${fmt(2 * th)}^\\circ`, main: true },
          ruleRow
        ],
        steps: [
          `$a = ${fmt(a)}$ nm${Number.isFinite(aIn) && aIn > 0 ? '' : ` (from $${S.aTex}$)`}`,
          `$d_{${h}${k}${l}} = \\frac{${fmt(a)}}{\\sqrt{${h * h + k * k + l * l}}} = ${fmt(d)}$ nm`,
          `$\\sin\\theta = \\frac{n\\lambda}{2d} = \\frac{${fmt(n)}\\cdot${fmt(lam)}}{2\\cdot${fmt(d)}} = ${fmt(sinT)}$ → $\\theta = ${fmt(th)}^\\circ$, $2\\theta = ${fmt(2 * th)}^\\circ$`
        ]
      };
    }
  },

  vacancy: {
    id: 'vacancy',
    modes: [
      { value: 'nv', label: 'Find Nᵥ' },
      { value: 'qv', label: 'Find Qᵥ (from fraction)' }
    ],
    inputs: [
      nIn('Qv', 'Qᵥ', '0.9', 'eV/atom', ['nv']),
      nIn('frac', 'Fraction Nᵥ/N', '9e-5', '', ['qv']),
      nIn('T', 'Temperature', '20', '°C'),
      nIn('rho', 'Density ρ', '8.9', 'g/cm³', ['nv']),
      nIn('A', 'Atomic weight A', '63.5', 'g/mol', ['nv'])
    ],
    compute: (v) => {
      const T = num(v.T) + 273;
      if (!need(T) || T <= 0) return fail('Enter a temperature.');
      if (v.mode === 'qv') {
        const f = num(v.frac);
        if (!need(f) || f <= 0 || f >= 1) return fail('The fraction must be between 0 and 1.');
        const Q = -K_EV * T * Math.log(f);
        return {
          rows: [{ label: 'Qᵥ', tex: `${fmt(Q, 3)}\\ \\text{eV/atom}`, main: true }],
          steps: [`$Q_v = -kT\\ln\\frac{N_v}{N} = -(8.62\\times10^{-5})(${fmt(T)})\\ln(${fmt(f)}) = ${fmt(Q, 3)}$ eV`]
        };
      }
      const Q = num(v.Qv);
      const rho = num(v.rho);
      const A = num(v.A);
      if (!need(Q, rho, A) || A <= 0) return fail('Enter Qᵥ, ρ and A.');
      const N = (rho * 1e6 * NA) / A;
      const f = Math.exp(-Q / (K_EV * T));
      return {
        rows: [
          { label: 'N (sites)', tex: `${fmt(N)}\\ \\text{m}^{-3}` },
          { label: 'Nᵥ/N', tex: fmt(f) },
          { label: 'Nᵥ', tex: `${fmt(N * f)}\\ \\text{m}^{-3}`, main: true }
        ],
        steps: [
          `$T = ${fmt(num(v.T))} + 273 = ${fmt(T)}$ K`,
          `$N = \\frac{\\rho N_A}{A} = \\frac{(${fmt(rho)}\\times10^6\\text{ g/m}^3)(6.022\\times10^{23})}{${fmt(A)}} = ${fmt(N)}$ m⁻³`,
          `$\\frac{N_v}{N} = \\exp\\left(-\\frac{${fmt(Q)}}{(8.62\\times10^{-5})(${fmt(T)})}\\right) = e^{${fmt(-Q / (K_EV * T))}} = ${fmt(f)}$`,
          `$N_v = ${fmt(N)}\\times${fmt(f)} = ${fmt(N * f)}$ m⁻³`
        ]
      };
    }
  },

  wtat: {
    id: 'wtat',
    inputs: [nIn('c1', 'Element 1 wt%', '97', 'wt%'), nIn('A1', 'A₁', '26.98', 'g/mol'), nIn('A2', 'A₂', '63.55', 'g/mol')],
    compute: (v) => {
      const c1 = num(v.c1);
      const A1 = num(v.A1);
      const A2 = num(v.A2);
      if (!need(c1, A1, A2) || c1 < 0 || c1 > 100) return fail('wt% must be 0–100.');
      const c2 = 100 - c1;
      const at1 = ((c1 * A2) / (c1 * A2 + c2 * A1)) * 100;
      return {
        rows: [
          { label: 'Element 1', tex: `${fmt(at1, 4)}\\ \\text{at\\%}`, main: true },
          { label: 'Element 2', tex: `${fmt(100 - at1, 4)}\\ \\text{at\\%}` }
        ],
        steps: [`$C_1' = \\frac{${fmt(c1)}\\cdot${fmt(A2)}}{${fmt(c1)}\\cdot${fmt(A2)} + ${fmt(c2)}\\cdot${fmt(A1)}}\\times100 = ${fmt(at1, 4)}$ at%`]
      };
    }
  },

  fick1: {
    id: 'fick1',
    inputs: [
      nIn('D', 'D', '1e-8', 'm²/s'),
      nIn('C1', 'C high', '2.0', 'kg/m³'),
      nIn('C2', 'C low', '0.5', 'kg/m³'),
      nIn('dx', 'Thickness Δx', '4', 'mm'),
      nIn('area', 'Area A', '0.6', 'm²'),
      nIn('hours', 'Time', '1', 'h')
    ],
    compute: (v) => {
      const D = num(v.D);
      const c1 = num(v.C1);
      const c2 = num(v.C2);
      const dx = num(v.dx) / 1000;
      const A = num(v.area);
      const t = num(v.hours) * 3600;
      if (!need(D, c1, c2, dx, A, t) || dx <= 0) return fail('Fill in every field.');
      const J = (D * (c1 - c2)) / dx;
      const M = J * A * t;
      return {
        rows: [
          { label: 'Flux J', tex: `${fmt(J)}\\ \\text{kg/m}^2\\text{s}` },
          { label: 'Per second through A', tex: `${fmt(J * A)}\\ \\text{kg/s}` },
          { label: `Mass in ${fmt(num(v.hours))} h`, tex: `${fmt(M)}\\ \\text{kg}`, main: true }
        ],
        steps: [
          `$J = D\\frac{\\Delta C}{\\Delta x} = (${fmt(D)})\\frac{${fmt(c1)} - ${fmt(c2)}}{${fmt(dx)}\\text{ m}} = ${fmt(J)}$ kg/m²·s`,
          `$M = JAt = (${fmt(J)})(${fmt(A)})(${fmt(t)}\\text{ s}) = ${fmt(M)}$ kg`
        ]
      };
    }
  },

  erf: {
    id: 'erf',
    modes: [
      { value: 'cx', label: 'Find Cₓ' },
      { value: 't', label: 'Find t' }
    ],
    inputs: [
      nIn('Cs', 'Cₛ (surface)', '5'),
      nIn('C0', 'C₀ (initial)', '0'),
      nIn('Cx', 'Cₓ (target)', '0.8', '', ['t']),
      nIn('x', 'Depth x', '0.5', 'mm'),
      nIn('D', 'D', '6.9e-11', 'm²/s'),
      nIn('hours', 'Time t', '1', 'h', ['cx'])
    ],
    compute: (v) => {
      const Cs = num(v.Cs);
      const C0 = num(v.C0);
      const x = num(v.x) / 1000;
      const D = num(v.D);
      if (!need(Cs, C0, x, D) || D <= 0 || Cs === C0) return fail('Need Cₛ ≠ C₀ and D > 0.');
      if (v.mode === 't') {
        const Cx = num(v.Cx);
        const ratio = (Cx - C0) / (Cs - C0);
        if (!need(Cx) || ratio <= 0 || ratio >= 1) return fail('Cₓ must lie between C₀ and Cₛ.');
        const target = 1 - ratio;
        const z = erfInv(target);
        const t = (x / (2 * z)) ** 2 / D;
        return {
          rows: [
            { label: 'erf(z)', tex: fmt(target) },
            { label: 'z', tex: fmt(z) },
            { label: 't', tex: `${fmt(t)}\\ \\text{s} = ${fmt(t / 3600)}\\ \\text{h}`, main: true }
          ],
          steps: [
            `$\\frac{C_x - C_0}{C_s - C_0} = \\frac{${fmt(Cx)} - ${fmt(C0)}}{${fmt(Cs)} - ${fmt(C0)}} = ${fmt(ratio)} = 1 - \\mathrm{erf}(z)$ → $\\mathrm{erf}(z) = ${fmt(target)}$`,
            `From the table: $z = ${fmt(z)}$`,
            `$t = \\frac{x^2}{4z^2D} = \\frac{(${fmt(x)})^2}{4(${fmt(z)})^2(${fmt(D)})} = ${fmt(t)}$ s`
          ]
        };
      }
      const t = num(v.hours) * 3600;
      if (!need(t) || t <= 0) return fail('Enter a time.');
      const z = x / (2 * Math.sqrt(D * t));
      const e = erf(z);
      const Cx = C0 + (Cs - C0) * (1 - e);
      return {
        rows: [
          { label: 'z', tex: fmt(z) },
          { label: 'erf(z)', tex: fmt(e) },
          { label: 'Cₓ', tex: fmt(Cx), main: true }
        ],
        steps: [
          `$z = \\frac{x}{2\\sqrt{Dt}} = \\frac{${fmt(x)}}{2\\sqrt{(${fmt(D)})(${fmt(t)})}} = ${fmt(z)}$`,
          `$\\mathrm{erf}(${fmt(z, 3)}) = ${fmt(e)}$ (table)`,
          `$C_x = C_0 + (C_s - C_0)(1 - \\mathrm{erf}\\,z) = ${fmt(C0)} + (${fmt(Cs - C0)})(${fmt(1 - e)}) = ${fmt(Cx)}$`
        ]
      };
    }
  },

  arrD: {
    id: 'arrD',
    inputs: [
      nIn('D01', 'D₀ (system 1)', '6.2e-7', 'm²/s'),
      nIn('Q1', 'Q (system 1)', '80', 'kJ/mol'),
      nIn('D02', 'D₀ (system 2)', '2.3e-5', 'm²/s'),
      nIn('Q2', 'Q (system 2)', '148', 'kJ/mol'),
      nIn('T', 'Temperature', '910', '°C')
    ],
    compute: (v) => {
      const T = num(v.T) + 273;
      const D01 = num(v.D01);
      const D02 = num(v.D02);
      const Q1 = num(v.Q1) * 1000;
      const Q2 = num(v.Q2) * 1000;
      if (!need(T, D01, D02, Q1, Q2) || T <= 0) return fail('Fill in every field.');
      const D1 = D01 * Math.exp(-Q1 / (R_GAS * T));
      const D2 = D02 * Math.exp(-Q2 / (R_GAS * T));
      const r = D1 / D2;
      return {
        rows: [
          { label: 'D₁', tex: `${fmt(D1)}\\ \\text{m}^2/\\text{s}` },
          { label: 'D₂', tex: `${fmt(D2)}\\ \\text{m}^2/\\text{s}` },
          { label: 'D₁ / D₂', tex: fmt(r, 3), main: true },
          { label: 'Verdict', tex: '', plain: `System ${r >= 1 ? '1' : '2'} diffuses ${Number((r >= 1 ? r : 1 / r).toPrecision(3))}× faster` }
        ],
        steps: [
          `$T = ${fmt(num(v.T))} + 273 = ${fmt(T)}$ K`,
          `$D_1 = ${fmt(D01)}\\,e^{-${fmt(Q1)}/(8.314\\cdot${fmt(T)})} = ${fmt(D1)}$`,
          `$D_2 = ${fmt(D02)}\\,e^{-${fmt(Q2)}/(8.314\\cdot${fmt(T)})} = ${fmt(D2)}$`,
          `$D_1/D_2 = ${fmt(r, 3)}$`
        ]
      };
    }
  },

  hooke: {
    id: 'hooke',
    inputs: [nIn('F', 'Load F', '9800', 'N'), nIn('d', 'Diameter d₀', '20', 'mm'), nIn('L0', 'Length l₀', '10', 'm'), nIn('E', 'E', '207', 'GPa')],
    compute: (v) => {
      const F = num(v.F);
      const d = num(v.d) / 1000;
      const L0 = num(v.L0);
      const E = num(v.E) * 1e9;
      if (!need(F, d, L0, E) || d <= 0 || E <= 0) return fail('Fill in every field.');
      const A0 = Math.PI * (d / 2) ** 2;
      const s = F / A0;
      const e = s / E;
      const dL = e * L0;
      return {
        rows: [
          { label: 'A₀', tex: `${fmt(A0)}\\ \\text{m}^2` },
          { label: 'σ', tex: `${fmt(s / 1e6)}\\ \\text{MPa}` },
          { label: 'ε', tex: fmt(e) },
          { label: 'Δl', tex: `${fmt(dL * 1000)}\\ \\text{mm}` },
          { label: 'New length', tex: `${fmt(L0 + dL, 8)}\\ \\text{m}`, main: true }
        ],
        steps: [
          `$A_0 = \\pi(${fmt(d)}/2)^2 = ${fmt(A0)}$ m², $\\sigma = F/A_0 = ${fmt(s / 1e6)}$ MPa`,
          `$\\varepsilon = \\sigma/E = ${fmt(e)}$, $\\Delta l = \\varepsilon l_0 = ${fmt(dL * 1000)}$ mm`,
          `$l = ${fmt(L0)} + ${fmt(dL)} = ${fmt(L0 + dL, 8)}$ m`
        ]
      };
    }
  },

  modulus: {
    id: 'modulus',
    inputs: [nIn('sigma', 'Stress σ (on the straight part)', '200', 'MPa'), nIn('eps', 'Strain ε at that point', '0.00175')],
    compute: (v) => {
      const s = num(v.sigma);
      const e = num(v.eps);
      if (!need(s, e) || e <= 0) return fail('Enter a stress and a positive strain.');
      return {
        rows: [{ label: 'E', tex: `${fmt(s / e / 1000, 3)}\\ \\text{GPa}`, main: true }],
        steps: [`$E = \\frac{\\sigma}{\\varepsilon} = \\frac{${fmt(s)}\\text{ MPa}}{${fmt(e)}} = ${fmt(s / e)}$ MPa $= ${fmt(s / e / 1000, 3)}$ GPa`]
      };
    }
  },

  poisson: {
    id: 'poisson',
    modes: [
      { value: 'nu', label: 'Find ν' },
      { value: 'lateral', label: 'ν → Δwidth' },
      { value: 'force', label: 'Δd → load' }
    ],
    inputs: [
      nIn('dL', 'ΔL', '0.01', 'mm', ['nu']),
      nIn('L0', 'L₀', '50', 'mm', ['nu']),
      nIn('dd', '|Δd|', '0.0006', 'mm', ['nu', 'force']),
      nIn('d0', 'd₀', '10', 'mm', ['nu', 'force']),
      nIn('nu', 'ν', '0.3', '', ['lateral', 'force']),
      nIn('F', 'Load F', '60000', 'N', ['lateral']),
      nIn('E', 'E', '207', 'GPa', ['lateral', 'force']),
      nIn('w', 'Width w (the dimension asked)', '20', 'mm', ['lateral']),
      nIn('th', 'Thickness', '40', 'mm', ['lateral'])
    ],
    compute: (v) => {
      if (v.mode === 'lateral') {
        const nu = num(v.nu);
        const F = num(v.F);
        const E = num(v.E) * 1e9;
        const w = num(v.w);
        const th = num(v.th);
        if (!need(nu, F, E, w, th) || w <= 0 || th <= 0) return fail('Fill in every field.');
        const s = F / (w * th * 1e-6);
        const ez = s / E;
        const ex = -nu * ez;
        const dw = ex * w;
        return {
          rows: [
            { label: 'σ', tex: `${fmt(s / 1e6)}\\ \\text{MPa}` },
            { label: 'ε_z', tex: fmt(ez) },
            { label: 'ε_x', tex: fmt(ex) },
            { label: 'Δw', tex: `${fmt(dw * 1000)}\\ \\mu\\text{m}`, main: true }
          ],
          steps: [
            `$\\sigma = \\frac{F}{w\\,t} = \\frac{${fmt(F)}}{(${fmt(w)}\\times${fmt(th)})\\times10^{-6}} = ${fmt(s / 1e6)}$ MPa, $\\varepsilon_z = \\sigma/E = ${fmt(ez)}$`,
            `$\\varepsilon_x = -\\nu\\varepsilon_z = ${fmt(ex)}$, $\\Delta w = \\varepsilon_x w = ${fmt(dw)}$ mm $= ${fmt(dw * 1000)}$ µm`
          ]
        };
      }
      if (v.mode === 'force') {
        const nu = num(v.nu);
        const E = num(v.E) * 1e9;
        const d0 = num(v.d0);
        const dd = Math.abs(num(v.dd));
        if (!need(nu, E, d0, dd) || nu <= 0 || d0 <= 0) return fail('Fill in every field.');
        const ex = -dd / d0;
        const ez = -ex / nu;
        const s = E * ez;
        const F = s * Math.PI * (d0 / 2000) ** 2;
        return {
          rows: [
            { label: 'ε_x', tex: fmt(ex) },
            { label: 'ε_z', tex: fmt(ez) },
            { label: 'σ', tex: `${fmt(s / 1e6)}\\ \\text{MPa}` },
            { label: 'F', tex: `${fmt(F)}\\ \\text{N}`, main: true }
          ],
          steps: [
            `$\\varepsilon_x = -\\frac{${fmt(dd)}}{${fmt(d0)}} = ${fmt(ex)}$, $\\varepsilon_z = -\\frac{\\varepsilon_x}{\\nu} = ${fmt(ez)}$`,
            `$\\sigma = E\\varepsilon_z = ${fmt(s / 1e6)}$ MPa, $F = \\sigma\\,\\pi d_0^2/4 = ${fmt(F)}$ N`
          ]
        };
      }
      const dL = num(v.dL);
      const L0 = num(v.L0);
      const dd = Math.abs(num(v.dd));
      const d0 = num(v.d0);
      if (!need(dL, L0, dd, d0) || L0 <= 0 || d0 <= 0 || dL === 0) return fail('Fill in every field.');
      const ez = dL / L0;
      const ex = -dd / d0;
      const nu = -ex / ez;
      return {
        rows: [
          { label: 'ε_z', tex: fmt(ez) },
          { label: 'ε_x', tex: fmt(ex) },
          { label: 'ν', tex: fmt(nu, 3), main: true }
        ],
        steps: [
          `$\\varepsilon_z = \\frac{${fmt(dL)}}{${fmt(L0)}} = ${fmt(ez)}$, $\\varepsilon_x = -\\frac{${fmt(dd)}}{${fmt(d0)}} = ${fmt(ex)}$`,
          `$\\nu = -\\frac{\\varepsilon_x}{\\varepsilon_z} = ${fmt(nu, 3)}$`
        ]
      };
    }
  },

  recovery: {
    id: 'recovery',
    inputs: [nIn('sigma', 'Stress reached σ', '320', 'MPa'), nIn('E', 'E', '114', 'GPa'), nIn('eps', 'Total strain at σ (from the curve)', '0.028'), nIn('L0', 'l₀', '100', 'mm')],
    compute: (v) => {
      const s = num(v.sigma);
      const E = num(v.E) * 1000;
      const e = num(v.eps);
      const L0 = num(v.L0);
      if (!need(s, E, e, L0) || E <= 0) return fail('Fill in every field.');
      const ee = s / E;
      const ep = e - ee;
      return {
        rows: [
          { label: 'Elastic (recovered)', tex: fmt(ee) },
          { label: 'Plastic (stays)', tex: fmt(ep) },
          { label: 'Permanent Δl', tex: `${fmt(ep * L0)}\\ \\text{mm}`, main: true },
          { label: 'Δl under load', tex: `${fmt(e * L0)}\\ \\text{mm}` }
        ],
        steps: [`$\\varepsilon_e = \\sigma/E = ${fmt(s)}/${fmt(E)} = ${fmt(ee)}$`, `$\\varepsilon_p = ${fmt(e)} - ${fmt(ee)} = ${fmt(ep)}$ → $\\Delta l = ${fmt(ep)}\\times${fmt(L0)} = ${fmt(ep * L0)}$ mm`]
      };
    }
  },

  ductility: {
    id: 'ductility',
    inputs: [nIn('L0', 'l₀', '50', 'mm'), nIn('Lf', 'l_f', '57.7', 'mm'), nIn('d0', 'd₀', '12.8', 'mm'), nIn('df', 'd_f', '10.7', 'mm')],
    compute: (v) => {
      const L0 = num(v.L0);
      const Lf = num(v.Lf);
      const d0 = num(v.d0);
      const df = num(v.df);
      const hasL = need(L0, Lf) && L0 > 0;
      const hasD = need(d0, df) && d0 > 0;
      if (!hasL && !hasD) return fail('Enter the lengths, the diameters, or both.');
      const rows: CalcRow[] = [];
      const steps: string[] = [];
      if (hasL) {
        const el = ((Lf - L0) / L0) * 100;
        rows.push({ label: '%EL', tex: `${fmt(el, 3)}\\,\\%`, main: true });
        steps.push(`$\\%EL = \\frac{${fmt(Lf)} - ${fmt(L0)}}{${fmt(L0)}}\\times100 = ${fmt(el, 3)}\\%$`);
      }
      if (hasD) {
        const ra = ((d0 ** 2 - df ** 2) / d0 ** 2) * 100;
        rows.push({ label: '%RA', tex: `${fmt(ra, 3)}\\,\\%`, main: true });
        steps.push(`$\\%RA = \\frac{d_0^2 - d_f^2}{d_0^2}\\times100 = \\frac{${fmt(d0)}^2 - ${fmt(df)}^2}{${fmt(d0)}^2}\\times100 = ${fmt(ra, 3)}\\%$`);
      }
      return { rows, steps };
    }
  },

  resilience: {
    id: 'resilience',
    inputs: [nIn('sy', 'Yield strength σy', '250', 'MPa'), nIn('E', 'E', '97', 'GPa')],
    compute: (v) => {
      const sy = num(v.sy);
      const E = num(v.E) * 1000;
      if (!need(sy, E) || E <= 0) return fail('Fill in both fields.');
      const U = (sy * sy) / (2 * E);
      return {
        rows: [{ label: 'U_r', tex: `${fmt(U)}\\ \\text{MJ/m}^3 = ${fmt(U * 1e6)}\\ \\text{J/m}^3`, main: true }],
        steps: [`$U_r = \\frac{\\sigma_y^2}{2E} = \\frac{${fmt(sy)}^2}{2\\cdot${fmt(E)}} = ${fmt(U)}$ MPa (= MJ/m³)`]
      };
    }
  },

  truess: {
    id: 'truess',
    inputs: [nIn('sigma', 'Engineering stress σ', '360', 'MPa'), nIn('eps', 'Engineering strain ε', '0.09')],
    compute: (v) => {
      const s = num(v.sigma);
      const e = num(v.eps);
      if (!need(s, e) || e <= -1) return fail('Fill in both fields.');
      return {
        rows: [
          { label: 'σ_T', tex: `${fmt(s * (1 + e))}\\ \\text{MPa}`, main: true },
          { label: 'ε_T', tex: fmt(Math.log(1 + e)) }
        ],
        steps: [`$\\sigma_T = ${fmt(s)}(1 + ${fmt(e)}) = ${fmt(s * (1 + e))}$ MPa`, `$\\varepsilon_T = \\ln(1 + ${fmt(e)}) = ${fmt(Math.log(1 + e))}$`]
      };
    }
  }
};

import { MORE_CALCULATORS } from './calculators2';
Object.assign(CALCULATORS, MORE_CALCULATORS);

export const defaultsFor = (calc: Calculator): CalcValues => {
  const v: CalcValues = {};
  if (calc.modes) v.mode = calc.modes[0].value;
  for (const i of calc.inputs) v[i.key] = i.def;
  return v;
};
