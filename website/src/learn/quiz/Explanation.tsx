import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { AlertTriangle, BookOpen, ChevronDown, Clapperboard, ExternalLink, FileText, Lightbulb, ListOrdered, PlayCircle, Search, Zap } from 'lucide-react';
import type { DocRef, LearnQuestion } from '../model';
import type { MotionLesson } from '../videoSources';
import { resolveVideo } from '../videoSources';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { MotionLessonPlayer } from '../../components/MotionLessonPlayer';
import { ReadAloudButton } from '../../components/ReadAloudButton';
import { VideoThumb } from '../components/VideoThumb';
import { CodeBlock } from '../components/CodeBlock';
import { AskAiButton, questionContext } from '../components/AskAi';
import { openDoc } from '../docBus';
import { useCurriculum } from '../data';
import { href } from '../router';
import { saveVideoPosition, useProgress } from '../progress/store';
import { detectFastCrackType } from '../../data/miae221FastCrack';
import { getQuestionCrack } from '../../data/miae221QuestionCracks';

// The answer to one question, organised the same way every time:
//   main column   where your answer went wrong · the idea · the solution one small move at a time · the trap
//   side column   from the course: the teacher's slide at the right page, the lesson and its guides, the video
const LETTER = 'ABCDEFGH';
// the C++ stepper loads only with a question that has code
const CodeStepper = lazy(() => import('../cpp/CodeStepper').then((m) => ({ default: m.CodeStepper })));

// ── baby steps: every worked step is split at its "⇒" and line breaks, so each reveal is one move ──
interface Move {
  step: number;
  title?: string;
  math?: string;
  text?: string;
  note?: string;
}
const STRUCTURED_MATH_ENVIRONMENT = /\\begin\{(?:aligned|align\*?|gathered|cases|matrix|pmatrix|bmatrix|vmatrix|Vmatrix|smallmatrix|array|split)\}/;

const splitMath = (tex: string) => {
  const clean = tex.trim();
  // An aligned/cases block is already a carefully structured sequence. Splitting it on its
  // internal line breaks leaves fragments such as "\\begin{aligned}" for KaTeX to render.
  if (STRUCTURED_MATH_ENVIRONMENT.test(clean)) return [clean];
  return clean
    .split(/\\\\|\\(?:quad|;|qquad)?\s*\\(?:Rightarrow|implies|Longrightarrow)\s*(?:\\(?:quad|;|qquad))?/)
    .map((x) => x.trim())
    .filter((x) => x && x !== '&');
};

export const babySteps = (q: LearnQuestion): Move[] => {
  const e = q.explain;
  const out: Move[] = [];
  if (e.steps?.length) {
    e.steps.forEach((s, i) => {
      const parts = s.math ? splitMath(s.math) : [];
      if (!parts.length) out.push({ step: i + 1, title: s.title, note: s.note });
      parts.forEach((m, k) => out.push({ step: i + 1, title: k === 0 ? s.title : undefined, math: m, note: k === parts.length - 1 ? s.note : undefined }));
    });
  } else if (e.lines?.length) {
    e.lines.forEach((l, i) => out.push({ step: i + 1, text: l.replace(/^Step \d+:\s*/i, '') }));
  }
  return out;
};

// ── the solution video, as a thumbnail that opens the player ──
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
  return open ? (
    <div className="lx-solvid-open">
      <MotionLessonPlayer lesson={lesson} bare alwaysShowFullscreen autoPlay startAt={pos?.t} onProgress={(t, d) => saveVideoPosition(videoId, t, d)} />
      <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => setOpen(false)}>
        Hide the video
      </button>
    </div>
  ) : (
    <button type="button" className="lx-solvid-card" onClick={() => setOpen(true)}>
      <span className="lx-solvid-thumb">
        <VideoThumb poster={lesson.poster} videoId={videoId} />
        <PlayCircle size={34} aria-hidden />
        <span className="lx-vid-dur lx-num">{mmss}</span>
      </span>
      <span className="lx-solvid-info">
        <strong>
          <Clapperboard size={14} aria-hidden /> Video solution
        </strong>
        <span className="lx-meta">Every step of this exact question, narrated</span>
      </span>
    </button>
  );
};

// Always present the complete worked solution at once. Students can still work independently before checking,
// but once they ask for feedback, no reasoning step is hidden behind another click.
const Steps: React.FC<{ q: LearnQuestion; stepwise: boolean }> = ({ q, stepwise }) => {
  const moves = useMemo(() => babySteps(q), [q]);
  const [shown, setShown] = useState(stepwise ? 1 : moves.length);
  useEffect(() => setShown(stepwise ? 1 : moves.length), [q.id, stepwise, moves.length]);
  if (!moves.length) return null;
  const visible = moves.slice(0, shown);
  const speech = moves.map((m) => [m.title, m.text, m.note].filter(Boolean).join('. ')).join('. ');
  return (
    <section className="lx-ans-card lx-ans-steps">
      <header className="lx-ans-card-head">
        <h4>
          <ListOrdered size={16} aria-hidden /> Step by step
        </h4>
        <span className="lx-chip lx-num">
          {shown} / {moves.length}
        </span>
        <ReadAloudButton text={speech} stopKey={q.id + 'steps'} />
      </header>
      <ol className="lx-moves">
        {visible.map((m, i) => (
          <li key={i} className={`lx-fade-in${m.title || m.text ? ' is-new-step' : ''}`}>
            {(m.title || m.text) && <span className="lx-move-no">{m.step}</span>}
            <div className="lx-move-body">
              {m.title && (
                <strong>
                  <MathText text={m.title} />
                </strong>
              )}
              {m.text && (
                <p>
                  <MathText text={m.text} />
                </p>
              )}
              {m.math && <MathBlock tex={m.math} className="lx-move-math" />}
              {m.note && (
                <p className="lx-move-note">
                  <MathText text={m.note} />
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      {shown < moves.length ? (
        <div className="lx-moves-more">
          <button type="button" className="lx-btn lx-btn--accent lx-btn--sm" onClick={() => setShown((n) => n + 1)}>
            <ChevronDown size={16} /> Show the next step
          </button>
          <button type="button" className="lx-btn lx-btn--sm" onClick={() => setShown(moves.length)}>
            Show all {moves.length}
          </button>
          <span className="lx-meta">Try the next move yourself before you reveal it.</span>
        </div>
      ) : (
        (q.explain.answerTex || q.answerText) && (
          <div className="lx-ans-final">
            <span className="lx-meta">So the answer is</span>
            {q.explain.answerTex ? <MathBlock tex={q.explain.answerTex} /> : <MathText text={q.answerText} />}
          </div>
        )
      )}
    </section>
  );
};

// the course documents behind this question: its slide at the right page, then the lesson and its guides
export function useCourseDocs(q: LearnQuestion) {
  const cur = useCurriculum(q.courseId);
  return useMemo(() => {
    if (!cur) return { slides: [] as DocRef[], lesson: null as null | { id: string; title: string; stepId?: string }, more: [] as DocRef[] };
    const all = cur.resources.flatMap((g) => g.docs);
    const slides: DocRef[] = [];
    for (const r of q.refs ?? []) {
      const d = r.path ? all.find((x) => x.path === r.path) : all.find((x) => x.title === r.deck?.replace(/\.pdf$/i, '') || x.path.endsWith('/' + r.deck));
      if (d && !slides.some((s) => s.path === d.path && s.page === r.page)) slides.push({ ...d, page: r.page, label: r.label && !/^Pages?\s/i.test(r.label) ? r.label : undefined });
    }
    let lesson = null as null | { id: string; title: string; stepId?: string };
    let more: DocRef[] = [];
    for (const s of cur.sections)
      for (const l of s.lessons)
        if (!lesson && l.steps.some((st) => st.questionIds?.includes(q.id))) {
          // the lesson's lead step (its video, or key notes when there is no video) carries its references
          const lead = l.steps.find((st) => st.kind === 'video' || st.kind === 'extra' || st.kind === 'notes' || st.kind === 'reading');
          lesson = { id: l.id, title: l.title, stepId: lead?.id };
          const seen = new Set(slides.map((x) => x.path));
          more = [...(lead?.docs ?? []), ...(l.resources ?? [])].filter((d) => !seen.has(d.path) && !!seen.add(d.path)).slice(0, 3);
          if (!slides.length) slides.push(...more.splice(0, 1));
        }
    return { slides, lesson, more };
  }, [cur, q]);
}

const CourseDocs: React.FC<{ q: LearnQuestion; yourAnswer?: string }> = ({ q, yourAnswer }) => {
  const found = useCourseDocs(q);
  return (
    <aside className="lx-ans-side" aria-label="From the course">
      <h4 className="lx-ans-side-title">
        <BookOpen size={16} aria-hidden /> From the course
      </h4>
      {found.slides.map((d, i) => (
        <button key={d.path + i} type="button" className="lx-ans-doc is-main" onClick={() => openDoc(d)}>
          <FileText size={18} aria-hidden />
          <span>
            <strong>{d.title}</strong>
            <span className="lx-meta">{d.label ?? 'The teacher’s slides'}</span>
          </span>
          {d.page ? <span className="lx-chip lx-chip--warn lx-num">Page {d.page}</span> : null}
          <ExternalLink size={14} aria-hidden />
        </button>
      ))}
      {found.lesson && (
        <a className="lx-ans-lesson" href={href({ name: 'learn', course: q.courseId, lesson: found.lesson.id, step: found.lesson.stepId })}>
          <span className="lx-meta">Review the lesson</span>
          <strong>{found.lesson.title}</strong>
        </a>
      )}
      {found.more.length > 0 && (
        <ul className="lx-ans-more">
          {found.more.map((d) => (
            <li key={d.path + (d.page ?? '')}>
              <button type="button" onClick={() => openDoc(d)}>
                <FileText size={14} aria-hidden /> {d.label ?? d.title}
                {d.page ? <span className="lx-meta"> · p. {d.page}</span> : null}
              </button>
            </li>
          ))}
        </ul>
      )}
      {q.explain.reference && <p className="lx-ans-refnote lx-meta">{q.explain.reference}</p>}
      <AskAiButton label="Explain it differently" ctx={questionContext(q, yourAnswer)} className="lx-btn lx-btn--sm lx-ans-ai" />
    </aside>
  );
};

export const Explanation: React.FC<{ q: LearnQuestion; chosen?: number[]; correct: boolean | null; order?: number[]; yourAnswer?: string }> = ({ q, chosen, correct, order, yourAnswer }) => {
  const e = q.explain;
  const wrongIdx = chosen && correct === false ? chosen.find((i) => !q.correct.includes(i)) : undefined;
  const wrongNote = wrongIdx !== undefined ? e.whyWrong?.[wrongIdx] : undefined;
  const isMiae221 = q.courseId === 'MIAE221' || q.id.startsWith('MIAE221') || q.id.startsWith('TX_MIAE221') || q.id.startsWith('F24') || q.id.startsWith('A25') || q.id.startsWith('W26');
  const fastCrack = isMiae221 ? detectFastCrackType(q.prompt, q.topic, q.id) : null;
  const questionCrack = isMiae221 ? getQuestionCrack(q.id) : null;
  const hasOwnSteps = !!(e.steps?.length || e.lines?.length);

  return (
    <>
    {q.code && q.courseId === 'MIAE215' && (
      <section className="lx-ans-code">
        <h4 className="lx-ans-code-title">Step through the code</h4>
        <Suspense fallback={<div className="lx-quiz-loading" aria-busy="true"><span className="lx-spinner" /> Loading the code stepper…</div>}>
          <CodeStepper code={q.code} questionId={q.id} prompt={q.prompt} />
        </Suspense>
      </section>
    )}
    <div className="lx-ans">
      <div className="lx-ans-main">
        {fastCrack && (
          <section className="lx-fast-crack-card" aria-label="Fast-Crack Strategy & Turbo Formula">
            <div className="lx-fast-crack-header">
              <div className="lx-fast-crack-badge">
                <Zap size={14} /> 60-Second Fast-Crack Strategy
              </div>
              <div className="lx-fast-crack-system">
                <strong>{fastCrack.typeName}</strong> · {fastCrack.system}
              </div>
            </div>

            <div className="lx-fast-crack-spot">
              <strong>👀 How to Spot in Under 5 Seconds:</strong>
              <p><MathText text={fastCrack.howToSpot} /></p>
            </div>

            {questionCrack && (
              <div className="lx-fast-crack-how">
                <strong>🎯 This Question:</strong>
                <p><MathText text={questionCrack.ask} /></p>
              </div>
            )}

            <div className="lx-fast-crack-how">
              <strong>📖 How It Works (quick revision):</strong>
              <p><MathText text={fastCrack.howItWorks} /></p>
            </div>

            <div className="lx-fast-crack-formula">
              <strong>⚡ Shortened Turbo Formula / Algorithm:</strong>
              <div className="lx-fast-crack-math">
                <MathText text={fastCrack.turboFormula} />
              </div>
            </div>

            <div className="lx-fast-crack-steps">
              <strong>Speed Strategy:</strong>
              <ol>
                {fastCrack.steps.map((st, i) => (
                  <li key={i}><MathText text={st} /></li>
                ))}
              </ol>
            </div>

            <div className="lx-fast-crack-tips">
              <strong>💡 Tips for This Subtopic:</strong>
              <ul>
                {fastCrack.tips.map((tip, i) => (
                  <li key={i}><MathText text={tip} /></li>
                ))}
              </ul>
            </div>

            {questionCrack && (
              <div className="lx-fast-crack-tips">
                <strong>🧩 Tip for This Question:</strong>
                <p><MathText text={questionCrack.trick} /></p>
              </div>
            )}

            {fastCrack.commonTrap && (
              <div className="lx-fast-crack-spot" style={{ color: '#b91c1c' }}>
                <strong>⚠️ Instant Trap Check:</strong> <MathText text={fastCrack.commonTrap} />
              </div>
            )}

          </section>
        )}
        {questionCrack && !hasOwnSteps && (
          <section className="lx-ans-card is-steps">
            <h4>
              <ListOrdered size={16} aria-hidden /> Step-by-step breakdown
            </h4>
            <ol className="lx-steps-list">
              {questionCrack.moves.map((mv, i) => (
                <li key={i}><MathText text={mv} /></li>
              ))}
            </ol>
          </section>
        )}
        {wrongNote && (
          <section className="lx-ans-card is-wrong">
            <h4>
              <Search size={16} aria-hidden /> Where answer {LETTER[order ? order.indexOf(wrongIdx!) : wrongIdx!] ?? ''} went wrong
            </h4>
            <p>
              <MathText text={wrongNote} />
            </p>
          </section>
        )}
        {e.concept && (
          <section className="lx-ans-card is-idea">
            <h4>
              <Lightbulb size={16} aria-hidden /> The idea
            </h4>
            <p>
              <MathText text={e.concept} />
            </p>
          </section>
        )}
        <Steps q={q} stepwise={false} />
        {e.solution && (
          <section className="lx-ans-card">
            <h4>Full solution</h4>
            {/[;{}]\s*$|#include|cout|int main/m.test(e.solution) ? (
              <CodeBlock code={e.solution} label="Solution code" />
            ) : (
              <p className="lx-ex-pre">
                <MathText text={e.solution} />
              </p>
            )}
          </section>
        )}
        {e.trap && (
          <section className="lx-ans-card is-trap">
            <h4>
              <AlertTriangle size={16} aria-hidden /> Common exam trap
            </h4>
            <p>
              <MathText text={e.trap} />
            </p>
          </section>
        )}
        {e.note && (
          <section className="lx-ans-card lx-ans-card--note">
            <h4>
              <Lightbulb size={16} aria-hidden /> Key insight
            </h4>
            <p className="lx-ex-note-text">
              <MathText text={e.note} />
            </p>
          </section>
        )}
      </div>
      <CourseDocs q={q} yourAnswer={yourAnswer} />
    </div>
    {q.videoId && (
      <section className="lx-ans-video" aria-label="Video solution">
        <header>
          <span className="lx-ans-video-kicker">
            <Clapperboard size={17} aria-hidden /> Watch the full walkthrough
          </span>
          <p className="lx-meta">The narrated solution stays with the written steps, while your course files remain available beside them.</p>
        </header>
        <SolutionVideo videoId={q.videoId} />
      </section>
    )}
    </>
  );
};
