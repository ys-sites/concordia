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

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (to - from) * easeOut);
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [to, from, duration]);

  const formatted = count.toLocaleString('en-US');

  return (
    <span ref={ref} className={className}>
      {separator === ',' ? formatted : formatted.replace(/,/g, separator)}
    </span>
  );
};

export default CountUp;
