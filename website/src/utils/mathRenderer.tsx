import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Text with LaTeX: $…$ inline, $$…$$ or \[…\] display, \(…\) inline. "\$" is a literal dollar sign.
// KaTeX is bundled (not loaded from a CDN) and rendered synchronously, so formulas never flash as
// raw LaTeX or stay unrendered when a script loads late.

type Segment = { kind: 'text'; value: string } | { kind: 'math'; value: string; display: boolean };

const DELIMITERS: { open: string; close: string; display: boolean }[] = [
  { open: '$$', close: '$$', display: true },
  { open: '\\[', close: '\\]', display: true },
  { open: '\\(', close: '\\)', display: false },
  { open: '$', close: '$', display: false }
];

// Index of `token` in `s` from `from`, ignoring occurrences escaped as "\$"
const findUnescaped = (s: string, token: string, from: number): number => {
  let i = s.indexOf(token, from);
  while (i !== -1 && token.startsWith('$') && i > 0 && s[i - 1] === '\\') i = s.indexOf(token, i + 1);
  return i;
};

export const splitMath = (input: string): Segment[] => {
  const out: Segment[] = [];
  let text = '';
  let i = 0;
  while (i < input.length) {
    if (input[i] === '\\' && input[i + 1] === '$') {
      text += '$';
      i += 2;
      continue;
    }
    const delim = DELIMITERS.find((d) => input.startsWith(d.open, i));
    if (delim) {
      const end = findUnescaped(input, delim.close, i + delim.open.length);
      if (end !== -1) {
        if (text) out.push({ kind: 'text', value: text });
        text = '';
        out.push({ kind: 'math', value: input.slice(i + delim.open.length, end), display: delim.display });
        i = end + delim.close.length;
        continue;
      }
    }
    text += input[i];
    i++;
  }
  if (text) out.push({ kind: 'text', value: text });
  return out;
};

const renderTex = (tex: string, displayMode: boolean): string => {
  try {
    return katex.renderToString(tex, { displayMode, throwOnError: false, strict: 'ignore', trust: false });
  } catch {
    return tex.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string);
  }
};

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const segments = useMemo(() => splitMath(text ?? ''), [text]);
  return (
    <span className={`math-content ${className}`}>
      {segments.map((seg, i) =>
        seg.kind === 'text' ? (
          <React.Fragment key={i}>{seg.value}</React.Fragment>
        ) : (
          <span
            key={i}
            className={seg.display ? 'math-display' : 'math-inline'}
            dangerouslySetInnerHTML={{ __html: renderTex(seg.value, seg.display) }}
          />
        )
      )}
    </span>
  );
};

// A display equation given as bare LaTeX (no delimiters), e.g. a line of working in a solution
export const MathBlock: React.FC<{ tex: string; className?: string }> = ({ tex, className = '' }) => {
  const html = useMemo(() => renderTex(tex, true), [tex]);
  return <div className={`math-block ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
};
