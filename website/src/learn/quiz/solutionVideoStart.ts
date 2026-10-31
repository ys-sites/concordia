import type { MotionLesson } from '../../data/engr213Lessons';

/** Only use an explicitly marked solution chapter. Earlier content remains seekable. */
export function solutionVideoStart(lesson: MotionLesson, savedTime?: number): number | undefined {
  const chapter = lesson.chapters?.find((item) => /^solve it$/i.test(item.label.trim()));
  const start = chapter && Number.isFinite(chapter.start) && chapter.start >= 0 && chapter.start < lesson.duration ? chapter.start : undefined;
  if (savedTime !== undefined && Number.isFinite(savedTime) && savedTime >= (start ?? 0) && savedTime < lesson.duration - 5) return savedTime;
  return start;
}
