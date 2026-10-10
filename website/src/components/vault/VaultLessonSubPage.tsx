import React, { useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, Calculator as CalcIcon, ChevronRight, Eye, ListChecks, Play, RotateCcw, Sigma, Sparkles, Target, Zap } from 'lucide-react';
import type { CourseWithDocs } from '../../data/coursesData';
import type { CourseDocument } from '../../types';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { CALCULATORS, CalcValues, defaultsFor } from './calculators';
import { CodeBlock, ExamTag, GateIndex, RefsRow } from './shared';
import { lessonItems } from './drill';
import type { DrillItem } from './drill';
import type { Formula, GateContent, GateNav, Preset } from './vaultTypes';
import './midtermGate.css';
import './gateExtras.css';

type Step = 'learn' | 'example' | 'calc' | 'practice';

interface Props {
  formulaId: string;
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  course: CourseWithDocs;
  backLabel?: string;
  onBack: () => void;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
  onStartPractice: (formula: Formula, items: DrillItem[]) => void;
}

export const VaultLessonSubPage: React.FC<Props> = ({
  formulaId,
  content,
  idx,
  nav,
  course,
  backLabel = 'Topics',
  onBack,
  onViewPdf,
  onStartPractice
}) => {
  const [curId, setCurId] = useState<string>(formulaId);
  const f = idx.formula.get(curId) ?? idx.formula.get(formulaId);

  const learn = f?.learn;
  const hasCalc = !!(f?.calc && CALCULATORS[f.calc]);
  const items = useMemo(() => (f ? lessonItems(f, idx) : []), [f, idx]);
  const [step, setStep] = useState<Step>('learn');
  const [shown, setShown] = useState(1);

  if (!f) return null;

  const topic = idx.topic.get(f.topic);
  const siblings = content.formulas.filter((x) => x.topic === f.topic);
  const paperSeen = f.seen.map((s) => idx.q.get(s)).filter((q) => q && idx.paperIds.includes(q.exam));
  const otherSeen = f.seen.map((s) => idx.q.get(s)).filter((q) => q && !idx.paperIds.includes(q.exam));

  const tabs: { id: Step; n: number; label: string; off?: boolean }[] = [
    { id: 'learn', n: 1, label: 'Understand' },
    { id: 'example', n: 2, label: 'Worked example', off: !learn?.example },
    { id: 'calc', n: 3, label: 'Calculator', off: !hasCalc },
    { id: 'practice', n: 4, label: `Practice (${items.length})`, off: !items.length }
  ];

  return (
    <div className="mg-subpage-container" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Top Breadcrumb & Return Bar */}
      <div className="mg-gate-head" style={{ marginBottom: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button type="button" className="mg-btn" onClick={onBack} title={`Return to ${backLabel}`}>
            <ArrowLeft size={15} />
            <span>Back to {backLabel}</span>
          </button>
          <span className="mg-small mg-muted" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>{course.code}</span>
            <span>·</span>
            <span>{topic?.ch || 'Chapter'}</span>
            <span>·</span>
            <strong style={{ color: 'var(--text-primary)' }}>{topic?.name || f.name}</strong>
          </span>
        </div>

        {items.length > 0 && (
          <button
            type="button"
            className="mg-btn primary"
            onClick={() => onStartPractice(f, items)}
            title="Start the interactive quiz drill for this lesson"
          >
            <Zap size={14} className="text-amber" />
            <span>Start Practice Drill ({items.length})</span>
          </button>
        )}
      </div>

      {/* Sibling Lessons Switcher (if subtopic has multiple formulas) */}
      {siblings.length > 1 && (
        <div className="mg-panel mg-panel-pad" style={{ padding: '10px 14px', background: 'var(--bg-surface)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="mg-small mg-muted" style={{ fontWeight: 600 }}>
              Lessons in this subtopic:
            </span>
            <div className="mg-presets" style={{ margin: 0 }}>
              {siblings.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`mg-chip ${s.id === f.id ? 'active' : ''}`}
                  onClick={() => {
                    setCurId(s.id);
                    setStep('learn');
                    setShown(1);
                  }}
                >
                  <Sigma size={12} style={{ verticalAlign: -1, marginRight: 4 }} />
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Lesson Body Article */}
      <article className="mg-panel mg-panel-pad" style={{ minWidth: 0, padding: '26px 30px' }}>
        <div className="mg-q-head" style={{ marginBottom: 12 }}>
          <span className="mg-badge neutral">
            {topic?.ch} · {topic?.name}
          </span>
          {f.sheet === true && <span className="mg-badge ok">On the formula sheet</span>}
          {f.sheet === false && <span className="mg-badge warn">Not on the sheet: memorise</span>}
        </div>

        <h2 className="mg-section-title" style={{ fontSize: 24, margin: '4px 0 16px', color: 'var(--text-primary)' }}>
          {f.name}
        </h2>

        {/* 4 Steps Navigation Tabs */}
        <div className="mg-steptabs" role="tablist" style={{ marginBottom: 22 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={step === t.id}
              className={`mg-steptab ${step === t.id ? 'active' : ''}`}
              disabled={t.off}
              onClick={() => setStep(t.id)}
            >
              <span className="n">{t.n}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Understand */}
        {step === 'learn' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {learn?.idea ? (
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text-primary)', margin: 0 }}>
                <MathText text={learn.idea} />
              </p>
            ) : (
              <p className="mg-section-sub" style={{ fontSize: 15, margin: 0 }}>
                <MathText text={f.meaning} />
              </p>
            )}

            {f.tex && (
              <div className="mg-formula-box" style={{ padding: '20px 24px', margin: '4px 0' }}>
                <MathBlock tex={f.tex} />
              </div>
            )}

            {f.vars && f.vars.length > 0 && (
              <table className="mg-vars" style={{ marginTop: 6 }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' }}>
                    <th style={{ padding: '6px 12px', fontSize: 12, color: 'var(--text-muted)' }}>Symbol</th>
                    <th style={{ padding: '6px 12px', fontSize: 12, color: 'var(--text-muted)' }}>Description</th>
                    <th style={{ padding: '6px 12px', fontSize: 12, color: 'var(--text-muted)' }}>Standard Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {f.vars.map(([sym, what, unit], i) => (
                    <tr key={i}>
                      <td style={{ padding: '8px 12px' }}>
                        <MathText text={sym.includes('\\') || /[_^]/.test(sym) ? `$${sym}$` : sym} />
                      </td>
                      <td style={{ padding: '8px 12px' }}>{what}</td>
                      <td style={{ padding: '8px 12px' }} className="mg-muted">{unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <div className="mg-callouts" style={{ marginTop: 8 }}>
              {learn?.when && (
                <div className="mg-callout">
                  <b>Use it when</b>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {learn.when.map((w, i) => (
                      <li key={i}>
                        <MathText text={w} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mg-callout study">
                <b>
                  <ListChecks size={13} style={{ verticalAlign: -1, marginRight: 4 }} /> Solving Steps
                </b>
                <ol style={{ margin: 0, paddingLeft: 18 }}>
                  {f.steps.map((s, i) => (
                    <li key={i}>
                      <MathText text={s} />
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mg-callout trap">
                <b>Exam Pitfalls & Traps</b>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {f.traps.map((s, i) => (
                    <li key={i}>
                      <MathText text={s} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Curriculum Reference Links */}
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="mg-refs">
                <span className="mg-refs-label">Asked on past exams:</span>
                {paperSeen.length ? (
                  paperSeen.map((q) => <ExamTag key={q!.id} q={q!} idx={idx} onClick={() => nav.openQuestion(q!.id)} />)
                ) : (
                  <span className="mg-small mg-muted">Not appeared yet on past midterms</span>
                )}
              </div>

              {otherSeen.length > 0 && (
                <div className="mg-refs">
                  <span className="mg-refs-label">Finals & tutorial sets:</span>
                  {otherSeen.map((q) => (
                    <ExamTag key={q!.id} q={q!} idx={idx} onClick={() => nav.openQuestion(q!.id)} />
                  ))}
                </div>
              )}

              <RefsRow lec={f.lec} cal={f.cal} guide={f.guide} nav={nav} topic={f.topic} content={content} />
            </div>

            {/* Bottom Actions */}
            <div className="dr-actions" style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {learn?.example && (
                <button type="button" className="mg-btn" onClick={() => setStep('example')}>
                  <span>Next: Worked Example</span>
                  <ChevronRight size={14} />
                </button>
              )}
              {hasCalc && (
                <button type="button" className="mg-btn" onClick={() => setStep('calc')}>
                  <CalcIcon size={14} />
                  <span>Try in Calculator</span>
                </button>
              )}
              {items.length > 0 && (
                <button type="button" className="mg-btn primary" onClick={() => onStartPractice(f, items)}>
                  <Zap size={14} />
                  <span>Start Practice Quiz ({items.length} questions)</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Worked Example */}
        {step === 'example' && learn?.example && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="mg-q-head" style={{ marginBottom: 4 }}>
              <BookOpen size={16} className="mg-muted" />
              <b style={{ fontSize: 16, color: 'var(--text-primary)' }}>{learn.example.title}</b>
            </div>

            <div className="mg-callouts" style={{ marginBottom: 8 }}>
              <div className="mg-callout">
                <b>Given Parameters</b>
                <MathText text={learn.example.given} />
              </div>
              <div className="mg-callout">
                <b>Goal / Find</b>
                <MathText text={learn.example.find} />
              </div>
            </div>

            {learn.example.code && <CodeBlock code={learn.example.code} />}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {learn.example.steps.slice(0, shown).map((s, i) => (
                <div key={i} className="mg-example-step">
                  <span className="n">{i + 1}</span>
                  <div>
                    <MathText text={s.say} />
                    {s.tex && <MathBlock tex={s.tex} />}
                  </div>
                </div>
              ))}
            </div>

            {shown >= learn.example.steps.length && (
              <div className="mg-answer-box" style={{ marginTop: 12 }}>
                <MathText text={learn.example.answer} />
              </div>
            )}

            <div className="dr-actions" style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {shown < learn.example.steps.length ? (
                <>
                  <button type="button" className="mg-btn primary" onClick={() => setShown((n) => n + 1)}>
                    <Eye size={14} />
                    <span>Next step ({shown}/{learn.example.steps.length})</span>
                  </button>
                  <button type="button" className="mg-btn" onClick={() => setShown(learn.example.steps.length)}>
                    Show all steps
                  </button>
                </>
              ) : (
                <>
                  {hasCalc ? (
                    <button type="button" className="mg-btn" onClick={() => setStep('calc')}>
                      <CalcIcon size={14} />
                      <span>Next: Try Calculator</span>
                    </button>
                  ) : null}
                  {items.length > 0 && (
                    <button type="button" className="mg-btn primary" onClick={() => onStartPractice(f, items)}>
                      <Zap size={14} />
                      <span>Next: Start Practice Drill ({items.length})</span>
                    </button>
                  )}
                </>
              )}
              <button type="button" className="mg-btn" onClick={() => setShown(1)}>
                <RotateCcw size={13} />
                <span>Restart Steps</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Calculator */}
        {step === 'calc' && hasCalc && (
          <div>
            <CalcPanel f={f} idx={idx} />
            {items.length > 0 && (
              <div className="dr-actions" style={{ marginTop: 20 }}>
                <button type="button" className="mg-btn primary" onClick={() => onStartPractice(f, items)}>
                  <Zap size={14} />
                  <span>Next: Practice Quiz ({items.length} questions)</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Practice Overview & Launch */}
        {step === 'practice' && items.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              className="mg-panel mg-panel-pad"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(168, 85, 247, 0.06))',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px 28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span className="mg-icon-tile" style={{ width: 44, height: 44 }}>
                  <Target size={22} />
                </span>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, color: 'var(--text-primary)' }}>
                    Interactive Practice Quiz: {f.name}
                  </h3>
                  <p style={{ margin: '3px 0 0', fontSize: 13, color: 'var(--text-secondary)' }}>
                    {items.length} curated questions matching authentic Concordia midterm examinations.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-primary)', margin: '14px 0 20px' }}>
                Practice real past exam problems and new numerical variations. With full step-by-step
                solutions, source slide citations, authentic exam paper links, and concept video explanations after every answer.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="mg-btn primary"
                  onClick={() => onStartPractice(f, items)}
                  style={{ padding: '10px 20px', fontSize: 14, fontWeight: 700 }}
                >
                  <Zap size={16} />
                  <span>Launch Practice Drill Sub-Page ({items.length} Questions)</span>
                </button>
              </div>
            </div>

            {/* Quick Question List Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="mg-small mg-muted" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Questions Included in this Drill:
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map((it, idx) => (
                  <div
                    key={it.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 8
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                      <span className="mg-badge neutral" style={{ fontWeight: 700 }}>
                        Q{idx + 1}
                      </span>
                      <span style={{ fontSize: 13.5, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <MathText text={it.prompt.slice(0, 90) + (it.prompt.length > 90 ? '…' : '')} />
                      </span>
                    </div>
                    <span className="mg-badge info" style={{ flexShrink: 0, textTransform: 'capitalize' }}>
                      {it.badge || 'Practice'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

const CalcPanel: React.FC<{ f: Formula; idx: GateIndex }> = ({ f, idx }) => {
  const calc = CALCULATORS[f.calc!];
  const [values, setValues] = useState<CalcValues>(() => defaultsFor(calc));
  const [preset, setPreset] = useState<Preset | null>(null);

  const apply = (p: Preset) => {
    const next = defaultsFor(calc);
    for (const [k, v] of Object.entries(p.values)) next[k] = String(v);
    setValues(next);
    setPreset(p);
  };

  const res = calc.compute(values);

  return (
    <div className="mg-calc-grid" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {f.presets && f.presets.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span className="mg-small mg-muted">Exam Presets:</span>
          <div className="mg-presets" style={{ margin: 0 }}>
            {f.presets.map((p, i) => (
              <button
                key={i}
                type="button"
                className={`mg-chip ${preset === p ? 'active' : ''}`}
                onClick={() => apply(p)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
        {calc.inputs.map((inp) => (
          <div key={inp.key} className="mg-calc-field">
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, marginBottom: 4 }}>
              {inp.label} {inp.unit && <span className="mg-muted">({inp.unit})</span>}
            </label>
            <input
              type="text"
              value={values[inp.key] ?? ''}
              onChange={(e) => {
                setPreset(null);
                setValues({ ...values, [inp.key]: e.target.value });
              }}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)'
              }}
            />
          </div>
        ))}
      </div>

      {res.error ? (
        <div className="mg-error" style={{ marginTop: 8 }}>
          {res.error}
        </div>
      ) : (
        <div className="mg-calc-result" style={{ marginTop: 10, padding: '16px 20px', background: 'var(--bg-surface)', borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
          <span className="mg-small mg-muted" style={{ fontWeight: 700, textTransform: 'uppercase' }}>
            Calculated Output:
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
            {res.rows.map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>{r.label}</span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                  <MathText text={`$${r.tex}$`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
