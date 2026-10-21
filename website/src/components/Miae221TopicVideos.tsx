import React, { useState } from 'react';
import { TopicVideosHub } from './TopicVideosHub';
import { Miae221YouTubeSection } from './Miae221YouTubeSection';
import { MIAE221_MOTION_LESSONS } from '../data/miae221Lessons';
import { Youtube, Sparkles, Clapperboard, ArrowLeft } from 'lucide-react';
import { audio } from '../utils/audio';

// Lazy-loaded from CourseWorkspace so the video data never enters the main bundle.
export const Miae221TopicVideos: React.FC<{ onLaunchDrill?: (sectionId: string) => void; onBack?: () => void }> = ({
  onLaunchDrill,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'motion'>('youtube');

  return (
    <div className="miae221-videos-container">
      {/* Top Switcher Tabs: Curated <10 min YouTube Videos vs AI Motion Lessons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--border-subtle, #e2e8f0)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {onBack && (
            <button
              type="button"
              className="tvh-back"
              onClick={onBack}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle, #cbd5e1)',
                background: 'var(--surface, #ffffff)',
                color: 'var(--text-secondary, #475569)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={14} /> Back
            </button>
          )}

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              className={`aspect-tab-btn ${activeTab === 'youtube' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setActiveTab('youtube');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                fontSize: '13px',
                fontWeight: 700,
                borderRadius: '8px',
                border: activeTab === 'youtube' ? '1.5px solid #ef4444' : '1px solid var(--border-subtle, #cbd5e1)',
                background: activeTab === 'youtube' ? 'rgba(239, 68, 68, 0.08)' : 'var(--surface, #ffffff)',
                color: activeTab === 'youtube' ? '#dc2626' : 'var(--text-secondary, #475569)',
                cursor: 'pointer'
              }}
            >
              <Youtube size={16} />
              <span>🎬 Curated YouTube Master Videos (&lt; 10 min)</span>
            </button>

            <button
              type="button"
              className={`aspect-tab-btn ${activeTab === 'motion' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setActiveTab('motion');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                fontSize: '13px',
                fontWeight: 700,
                borderRadius: '8px',
                border: activeTab === 'motion' ? '1.5px solid #6366f1' : '1px solid var(--border-subtle, #cbd5e1)',
                background: activeTab === 'motion' ? 'rgba(99, 102, 241, 0.08)' : 'var(--surface, #ffffff)',
                color: activeTab === 'motion' ? '#4f46e5' : 'var(--text-secondary, #475569)',
                cursor: 'pointer'
              }}
            >
              <Sparkles size={15} />
              <span>🤖 AI Motion-Graphics Lessons</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'youtube' ? (
        <Miae221YouTubeSection onBack={onBack} />
      ) : (
        <TopicVideosHub
          courseCode="MIAE221"
          title="MIAE 221 · Teacher Topics Explained (AI Videos)"
          intro="One narrated motion-graphics lesson per teacher topic, Chapters 1–7. Each video follows the professor's lecture slides and worked examples; every subtopic is a chapter you can jump to, and each topic links to its practice drill."
          lessons={MIAE221_MOTION_LESSONS}
          onLaunchDrill={onLaunchDrill}
          onBack={onBack}
        />
      )}
    </div>
  );
};

export default Miae221TopicVideos;
