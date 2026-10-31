import assert from 'node:assert/strict';
import { EXAM_ITEM_ALIASES } from '../src/learn/progress/examItemAliases';
import { applyAliases, type ProgressState } from '../src/learn/progress/store';

const [oldId, newId] = Object.entries(EXAM_ITEM_ALIASES)[0];
assert.ok(oldId && newId);
const q = { order: [oldId], answers: { [oldId]: { value: 1 } }, checked: { [oldId]: true }, optionOrder: { [oldId]: [1, 0] }, confidence: { [oldId]: 'sure' }, flags: [oldId], hints: [oldId], revealed: [oldId], selfPending: [oldId], adaptive: { pool: [oldId] } };
const s = { steps: {}, quizzes: { one: q }, notes: {}, questions: { [oldId]: { seen: 1 } }, videos: {}, scheduleEdits: {}, last: null, lastByCourse: {}, attempts: [{ results: [{ q: oldId, ok: true }] }], reminders: [] } as unknown as ProgressState;
applyAliases(s);
assert.deepEqual(q.order, [newId]);
for (const record of [q.answers, q.checked, q.optionOrder, q.confidence]) assert.ok(newId in record && !(oldId in record));
for (const list of [q.flags, q.hints, q.revealed, q.selfPending, q.adaptive.pool]) assert.deepEqual(list, [newId]);
assert.ok(newId in s.questions && !(oldId in s.questions));
assert.equal(s.attempts[0].results[0].q, newId);
console.log(`Progress alias checks passed (${Object.keys(EXAM_ITEM_ALIASES).length} aliases).`);
