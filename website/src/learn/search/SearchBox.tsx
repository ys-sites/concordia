import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, BookOpen, CalendarClock, Clock3, FileText, GraduationCap, HelpCircle, PlayCircle, Search, X } from 'lucide-react';
import { COURSE_BY_ID, courseClass } from '../courses';
import { openDoc } from '../docBus';
import { navigate } from '../router';
import { VideoThumb } from '../components/VideoThumb';
import type { Entry, HitKind, SearchIndex, Suggestion } from './engine';
import { loadIndex, queryWords, recentSearches, rememberSearch, search, suggest } from './engine';
import { Hl, plainMath } from './Highlight';
import './search.css';

export const KIND_ICON: Record<HitKind, React.ReactNode> = {
  course: <GraduationCap size={16} aria-hidden />,
  lesson: <BookOpen size={16} aria-hidden />,
  video: <PlayCircle size={16} aria-hidden />,
  question: <HelpCircle size={16} aria-hidden />,
  document: <FileText size={16} aria-hidden />,
  date: <CalendarClock size={16} aria-hidden />
};
export const KIND_NAME: Record<HitKind, string> = { course: 'Course', lesson: 'Lesson', video: 'Video', question: 'Question', document: 'Document', date: 'Date' };

export function openEntry(e: Entry) {
  if (e.doc) openDoc(e.doc);
  else if (e.to) window.location.hash = e.to.replace(/^#/, '');
}

type Item = { type: 'recent'; text: string } | { type: 'suggest'; s: Suggestion } | { type: 'hit'; e: Entry } | { type: 'all' };

// The search box with Google-style suggestions: what you have typed completes into phrases from the site, the
// best direct matches are one click away, and Enter shows every result.
export const SearchBox: React.FC<{
  value: string;
  onChange: (q: string) => void;
  onSubmit: (q: string) => void;
  variant?: 'top' | 'page';
  autoFocus?: boolean;
  placeholder?: string;
}> = ({ value, onChange, onSubmit, variant = 'top', autoFocus, placeholder = 'Search lessons, videos, questions, notes…' }) => {
  const [idx, setIdx] = useState<SearchIndex | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [recent, setRecent] = useState<string[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();

  const warm = () => {
    setRecent(recentSearches());
    if (!idx) loadIndex().then(setIdx);
  };
  useEffect(() => {
    if (autoFocus) warm();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const q = value.trim();
  const items: Item[] = useMemo(() => {
    if (!q) return recent.map((text) => ({ type: 'recent' as const, text }));
    if (!idx) return [];
    const sug = suggest(idx, q, variant === 'top' ? 5 : 7).map((s) => ({ type: 'suggest' as const, s }));
    if (variant === 'page') return sug;
    const hits = search(idx, q)
      .slice(0, 5)
      .map((h) => ({ type: 'hit' as const, e: h.e }));
    return [...sug, ...hits, { type: 'all' as const }];
  }, [q, idx, recent, variant]);
  useEffect(() => setActive(-1), [q]);

  const ws = queryWords(q);
  const close = () => {
    setOpen(false);
    setActive(-1);
  };
  const go = (text: string) => {
    onChange(text);
    rememberSearch(text);
    onSubmit(text);
    close();
    input.current?.blur();
  };
  const act = (it: Item) => {
    if (it.type === 'recent') go(it.text);
    else if (it.type === 'suggest') go(it.s.text);
    else if (it.type === 'all') go(q);
    else {
      rememberSearch(q);
      close();
      input.current?.blur();
      openEntry(it.e);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setOpen(true);
      if (!items.length) return;
      setActive((a) => (e.key === 'ArrowDown' ? (a + 1) % items.length : a <= 0 ? items.length - 1 : a - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (open && active >= 0 && items[active]) act(items[active]);
      else if (q) go(q);
    } else if (e.key === 'Escape') {
      if (open) close();
      else onChange('');
    }
  };

  const show = open && items.length > 0;
  const optId = (i: number) => `${listId}-o${i}`;
  let lastGroup = '';
  const group = (it: Item) => (it.type === 'recent' ? 'Recent searches' : it.type === 'hit' ? 'Top results' : it.type === 'suggest' ? 'Suggestions' : '');

  return (
    <div className={`lx-sbox is-${variant}${show ? ' is-open' : ''}`}>
      <form
        className={`lx-search${variant === 'page' ? ' lx-search--page' : ''}`}
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (q) go(q);
        }}
      >
        <Search size={18} aria-hidden />
        <input
          ref={input}
          type="search"
          role="combobox"
          aria-expanded={show}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={show && active >= 0 ? optId(active) : undefined}
          aria-label="Search the courses"
          autoComplete="off"
          spellCheck={false}
          autoFocus={autoFocus}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            warm();
            setOpen(true);
          }}
          onBlur={() => setTimeout(close, 120)}
          onKeyDown={onKey}
        />
        {value && (
          <button type="button" className="lx-sbox-clear" aria-label="Clear the search" onMouseDown={(e) => e.preventDefault()} onClick={() => (onChange(''), input.current?.focus())}>
            <X size={16} />
          </button>
        )}
      </form>
      {show && (
        <ul className="lx-sbox-list" id={listId} role="listbox" aria-label="Search suggestions" onMouseDown={(e) => e.preventDefault()}>
          {items.map((it, i) => {
            const g = group(it);
            const head = g && g !== lastGroup ? <li className="lx-sbox-group" role="presentation">{g}</li> : null;
            lastGroup = g || lastGroup;
            const common = { id: optId(i), role: 'option', 'aria-selected': i === active, onMouseEnter: () => setActive(i), onClick: () => act(it) };
            return (
              <React.Fragment key={i}>
                {head}
                {it.type === 'recent' && (
                  <li {...common} className={`lx-sbox-opt${i === active ? ' is-active' : ''}`}>
                    <Clock3 size={16} aria-hidden className="lx-sbox-icon" />
                    <span className="lx-sbox-text">{it.text}</span>
                    <button
                      type="button"
                      className="lx-sbox-x"
                      aria-label={`Remove ${it.text} from recent searches`}
                      onClick={(e) => {
                        e.stopPropagation();
                        rememberSearch(it.text, true);
                        setRecent(recentSearches());
                      }}
                    >
                      <X size={14} />
                    </button>
                  </li>
                )}
                {it.type === 'suggest' && (
                  <li {...common} className={`lx-sbox-opt${i === active ? ' is-active' : ''}`}>
                    <Search size={16} aria-hidden className="lx-sbox-icon" />
                    <span className="lx-sbox-text">
                      {it.s.text.slice(0, it.s.typed[1])}
                      <b>{it.s.text.slice(it.s.typed[1])}</b>
                    </span>
                  </li>
                )}
                {it.type === 'hit' && (
                  <li {...common} className={`lx-sbox-opt lx-sbox-hit${i === active ? ' is-active' : ''} ${it.e.course ? courseClass(it.e.course) : ''}`}>
                    {it.e.kind === 'video' && it.e.poster ? (
                      <span className="lx-sbox-thumb">
                        <VideoThumb poster={it.e.poster} videoId={it.e.videoId} />
                      </span>
                    ) : (
                      <span className="lx-sbox-kind">{KIND_ICON[it.e.kind]}</span>
                    )}
                    <span className="lx-sbox-text">
                      <span className="lx-sbox-title">
                        <Hl text={it.e.math ? plainMath(it.e.title) : it.e.title} ws={ws} />
                      </span>
                      <span className="lx-sbox-sub">
                        {KIND_NAME[it.e.kind]} · {it.e.sub}
                      </span>
                    </span>
                    {it.e.course && <span className="lx-code-tag">{COURSE_BY_ID[it.e.course].code}</span>}
                  </li>
                )}
                {it.type === 'all' && (
                  <li {...common} className={`lx-sbox-opt lx-sbox-all${i === active ? ' is-active' : ''}`}>
                    <ArrowUpRight size={16} aria-hidden className="lx-sbox-icon" />
                    <span className="lx-sbox-text">
                      See all results for <b>“{q}”</b>
                    </span>
                    <kbd>Enter</kbd>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};

// the top bar's box: Enter (or a suggestion) opens the results page; on that page it searches as you type
export const TopSearch: React.FC<{ initial: string; live: boolean }> = ({ initial, live }) => {
  const [q, setQ] = useState(initial);
  useEffect(() => setQ(initial), [initial]);
  return (
    <SearchBox
      value={q}
      onChange={(v) => {
        setQ(v);
        if (live) navigate({ name: 'search', q: v }, { replace: true });
      }}
      onSubmit={(v) => navigate({ name: 'search', q: v })}
    />
  );
};
