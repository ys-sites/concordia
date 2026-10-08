import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronRight, Grid3x3, Layers, PlayCircle, Repeat, Shuffle, Sigma, Target, Video, XCircle } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { Cluster, Expectation, GateContent, GateNav, MatchType, Subject } from './vaultTypes';
import { GateIndex, MatchBadge, MATCH_LABEL, QuestionCard, RefsRow, repeatTypeOf } from './shared';
import { isDrillable, lessonItems, loadStats, mastery, Stats } from './drill';

const EXPECT_RANK: Record<Expectation, number> = { 'Very likely': 0, Likely: 1, Possible: 2 };
const EXPECT_CLASS: Record<Expectation, string> = { 'Very likely': 'exact', Likely: 'template', Possible: 'neutral' };

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  focusTopic: string | null;
}

export const PatternAnalyzer: React.FC<Props> = ({ content, idx, nav, focusTopic }) => {
  const [stats, setStats] = useState<Stats>(() => loadStats(content.course));
  const [openSubjects, setOpenSubjects] = useState<Record<string, boolean>>({});
  const [selfTest, setSelfTest] = useState(false);
  const topicRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [flash, setFlash] = useState<string | null>(null);

  useEffect(() => {
    const onStats = () => setStats(loadStats(content.course));
    window.addEventListener('gate-stats', onStats);
    return () => window.removeEventListener('gate-stats', onStats);
  }, [content.course]);

  useEffect(() => {
    if (!focusTopic) return;
    const s = idx.subjectOfTopic.get(focusTopic);
    if (s) setOpenSubjects((o) => ({ ...o, [s.id]: true }));
    setTimeout(() => {
      topicRefs.current[focusTopic]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setFlash(focusTopic);
      setTimeout(() => setFlash(null), 1900);
    }, 80);
  }, [focusTopic, idx]);

  const papers = useMemo(() => content.questions.filter((q) => idx.paperIds.includes(q.exam)), [content, idx]);

  const stats0 = useMemo(() => {
    const by: Record<MatchType | 'once', number> = { exact: 0, template: 0, concept: 0, once: 0 };
    for (const q of papers) by[repeatTypeOf(q.id, idx) ?? 'once'] += 1;
    return by;
  }, [papers, idx]);
  const total = papers.length || 1;
  const pct = (n: number) => `${Math.round((100 * n) / total)}%`;
  const repeats = papers.filter((q) => repeatTypeOf(q.id, idx) && isDrillable(q));
  const missedCount = Object.values(stats).filter((s) => s.last === 0).length;
  const paperExams = content.exams.filter((e) => idx.paperIds.includes(e.id));
  const corrections = content.questions.filter((q) => q.status === 'corrected');
  const allPaperKeys = papers.filter(isDrillable).map((q) => q.id);
  const m = mastery(allPaperKeys, stats);

  return (
    <div className="mg-root" style={{ gap: 16 }}>
      {/* Overview */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Repeat size={17} /> {content.overview.headline}
        </h3>
        <p className="mg-section-sub">
          {papers.length} questions from {paperExams.length} past papers ({paperExams.map((e) => e.short).join(', ')}), matched against each other, the teacher’s notes and
          the textbook.
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
            <div className="mg-kpi-value">{pct(stats0.exact + stats0.template)}</div>
            <div className="mg-kpi-label">of past-paper questions were asked again word for word or with new numbers ({pct(stats0.exact + stats0.template + stats0.concept)} counting same-idea twins)</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats0.exact}</div>
            <div className="mg-kpi-label">{MATCH_LABEL.exact.toLowerCase()}s</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats0.template}</div>
            <div className="mg-kpi-label">{MATCH_LABEL.template.toLowerCase()}</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats0.concept}</div>
            <div className="mg-kpi-label">{MATCH_LABEL.concept.toLowerCase()}</div>
          </div>
          <div className="mg-kpi">
            <div className="mg-kpi-value">{stats0.once}</div>
            <div className="mg-kpi-label">asked only once</div>
          </div>
        </div>
        <div className="mg-stack" role="img" aria-label="Share of past-paper questions by repeat type">
          {(['exact', 'template', 'concept', 'once'] as const).map((k) => (
            <span key={k} className={`m-${k}`} style={{ width: pct(stats0[k]) }} />
          ))}
        </div>
        <div className="mg-legend">
          {(['exact', 'template', 'concept'] as const).map((k) => (
            <span key={k}>
              <i className={`m-${k}`} />
              {MATCH_LABEL[k]} · {pct(stats0[k])}
            </span>
          ))}
          <span>
            <i className="m-once" />
            Asked once · {pct(stats0.once)}
          </span>
        </div>
      </section>

      {/* Quick drills */}
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Target size={17} /> Drills
        </h3>
        <p className="mg-section-sub">
          Every drill checks your answer, shows the worked solution, and remembers what you missed on this device. You have mastered {m.done} of {m.total} past-paper questions so
          far.
        </p>
        <div className="mg-quick">
          <button type="button" onClick={() => nav.startDrill({ scope: 'mock' }, 'Mock midterm')} disabled={!allPaperKeys.length}>
            <b>
              <Shuffle size={15} /> Mock midterm
            </b>
            <span>20 random questions, weighted towards the ones that keep coming back.</span>
          </button>
          <button type="button" onClick={() => nav.startDrill({ scope: 'repeats' }, 'Every repeated question')} disabled={!repeats.length}>
            <b>
              <Repeat size={15} /> All repeated questions ({repeats.length})
            </b>
            <span>The highest-value set: everything asked on more than one paper.</span>
          </button>
          <button type="button" onClick={() => nav.startDrill({ scope: 'missed' }, 'Everything I missed')} disabled={!missedCount}>
            <b>
              <XCircle size={15} /> Everything I missed ({missedCount})
            </b>
            <span>Questions and practice items whose last attempt was wrong.</span>
          </button>
          <button type="button" onClick={() => nav.startDrill({ scope: 'all' }, 'All past-paper questions')} disabled={!allPaperKeys.length}>
            <b>
              <Layers size={15} /> All past-paper questions ({allPaperKeys.length})
            </b>
            <span>Every question from every paper, in order.</span>
          </button>
        </div>
      </section>

      {/* Subjects */}
      <section>
        <div className="mg-gate-head" style={{ marginBottom: 10 }}>
          <h3 className="mg-section-title" style={{ margin: 0 }}>
            <Layers size={17} /> By subject, in the order of the teacher’s notes
          </h3>
          <label className="mg-chip" style={{ cursor: 'pointer' }}>
            <input type="checkbox" checked={selfTest} onChange={(e) => setSelfTest(e.target.checked)} /> Hide answers (self-test)
          </label>
        </div>
        {content.subjects.map((s) => (
          <SubjectCard
            key={s.id}
            s={s}
            content={content}
            idx={idx}
            nav={nav}
            stats={stats}
            open={!!openSubjects[s.id]}
            toggle={() => setOpenSubjects((o) => ({ ...o, [s.id]: !o[s.id] }))}
            selfTest={selfTest}
            topicRefs={topicRefs}
            flash={flash}
          />
        ))}
      </section>

      {/* Corrections */}
      {corrections.length > 0 && (
        <details className="mg-panel mg-panel-pad">
          <summary className="mg-section-title" style={{ cursor: 'pointer' }}>
            <AlertTriangle size={17} /> Answer-key corrections ({corrections.length})
          </summary>
          <p className="mg-section-sub">The posted solutions are wrong on these. Learn the corrected answer.</p>
          {corrections.map((q) => (
            <QuestionCard key={q.id} q={q} idx={idx} nav={nav} showTopic />
          ))}
        </details>
      )}

      {/* Heat map */}
      <details className="mg-panel mg-panel-pad">
        <summary className="mg-section-title" style={{ cursor: 'pointer' }}>
          <Grid3x3 size={17} /> Paper × topic map
        </summary>
        <p className="mg-section-sub">How many questions each paper asked on each topic.</p>
        <div className="mg-heat-wrap">
          <table className="mg-heat">
            <thead>
              <tr>
                <th>Topic</th>
                {content.exams.map((e) => (
                  <th key={e.id}>{e.short}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.topics.map((t) => {
                const counts = content.exams.map((e) => content.questions.filter((q) => q.topic === t.id && q.exam === e.id).length);
                const max = Math.max(1, ...counts);
                return (
                  <tr key={t.id}>
                    <td className="topic" onClick={() => nav.showTopic(t.id)}>
                      <span className="mg-muted mg-small">{t.ch} · </span>
                      {t.name}
                    </td>
                    {counts.map((n, i) => (
                      <td key={i} className={n === 0 ? 'zero' : ''} style={n ? { background: `rgba(225, 29, 72, ${0.1 + (0.5 * n) / max})` } : undefined}>
                        {n || '·'}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
};

const SubjectCard: React.FC<{
  s: Subject;
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  stats: Stats;
  open: boolean;
  toggle: () => void;
  selfTest: boolean;
  topicRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  flash: string | null;
}> = ({ s, content, idx, nav, stats, open, toggle, selfTest, topicRefs, flash }) => {
  const qs = content.questions.filter((q) => s.topics.includes(q.topic) && idx.paperIds.includes(q.exam));
  const drillable = qs.filter(isDrillable);
  const rep = drillable.filter((q) => repeatTypeOf(q.id, idx));
  const one = drillable.filter((q) => !repeatTypeOf(q.id, idx));
  const practice = content.formulas.filter((f) => s.topics.includes(f.topic)).flatMap((f) => lessonItems(f, idx)).filter((it) => it.badge !== 'exam');
  const m = mastery(drillable.map((q) => q.id), stats);
  const paperCount = (examId: string) => qs.filter((q) => q.exam === examId).length;

  return (
    <article className="mg-subject">
      <div className="mg-subject-head">
        <div className="mg-subject-top">
          <div>
            <div className="mg-small mg-muted">{s.ch}</div>
            <h4>{s.name}</h4>
            {s.blurb && <div className="mg-small" style={{ color: 'var(--text-secondary)', marginTop: 2 }}>{s.blurb}</div>}
          </div>
          <button type="button" className="mg-btn small" onClick={toggle} aria-expanded={open}>
            {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />} {s.topics.length} subtopics
          </button>
        </div>
        <div className="mg-subject-stats">
          <span className="mg-badge neutral">{qs.length} past-paper questions</span>
          <span className="mg-badge exact">{rep.length} repeated</span>
          <span className="mg-badge neutral">{one.length} one-offs</span>
          {content.exams
            .filter((e) => idx.paperIds.includes(e.id) && paperCount(e.id))
            .map((e) => (
              <span key={e.id} className="mg-exam" title={e.label}>
                {e.short} ×{paperCount(e.id)}
              </span>
            ))}
        </div>
        <div>
          <div className="mg-mini-bar" title={`${m.done} of ${m.total} mastered`}>
            <span style={{ width: `${(100 * m.done) / Math.max(1, m.total)}%`, background: 'var(--status-correct)' }} />
            <span style={{ width: `${(100 * (m.tried - m.done)) / Math.max(1, m.total)}%`, background: 'rgba(225, 29, 72, 0.45)' }} />
          </div>
          <div className="mg-small mg-muted" style={{ marginTop: 3 }}>
            Mastered {m.done}/{m.total}
            {m.tried > m.done ? ` · ${m.tried - m.done} to fix` : ''}
          </div>
        </div>
        <div className="mg-drill-btns">
          <button type="button" className="mg-drill-btn" disabled={!rep.length} onClick={() => nav.startDrill({ scope: 'subject', id: s.id, mode: 'repeats' }, `${s.name}: repeated questions`)}>
            <PlayCircle size={14} /> Repeated ({rep.length})
          </button>
          <button type="button" className="mg-drill-btn" disabled={!one.length} onClick={() => nav.startDrill({ scope: 'subject', id: s.id, mode: 'oneoffs' }, `${s.name}: asked once`)}>
            <PlayCircle size={14} /> Asked once ({one.length})
          </button>
          <button type="button" className="mg-drill-btn" disabled={!drillable.length} onClick={() => nav.startDrill({ scope: 'subject', id: s.id, mode: 'all' }, `${s.name}: all past-paper questions`)}>
            <PlayCircle size={14} /> All ({drillable.length})
          </button>
          <button type="button" className="mg-drill-btn ghost" disabled={!practice.length} onClick={() => nav.startDrill({ scope: 'subject', id: s.id, mode: 'practice' }, `${s.name}: similar practice`)}>
            <Shuffle size={14} /> Similar practice ({practice.length})
          </button>
        </div>
      </div>

      {open &&
        s.topics.map((tid) => {
          const t = idx.topic.get(tid);
          if (!t) return null;
          const tq = qs.filter((q) => q.topic === tid);
          const td = tq.filter(isDrillable);
          const papersHit = idx.paperIds.filter((p) => tq.some((q) => q.exam === p)).length;
          const clusters = content.clusters
            .filter((c) => c.topic === tid)
            .sort((a, b) => EXPECT_RANK[a.expect] - EXPECT_RANK[b.expect] || b.members.length - a.members.length);
          const lessons = content.formulas.filter((f) => f.topic === tid);
          const singles = tq.filter((q) => !(idx.clustersOfQ.get(q.id) ?? []).length);
          return (
            <div
              key={tid}
              className={`mg-topic ${flash === tid ? 'flash' : ''}`}
              ref={(el) => {
                topicRefs.current[tid] = el;
              }}
            >
              <div className="mg-topic-head">
                <h5>{t.name}</h5>
                <span className={`mg-badge ${papersHit >= 3 ? 'exact' : papersHit === 2 ? 'template' : papersHit === 1 ? 'concept' : 'neutral'}`}>
                  {tq.length} Q · on {papersHit}/{idx.paperIds.length} papers
                </span>
                <button type="button" className="mg-drill-btn" disabled={!td.length} onClick={() => nav.startDrill({ scope: 'topic', id: tid, mode: 'all' }, `${t.name}`)}>
                  <PlayCircle size={14} /> Drill ({td.length})
                </button>
                {lessons.map((f) => (
                  <button key={f.id} type="button" className="mg-btn small" onClick={() => nav.openFormula(f.id)}>
                    <Sigma size={12} /> {f.name}
                  </button>
                ))}
                <button type="button" className="mg-btn small" onClick={() => nav.openTopicVideos(tid)}>
                  <Video size={12} /> Videos
                </button>
              </div>
              <div style={{ marginTop: 6 }}>
                <RefsRow lec={t.lec} cal={t.cal} guide={t.guide} nav={nav} content={content} />
              </div>
              {clusters.map((c) => (
                <ClusterMini key={c.id} c={c} idx={idx} nav={nav} content={content} selfTest={selfTest} />
              ))}
              {singles.length > 0 && (
                <details className="mg-cluster-mini">
                  <summary style={{ padding: '9px 12px', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: 'var(--bg-card-subtle)' }}>
                    Asked once ({singles.length})
                  </summary>
                  <div style={{ padding: 12 }}>
                    {singles.map((q) => (
                      <QuestionCard key={q.id} q={q} idx={idx} nav={nav} hideAnswer={selfTest} />
                    ))}
                  </div>
                </details>
              )}
            </div>
          );
        })}
    </article>
  );
};

const ClusterMini: React.FC<{ c: Cluster; idx: GateIndex; nav: GateNav; content: GateContent; selfTest: boolean }> = ({ c, idx, nav, content, selfTest }) => {
  const [open, setOpen] = useState(false);
  const papers = [...new Set(c.members.map((m) => idx.q.get(m)?.exam).filter(Boolean) as string[])];
  const drillable = c.members.filter((m) => {
    const q = idx.q.get(m);
    return q && isDrillable(q);
  });
  return (
    <div className="mg-cluster-mini">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        <span style={{ flex: 1, minWidth: 160 }}>
          <MathText text={c.title} />
        </span>
        <MatchBadge match={c.match} />
        <span className={`mg-badge ${EXPECT_CLASS[c.expect]}`}>{c.expect}</span>
        {papers.map((p) => (
          <span key={p} className="mg-exam">
            {idx.exam.get(p)?.short ?? p}
          </span>
        ))}
      </button>
      {open && (
        <div>
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
          <RefsRow lec={c.refs.lec} cal={c.refs.cal} guide={c.refs.guide} nav={nav} content={content} />
          <div>
            <button type="button" className="mg-drill-btn" disabled={!drillable.length} onClick={() => nav.startDrill({ scope: 'cluster', id: c.id }, c.title.replace(/\$[^$]*\$/g, '').slice(0, 70))}>
              <PlayCircle size={14} /> Drill this group ({drillable.length})
            </button>
          </div>
          {c.members.map((mid) => {
            const q = idx.q.get(mid);
            return q ? <QuestionCard key={mid} q={q} idx={idx} nav={nav} hideAnswer={selfTest} /> : null;
          })}
        </div>
      )}
    </div>
  );
};

export default PatternAnalyzer;
