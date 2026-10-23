// Open questions whose answer is short and exact (a formula or a number) become multiple choice: the right
// answer among three near-misses, the kind of slip students make (a flipped sign, a changed number or exponent,
// sin for cos), topped up with answers to sibling questions of the same topic. Answers that describe a method
// or a program stay open; the quiz's "Show answer" covers those. The choices are the same on every visit (no
// randomness), so a saved answer always points at the same option.
import type { LearnQuestion } from '../model';

const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};
const norm = (s: string) => s.replace(/\s+/g, '').replace(/\\[,;!]/g, '').toLowerCase();
const isExact = (a: string) => a.length <= 120 && (/\$/.test(a) || /^-?\d/.test(a)) && !/^see\b|\bguide\b|\bnotes\b/i.test(a);

// the slips: each returns the answer with one thing wrong, or the answer unchanged when it does not apply
const SLIPS: ((a: string) => string)[] = [
  // a sign between two terms flipped
  (a) => a.replace(/([\w)}])\s*([+-])\s*(?=[\w\\({])/, (_, pre: string, op: string) => `${pre} ${op === '+' ? '-' : '+'} `),
  // a number changed (not an exponent, subscript or part of a command)
  (a) =>
    a.replace(/(?<![\\a-zA-Z^_{.\d])(\d+(?:\.\d+)?)(?![\d.])/, (d: string) => {
      const v = Number(d);
      const dec = d.includes('.') ? d.split('.')[1].length : 0;
      return dec ? (v * 1.5).toFixed(dec) : String(v === 0 ? 1 : v === 1 ? 2 : v - 1);
    }),
  // the exponent's sign
  (a) => (a.includes('e^{-') ? a.replace('e^{-', 'e^{') : a.replace(/e\^\{(?!-)/, 'e^{-')),
  // sin and cos swapped
  (a) => a.replace(/\\(sin|cos)\b/, (_, f: string) => (f === 'sin' ? '\\cos' : '\\sin')),
  // a power changed
  (a) => a.replace(/\^(\d)(?!\d)/, (_, d: string) => `^${Number(d) === 2 ? 3 : 2}`)
];

export function openToChoices(byId: Map<string, LearnQuestion>) {
  // answers and options already in the course, by topic: siblings to borrow as distractors
  const byTopic = new Map<string, string[]>();
  for (const q of byId.values()) {
    const list = byTopic.get(q.topic) ?? [];
    if (isExact(q.answerText)) list.push(q.answerText.trim());
    for (const o of q.options ?? []) if (isExact(o)) list.push(o.trim());
    byTopic.set(q.topic, list);
  }
  for (const q of byId.values()) {
    if (q.kind !== 'self') continue;
    const right = q.answerText.trim();
    if (!isExact(right)) continue;
    const math = right.includes('$');
    const seen = new Set([norm(right)]);
    const wrong: { text: string; why: string }[] = [];
    const take = (text: string, why: string) => {
      const k = norm(text);
      if (wrong.length < 3 && !seen.has(k) && text.includes('$') === math) {
        seen.add(k);
        wrong.push({ text, why });
      }
    };
    for (const slip of SLIPS) take(slip(right), 'Close, but one detail is off (a sign, a number, an exponent or a function). Compare it with the solution step by step.');
    const siblings = (byTopic.get(q.topic) ?? []).filter((s) => s !== right).sort((x, y) => hash(q.id + x) - hash(q.id + y));
    for (const s of siblings) take(s, 'That is the answer to a different problem of the same type, not this one.');
    if (wrong.length < 3) continue;
    // the right answer first in the data; the quiz shuffles the order shown
    byId.set(q.id, {
      ...q,
      kind: 'mc',
      options: [right, ...wrong.map((w) => w.text)],
      correct: [0],
      explain: { ...q.explain, whyWrong: { ...q.explain.whyWrong, 1: wrong[0].why, 2: wrong[1].why, 3: wrong[2].why } }
    });
  }
}
