import assert from 'node:assert/strict';
import type { MotionLesson } from '../src/data/engr213Lessons';
import { solutionVideoStart } from '../src/learn/quiz/solutionVideoStart';
import { MIAE221_SOLVE_VIDEOS } from '../src/data/gates/miae221SolveVideos';

const lesson = { duration: 120, chapters: [{ label: 'The Question', start: 0 }, { label: 'Solve It', start: 40 }] } as MotionLesson;
assert.equal(solutionVideoStart(lesson), 40);
assert.equal(solutionVideoStart(lesson, 10), 40);
assert.equal(solutionVideoStart(lesson, 70), 70);
assert.equal(solutionVideoStart(lesson, 119), 40);
assert.equal(solutionVideoStart({ ...lesson, chapters: [{ label: 'Introduction', start: 0 }] }), undefined);
assert.equal(solutionVideoStart({ ...lesson, chapters: [{ label: 'Solve It', start: 125 }] }), undefined);
assert.equal(solutionVideoStart(MIAE221_SOLVE_VIDEOS['A25-24']), 40.6);
console.log('Solution video starting positions passed.');
