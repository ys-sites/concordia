// Local integrity gate for the learning portal.
//
// This complements validate:questions (practice-bank quality) and validate:curriculum (placement,
// published files and progress ids). It exercises every generated route and every question source,
// including gate lesson items and past papers, without adding a browser-test dependency.
// Run: npm run validate:integrity
import fs from 'fs';
import path from 'path';
import katex from 'katex';
import type { Curriculum, LearnQuestion } from '../src/learn/model';
import { buildAll, COURSE_ORDER } from '../src/learn/build/entry';
import { buildDocumentRegistry, listPublishedFiles } from '../build/publishedFiles';
import { PRACTICE_QUESTIONS } from '../src/data/questionsData';
import { loadCourseQuestions, setBankLoader } from '../src/learn/questions';
import { formatRoute, parseRoute, type Route } from '../src/learn/router';
import { hasInlineMath, splitMath } from '../src/utils/mathRenderer';

const errors: string[] = [];
const checkedRoutes = new Set<string>();
let formulas = 0;
let questionCount = 0;
let documentLinks = 0;
let mediaLinks = 0;

const fail = (message: string) => errors.push(message);
const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

// Keep this normalization in sync with the renderer: authoring occasionally contains a doubled
// command slash (\\\\frac), while a real matrix row break is not followed by a letter.
const sanitizeTex = (tex: string) => tex.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

function checkDelimited(id: string, field: string, text: string | undefined) {
  if (!text) return;
  const dollars = text.replace(/\\\$/g, '').split('$').length - 1;
  if (dollars % 2) fail(`${id} ${field}: unbalanced $ delimiter`);
  const pairs: [string, string][] = [
    ['\\[', '\\]'],
    ['\\(', '\\)']
  ];
  for (const [open, close] of pairs) {
    const n = text.split(open).length - 1;
    const m = text.split(close).length - 1;
    if (n !== m) fail(`${id} ${field}: ${n} ${open} delimiter(s) but ${m} ${close} delimiter(s)`);
  }
  for (const part of splitMath(text)) {
    if (part.kind !== 'math') continue;
    checkTex(id, field, part.value, part.display);
  }
}

function checkTex(id: string, field: string, tex: string | undefined, display = true) {
  if (!tex?.trim()) return;
  formulas++;
  try {
    katex.renderToString(sanitizeTex(tex), {
      displayMode: display,
      throwOnError: true,
      strict: 'ignore',
      trust: false
    });
  } catch (error) {
    const message = error instanceof Error ? error.message.split('\n')[0] : String(error);
    fail(`${id} ${field}: ${message} ⟨${tex.slice(0, 100)}⟩`);
  }
}

function checkQuestion(q: LearnQuestion) {
  const fields: [string, string | undefined][] = [
    ['prompt', q.prompt],
    ['answer', q.answerText],
    ['hint', q.hint],
    ['concept', q.explain.concept],
    ['trap', q.explain.trap],
    ['note', q.explain.note],
    ['solution', q.explain.solution],
    ['reference', q.explain.reference],
    ['figure caption', q.figure?.caption]
  ];
  q.options?.forEach((value, i) => fields.push([`option ${i + 1}`, value]));
  q.explain.lines?.forEach((value, i) => fields.push([`explanation line ${i + 1}`, value]));
  Object.entries(q.explain.whyWrong ?? {}).forEach(([i, value]) => fields.push([`why-wrong ${Number(i) + 1}`, value]));
  for (const [field, value] of fields) checkDelimited(q.id, field, value);

  if (q.formula) (hasInlineMath(q.formula) ? checkDelimited : checkTex)(q.id, 'formula', q.formula);
  if (q.explain.answerTex)
    (hasInlineMath(q.explain.answerTex) ? checkDelimited : checkTex)(q.id, 'answer TeX', q.explain.answerTex);
  q.explain.steps?.forEach((step, i) => {
    checkDelimited(q.id, `step ${i + 1} title`, step.title);
    checkDelimited(q.id, `step ${i + 1} note`, step.note);
    if (step.math) (hasInlineMath(step.math) ? checkDelimited : checkTex)(q.id, `step ${i + 1} math`, step.math);
  });
}

function checkRoute(route: Route, label: string) {
  const url = formatRoute(route);
  checkedRoutes.add(url);
  const parsed = parseRoute(url);
  if (!same(parsed, route)) fail(`${label}: route round trip changed ${url} into ${JSON.stringify(parsed)}`);
  const encoded = formatRoute(parsed);
  if (encoded !== url) fail(`${label}: non-canonical route ${url} (canonical: ${encoded})`);
}

function curriculumIndex(curriculum: Curriculum) {
  const lessons = new Map<string, Set<string>>();
  for (const section of curriculum.sections) {
    for (const lesson of section.lessons) {
      if (lessons.has(lesson.id)) fail(`${curriculum.id}: duplicate lesson id ${lesson.id}`);
      const steps = new Set<string>();
      lessons.set(lesson.id, steps);
      for (const step of lesson.steps) {
        if (steps.has(step.id)) fail(`${curriculum.id}/${lesson.id}: duplicate step id ${step.id}`);
        steps.add(step.id);
      }
    }
  }
  return lessons;
}

setBankLoader(async (course) => PRACTICE_QUESTIONS.filter((q) => q.courseId === course));

const semesterRoot = path.resolve(process.cwd(), '..');
const published = listPublishedFiles(semesterRoot);
const publishedByRelative = new Set(published.map((file) => file.relativePath));
const publishedByUrl = new Set(published.map((file) => `/courses/${file.publishedPath}`));
const documentPaths = buildDocumentRegistry(semesterRoot).map(([file]) => file);
const { curricula, reports } = buildAll(documentPaths);

for (const report of reports) {
  report.orphanQuestions.forEach((id) => fail(`${report.courseId}: question has no lesson: ${id}`));
  report.orphanVideos.forEach((id) => fail(`${report.courseId}: video has no lesson: ${id}`));
  report.duplicateVideos.forEach((id) => fail(`${report.courseId}: video is placed twice: ${id}`));
  report.problems.forEach((problem) => fail(`${report.courseId}: ${problem}`));
}

checkRoute({ name: 'home' }, 'home');
checkRoute({ name: 'my-learning' }, 'my learning');
checkRoute({ name: 'search', q: 'Fick & Bragg' }, 'search');
checkRoute({ name: 'bank' }, 'all-course question bank');

for (const course of COURSE_ORDER) {
  const curriculum = curricula[course];
  const lessons = curriculumIndex(curriculum);
  const questions = await loadCourseQuestions(course);
  const seenQuestions = new Set<string>();

  checkRoute({ name: 'bank', course }, `${course} question bank`);
  for (const tab of ['overview', 'videos', 'exam', 'resources'] as const)
    checkRoute({ name: 'course', course, tab }, `${course} ${tab}`);

  for (const section of curriculum.sections) {
    for (const lesson of section.lessons) {
      checkRoute({ name: 'learn', course, lesson: lesson.id }, `${course}/${lesson.id}`);
      for (const doc of lesson.resources ?? []) {
        documentLinks++;
        if (!publishedByRelative.has(doc.path)) fail(`${course}/${lesson.id}: missing lesson resource ${doc.path}`);
      }
      for (const step of lesson.steps) {
        checkRoute({ name: 'learn', course, lesson: lesson.id, step: step.id }, `${course}/${step.id}`);
        for (const doc of step.docs ?? []) {
          documentLinks++;
          if (!publishedByRelative.has(doc.path)) fail(`${course}/${step.id}: missing step document ${doc.path}`);
        }
        if (step.youtube && !/^[A-Za-z0-9_-]{11}$/.test(step.youtube.id))
          fail(`${course}/${step.id}: invalid YouTube id ${step.youtube.id}`);
        for (const id of step.questionIds ?? []) {
          seenQuestions.add(id);
          if (!questions.byId.has(id)) fail(`${course}/${step.id}: question does not exist: ${id}`);
        }
      }
    }
  }

  const cards = new Map(curriculum.videos.map((video) => [video.id, video]));
  for (const video of curriculum.videos) {
    mediaLinks++;
    const steps = lessons.get(video.lessonId);
    if (!steps) fail(`${course}/${video.id}: video points to missing lesson ${video.lessonId}`);
    else if (!steps.has(video.stepId)) fail(`${course}/${video.id}: video points to missing step ${video.stepId}`);
    // solve:* media is intentionally CDN-only and is absent from a fresh Git checkout. Its URL is
    // exercised in the browser matrix; locally published lesson/walkthrough media must exist here.
    if (video.poster && !video.id.startsWith('solve:') && !publishedByRelative.has(video.poster))
      fail(`${course}/${video.id}: missing poster ${video.poster}`);
  }

  for (const question of questions.byId.values()) {
    questionCount++;
    checkQuestion(question);
    if (question.videoId && !cards.has(question.videoId)) fail(`${question.id}: solution video is not reachable: ${question.videoId}`);
    const src = question.figure?.src;
    if (src?.startsWith('/courses/') && !publishedByUrl.has(src)) fail(`${question.id}: missing course figure ${src}`);
    else if (src?.startsWith('/') && !src.startsWith('/courses/')) {
      const local = path.join(process.cwd(), 'public', src.slice(1));
      if (!fs.existsSync(local)) fail(`${question.id}: missing public figure ${src}`);
    }
  }

  for (const id of questions.byId.keys()) if (!seenQuestions.has(id)) fail(`${course}: indexed question has no reachable step: ${id}`);
}

// Literal hash links used by the active learning shell should also remain parseable and canonical.
const activeFiles = [path.join(process.cwd(), 'src', 'App.tsx')];
const collect = (directory: string) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(file);
    else if (/\.(?:ts|tsx)$/.test(entry.name)) activeFiles.push(file);
  }
};
collect(path.join(process.cwd(), 'src', 'learn'));
for (const file of activeFiles) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/(?:href\s*=\s*|['"])(#\/[^'"}`\s<]*)/g)) {
    const literal = match[1];
    if (literal.includes('${')) continue;
    const route = parseRoute(literal);
    const canonical = formatRoute(route);
    if (literal !== canonical) fail(`${path.relative(process.cwd(), file)}: literal route ${literal} resolves to ${canonical}`);
    checkedRoutes.add(literal);
  }
}

if (errors.length) {
  console.error(`validate:integrity: ${errors.length} problem(s)`);
  errors.slice(0, 100).forEach((error) => console.error(`  ✗ ${error}`));
  if (errors.length > 100) console.error(`  … and ${errors.length - 100} more`);
  process.exit(1);
}

console.log(
  `validate:integrity: OK · ${COURSE_ORDER.length} courses · ${checkedRoutes.size} routes · ${questionCount} questions · ${formulas} KaTeX expressions · ${documentLinks} document links · ${mediaLinks} video cards`
);
