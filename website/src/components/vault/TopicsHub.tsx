// "Topics": every midterm subtopic in the order of the teacher's notes, each with three
// actions (Watch · Learn · Practice) and its past-paper questions folded underneath.
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BarChart3, BookOpen, ChevronDown, ChevronRight, Eye, EyeOff, PlayCircle, Sigma, Video } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { Cluster, Expectation, GateContent, GateNav, MatchType, Subject } from './vaultTypes';
import { GateIndex, MatchBadge, QuestionCard, RefsRow, repeatTypeOf } from './shared';
import { isDrillable, lessonItems, loadStats, mastery, Stats } from './drill';
import { hasVideo } from './Drawers';

const EXPECT_RANK: Record<Expectation, number> = { 'Very likely': 0, Likely: 1, Possible: 2 };
const EXPECT_CLASS: Record<Expectation, string> = { 'Very likely': 'exact', Likely: 'template', Possible: 'neutral' };

interface Props {
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  focusTopic: string | null;
}

export const TopicsHub: React.FC<Props> = ({ content, idx, nav, focusTopic }) => {
  const [stats, setStats] = useState<Stats>(() => loadStats(content.course));
  const [open, setOpen] = useState<Record<string, boolean>>(() => ({ [content.subjects[0]?.id ?? '']: true }));
  const [selfTest, setSelfTest] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const on = () => setStats(loadStats(content.course));
    window.addEventListener('gate-stats', on);
    return () => window.removeEventListener('gate-stats', on);
  }, [content.course]);

  useEffect(() => {
    if (!focusTopic) return;
    const s = idx.subjectOfTopic.get(focusTopic);
    if (s) setOpen((o) => ({ ...o, [s.id]: true }));
    setTimeout(() => {
      rowRefs.current[focusTopic]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setFlash(focusTopic);
      setTimeout(() => setFlash(null), 1900);
    }, 80);
  }, [focusTopic, idx]);

  const papers = useMemo(() => content.questions.filter((q) => idx.paperIds.includes(q.exam)), [content, idx]);
  const byType = useMemo(() => {
    const by: Record<MatchType | 'once', number> = { exact: 0, template: 0, concept: 0, once: 0 };
    for (const q of papers) by[repeatTypeOf(q.id, idx) ?? 'once'] += 1;
    return by;
  }, [papers, idx]);
  // practice items (not exam questions) per subtopic
  const practiceCount = useMemo(() => {
    const out = new Map<string, number>();
    for (const f of content.formulas) out.set(f.topic, (out.get(f.topic) ?? 0) + lessonItems(f, idx).filter((it) => !it.qid).length);
    return out;
  }, [content, idx]);

  const drillable = papers.filter(isDrillable);
  const m = mastery(drillable.map((q) => q.id), stats);
  const backPct = papers.length ? Math.round((100 * (byType.exact + byType.template)) / papers.length) : 0;

  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <div className="th-head">
          <div style={{ minWidth: 0 }}>
            <h3 className="mg-section-title" style={{ marginBottom: 4 }}>
              <BookOpen size={17} /> Topics
            </h3>
            <p className="mg-section-sub" style={{ margin: 0 }}>
              Every midterm subtopic in the order of the teacher’s notes. For each one: <b>Watch</b> a video, <b>Learn</b> it step by step, then <b>Practice</b>.
            </p>
          </div>
          <div className="th-stats">
            <div>
              <b>{backPct}%</b>
              <span>of past-paper questions came back</span>
            </div>
            <div>
              <b>
                {m.done}/{m.total}
              </b>
              <span>mastered</span>
            </div>
          </div>
        </div>
      </section>

      <div className="th-toolbar">
        <button type="button" className="mg-chip" onClick={() => setOpen(Object.fromEntries(content.subjects.map((s) => [s.id, true])))}>
          Open all chapters
        </button>
        <button type="button" className="mg-chip" onClick={() => setOpen({})}>
          Close all
        </button>
        <button type="button" className={`mg-chip ${selfTest ? 'active' : ''}`} onClick={() => setSelfTest((v) => !v)} title="Hide answers in past questions">
          {selfTest ? <EyeOff size={12} /> : <Eye size={12} />} Self-test mode
        </button>
      </div>

      {content.subjects.map((s) => (
        <ChapterCard
          key={s.id}
          s={s}
          content={content}
          idx={idx}
          nav={nav}
          stats={stats}
          open={!!open[s.id]}
          toggle={() => setOpen((o) => ({ ...o, [s.id]: !o[s.id] }))}
          selfTest={selfTest}
          practiceCount={practiceCount}
          rowRefs={rowRefs}
          flash={flash}
        />
      ))}

      <button type="button" className="th-analytics-link" onClick={nav.openAnalytics}>
        <BarChart3 size={15} /> See the full exam analytics: what repeats, corrections, paper × topic map
      </button>
    </div>
  );
};

const ChapterCard: React.FC<{
  s: Subject;
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  stats: Stats;
  open: boolean;
  toggle: () => void;
  selfTest: boolean;
  practiceCount: Map<string, number>;
  rowRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  flash: string | null;
}> = ({ s, content, idx, nav, stats, open, toggle, selfTest, practiceCount, rowRefs, flash }) => {
  const qs = content.questions.filter((q) => s.topics.includes(q.topic) && idx.paperIds.includes(q.exam));
  const dq = qs.filter(isDrillable);
  const rep = dq.filter((q) => repeatTypeOf(q.id, idx)).length;
  const m = mastery(dq.map((q) => q.id), stats);
  const practice = s.topics.reduce((n, t) => n + (practiceCount.get(t) ?? 0), 0);
  const practiceChapter = () =>
    dq.length ? nav.startDrill({ scope: 'subject', id: s.id, mode: 'all' }, `${s.name}: past-paper questions`) : nav.startDrill({ scope: 'subject', id: s.id, mode: 'practice' }, `${s.name}: practice`);

  return (
    <article className={`th-chapter ${open ? 'open' : ''}`}>
      <div className="th-chapter-head">
        <button type="button" className="th-chapter-toggle" onClick={toggle} aria-expanded={open}>
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <span style={{ minWidth: 0 }}>
            <span className="th-ch">{s.ch}</span>
            <span className="th-name">
              <MathText text={s.name} />
            </span>
            <span className="th-meta">
              {qs.length ? `${qs.length} past-paper questions · ${rep} repeated` : 'not on past papers yet'} · {s.topics.length} subtopic{s.topics.length === 1 ? '' : 's'}
            </span>
          </span>
        </button>
        <div className="th-chapter-side">
          <div className="th-mastery" title={`${m.done} of ${m.total} mastered`}>
            <span style={{ width: `${(100 * m.done) / Math.max(1, m.total)}%` }} />
          </div>
          <button type="button" className="mg-btn small primary" onClick={practiceChapter} disabled={!dq.length && !practice}>
            <PlayCircle size={13} /> Practice chapter
          </button>
        </div>
      </div>

      {open && (
        <div className="th-rows">
          {s.topics.map((tid) => (
            <TopicRow key={tid} tid={tid} content={content} idx={idx} nav={nav} selfTest={selfTest} practice={practiceCount.get(tid) ?? 0} rowRefs={rowRefs} flash={flash} />
          ))}
        </div>
      )}
    </article>
  );
};

const TopicRow: React.FC<{
  tid: string;
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  selfTest: boolean;
  practice: number;
  rowRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  flash: string | null;
}> = ({ tid, content, idx, nav, selfTest, practice, rowRefs, flash }) => {
  const [showPast, setShowPast] = useState(false);
  const t = idx.topic.get(tid);
  if (!t) return null;
  const tq = content.questions.filter((q) => q.topic === tid && idx.paperIds.includes(q.exam));
  const td = tq.filter(isDrillable);
  const others = content.questions.filter((q) => q.topic === tid && !idx.paperIds.includes(q.exam));
  const clusters = content.clusters.filter((c) => c.topic === tid).sort((a, b) => EXPECT_RANK[a.expect] - EXPECT_RANK[b.expect] || b.members.length - a.members.length);
  const singles = [...tq, ...others].filter((q) => !(idx.clustersOfQ.get(q.id) ?? []).length);
  const lesson = content.formulas.find((f) => f.topic === tid);
  const video = hasVideo(tid, content, idx);
  const expect = clusters[0]?.expect;
  const pastN = tq.length + others.length;
  const practiceTopic = () =>
    td.length ? nav.startDrill({ scope: 'topic', id: tid, mode: 'all' }, t.name) : nav.startDrill({ scope: 'topic', id: tid, mode: 'practice' }, `${t.name}: practice`);

  return (
    <div
      className={`th-row ${flash === tid ? 'flash' : ''}`}
      ref={(el) => {
        rowRefs.current[tid] = el;
      }}
    >
      <div className="th-row-main">
        <div className="th-row-text">
          <b>{t.name}</b>
          <span className="th-row-badges">
            <span className={`mg-badge ${tq.length >= 5 ? 'exact' : tq.length >= 2 ? 'template' : tq.length ? 'concept' : 'neutral'}`}>{tq.length ? `asked ${tq.length}× on past papers` : 'not asked yet'}</span>
            {expect && <span className={`mg-badge ${EXPECT_CLASS[expect]}`}>{expect}</span>}
          </span>
        </div>
        <div className="th-actions">
          <button type="button" className="th-act" disabled={!video} onClick={() => nav.openTopicVideos(tid)}>
            <Video size={15} /> Watch
          </button>
          <button
            type="button"
            className="th-act"
            disabled={!lesson && !t.lec.length}
            title={lesson ? undefined : 'No written lesson yet: opens the teacher’s slides on this topic'}
            onClick={() => (lesson ? nav.openFormula(lesson.id) : nav.openLecture(t.lec[0]))}
          >
            <Sigma size={15} /> Learn
          </button>
          <button type="button" className="th-act primary" disabled={!td.length && !practice} onClick={practiceTopic}>
            <PlayCircle size={15} /> Practice
          </button>
        </div>
      </div>

      {pastN > 0 && (
        <button type="button" className="th-past-toggle" onClick={() => setShowPast((v) => !v)} aria-expanded={showPast}>
          {showPast ? <ChevronDown size={14} /> : <ChevronRight size={14} />} Past questions ({pastN}){clusters.length ? ` · ${clusters.length} repeat group${clusters.length === 1 ? '' : 's'}` : ''}
        </button>
      )}

      {showPast && (
        <div className="th-past">
          <RefsRow lec={t.lec} cal={t.cal} guide={t.guide} nav={nav} content={content} />
          {clusters.map((c) => (
            <ClusterMini key={c.id} c={c} idx={idx} nav={nav} content={content} selfTest={selfTest} />
          ))}
          {singles.length > 0 && (
            <details className="mg-cluster-mini">
              <summary style={{ padding: '9px 12px', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: 'var(--bg-card-subtle)' }}>Asked once ({singles.length})</summary>
              <div style={{ padding: 12 }}>
                {singles.map((q) => (
                  <QuestionCard key={q.id} q={q} idx={idx} nav={nav} hideAnswer={selfTest} />
                ))}
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
};

const ClusterMini: React.FC<{ c: Cluster; idx: GateIndex; nav: GateNav; content: GateContent; selfTest: boolean }> = ({ c, idx, nav, content, selfTest }) => {
  const [open, setOpen] = useState(false);
  const papers = [...new Set(c.members.map((mm) => idx.q.get(mm)?.exam).filter(Boolean) as string[])];
  const drillable = c.members.filter((mm) => {
    const q = idx.q.get(mm);
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

export default TopicsHub;
