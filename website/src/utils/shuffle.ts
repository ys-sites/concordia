/**
 * Practice-mode randomization.
 *
 * Invariant: every practice surface must present BOTH
 *   1. questions in a freshly shuffled order, and
 *   2. each question's answer options in a freshly shuffled order
 * on every run — so students learn the material, never the positions.
 */

export function shuffled<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface ShufflableQuestion {
  options: readonly unknown[];
  correctIndex: number;
}

/**
 * Shuffle a question's answer options and remap correctIndex to the new position.
 * Returns the shuffled options, the new correct index, and the permutation
 * (order[newPos] = oldPos) so index-keyed metadata (e.g. whyWrong) can be remapped.
 */
export function shuffleOptions<T>(options: readonly T[], correctIndex: number): {
  options: T[];
  correctIndex: number;
  order: number[];
} {
  const order = shuffled(options.map((_, i) => i));
  return {
    options: order.map((i) => options[i]),
    correctIndex: order.indexOf(correctIndex),
    order,
  };
}
