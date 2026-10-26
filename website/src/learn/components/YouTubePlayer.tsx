import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Captions, Maximize2, Minimize2, Pause, Play, RotateCcw, RotateCw, Volume2, VolumeX } from 'lucide-react';
import '../styles/ytPlayer.css';

// An outside YouTube video with the site's own control bar instead of YouTube's: the embed runs with
// controls=0 through the IFrame Player API, and play, seek, speed, captions, volume and full screen
// sit in a bar under the picture (never on top of it, as YouTube's embed terms require). In full screen
// the bar fades out after 2 s of no pointer or key activity while playing, and comes back on hover.

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(s: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  setPlaybackRate(r: number): void;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  setVolume(v: number): void;
  getVolume(): number;
  loadModule(m: string): void;
  unloadModule(m: string): void;
  setOption(m: string, k: string, v: unknown): void;
  destroy(): void;
}
declare global {
  interface Window {
    YT?: { Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer; PlayerState: Record<string, number> };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;
const loadApi = () =>
  (apiPromise ??= new Promise<void>((resolve) => {
    if (window.YT?.Player) return resolve();
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.async = true;
    document.head.appendChild(s);
  }));

const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];
const IDLE_MS = 2000;
const clock = (s: number) => {
  const t = Math.max(0, Math.floor(s));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const sec = String(t % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${sec}` : `${m}:${sec}`;
};

export const YouTubePlayer: React.FC<{ id: string; title: string; className?: string }> = ({ id, title, className = '' }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const player = useRef<YTPlayer | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [cc, setCc] = useState(false);
  const [full, setFull] = useState(false);
  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<number>();

  useEffect(() => {
    let alive = true;
    loadApi().then(() => {
      if (!alive || !mountRef.current || !window.YT) return;
      const host = document.createElement('div');
      mountRef.current.appendChild(host);
      player.current = new window.YT.Player(host, {
        videoId: id,
        width: '100%',
        height: '100%',
        playerVars: { autoplay: 1, controls: 0, rel: 0, fs: 0, iv_load_policy: 3, modestbranding: 1, playsinline: 1, disablekb: 1, cc_load_policy: 0 },
        events: {
          onReady: () => {
            if (!alive) return;
            setReady(true);
            setDuration(player.current?.getDuration() ?? 0);
            setVolume(player.current?.getVolume() ?? 100);
          },
          onStateChange: (e: { data: number }) => {
            if (!alive) return;
            setPlaying(e.data === 1 || e.data === 3);
            if (e.data === 1) setDuration(player.current?.getDuration() ?? 0);
          }
        }
      });
    });
    return () => {
      alive = false;
      player.current?.destroy();
      player.current = null;
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, [id]);

  // the seek bar follows the video
  useEffect(() => {
    if (!ready) return;
    const t = setInterval(() => setTime(player.current?.getCurrentTime() ?? 0), 250);
    return () => clearInterval(t);
  }, [ready]);

  useEffect(() => {
    const on = () => setFull(document.fullscreenElement === wrapRef.current);
    document.addEventListener('fullscreenchange', on);
    return () => document.removeEventListener('fullscreenchange', on);
  }, []);

  // full screen and playing: hide the bar after IDLE_MS without activity. Pointer moves over the picture stay
  // inside YouTube's iframe and never reach this page, so hovering the bar's strip (or entering the picture)
  // is what brings it back.
  const wake = useCallback(() => {
    window.clearTimeout(idleTimer.current);
    setIdle(false);
    if (full && playing) idleTimer.current = window.setTimeout(() => setIdle(true), IDLE_MS);
  }, [full, playing]);
  useEffect(() => {
    wake();
    return () => window.clearTimeout(idleTimer.current);
  }, [wake]);

  const toggle = useCallback(() => {
    const p = player.current;
    if (!p) return;
    if (p.getPlayerState() === 1) p.pauseVideo();
    else p.playVideo();
  }, []);
  const seek = (s: number) => {
    const p = player.current;
    if (!p) return;
    const to = Math.min(Math.max(0, s), duration || p.getDuration());
    p.seekTo(to, true);
    setTime(to);
  };
  const toggleFull = () => {
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    else wrapRef.current?.requestFullscreen?.().catch(() => {});
  };
  const changeSpeed = (r: number) => {
    player.current?.setPlaybackRate(r);
    setSpeed(r);
  };
  const toggleMute = () => {
    const p = player.current;
    if (!p) return;
    if (p.isMuted()) p.unMute();
    else p.mute();
    setMuted(!p.isMuted());
  };
  const changeVolume = (v: number) => {
    const p = player.current;
    if (!p) return;
    p.setVolume(v);
    if (v > 0 && p.isMuted()) p.unMute();
    setVolume(v);
    setMuted(v === 0);
  };
  const toggleCc = () => {
    const p = player.current;
    if (!p) return;
    if (cc) p.unloadModule('captions');
    else {
      p.loadModule('captions');
      p.setOption('captions', 'track', { languageCode: 'en' });
    }
    setCc(!cc);
  };

  const onKey = (e: React.KeyboardEvent) => {
    wake();
    if ((e.target as HTMLElement).closest('input, select')) return;
    if (e.key === ' ' || e.key === 'k') (e.preventDefault(), toggle());
    else if (e.key === 'ArrowRight' || e.key === 'l') (e.preventDefault(), seek(time + 10));
    else if (e.key === 'ArrowLeft' || e.key === 'j') (e.preventDefault(), seek(time - 10));
    else if (e.key === 'f') (e.preventDefault(), toggleFull());
    else if (e.key === 'm') (e.preventDefault(), toggleMute());
  };

  return (
    <div
      ref={wrapRef}
      className={`lx-ytp${full ? ' is-full' : ''}${idle ? ' is-idle' : ''} ${className}`}
      tabIndex={-1}
      onKeyDown={onKey}
      onMouseMove={wake}
      onPointerDown={wake}
      aria-label={title}
    >
      <div className="lx-ytp-screen" onMouseOver={wake}>
        <div ref={mountRef} className="lx-ytp-mount" />
      </div>
      <div className="lx-ytp-bar" role="group" aria-label="Video controls" onFocus={wake}>
        <button type="button" className="lx-ytp-btn" onClick={toggle} disabled={!ready} aria-label={playing ? 'Pause' : 'Play'} title={playing ? 'Pause (k)' : 'Play (k)'}>
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button type="button" className="lx-ytp-btn" onClick={() => seek(time - 10)} disabled={!ready} aria-label="Back 10 seconds" title="Back 10 s (j)">
          <RotateCcw size={16} />
        </button>
        <button type="button" className="lx-ytp-btn" onClick={() => seek(time + 10)} disabled={!ready} aria-label="Forward 10 seconds" title="Forward 10 s (l)">
          <RotateCw size={16} />
        </button>
        <span className="lx-ytp-time lx-num">
          {clock(time)} / {clock(duration)}
        </span>
        <input
          className="lx-ytp-seek"
          type="range"
          min={0}
          max={Math.max(1, Math.floor(duration))}
          step={1}
          value={Math.floor(time)}
          onChange={(e) => seek(Number(e.target.value))}
          disabled={!ready}
          aria-label="Seek"
          style={{ ['--p' as string]: `${duration ? (time / duration) * 100 : 0}%` }}
        />
        <button type="button" className="lx-ytp-btn" onClick={toggleMute} disabled={!ready} aria-label={muted ? 'Unmute' : 'Mute'} title={muted ? 'Unmute (m)' : 'Mute (m)'}>
          {muted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
        <input className="lx-ytp-vol" type="range" min={0} max={100} step={5} value={muted ? 0 : volume} onChange={(e) => changeVolume(Number(e.target.value))} disabled={!ready} aria-label="Volume" />
        <button type="button" className={`lx-ytp-btn${cc ? ' is-on' : ''}`} onClick={toggleCc} disabled={!ready} aria-pressed={cc} aria-label="Captions" title="Captions (when the video has them)">
          <Captions size={17} />
        </button>
        <label className="lx-ytp-speed" title="Playback speed">
          <span className="lx-sr">Playback speed</span>
          <select value={speed} onChange={(e) => changeSpeed(Number(e.target.value))} disabled={!ready}>
            {SPEEDS.map((r) => (
              <option key={r} value={r}>
                {r}×
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="lx-ytp-btn" onClick={toggleFull} aria-label={full ? 'Exit full screen' : 'Full screen'} title={full ? 'Exit full screen (f)' : 'Full screen (f)'}>
          {full ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
        </button>
      </div>
    </div>
  );
};

export default YouTubePlayer;
