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
  // learning site: resume where the student stopped, report progress, know when it ends
  startAt?: number;
  onProgress?: (t: number, d: number) => void;
  onEnded?: () => void;
  bare?: boolean; // no header or disclosure: the page around the player shows them
}

export const MotionLessonPlayer: React.FC<MotionLessonPlayerProps> = ({
  lesson,
  badge = 'Motion Lesson · Watch First',
  disclosure = 'based directly on Concordia teacher lecture notes',
  startAt,
  onProgress,
  onEnded,
  bare = false
}) => {
  const lastReport = useRef(0);
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

  // Exit fullscreen explicitly
  const exitFullscreen = useCallback(async () => {
    try {
      const isNativeFs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      if (isNativeFs) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
      // Unlock screen orientation if locked
      try {
        if ((screen.orientation as any)?.unlock) {
          (screen.orientation as any).unlock();
        }
      } catch {}
    } catch (err) {
      console.warn('Exit fullscreen error:', err);
    } finally {
      setIsFullscreen(false);
    }
  }, []);

  // Fullscreen toggle (multi-tier support: standard container Fullscreen API, iOS Safari native video fullscreen, and CSS viewport fallback)
  const toggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    const v = videoRef.current;
    if (!container) return;

    const isNativeFs = !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    );

    // If currently in fullscreen (native or pseudo-fullscreen), exit
    if (isNativeFs || isFullscreen) {
      await exitFullscreen();
      return;
    }

    // Tier 1: Try container.requestFullscreen (Chrome, Android, Edge, Firefox, Mac Safari)
    try {
      if (container.requestFullscreen) {
        await container.requestFullscreen();
        setIsFullscreen(true);
        // Attempt orientation lock on mobile devices supporting it
        try {
          if ((screen.orientation as any)?.lock) {
            await (screen.orientation as any).lock('landscape').catch(() => {});
          }
        } catch {}
        return;
      } else if ((container as any).webkitRequestFullscreen) {
        await (container as any).webkitRequestFullscreen();
        setIsFullscreen(true);
        return;
      }
    } catch (err) {
      console.warn('Container requestFullscreen failed, attempting video fallback:', err);
    }

    // Tier 2: iOS Safari / iPhone (HTMLVideoElement has webkitEnterFullscreen, divs do not)
    if (v && typeof (v as any).webkitEnterFullscreen === 'function') {
      try {
        (v as any).webkitEnterFullscreen();
        setIsFullscreen(true);
        return;
      } catch (err) {
        console.warn('Video webkitEnterFullscreen failed:', err);
      }
    }

    // Tier 3: CSS Full-Viewport Fallback (guaranteed to work across all mobile aspect ratios & browsers)
    setIsFullscreen(true);
  }, [isFullscreen, exitFullscreen]);

  // Track native fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isFs);

      if (hideControlsTimerRef.current) {
        clearTimeout(hideControlsTimerRef.current);
      }

      if (isFs) {
        // In fullscreen: show controls momentarily for 1.5s, then automatically hide
        setShowControls(true);
        hideControlsTimerRef.current = window.setTimeout(() => {
          setShowControls(false);
          setShowSpeedMenu(false);
        }, 1500);
      } else {
        setShowControls(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Listen for iOS Safari video fullscreen events
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleWebkitBegin = () => {
      setIsFullscreen(true);
    };
    const handleWebkitEnd = () => {
      setIsFullscreen(false);
    };

    v.addEventListener('webkitbeginfullscreen', handleWebkitBegin);
    v.addEventListener('webkitendfullscreen', handleWebkitEnd);

    return () => {
      v.removeEventListener('webkitbeginfullscreen', handleWebkitBegin);
      v.removeEventListener('webkitendfullscreen', handleWebkitEnd);
    };
  }, []);

  // Mouse activity timer: in fullscreen or during playback, autohide controls when idle
  const handleUserActivity = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }

    // Always hide controls after 1.8s of no mouse movement
    hideControlsTimerRef.current = window.setTimeout(() => {
      setShowControls(false);
      setShowSpeedMenu(false);
    }, 1800);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    // Instantly hide when mouse leaves player container
    setShowControls(false);
    setShowSpeedMenu(false);
  }, []);

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
    // report about every 5 seconds of playback
    if (onProgress && Math.abs(v.currentTime - lastReport.current) >= 5) {
      lastReport.current = v.currentTime;
      onProgress(v.currentTime, v.duration || lesson.duration);
    }

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
    if (startAt && startAt > 3 && startAt < (v.duration || lesson.duration) - 5) {
      v.currentTime = startAt;
      setCurrentTime(startAt);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
    const v = videoRef.current;
    if (v && onProgress) onProgress(v.duration, v.duration);
    onEnded?.();
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
    <div className={`ec-lesson-card${bare ? ' is-bare' : ''}`}>
      {/* Header Info */}
      {!bare && (
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
      )}

      {/* Main Video Viewport with Fullscreen & Auto-Hide Control System */}
      <div
        ref={containerRef}
        className={`ec-video-container ${isFullscreen ? 'is-fullscreen' : ''} ${
          showControls ? 'controls-visible' : 'controls-hidden'
        }`}
        onMouseMove={handleUserActivity}
        onMouseEnter={handleUserActivity}
        onMouseLeave={handleMouseLeave}
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
          onPlay={() => setIsPlaying(true)}
          onPause={() => {
            setIsPlaying(false);
            const v = videoRef.current;
            if (v && onProgress) onProgress(v.currentTime, v.duration || lesson.duration);
          }}
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
      {!bare && (
      <div className="ec-lesson-ai-disclosure">
        <Sparkles size={14} className="ec-ai-sparkle-icon" />
        <div>
          <strong>AI-Generated from Code:</strong> This motion-graphics video was programmatically synthesized from algorithmic code (vector graphics &amp; parametric mathematical animations) {disclosure}.
        </div>
      </div>
      )}
    </div>
  );
};
