import React, { useRef } from 'react';
import { Clapperboard, Sparkles, Code2 } from 'lucide-react';
import { getPdfUrl } from '../utils/pdfUrl';
import type { MotionLesson } from '../data/engr213Lessons';

export const formatLessonTime = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

// Narrated motion-graphics lesson for one ODE archetype. preload="none" keeps the page free of video
// traffic until the student presses play; chapter chips seek straight to each part of the lesson.
// Note: These videos were programmatically AI-generated from code using mathematical animations.
export const MotionLessonPlayer: React.FC<{ lesson: MotionLesson }> = ({ lesson }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const seek = (t: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = t;
    v.play().catch(() => {});
  };

  return (
    <div className="ec-lesson-card">
      <div className="ec-lesson-head">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span className="ec-lesson-badge">
            <Clapperboard size={14} /> Motion Lesson · Watch First
          </span>
          <span className="ec-lesson-ai-badge">
            <Sparkles size={12} /> AI-Generated from Code
          </span>
        </div>
        <span className="ec-lesson-meta">
          {formatLessonTime(lesson.duration)} · captions · {lesson.source}
        </span>
      </div>
      <video
        ref={videoRef}
        className="ec-lesson-video"
        controls
        preload="none"
        playsInline
        poster={getPdfUrl(lesson.poster)}
        src={getPdfUrl(lesson.video)}
      >
        <track kind="captions" src={getPdfUrl(lesson.captions)} srcLang="en" label="English" />
      </video>
      <div className="ec-lesson-chapters">
        {lesson.chapters.map((c) => (
          <button key={c.start} type="button" className="ec-lesson-chip" onClick={() => seek(c.start)}>
            <span>{formatLessonTime(c.start)}</span>
            {c.label}
          </button>
        ))}
      </div>
      <div className="ec-lesson-ai-disclosure">
        <Sparkles size={14} className="ec-ai-sparkle-icon" />
        <div>
          <strong>AI-Generated from Code:</strong> This motion-graphics video was programmatically synthesized from algorithmic code (vector graphics &amp; parametric mathematical animations) based directly on Concordia teacher lecture notes.
        </div>
      </div>
    </div>
  );
};
