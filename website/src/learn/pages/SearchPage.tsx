import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, FileText, HelpCircle, PlayCircle, Search } from 'lucide-react';
import type { CourseId } from '../../types';
import type { Curriculum, DocRef, LearnQuestion } from '../model';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { fmtClock, fmtMinutes, useCurricula } from '../data';
import { href, navigate } from '../router';
import { openDoc } from '../docBus';
import { loadCourseQuestions } from '../questions';
import { MathText } from '../../utils/mathRenderer';
import '../styles/search.css';

// One search across every course: lessons, videos and documents answer instantly from the curriculum; questions
// answer once the course banks have loaded (the first question search loads them, then it is instant).
const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/\$[^$]*\$/g, ' ').replace(/\s+/g, ' ');

const matches = (hay: string, words: string[]) => {
  const h = norm(hay);
  return words.every((w) => h.includes(w));
};

interface Hit<T> {
  course: CourseId;
  item: T;
  where: { lessonId: string; stepId?: string; lessonTitle: string };
}

const LIMIT = 12;

export const SearchPage: React.FC<{ q: string }> = ({ q }) => {
  const curricula = useCurricula();
  const [course, setCourse] = useState<CourseId | 'all'>('all');
  const [questions, setQuestions] = useState<Record<CourseId, Map<string, LearnQuestion>> | null>(null);
  const [more, setMore] = useState<Record<string, boolean>>({});
  const words = norm(q).trim().split(' ').filter((w) => w.length > 1);
  const active = words.length > 0;

  useEffect(() => {
    if (!active || questions) return;
    let alive = true;
    Promise.all(COURSES.map((c) => loadCourseQuestions(c.id))).then((all) => alive && setQuestions(Object.fromEntries(all.map((x) => [x.course, x.byId])) as Record<CourseId, Map<string, LearnQuestion>>));
    return () => {
      alive = false;
    };
  }, [active, questions]);

  const scope = (c: CourseId) => course === 'all' || course === c;

  const results = useMemo(() => {
    if (!curricula || !active) return null;
    const lessons: Hit<{ title: string; summary: string; minutes: number; section: string }>[] = [];
    const videos: Hit<{ title: string; seconds: number; poster?: string; source?: string }>[] = [];
    const docs: Hit<DocRef>[] = [];
    const qs: Hit<LearnQuestion>[] = [];
    for (const c of COURSES) {
      if (!scope(c.id)) continue;
      const cur: Curriculum = curricula[c.id];
      const homeOfQuestion = new Map<string, Hit<unknown>['where']>();
      for (const s of cur.sections)
        for (const l of s.lessons) {
          if (matches(`${l.title} ${l.summary} ${l.objectives.join(' ')} ${s.title} ${c.code}`, words)) lessons.push({ course: c.id, item: { title: l.title, summary: l.summary, minutes: l.minutes, section: s.title }, where: { lessonId: l.id, lessonTitle: l.title } });
          for (const st of l.steps) for (const id of st.questionIds ?? []) if (!homeOfQuestion.has(id)) homeOfQuestion.set(id, { lessonId: l.id, stepId: st.id, lessonTitle: l.title });
        }
      for (const v of cur.videos) {
        if (!matches(`${v.title} ${v.source ?? ''}`, words)) continue;
        const l = cur.sections.flatMap((s) => s.lessons).find((x) => x.id === v.lessonId);
        videos.push({ course: c.id, item: v, where: { lessonId: v.lessonId, stepId: v.stepId, lessonTitle: l?.title ?? '' } });
      }
      for (const g of cur.resources)
        for (const d of g.docs) if (matches(`${d.title} ${g.title}`, words)) docs.push({ course: c.id, item: d, where: { lessonId: '', lessonTitle: g.title } });
      if (questions)
        for (const [id, qq] of questions[c.id]) {
          const home = homeOfQuestion.get(id);
          if (home && matches(`${qq.prompt} ${qq.topic} ${qq.source ?? ''} ${(qq.options ?? []).join(' ')}`, words)) qs.push({ course: c.id, item: qq, where: home });
        }
    }
    return { lessons, videos, docs, qs };
  }, [curricula, questions, q, course]); // eslint-disable-line react-hooks/exhaustive-deps

  const total = results ? results.lessons.length + results.videos.length + results.docs.length + results.qs.length : 0;
  const show = <T,>(key: string, list: T[]) => (more[key] ? list : list.slice(0, LIMIT));
  const MoreBtn: React.FC<{ k: string; n: number }> = ({ k, n }) =>
    n > LIMIT && !more[k] ? (
      <button type="button" className="lx-btn lx-btn--sm lx-search-more" onClick={() => setMore((m) => ({ ...m, [k]: true }))}>
        Show all {n}
      </button>
    ) : null;

  return (
    <div className="lx-wrap lx-search-page">
      <header className="lx-search-head">
        <h1 className="lx-h1">{active ? <>Results for “{q.trim()}”</> : 'Search everything'}</h1>
        <form
          className="lx-search lx-search--page"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search size={18} aria-hidden />
          <input
            type="search"
            autoFocus
            defaultValue={q}
            onChange={(e) => navigate({ name: 'search', q: e.target.value }, { replace: true })}
            placeholder="A topic, a formula, a lecture number…"
            aria-label="Search the courses"
          />
        </form>
        <div className="lx-filter-row" role="group" aria-label="Course">
          {(['all', ...COURSES.map((c) => c.id)] as (CourseId | 'all')[]).map((c) => (
            <button key={c} type="button" className={`lx-chip lx-chip-btn${course === c ? ' is-on' : ''}`} aria-pressed={course === c} onClick={() => setCourse(c)}>
              {c === 'all' ? 'All courses' : COURSE_BY_ID[c].code}
            </button>
          ))}
        </div>
      </header>

      {!active ? (
        <p className="lx-empty">Type at least two letters. Try “Bernoulli”, “planar density”, “break-even” or “nested loops”.</p>
      ) : !results ? (
        <div className="lx-route-loading" aria-busy="true" />
      ) : (
        <div className="lx-search-results" aria-live="polite">
          <p className="lx-meta lx-num">
            {total} result{total === 1 ? '' : 's'}
            {!questions && ' · searching the question banks…'}
          </p>

          {results.lessons.length > 0 && (
            <section>
              <h2 className="lx-h3 lx-search-group">
                <BookOpen size={18} aria-hidden /> Lessons <span className="lx-meta">{results.lessons.length}</span>
              </h2>
              <ul className="lx-search-list">
                {show('l', results.lessons).map((h) => (
                  <li key={h.course + h.where.lessonId} className={courseClass(h.course)}>
                    <a href={href({ name: 'learn', course: h.course, lesson: h.where.lessonId })}>
                      <span className="lx-code-tag">{COURSE_BY_ID[h.course].code}</span>
                      <span className="lx-search-text">
                        <strong>{h.item.title}</strong>
                        <span className="lx-meta">
                          {h.item.section} · {fmtMinutes(h.item.minutes)}
                        </span>
                        <span className="lx-search-snippet">{h.item.summary}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <MoreBtn k="l" n={results.lessons.length} />
            </section>
          )}

          {results.videos.length > 0 && (
            <section>
              <h2 className="lx-h3 lx-search-group">
                <PlayCircle size={18} aria-hidden /> Videos <span className="lx-meta">{results.videos.length}</span>
              </h2>
              <ul className="lx-search-list">
                {show('v', results.videos).map((h) => (
                  <li key={h.course + h.item.title + h.where.stepId} className={courseClass(h.course)}>
                    <a href={href({ name: 'learn', course: h.course, lesson: h.where.lessonId, step: h.where.stepId })}>
                      <span className="lx-code-tag">{COURSE_BY_ID[h.course].code}</span>
                      <span className="lx-search-text">
                        <strong>{h.item.title}</strong>
                        <span className="lx-meta">
                          {fmtClock(h.item.seconds)} · in {h.where.lessonTitle}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <MoreBtn k="v" n={results.videos.length} />
            </section>
          )}

          {results.qs.length > 0 && (
            <section>
              <h2 className="lx-h3 lx-search-group">
                <HelpCircle size={18} aria-hidden /> Questions <span className="lx-meta">{results.qs.length}</span>
              </h2>
              <ul className="lx-search-list">
                {show('q', results.qs).map((h) => (
                  <li key={h.item.id} className={courseClass(h.course)}>
                    <a href={href({ name: 'learn', course: h.course, lesson: h.where.lessonId, step: h.where.stepId })}>
                      <span className="lx-code-tag">{COURSE_BY_ID[h.course].code}</span>
                      <span className="lx-search-text">
                        <span className="lx-search-q">
                          <MathText text={h.item.prompt.length > 220 ? h.item.prompt.slice(0, 220).replace(/\$[^$]*$/, '') + '…' : h.item.prompt} />
                        </span>
                        <span className="lx-meta">
                          {h.item.topic} · practise it in {h.where.lessonTitle}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <MoreBtn k="q" n={results.qs.length} />
            </section>
          )}

          {results.docs.length > 0 && (
            <section>
              <h2 className="lx-h3 lx-search-group">
                <FileText size={18} aria-hidden /> Documents <span className="lx-meta">{results.docs.length}</span>
              </h2>
              <ul className="lx-search-list">
                {show('d', results.docs).map((h) => (
                  <li key={h.item.path} className={courseClass(h.course)}>
                    <button type="button" onClick={() => openDoc(h.item)}>
                      <span className="lx-code-tag">{COURSE_BY_ID[h.course].code}</span>
                      <span className="lx-search-text">
                        <strong>{h.item.title}</strong>
                        <span className="lx-meta">{h.where.lessonTitle}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <MoreBtn k="d" n={results.docs.length} />
            </section>
          )}

          {total === 0 && questions && <p className="lx-empty">Nothing matches “{q.trim()}”. Try fewer words, or a lecture or chapter number.</p>}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
