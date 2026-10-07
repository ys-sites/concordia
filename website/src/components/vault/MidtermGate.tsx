import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, CalendarClock, ChevronRight, FileLock2, FileText, KeyRound, Loader2, Lock, Repeat, Sigma, Video, X } from 'lucide-react';
import type { CourseWithDocs } from '../../data/coursesData';
import type { CourseDocument } from '../../types';
import { audio } from '../../utils/audio';
import { MathText } from '../../utils/mathRenderer';
import type { GateContent, GateDoc, GateNav, LectureRef } from './vaultTypes';
import { lockGate, resumeGate, unlockGate } from './vaultCrypto';
import { MatchBadge, QuestionCard, useGateIndex } from './shared';
import { PatternAnalyzer } from './PatternAnalyzer';
import { FormulaLab } from './FormulaLab';
import { VideoPath } from './VideoPath';
import './midtermGate.css';

const DOC_KEY = 'miae221_gate_doc';

const DOCS: { id: GateDoc; title: string; sub: string; icon: React.ReactNode }[] = [
  {
    id: 'analyzer',
    title: 'Midterm Pattern Analyzer',
    sub: 'Which questions repeat across the past midterms, what changed each time, and what in the teacher’s notes to study for each.',
    icon: <Repeat size={20} />
  },
  {
    id: 'formulas',
    title: 'Formula Lab',
    sub: 'Every calculation for the midterm as a live calculator, loaded with real exam numbers and mapped to slides and Callister examples.',
    icon: <Sigma size={20} />
  },
  {
    id: 'videos',
    title: 'Video Revision Path',
    sub: 'One stop per topic: a specific video to learn it, a worked example, what to watch for, and the exam questions to do next.',
    icon: <Video size={20} />
  }
];

interface Props {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
}

const daysUntil = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const target = new Date(y, m - 1, d).getTime();
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((target - today) / 86400000);
};

export const MidtermGate: React.FC<Props> = ({ course, onViewPdf }) => {
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
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [drawerQ, setDrawerQ] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    resumeGate().then((c) => {
      if (!alive) return;
      setContent(c);
      setChecking(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    try {
      if (doc) sessionStorage.setItem(DOC_KEY, doc);
      else sessionStorage.removeItem(DOC_KEY);
    } catch {
      // ignore
    }
  }, [doc]);

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
    const c = await unlockGate(password).catch(() => null);
    setBusy(false);
    if (c) {
      audio.playCorrect();
      setContent(c);
      setPassword('');
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

  const openDoc = (d: GateDoc | null) => {
    audio.playClick();
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    setDoc(d);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const findLecture = (l: number) => course.documents.find((d) => new RegExp(`^lecture ${l}-`, 'i').test(d.filename));
  const nav: GateNav = useMemo(
    () => ({
      openQuestion: (id) => setDrawerQ(id),
      openFormula: (id) => {
        setDrawerQ(null);
        setFocusFormula(id);
        setDoc('formulas');
        topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
      openTopicVideos: (topic) => {
        setDrawerQ(null);
        setDoc('videos');
        setFocusTopic(null);
        setTimeout(() => setFocusTopic(topic), 50);
      },
      openLecture: (r: LectureRef) => {
        const d = findLecture(r.l);
        if (d) onViewPdf(d, r.s);
      },
      openGuide: (part: string) => {
        const d = course.documents.find((x) => /Comprehensive Topic Guides/i.test(x.relativePath) && x.filename.startsWith(`${part} - `));
        if (d) onViewPdf(d);
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [course, onViewPdf]
  );

  const days = content ? daysUntil(content.midtermDate) : null;

  return (
    <div className="mg-root" ref={topRef} style={{ scrollMarginTop: 90 }}>
      {/* Folder header */}
      <section className="fx-panel">
        <div className="mg-panel-pad">
          <div className="mg-gate-head">
            <div className="mg-gate-title">
              <span className="mg-icon-tile">{content ? <FileText size={20} /> : <FileLock2 size={20} />}</span>
              <div>
                <h2>Midterm Gate</h2>
                <p>MIAE 221 · hidden folder · 3 documents</p>
              </div>
            </div>
            <div className="mg-head-actions">
              {days !== null && days >= 0 && (
                <span className="mg-countdown">
                  <CalendarClock size={14} />
                  {days === 0 ? 'Midterm today' : `${days} day${days === 1 ? '' : 's'} to the midterm`} · Fri Oct 30
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
                <button type="button" className="mg-doc-row" onClick={() => openDoc(d.id)}>
                  <span className="mg-doc-num">0{i + 1}</span>
                  <span className="mg-icon-tile" style={{ width: 40, height: 40 }}>
                    {content ? d.icon : <Lock size={18} />}
                  </span>
                  <span>
                    <span className="mg-doc-title">{d.title}</span>
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

        {content && !doc && (
          <div className="mg-loop">
            <b style={{ color: 'var(--text-primary)' }}>How to use this before Oct 30:</b>
            <ol>
              <li>
                <b>Pattern Analyzer:</b> start with the “Very likely” clusters. These questions came back on paper after paper.
              </li>
              <li>
                <b>Video Revision Path:</b> for any cluster you can’t answer cold, watch that topic’s stop and do the listed questions.
              </li>
              <li>
                <b>Formula Lab:</b> load each calculation preset, solve on paper first, then check. Change one number and solve again; the next
                exam will change it too.
              </li>
              <li>Last 48 h: Analyzer in self-test mode (answers hidden) for all T/F clusters.</li>
            </ol>
          </div>
        )}
      </section>

      {/* Lock screen */}
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

      {/* Open document */}
      {content && doc && (
        <GateDocument
          content={content}
          doc={doc}
          setDoc={openDoc}
          nav={nav}
          focusFormula={focusFormula}
          focusTopic={focusTopic}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
        />
      )}

      {content && drawerQ && <QuestionDrawer content={content} id={drawerQ} nav={nav} onClose={() => setDrawerQ(null)} onShowCluster={(topic) => {
        setDrawerQ(null);
        setTopicFilter(topic);
        setDoc('analyzer');
      }} />}
    </div>
  );
};

const GateDocument: React.FC<{
  content: GateContent;
  doc: GateDoc;
  setDoc: (d: GateDoc | null) => void;
  nav: GateNav;
  focusFormula: string | null;
  focusTopic: string | null;
  topicFilter: string | null;
  setTopicFilter: (t: string | null) => void;
}> = ({ content, doc, setDoc, nav, focusFormula, focusTopic, topicFilter, setTopicFilter }) => {
  const idx = useGateIndex(content);
  return (
    <>
      <div className="mg-gate-head">
        <button type="button" className="mg-btn" onClick={() => setDoc(null)}>
          <ArrowLeft size={14} /> Folder
        </button>
        <div className="mg-tabs" role="tablist">
          {DOCS.map((d, i) => (
            <button key={d.id} type="button" role="tab" aria-selected={doc === d.id} className={`mg-tab ${doc === d.id ? 'active' : ''}`} onClick={() => setDoc(d.id)}>
              {d.icon}
              <span>
                0{i + 1} {d.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      {doc === 'analyzer' && <PatternAnalyzer content={content} idx={idx} nav={nav} topicFilter={topicFilter} setTopicFilter={setTopicFilter} />}
      {doc === 'formulas' && <FormulaLab content={content} idx={idx} nav={nav} focusFormula={focusFormula} />}
      {doc === 'videos' && <VideoPath content={content} idx={idx} nav={nav} focusTopic={focusTopic} />}
    </>
  );
};

const QuestionDrawer: React.FC<{
  content: GateContent;
  id: string;
  nav: GateNav;
  onClose: () => void;
  onShowCluster: (topic: string) => void;
}> = ({ content, id, nav, onClose, onShowCluster }) => {
  const idx = useGateIndex(content);
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
            <b>Part of a repeat cluster</b>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              <MathText text={c.title} />
            </div>
            <MatchBadge match={c.match} />
            <div style={{ marginTop: 8 }}>
              <MathText text={c.changes} />
            </div>
            <button type="button" className="mg-btn small" style={{ marginTop: 8 }} onClick={() => onShowCluster(c.topic)}>
              <Repeat size={12} /> Open in the Pattern Analyzer
            </button>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default MidtermGate;
