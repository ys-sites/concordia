import React, { useState } from 'react';
import type { CourseId } from '../../types';
import { COURSE_BY_ID } from '../courses';

// Chart colours per course: the course identity, re-stepped so the four series stay apart for every kind of
// colour vision (validated with the dataviz palette checks, all pairs). Text never uses them.
export const CHART_HUE: Record<CourseId, string> = { ENGR213: '#2f4fc4', MIAE221: '#d6336c', MIAE215: '#0a9396', INDU211: '#b35c00' };

// ── weekly study time: one series, seven bars ─────────────────────────────────────
export const WeekBars: React.FC<{ days: { label: string; date: string; minutes: number; today: boolean }[] }> = ({ days }) => {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(30, ...days.map((d) => d.minutes));
  const top = Math.ceil(max / 30) * 30;
  const W = 280;
  const H = 120;
  const bw = 22;
  const gap = (W - 30 - bw * 7) / 6;
  return (
    <figure className="lx-chart">
      <svg viewBox={`0 0 ${W} ${H + 22}`} role="img" aria-label={`Study time this week: ${days.map((d) => `${d.label} ${d.minutes} minutes`).join(', ')}`}>
        {[0, 0.5, 1].map((f) => (
          <g key={f}>
            <line x1="30" x2={W} y1={H - f * H + 2} y2={H - f * H + 2} stroke="var(--lx-line)" strokeWidth="1" />
            <text x="24" y={H - f * H + 5} textAnchor="end" className="lx-chart-axis">
              {Math.round(top * f)}
            </text>
          </g>
        ))}
        {days.map((d, i) => {
          const x = 30 + i * (bw + gap);
          const h = d.minutes ? Math.max(4, (d.minutes / top) * H) : 0;
          return (
            <g key={d.date} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)} tabIndex={0}>
              <rect x={x - gap / 2} y="0" width={bw + gap} height={H + 22} fill="transparent" />
              {h > 0 && <path d={`M${x} ${H + 2} V${H + 2 - h + 4} q0 -4 4 -4 h${bw - 8} q4 0 4 4 V${H + 2} Z`} fill={d.today ? 'var(--lx-brand)' : '#a5b4fc'} />}
              <text x={x + bw / 2} y={H + 18} textAnchor="middle" className={`lx-chart-axis${d.today ? ' is-strong' : ''}`}>
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      {hover !== null && (
        <div className="lx-chart-tip" style={{ left: `${((30 + hover * (bw + gap) + bw / 2) / W) * 100}%` }} role="status">
          <strong className="lx-num">{days[hover].minutes} min</strong>
          <span>{days[hover].date}</span>
        </div>
      )}
    </figure>
  );
};

// ── score history: one line per course, 0–100 % ───────────────────────────────────
export interface ScoreSeries {
  course: CourseId;
  points: { at: number; pct: number; label: string }[];
}

export const ScoreLines: React.FC<{ series: ScoreSeries[] }> = ({ series }) => {
  const [hover, setHover] = useState<{ s: number; p: number } | null>(null);
  const W = 560;
  const H = 180;
  const L = 34;
  const R = 70;
  const all = series.flatMap((s) => s.points);
  if (all.length < 2) return <p className="lx-empty">Finish two or more quizzes to see your scores over time.</p>;
  const t0 = Math.min(...all.map((p) => p.at));
  const t1 = Math.max(...all.map((p) => p.at));
  const x = (t: number) => L + ((t - t0) / Math.max(1, t1 - t0)) * (W - L - R);
  const y = (pct: number) => 10 + (1 - pct / 100) * (H - 20);
  return (
    <figure className="lx-chart">
      <svg viewBox={`0 0 ${W} ${H + 18}`} role="img" aria-label="Quiz scores over time, per course">
        {[0, 50, 70, 100].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke={v === 70 ? 'var(--lx-line-strong)' : 'var(--lx-line)'} strokeDasharray={v === 70 ? '4 4' : undefined} />
            <text x={L - 6} y={y(v) + 4} textAnchor="end" className="lx-chart-axis">
              {v}%
            </text>
          </g>
        ))}
        <text x={L + 6} y={y(70) - 5} className="lx-chart-axis">
          pass mark
        </text>
        {series.map((s, si) => {
          const pts = s.points.map((p) => [x(p.at), y(p.pct)] as const);
          const last = pts[pts.length - 1];
          return (
            <g key={s.course}>
              <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke={CHART_HUE[s.course]} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              {pts.map(([px, py], pi) => (
                <circle
                  key={pi}
                  cx={px}
                  cy={py}
                  r={hover?.s === si && hover.p === pi ? 6 : 4}
                  fill={CHART_HUE[s.course]}
                  stroke="var(--lx-surface)"
                  strokeWidth="2"
                  onMouseEnter={() => setHover({ s: si, p: pi })}
                  onMouseLeave={() => setHover(null)}
                />
              ))}
              {last && (
                <text x={last[0] + 10} y={last[1] + 4} className="lx-chart-label">
                  {COURSE_BY_ID[s.course].code}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {hover && (
        <div className="lx-chart-tip" style={{ left: `${(x(series[hover.s].points[hover.p].at) / W) * 100}%`, top: `${(y(series[hover.s].points[hover.p].pct) / (H + 18)) * 100}%` }} role="status">
          <strong className="lx-num">{series[hover.s].points[hover.p].pct}%</strong>
          <span>
            {COURSE_BY_ID[series[hover.s].course].code} · {series[hover.s].points[hover.p].label}
          </span>
        </div>
      )}
      <figcaption className="lx-chart-legend">
        {series.map((s) => (
          <span key={s.course}>
            <i style={{ background: CHART_HUE[s.course] }} aria-hidden /> {COURSE_BY_ID[s.course].code}
          </span>
        ))}
      </figcaption>
    </figure>
  );
};
