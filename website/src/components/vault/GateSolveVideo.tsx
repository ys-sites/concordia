import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clapperboard } from 'lucide-react';
import type { MotionLesson } from '../../data/engr213Lessons';
import { MotionLessonPlayer } from '../MotionLessonPlayer';
import { solutionVideoStart } from '../../learn/quiz/solutionVideoStart';
import './gateSolveVideo.css';

// Narrated, slow, step-by-step solve video for one gate question. `itemKey` is the drill key: the exam
// question id, or "L:<lesson>:<index>" for a lesson question. The video map (GateIndex.solveVideos) lives inside
// the encrypted gate content, so the links only exist after the gate is unlocked. Renders nothing for questions without a video.
export const GateSolveVideo: React.FC<{ videos?: Record<string, MotionLesson>; itemKey?: string }> = ({ videos, itemKey }) => {
  const lesson = itemKey ? videos?.[itemKey] : undefined;
  const [open, setOpen] = useState(false);
  if (!lesson) return null;
  const mmss = `${Math.floor(lesson.duration / 60)}:${String(Math.round(lesson.duration % 60)).padStart(2, '0')}`;
  return (
    <div className="gsv">
      <button type="button" className={`gsv-btn${open ? ' open' : ''}`} onClick={() => setOpen((o) => !o)}>
        <Clapperboard size={16} />
        <span>{open ? 'Hide the video solution' : `Watch the video solution, step by step (${mmss})`}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <MotionLessonPlayer
          key={itemKey}
          lesson={lesson}
          startAt={solutionVideoStart(lesson)}
          badge="Video Solution · Step by Step"
          disclosure="for this exact question: how to recognise the type, the plan, every step, the check and the traps (option letters follow the original paper; your quiz may shuffle them)"
        />
      )}
    </div>
  );
};

export default GateSolveVideo;
