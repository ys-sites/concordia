// Expanded study guides can live beside original slides. Filter individual
// PDFs, keeping the authored guides until replacement coverage is complete.
export const isOriginalTeachingPdf = (relativePath: string): boolean => {
  const p = relativePath.replace(/\\/g, '/');
  if (!/\.pdf$/i.test(p)) return false;
  const parts = p.split('/');
  const filename = parts[parts.length - 1] ?? '';
  if (/expanded|explained|comprehensive|study guide|master sheet|review sheet/i.test(filename)) return false;
  return parts.slice(1, -1).some((part) =>
    /teacher lecture notes|in-class lecture notes|textbook chapters|textbook solutions/i.test(part)
  ) || /^(textbook chapter|advanced engineering mathematics)/i.test(filename);
};
