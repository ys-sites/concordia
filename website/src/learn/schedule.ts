// The course dates every student shares: midterms, finals and deadlines (Fall 2026). They show as reminders on
// Home (Coming up) and My learning, and the next midterm or final is what each course's readiness counts down
// to. Students can mark one done, cancel it or change its details; that stays in their own browser, keyed by
// the id here, so an id must never change once published (validate:curriculum locks them).
import type { CourseId } from '../types';
import type { ReminderKind } from './progress/store';

export interface ScheduleEvent {
  id: string;
  course: CourseId;
  kind: ReminderKind;
  title: string;
  date: string; // YYYY-MM-DD
  time?: string;
  detail?: string;
}

export const SCHEDULE: ScheduleEvent[] = [
  // midterms
  { id: 'engr213-midterm-1', course: 'ENGR213', kind: 'midterm', title: 'Midterm 1', date: '2026-10-23', time: '2:00–3:45 PM', detail: 'GNM 100 · Chapter 2 + Sections 17.1/17.2' },
  { id: 'miae221-midterm', course: 'MIAE221', kind: 'midterm', title: 'Midterm', date: '2026-10-30', time: '8:30 AM', detail: '25% of the grade · Chapters 1–7 · closed book, no cheat sheet' },
  { id: 'engr213-midterm-2', course: 'ENGR213', kind: 'midterm', title: 'Midterm 2', date: '2026-11-20', time: '2:00–3:45 PM', detail: 'GNM 100' },
  // finals
  { id: 'miae221-final', course: 'MIAE221', kind: 'final', title: 'Final exam', date: '2026-12-11', time: '2:00–5:00 PM' },
  { id: 'miae215-final', course: 'MIAE215', kind: 'final', title: 'Final exam', date: '2026-12-12', time: '9:00 AM–12:00 PM' },
  { id: 'engr213-final', course: 'ENGR213', kind: 'final', title: 'Final exam', date: '2026-12-12', time: '2:00–5:00 PM' },
  { id: 'indu211-final', course: 'INDU211', kind: 'final', title: 'Final exam', date: '2026-12-21', time: '9:00 AM–12:00 PM' },
  // assignments and projects
  { id: 'engr213-webwork-a5', course: 'ENGR213', kind: 'assignment', title: 'WeBWorK A5', date: '2026-10-25', time: '11:59 PM' },
  { id: 'indu211-assignment-3', course: 'INDU211', kind: 'assignment', title: 'Assignment #3', date: '2026-10-29' },
  { id: 'engr213-webwork-a6', course: 'ENGR213', kind: 'assignment', title: 'WeBWorK A6', date: '2026-11-01', time: '11:59 PM' },
  { id: 'indu211-assignment-4', course: 'INDU211', kind: 'assignment', title: 'Assignment #4', date: '2026-11-05' },
  { id: 'engr213-webwork-a7', course: 'ENGR213', kind: 'assignment', title: 'WeBWorK A7', date: '2026-11-08', time: '11:59 PM' },
  { id: 'engr213-webwork-a8', course: 'ENGR213', kind: 'assignment', title: 'WeBWorK A8', date: '2026-11-15', time: '11:59 PM' },
  { id: 'indu211-assignment-5', course: 'INDU211', kind: 'assignment', title: 'Assignment #5', date: '2026-11-19' },
  { id: 'engr213-webwork-a9', course: 'ENGR213', kind: 'assignment', title: 'WeBWorK A9', date: '2026-11-22', time: '11:59 PM' },
  { id: 'miae221-term-assignment', course: 'MIAE221', kind: 'assignment', title: 'Term assignment', date: '2026-11-27', time: '11:59 PM', detail: '10% of the grade · 1,500–2,000 words · AI analysis of an XRD pattern' },
  { id: 'indu211-project-video', course: 'INDU211', kind: 'project', title: 'Project video', date: '2026-12-01' },
  { id: 'indu211-project-report', course: 'INDU211', kind: 'project', title: 'Final project report', date: '2026-12-21', detail: 'Due on the final exam day' }
];
