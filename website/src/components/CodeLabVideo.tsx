import React, { useEffect, useState } from 'react';
import type { MotionLesson } from '../data/engr213Lessons';
import { MotionLessonPlayer } from './MotionLessonPlayer';

// Narrated walkthrough for one C++ Code Lab problem: how to read it, plan it with the 1-page cheat sheet,
// write it part by part and test it. The video map loads only while the Code Lab is open, so it never
// enters the main bundle.
export const CodeLabVideo: React.FC<{ challengeId: string }> = ({ challengeId }) => {
  const [lesson, setLesson] = useState<MotionLesson | null>(null);

  useEffect(() => {
    setLesson(null);
    let live = true;
    import('../data/miae215CodeLabVideos')
      .then((m) => live && setLesson(m.MIAE215_CODELAB_VIDEOS[challengeId] ?? null))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [challengeId]);

  if (!lesson) return null;
  return (
    <div className="ccl-video-row">
      <MotionLessonPlayer
        key={challengeId}
        lesson={lesson}
        badge="Video Walkthrough · How to Start & Write It"
        disclosure="following the teacher's exam and review programs, with every sample output checked by compiling and running the code"
      />
    </div>
  );
};

export default CodeLabVideo;
