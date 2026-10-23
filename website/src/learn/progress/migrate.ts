// One-time import of progress kept by the old site, so nobody starts from zero after the redesign:
// per-question results from the old Midterm Gate drills (gate_stats_<COURSE>) and the read-aloud preference.
import type { CourseId } from '../../types';
import { getProgress, updateProgress } from './store';

const COURSES: CourseId[] = ['ENGR213', 'INDU211', 'MIAE215', 'MIAE221'];
const DAY = 86_400_000;

export function migrateOldProgress() {
  if (getProgress().migrated) return;
  try {
    const imported: Record<string, { a: number; c: number; last: 0 | 1 }> = {};
    for (const c of COURSES) {
      const raw = localStorage.getItem(`gate_stats_${c}`);
      if (!raw) continue;
      const stats = JSON.parse(raw) as Record<string, { a: number; c: number; last: 0 | 1 }>;
      for (const [key, s] of Object.entries(stats)) {
        const m = key.match(/^L:([^:]+):(\d+)$/);
        imported[m ? `l:${c}:${m[1]}:${m[2]}` : `x:${c}:${key}`] = s;
      }
    }
    const autoRead = localStorage.getItem('quiz-auto-read') === '1' || localStorage.getItem('vault-quiz-auto-read') === '1';
    updateProgress((p) => {
      for (const [id, s] of Object.entries(imported)) {
        if (p.questions[id]) continue;
        const box = s.last ? Math.min(3, 1 + s.c) : 1;
        p.questions[id] = { seen: s.a, right: s.c, last: s.last, lastAt: Date.now() - DAY, box, due: s.last ? Date.now() + DAY : Date.now(), course: id.split(':')[1] as CourseId };
      }
      if (autoRead) p.settings.autoRead = true;
      p.migrated = Date.now();
    });
  } catch {
    // unreadable old data: start fresh, but do not try again every visit
    updateProgress((p) => {
      p.migrated = Date.now();
    });
  }
}
