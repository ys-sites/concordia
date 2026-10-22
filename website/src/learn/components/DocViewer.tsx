import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { Download, ExternalLink, X } from 'lucide-react';
import type { DocRef } from '../model';
import { getPdfUrl } from '../../utils/pdfUrl';
import './docViewer.css';

const PdfCanvasViewer = lazy(() => import('../../components/PdfCanvasViewer'));

// A document in a full-screen dialog, opened on the page a lesson points to.
export const DocViewer: React.FC<{ doc: DocRef; onClose: () => void }> = ({ doc, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const url = getPdfUrl(doc.path);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);
  return (
    <div className="lx-doc-backdrop" onClick={onClose}>
      <div className="lx-doc" role="dialog" aria-modal="true" aria-label={doc.title} onClick={(e) => e.stopPropagation()}>
        <header className="lx-doc-head">
          <div className="lx-doc-title">
            <strong>{doc.title}</strong>
            {(doc.page || doc.label) && (
              <span className="lx-meta">
                {doc.page ? `Page ${doc.page}` : ''}
                {doc.page && doc.label ? ' · ' : ''}
                {doc.label}
              </span>
            )}
          </div>
          <a className="lx-icon-btn" href={url + (doc.page ? `#page=${doc.page}` : '')} target="_blank" rel="noreferrer" title="Open in a new tab">
            <ExternalLink size={18} />
            <span className="lx-sr">Open in a new tab</span>
          </a>
          <a className="lx-icon-btn" href={url} download title="Download">
            <Download size={18} />
            <span className="lx-sr">Download</span>
          </a>
          <button ref={closeRef} type="button" className="lx-icon-btn" onClick={onClose} title="Close (Esc)">
            <X size={20} />
            <span className="lx-sr">Close</span>
          </button>
        </header>
        <div className="lx-doc-body">
          <Suspense fallback={<div className="lx-doc-loading">Opening the document…</div>}>
            <PdfCanvasViewer url={url} title={doc.title} initialPage={doc.page} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DocViewer;
