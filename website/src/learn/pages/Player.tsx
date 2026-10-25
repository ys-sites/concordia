import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronDown, Circle, ListTree, NotebookPen, Sparkles, FolderOpen, Info, MessageSquareWarning, ThumbsDown, ThumbsUp, X } from 'lucide-react';
import type { CourseId } from '../../types';
import type { Curriculum, Lesson, Section, Step } from '../model';
import { COURSE_BY_ID, courseClass } from '../courses';
import { courseProgress, findLesson, fmtMinutes, isDone, lessonProgress, useCurriculum } from '../data';
import { href, navigate } from '../router';
import { markStep, setPlace, updateProgress, useProgress } from '../progress/store';
import { StepIcon, KIND_LABEL } from '../components/StepIcon';
import { BrandMark } from '../../components/BrandMark';
import { AskAiButton } from '../components/AskAi';
import { openDoc } from '../docBus';
import { QuizRunner } from '../quiz/QuizRunner';
import { ExtraStep, LessonReferences, NotesStep, ReadingStep, ToolStep, VideoStep, WorkedStep } from '../player/StepViews';
import { trackStudy, trackStudyOnce } from '../analytics';
import '../styles/player.css';

// The course player: the step on the stage, the curriculum in a sidebar (a drawer on phones), and the lesson's
// overview, personal notes, AI help and resources underneath. Steps run in teaching order across lessons and
// sections; Next marks reading steps complete, videos complete at 90 % watched, quizzes when finished.
const MANUAL: Step['kind'][] = ['notes', 'reading', 'worked', 'tool', 'extra'];

const Sidebar: React.FC<{ cur: Curriculum; lessonId: string; stepId: string; done: Record<string, number>; examPrep: boolean; onPick: () => void }> = ({ cur, lessonId, stepId, done, examPrep, onPick }) => {
  const sections = cur.sections.filter((section) => Boolean(section.examPrep) === examPrep);
  const currentSection = cur.sections.find((s) => s.lessons.some((l) => l.id === lessonId))?.id;
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(currentSection ? [currentSection] : []));
  const [openLessons, setOpenLessons] = useState<Set<string>>(() => new Set([lessonId]));
  useEffect(() => {
    if (currentSection) setOpenSections((o) => new Set(o).add(currentSection));
    setOpenLessons((o) => new Set(o).add(lessonId));
    // bring the current step into view inside the sidebar only (scrollIntoView would also move the page)
    requestAnimationFrame(() => {
      const side = document.querySelector<HTMLElement>('.lx-pside');
      const el = side?.querySelector<HTMLElement>('.lx-side-step.is-current');
      if (!side || !el) return;
      const top = el.getBoundingClientRect().top - side.getBoundingClientRect().top + side.scrollTop;
      if (top < side.scrollTop + 60 || top > side.scrollTop + side.clientHeight - el.offsetHeight) side.scrollTop = Math.max(0, top - side.clientHeight / 3);
    });
  }, [lessonId, currentSection]);
  const toggle = (set: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) =>
    set((o) => {
      const n = new Set(o);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  return (
    <nav className="lx-side-list" aria-label={examPrep ? 'Midterm preparation' : 'Course content'}>
      {sections.map((s: Section, si) => {
        const done_ = s.lessons.filter((l) => lessonProgress(cur.id, l, done).complete).length;
        const open = openSections.has(s.id);
        return (
          <div key={s.id} className={`lx-side-sec${open ? ' is-open' : ''}`}>
            <button type="button" className="lx-side-sec-head" aria-expanded={open} onClick={() => toggle(setOpenSections, s.id)}>
              <span>
                <strong>
                  {examPrep ? '' : `Section ${si + 1}: `}
                  {s.title}
                </strong>
                <span className="lx-meta lx-num">
                  {done_} / {s.lessons.length} · {fmtMinutes(s.lessons.reduce((n, l) => n + l.minutes, 0))}
                </span>
              </span>
              <ChevronDown size={18} aria-hidden className="lx-acc-chev" />
            </button>
            {open && (
              <ul>
                {s.lessons.map((l: Lesson) => {
                  const lp = lessonProgress(cur.id, l, done);
                  const lopen = openLessons.has(l.id);
                  return (
                    <li key={l.id} className={`lx-side-lesson${l.id === lessonId ? ' is-current' : ''}`}>
                      <button type="button" className="lx-side-lesson-head" aria-expanded={lopen} onClick={() => toggle(setOpenLessons, l.id)}>
                        <span className={`lx-lesson-state${lp.complete ? ' is-done' : lp.started ? ' is-started' : ''}`} aria-hidden>
                          {lp.complete ? <Check size={12} strokeWidth={3} /> : null}
                        </span>
                        <span className="lx-side-lesson-title">{l.title}</span>
                        <span className="lx-meta lx-num">{fmtMinutes(l.minutes)}</span>
                      </button>
                      {lopen && (
                        <ul>
                          {l.steps.map((st) => {
                            const d = isDone(done, cur.id, st);
                            return (
                              <li key={st.id}>
                                <a
                                  className={`lx-side-step${st.id === stepId ? ' is-current' : ''}${d ? ' is-done' : ''}`}
                                  href={href({ name: 'learn', course: cur.id, lesson: l.id, step: st.id })}
                                  aria-current={st.id === stepId ? 'step' : undefined}
                                  onClick={onPick}
                                >
                                  <span className="lx-side-check" aria-label={d ? 'completed' : 'not completed'}>
                                    {d ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                                  </span>
                                  <span className="lx-side-step-text">
                                    <span>{st.title}</span>
                                    <span className="lx-meta">
                                      <StepIcon step={st} size={13} /> {st.optional ? 'Optional · ' : ''}
                                      {st.minutes} min
                                    </span>
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
};

const NotesTab: React.FC<{ course: CourseId; lessonId: string }> = ({ course, lessonId }) => {
  const key = `${course}/${lessonId}`;
  const saved = useProgress((s) => s.notes[key] ?? '');
  const [text, setText] = useState(saved);
  useEffect(() => setText(saved), [key]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (text === saved) return;
    const t = setTimeout(() => updateProgress((s) => void (s.notes[key] = text)), 500);
    return () => clearTimeout(t);
  }, [text, saved, key]);
  return (
    <div className="lx-pnotes">
      <label htmlFor="lx-note" className="lx-meta">
        Your notes for this lesson, saved in this browser as you type. Export them all from My learning.
      </label>
      <textarea id="lx-note" className="lx-input" rows={8} value={text} onChange={(e) => setText(e.target.value)} placeholder="What clicked, what to revisit, a formula to remember…" />
    </div>
  );
};

export const Player: React.FC<{ course: CourseId; lessonId: string; stepId?: string }> = ({ course, lessonId, stepId }) => {
  const cur = useCurriculum(course);
  const done = useProgress((s) => s.steps);
  const [drawer, setDrawer] = useState(false);
  const [tab, setTab] = useState<'overview' | 'notes' | 'ai' | 'resources'>('overview');
  const [upNext, setUpNext] = useState(false);
  const [helpful, setHelpful] = useState<'yes' | 'no' | null>(null);
  const c = COURSE_BY_ID[course];

  const found = cur ? findLesson(cur, lessonId) : null;
  const step = found ? found.lesson.steps.find((s) => s.id === stepId) ?? found.lesson.steps.find((s) => !s.optional && !done[`${course}/${s.id}`]) ?? found.lesson.steps[0] : null;
  const isExamPrep = Boolean(found?.section.examPrep);
  const all = cur
    ? cur.sections
      .filter((section) => Boolean(section.examPrep) === isExamPrep)
      .flatMap((section) => section.lessons.flatMap((lesson) => lesson.steps.map((currentStep) => ({ lesson, step: currentStep }))))
    : [];
  const at = step ? all.findIndex((x) => x.step.id === step.id) : -1;
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;
  const prog = useMemo(() => (cur ? courseProgress(cur, done) : null), [cur, done]);

  // unknown lesson: back to the course page; no step in the address: show the step being resumed
  useEffect(() => {
    if (cur && !found) navigate({ name: 'course', course, tab: 'overview' }, { replace: true });
    else if (found && step && step.id !== stepId) navigate({ name: 'learn', course, lesson: lessonId, step: step.id }, { replace: true });
  }, [cur, found, step, stepId, course, lessonId]);

  useEffect(() => {
    if (!found || !step) return;
    setPlace({ course, lessonId, stepId: step.id, title: step.title, lessonTitle: found.lesson.title });
    setUpNext(false);
    setHelpful(null);
    trackStudyOnce(`lesson:${course}:${lessonId}`, 'lesson_start', { course, lesson: lessonId });
    document.title = `${step.title} · ${found.lesson.title} · ${c.code}`;
    return () => {
      document.title = 'Concordia Engineering Hub';
    };
  }, [course, lessonId, step?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const goNext = useCallback(() => {
    if (step && MANUAL.includes(step.kind)) markStep(course, step.id);
    if (step) {
      if (MANUAL.includes(step.kind)) trackStudyOnce(`complete:${course}:${step.id}`, 'step_complete', { course, lesson: lessonId, step: step.id, kind: step.kind });
      trackStudy('next_clicked', { course, lesson: lessonId, step: step.id, has_next: !!next });
    }
    if (next) navigate({ name: 'learn', course, lesson: next.lesson.id, step: next.step.id });
    else navigate({ name: 'course', course, tab: 'overview' });
  }, [step, next, course]);
  const goPrev = useCallback(() => prev && navigate({ name: 'learn', course, lesson: prev.lesson.id, step: prev.step.id }), [prev, course]);

  // ← → move between steps (outside of fields and quizzes in progress)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select, [contenteditable], .ec-video-container') || e.metaKey || e.ctrlKey || e.altKey) return;
      if (step && (step.kind === 'check' || step.kind === 'practice' || step.kind === 'exam')) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, step]);

  if (!cur || !found || !step) return <div className="lx-player-loading" aria-busy="true" />;
  const { lesson, section } = found;
  const contentLabel = isExamPrep ? 'Midterm preparation' : 'Course content';
  const stepDone = isDone(done, course, step);
  const quiz = step.kind === 'check' || step.kind === 'practice' || step.kind === 'exam';
  const lessonDocs = [...new Map([...lesson.steps.flatMap((s) => s.docs ?? []), ...(lesson.resources ?? [])].map((d) => [d.path + (d.page ?? ''), d])).values()];

  return (
    <div className={`lx-player ${courseClass(course)}`}>
      <header className="lx-ptop">
        <a className="lx-ptop-brand" href={href({ name: 'course', course, tab: 'overview' })} aria-label={`Back to ${c.code}`}>
          <BrandMark size={30} />
        </a>
        <div className="lx-ptop-title">
          <a href={href({ name: 'course', course, tab: 'overview' })}>
            {c.code} · {c.short}
          </a>
          <strong>{lesson.title}</strong>
        </div>
        {prog && (
          <div className="lx-ptop-prog" title={`${prog.done} of ${prog.total} steps complete`}>
            <span className="lx-ring" style={{ ['--p' as string]: prog.pct, ['--size' as string]: '36px' }}>
              <span>{prog.pct}%</span>
            </span>
            <span className="lx-ptop-prog-text">Your progress</span>
          </div>
        )}
        <button type="button" className="lx-ptop-content" onClick={() => setDrawer(true)}>
          <ListTree size={18} /> <span>{contentLabel}</span>
        </button>
        <a className="lx-ptop-close" href="#/" aria-label="Close the player">
          <X size={20} />
        </a>
      </header>

      <div className="lx-pbody">
        <main className="lx-pmain">
          <div className={`lx-stage${step.kind === 'video' ? ' is-video' : ''}`}>
            <div className="lx-stage-inner">
              {step.kind === 'video' && (
                <VideoStep
                  course={course}
                  step={step}
                  onOpenNotes={() => setTab('overview')}
                  onWatched={() => {
                    markStep(course, step.id);
                    trackStudyOnce(`complete:${course}:${step.id}`, 'step_complete', { course, lesson: lesson.id, step: step.id, kind: step.kind });
                  }}
                  onEnded={() => {
                    markStep(course, step.id);
                    trackStudyOnce(`complete:${course}:${step.id}`, 'step_complete', { course, lesson: lesson.id, step: step.id, kind: step.kind });
                    setUpNext(true);
                  }}
                />
              )}
              {step.kind === 'notes' && <NotesStep course={course} step={step} />}
              {step.kind === 'worked' && <WorkedStep course={course} step={step} />}
              {step.kind === 'reading' && <ReadingStep step={step} />}
              {step.kind === 'extra' && <ExtraStep step={step} />}
              {step.kind === 'tool' && <ToolStep course={course} step={step} />}
              {quiz && (
                <QuizRunner
                  key={step.id}
                  course={course}
                  lesson={lesson}
                  step={step}
                  onFinished={() => {
                    markStep(course, step.id);
                    trackStudyOnce(`complete:${course}:${step.id}`, 'step_complete', { course, lesson: lesson.id, step: step.id, kind: step.kind });
                  }}
                  onContinue={goNext}
                  continueLabel={next ? `Next: ${next.step.title}` : 'Back to the course'}
                />
              )}
            </div>
          </div>

          <div className="lx-pbar">
            <div className="lx-pbar-title">
              <span className="lx-meta">
                <StepIcon step={step} size={14} /> {step.kind === 'extra' && !step.optional ? 'Video' : KIND_LABEL[step.kind]} · {step.minutes} min · step {lesson.steps.indexOf(step) + 1} of {lesson.steps.length} in this lesson
              </span>
              <h1 className="lx-h2">{step.title}</h1>
            </div>
            <div className="lx-pbar-actions">
              {!quiz && step.kind !== 'video' && (
                <button type="button" className={`lx-btn lx-btn--sm${stepDone ? ' is-done' : ''}`} aria-pressed={stepDone} onClick={() => {
                  markStep(course, step.id, !stepDone);
                  if (!stepDone) trackStudyOnce(`complete:${course}:${step.id}`, 'step_complete', { course, lesson: lesson.id, step: step.id, kind: step.kind });
                }}>
                  {stepDone ? <CheckCircle2 size={16} /> : <Circle size={16} />} {stepDone ? 'Completed' : 'Mark as complete'}
                </button>
              )}
              {step.kind === 'video' && stepDone && (
                <span className="lx-chip lx-chip--good">
                  <CheckCircle2 size={14} /> Watched
                </span>
              )}
              <button type="button" className="lx-btn lx-btn--sm" onClick={goPrev} disabled={!prev} aria-label="Previous step">
                <ArrowLeft size={16} />
                <span className="lx-hide-sm">Previous</span>
              </button>
              <button type="button" className="lx-btn lx-btn--primary lx-btn--sm" onClick={goNext}>
                <span className="lx-hide-sm">{next ? 'Next' : 'Finish'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {upNext && next && (
            <div className="lx-upnext" role="status">
              <span>
                <span className="lx-meta">Up next</span>
                <strong>{next.step.title}</strong>
              </span>
              <button type="button" className="lx-btn lx-btn--accent" onClick={goNext}>
                Continue <ArrowRight size={16} />
              </button>
              <button type="button" className="lx-icon-btn" onClick={() => setUpNext(false)} aria-label="Dismiss">
                <X size={16} />
              </button>
            </div>
          )}

          {(step.kind === 'video' || step.kind === 'extra') && <LessonReferences course={course} step={step} />}

          {/* Checks, practice and worked answers stay inside the lesson frame so the course sequence and files are
              available exactly where the student needs them. */}
          <>
          <section className="lx-step-feedback" aria-label="Step feedback">
            <span>
              <strong>Was this step helpful?</strong>
              <small>Your feedback helps improve this exact lesson.</small>
            </span>
            <div className="lx-step-feedback-actions">
              <button type="button" className={`lx-btn lx-btn--sm${helpful === 'yes' ? ' is-done' : ''}`} aria-pressed={helpful === 'yes'} onClick={() => {
                setHelpful('yes');
                trackStudy('helpful_yes', { course, lesson: lesson.id, step: step.id, kind: step.kind });
              }}><ThumbsUp size={15} aria-hidden /> Yes</button>
              <button type="button" className={`lx-btn lx-btn--sm${helpful === 'no' ? ' is-done' : ''}`} aria-pressed={helpful === 'no'} onClick={() => {
                setHelpful('no');
                trackStudy('helpful_no', { course, lesson: lesson.id, step: step.id, kind: step.kind });
              }}><ThumbsDown size={15} aria-hidden /> Not yet</button>
              <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => {
                trackStudy('report_problem', { course, lesson: lesson.id, step: step.id, kind: step.kind });
                window.dispatchEvent(new CustomEvent('concordia:feedback', { detail: { subject: 'Practice Drill Feedback', message: `Problem in ${c.code} / ${lesson.title} / ${step.title}\nReference: ${course}/${step.id}\n\nWhat went wrong:\n` } }));
              }}><MessageSquareWarning size={15} aria-hidden /> Report a problem</button>
            </div>
          </section>

          <div className="lx-tabs lx-ptabs" role="tablist" aria-label="Lesson">
            {(
              [
                ['overview', 'Overview', Info],
                ['notes', 'My notes', NotebookPen],
                ['ai', 'Ask AI', Sparkles],
                ['resources', `Resources${lessonDocs.length ? ` (${lessonDocs.length})` : ''}`, FolderOpen]
              ] as const
            ).map(([id, label, Icon]) => (
              <button key={id} type="button" role="tab" className="lx-tab" aria-selected={tab === id} onClick={() => setTab(id)}>
                <Icon size={15} aria-hidden /> {label}
              </button>
            ))}
          </div>
          <div className="lx-ptab-panel" role="tabpanel">
            {tab === 'overview' && (
              <div className="lx-pover">
                <p className="lx-meta">
                  {section.title} · {section.subtitle}
                </p>
                <h2 className="lx-h2">{lesson.title}</h2>
                <p className="lx-lead">{lesson.summary}</p>
                {lesson.objectives.length > 0 && (
                  <>
                    <h3 className="lx-h3">In this lesson</h3>
                    <ul className="lx-pover-obj">
                      {lesson.objectives.map((o) => (
                        <li key={o}>
                          <CheckCircle2 size={16} aria-hidden /> {o}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <h3 className="lx-h3">The steps</h3>
                <ol className="lx-pover-steps">
                  {lesson.steps.map((s) => (
                    <li key={s.id} className={s.id === step.id ? 'is-current' : ''}>
                      <a href={href({ name: 'learn', course, lesson: lesson.id, step: s.id })}>
                        <StepIcon step={s} />
                        <span>{s.title}</span>
                        <span className="lx-meta">
                          {s.optional ? 'optional · ' : ''}
                          {s.minutes} min
                        </span>
                        {isDone(done, course, s) && <CheckCircle2 size={16} className="lx-ok" aria-label="completed" />}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {tab === 'notes' && <NotesTab course={course} lessonId={lesson.id} />}
            {tab === 'ai' && (
              <div className="lx-pai">
                <p className="lx-lead">Stuck on {lesson.title.toLowerCase()}? Ask an AI tutor to explain it another way, with the lesson’s context already filled in.</p>
                <AskAiButton
                  label={`Ask about “${lesson.title}”`}
                  className="lx-btn lx-btn--primary"
                  ctx={{ course: `${c.code} · ${c.title}`, topic: `${lesson.title} (${section.title})`, question: `Teach me ${lesson.title}. ${lesson.summary}`, steps: lesson.objectives }}
                />
              </div>
            )}
            {tab === 'resources' &&
              (lessonDocs.length ? (
                <ul className="lx-file-list">
                  {lessonDocs.map((d) => (
                    <li key={d.path + (d.page ?? '')} className="lx-file">
                      <button type="button" className="lx-file-main" onClick={() => openDoc(d)}>
                        <FolderOpen size={18} aria-hidden />
                        <span className="lx-file-text">
                          <span className="lx-file-title">{d.label ?? d.title}</span>
                          <span className="lx-meta">
                            {d.label ? d.title : ''}
                            {d.page ? ` · page ${d.page}` : ''}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="lx-empty">No extra documents for this lesson. The course’s full library is in the Resources tab of the course page.</p>
              ))}
          </div>
          </>
        </main>

        <aside className={`lx-pside${drawer ? ' is-open' : ''}`} aria-label={contentLabel}>
          <div className="lx-pside-head">
            <strong>{contentLabel}</strong>
            <button type="button" className="lx-icon-btn lx-pside-close" onClick={() => setDrawer(false)} aria-label={`Close ${contentLabel.toLowerCase()}`}>
              <X size={20} />
            </button>
          </div>
          <Sidebar cur={cur} lessonId={lesson.id} stepId={step.id} done={done} examPrep={isExamPrep} onPick={() => setDrawer(false)} />
        </aside>
        {drawer && <div className="lx-pside-scrim" onClick={() => setDrawer(false)} aria-hidden />}
      </div>
    </div>
  );
};

export default Player;
