import React from 'react';

// A small hexagonal-lattice ornament placed after the course title. It reads as decoration;
// clicking it opens the hidden folder. Styles: .gate-glyph in index.css.
export const GateGlyph: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
  <button type="button" className="gate-glyph" onClick={onOpen} aria-label="Lattice">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 3.5 19.4 7.75v8.5L12 20.5 4.6 16.25v-8.5Z" />
      <path d="M12 3.5v17M4.6 7.75l14.8 8.5M19.4 7.75 4.6 16.25" opacity="0.45" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  </button>
);
