// Fails when a question, video or document has no home in the curriculum, a video has two homes, a course
// spec points at something that does not exist, or a change would orphan students' saved progress.
// Run: npm run validate:curriculum   (add -- --update-lock after a deliberate, aliased id change)
import fs from 'fs';
import path from 'path';
import { buildAll } from '../src/learn/build/entry';
import { buildDocumentRegistry, listPublishedFiles } from '../build/publishedFiles';
import { VIDEO_SOURCES } from '../src/learn/videoSources';
import { SCHEDULE } from '../src/learn/schedule';
import { ID_ALIASES, RETIRED_IDS } from '../src/learn/progress/aliases';
import ENGR213 from '../src/data/gates/engr213';
import INDU211 from '../src/data/gates/indu211';
import MIAE215 from '../src/data/gates/miae215';
import MIAE221 from '../src/data/gates/miae221';

const root = path.resolve(process.cwd(), '..');
const docs = buildDocumentRegistry(root).map(([p]) => p);
const { curricula, reports } = buildAll(docs);

let failed = 0;
for (const r of reports) {
  const c = curricula[r.courseId];
  const s = c.stats;
  console.log(`${r.courseId}: ${s.sections} sections · ${s.lessons} lessons · ${s.steps} steps · ${Math.round(s.minutes / 60)} h · ${s.videos} videos (${s.videoMinutes} min) · ${s.questions} questions · ${s.documents} documents`);
  const issues = [
    ...r.orphanQuestions.map((q) => `question with no lesson: ${q}`),
    ...r.orphanVideos.map((v) => `video with no lesson: ${v}`),
    ...r.duplicateVideos.map((v) => `video placed twice: ${v}`),
    ...r.problems
  ];
  for (const i of issues.slice(0, 40)) console.log(`  ✗ ${i}`);
  if (issues.length > 40) console.log(`  … and ${issues.length - 40} more`);
  failed += issues.length;
}
// every published MP4 must be a registered video (and so have a home in its course); exam-prep solve videos
// are registered in their gate
const registered = new Set([
  ...VIDEO_SOURCES.map((v) => v.lesson.video),
  ...[ENGR213, INDU211, MIAE215, MIAE221].flatMap((g) => Object.values(g.solveVideos ?? {}).map((v) => v.video))
]);
const published = listPublishedFiles(root);
const unregistered = published.filter((f) => f.relativePath.endsWith('.mp4') && !registered.has(f.relativePath));
for (const f of unregistered) console.log(`  ✗ published video not in any registry: ${f.relativePath}`);
failed += unregistered.length;
// and every registered video (and its poster) must exist, or the player shows a broken video (a CDN-only MP4
// is not in a fresh checkout; its poster is)
const files = new Set(published.map((f) => f.relativePath));
const missing = VIDEO_SOURCES.flatMap((v) => [v.cdnOnly ? '' : v.lesson.video, v.lesson.poster].filter((p) => p && !files.has(p)).map((p) => `${v.id}: ${p}`));
for (const m of missing) console.log(`  ✗ registered video file missing: ${m}`);
failed += missing.length;

// ── saved progress must survive this change ──────────────────────────────────────
// Every id a student's progress is stored against is locked in scripts/progress-ids.lock.json. An id that
// disappears (renamed or deleted) would orphan everyone's progress for it, so it fails here unless it is mapped
// in src/learn/progress/aliases.ts or listed as retired. Lesson-item questions are keyed by position
// (l:COURSE:lesson:i), so their content is fingerprinted too: inserting or reordering items would move every
// student's results onto a different question.
const ids = new Set<string>(SCHEDULE.map((e) => e.id));
for (const c of Object.values(curricula)) {
  c.videos.forEach((v) => ids.add(v.id));
  for (const s of c.sections)
    for (const l of s.lessons) {
      ids.add(`${c.id}/${l.id}`);
      for (const st of l.steps) {
        ids.add(`${c.id}/${st.id}`);
        st.questionIds?.forEach((q) => ids.add(q));
      }
    }
}
const fnv = (str: string) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36);
};
const positional: Record<string, string> = {};
for (const [c, g] of Object.entries({ ENGR213, INDU211, MIAE215, MIAE221 }))
  for (const f of g.formulas) (f.learn?.quiz ?? []).forEach((item, i) => ids.has(`l:${c}:${f.id}:${i}`) && (positional[`l:${c}:${f.id}:${i}`] = fnv(JSON.stringify(item))));

const lockPath = path.join(process.cwd(), 'scripts/progress-ids.lock.json');
const lock: { ids: string[]; positional: Record<string, string> } = fs.existsSync(lockPath) ? JSON.parse(fs.readFileSync(lockPath, 'utf8')) : { ids: [], positional: {} };
const updateLock = process.argv.includes('--update-lock');
const alive = (id: string) => ids.has(id) || (id in ID_ALIASES && ids.has(ID_ALIASES[id])) || RETIRED_IDS.includes(id);
const dropped = lock.ids.filter((id) => !alive(id));
const moved = Object.entries(lock.positional).filter(([id, h]) => positional[id] && positional[id] !== h).map(([id]) => id);
for (const id of dropped.slice(0, 40)) console.log(`  ✗ saved progress would be orphaned: "${id}" no longer exists (map it in src/learn/progress/aliases.ts)`);
if (!updateLock) {
  for (const id of moved.slice(0, 40)) console.log(`  ✗ lesson item "${id}" changed: add new items at the end of a lesson, never in the middle (only a wording fix? run with --update-lock)`);
  failed += moved.length;
}
failed += dropped.length;
const added = [...ids].filter((id) => !lock.ids.includes(id));
if (!dropped.length && (!moved.length || updateLock) && (added.length || moved.length || !fs.existsSync(lockPath))) {
  const next = { note: 'Ids that saved progress points at. Never edit by hand: see src/learn/progress/aliases.ts', ids: [...new Set([...lock.ids, ...ids])].sort(), positional: { ...lock.positional, ...positional } };
  fs.writeFileSync(lockPath, JSON.stringify(next, null, 1) + '\n');
  console.log(`progress lock: ${added.length} new id(s) locked (${next.ids.length} in all)`);
}

if (failed) {
  console.error(`\nvalidate:curriculum: ${failed} problem(s)`);
  process.exit(1);
}
console.log('\nvalidate:curriculum: every question, video and document has a home.');
