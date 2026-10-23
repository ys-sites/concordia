// Access to the curricula (built at compile time) and the arithmetic of progress through them.
import { useEffect, useState } from 'react';
import SUMMARY from 'virtual:curriculum-summary';
import type { CourseId } from '../types';
import type { Curriculum, Lesson, Section, Step } from './model';
import { stepKey } from './progress/store';

export { SUMMARY };

let pending: Promise<Record<CourseId, Curriculum>> | null = null;
let loaded: Record<CourseId, Curriculum> | null = null;

export const loadCurricula = () => (pending ??= import('./curriculumData').then((m) => (loaded = m.default)));

export function useCurricula(): Record<CourseId, Curriculum> | null {
  const [c, setC] = useState(loaded);
  useEffect(() => {
    if (loaded) return;
    let alive = true;
    loadCurricula().then((x) => alive && setC(x));
    return () => {
      alive = false;
    };
  }, []);
  return c;
}

export const useCurriculum = (id: CourseId | null) => {
  const all = useCurricula();
  return all && id ? all[id] : null;
};

// ── walking a curriculum ─────────────────────────────────────────────────────────
export interface Located {
  section: Section;
  lesson: Lesson;
  step: Step;
  index: number; // position among all steps of the course
}

export const allSteps = (cur: Curriculum): Located[] => {
  const out: Located[] = [];
  for (const section of cur.sections) for (const lesson of section.lessons) for (const step of lesson.steps) out.push({ section, lesson, step, index: out.length });
  return out;
};

const stepCache = new WeakMap<Curriculum, Located[]>();
export const stepsOf = (cur: Curriculum) => {
  let s = stepCache.get(cur);
  if (!s) stepCache.set(cur, (s = allSteps(cur)));
  return s;
};

export const findLesson = (cur: Curriculum, lessonId: string) => {
  for (const section of cur.sections) {
    const lesson = section.lessons.find((l) => l.id === lessonId);
    if (lesson) return { section, lesson };
  }
  return null;
};

export const findStep = (cur: Curriculum, stepId: string) => stepsOf(cur).find((x) => x.step.id === stepId) ?? null;

// ── progress arithmetic ─────────────────────────────────────────────────────────
type Done = Record<string, number>;
const required = (s: Step) => !s.optional;

export const isDone = (done: Done, c: CourseId, s: Step) => !!done[stepKey(c, s.id)];

export function lessonProgress(c: CourseId, l: Lesson, done: Done) {
  const req = l.steps.filter(required);
  const n = req.filter((s) => isDone(done, c, s)).length;
  return { done: n, total: req.length, complete: req.length > 0 && n === req.length, started: n > 0 };
}

export function courseProgress(cur: Curriculum, done: Done) {
  let n = 0;
  let total = 0;
  let lessonsDone = 0;
  let lessons = 0;
  for (const s of cur.sections)
    for (const l of s.lessons) {
      const p = lessonProgress(cur.id, l, done);
      n += p.done;
      total += p.total;
      lessons++;
      if (p.complete) lessonsDone++;
    }
  return { done: n, total, pct: total ? Math.round((n / total) * 100) : 0, lessonsDone, lessons };
}

// The step to continue with: the first unfinished required step after the last place visited, else the first
// unfinished one in the course.
export function nextStep(cur: Curriculum, done: Done, lastStepId?: string): Located | null {
  const steps = stepsOf(cur);
  const from = lastStepId ? Math.max(0, steps.findIndex((x) => x.step.id === lastStepId)) : 0;
  const open = (x: Located) => required(x.step) && !isDone(done, cur.id, x.step);
  return steps.slice(from).find(open) ?? steps.find(open) ?? null;
}

export const fmtMinutes = (m: number) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}`);
export const fmtHours = (m: number) => (m < 60 ? `${m} min` : `${Math.round(m / 6) / 10} hours`);
export const fmtClock = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
