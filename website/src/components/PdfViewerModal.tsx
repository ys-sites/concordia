import React, { Suspense, lazy, useEffect } from 'react';
import { CourseDocument } from '../types';
import { X, ExternalLink, FileText, Maximize2 } from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { displayTitle } from '../utils/docOrganization';

// PDF.js is large: load it only when a document is opened
const PdfCanvasViewer = lazy(() => import('./PdfCanvasViewer'));

interface PdfViewerModalProps {
  document: CourseDocument | null;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ document: doc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Stop the page behind the viewer from scrolling while it is open
  useEffect(() => {
    if (!doc) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [doc]);

  if (!doc) return null;

  const pdfUrl = getPdfUrl(doc.relativePath);
  const title = displayTitle(doc);
  const close = () => {
    audio.playClick();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="pdf-modal-container"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pdf-modal-header">
          <div className="modal-header-left">
            <div className="modal-icon-badge">
              <FileText size={18} />
            </div>
            <div className="modal-heading">
              <div className="modal-category">{doc.courseId} · {doc.categoryTitle}</div>
              <h2 className="modal-title" title={title}>{title}</h2>
            </div>
          </div>

          <div className="modal-header-actions">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-action-btn"
              title="Open full PDF in a new tab"
              aria-label="Open in new tab"
              onClick={() => audio.playClick()}
            >
              <ExternalLink size={16} />
              <span className="modal-action-label">Open Full Tab</span>
            </a>
            <button className="modal-close-btn" onClick={close} title="Close viewer (Esc)" aria-label="Close viewer">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Mobile quick actions bar for instant access */}
        <div className="pdf-modal-subbar">
          <span className="pdf-subbar-text">Document: <strong>{doc.filename}</strong></span>
          <div className="pdf-subbar-actions">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-subbar-link"
              onClick={() => audio.playClick()}
            >
              <Maximize2 size={13} />
              <span>Fullscreen Tab</span>
            </a>
          </div>
        </div>

        <div className="pdf-modal-body">
          <Suspense fallback={<div className="pdfv-status">Loading viewer…</div>}>
            <PdfCanvasViewer key={pdfUrl} url={pdfUrl} title={title} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
