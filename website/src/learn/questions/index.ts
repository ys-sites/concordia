// Loads every question of one course on demand (the bank, teacher papers and exam-prep data are large) and
// indexes them by id. Each course loads once per visit.
import { useEffect, useState } from 'react';
import type { CourseId, PracticeQuestion } from '../../types';
import type { LearnQuestion } from '../model';
import { loadGate } from '../../data/gates';
import { VIDEO_SOURCES } from '../videoSources';
import { solveVideoId } from '../solveVideoId';
import { fromGateExam, fromGordon, fromLessonItem, fromPractice } from './adapters';
import { openToChoices } from './choices';

export interface QuestionIndex {
  course: CourseId;
  byId: Map<string, LearnQuestion>;
}

const cache = new Map<CourseId, Promise<QuestionIndex>>();

// Each course's practice bank is its own chunk (vite.config.ts, questionBankPlugin): a quiz loads only its course
const BANKS: Record<CourseId, () => Promise<{ default: PracticeQuestion[] }>> = {
  ENGR213: () => import('virtual:practice-bank/ENGR213'),
  INDU211: () => import('virtual:practice-bank/INDU211'),
  MIAE215: () => import('virtual:practice-bank/MIAE215'),
  MIAE221: () => import('virtual:practice-bank/MIAE221')
};
let loadBank = (c: CourseId) => BANKS[c]().then((m) => m.default);
// node scripts (the content inventory) have no Vite: they read the bank from src/data instead
export const setBankLoader = (fn: (c: CourseId) => Promise<PracticeQuestion[]>) => {
  loadBank = fn;
};

async function build(c: CourseId): Promise<QuestionIndex> {
  const [bank, teacher, gate, drill] = await Promise.all([
    loadBank(c),
    import('../../data/teacherExamQuestions').then((m) => m.TEACHER_EXAM_QUESTIONS),
    loadGate(c),
    c === 'ENGR213' ? import('../../data/engr213_midterm_drill_banks').then((m) => Object.values(m.ENGR213_MIDTERM_DRILL_BANKS).flat()) : Promise.resolve([])
  ]);
  const solve = new Map<string, string>();
  for (const v of VIDEO_SOURCES) if (v.questionId) solve.set(v.questionId, v.id);
  for (const key of Object.keys(gate.solveVideos ?? {})) {
    const m = key.match(/^L:([^:]+):(\d+)$/);
    solve.set(m ? `l:${c}:${m[1]}:${m[2]}` : `x:${c}:${key}`, solveVideoId(c, key));
  }
  const byId = new Map<string, LearnQuestion>();
  const add = (q: LearnQuestion | null) => q && !byId.has(q.id) && byId.set(q.id, q);
  for (const q of bank) if (q.courseId === c) add(fromPractice(q, 'b', solve.get(`b:${q.id}`)));
  for (const q of teacher) if (q.courseId === c) add(fromPractice(q, 't', solve.get(`t:${q.id}`)));
  for (const q of drill) add(fromPractice(q, 'd'));
  for (const q of gate.questions) add(fromGateExam(c, gate, q, solve.get(`x:${c}:${q.id}`)));
  for (const f of gate.formulas) (f.learn?.quiz ?? []).forEach((_, i) => add(fromLessonItem(c, gate, f, i, solve.get(`l:${c}:${f.id}:${i}`))));
  for (const p of gate.gordonExamsData?.papers ?? []) for (const q of p.questions) add(fromGordon(p, q));
  openToChoices(byId);
  return { course: c, byId };
}

export const loadCourseQuestions = (c: CourseId): Promise<QuestionIndex> => {
  let p = cache.get(c);
  if (!p) {
    p = build(c);
    cache.set(c, p);
  }
  return p;
};

export function useCourseQuestions(c: CourseId | null): QuestionIndex | null {
  const [idx, setIdx] = useState<QuestionIndex | null>(null);
  useEffect(() => {
    if (!c) return;
    let alive = true;
    setIdx(null);
    loadCourseQuestions(c).then((x) => alive && setIdx(x));
    return () => {
      alive = false;
    };
  }, [c]);
  return idx && idx.course === c ? idx : null;
}
