import React, { useMemo, useState } from 'react';
import { BookOpen, Eye, EyeOff, Presentation, Sigma, Video } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { Cluster, Exam, Formula, GateContent, GateNav, LectureRef, MatchType, Question, Topic } from './vaultTypes';

export interface GateIndex {
  q: Map<string, Question>;
  topic: Map<string, Topic>;
  exam: Map<string, Exam>;
  formula: Map<string, Formula>;
  clustersOfQ: Map<string, Cluster[]>;
  midtermIds: string[];
}

export const useGateIndex = (c: GateContent): GateIndex =>
  useMemo(() => {
    const clustersOfQ = new Map<string, Cluster[]>();
    for (const cl of c.clusters) for (const m of cl.members) clustersOfQ.set(m, [...(clustersOfQ.get(m) ?? []), cl]);
    return {
      q: new Map(c.questions.map((x) => [x.id, x])),
      topic: new Map(c.topics.map((x) => [x.id, x])),
      exam: new Map(c.exams.map((x) => [x.id, x])),
      formula: new Map(c.formulas.map((x) => [x.id, x])),
      clustersOfQ,
      midtermIds: c.exams.filter((e) => e.kind === 'midterm').map((e) => e.id)
    };
  }, [c]);

// Midterm marking scheme on all three papers: multiple choice 2, true/false 1
export const marksOf = (q: Question) => (q.kind === 'tf' ? 1 : 2);

const MATCH_ORDER: MatchType[] = ['exact', 'template', 'concept'];
export const MATCH_LABEL: Record<MatchType, string> = {
  exact: 'Exact repeat',
  template: 'Same template, new numbers',
  concept: 'Same concept, new angle'
};

// Strongest repeat type a question belongs to, counting only clusters that span 2+ different papers
export const repeatTypeOf = (id: string, idx: GateIndex): MatchType | null => {
  const clusters = idx.clustersOfQ.get(id) ?? [];
  const types = clusters
    .filter((cl) => new Set(cl.members.map((m) => idx.q.get(m)?.exam).filter((e) => e && e !== 'PPS1')).size >= 2)
    .map((cl) => cl.match);
  return MATCH_ORDER.find((t) => types.includes(t)) ?? null;
};

export const MatchBadge: React.FC<{ match: MatchType }> = ({ match }) => <span className={`mg-badge ${match}`}>{MATCH_LABEL[match]}</span>;

export const ExamTag: React.FC<{ q: Question; idx: GateIndex; onClick?: () => void }> = ({ q, idx, onClick }) => {
  const exam = idx.exam.get(q.exam);
  const text = `${exam?.short ?? q.exam} ${q.kind === 'tf' ? 'T/F ' : 'Q'}${q.n}`;
  const cls = `mg-exam ${exam?.kind !== 'midterm' ? 'final' : ''}`;
  return onClick ? (
    <button type="button" className={cls} onClick={onClick} title={exam?.label}>
      {text}
    </button>
  ) : (
    <span className={cls} title={exam?.label}>
      {text}
    </span>
  );
};

export const StatusBadge: React.FC<{ q: Question }> = ({ q }) => {
  if (q.status === 'corrected') return <span className="mg-badge warn">Posted key corrected</span>;
  if (q.status === 'unofficial') return <span className="mg-badge neutral">Figure · unofficial marks</span>;
  if (q.status === 'verified') return <span className="mg-badge ok">Recomputed ✓</span>;
  return null;
};

export const LectureButton: React.FC<{ r: LectureRef; nav: GateNav }> = ({ r, nav }) => (
  <button type="button" className="mg-btn small" onClick={() => nav.openLecture(r)} title={`Open Lecture ${r.l} at slide ${r.s}`}>
    <Presentation size={13} />
    <span>
      L{r.l} · s{r.s}
      {r.label ? ` — ${r.label}` : ''}
    </span>
  </button>
);

export const RefsRow: React.FC<{ lec?: LectureRef[]; cal?: string; guide?: string; nav: GateNav; topic?: string }> = ({ lec, cal, guide, nav, topic }) => (
  <div className="mg-refs">
    {lec && lec.length > 0 && <span className="mg-refs-label">Slides</span>}
    {lec?.map((r) => <LectureButton key={`${r.l}-${r.s}`} r={r} nav={nav} />)}
    {!lec?.length && guide && <span className="mg-small mg-muted">Ch 6–7 slides aren’t posted yet:</span>}
    {guide && (
      <button type="button" className="mg-btn small" onClick={() => nav.openGuide(guide)}>
        <BookOpen size={13} />
        <span>Topic guide {guide}</span>
      </button>
    )}
    {cal && (
      <span className="mg-badge info" title="Callister, Materials Science and Engineering, 10th ed.">
        Callister {cal}
      </span>
    )}
    {topic && (
      <button type="button" className="mg-btn small" onClick={() => nav.openTopicVideos(topic)}>
        <Video size={13} />
        <span>Videos</span>
      </button>
    )}
  </div>
);

const letter = (i: number) => String.fromCharCode(97 + i);

export const QuestionCard: React.FC<{
  q: Question;
  idx: GateIndex;
  nav: GateNav;
  hideAnswer?: boolean;
  showTopic?: boolean;
  compact?: boolean;
}> = ({ q, idx, nav, hideAnswer = false, showTopic = false, compact = false }) => {
  const [revealed, setRevealed] = useState(false);
  const show = !hideAnswer || revealed;
  const ansIndex = q.opts ? q.ans.charCodeAt(0) - 97 : -1;
  const keyIndex = q.keyAns ? q.keyAns.charCodeAt(0) - 97 : -1;
  return (
    <div className="mg-q">
      <div className="mg-q-head">
        <ExamTag q={q} idx={idx} />
        {showTopic && <span className="mg-badge neutral">{idx.topic.get(q.topic)?.name}</span>}
        <StatusBadge q={q} />
        <span className="mg-small mg-muted" style={{ marginLeft: 'auto' }}>
          {idx.exam.get(q.exam)?.kind === 'midterm' ? `${marksOf(q)} mark${marksOf(q) > 1 ? 's' : ''}` : idx.exam.get(q.exam)?.label}
        </span>
      </div>
      <div className="mg-q-text">
        <MathText text={q.q} />
      </div>
      {q.opts && !compact && (
        <div className="mg-opts">
          {q.opts.map((o, i) => (
            <div key={i} className={`mg-opt ${show && i === ansIndex ? 'right' : ''} ${show && i === keyIndex ? 'keywrong' : ''}`}>
              <b>{letter(i)})</b>
              <span>
                <MathText text={o} />
              </span>
            </div>
          ))}
        </div>
      )}
      {show ? (
        <>
          {(!q.opts || compact) && (
            <div className="mg-answer">
              <b>Answer:</b>{' '}
              <MathText text={q.opts ? `(${q.ans}) ${q.opts[ansIndex] ?? ''}` : q.ans} />
            </div>
          )}
          {q.keyAns && (
            <div className="mg-answer mg-small" style={{ color: 'var(--status-warning)' }}>
              The posted key says {q.opts ? `(${q.keyAns})` : q.keyAns}, which is wrong. See the note.
            </div>
          )}
          {q.note && (
            <div className="mg-note">
              <MathText text={q.note} />
            </div>
          )}
          {q.f && q.f.length > 0 && (
            <div className="mg-refs" style={{ marginTop: 8 }}>
              {q.f.map((fid) => (
                <button key={fid} type="button" className="mg-btn small" onClick={() => nav.openFormula(fid)}>
                  <Sigma size={13} />
                  <span>Formula Lab: {idx.formula.get(fid)?.name ?? fid}</span>
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="mg-reveal">
          <button type="button" className="mg-btn small" onClick={() => setRevealed(true)}>
            <Eye size={13} />
            <span>Show answer</span>
          </button>
        </div>
      )}
      {hideAnswer && revealed && (
        <div className="mg-reveal">
          <button type="button" className="mg-btn small" onClick={() => setRevealed(false)}>
            <EyeOff size={13} />
            <span>Hide</span>
          </button>
        </div>
      )}
    </div>
  );
};
