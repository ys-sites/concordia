// Courses that have a hidden Midterm Gate folder (glyph after the course title).
export const GATE_COURSES = ['MIAE221', 'MIAE215', 'ENGR213', 'INDU211'] as const;
export type GateCourse = (typeof GATE_COURSES)[number];
export const hasGate = (courseId: string): courseId is GateCourse => (GATE_COURSES as readonly string[]).includes(courseId);
