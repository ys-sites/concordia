import React, { useMemo, useState } from 'react';
import { Library, Play, Search, X } from 'lucide-react';
import type { CourseId } from '../../types';
import type { LearnQuestion, Lesson, Step } from '../model';
import { LEVEL_LABEL } from '../model';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { useCurriculum } from '../data';
import { navigate } from '../router';
import { useProgress } from '../progress/store';
import { useCourseQuestions } from '../questions';
import { QuizRunner } from '../quiz/QuizRunner';
import { examLabel } from '../examLabel';
import { MathText } from '../../utils/mathRenderer';
import '../styles/bank.css';

// Every question of a course in one place: filter by topic, difficulty, kind and your own results, then
// practise one question or the whole filtered set.
type Origin = 'all' | 'exam' | 'practice';
type Result = 'all' | 'new' | 'missed' | 'right' | 'flagged';
const PAGE = 30;

const strip = (s: string) => s.replace(/\$[^$]*\$/g, ' ').toLowerCase();

export const QuestionBank: React.FC<{ course?: CourseId }> = ({ course: routeCourse }) => {
  const course = routeCourse ?? 'ENGR213';
  const cur = useCurriculum(course);
  const idx = useCourseQuestions(course);
  const stats = useProgress((s) => s.questions);
  const [lesson, setLesson] = useState<string>('all');
  const [level, setLevel] = useState<0 | 1 | 2 | 3>(0);
  const [origin, setOrigin] = useState<Origin>('all');
  const [result, setResult] = useState<Result>('all');
  const [q, setQ] = useState('');
  const [limit, setLimit] = useState(PAGE);
  const [run, setRun] = useState<{ ids: string[]; title: string } | null>(null);

  // which lesson each question lives in (first home in teaching order)
  const homes = useMemo(() => {
    const m = new Map<string, Lesson>();
    if (cur) for (const s of cur.sections) for (const l of s.lessons) for (const st of l.steps) for (const id of st.questionIds ?? []) if (!m.has(id)) m.set(id, l);
    return m;
  }, [cur]);

  const list = useMemo(() => {
    if (!idx) return [];
    const words = strip(q).split(/\s+/).filter((w) => w.length > 1);
    return [...idx.byId.values()].filter((x: LearnQuestion) => {
      const home = homes.get(x.id);
      if (!home) return false;
      if (lesson !== 'all' && home.id !== lesson) return false;
      if (level && x.level !== level) return false;
      if (origin === 'exam' && !x.pastPaper) return false;
      if (origin === 'practice' && x.pastPaper) return false;
      const st = stats[x.id];
      if (result === 'new' && st?.seen) return false;
      if (result === 'missed' && !(st?.seen && st.last === 0)) return false;
      if (result === 'right' && !(st?.seen && st.last === 1)) return false;
      if (result === 'flagged' && !st?.flagged) return false;
      if (words.length && !words.every((w) => strip(`${x.prompt} ${x.topic} ${x.source ?? ''}`).includes(w))) return false;
      return true;
    });
  }, [idx, homes, lesson, level, origin, result, q, stats]);

  const lessons = cur ? cur.sections.flatMap((s) => s.lessons.filter((l) => l.steps.some((st) => st.questionIds?.length)).map((l) => ({ l, s }))) : [];
  const runStep: Step | null = run ? { id: `bank-${run.ids.length}-${run.ids[0]}`, kind: 'practice', title: run.title, minutes: 0, questionIds: run.ids, size: Math.min(20, run.ids.length), passMark: 0.7 } : null;
  const runLesson: Lesson = { id: 'bank', title: 'Question bank', summary: '', objectives: [], topicTags: [], minutes: 0, steps: [] };

  return (
    <div className={`lx-wrap lx-bank ${courseClass(course)}`}>
      <header className="lx-bank-head">
        <div>
          <h1 className="lx-h1">
            <Library size={28} aria-hidden /> Question bank
          </h1>
          <p className="lx-lead">Every question in the course, with its worked solution. Filter it down, then practise.</p>
        </div>
        <div className="lx-filter-row" role="group" aria-label="Course">
          {COURSES.map((c) => (
            <button key={c.id} type="button" className={`lx-chip lx-chip-btn${course === c.id ? ' is-on' : ''}`} aria-pressed={course === c.id} onClick={() => (setLesson('all'), setLimit(PAGE), navigate({ name: 'bank', course: c.id }, { replace: true }))}>
              {c.code}
            </button>
          ))}
        </div>
      </header>

      <div className="lx-bank-filters lx-panel lx-panel-pad">
        <label className="lx-lib-search">
          <Search size={17} aria-hidden />
          <input type="search" value={q} onChange={(e) => (setQ(e.target.value), setLimit(PAGE))} placeholder={`Search ${idx ? idx.byId.size : ''} questions in ${COURSE_BY_ID[course].code}…`} aria-label="Search the questions" />
        </label>
        <label className="lx-field">
          <span>Topic</span>
          <select className="lx-input" value={lesson} onChange={(e) => (setLesson(e.target.value), setLimit(PAGE))}>
            <option value="all">All topics</option>
            {lessons.map(({ l, s }) => (
              <option key={l.id} value={l.id}>
                {s.examPrep ? 'Exam prep · ' : ''}
                {l.title}
              </option>
            ))}
          </select>
        </label>
        <div className="lx-field">
          <span>Difficulty</span>
          <div className="lx-seg" role="group" aria-label="Difficulty">
            {([0, 1, 2, 3] as const).map((l) => (
              <button key={l} type="button" aria-pressed={level === l} className={level === l ? 'is-on' : ''} onClick={() => (setLevel(l), setLimit(PAGE))}>
                {l === 0 ? 'All' : LEVEL_LABEL[l]}
              </button>
            ))}
          </div>
        </div>
        <div className="lx-field">
          <span>Kind</span>
          <div className="lx-seg" role="group" aria-label="Kind">
            {(['all', 'exam', 'practice'] as Origin[]).map((o) => (
              <button key={o} type="button" aria-pressed={origin === o} className={origin === o ? 'is-on' : ''} onClick={() => (setOrigin(o), setLimit(PAGE))}>
                {o === 'all' ? 'All' : o === 'exam' ? 'Past exams' : 'Practice'}
              </button>
            ))}
          </div>
        </div>
        <div className="lx-field">
          <span>Your results</span>
          <div className="lx-seg" role="group" aria-label="Your results">
            {(['all', 'new', 'missed', 'right', 'flagged'] as Result[]).map((r) => (
              <button key={r} type="button" aria-pressed={result === r} className={result === r ? 'is-on' : ''} onClick={() => (setResult(r), setLimit(PAGE))}>
                {r === 'all' ? 'All' : r === 'new' ? 'Not tried' : r === 'missed' ? 'Missed' : r === 'right' ? 'Right' : 'Flagged'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="lx-bank-bar">
        <p className="lx-meta lx-num" aria-live="polite">
          {idx ? `${list.length} question${list.length === 1 ? '' : 's'}` : 'Loading the questions…'}
        </p>
        {list.length > 0 && (
          <button type="button" className="lx-btn lx-btn--accent" onClick={() => setRun({ ids: list.map((x) => x.id), title: `${Math.min(20, list.length)} questions from the bank` })}>
            <Play size={16} /> Practise {list.length > 20 ? '20 of these' : `these ${list.length}`}
          </button>
        )}
      </div>

      <ul className="lx-bank-list">
        {list.slice(0, limit).map((x) => {
          const st = stats[x.id];
          return (
            <li key={x.id}>
              <button type="button" className="lx-bank-item" onClick={() => setRun({ ids: [x.id], title: 'One question' })}>
                <span className="lx-bank-tags">
                  <span className={`lx-chip lx-lvl-chip lx-lvl-${x.level}`}>{LEVEL_LABEL[x.level]}</span>
                  {x.pastPaper && <span className="lx-chip lx-chip--warn">{examLabel(typeof x.source === 'string' ? x.source : typeof x.pastPaper === 'string' ? x.pastPaper : undefined)}</span>}
                  {st?.seen ? <span className={`lx-chip ${st.last ? 'lx-chip--good' : 'lx-chip--bad'}`}>{st.last ? 'Right last time' : 'Missed last time'}</span> : null}
                </span>
                <span className="lx-bank-q">
                  <MathText text={x.prompt.length > 240 ? x.prompt.slice(0, 240).replace(/\$[^$]*$/, '') + '…' : x.prompt} />
                </span>
                <span className="lx-meta">
                  {x.topic} · {homes.get(x.id)?.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {list.length > limit && (
        <button type="button" className="lx-btn lx-bank-more" onClick={() => setLimit((n) => n + PAGE)}>
          Show {Math.min(PAGE, list.length - limit)} more
        </button>
      )}

      {run && runStep && (
        <div className="lx-dialog-backdrop" onClick={() => setRun(null)}>
          <div className={`lx-dialog ${courseClass(course)}`} role="dialog" aria-modal="true" aria-label={run.title} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lx-icon-btn lx-dialog-close" onClick={() => setRun(null)} aria-label="Close">
              <X size={20} />
            </button>
            <QuizRunner key={runStep.id} course={course} lesson={runLesson} step={runStep} onContinue={() => setRun(null)} continueLabel="Back to the bank" />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBank;
