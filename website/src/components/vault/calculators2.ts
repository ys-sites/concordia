// ENGR 213 (ODE models, complex numbers) and INDU 211 (operations) calculators.
import type { Calculator, CalcResult, CalcRow } from './calculators';
import { fail, fmt, need, num } from './calculators';

const nIn = (key: string, label: string, def: string, unit?: string, modes?: string[]) => ({ key, label, def, unit, modes, type: 'number' as const });
const area = (key: string, label: string, def: string, hint?: string, rows = 5, modes?: string[]) => ({ key, label, def, hint, rows, modes, type: 'area' as const });

// "a b c" / "a, b, c" / tab-separated → numbers; "-" or "x" → NaN (no link)
const parseRow = (line: string) =>
  line
    .trim()
    .split(/[\s,;\t]+/)
    .filter(Boolean)
    .map((t) => (/^[-–—x∞]$/i.test(t) ? NaN : num(t)));
const parseMatrix = (text: string) =>
  text
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map(parseRow);
const money = (x: number) => `\\$${x.toLocaleString('en-US', { maximumFractionDigits: 2 }).replace(/,/g, '{,}')}`;
const int = (x: number) => x.toLocaleString('en-US', { maximumFractionDigits: 2 }).replace(/,/g, '{,}');
const parseNames = (text: string, n: number) => {
  const names = text.split(/[\s,;]+/).filter(Boolean);
  return Array.from({ length: n }, (_, i) => names[i] ?? String.fromCharCode(65 + i));
};

// ── ENGR 213 ─────────────────────────────────────────────────────────────────────
interface C {
  re: number;
  im: number;
}
const cTex = (z: C, sig = 4) => {
  const re = Math.abs(z.re) < 1e-12 ? 0 : z.re;
  const im = Math.abs(z.im) < 1e-12 ? 0 : z.im;
  if (im === 0) return fmt(re, sig);
  const imPart = `${Math.abs(im) === 1 ? '' : fmt(Math.abs(im), sig)}i`;
  if (re === 0) return `${im < 0 ? '-' : ''}${imPart}`;
  return `${fmt(re, sig)} ${im < 0 ? '-' : '+'} ${imPart}`;
};
const argDeg = (z: C) => (Math.atan2(z.im, z.re) * 180) / Math.PI;

export const MORE_CALCULATORS: Record<string, Calculator> = {
  growth: {
    id: 'growth',
    inputs: [
      nIn('P0', 'Starting amount P(0)', '100'),
      nIn('m', 'Multiplier observed at t₁ (P(t₁)/P(0))', '0.97', '×'),
      nIn('t1', 't₁', '6'),
      nIn('t2', 'Predict at t₂', '24')
    ],
    compute: (v) => {
      const P0 = num(v.P0);
      const m = num(v.m);
      const t1 = num(v.t1);
      const t2 = num(v.t2);
      if (!need(P0, m, t1, t2) || m <= 0 || t1 === 0) return fail('Need P(0), a positive multiplier and t₁ ≠ 0.');
      const k = Math.log(m) / t1;
      const P = P0 * Math.exp(k * t2);
      const dbl = Math.log(2) / Math.abs(k);
      return {
        rows: [
          { label: 'k', tex: fmt(k) },
          { label: 'P(t₂)', tex: fmt(P), main: true },
          { label: k > 0 ? 'Doubling time' : 'Half-life', tex: fmt(dbl) }
        ],
        steps: [
          `$P(t) = P_0e^{kt}$; $e^{k(${fmt(t1)})} = ${fmt(m)} \\Rightarrow k = \\frac{\\ln ${fmt(m)}}{${fmt(t1)}} = ${fmt(k)}$`,
          `$P(${fmt(t2)}) = ${fmt(P0)}\\,e^{${fmt(k)}\\cdot${fmt(t2)}} = ${fmt(P0)}\\,(${fmt(m)})^{${fmt(t2 / t1)}} = ${fmt(P)}$`
        ]
      };
    }
  },

  cooling: {
    id: 'cooling',
    modes: [
      { value: 'temp', label: 'Find T at a time' },
      { value: 'time', label: 'Find the time for a temperature' },
      { value: 'room', label: 'Find the surrounding temperature' }
    ],
    inputs: [
      nIn('Tm', 'Surroundings Tₘ', '20', '°', ['temp', 'time']),
      nIn('T0', 'T at t = 0', '27', '°'),
      nIn('T1', 'T at t₁', '24', '°'),
      nIn('t1', 't₁', '1'),
      nIn('t2', 'Find T at t₂', '2', '', ['temp']),
      nIn('Tx', 'When is T =', '37', '°', ['time']),
      nIn('k', 'k from another experiment (optional)', '', '', ['room'])
    ],
    compute: (v) => {
      const T0 = num(v.T0);
      const T1 = num(v.T1);
      const t1 = num(v.t1);
      if (v.mode === 'room') {
        // body from T0 reaches T1 after t1 in a room of unknown Tm, with k known from another room
        const k = num(v.k);
        if (!need(T0, T1, t1, k)) return fail('Enter T(0), T(t₁), t₁ and k.');
        const e = Math.exp(k * t1);
        const Tm = (T1 - T0 * e) / (1 - e);
        return {
          rows: [{ label: 'Tₘ', tex: `${fmt(Tm)}^\\circ`, main: true }],
          steps: [`$T(t_1) = T_m + (T_0 - T_m)e^{kt_1} \\Rightarrow T_m = \\frac{T_1 - T_0e^{kt_1}}{1 - e^{kt_1}} = ${fmt(Tm)}$`]
        };
      }
      const Tm = num(v.Tm);
      if (!need(Tm, T0, T1, t1) || T0 === Tm || (T1 - Tm) / (T0 - Tm) <= 0) return fail('T(0) and T(t₁) must be on the same side of Tₘ.');
      const k = Math.log((T1 - Tm) / (T0 - Tm)) / t1;
      const steps = [`$T(t) = T_m + (T_0 - T_m)e^{kt}$; $e^{k(${fmt(t1)})} = \\frac{${fmt(T1)} - ${fmt(Tm)}}{${fmt(T0)} - ${fmt(Tm)}} \\Rightarrow k = ${fmt(k)}$`];
      if (v.mode === 'time') {
        const Tx = num(v.Tx);
        const r = (Tx - Tm) / (T0 - Tm);
        if (!need(Tx) || r <= 0) return fail('That temperature is never reached.');
        const t = Math.log(r) / k;
        steps.push(`$${fmt(Tx)} = ${fmt(Tm)} + (${fmt(T0 - Tm)})e^{kt} \\Rightarrow t = \\frac{\\ln(${fmt(r)})}{${fmt(k)}} = ${fmt(t)}$${t < 0 ? ' (negative: that was before t = 0)' : ''}`);
        return { rows: [{ label: 'k', tex: fmt(k) }, { label: 't', tex: fmt(t), main: true }], steps };
      }
      const t2 = num(v.t2);
      const T = Tm + (T0 - Tm) * Math.exp(k * t2);
      steps.push(`$T(${fmt(t2)}) = ${fmt(Tm)} + (${fmt(T0 - Tm)})e^{${fmt(k)}\\cdot${fmt(t2)}} = ${fmt(T)}$`);
      return { rows: [{ label: 'k', tex: fmt(k) }, { label: `T(${fmt(t2)})`, tex: fmt(T), main: true }], steps };
    }
  },

  logistic: {
    id: 'logistic',
    inputs: [nIn('r', 'r in dN/dt = N(r − bN)', '1'), nIn('b', 'b', '0.0004'), nIn('N0', 'N(0)', '2'), nIn('t', 't', '12')],
    compute: (v) => {
      const r = num(v.r);
      const b = num(v.b);
      const N0 = num(v.N0);
      const t = num(v.t);
      if (!need(r, b, N0, t) || b <= 0 || N0 <= 0) return fail('Need r, b > 0, N(0) > 0 and t.');
      const K = r / b;
      const A = K / N0 - 1;
      const N = K / (1 + A * Math.exp(-r * t));
      return {
        rows: [
          { label: 'Carrying capacity K', tex: fmt(K) },
          { label: `N(${fmt(t)})`, tex: fmt(N), main: true }
        ],
        steps: [
          `$K = r/b = ${fmt(K)}$; separate with partial fractions → $N(t) = \\frac{K}{1 + Ae^{-rt}}$`,
          `$A = \\frac{K}{N_0} - 1 = ${fmt(A)}$, $N(${fmt(t)}) = \\frac{${fmt(K)}}{1 + ${fmt(A)}e^{-${fmt(r * t)}}} = ${fmt(N)}$`
        ]
      };
    }
  },

  complex: {
    id: 'complex',
    modes: [
      { value: 'ops', label: 'z₁ and z₂' },
      { value: 'power', label: 'zⁿ (De Moivre)' },
      { value: 'roots', label: 'n-th roots' }
    ],
    inputs: [
      nIn('a', 'Re z₁', '4'),
      nIn('b', 'Im z₁', '5'),
      nIn('c', 'Re z₂', '-1', '', ['ops']),
      nIn('d', 'Im z₂', '2', '', ['ops']),
      nIn('n', 'n', '3', '', ['power', 'roots'])
    ],
    compute: (v) => {
      const z1: C = { re: num(v.a), im: num(v.b) };
      if (!need(z1.re, z1.im)) return fail('Enter z₁.');
      const r1 = Math.hypot(z1.re, z1.im);
      const th1 = argDeg(z1);
      const polar = `${fmt(r1)}\\,(\\cos ${fmt(th1)}^\\circ + i\\sin ${fmt(th1)}^\\circ)`;
      if (v.mode === 'power' || v.mode === 'roots') {
        const n = Math.round(num(v.n));
        if (!need(n) || n < 1) return fail('n must be a positive integer.');
        if (v.mode === 'power') {
          const R = r1 ** n;
          const th = (th1 * n * Math.PI) / 180;
          const z: C = { re: R * Math.cos(th), im: R * Math.sin(th) };
          return {
            rows: [
              { label: '|z|, arg z', tex: `${fmt(r1)},\\ ${fmt(th1)}^\\circ` },
              { label: `z^${n}`, tex: cTex(z), main: true }
            ],
            steps: [`$z = ${polar}$`, `$z^{${n}} = ${fmt(r1)}^{${n}}(\\cos ${fmt(n * th1)}^\\circ + i\\sin ${fmt(n * th1)}^\\circ) = ${cTex(z)}$`]
          };
        }
        const R = r1 ** (1 / n);
        const roots = Array.from({ length: n }, (_, k) => {
          const th = ((th1 + 360 * k) / n) * (Math.PI / 180);
          return { re: R * Math.cos(th), im: R * Math.sin(th) };
        });
        return {
          rows: roots.map((z, k) => ({ label: `w${k}`, tex: cTex(z), main: k === 0 })),
          steps: [`$z = ${polar}$`, `$w_k = ${fmt(R)}\\left(\\cos\\frac{${fmt(th1)}^\\circ + 360^\\circ k}{${n}} + i\\sin\\frac{${fmt(th1)}^\\circ + 360^\\circ k}{${n}}\\right),\\ k = 0..${n - 1}$`]
        };
      }
      const z2: C = { re: num(v.c), im: num(v.d) };
      if (!need(z2.re, z2.im)) return fail('Enter z₂.');
      const den = z2.re ** 2 + z2.im ** 2;
      if (den === 0) return fail('z₂ cannot be 0.');
      const sum = { re: z1.re + z2.re, im: z1.im + z2.im };
      const prod = { re: z1.re * z2.re - z1.im * z2.im, im: z1.re * z2.im + z1.im * z2.re };
      const quot = { re: (z1.re * z2.re + z1.im * z2.im) / den, im: (z1.im * z2.re - z1.re * z2.im) / den };
      return {
        rows: [
          { label: 'z₁ + z₂', tex: cTex(sum) },
          { label: 'z₁ z₂', tex: cTex(prod) },
          { label: 'z₁ / z₂', tex: cTex(quot), main: true },
          { label: '|z₁ / z₂|', tex: fmt(Math.hypot(quot.re, quot.im)) },
          { label: 'z₁ in polar', tex: polar }
        ],
        steps: [
          `$z_1z_2 = (${cTex(z1)})(${cTex(z2)}) = ${cTex(prod)}$ (use $i^2 = -1$)`,
          `$\\frac{z_1}{z_2} = \\frac{z_1\\bar z_2}{|z_2|^2} = \\frac{(${cTex(z1)})(${cTex({ re: z2.re, im: -z2.im })})}{${fmt(den)}} = ${cTex(quot)}$`,
          `$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|} = \\frac{${fmt(r1)}}{${fmt(Math.sqrt(den))}} = ${fmt(r1 / Math.sqrt(den))}$`
        ]
      };
    }
  },

  // ── INDU 211 ───────────────────────────────────────────────────────────────────
  breakeven: {
    id: 'breakeven',
    modes: [
      { value: 'compare', label: 'Compare processes' },
      { value: 'price', label: 'Profit break-even' }
    ],
    inputs: [
      area('procs', 'One process per line: name, fixed cost, variable cost per unit', 'A 110000 2\nB 80000 4\nC 75000 5', undefined, 4, ['compare']),
      nIn('D', 'Annual demand', '10000', 'units', ['compare']),
      nIn('F', 'Fixed cost', '28000', '$', ['price']),
      nIn('vc', 'Variable cost per unit', '100', '$', ['price']),
      nIn('p', 'Selling price per unit', '200', '$', ['price'])
    ],
    compute: (v) => {
      if (v.mode === 'price') {
        const F = num(v.F);
        const vc = num(v.vc);
        const p = num(v.p);
        if (!need(F, vc, p) || p <= vc) return fail('The price must exceed the variable cost.');
        const Q = F / (p - vc);
        return {
          rows: [{ label: 'Break-even volume', tex: `${fmt(Q)}\\ \\text{units}`, main: true }],
          steps: [`Revenue = cost: $${fmt(p)}Q = ${fmt(F)} + ${fmt(vc)}Q \\Rightarrow Q = \\frac{${fmt(F)}}{${fmt(p)} - ${fmt(vc)}} = ${fmt(Q)}$`]
        };
      }
      const procs = v.procs
        .split('\n')
        .map((l) => l.trim().split(/[\s,;]+/))
        .filter((p) => p.length >= 3)
        .map(([name, F, c]) => ({ name, F: num(F), c: num(c) }))
        .filter((p) => need(p.F, p.c));
      const D = num(v.D);
      if (procs.length < 2 || !need(D)) return fail('Enter at least two processes and a demand.');
      const tcs = procs.map((p) => ({ ...p, tc: p.F + p.c * D }));
      const best = tcs.reduce((a, b) => (b.tc < a.tc ? b : a));
      const rows: CalcRow[] = tcs.map((p) => ({ label: `TC(${p.name})`, tex: money(p.tc) }));
      rows.push({ label: 'Choose', tex: '', plain: `${best.name} at ${D} units`, main: true });
      const steps = tcs.map((p) => `$TC_{${p.name}} = ${int(p.F)} + ${fmt(p.c)}(${int(D)}) = ${int(p.tc)}$`);
      for (let i = 0; i < procs.length; i++)
        for (let j = i + 1; j < procs.length; j++) {
          const a = procs[i];
          const b = procs[j];
          if (a.c === b.c) continue;
          const q = (b.F - a.F) / (a.c - b.c);
          if (q > 0) {
            rows.push({ label: `BEP ${a.name}–${b.name}`, tex: `${int(Math.round(q * 100) / 100)}\\ \\text{units}` });
            steps.push(`$BEP_{${a.name}${b.name}}$: $${int(a.F)} + ${fmt(a.c)}Q = ${int(b.F)} + ${fmt(b.c)}Q \\Rightarrow Q = ${int(Math.round(q * 100) / 100)}$`);
          }
        }
      return { rows, steps };
    }
  },

  transport: {
    id: 'transport',
    inputs: [
      area('cost', 'Unit costs (one row per source)', '31 21 42\n20 21 30\n23 20 15', 'one row per source, columns = destinations', 4),
      { key: 'supply', label: 'Supplies (row order)', type: 'text' as const, def: '400 1000 600' },
      { key: 'demand', label: 'Demands (column order)', type: 'text' as const, def: '300 900 800' }
    ],
    compute: (v) => {
      const C = parseMatrix(v.cost);
      const S = parseRow(v.supply);
      const Dm = parseRow(v.demand);
      if (!C.length || C.some((r) => r.length !== Dm.length) || S.length !== C.length) return fail('Costs must be sources × destinations, matching the supply and demand lists.');
      const sup = [...S];
      const dem = [...Dm];
      const alloc = C.map((r) => r.map(() => 0));
      const cells = C.flatMap((r, i) => r.map((c, j) => ({ i, j, c }))).sort((a, b) => a.c - b.c || a.i - b.i || a.j - b.j);
      const steps: string[] = [];
      let total = 0;
      for (const { i, j, c } of cells) {
        const q = Math.min(sup[i], dem[j]);
        if (q <= 0) continue;
        alloc[i][j] = q;
        sup[i] -= q;
        dem[j] -= q;
        total += q * c;
        steps.push(`Cheapest open cell: source ${i + 1} → destination ${j + 1} at \\$${fmt(c)}: ship ${fmt(q, 6)} (cost ${fmt(q * c, 6)})`);
      }
      const plan = alloc.map((r, i) => `S${i + 1}: ${r.map((q) => (q ? fmt(q, 6) : '·')).join('  ')}`).join(' | ');
      return {
        rows: [
          { label: 'Total cost', tex: money(total), main: true },
          { label: 'Plan (rows = sources)', tex: '', plain: plan }
        ],
        steps
      };
    }
  },

  cog: {
    id: 'cog',
    inputs: [area('pts', 'One destination per line: x, y, quantity', '2 2 800\n3 5 900\n5 4 200\n8 5 100', undefined, 5)],
    compute: (v) => {
      const pts = parseMatrix(v.pts).filter((r) => r.length >= 2 && need(r[0], r[1]));
      if (!pts.length) return fail('Enter at least one point.');
      const n = pts.length;
      const xe = pts.reduce((s, p) => s + p[0], 0) / n;
      const ye = pts.reduce((s, p) => s + p[1], 0) / n;
      const rows: CalcRow[] = [{ label: 'Equal quantities', tex: `(${fmt(xe)},\\ ${fmt(ye)})` }];
      const steps = [`Equal: $\\bar x = \\frac{${pts.map((p) => fmt(p[0])).join('+')}}{${n}} = ${fmt(xe)}$, $\\bar y = ${fmt(ye)}$`];
      if (pts.every((p) => need(p[2]))) {
        const Q = pts.reduce((s, p) => s + p[2], 0);
        const xw = pts.reduce((s, p) => s + p[0] * p[2], 0) / Q;
        const yw = pts.reduce((s, p) => s + p[1] * p[2], 0) / Q;
        rows.push({ label: 'Weighted by quantity', tex: `(${fmt(xw)},\\ ${fmt(yw)})`, main: true });
        rows.push({ label: 'Weighted x', tex: fmt(xw) }, { label: 'Weighted y', tex: fmt(yw) });
        steps.push(`Weighted: $\\bar x = \\frac{\\sum Q_ix_i}{\\sum Q_i} = \\frac{${fmt(xw * Q, 6)}}{${fmt(Q, 6)}} = ${fmt(xw)}$, $\\bar y = \\frac{${fmt(yw * Q, 6)}}{${fmt(Q, 6)}} = ${fmt(yw)}$`);
      } else rows[0].main = true;
      return { rows, steps };
    }
  },

  tsp: {
    id: 'tsp',
    modes: [
      { value: 'nn', label: 'Nearest neighbour' },
      { value: 'second', label: '2nd-nearest first stop' },
      { value: 'next', label: '2nd-nearest every stop' }
    ],
    inputs: [
      area('d', 'Distance matrix (row = from, column = to, - on the diagonal)', '- 15 20 19 26 13\n9 - 12 16 13 18\n19 13 - 17 15 18\n22 16 12 - 16 14\n18 10 18 20 - 12\n22 9 11 13 14 -', undefined, 7),
      { key: 'names', label: 'Names (same order)', type: 'text' as const, def: 'P A B C D E' },
      { key: 'start', label: 'Start at', type: 'text' as const, def: 'P' }
    ],
    compute: (v) => {
      const D = parseMatrix(v.d);
      const n = D.length;
      if (n < 3 || D.some((r) => r.length !== n)) return fail('The matrix must be square (n × n).');
      const names = parseNames(v.names, n);
      const s = Math.max(0, names.indexOf(v.start.trim()));
      const route = [s];
      const steps: string[] = [];
      let total = 0;
      let cur = s;
      const left = new Set(names.map((_, i) => i).filter((i) => i !== s));
      while (left.size) {
        const options = [...left].map((j) => ({ j, d: D[cur][j] })).filter((o) => need(o.d)).sort((a, b) => a.d - b.d || a.j - b.j);
        if (!options.length) return fail(`No road out of ${names[cur]}.`);
        const useSecond = (v.mode === 'next' || (v.mode === 'second' && route.length === 1)) && options.length > 1;
        const pick = options[useSecond ? 1 : 0];
        steps.push(`From ${names[cur]}: ${options.map((o) => `${names[o.j]} ${fmt(o.d)}`).join(', ')} → go to ${names[pick.j]}${useSecond ? ' (2nd nearest)' : ''}`);
        total += pick.d;
        cur = pick.j;
        route.push(cur);
        left.delete(cur);
      }
      const back = D[cur][s];
      total += back;
      route.push(s);
      steps.push(`Return ${names[cur]} → ${names[s]}: ${fmt(back)}`);
      return {
        rows: [
          { label: 'Route', tex: '', plain: route.map((i) => names[i]).join(' → ') },
          { label: 'Total distance', tex: fmt(total, 6), main: true }
        ],
        steps
      };
    }
  },

  savings: {
    id: 'savings',
    inputs: [
      area('d', 'Distance matrix including the depot (first row/column = depot)', '- 14 21 20 6 24 9\n14 - 10 9 9 10 11\n21 10 - 1 15 9 21\n20 9 1 - 14 9 20\n6 9 15 14 - 19 9\n24 10 9 9 19 - 21\n9 11 21 20 9 21 -', undefined, 8),
      { key: 'names', label: 'Names (depot first)', type: 'text' as const, def: 'A B C D E F G' },
      { key: 'q', label: 'Demand per stop (skip the depot)', type: 'text' as const, def: '5000 7000 10000 4000 6000 10000' },
      nIn('cap', 'Truck capacity', '25000')
    ],
    compute: (v) => {
      const D = parseMatrix(v.d);
      const n = D.length;
      if (n < 3 || D.some((r) => r.length !== n)) return fail('The matrix must be square.');
      const names = parseNames(v.names, n);
      const q = [0, ...parseRow(v.q)];
      const cap = num(v.cap);
      if (q.length !== n || !need(cap)) return fail('Give one demand per stop and a capacity.');
      const sav: { i: number; j: number; s: number }[] = [];
      for (let i = 1; i < n; i++) for (let j = i + 1; j < n; j++) sav.push({ i, j, s: D[0][i] + D[0][j] - D[i][j] });
      sav.sort((a, b) => b.s - a.s);
      // each stop starts on its own route; merge route ends in savings order
      const routeOf = new Map<number, number[]>();
      for (let i = 1; i < n; i++) routeOf.set(i, [i]);
      const load = (r: number[]) => r.reduce((s, k) => s + q[k], 0);
      const steps: string[] = [`Savings $s_{ij} = d_{0i} + d_{0j} - d_{ij}$, ranked: ${sav.slice(0, 8).map((x) => `${names[x.i]}${names[x.j]} ${fmt(x.s)}`).join(', ')}…`];
      for (const { i, j, s } of sav) {
        const ri = routeOf.get(i)!;
        const rj = routeOf.get(j)!;
        if (ri === rj || s <= 0) continue;
        const iEnd = ri[0] === i || ri[ri.length - 1] === i;
        const jEnd = rj[0] === j || rj[rj.length - 1] === j;
        if (!iEnd || !jEnd || load(ri) + load(rj) > cap) continue;
        const a = ri[ri.length - 1] === i ? ri : [...ri].reverse();
        const b = rj[0] === j ? rj : [...rj].reverse();
        const merged = [...a, ...b];
        for (const k of merged) routeOf.set(k, merged);
        steps.push(`Link ${names[i]}–${names[j]} (saving ${fmt(s)}): ${merged.map((k) => names[k]).join('-')} carries ${fmt(load(merged), 6)}`);
      }
      const routes = [...new Set(routeOf.values())];
      const dist = (r: number[]) => D[0][r[0]] + r.slice(1).reduce((s, k, idx) => s + D[r[idx]][k], 0) + D[r[r.length - 1]][0];
      const total = routes.reduce((s, r) => s + dist(r), 0);
      return {
        rows: [
          ...routes.map((r, k) => ({ label: `Route ${k + 1}`, tex: '', plain: `${names[0]}-${r.map((x) => names[x]).join('-')}-${names[0]} · load ${fmt(load(r), 6)} · ${fmt(dist(r))}` })),
          { label: 'Total distance', tex: fmt(total, 6), main: true }
        ],
        steps
      };
    }
  },

  eoq: {
    id: 'eoq',
    inputs: [nIn('D', 'Annual demand D', '10000'), nIn('PC', 'Ordering cost per order PC', '5.5', '$'), nIn('CC', 'Carrying cost per unit per year CC', '0.4', '$'), nIn('Q0', 'Current order size (optional)', '400')],
    compute: (v) => {
      const D = num(v.D);
      const PC = num(v.PC);
      const CC = num(v.CC);
      if (!need(D, PC, CC) || CC <= 0) return fail('Need D, PC and CC > 0.');
      const Q = Math.sqrt((2 * D * PC) / CC);
      const tc = (q: number) => (q / 2) * CC + (D / q) * PC;
      const rows: CalcRow[] = [
        { label: 'EOQ', tex: fmt(Q), main: true },
        { label: 'Orders per year', tex: fmt(D / Q) },
        { label: 'TC at EOQ', tex: `\\$${fmt(tc(Q))}` }
      ];
      const steps = [`$EOQ = \\sqrt{\\frac{2D\\,PC}{CC}} = \\sqrt{\\frac{2(${fmt(D, 6)})(${fmt(PC)})}{${fmt(CC)}}} = ${fmt(Q)}$`, `$TC = \\frac{Q}{2}CC + \\frac{D}{Q}PC = ${fmt(tc(Q))}$ (the two terms are equal at the EOQ)`];
      const Q0 = num(v.Q0);
      if (need(Q0) && Q0 > 0) {
        rows.push({ label: `TC at Q = ${fmt(Q0)}`, tex: `\\$${fmt(tc(Q0))}` });
        steps.push(`Current: $\\frac{${fmt(Q0)}}{2}(${fmt(CC)}) + \\frac{${fmt(D, 6)}}{${fmt(Q0)}}(${fmt(PC)}) = ${fmt(tc(Q0))}$, saving ${fmt(tc(Q0) - tc(Q))} per year`);
      }
      return { rows, steps };
    }
  },

  forecast: {
    id: 'forecast',
    inputs: [
      { key: 'series', label: 'Demand history (oldest first)', type: 'text' as const, def: '600 650 700 620 680' },
      nIn('n', 'Moving-average periods n', '3'),
      nIn('alpha', 'Smoothing constant α', '0.4'),
      nIn('F0', 'First forecast (EWMA start)', '600')
    ],
    compute: (v) => {
      const x = parseRow(v.series).filter((t) => need(t));
      const n = Math.round(num(v.n));
      const a = num(v.alpha);
      if (x.length < 2) return fail('Enter at least two values.');
      const rows: CalcRow[] = [];
      const steps: string[] = [];
      if (need(n) && n >= 1 && n <= x.length) {
        const ma = x.slice(-n).reduce((s, t) => s + t, 0) / n;
        rows.push({ label: `${n}-period moving average`, tex: fmt(ma), main: true });
        steps.push(`$MA = \\frac{${x.slice(-n).map((t) => fmt(t)).join('+')}}{${n}} = ${fmt(ma)}$`);
      }
      if (need(a) && a > 0 && a < 1) {
        let F = need(num(v.F0)) ? num(v.F0) : x[0];
        const trail: string[] = [];
        for (const t of x) {
          const nf = F + a * (t - F);
          trail.push(`${fmt(F)}+${fmt(a)}(${fmt(t)}-${fmt(F)})=${fmt(nf)}`);
          F = nf;
        }
        rows.push({ label: 'EWMA next forecast', tex: fmt(F) });
        steps.push(`$F_{t+1} = F_t + \\alpha(X_t - F_t)$: ${trail.join('; ')}`);
      }
      const m = x.length;
      const ts = x.map((_, i) => i + 1);
      const tb = (m + 1) / 2;
      const xb = x.reduce((s, t) => s + t, 0) / m;
      const b = ts.reduce((s, t, i) => s + (t - tb) * (x[i] - xb), 0) / ts.reduce((s, t) => s + (t - tb) ** 2, 0);
      const A = xb - b * tb;
      rows.push({ label: 'Regression x = a + bt', tex: `${fmt(A)} + ${fmt(b)}t` });
      rows.push({ label: `Regression forecast t = ${m + 1}`, tex: fmt(A + b * (m + 1)) });
      steps.push(`Least squares: $b = ${fmt(b)}$, $a = \\bar x - b\\bar t = ${fmt(A)}$`);
      return { rows, steps };
    }
  }
};

export type { CalcResult };
