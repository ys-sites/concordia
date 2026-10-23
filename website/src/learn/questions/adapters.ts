// Turn every question source into a LearnQuestion. Ids: b: bank · t: teacher paper · d: ENGR 213 method drill ·
// x:<COURSE>: past-exam question · l:<COURSE>:<lesson>:<i> lesson practice item · g:MIAE215:<paper>: Gordon paper.
import type { CourseId, PracticeQuestion } from '../../types';
import type { GateContent, Question as GateQuestion, QuizItem, Formula, GordonExamQuestion, GordonExamPaper, VarySpec } from '../../data/gates/types';
import type { LearnQuestion } from '../model';
import { examLabel } from '../examLabel';
import { CALCULATORS, defaultsFor } from '../../components/vault/calculators';
import { VAULT_WORKED_SOLUTIONS } from '../../components/vault/vaultWorkedSolutions';

const LETTERS = 'abcdefgh';
const letterIdx = (l: string) => LETTERS.indexOf(l.trim().toLowerCase());
const optLabel = (opts: string[], i: number) => `(${LETTERS[i]}) ${opts[i] ?? ''}`;

const LEVEL_OF: Record<string, 1 | 2 | 3> = { Foundation: 1, 'Midterm Level': 2, 'Exam Master': 3 };

// ── practice bank, teacher papers, ENGR 213 method drills (all PracticeQuestion) ──────────────
export function fromPractice(q: PracticeQuestion, prefix: 'b' | 't' | 'd', videoId?: string): LearnQuestion {
  const tf = q.options.length === 2 && /^true$/i.test(q.options[0].trim()) && /^false$/i.test(q.options[1].trim());
  const e = q.explanation;
  return {
    id: `${prefix}:${q.id}`,
    courseId: q.courseId,
    origin: prefix === 'b' ? 'bank' : prefix === 't' ? 'teacher' : 'drill',
    kind: tf ? 'tf' : 'mc',
    prompt: q.question,
    code: q.codeSnippet,
    formula: q.formula,
    figure: q.figure,
    options: q.options,
    correct: [q.correctIndex],
    keepOrder: q.keepOptionOrder || tf,
    answerText: tf ? q.options[q.correctIndex] : q.options[q.correctIndex],
    topic: q.topic,
    difficulty: q.difficulty,
    level: LEVEL_OF[q.difficulty] ?? (prefix === 't' ? 3 : 2),
    source: q.pastPaper ?? (q.source?.[0] ? `${q.source[0].deck.replace(/\.pdf$/i, '')} · ${q.source[0].location}` : undefined),
    pastPaper: !!q.pastPaper,
    explain: {
      concept: e.coreConcept,
      lines: e.stepByStep,
      steps: e.steps,
      answerTex: e.answer,
      whyWrong: e.whyWrong ? Object.fromEntries(Object.entries(e.whyWrong).map(([k, v]) => [Number(k), v ?? ''])) : undefined,
      trap: e.commonTrap,
      reference: e.reference
    },
    videoId,
    refs: (q.source ?? []).slice(0, 2).map((r) => ({ deck: r.deck, page: Number(r.location.match(/Pages?\s+(\d+)/i)?.[1]) || undefined, label: r.location })),
    raw: q
  };
}

// the teacher's slides behind a lesson: { d: doc key } or { l: lecture number } (see GateContent.lectureMatch)
const lecRefs = (g: GateContent, refs: { d?: string; l?: number; s?: number; label?: string }[] = []) =>
  refs
    .map((r) => {
      const path = r.d ? g.docs[r.d]?.path : r.l != null && g.lectureMatch ? Object.values(g.docs).find((d) => new RegExp(g.lectureMatch!.replace('{l}', String(r.l)), 'i').test(d.path.split('/').pop() ?? ''))?.path : undefined;
      if (path) return { path, page: r.s, label: r.label };
      return r.l != null ? { deck: `Lecture ${r.l}`, page: r.s, label: r.label } : null;
    })
    .filter((x): x is NonNullable<typeof x> => !!x)
    .slice(0, 2);

// ── past-exam questions ──────────────────────────────────────────────────────────
const workedFor = (id: string) => {
  const w = VAULT_WORKED_SOLUTIONS[id];
  if (!w) return {};
  return {
    steps: w.steps.map((s) => ({ title: s.title.replace(/^Step \d+:\s*/, ''), math: s.math, note: s.explanation })),
    answerTex: w.finalAnswer && !/[a-z]{4,}\s+[a-z]{3,}/i.test(w.finalAnswer) ? w.finalAnswer : undefined,
    note: w.tip
  };
};

export function fromGateExam(c: CourseId, g: GateContent, q: GateQuestion, videoId?: string): LearnQuestion {
  const exam = g.exams.find((e) => e.id === q.exam);
  const base = {
    id: `x:${c}:${q.id}`,
    courseId: c,
    origin: 'exam' as const,
    prompt: q.q,
    code: q.code,
    topic: g.topics.find((t) => t.id === q.topic)?.name ?? q.topic,
    level: 3 as const,
    source: `${exam?.label ?? q.exam} · Q${q.n}`,
    pastPaper: true,
    videoId,
    refs: lecRefs(g, [...(q.f ?? []).flatMap((fid) => g.formulas.find((f) => f.id === fid)?.lec ?? []), ...(g.topics.find((t) => t.id === q.topic)?.lec ?? [])]),
    explain: {
      lines: q.steps,
      solution: q.solution,
      note: [q.note, q.status === 'unofficial' ? 'No official key: this answer was worked out and checked independently.' : q.status === 'corrected' ? `The official key says ${q.keyAns}; it is wrong, and the answer here is corrected.` : ''].filter(Boolean).join(' ') || undefined,
      ...workedFor(q.id)
    }
  };
  if (q.opts?.length) {
    const letters = String(q.ans).split(/[\s,]+/).filter(Boolean).map(letterIdx).filter((i) => i >= 0);
    const multi = q.kind === 'multi' || letters.length > 1;
    return { ...base, kind: multi ? 'multi' : 'mc', options: q.opts, correct: letters, keepOrder: true, answerText: letters.map((i) => optLabel(q.opts!, i)).join('; ') };
  }
  if (q.kind === 'tf') {
    const t = /^t/i.test(String(q.ans));
    return { ...base, kind: 'tf', options: ['True', 'False'], correct: [t ? 0 : 1], keepOrder: true, answerText: t ? 'True' : 'False' };
  }
  if (q.kind === 'num' && Number.isFinite(Number(q.ans))) {
    return { ...base, kind: 'num', value: Number(q.ans), tol: q.tol ?? 0.02, unit: q.unit, correct: [], answerText: `${q.ans}${q.unit ? ' ' + q.unit : ''}` };
  }
  if (q.kind === 'output') return { ...base, kind: 'text', correct: [], answerText: String(q.ans) };
  return { ...base, kind: 'self', correct: [], answerText: String(q.ans) };
}

// ── lesson practice items ────────────────────────────────────────────────────────
const SUP: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const showNum = (v: string | number): string => {
  if (typeof v === 'string') return v;
  if (v !== 0 && (Math.abs(v) < 1e-3 || Math.abs(v) >= 1e6)) {
    const e = Math.floor(Math.log10(Math.abs(v)));
    const m = Number((v / 10 ** e).toPrecision(3));
    return `${m}×10${String(e).split('').map((ch) => SUP[ch]).join('')}`;
  }
  return String(Number(v.toPrecision(6)));
};
const fill = (q: string, values: Record<string, string | number>) => q.replace(/\{(\w+)\}/g, (m, k) => (k in values ? showNum(values[k]) : m));
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
const texNumber = (tex: string): number => {
  const t = tex.replace(/\\\$/g, '').replace(/\{,\}/g, '').trim();
  const m = t.match(/^(-?\d+(?:\.\d+)?)(?:\\times10\^\{(-?\d+)\})?/);
  return m ? Number(m[1]) * 10 ** Number(m[2] ?? 0) : NaN;
};
const texIndices = (tex: string): number[] => [...tex.matchAll(/\\bar\{(\d+)\}|(\d+)/g)].map((m) => (m[1] ? -Number(m[1]) : Number(m[2])));

function fromCalc(base: Omit<LearnQuestion, 'kind' | 'correct' | 'answerText' | 'prompt'>, item: Extract<QuizItem, { type: 'calc' }>, first: boolean): LearnQuestion | null {
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
    const common = {
      ...base,
      prompt: fill(item.q, values),
      code: item.code,
      hint: item.hint,
      explain: { ...base.explain, lines: r.steps },
      regen: item.vary?.length ? () => fromCalc(base, item, false) : undefined
    };
    if (/^\[|^\(/.test(row.tex)) {
      const ints = texIndices(row.tex);
      const tex = ints.map((x) => (x < 0 ? `\\bar{${-x}}` : String(x))).join('\\,');
      return { ...common, kind: 'indices', ints, anySign: item.anySign, correct: [], answerText: `$[${tex}]$` };
    }
    const value = texNumber(row.tex);
    if (!Number.isFinite(value)) continue;
    return { ...common, kind: 'num', value, tol: item.tol ?? 0.02, unit: item.unit, correct: [], answerText: `${showNum(value)}${item.unit ? ' ' + item.unit : ''}` };
  }
  return null;
}

export function fromLessonItem(c: CourseId, g: GateContent, f: Formula, i: number, videoId?: string): LearnQuestion | null {
  const item = f.learn!.quiz[i];
  if (item.type === 'exam') return null;
  const base = {
    id: `l:${c}:${f.id}:${i}`,
    courseId: c,
    origin: 'lesson' as const,
    topic: f.name,
    // concept checks are easy, calculations medium, open derivations hard
    level: (item.type === 'mc' || item.type === 'tf' ? 1 : item.type === 'open' ? 3 : 2) as 1 | 2 | 3,
    source: item.src,
    videoId,
    refs: lecRefs(g, f.lec.length ? f.lec : g.topics.find((t) => t.id === f.topic)?.lec),
    explain: {} as LearnQuestion['explain']
  };
  switch (item.type) {
    case 'calc':
      return fromCalc(base, item, true);
    case 'value':
      return { ...base, kind: 'num', prompt: item.q, value: item.answer, tol: item.tol ?? 0.02, unit: item.unit, correct: [], answerText: `${showNum(item.answer)}${item.unit ? ' ' + item.unit : ''}`, explain: { lines: item.steps } };
    case 'mc': {
      const k = letterIdx(item.ans);
      return { ...base, kind: 'mc', prompt: item.q, code: item.code, options: item.opts, correct: [k], answerText: optLabel(item.opts, k), explain: { concept: item.why } };
    }
    case 'tf':
      return { ...base, kind: 'tf', prompt: item.q, code: item.code, options: ['True', 'False'], correct: [item.ans ? 0 : 1], keepOrder: true, answerText: item.ans ? 'True' : 'False', explain: { concept: item.why } };
    case 'output':
      return { ...base, kind: 'text', prompt: item.q ?? 'What does this program print?', code: item.code, correct: [], answerText: item.ans, explain: { concept: item.why } };
    case 'open':
      return { ...base, kind: 'self', prompt: item.q, correct: [], answerText: item.ans, explain: { lines: item.steps, solution: item.solution } };
  }
}

// ── Dr. Gordon's papers (MIAE 215) ────────────────────────────────────────────────
export function fromGordon(p: GordonExamPaper, q: GordonExamQuestion): LearnQuestion {
  const base = {
    id: `g:MIAE215:${p.id}:${q.id}`,
    courseId: 'MIAE215' as const,
    origin: 'gordon' as const,
    prompt: `${q.title}${q.points ? ` (${q.points})` : ''}. ${q.description}`,
    code: q.codeSnippet || undefined,
    topic: q.conceptsTested[0] ?? 'Programming',
    level: 3 as const,
    source: `${examLabel(p.title)} · ${q.part}`,
    pastPaper: true,
    correct: [],
    explain: { lines: q.conceptsTested.map((t) => `Tests: ${t}`), trap: q.trapAlert, solution: q.solutionNotes }
  };
  return q.expectedOutput ? { ...base, kind: 'text', answerText: q.expectedOutput } : { ...base, kind: 'self', answerText: q.solutionNotes ?? 'Compare your program with the solution notes.' };
}
