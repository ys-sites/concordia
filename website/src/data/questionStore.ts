import { useEffect, useState } from 'react';
import type { PracticeQuestion } from '../types';

// The practice bank (~1 MB of data) is loaded on demand, in its own chunk, so the first page
// paints without it. It is prefetched while the browser is idle right after the first paint,
// so by the time anyone opens a quiz or the question bank it is usually already here.
let cache: PracticeQuestion[] | null = null;
let pending: Promise<PracticeQuestion[]> | null = null;

export const loadQuestions = (): Promise<PracticeQuestion[]> =>
  (pending ??= import('./questionsData').then((m) => (cache = m.PRACTICE_QUESTIONS)));

export const cachedQuestions = () => cache;

export const useQuestions = (): PracticeQuestion[] | null => {
  const [qs, setQs] = useState<PracticeQuestion[] | null>(cache);
  useEffect(() => {
    if (cache) return;
    let alive = true;
    loadQuestions().then((q) => alive && setQs(q));
    return () => {
      alive = false;
    };
  }, []);
  return qs;
};

if (typeof window !== 'undefined') {
  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback;
  const prefetch = () => void loadQuestions();
  if (idle) idle(prefetch, { timeout: 2500 });
  else setTimeout(prefetch, 1200);
}
