import { CourseMeta, CourseDocument, CourseId } from '../types';
import { PRACTICE_QUESTIONS } from './questionsData';
// Generated at build time from the course folders by website/build/publishedFiles.ts:
// every published PDF, after the study-material-only filter in ./localOnly.ts
import PUBLISHED_DOCUMENTS from 'virtual:course-documents';

export interface CourseWithDocs extends CourseMeta {
  documents: CourseDocument[];
}

type CourseInfo = Omit<CourseMeta, 'totalDocuments' | 'totalQuestions' | 'categories'>;

const COURSE_INFO: CourseInfo[] = [
  {
    id: 'ENGR213',
    code: 'ENGR 213',
    name: 'Applied Ordinary Differential Equations',
    department: 'Concordia Engineering',
    term: 'Fall 2026',
    color: 'indigo',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    borderGlow: 'rgba(99, 102, 241, 0.4)',
    accentHex: '#6366f1',
    iconName: 'Sigma',
    description: 'First and second-order ODEs, linear models, integrating factors, substitutions, and Laplace transforms.'
  },
  {
    id: 'INDU211',
    code: 'INDU 211',
    name: 'Introduction to Production and Manufacturing Systems',
    department: 'Concordia Engineering',
    term: 'Fall 2026',
    color: 'amber',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    borderGlow: 'rgba(245, 158, 11, 0.4)',
    accentHex: '#f59e0b',
    iconName: 'Factory',
    description: 'Production systems, break-even analysis, facility location & layout, material handling and vehicle routing.'
  },
  {
    id: 'MIAE215',
    code: 'MIAE 215',
    name: 'Programming for Mechanical & Industrial Engineers',
    department: 'Concordia Engineering',
    term: 'Fall 2026',
    color: 'emerald',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    borderGlow: 'rgba(16, 185, 129, 0.4)',
    accentHex: '#10b981',
    iconName: 'Terminal',
    description: 'C++ computational algorithms, memory architecture, control flow, arrays, and Flowgorithm.'
  },
  {
    id: 'MIAE221',
    code: 'MIAE 221',
    name: 'Materials Science & Engineering',
    department: 'Concordia Engineering',
    term: 'Fall 2026',
    color: 'rose',
    gradient: 'from-rose-500 via-pink-600 to-purple-600',
    borderGlow: 'rgba(244, 63, 94, 0.4)',
    accentHex: '#f43f5e',
    iconName: 'Atom',
    description: 'Atomic bonding, crystallography, Miller indices, planar density, X-ray diffraction, and crystal defects.'
  }
];

import { isFilteredDocumentPdf } from './localOnly';

const documentsFor = (courseId: CourseId): CourseDocument[] =>
  (PUBLISHED_DOCUMENTS as CourseDocument[]).filter(
    (d) => d.courseId === courseId && !isFilteredDocumentPdf(d.relativePath)
  );

export const COURSES_DATA: CourseWithDocs[] = COURSE_INFO.map((info) => {
  const documents = documentsFor(info.id);
  const categoryIds = [...new Set(documents.map((d) => d.categoryId))].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );
  const categories = categoryIds.map((id) => {
    const title = id.split('/').pop() ?? id;
    return {
      id,
      title,
      count: documents.filter((d) => d.categoryId === id).length,
      description: `Course materials for ${title}`
    };
  });
  const totalQuestions = PRACTICE_QUESTIONS.filter((q) => q.courseId === info.id).length;
  return { ...info, categories, documents, totalDocuments: documents.length, totalQuestions };
});
