import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ArrowRight, Bell, CalendarClock, CalendarPlus, Check, Clock3, Pencil, RotateCcw, Trash2, X } from 'lucide-react';
import type { CourseId } from '../../types';
import type { Reminder, ReminderKind, Urgency } from '../progress/store';
import { deleteReminder, editScheduled, saveReminder } from '../progress/store';
import { COURSES, COURSE_BY_ID, courseClass } from '../courses';
import { href } from '../router';
import type { ReminderItem } from '../reminders';
import { KIND_LABEL, URGENCY_HINT, URGENCY_LABEL, defaultUrgency, fmtDay, resetScheduled, setReminder, upcoming, useReminders, whenText } from '../reminders';
import './reminders.css';

const URGENCY_ICON: Record<Urgency, React.ReactNode> = {
  high: <AlertTriangle size={12} aria-hidden />,
  medium: <Clock3 size={12} aria-hidden />,
  low: <Bell size={12} aria-hidden />
};
const URGENCY_CHIP: Record<Urgency, string> = { high: 'lx-chip--bad', medium: 'lx-chip--warn', low: '' };

export const UrgencyChip: React.FC<{ u: Urgency }> = ({ u }) => (
  <span className={`lx-chip ${URGENCY_CHIP[u]}`}>
    {URGENCY_ICON[u]} {URGENCY_LABEL[u]}
  </span>
);

const code = (c: CourseId | null) => (c ? COURSE_BY_ID[c].code : 'General');
export const reminderTitle = (r: Reminder) => (r.course ? `${code(r.course)} ${r.title}` : r.title);

// cancel hides a reminder (it can be restored); done ticks it off
export function cancelReminder(r: ReminderItem, on: boolean) {
  if (r.official) editScheduled(r.id, { cancelled: on ? true : null });
  else setReminder(r, { cancelled: on || undefined });
}
export function markDone(r: ReminderItem, on: boolean) {
  if (r.official) editScheduled(r.id, { done: on ? true : null });
  else setReminder(r, { done: on || undefined });
}

// ── add or edit ──────────────────────────────────────────────────────────────────
export const ReminderDialog: React.FC<{ item?: ReminderItem; preset?: { course?: CourseId | null; kind?: ReminderKind }; onClose: () => void }> = ({ item, preset, onClose }) => {
  const [f, setF] = useState(() => ({
    title: item?.title ?? '',
    course: (item ? item.course : preset?.course ?? null) as CourseId | null,
    kind: item?.kind ?? preset?.kind ?? ('assignment' as ReminderKind),
    date: item?.date ?? '',
    time: item?.time ?? '',
    detail: item?.detail ?? '',
    urgency: item?.urgency ?? defaultUrgency(preset?.kind ?? 'assignment')
  }));
  const [urgencyTouched, setUrgencyTouched] = useState(!!item);
  const [tried, setTried] = useState(false);
  const first = useRef<HTMLInputElement>(null);
  useEffect(() => {
    first.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [onClose]);
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((x) => ({ ...x, [k]: v }));
  const valid = f.title.trim() && f.date;

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    setTried(true);
    if (!valid) return;
    const r = { title: f.title.trim(), course: f.course, kind: f.kind, date: f.date, time: f.time.trim() || undefined, detail: f.detail.trim() || undefined, urgency: f.urgency };
    if (item?.official) {
      // keep only what the student changed, so a corrected course date still reaches them
      const changed = Object.fromEntries(Object.entries(r).filter(([k, v]) => (item as unknown as Record<string, unknown>)[k] !== v));
      if (Object.keys(changed).length) editScheduled(item.id, changed);
    } else if (item) setReminder(item, r);
    else saveReminder({ ...r, id: `r-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, createdAt: Date.now() });
    onClose();
  };

  return (
    <div className="lx-dialog-backdrop" onClick={onClose}>
      <form className="lx-dialog lx-rem-dialog" role="dialog" aria-modal="true" aria-labelledby="lx-rem-title" onClick={(e) => e.stopPropagation()} onSubmit={save} noValidate>
        <button type="button" className="lx-icon-btn lx-dialog-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h2 id="lx-rem-title" className="lx-h3">
          <CalendarPlus size={18} aria-hidden /> {item ? 'Edit reminder' : 'New reminder'}
        </h2>
        {item?.official && <p className="lx-meta">A course date. Your changes stay in this browser.</p>}

        <label className="lx-field">
          What is it?
          <input ref={first} className="lx-input" value={f.title} onChange={(e) => set('title', e.target.value)} placeholder={f.kind === 'assignment' ? 'Assignment 3' : f.kind === 'midterm' ? 'Midterm 1' : 'Study group'} aria-invalid={tried && !f.title.trim()} />
          {tried && !f.title.trim() && <span className="lx-rem-err">Give it a name.</span>}
        </label>

        <div className="lx-rem-grid">
          <label className="lx-field">
            Course
            <select className="lx-input" value={f.course ?? ''} onChange={(e) => set('course', (e.target.value || null) as CourseId | null)}>
              <option value="">General</option>
              {COURSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code}
                </option>
              ))}
            </select>
          </label>
          <label className="lx-field">
            Type
            <select
              className="lx-input"
              value={f.kind}
              onChange={(e) => {
                const k = e.target.value as ReminderKind;
                setF((x) => ({ ...x, kind: k, urgency: urgencyTouched ? x.urgency : defaultUrgency(k) }));
              }}
            >
              {(Object.keys(KIND_LABEL) as ReminderKind[]).map((k) => (
                <option key={k} value={k}>
                  {KIND_LABEL[k]}
                </option>
              ))}
            </select>
          </label>
          <label className="lx-field">
            Date
            <input type="date" className="lx-input" value={f.date} onChange={(e) => set('date', e.target.value)} aria-invalid={tried && !f.date} />
            {tried && !f.date && <span className="lx-rem-err">Pick a date.</span>}
          </label>
          <label className="lx-field">
            Time <span className="lx-meta">(optional)</span>
            <input className="lx-input" value={f.time} onChange={(e) => set('time', e.target.value)} placeholder="2:00–3:45 PM" />
          </label>
        </div>

        <fieldset className="lx-rem-urgency">
          <legend>How urgent?</legend>
          {(['high', 'medium', 'low'] as Urgency[]).map((u) => (
            <label key={u} className={`lx-rem-urg is-${u}${f.urgency === u ? ' is-on' : ''}`}>
              <input
                type="radio"
                name="urgency"
                checked={f.urgency === u}
                onChange={() => {
                  set('urgency', u);
                  setUrgencyTouched(true);
                }}
              />
              <span className="lx-rem-urg-name">
                {URGENCY_ICON[u]} {URGENCY_LABEL[u]}
              </span>
              <span className="lx-meta">{URGENCY_HINT[u]}</span>
            </label>
          ))}
        </fieldset>

        <label className="lx-field">
          Details <span className="lx-meta">(optional)</span>
          <textarea className="lx-input" rows={3} value={f.detail} onChange={(e) => set('detail', e.target.value)} placeholder="What it covers, what to bring, where it is…" />
        </label>

        <div className="lx-rem-actions">
          {item && !item.official && (
            <button
              type="button"
              className="lx-btn lx-btn--ghost lx-rem-delete"
              onClick={() => {
                deleteReminder(item.id);
                onClose();
              }}
            >
              <Trash2 size={16} /> Delete
            </button>
          )}
          {item?.official && item.edited && (
            <button
              type="button"
              className="lx-btn lx-btn--ghost"
              onClick={() => {
                resetScheduled(item.id);
                onClose();
              }}
            >
              <RotateCcw size={16} /> Use the course details
            </button>
          )}
          <span className="lx-rem-spacer" />
          <button type="button" className="lx-btn" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="lx-btn lx-btn--primary">
            <Check size={16} /> Save reminder
          </button>
        </div>
      </form>
    </div>
  );
};

// ── "Cancelled · Undo" ───────────────────────────────────────────────────────────
export function useUndoCancel() {
  const [last, setLast] = useState<ReminderItem | null>(null);
  useEffect(() => {
    if (!last) return;
    const t = setTimeout(() => setLast(null), 7000);
    return () => clearTimeout(t);
  }, [last]);
  const cancel = (r: ReminderItem) => {
    cancelReminder(r, true);
    setLast(r);
  };
  const toast = last && (
    <div className="lx-toast" role="status">
      <span>Cancelled {reminderTitle(last)}</span>
      <button
        type="button"
        onClick={() => {
          cancelReminder(last, false);
          setLast(null);
        }}
      >
        Undo
      </button>
    </div>
  );
  return { cancel, toast };
}

// ── one reminder in a list ───────────────────────────────────────────────────────
export const ReminderRow: React.FC<{ r: ReminderItem; onEdit: (r: ReminderItem) => void; onCancel: (r: ReminderItem) => void }> = ({ r, onEdit, onCancel }) => (
  <li className={`lx-rem-row is-${r.urgency}${r.done ? ' is-done' : ''} ${r.course ? courseClass(r.course) : ''}`}>
    <button type="button" className={`lx-rem-check${r.done ? ' is-on' : ''}`} onClick={() => markDone(r, !r.done)} aria-pressed={!!r.done} aria-label={r.done ? `Mark ${reminderTitle(r)} not done` : `Mark ${reminderTitle(r)} done`}>
      {r.done && <Check size={14} />}
    </button>
    <div className="lx-rem-body">
      <div className="lx-rem-top">
        {r.course && <span className="lx-rem-course">{code(r.course)}</span>}
        <strong>{r.title}</strong>
      </div>
      <span className="lx-meta lx-num">
        {fmtDay(r.date)}
        {r.time ? ` · ${r.time}` : ''} · <b className={r.left <= 1 && r.left >= 0 ? 'lx-rem-soon' : ''}>{whenText(r.left)}</b>
      </span>
      {r.detail && <p className="lx-rem-detail">{r.detail}</p>}
      <span className="lx-rem-tags">
        <UrgencyChip u={r.urgency} />
        <span className="lx-chip">{KIND_LABEL[r.kind]}</span>
      </span>
    </div>
    <span className="lx-rem-tools">
      <button type="button" className="lx-icon-btn" onClick={() => onEdit(r)} aria-label={`Edit ${reminderTitle(r)}`} title="Edit">
        <Pencil size={15} />
      </button>
      <button type="button" className="lx-icon-btn" onClick={() => onCancel(r)} aria-label={`Cancel ${reminderTitle(r)}`} title="Cancel reminder">
        <X size={16} />
      </button>
    </span>
  </li>
);

// ── My learning: the full list ──────────────────────────────────────────────────
export const RemindersCard: React.FC = () => {
  const all = useReminders();
  const [edit, setEdit] = useState<ReminderItem | 'new' | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showPast, setShowPast] = useState(false);
  const { cancel, toast } = useUndoCancel();
  const list = upcoming(all);
  const doneSoon = all.filter((r) => !r.cancelled && r.done && r.left >= 0);
  const past = all.filter((r) => r.cancelled || r.left < 0);
  const shown = showAll ? list : list.slice(0, 5);
  return (
    <div className="lx-side-card" id="reminders">
      <div className="lx-rem-head">
        <h2 className="lx-h3">Reminders</h2>
        <button type="button" className="lx-btn lx-btn--sm lx-btn--accent" onClick={() => setEdit('new')}>
          <CalendarPlus size={14} /> Add
        </button>
      </div>
      {list.length ? (
        <ul className="lx-rem-list">
          {[...shown, ...doneSoon].map((r) => (
            <ReminderRow key={r.id} r={r} onEdit={setEdit} onCancel={cancel} />
          ))}
        </ul>
      ) : (
        <p className="lx-meta">Nothing coming up. Add an exam, a deadline or a study session.</p>
      )}
      {list.length > 5 && (
        <button type="button" className="lx-linkbtn" onClick={() => setShowAll((x) => !x)}>
          {showAll ? 'Show fewer' : `Show all ${list.length}`}
        </button>
      )}
      {past.length > 0 && (
        <details className="lx-rem-past" open={showPast} onToggle={(e) => setShowPast((e.target as HTMLDetailsElement).open)}>
          <summary>Past and cancelled ({past.length})</summary>
          <ul>
            {past.map((r) => (
              <li key={r.id}>
                <span>
                  {reminderTitle(r)} <span className="lx-meta">· {fmtDay(r.date)}</span>
                </span>
                {r.cancelled && (
                  <button type="button" className="lx-linkbtn" onClick={() => cancelReminder(r, false)}>
                    Restore
                  </button>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}
      {edit && <ReminderDialog item={edit === 'new' ? undefined : edit} onClose={() => setEdit(null)} />}
      {toast}
    </div>
  );
};

// ── Home: the next few, as cards ────────────────────────────────────────────────
const examPrepHref = (r: ReminderItem) => (r.course && (r.kind === 'midterm' || r.kind === 'final') ? href({ name: 'course', course: r.course, tab: 'exam' }) : null);

const ComingUpMain: React.FC<{ r: ReminderItem; onEdit: () => void; children: React.ReactNode }> = ({ r, onEdit, children }) => {
  const to = examPrepHref(r);
  return to ? (
    <a className="lx-exam-main" href={to} aria-label={`Open exam prep for ${reminderTitle(r)}, ${fmtDay(r.date)}`}>
      {children}
      <span className="lx-exam-open">
        Open exam prep <ArrowRight size={14} aria-hidden />
      </span>
    </a>
  ) : (
    <button type="button" className="lx-exam-main" onClick={onEdit} aria-label={`${reminderTitle(r)}, ${fmtDay(r.date)}. Edit`}>
      {children}
    </button>
  );
};

export const ComingUp: React.FC = () => {
  const all = useReminders();
  const [adding, setAdding] = useState(false);
  const [edit, setEdit] = useState<ReminderItem | null>(null);
  const { cancel, toast } = useUndoCancel();
  const next = upcoming(all).slice(0, 4);
  return (
    <section className="lx-home-section" aria-labelledby="lx-exams">
      <div className="lx-section-head">
        <h2 id="lx-exams" className="lx-h2">
          Coming up
        </h2>
        <span className="lx-rem-headlinks">
          <button type="button" className="lx-btn lx-btn--sm" onClick={() => setAdding(true)}>
            <CalendarPlus size={14} /> Add reminder
          </button>
          <a className="lx-link" href={href({ name: 'my-learning' })}>
            All reminders
          </a>
        </span>
      </div>
      {next.length ? (
        <div className="lx-exam-strip">
          {next.map((r) => (
            <div key={r.id} className={`lx-exam-pill is-${r.urgency} ${r.course ? courseClass(r.course) : ''}`}>
              <CalendarClock size={18} aria-hidden />
              <ComingUpMain r={r} onEdit={() => setEdit(r)}>
                <strong>{reminderTitle(r)}</strong>
                <span className="lx-meta">
                  {fmtDay(r.date)}
                  {r.time ? ` · ${r.time}` : ''}
                </span>
                {r.detail && <span className="lx-meta lx-exam-detail">{r.detail}</span>}
              </ComingUpMain>
              <span className="lx-exam-when">
                <span className="lx-exam-days lx-num">{r.left === 0 ? 'Today' : r.left === 1 ? 'Tomorrow' : `${r.left} days`}</span>
                {r.urgency === 'high' && <UrgencyChip u="high" />}
              </span>
              <span className="lx-exam-tools">
                {examPrepHref(r) && (
                  <button type="button" className="lx-icon-btn lx-exam-edit" onClick={() => setEdit(r)} aria-label={`Edit ${reminderTitle(r)}`} title="Edit reminder">
                    <Pencil size={15} />
                  </button>
                )}
                <button type="button" className="lx-icon-btn lx-exam-x" onClick={() => cancel(r)} aria-label={`Cancel ${reminderTitle(r)}`} title="Cancel reminder">
                  <X size={16} />
                </button>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="lx-meta">Nothing coming up. Add your next exam or deadline to count down to it.</p>
      )}
      {(adding || edit) && (
        <ReminderDialog
          item={edit ?? undefined}
          onClose={() => {
            setAdding(false);
            setEdit(null);
          }}
        />
      )}
      {toast}
    </section>
  );
};
