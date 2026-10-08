import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, CalendarClock, ChevronRight, ClipboardList, FileLock2, FileText, KeyRound, Loader2, Lock, Repeat, Sigma, Sparkles, Target, Video, X } from 'lucide-react';
import type { CourseWithDocs } from '../../data/coursesData';
import type { CourseDocument } from '../../types';
import { audio } from '../../utils/audio';
import { MathText } from '../../utils/mathRenderer';
import type { DrillTarget, GateContent, GateDoc, GateNav, LectureRef, QuizPreset } from './vaultTypes';
import { GateCourse, lockGate, resumeGate, unlockGate } from './vaultCrypto';
import { MatchBadge, QuestionCard, useGateIndex } from './shared';
import { buildDrill, DrillItem, loadStats } from './drill';
import { PatternAnalyzer } from './PatternAnalyzer';
import { FormulaLab } from './FormulaLab';
import { VideoPath } from './VideoPath';
import { StudyPlan, daysUntil } from './StudyPlan';
import { GradesaverDoc } from './GradesaverDoc';
import { DrillRunner } from './DrillRunner';
import { SkillQuiz } from './SkillQuiz';
import './midtermGate.css';
import './gateExtras.css';
import './guided.css';

// Public, non-sensitive labels shown before the folder is unlocked
const LAB_TITLE: Record<GateCourse, string> = {
  MIAE221: 'Formula Lab',
  MIAE215: 'Code Tracing Lab',
  ENGR213: 'Method Lab',
  INDU211: 'Calculation Lab'
};

interface DocDef {
  id: GateDoc;
  title: string;
  sub: string;
  icon: React.ReactNode;
}

const docList = (course: GateCourse, content: GateContent | null): DocDef[] => {
  const docs: DocDef[] = [
    { id: 'plan', title: 'Midterm Prep Plan', sub: 'Start here. Your guided path to the midterm with finish-by dates: every lesson, video, reading focus and drill opens right inside the plan.', icon: <ClipboardList size={20} /> },
    { id: 'analyzer', title: 'Pattern Analyzer & Drills', sub: 'Past-paper questions sorted by subject and subtopic, what repeats, and a drill for every group.', icon: <Repeat size={20} /> },
    { id: 'formulas', title: content?.labTitle ?? LAB_TITLE[course], sub: 'Each method in four steps: understand it, follow a worked example, try the calculator, then a practice quiz.', icon: <Sigma size={20} /> },
    { id: 'videos', title: 'Video Revision Path', sub: 'One stop per topic: a specific video to learn it, what to watch for, and the questions to do next.', icon: <Video size={20} /> },
    { id: 'quiz', title: 'Skill Quiz', sub: 'Build a quiz for a whole chapter or just the subtopics you choose: repeated, similar, asked-once or new possible questions, with the source and a video after every answer.', icon: <Target size={20} /> }
  ];
  if (course === 'ENGR213') docs.push({ id: 'gradesaver', title: 'Gradesaver Tutor Vault', sub: 'The handwritten tutor notes, the typeset blueprint, and the 5-phase solving system.', icon: <Sparkles size={20} /> });
  return docs;
};

interface Props {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
}

export const MidtermGate: React.FC<Props> = ({ course, onViewPdf }) => {
  const courseId = course.id as GateCourse;
  const DOC_KEY = `gate_doc_${courseId}`;
  const [content, setContent] = useState<GateContent | null>(null);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [shake, setShake] = useState(false);
  const [doc, setDoc] = useState<GateDoc | null>(() => {
    try {
      return (sessionStorage.getItem(DOC_KEY) as GateDoc | null) || null;
    } catch {
      return null;
    }
  });
  const [focusFormula, setFocusFormula] = useState<string | null>(null);
  const [focusTopic, setFocusTopic] = useState<string | null>(null);
  const [focusVideoTopic, setFocusVideoTopic] = useState<string | null>(null);
  const [drawerQ, setDrawerQ] = useState<string | null>(null);
  const [drill, setDrill] = useState<{ title: string; items: DrillItem[] } | null>(null);
  const [quizPreset, setQuizPreset] = useState<(QuizPreset & { nonce: number }) | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    setChecking(true);
    resumeGate(courseId).then((c) => {
      if (!alive) return;
      setContent(c);
      setChecking(false);
    });
    return () => {
      alive = false;
    };
  }, [courseId]);

  useEffect(() => {
    try {
      if (doc) sessionStorage.setItem(DOC_KEY, doc);
      else sessionStorage.removeItem(DOC_KEY);
    } catch {
      // ignore
    }
  }, [doc, DOC_KEY]);

  useEffect(() => {
    if (!drawerQ) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDrawerQ(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerQ]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || busy) return;
    setBusy(true);
    setWrong(false);
    const c = await unlockGate(courseId, password).catch(() => null);
    setBusy(false);
    if (c) {
      audio.playCorrect();
      setContent(c);
      setPassword('');
      if (!doc) setDoc('plan');
    } else {
      audio.playIncorrect();
      setWrong(true);
      setShake(true);
      setTimeout(() => setShake(false), 450);
    }
  };

  const lock = () => {
    audio.playClick();
    lockGate();
    setContent(null);
    setDoc(null);
  };

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const openDoc = (d: GateDoc | null) => {
    audio.playClick();
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    setDoc(d);
    scrollTop();
  };

  const idx = useGateIndexMaybe(content);

  const findDoc = (path: string) => course.documents.find((d) => d.relativePath === path);
  const viewPath = (path: string, title: string, page?: number) => {
    const d =
      findDoc(path) ??
      ({ id: `${courseId}:gate:${path}`, courseId, categoryId: 'Midterm Gate', categoryTitle: 'Midterm Gate', title, filename: path.split('/').pop()!, relativePath: path, tags: [], summary: title } as CourseDocument);
    onViewPdf(d, page);
  };

  const nav: GateNav = useMemo(
    () => ({
      openQuestion: (id) => setDrawerQ(id),
      openFormula: (id) => {
        setDrawerQ(null);
        setDrill(null);
        setFocusFormula(null);
        setTimeout(() => setFocusFormula(id), 0);
        setDoc('formulas');
        scrollTop();
      },
      openTopicVideos: (topic) => {
        setDrawerQ(null);
        setDoc('videos');
        setFocusVideoTopic(null);
        setTimeout(() => setFocusVideoTopic(topic), 50);
      },
      showTopic: (topic) => {
        setDrawerQ(null);
        setDoc('analyzer');
        setFocusTopic(null);
        setTimeout(() => setFocusTopic(topic), 50);
      },
      openLecture: (r: LectureRef) => {
        if (!content) return;
        if (r.d && content.docs[r.d]) return viewPath(content.docs[r.d].path, content.docs[r.d].title, r.s);
        if (r.l !== undefined) {
          const re = new RegExp((content.lectureMatch ?? '^lecture {l}-').replace('{l}', String(r.l)), 'i');
          const d = course.documents.find((x) => re.test(x.filename));
          if (d) onViewPdf(d, r.s);
        }
      },
      openDoc: (key, page) => {
        if (!content) return;
        const d = content.docs[key];
        if (d) viewPath(d.path, d.title, page);
      },
      openGuide: (part: string) => {
        const d = course.documents.find((x) => /Comprehensive Topic Guides/i.test(x.relativePath) && x.filename.startsWith(`${part} - `));
        if (d) onViewPdf(d);
      },
      startDrill: (target: DrillTarget, title: string) => {
        if (!content || !idx) return;
        setDrawerQ(null);
        setDrill({ title, items: buildDrill(target, content, idx, loadStats(content.course)) });
      },
      openQuiz: (preset?: QuizPreset) => {
        setDrawerQ(null);
        setDrill(null);
        setQuizPreset(preset ? { ...preset, nonce: Date.now() } : null);
        setDoc('quiz');
        scrollTop();
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [course, onViewPdf, content, idx]
  );

  const days = content ? daysUntil(content.midterm.date) : null;
  const DOCS = docList(courseId, content);

  return (
    <div className="mg-root" ref={topRef} style={{ scrollMarginTop: 90 }}>
      <section className="fx-panel">
        <div className="mg-panel-pad">
          <div className="mg-gate-head">
            <div className="mg-gate-title">
              <span className="mg-icon-tile">{content ? <FileText size={20} /> : <FileLock2 size={20} />}</span>
              <div>
                <h2>Midterm Gate</h2>
                <p>
                  {course.code} · hidden folder · {DOCS.length} documents
                </p>
              </div>
            </div>
            <div className="mg-head-actions">
              {content && (
                <span className="mg-countdown">
                  <CalendarClock size={14} />
                  {days !== null && days >= 0 ? `${days === 0 ? 'Midterm today' : `${days} day${days === 1 ? '' : 's'} to the midterm`} · ` : ''}
                  {content.midterm.label}
                </span>
              )}
              {content && (
                <button type="button" className="mg-btn" onClick={lock} title="Lock the folder again">
                  <Lock size={14} /> Lock
                </button>
              )}
            </div>
          </div>
        </div>

        {(!content || !doc) && (
          <ol className="mg-doc-list" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {DOCS.map((d, i) => (
              <li key={d.id}>
                <button type="button" className={`mg-doc-row ${d.id === 'quiz' ? 'skill' : ''}`} onClick={() => openDoc(d.id)}>
                  <span className="mg-doc-num">0{i + 1}</span>
                  <span className="mg-icon-tile" style={{ width: 40, height: 40 }}>
                    {content ? d.icon : <Lock size={18} />}
                  </span>
                  <span>
                    <span className="mg-doc-title">
                      {d.title}
                      {d.id === 'quiz' && <span className="mg-skill-tag">Build your own quiz</span>}
                    </span>
                    <span className="mg-doc-sub">{d.sub}</span>
                  </span>
                  <span className="mg-doc-open">
                    {content ? 'Open' : 'Locked'} <ChevronRight size={15} />
                  </span>
                </button>
              </li>
            ))}
          </ol>
        )}
      </section>

      {!content && (
        <section className={`fx-panel ${shake ? 'shake-incorrect' : ''}`}>
          <div className="mg-lock">
            <span className="mg-icon-tile" style={{ margin: '0 auto', width: 52, height: 52 }}>
              {checking || busy ? <Loader2 size={22} className="spin" /> : <KeyRound size={22} />}
            </span>
            <h3>Encrypted folder</h3>
            <p>These documents are stored encrypted. Enter the password to open them on this device.</p>
            <form onSubmit={submit}>
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setWrong(false);
                }}
                placeholder="Password"
                autoComplete="off"
                disabled={busy || checking}
                aria-label="Folder password"
              />
              <button type="submit" className="mg-btn primary" disabled={busy || checking} style={{ justifyContent: 'center' }}>
                {busy ? 'Decrypting…' : 'Unlock'}
              </button>
            </form>
            {wrong && <div className="mg-error">That password doesn’t open this folder.</div>}
          </div>
        </section>
      )}

      {content && idx && doc && (
        <>
          <div className="mg-gate-head">
            <button type="button" className="mg-btn" onClick={() => openDoc(null)}>
              <ArrowLeft size={14} /> Folder
            </button>
            <div className="mg-tabs" role="tablist">
              {DOCS.map((d, i) => (
                <button key={d.id} type="button" role="tab" aria-selected={doc === d.id} className={`mg-tab ${doc === d.id ? 'active' : ''} ${d.id === 'quiz' ? 'skill' : ''}`} onClick={() => openDoc(d.id)}>
                  {d.icon}
                  <span>
                    0{i + 1} {d.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {doc === 'plan' && <StudyPlan content={content} idx={idx} nav={nav} />}
          {doc === 'analyzer' && <PatternAnalyzer content={content} idx={idx} nav={nav} focusTopic={focusTopic} />}
          {doc === 'formulas' && <FormulaLab content={content} idx={idx} nav={nav} focusFormula={focusFormula} />}
          {doc === 'videos' && <VideoPath content={content} idx={idx} nav={nav} focusTopic={focusVideoTopic} />}
          {doc === 'quiz' && <SkillQuiz content={content} idx={idx} nav={nav} preset={quizPreset} />}
          {doc === 'gradesaver' && content.gradesaver && <GradesaverDoc content={content} onViewPdf={onViewPdf} />}
        </>
      )}

      {content && idx && drawerQ && <QuestionDrawer content={content} idx={idx} id={drawerQ} nav={nav} onClose={() => setDrawerQ(null)} />}
      {content && drill && <DrillRunner course={content.course} title={drill.title} items={drill.items} onClose={() => setDrill(null)} onOpenQuestion={(id) => setDrawerQ(id)} />}
    </div>
  );
};

// useGateIndex needs content; keep hook order stable while locked
const EMPTY: GateContent = {
  version: 0,
  course: '',
  builtFor: '',
  midterm: { date: null, label: '', scope: '' },
  labTitle: '',
  labBlurb: '',
  docs: {},
  overview: { headline: '', points: [] },
  exams: [],
  subjects: [],
  topics: [],
  questions: [],
  clusters: [],
  formulas: [],
  videoStops: [],
  plan: { intro: '', phases: [] }
};
const useGateIndexMaybe = (c: GateContent | null) => {
  const idx = useGateIndex(c ?? EMPTY);
  return c ? idx : null;
};

const QuestionDrawer: React.FC<{ content: GateContent; idx: ReturnType<typeof useGateIndex>; id: string; nav: GateNav; onClose: () => void }> = ({ idx, id, nav, onClose }) => {
  const q = idx.q.get(id);
  if (!q) return null;
  const clusters = idx.clustersOfQ.get(id) ?? [];
  return (
    <div className="mg-drawer-backdrop" onClick={onClose}>
      <aside className="mg-drawer" role="dialog" aria-modal="true" aria-label="Exam question" onClick={(e) => e.stopPropagation()}>
        <div className="mg-drawer-head">
          <strong style={{ fontSize: 15, color: 'var(--text-primary)' }}>{idx.exam.get(q.exam)?.label}</strong>
          <button type="button" className="mg-btn small" onClick={onClose} aria-label="Close">
            <X size={14} />
          </button>
        </div>
        <QuestionCard q={q} idx={idx} nav={nav} hideAnswer showTopic />
        {clusters.map((c) => (
          <div key={c.id} className="mg-callout">
            <b>Repeats in this group</b>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              <MathText text={c.title} />
            </div>
            <MatchBadge match={c.match} />
            <div style={{ marginTop: 8 }}>
              <MathText text={c.changes} />
            </div>
            <div className="dr-actions">
              <button type="button" className="mg-btn small" onClick={() => nav.startDrill({ scope: 'cluster', id: c.id }, 'This repeat group')}>
                Drill this group
              </button>
              <button type="button" className="mg-btn small" onClick={() => nav.showTopic(c.topic)}>
                <Repeat size={12} /> Open in the analyzer
              </button>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default MidtermGate;
