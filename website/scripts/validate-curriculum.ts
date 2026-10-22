// Fails when a question, video or document has no home in the curriculum, a video has two homes, or a course
// spec points at something that does not exist.  Run: npm run validate:curriculum
import path from 'path';
import { buildAll } from '../src/learn/build/entry';
import { buildDocumentRegistry, listPublishedFiles } from '../build/publishedFiles';
import { VIDEO_SOURCES } from '../src/learn/videoSources';

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
// every published MP4 must be a registered video (and so have a home in its course)
const registered = new Set(VIDEO_SOURCES.map((v) => v.lesson.video));
const unregistered = listPublishedFiles(root).filter((f) => f.relativePath.endsWith('.mp4') && !registered.has(f.relativePath));
for (const f of unregistered) console.log(`  ✗ published video not in any registry: ${f.relativePath}`);
failed += unregistered.length;

if (failed) {
  console.error(`\nvalidate:curriculum: ${failed} problem(s)`);
  process.exit(1);
}
console.log('\nvalidate:curriculum: every question, video and document has a home.');
