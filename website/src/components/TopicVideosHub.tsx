import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Clapperboard, Layers, Sparkles, Target } from 'lucide-react';
import { MotionLessonPlayer, formatLessonTime } from './MotionLessonPlayer';
import type { TopicLesson } from '../data/miae221Lessons';
import { audio } from '../utils/audio';
import './TopicVideosHub.css';

interface Props {
  courseCode: string;
  title: string;
  intro: string;
  lessons: TopicLesson[];
  onLaunchDrill?: (sectionId: string) => void;
  onBack?: () => void;
}

const STORE_KEY = (code: string) => `topic-videos-last:${code}`;

// One narrated motion lesson per teacher topic: pick a topic, watch it, jump between its subtopics
// (chapter chips in the player), then drill the matching quiz section.
export const TopicVideosHub: React.FC<Props> = ({ courseCode, title, intro, lessons, onLaunchDrill, onBack }) => {
  const [selectedId, setSelectedId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORE_KEY(courseCode));
      if (saved && lessons.some((l) => l.id === saved)) return saved;
    } catch {}
    return lessons[0]?.id ?? '';
  });
  const index = Math.max(0, lessons.findIndex((l) => l.id === selectedId));
  const lesson = lessons[index];
  const totalMinutes = useMemo(() => Math.round(lessons.reduce((n, l) => n + l.duration, 0) / 60), [lessons]);

  const select = (id: string) => {
    audio.playClick();
    setSelectedId(id);
    try {
      localStorage.setItem(STORE_KEY(courseCode), id);
    } catch {}
  };

  if (!lesson) return null;
  const next = lessons[index + 1];

  return (
    <div className="tvh">
      <header className="tvh-hero">
        <div className="tvh-hero-top">
          {onBack && (
            <button type="button" className="tvh-back" onClick={onBack}>
              <ArrowLeft size={14} /> Back
            </button>
          )}
          <span className="tvh-ai">
            <Sparkles size={12} /> AI-generated from code
          </span>
          <span className="tvh-count">
            {lessons.length} videos · {totalMinutes} min · captions
          </span>
        </div>
        <h2>
          <Clapperboard size={22} /> {title}
        </h2>
        <p>{intro}</p>
      </header>

      <div className="tvh-grid" role="list">
        {lessons.map((l) => (
          <button
            key={l.id}
            type="button"
            role="listitem"
            className={`tvh-topic ${l.id === lesson.id ? 'active' : ''}`}
            onClick={() => select(l.id)}
          >
            <span className="tvh-topic-top">
              <span className="tvh-num">Topic {String(l.num).padStart(2, '0')}</span>
              <span className="tvh-dur">{formatLessonTime(l.duration)}</span>
            </span>
            <strong>{l.title}</strong>
            <span className="tvh-src">{l.lectures}</span>
            <span className="tvh-subs">
              <Layers size={11} /> {l.chapters.length - 1} subtopics
            </span>
          </button>
        ))}
      </div>

      <section className="tvh-stage">
        <div className="tvh-stage-head">
          <h3>
            Topic {String(lesson.num).padStart(2, '0')} · {lesson.title}
          </h3>
          <div className="tvh-actions">
            {lesson.section && onLaunchDrill && (
              <button type="button" className="tvh-btn tvh-btn-drill" onClick={() => onLaunchDrill(lesson.section as string)}>
                <Target size={14} /> Drill this topic
              </button>
            )}
            {next && (
              <button type="button" className="tvh-btn" onClick={() => select(next.id)}>
                Next topic <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
        <MotionLessonPlayer key={lesson.id} lesson={lesson} />
      </section>
    </div>
  );
};

export default TopicVideosHub;
