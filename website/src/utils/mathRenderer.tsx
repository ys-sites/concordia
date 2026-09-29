import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    renderMathInElement?: (elem: HTMLElement, options?: any) => void;
  }
}

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && window.renderMathInElement) {
      try {
        window.renderMathInElement(containerRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  }, [text]);

  return (
    <span ref={containerRef} className={`math-content ${className}`}>
      {text}
    </span>
  );
};
