import React, { useState } from 'react';
import { Check, Code2, Copy, FileCode, Play } from 'lucide-react';
import { tokenizeCpp } from '../../components/CppOptionView';
import { CodeStepper } from '../cpp/CodeStepper';

export interface CodeBlockProps {
  code: string;
  label?: string;
  questionId?: string;
  prompt?: string;
  allowStepper?: boolean;
  defaultMode?: 'code' | 'stepper';
}

// C++ code card with refined light IDE aesthetic, line numbers, and integrated line-by-line stepping system
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  label,
  questionId,
  prompt,
  allowStepper = true,
  defaultMode = 'code'
}) => {
  const [mode, setMode] = useState<'code' | 'stepper'>(defaultMode);
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\r/g, '').replace(/\n+$/, '').split('\n');

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <figure className="lx-code" aria-label={label ?? 'Code'}>
      <header className="lx-code-header">
        <div className="lx-code-header-left">
          <div className="lx-code-dots" aria-hidden="true">
            <span className="lx-code-dot is-red" />
            <span className="lx-code-dot is-yellow" />
            <span className="lx-code-dot is-green" />
          </div>
          <span className="lx-code-title">
            <Code2 size={13} aria-hidden="true" />
            <span>{label ?? 'C++ Program'}</span>
          </span>
          <span className="lx-code-lines-count">{lines.length} lines</span>
        </div>

        <div className="lx-code-header-right">
          {allowStepper && (
            <div className="lx-code-modes" role="tablist" aria-label="Code display mode">
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'code'}
                className={`lx-code-mode-btn ${mode === 'code' ? 'is-active' : ''}`}
                onClick={() => setMode('code')}
                title="View full source code"
              >
                <FileCode size={13} aria-hidden="true" />
                <span>Code View</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'stepper'}
                className={`lx-code-mode-btn ${mode === 'stepper' ? 'is-active' : ''}`}
                onClick={() => setMode('stepper')}
                title="Step through execution line by line"
              >
                <Play size={13} aria-hidden="true" />
                <span>Line-by-Line Stepper</span>
              </button>
            </div>
          )}

          <button
            type="button"
            className="lx-code-copy-btn"
            onClick={handleCopy}
            title={copied ? 'Copied to clipboard!' : 'Copy source code'}
            aria-label="Copy code"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span className="lx-code-copy-label">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </header>

      {mode === 'stepper' && allowStepper ? (
        <div className="lx-code-stepper-wrap">
          <CodeStepper code={code} questionId={questionId} prompt={prompt} />
        </div>
      ) : (
        <pre>
          <code>
            {lines.map((line, i) => (
              <span key={i} className="lx-code-line">
                <span className="lx-code-no" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="lx-code-content">
                  {tokenizeCpp(line).map((t, k) => (
                    <span key={k} className={`tk-${t.type}`}>
                      {t.text}
                    </span>
                  ))}
                  {line === '' ? ' ' : ''}
                </span>
              </span>
            ))}
          </code>
        </pre>
      )}
    </figure>
  );
};
