import { VISUAL_3D_TOPICS } from '../src/learn/visual3d/catalog';
import katex from 'katex';

const issues: string[] = [];
const ids = new Set<string>();
for (const topic of VISUAL_3D_TOPICS) {
  if (ids.has(topic.id)) issues.push(`${topic.id}: duplicate topic id`);
  ids.add(topic.id);
  if (!topic.title.trim() || !topic.summary.trim() || !topic.check.q.trim()) issues.push(`${topic.id}: missing teaching text`);
  if (topic.check.correct < 0 || topic.check.correct >= topic.check.options.length) issues.push(`${topic.id}: invalid answer index`);
  try { katex.renderToString(topic.formula, { throwOnError: true, strict: 'ignore' }); }
  catch { issues.push(`${topic.id}: invalid formula`); }
  const controls = new Map(topic.controls.map((c) => [c.key, c]));
  if (controls.size !== topic.controls.length) issues.push(`${topic.id}: duplicate control`);
  for (const c of topic.controls) {
    if (!(c.min <= c.defaultValue && c.defaultValue <= c.max && c.step > 0)) issues.push(`${topic.id}/${c.key}: invalid control bounds`);
  }
  for (const preset of topic.presets) for (const [key, value] of Object.entries(preset.values)) {
    const c = controls.get(key);
    if (!c) issues.push(`${topic.id}/${preset.label}: unknown control ${key}`);
    else if (value < c.min || value > c.max) issues.push(`${topic.id}/${preset.label}: ${key} outside range`);
  }
}
console.log(`Checked ${VISUAL_3D_TOPICS.length} visual topics.`);
if (issues.length) { issues.forEach((issue) => console.error(issue)); process.exitCode = 1; }
else console.log('Visual topic structure is valid.');
