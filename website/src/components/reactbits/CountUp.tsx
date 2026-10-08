import React, { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  separator?: string;
}

const fmt = (n: number, separator: string) => {
  const s = n.toLocaleString('en-US');
  return separator === ',' ? s : s.replace(/,/g, separator);
};

// Counts up by writing straight to the DOM node each frame, so React does not re-render
// 60 times a second. Users who prefer reduced motion get the final number at once.
const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 1.2,
  className = '',
  separator = ','
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prevToRef = useRef<number>(from);
  const [, setDone] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const startFrom = prevToRef.current;
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!el || startFrom === to || reduce) {
      if (el) el.textContent = fmt(to, separator);
      prevToRef.current = to;
      return;
    }

    let startTimestamp: number | null = null;
    let animId: number;
    let last = '';
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const text = fmt(Math.floor(startFrom + (to - startFrom) * easeOut), separator);
      if (text !== last) {
        el.textContent = text;
        last = text;
      }
      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      } else {
        el.textContent = fmt(to, separator);
        prevToRef.current = to;
        setDone((n) => n + 1);
      }
    };

    animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [to, duration, separator]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {fmt(prevToRef.current, separator)}
    </span>
  );
};

export default CountUp;
