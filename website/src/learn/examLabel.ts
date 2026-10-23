// Source data retains provenance; learner-facing labels show only the term and assessment type.
export const examLabel = (source?: string | null): string => {
  const text = source?.toLowerCase() ?? '';
  const term = /\bwinter\b/.test(text) ? 'Winter' : /\bfall\b|\bautumn\b/.test(text) ? 'Fall' : /\bsummer\b/.test(text) ? 'Summer' : '';
  const assessment = /\bfinal\b/.test(text) ? 'Final' : /\bmidterm\b/.test(text) ? 'Midterm' : /\bquiz\b|\bterm test\b/.test(text) ? 'Quiz' : '';
  return [term, assessment].filter(Boolean).join(' ') || 'Exam practice';
};
