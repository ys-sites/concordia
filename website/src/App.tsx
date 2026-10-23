// base styles first, so page styles loaded after them can refine them
import './learn/styles/base.css';
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import { safeLazy } from './utils/safeLazy';
import { formatRoute, parseRoute, useRoute } from './learn/router';
import { TopBar, MobileNav, Footer } from './learn/shell/TopBar';
import { Home } from './learn/pages/Home';
import { getPdfUrl } from './utils/pdfUrl';
import { loadCurricula } from './learn/data';
import { addStudyTime } from './learn/progress/store';
import { migrateOldProgress } from './learn/progress/migrate';

// The home page paints with no data beyond a few hundred bytes of course stats; everything else loads on demand.
const CoursePage = safeLazy(() => import('./learn/pages/CoursePage'));
const Player = safeLazy(() => import('./learn/pages/Player'));
const MyLearning = safeLazy(() => import('./learn/pages/MyLearning'));
const SearchPage = safeLazy(() => import('./learn/pages/SearchPage'));
const QuestionBank = safeLazy(() => import('./learn/pages/QuestionBank'));
const PracticeBuilder = safeLazy(() => import('./learn/pages/PracticeBuilder'));
const PracticePicker = safeLazy(() => import('./learn/components/PracticePicker'));
const ContactModal = safeLazy(() => import('./components/ContactModal').then((m) => ({ default: m.ContactModal })));

const LEARNING_PAGES = new Set(['learn', 'bank']);

// Instant navigation: the browser must never restore a stale scroll position over the app's own
// scroll-to-top, and every page chunk is warmed in the background (and on the first tap anywhere)
// so moving between pages never waits on a download.
if (typeof history !== 'undefined') history.scrollRestoration = 'manual';
const PAGE_CHUNKS: (() => Promise<unknown>)[] = [
  () => import('./learn/pages/CoursePage'),
  () => import('./learn/pages/Player'),
  () => import('./learn/pages/MyLearning'),
  () => import('./learn/pages/SearchPage'),
  () => import('./learn/pages/QuestionBank'),
  () => import('./learn/pages/PracticeBuilder'),
  () => import('./learn/components/PracticePicker')
];
let chunksWarm = false;
const warmChunks = () => {
  if (chunksWarm) return;
  chunksWarm = true;
  PAGE_CHUNKS.forEach((load, i) => setTimeout(() => load().catch(() => {}), i * 120));
};

export function App() {
  const route = useRoute();
  const [contact, setContact] = useState<{ subject?: string; message?: string } | null>(null);
  const [practice, setPractice] = useState(false);

  // old links are rewritten to their new address, so the address bar always shows a real page
  useEffect(() => {
    const canonical = formatRoute(parseRoute(window.location.hash));
    if (window.location.hash !== canonical) window.history.replaceState(null, '', canonical);
  }, [route]);

  useEffect(() => {
    const open = (event: Event) => setContact((event as CustomEvent<{ subject?: string; message?: string }>).detail ?? {});
    window.addEventListener('concordia:feedback', open);
    return () => window.removeEventListener('concordia:feedback', open);
  }, []);

  // a legacy "?doc=" link goes straight to its document
  useEffect(() => {
    if (route.name === 'course' && route.doc) window.location.replace(getPdfUrl(route.doc));
  }, [route]);

  useEffect(() => {
    migrateOldProgress();
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback;
    const warm = () => {
      loadCurricula().catch(() => {});
      warmChunks();
    };
    if (idle) idle(warm);
    else setTimeout(warm, 1500);
    // the first touch or click anywhere also warms the page chunks, ahead of the navigation it starts
    const intent = (e: Event) => {
      if ((e.target as Element | null)?.closest?.('a[href^="#/"], button')) warmChunks();
    };
    window.addEventListener('pointerdown', intent, { capture: true, passive: true });
    window.addEventListener('touchstart', intent, { capture: true, passive: true });
    return () => {
      window.removeEventListener('pointerdown', intent, true);
      window.removeEventListener('touchstart', intent, true);
    };
  }, []);

  // every navigation opens at the top of the new page: the key covers the whole route (page, course,
  // tab, folder, lesson, step, builder), so nothing lands mid-page the way it used to. Search typing is
  // the one exception — the results update in place under the reader.
  const routeKey = route.name === 'search' ? 'search' : formatRoute(route);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [routeKey]);

  // study time: counted in 15-second ticks while a lesson or the question bank is open and visible
  useEffect(() => {
    if (!LEARNING_PAGES.has(route.name)) return;
    const t = setInterval(() => document.visibilityState === 'visible' && addStudyTime(15), 15_000);
    return () => clearInterval(t);
  }, [route.name]);

  const player = route.name === 'learn';
  return (
    <div className={`lx-app${player ? ' is-player' : ' has-mobile-nav'}`}>
      <a className="lx-skip" href="#lx-main" onClick={(e) => (e.preventDefault(), document.getElementById('lx-main')?.focus())}>
        Skip to content
      </a>
      {!player && <TopBar route={route} onPractice={() => setPractice(true)} />}
      <main id="lx-main" className="lx-main" tabIndex={-1}>
        <AppErrorBoundary resetKey={window.location.hash}>
          <Suspense fallback={<div className="lx-route-loading" aria-busy="true"><span className="lx-route-spinner" aria-hidden /></div>}>
            {route.name === 'home' && <Home />}
            {route.name === 'course' && <CoursePage course={route.course} tab={route.tab} folder={route.folder} />}
            {route.name === 'learn' && <Player course={route.course} lessonId={route.lesson} stepId={route.step} />}
            {route.name === 'my-learning' && <MyLearning />}
            {route.name === 'search' && <SearchPage q={route.q} />}
            {route.name === 'bank' && <QuestionBank course={route.course} />}
            {route.name === 'practice' && <PracticeBuilder key={route.course} course={route.course} />}
          </Suspense>
        </AppErrorBoundary>
      </main>
      {!player && <Footer onContact={() => setContact({})} />}
      <MobileNav route={route} onPractice={() => setPractice(true)} />
      {practice && (
        <Suspense fallback={null}>
          <PracticePicker onClose={() => setPractice(false)} initial={route.name === 'course' ? route.course : null} />
        </Suspense>
      )}
      {contact && (
        <Suspense fallback={null}>
          <ContactModal isOpen initialSubject={contact.subject} initialMessage={contact.message} onClose={() => setContact(null)} />
        </Suspense>
      )}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
