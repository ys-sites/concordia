import React, { useEffect, useMemo, useState } from 'react';
import type { CourseId } from '../../types';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { navigate } from '../router';
import { MathText } from '../../utils/mathRenderer';
import { VideoThumb } from '../components/VideoThumb';
import type { HitKind, SearchIndex } from '../search/engine';
import { loadFullIndex, loadIndex, queryWords, recentSearches, search, snippet, suggest } from '../search/engine';
import { KIND_ICON, KIND_NAME, SearchBox, openEntry } from '../search/SearchBox';
import { Hl } from '../search/Highlight';
import '../styles/search.css';

// Every result for a search, best first, with the searched words marked. Lessons, videos, documents and dates
// answer at once; the practice questions join as soon as their banks have loaded.
const KINDS: HitKind[] = ['lesson', 'video', 'question', 'document', 'date', 'course'];
const PLURAL: Record<HitKind, string> = { course: 'Courses', lesson: 'Lessons', video: 'Videos', question: 'Questions', document: 'Documents', date: 'Dates' };
const PAGE = 20;

// typeset maths stays typeset; the words around it are marked
const HlMath: React.FC<{ text: string; ws: string[] }> = ({ text, ws }) => (
  <>
    {text.split(/(\$[^$]*\$)/g).map((s, i) => (s.length > 1 && s.startsWith('$') && s.endsWith('$') ? <MathText key={i} text={s} /> : <Hl key={i} text={s} ws={ws} />))}
  </>
);

export const SearchPage: React.FC<{ q: string }> = ({ q }) => {
  const [idx, setIdx] = useState<SearchIndex | null>(null);
  const [text, setText] = useState(q);
  const [course, setCourse] = useState<CourseId | 'all'>('all');
  const [kind, setKind] = useState<HitKind | 'all'>('all');
  const [limit, setLimit] = useState(PAGE);
  useEffect(() => setText(q), [q]);
  useEffect(() => {
    let alive = true;
    loadIndex().then((i) => alive && setIdx((cur) => cur ?? i));
    loadFullIndex().then((i) => alive && setIdx(i));
    return () => {
      alive = false;
    };
  }, []);
  useEffect(() => setLimit(PAGE), [q, course, kind]);

  const ws = queryWords(q);
  const all = useMemo(() => (idx && ws.length ? search(idx, q, { course }) : []), [idx, q, course]); // eslint-disable-line react-hooks/exhaustive-deps
  const counts = useMemo(() => {
    const n = {} as Record<HitKind, number>;
    for (const h of all) n[h.e.kind] = (n[h.e.kind] ?? 0) + 1;
    return n;
  }, [all]);
  const hits = kind === 'all' ? all : all.filter((h) => h.e.kind === kind);
  const others = idx && ws.length && !all.length ? suggest(idx, q.split(/\s+/).slice(0, -1).join(' ') || q.slice(0, 3), 6) : [];
  const popular = useMemo(() => (idx ? [...idx.phrases.values()].sort((a, b) => b.w - a.w).slice(0, 14) : []), [idx]);
  const recent = useMemo(() => recentSearches(), [q]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="lx-wrap lx-search-page">
      <header className="lx-search-head">
        <h1 className="lx-h1">{ws.length ? <>Results for “{q.trim()}”</> : 'Search everything'}</h1>
        <SearchBox
          variant="page"
          autoFocus={!q}
          value={text}
          placeholder="A topic, a formula, a lecture number…"
          onChange={(v) => {
            setText(v);
            navigate({ name: 'search', q: v }, { replace: true });
          }}
          onSubmit={(v) => navigate({ name: 'search', q: v }, { replace: true })}
        />
        {ws.length > 0 && (
          <>
            <div className="lx-search-tabs" role="tablist" aria-label="What to show">
              {(['all', ...KINDS.filter((k) => counts[k])] as (HitKind | 'all')[]).map((k) => (
                <button key={k} type="button" role="tab" aria-selected={kind === k} className={kind === k ? 'is-on' : ''} onClick={() => setKind(k)}>
                  {k === 'all' ? 'All' : PLURAL[k]} <span className="lx-num">{k === 'all' ? all.length : counts[k]}</span>
                </button>
              ))}
            </div>
            <div className="lx-filter-row" role="group" aria-label="Course">
              {(['all', ...COURSES.map((c) => c.id)] as (CourseId | 'all')[]).map((c) => (
                <button key={c} type="button" className={`lx-chip lx-chip-btn${course === c ? ' is-on' : ''}`} aria-pressed={course === c} onClick={() => setCourse(c)}>
                  {c === 'all' ? 'All courses' : COURSE_BY_ID[c].code}
                </button>
              ))}
            </div>
          </>
        )}
      </header>

      {!ws.length ? (
        <div className="lx-search-start">
          {recent.length > 0 && (
            <section>
              <h2 className="lx-h3">Your recent searches</h2>
              <div className="lx-search-chips">
                {recent.map((r) => (
                  <button key={r} type="button" className="lx-chip lx-chip-btn" onClick={() => navigate({ name: 'search', q: r }, { replace: true })}>
                    {r}
                  </button>
                ))}
              </div>
            </section>
          )}
          <section>
            <h2 className="lx-h3">Popular topics</h2>
            <div className="lx-search-chips">
              {popular.map((p) => (
                <button key={p.text} type="button" className="lx-chip lx-chip-btn" onClick={() => navigate({ name: 'search', q: p.text }, { replace: true })}>
                  {p.text}
                </button>
              ))}
            </div>
          </section>
        </div>
      ) : !idx ? (
        <div className="lx-route-loading" aria-busy="true" />
      ) : (
        <div className="lx-search-results" aria-live="polite">
          <p className="lx-meta lx-num">
            {hits.length} result{hits.length === 1 ? '' : 's'}
            {!idx.questions && ' · adding the practice questions…'}
          </p>
          {hits.length > 0 && (
            <ol className="lx-sres-list">
              {hits.slice(0, limit).map(({ e }) => {
                const body = e.kind === 'lesson' || e.kind === 'date' || e.kind === 'course' ? snippet(e.body, ws) : '';
                return (
                  <li key={e.key} className={e.course ? courseClass(e.course) : ''}>
                    <button type="button" className="lx-sres" onClick={() => openEntry(e)}>
                      <span className="lx-sres-kind" title={KIND_NAME[e.kind]}>
                        {KIND_ICON[e.kind]}
                      </span>
                      <span className="lx-sres-body">
                        <span className="lx-sres-crumb">
                          {e.course && <span className="lx-code-tag">{COURSE_BY_ID[e.course].code}</span>}
                          {KIND_NAME[e.kind]} · {e.sub.replace(/^[A-Z]+ \d+ › /, '')}
                        </span>
                        <span className="lx-sres-title">{e.math ? <HlMath text={snippet(e.title, ws, 240)} ws={ws} /> : <Hl text={e.title} ws={ws} />}</span>
                        {body && (
                          <span className="lx-sres-snippet">
                            <Hl text={body} ws={ws} />
                          </span>
                        )}
                      </span>
                      {e.kind === 'video' && e.poster && (
                        <span className="lx-sres-thumb">
                          <VideoThumb poster={e.poster} videoId={e.videoId} />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          )}
          {hits.length > limit && (
            <button type="button" className="lx-btn lx-search-more" onClick={() => setLimit((n) => n + PAGE)}>
              Show more results <span className="lx-meta lx-num">({hits.length - limit} more)</span>
            </button>
          )}
          {!all.length && idx.questions && (
            <div className="lx-empty">
              <p>Nothing matches “{q.trim()}”. Try fewer words, another spelling, or a lecture or chapter number.</p>
              {others.length > 0 && (
                <div className="lx-search-chips">
                  <span className="lx-meta">Try:</span>
                  {others.map((s) => (
                    <button key={s.text} type="button" className="lx-chip lx-chip-btn" onClick={() => navigate({ name: 'search', q: s.text }, { replace: true })}>
                      {s.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
