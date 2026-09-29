import { CourseDocument } from '../types';

// ---------------------------------------------------------------------------
// Display names
// ---------------------------------------------------------------------------

const UPPER_WORDS = new Set(['miae', 'indu', 'engr', 'ode', 'odes', 'dio', 'pwm', 'adc', 'bom', 'ie']);

const titleCase = (s: string) =>
  s
    .split(' ')
    .filter(Boolean)
    .map((w) => (UPPER_WORDS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');

// INDU 211 slide files are named like "3.0.INDU_211_CH4_1-2025" or "12.INDU_211_CH6and11_2025"
const formatInduChapter = (raw: string): string => {
  const ch = raw.replace(/[-_]?20\d\d.*$/, '');
  const parts = ch.match(/^(\d+)[-_](\d)$/);
  if (parts) return `Chapter ${parts[1]} (Part ${parts[2]})`;
  const pair = ch.match(/^(\d+)and(\d+)$/);
  if (pair) return `Chapters ${pair[1]} & ${pair[2]}`;
  if (ch === '12') return 'Chapters 1 & 2';
  return `Chapter ${ch}`;
};

export const displayTitle = (doc: CourseDocument): string => {
  const t = doc.title.trim();

  const indu = t.match(/^(\d+)(?:\.\d+)?\.INDU_211_CH(.+)$/i);
  if (indu) return `Lecture ${indu[1]} — ${formatInduChapter(indu[2])}`;

  const miae221 = t.match(/^lecture\s*(\d+)\s*-\s*(.+?)-students.*$/i);
  if (miae221) return `Lecture ${miae221[1]} — ${titleCase(miae221[2].replace(/-/g, ' ').replace(/\s*20\d\d$/, ''))}`;

  const question = t.match(/^Q(\d+)_([a-z])$/i);
  if (question) return `Question ${question[1]}(${question[2].toLowerCase()})`;

  // snake_case filenames → words ("control_statements1_part2" → "Control Statements 1 Part 2")
  if (/_/.test(t) && !/\s-\s/.test(t)) {
    const words = t
      .replace(/\.docx?$/i, '')
      .replace(/_/g, ' ')
      .replace(/([a-z]{3,})(\d)/gi, '$1 $2');
    return titleCase(words);
  }

  if (/^[a-z]/.test(t)) return titleCase(t);
  return t;
};

// ---------------------------------------------------------------------------
// Folder labels: "02 - Comprehensive Topic Guides" → { index: "02", name: "Comprehensive Topic Guides" }
// ---------------------------------------------------------------------------

export const splitFolderName = (folder: string): { index: string | null; name: string } => {
  const m = folder.match(/^(\d{1,2})\s*-\s*(.+)$/);
  return m ? { index: m[1].padStart(2, '0'), name: m[2] } : { index: null, name: folder };
};

const naturalCompare = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

// Unnumbered folders (e.g. "Mini Course") go after the numbered ones
export const compareFolders = (a: string, b: string): number => {
  const fa = splitFolderName(a);
  const fb = splitFolderName(b);
  if (!!fa.index !== !!fb.index) return fa.index ? -1 : 1;
  return naturalCompare(a, b);
};

// ---------------------------------------------------------------------------
// File order inside a folder
// ---------------------------------------------------------------------------

// Folders whose files have no numbering in their names: list them in teaching order
const TEACHING_ORDER: Record<string, string[]> = {
  'Miae 215/01 - Teacher Lecture Notes & Slides': [
    'introduction',
    'variable_types1',
    'variable_types2',
    'control_statements1',
    'control_statements1_part2',
    'Week 4 - Lecture 1',
    'Week 4 - Lecture 2',
    'Q2_e'
  ]
};

const folderOf = (doc: CourseDocument) => doc.relativePath.split('/').slice(0, -1).join('/');

const orderRank = (doc: CourseDocument): number => {
  const explicit = TEACHING_ORDER[folderOf(doc)];
  if (explicit) {
    const i = explicit.findIndex((prefix) => doc.title.startsWith(prefix));
    if (i !== -1) return i;
  }
  // Course outline / syllabus first, solution manuals last, everything else in between
  if (/outline|syllabus/i.test(doc.title)) return -1;
  if (/solutions?[ _]manual/i.test(doc.title)) return 2000;
  return 1000;
};

export const compareDocs = (a: CourseDocument, b: CourseDocument): number =>
  orderRank(a) - orderRank(b) || naturalCompare(displayTitle(a), displayTitle(b));

// ---------------------------------------------------------------------------
// Folder tree built from each document's relative path
// ---------------------------------------------------------------------------

export interface FolderNode {
  name: string;
  path: string[]; // folder names from the course root down to this folder
  folders: FolderNode[];
  docs: CourseDocument[];
  totalDocs: number;
}

export const buildFolderTree = (docs: CourseDocument[]): FolderNode => {
  const root: FolderNode = { name: '', path: [], folders: [], docs: [], totalDocs: 0 };
  for (const doc of docs) {
    const segments = doc.relativePath.split('/').slice(1, -1); // drop course dir and filename
    let node = root;
    node.totalDocs++;
    for (const seg of segments) {
      let child = node.folders.find((f) => f.name === seg);
      if (!child) {
        child = { name: seg, path: [...node.path, seg], folders: [], docs: [], totalDocs: 0 };
        node.folders.push(child);
      }
      child.totalDocs++;
      node = child;
    }
    node.docs.push(doc);
  }
  const sortNode = (n: FolderNode) => {
    n.folders.sort((a, b) => compareFolders(a.name, b.name));
    n.docs.sort(compareDocs);
    n.folders.forEach(sortNode);
  };
  sortNode(root);
  return root;
};

export const findFolder = (root: FolderNode, path: string[]): FolderNode | null => {
  let node: FolderNode | undefined = root;
  for (const seg of path) {
    node = node.folders.find((f) => f.name === seg);
    if (!node) return null;
  }
  return node;
};
