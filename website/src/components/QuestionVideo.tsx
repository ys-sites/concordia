import React, { useEffect, useState } from 'react';
import type { MotionLesson } from '../data/engr213Lessons';
import { MotionLessonPlayer } from './MotionLessonPlayer';

// Questions with a narrated solve video (MIAE 221 Teacher Midterm Practice, 2017 sample midterm).
// The video map is loaded only when one of these questions is on screen, so it never enters the main bundle.
const HAS_VIDEO = /^TX_MIAE221_2017_Q\d\d$/;

export const QuestionVideo: React.FC<{ questionId: string }> = ({ questionId }) => {
  const [lesson, setLesson] = useState<MotionLesson | null>(null);

  useEffect(() => {
    setLesson(null);
    if (!HAS_VIDEO.test(questionId)) return;
    let live = true;
    import('../data/miae221MidtermVideos')
      .then((m) => live && setLesson(m.MIAE221_MIDTERM_VIDEOS[questionId] ?? null))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [questionId]);

  if (!lesson) return null;
  return (
    <MotionLessonPlayer
      key={questionId}
      lesson={lesson}
      badge="Video Solution · Step by Step"
      disclosure="following the teacher's 2017 sample midterm and its official marking key"
    />
  );
};
