import React from 'react';
import { FileText } from 'lucide-react';
import { PracticeQuestion } from '../types';

// Where a question comes from: the teacher's slide deck / file, the chapter, and the page (or code line)
export const SourceList: React.FC<{ question: PracticeQuestion }> = ({ question }) => {
  if (!question.source?.length) {
    return question.explanation.reference ? <div className="q-source-list">{question.explanation.reference}</div> : null;
  }
  return (
    <div className="q-source-list">
      <span className="q-source-heading">Source</span>
      {question.source.map((s, i) => (
        <div key={i} className="q-source-item">
          <FileText size={14} className="q-source-icon" />
          <span className="q-source-deck">{s.deck}</span>
          <span className="q-source-meta">{s.chapter}</span>
          <span className="q-source-loc">{s.location}</span>
        </div>
      ))}
    </div>
  );
};
