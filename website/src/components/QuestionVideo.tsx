import React, { useEffect, useState } from 'react';
import type { MotionLesson } from '../data/engr213Lessons';
import { MotionLessonPlayer } from './MotionLessonPlayer';

// Questions with a narrated solve video (Teacher Midterm Practice: MIAE 221 2017 sample midterm, MIAE 215
// C++ practice papers). Each video map is loaded only when one of its questions is on screen, so none of
// them enter the main bundle.
const SOURCES: { match: RegExp; load: () => Promise<Record<string, MotionLesson>>; disclosure: string }[] = [
  {
    match: /^TX_MIAE221_2017_Q\d\d$/,
    load: () => import('../data/miae221MidtermVideos').then((m) => m.MIAE221_MIDTERM_VIDEOS),
    disclosure: "following the teacher's 2017 sample midterm and its official marking key"
  },
  {
    match: /^TX_MIAE215_\d\d$/,
    load: () => import('../data/miae215MidtermVideos').then((m) => m.MIAE215_MIDTERM_VIDEOS),
    disclosure: "following the teacher's C++ practice papers, with every output checked by running the code"
  }
];

export const QuestionVideo: React.FC<{ questionId: string }> = ({ questionId }) => {
  const [lesson, setLesson] = useState<MotionLesson | null>(null);
  const source = SOURCES.find((s) => s.match.test(questionId));

  useEffect(() => {
    setLesson(null);
    if (!source) return;
    let live = true;
    source
      .load()
      .then((videos) => live && setLesson(videos[questionId] ?? null))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [questionId, source]);

  if (!lesson || !source) return null;
  return <MotionLessonPlayer key={questionId} lesson={lesson} badge="Video Solution · Step by Step" disclosure={source.disclosure} />;
};
