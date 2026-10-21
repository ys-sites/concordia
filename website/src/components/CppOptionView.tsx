import React from 'react';
import { Terminal } from 'lucide-react';
import './CppOptionView.css';

interface CppOptionViewProps {
  code: string;
}

interface Token {
  type: 'keyword' | 'type' | 'io' | 'number' | 'string' | 'comment' | 'operator' | 'ident' | 'space' | 'newline';
  text: string;
}

// Determines if an option is C++ code that should be rendered in a code structure box
export const isCodeOption = (text: string | undefined): boolean => {
  if (!text) return false;
  // If it contains multiline C++ syntax or keywords
  if (text.includes('\n')) {
    // Check if it's C++ code
    if (/(^|\n|\s)(int |double |float |char |bool |void |long |unsigned |while|for|if|else|do|cout|cin|return|break|#include)/.test(text)) {
      return true;
    }
    if (/[;{}].*[;{}]/.test(text) || text.includes('>>') || text.includes('<<')) {
      return true;
    }
  }
  // Single-line C++ code constructs
  return /(^|\s)(while\s*\(|for\s*\(|do\s*\{|cout\s*<<|cin\s*>>|break;|return\s+0;)/.test(text) ||
    (text.includes(';') && (text.includes('{') || text.includes('>>') || text.includes('<<')));
};

// Determines if an option represents multiline output (e.g. table trace or multi-number output)
export const isOutputOption = (text: string | undefined): boolean => {
  if (!text) return false;
  return text.includes('\n') && !isCodeOption(text);
};

export const tokenizeCpp = (code: string): Token[] => {
  const tokens: Token[] = [];
  const regex = /(\/\/[^\n]*)|("[^"]*")|(\b(?:while|for|do|if|else|break|continue|return|switch|case|default)\b)|(\b(?:int|double|float|char|bool|void|long|unsigned)\b)|(\b(?:cin|cout|endl|setprecision|scientific|fixed|setw)\b)|(-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b)|(<<|>>|==|!=|<=|>=|\+\+|--|[{}();,\[\]]|\+|-|\*|\/|=|<|>|!|&&|\|\|)|([a-zA-Z_]\w*)|([ \t]+)|(\n+)/g;

  let match;
  let lastIndex = 0;
  while ((match = regex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'ident', text: code.slice(lastIndex, match.index) });
    }
    if (match[1]) tokens.push({ type: 'comment', text: match[1] });
    else if (match[2]) tokens.push({ type: 'string', text: match[2] });
    else if (match[3]) tokens.push({ type: 'keyword', text: match[3] });
    else if (match[4]) tokens.push({ type: 'type', text: match[4] });
    else if (match[5]) tokens.push({ type: 'io', text: match[5] });
    else if (match[6]) tokens.push({ type: 'number', text: match[6] });
    else if (match[7]) tokens.push({ type: 'operator', text: match[7] });
    else if (match[8]) tokens.push({ type: 'ident', text: match[8] });
    else if (match[9]) tokens.push({ type: 'space', text: match[9] });
    else if (match[10]) tokens.push({ type: 'newline', text: match[10] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < code.length) {
    tokens.push({ type: 'ident', text: code.slice(lastIndex) });
  }
  return tokens;
};

export const CppOptionView: React.FC<CppOptionViewProps> = ({ code }) => {
  const tokens = React.useMemo(() => tokenizeCpp(code), [code]);

  return (
    <div className="cpp-opt-block">
      <div className="cpp-opt-header">
        <span className="cpp-opt-badge">&lt;/&gt; C++</span>
      </div>
      <pre className="cpp-opt-code">
        <code>
          {tokens.map((tok, i) => {
            if (tok.type === 'space' || tok.type === 'newline') {
              return tok.text;
            }
            return (
              <span key={i} className={`cpp-tok-${tok.type}`}>
                {tok.text}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
};

export const OutputOptionView: React.FC<{ output: string }> = ({ output }) => {
  return (
    <div className="output-opt-block">
      <div className="output-opt-header">
        <Terminal size={12} />
        <span>Output</span>
      </div>
      <pre className="output-opt-code">
        <code>{output}</code>
      </pre>
    </div>
  );
};
