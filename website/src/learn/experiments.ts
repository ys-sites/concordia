// A small browser-local experiment. The assignment is stable in this browser
// and contains no account or identity information.
const KEY = 'concordia.experiments.v1';

export type PracticeSizeVariant = 5 | 10;

function read(): { practiceSize?: PracticeSizeVariant } {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

export function practiceSizeVariant(): PracticeSizeVariant {
  const saved = read();
  if (saved.practiceSize === 5 || saved.practiceSize === 10) return saved.practiceSize;
  const practiceSize: PracticeSizeVariant = Math.random() < 0.5 ? 5 : 10;
  try {
    localStorage.setItem(KEY, JSON.stringify({ practiceSize }));
  } catch {
    // Storage can be blocked; the visit still works with an in-memory choice.
  }
  return practiceSize;
}

export function boundedPracticeSize(pool: number, configured?: number) {
  if (configured && configured !== 10) return Math.min(pool, configured);
  return Math.min(pool, practiceSizeVariant());
}
