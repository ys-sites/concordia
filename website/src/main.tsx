import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// After a new deploy, an open tab may ask for code chunks that no longer exist.
// Reload once to pick up the new build instead of showing a broken screen.
window.addEventListener('vite:preloadError', (event) => {
  try {
    if (sessionStorage.getItem('chunk_reload')) return;
    sessionStorage.setItem('chunk_reload', '1');
  } catch {
    // storage blocked: still reload once
  }
  event.preventDefault();
  window.location.reload();
});
window.addEventListener('load', () => {
  try {
    sessionStorage.removeItem('chunk_reload');
  } catch {
    // ignore
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
