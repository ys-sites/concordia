import React from 'react';
import { ArrowRight, BookCheck, Clock3 } from 'lucide-react';
import type { CourseId } from '../../types';
import type { Curriculum } from '../model';
import type { ProgressState } from '../progress/store';
import { COURSE_BY_ID, courseClass } from '../courses';
import { courseProgress, findStep, fmtMinutes, isDone, nextStep } from '../data';
import { href } from '../router';
import { Suggestion } from '../progress/insights';
import { CourseCover } from './CourseCover';
import { VideoThumb } from './VideoThumb';
import '../styles/dashboard.css';

// Cards shared by the home page and My learning: a course to continue, and a recommendation with its reason.
export const ContinueCard: React.FC<{ cur: Curriculum; p: ProgressState }> = ({ cur, p }) => {
  const c = COURSE_BY_ID[cur.id];
  const prog = courseProgress(cur, p.steps);
  const started = prog.done > 0 || !!p.lastByCourse[cur.id];
  const next = nextStep(cur, p.steps, p.lastByCourse[cur.id]?.stepId);
  const minutesLeft = cur.sections.flatMap((s) => s.lessons).reduce((n, l) => n + l.steps.filter((st) => !st.optional && !isDone(p.steps, cur.id, st)).reduce((m, st) => m + st.minutes, 0), 0);
  return (
    <article className={`lx-cont-card ${courseClass(cur.id)}`}>
      <CourseCover course={cur.id} className="lx-cont-cover" />
      <div className="lx-cont-body">
        <h3 className="lx-h3">{c.title}</h3>
        <div className="lx-bar">
          <span style={{ width: `${prog.pct}%` }} />
        </div>
        <p className="lx-cont-meta lx-meta lx-num">
          <span>
            <BookCheck size={14} aria-hidden /> {prog.lessonsDone}/{prog.lessons} lessons
          </span>
          <span>
            <Clock3 size={14} aria-hidden /> {fmtMinutes(minutesLeft)} left
          </span>
        </p>
        {next && (
          <a className="lx-cont-go" href={href({ name: 'learn', course: cur.id, lesson: next.lesson.id, step: next.step.id })}>
            {started ? 'Resume course' : 'Start course'} <ArrowRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
};

// the picture for a suggestion: the video it points at (its poster, or the YouTube thumbnail), else the cover
const thumbOf = (cur: Curriculum, s: Suggestion): { yt?: string; poster?: string; videoId?: string } | null => {
  if (!s.stepId) return null;
  const st = findStep(cur, s.stepId)?.step;
  if (!st) return null;
  if (st.youtube) return { yt: `https://i.ytimg.com/vi/${st.youtube.id}/mqdefault.jpg` };
  const lesson = findStep(cur, s.stepId)?.lesson;
  const vid = st.videoId ?? lesson?.steps.find((x) => x.videoId)?.videoId;
  const v = vid ? cur.videos.find((x) => x.id === vid) : null;
  return v?.poster ? { poster: v.poster, videoId: v.id } : null;
};

const KIND_LABEL: Record<Suggestion['kind'], string> = { weak: 'Strengthen', stale: 'Refresh', review: 'Review', exam: 'Exam prep', start: 'Start', continue: 'Continue' };

export const RecoCard: React.FC<{ cur: Curriculum; s: Suggestion; onReview?: (c: CourseId) => void }> = ({ cur, s, onReview }) => {
  const thumb = thumbOf(cur, s);
  const to = s.lessonId ? href({ name: 'learn', course: s.course, lesson: s.lessonId, ...(s.stepId ? { step: s.stepId } : {}) }) : s.kind === 'review' ? '#/my-learning' : undefined;
  return (
    <article className={`lx-reco ${courseClass(s.course)}`}>
      <div className="lx-reco-media">
        {thumb?.yt ? <img src={thumb.yt} alt="" loading="lazy" /> : thumb ? <VideoThumb poster={thumb.poster} videoId={thumb.videoId} /> : <CourseCover course={s.course} label={false} />}
        <span className={`lx-reco-kind is-${s.kind}`}>{KIND_LABEL[s.kind]}</span>
        {s.minutes ? <span className="lx-vid-dur lx-num">{s.minutes} min</span> : null}
      </div>
      <div className="lx-reco-body">
        <span className="lx-meta">{COURSE_BY_ID[s.course].code}</span>
        <h3 className="lx-h3">{s.title}</h3>
        <p className="lx-meta">{s.why}</p>
        {s.kind === 'review' && onReview ? (
          <button type="button" className="lx-cont-go" onClick={() => onReview(s.course)}>
            Start the review <ArrowRight size={15} />
          </button>
        ) : (
          to && (
            <a className="lx-cont-go" href={to}>
              Go <ArrowRight size={15} />
            </a>
          )
        )}
      </div>
    </article>
  );
};
