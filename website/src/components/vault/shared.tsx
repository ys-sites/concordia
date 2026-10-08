import React, { useMemo, useState } from 'react';
import { BookOpen, Eye, EyeOff, Presentation, Sigma, Video } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { Cluster, Exam, Formula, GateContent, GateNav, LectureRef, MatchType, Question, Subject, Topic } from './vaultTypes';

export interface GateIndex {
  q: Map<string, Question>;
  topic: Map<string, Topic>;
  subject: Map<string, Subject>;
  subjectOfTopic: Map<string, Subject>;
  exam: Map<string, Exam>;
  formula: Map<string, Formula>;
  clustersOfQ: Map<string, Cluster[]>;
  // exams that count as past papers (midterms and in-class quizzes/tests)
  paperIds: string[];
  // kept for older call sites
  midtermIds: string[];
}

export const useGateIndex = (c: GateContent): GateIndex =>
  useMemo(() => {
    const clustersOfQ = new Map<string, Cluster[]>();
    for (const cl of c.clusters) for (const m of cl.members) clustersOfQ.set(m, [...(clustersOfQ.get(m) ?? []), cl]);
    const subjectOfTopic = new Map<string, Subject>();
    for (const s of c.subjects ?? []) for (const t of s.topics) subjectOfTopic.set(t, s);
    const paperIds = c.exams.filter((e) => e.kind === 'midterm' || e.kind === 'quiz' || e.counts).map((e) => e.id);
    return {
      q: new Map(c.questions.map((x) => [x.id, x])),
      topic: new Map(c.topics.map((x) => [x.id, x])),
      subject: new Map((c.subjects ?? []).map((x) => [x.id, x])),
      subjectOfTopic,
      exam: new Map(c.exams.map((x) => [x.id, x])),
      formula: new Map(c.formulas.map((x) => [x.id, x])),
      clustersOfQ,
      paperIds,
      midtermIds: paperIds
    };
  }, [c]);

const MATCH_ORDER: MatchType[] = ['exact', 'template', 'concept'];
export const MATCH_LABEL: Record<MatchType, string> = {
  exact: 'Exact repeat',
  template: 'Same question, new numbers',
  concept: 'Same idea, new angle'
};

// Strongest repeat type of a question, counting only clusters that span 2+ different papers (homework excluded)
export const repeatTypeOf = (id: string, idx: GateIndex): MatchType | null => {
  const clusters = idx.clustersOfQ.get(id) ?? [];
  const types = clusters
    .filter((cl) => new Set(cl.members.map((m) => idx.q.get(m)?.exam).filter((e) => e && idx.exam.get(e)?.kind !== 'homework')).size >= 2)
    .map((cl) => cl.match);
  return MATCH_ORDER.find((t) => types.includes(t)) ?? null;
};

export const MatchBadge: React.FC<{ match: MatchType }> = ({ match }) => <span className={`mg-badge ${match}`}>{MATCH_LABEL[match]}</span>;

export const qLabel = (q: Question, idx: GateIndex) => `${idx.exam.get(q.exam)?.short ?? q.exam} ${q.kind === 'tf' ? 'T/F ' : 'Q'}${q.n}`;

export const ExamTag: React.FC<{ q: Question; idx: GateIndex; onClick?: () => void }> = ({ q, idx, onClick }) => {
  const exam = idx.exam.get(q.exam);
  const cls = `mg-exam ${exam?.kind === 'midterm' || exam?.kind === 'quiz' || exam?.counts ? '' : 'final'}`;
  return onClick ? (
    <button type="button" className={cls} onClick={onClick} title={exam?.label}>
      {qLabel(q, idx)}
    </button>
  ) : (
    <span className={cls} title={exam?.label}>
      {qLabel(q, idx)}
    </span>
  );
};

export const StatusBadge: React.FC<{ q: Question }> = ({ q }) => {
  if (q.status === 'corrected') return <span className="mg-badge warn">Posted key corrected</span>;
  if (q.status === 'unofficial') return <span className="mg-badge neutral">No official key</span>;
  if (q.status === 'verified') return <span className="mg-badge ok">Recomputed ✓</span>;
  return null;
};

const refText = (r: LectureRef, c?: GateContent) => {
  const name = r.d ? c?.docs[r.d]?.title ?? r.d : `L${r.l}`;
  return `${name}${r.s ? ` · s${r.s}` : ''}${r.label ? ` — ${r.label}` : ''}`;
};

export const LectureButton: React.FC<{ r: LectureRef; nav: GateNav; content?: GateContent }> = ({ r, nav, content }) => (
  <button type="button" className="mg-btn small" onClick={() => nav.openLecture(r)} title="Open the teacher's slides at this page">
    <Presentation size={13} />
    <span>{refText(r, content)}</span>
  </button>
);

export const RefsRow: React.FC<{ lec?: LectureRef[]; cal?: string; guide?: string; nav: GateNav; topic?: string; content?: GateContent }> = ({ lec, cal, guide, nav, topic, content }) => (
  <div className="mg-refs">
    {lec && lec.length > 0 && <span className="mg-refs-label">Teacher’s notes</span>}
    {lec?.map((r, i) => <LectureButton key={i} r={r} nav={nav} content={content} />)}
    {guide && (
      <button type="button" className="mg-btn small" onClick={() => nav.openGuide(guide)}>
        <BookOpen size={13} />
        <span>Expanded guide {guide}</span>
      </button>
    )}
    {cal && (
      <span className="mg-badge info" title="Textbook section">
        {cal}
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

export const CodeBlock: React.FC<{ code: string }> = ({ code }) => <pre className="mg-code">{code}</pre>;

const letter = (i: number) => String.fromCharCode(97 + i);

export const QuestionCard: React.FC<{
  q: Question;
  idx: GateIndex;
  nav: GateNav;
  hideAnswer?: boolean;
  showTopic?: boolean;
}> = ({ q, idx, nav, hideAnswer = false, showTopic = false }) => {
  const [revealed, setRevealed] = useState(false);
  const show = !hideAnswer || revealed;
  const answers = q.opts ? q.ans.split(/[\s,]+/).map((s) => s.toLowerCase().charCodeAt(0) - 97) : [];
  const keyIndex = q.keyAns ? q.keyAns.charCodeAt(0) - 97 : -1;
  return (
    <div className="mg-q">
      <div className="mg-q-head">
        <ExamTag q={q} idx={idx} />
        {showTopic && <span className="mg-badge neutral">{idx.topic.get(q.topic)?.name}</span>}
        <StatusBadge q={q} />
        {q.kind === 'multi' && <span className="mg-badge info">Select all that apply</span>}
      </div>
      <div className="mg-q-text">
        <MathText text={q.q} />
      </div>
      {q.code && <CodeBlock code={q.code} />}
      {q.opts && (
        <div className="mg-opts">
          {q.opts.map((o, i) => (
            <div key={i} className={`mg-opt ${show && answers.includes(i) ? 'right' : ''} ${show && i === keyIndex ? 'keywrong' : ''}`}>
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
          {!q.opts && (
            <div className="mg-answer">
              <b>Answer:</b> {q.kind === 'output' ? <CodeBlock code={q.ans} /> : <MathText text={q.ans} />}
            </div>
          )}
          {q.solution && <CodeBlock code={q.solution} />}
          {q.keyAns && <div className="mg-answer mg-small" style={{ color: 'var(--status-warning)' }}>The posted key says {q.opts ? `(${q.keyAns})` : q.keyAns}, which is wrong. See the note.</div>}
          {q.steps && q.steps.length > 0 && (
            <ol className="mg-steps" style={{ marginTop: 8 }}>
              {q.steps.map((s, i) => (
                <li key={i}>
                  <MathText text={s} />
                </li>
              ))}
            </ol>
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
                  <span>Lesson: {idx.formula.get(fid)?.name ?? fid}</span>
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
