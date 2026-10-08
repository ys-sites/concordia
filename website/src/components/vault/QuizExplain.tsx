// After-answer explanation for the Skill Quiz and the guided plan: where the question
// comes from (past paper, teacher's notes, textbook, expanded guide) and a concept video.
import React, { useState } from 'react';
import { BookMarked, BookOpen, ExternalLink, FileSearch, GraduationCap, MapPin, Play, Presentation, Sigma, Video as VideoIcon } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { GateContent, GateNav, LectureRef, Video, VideoStop } from './vaultTypes';
import type { GateIndex } from './shared';
import { ExamTag, LectureButton, MatchBadge, StatusBadge } from './shared';
import type { DrillItem } from './drill';

export type VideoDepth = 'quick' | 'deep';

const KIND_TEXT: Record<string, string> = {
  midterm: 'Past midterm',
  quiz: 'Past quiz / term test',
  final: 'Past final (midterm-scope part)',
  homework: 'Tutorial set / assignment'
};

const SOURCE_TEXT: Record<string, string> = {
  similar: 'New-numbers version of a past-paper question',
  lecture: 'Example from the teacher’s lecture notes',
  textbook: 'Textbook-style problem',
  concept: 'Concept check written from the teacher’s notes'
};

const seconds = (len: string) => {
  const p = len.split(':').map(Number);
  if (!len || p.some((x) => !Number.isFinite(x))) return NaN;
  return p.reduce((s, x) => s * 60 + x, 0);
};

// Videos for a topic; falls back to the other topics of the same chapter
const videosFor = (topic: string, content: GateContent, idx: GateIndex): { stop: VideoStop | null; related: boolean } => {
  const own = content.videoStops.find((s) => s.topic === topic);
  if (own) return { stop: own, related: false };
  const subj = idx.subjectOfTopic.get(topic);
  const other = subj ? content.videoStops.find((s) => subj.topics.includes(s.topic)) : undefined;
  return { stop: other ?? null, related: !!other };
};

export const pickVideo = (videos: Video[], depth: VideoDepth): Video | undefined => {
  if (!videos.length) return undefined;
  const timed = videos.filter((v) => Number.isFinite(seconds(v.len)));
  if (depth === 'quick') {
    const learn = videos.filter((v) => v.role === 'learn');
    const pool = (learn.length ? learn : videos).filter((v) => Number.isFinite(seconds(v.len)));
    return pool.sort((a, b) => seconds(a.len) - seconds(b.len))[0] ?? learn[0] ?? videos[0];
  }
  const longest = [...timed].sort((a, b) => seconds(b.len) - seconds(a.len))[0];
  return longest ?? videos.find((v) => v.role === 'worked') ?? videos[videos.length - 1];
};

export const VideoPlayer: React.FC<{ v: Video; compact?: boolean }> = ({ v, compact = false }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`gp-video ${compact ? 'compact' : ''}`}>
      {playing ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`} title={v.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      ) : (
        <button type="button" className="mg-thumb" onClick={() => setPlaying(true)} aria-label={`Play ${v.title}`}>
          <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt="" loading="lazy" />
          <span className="play">
            <Play size={30} fill="currentColor" />
          </span>
          {v.len && <span className="len">{v.len}</span>}
        </button>
      )}
      <div className="gp-video-body">
        <div className="mg-video-title">{v.title}</div>
        <div className="mg-video-channel">
          {v.channel}
          {v.len ? ` · ${v.len}` : ''}
        </div>
        {v.watch.length > 0 && (
          <ul>
            {v.watch.map((w, i) => (
              <li key={i}>
                <MathText text={w} />
              </li>
            ))}
          </ul>
        )}
        <a className="mg-btn small" href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>
          <ExternalLink size={12} /> YouTube
        </a>
      </div>
    </div>
  );
};

// One concept video for the topic, with a quick / in-depth switch
export const ConceptVideo: React.FC<{ topic: string; content: GateContent; idx: GateIndex; depth: VideoDepth; onDepth: (d: VideoDepth) => void }> = ({ topic, content, idx, depth, onDepth }) => {
  const { stop, related } = videosFor(topic, content, idx);
  if (!stop) return null;
  const quick = pickVideo(stop.videos, 'quick');
  const deep = pickVideo(stop.videos, 'deep');
  const v = depth === 'quick' ? quick : deep;
  if (!v) return null;
  const twoChoices = quick && deep && quick.id !== deep.id;
  return (
    <div className="sq-ex-block">
      <div className="sq-ex-head">
        <VideoIcon size={14} /> Concept video{related ? ' (same chapter)' : ''}
        {twoChoices && (
          <span className="sq-depth">
            <button type="button" className={`mg-chip ${depth === 'quick' ? 'active' : ''}`} onClick={() => onDepth('quick')}>
              Quick{quick?.len ? ` · ${quick.len}` : ''}
            </button>
            <button type="button" className={`mg-chip ${depth === 'deep' ? 'active' : ''}`} onClick={() => onDepth('deep')}>
              In depth{deep?.len ? ` · ${deep.len}` : ''}
            </button>
          </span>
        )}
      </div>
      <p className="mg-small mg-muted" style={{ margin: '0 0 8px' }}>
        It explains the idea behind the question, not necessarily the same numbers.
      </p>
      <VideoPlayer key={v.id} v={v} compact />
    </div>
  );
};

// All videos of one topic stop, for the guided plan
export const TopicVideos: React.FC<{ topic: string; content: GateContent; idx: GateIndex; nav: GateNav }> = ({ topic, content, idx, nav }) => {
  const { stop } = videosFor(topic, content, idx);
  if (!stop) return <p className="mg-small mg-muted">No video picked for this topic yet.</p>;
  return (
    <div>
      <p className="mg-small" style={{ color: 'var(--text-secondary)', margin: '0 0 10px' }}>
        <MathText text={stop.why} />
      </p>
      <div className="gp-videos">
        {stop.videos.map((v) => (
          <VideoPlayer key={v.id} v={v} />
        ))}
      </div>
      <div className="mg-after" style={{ marginTop: 10 }}>
        <b>Then do this:</b> <MathText text={stop.after} />
        {stop.gate.length > 0 && (
          <div className="mg-refs" style={{ marginTop: 8 }}>
            {stop.gate.map((g) => {
              const q = idx.q.get(g);
              return q ? <ExamTag key={g} q={q} idx={idx} onClick={() => nav.openQuestion(g)} /> : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const refKey = (r: LectureRef) => `${r.d ?? ''}|${r.l ?? ''}|${r.s ?? ''}`;

interface PanelProps {
  item: DrillItem;
  idx: GateIndex;
  content: GateContent;
  nav: GateNav;
  depth: VideoDepth;
  onDepth: (d: VideoDepth) => void;
  onLesson?: (formulaId: string) => void;
}

export const SourcePanel: React.FC<PanelProps> = ({ item, idx, content, nav, depth, onDepth, onLesson }) => {
  const topic = item.topic ? idx.topic.get(item.topic) : undefined;
  const q = item.qid ? idx.q.get(item.qid) : undefined;
  const exam = q ? idx.exam.get(q.exam) : undefined;
  const lesson = item.lesson ? idx.formula.get(item.lesson) : q?.f?.length ? idx.formula.get(q.f[0]) : content.formulas.find((f) => f.topic === item.topic);
  const clusters = q ? idx.clustersOfQ.get(q.id) ?? [] : [];

  // teacher's notes: the topic's slides first, then the lesson's, without duplicates
  const seen = new Set<string>();
  const lec = [...(topic?.lec ?? []), ...(lesson?.lec ?? [])].filter((r) => {
    const k = refKey(r);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const guide = topic?.guide ?? lesson?.guide;
  const textbook = topic?.cal ?? lesson?.cal;
  const styleOf = !q && lesson ? lesson.seen.map((s) => idx.q.get(s)).filter((x) => x && idx.paperIds.includes(x.exam)).slice(0, 4) : [];

  return (
    <div className="sq-explain">
      <div className="sq-ex-block">
        <div className="sq-ex-head">
          <MapPin size={14} /> Where this question comes from
        </div>
        {q && exam ? (
          <>
            <div className="sq-origin">
              <ExamTag q={q} idx={idx} />
              <span>
                <b>{KIND_TEXT[exam.kind] ?? 'Past paper'}</b> · {exam.label}
              </span>
              <StatusBadge q={q} />
            </div>
            {clusters.map((cl) => {
              const others = cl.members.filter((m) => m !== q.id).map((m) => idx.q.get(m)).filter(Boolean);
              return (
                <div key={cl.id} className="sq-origin-sub">
                  <MatchBadge match={cl.match} /> <span className="mg-badge neutral">{cl.expect}</span> <MathText text={cl.title} />
                  {others.length > 0 && (
                    <div className="mg-refs" style={{ marginTop: 6 }}>
                      <span className="mg-refs-label">Also asked on</span>
                      {others.map((o) => (
                        <ExamTag key={o!.id} q={o!} idx={idx} onClick={() => nav.openQuestion(o!.id)} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {!clusters.length && <div className="mg-small mg-muted">Asked only on this paper so far.</div>}
          </>
        ) : (
          <>
            <div className="sq-origin">
              <span>
                <b>{SOURCE_TEXT[item.badge] ?? 'Practice question'}</b>
                {item.src ? (
                  <>
                    {' '}
                    · <MathText text={item.src} />
                  </>
                ) : lesson ? (
                  ` · ${content.labTitle}: ${lesson.name}`
                ) : null}
              </span>
            </div>
            {styleOf.length > 0 && (
              <div className="mg-refs" style={{ marginTop: 6 }}>
                <span className="mg-refs-label">Same method as</span>
                {styleOf.map((o) => (
                  <ExamTag key={o!.id} q={o!} idx={idx} onClick={() => nav.openQuestion(o!.id)} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div className="sq-ex-block">
        <div className="sq-ex-head">
          <GraduationCap size={14} /> Learn it from
        </div>
        <div className="sq-learn">
          {lec.length > 0 && (
            <div className="sq-learn-row">
              <span className="sq-learn-label">
                <Presentation size={13} /> Teacher’s notes
              </span>
              <div className="mg-refs">
                {lec.slice(0, 4).map((r, i) => (
                  <LectureButton key={i} r={r} nav={nav} content={content} />
                ))}
              </div>
            </div>
          )}
          {textbook && (
            <div className="sq-learn-row">
              <span className="sq-learn-label">
                <BookMarked size={13} /> Textbook
              </span>
              <span className="mg-badge info">{textbook}</span>
            </div>
          )}
          {guide && (
            <div className="sq-learn-row">
              <span className="sq-learn-label">
                <BookOpen size={13} /> Your notes
              </span>
              <button type="button" className="mg-btn small" onClick={() => nav.openGuide(guide)}>
                <FileSearch size={13} /> Expanded guide {guide}
              </button>
            </div>
          )}
          {lesson && (
            <div className="sq-learn-row">
              <span className="sq-learn-label">
                <Sigma size={13} /> Lesson
              </span>
              <button type="button" className="mg-btn small" onClick={() => (onLesson ? onLesson(lesson.id) : nav.openFormula(lesson.id))}>
                {lesson.name}: explanation + worked example
              </button>
            </div>
          )}
        </div>
      </div>

      {item.topic && <ConceptVideo topic={item.topic} content={content} idx={idx} depth={depth} onDepth={onDepth} />}
    </div>
  );
};
