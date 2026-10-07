// Checks the practice bank: every formula compiles in KaTeX, sections exist, diagnoses are sane.
// Run: npm run validate:questions
import katex from 'katex';
import { PRACTICE_QUESTIONS } from '../src/data/questionsData';
import { QUIZ_PLANS } from '../src/data/quizSections';
import { splitMath } from '../src/utils/mathRenderer';

const errors: string[] = [];
const check = (id: string, where: string, text: string | undefined, bare = false) => {
  if (!text) return;
  const parts = bare ? [{ kind: 'math', value: text, display: true }] : splitMath(text);
  for (const p of parts) {
    if (p.kind !== 'math') continue;
    try {
      katex.renderToString(p.value, { throwOnError: true, displayMode: p.display, strict: 'ignore' });
    } catch (e: any) {
      errors.push(`${id} ${where}: ${e.message.split('\n')[0]}  ⟨${p.value.slice(0, 80)}⟩`);
    }
  }
  // An odd number of unescaped $ means a formula was never closed
  const dollars = text.split('\\$').join('').split('$').length - 1;
  if (!bare && dollars % 2) errors.push(`${id} ${where}: unbalanced $ delimiters`);
};

const ids = new Set<string>();
for (const q of PRACTICE_QUESTIONS) {
  if (ids.has(q.id)) errors.push(`${q.id}: duplicate id`);
  ids.add(q.id);
  const plan = QUIZ_PLANS[q.courseId];
  const sectionIds = [...plan.sections.map((s) => s.id), ...plan.midterm.sections];
  if (!sectionIds.includes(q.chapter)) errors.push(`${q.id}: chapter "${q.chapter}" is not a drill section`);
  if (new Set(q.options).size !== 4) errors.push(`${q.id}: duplicate options`);
  // Length-balance audit: the correct option must not be the conspicuously longest one,
  // otherwise "pick the longest answer" becomes a cheat. Keep distractors comparable
  // in length and detail to the correct option.
  {
    const lens = q.options.map((o) => o.replace(/\s+/g, ' ').trim().length);
    const correctLen = lens[q.correctIndex];
    const others = lens.filter((_, i) => i !== q.correctIndex);
    const maxOther = Math.max(...others);
    const meanOther = others.reduce((a, b) => a + b, 0) / others.length;
    if (correctLen > maxOther && meanOther > 0 && correctLen / meanOther >= 1.35 && correctLen - maxOther >= 25) {
      errors.push(
        `${q.id}: length tell — correct option is longest (${correctLen}ch vs distractors [${others.join(', ')}]); pad distractors to match`,
      );
    }
  }
  check(q.id, 'question', q.question);
  q.options.forEach((o, i) => check(q.id, `option ${i}`, o));
  const e = q.explanation;
  check(q.id, 'coreConcept', e.coreConcept);
  check(q.id, 'commonTrap', e.commonTrap);
  e.stepByStep.forEach((s, i) => check(q.id, `stepByStep ${i}`, s));
  e.steps?.forEach((s, i) => {
    check(q.id, `step ${i} title`, s.title);
    check(q.id, `step ${i} math`, s.math, true);
    check(q.id, `step ${i} note`, s.note);
  });
  check(q.id, 'answer', e.answer, true);
  for (const [k, v] of Object.entries(e.whyWrong ?? {})) {
    if (Number(k) === q.correctIndex) errors.push(`${q.id}: whyWrong given for the correct option ${k}`);
    check(q.id, `whyWrong ${k}`, v);
  }
  if (!e.steps?.length && !e.stepByStep.length) errors.push(`${q.id}: no explanation steps`);
}

const byCourse: Record<string, { total: number; stepped: number; diagnosed: number; past: number }> = {};
for (const q of PRACTICE_QUESTIONS) {
  const c = (byCourse[q.courseId] ??= { total: 0, stepped: 0, diagnosed: 0, past: 0 });
  c.total++;
  if (q.explanation.steps?.length) c.stepped++;
  if (q.explanation.whyWrong) c.diagnosed++;
  if (q.pastPaper) c.past++;
}
console.table(byCourse);
if (errors.length) {
  console.error(`${errors.length} problem(s):\n` + errors.join('\n'));
  process.exit(1);
}
console.log(`OK: ${PRACTICE_QUESTIONS.length} questions validated`);
