import React from 'react';
import { matcher } from './engine';

// The searched words, marked where they occur (at the start of words, like the search matches them)
export const Hl: React.FC<{ text: string; ws: string[] }> = ({ text, ws }) => {
  const re = matcher(ws);
  if (!re) return <>{text}</>;
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index! > last) parts.push(text.slice(last, m.index));
    parts.push(<mark key={m.index}>{m[0]}</mark>);
    last = m.index! + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
};

// $…$ maths as readable plain text, for places that do not typeset (the search suggestions)
const TEX: Record<string, string> = { '\\cdot': '·', '\\times': '×', '\\pi': 'π', '\\theta': 'θ', '\\alpha': 'α', '\\beta': 'β', '\\lambda': 'λ', '\\mu': 'μ', '\\sigma': 'σ', '\\omega': 'ω', '\\Delta': 'Δ', '\\infty': '∞', '\\le': '≤', '\\ge': '≥', '\\neq': '≠', '\\to': '→', '\\int': '∫', '\\sqrt': '√', '\\pm': '±' };
export const plainMath = (s: string) =>
  s.replace(/\$([^$]*)\$/g, (_, t: string) =>
    t
      .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
      .replace(/\\[a-zA-Z]+/g, (c) => TEX[c] ?? '')
      .replace(/[{}]/g, '')
      .replace(/\s+/g, ' ')
  );
