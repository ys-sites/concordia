import React, { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  separator?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 1.2,
  className = '',
  separator = ','
}) => {
  const [count, setCount] = useState<number>(from);
  const ref = useRef<HTMLSpanElement>(null);
  const prevToRef = useRef<number>(from);

  useEffect(() => {
    const startFrom = prevToRef.current;
    if (startFrom === to) {
      setCount(to);
      return;
    }

    let startTimestamp: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startFrom + (to - startFrom) * easeOut);
      setCount(current);

      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      } else {
        setCount(to);
        prevToRef.current = to;
      }
    };

    animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [to, duration]);

  const formatted = count.toLocaleString('en-US');

  return (
    <span ref={ref} className={className}>
      {separator === ',' ? formatted : formatted.replace(/,/g, separator)}
    </span>
  );
};

export default CountUp;
