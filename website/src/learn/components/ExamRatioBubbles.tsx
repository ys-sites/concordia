import React from 'react';
import { getExamRatio, getSubjectRatio } from '../data/miae221ExamRatios';

interface ExamRatioBubblesProps {
  topicId?: string;
  subjectId?: string;
  course?: string;
  compact?: boolean;
}

export const ExamRatioBubbles: React.FC<ExamRatioBubblesProps> = ({ topicId, subjectId, course, compact = false }) => {
  if (course && course !== 'MIAE221') return null;

  const topicRatio = getExamRatio(topicId);
  const subjectRatio = getSubjectRatio(subjectId ?? topicRatio?.subjectId);

  const m2017Pct = topicRatio ? topicRatio.m2017Pct : subjectRatio ? subjectRatio.m2017Pct : null;
  const allPapersPct = topicRatio ? topicRatio.allPapersPct : subjectRatio ? subjectRatio.allPapersPct : null;

  if (m2017Pct === null || allPapersPct === null) return null;

  const topicName = topicRatio?.topicName ?? subjectRatio?.subjectName ?? 'this topic';
  const m2017Count = topicRatio ? topicRatio.m2017Count : subjectRatio?.m2017Count;
  const m2017Total = topicRatio ? topicRatio.m2017Total : subjectRatio?.m2017Total;
  const allCount = topicRatio ? topicRatio.allPapersCount : subjectRatio?.allPapersCount;
  const allTotal = topicRatio ? topicRatio.allPapersTotal : subjectRatio?.allPapersTotal;

  return (
    <div className={`lx-ratio-bubbles-row${compact ? ' is-compact' : ''}`} aria-label="Exam question weight ratios">
      <span
        className="lx-ratio-bubble lx-bubble-2017"
        title={`2017 Midterm Frequency: ${m2017Count}/${m2017Total} questions (${m2017Pct}%) on the 2017 Midterm were from ${topicName}`}
      >
        <span className="lx-bubble-dot lx-dot-2017" aria-hidden />
        <span className="lx-bubble-label">2017 Midterm</span>
        <strong className="lx-bubble-val">{m2017Pct}%</strong>
      </span>

      <span
        className="lx-ratio-bubble lx-bubble-all"
        title={`All Past Papers Frequency: ${allCount}/${allTotal} questions (${allPapersPct}%) across all historical past exam papers were from ${topicName}`}
      >
        <span className="lx-bubble-dot lx-dot-all" aria-hidden />
        <span className="lx-bubble-label">All Papers</span>
        <strong className="lx-bubble-val">{allPapersPct}%</strong>
      </span>
    </div>
  );
};
