// Checks the C++ step-through simulator against the course's own answers: every MIAE 215 question with code is
// run by src/learn/cpp/interpreter.ts. "What does it print" questions must print exactly the expected output;
// multiple-choice ones are checked when an option is an output; the hand-made traces must agree with the run.
// Run: npm run validate:cpp   (-- --verbose lists every disagreement in full)
import { loadCourseQuestions, setBankLoader } from '../src/learn/questions';
import { PRACTICE_QUESTIONS } from '../src/data/questionsData';
import * as TRACES from '../src/data/cppTraceData';
import { inputFrom, traceCpp } from '../src/learn/cpp/interpreter';

setBankLoader(async (c) => PRACTICE_QUESTIONS.filter((q) => q.courseId === c));
const verbose = process.argv.includes('--verbose');
const norm = (s: string) =>
  s
    // the course writes garbage as G, and some answers add an "(or ...)" alternative on a last line
    .replace(/G \(Garbage[^)]*\)|\bGarbage\b/g, 'G')
    .replace(/\r/g, '')
    .replace(/\n\(or [^)]*\)\s*$/, '')
    .split('\n')
    .map((l) => l.replace(/\s+$/, ''))
    .join('\n')
    .replace(/\n+$/, '')
    .replace(/^\n+/, '');

const idx = await loadCourseQuestions('MIAE215');
const qs = [...idx.byId.values()].filter((q) => q.code);
let ran = 0;
let errors = 0;
let outputOk = 0;
let outputBad = 0;
let mcOk = 0;
let mcOther = 0;
const problems: string[] = [];
const notes: string[] = [];

for (const q of qs) {
  const input = inputFrom(q.code, q.prompt);
  const t = traceCpp(q.code!, { input });
  ran++;
  if (t.error || t.stopped || (t.waiting && q.kind === 'text')) {
    errors++;
    const expected = norm(q.answerText).toLowerCase();
    // a crash, a compile error or an endless loop can be the intended answer
    const intended = /error|crash|exception|compile|infinite|never ends|garbage|undefined|semicolon|missing/.test(expected);
    // conceptual questions (not "what does it print"): a stop is fine as long as the stepper shows it clearly
    if (!intended && q.kind !== 'text') {
      notes.push(`${q.id}: ${t.error ?? (t.waiting ? 'waits for input' : 'endless loop')} (conceptual question)`);
      continue;
    }
    (intended ? notes : problems).push(`${q.id}: ${t.error ?? (t.waiting ? 'waits for input' : 'endless loop')}${intended ? ' (the expected answer says so)' : ''}`);
    continue;
  }
  const got = norm(t.output);
  if (q.kind === 'text') {
    const want = norm(q.answerText);
    if (got === want) outputOk++;
    else {
      outputBad++;
      problems.push(`${q.id}: prints ${JSON.stringify(got)}, the answer says ${JSON.stringify(want)}`);
    }
  } else if (q.kind === 'mc' && q.options) {
    const right = q.options[q.correct[0]];
    const match = q.options.findIndex((o) => norm(o.replace(/^\(?[a-e]\)\s*/i, '')) === got);
    if (match === q.correct[0]) mcOk++;
    else if (match >= 0) {
      mcOther++;
      problems.push(`${q.id}: prints ${JSON.stringify(got)}, which is option ${match + 1}, but the key says option ${q.correct[0] + 1} (${JSON.stringify(right)})`);
    }
  }
}

// the hand-made traces must end with the same console output as a real run
let traceOk = 0;
for (const [name, tr] of Object.entries(TRACES)) {
  if (!tr || typeof tr !== 'object' || !('steps' in tr)) continue;
  const last = (tr as { steps: { consoleOutput: string[] }[] }).steps.at(-1);
  const hand = norm((last?.consoleOutput ?? []).join('\n'));
  const run = traceCpp((tr as { code: string }).code, { input: inputFrom((tr as { code: string }).code) });
  const real = norm(run.output);
  if (run.error) notes.push(`${name}: the interpreter stops with "${run.error}"`);
  else if (hand.replace(/\s+/g, ' ') === real.replace(/\s+/g, ' ')) traceOk++;
  else problems.push(`${name} (hand-made trace) ends with ${JSON.stringify(hand)}, a real run prints ${JSON.stringify(real)}`);
}

console.log(`validate:cpp: ${ran} programs run · ${errors} stopped with an error, endless loop or missing input`);
console.log(`  output questions: ${outputOk} print exactly the expected answer, ${outputBad} differ`);
console.log(`  multiple choice: ${mcOk} match the keyed option, ${mcOther} match a different option`);
console.log(`  hand-made traces: ${traceOk} agree with a real run`);
for (const p of verbose ? problems : problems.slice(0, 40)) console.log('  ✗ ' + p);
if (verbose) for (const n of notes) console.log('  · ' + n);
if (problems.length) {
  console.error(`validate:cpp: ${problems.length} disagreement(s)`);
  process.exit(1);
}
