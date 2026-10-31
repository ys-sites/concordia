import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Clapperboard, ExternalLink, ListVideo, PlayCircle, Sparkles, Youtube } from 'lucide-react';
import type { Curriculum, VideoCard } from '../model';
import { resolveVideo, MotionLesson } from '../videoSources';
import { MotionLessonPlayer } from '../../components/MotionLessonPlayer';
import { VideoThumb } from './VideoThumb';
import { YouTubePlayer } from './YouTubePlayer';
import { fmtClock } from '../data';
import { href } from '../router';
import { markStep, saveVideoPosition, useProgress } from '../progress/store';
import './videoLibrary.css';

// Every video of a course in two watchable sequences, in teaching order:
//   AI video course  the narrated lessons and walkthroughs made for this course, then the solved questions
//   YouTube path     outside explanations of the same subjects, in the same order
// The selected video plays here; the playlist on the side shows what is next and what you have watched.
type Track = 'ai' | 'solutions' | 'youtube';

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

export const VideoLibrary: React.FC<{ cur: Curriculum }> = ({ cur }) => {
  const positions = useProgress((s) => s.videos);
  const tracks = useMemo(() => {
    const order = new Map(cur.sections.flatMap((s) => s.lessons).map((l, i) => [l.id, i]));
    const byOrder = (a: VideoCard, b: VideoCard) => (order.get(a.lessonId) ?? 0) - (order.get(b.lessonId) ?? 0);
    return {
      ai: cur.videos.filter((v) => v.kind === 'lesson' || v.kind === 'walkthrough').sort(byOrder),
      solutions: cur.videos.filter((v) => v.kind === 'solution').sort(byOrder),
      youtube: cur.videos.filter((v) => v.kind === 'extra').sort(byOrder)
    } as Record<Track, VideoCard[]>;
  }, [cur]);
  const available = (['ai', 'solutions'] as Track[]).filter((t) => tracks[t].length);
  const [track, setTrack] = useState<Track>(available[0] ?? 'ai');
  const list = tracks[track];
  const [selected, setSelected] = useState<string | null>(null);
  const current = list.find((v) => v.id === selected) ?? list[0];
  const at = current ? list.indexOf(current) : -1;
  const [lesson, setLesson] = useState<MotionLesson | null>(null);
  const [ytPlay, setYtPlay] = useState(false);

  useEffect(() => {
    setLesson(null);
    setYtPlay(false);
    if (!current || current.kind === 'extra') return;
    let alive = true;
    resolveVideo(current.id).then((l) => alive && setLesson(l));
    return () => {
      alive = false;
    };
  }, [current?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!current) return <p className="lx-empty">No videos for this course yet.</p>;
  const sectionTitle = (id: string) => cur.sections.find((s) => s.id === id)?.title ?? '';
  const lessonTitle = (id: string) => cur.sections.flatMap((s) => s.lessons).find((l) => l.id === id)?.title ?? '';
  const watched = (v: VideoCard) => {
    const p = positions[v.id];
    return p && p.d ? Math.min(1, p.t / p.d) : 0;
  };
  const totalMin = Math.round(list.reduce((n, v) => n + v.seconds, 0) / 60);
  const done = list.filter((v) => watched(v) >= 0.9).length;

  return (
    <div className="lx-vlib">
      <div className="lx-vlib-tracks" role="tablist" aria-label="Video sequence">
        {available.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={track === t}
            className={`lx-vlib-track${track === t ? ' is-on' : ''}`}
            onClick={() => {
              setTrack(t);
              setSelected(null);
            }}
          >
            {t === 'ai' ? <Sparkles size={17} aria-hidden /> : t === 'solutions' ? <Clapperboard size={17} aria-hidden /> : <Youtube size={17} aria-hidden />}
            <span>
              <strong>{t === 'ai' ? 'AI video course' : t === 'solutions' ? 'Solved questions' : 'YouTube path'}</strong>
              <span className="lx-meta lx-num">
                {tracks[t].length} videos · {Math.round(tracks[t].reduce((n, v) => n + v.seconds, 0) / 60)} min
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="lx-vlib-grid">
        <div className="lx-vlib-main">
          <div className="lx-vlib-stage">
            {current.kind === 'extra' ? (
              ytPlay ? (
                <YouTubePlayer id={current.id.slice(3)} title={current.title} className="lx-vlib-ytp" />
              ) : (
                <button type="button" className="lx-vlib-poster" onClick={() => setYtPlay(true)} aria-label={`Play ${current.title}`}>
                  <img src={`https://i.ytimg.com/vi/${current.id.slice(3)}/hqdefault.jpg`} alt="" />
                  <PlayCircle size={72} aria-hidden />
                </button>
              )
            ) : lesson ? (
              <MotionLessonPlayer
                key={current.id}
                lesson={lesson}
                bare
                startAt={positions[current.id]?.t}
                onProgress={(t, d) => {
                  saveVideoPosition(current.id, t, d);
                  if (d && t / d >= 0.9 && current.kind !== 'solution') markStep(cur.id, current.stepId);
                }}
                onEnded={() => at < list.length - 1 && setSelected(list[at + 1].id)}
              />
            ) : (
              <div className="lx-video-skeleton" aria-busy="true" />
            )}
          </div>
          <div className="lx-vlib-info">
            <p className="lx-meta">
              {sectionTitle(current.sectionId)} · video {at + 1} of {list.length}
            </p>
            <h2 className="lx-h2">{current.title}</h2>
            <p className="lx-vlib-meta lx-meta lx-num">
              {current.kind === 'extra' ? (
                <>
                  <Youtube size={15} aria-hidden /> {current.source}
                </>
              ) : (
                <>
                  <Sparkles size={15} aria-hidden /> Narrated AI lesson
                </>
              )}{' '}
              · {fmtClock(current.seconds)}
              {current.chapters ? ` · ${current.chapters} chapters` : ''}
            </p>
            {current.source && current.kind !== 'extra' && <p className="lx-vlib-desc">{current.source}</p>}
            <div className="lx-vlib-actions">
              <a className="lx-btn lx-btn--accent" href={href({ name: 'learn', course: cur.id, lesson: current.lessonId, step: current.stepId })}>
                <ListVideo size={17} /> Open in the lesson: {lessonTitle(current.lessonId)}
              </a>
              {current.kind === 'extra' && (
                <a className="lx-btn" href={`https://www.youtube.com/watch?v=${current.id.slice(3)}`} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> YouTube
                </a>
              )}
            </div>
          </div>
        </div>

        <aside className="lx-vlib-list" aria-label="Playlist">
          <div className="lx-vlib-list-head">
            <strong>Course content</strong>
            <span className="lx-meta lx-num">
              {list.length} videos · {totalMin} min{done ? ` · ${done} watched` : ''}
            </span>
          </div>
          <ol>
            {list.map((v, i) => {
              const w = watched(v);
              const newSection = i === 0 || list[i - 1].sectionId !== v.sectionId;
              return (
                <React.Fragment key={v.id}>
                  {newSection && <li className="lx-vlib-sec">{sectionTitle(v.sectionId)}</li>}
                  <li>
                    <button type="button" className={`lx-vlib-item${v.id === current.id ? ' is-current' : ''}`} onClick={() => setSelected(v.id)} aria-current={v.id === current.id ? 'true' : undefined}>
                      <span className="lx-vlib-thumb">
                        {v.kind === 'extra' ? <img src={ytThumb(v.id.slice(3))} alt="" loading="lazy" /> : <VideoThumb poster={v.poster} videoId={v.id} />}
                        <span className="lx-vid-dur lx-num">{fmtClock(v.seconds)}</span>
                        {w > 0 && <span className="lx-vid-watched" style={{ width: `${Math.round(w * 100)}%` }} />}
                      </span>
                      <span className="lx-vlib-item-text">
                        <span className="lx-vlib-item-title">
                          <span className="lx-num">{i + 1}.</span> {v.title}
                        </span>
                        <span className="lx-meta">{v.kind === 'extra' ? v.source : lessonTitle(v.lessonId)}</span>
                      </span>
                      {w >= 0.9 && <CheckCircle2 size={16} className="lx-ok" aria-label="watched" />}
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </aside>
      </div>
    </div>
  );
};

export default VideoLibrary;
