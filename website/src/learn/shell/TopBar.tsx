import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ChevronDown, Flame, Home, Search, Library, LayoutGrid } from 'lucide-react';
import { BrandMark } from '../../components/BrandMark';
import { COURSES, courseClass } from '../courses';
import { href, navigate, Route } from '../router';
import { streak, useProgress } from '../progress/store';
import './shell.css';

const CoursesMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', close);
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('mousedown', close);
      window.removeEventListener('keydown', close);
    };
  }, [open]);
  return (
    <div className="lx-menu-wrap" ref={ref}>
      <button type="button" className="lx-top-link" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((o) => !o)}>
        Courses <ChevronDown size={15} />
      </button>
      {open && (
        <div className="lx-menu" role="menu">
          {COURSES.map((c) => (
            <a key={c.id} role="menuitem" className={`lx-menu-item ${courseClass(c.id)}`} href={href({ name: 'course', course: c.id, tab: 'overview' })} onClick={() => setOpen(false)}>
              <span className="lx-menu-swatch" aria-hidden />
              <span>
                <strong>{c.code}</strong>
                <span className="lx-meta">{c.short}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const TopBar: React.FC<{ route: Route }> = ({ route }) => {
  const [q, setQ] = useState(route.name === 'search' ? route.q : '');
  const days = useProgress((s) => s.days);
  const run = streak(days);
  useEffect(() => {
    if (route.name === 'search') setQ(route.q);
  }, [route]);
  return (
    <header className="lx-top">
      <div className="lx-top-inner">
        <a className="lx-brand" href="#/" aria-label="Concordia Engineering Hub, home">
          <BrandMark size={32} />
          <span>
            Engineering <b>Hub</b>
          </span>
        </a>
        <nav className="lx-top-nav" aria-label="Main">
          <CoursesMenu />
        </nav>
        <form
          className="lx-search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ name: 'search', q: q.trim() });
          }}
        >
          <Search size={18} aria-hidden />
          <input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              if (route.name === 'search') navigate({ name: 'search', q: e.target.value }, { replace: true });
            }}
            placeholder="Search lessons, videos, questions, notes…"
            aria-label="Search the courses"
          />
        </form>
        <nav className="lx-top-nav lx-top-right" aria-label="Your learning">
          <a className={`lx-top-link${route.name === 'bank' ? ' is-active' : ''}`} href="#/bank">
            Question bank
          </a>
          <a className={`lx-top-link${route.name === 'my-learning' ? ' is-active' : ''}`} href="#/my-learning">
            My learning
            {run > 0 && (
              <span className="lx-streak" title={`${run}-day study streak`}>
                <Flame size={14} aria-hidden /> {run}
              </span>
            )}
          </a>
        </nav>
        <a className="lx-icon-btn lx-top-search-btn" href="#/search" aria-label="Search">
          <Search size={20} />
        </a>
      </div>
    </header>
  );
};

export const MobileNav: React.FC<{ route: Route }> = ({ route }) => {
  const items = [
    { r: { name: 'home' } as Route, label: 'Home', icon: Home, on: route.name === 'home' },
    { r: { name: 'search', q: '' } as Route, label: 'Search', icon: Search, on: route.name === 'search' },
    { r: { name: 'my-learning' } as Route, label: 'My learning', icon: BookOpen, on: route.name === 'my-learning' },
    { r: { name: 'bank' } as Route, label: 'Questions', icon: Library, on: route.name === 'bank' }
  ];
  if (route.name === 'learn') return null;
  return (
    <nav className="lx-mobile-nav" aria-label="Main">
      {items.map(({ r, label, icon: Icon, on }) => (
        <a key={label} href={href(r)} className={on ? 'is-active' : ''} aria-current={on ? 'page' : undefined}>
          <Icon size={20} aria-hidden />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export const Footer: React.FC<{ onContact: () => void }> = ({ onContact }) => (
  <footer className="lx-footer">
    <div className="lx-wrap lx-footer-inner">
      <div className="lx-footer-brand">
        <BrandMark size={28} />
        <div>
          <strong>Concordia Engineering Hub</strong>
          <p className="lx-meta">A free study path for four Fall 2026 engineering courses. Your progress stays in this browser; no account needed.</p>
        </div>
      </div>
      <nav className="lx-footer-links" aria-label="Footer">
        {COURSES.map((c) => (
          <a key={c.id} href={href({ name: 'course', course: c.id, tab: 'overview' })}>
            {c.code} · {c.short}
          </a>
        ))}
      </nav>
      <nav className="lx-footer-links" aria-label="More">
        <a href="#/my-learning">
          <LayoutGrid size={14} aria-hidden /> My learning
        </a>
        <a href="#/bank">
          <Library size={14} aria-hidden /> Question bank
        </a>
        <button type="button" className="lx-linklike" onClick={onContact}>
          Contact & feedback
        </button>
      </nav>
    </div>
    <div className="lx-wrap lx-footer-note lx-meta">Independent student study material. Not an official Concordia University website.</div>
  </footer>
);
