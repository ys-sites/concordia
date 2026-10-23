// Everything the curriculum builder needs, gathered in one place for Vite (virtual:curriculum) and the validator.
import type { CourseId } from '../../types';
import type { Curriculum } from '../model';
import { PRACTICE_QUESTIONS } from '../../data/questionsData';
import { TEACHER_EXAM_QUESTIONS } from '../../data/teacherExamQuestions';
import { ENGR213_MIDTERM_DRILL_BANKS } from '../../data/engr213_midterm_drill_banks';
import { MIAE221_YOUTUBE_COMPANION } from '../../data/miae221YouTubeVideos';
import ENGR213 from '../../data/gates/engr213';
import INDU211 from '../../data/gates/indu211';
import MIAE215 from '../../data/gates/miae215';
import MIAE221 from '../../data/gates/miae221';
import { VIDEO_SOURCES } from '../videoSources';
import { COURSE_SPECS } from '../curriculum';
import { buildCurriculum, BuildReport } from './buildCurriculum';

export const COURSE_ORDER: CourseId[] = ['ENGR213', 'MIAE221', 'MIAE215', 'INDU211'];

export function buildAll(docs: string[]): { curricula: Record<CourseId, Curriculum>; reports: BuildReport[] } {
  const input = {
    bank: PRACTICE_QUESTIONS,
    teacher: TEACHER_EXAM_QUESTIONS,
    // the complex-numbers bank lists its 50 questions twice; keep one of each
    drill: [...new Map(Object.values(ENGR213_MIDTERM_DRILL_BANKS).flat().map((q) => [q.id, q])).values()],
    gates: { ENGR213, INDU211, MIAE215, MIAE221 },
    docs,
    videos: VIDEO_SOURCES,
    youtube221: MIAE221_YOUTUBE_COMPANION
  };
  const curricula = {} as Record<CourseId, Curriculum>;
  const reports: BuildReport[] = [];
  for (const c of COURSE_ORDER) {
    const { curriculum, report } = buildCurriculum(COURSE_SPECS[c], input);
    curricula[c] = curriculum;
    reports.push(report);
  }
  return { curricula, reports };
}
