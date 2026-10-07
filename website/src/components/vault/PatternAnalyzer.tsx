import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronRight, Grid3x3, Layers, Repeat, Search, X } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { Cluster, Expectation, GateContent, GateNav, MatchType } from './vaultTypes';
import { ExamTag, GateIndex, marksOf, MatchBadge, MATCH_LABEL, QuestionCard, RefsRow, repeatTypeOf } from './shared';

const EXPECT_RANK: Record<Expectation, number> = { 'Very likely': 0, Likely: 1, Possible: 2 };
const EXPECT_CLASS: Record<Expectation, string> = { 'Very likely': 'exact', Likely: 'template', Possible: 'neutral' };

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  topicFilter: string | null;
  setTopicFilter: (t: string | null) => void;
}

export const PatternAnalyzer: React.FC<Props> = ({ content, idx, nav, topicFilter, setTopicFilter }) => {
  const [match, setMatch] = useState<MatchType | 'all'>('all');
  const [expect, setExpect] = useState<Expectation | 'all'>('all');
  const [query, setQuery] = useState('');
  const [selfTest, setSelfTest] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const clustersRef = useRef<HTMLDivElement>(null);

  const midterms = useMemo(() => content.questions.filter((q) => idx.midtermIds.includes(q.exam)), [content, idx]);

  // ── recycling statistics over the three midterms ──
  const stats = useMemo(() => {
    const byType: Record<MatchType | 'once', { n: number; marks: number }> = {
      exact: { n: 0, marks: 0 },
      template: { n: 0, marks: 0 },
      concept: { n: 0, marks: 0 },
      once: { n: 0, marks: 0 }
    };
    for (const q of midterms) {
      const t = repeatTypeOf(q.id, idx) ?? 'once';
      byType[t].n += 1;
      byType[t].marks += marksOf(q);
    }
    const totalMarks = midterms.reduce((s, q) => s + marksOf(q), 0);
    return { byType, totalMarks, total: midterms.length };
  }, [midterms, idx]);

  const directMarks = stats.byType.exact.marks + stats.byType.template.marks;
  const anyMarks = directMarks + stats.byType.concept.marks;
  const corrections = content.questions.filter((q) => q.status === 'corrected');

  // ── heatmap ──
  const heat = useMemo(() => {
    const cols = [
      ...idx.midtermIds.map((id) => ({ id, label: idx.exam.get(id)?.short ?? id, match: (e: string) => e === id })),
      { id: 'finals', label: 'Finals', match: (e: string) => idx.exam.get(e)?.kind === 'final' },
      { id: 'pps', label: 'PPS #1', match: (e: string) => idx.exam.get(e)?.kind === 'homework' }
    ];
    const rows = content.topics.map((t) => {
      const qs = content.questions.filter((q) => q.topic === t.id);
      const counts = cols.map((c) => qs.filter((q) => c.match(q.exam)).length);
      const hits = idx.midtermIds.filter((m) => qs.some((q) => q.exam === m)).length;
      const marks = qs.filter((q) => idx.midtermIds.includes(q.exam)).reduce((s, q) => s + marksOf(q), 0);
      return { t, counts, hits, marks };
    });
    const max = Math.max(1, ...rows.flatMap((r) => r.counts));
    return { cols, rows, max };
  }, [content, idx]);

  // ── clusters ──
  const visible = useMemo(() => {
    const ql = query.trim().toLowerCase();
    return content.clusters
      .filter((c) => match === 'all' || c.match === match)
      .filter((c) => expect === 'all' || c.expect === expect)
      .filter((c) => !topicFilter || c.topic === topicFilter || c.members.some((m) => idx.q.get(m)?.topic === topicFilter))
      .filter(
        (c) =>
          !ql ||
          c.title.toLowerCase().includes(ql) ||
          c.study.toLowerCase().includes(ql) ||
          c.members.some((m) => idx.q.get(m)?.q.toLowerCase().includes(ql))
      )
      .sort((a, b) => EXPECT_RANK[a.expect] - EXPECT_RANK[b.expect] || papersOf(b, idx).length - papersOf(a, idx).length);
  }, [content, idx, match, expect, topicFilter, query]);

  useEffect(() => {
    if (topicFilter) clustersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [topicFilter]);

  const oneOffs = useMemo(() => {
    const groups = new Map<string, typeof midterms>();
    for (const q of midterms) {
      if (repeatTypeOf(q.id, idx)) continue;
      groups.set(q.topic, [...(groups.get(q.topic) ?? []), q]);
    }
    return [...groups.entries()];
  }, [midterms, idx]);

  const pct = (x: number) => `${Math.round((100 * x) / stats.totalMarks)}%`;

  return (
    <div className="mg-root" style={{ gap: 16 }}>
      {/* Overview */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Repeat size={17} /> {content.overview.headline}
        </h3>
        <p className="mg-section-sub">
          {stats.total} questions from the Fall 2024, 2025 (Version A) and Winter 2026 midterms ({stats.totalMarks} marks), cross-checked against two old
          finals, your Practice Problem Set #1, Dr. Medraj’s lecture examples and the Callister worked examples.
        </p>
        <ul className="mg-points">
          {content.overview.points.map((p, i) => (
            <li key={i}>
              <MathText text={p} />
            </li>
          ))}
        </ul>

        <div className="mg-kpis">
          <div className="mg-kpi accent">
            <div className="mg-kpi-value">{pct(directMarks)}</div>
            <div className="mg-kpi-label">
              of midterm marks were exact repeats or the same question with new numbers ({pct(anyMarks)} counting same-concept twins)
            </div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats.byType.exact.n}</div>
            <div className="mg-kpi-label">exact repeats ({stats.byType.exact.marks} marks)</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats.byType.template.n}</div>
            <div className="mg-kpi-label">same template, new numbers ({stats.byType.template.marks} marks)</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats.byType.concept.n}</div>
            <div className="mg-kpi-label">same concept, new angle ({stats.byType.concept.marks} marks)</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats.byType.once.n}</div>
            <div className="mg-kpi-label">asked only once ({stats.byType.once.marks} marks)</div>
          </div>
        </div>

        <div className="mg-stack" role="img" aria-label="Share of midterm marks by repeat type">
          {(['exact', 'template', 'concept', 'once'] as const).map((k) => (
            <span key={k} className={`m-${k}`} style={{ width: pct(stats.byType[k].marks) }} />
          ))}
        </div>
        <div className="mg-legend">
          {(['exact', 'template', 'concept'] as const).map((k) => (
            <span key={k}>
              <i className={`m-${k}`} />
              {MATCH_LABEL[k]} · {pct(stats.byType[k].marks)}
            </span>
          ))}
          <span>
            <i className="m-once" />
            Asked once · {pct(stats.byType.once.marks)}
          </span>
        </div>
      </section>

      {/* Heatmap */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Grid3x3 size={17} /> Where the questions come from
        </h3>
        <p className="mg-section-sub">
          Questions per topic on each paper. “Hits” is how many of the three midterms used the topic. Click a topic to filter the repeat
          clusters below.
        </p>
        <div className="mg-heat-wrap">
          <table className="mg-heat">
            <thead>
              <tr>
                <th>Topic (teacher’s notes order)</th>
                {heat.cols.map((c) => (
                  <th key={c.id}>{c.label}</th>
                ))}
                <th>Hits</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {heat.rows.map(({ t, counts, hits, marks }) => (
                <tr key={t.id} className={topicFilter === t.id ? 'selected' : ''}>
                  <td className="topic" onClick={() => setTopicFilter(topicFilter === t.id ? null : t.id)}>
                    <span className="mg-muted mg-small">{t.ch} · </span>
                    {t.name}
                  </td>
                  {counts.map((n, i) => (
                    <td
                      key={i}
                      className={n === 0 ? 'zero' : ''}
                      style={n ? { background: `rgba(225, 29, 72, ${0.08 + (0.55 * n) / heat.max})`, color: n / heat.max > 0.55 ? '#fff' : 'var(--text-primary)' } : undefined}
                    >
                      {n || '·'}
                    </td>
                  ))}
                  <td className="hits">
                    <span className={`mg-badge ${hits === 3 ? 'exact' : hits === 2 ? 'template' : hits === 1 ? 'concept' : 'neutral'}`}>{hits}/3</span>
                  </td>
                  <td className={marks ? '' : 'zero'}>{marks || '·'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Clusters */}
      <section className="mg-panel mg-panel-pad" ref={clustersRef}>
        <h3 className="mg-section-title">
          <Layers size={17} /> Repeat clusters: same question, different paper
        </h3>
        <p className="mg-section-sub">
          Each cluster groups the questions that test the same thing, says what changed between papers, which slide and Callister section is
          behind it, and how likely it is to come back on Oct 30.
        </p>

        <div className="mg-filters">
          {(['all', 'exact', 'template', 'concept'] as const).map((m) => (
            <button key={m} type="button" className={`mg-chip ${match === m ? 'active' : ''}`} onClick={() => setMatch(m)}>
              {m === 'all' ? 'All types' : MATCH_LABEL[m]}
            </button>
          ))}
        </div>
        <div className="mg-filters">
          {(['all', 'Very likely', 'Likely', 'Possible'] as const).map((e) => (
            <button key={e} type="button" className={`mg-chip ${expect === e ? 'active' : ''}`} onClick={() => setExpect(e)}>
              {e === 'all' ? 'Any forecast' : e}
            </button>
          ))}
          {topicFilter && (
            <button type="button" className="mg-chip active" onClick={() => setTopicFilter(null)}>
              {idx.topic.get(topicFilter)?.name} <X size={12} />
            </button>
          )}
          <label className="mg-chip" style={{ cursor: 'pointer' }}>
            <input type="checkbox" checked={selfTest} onChange={(e) => setSelfTest(e.target.checked)} /> Self-test (hide answers)
          </label>
        </div>
        <div className="mg-filters">
          <Search size={15} className="mg-muted" />
          <input className="mg-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search clusters and questions (e.g. palladium, Bragg, ductility)…" />
          <span className="mg-small mg-muted">
            {visible.length} of {content.clusters.length}
          </span>
        </div>

        {visible.map((c, i) => {
          const isOpen = open[c.id] ?? i < 2;
          const papers = papersOf(c, idx);
          return (
            <article key={c.id} className="mg-cluster">
              <button type="button" className="mg-cluster-head" onClick={() => setOpen((o) => ({ ...o, [c.id]: !isOpen }))} aria-expanded={isOpen}>
                {isOpen ? <ChevronDown size={18} className="mg-muted" /> : <ChevronRight size={18} className="mg-muted" />}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4>
                    <MathText text={c.title} />
                  </h4>
                  <div className="mg-cluster-meta">
                    <MatchBadge match={c.match} />
                    <span className={`mg-badge ${EXPECT_CLASS[c.expect]}`}>Oct 30: {c.expect}</span>
                    {papers.map((p) => (
                      <span key={p} className="mg-exam">
                        {idx.exam.get(p)?.short ?? p}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="mg-cluster-body">
                  <div className="mg-callouts">
                    <div className="mg-callout">
                      <b>What changed between papers</b>
                      <MathText text={c.changes} />
                    </div>
                    <div className="mg-callout study">
                      <b>Study this</b>
                      <MathText text={c.study} />
                    </div>
                    <div className="mg-callout trap">
                      <b>Trap</b>
                      <MathText text={c.trap} />
                    </div>
                  </div>
                  <RefsRow lec={c.refs.lec} cal={c.refs.cal} guide={c.refs.guide} nav={nav} topic={c.topic} />
                  <div>
                    {c.members.map((m) => {
                      const q = idx.q.get(m);
                      return q ? <QuestionCard key={m} q={q} idx={idx} nav={nav} hideAnswer={selfTest} /> : null;
                    })}
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {visible.length === 0 && <p className="mg-small mg-muted">No cluster matches these filters.</p>}
      </section>

      {/* Corrections */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <AlertTriangle size={17} /> Answer-key corrections
        </h3>
        <p className="mg-section-sub">
          The posted solutions are wrong on these. The W26 paper is a photo with a student’s marks: its four figure questions (Q1–4) are shown
          with those marks as unofficial, and the marks on Q6 and Q12 are wrong (explained on each question).
        </p>
        {corrections.map((q) => (
          <QuestionCard key={q.id} q={q} idx={idx} nav={nav} showTopic />
        ))}
        {['W26-6', 'W26-12'].map((id) => {
          const q = idx.q.get(id);
          return q ? <QuestionCard key={id} q={q} idx={idx} nav={nav} showTopic /> : null;
        })}
      </section>

      {/* One-offs */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">Asked only once</h3>
        <p className="mg-section-sub">
          These midterm questions have no twin on another paper. Know the idea, but give them less time than the clusters above.
        </p>
        {oneOffs.map(([topic, qs]) => (
          <details key={topic} style={{ marginBottom: 8 }}>
            <summary style={{ cursor: 'pointer', fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)', padding: '6px 0' }}>
              {idx.topic.get(topic)?.name} <span className="mg-muted mg-small">· {qs.length}</span>{' '}
              {qs.map((q) => (
                <ExamTag key={q.id} q={q} idx={idx} />
              ))}
            </summary>
            {qs.map((q) => (
              <QuestionCard key={q.id} q={q} idx={idx} nav={nav} hideAnswer={selfTest} />
            ))}
          </details>
        ))}
      </section>
    </div>
  );
};

function papersOf(c: Cluster, idx: GateIndex): string[] {
  const order = ['F24', 'A25', 'W26', 'FX', 'F17', 'PPS1'];
  const set = new Set(c.members.map((m) => idx.q.get(m)?.exam).filter(Boolean) as string[]);
  return order.filter((e) => set.has(e));
}

export default PatternAnalyzer;
