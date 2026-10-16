import { CourseId } from '../types';

// Only these courses have practice papers handed out by the instructors (Teacher Midterm Practice).
// Kept apart from the practice data so the home page can check it without loading that data.
export const TEACHER_PRACTICE_FOLDER = 'Teacher Midterm Practice';

const TEACHER_PRACTICE_COURSES: CourseId[] = ['MIAE221', 'MIAE215', 'INDU211'];

export const hasTeacherPractice = (courseId: CourseId): boolean => TEACHER_PRACTICE_COURSES.includes(courseId);
