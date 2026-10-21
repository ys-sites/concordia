import React from 'react';

// Keeps a failed render from unmounting the whole site.
// If a chunk fails to load (e.g. after a new build deploy), automatically reloads
// the page silently without trapping the user on a static error prompt.
const isChunkError = (e: unknown) =>
  /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading (CSS )?chunk|ChunkLoadError|Unable to preload CSS/i.test(
    String((e as Error)?.message ?? e)
  );

function autoReloadOnChunk(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const attempts = Number(sessionStorage.getItem('chunk_reload_attempts') || '0');
    if (attempts < 3) {
      sessionStorage.setItem('chunk_reload_attempts', String(attempts + 1));
      window.location.reload();
      return true;
    }
  } catch {
    window.location.reload();
    return true;
  }
  return false;
}

interface Props {
  children: React.ReactNode;
  resetKey?: string;
}

interface State {
  error: Error | null;
}

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    if (isChunkError(error)) {
      autoReloadOnChunk();
    }
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('[AppErrorBoundary]', error);
    if (isChunkError(error)) {
      autoReloadOnChunk();
    }
  }

  componentDidUpdate(prev: Props) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    const chunk = isChunkError(error);

    // If chunk error, auto-reload was dispatched; show seamless loader instead of a broken card
    if (chunk) {
      return (
        <div
          role="status"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '40vh',
            padding: '48px 16px',
            color: '#64748b',
            fontFamily: 'Inter, system-ui, sans-serif',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              border: '3px solid #cbd5e1',
              borderTopColor: '#3b82f6',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              marginBottom: 16
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#334155' }}>
            Updating study hub to latest version...
          </div>
          <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>
            Syncing new exam content
          </div>
        </div>
      );
    }

    const btn: React.CSSProperties = {
      padding: '10px 18px',
      borderRadius: 10,
      border: 'none',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer'
    };

    return (
      <div role="alert" style={{ display: 'flex', justifyContent: 'center', padding: '64px 16px' }}>
        <div
          style={{
            maxWidth: 520,
            width: '100%',
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: 16,
            padding: '28px 28px 24px',
            boxShadow: '0 12px 32px rgba(15,23,42,.08)',
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#0f172a'
          }}
        >
          <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800 }}>
            This page did not load properly
          </h2>
          <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.55, color: '#475569' }}>
            Something went wrong while showing this page. Reloading usually fixes it. If it keeps
            happening, reset the progress saved in this browser and reload.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              type="button"
              style={{ ...btn, background: '#4f46e5', color: '#fff' }}
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
            <button
              type="button"
              style={{
                ...btn,
                background: '#f1f5f9',
                color: '#0f172a',
                border: '1px solid #cbd5e1'
              }}
              onClick={() => {
                try {
                  localStorage.clear();
                  sessionStorage.clear();
                } catch {}
                window.location.reload();
              }}
            >
              Reset saved progress &amp; reload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppErrorBoundary;
