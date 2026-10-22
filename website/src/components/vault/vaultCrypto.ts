// The Midterm Gate no longer has a password: its content is plain data in src/data/gates. These functions keep
// the old call sites working until the vault screens are replaced by the course curriculum.
import type { GateContent } from './vaultTypes';
import type { CourseId } from '../../types';
import { loadGate } from '../../data/gates';
import { GateCourse } from './gateCourses';
export type { GateCourse };

export const unlockGate = (course: GateCourse, _password?: string): Promise<GateContent | null> => loadGate(course as CourseId);
export const resumeGate = (course: GateCourse): Promise<GateContent | null> => loadGate(course as CourseId);
export const lockGate = () => {};

// the INDU 211 paper drill was retired on main (8aec220); nothing is behind it any more
export const unlockPaper = async (_course: GateCourse, _password?: string): Promise<GateContent | null> => null;
export const resumePaper = async (_course: GateCourse): Promise<GateContent | null> => null;
export const lockPaper = (_course: GateCourse) => {};
