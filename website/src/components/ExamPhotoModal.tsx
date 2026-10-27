import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Camera, ExternalLink } from 'lucide-react';
import { audio } from '../utils/audio';

export interface ExamPhotoPage {
  pageNumber: number;
  title: string;
  scope: string;
  src: string;
  questions: string;
}

export const W26_PAGES: ExamPhotoPage[] = [
  {
    pageNumber: 1,
    title: 'Page 1 of 6 · Crystallography & Directions',
    scope: 'Questions 1 to 4',
    questions: 'Q1: Directions A & B · Q2: Directions C & D · Q3: Planes A & B · Q4: Planes C & D',
    src: '/exam-photos/w26/w26-page-1.jpg'
  },
  {
    pageNumber: 2,
    title: 'Page 2 of 6 · APF, Densities & Defects',
    scope: 'Questions 5 to 11',
    questions: 'Q5: APF BCC/FCC/HCP · Q6: FCC (100) Planar Density · Q7: Rhodium XRD · Q8: Cu Vacancies · Q9: Ferrite Solid Solution · Q10: Defect Falsehood · Q11: Bonding Force Balance',
    src: '/exam-photos/w26/w26-page-2.jpg'
  },
  {
    pageNumber: 3,
    title: 'Page 3 of 6 · Diffusion & Stress-Strain Curve',
    scope: 'Questions 12 to 15',
    questions: 'Q12: C Diffusion in BCC vs FCC · Q13: Palladium H2 Flux · Q14: Covalent Bonding · Q15: Tensile Hardness · Engineering Stress-Strain Curve for Q16–20',
    src: '/exam-photos/w26/w26-page-3.jpg'
  },
  {
    pageNumber: 4,
    title: 'Page 4 of 6 · Tensile Test Calculations',
    scope: 'Questions 16 to 20',
    questions: 'Q16: Young\'s Modulus · Q17: 0.2% Offset Yield · Q18: %EL Ductility · Q19: Necking Onset · Q20: Permanent Plastic Elongation at 320 MPa',
    src: '/exam-photos/w26/w26-page-4.jpg'
  },
  {
    pageNumber: 5,
    title: 'Page 5 of 6 · Rapid-Fire True/False Section',
    scope: 'Questions 21 to 40',
    questions: 'Q21–40: 20 True/False Statements on Modulus vs Temp, Grain Etching, Direction Perpendicularity, True vs Engineering Stress, Covalent Directionality, Amorphous Boundaries',
    src: '/exam-photos/w26/w26-page-5.jpg'
  }
];

interface ExamPhotoModalProps {
  initialPage?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ExamPhotoModal: React.FC<ExamPhotoModalProps> = ({
  initialPage = 1,
  isOpen,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState<number>(Math.max(1, Math.min(5, initialPage)));
  const [zoom, setZoom] = useState<number>(1);

  if (!isOpen) return null;

  const current = W26_PAGES[currentPage - 1] || W26_PAGES[0];

  const handleNext = () => {
    audio.playClick();
    if (currentPage < W26_PAGES.length) {
      setCurrentPage((p) => p + 1);
      setZoom(1);
    }
  };

  const handlePrev = () => {
    audio.playClick();
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
      setZoom(1);
    }
  };

  const zoomIn = () => setZoom((z) => Math.min(2.5, z + 0.3));
  const zoomOut = () => setZoom((z) => Math.max(1, z - 0.3));
  const resetZoom = () => setZoom(1);

  return (
    <div className="exam-photo-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="exam-photo-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="exam-photo-modal-header">
          <div className="exam-photo-header-left">
            <Camera size={18} className="exam-photo-icon" />
            <div>
              <h3 className="exam-photo-title">
                Winter 2026 Midterm Authentic Photographed Exam Paper
              </h3>
              <p className="exam-photo-sub">
                {current.title} · <em>{current.scope}</em>
              </p>
            </div>
          </div>

          <div className="exam-photo-header-controls">
            <div className="exam-photo-zoom-group">
              <button type="button" onClick={zoomOut} disabled={zoom <= 1} title="Zoom out">
                <ZoomOut size={16} />
              </button>
              <span className="exam-photo-zoom-level">{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={zoomIn} disabled={zoom >= 2.5} title="Zoom in">
                <ZoomIn size={16} />
              </button>
              {zoom !== 1 && (
                <button type="button" onClick={resetZoom} title="Reset zoom">
                  <RotateCcw size={14} />
                </button>
              )}
            </div>

            <button type="button" className="exam-photo-close-btn" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Question Scope Bar */}
        <div className="exam-photo-scope-bar">
          <span className="exam-photo-scope-tag">{current.scope}</span>
          <span className="exam-photo-scope-details">{current.questions}</span>
        </div>

        {/* Image Canvas */}
        <div className="exam-photo-viewer-canvas">
          <button
            type="button"
            className="exam-photo-nav-arrow is-prev"
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="exam-photo-img-scroll">
            <img
              src={current.src}
              alt={current.title}
              style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
              className="exam-photo-active-img"
            />
          </div>

          <button
            type="button"
            className="exam-photo-nav-arrow is-next"
            onClick={handleNext}
            disabled={currentPage === W26_PAGES.length}
            aria-label="Next Page"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="exam-photo-footer">
          <div className="exam-photo-thumbs-strip">
            {W26_PAGES.map((p) => (
              <button
                key={p.pageNumber}
                type="button"
                className={`exam-photo-thumb-btn ${p.pageNumber === currentPage ? 'is-active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setCurrentPage(p.pageNumber);
                  setZoom(1);
                }}
              >
                <img src={p.src} alt={`Page ${p.pageNumber}`} className="exam-photo-mini-thumb" />
                <span className="exam-photo-thumb-label">Page {p.pageNumber}</span>
              </button>
            ))}
          </div>

          <div className="exam-photo-footer-note">
            Photographed authentic exam paper (instructors: Drs. Mamadou Sy &amp; Navid Sharifi).
          </div>
        </div>
      </div>
    </div>
  );
};
