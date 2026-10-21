import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Sparkles,
  Clapperboard,
  X,
  Gauge
} from 'lucide-react';
import { getVideoUrl, publicCoursePath } from '../utils/pdfUrl';
import type { MotionLesson } from '../data/engr213Lessons';
import './MotionLessonPlayer.css';

export const formatLessonTime = (t: number) => {
  if (isNaN(t) || t < 0) return '0:00';
  const mins = Math.floor(t / 60);
  const secs = Math.floor(t % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
};

interface MotionLessonPlayerProps {
  lesson: MotionLesson;
  badge?: string;
  disclosure?: string;
}

export const MotionLessonPlayer: React.FC<MotionLessonPlayerProps> = ({
  lesson,
  badge = 'Motion Lesson · Watch First',
  disclosure = 'based directly on Concordia teacher lecture notes'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimerRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(lesson.duration || 0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [bufferedPercent, setBufferedPercent] = useState<number>(0);
  const [showSpeedMenu, setShowSpeedMenu] = useState<boolean>(false);

  // Play / Pause toggle
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  // Seek handler
  const seek = useCallback((t: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(t, v.duration || t));
    setCurrentTime(v.currentTime);
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  // Scrubber scrub
  const handleScrubberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  // Volume toggle
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isMuted) {
      v.muted = false;
      v.volume = volume > 0 ? volume : 0.8;
      setIsMuted(false);
    } else {
      v.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    const v = videoRef.current;
    if (!v) return;
    v.volume = newVol;
    setVolume(newVol);
    v.muted = newVol === 0;
    setIsMuted(newVol === 0);
  };

  // Speed selection
  const handleSpeedSelect = (speed: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = speed;
    setPlaybackRate(speed);
    setShowSpeedMenu(false);
  };

  // Fullscreen toggle (using Fullscreen API on container)
  const toggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          await (container as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen toggle error:', err);
    }
  }, []);

  // Exit fullscreen explicitly (ESC button)
  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Exit fullscreen error:', err);
    }
  }, []);

  // Track native fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);
      // When entering fullscreen, show controls briefly then autohide
      setShowControls(true);
      if (isFs && isPlaying) {
        if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
        hideControlsTimerRef.current = window.setTimeout(() => {
          setShowControls(false);
        }, 2500);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, [isPlaying]);

  // Mouse activity timer for hiding controls on idle
  const handleUserActivity = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }

    // Only auto-hide when video is playing
    if (isPlaying) {
      hideControlsTimerRef.current = window.setTimeout(() => {
        setShowControls(false);
        setShowSpeedMenu(false);
      }, 2500);
    }
  }, [isPlaying]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hideControlsTimerRef.current) {
        clearTimeout(hideControlsTimerRef.current);
      }
    };
  }, []);

  // Keyboard controls (Space = play/pause, F = fullscreen, Esc = exit, Left/Right = seek)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs/textareas
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        togglePlay();
        handleUserActivity();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        e.preventDefault();
        exitFullscreen();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const v = videoRef.current;
        if (v) seek(v.currentTime - 5);
        handleUserActivity();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const v = videoRef.current;
        if (v) seek(v.currentTime + 5);
        handleUserActivity();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
        handleUserActivity();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleFullscreen, exitFullscreen, isFullscreen, seek, handleUserActivity]);

  // Video event handlers
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);

    // Update buffer progress
    if (v.buffered.length > 0) {
      const bufferedEnd = v.buffered.end(v.buffered.length - 1);
      setBufferedPercent((bufferedEnd / (v.duration || 1)) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setDuration(v.duration || lesson.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const v = e.currentTarget;
    const currentSrc = v.currentSrc || v.src;
    const localFallback = `/courses/${publicCoursePath(lesson.video)}`;
    if (currentSrc && !currentSrc.endsWith(localFallback)) {
      console.warn(`[Video Player] Primary CDN stream failed. Retrying with local endpoint: ${localFallback}`);
      v.src = localFallback;
      v.load();
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="ec-lesson-card">
      {/* Header Info */}
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
          {formatLessonTime(duration)} · {lesson.source}
        </span>
      </div>

      {/* Main Video Viewport with Fullscreen & Auto-Hide Control System */}
      <div
        ref={containerRef}
        className={`ec-video-container ${isFullscreen ? 'is-fullscreen' : ''} ${
          showControls ? 'controls-visible' : 'controls-hidden'
        }`}
        onMouseMove={handleUserActivity}
        onMouseEnter={handleUserActivity}
        onClick={handleUserActivity}
      >
        <video
          ref={videoRef}
          className="ec-video-element"
          preload="metadata"
          playsInline
          crossOrigin="anonymous"
          poster={getVideoUrl(lesson.poster)}
          src={getVideoUrl(lesson.video)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={handleVideoError}
          onClick={togglePlay}
        />

        {/* Big Center Play Icon overlay when paused */}
        {!isPlaying && (
          <button
            type="button"
            className="ec-big-play-btn"
            onClick={togglePlay}
            aria-label="Play video"
          >
            <Play size={36} fill="currentColor" />
          </button>
        )}

        {/* Floating ESC / Exit Fullscreen Button in Fullscreen Mode */}
        {isFullscreen && (
          <button
            type="button"
            className="ec-fs-exit-badge"
            onClick={exitFullscreen}
            title="Exit Fullscreen (Esc)"
          >
            <X size={15} />
            <span>Exit Fullscreen</span>
            <kbd>ESC</kbd>
          </button>
        )}

        {/* Interactive Custom Video Controls Bar */}
        <div className="ec-custom-controls">
          {/* Progress / Scrubber Bar */}
          <div className="ec-progress-bar-container">
            <div className="ec-progress-track">
              <div
                className="ec-progress-buffered"
                style={{ width: `${bufferedPercent}%` }}
              />
              <div
                className="ec-progress-filled"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <input
              type="range"
              className="ec-progress-scrubber"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleScrubberChange}
              aria-label="Video scrubber"
            />
          </div>

          {/* Bottom Controls Row */}
          <div className="ec-controls-row">
            <div className="ec-controls-left">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                className="ec-ctrl-btn"
                onClick={togglePlay}
                title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={17} /> : <Play size={17} fill="currentColor" />}
              </button>

              {/* Rewind 10s */}
              <button
                type="button"
                className="ec-ctrl-btn"
                onClick={() => seek(currentTime - 10)}
                title="Rewind 10 seconds"
                aria-label="Rewind 10 seconds"
              >
                <RotateCcw size={15} />
              </button>

              {/* Time Display */}
              <div className="ec-time-display">
                <span>{formatLessonTime(currentTime)}</span>
                <span className="ec-time-sep">/</span>
                <span>{formatLessonTime(duration)}</span>
              </div>
            </div>

            <div className="ec-controls-right">
              {/* Volume & Mute */}
              <div className="ec-volume-group">
                <button
                  type="button"
                  className="ec-ctrl-btn"
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>
                <input
                  type="range"
                  className="ec-volume-slider"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume slider"
                />
              </div>

              {/* Speed Selector */}
              <div className="ec-speed-container">
                <button
                  type="button"
                  className="ec-ctrl-btn ec-speed-btn"
                  onClick={() => setShowSpeedMenu((prev) => !prev)}
                  title="Playback speed"
                >
                  <Gauge size={14} />
                  <span>{playbackRate}x</span>
                </button>

                {showSpeedMenu && (
                  <div className="ec-speed-menu">
                    {[0.75, 1, 1.25, 1.5, 2].map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        className={`ec-speed-item ${playbackRate === spd ? 'active' : ''}`}
                        onClick={() => handleSpeedSelect(spd)}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fullscreen Toggle */}
              <button
                type="button"
                className="ec-ctrl-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Exit Fullscreen (Esc / F)' : 'Fullscreen (F)'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Seek Chips */}
      {lesson.chapters && lesson.chapters.length > 0 && (
        <div className="ec-lesson-chapters">
          {lesson.chapters.map((c) => (
            <button
              key={c.start}
              type="button"
              className="ec-lesson-chip"
              onClick={() => seek(c.start)}
            >
              <span>{formatLessonTime(c.start)}</span>
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* AI Vector-Synthesis Disclosure */}
      <div className="ec-lesson-ai-disclosure">
        <Sparkles size={14} className="ec-ai-sparkle-icon" />
        <div>
          <strong>AI-Generated from Code:</strong> This motion-graphics video was programmatically synthesized from algorithmic code (vector graphics &amp; parametric mathematical animations) {disclosure}.
        </div>
      </div>
    </div>
  );
};
