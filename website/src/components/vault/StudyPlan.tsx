import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, CalendarClock, CheckSquare, FileText, PlayCircle, Repeat, Sigma, Video } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { GateContent, GateNav, PlanStep } from './vaultTypes';
import type { GateIndex } from './shared';

const planKey = (course: string) => `gate_plan_${course}`;
const loadDone = (course: string): Set<string> => {
  try {
    return new Set(JSON.parse(localStorage.getItem(planKey(course)) ?? '[]'));
  } catch {
    return new Set();
  }
};

export const daysUntil = (iso: string | null) => {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((new Date(y, m - 1, d).getTime() - today) / 86400000);
};

const ICON: Record<PlanStep['kind'], React.ReactNode> = {
  doc: <FileText size={14} />,
  lesson: <Sigma size={14} />,
  videos: <Video size={14} />,
  drill: <PlayCircle size={14} />,
  cluster: <Repeat size={14} />,
  task: <CheckSquare size={14} />
};

export const StudyPlan: React.FC<{ content: GateContent; idx: GateIndex; nav: GateNav }> = ({ content, idx, nav }) => {
  const [done, setDone] = useState<Set<string>>(() => loadDone(content.course));
  useEffect(() => setDone(loadDone(content.course)), [content.course]);

  const toggle = (id: string) =>
    setDone((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(planKey(content.course), JSON.stringify([...next]));
      } catch {
        // progress just won't persist
      }
      return next;
    });

  const all = useMemo(() => content.plan.phases.flatMap((p) => p.steps), [content]);
  const nextStep = all.find((s) => !done.has(s.id));
  const days = daysUntil(content.midterm.date);

  const act = (s: PlanStep) => {
    switch (s.kind) {
      case 'doc':
        if (s.doc) nav.openDoc(s.doc, s.page);
        break;
      case 'lesson':
        if (s.lesson) nav.openFormula(s.lesson);
        break;
      case 'videos':
        if (s.topic) nav.openTopicVideos(s.topic);
        break;
      case 'drill':
        if (s.drill) nav.startDrill(s.drill, s.text.replace(/\$[^$]*\$/g, '').slice(0, 80));
        break;
      case 'cluster':
        if (s.topic) nav.showTopic(s.topic);
        break;
      default:
        break;
    }
  };
  const ACTION: Record<PlanStep['kind'], string> = {
    doc: 'Open',
    lesson: 'Open lesson',
    videos: 'Watch',
    drill: 'Start drill',
    cluster: 'See repeats',
    task: ''
  };

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <CalendarClock size={17} /> Midterm preparation · {content.midterm.label}
        </h3>
        <p className="mg-section-sub" style={{ marginBottom: 8 }}>
          <b>Scope:</b> <MathText text={content.midterm.scope} />
          {days !== null && days >= 0 && (
            <>
              {' '}
              · <b>{days === 0 ? 'Today' : `${days} day${days === 1 ? '' : 's'} left`}</b>
            </>
          )}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-primary)', margin: 0 }}>
          <MathText text={content.plan.intro} />
        </p>
        <div className="mg-progress" style={{ marginTop: 12 }}>
          <span style={{ width: `${(100 * done.size) / Math.max(1, all.length)}%` }} />
        </div>
        <div className="mg-small mg-muted" style={{ marginTop: 6 }}>
          {all.filter((s) => done.has(s.id)).length} of {all.length} steps done (saved on this device)
        </div>
      </section>

      {nextStep && (
        <div className="mg-next">
          <div style={{ flex: 1, minWidth: 200 }}>
            <div className="label">Start here</div>
            <div className="text">
              <MathText text={nextStep.text} />
            </div>
          </div>
          {nextStep.kind !== 'task' && (
            <button type="button" className="mg-btn primary" onClick={() => act(nextStep)}>
              {ICON[nextStep.kind]} {ACTION[nextStep.kind]}
            </button>
          )}
          <button type="button" className="mg-btn" onClick={() => toggle(nextStep.id)}>
            Mark done
          </button>
        </div>
      )}

      {content.plan.phases.map((p, pi) => {
        const pd = p.steps.filter((s) => done.has(s.id)).length;
        return (
          <section key={pi} className="mg-phase">
            <div className="mg-phase-head">
              <div className="mg-small mg-muted">
                Phase {pi + 1} · {p.when} · {pd}/{p.steps.length}
              </div>
              <h4>{p.title}</h4>
              <div className="mg-small" style={{ color: 'var(--text-secondary)' }}>
                <MathText text={p.goal} />
              </div>
            </div>
            {p.steps.map((s) => (
              <div key={s.id} className={`mg-plan-step ${done.has(s.id) ? 'done' : ''}`}>
                <input type="checkbox" checked={done.has(s.id)} onChange={() => toggle(s.id)} aria-label="Done" />
                <div className="txt">
                  <MathText text={s.text} />
                  {s.minutes && <div className="meta">≈ {s.minutes} min</div>}
                </div>
                {s.kind !== 'task' ? (
                  <button type="button" className="mg-btn small" onClick={() => act(s)}>
                    {ICON[s.kind]} {ACTION[s.kind]}
                  </button>
                ) : (
                  <span />
                )}
              </div>
            ))}
          </section>
        );
      })}

      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <BookOpen size={17} /> How the folder fits together
        </h3>
        <ul className="mg-points">
          <li>
            <b>Pattern Analyzer & Drills</b> shows what repeats on past papers, subject by subject, with a drill button at every level.
          </li>
          <li>
            <b>{content.labTitle}</b>: every method in four steps (understand → worked example → calculator → practice quiz).
          </li>
          <li>
            <b>Video Revision Path</b>: one short video per topic when the notes don’t click.
          </li>
          <li>Your ticks, scores and missed questions stay on this device only.</li>
        </ul>
        <div className="mg-small mg-muted" style={{ marginTop: 8 }}>
          {idx.paperIds.length} past papers analysed · {content.formulas.length} lessons · {content.videoStops.length} video stops
        </div>
      </section>
    </div>
  );
};

export default StudyPlan;
