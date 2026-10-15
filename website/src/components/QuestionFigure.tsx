import React from 'react';
import { PracticeQuestion } from '../types';

// Option letters: A–D in the practice bank, up to E on teacher papers
export const optionLetter = (index: number): string => String.fromCharCode(65 + index);

// A figure from the source paper, shown under the question. Fixed aspect box so the card does not
// jump when the image arrives; lazy so figures for later questions load only when reached.
export const QuestionFigure: React.FC<{ figure: NonNullable<PracticeQuestion['figure']> }> = ({ figure }) => (
  <figure className="question-figure">
    <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" />
    {figure.caption && <figcaption>{figure.caption}</figcaption>}
  </figure>
);
