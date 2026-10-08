import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Eye, Lightbulb, RefreshCw, RotateCcw, Shuffle, Trophy, X, XCircle } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import { audio } from '../../utils/audio';
import { DrillItem, grade, letter, recordResult } from './drill';
import { CodeBlock } from './shared';

const BADGE: Record<string, { text: string; cls: string }> = {
  exam: { text: 'Past exam', cls: 'exact' },
  homework: { text: 'Tutorial set', cls: 'neutral' },
  similar: { text: 'Similar · new numbers', cls: 'template' },
  textbook: { text: 'Textbook example', cls: 'info' },
  lecture: { text: 'Lecture example', cls: 'info' },
  concept: { text: 'Concept check', cls: 'concept' }
};

interface Result {
  item: DrillItem;
  ok: boolean;
}

interface Props {
  course: string;
  title: string;
  items: DrillItem[];
  embedded?: boolean;
  onClose?: () => void;
  onOpenQuestion?: (id: string) => void;
}

export const DrillRunner: React.FC<Props> = ({ course, title, items: initial, embedded = false, onClose, onOpenQuestion }) => {
  const [items, setItems] = useState<DrillItem[]>(initial);
  const [i, setI] = useState(0);
  const [choice, setChoice] = useState<string[]>([]);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState<null | boolean>(null);
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  useEffect(() => {
    setItems(initial);
    restart(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);

  useEffect(() => {
    if (embedded) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [embedded, onClose]);

  const restart = (list: DrillItem[]) => {
    setItems(list);
    setI(0);
    setResults([]);
    resetQuestion();
  };
  const resetQuestion = () => {
    setChoice([]);
    setText('');
    setChecked(null);
    setRevealed(false);
    setShowHint(false);
  };

  const item = items[i];
  const done = i >= items.length;
  const score = results.filter((r) => r.ok).length;

  const finish = (ok: boolean) => {
    setChecked(ok);
    if (ok) audio.playCorrect();
    else audio.playIncorrect();
    recordResult(course, item.key, ok);
    setResults((r) => [...r, { item, ok }]);
  };

  const submit = () => {
    if (!item || checked !== null) return;
    if (item.kind === 'open') return;
    const ans = item.kind === 'mc' || item.kind === 'tf' || item.kind === 'multi' ? choice : [text];
    if (!ans.length || (ans.length === 1 && !ans[0].trim())) return;
    finish(grade(item, ans));
  };

  const next = () => {
    resetQuestion();
    setI((x) => x + 1);
    setTimeout(() => inputRef.current?.focus(), 30);
  };

  const newNumbers = () => {
    const fresh = item.regen?.();
    if (!fresh) return;
    setItems((list) => list.map((x, k) => (k === i ? fresh : x)));
    resetQuestion();
  };

  const toggle = (l: string) => {
    if (checked !== null) return;
    if (item.kind === 'multi') setChoice((c) => (c.includes(l) ? c.filter((x) => x !== l) : [...c, l]));
    else setChoice([l]);
  };

  const missed = useMemo(() => results.filter((r) => !r.ok).map((r) => r.item), [results]);

  const body = (
    <div className={`dr-card ${embedded ? 'embedded' : ''}`} role={embedded ? undefined : 'dialog'} aria-modal={embedded ? undefined : true} aria-label={title}>
      <div className="dr-head">
        <div style={{ minWidth: 0 }}>
          <div className="dr-title">{title}</div>
          <div className="mg-small mg-muted">
            {done ? `Finished · ${score}/${items.length}` : `Question ${i + 1} of ${items.length} · ${score} correct so far`}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {!done && (
            <button type="button" className="mg-btn small" onClick={() => restart([...items].sort(() => Math.random() - 0.5))} title="Shuffle and restart">
              <Shuffle size={13} />
            </button>
          )}
          {!embedded && (
            <button type="button" className="mg-btn small" onClick={onClose} aria-label="Close drill">
              <X size={14} />
            </button>
          )}
        </div>
      </div>
      <div className="dr-progress">
        <span style={{ width: `${(100 * Math.min(i, items.length)) / Math.max(1, items.length)}%` }} />
      </div>

      {items.length === 0 ? (
        <p className="mg-small mg-muted" style={{ padding: 16 }}>
          Nothing to drill here yet.
        </p>
      ) : done ? (
        <div className="dr-body">
          <div className="dr-summary">
            <Trophy size={28} />
            <div>
              <div className="dr-score">
                {score} / {items.length}
              </div>
              <div className="mg-small mg-muted">{score === items.length ? 'Clean sweep. Move on to the next topic.' : `${missed.length} to review: they are saved under “Everything I missed”.`}</div>
            </div>
          </div>
          {missed.length > 0 && (
            <ul className="dr-missed">
              {missed.map((m) => (
                <li key={m.key + m.prompt}>
                  <XCircle size={14} />
                  <span>{m.label}</span>
                  {m.qid && onOpenQuestion && (
                    <button type="button" className="mg-btn small" onClick={() => onOpenQuestion(m.qid!)}>
                      Review
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div className="dr-actions">
            {missed.length > 0 && (
              <button type="button" className="mg-btn primary" onClick={() => restart(missed.map((m) => m.regen?.() ?? m))}>
                <RotateCcw size={14} /> Retry the {missed.length} I missed
              </button>
            )}
            <button type="button" className="mg-btn" onClick={() => restart(items.map((m) => m.regen?.() ?? m))}>
              <RefreshCw size={14} /> Again with new numbers
            </button>
            {!embedded && (
              <button type="button" className="mg-btn" onClick={onClose}>
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="dr-body">
          <div className="mg-q-head">
            <span className="mg-exam">{item.label}</span>
            {BADGE[item.badge] && <span className={`mg-badge ${BADGE[item.badge].cls}`}>{BADGE[item.badge].text}</span>}
            {item.kind === 'multi' && <span className="mg-badge info">Select all that apply</span>}
          </div>
          <div className="dr-prompt">
            <MathText text={item.prompt} />
          </div>
          {item.code && <CodeBlock code={item.code} />}

          {(item.kind === 'mc' || item.kind === 'multi') && (
            <div className="dr-opts">
              {item.opts!.map((o, k) => {
                const l = letter(k);
                const picked = choice.includes(l);
                const right = checked !== null && item.correct.includes(l);
                const wrong = checked !== null && picked && !item.correct.includes(l);
                return (
                  <button key={k} type="button" className={`dr-opt ${picked ? 'picked' : ''} ${right ? 'right' : ''} ${wrong ? 'wrong' : ''}`} onClick={() => toggle(l)} disabled={checked !== null}>
                    <b>{l})</b>
                    <span>
                      <MathText text={o} />
                    </span>
                    {right && <Check size={15} />}
                  </button>
                );
              })}
            </div>
          )}
          {item.kind === 'tf' && (
            <div className="dr-opts tf">
              {['True', 'False'].map((l) => (
                <button
                  key={l}
                  type="button"
                  className={`dr-opt ${choice[0] === l ? 'picked' : ''} ${checked !== null && item.correct[0] === l ? 'right' : ''} ${checked !== null && choice[0] === l && item.correct[0] !== l ? 'wrong' : ''}`}
                  onClick={() => toggle(l)}
                  disabled={checked !== null}
                >
                  <span>{l}</span>
                </button>
              ))}
            </div>
          )}
          {(item.kind === 'num' || item.kind === 'indices') && (
            <div className="dr-input">
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder={item.kind === 'indices' ? 'e.g. -2 2 1' : 'e.g. 2.05e-10 or 59.4'}
                disabled={checked !== null}
                inputMode={item.kind === 'num' ? 'decimal' : 'text'}
                autoComplete="off"
                spellCheck={false}
              />
              {item.unit && <span className="mg-small mg-muted">{item.unit}</span>}
            </div>
          )}
          {item.kind === 'output' && (
            <div className="dr-input">
              <textarea
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder="Type exactly what the program prints (spacing and line breaks are not graded)"
                disabled={checked !== null}
                spellCheck={false}
              />
            </div>
          )}
          {item.kind === 'open' && !revealed && (
            <div className="mg-note">Work it on paper first. When you have an answer, reveal the solution and mark yourself honestly.</div>
          )}

          {item.hint && checked === null && !revealed && (
            <div style={{ marginTop: 8 }}>
              {showHint ? (
                <div className="mg-note">
                  <Lightbulb size={13} style={{ verticalAlign: -2 }} /> <MathText text={item.hint} />
                </div>
              ) : (
                <button type="button" className="mg-btn small" onClick={() => setShowHint(true)}>
                  <Lightbulb size={13} /> Hint
                </button>
              )}
            </div>
          )}

          {(checked !== null || revealed) && (
            <div className={`dr-feedback ${checked === true ? 'ok' : checked === false ? 'bad' : ''}`}>
              {checked !== null && (
                <div className="dr-verdict">
                  {checked ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                  {checked ? 'Correct' : 'Not quite'}
                </div>
              )}
              <div>
                <b>Answer: </b>
                {item.kind === 'output' ? <CodeBlock code={item.answerText} /> : <MathText text={item.answerText} />}
                {item.kind === 'num' && item.unit ? ` ${item.unit}` : ''}
              </div>
              {item.solution && <CodeBlock code={item.solution} />}
              {item.steps && item.steps.length > 0 && (
                <ol className="mg-steps">
                  {item.steps.map((s, k) => (
                    <li key={k}>
                      <MathText text={s} />
                    </li>
                  ))}
                </ol>
              )}
              {item.note && (
                <div className="mg-small" style={{ marginTop: 6, lineHeight: 1.55 }}>
                  <MathText text={item.note} />
                </div>
              )}
            </div>
          )}

          <div className="dr-actions">
            {item.kind === 'open' ? (
              !revealed ? (
                <button type="button" className="mg-btn primary" onClick={() => setRevealed(true)}>
                  <Eye size={14} /> Reveal solution
                </button>
              ) : checked === null ? (
                <>
                  <button type="button" className="mg-btn primary" onClick={() => finish(true)}>
                    <Check size={14} /> I got it
                  </button>
                  <button type="button" className="mg-btn" onClick={() => finish(false)}>
                    <X size={14} /> I missed it
                  </button>
                </>
              ) : (
                <button type="button" className="mg-btn primary" onClick={next}>
                  Next <ArrowRight size={14} />
                </button>
              )
            ) : checked === null ? (
              <button type="button" className="mg-btn primary" onClick={submit}>
                Check
              </button>
            ) : (
              <button type="button" className="mg-btn primary" onClick={next}>
                {i + 1 === items.length ? 'See results' : 'Next'} <ArrowRight size={14} />
              </button>
            )}
            {item.regen && (
              <button type="button" className="mg-btn" onClick={newNumbers} title="Same question with different numbers">
                <RefreshCw size={14} /> New numbers
              </button>
            )}
            {item.qid && onOpenQuestion && checked !== null && (
              <button type="button" className="mg-btn" onClick={() => onOpenQuestion(item.qid!)}>
                Where it repeats
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (embedded) return body;
  return (
    <div className="dr-backdrop" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {body}
      </div>
    </div>
  );
};

export default DrillRunner;
