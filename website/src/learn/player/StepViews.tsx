import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronRight, ExternalLink, FileText, Lightbulb, ListOrdered, Maximize2, PlayCircle, Sparkles, Target, Youtube } from 'lucide-react';
import type { CourseId } from '../../types';
import type { DocRef, Step } from '../model';
import type { Formula, GateContent } from '../../data/gates/types';
import { loadGate } from '../../data/gates';
import { examLabel } from '../examLabel';
import { resolveVideo, MotionLesson } from '../videoSources';
import { MotionLessonPlayer } from '../../components/MotionLessonPlayer';
import { ReadAloudButton } from '../../components/ReadAloudButton';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { getPdfUrl } from '../../utils/pdfUrl';
import { CodeBlock } from '../components/CodeBlock';
import { openDoc } from '../docBus';
import { saveVideoPosition, useProgress } from '../progress/store';
import { trackStudyOnce } from '../analytics';

const PdfCanvasViewer = lazy(() => import('../../components/PdfCanvasViewer'));
const FormulaTool = lazy(() => import('../tools/FormulaTool'));
const CppCodeLab = lazy(() => import('../../components/CppCodeLab'));
const TspSimulator = lazy(() => import('../../components/TspFactorialSimulator').then((m) => ({ default: m.TspFactorialSimulator })));

export function useGate(course: CourseId): GateContent | null {
  const [g, setG] = useState<GateContent | null>(null);
  useEffect(() => {
    let alive = true;
    loadGate(course).then((x) => alive && setG(x));
    return () => {
      alive = false;
    };
  }, [course]);
  return g;
}

const Loading: React.FC<{ label?: string }> = ({ label = 'Loading…' }) => (
  <div className="lx-quiz-loading" aria-busy="true">
    <span className="lx-spinner" /> {label}
  </div>
);

// ── video ────────────────────────────────────────────────────────────────────────
export const VideoStep: React.FC<{ course: CourseId; step: Step; onWatched: () => void; onEnded: () => void; onOpenNotes?: () => void }> = ({ course, step, onWatched, onEnded, onOpenNotes }) => {
  const [lesson, setLesson] = useState<MotionLesson | null>(null);
  const pos = useProgress((s) => s.videos[step.videoId!]);
  useEffect(() => {
    let alive = true;
    setLesson(null);
    resolveVideo(step.videoId!).then((l) => alive && setLesson(l));
    return () => {
      alive = false;
    };
  }, [step.videoId]);
  if (!lesson) return <div className="lx-video-skeleton" aria-busy="true" />;
  return (
    <MotionLessonPlayer
      key={step.videoId}
      lesson={lesson}
      bare
      startAt={pos && pos.t < pos.d - 5 ? pos.t : undefined}
      onProgress={(t, d) => {
        saveVideoPosition(step.videoId!, t, d);
        if (d > 0) {
          const pct = (t / d) * 100;
          for (const milestone of [25, 50, 75] as const)
            if (pct >= milestone) trackStudyOnce(`video:${step.videoId}:${milestone}`, 'video_progress', { course, step: step.id, milestone });
        }
        if (d && t / d >= 0.9) onWatched();
      }}
      onEnded={() => {
        trackStudyOnce(`video:${step.videoId}:100`, 'video_progress', { course, step: step.id, milestone: 100 });
        onEnded();
      }}
      onFallback={onOpenNotes}
    />
  );
};

// ── read alongside the video ─────────────────────────────────────────────────────────
// Under a lesson's video: the teacher's slides at the right page, the guides and summaries, and the key notes,
// for going deeper after (or while) watching.
const DOC_KIND: [RegExp, string][] = [
  [/Teacher Lecture Notes/i, 'Teacher’s slides'],
  [/In-Class Lecture Notes/i, 'Class notes'],
  [/Explained|Topic Guides|Expanded Notes/i, 'Study guide'],
  [/Summary|Review Sheets|Overview/i, 'Summary'],
  [/Tutorial|Worked Problems|Practice Problems/i, 'Worked problems'],
  [/Textbook/i, 'Textbook'],
  [/Syllabus/i, 'Syllabus'],
  [/Professor|Mini Course|Calculus Review/i, 'Outside notes']
];
const docKind = (d: DocRef) => DOC_KIND.find(([re]) => re.test(d.path.split('/')[1] ?? ''))?.[1] ?? 'Course document';

const FormulaCards: React.FC<{ course: CourseId; ids: string[] }> = ({ course, ids }) => {
  const g = useGate(course);
  if (!g) return <Loading label="Loading the notes…" />;
  return (
    <div className="lx-notes">
      {ids.map((id) => g.formulas.find((f) => f.id === id)).map((f) => f && <FormulaNotes key={f.id} f={f} />)}
    </div>
  );
};

export const LessonReferences: React.FC<{ course: CourseId; step: Step }> = ({ course, step }) => {
  const docs = step.docs ?? [];
  const ids = step.formulaIds ?? [];
  if (!docs.length && !ids.length) return null;
  return (
    <section className="lx-refs" aria-labelledby="lx-refs-title">
      <header className="lx-refs-head">
        <h2 id="lx-refs-title" className="lx-h3">
          <BookOpen size={18} aria-hidden /> Read alongside this video
        </h2>
        <p className="lx-meta">The teacher’s slides at the right page and the guides for this lesson, to go deeper. The video keeps its place.</p>
      </header>
      {docs.length > 0 && (
        <ul className="lx-refs-grid">
          {docs.map((d, i) => (
            <li key={d.path + (d.page ?? '') + i}>
              <button type="button" className="lx-ref-card" onClick={() => openDoc(d)}>
                <FileText size={18} aria-hidden className="lx-ref-icon" />
                <span className="lx-ref-text">
                  <span className="lx-ref-kind">{docKind(d)}</span>
                  <strong>{d.label ?? d.title}</strong>
                  {(d.label || d.page) && (
                    <span className="lx-meta">
                      {d.label ? d.title : ''}
                      {d.label && d.page ? ' · ' : ''}
                      {d.page ? `page ${d.page}` : ''}
                    </span>
                  )}
                </span>
                <ExternalLink size={14} aria-hidden className="lx-ref-go" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {ids.length > 0 && (
        <details className="lx-refs-notes">
          <summary>
            <Lightbulb size={16} aria-hidden /> Key notes for this lesson
            <span className="lx-meta">
              {ids.length} card{ids.length > 1 ? 's' : ''}: the idea, when to use it, the recipe and the traps
            </span>
            <ChevronRight size={16} aria-hidden className="lx-refs-chev" />
          </summary>
          <FormulaCards course={course} ids={ids} />
        </details>
      )}
    </section>
  );
};

// ── key notes ────────────────────────────────────────────────────────────────────
const DocButtons: React.FC<{ docs: DocRef[] }> = ({ docs }) =>
  docs.length ? (
    <div className="lx-notes-docs">
      <h3 className="lx-h3">
        <BookOpen size={17} aria-hidden /> In the teacher’s slides
      </h3>
      <ul>
        {docs.map((d, i) => (
          <li key={d.path + i}>
            <button type="button" onClick={() => openDoc(d)}>
              <FileText size={16} aria-hidden />
              <span>
                <strong>{d.label ?? d.title}</strong>
                <span className="lx-meta">
                  {d.label ? d.title : ''}
                  {d.page ? ` · page ${d.page}` : ''}
                </span>
              </span>
              <ExternalLink size={14} aria-hidden className="lx-res-go" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

const FormulaNotes: React.FC<{ f: Formula }> = ({ f }) => {
  const speech = [f.name, f.learn?.idea, f.meaning, ...(f.learn?.when ?? []), ...f.steps, ...f.traps].filter(Boolean).join('. ');
  return (
    <section className="lx-notes-card">
      <header className="lx-notes-head">
        <h2 className="lx-h2">{f.name}</h2>
        <ReadAloudButton text={speech} stopKey={f.id} />
      </header>
      {f.learn?.idea && (
        <p className="lx-notes-idea">
          <Lightbulb size={18} aria-hidden />
          <MathText text={f.learn.idea} />
        </p>
      )}
      {f.tex && (
        <div className="lx-notes-formula">
          <MathBlock tex={f.tex} />
          <p className="lx-meta">
            <MathText text={f.meaning} />
          </p>
        </div>
      )}
      {f.vars && f.vars.length > 0 && (
        <table className="lx-vars">
          <tbody>
            {f.vars.map(([sym, what, unit]) => (
              <tr key={sym}>
                <th>
                  <MathText text={`$${sym}$`} />
                </th>
                <td>
                  <MathText text={what} />
                </td>
                <td className="lx-meta">{unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {f.learn?.when && f.learn.when.length > 0 && (
        <div className="lx-ex-block">
          <h3 className="lx-ex-title">
            <Target size={16} aria-hidden /> Use it when
          </h3>
          <ul className="lx-notes-list">
            {f.learn.when.map((w, i) => (
              <li key={i}>
                <MathText text={w} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {f.steps.length > 0 && (
        <div className="lx-ex-block">
          <h3 className="lx-ex-title">
            <ListOrdered size={16} aria-hidden /> The recipe
          </h3>
          <ol className="lx-ex-lines">
            {f.steps.map((s, i) => (
              <li key={i}>
                <MathText text={s} />
              </li>
            ))}
          </ol>
        </div>
      )}
      {f.traps.length > 0 && (
        <div className="lx-ex-trap lx-notes-traps">
          <AlertTriangle size={16} aria-hidden />
          <div>
            <strong>Traps</strong>
            <ul>
              {f.traps.map((t, i) => (
                <li key={i}>
                  <MathText text={t} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {f.seen.length > 0 && <p className="lx-meta">Asked on {f.seen.length} past exam question{f.seen.length > 1 ? 's' : ''}: you will meet them in this lesson’s past exam step.</p>}
    </section>
  );
};

export const NotesStep: React.FC<{ course: CourseId; step: Step }> = ({ course, step }) => {
  const g = useGate(course);
  if (!g) return <Loading label="Loading the notes…" />;
  if (step.notesKey) return <InsightNotes g={g} notesKey={step.notesKey} />;
  const fs = (step.formulaIds ?? []).map((id) => g.formulas.find((f) => f.id === id)).filter((f): f is Formula => !!f);
  const topic = g.topics.find((t) => fs[0]?.topic === t.id);
  return (
    <div className="lx-notes">
      {fs.map((f) => (
        <FormulaNotes key={f.id} f={f} />
      ))}
      {!fs.length && topic && <p className="lx-lead">{topic.name}: open the teacher’s slides below, then try the quick check.</p>}
      <DocButtons docs={step.docs ?? []} />
    </div>
  );
};

// exam-prep notes: how the exam is built, repeat patterns, the tutor's system, Dr. Gordon's papers
const InsightNotes: React.FC<{ g: GateContent; notesKey: string }> = ({ g, notesKey }) => {
  if (notesKey === 'overview')
    return (
      <div className="lx-notes">
        <section className="lx-notes-card">
          <h2 className="lx-h2">{g.overview.headline}</h2>
          <ul className="lx-notes-list">
            {g.overview.points.map((p, i) => (
              <li key={i}>
                <MathText text={p} />
              </li>
            ))}
          </ul>
          <p className="lx-meta">
            <strong>Midterm:</strong> {g.midterm.label}. {g.midterm.scope}
          </p>
        </section>
        <section className="lx-notes-card">
          <h3 className="lx-h3">The previous exams behind this course</h3>
          <ul className="lx-notes-list">
            {g.exams.map((e) => (
              <li key={e.id}>
                <strong>{examLabel(e.label)}</strong> · {e.count} questions
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  if (notesKey === 'clusters') {
    const order = { 'Very likely': 0, Likely: 1, Possible: 2 } as Record<string, number>;
    return (
      <div className="lx-notes">
        {[...g.clusters]
          .sort((a, b) => order[a.expect] - order[b.expect] || b.members.length - a.members.length)
          .map((c) => (
            <section key={c.id} className="lx-notes-card">
              <header className="lx-notes-head">
                <h3 className="lx-h3">{c.title}</h3>
                <span className={`lx-chip ${c.expect === 'Very likely' ? 'lx-chip--bad' : c.expect === 'Likely' ? 'lx-chip--warn' : ''}`}>{c.expect}</span>
                <span className="lx-chip">
                  {c.match === 'exact' ? 'Repeated word for word' : c.match === 'template' ? 'Same question, new numbers' : 'Same idea'} · {c.members.length} papers
                </span>
              </header>
              <p>
                <MathText text={c.changes} />
              </p>
              <p>
                <strong>Study: </strong>
                <MathText text={c.study} />
              </p>
              <p className="lx-ex-trap">
                <AlertTriangle size={16} aria-hidden />
                <span>
                  <MathText text={c.trap} />
                </span>
              </p>
            </section>
          ))}
      </div>
    );
  }
  if (notesKey === 'gradesaver' && g.gradesaver)
    return (
      <div className="lx-notes">
        <p className="lx-lead">
          <MathText text={g.gradesaver.intro} />
        </p>
        {g.gradesaver.tabs.map((t) => (
          <section key={t.label} className="lx-notes-card">
            <h3 className="lx-h3">{t.label}</h3>
            <p>
              <strong>The move: </strong>
              <MathText text={t.move} />
            </p>
            <p className="lx-meta">
              <MathText text={t.sequence} />
            </p>
            <div className="lx-notes-exemplar">
              <strong>{t.exemplar.title}</strong>
              {t.exemplar.lines.map((l, i) => (
                <p key={i}>
                  <MathText text={l} />
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  if (notesKey.startsWith('gordon:') && g.gordonExamsData) {
    const id = notesKey.slice(7);
    if (id === 'analytics') {
      const a = g.gordonExamsData.analytics;
      return (
        <div className="lx-notes">
          <section className="lx-notes-card">
            <h2 className="lx-h2">How Dr. Gordon’s midterms are weighted</h2>
            <p className="lx-lead lx-num">
              {a.weightDistribution.tracingPercentage}% tracing programs · {a.weightDistribution.codingPercentage}% writing programs
            </p>
            <ul className="lx-notes-list">
              {a.weightDistribution.rulesSummary.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>
          <section className="lx-notes-card">
            <h3 className="lx-h3">What comes up most</h3>
            <ul className="lx-notes-list">
              {a.topicFrequencies.map((t) => (
                <li key={t.topic}>
                  <strong>{t.topic}</strong> · {t.frequencyLabel}. {t.description} <em>{t.trapWarning}</em>
                </li>
              ))}
            </ul>
          </section>
          <section className="lx-notes-card">
            <h3 className="lx-h3">The traps that cost the most marks</h3>
            {a.topTraps.map((t) => (
              <div key={t.trapName} className="lx-notes-trap">
                <strong>
                  {t.trapName} <span className={`lx-chip ${t.severity === 'CRITICAL' ? 'lx-chip--bad' : 'lx-chip--warn'}`}>{t.severity.toLowerCase()}</span>
                </strong>
                <CodeBlock code={t.exampleSnippet} />
                <p>
                  <strong>What students do: </strong>
                  {t.whatStudentsDoWrong}
                </p>
                <p>
                  <strong>What really happens: </strong>
                  {t.correctBehavior}
                </p>
              </div>
            ))}
          </section>
          <section className="lx-notes-card">
            <h3 className="lx-h3">Strategy</h3>
            <ul className="lx-notes-list">
              {a.strategyTips.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>
        </div>
      );
    }
    if (id === 'matches' && g.gordonMatches) {
      const all = [...g.gordonMatches.identicalQuestions.map((m) => ({ ...m, kind: 'Asked again word for word' })), ...g.gordonMatches.similarQuestionsToReview.map((m) => ({ ...m, kind: 'Similar' }))];
      return (
        <div className="lx-notes">
          <p className="lx-lead">{g.gordonMatches.summary}</p>
          {all.map((m) => (
            <section key={m.id} className="lx-notes-card">
              <header className="lx-notes-head">
                <h3 className="lx-h3">{m.title}</h3>
                <span className="lx-chip lx-chip--warn">{m.kind}</span>
              </header>
              {m.gordonSource && <p className="lx-meta">{m.gordonSource}</p>}
              <CodeBlock code={m.codeSnippet} />
              <p>
                <strong>Output: </strong>
                <code className="lx-inline-code">{m.output}</code>
              </p>
              {m.explanation && <p>{m.explanation}</p>}
              {m.studyNote && <p className="lx-meta">{m.studyNote}</p>}
            </section>
          ))}
        </div>
      );
    }
    const p = g.gordonExamsData.papers.find((x) => x.id === id);
    if (p)
      return (
        <div className="lx-notes">
          <section className="lx-notes-card">
            <h2 className="lx-h2">{p.title}</h2>
            <p className="lx-meta">
              {p.term} · {p.officialWeight} · {p.format}
            </p>
            <p>{p.overview}</p>
            {p.officialNotes && (
              <ul className="lx-notes-list">
                {p.officialNotes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}
          </section>
          {p.similarQuestionsAnalysis && p.similarQuestionsAnalysis.length > 0 && (
            <section className="lx-notes-card">
              <h3 className="lx-h3">How it compares with other papers</h3>
              {p.similarQuestionsAnalysis.map((s, i) => (
                <p key={i}>
                  <strong>{s.currentQuestionPart}</strong> ↔ {s.similarGordonExam}: {s.whyItMatches} <em>{s.coreLesson}</em>
                </p>
              ))}
            </section>
          )}
        </div>
      );
  }
  return <p className="lx-empty">These notes are not available.</p>;
};

// ── worked example ───────────────────────────────────────────────────────────────
const Worked: React.FC<{ f: Formula }> = ({ f }) => {
  const ex = f.learn!.example;
  const [shown, setShown] = useState(1);
  const done = shown >= ex.steps.length;
  return (
    <section className="lx-notes-card">
      <header className="lx-notes-head">
        <h2 className="lx-h2">{ex.title}</h2>
        <ReadAloudButton text={[ex.given, ex.find, ...ex.steps.map((s) => s.say), ex.answer].join('. ')} stopKey={f.id + 'ex'} />
      </header>
      <dl className="lx-worked-given">
        <div>
          <dt>Given</dt>
          <dd>
            <MathText text={ex.given} />
          </dd>
        </div>
        <div>
          <dt>Find</dt>
          <dd>
            <MathText text={ex.find} />
          </dd>
        </div>
      </dl>
      {ex.code && <CodeBlock code={ex.code} />}
      <ol className="lx-ex-steps">
        {ex.steps.slice(0, shown).map((s, i) => (
          <li key={i} className="lx-fade-in">
            <MathText text={s.say} />
            {s.tex && <MathBlock tex={s.tex} className="lx-ex-math" />}
          </li>
        ))}
      </ol>
      {done ? (
        <div className="lx-ex-answer">
          <span className="lx-meta">Answer</span>
          <p>
            <MathText text={ex.answer} />
          </p>
        </div>
      ) : (
        <div className="lx-ex-more">
          <button type="button" className="lx-btn lx-btn--primary lx-btn--sm" onClick={() => setShown((n) => n + 1)}>
            Next step <ChevronRight size={15} />
          </button>
          <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => setShown(ex.steps.length)}>
            Show the whole solution
          </button>
          <span className="lx-meta lx-num">
            Step {shown} of {ex.steps.length}: try the next one yourself before you reveal it
          </span>
        </div>
      )}
    </section>
  );
};

export const WorkedStep: React.FC<{ course: CourseId; step: Step }> = ({ course, step }) => {
  const g = useGate(course);
  if (!g) return <Loading />;
  const fs = (step.formulaIds ?? []).map((id) => g.formulas.find((f) => f.id === id)).filter((f): f is Formula => !!f?.learn?.example);
  return (
    <div className="lx-notes">
      {fs.map((f) => (
        <Worked key={f.id} f={f} />
      ))}
    </div>
  );
};

// ── reading ──────────────────────────────────────────────────────────────────────
export const ReadingStep: React.FC<{ step: Step }> = ({ step }) => {
  const doc = step.docs?.[0];
  if (!doc) return <p className="lx-empty">No document.</p>;
  return (
    <div className="lx-reading">
      <div className="lx-reading-bar">
        <FileText size={18} aria-hidden />
        <strong>{doc.title}</strong>
        <button type="button" className="lx-btn lx-btn--sm" onClick={() => openDoc(doc)}>
          <Maximize2 size={14} /> Full screen
        </button>
        <a className="lx-btn lx-btn--sm lx-btn--ghost" href={getPdfUrl(doc.path)} target="_blank" rel="noreferrer">
          <ExternalLink size={14} /> New tab
        </a>
      </div>
      <div className="lx-reading-frame">
        <Suspense fallback={<Loading label="Opening the document…" />}>
          <PdfCanvasViewer url={getPdfUrl(doc.path)} title={doc.title} initialPage={doc.page} />
        </Suspense>
      </div>
    </div>
  );
};

// ── outside video ────────────────────────────────────────────────────────────────
export const ExtraStep: React.FC<{ step: Step }> = ({ step }) => {
  const v = step.youtube!;
  const [play, setPlay] = useState(false);
  const [showRefVideo, setShowRefVideo] = useState(false);
  const [refLesson, setRefLesson] = useState<MotionLesson | null>(null);

  useEffect(() => {
    let alive = true;
    if (v.refVideoId) {
      resolveVideo(v.refVideoId).then((l) => {
        if (alive) setRefLesson(l);
      });
    }
    return () => {
      alive = false;
    };
  }, [v.refVideoId]);

  return (
    <div className="lx-extra">
      <div className="lx-extra-frame">
        {play ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`} title={v.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <button type="button" className="lx-extra-poster" onClick={() => setPlay(true)} aria-label={`Play ${v.title}`}>
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
            <PlayCircle size={64} aria-hidden />
          </button>
        )}
      </div>
      <p className="lx-meta">
        <Youtube size={14} aria-hidden /> {v.channel} · {v.len}
        {step.optional ? ' · an outside explanation, optional' : ''}
      </p>
      {v.watch && v.watch.length > 0 && (
        <div className="lx-ex-block">
          <h3 className="lx-ex-title">
            <CheckCircle2 size={16} aria-hidden /> What to take from it
          </h3>
          <ul className="lx-notes-list">
            {v.watch.map((w, i) => (
              <li key={i}>
                <MathText text={w} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {v.refVideoId && refLesson && (
        <div className="lx-ref-video-card">
          <div className="lx-ref-video-header">
            <div className="lx-ref-video-info">
              <span className="lx-ref-badge">
                <Sparkles size={13} aria-hidden /> Course Lesson Video Reference
              </span>
              <h4 className="lx-ref-title">{refLesson.title}</h4>
              <p className="lx-ref-desc">Review the course animation and step-by-step lecture problem for this concept.</p>
            </div>
            <button
              type="button"
              className={`lx-btn lx-btn--sm ${showRefVideo ? 'lx-btn--ghost' : 'lx-btn--primary'}`}
              onClick={() => setShowRefVideo(!showRefVideo)}
            >
              {showRefVideo ? 'Hide Course Video' : 'Watch Course Video'}
            </button>
          </div>
          {showRefVideo && (
            <div className="lx-ref-video-player">
              <MotionLessonPlayer lesson={refLesson} bare />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ── tools ────────────────────────────────────────────────────────────────────────
export const ToolStep: React.FC<{ course: CourseId; step: Step }> = ({ course, step }) => {
  const g = useGate(course);
  const t = step.toolId ?? '';
  if (t.startsWith('formula:')) {
    if (!g) return <Loading />;
    const f = g.formulas.find((x) => x.id === t.slice(8));
    return <Suspense fallback={<Loading />}>{f ? <FormulaTool formula={f} /> : <p className="lx-empty">Tool not found.</p>}</Suspense>;
  }
  return (
    <Suspense fallback={<Loading label="Loading the tool…" />}>
      <div className="lx-tool-embed">{t.startsWith('cpp-lab') ? <CppCodeLab /> : t === 'tsp' ? <TspSimulator /> : <p className="lx-empty">Tool not found.</p>}</div>
    </Suspense>
  );
};
