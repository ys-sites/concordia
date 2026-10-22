import React, { useEffect, useState } from 'react';
import { AlertTriangle, BookMarked, ChevronDown, ChevronRight, Clapperboard, Lightbulb, ListOrdered } from 'lucide-react';
import type { LearnQuestion } from '../model';
import type { MotionLesson } from '../videoSources';
import { resolveVideo } from '../videoSources';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { MotionLessonPlayer } from '../../components/MotionLessonPlayer';
import { ReadAloudButton } from '../../components/ReadAloudButton';
import { AskAiButton } from '../../components/vault/AskAiModal';
import { CodeBlock } from '../components/CodeBlock';
import { COURSE_BY_ID } from '../courses';
import { saveVideoPosition, useProgress } from '../progress/store';

// The solution of one question: the idea, the worked steps (one at a time or all), the answer, why the chosen
// wrong option is wrong, the trap, the solution video, and "explain it differently" with an AI tutor.
export const SolutionVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [open, setOpen] = useState(false);
  const [lesson, setLesson] = useState<MotionLesson | null>(null);
  const pos = useProgress((s) => s.videos[videoId]);
  useEffect(() => {
    let alive = true;
    resolveVideo(videoId).then((l) => alive && setLesson(l));
    return () => {
      alive = false;
    };
  }, [videoId]);
  if (!lesson) return null;
  const mmss = `${Math.floor(lesson.duration / 60)}:${String(Math.round(lesson.duration % 60)).padStart(2, '0')}`;
  return (
    <div className="lx-solvid">
      <button type="button" className={`lx-solvid-btn${open ? ' is-open' : ''}`} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Clapperboard size={17} aria-hidden />
        <span>{open ? 'Hide the video solution' : `Watch the video solution, step by step (${mmss})`}</span>
        <ChevronDown size={16} aria-hidden className="lx-solvid-chev" />
      </button>
      {open && <MotionLessonPlayer lesson={lesson} bare startAt={pos?.t} onProgress={(t, d) => saveVideoPosition(videoId, t, d)} />}
    </div>
  );
};

const StepList: React.FC<{ q: LearnQuestion }> = ({ q }) => {
  const steps = q.explain.steps ?? [];
  const [shown, setShown] = useState(steps.length <= 3 ? steps.length : 1);
  useEffect(() => setShown(steps.length <= 3 ? steps.length : 1), [q.id, steps.length]);
  if (!steps.length) return null;
  return (
    <div className="lx-ex-block">
      <h4 className="lx-ex-title">
        <ListOrdered size={16} aria-hidden /> Step by step
      </h4>
      <ol className="lx-ex-steps">
        {steps.slice(0, shown).map((s, i) => (
          <li key={i} className="lx-fade-in">
            <strong>
              <MathText text={s.title} />
            </strong>
            {s.math && <MathBlock tex={s.math} className="lx-ex-math" />}
            {s.note && (
              <p>
                <MathText text={s.note} />
              </p>
            )}
          </li>
        ))}
      </ol>
      {shown < steps.length && (
        <div className="lx-ex-more">
          <button type="button" className="lx-btn lx-btn--sm" onClick={() => setShown((n) => n + 1)}>
            Next step <ChevronRight size={15} />
          </button>
          <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => setShown(steps.length)}>
            Show all {steps.length} steps
          </button>
          <span className="lx-meta lx-num">
            {shown} of {steps.length}
          </span>
        </div>
      )}
    </div>
  );
};

export const Explanation: React.FC<{ q: LearnQuestion; chosen?: number[]; correct: boolean | null }> = ({ q, chosen, correct }) => {
  const e = q.explain;
  const wrongNote = chosen && correct === false && e.whyWrong ? chosen.map((i) => e.whyWrong![i]).filter(Boolean)[0] : undefined;
  const speech = [e.concept, ...(e.lines ?? []), ...(e.steps ?? []).map((s) => `${s.title}. ${s.note ?? ''}`), e.trap].filter(Boolean).join(' ');
  return (
    <div className="lx-ex">
      <div className="lx-ex-tools">
        {speech && <ReadAloudButton text={speech} stopKey={q.id} label="Listen to the solution" />}
        <AskAiButton
          label="Explain it differently"
          problem={{
            id: q.id,
            courseTitle: COURSE_BY_ID[q.courseId].code + ' · ' + COURSE_BY_ID[q.courseId].title,
            topic: q.topic,
            questionText: q.prompt + (chosen?.length && q.options ? `\n\nMy answer: ${chosen.map((i) => q.options![i]).join('; ')}` : ''),
            options: q.options?.map((o, i) => ({ key: String.fromCharCode(65 + i), text: o })),
            answerText: q.answerText,
            solution: e.solution,
            steps: e.lines,
            note: e.trap
          }}
        />
      </div>
      {q.videoId && <SolutionVideo videoId={q.videoId} />}
      {wrongNote && (
        <div className="lx-ex-why">
          <strong>Why your answer is wrong</strong>
          <p>
            <MathText text={wrongNote} />
          </p>
        </div>
      )}
      {e.concept && (
        <div className="lx-ex-block">
          <h4 className="lx-ex-title">
            <Lightbulb size={16} aria-hidden /> The idea
          </h4>
          <p>
            <MathText text={e.concept} />
          </p>
        </div>
      )}
      <StepList q={q} />
      {!e.steps?.length && e.lines?.length ? (
        <div className="lx-ex-block">
          <h4 className="lx-ex-title">
            <ListOrdered size={16} aria-hidden /> How to get it
          </h4>
          <ol className="lx-ex-lines">
            {e.lines.map((l, i) => (
              <li key={i}>
                <MathText text={l} />
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      {e.answerTex && (
        <div className="lx-ex-answer">
          <span className="lx-meta">Answer</span>
          <MathBlock tex={e.answerTex} />
        </div>
      )}
      {e.solution && (
        <div className="lx-ex-block">
          <h4 className="lx-ex-title">Full solution</h4>
          {/[;{}]\s*$|#include|cout|int main/m.test(e.solution) ? (
            <CodeBlock code={e.solution} label="Solution code" />
          ) : (
            <p className="lx-ex-pre">
              <MathText text={e.solution} />
            </p>
          )}
        </div>
      )}
      {e.trap && (
        <div className="lx-ex-trap">
          <AlertTriangle size={16} aria-hidden />
          <p>
            <strong>Common trap: </strong>
            <MathText text={e.trap} />
          </p>
        </div>
      )}
      {e.note && (
        <p className="lx-ex-note">
          <MathText text={e.note} />
        </p>
      )}
      {(e.reference || q.source) && (
        <p className="lx-ex-ref lx-meta">
          <BookMarked size={14} aria-hidden /> {q.source ?? e.reference}
        </p>
      )}
    </div>
  );
};
