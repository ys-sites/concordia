/// <reference types="vite/client" />
declare module 'virtual:course-documents' {
  import type { CourseDocument } from './types';
  const documents: CourseDocument[];
  export default documents;
}

declare module 'virtual:question-counts' {
  const counts: { total: number; byCourse: Record<string, number> };
  export default counts;
}
