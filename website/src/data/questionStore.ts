import { useEffect, useState } from 'react';
import type { PracticeQuestion } from '../types';

// The practice bank (~1 MB of data) is loaded on demand, in its own chunk, only when a quiz,
// the drill picker or the question bank needs it. Counts shown before that come from
// virtual:question-counts (computed at build time), so nothing has to load just to show a number.
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

export { default as QUESTION_COUNTS } from 'virtual:question-counts';
