import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Clapperboard,
  FileText,
  GraduationCap,
  HelpCircle,
  LibraryBig,
  ListTree,
  PlayCircle,
  Target,
  Timer,
  X
} from 'lucide-react';
import type { CourseId } from '../../types';
import type { Curriculum, Lesson, Section, VideoCard } from '../model';
import { COURSE_BY_ID, courseClass } from '../courses';
import { SUMMARY, courseProgress, fmtClock, fmtHours, fmtMinutes, lessonProgress, nextStep, useCurriculum } from '../data';
import { CourseTab, href, navigate } from '../router';
import { useProgress } from '../progress/store';
import { fmtDay, nextExam, useReminders } from '../reminders';
import { CourseCover } from '../components/CourseCover';
import { StepIcon } from '../components/StepIcon';
import { ResourceLibrary } from '../components/ResourceLibrary';
import { VideoLibrary } from '../components/VideoLibrary';
import { FormulaSheet, hasFormulaSheet } from '../components/FormulaSheet';
import { getVideoUrl } from '../../utils/pdfUrl';
import { Miae221ExamStatisticsCard } from '../../components/Miae221ExamStatisticsCard';
import { ExamPhotoModal } from '../../components/ExamPhotoModal';
import '../styles/course.css';

const lessonHref = (c: CourseId, l: Lesson, done: Record<string, number>) => {
  const open = l.steps.find((s) => !s.optional && !done[`${c}/${s.id}`]) ?? l.steps[0];
  return href({ name: 'learn', course: c, lesson: l.id, step: open?.id });
};

// ── the curriculum accordion ─────────────────────────────────────────────────────
const SectionBlock: React.FC<{ cur: Curriculum; section: Section; open: boolean; onToggle: () => void; done: Record<string, number> }> = ({ cur, section, open, onToggle, done }) => {
  const minutes = section.lessons.reduce((n, l) => n + l.minutes, 0);
  const complete = section.lessons.filter((l) => lessonProgress(cur.id, l, done).complete).length;
  return (
    <div className={`lx-acc${open ? ' is-open' : ''}`}>
      <h3>
        <button type="button" className="lx-acc-head" aria-expanded={open} onClick={onToggle}>
          <ChevronDown size={18} className="lx-acc-chev" aria-hidden />
          <span className="lx-acc-title">
            <strong>{section.title}</strong>
            <span className="lx-meta">{section.subtitle}</span>
          </span>
          <span className="lx-acc-meta lx-meta lx-num">
            {complete ? `${complete} / ` : ''}
            {section.lessons.length} lessons · {fmtMinutes(minutes)}
          </span>
        </button>
      </h3>
      {open && (
        <ul className="lx-acc-body">
          {section.lessons.map((l) => {
            const p = lessonProgress(cur.id, l, done);
            const counts = l.steps.reduce<Record<string, number>>((m, s) => ((m[s.kind] = (m[s.kind] ?? 0) + 1), m), {});
            const qs = l.steps.reduce((n, s) => n + (s.questionIds?.length ?? 0), 0);
            return (
              <li key={l.id}>
                <a className="lx-lesson-row" href={lessonHref(cur.id, l, done)}>
                  <span className={`lx-lesson-state${p.complete ? ' is-done' : p.started ? ' is-started' : ''}`} aria-hidden>
                    {p.complete ? <Check size={14} strokeWidth={3} /> : null}
                  </span>
                  <span className="lx-lesson-main">
                    <span className="lx-lesson-title">{l.title}</span>
                    <span className="lx-lesson-sub lx-meta">
                      {counts.video ? (
                        <span>
                          <PlayCircle size={13} aria-hidden /> {counts.video} video{counts.video > 1 ? 's' : ''}
                        </span>
                      ) : null}
                      {counts.notes || counts.reading ? (
                        <span>
                          <FileText size={13} aria-hidden /> notes
                        </span>
                      ) : null}
                      {qs ? (
                        <span>
                          <HelpCircle size={13} aria-hidden /> {qs} questions
                        </span>
                      ) : null}
                      {l.steps.some((s) => s.timeLimit) ? (
                        <span>
                          <Timer size={13} aria-hidden /> timed
                        </span>
                      ) : null}
                    </span>
                  </span>
                  <span className="lx-lesson-time lx-meta lx-num">
                    {p.started && !p.complete ? `${p.done}/${p.total} · ` : ''}
                    {fmtMinutes(l.minutes)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Curriculum: React.FC<{ cur: Curriculum; sections: Section[]; done: Record<string, number> }> = ({ cur, sections, done }) => {
  const [open, setOpen] = useState<Set<string>>(() => new Set(sections.slice(0, 1).map((s) => s.id)));
  const all = open.size === sections.length;
  const lessons = sections.reduce((n, s) => n + s.lessons.length, 0);
  const minutes = sections.reduce((n, s) => n + s.lessons.reduce((m, l) => m + l.minutes, 0), 0);
  return (
    <div>
      <div className="lx-acc-bar">
        <span className="lx-meta lx-num">
          {sections.length} sections · {lessons} lessons · {fmtMinutes(minutes)} in total
        </span>
        <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => setOpen(all ? new Set() : new Set(sections.map((s) => s.id)))}>
          {all ? 'Collapse all sections' : 'Expand all sections'}
        </button>
      </div>
      <div className="lx-acc-list">
        {sections.map((s) => (
          <SectionBlock
            key={s.id}
            cur={cur}
            section={s}
            done={done}
            open={open.has(s.id)}
            onToggle={() =>
              setOpen((o) => {
                const n = new Set(o);
                if (n.has(s.id)) n.delete(s.id);
                else n.add(s.id);
                return n;
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

// ── exam prep tab ────────────────────────────────────────────────────────────────
// ── exam prep tab ────────────────────────────────────────────────────────────────
const ExamTab: React.FC<{ cur: Curriculum; done: Record<string, number> }> = ({ cur, done }) => {
  const sections = cur.sections.filter((s) => s.examPrep);
  const fullTeacherPaper = sections.flatMap((s) => s.lessons).find((l) => l.id === 'tp-full-paper');
  const fullTeacherStep = fullTeacherPaper?.steps.find((s) => s.kind === 'exam');
  const [photoPage, setPhotoPage] = useState<number | null>(null);

  const startTeacherDrill = () => {
    if (fullTeacherPaper && fullTeacherStep) {
      window.location.href = href({ name: 'learn', course: cur.id, lesson: fullTeacherPaper.id, step: fullTeacherStep.id });
    } else {
      window.location.href = href({ name: 'practice', course: cur.id });
    }
  };

  return (
    <div className="lx-exam-tab">
      {fullTeacherPaper && fullTeacherStep && (
        <a className="lx-exam-build lx-exam-build--teacher" href={href({ name: 'learn', course: cur.id, lesson: fullTeacherPaper.id, step: fullTeacherStep.id })}>
          <GraduationCap size={23} aria-hidden />
          <span>
            <strong>Work through the complete midterm subject bundle</strong>
            <span className="lx-meta">Questions are organized by subject, not by year or instructor, with worked solutions after you answer.</span>
          </span>
          <span className="lx-exam-build-go">
            {fullTeacherStep.timeLimit ? <span className="lx-chip lx-num">{fullTeacherStep.timeLimit} min</span> : null}
            Start <ArrowRight size={17} aria-hidden />
          </span>
        </a>
      )}
      <a className="lx-exam-build" href={href({ name: 'practice', course: cur.id })}>
        <Target size={22} aria-hidden />
        <span>
          <strong>Build your own quiz</strong>
          <span className="lx-meta">Choose the source (class notes, previous exams, or everything), the chapters or single subtopics, the kinds of questions (repeated, similar, asked once, possible) and how many.</span>
        </span>
        <ArrowRight size={18} aria-hidden />
      </a>

      {cur.id === 'MIAE221' && (
        <>
          <Miae221ExamStatisticsCard
            onStart2017Drill={startTeacherDrill}
            onOpenPhotos={(p) => setPhotoPage(p ?? 1)}
          />
          <ExamPhotoModal
            isOpen={photoPage !== null}
            initialPage={photoPage ?? 1}
            onClose={() => setPhotoPage(null)}
          />
        </>
      )}

      <Curriculum cur={cur} sections={sections} done={done} />
    </div>
  );
};

// ── course content & exam prep slide-out drawer ──────────────────────────────
const CourseDrawer: React.FC<{
  cur: Curriculum;
  drawer: 'content' | 'exam';
  onClose: () => void;
  onSwitch: (tab: 'content' | 'exam') => void;
  done: Record<string, number>;
  activeStepId?: string;
  activeLessonId?: string;
}> = ({ cur, drawer, onClose, onSwitch, done, activeStepId, activeLessonId }) => {
  const sections = cur.sections.filter((section) => Boolean(section.examPrep) === (drawer === 'exam'));
  const currentSection = cur.sections.find((s) => s.lessons.some((l) => l.id === activeLessonId))?.id;
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(currentSection ? [currentSection] : [sections[0]?.id].filter(Boolean) as string[]));
  const [openLessons, setOpenLessons] = useState<Set<string>>(() => new Set(activeLessonId ? [activeLessonId] : []));

  const toggle = (set: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) =>
    set((o) => {
      const n = new Set(o);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  const contentLabel = drawer === 'exam' ? 'Midterm preparation' : 'Course content';

  return (
    <>
      <div className="lx-pside-scrim" onClick={onClose} aria-hidden />
      <aside className="lx-course-drawer is-open" aria-label={contentLabel}>
        <div className="lx-drawer-head">
          <div className="lx-drawer-head-top">
            <strong>{contentLabel}</strong>
            <button type="button" className="lx-icon-btn lx-drawer-close" onClick={onClose} aria-label="Close drawer">
              <X size={20} />
            </button>
          </div>
          <div className="lx-drawer-tabs">
            <button
              type="button"
              className={`lx-drawer-tab ${drawer === 'content' ? 'is-active' : ''}`}
              onClick={() => onSwitch('content')}
            >
              Course content (Ch 1–{cur.sections.filter((s) => !s.examPrep).length})
            </button>
            <button
              type="button"
              className={`lx-drawer-tab ${drawer === 'exam' ? 'is-active' : ''}`}
              onClick={() => onSwitch('exam')}
            >
              Midterm prep
            </button>
          </div>
        </div>

        <div className="lx-drawer-body">
          <nav className="lx-side-list" aria-label={contentLabel}>
            {sections.map((s: Section, si) => {
              const done_ = s.lessons.filter((l) => lessonProgress(cur.id, l, done).complete).length;
              const open = openSections.has(s.id);
              return (
                <div key={s.id} className={`lx-side-sec${open ? ' is-open' : ''}`}>
                  <button type="button" className="lx-side-sec-head" aria-expanded={open} onClick={() => toggle(setOpenSections, s.id)}>
                    <span>
                      <strong>
                        {drawer === 'exam' ? '' : `Section ${si + 1}: `}
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
                          <li key={l.id} className={`lx-side-lesson${l.id === activeLessonId ? ' is-current' : ''}`}>
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
                                  const d = !!done[`${cur.id}/${st.id}`];
                                  return (
                                    <li key={st.id}>
                                      <a
                                        className={`lx-side-step${st.id === activeStepId ? ' is-current' : ''}${d ? ' is-done' : ''}`}
                                        href={href({ name: 'learn', course: cur.id, lesson: l.id, step: st.id })}
                                        onClick={onClose}
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
        </div>
      </aside>
    </>
  );
};

// ── page ─────────────────────────────────────────────────────────────────────────
export const CoursePage: React.FC<{ course: CourseId; tab: CourseTab; folder?: string }> = ({ course, tab, folder }) => {
  const cur = useCurriculum(course);
  const c = COURSE_BY_ID[course];
  const s = SUMMARY[course].stats;
  const done = useProgress((st) => st.steps);
  const lastPlace = useProgress((st) => st.lastByCourse[course]);
  const prog = useMemo(() => (cur ? courseProgress(cur, done) : null), [cur, done]);
  const next = useMemo(() => (cur ? nextStep(cur, done, lastPlace?.stepId) : null), [cur, done, lastPlace]);
  const [drawer, setDrawer] = useState<'content' | 'exam' | null>(null);

  const nonExamSections = useMemo(() => (cur ? cur.sections.filter((x) => !x.examPrep) : []), [cur]);
  const activeSecIdx = useMemo(() => {
    if (!next || !nonExamSections.length) return 0;
    const idx = nonExamSections.findIndex((sec) => sec.lessons.some((l) => l.id === next.lesson.id));
    return idx >= 0 ? idx : 0;
  }, [next, nonExamSections]);
  const activeChapterNum = activeSecIdx + 1;
  const sideExam = nextExam(useReminders(), course);
  const urgentExam = sideExam && sideExam.left <= 21 ? sideExam : null;
  const urgentExamLabel = urgentExam ? (urgentExam.left === 0 ? 'Today' : urgentExam.left === 1 ? 'Tomorrow' : `${urgentExam.left}d`) : null;
  const ctaHref = next ? href({ name: 'learn', course, lesson: next.lesson.id, step: next.step.id }) : href({ name: 'learn', course, lesson: SUMMARY[course].start.lessonId });
  const started = !!prog && prog.done > 0;
  const examTab: { id: CourseTab; label: string } = { id: 'exam', label: urgentExamLabel ? `Exam prep · ${urgentExamLabel}` : 'Exam prep' };
  const formulasTab: { id: CourseTab; label: string }[] = hasFormulaSheet(course) ? [{ id: 'formulas', label: 'Formulas' }] : [];
  const tabs: { id: CourseTab; label: string }[] = urgentExam
    ? [examTab, { id: 'overview', label: 'Course content' }, { id: 'videos', label: `Videos (${s.videos})` }, ...formulasTab, { id: 'resources', label: `Resources (${s.documents})` }]
    : [{ id: 'overview', label: 'Course content' }, { id: 'videos', label: `Videos (${s.videos})` }, examTab, ...formulasTab, { id: 'resources', label: `Resources (${s.documents})` }];
  return (
    <div className={`lx-course ${courseClass(course)}`}>
      <div className={`lx-wrap lx-course-layout${tab === 'videos' ? ' is-wide' : ''}`}>
        <div className="lx-course-main">
          <section className="lx-course-hero">
            <nav className="lx-crumbs lx-meta" aria-label="Breadcrumb">
              <a href="#/">Courses</a> <span aria-hidden>›</span> <span>{c.code}</span>
            </nav>
            <h1 className="lx-h1">{c.title}</h1>
            <p className="lx-lead">{c.blurb}</p>
            <ul className="lx-course-facts lx-num">
              <li>
                <LibraryBig size={16} aria-hidden /> {s.lessons} lessons
              </li>
              <li>
                <Clapperboard size={16} aria-hidden /> {s.videos} videos · {fmtHours(s.videoMinutes)}
              </li>
              <li>
                <HelpCircle size={16} aria-hidden /> {s.questions} practice questions
              </li>
              <li>
                <GraduationCap size={16} aria-hidden /> {sideExam ? `${sideExam.title}: ${fmtDay(sideExam.date)}${sideExam.time ? `, ${sideExam.time}` : ''}` : `Midterm: ${SUMMARY[course].midterm.label}`}
              </li>
            </ul>
            <div className="lx-course-mobile-cta">
              <a className="lx-btn lx-btn--accent lx-btn--lg" href={ctaHref} style={{ flex: 1 }}>
                <PlayCircle size={18} /> {started ? `Continue · Chapter ${activeChapterNum}` : 'Start course · Chapter 1'}
              </a>
              <button
                type="button"
                className="lx-btn lx-btn--lg"
                onClick={() => setDrawer('content')}
                style={{ padding: '0 14px' }}
                title="Open Chapters (Chapter 1, 2, 3...)"
                aria-label="Open Chapters"
              >
                <ListTree size={18} />
              </button>
            </div>
          </section>

          {urgentExam && (
            <section className="lx-course-exam-callout" aria-labelledby="lx-course-exam-callout-title">
              <span className="lx-course-exam-icon" aria-hidden>
                <CalendarClock size={21} />
              </span>
              <div>
                <p className="lx-course-exam-kicker lx-meta">
                  Priority now · {urgentExam.left === 0 ? 'Exam today' : urgentExam.left === 1 ? 'Exam tomorrow' : `${urgentExam.left} days to go`}
                </p>
                <h2 id="lx-course-exam-callout-title" className="lx-h3">
                  Prepare for {urgentExam.title}
                </h2>
                <p className="lx-course-exam-copy">
                  {fmtDay(urgentExam.date)}{urgentExam.time ? ` · ${urgentExam.time}` : ''}. Use the focused prep sequence, timed practice and worked solutions.
                </p>
              </div>
              {tab === 'exam' ? (
                <span className="lx-chip lx-course-exam-open">Exam prep open</span>
              ) : (
                <a className="lx-btn lx-btn--accent lx-course-exam-cta" href={href({ name: 'course', course, tab: 'exam' })}>
                  Open exam prep <ArrowRight size={16} aria-hidden />
                </a>
              )}
            </section>
          )}

          <div className={`lx-tabs lx-course-tabs${urgentExam ? ' is-exam-near' : ''}`} role="tablist" aria-label="Course">
            {tabs.map((t) => (
              <button key={t.id} type="button" role="tab" className="lx-tab" aria-selected={tab === t.id} onClick={() => navigate({ name: 'course', course, tab: t.id }, { replace: true })}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="lx-course-panel" role="tabpanel">
            {!cur ? (
              <div className="lx-route-loading" aria-busy="true" />
            ) : tab === 'overview' ? (
              <>
                <section className="lx-learn-box">
                  <h2 className="lx-h2">What you’ll learn</h2>
                  <ul>
                    {cur.whatYouLearn.map((w) => (
                      <li key={w}>
                        <CheckCircle2 size={18} aria-hidden /> {w}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2 className="lx-h2 lx-section-title">Course content</h2>
                  <Curriculum cur={cur} sections={cur.sections.filter((x) => !x.examPrep)} done={done} />
                </section>
              </>
            ) : tab === 'videos' ? (
              <VideoLibrary cur={cur} />
            ) : tab === 'exam' ? (
              <ExamTab cur={cur} done={done} />
            ) : tab === 'formulas' && hasFormulaSheet(course) ? (
              <FormulaSheet cur={cur} />
            ) : (
              <ResourceLibrary cur={cur} folder={folder} />
            )}
          </div>
        </div>

        <aside className="lx-course-side" aria-label="Start">
          <div className="lx-course-side-card">
            <CourseCover course={course} label={false} />
            <div className="lx-course-side-body">
              {prog && started ? (
                <div className="lx-course-side-prog">
                  <span className="lx-ring" style={{ ['--p' as string]: prog.pct }}>
                    <span>{prog.pct}%</span>
                  </span>
                  <span>
                    <strong className="lx-num">
                      {prog.lessonsDone} of {prog.lessons} lessons
                    </strong>
                    <span className="lx-meta">{next ? `Next: ${next.step.title}` : 'Course complete'}</span>
                  </span>
                </div>
              ) : null}
              {/* Exam Prep Compound Button */}
              {urgentExam && (
                <div className="lx-btn-compound">
                  <button type="button" className="lx-btn lx-btn--accent lx-btn--lg lx-btn-compound-main" onClick={() => navigate({ name: 'course', course, tab: 'exam' }, { replace: true })}>
                    <GraduationCap size={17} /> Exam prep · {urgentExamLabel}
                  </button>
                  <button type="button" className="lx-btn lx-btn--accent lx-btn-compound-toggle" onClick={() => setDrawer('exam')} title="Open Midterm Preparation List" aria-label="Open Midterm Preparation List">
                    <span>Prep</span>
                    <ChevronDown size={14} />
                  </button>
                </div>
              )}

              {/* Continue Compound Button (Chapter 1, 2, 3...) */}
              <div className="lx-btn-compound">
                <a className={`lx-btn${urgentExam ? '' : ' lx-btn--accent'} lx-btn--lg lx-btn-compound-main`} href={ctaHref}>
                  <PlayCircle size={18} /> {started ? `Continue · Chapter ${activeChapterNum}` : 'Start course · Chapter 1'}
                </a>
                <button
                  type="button"
                  className={`lx-btn${urgentExam ? '' : ' lx-btn--accent'} lx-btn-compound-toggle`}
                  onClick={() => setDrawer('content')}
                  title={`Open Chapter List (Ch 1–${nonExamSections.length})`}
                  aria-label="Open Chapter List"
                >
                  <span>Ch 1–{nonExamSections.length}</span>
                  <ChevronDown size={14} />
                </button>
              </div>

              {/* Quick Chapter Jump Bar (Chapter 1, 2, 3, 4, 5 and so on) */}
              <div className="lx-chapter-quick-nav">
                <div className="lx-chapter-quick-header">
                  <span className="lx-meta">Jump to Chapter:</span>
                  <button type="button" className="lx-chapter-all-btn" onClick={() => setDrawer('content')}>
                    View all ({nonExamSections.length}) <ChevronRight size={13} />
                  </button>
                </div>
                <div className="lx-chapter-chips-row">
                  {nonExamSections.map((sec, idx) => {
                    const chNum = idx + 1;
                    const openLesson = sec.lessons.find((l) => !lessonProgress(course, l, done).complete) ?? sec.lessons[0];
                    const targetHref = lessonHref(course, openLesson, done);
                    const lessonsDone = sec.lessons.filter((l) => lessonProgress(course, l, done).complete).length;
                    const isComplete = lessonsDone === sec.lessons.length && sec.lessons.length > 0;
                    const isCurrent = activeSecIdx === idx;
                    return (
                      <a
                        key={sec.id}
                        href={targetHref}
                        className={`lx-ch-chip${isCurrent ? ' is-current' : ''}${isComplete ? ' is-complete' : ''}`}
                        title={`Chapter ${chNum}: ${sec.title} (${lessonsDone}/${sec.lessons.length} lessons)`}
                      >
                        <span>Ch {chNum}</span>
                        {isComplete && <Check size={11} strokeWidth={3} className="lx-ch-chip-check" />}
                      </a>
                    );
                  })}
                </div>
              </div>

              {!urgentExam && (
                <div className="lx-btn-compound" style={{ marginTop: '4px' }}>
                  <button type="button" className="lx-btn lx-btn--block lx-btn-compound-main" onClick={() => navigate({ name: 'course', course, tab: 'exam' }, { replace: true })}>
                    <GraduationCap size={17} /> Exam prep
                  </button>
                  <button type="button" className="lx-btn lx-btn-compound-toggle" onClick={() => setDrawer('exam')} title="Open Midterm Preparation List" aria-label="Open Midterm Preparation List">
                    <span>Prep</span>
                    <ChevronDown size={14} />
                  </button>
                </div>
              )}
              <p className="lx-meta lx-side-includes-title">This course includes</p>
              <ul className="lx-side-includes lx-num">
                <li>{fmtHours(s.videoMinutes)} of narrated video</li>
                <li>{s.questions} questions with worked solutions</li>
                <li>A timed mock midterm and exam-style practice sets</li>
                <li>{s.documents} documents: slides, guides and review sheets</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {drawer && cur && (
        <CourseDrawer
          cur={cur}
          drawer={drawer}
          onClose={() => setDrawer(null)}
          onSwitch={(t: 'content' | 'exam') => setDrawer(t)}
          done={done}
          activeStepId={next?.step.id}
          activeLessonId={next?.lesson.id}
        />
      )}
    </div>
  );
};

export default CoursePage;
