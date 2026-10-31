import assert from 'node:assert/strict';
import { VISUAL_3D_TOPICS } from '../src/learn/visual3d/catalog';
import { demoPlan, demoValues } from '../src/learn/visual3d/demoPlan';

const specialLabs = new Set(['3d:crystal-structures', '3d:directions', '3d:planes']);
for (const topic of VISUAL_3D_TOPICS) {
  if (specialLabs.has(topic.id)) continue;
  const plan = demoPlan(topic);
  assert.ok(plan, `${topic.id} has no demonstration`);
  if (plan.kind === 'motion') {
    const control = topic.controls.find((c) => c.key === plan.key);
    assert.ok(control && control.min === plan.min && control.max === plan.max, `${topic.id} has invalid motion bounds`);
    assert.equal(demoValues(plan, 0, {})[plan.key], plan.min);
    assert.equal(demoValues(plan, 1, {})[plan.key], plan.max);
    assert.ok(Math.abs(demoValues(plan, 0.5, {})[plan.key] - (plan.min + plan.max) / 2) < 1e-10);
  } else assert.ok(plan.presets.length > 1, `${topic.id} needs at least two examples`);
}
const dislocations = VISUAL_3D_TOPICS.find((t) => t.id === '3d:dislocations')!;
assert.equal(demoPlan(dislocations)?.kind, 'motion');
assert.equal((demoPlan(dislocations) as { key: string }).key, 'glidePos');
console.log('All visual topics have an appropriate play plan or dedicated walkthrough.');
