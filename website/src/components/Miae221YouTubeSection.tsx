import React, { useState } from 'react';
import {
  Play,
  Youtube,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ListVideo
} from 'lucide-react';
import { MIAE221_YOUTUBE_COMPANION, SubSubjectVideo } from '../data/miae221YouTubeVideos';
import { audio } from '../utils/audio';
import './Miae221YouTubeSection.css';

interface Props {
  onBack?: () => void;
}

export const Miae221YouTubeSection: React.FC<Props> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState<string>(MIAE221_YOUTUBE_COMPANION[0].id);

  const activeVideo =
    MIAE221_YOUTUBE_COMPANION.find((v) => v.id === selectedId) ||
    MIAE221_YOUTUBE_COMPANION[0];

  const handleSelect = (video: SubSubjectVideo) => {
    audio.playClick();
    setSelectedId(video.id);
  };

  return (
    <div className="m221-yt-hub">
      {/* Header Banner */}
      <div className="m221-yt-header">
        <div className="m221-yt-title-row">
          <h2 className="m221-yt-title">
            <Youtube size={26} className="text-rose" />
            <span>MIAE 221 · Sub-Subject Video Companion</span>
          </h2>
          <span className="m221-yt-badge">
            <Clock size={13} />
            <span>All Under 10 Mins · High Yield Only</span>
          </span>
        </div>
        <p className="m221-yt-subtitle">
          Curated short, top-rated visual explanations for every sub-subject in Materials Science. Filtered to high-yield 3–8 minute videos from world-class educators (The Efficient Engineer, LearnChemE, CrashCourse) to master concepts fast before exam day.
        </p>
      </div>

      {/* Video Stage & Active Info */}
      <div className="m221-yt-stage">
        {/* Responsive 16:9 YouTube Embed */}
        <div className="m221-yt-player-box">
          <iframe
            key={activeVideo.youtubeId}
            src={`${activeVideo.embedUrl}?rel=0&autoplay=0`}
            title={activeVideo.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Info & Key Takeaways Card */}
        <div className="m221-yt-info-card">
          <div>
            <div className="m221-yt-tag-row">
              <span className="m221-yt-lec-tag">{activeVideo.lectureRef}</span>
              <span className="m221-yt-dur-tag">⏱️ {activeVideo.duration}</span>
              <span className="m221-yt-channel-tag">By {activeVideo.channel}</span>
            </div>
            <h3 className="m221-yt-video-name">{activeVideo.videoTitle}</h3>
            <p className="m221-yt-summary">{activeVideo.summary}</p>

            <div className="m221-yt-takeaways">
              <div className="m221-yt-takeaways-title">Key Core Concepts Covered:</div>
              <ul>
                {activeVideo.keyTakeaways.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="m221-yt-actions">
            <a
              href={activeVideo.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="m221-yt-yt-btn"
              onClick={() => audio.playClick()}
            >
              <Youtube size={16} />
              <span>Watch on YouTube</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Playlist Grid: All Sub-Subjects */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ListVideo size={18} className="text-rose" />
        <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>
          Browse All 11 Sub-Subject Video Modules
        </h3>
      </div>

      <div className="m221-yt-grid" role="list">
        {MIAE221_YOUTUBE_COMPANION.map((video) => {
          const isActive = video.id === activeVideo.id;
          return (
            <div
              key={video.id}
              role="listitem"
              className={`m221-yt-card ${isActive ? 'is-active' : ''}`}
              onClick={() => handleSelect(video)}
            >
              <div className="m221-yt-card-top">
                <span className="m221-yt-card-subtopic">
                  Module {video.subtopicNum} · {video.lectureRef.split('(')[0].trim()}
                </span>
                <span className="m221-yt-card-dur">{video.duration}</span>
              </div>
              <h4 className="m221-yt-card-title">{video.subtopicTitle}</h4>
              <div className="m221-yt-card-channel">
                <Play size={12} className={isActive ? 'text-rose' : 'text-muted'} />
                <span>{video.channel}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
