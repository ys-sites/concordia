/// <reference types="vite/client" />
declare module 'virtual:course-documents' {
  // [relativePath, sizeBytes] per published PDF (see build/publishedFiles.ts)
  const documents: [string, number][];
  export default documents;
}

declare module 'virtual:question-counts' {
  const counts: { total: number; byCourse: Record<string, number> };
  export default counts;
}
