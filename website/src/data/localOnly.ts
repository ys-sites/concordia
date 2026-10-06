// Files that stay on the local machine only: solutions to graded assignments & labs,
// and the INDU 211 term paper. They are hidden from the portal and never copied into
// dist/courses. Keep in sync with the "Local-only" block in .gitignore / .vercelignore.
// Paths are relative to the Semester 1 root, using forward slashes.
export const LOCAL_ONLY_PATTERNS: RegExp[] = [
  // INDU 211 — term paper & final project (entire folder)
  /^Indu 211\/05 - Assignments & Solutions\/Term Paper & Final Project(\/|$)/,
  // INDU 211 — assignment solutions and their generated diagrams / README
  /^Indu 211\/05 - Assignments & Solutions\/Assignment [^/]+\/[^/]*Solutions?[^/]*$/i,
  /^Indu 211\/05 - Assignments & Solutions\/Assignment 1\/(BOM_Tree_Diagram|Operations_Process_Chart)\.[a-z]+$/i,
  /^Indu 211\/05 - Assignments & Solutions\/Assignment [^/]+\/README\.md$/i,

  // MIAE 215 — assignment solution guides & code
  /^Miae 215\/04 - Practice Problems & Code Solutions\/Assignment [^/]*Fully Solved[^/]*$/i,
  /^Miae 215\/04 - Practice Problems & Code Solutions\/code_solutions\/assignment[^/]*$/i,
  // MIAE 215 — Assignment 2 Q2(e) Flowgorithm answer (copied into two folders)
  /^Miae 215\/(01 - Teacher Lecture Notes & Slides|05 - Software & Flowcharts)\/Q2_e\.[a-z]+$/i,
  // MIAE 215 — lab solutions (official Q solution sketches, solved READMEs, lab master guide)
  /^Miae 215\/06 - Arduino Labs & Term Project\/Lab [^/]+\/arduino_lab\d+_Q\d+\.ino$/i,
  /^Miae 215\/06 - Arduino Labs & Term Project\/Lab [23] [^/]*\/README\.md$/i,
  /^Miae 215\/06 - Arduino Labs & Term Project\/MIAE 215 - Arduino Labs & Mechatronics Project Master Guide\.[a-z]+$/i,

  // ENGR 213 — raw handwritten notes & assigned homework solutions
  /^Engr 213\/ENGR 213\.pdf$/i,
  /^Engr 213\/Engr 213 Tutor\.pdf$/i,
  /^Engr 213\/.*Assigned Homework Solutions[^/]*$/i,
  // Any unorganized loose PDF directly in a course root folder
  /^[A-Za-z0-9 _]+\/[^/]+\.pdf$/i
];

export const isLocalOnly = (relativePath: string): boolean => {
  const p = relativePath.replace(/\\/g, '/');
  return LOCAL_ONLY_PATTERNS.some((re) => re.test(p));
};

// Not secret, but not published either. The site carries theory notes (teacher lecture notes,
// textbook chapters, expanded guides, review sheets) and practice problems only — nothing tied to
// graded work or exams. Kept in git, never shown or deployed.
export const SITE_EXCLUDED_PATTERNS: RegExp[] = [
  // Loose unorganized PDFs at root of course folders
  /^[A-Za-z0-9 _]+\/[^/]+\.pdf$/i,

  // All Studocu downloads and folders (kept local only)
  /studocu/i,

  // Another teacher notes (reference only, never published to website)
  /another teacher notes/i,

  // Quiz, midterm, exam, and test prep folders (kept local only)
  /(^|\/)06 - Quiz & Midterm Exam Prep(\/|$)/i,

  // Specific past tests, quizzes, and midterm exam files
  /(^|\/)ENGR 213\.pdf$/i,
  /(^|\/)[^/]*(practice\s*exam|midterm|quiz\s*\d|test\s*\d)[^/]*\.(pdf|docx?|txt|md)$/i,

  // Course outlines and syllabi
  /(^|\/)[^/]*(outline|syllabus)[^/]*\.(pdf|docx?|txt|md)$/i,

  // Assignment & lab handouts, Moodle submission instructions, lab manuals, term-project brief
  /^Indu 211\/05 - Assignments & Solutions(\/|$)/,
  /^Miae 215\/06 - Arduino Labs & Term Project(\/|$)/,
  /(^|\/)[^/]*assignment[^/]*$/i,
  /homework solutions/i,
  /team project/i,

  // Full copyrighted textbook scans (kept locally as reference only)
  /(^|\/)[^/]*\((z-lib\.org|Z-Library)\)\.pdf$/i,
  /(^|\/)[^/]*Materials Science and Engineering An Introduction[^/]*\.pdf$/i,
  /(^|\/)[^/]*Advanced Engineering Mathematics\s*\(7th Edition\)[^/]*\.pdf$/i
];

import { isFilteredDocumentRelativePath, hasFilteredDocumentUnder } from './filteredDocumentsData';

export const isFilteredDocumentPdf = (relativePath: string): boolean => {
  return isFilteredDocumentRelativePath(relativePath);
};

// Everything that must not appear on (or be deployed with) the website
export const isHiddenFromSite = (relativePath: string, isDirectory = false): boolean => {
  const p = relativePath.replace(/\\/g, '/');
  if (isDirectory) {
    if (hasFilteredDocumentUnder(p)) {
      return false; // Whitelist directory traversal so protected vault PDFs are found
    }
    return isLocalOnly(p) || SITE_EXCLUDED_PATTERNS.some((re) => re.test(p));
  }
  if (isFilteredDocumentPdf(p)) {
    return false; // Whitelist for password-protected Filtered Document access
  }
  return isLocalOnly(p) || SITE_EXCLUDED_PATTERNS.some((re) => re.test(p));
};


