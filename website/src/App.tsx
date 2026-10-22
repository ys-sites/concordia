// base styles first, so page styles loaded after them can refine them
import './learn/styles/base.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import { safeLazy } from './utils/safeLazy';
import { formatRoute, parseRoute, useRoute } from './learn/router';
import { TopBar, MobileNav, Footer } from './learn/shell/TopBar';
import { Home } from './learn/pages/Home';
import { onOpenDoc } from './learn/docBus';
import { loadCurricula } from './learn/data';
import { addStudyTime, useSaveBlocked } from './learn/progress/store';
import { migrateOldProgress } from './learn/progress/migrate';
import type { DocRef } from './learn/model';

// The home page paints with no data beyond a few hundred bytes of course stats; everything else loads on demand.
const CoursePage = safeLazy(() => import('./learn/pages/CoursePage'));
const Player = safeLazy(() => import('./learn/pages/Player'));
const MyLearning = safeLazy(() => import('./learn/pages/MyLearning'));
const SearchPage = safeLazy(() => import('./learn/pages/SearchPage'));
const QuestionBank = safeLazy(() => import('./learn/pages/QuestionBank'));
const PracticePicker = safeLazy(() => import('./learn/components/PracticePicker'));
const DocViewer = safeLazy(() => import('./learn/components/DocViewer'));
const ContactModal = safeLazy(() => import('./components/ContactModal').then((m) => ({ default: m.ContactModal })));

const LEARNING_PAGES = new Set(['learn', 'bank']);

// A newer version of the site saved progress in another tab: this tab stops saving (so it cannot overwrite it)
const SaveBlocked: React.FC = () =>
  useSaveBlocked() ? (
    <div className="lx-toast lx-save-blocked" role="alert">
      <span>The site was updated in another tab. Reload to keep saving your progress.</span>
      <button type="button" onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  ) : null;

export function App() {
  const route = useRoute();
  const [doc, setDoc] = useState<DocRef | null>(null);
  const [contact, setContact] = useState<{ subject?: string; message?: string } | null>(null);
  const [practice, setPractice] = useState(false);

  // old links are rewritten to their new address, so the address bar always shows a real page
  useEffect(() => {
    const canonical = formatRoute(parseRoute(window.location.hash));
    if (window.location.hash !== canonical) window.history.replaceState(null, '', canonical);
  }, [route]);

  useEffect(() => onOpenDoc(setDoc), []);

  useEffect(() => {
    const open = (event: Event) => setContact((event as CustomEvent<{ subject?: string; message?: string }>).detail ?? {});
    window.addEventListener('concordia:feedback', open);
    return () => window.removeEventListener('concordia:feedback', open);
  }, []);

  // a legacy "?doc=" link opens its document on the course page
  useEffect(() => {
    if (route.name === 'course' && route.doc) setDoc({ path: route.doc, title: route.doc.split('/').pop()!.replace(/\.pdf$/i, '') });
  }, [route]);

  useEffect(() => {
    migrateOldProgress();
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback;
    const warm = () => loadCurricula().catch(() => {});
    if (idle) idle(warm);
    else setTimeout(warm, 1500);
  }, []);

  // braces matter: newer browsers return a Promise from scrollTo, which React would take for a clean-up function
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.name, route.name === 'course' ? route.course : '', route.name === 'learn' ? route.lesson : '']);

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
      <SaveBlocked />
      <main id="lx-main" className="lx-main" tabIndex={-1}>
        <AppErrorBoundary resetKey={window.location.hash}>
          <Suspense fallback={<div className="lx-route-loading" aria-busy="true" />}>
            {route.name === 'home' && <Home />}
            {route.name === 'course' && <CoursePage course={route.course} tab={route.tab} folder={route.folder} />}
            {route.name === 'learn' && <Player course={route.course} lessonId={route.lesson} stepId={route.step} />}
            {route.name === 'my-learning' && <MyLearning />}
            {route.name === 'search' && <SearchPage q={route.q} />}
            {route.name === 'bank' && <QuestionBank course={route.course} />}
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
      {doc && (
        <Suspense fallback={null}>
          <DocViewer doc={doc} onClose={() => setDoc(null)} />
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
