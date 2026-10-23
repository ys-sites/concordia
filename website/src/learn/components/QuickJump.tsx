import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, BookOpen, Brain, Command, GraduationCap, Home, LayoutGrid, Search, X } from 'lucide-react';
import { COURSES } from '../courses';
import { navigate } from '../router';

type JumpItem = {
  label: string;
  detail: string;
  icon: React.ReactNode;
  go: () => void;
};

// A compact command palette keeps the portal quick to use once a student knows where they are going.
// It deliberately covers navigation and practice entry points only; detailed content search remains in TopSearch.
export const QuickJump: React.FC<{ onPractice: () => void }> = ({ onPractice }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const close = () => {
    setOpen(false);
    setQuery('');
    setActive(0);
  };

  const items = useMemo<JumpItem[]>(
    () => [
      { label: 'Go home', detail: 'Dashboard and course overview', icon: <Home size={17} aria-hidden />, go: () => navigate({ name: 'home' }) },
      { label: 'Open my learning', detail: 'Plans, reviews, and progress', icon: <LayoutGrid size={17} aria-hidden />, go: () => navigate({ name: 'my-learning' }) },
      { label: 'Search the library', detail: 'Lessons, videos, questions, and notes', icon: <Search size={17} aria-hidden />, go: () => navigate({ name: 'search', q: '' }) },
      { label: 'Browse question bank', detail: 'Filter practice by course or source', icon: <BookOpen size={17} aria-hidden />, go: () => navigate({ name: 'bank' }) },
      {
        label: 'Start a practice drill',
        detail: 'Build a focused quiz',
        icon: <Brain size={17} aria-hidden />,
        go: () => onPractice()
      },
      ...COURSES.map((course) => ({
        label: `Open ${course.code}`,
        detail: course.title,
        icon: <GraduationCap size={17} aria-hidden />,
        go: () => navigate({ name: 'course', course: course.id, tab: 'overview' })
      }))
    ],
    [onPractice]
  );

  const shown = useMemo(() => {
    const words = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    return words.length ? items.filter((item) => words.every((word) => `${item.label} ${item.detail}`.toLocaleLowerCase().includes(word))) : items;
  }, [items, query]);

  const choose = (item: JumpItem) => {
    close();
    item.go();
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target?.matches('input, textarea, select, [contenteditable="true"]');
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      } else if (!open && event.key === '/' && !typing) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => input.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) {
    return (
      <button type="button" className="lx-quickjump-trigger" onClick={() => setOpen(true)} aria-label="Open quick navigation">
        <Command size={16} aria-hidden />
        <span>Quick jump</span>
        <kbd>⌘ K</kbd>
      </button>
    );
  }

  return (
    <div className="lx-command-backdrop" role="presentation" onMouseDown={close}>
      <section className="lx-command" role="dialog" aria-modal="true" aria-labelledby="lx-command-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="lx-command-input">
          <Search size={19} aria-hidden />
          <label className="lx-sr" htmlFor="quick-jump-search">Quick navigation</label>
          <input
            id="quick-jump-search"
            ref={input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Jump to a course or action…"
            onKeyDown={(event) => {
              if (event.key === 'Escape') close();
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                setActive((value) => Math.min(value + 1, Math.max(0, shown.length - 1)));
              }
              if (event.key === 'ArrowUp') {
                event.preventDefault();
                setActive((value) => Math.max(value - 1, 0));
              }
              if (event.key === 'Enter' && shown[active]) {
                event.preventDefault();
                choose(shown[active]);
              }
            }}
          />
          <button type="button" className="lx-icon-btn" onClick={close} aria-label="Close quick navigation"><X size={18} /></button>
        </div>
        <div className="lx-command-head">
          <span id="lx-command-title">Quick navigation</span>
          <span><kbd>↑</kbd><kbd>↓</kbd> to move <kbd>↵</kbd> to open</span>
        </div>
        <ul className="lx-command-list" role="listbox" aria-label="Quick navigation results">
          {shown.length ? shown.map((item, index) => (
            <li key={item.label} role="option" aria-selected={index === active}>
              <button type="button" className={index === active ? 'is-active' : ''} onMouseEnter={() => setActive(index)} onClick={() => choose(item)}>
                <span className="lx-command-icon">{item.icon}</span>
                <span><strong>{item.label}</strong><small>{item.detail}</small></span>
                <ArrowUpRight size={16} aria-hidden />
              </button>
            </li>
          )) : <li className="lx-command-empty">No matching page or action.</li>}
        </ul>
      </section>
    </div>
  );
};
