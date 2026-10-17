// The course badge's solved-paper page: last year's midterm question by question (chapter, slides,
// how to think, worked steps, trap, what the graded copy did) and a "Chapter 3 from zero" explainer.
// Everything comes from content.paperDoc (encrypted with the paper, see encrypt-vault.mjs).
import React, { useMemo, useRef, useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronDown, ChevronUp, ClipboardCheck, Eye, EyeOff, Layers, Lightbulb, ListChecks, Play, Sigma, Target } from 'lucide-react';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import type { BomNode, DocBlock, DocCell, GateContent, GateNav, LectureRef, PaperDoc, PaperPart } from './vaultTypes';
import { GateIndex, LectureButton } from './shared';
import { fromQuestion } from './drill';
import { BomEdges, BomNodes, BW, layout, PAD } from './BomTree';
import './paperGuide.css';

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  onDrill: () => void;
}

const letter = (i: number) => String.fromCharCode(97 + i);
const money = (n: number) => `$${n.toLocaleString('en-US')}`;

const Slides: React.FC<{ lec?: LectureRef[]; idx: GateIndex; nav: GateNav }> = ({ lec, idx, nav }) =>
  lec && lec.length ? (
    <div className="mg-refs">
      <span className="mg-refs-label">Slides</span>
      {lec.map((r, i) => (
        <LectureButton key={i} r={r} nav={nav} docs={idx.docs} />
      ))}
    </div>
  ) : null;

export const PaperGuide: React.FC<Props> = ({ content, idx, nav, onDrill }) => {
  const doc = content.paperDoc as PaperDoc;
  const [allOpen, setAllOpen] = useState(false);
  const total = doc.byChapter.reduce((n, c) => n + c.marks, 0);
  const max = Math.max(...doc.byChapter.map((c) => c.marks));
  const jump = (id: string) => document.getElementById(`pg-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const drillProblem = (items: PaperPart[], title: string) => {
    const drill = items.map((p) => idx.q.get(p.id)).flatMap((q) => (q ? [fromQuestion(q, idx)] : []));
    nav.startDrill({ scope: 'custom', items: drill }, title);
  };

  return (
    <div className="mg-root pg-root">
      {/* hero */}
      <section className="mg-panel pg-hero">
        <div className="pg-hero-main">
          <span className="pg-kicker">
            <ClipboardCheck size={14} /> Solved paper
          </span>
          <h2 className="pg-title">{doc.title}</h2>
          <p className="pg-sub">{doc.subtitle}</p>
          <dl className="pg-facts">
            {doc.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="pg-hero-side">
          <div className="mg-refs-label" style={{ marginBottom: 8 }}>
            Marks by chapter
          </div>
          {doc.byChapter.map((c) => (
            <div key={c.ch} className={`pg-chap ${c.ch === 'Ch 3' ? 'focus' : ''}`}>
              <div className="pg-chap-top">
                <span>
                  <b>{c.ch}</b> {c.name}
                </span>
                <span className="pg-chap-marks">
                  {c.marks} <small>/ {total}</small>
                </span>
              </div>
              <div className="pg-chap-bar" aria-hidden>
                <span style={{ width: `${(100 * c.marks) / max}%` }} />
              </div>
              <div className="pg-chap-where">
                {c.where}
                {c.ch === 'Ch 3' && (
                  <button type="button" className="pg-link" onClick={() => jump('ch3')}>
                    Chapter 3 from zero ↓
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* how to use + contents */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Lightbulb size={17} /> How to use this page
        </h3>
        <ul className="pg-list">
          {doc.howTo.map((h, i) => (
            <li key={i}>
              <MathText text={h} />
            </li>
          ))}
        </ul>
        <div className="pg-toc">
          {doc.problems.map((p) => (
            <button key={p.id} type="button" className="mg-chip" onClick={() => jump(p.id)}>
              {p.title.split(' · ')[0]} <small className="sq-n">{p.marks}</small>
            </button>
          ))}
          <button type="button" className="mg-chip active" onClick={() => jump('ch3')}>
            <Sigma size={12} /> Chapter 3 from zero
          </button>
          <span className="pg-toc-gap" />
          <button type="button" className="mg-btn small" onClick={() => setAllOpen((o) => !o)}>
            {allOpen ? <EyeOff size={13} /> : <Eye size={13} />}
            <span>{allOpen ? 'Hide all solutions' : 'Show all solutions'}</span>
          </button>
          <button type="button" className="mg-btn small primary" onClick={onDrill}>
            <Target size={13} />
            <span>Skill Drill</span>
          </button>
        </div>
      </section>

      {/* problems */}
      {doc.problems.map((p) => (
        <section key={p.id} id={`pg-${p.id}`} className="mg-panel mg-panel-pad pg-problem">
          <div className="pg-problem-head">
            <h3 className="mg-section-title" style={{ margin: 0 }}>
              {p.title}
            </h3>
            <span className="mg-badge neutral">{p.marks} marks</span>
            {p.ch && <span className="mg-badge info">{p.ch}</span>}
            <span className="pg-toc-gap" />
            <button type="button" className="mg-btn small" onClick={() => drillProblem(p.items, p.title)}>
              <Play size={13} />
              <span>Drill this problem</span>
            </button>
          </div>
          <p className="pg-intro">
            <MathText text={p.intro} />
          </p>
          <Slides lec={p.lec} idx={idx} nav={nav} />
          {p.figures?.map((f, i) => (
            <Block key={i} b={f} />
          ))}
          {p.note && (
            <div className="mg-callout trap" style={{ marginTop: 10 }}>
              <b>Heads-up: the paper contradicts itself</b>
              <MathText text={p.note} />
            </div>
          )}
          <div className="pg-parts">
            {p.items.map((it) => (
              <PartCard key={it.id} it={it} idx={idx} nav={nav} forceOpen={allOpen} />
            ))}
          </div>
        </section>
      ))}

      {/* chapter 3 */}
      <section id="pg-ch3" className="mg-panel pg-ch3">
        <div className="pg-ch3-head">
          <span className="pg-kicker">
            <BookOpen size={14} /> Slides 2 · Chapter 3
          </span>
          <h2 className="pg-title">{doc.ch3.title}</h2>
          <p className="pg-sub">
            <MathText text={doc.ch3.intro} />
          </p>
          <div className="pg-toc" style={{ marginTop: 10 }}>
            {doc.ch3.sections.map((s) => (
              <button key={s.id} type="button" className="mg-chip" onClick={() => jump(`c3-${s.id}`)}>
                {s.title}
              </button>
            ))}
          </div>
        </div>
        {doc.ch3.sections.map((s) => (
          <div key={s.id} id={`pg-c3-${s.id}`} className="pg-c3-sec">
            <div className="pg-problem-head">
              <h3 className="mg-section-title" style={{ margin: 0 }}>
                {s.title}
              </h3>
            </div>
            <Slides lec={s.lec} idx={idx} nav={nav} />
            {s.blocks.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>
        ))}
        <div className="pg-c3-sec pg-checklist">
          <h3 className="mg-section-title">
            <ListChecks size={17} /> Chapter 3 in 60 seconds
          </h3>
          <ul>
            {doc.ch3.checklist.map((c, i) => (
              <li key={i}>
                <CheckCircle2 size={15} />
                <span>
                  <MathText text={c} />
                </span>
              </li>
            ))}
          </ul>
          <div className="dr-actions" style={{ marginTop: 12 }}>
            <button type="button" className="mg-btn primary" onClick={onDrill}>
              <Target size={14} /> Now drill the paper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ── one gradeable part ─────────────────────────────────────────────────────────────────────
const PartCard: React.FC<{ it: PaperPart; idx: GateIndex; nav: GateNav; forceOpen: boolean }> = ({ it, idx, nav, forceOpen }) => {
  const [open, setOpen] = useState(false);
  const show = open || forceOpen;
  const topic = idx.topic.get(it.topic);
  const lesson = it.lesson ? idx.formula.get(it.lesson) : undefined;
  const right = it.ans ? it.ans.charCodeAt(0) - 97 : -1;
  const label = /^\d+$/.test(it.n) ? `Q${it.n}` : it.n;
  return (
    <article className={`pg-part ${show ? 'open' : ''}`}>
      <header className="pg-part-head">
        <span className="pg-num">{label}</span>
        {it.part && <span className="pg-part-name">{it.part}</span>}
        <span className="mg-badge neutral">
          {it.marks} mark{it.marks === 1 ? '' : 's'}
        </span>
        {topic && (
          <span className="mg-badge info" title={topic.name}>
            {topic.ch}
          </span>
        )}
        {topic && <span className="pg-topic">{topic.name}</span>}
      </header>
      <div className="pg-q">
        <MathText text={it.q} />
      </div>
      {it.figure && <Block b={it.figure} />}
      {it.opts && (
        <div className="mg-opts">
          {it.opts.map((o, i) => (
            <div key={i} className={`mg-opt ${show && i === right ? 'right' : ''}`}>
              <b>{letter(i)})</b>
              <span>
                <MathText text={o} />
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="pg-part-tools">
        <Slides lec={it.lec} idx={idx} nav={nav} />
        <span className="pg-toc-gap" />
        <button type="button" className={`mg-btn small ${show ? '' : 'primary'}`} onClick={() => setOpen((o) => !o)} disabled={forceOpen}>
          {show ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          <span>{show ? 'Hide solution' : 'Solution'}</span>
        </button>
      </div>

      {show && (
        <div className="pg-sol">
          {it.opts && right >= 0 && (
            <div className="pg-answer">
              <CheckCircle2 size={16} />
              <span>
                Answer: <b>({it.ans})</b> <MathText text={it.opts[right]} />
              </span>
            </div>
          )}
          {it.answerTable && (
            <div className="pg-answer table">
              <CheckCircle2 size={16} />
              <table className="pg-table compact">
                <thead>
                  <tr>
                    {it.answerTable.head.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {it.answerTable.rows.map((r, i) => (
                    <tr key={i}>
                      {r.map((c, j) => (
                        <td key={j}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="pg-sol-grid">
            <div className="pg-sol-col">
              <div className="pg-sol-label">
                <Lightbulb size={13} /> How to think about it
              </div>
              <ul className="pg-list">
                {it.think.map((x, i) => (
                  <li key={i}>
                    <MathText text={x} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="pg-sol-col">
              <div className="pg-sol-label">
                <Layers size={13} /> Worked solution
              </div>
              <ol className="mg-steps">
                {it.steps.map((x, i) => (
                  <li key={i}>
                    <MathText text={x} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {it.trap && (
            <div className="mg-callout trap">
              <b>
                <AlertTriangle size={12} style={{ verticalAlign: -2 }} /> Trap
              </b>
              <MathText text={it.trap} />
            </div>
          )}
          <div className="pg-sol-foot">
            {it.graded && (
              <span className={`pg-graded ${/correct/.test(it.graded) && !/wrong/.test(it.graded) ? 'ok' : 'bad'}`}>
                On the graded copy: <MathText text={it.graded} />
              </span>
            )}
            <span className="pg-toc-gap" />
            {lesson && (
              <button type="button" className="mg-btn small" onClick={() => nav.openFormula(lesson.id)}>
                <Sigma size={13} />
                <span>Lesson: {lesson.name}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

// ── content blocks ─────────────────────────────────────────────────────────────────────────
const Block: React.FC<{ b: DocBlock }> = ({ b }) => {
  switch (b.type) {
    case 'p':
      return (
        <p className="pg-p">
          <MathText text={b.text} />
        </p>
      );
    case 'list':
      return (
        <div className="pg-block">
          {b.title && <div className="pg-sol-label">{b.title}</div>}
          <ul className="pg-list">
            {b.items.map((x, i) => (
              <li key={i}>
                <MathText text={x} />
              </li>
            ))}
          </ul>
        </div>
      );
    case 'steps':
      return (
        <div className="pg-block">
          {b.title && <div className="pg-sol-label">{b.title}</div>}
          <ol className="pg-steps">
            {b.items.map((x, i) => (
              <li key={i}>
                <MathText text={x.say} />
                {x.tex && <MathBlock tex={x.tex} className="pg-math" />}
              </li>
            ))}
          </ol>
        </div>
      );
    case 'formula':
      return (
        <figure className="pg-formula">
          <MathBlock tex={b.tex} />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
    case 'callout':
      return (
        <div className={`mg-callout ${b.tone === 'trap' ? 'trap' : b.tone === 'study' ? 'study' : 'pg-tip'}`}>
          <b>{b.title}</b>
          <MathText text={b.text} />
        </div>
      );
    case 'compare':
      return (
        <div className="pg-compare">
          {b.cols.map((c) => (
            <div key={c.title}>
              <div className="pg-sol-label">{c.title}</div>
              <ul className="pg-list">
                {c.items.map((x, i) => (
                  <li key={i}>
                    <MathText text={x} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case 'table':
      return <DataTable head={b.head} rows={b.rows} caption={b.caption} />;
    case 'bom':
      return <BomFigure trees={b.trees} caption={b.caption} />;
    case 'costchart':
      return <CostChart b={b} />;
    case 'ranges':
      return <Ranges b={b} />;
    default:
      return null;
  }
};

const DataTable: React.FC<{ head: string[]; rows: DocCell[][]; caption?: string }> = ({ head, rows, caption }) => (
  <figure className="pg-fig">
    <div className="pg-table-wrap">
      <table className="pg-table">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>
                <MathText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i === rows.length - 1 && /^(Demand|Total)$/.test(String(r[0])) ? 'total' : ''}>
              {r.map((c, j) => {
                const cell = typeof c === 'string' ? { v: c } : c;
                return (
                  <td key={j} className={`${j === 0 ? 'rowhead' : ''} ${cell.hl ? 'hl' : ''}`}>
                    {cell.c !== undefined && <span className="pg-cost">{cell.c}</span>}
                    <MathText text={cell.v} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

// ── BOM figure ──
const BomFigure: React.FC<{ trees: BomNode[]; caption?: string }> = ({ trees, caption }) => {
  const [hot, setHot] = useState<string | null>(null);
  const laid = useMemo(() => trees.map(layout), [trees]);
  return (
    <figure className="pg-fig">
      <div className="pg-bom-wrap">
        {laid.map(({ root, width, height }, i) => (
          <svg key={i} className="pg-bom" viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: width }} role="img" aria-label={`Product structure tree for ${root.node.n}`}>
            <g transform={`translate(${PAD + BW / 2}, ${PAD})`}>
              <BomEdges p={root} />
              <BomNodes p={root} hot={hot} setHot={setHot} />
            </g>
          </svg>
        ))}
      </div>
      <figcaption>
        {caption ? `${caption} ` : ''}Bracket = units per ONE unit of the box above. Hover or tap a box to light up every box with the same name.
      </figcaption>
    </figure>
  );
};

// ── total cost vs volume (slide 15) ───────────────────────────────────────────────────────
const SERIES = ['#2a78d6', '#eb6834', '#1baf7a']; // validated categorical slots 1–3 on the white surface

const CostChart: React.FC<{ b: Extract<DocBlock, { type: 'costchart' }> }> = ({ b }) => {
  const W = 640;
  const H = 300;
  const m = { l: 58, r: 74, t: 22, b: 38 };
  const tc = (l: { F: number; v: number }, q: number) => l.F + l.v * q;
  const top = Math.ceil(Math.max(...b.lines.map((l) => tc(l, b.qMax))) / 50000) * 50000;
  const x = (q: number) => m.l + (q / b.qMax) * (W - m.l - m.r);
  const y = (c: number) => H - m.b - (c / top) * (H - m.t - m.b);
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const yTicks = Array.from({ length: top / 50000 + 1 }, (_, i) => i * 50000);
  const xTicks = Array.from({ length: b.qMax / 5000 + 1 }, (_, i) => i * 5000);

  const onMove = (e: React.MouseEvent<SVGRectElement>) => {
    const r = svgRef.current!.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const q = Math.round((((px - m.l) / (W - m.l - m.r)) * b.qMax) / 500) * 500;
    setHover(Math.max(0, Math.min(b.qMax, q)));
  };
  const at = hover !== null ? b.lines.map((l, i) => ({ ...l, i, c: tc(l, hover) })).sort((a, z) => a.c - z.c) : [];

  return (
    <figure className="pg-fig">
      <div className="pg-legend">
        {b.lines.map((l, i) => (
          <span key={l.name}>
            <i style={{ background: SERIES[i] }} />
            Process {l.name}: {money(l.F)} + {money(l.v)}/unit
          </span>
        ))}
      </div>
      <div className="pg-chart">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Total annual cost of processes A, B and C against volume">
          {yTicks.map((c) => (
            <g key={c}>
              <line className="pg-grid" x1={m.l} x2={W - m.r} y1={y(c)} y2={y(c)} />
              <text className="pg-axis" x={m.l - 8} y={y(c) + 4} textAnchor="end">
                {c === 0 ? '0' : `${c / 1000}k`}
              </text>
            </g>
          ))}
          {xTicks.map((q) => (
            <text key={q} className="pg-axis" x={x(q)} y={H - m.b + 16} textAnchor="middle">
              {q === 0 ? '0' : `${q / 1000}k`}
            </text>
          ))}
          <text className="pg-axis" x={(m.l + W - m.r) / 2} y={H - 4} textAnchor="middle">
            Annual volume (units)
          </text>
          {b.demand !== undefined && (
            <g>
              <line className="pg-demand" x1={x(b.demand)} x2={x(b.demand)} y1={m.t} y2={H - m.b} />
              <text className="pg-axis" x={x(b.demand)} y={m.t - 8} textAnchor="middle">
                demand {b.demand.toLocaleString('en-US')}
              </text>
            </g>
          )}
          {b.lines.map((l, i) => (
            <g key={l.name}>
              <line x1={x(0)} y1={y(tc(l, 0))} x2={x(b.qMax)} y2={y(tc(l, b.qMax))} stroke={SERIES[i]} strokeWidth={2} strokeLinecap="round" />
              <text className="pg-direct" x={x(b.qMax) + 8} y={y(tc(l, b.qMax)) + 4}>
                {l.name} · {Math.round(tc(l, b.qMax) / 1000)}k
              </text>
            </g>
          ))}
          {b.cross.map((c) => {
            // the two lines that meet here have the same cost; use the lowest such value
            const costs = b.lines.map((ln) => tc(ln, c.q));
            const meet = costs.filter((v, i) => costs.some((w, j) => j !== i && Math.abs(v - w) < 1));
            const cy = y(meet.length ? Math.min(...meet) : Math.min(...costs));
            return (
              <g key={c.q}>
                <line className="pg-cross" x1={x(c.q)} x2={x(c.q)} y1={cy} y2={H - m.b} />
                <circle cx={x(c.q)} cy={cy} r={5} className="pg-dot" />
                <text className="pg-cross-label" x={x(c.q) + 8} y={cy + 20} textAnchor="start">
                  {c.label}
                </text>
              </g>
            );
          })}
          {hover !== null && <line className="pg-crosshair" x1={x(hover)} x2={x(hover)} y1={m.t} y2={H - m.b} />}
          {hover !== null &&
            at.map((p) => <circle key={p.name} cx={x(hover)} cy={y(p.c)} r={4.5} fill={SERIES[p.i]} stroke="var(--bg-surface)" strokeWidth={2} />)}
          <rect x={m.l} y={m.t} width={W - m.l - m.r} height={H - m.t - m.b} fill="transparent" onMouseMove={onMove} onMouseLeave={() => setHover(null)} />
        </svg>
        {hover !== null && (
          <div className="pg-tooltip" style={{ left: `${(x(hover) / W) * 100}%` }}>
            <b>{hover.toLocaleString('en-US')} units</b>
            {at.map((p, k) => (
              <span key={p.name} className={k === 0 ? 'best' : ''}>
                <i style={{ background: SERIES[p.i] }} />
                {p.name}: {money(p.c)}
                {k === 0 ? ' · cheapest' : ''}
              </span>
            ))}
          </div>
        )}
      </div>
      <details className="pg-table-view">
        <summary>Show as a table</summary>
        <DataTable
          head={['Volume', ...b.lines.map((l) => `Process ${l.name}`)]}
          rows={[0, 5000, 10000, 15000, 20000].map((q) => {
            const best = Math.min(...b.lines.map((l) => tc(l, q)));
            return [q.toLocaleString('en-US'), ...b.lines.map((l) => ({ v: money(tc(l, q)).replace('$', '\\$'), hl: tc(l, q) === best }))];
          })}
          caption="Shaded = cheapest at that volume."
        />
      </details>
      {b.caption && <figcaption>{b.caption}</figcaption>}
    </figure>
  );
};

const Ranges: React.FC<{ b: Extract<DocBlock, { type: 'ranges' }> }> = ({ b }) => (
  <figure className="pg-fig">
    <div className="pg-ranges">
      {b.segs.map((s) => (
        <div key={s.label} style={{ flexGrow: s.to - s.from }}>
          <span className="pg-range-bar">Choose {s.label}</span>
          <span className="pg-range-from">{s.from.toLocaleString('en-US')}</span>
        </div>
      ))}
    </div>
    {b.caption && <figcaption>{b.caption}</figcaption>}
  </figure>
);

export default PaperGuide;
