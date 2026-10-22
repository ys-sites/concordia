import React from 'react';
import { tokenizeCpp } from '../../components/CppOptionView';

// C++ (or any short code) with light syntax colours and line numbers
export const CodeBlock: React.FC<{ code: string; label?: string }> = ({ code, label }) => {
  const lines = code.replace(/\r/g, '').replace(/\n+$/, '').split('\n');
  return (
    <figure className="lx-code" aria-label={label ?? 'Code'}>
      <pre>
        <code>
          {lines.map((line, i) => (
            <span key={i} className="lx-code-line">
              <span className="lx-code-no" aria-hidden>
                {i + 1}
              </span>
              <span>
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
    </figure>
  );
};
