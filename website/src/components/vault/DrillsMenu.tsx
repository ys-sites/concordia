import React from 'react';
import { Target } from 'lucide-react';
import { MATCH_LABEL } from './shared';

export interface RepeatStats {
  exact: number;
  template: number;
  concept: number;
  once: number;
}

export interface DrillModeDef {
  icon: React.ReactNode;
  title: React.ReactNode;
  desc: string;
  disabled: boolean;
  onClick: () => void;
}

// The percentage breakdown bar + KPI cards, shared by the public drill
// section and the hidden quiz so both render pixel-identical UI.
export const RepeatStatsBar: React.FC<{ stats: RepeatStats }> = ({ stats: s }) => {
  const total = s.exact + s.template + s.concept + s.once || 1;
  const pct = (n: number) => `${Math.round((100 * n) / total)}%`;
  return (
    <>
      <div className="mg-kpis">
        <div className="mg-kpi accent">
          <div className="mg-kpi-value">{pct(s.exact + s.template)}</div>
          <div className="mg-kpi-label">
            of past-paper questions were asked again word for word or with new numbers ({pct(s.exact + s.template + s.concept)} counting same-idea twins)
          </div>
        </div>
        <div className="mg-kpi">
          <div className="mg-kpi-value">{s.exact}</div>
          <div className="mg-kpi-label">exact repeats</div>
        </div>
        <div className="mg-kpi">
          <div className="mg-kpi-value">{s.template}</div>
          <div className="mg-kpi-label">same question, new numbers</div>
        </div>
        <div className="mg-kpi">
          <div className="mg-kpi-value">{s.concept}</div>
          <div className="mg-kpi-label">same idea, new angles</div>
        </div>
        <div className="mg-kpi">
          <div className="mg-kpi-value">{s.once}</div>
          <div className="mg-kpi-label">asked only once</div>
        </div>
      </div>
      <div className="mg-stack" role="img" aria-label="Share of past-paper questions by repeat type">
        {(['exact', 'template', 'concept', 'once'] as const).map((k) => (
          <span key={k} className={`m-${k}`} style={{ width: pct(s[k]) }} />
        ))}
      </div>
      <div className="mg-legend">
        {(['exact', 'template', 'concept'] as const).map((k) => (
          <span key={k}>
            <i className={`m-${k}`} />
            {MATCH_LABEL[k]} · {pct(s[k])}
          </span>
        ))}
        <span>
          <i className="m-once" />
          Asked once · {pct(s.once)}
        </span>
      </div>
    </>
  );
};

// The drill mode cards section, shared by the public drill section and the
// hidden quiz so both render pixel-identical UI.
export const DrillModeCards: React.FC<{ masteredText: string; modes: DrillModeDef[] }> = ({ masteredText, modes }) => (
  <section className="mg-panel mg-panel-pad">
    <h3 className="mg-section-title">
      <Target size={17} /> Drills
    </h3>
    <p className="mg-section-sub">
      Every drill checks your answer, shows the worked solution, and remembers what you missed on this device. {masteredText}
    </p>
    <div className="mg-quick">
      {modes.map((md, i) => (
        <button key={i} type="button" onClick={md.onClick} disabled={md.disabled}>
          <b>
            {md.icon} {md.title}
          </b>
          <span>{md.desc}</span>
        </button>
      ))}
    </div>
  </section>
);
