import type { Visual3DTopicSpec } from './catalog';

// Only animate parameters whose changing value represents the topic being shown.
const MOTION_CONTROLS: Record<string, string> = {
  '3d:dislocations': 'glidePos',
  '3d:slip-systems': 'shearStep',
  '3d:grain-boundaries': 'misorientation',
  '3d:xrd-bragg': 'thetaDeg',
  '3d:stress-strain': 'strainPct',
  '3d:necking-fracture': 'stageProgress',
  '3d:true-vs-engineering': 'engStrain',
  '3d:thermal-expansion': 'tempK',
  '3d:fixed-position-layout': 'craneAngle',
  '3d:material-handling': 'craneX',
  '3d:manufacturing-processes': 'cyclePos',
  '3d:bom-exploded': 'explode',
  '3d:newton-cooling': 'timeMin',
  '3d:complex-roots': 'thetaDeg',
};

export type DemoPlan =
  | { kind: 'motion'; key: string; min: number; max: number; label: string }
  | { kind: 'examples'; presets: Visual3DTopicSpec['presets'] }
  | null;

export function demoPlan(spec: Visual3DTopicSpec): DemoPlan {
  const key = MOTION_CONTROLS[spec.id];
  const control = spec.controls.find((c) => c.key === key);
  if (control && control.max > control.min) return { kind: 'motion', key: control.key, min: control.min, max: control.max, label: control.label };
  return spec.presets.length > 1 ? { kind: 'examples', presets: spec.presets } : null;
}

export const DEMO_DURATION_MS = 8000;

export function demoValues(plan: Exclude<DemoPlan, null>, progress: number, base: Record<string, number>): Record<string, number> {
  const p = Math.max(0, Math.min(1, progress));
  if (plan.kind === 'motion') return { ...base, [plan.key]: plan.min + (plan.max - plan.min) * p };
  const index = Math.min(plan.presets.length - 1, Math.floor(p * plan.presets.length));
  return { ...base, ...plan.presets[index].values };
}
