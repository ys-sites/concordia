// Exam-prep content per course, loaded on demand so no course pays for another's data.
import type { CourseId } from '../../types';
import type { GateContent } from './types';

const LOADERS: Record<CourseId, () => Promise<{ default: GateContent }>> = {
  ENGR213: () => import('./engr213'),
  INDU211: () => import('./indu211'),
  MIAE215: () => import('./miae215'),
  MIAE221: () => import('./miae221')
};

const cache = new Map<CourseId, Promise<GateContent>>();

export const loadGate = (course: CourseId): Promise<GateContent> => {
  let p = cache.get(course);
  if (!p) {
    p = LOADERS[course]().then((m) => m.default);
    cache.set(course, p);
  }
  return p;
};

export type { GateContent };
