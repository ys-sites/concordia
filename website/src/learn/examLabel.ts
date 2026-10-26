// Source data retains provenance; learner-facing labels show only the assessment, term and year —
// e.g. "Midterm Fall 2025". Raw paper names, instructors, version files and exact dates never reach the UI.
const MONTH_TERM = (m: number) => (m <= 4 ? 'Winter' : m <= 8 ? 'Summer' : 'Fall');
const MONTHS: Record<string, number> = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

export const examLabel = (source?: string | null): string => {
  if (!source) return 'Past exam';
  // drop a trailing question reference ("· Q3") — the label names the paper, not the item
  const text = source.split(/·\s*Q\d+/i)[0].toLowerCase();
  const year = text.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? '';

  let term = /\bwinter\b/.test(text) ? 'Winter' : /\bfall\b|\bautumn\b/.test(text) ? 'Fall' : /\bsummer\b/.test(text) ? 'Summer' : /\bspring\b/.test(text) ? 'Winter' : '';
  if (!term) {
    const named = text.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b/)?.[1];
    const numeric = text.match(/\b(1[0-2]|0?[1-9])\/(?:3[01]|[12]\d|0?[1-9])\/(?:19|20)\d{2}\b/)?.[1];
    const month = named ? MONTHS[named] : numeric ? Number(numeric) : 0;
    if (month) term = MONTH_TERM(month);
  }

  const assessment = /\bfinal\b/.test(text)
    ? 'Final'
    : /\bmidterm\b/.test(text) || /\bterm test\b/.test(text) || /\btest\b/.test(text)
      ? 'Midterm'
      : /\bquiz(zes)?\b/.test(text)
        ? 'Quiz'
        : /\bexam\b/.test(text)
          ? 'Exam'
          : '';
  const version = text.match(/\bversion\s*(\d+|[a-z])\b/)?.[1]?.toUpperCase();

  const label = [assessment, term, year || (/\bundated\b/.test(text) ? '(undated)' : '')].filter(Boolean).join(' ');
  if (!label) return 'Past exam';
  return version ? `${label} · Version ${version}` : label;
};

// A full source line ("Fall 2018 Midterm 1 (Oct 19, 2018) · Problem 1") with its leading paper name
// swapped for the generic label ("Midterm Fall 2018 · Problem 1"). Non-exam sources pass through.
export const genericExamSource = (source: string): string => {
  const [head, ...rest] = source.split(' · ');
  const label = examLabel(head);
  return label === 'Past exam' ? source : [label, ...rest].join(' · ');
};
