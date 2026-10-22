import React, { useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, ChevronRight, Download, FileCheck2, FileText, Folder, GraduationCap, Layers, Library, PencilRuler, Rocket, Search, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Curriculum, DocRef } from '../model';
import { COURSE_BY_ID } from '../courses';
import { href, navigate } from '../router';
import { openDoc } from '../docBus';
import { getPdfUrl } from '../../utils/pdfUrl';
import './resourceLibrary.css';

// The course's documents as a library: folders sorted into a few kinds, a file list per folder that shows which
// lessons use each file, and one search across everything.
interface Kind {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  test: RegExp;
}

const KINDS: Kind[] = [
  { id: 'teacher', title: 'Teacher’s notes', blurb: 'The slides and notes from class, in lecture order', icon: BookOpen, test: /teacher lecture notes|in-class lecture notes/i },
  { id: 'guides', title: 'Study guides', blurb: 'The same topics explained step by step, chapter by chapter', icon: Layers, test: /topic guides|notes explained|expanded notes|chapter \d+ summary|overview & study guide/i },
  { id: 'review', title: 'Review & cheat sheets', blurb: 'One page per topic, for the last look before the exam', icon: FileCheck2, test: /rapid review|cheat/i },
  { id: 'practice', title: 'Practice & worked solutions', blurb: 'Problems solved in full, tutorials and exercise sets', icon: PencilRuler, test: /practice problems|tutorials|worked problems|tutorial solutions/i },
  { id: 'textbook', title: 'Textbook & references', blurb: 'Textbook chapters and the reference sheets you build on', icon: Library, test: /syllabus & textbook|textbook chapters|calculus review/i },
  { id: 'video-notes', title: 'Video course notes', blurb: 'Notes that follow well-known video courses on the subject', icon: GraduationCap, test: /professor (dave|leonard)/i },
  { id: 'start', title: 'Getting started', blurb: 'Set up and first steps', icon: Rocket, test: /mini course/i }
];
const OTHER: Kind = { id: 'other', title: 'More files', blurb: '', icon: Folder, test: /.*/ };

const kindOf = (folder: string) => KINDS.find((k) => k.test.test(folder)) ?? OTHER;
const clean = (f: string) => f.replace(/^\d+\s*-\s*/, '').replace(/_/g, ' ');

interface FileItem extends DocRef {
  folder: string; // top folder inside the course
  sub: string; // sub-folder path below it ('' when none)
}

export const ResourceLibrary: React.FC<{ cur: Curriculum; folder?: string }> = ({ cur, folder }) => {
  const course = COURSE_BY_ID[cur.id];
  const [q, setQ] = useState('');

  const files: FileItem[] = useMemo(
    () =>
      cur.resources.flatMap((g) =>
        g.docs.map((d) => {
          const inner = d.path.split('/').slice(1, -1);
          return { ...d, folder: inner[0] ?? 'Course files', sub: inner.slice(1).map(clean).join(' › ') };
        })
      ),
    [cur]
  );

  // which lessons use each document (as a reading, slides in the notes, or a lesson resource)
  const usedIn = useMemo(() => {
    const m = new Map<string, { id: string; title: string }[]>();
    const add = (p: string, l: { id: string; title: string }) => {
      const list = m.get(p) ?? [];
      if (!list.some((x) => x.id === l.id)) list.push(l);
      m.set(p, list);
    };
    for (const s of cur.sections)
      for (const l of s.lessons) {
        for (const st of l.steps) for (const d of st.docs ?? []) add(d.path, l);
        for (const d of l.resources ?? []) add(d.path, l);
      }
    return m;
  }, [cur]);

  const folders = useMemo(() => {
    const m = new Map<string, FileItem[]>();
    for (const f of files) m.set(f.folder, [...(m.get(f.folder) ?? []), f]);
    return [...m].map(([name, list]) => ({ name, list, subs: new Set(list.map((x) => x.sub).filter(Boolean)).size, kind: kindOf(name) }));
  }, [files]);

  const go = (f?: string) => navigate({ name: 'course', course: cur.id, tab: 'resources', ...(f ? { folder: f } : {}) });

  const FileRow: React.FC<{ f: FileItem; showFolder?: boolean }> = ({ f, showFolder }) => {
    const lessons = usedIn.get(f.path) ?? [];
    return (
      <li className="lx-file">
        <button type="button" className="lx-file-main" onClick={() => openDoc(f)}>
          <FileText size={18} aria-hidden />
          <span className="lx-file-text">
            <span className="lx-file-title">{f.title}</span>
            {showFolder && <span className="lx-meta">{clean(f.folder)}{f.sub ? ` › ${f.sub}` : ''}</span>}
          </span>
        </button>
        {lessons.length > 0 && (
          <span className="lx-file-used">
            <span className="lx-meta">Used in</span>
            {lessons.slice(0, 3).map((l) => (
              <a key={l.id} className="lx-chip lx-chip--accent" href={href({ name: 'learn', course: cur.id, lesson: l.id })}>
                {l.title}
              </a>
            ))}
            {lessons.length > 3 && <span className="lx-meta">+{lessons.length - 3}</span>}
          </span>
        )}
        <a className="lx-icon-btn" href={getPdfUrl(f.path)} download title="Download">
          <Download size={17} />
          <span className="lx-sr">Download {f.title}</span>
        </a>
      </li>
    );
  };

  const term = q.trim().toLowerCase();
  const results = term ? files.filter((f) => `${f.title} ${f.folder} ${f.sub}`.toLowerCase().includes(term)) : [];
  const open = folder ? folders.find((f) => f.name === folder) : undefined;

  return (
    <div className="lx-lib">
      <div className="lx-lib-bar">
        {open ? (
          <nav className="lx-lib-crumbs" aria-label="Folder">
            <button type="button" className="lx-btn lx-btn--ghost lx-btn--sm" onClick={() => go()}>
              <ArrowLeft size={16} /> All folders
            </button>
            <span className="lx-meta">{course.code}</span>
            <ChevronRight size={14} aria-hidden className="lx-muted" />
            <strong>{clean(open.name)}</strong>
          </nav>
        ) : (
          <p className="lx-meta lx-num">
            {files.length} files in {folders.length} folders
          </p>
        )}
        <label className="lx-lib-search">
          <Search size={17} aria-hidden />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search all ${files.length} files in ${course.code}…`} aria-label={`Search the files of ${course.code}`} />
          {q && (
            <button type="button" className="lx-icon-btn" onClick={() => setQ('')} aria-label="Clear the search">
              <X size={16} />
            </button>
          )}
        </label>
      </div>

      {term ? (
        <section aria-live="polite">
          <h3 className="lx-h3 lx-lib-heading">
            {results.length} file{results.length === 1 ? '' : 's'} match “{q.trim()}”
          </h3>
          {results.length ? (
            <ul className="lx-file-list">
              {results.map((f) => (
                <FileRow key={f.path} f={f} showFolder />
              ))}
            </ul>
          ) : (
            <p className="lx-empty">No file matches. Try a lecture number, a chapter or a topic.</p>
          )}
        </section>
      ) : open ? (
        <section>
          {[...new Set(open.list.map((f) => f.sub))]
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((sub) => (
              <div key={sub || 'root'} className="lx-lib-sub">
                {sub && <h3 className="lx-h3 lx-lib-heading">{sub}</h3>}
                <ul className="lx-file-list">
                  {open.list
                    .filter((f) => f.sub === sub)
                    .map((f) => (
                      <FileRow key={f.path} f={f} />
                    ))}
                </ul>
              </div>
            ))}
        </section>
      ) : (
        [...KINDS, OTHER]
          .map((k) => ({ k, fs: folders.filter((f) => f.kind.id === k.id) }))
          .filter((x) => x.fs.length)
          .map(({ k, fs }) => (
            <section key={k.id} className="lx-lib-kind">
              <h3 className="lx-h3">{k.title}</h3>
              {k.blurb && <p className="lx-meta">{k.blurb}</p>}
              <div className="lx-folder-grid">
                {fs.map((f) => {
                  const Icon = f.kind.icon;
                  return (
                    <button key={f.name} type="button" className="lx-folder" onClick={() => go(f.name)}>
                      <span className="lx-folder-icon" aria-hidden>
                        <Icon size={22} />
                      </span>
                      <span className="lx-folder-text">
                        <strong>{clean(f.name)}</strong>
                        <span className="lx-meta lx-num">
                          {f.list.length} file{f.list.length === 1 ? '' : 's'}
                          {f.subs ? ` · ${f.subs} folder${f.subs === 1 ? '' : 's'}` : ''}
                        </span>
                      </span>
                      <ChevronRight size={18} aria-hidden className="lx-folder-go" />
                    </button>
                  );
                })}
              </div>
            </section>
          ))
      )}
    </div>
  );
};

export default ResourceLibrary;
