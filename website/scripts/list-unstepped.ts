// Lists calculation-looking questions that still lack a baby-step worked solution.
// Run: npx esbuild scripts/list-unstepped.ts --bundle --platform=node --format=esm --loader:.css=empty --outfile=node_modules/.cache/list-unstepped.mjs && node node_modules/.cache/list-unstepped.mjs
import { PRACTICE_QUESTIONS } from '../src/data/questionsData';

const looksLikeCalculation = (text: string) =>
  /\d/.test(text) && /(=|what is|how many|calculate|find|solve|value|printed|cost|distance|density|rate|time)/i.test(text);

const rows = PRACTICE_QUESTIONS.filter(
  (q) => !q.explanation.steps?.length && (looksLikeCalculation(q.question) || q.codeSnippet)
);
const byCourse: Record<string, number> = {};
for (const q of rows) {
  byCourse[q.courseId] = (byCourse[q.courseId] ?? 0) + 1;
  console.log(`${q.id} [${q.chapter}] ${q.question.replace(/\s+/g, ' ').slice(0, 110)}`);
}
console.log(byCourse);
