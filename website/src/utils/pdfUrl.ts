/**
 * URLs for course documents.
 *
 * Course files are published under URL-safe names (see vite.config.ts): every path segment keeps only
 * letters, digits, '.', '_' and '-'. Real names contain characters such as '&', ',', '+', '#' and '()'
 * that static hosts decode inconsistently (Vercel reads '+' as a space; '#' starts a fragment), which
 * made some PDFs fail to load. Course materials are deliberately opened in the viewer or a new tab, never downloaded from the portal UI.
 */
export const slugSegment = (name: string): string =>
  name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-(?=\.[A-Za-z0-9]+$)|-$/g, '');

export const publicCoursePath = (relativePath: string): string =>
  relativePath.split('/').map(slugSegment).join('/');

export const getPdfUrl = (relativePath: string): string => `/courses/${publicCoursePath(relativePath)}`;

export const getPdfApiUrl = (relativePath: string): string => `/api/pdf?path=${encodeURIComponent(relativePath)}`;

const MEDIA_CDN_BASE = (
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_MEDIA_CDN_URL) ||
  (typeof globalThis !== 'undefined' && (globalThis as any).process?.env?.VITE_MEDIA_CDN_URL) ||
  'https://pub-5cc0664f25874108bacca04abca6da5a.r2.dev/Concordia'
).replace(/\/+$/, '');

export const getVideoUrl = (relativePath: string): string => {
  const cleanPath = publicCoursePath(relativePath);
  if (MEDIA_CDN_BASE && MEDIA_CDN_BASE !== 'local') {
    return `${MEDIA_CDN_BASE}/${cleanPath}`;
  }
  return `/courses/${cleanPath}`;
};
