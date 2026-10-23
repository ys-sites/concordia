// Course documents (a lesson's slides, a guide, a resource) open in a new tab at the right page: the browser's
// PDF viewer reads #page=N, and the lesson, video or quiz stays exactly where it was.
import type { DocRef } from './model';
import { getPdfUrl } from '../utils/pdfUrl';

export const docUrl = (doc: DocRef) => getPdfUrl(doc.path) + (doc.page ? `#page=${doc.page}` : '');

export const openDoc = (doc: DocRef) => {
  window.open(docUrl(doc), '_blank', 'noopener');
};
