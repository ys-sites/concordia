import type { CourseId } from '../types';

// Past-exam solve videos live in each course's exam-prep data (GateContent.solveVideos), keyed by drill key: the
// past-exam question id or "L:<lesson>:<index>". Video id: `solve:<key>` for ENGR 213 (the original scheme, kept
// so saved progress still matches) and `solve:<course>:<key>` for every other course.
export const solveVideoId = (c: CourseId, drillKey: string) => (c === 'ENGR213' ? `solve:${drillKey}` : `solve:${c}:${drillKey}`);

export const parseSolveVideoId = (id: string): { course: CourseId; key: string } | null => {
  if (!id.startsWith('solve:')) return null;
  const rest = id.slice('solve:'.length);
  const m = rest.match(/^(INDU211|MIAE215|MIAE221):(.+)$/);
  return m ? { course: m[1] as CourseId, key: m[2] } : { course: 'ENGR213', key: rest };
};
