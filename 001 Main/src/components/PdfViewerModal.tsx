import React, { useEffect } from 'react';
import { CourseDocument } from '../types';
import { X, ExternalLink, Download, FileText, Maximize2 } from 'lucide-react';
import { audio } from '../utils/audio';

interface PdfViewerModalProps {
  document: CourseDocument | null;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ document, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!document) return null;

  const pdfUrl = `/api/pdf?path=${encodeURIComponent(document.relativePath)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="pdf-modal-header">
          <div className="modal-header-left">
            <div className="modal-icon-badge">
              <FileText size={18} />
            </div>
            <div>
              <div className="modal-category">{document.courseId} · {document.categoryTitle}</div>
              <h2 className="modal-title" title={document.title}>{document.title}</h2>
            </div>
          </div>

          <div className="modal-header-actions">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-action-btn"
              title="Open full page in browser"
              onClick={() => audio.playClick()}
            >
              <ExternalLink size={16} />
              <span>Full Tab</span>
            </a>

            <a 
              href={pdfUrl} 
              download={document.filename}
              className="modal-action-btn"
              title="Download file"
              onClick={() => audio.playClick()}
            >
              <Download size={16} />
              <span>Download</span>
            </a>

            <button 
              className="modal-close-btn"
              onClick={() => {
                audio.playClick();
                onClose();
              }}
              title="Close viewer (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Body */}
        <div className="pdf-modal-body">
          <iframe 
            src={`${pdfUrl}#toolbar=1&navpanes=1`}
            title={document.title}
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
};
