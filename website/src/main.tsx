import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import './legacy.css';

// After a new deploy, an open tab may ask for code chunks that no longer exist.
// Silently and instantly reload to pick up the new build without blocking user interaction.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  try {
    const attempts = Number(sessionStorage.getItem('chunk_reload_attempts') || '0');
    if (attempts < 3) {
      sessionStorage.setItem('chunk_reload_attempts', String(attempts + 1));
      window.location.reload();
      return;
    }
  } catch {
    window.location.reload();
  }
});

// Clear reload attempts after page has loaded cleanly
setTimeout(() => {
  try {
    sessionStorage.removeItem('chunk_reload_attempts');
    sessionStorage.removeItem('chunk_reload_time');
  } catch {}
}, 3000);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
