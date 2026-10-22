// Courses that have a hidden Midterm Gate folder (glyph after the course title).
export const GATE_COURSES = ['MIAE221', 'MIAE215', 'ENGR213', 'INDU211'] as const;
export type GateCourse = (typeof GATE_COURSES)[number];
// Courses whose badge opens a Skill Drill on last year's paper (own blob and password, see encrypt-vault.mjs)
export const PAPER_DRILL_COURSES: readonly GateCourse[] = [];
export const hasPaperDrill = (courseId: string): courseId is GateCourse => (PAPER_DRILL_COURSES as readonly string[]).includes(courseId);
export const hasGate = (courseId: string): courseId is GateCourse => (GATE_COURSES as readonly string[]).includes(courseId);
