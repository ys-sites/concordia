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

declare module 'virtual:practice-bank/*' {
  // one course's practice questions (see vite.config.ts, questionBankPlugin)
  const questions: import('./types').PracticeQuestion[];
  export default questions;
}

declare module 'virtual:curriculum' {
  // every course's curriculum, built from src/learn/curriculum (see vite.config.ts, curriculumPlugin)
  const curricula: Record<import('./types').CourseId, import('./learn/model').Curriculum>;
  export default curricula;
}

declare module 'virtual:curriculum-summary' {
  const summary: Record<
    import('./types').CourseId,
    {
      stats: import('./learn/model').CourseStats;
      midterm: import('./learn/model').Curriculum['midterm'];
      start: { lessonId: string; stepId: string };
      thumb: string | null;
    }
  >;
  export default summary;
}
