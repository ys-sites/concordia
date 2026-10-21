import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import './index.css';

// After a new deploy, an open tab may ask for code chunks that no longer exist.
// Reload once with a 30-second cooldown to pick up the new build without looping or glitching.
window.addEventListener('vite:preloadError', (event) => {
  try {
    const lastReload = Number(sessionStorage.getItem('chunk_reload_time') || '0');
    const now = Date.now();
    if (now - lastReload < 30000) {
      console.warn('[Vite] Chunk preload error detected; reload suppressed to prevent infinite loop.');
      return;
    }
    sessionStorage.setItem('chunk_reload_time', String(now));
  } catch {
    // Storage blocked or private mode: proceed with single reload
  }
  event.preventDefault();
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
