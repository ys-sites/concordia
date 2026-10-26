import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X } from 'lucide-react';
import type { LearnQuestion } from '../model';

// A question's figure, large enough to read in the question, and opened full size on click or tap
// (Escape, the close button or a click outside the picture closes it).
export const QuestionFigure: React.FC<{ figure: NonNullable<LearnQuestion['figure']> }> = ({ figure }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      e.stopImmediatePropagation(); // number keys must not answer the question behind the zoomed figure
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [open]);

  return (
    <figure className="lx-q-figure">
      <button type="button" className="lx-q-figure-open" onClick={() => setOpen(true)} aria-label={`Enlarge the figure: ${figure.alt}`} title="Click to enlarge">
        <img src={figure.src} alt={figure.alt} loading="lazy" />
        <span className="lx-q-figure-zoom" aria-hidden="true">
          <Maximize2 size={15} />
        </span>
      </button>
      {figure.caption && <figcaption className="lx-meta">{figure.caption}</figcaption>}
      {open &&
        createPortal(
          <div className="lx-figzoom" role="dialog" aria-modal="true" aria-label={figure.alt} onClick={() => setOpen(false)}>
            <img src={figure.src} alt={figure.alt} onClick={(e) => e.stopPropagation()} />
            <button type="button" className="lx-figzoom-close" onClick={() => setOpen(false)} aria-label="Close" autoFocus>
              <X size={22} />
            </button>
          </div>,
          document.body
        )}
    </figure>
  );
};
