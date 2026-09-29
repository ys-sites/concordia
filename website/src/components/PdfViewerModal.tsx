import React, { useEffect, useState } from 'react';
import { CourseDocument } from '../types';
import { X, ExternalLink, Download, FileText } from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { displayTitle } from '../utils/docOrganization';

interface PdfViewerModalProps {
  document: CourseDocument | null;
  onClose: () => void;
}

// Phones can't reliably show a PDF inside an iframe (Android Chrome renders nothing),
// so on narrow screens we show open/download actions instead of an empty frame.
const PHONE_QUERY = '(max-width: 768px)';

const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState(() => window.matchMedia(PHONE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(PHONE_QUERY);
    const onChange = () => setIsPhone(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isPhone;
};

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ document: doc, onClose }) => {
  const isPhone = useIsPhone();

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
              title="Open in a new tab"
              aria-label="Open in a new tab"
              onClick={() => audio.playClick()}
            >
              <ExternalLink size={16} />
              <span className="modal-action-label">Full Tab</span>
            </a>
            <a
              href={pdfUrl}
              download={doc.filename}
              className="modal-action-btn"
              title="Download file"
              aria-label="Download file"
              onClick={() => audio.playClick()}
            >
              <Download size={16} />
              <span className="modal-action-label">Download</span>
            </a>
            <button className="modal-close-btn" onClick={close} title="Close viewer (Esc)" aria-label="Close viewer">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="pdf-modal-body">
          {isPhone ? (
            <div className="pdf-phone-panel">
              <FileText size={44} />
              <p className="pdf-phone-title">{title}</p>
              <p className="pdf-phone-hint">Phones open PDFs in their own viewer. Tap below to read it.</p>
              <a className="pdf-phone-btn primary" href={pdfUrl} target="_blank" rel="noopener noreferrer" onClick={() => audio.playClick()}>
                <ExternalLink size={18} />
                <span>Open PDF</span>
              </a>
              <a className="pdf-phone-btn" href={pdfUrl} download={doc.filename} onClick={() => audio.playClick()}>
                <Download size={18} />
                <span>Download</span>
              </a>
              <button className="pdf-phone-btn" onClick={close}>
                <X size={18} />
                <span>Close</span>
              </button>
            </div>
          ) : (
            <iframe src={`${pdfUrl}#toolbar=1&navpanes=1`} title={title} className="pdf-iframe" />
          )}
        </div>
      </div>
    </div>
  );
};
