// Side panels that open on top of any page of the gate, so a lesson or a video never
// costs you your place in the plan, the topic list or a quiz.
import React, { useEffect, useState } from 'react';
import { Sigma, Video, X } from 'lucide-react';
import type { GateContent, GateNav } from './vaultTypes';
import type { GateIndex } from './shared';
import { LessonCard } from './FormulaLab';
import { TopicVideos } from './QuizExplain';

export const GateDrawer: React.FC<{ title: React.ReactNode; onClose: () => void; wide?: boolean; children: React.ReactNode }> = ({ title, onClose, wide = false, children }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="mg-drawer-backdrop" onClick={onClose}>
      <aside className={`mg-drawer ${wide ? 'gd-wide' : ''}`} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="mg-drawer-head">
          <strong className="gd-title">{title}</strong>
          <button type="button" className="mg-btn small" onClick={onClose} aria-label="Close">
            <X size={14} />
          </button>
        </div>
        {children}
      </aside>
    </div>
  );
};

// A lesson, with the other lessons of the same subtopic one click away
export const LessonDrawer: React.FC<{ id: string; content: GateContent; idx: GateIndex; nav: GateNav; onClose: () => void }> = ({ id, content, idx, nav, onClose }) => {
  const [cur, setCur] = useState(id);
  useEffect(() => setCur(id), [id]);
  const f = idx.formula.get(cur);
  if (!f) return null;
  const siblings = content.formulas.filter((x) => x.topic === f.topic);
  return (
    <GateDrawer
      wide
      onClose={onClose}
      title={
        <>
          <Sigma size={14} /> Learn · {idx.topic.get(f.topic)?.name}
        </>
      }
    >
      {siblings.length > 1 && (
        <div className="mg-presets" style={{ margin: 0 }}>
          {siblings.map((s) => (
            <button key={s.id} type="button" className={`mg-chip ${s.id === cur ? 'active' : ''}`} onClick={() => setCur(s.id)}>
              {s.name}
            </button>
          ))}
        </div>
      )}
      <LessonCard key={f.id} f={f} content={content} idx={idx} nav={nav} />
    </GateDrawer>
  );
};

export const VideoDrawer: React.FC<{ topic: string; content: GateContent; idx: GateIndex; nav: GateNav; onClose: () => void }> = ({ topic, content, idx, nav, onClose }) => (
  <GateDrawer
    wide
    onClose={onClose}
    title={
      <>
        <Video size={14} /> Watch · {idx.topic.get(topic)?.name}
      </>
    }
  >
    <TopicVideos topic={topic} content={content} idx={idx} nav={nav} />
  </GateDrawer>
);

// True when a topic (or its chapter) has at least one video
export const hasVideo = (topic: string, content: GateContent, idx: GateIndex) => {
  if (content.videoStops.some((s) => s.topic === topic)) return true;
  const subj = idx.subjectOfTopic.get(topic);
  return !!subj && content.videoStops.some((s) => subj.topics.includes(s.topic));
};
