import React from 'react';

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
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('[AppErrorBoundary]', error);
  }

  componentDidUpdate(prev: Props) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

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
            We couldn’t open that view
          </h2>
          <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.55, color: '#475569' }}>
            Your saved learning progress is safe. Return to your courses and continue from there.
          </p>
          <div>
            <button
              type="button"
              style={{ ...btn, background: '#4f46e5', color: '#fff' }}
              onClick={() => {
                this.setState({ error: null });
                window.location.hash = '#/';
              }}
            >
              Back to my courses
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppErrorBoundary;
