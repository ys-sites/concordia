import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Brain, ChevronDown, Flame, Home, Search, Library, LayoutGrid } from 'lucide-react';
import { BrandMark } from '../../components/BrandMark';
import { VisitorCounter } from '../../components/VisitorCounter';
import { COURSES, courseClass } from '../courses';
import { href, navigate, Route } from '../router';
import { streak, useProgress } from '../progress/store';
import { TopSearch } from '../search/SearchBox';
import { QuickJump } from '../components/QuickJump';
import './shell.css';
import '../components/practicePicker.css';

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

export const TopBar: React.FC<{ route: Route; onPractice: () => void }> = ({ route, onPractice }) => {
  const days = useProgress((s) => s.days);
  const run = streak(days);
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
        <TopSearch initial={route.name === 'search' ? route.q : ''} live={route.name === 'search'} />
        <QuickJump onPractice={onPractice} />
        <nav className="lx-top-nav lx-top-right" aria-label="Your learning">
          <button type="button" className="lx-top-link lx-top-practice" onClick={onPractice}>
            <Brain size={16} aria-hidden /> Start a practice drill
          </button>
          <a className={`lx-top-link${route.name === 'my-learning' ? ' is-active' : ''}`} href="#/my-learning">
            My learning
            {run > 0 && (
              <span className="lx-streak" title={`${run}-day study streak`}>
                <Flame size={14} fill="currentColor" strokeWidth={2.25} aria-hidden /> {run}
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

export const MobileNav: React.FC<{ route: Route; onPractice: () => void }> = ({ route, onPractice }) => {
  if (route.name === 'learn') return null;
  return (
    <nav className="lx-mobile-nav" aria-label="Main">
      <a href="#/" className={route.name === 'home' ? 'is-active' : ''} aria-current={route.name === 'home' ? 'page' : undefined}>
        <Home size={20} aria-hidden />
        <span>Home</span>
      </a>
      <button type="button" onClick={onPractice}>
        <Brain size={20} aria-hidden />
        <span>Practice</span>
      </button>
      <a href="#/search" className={route.name === 'search' ? 'is-active' : ''} aria-current={route.name === 'search' ? 'page' : undefined}>
        <Search size={20} aria-hidden />
        <span>Search</span>
      </a>
      <a href="#/my-learning" className={route.name === 'my-learning' ? 'is-active' : ''} aria-current={route.name === 'my-learning' ? 'page' : undefined}>
        <BookOpen size={20} aria-hidden />
        <span>My learning</span>
      </a>
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
        <div className="lx-footer-live">
          <span className="lx-meta">Live site activity</span>
          <VisitorCounter />
        </div>
      </nav>
    </div>
    <div className="lx-wrap lx-footer-note lx-meta">Independent student study material. Not an official Concordia University website.</div>
  </footer>
);
