import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import '../visual3d/guidedLearner.css';

/** Plays existing guided steps; this is a walkthrough, not a physical simulation. */
export const WalkthroughPlay: React.FC<{ count: number; onStart: () => void; onStep: (index: number) => void }> = ({ count, onStart, onStep }) => {
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const step = useRef(onStep);
  step.current = onStep;
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      const next = Math.min(indexRef.current + 1, count - 1);
      indexRef.current = next;
      setIndex(next);
      step.current(next);
      if (next >= count - 1) setPlaying(false);
    }, 6000);
    return () => window.clearInterval(id);
  }, [playing, count]);
  return <div className="lx-demo-controls">
    <button type="button" className="lx-btn lx-btn--primary" aria-pressed={playing} onClick={() => {
      if (playing) { setPlaying(false); return; }
      if (index >= count - 1 || index === 0) { indexRef.current = 0; setIndex(0); onStart(); }
      setPlaying(true);
    }}>
      {playing ? <Pause size={16} /> : <Play size={16} />} {playing ? 'Pause walkthrough' : index >= count - 1 ? 'Replay walkthrough' : 'Play walkthrough'}
    </button>
    <span className="lx-meta">Shows the guided steps, one at a time.</span>
  </div>;
};
