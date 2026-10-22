// One list of reminders: the course schedule (with this student's changes on top) plus the ones they added.
import { useMemo } from 'react';
import type { CourseId } from '../types';
import type { Reminder, ReminderKind, Urgency } from './progress/store';
import { deleteReminder, editScheduled, saveReminder, useProgress } from './progress/store';
import { daysUntil } from './progress/insights';
import { SCHEDULE } from './schedule';

export interface ReminderItem extends Reminder {
  official: boolean; // from the course schedule
  edited?: boolean; // the student changed a course event's details
  left: number; // days until it (negative: past)
}

export const KIND_LABEL: Record<ReminderKind, string> = { midterm: 'Midterm', final: 'Final exam', quiz: 'Quiz', assignment: 'Assignment', project: 'Project', other: 'Other' };
export const URGENCY_LABEL: Record<Urgency, string> = { high: 'High', medium: 'Medium', low: 'Low' };
export const URGENCY_HINT: Record<Urgency, string> = { high: 'An exam or a big deadline', medium: 'Needs time set aside', low: 'Good to remember' };
export const defaultUrgency = (k: ReminderKind): Urgency => (k === 'midterm' || k === 'final' ? 'high' : k === 'other' ? 'low' : 'medium');
const isExam = (k: ReminderKind) => k === 'midterm' || k === 'final';

export function mergeReminders(mine: Reminder[], edits: Record<string, Partial<Reminder>>): ReminderItem[] {
  const official = SCHEDULE.map((e) => {
    const ed = edits[e.id] ?? {};
    const r: Reminder = { urgency: defaultUrgency(e.kind), createdAt: 0, ...e, ...ed };
    return { ...r, official: true, edited: ['title', 'date', 'time', 'detail', 'urgency', 'kind'].some((k) => k in ed), left: daysUntil(r.date) };
  });
  // an exam date set before reminders existed (migrated as `exam-<course>`) is dropped once the schedule has that exam
  const own = mine
    .filter((r) => !(r.id.startsWith('exam-') && official.some((o) => o.course === r.course && isExam(o.kind) && o.date === r.date)))
    .map((r) => ({ ...r, official: false, left: daysUntil(r.date) }));
  return [...official, ...own].sort((a, b) => a.date.localeCompare(b.date) || urgencyRank(a.urgency) - urgencyRank(b.urgency));
}
const urgencyRank = (u: Urgency) => (u === 'high' ? 0 : u === 'medium' ? 1 : 2);

export function useReminders(): ReminderItem[] {
  const mine = useProgress((s) => s.reminders);
  const edits = useProgress((s) => s.scheduleEdits);
  return useMemo(() => mergeReminders(mine, edits), [mine, edits]);
}

export const upcoming = (items: ReminderItem[]) => items.filter((r) => !r.cancelled && !r.done && r.left >= 0);

// the exam a course's readiness counts down to
export const nextExam = (items: ReminderItem[], course: CourseId) => upcoming(items).find((r) => r.course === course && isExam(r.kind));

export function setReminder(item: ReminderItem, changes: Partial<Reminder>) {
  if (item.official) editScheduled(item.id, changes);
  else saveReminder({ ...strip(item), ...changes });
}

export function removeReminder(item: ReminderItem) {
  if (item.official) editScheduled(item.id, { cancelled: true });
  else deleteReminder(item.id);
}

// a course event back to the schedule's details (done and cancelled stay as they are)
export const resetScheduled = (id: string) => editScheduled(id, { title: null, date: null, time: null, detail: null, urgency: null, kind: null });

const strip = ({ official: _o, edited: _e, left: _l, ...r }: ReminderItem): Reminder => r; // eslint-disable-line @typescript-eslint/no-unused-vars

export const whenText = (left: number) =>
  left === 0 ? 'Today' : left === 1 ? 'Tomorrow' : left > 1 ? `In ${left} days` : left === -1 ? 'Yesterday' : `${-left} days ago`;

export const fmtDay = (iso: string) => new Date(iso + 'T12:00:00').toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' });
