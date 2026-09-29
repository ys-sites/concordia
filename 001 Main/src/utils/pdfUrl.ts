/**
 * Utility to generate accessible URLs for course curriculum PDFs
 * Supports both Vercel static CDN (/courses/...) and dynamic fallback (/api/pdf?path=...)
 */
export const getPdfUrl = (relativePath: string): string => {
  // Directly points to static CDN path which works in both Vite dev server and Vercel production
  return `/courses/${encodeURI(relativePath)}`;
};

export const getPdfApiUrl = (relativePath: string): string => {
  return `/api/pdf?path=${encodeURIComponent(relativePath)}`;
};
