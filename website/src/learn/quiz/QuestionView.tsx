import React, { useEffect, useRef } from 'react';
import { BookOpen, Check, CheckCircle2, Eye, Flag, HelpCircle, Lightbulb, MessageSquareWarning, XCircle } from 'lucide-react';
import type { LearnQuestion } from '../model';
import { LEVEL_LABEL } from '../model';
import type { Answer, Confidence } from '../progress/store';
import { updateProgress, useProgress } from '../progress/store';
import { openDoc } from '../docBus';
import { COURSE_BY_ID } from '../courses';
import { trackStudy } from '../analytics';
import { MathText } from '../../utils/mathRenderer';
import { OptionContent } from '../../components/OptionContent';
import { ReadAloudButton } from '../../components/ReadAloudButton';
import { CodeBlock } from '../components/CodeBlock';
import { Explanation, useCourseDocs } from './Explanation';
import '../styles/answer.css';

const LETTER = 'ABCDEFGH';

export interface QuestionViewProps {
  q: LearnQuestion;
  index: number;
  total: number;
  examMode: boolean; // no feedback until the end
  optionOrder?: number[]; // display order → original option index
  answer?: Answer;
  result?: boolean; // graded result, once checked
  revealed: boolean;
  flagged: boolean;
  confidence?: Confidence;
  hintShown: boolean;
  locked: boolean; // answered and checked (or exam submitted): inputs are read-only
  onAnswer: (a: Answer) => void;
  onCheck: () => void;
  onFlag: () => void;
  onConfidence: (c: Confidence) => void;
  onHint: () => void;
  onReveal: () => void;
  onSelf: (right: boolean) => void;
}

export const QuestionView: React.FC<QuestionViewProps> = (p) => {
  const { q } = p;
  const inputRef = useRef<HTMLInputElement>(null);
  const order = p.optionOrder ?? q.options?.map((_, i) => i) ?? [];
  const chosen = Array.isArray(p.answer) ? p.answer : [];
  const showFeedback = p.result !== undefined && (!p.examMode || p.locked);
  const typed = q.kind === 'num' || q.kind === 'text' || q.kind === 'indices';

  useEffect(() => {
    if (typed && !p.locked) inputRef.current?.focus({ preventScroll: true });
  }, [q.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // 1–5 picks an option, Enter checks
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select, [contenteditable]') || e.metaKey || e.ctrlKey || e.altKey) return;
      if (p.locked) return;
      const n = Number(e.key);
      if ((q.kind === 'mc' || q.kind === 'tf' || q.kind === 'multi') && n >= 1 && n <= order.length) {
        const orig = order[n - 1];
        p.onAnswer(q.kind === 'multi' ? (chosen.includes(orig) ? chosen.filter((x) => x !== orig) : [...chosen, orig]) : [orig]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const autoRead = useProgress((s) => !!s.settings.autoRead);
  const docs = useCourseDocs(q);
  const slide = docs.slides[0];
  // the source line often names the same lecture page as the slide chip: show it once
  const plain = (x: string) => x.toLowerCase().replace(/\.pdf/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const sourceIsSlide = !!slide && !!q.source && plain(q.source).startsWith(plain(slide.title));
  const report = () => {
    trackStudy('report_problem', { course: q.courseId, question: q.id });
    window.dispatchEvent(
      new CustomEvent('concordia:feedback', { detail: { subject: 'Practice Drill Feedback', message: `Problem with a ${COURSE_BY_ID[q.courseId].code} question (${q.topic})
Reference: ${q.id}

What went wrong:
` } })
    );
  };
  const yourAnswer = q.options ? chosen.map((o) => `(${LETTER[order.indexOf(o)]}) ${q.options![o]}`).join(', ') : typeof p.answer === 'string' ? p.answer : undefined;
  const speech = `${q.prompt}${q.options ? '. ' + order.map((o, i) => `Option ${LETTER[i]}: ${q.options![o]}`).join('. ') : ''}`;

  return (
    <article className="lx-q" aria-labelledby={`q-${q.id}`}>
      <header className="lx-q-head">
        <div className="lx-q-bar">
          <span className="lx-q-count lx-num">
            Question {p.index + 1} <span>of {p.total}</span>
          </span>
          <span className="lx-q-head-tools">
            <ReadAloudButton text={speech} stopKey={q.id} autoPlay={autoRead && !p.locked} />
            <label className="lx-autoread" title="Read each new question aloud">
              <input type="checkbox" checked={autoRead} onChange={(e) => updateProgress((s) => void (s.settings.autoRead = e.target.checked))} />
              <span>Auto-read</span>
            </label>
            <button type="button" className="lx-icon-btn" onClick={report} title="Report a problem with this question">
              <MessageSquareWarning size={17} />
              <span className="lx-sr">Report a problem with this question</span>
            </button>
            <button type="button" className={`lx-icon-btn lx-flag${p.flagged ? ' is-on' : ''}`} aria-pressed={p.flagged} onClick={p.onFlag} title={p.flagged ? 'Remove flag' : 'Flag for review'}>
              <Flag size={17} />
              <span className="lx-sr">{p.flagged ? 'Remove flag' : 'Flag for review'}</span>
            </button>
          </span>
        </div>
        <div className="lx-q-tags">
          <span className={`lx-chip lx-lvl-chip lx-lvl-${q.level}`}>{LEVEL_LABEL[q.level]}</span>
          <span className="lx-chip">{q.topic}</span>
          {slide && (
            <button type="button" className="lx-chip lx-q-ref" onClick={() => openDoc(slide)} title={`Open ${slide.title}${slide.page ? `, page ${slide.page}` : ''}`}>
              <BookOpen size={12} aria-hidden /> {slide.title.replace(/\.pdf$/i, '')}
              {slide.page ? ` · p. ${slide.page}` : ''}
            </button>
          )}
          {q.source && !sourceIsSlide && <span className={`lx-chip${q.pastPaper ? ' lx-chip--warn' : ''}`}>{q.source}</span>}
        </div>
      </header>

      <div className="lx-q-prompt" id={`q-${q.id}`}>
        <MathText text={q.prompt} />
      </div>
      {q.formula && (
        <div className="lx-q-formula">
          <MathText text={`$${q.formula.replace(/^\$|\$$/g, '')}$`} />
        </div>
      )}
      {q.code && <CodeBlock code={q.code} />}
      {q.figure && (
        <figure className="lx-q-figure">
          <img src={q.figure.src} alt={q.figure.alt} loading="lazy" />
          {q.figure.caption && <figcaption className="lx-meta">{q.figure.caption}</figcaption>}
        </figure>
      )}

      {(q.kind === 'mc' || q.kind === 'tf' || q.kind === 'multi') && (
        <div className={`lx-opts${q.kind === 'tf' ? ' is-tf' : ''}${showFeedback ? ' is-done' : ''}`} role={q.kind === 'multi' ? 'group' : 'radiogroup'} aria-label="Answer options">
          {q.kind === 'multi' && <p className="lx-meta">Select every correct option.</p>}
          {order.map((orig, i) => {
            const picked = chosen.includes(orig);
            const right = showFeedback && q.correct.includes(orig);
            const wrong = showFeedback && picked && !q.correct.includes(orig);
            return (
              <button
                key={orig}
                type="button"
                role={q.kind === 'multi' ? 'checkbox' : 'radio'}
                aria-checked={picked}
                disabled={p.locked}
                className={`lx-opt${picked ? ' is-picked' : ''}${right ? ' is-right' : ''}${wrong ? ' is-wrong' : ''}`}
                onClick={() => p.onAnswer(q.kind === 'multi' ? (picked ? chosen.filter((x) => x !== orig) : [...chosen, orig]) : [orig])}
              >
                <span className="lx-opt-key" aria-hidden>
                  {right ? <Check size={15} strokeWidth={3} /> : wrong ? <XCircle size={15} /> : LETTER[i]}
                </span>
                <span className="lx-opt-text">
                  <OptionContent text={q.options![orig]} />
                </span>
              </button>
            );
          })}
        </div>
      )}

      {typed && (
        <form
          className="lx-typed"
          onSubmit={(e) => {
            e.preventDefault();
            if (!p.locked && !p.examMode) p.onCheck();
          }}
        >
          <label className="lx-meta" htmlFor={`in-${q.id}`}>
            {q.kind === 'num' ? `Your answer${q.unit ? ` (in ${q.unit})` : ''}: 2.5, 2.5e-3 or 2.5×10⁻³ all work` : q.kind === 'indices' ? 'Your indices, e.g. [1 -1 0]' : 'What the program prints, exactly'}
          </label>
          {q.kind === 'text' ? (
            <textarea
              id={`in-${q.id}`}
              className="lx-input lx-input--mono"
              rows={3}
              value={typeof p.answer === 'string' ? p.answer : ''}
              readOnly={p.locked}
              onChange={(e) => p.onAnswer(e.target.value)}
            />
          ) : (
            <input
              id={`in-${q.id}`}
              ref={inputRef}
              className="lx-input"
              inputMode={q.kind === 'num' ? 'decimal' : 'text'}
              autoComplete="off"
              value={typeof p.answer === 'string' ? p.answer : ''}
              readOnly={p.locked}
              onChange={(e) => p.onAnswer(e.target.value)}
            />
          )}
        </form>
      )}

      {q.kind === 'self' && !showFeedback && p.examMode && (
        <div className="lx-self">
          <p className="lx-meta">An open question: work it out on paper. After you submit the exam, you compare with the solution and mark yourself.</p>
        </div>
      )}
      {q.kind === 'self' && !showFeedback && !p.examMode && (
        <div className="lx-self">
          <p className="lx-meta">An open question: work it out on paper, then compare with the solution and mark yourself honestly.</p>
          {!p.revealed ? (
            <button type="button" className="lx-btn lx-btn--primary" onClick={p.onReveal}>
              <Eye size={16} /> Show the solution
            </button>
          ) : (
            <>
              <div className="lx-self-answer">
                <span className="lx-meta">Answer</span>
                <MathText text={q.answerText} />
              </div>
              <div className="lx-self-mark">
                <button type="button" className="lx-btn lx-btn--good" onClick={() => p.onSelf(true)}>
                  <CheckCircle2 size={16} /> I got it right
                </button>
                <button type="button" className="lx-btn lx-btn--bad" onClick={() => p.onSelf(false)}>
                  <XCircle size={16} /> I missed it
                </button>
              </div>
              <Explanation q={q} correct={null} order={order} />
            </>
          )}
        </div>
      )}

      {!p.locked && q.kind !== 'self' && (
        <div className="lx-q-aside">
          <div className="lx-confidence" role="group" aria-label="How sure are you?">
            <span className="lx-meta">How sure are you?</span>
            {(['sure', 'unsure'] as Confidence[]).map((c) => (
              <button key={c} type="button" className={`lx-chip lx-chip-btn${p.confidence === c ? ' is-on' : ''}`} aria-pressed={p.confidence === c} onClick={() => p.onConfidence(c)}>
                {c === 'sure' ? 'Sure' : 'Not sure'}
              </button>
            ))}
          </div>
          {q.hint &&
            (p.hintShown ? (
              <p className="lx-hint">
                <Lightbulb size={15} aria-hidden /> <MathText text={q.hint} />
              </p>
            ) : (
              <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={p.onHint}>
                <HelpCircle size={15} /> Hint
              </button>
            ))}
        </div>
      )}

      {showFeedback && (
        <div className={`lx-feedback ${p.result ? 'is-right' : 'is-wrong'}`} role="status" aria-live="polite">
          <div className="lx-feedback-verdict">
            {p.result ? <CheckCircle2 size={22} aria-hidden /> : <XCircle size={22} aria-hidden />}
            <span>
              <strong>{p.result ? 'Correct. Nice work.' : 'Not quite. Let’s find where it went wrong.'}</strong>
              {q.kind !== 'self' && (
                <span className="lx-feedback-answer">
                  {p.result ? 'Answer: ' : 'The right answer is '}
                  <MathText text={q.answerText} />
                  {q.kind === 'num' && q.unit && !q.answerText.includes(q.unit) ? ` ${q.unit}` : ''}
                </span>
              )}
            </span>
          </div>
          <Explanation q={q} chosen={chosen} correct={p.result ?? null} order={order} yourAnswer={yourAnswer} />
        </div>
      )}
    </article>
  );
};
