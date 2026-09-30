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

  // ENGR 213 — assigned homework solutions
  /^Engr 213\/.*Assigned Homework Solutions[^/]*$/i
];

// Not secret, but not study material either: assignment & lab handouts, Moodle submission
// instructions, lab manuals and the term-project brief. Kept in git, never shown or deployed.
export const SITE_EXCLUDED_PATTERNS: RegExp[] = [
  /^Indu 211\/05 - Assignments & Solutions(\/|$)/,
  /^Miae 215\/06 - Arduino Labs & Term Project(\/|$)/,
  /(^|\/)[^/]*assignment\d*\.docx?$/i,
  // All teacher lecture notes & slides across all courses
  /(^|\/)01 - Teacher Lecture Notes/i,
  // All course outlines and syllabi across all courses
  /(^|\/)[^/]*(outline|syllabus)[^/]*\.(pdf|docx?|txt|md)$/i
];

export const isLocalOnly = (relativePath: string): boolean => {
  const p = relativePath.replace(/\\/g, '/');
  return LOCAL_ONLY_PATTERNS.some((re) => re.test(p));
};

// Everything that must not appear on (or be deployed with) the website
export const isHiddenFromSite = (relativePath: string): boolean => {
  const p = relativePath.replace(/\\/g, '/');
  return isLocalOnly(p) || SITE_EXCLUDED_PATTERNS.some((re) => re.test(p));
};
