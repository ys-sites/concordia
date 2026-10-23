// Every course video under one id scheme. The curriculum builder places each one in exactly one lesson (see
// build/buildCurriculum.ts); the player resolves an id back to its MotionLesson here. Solve videos for ENGR 213
// past-exam questions live in the course's exam-prep data (src/data/gates/engr213.ts) and are resolved lazily.
import type { MotionLesson } from '../data/engr213Lessons';
import type { CourseId } from '../types';
import { genericExamSource } from './examLabel';
import { ENGR213_MOTION_LESSONS } from '../data/engr213Lessons';
import { MIAE221_MOTION_LESSONS } from '../data/miae221Lessons';
import { MIAE215_CODELAB_VIDEOS } from '../data/miae215CodeLabVideos';
import { MIAE215_MIDTERM_VIDEOS } from '../data/miae215MidtermVideos';
import { MIAE215_PRACTICE_MIDTERM_VIDEOS } from '../data/miae215PracticeMidtermVideos';
import { MIAE221_MIDTERM_VIDEOS } from '../data/miae221MidtermVideos';

export type { MotionLesson };

// kind: lesson = teaches a topic · solution = solves one question · walkthrough = a long problem walkthrough
export interface VideoSource {
  id: string;
  courseId: CourseId;
  kind: 'lesson' | 'solution' | 'walkthrough';
  lesson: MotionLesson;
  questionId?: string; // LearnQuestion id this video solves
}

const entries = <T,>(rec: Record<string, T>) => Object.entries(rec);

// The Fall 2026 practice questions (TX_MIAE215_32–34) are solved by the Practice Midterm 2026 walkthroughs;
// the three short solution videos the registry also lists were never rendered, so they are left out.
const SOLVED_BY_WALKTHROUGH: Record<string, string> = { pm26_q1: 't:TX_MIAE215_32', pm26_q2a: 't:TX_MIAE215_33', pm26_q2b: 't:TX_MIAE215_34' };
const NOT_RENDERED = new Set(['TX_MIAE215_32', 'TX_MIAE215_33', 'TX_MIAE215_34']);

export const VIDEO_SOURCES: VideoSource[] = [
  ...entries(ENGR213_MOTION_LESSONS).map(([k, lesson]) => ({ id: `tutor:${k}`, courseId: 'ENGR213' as const, kind: 'lesson' as const, lesson })),
  ...MIAE221_MOTION_LESSONS.map((lesson) => ({ id: `topic221:${lesson.id}`, courseId: 'MIAE221' as const, kind: 'lesson' as const, lesson })),
  ...entries(MIAE215_CODELAB_VIDEOS).map(([k, lesson]) => ({ id: `lab215:${k}`, courseId: 'MIAE215' as const, kind: 'walkthrough' as const, lesson })),
  ...entries(MIAE215_PRACTICE_MIDTERM_VIDEOS).map(([k, lesson]) => ({ id: `pm215:${k}`, courseId: 'MIAE215' as const, kind: 'walkthrough' as const, lesson, questionId: SOLVED_BY_WALKTHROUGH[k] })),
  ...entries(MIAE215_MIDTERM_VIDEOS)
    .filter(([k]) => !NOT_RENDERED.has(k))
    .map(([k, lesson]) => ({ id: `mid215:${k}`, courseId: 'MIAE215' as const, kind: 'solution' as const, lesson, questionId: `t:${k}` })),
  ...entries(MIAE221_MIDTERM_VIDEOS).map(([k, lesson]) => ({ id: `mid221:${k}`, courseId: 'MIAE221' as const, kind: 'solution' as const, lesson, questionId: `t:${k}` }))
];

const BY_ID = new Map(VIDEO_SOURCES.map((v) => [v.id, v]));

export const staticVideo = (id: string): VideoSource | undefined => BY_ID.get(id);

// ENGR 213 past-exam solve videos: id `solve:<drill key>` where the drill key is the past-exam question id or
// "L:<lesson>:<index>" (see src/data/gates/types.ts, solveVideos)
export const solveVideoId = (drillKey: string) => `solve:${drillKey}`;

export const resolveVideo = async (id: string): Promise<MotionLesson | null> => {
  const s = BY_ID.get(id);
  if (s) return s.lesson;
  if (id.startsWith('solve:')) {
    const { loadGate } = await import('../data/gates');
    const gate = await loadGate('ENGR213');
    const v = gate.solveVideos?.[id.slice('solve:'.length)] ?? null;
    // the stored source names the paper it came from; the player shows the generic label instead
    return v ? { ...v, source: genericExamSource(v.source) } : null;
  }
  return null;
};
