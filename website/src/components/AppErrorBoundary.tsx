import React from 'react';

// Keeps a failed render from unmounting the whole site (which leaves only the blank page background).
// A missing code chunk after a deploy triggers one reload (same 30 s cooldown as the vite:preloadError
// handler in main.tsx); anything else shows a small recovery card. Styles are inline so the card still
// renders when a CSS chunk is the thing that failed.
const RELOAD_KEY = 'chunk_reload_time';
const isChunkError = (e: unknown) =>
  /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading (CSS )?chunk|ChunkLoadError|Unable to preload CSS/i.test(
    String((e as Error)?.message ?? e)
  );

function reloadOnce(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || '0');
    if (Date.now() - last < 30000) return false;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    // storage blocked: still allow a single reload
  }
  window.location.reload();
  return true;
}

interface Props {
  children: React.ReactNode;
  // when this changes (e.g. the route), a previous error is cleared so navigation works again
  resetKey?: string;
}
interface State {
  error: Error | null;
}

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('[AppErrorBoundary]', error);
    if (isChunkError(error)) reloadOnce();
  }

  componentDidUpdate(prev: Props) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null });
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    const chunk = isChunkError(error);
    const btn: React.CSSProperties = { padding: '10px 18px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' };
    return (
      <div role="alert" style={{ display: 'flex', justifyContent: 'center', padding: '64px 16px' }}>
        <div style={{ maxWidth: 520, width: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '28px 28px 24px', boxShadow: '0 12px 32px rgba(15,23,42,.08)', fontFamily: 'Inter, system-ui, sans-serif', color: '#0f172a' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800 }}>{chunk ? 'The site was just updated' : 'This page did not load properly'}</h2>
          <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.55, color: '#475569' }}>
            {chunk
              ? 'A newer version of the study hub is available. Reload to continue where you were.'
              : 'Something went wrong while showing this page. Reloading usually fixes it. If it keeps happening, reset the progress saved in this browser and reload.'}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" style={{ ...btn, background: '#4f46e5', color: '#fff' }} onClick={() => window.location.reload()}>
              Reload page
            </button>
            {!chunk && (
              <button
                type="button"
                style={{ ...btn, background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1' }}
                onClick={() => {
                  try {
                    localStorage.clear();
                    sessionStorage.clear();
                  } catch {
                    // storage blocked: reload anyway
                  }
                  window.location.reload();
                }}
              >
                Reset saved progress &amp; reload
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AppErrorBoundary;
