// Grading for typed answers. Numbers accept 2.5e-3, 2.5×10⁻³, 2,500 and a trailing unit; output is compared
// with whitespace collapsed; indices accept [1 -1 0], (1 1̄ 0) or 1-10.
import type { LearnQuestion } from '../model';
import type { Answer } from '../progress/store';

const SUPERS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
export const parseUserNumber = (raw: string): number => {
  let s = raw.trim().toLowerCase().replace(/[−–]/g, '-').replace(/,(?=\d{3}\b)/g, '').replace(/\s+/g, '').replace(/%$/, '');
  s = s.replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => String(SUPERS.indexOf(c)));
  s = s.replace(/^\$/, '').replace(/(?:x|×|\*)10\^?\(?(-?\d+)\)?/, 'e$1');
  const m = s.match(/^-?\d*\.?\d+(?:e-?\d+)?/);
  return m ? Number(m[0]) : NaN;
};

export const parseIndices = (raw: string): number[] => {
  const s = raw.replace(/[[\]()<>{}]/g, ' ').replace(/[−–]/g, '-').replace(/(\d)\u0304/g, '-$1').trim();
  if (/[\s,]/.test(s)) return s.split(/[\s,]+/).filter(Boolean).map(Number);
  const out: number[] = [];
  let neg = false;
  for (const ch of s) {
    if (ch === '-') neg = true;
    else if (/\d/.test(ch)) {
      out.push(neg ? -Number(ch) : Number(ch));
      neg = false;
    }
  }
  return out;
};

export const normOutput = (s: string) => s.replace(/\r/g, '').replace(/\n/g, '\n').replace(/\s+/g, ' ').trim().toLowerCase();

// null = cannot be graded automatically (self-marked)
export function grade(q: LearnQuestion, a: Answer | undefined): boolean | null {
  if (a === undefined) return false;
  switch (q.kind) {
    case 'mc':
    case 'tf':
      return Array.isArray(a) && a.length === 1 && q.correct.includes(a[0]);
    case 'multi':
      return Array.isArray(a) && a.length === q.correct.length && q.correct.every((c) => a.includes(c));
    case 'num': {
      const x = parseUserNumber(String(a));
      const v = q.value!;
      if (!Number.isFinite(x)) return false;
      return v === 0 ? Math.abs(x) < 1e-9 : Math.abs(x - v) <= Math.abs(v) * (q.tol ?? 0.02);
    }
    case 'indices': {
      const u = parseIndices(String(a));
      const c = q.ints!;
      const same = (xs: number[]) => xs.length === c.length && xs.every((x, i) => x === c[i]);
      return same(u) || (!!q.anySign && same(u.map((x) => -x)));
    }
    case 'text':
      return normOutput(String(a)) === normOutput(q.answerText);
    case 'self':
      return a === 'self:right' ? true : a === 'self:wrong' ? false : null;
  }
}

export const isAnswered = (q: LearnQuestion, a: Answer | undefined) =>
  a !== undefined && (Array.isArray(a) ? a.length > 0 : String(a).trim().length > 0);
