/// <reference types="vite/client" />
declare module 'virtual:course-documents' {
  import type { CourseDocument } from './types';
  const documents: CourseDocument[];
  export default documents;
}
