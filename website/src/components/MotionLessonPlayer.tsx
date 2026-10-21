import React, { useRef } from 'react';
import { Clapperboard, Sparkles } from 'lucide-react';
import { getVideoUrl, publicCoursePath } from '../utils/pdfUrl';
import type { MotionLesson } from '../data/engr213Lessons';
import './MotionLessonPlayer.css';

export const formatLessonTime = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

// Narrated motion-graphics lesson for one ODE archetype. preload="none" keeps the page free of video
// traffic until the student presses play; chapter chips seek straight to each part of the lesson.
// Note: These videos were programmatically AI-generated from code using mathematical animations.
export const MotionLessonPlayer: React.FC<{ lesson: MotionLesson; badge?: string; disclosure?: string }> = ({
  lesson,
  badge = 'Motion Lesson · Watch First',
  disclosure = 'based directly on Concordia teacher lecture notes'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const seek = (t: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = t;
    v.play().catch(() => {});
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const v = e.currentTarget;
    const currentSrc = v.currentSrc || v.src;
    const localFallback = `/courses/${publicCoursePath(lesson.video)}`;
    if (currentSrc && !currentSrc.endsWith(localFallback)) {
      console.warn(`[Video Player] Primary CDN stream failed. Retrying with local course endpoint: ${localFallback}`);
      v.src = localFallback;
      v.load();
    }
  };

  return (
    <div className="ec-lesson-card">
      <div className="ec-lesson-head">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span className="ec-lesson-badge">
            <Clapperboard size={14} /> {badge}
          </span>
          <span className="ec-lesson-ai-badge">
            <Sparkles size={12} /> AI-Generated from Code
          </span>
        </div>
        <span className="ec-lesson-meta">
          {formatLessonTime(lesson.duration)} · {lesson.source}
        </span>
      </div>
      <video
        ref={videoRef}
        className="ec-lesson-video"
        controls
        preload="metadata"
        playsInline
        crossOrigin="anonymous"
        poster={getVideoUrl(lesson.poster)}
        src={getVideoUrl(lesson.video)}
        onError={handleVideoError}
      >
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
          <strong>AI-Generated from Code:</strong> This motion-graphics video was programmatically synthesized from algorithmic code (vector graphics &amp; parametric mathematical animations) {disclosure}.
        </div>
      </div>
    </div>
  );
};
