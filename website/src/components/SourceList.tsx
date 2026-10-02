import React from 'react';
import { FileText, Bookmark, ExternalLink, BookOpen } from 'lucide-react';
import { PracticeQuestion, CourseDocument } from '../types';
import { resolveQuestionReferences } from '../utils/referenceResolver';
import { audio } from '../utils/audio';

interface SourceListProps {
  question: PracticeQuestion;
  onOpenPdf?: (doc: CourseDocument, pageNumber?: number) => void;
}

/**
 * Renders verified pedagogical references from teacher lecture slides and textbook guides.
 * Past paper exam questions are automatically suppressed and hidden completely per requirement.
 */
export const SourceList: React.FC<SourceListProps> = ({ question, onOpenPdf }) => {
  const { isPastPaper, items } = resolveQuestionReferences(question);

  // Requirement: "except for the past paer exam, dont show reference"
  if (isPastPaper || items.length === 0) {
    return null;
  }

  return (
    <div className="q-source-card" role="region" aria-label="Curriculum References">
      <div className="q-source-header">
        <BookOpen size={13} className="text-amber" />
        <span className="q-source-heading">
          {items.some((it) => it.isTextbook) ? 'Curriculum & Textbook Reference' : 'Teacher Lecture Reference'}
        </span>
      </div>

      <div className="q-source-items-group">
        {items.map((item, idx) => {
          const isClickable = Boolean(item.document && onOpenPdf);

          return isClickable ? (
            <button
              key={idx}
              type="button"
              className="q-source-btn-interactive"
              onClick={() => {
                audio.playClick();
                onOpenPdf!(item.document!, item.pageNumber);
              }}
              title={`Click to open ${item.document?.filename} directly at ${item.slideLabel || 'Page 1'}`}
            >
              <div className="q-source-btn-content">
                <FileText size={15} className="q-source-doc-icon" />
                <div className="q-source-info">
                  <span className="q-source-title">{item.title}</span>
                  <span className="q-source-subdeck">{item.deckName}</span>
                </div>
              </div>

              <div className="q-source-btn-meta">
                {item.slideLabel && (
                  <span className="q-source-slide-badge">
                    <Bookmark size={11} />
                    <span>{item.slideLabel}</span>
                  </span>
                )}
                <span className="q-source-jump-tag">
                  <span>Open Slide</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </button>
          ) : (
            <div key={idx} className="q-source-item-static">
              <FileText size={14} className="q-source-icon" />
              <span className="q-source-title">{item.title || item.rawText}</span>
              {item.slideLabel && (
                <span className="q-source-slide-badge static-badge">
                  {item.slideLabel}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
