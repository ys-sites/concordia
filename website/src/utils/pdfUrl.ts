/**
 * URLs for course documents.
 *
 * Course files are published under URL-safe names (see vite.config.ts): every path segment keeps only
 * letters, digits, '.', '_' and '-'. Real names contain characters such as '&', ',', '+', '#' and '()'
 * that static hosts decode inconsistently (Vercel reads '+' as a space; '#' starts a fragment), which
 * made some PDFs fail to load. Downloads still use the original file name via the `download` attribute.
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
