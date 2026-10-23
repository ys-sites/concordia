import React, { useEffect, useMemo, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircleQuestion, X } from 'lucide-react';
import type { LearnQuestion } from '../model';
import { COURSE_BY_ID } from '../courses';
import './askAi.css';

// What the AI tutor is told: the question (or lesson), the student's answer and the right one, and what they want
export interface AskContext {
  course: string; // "ENGR 213 · Applied Ordinary Differential Equations"
  topic?: string;
  question: string;
  options?: string[];
  yourAnswer?: string;
  rightAnswer?: string;
  steps?: string[];
}

const LETTER = 'ABCDEFGH';
export const questionContext = (q: LearnQuestion, yourAnswer?: string): AskContext => ({
  course: `${COURSE_BY_ID[q.courseId].code} · ${COURSE_BY_ID[q.courseId].title}`,
  topic: q.topic,
  question: q.prompt,
  options: q.options?.map((o, i) => `(${LETTER[i]}) ${o}`),
  yourAnswer,
  rightAnswer: q.answerText,
  steps: q.explain.steps?.map((s) => [s.title, s.math && `$${s.math}$`, s.note].filter(Boolean).join(': ')) ?? q.explain.lines
});

type Ask = 'simple' | 'steps' | 'wrong' | 'spot';
const ASKS: { id: Ask; label: string; text: string }[] = [
  { id: 'simple', label: 'Explain the idea simply', text: 'Explain the idea behind this in plain words first, then connect it to the method. Why does the method work?' },
  { id: 'steps', label: 'Show every step', text: 'Solve it again showing every single step: each substitution, each line of algebra, nothing skipped.' },
  { id: 'wrong', label: 'Why was my answer wrong?', text: 'Find exactly where my answer went wrong, what I was probably thinking, and how to avoid that mistake.' },
  { id: 'spot', label: 'How to spot it on an exam', text: 'How do I recognise this type of problem quickly on a timed exam, and what is the first move every time?' }
];

function buildPrompt(c: AskContext, ask: Ask, own: string) {
  const out = [`I'm studying ${c.course}${c.topic ? `, topic: ${c.topic}` : ''}. Help me understand this like a patient tutor.`, '', 'Question:', c.question];
  if (c.options?.length) out.push('', 'Options:', ...c.options);
  if (c.yourAnswer) out.push('', `My answer: ${c.yourAnswer}`);
  if (c.rightAnswer) out.push(`Correct answer: ${c.rightAnswer}`);
  if (c.steps?.length) out.push('', 'The worked solution I was given:', ...c.steps.map((s, i) => `${i + 1}. ${s}`));
  out.push('', own.trim() || ASKS.find((a) => a.id === ask)!.text);
  return out.join('\n');
}

export const AskAiDialog: React.FC<{ ctx: AskContext; onClose: () => void }> = ({ ctx, onClose }) => {
  const asks = ASKS.filter((a) => a.id !== 'wrong' || (ctx.yourAnswer && ctx.yourAnswer !== ctx.rightAnswer));
  const [ask, setAsk] = useState<Ask>(asks.some((a) => a.id === 'wrong') ? 'wrong' : 'simple');
  const [own, setOwn] = useState('');
  const [copied, setCopied] = useState(false);
  const prompt = useMemo(() => buildPrompt(ctx, ask, own), [ctx, ask, own]);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [onClose]);

  const copy = () => {
    navigator.clipboard?.writeText(prompt).catch(() => undefined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };
  // the prompt goes in the link and on the clipboard, in case the chat ignores the link
  const open = (url: string) => {
    copy();
    window.open(url + encodeURIComponent(prompt), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="lx-dialog-backdrop" onClick={onClose}>
      <div className="lx-dialog lx-ai" role="dialog" aria-modal="true" aria-labelledby="lx-ai-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lx-icon-btn lx-dialog-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h2 id="lx-ai-title" className="lx-h3">
          <MessageCircleQuestion size={18} aria-hidden /> Ask an AI tutor
        </h2>

        <div className="lx-ai-ctx">
          <p className="lx-ai-q">{ctx.question}</p>
          {(ctx.yourAnswer || ctx.rightAnswer) && (
            <dl>
              {ctx.yourAnswer && (
                <>
                  <dt>Your answer</dt>
                  <dd>{ctx.yourAnswer}</dd>
                </>
              )}
              {ctx.rightAnswer && (
                <>
                  <dt>Right answer</dt>
                  <dd>{ctx.rightAnswer}</dd>
                </>
              )}
            </dl>
          )}
        </div>

        <fieldset className="lx-ai-asks">
          <legend>What do you want to know?</legend>
          {asks.map((a) => (
            <button key={a.id} type="button" className={`lx-chip-btn${ask === a.id && !own.trim() ? ' is-on' : ''}`} aria-pressed={ask === a.id && !own.trim()} onClick={() => (setAsk(a.id), setOwn(''))}>
              {a.label}
            </button>
          ))}
        </fieldset>
        <label className="lx-field">
          Or ask in your own words
          <textarea className="lx-input" rows={2} value={own} onChange={(e) => setOwn(e.target.value)} placeholder="Why does the integrating factor go on both sides?" />
        </label>

        <div className="lx-ai-go">
          <button type="button" className="lx-btn lx-btn--primary" onClick={() => open('https://claude.ai/new?q=')}>
            Open in Claude <ExternalLink size={14} />
          </button>
          <button type="button" className="lx-btn" onClick={() => open('https://chatgpt.com/?q=')}>
            Open in ChatGPT <ExternalLink size={14} />
          </button>
          <button type="button" className="lx-btn lx-btn--ghost" onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy prompt'}
          </button>
        </div>
        <p className="lx-meta">The question, both answers and the worked solution go with it, so the tutor starts where you are.</p>
      </div>
    </div>
  );
};

export const AskAiButton: React.FC<{ ctx: AskContext; label?: string; className?: string }> = ({ ctx, label = 'Ask an AI tutor', className = 'lx-btn lx-btn--sm' }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <MessageCircleQuestion size={16} aria-hidden /> {label}
      </button>
      {open && <AskAiDialog ctx={ctx} onClose={() => setOpen(false)} />}
    </>
  );
};
