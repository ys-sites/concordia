// Course identity: what each course is called, its colour, and the order courses are shown in.
import type { CourseId } from '../types';

export interface CourseIdentity {
  id: CourseId;
  code: string;
  title: string;
  short: string; // for tight spots (sidebar, chips)
  blurb: string; // one sentence under the title
  dept: string;
  hue: string; // the accent (same value as --lx-accent in tokens.css)
  tint: string;
}

export const COURSES: CourseIdentity[] = [
  {
    id: 'ENGR213',
    code: 'ENGR 213',
    title: 'Applied Ordinary Differential Equations',
    short: 'Differential Equations',
    blurb: 'First-order equations, the methods that solve them, the models they describe, and complex numbers.',
    dept: 'Engineering & Computer Science',
    hue: '#2f4fc4',
    tint: '#e9edfb'
  },
  {
    id: 'MIAE221',
    code: 'MIAE 221',
    title: 'Materials Science & Engineering',
    short: 'Materials Science',
    blurb: 'Bonding, crystal structures, defects, diffusion and the mechanical properties of metals.',
    dept: 'Mechanical, Industrial & Aerospace Engineering',
    hue: '#b3294a',
    tint: '#fbe9ed'
  },
  {
    id: 'MIAE215',
    code: 'MIAE 215',
    title: 'Programming for Mechanical & Industrial Engineers',
    short: 'C++ Programming',
    blurb: 'C++ from the first program to arrays: types, expressions, control flow, loops and tracing code by hand.',
    dept: 'Mechanical, Industrial & Aerospace Engineering',
    hue: '#0d6f55',
    tint: '#e2f2ea'
  },
  {
    id: 'INDU211',
    code: 'INDU 211',
    title: 'Introduction to Production & Manufacturing Systems',
    short: 'Production Systems',
    blurb: 'Manufacturing, break-even, facility location and layout, routing, planning, quality and projects.',
    dept: 'Mechanical, Industrial & Aerospace Engineering',
    hue: '#a8500a',
    tint: '#fcede0'
  }
];

export const COURSE_BY_ID = Object.fromEntries(COURSES.map((c) => [c.id, c])) as Record<CourseId, CourseIdentity>;

export const isCourseId = (s: string | undefined | null): s is CourseId => !!s && s.toUpperCase() in COURSE_BY_ID;

export const courseClass = (id: CourseId) => `lx-c-${id}`;
