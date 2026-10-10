import type { Question } from './vaultTypes';
import type { DrillItem } from './drill';

export interface SyntheticOptionDef {
  opts: string[];
  correctIndex: number;
}

/**
 * Verified multiple-choice options (with accurate pedagogical distractors) for past exam
 * questions that were originally authored as open or numerical questions.
 */
export const QUESTION_OPTIONS_MAP: Record<string, SyntheticOptionDef> = {
  // ── ENGR 213 (Applied Ordinary Differential Equations) ──────────────────────────
  'W17-2': {
    opts: [
      'It satisfies the ODE; the largest interval of existence is $(-\\infty, \\infty)$',
      'It satisfies the ODE; the largest interval of existence is $(-3, \\infty)$',
      'It does not satisfy the ODE because $y(-3) \\neq 15$',
      'It satisfies the ODE; the largest interval of existence is $(0, \\infty)$'
    ],
    correctIndex: 0
  },
  'F18-1': {
    opts: [
      '$y = 1 + x^3$',
      '$y = 2(1 + x^3)^2$',
      '$y = \\ln|1 + x^3| + 2$',
      '$y = \\sqrt{1 + 3x^2}$'
    ],
    correctIndex: 0
  },
  'F18-2': {
    opts: [
      '$y = \\left(-\\tfrac12 + Ce^{3x^2}\\right)^{-1/3}$',
      '$y = \\left(1 + Ce^{-3x^2}\\right)^{1/3}$',
      '$y = Ce^{-x^2} - \\tfrac12$',
      '$y = \\left(-\\tfrac12 + Ce^{-3x^2}\\right)^{-3}$'
    ],
    correctIndex: 0
  },
  'F18-3': {
    opts: [
      '$x^4 + x^3 + 3xy + y^2 + y = C$',
      '$x^4 + x^3 + y^2 = C$',
      '$4x^3 + 3xy + 2y^2 + y = C$',
      '$x^4 + 3x^2y + y^2 + y = C$'
    ],
    correctIndex: 0
  },
  'F18-4': {
    opts: [
      '$y = \\sqrt[3]{\\dfrac{x^3 + x}{2}}$',
      '$y = \\sqrt[3]{x^3 - 1}$',
      '$y = \\dfrac{x^3 + 1}{2}$',
      '$y = \\sqrt{\\dfrac{x^3 + x}{2}}$'
    ],
    correctIndex: 0
  },
  'F18-5': {
    opts: ['27 times initial', '9 times initial', '12 times initial', '81 times initial'],
    correctIndex: 0
  },
  'W17-3': {
    opts: [
      '$y(x) = 3$ for all $x$ (an equilibrium constant solution)',
      '$y(x) = 1$ for all $x$',
      '$y(x) = \\dfrac{3e^{2x} - 1}{e^{2x} + 1}$',
      'No solution exists due to non-uniqueness'
    ],
    correctIndex: 0
  },
  'W17-4': {
    opts: [
      '$y = \\sqrt{\\dfrac{4 - \\sin^2x}{1 - x^2}}$',
      '$y = \\sqrt{\\dfrac{4 + \\cos^2x}{1 - x^2}}$',
      '$y = \\dfrac{2 - \\sin x}{\\sqrt{1 - x^2}}$',
      '$y = \\sqrt{4 - \\sin^2x}$'
    ],
    correctIndex: 0
  },
  'W17-5': {
    opts: [
      '$x^{-3} = y + \\tfrac13 + Ce^{3y}$',
      '$x^3 = y - \\tfrac13 + Ce^{-3y}$',
      '$x^{-3} = y - 1 + Ce^{3y}$',
      '$x^{-2} = 2y + Ce^{3y}$'
    ],
    correctIndex: 0
  },
  'W25T-5a': {
    opts: [
      '$y = -\\tfrac13\\cos(3x) + C$',
      '$y = 3\\cos(3x) + C$',
      '$y = \\tfrac13\\cos(3x) + C$',
      '$y = -\\cos(3x) + C$'
    ],
    correctIndex: 0
  },
  'W25T-5b': {
    opts: [
      '$y = \\dfrac{x^5}{8} + \\dfrac{C}{x^3}$',
      '$y = \\dfrac{x^2}{5} + Cx^3$',
      '$y = \\dfrac{x^5}{8} + Cx^3$',
      '$y = x^2 + \\dfrac{C}{x}$'
    ],
    correctIndex: 0
  },
  'W25T-6': {
    opts: [
      '(a) $3 + 7i$; (b) $\\tfrac65 - \\tfrac{13}{5}i$, modulus $\\sqrt{41/5}$',
      '(a) $3 - 7i$; (b) $\\tfrac65 + \\tfrac{13}{5}i$, modulus $\\sqrt{41/5}$',
      '(a) $7 + 3i$; (b) $\\tfrac56 - \\tfrac{13}{6}i$, modulus $\\sqrt{41/6}$',
      '(a) $3 + 7i$; (b) $6 - 13i$, modulus $\\sqrt{205}$'
    ],
    correctIndex: 0
  },
  'W25T-7': {
    opts: [
      '$6y^2 + 10ty + 3t^2 - 10t = 13$',
      '$6y^2 + 5ty + 3t^2 = 13$',
      '$12y^2 + 10ty + 6t^2 - 10t = 26$',
      '$6y^2 + 10ty - 10t = 0$'
    ],
    correctIndex: 0
  },
  'W25T-8': {
    opts: ['2481', '1250', '3120', '2000'],
    correctIndex: 0
  },
  'W25T-9': {
    opts: ['1.59 hours', '2.45 hours', '0.85 hours', '3.12 hours'],
    correctIndex: 0
  },
  'W25Q-1': {
    opts: [
      '$y = \\sqrt{4 + 8x - \\tfrac23x^3}$',
      '$y = \\sqrt{4 - 8x + \\tfrac23x^3}$',
      '$y = 2 + 4x - \\tfrac13x^3$',
      '$y = \\sqrt{8x - \\tfrac23x^3}$'
    ],
    correctIndex: 0
  },
  'W25Q-2': {
    opts: ['3.30 minutes', '2.15 minutes', '4.80 minutes', '5.00 minutes'],
    correctIndex: 0
  },
  'S21-4': {
    opts: [
      '$x = 1 + 6e^{t^2/2}$',
      '$x = 1 + 6e^{t^2}$',
      '$x = 7e^{t^2/2}$',
      '$x = 6e^{t^2/2} - 1$'
    ],
    correctIndex: 0
  },
  'S21-6': {
    opts: ['5', '3', '-5', '10'],
    correctIndex: 0
  },
  'S21-7': {
    opts: [
      '$y = \\left(x + \\tfrac14 + Ce^{4x}\\right)^{-1/4}$',
      '$y = \\left(x - \\tfrac14 + Ce^{-4x}\\right)^{1/4}$',
      '$y = \\left(x + \\tfrac14 + Ce^{-4x}\\right)^{-4}$',
      '$y = x + \\tfrac14 + Ce^{4x}$'
    ],
    correctIndex: 0
  },
  'S21-8': {
    opts: ['53199', '45200', '62150', '38400'],
    correctIndex: 0
  },
  'F21-6': {
    opts: [
      'Yes, it is exact: $y\\sin^2x - xy + 2e^{xy^2} = C$',
      'No, the ODE fails the exactness condition',
      'Yes, it is exact: $y\\sin x - xy + e^{xy^2} = C$',
      'Yes, it is exact: $y^2\\sin^2x - 2xy = C$'
    ],
    correctIndex: 0
  },
  'OQ-1': {
    opts: [
      '$\\ln|y - x| + \\dfrac{x}{y - x} = C$',
      '$\\ln|y + x| - \\dfrac{x}{y + x} = C$',
      '$\\ln|y - x| = Cx$',
      '$\\dfrac{y}{y - x} = C$'
    ],
    correctIndex: 0
  },
  'OQ-2': {
    opts: [
      '$y = \\dfrac{1}{Ce^{-x} - \\tfrac12e^x}$',
      '$y = \\dfrac{1}{Ce^x + \\tfrac12e^{-x}}$',
      '$y = Ce^{-x} - \\tfrac12e^x$',
      '$y = \\dfrac{1}{Ce^{-x} - e^x}$'
    ],
    correctIndex: 0
  },
  'OQ-3': {
    opts: [
      '$y\\ln x + \\dfrac{y^4}{4} = 4$',
      '$y^2\\ln x + y^4 = 16$',
      '$y\\ln x + y^3 = 4$',
      '$\\ln(xy) + \\dfrac{y^4}{4} = 4$'
    ],
    correctIndex: 0
  },
  'OQ-4': {
    opts: [
      '$y = \\dfrac{1}{e^x + Ce^{2x}}$',
      '$y = \\dfrac{1}{e^{-x} + Ce^{-2x}}$',
      '$y = e^x + Ce^{2x}$',
      '$y = \\dfrac{1}{e^{2x} + C}$'
    ],
    correctIndex: 0
  },
  'OQ-5': {
    opts: [
      '$y = \\dfrac{5 - \\cos 2x}{2\\sin x}$',
      '$y = \\dfrac{5 + \\cos 2x}{2\\sin x}$',
      '$y = \\dfrac{5 - \\sin 2x}{2\\cos x}$',
      '$y = \\dfrac{5 - \\cos 2x}{\\sin x}$'
    ],
    correctIndex: 0
  },
  'OQ-6': {
    opts: [
      '$y = \\tfrac12(x^2 - 1) + \\tfrac32e^{-x^2}$',
      '$y = \\tfrac12(x^2 + 1) + \\tfrac32e^{x^2}$',
      '$y = (x^2 - 1) + 3e^{-x^2}$',
      '$y = \\tfrac12x^2 + \\tfrac32e^{-x^2}$'
    ],
    correctIndex: 0
  },
  'OQ-7': {
    opts: [
      '$x\\sin y + y\\cos x - \\tfrac12y^2 = C$',
      '$x\\cos y - y\\sin x = C$',
      '$x\\sin y + y\\cos x + y^2 = C$',
      '$x^2\\sin y + y^2\\cos x = C$'
    ],
    correctIndex: 0
  },
  'OQ-8': {
    opts: [
      '$y = Ke^{-\\sin x}$',
      '$y = Ke^{\\sin x}$',
      '$y = -\\sin x + K$',
      '$y = Ke^{-\\cos x}$'
    ],
    correctIndex: 0
  },
  'OQ-9': {
    opts: ['88.53 °C', '75.20 °C', '94.10 °C', '68.45 °C'],
    correctIndex: 0
  },
  'OQ-10': {
    opts: ['22.49 minutes', '18.30 minutes', '27.50 minutes', '31.00 minutes'],
    correctIndex: 0
  },
  'OQ-11': {
    opts: ['10761', '8500', '12400', '9950'],
    correctIndex: 0
  },
  'OQ-12': {
    opts: [
      '$y = \\tfrac12\\ln\\!\\left((x - 3)^2 + 9\\right)$',
      '$y = \\ln\\!\\left((x - 3)^2 + 9\\right)$',
      '$y = \\tfrac12\\ln(x - 3) + 3$',
      '$y = \\ln((x - 3)^2) + 9$'
    ],
    correctIndex: 0
  },
  'OQ-14': {
    opts: ['0.6931', '0.5000', '1.0000', '1.3862'],
    correctIndex: 0
  },
  'OQ-15': {
    opts: ['-0.6', '0.6', '-1.2', '0.3'],
    correctIndex: 0
  },

  // ── INDU 211 (Production & Manufacturing Systems) ──────────────────────────────
  'M20-10': {
    opts: ['91', '84', '98', '105'],
    correctIndex: 0
  },
  'M20-11': {
    opts: ['89', '82', '95', '101'],
    correctIndex: 0
  },
  'M20-14': {
    opts: ['120 units', '100 units', '140 units', '150 units'],
    correctIndex: 0
  },
  'M20-15': {
    opts: ['$2.43\\times10^{18}$', '$1.20\\times10^{15}$', '$3.65\\times10^{19}$', '$5.10\\times10^{16}$'],
    correctIndex: 0
  },
  'M20-16': {
    opts: [
      'Proximity to demand, transportation access, labor availability, operating costs',
      'Weather forecast predictability, CEO personal preference only',
      'Stock market index trends, general currency fluctuations',
      'Social media follower engagement, regional tourism counts'
    ],
    correctIndex: 0
  },
  'S19-3': {
    opts: ['$1280', '$1150', '$1390', '$1420'],
    correctIndex: 0
  },

  // ── MIAE 215 (Programming for Engineers C++) ──────────────────────────────────
  'M24-1a': {
    opts: ['3', '2', '4', '3.5'],
    correctIndex: 0
  },
  'M24-1b': {
    opts: ['7.5625', '7.5', '8.0', '5.0625'],
    correctIndex: 0
  },
  'M24-1c': {
    opts: ['2 6 10', '2 4 6 8 10', '0 4 8', '2 8 14'],
    correctIndex: 0
  },
  'M24-2c': {
    opts: ['The final answer is: 12', 'The final answer is: 10', 'The final answer is: 15', 'The final answer is: 8'],
    correctIndex: 0
  },
  'M24-3a': {
    opts: ['count = 3', 'count = 2', 'count = 4', 'count = 0'],
    correctIndex: 0
  },
  'M24-3b': {
    opts: ['2 4 8 10 14 16 20', '2 4 6 8 10 12', '4 8 12 16 20', '2 6 10 14 18'],
    correctIndex: 0
  },
  'M24-3c': {
    opts: [
      'x = 20.25; y = 64; z = 0.25; q = 20',
      'x = 20; y = 64; z = 0; q = 20',
      'x = 20.25; y = 32; z = 0.5; q = 10',
      'x = 16; y = 64; z = 0.25; q = 25'
    ],
    correctIndex: 0
  },
  'F23-2a': {
    opts: ['1 8; 2 14; 3 19; 29 19 26', '1 8; 2 12; 3 16; 28 18 24', '8 14 19 26', '1 8; 2 14; 3 20; 30 20 26'],
    correctIndex: 0
  },
  'F23-2b': {
    opts: ['8, -2, 7, -3 (printed in order)', '-2, -3, 7, 8', '8, 7, -2, -3', '0, 8, -2, 7'],
    correctIndex: 0
  },
  'R21-1': {
    opts: [
      'Two input loops, single mismatch break flag, O(n) linear scan',
      'Nested O(n^2) brute force loops without early exit',
      'Recursive function call without a terminating base case',
      'Direct pointer arithmetic without array bounds checking'
    ],
    correctIndex: 0
  },
  'R21-2a': {
    opts: [
      '-4 0 / -3 2 / -3 -103 -106 -116',
      '-4 0 / -3 2 / 0 0 0',
      '4 0 / 3 2 / 3 103 106 116',
      '-4 -3 -103 -106'
    ],
    correctIndex: 0
  },
  'R21-2b': {
    opts: [
      '"toarnagneg", then undefined garbage memory (unterminated string)',
      '"toarnagneg" safely terminated with null character',
      'Compile error on array bounds during compilation',
      'Segmentation fault occurs immediately before any output'
    ],
    correctIndex: 0
  },
  'R21-2c': {
    opts: ['2 / 3 * 2 * 1 != 12', '2 / 3 * 2 * 1 == 6', '4 / 4 * 3 * 2 != 12', '0 / Output undefined'],
    correctIndex: 0
  },
  'R25-1': {
    opts: [
      'Two input loops, single mismatch break flag, O(n) linear scan',
      'Nested O(n^2) brute force loops without early exit',
      'Recursive function call without a terminating base case',
      'Direct pointer arithmetic without array bounds checking'
    ],
    correctIndex: 0
  },
  'R25-2': {
    opts: ['2 / 3 * 2 * 1 != 12', '2 / 3 * 2 * 1 == 6', '4 / 4 * 3 * 2 != 12', '0 / Output undefined'],
    correctIndex: 0
  },
  'Q2-1': {
    opts: [
      'Input validation loop, two array loops, switch/case menu handler',
      'Global goto statements without loop structure',
      'Single linear block without validation',
      'Infinite recursion without base condition'
    ],
    correctIndex: 0
  },

  // ── MIAE 221 (Materials Science) ───────────────────────────────────────────────
  'PPS1-1': {
    opts: [
      'Interatomic potential energy curves and equilibrium bond separation $r_0$',
      'Electron configuration shielding factor and Slater rules',
      'Bragg diffraction angles and planar reflections only',
      'Binary phase diagram liquidus line slope'
    ],
    correctIndex: 0
  },
  'PPS1-2': {
    opts: [
      'Ionic bonding force balance: $F_{net} = F_A + F_R = 0$ at $r = r_0$',
      'Covalent hybridization tetrahedral bond angle of 109.5°',
      'Metallic free electron gas Fermi pressure equilibrium',
      'Van der Waals fluctuating dipole induced torque'
    ],
    correctIndex: 0
  },
  'PPS1-3': {
    opts: [
      '$r_0 = 0.279$ nm, $E_0 = -4.58$ eV',
      '$r_0 = 0.540$ nm, $E_0 = -2.15$ eV',
      '$r_0 = 0.125$ nm, $E_0 = -8.20$ eV',
      '$r_0 = 0.350$ nm, $E_0 = -1.20$ eV'
    ],
    correctIndex: 0
  },
  'PPS1-4': {
    opts: [
      '$F_A = 2.05\\times10^{-10}$ N; $F_R = -F_A$',
      '$F_A = 1.05\\times10^{-9}$ N; $F_R = -2F_A$',
      '$F_A = 4.10\\times10^{-10}$ N; $F_R = 0$',
      '$F_A = 3.50\\times10^{-8}$ N; $F_R = -F_A$'
    ],
    correctIndex: 0
  },
  'PPS1-5': {
    opts: [
      '$1.82\\times10^{21}$ atoms; $1.08\\times10^{28}$ atoms (metric ton)',
      '$3.64\\times10^{20}$ atoms; $2.16\\times10^{27}$ atoms',
      '$6.02\\times10^{23}$ atoms; $1.08\\times10^{26}$ atoms',
      '$9.10\\times10^{21}$ atoms; $5.40\\times10^{28}$ atoms'
    ],
    correctIndex: 0
  }
};

/**
 * Shuffles options so the correct answer never sits in a fixed position.
 */
export function shuffleSynthesizedOptions(opts: string[], correctIndex: number): { opts: string[]; correctLetter: string } {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const items = opts.map((opt, idx) => ({ opt, isCorrect: idx === correctIndex }));

  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  const finalOpts = items.map((x) => x.opt);
  const correctIdx = items.findIndex((x) => x.isCorrect);
  const correctLetter = letters[correctIdx >= 0 ? correctIdx : 0];

  return { opts: finalOpts, correctLetter };
}

/**
 * Generates synthetic numeric choices for calculators or numerical quiz items.
 */
export function generateNumericChoices(value: number, unit?: string): { opts: string[]; correctLetter: string } {
  const format = (v: number) => {
    if (Math.abs(v) >= 100) return String(Math.round(v));
    if (Math.abs(v) >= 1) return String(Number(v.toFixed(2)));
    if (v !== 0 && (Math.abs(v) < 1e-3 || Math.abs(v) >= 1e6)) {
      return v.toExponential(2);
    }
    return String(Number(v.toPrecision(4)));
  };

  const u = unit ? ` ${unit}` : '';
  const d0 = format(value) + u;
  const d1 = format(value * 2) + u;
  const d2 = format(value * 0.5) + u;
  const d3 = format(value * 1.5) + u;

  const rawOpts = [d0, d1, d2, d3];
  return shuffleSynthesizedOptions(rawOpts, 0);
}
