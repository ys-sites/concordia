import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, ExternalLink, Play, Route, Sigma } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { GateContent, GateNav, Video } from './vaultTypes';
import { ExamTag, GateIndex, marksOf } from './shared';

const WATCHED_KEY = 'miae221_gate_watched';

const loadWatched = (): Set<string> => {
  try {
    return new Set(JSON.parse(localStorage.getItem(WATCHED_KEY) ?? '[]'));
  } catch {
    return new Set();
  }
};

const ROLE_LABEL: Record<Video['role'], { text: string; cls: string }> = {
  learn: { text: 'Learn it', cls: 'info' },
  worked: { text: 'Worked example', cls: 'ok' },
  extra: { text: 'Optional', cls: 'neutral' }
};

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  focusTopic: string | null;
}

export const VideoPath: React.FC<Props> = ({ content, idx, nav, focusTopic }) => {
  const [watched, setWatched] = useState<Set<string>>(loadWatched);
  const [playing, setPlaying] = useState<string | null>(null);
  const stopRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (focusTopic) stopRefs.current[focusTopic]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [focusTopic]);

  const toggle = (id: string) =>
    setWatched((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(WATCHED_KEY, JSON.stringify([...next]));
      } catch {
        // progress just won't persist
      }
      return next;
    });

  // Core videos only (learn + worked) count toward progress
  const core = useMemo(() => content.videoStops.flatMap((s) => s.videos.filter((v) => v.role !== 'extra')), [content]);
  const coreDone = core.filter((v) => watched.has(v.id)).length;
  const channels = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of content.videoStops) for (const v of s.videos) counts.set(v.channel, (counts.get(v.channel) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [content]);

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Route size={17} /> Revision path, in the order of the teacher’s notes
        </h3>
        <p className="mg-section-sub">
          One stop per midterm topic. Each stop has a short “learn it” video, a worked example, what to watch for, and the past-exam questions
          to do straight after. Mostly Taylor Sparks (Univ. of Utah materials science) and The Organic Chemistry Tutor, plus a few others where
          they had a better video for a specific step. Every link was checked on YouTube.
        </p>
        <div className="mg-refs">
          {channels.map(([ch, n]) => (
            <span key={ch} className="mg-badge neutral">
              {ch} · {n}
            </span>
          ))}
        </div>
        <div className="mg-progress" aria-label={`${coreDone} of ${core.length} core videos watched`}>
          <span style={{ width: `${(100 * coreDone) / Math.max(1, core.length)}%` }} />
        </div>
        <div className="mg-small mg-muted" style={{ marginTop: 6 }}>
          {coreDone} / {core.length} core videos watched (saved on this device)
        </div>
      </section>

      <section className="mg-panel mg-panel-pad">
        {content.videoStops.map((stop, i) => {
          const topic = idx.topic.get(stop.topic);
          const tq = content.questions.filter((q) => q.topic === stop.topic && idx.midtermIds.includes(q.exam));
          const hits = idx.midtermIds.filter((m) => tq.some((q) => q.exam === m)).length;
          const marks = tq.reduce((s, q) => s + marksOf(q), 0);
          const done = stop.videos.filter((v) => v.role !== 'extra').every((v) => watched.has(v.id));
          return (
            <article
              key={stop.topic}
              className="mg-stop"
              ref={(el) => {
                stopRefs.current[stop.topic] = el;
              }}
              style={{ scrollMarginTop: 90 }}
            >
              <div className={`mg-stop-num ${done ? 'done' : ''}`}>{done ? <CheckCircle2 size={16} /> : i + 1}</div>
              <div style={{ minWidth: 0 }}>
                <div className="mg-q-head" style={{ marginBottom: 0 }}>
                  <span className="mg-badge neutral">{topic?.ch}</span>
                  <span className={`mg-badge ${hits === 3 ? 'exact' : hits === 2 ? 'template' : hits === 1 ? 'concept' : 'neutral'}`}>
                    on {hits}/3 midterms · {marks} marks
                  </span>
                </div>
                <h4>{stop.title}</h4>
                <p className="mg-small" style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <MathText text={stop.why} />
                </p>

                <div className="mg-videos">
                  {stop.videos.map((v) => (
                    <div key={v.id} className={`mg-video ${watched.has(v.id) ? 'watched' : ''}`}>
                      {playing === v.id ? (
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                          title={v.title}
                          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                          allowFullScreen
                        />
                      ) : (
                        <button type="button" className="mg-thumb" onClick={() => setPlaying(v.id)} aria-label={`Play ${v.title}`}>
                          <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt="" loading="lazy" />
                          <span className="play">
                            <Play size={34} fill="currentColor" />
                          </span>
                          <span className="len">{v.len}</span>
                        </button>
                      )}
                      <div className="mg-video-body">
                        <span className={`mg-badge ${ROLE_LABEL[v.role].cls}`} style={{ alignSelf: 'flex-start' }}>
                          {ROLE_LABEL[v.role].text}
                        </span>
                        <div className="mg-video-title">{v.title}</div>
                        <div className="mg-video-channel">{v.channel}</div>
                        <ul>
                          {v.watch.map((w, j) => (
                            <li key={j}>
                              <MathText text={w} />
                            </li>
                          ))}
                        </ul>
                        <div className="mg-video-actions">
                          <label className="mg-check">
                            <input type="checkbox" checked={watched.has(v.id)} onChange={() => toggle(v.id)} /> Watched
                          </label>
                          <a className="mg-btn small" href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={12} /> YouTube
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mg-after">
                  <b>Then do this:</b> <MathText text={stop.after} />
                  <div className="mg-refs" style={{ marginTop: 8 }}>
                    {stop.gate.map((g) => {
                      const q = idx.q.get(g);
                      return q ? <ExamTag key={g} q={q} idx={idx} onClick={() => nav.openQuestion(g)} /> : null;
                    })}
                    {stop.formulas.map((fid) => (
                      <button key={fid} type="button" className="mg-btn small" onClick={() => nav.openFormula(fid)}>
                        <Sigma size={12} /> {idx.formula.get(fid)?.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default VideoPath;
