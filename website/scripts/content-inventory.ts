// Content inventory: the curriculum's stock, lesson by lesson, against min/max rules — like an ERP report for a
// warehouse. Writes docs/content-inventory.md and docs/content-inventory.json.
// Run: npm run inventory   Fails only on broken references (a lesson pointing at a question that does not
// exist); stock levels below the rules are warnings to plan content work from.
import fs from 'fs';
import path from 'path';
import type { CourseId } from '../src/types';
import type { Lesson, LearnQuestion } from '../src/learn/model';
import { buildAll } from '../src/learn/build/entry';
import { buildDocumentRegistry } from '../build/publishedFiles';
import { loadCourseQuestions } from '../src/learn/questions';
import { COURSE_BY_ID } from '../src/learn/courses';

// minimum stock per teaching lesson (exam-prep lessons are past papers and follow their own shape)
const MIN = { explanation: 1, check: 3, practice: 8, worked: 1 };
// target difficulty mix: foundation / midterm level / exam master
const TARGET_MIX: Record<1 | 2 | 3, number> = { 1: 0.4, 2: 0.4, 3: 0.2 };
const MIX_TOLERANCE = 0.25;
const OVERSTOCK = 4; // more than 4× the course's median practice stock

interface Row {
  course: CourseId;
  section: string;
  lesson: string;
  lessonId: string;
  minutes: number;
  videos: number;
  youtube: number;
  notes: number;
  worked: number;
  check: number;
  practice: number;
  mix: Record<1 | 2 | 3, number>;
  withSteps: number; // questions with a baby-step solution
  withVideo: number; // questions with a solution video
  flags: string[];
}

const root = path.resolve(process.cwd(), '..');
const docs = buildDocumentRegistry(root).map(([p]) => p);
const { curricula } = buildAll(docs);
const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)] : 0;
};

const rows: Row[] = [];
const broken: string[] = [];
const unusedDocs: Record<string, string[]> = {};

for (const cur of Object.values(curricula)) {
  const qs = (await loadCourseQuestions(cur.id)).byId;
  const used = new Set<string>();
  const teaching: Row[] = [];
  for (const s of cur.sections)
    for (const l of s.lessons as Lesson[]) {
      const ids = (kinds: string[]) => [...new Set(l.steps.filter((st) => kinds.includes(st.kind)).flatMap((st) => st.questionIds ?? []))];
      const check = ids(['check']);
      const practice = ids(['practice', 'exam']).filter((id) => !check.includes(id));
      const all = [...check, ...practice];
      for (const id of all) if (!qs.has(id)) broken.push(`${cur.id} › ${l.title}: question ${id} does not exist`);
      const found = all.map((id) => qs.get(id)).filter((q): q is LearnQuestion => !!q);
      for (const st of l.steps) for (const d of st.docs ?? []) used.add(d.path);
      for (const d of l.resources ?? []) used.add(d.path);
      const mix = { 1: 0, 2: 0, 3: 0 } as Record<1 | 2 | 3, number>;
      for (const q of found) mix[q.level]++;
      const row: Row = {
        course: cur.id,
        section: s.title,
        lesson: l.title,
        lessonId: l.id,
        minutes: l.minutes,
        videos: l.steps.filter((st) => st.kind === 'video').length,
        youtube: l.steps.filter((st) => st.kind === 'extra' && st.youtube).length,
        notes: l.steps.filter((st) => st.kind === 'notes' || st.kind === 'reading').length,
        worked: l.steps.filter((st) => st.kind === 'worked').reduce((n, st) => n + Math.max(1, st.formulaIds?.length ?? 0), 0),
        check: check.length,
        practice: practice.length,
        mix,
        withSteps: found.filter((q) => (q.explain.steps?.length ?? 0) >= 2 || (q.explain.lines?.length ?? 0) >= 2).length,
        withVideo: found.filter((q) => q.videoId).length,
        flags: []
      };
      rows.push(row);
      if (!s.examPrep) teaching.push(row);
    }
  // stock rules, on teaching lessons only
  const med = median(teaching.map((r) => r.practice));
  for (const r of teaching) {
    if (r.videos + r.notes < MIN.explanation) r.flags.push('stockout: no video or notes');
    if (r.check < MIN.check) r.flags.push(`stockout: ${r.check} check question${r.check === 1 ? '' : 's'} (min ${MIN.check})`);
    if (r.practice < MIN.practice) r.flags.push(`stockout: ${r.practice} practice question${r.practice === 1 ? '' : 's'} (min ${MIN.practice})`);
    if (r.worked < MIN.worked) r.flags.push('stockout: no worked example');
    if (med && r.practice > OVERSTOCK * med && r.practice > 40) r.flags.push(`overstock: ${r.practice} practice questions (course median ${med})`);
    const n = r.mix[1] + r.mix[2] + r.mix[3];
    if (n >= 8) {
      const off = ([1, 2, 3] as const).filter((lv) => Math.abs(r.mix[lv] / n - TARGET_MIX[lv]) > MIX_TOLERANCE);
      if (off.length) r.flags.push(`mix: ${Math.round((r.mix[1] / n) * 100)}/${Math.round((r.mix[2] / n) * 100)}/${Math.round((r.mix[3] / n) * 100)} (target 40/40/20)`);
      if (!r.mix[1]) r.flags.push('mix: no foundation questions to start on');
    }
  }
  unusedDocs[cur.id] = cur.resources.flatMap((g) => g.docs.map((d) => d.path)).filter((p) => !used.has(p));
}

// ── report ───────────────────────────────────────────────────────────────────────────
const courses = Object.keys(curricula) as CourseId[];
const teachingRows = rows.filter((r) => !curricula[r.course].sections.find((s) => s.title === r.section)?.examPrep);
const count = (c: CourseId, test: (r: Row) => boolean) => teachingRows.filter((r) => r.course === c && test(r)).length;
const has = (r: Row, word: string) => r.flags.some((f) => f.includes(word));
const lines: string[] = [
  '# Content inventory',
  '',
  `Generated by \`npm run inventory\` on ${new Date().toISOString().slice(0, 10)}. Do not edit by hand.`,
  '',
  `Minimum stock per teaching lesson: ${MIN.explanation} explanation (video or notes), ${MIN.check} check questions, ${MIN.practice} practice questions, ${MIN.worked} worked example. Target difficulty mix 40/40/20 (foundation / midterm level / exam master), flagged when a level is more than ${MIX_TOLERANCE * 100} points off. Overstock: more than ${OVERSTOCK}× the course's median practice stock. Exam-prep lessons (past papers, mock midterm) are listed but not held to these rules.`,
  '',
  '## Summary',
  '',
  '| Course | Teaching lessons | No explanation | Check < 3 | Practice < 8 | No worked example | Overstock | Mix off | Documents no lesson uses |',
  '|---|---|---|---|---|---|---|---|---|',
  ...courses.map(
    (c) =>
      `| ${COURSE_BY_ID[c].code} | ${count(c, () => true)} | ${count(c, (r) => has(r, 'no video or notes'))} | ${count(c, (r) => has(r, 'check question'))} | ${count(c, (r) => has(r, 'practice question') && has(r, 'stockout'))} | ${count(c, (r) => has(r, 'worked example'))} | ${count(c, (r) => has(r, 'overstock'))} | ${count(c, (r) => has(r, 'mix:'))} | ${unusedDocs[c].length} |`
  ),
  ''
];
if (broken.length) lines.push('## Broken references', '', ...broken.map((b) => `- ${b}`), '');
for (const c of courses) {
  lines.push(`## ${COURSE_BY_ID[c].code} · ${COURSE_BY_ID[c].title}`, '', '| Lesson | Min | Videos | Notes | Worked | Check | Practice | Mix F/M/E | Steps / video solutions | Flags |', '|---|---|---|---|---|---|---|---|---|---|');
  let section = '';
  for (const r of rows.filter((x) => x.course === c)) {
    if (r.section !== section) {
      section = r.section;
      lines.push(`| **${section}** | | | | | | | | | |`);
    }
    lines.push(`| ${r.lesson} | ${r.minutes} | ${r.videos}${r.youtube ? ` (+${r.youtube} YT)` : ''} | ${r.notes} | ${r.worked} | ${r.check} | ${r.practice} | ${r.mix[1]}/${r.mix[2]}/${r.mix[3]} | ${r.withSteps} / ${r.withVideo} | ${r.flags.join('; ')} |`);
  }
  if (unusedDocs[c].length) lines.push('', `Documents in the course library that no lesson points to (${unusedDocs[c].length}):`, '', ...unusedDocs[c].map((p) => `- ${p.split('/').slice(1).join(' › ')}`));
  lines.push('');
}

fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync('docs/content-inventory.md', lines.join('\n'));
fs.writeFileSync('docs/content-inventory.json', JSON.stringify({ generated: new Date().toISOString(), rules: { MIN, TARGET_MIX, MIX_TOLERANCE, OVERSTOCK }, broken, unusedDocs, lessons: rows }, null, 1) + '\n');

const flagged = teachingRows.filter((r) => r.flags.length).length;
console.log(`inventory: ${rows.length} lessons (${teachingRows.length} teaching), ${flagged} below or above the stock rules, ${Object.values(unusedDocs).flat().length} documents no lesson uses`);
console.log('  written: docs/content-inventory.md, docs/content-inventory.json');
if (broken.length) {
  for (const b of broken.slice(0, 30)) console.log(`  ✗ ${b}`);
  console.error(`inventory: ${broken.length} broken reference(s)`);
  process.exit(1);
}
