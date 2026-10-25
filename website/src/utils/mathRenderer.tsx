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

// True for prose with $…$ formulas (as opposed to one bare formula). Such strings must go through
// MathText; typesetting them as a single equation makes KaTeX print its error text.
export const hasInlineMath = (s: string | undefined): boolean => !!s && /(^|[^\\])\$/.test(s);

const UNICODE_SUBS = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜ';
const UNICODE_SUPS = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ';
const SUB_MAP: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-', '₌': '=', '₍': '(', '₎': ')', 'ₐ': 'a', 'ₑ': 'e', 'ₕ': 'h', 'ᵢ': 'i', 'ⱼ': 'j',
  'ₖ': 'k', 'ₗ': 'l', 'ₘ': 'm', 'ₙ': 'n', 'ₒ': 'o', 'ₚ': 'p', 'ᵣ': 'r', 'ₛ': 's', 'ₜ': 't'
};
const SUP_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', '⁼': '=', '⁽': '(', '⁾': ')', 'ⁿ': 'n'
};

const BARE_NUMBER = String.raw`\d+(?:\.\d+)?(?:[eE][+\-−]?\d+)?[${UNICODE_SUPS}]*`;
const BARE_SYMBOL = String.raw`[A-Za-zα-ωΑ-Ω][A-Za-z0-9]*(?:_[A-Za-z0-9]+|[${UNICODE_SUBS}]+|[${UNICODE_SUPS}]+)*`;
const BARE_TERM = String.raw`[+\-−]?(?:${BARE_NUMBER}|${BARE_SYMBOL}|[πρσΔμλθω])`;
const BARE_OPERATOR = String.raw`(?:=|≈|≠|≤|≥|<|>|\+|−|-|±|×|\*|\/|\^|∝|→)`;
const BARE_EXPRESSION = String.raw`${BARE_TERM}(?:\s*${BARE_OPERATOR}\s*${BARE_TERM})+`;
const BARE_UNICODE_SCRIPT_IDENTIFIER = String.raw`[A-Za-zα-ωΑ-Ω][A-Za-z0-9]*(?:[${UNICODE_SUBS}]+|[${UNICODE_SUPS}]+)+(?![A-Za-z0-9_])`;
const BARE_MATH = new RegExp(`${BARE_EXPRESSION}|${BARE_UNICODE_SCRIPT_IDENTIFIER}`, 'g');
const BARE_PAREN_CONTENT = new RegExp(`^\\s*${BARE_TERM}(?:\\s*${BARE_OPERATOR}\\s*${BARE_TERM})*\\s*$`);
const RAW_TEX_MATH = /(?:\d+(?:\.\d+)?\s*)?\\[A-Za-z]+(?:\s*(?:=|≈|≠|≤|≥|<|>|\+|−|-|±|×|\*|\/|\^|∝|→)\s*\d+(?:\.\d+)?(?:\^\\[A-Za-z]+)?)?/g;

const normalizeScripts = (value: string, chars: string, map: Record<string, string>, marker: '_' | '^') =>
  value.replace(new RegExp(`([A-Za-z0-9)])([${chars}]+)`, 'g'), (_match, base: string, scripts: string) =>
    `${base}${marker}{${[...scripts].map((script) => map[script] ?? script).join('')}}`
  );

export const normalizeBareMath = (value: string): string => {
  let tex = value
    .replace(/[−–]/g, '-')
    .replace(/×/g, '\\times ')
    .replace(/÷/g, '\\div ')
    .replace(/·/g, '\\cdot ')
    .replace(/≈/g, '\\approx ')
    .replace(/≠/g, '\\ne ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/∝/g, '\\propto ')
    .replace(/→/g, '\\to ');
  tex = normalizeScripts(tex, UNICODE_SUBS, SUB_MAP, '_');
  tex = normalizeScripts(tex, UNICODE_SUPS, SUP_MAP, '^');
  tex = tex.replace(/([A-Za-z0-9)])_([A-Za-z0-9]+)/g, '$1_{$2}');
  return tex.replace(/([A-Za-z0-9)])\^([A-Za-z0-9+-]+)/g, '$1^{$2}');
};

const matchingParen = (input: string, openIndex: number): number => {
  let depth = 0;
  for (let index = openIndex; index < input.length; index++) {
    if (input[index] === '(') depth++;
    if (input[index] === ')' && --depth === 0) return index;
  }
  return -1;
};

const extendBareMath = (input: string, end: number): number => {
  let next = end;
  while (next < input.length) {
    if (input[next] === '(') {
      const close = matchingParen(input, next);
      if (close === -1 || !BARE_PAREN_CONTENT.test(input.slice(next + 1, close))) break;
      next = close + 1;
      continue;
    }
    if (input[next] === '/' && input[next + 1] === '(') {
      const close = matchingParen(input, next + 1);
      if (close === -1 || !BARE_PAREN_CONTENT.test(input.slice(next + 2, close))) break;
      next = close + 1;
      continue;
    }
    break;
  }
  return next;
};

const hasBareMathSignal = (value: string): boolean =>
  /[=≈≠≤≥×*/^∝→]/.test(value) || /[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(value) || (/[0-9]/.test(value) && /[+−-]/.test(value));

const splitBareMath = (input: string): Segment[] => {
  const segments: Segment[] = [];
  let index = 0;
  BARE_MATH.lastIndex = 0;
  for (let match = BARE_MATH.exec(input); match; match = BARE_MATH.exec(input)) {
    const start = match.index;
    const end = extendBareMath(input, start + match[0].length);
    const value = input.slice(start, end);
    const before = input[start - 1] ?? '';
    const after = input[end] ?? '';
    if (!hasBareMathSignal(value) || /[A-Za-z0-9_]/.test(before) || /[A-Za-z0-9_]/.test(after)) continue;
    if (start > index) segments.push({ kind: 'text', value: input.slice(index, start) });
    segments.push({ kind: 'math', value: normalizeBareMath(value), display: false });
    index = end;
    BARE_MATH.lastIndex = end;
  }
  if (index < input.length) segments.push({ kind: 'text', value: input.slice(index) });
  return segments.length ? segments : [{ kind: 'text', value: input }];
};

const splitAutoText = (input: string): Segment[] => {
  const segments: Segment[] = [];
  let index = 0;
  RAW_TEX_MATH.lastIndex = 0;
  for (let match = RAW_TEX_MATH.exec(input); match; match = RAW_TEX_MATH.exec(input)) {
    const start = match.index;
    if (start > index) segments.push(...splitBareMath(input.slice(index, start)));
    segments.push({ kind: 'math', value: match[0].replace(/\s+$/, ''), display: false });
    index = start + match[0].length;
  }
  if (index < input.length) segments.push(...splitBareMath(input.slice(index)));
  return segments.length ? segments : [{ kind: 'text', value: input }];
};

export const splitMath = (input: string, autoMath = false): Segment[] => {
  const out: Segment[] = [];
  const plainText = (value: string): Segment => ({ kind: 'text', value });
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
        if (text) out.push(...(autoMath ? splitAutoText(text) : [plainText(text)]));
        text = '';
        out.push({ kind: 'math', value: input.slice(i + delim.open.length, end), display: delim.display });
        i = end + delim.close.length;
        continue;
      }
    }
    text += input[i];
    i++;
  }
  if (text) out.push(...(autoMath ? splitAutoText(text) : [plainText(text)]));
  return out;
};

const sanitizeTex = (tex: string): string => {
  // If a command was accidentally double-escaped (e.g. \\frac, \\dfrac, \\partial, \\sin, \\cos, \\text),
  // KaTeX treats the leading \\ as a line break and renders the command name as plain text (e.g. "fracddx").
  // Normalize \\command to \command when directly followed by letters, preserving matrix row breaks.
  const normalized = tex.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
  // Older hand-authored answer text occasionally lost the slash before an operator when
  // JavaScript parsed a normal quoted string (for example, "3implies0"). Repair only the
  // small, unambiguous operator set and only inside a math segment.
  return normalized.replace(
    /([0-9A-Za-z)}])\s*(implies|Rightarrow|Longrightarrow|checkmark)\s*(?=[0-9A-Za-z({\\])/g,
    (_match, before: string, command: string) => `${before} \\${command} `
  );
};

// KaTeX is the slowest thing on most pages, and the same formulas re-render on every keystroke
// in a quiz. Rendered HTML is cached by (mode, tex) so each formula is typeset once per session.
const TEX_CACHE = new Map<string, string>();
const TEX_CACHE_MAX = 4000;

const renderTex = (tex: string, displayMode: boolean): string => {
  const key = (displayMode ? 'D' : 'I') + tex;
  const hit = TEX_CACHE.get(key);
  if (hit !== undefined) return hit;
  let html: string;
  try {
    const cleanTex = sanitizeTex(tex);
    html = katex.renderToString(cleanTex, { displayMode, throwOnError: false, strict: 'ignore', trust: false });
  } catch {
    html = tex.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string);
  }
  if (TEX_CACHE.size >= TEX_CACHE_MAX) TEX_CACHE.delete(TEX_CACHE.keys().next().value as string);
  TEX_CACHE.set(key, html);
  return html;
};

interface MathTextProps {
  text: string;
  className?: string;
  autoMath?: boolean;
}

const MathTextInner: React.FC<MathTextProps> = ({ text, className = '', autoMath = false }) => {
  const segments = useMemo(() => splitMath(text ?? '', autoMath), [text, autoMath]);
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

// Memoized: a parent re-render with the same text does no work at all
export const MathText = React.memo(MathTextInner);

// A display equation given as bare LaTeX (no delimiters), e.g. a line of working in a solution
export const MathBlock: React.FC<{ tex: string; className?: string }> = ({ tex, className = '' }) => {
  const html = useMemo(() => renderTex(tex, true), [tex]);
  return <div className={`math-block ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
};

// Detects whether an option is C++ code or multiline code/output so it can be typeset as monospace programming structure
export const isCodeOption = (text: string | undefined): boolean => {
  if (!text) return false;
  if (text.includes('\n')) return true;
  return /(^|\n)\s*(int |double |float |char |bool |while\s*\(|for\s*\(|if\s*\(|else|do\s*\{|cout\s*<<|cin\s*>>|return |break;|#include)/.test(text) ||
    /[;{}].*[;{}]/.test(text);
};

