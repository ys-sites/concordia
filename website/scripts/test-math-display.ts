import assert from 'node:assert/strict';
import { splitMath } from '../src/utils/mathRenderer';
import { VISUAL_3D_BY_ID } from '../src/learn/visual3d/catalog';
import { isOriginalTeachingPdf } from '../src/learn/resourceVisibility';

const parts = splitMath('Adjust concentration c_i and outflow r_o.', true);
assert.deepEqual(parts.filter((p) => p.kind === 'math').map((p) => p.value), ['c_{i}', 'r_{o}']);
assert.equal(splitMath('Keep the variable total_count in code.', true).some((p) => p.kind === 'math'), false);
const topic = VISUAL_3D_BY_ID.get('3d:mixing-tank');
assert.ok(topic);
for (const text of [topic.summary, ...topic.controls.map((c) => c.label), ...topic.presets.flatMap((p) => [p.label, p.note])]) {
  for (const part of splitMath(text, true)) {
    if (part.kind === 'text') assert.doesNotMatch(part.value, /\b[A-Za-z]_[A-Za-z0-9]+\b/);
  }
}
assert.deepEqual(topic.presets[0].values, { ci: 0.8, ri: 6, ro: 6, A0: 10 });
assert.equal(isOriginalTeachingPdf('Miae 221/01 - Teacher Lecture Notes/lecture 9-diffusion-students26.pdf'), true);
assert.equal(isOriginalTeachingPdf('Miae 221/01 - Teacher Lecture Notes/Lecture 9 - Diffusion (Expanded & Explained).pdf'), false);
assert.equal(isOriginalTeachingPdf('Engr 213/00 - Course Syllabus & Textbook/Textbook Chapters/Textbook Chapter 1.pdf'), true);
console.log('Math display checks passed.');
