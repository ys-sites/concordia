// Drill engine: turns exam questions and lesson practice items into checkable drill items,
// grades answers, generates "new numbers" variants, and keeps per-course progress.
import type { GateContent, Question, QuizItem, VarySpec, DrillTarget, Formula } from './vaultTypes';
import { CALCULATORS, defaultsFor } from './calculators';
import type { GateIndex } from './shared';
import { repeatTypeOf } from './shared';

export type DrillKind = 'mc' | 'multi' | 'tf' | 'num' | 'indices' | 'output' | 'open';

export interface DrillItem {
  key: string;
  label: string;
  badge: string;
  topic?: string;
  prompt: string;
  code?: string;
  solution?: string;
  kind: DrillKind;
  opts?: string[];
  correct: string[];
  value?: number;
  tol?: number;
  unit?: string;
  ints?: number[];
  anySign?: boolean;
  answerText: string;
  note?: string;
  steps?: string[];
  hint?: string;
  qid?: string;
  // lesson practice items: the lesson they come from and an explicit source line
  lesson?: string;
  src?: string;
  regen?: () => DrillItem | null;
}

const letter = (i: number) => String.fromCharCode(97 + i);

// ── exam question → drill item ──────────────────────────────────────────────────
export const isDrillable = (q: Question) => q.drill !== false;

export const fromQuestion = (q: Question, idx: GateIndex, label?: string): DrillItem => {
  const exam = idx.exam.get(q.exam);
  const base = {
    key: q.id,
    label: label ?? `${exam?.short ?? q.exam} ${q.kind === 'tf' ? 'T/F ' : 'Q'}${q.n}`,
    badge: exam?.kind === 'homework' ? 'homework' : 'exam',
    topic: q.topic,
    prompt: q.q,
    code: q.code,
    solution: q.solution,
    note: q.note,
    steps: q.steps,
    qid: q.id
  };
  if (q.kind === 'tf') {
    const ans = /^t/i.test(q.ans) ? 'True' : 'False';
    return { ...base, kind: 'tf', correct: [ans], answerText: ans };
  }
  if (q.opts && q.opts.length) {
    const letters = q.ans.split(/[\s,]+/).filter(Boolean).map((s) => s.toLowerCase());
    const multi = q.kind === 'multi';
    return {
      ...base,
      kind: multi ? 'multi' : 'mc',
      opts: q.opts,
      correct: letters,
      answerText: letters.map((l) => `(${l}) ${q.opts![l.charCodeAt(0) - 97] ?? ''}`).join('; ')
    };
  }
  if (q.kind === 'num') {
    const value = Number(q.ans);
    return { ...base, kind: 'num', value, tol: q.tol ?? 0.02, unit: q.unit, correct: [q.ans], answerText: `${q.ans}${q.unit ? ' ' + q.unit : ''}` };
  }
  if (q.kind === 'output') return { ...base, kind: 'output', correct: [q.ans], answerText: q.ans };
  return { ...base, kind: 'open', correct: [], answerText: q.ans };
};

// ── lesson quiz item → drill item ───────────────────────────────────────────────
const SUP: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
export const showNum = (v: string | number): string => {
  if (typeof v === 'string') return v;
  if (v !== 0 && (Math.abs(v) < 1e-3 || Math.abs(v) >= 1e6)) {
    const e = Math.floor(Math.log10(Math.abs(v)));
    const m = Number((v / 10 ** e).toPrecision(3));
    return `${m}×10${String(e).split('').map((c) => SUP[c]).join('')}`;
  }
  return String(Number(v.toPrecision(6)));
};

const rand = (min: number, max: number, dp: number) => Number((min + Math.random() * (max - min)).toFixed(dp));

const varyValues = (values: Record<string, string | number>, vary?: VarySpec[]) => {
  const out: Record<string, string | number> = { ...values };
  for (const v of vary ?? []) {
    if ('keys' in v) {
      const pick = v.pick[Math.floor(Math.random() * v.pick.length)];
      v.keys.forEach((k, i) => (out[k] = pick[i]));
    } else if ('pick' in v) out[v.key] = v.pick[Math.floor(Math.random() * v.pick.length)];
    else out[v.key] = Number((rand(v.min, v.max, v.dp) * (v.mul ?? 1)).toPrecision(6));
  }
  return out;
};

// Number shown in a calculator row's TeX: "2.051\times10^{-10}\ \text{N}" → 2.051e-10
export const texNumber = (tex: string): number => {
  const t = tex.replace(/\\\$/g, '').replace(/\{,\}/g, '').trim();
  const m = t.match(/^(-?\d+(?:\.\d+)?)(?:\\times10\^\{(-?\d+)\})?/);
  return m ? Number(m[1]) * 10 ** Number(m[2] ?? 0) : NaN;
};
// "[\bar{2}\,2\,1]" → [-2, 2, 1]
export const texIndices = (tex: string): number[] =>
  [...tex.matchAll(/\\bar\{(\d+)\}|(\d+)/g)].map((m) => (m[1] ? -Number(m[1]) : Number(m[2])));

const fill = (q: string, values: Record<string, string | number>) => q.replace(/\{(\w+)\}/g, (m, k) => (k in values ? showNum(values[k]) : m));

const fromCalc = (item: Extract<QuizItem, { type: 'calc' }>, key: string, label: string, topic: string, first: boolean, lesson?: string): DrillItem | null => {
  const calc = CALCULATORS[item.calc];
  if (!calc) return null;
  for (let attempt = 0; attempt < 12; attempt++) {
    const values = first && attempt === 0 ? { ...item.values } : varyValues(item.values, item.vary);
    const v = defaultsFor(calc);
    for (const [k, x] of Object.entries(values)) v[k] = String(x);
    const r = calc.compute(v);
    if (r.error) continue;
    const row = r.rows.find((x) => x.label === item.row) ?? r.rows.find((x) => x.label.startsWith(item.row));
    if (!row) continue;
    const regen = item.vary?.length ? () => fromCalc(item, key, label, topic, false, lesson) : undefined;
    const common = { key, label, badge: item.badge, topic, lesson, src: item.src, prompt: fill(item.q, values), code: item.code, steps: r.steps, hint: item.hint, regen };
    if (/^\[|^\(/.test(row.tex)) {
      const ints = texIndices(row.tex);
      return { ...common, kind: 'indices', ints, anySign: item.anySign, correct: [ints.join(' ')], answerText: `$${row.tex}$` };
    }
    const value = texNumber(row.tex);
    if (!Number.isFinite(value)) continue;
    return { ...common, kind: 'num', value, tol: item.tol ?? 0.02, unit: item.unit, correct: [String(value)], answerText: `$${row.tex}$` };
  }
  return null;
};

export const fromQuizItem = (item: QuizItem, f: Formula, i: number, idx: GateIndex): DrillItem | null => {
  const key = `L:${f.id}:${i}`;
  const label = `${f.name} · practice ${i + 1}`;
  if (item.type === 'exam') {
    const q = idx.q.get(item.id);
    return q ? fromQuestion(q, idx) : null;
  }
  if (item.type === 'calc') return fromCalc(item, key, label, f.topic, true, f.id);
  const common = { key, label, badge: item.badge, topic: f.topic, lesson: f.id, src: item.src };
  if (item.type === 'value')
    return { ...common, prompt: item.q, kind: 'num', value: item.answer, tol: item.tol ?? 0.02, unit: item.unit, correct: [String(item.answer)], answerText: `${showNum(item.answer)} ${item.unit}`, steps: item.steps };
  if (item.type === 'mc')
    return { ...common, prompt: item.q, code: item.code, kind: 'mc', opts: item.opts, correct: [item.ans], answerText: `(${item.ans}) ${item.opts[item.ans.charCodeAt(0) - 97]}`, note: item.why };
  if (item.type === 'tf') return { ...common, prompt: item.q, code: item.code, kind: 'tf', correct: [item.ans ? 'True' : 'False'], answerText: item.ans ? 'True' : 'False', note: item.why };
  if (item.type === 'output') return { ...common, prompt: item.q ?? 'What does this print?', code: item.code, kind: 'output', correct: [item.ans], answerText: item.ans, note: item.why };
  return { ...common, prompt: item.q, kind: 'open', correct: [], answerText: item.ans, steps: item.steps, solution: item.solution };
};

export const lessonItems = (f: Formula, idx: GateIndex) =>
  (f.learn?.quiz ?? []).map((it, i) => fromQuizItem(it, f, i, idx)).filter((x): x is DrillItem => !!x);

// ── grading ─────────────────────────────────────────────────────────────────────
const SUPERS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
export const parseUserNumber = (raw: string): number => {
  let s = raw.trim().toLowerCase().replace(/[−–]/g, '-').replace(/,(?=\d{3}\b)/g, '').replace(/\s+/g, '').replace(/%$/, '');
  s = s.replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => String(SUPERS.indexOf(c)));
  s = s.replace(/^\$/, '').replace(/(?:x|×|\*)10\^?\(?(-?\d+)\)?/, 'e$1');
  const m = s.match(/^-?\d*\.?\d+(?:e-?\d+)?/);
  return m ? Number(m[0]) : NaN;
};
const parseIndices = (raw: string): number[] => {
  const s = raw.replace(/[\[\]\(\)<>{}]/g, ' ').replace(/[−–]/g, '-').trim();
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
export const normOutput = (s: string) => s.replace(/\r/g, '').replace(/\\n/g, '\n').replace(/\s+/g, ' ').trim();

export const grade = (item: DrillItem, answer: string[]): boolean => {
  switch (item.kind) {
    case 'mc':
    case 'tf':
      return answer[0] === item.correct[0];
    case 'multi':
      return answer.length === item.correct.length && item.correct.every((c) => answer.includes(c));
    case 'num': {
      const x = parseUserNumber(answer[0] ?? '');
      const v = item.value!;
      if (!Number.isFinite(x)) return false;
      return v === 0 ? Math.abs(x) < 1e-9 : Math.abs(x - v) <= Math.abs(v) * (item.tol ?? 0.02);
    }
    case 'indices': {
      const u = parseIndices(answer[0] ?? '');
      const c = item.ints!;
      const same = (a: number[]) => a.length === c.length && a.every((x, i) => x === c[i]);
      return same(u) || (!!item.anySign && same(u.map((x) => -x)));
    }
    case 'output':
      return normOutput(answer[0] ?? '') === normOutput(item.correct[0]);
    default:
      return answer[0] === 'self-yes';
  }
};

// ── progress (per course, this browser only) ────────────────────────────────────
export type Stats = Record<string, { a: number; c: number; last: 0 | 1 }>;
const statsKey = (course: string) => `gate_stats_${course}`;
export const loadStats = (course: string): Stats => {
  try {
    return JSON.parse(localStorage.getItem(statsKey(course)) ?? '{}');
  } catch {
    return {};
  }
};
export const recordResult = (course: string, key: string, ok: boolean) => {
  const s = loadStats(course);
  const cur = s[key] ?? { a: 0, c: 0, last: 0 };
  s[key] = { a: cur.a + 1, c: cur.c + (ok ? 1 : 0), last: ok ? 1 : 0 };
  try {
    localStorage.setItem(statsKey(course), JSON.stringify(s));
  } catch {
    // progress just won't persist
  }
  window.dispatchEvent(new Event('gate-stats'));
};
export const mastery = (keys: string[], stats: Stats) => {
  const done = keys.filter((k) => stats[k]?.last === 1).length;
  const tried = keys.filter((k) => stats[k]).length;
  return { done, tried, total: keys.length };
};

// ── drill sets ──────────────────────────────────────────────────────────────────
const shuffle = <T,>(a: T[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

export const pastPaperQuestions = (c: GateContent, idx: GateIndex) => c.questions.filter((q) => idx.paperIds.includes(q.exam));

export const buildDrill = (target: DrillTarget, c: GateContent, idx: GateIndex, stats: Stats): DrillItem[] => {
  const papers = pastPaperQuestions(c, idx).filter(isDrillable);
  const toItems = (qs: Question[]) => qs.map((q) => fromQuestion(q, idx));
  const byMode = (qs: Question[], mode?: string) =>
    mode === 'repeats' ? qs.filter((q) => repeatTypeOf(q.id, idx)) : mode === 'oneoffs' ? qs.filter((q) => !repeatTypeOf(q.id, idx)) : qs;
  const lessonsFor = (topics: string[]) => c.formulas.filter((f) => topics.includes(f.topic)).flatMap((f) => lessonItems(f, idx).filter((it) => it.badge !== 'exam' && it.badge !== 'homework'));
  switch (target.scope) {
    case 'subject':
    case 'topic': {
      const topics = target.scope === 'subject' ? c.subjects.find((s) => s.id === target.id)?.topics ?? [] : [target.id];
      if (target.mode === 'practice') return shuffle(lessonsFor(topics));
      return toItems(byMode(papers.filter((q) => topics.includes(q.topic)), target.mode));
    }
    case 'cluster': {
      const cl = c.clusters.find((x) => x.id === target.id);
      return toItems((cl?.members ?? []).map((m) => idx.q.get(m)!).filter((q) => q && isDrillable(q)));
    }
    case 'repeats':
      return shuffle(toItems(papers.filter((q) => repeatTypeOf(q.id, idx))));
    case 'mock': {
      const rep = shuffle(papers.filter((q) => repeatTypeOf(q.id, idx)));
      const other = shuffle(papers.filter((q) => !repeatTypeOf(q.id, idx)));
      return shuffle(toItems([...rep.slice(0, 15), ...other.slice(0, 5)]));
    }
    case 'missed': {
      const missed = new Set(Object.entries(stats).filter(([, s]) => s.last === 0).map(([k]) => k));
      const exam = toItems(c.questions.filter((q) => missed.has(q.id) && isDrillable(q)));
      const lessons = c.formulas.flatMap((f) => lessonItems(f, idx)).filter((it) => missed.has(it.key) && !it.qid);
      return [...exam, ...lessons];
    }
    default:
      return toItems(papers);
  }
};

export { letter };
