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

// ---------------------------------------------------------------------------
// YouTube Video Tutorial Mappings
// ---------------------------------------------------------------------------

export const YOUTUBE_VIDEO_MAP: Record<string, string> = {
  '00 - INDU 211 - Problem Solutions Complete Roadmap & Video Guide': 'https://www.youtube.com/playlist?list=PLuGCuftTFDZz87QrfzlgnXXh6dTVS6Y11',
  '01 - Demand Forecasting (Moving Average & Market Share)': 'https://www.youtube.com/watch?v=SOivSDdtTH8',
  '02 - Linear Programming Minimization (Graphical Method & Line Feasible Space)': 'https://www.youtube.com/watch?v=yTi70c0_cq8',
  '03 - Project Management & PERT Chart (Critical Path & Slack)': 'https://www.youtube.com/watch?v=b2g1kZrEYtk',
  '04 - Queuing Theory (M-M-1 Congestion & Waiting Line Models)': 'https://www.youtube.com/watch?v=XT1EgQRcqmU',
  '05 - Traveling Salesperson Problem (Warehouse Forklift Routing)': 'https://www.youtube.com/watch?v=ayqA56IHMZ0',
  '06 - Linear Programming Production Modeling (Multi-Constraint Formulation)': 'https://www.youtube.com/watch?v=Rwc_f6IzUQk',
  '07 - Statistical Quality Control (X-bar & R Charts and Process Capability)': 'https://www.youtube.com/watch?v=1BcAZosLMb0',

  // Professor Leonard Differential Equations Master Series
  'The Plan for Differential Equations': 'https://www.youtube.com/watch?v=xf-3ATzFyKA',
  'Introduction to Differential Equations (Lesson 2)': 'https://www.youtube.com/watch?v=EWVSxND_iWA',
  'Checking Solutions in Differential Equations': 'https://www.youtube.com/watch?v=5LkQEOPwqfk',
  'Introduction to Initial Value Problems': 'https://www.youtube.com/watch?v=HjioXdmwze0',
  'Introduction to Time Rate of Change': 'https://www.youtube.com/watch?v=yhklHobbuyg',
  'Solving Basic Differential Equations with Integration': 'https://www.youtube.com/watch?v=_4Bq6I68Yn4',
  'Differential Equations with Velocity and Acceleration': 'https://www.youtube.com/watch?v=MlUDvnj4E1U',
  'Problem Solving with Velocity and Acceleration': 'https://www.youtube.com/watch?v=pH7oxUCSfQY',
  'Introduction to Slope Fields': 'https://www.youtube.com/watch?v=m9Y8U9f9_Bw',
  'Applications of Slope Fields': 'https://www.youtube.com/watch?v=i_f6tC0BKxI',
  'Professor Leonard - Differential Equations Complete Roadmap': 'https://www.youtube.com/playlist?list=PLDesaqWTN6ESPaHy2QUKVaXNZuQNxkYQ_',

  // Professor Dave Explains Differential Equations Master Series
  'Professor Dave - Differential Equations Complete Roadmap': 'https://www.youtube.com/playlist?list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1',
  '01 - Introduction to Differential Equations': 'https://www.youtube.com/watch?v=QbkWlNf2Xtw',
  '02 - Classification of Differential Equations': 'https://www.youtube.com/watch?v=lwed4VVYuHo',
  '03 - Separable First-Order Differential Equations': 'https://www.youtube.com/watch?v=lbAX_LDjV5o',
  '04 - Linear First-Order Differential Equations': 'https://www.youtube.com/watch?v=rO31HNxBedg',
  '05 - Exact First-Order Differential Equations': 'https://www.youtube.com/watch?v=sJQIH4m0L_c',
  '06 - Homogeneous & Bernoulli Differential Equations': 'https://www.youtube.com/watch?v=o1AHVHEEChA',
  '07 - Linear Second-Order ODEs - Homogeneous Case': 'https://www.youtube.com/watch?v=MaZatB5UiwU',
  '08 - Linear Second-Order ODEs - Non-Homogeneous Case': 'https://www.youtube.com/watch?v=bojO7brQtE8',
  '09 - Special Second-Order ODEs - Cauchy-Euler & Nonlinear': 'https://www.youtube.com/watch?v=fsjcKgXcTVg',
  '10 - Numerical Methods for Differential Equations': 'https://www.youtube.com/watch?v=A1JnGhaVJsQ',
  '11 - Power Series Solutions - Leibniz Method': 'https://www.youtube.com/watch?v=g8iReAhrJcE',
  '12 - Power Series Solutions - Frobenius Method': 'https://www.youtube.com/watch?v=58_qJyfVl-Y',
  '13 - Systems of Differential Equations - Modeling & Elimination': 'https://www.youtube.com/watch?v=MW97ZFavZ0g',
  '14 - Systems of Differential Equations - Matrices & Stability': 'https://www.youtube.com/watch?v=LrzyMJ8CS1g',
  '15 - Laplace Transforms - Solving Differential Equations': 'https://www.youtube.com/watch?v=rrlBRs_etts',
  '16 - Laplace Transforms - Convolutions & LTI Systems': 'https://www.youtube.com/watch?v=RecYAjxdcEg',
  '17 - Difference Equations & Z-Transforms': 'https://www.youtube.com/watch?v=7eZ3p5RM89s',
  '18 - Introduction to Partial Differential Equations & Differential Operators': 'https://www.youtube.com/watch?v=4Ou2FtsD8X8',
  '19 - Quasi-Linear First-Order PDEs - Lagrange\'s Method': 'https://www.youtube.com/watch?v=LzMCBbxSMts',
  '20 - Laplace\'s Equation & Separation of Variables': 'https://www.youtube.com/watch?v=8jOqXM8OFh8',
  '21 - Fourier Series & Frequency Analysis': 'https://www.youtube.com/watch?v=Eta7T0DoYu8',
  '22 - Fourier Transforms, Power Spectra & K-Space': 'https://www.youtube.com/watch?v=CO8NX6qnWko',
  '23 - The Wave Equation - Vibrations in 1D': 'https://www.youtube.com/watch?v=ETowl5rNz40',
  '24 - The Wave Equation - Multidimensional Waves & Dispersion': 'https://www.youtube.com/watch?v=BKhc7nJ4QAY',
  '25 - The Diffusion Equation - Separation of Variables': 'https://www.youtube.com/watch?v=kRih2ctI3QM',
  '26 - The Diffusion Equation - Dimensional Analysis & Self-Similarity': 'https://www.youtube.com/watch?v=mMVjgURyiB0',
  '27 - The Diffusion Equation - Green\'s Functions': 'https://www.youtube.com/watch?v=Ghobc7v1-Js'
};

export const getVideoUrl = (doc: CourseDocument): string | null => {
  for (const [key, url] of Object.entries(YOUTUBE_VIDEO_MAP)) {
    if (doc.title.includes(key) || key.includes(doc.title) || doc.filename.includes(key)) {
      return url;
    }
  }
  return null;
};

export interface TutorialExamInfo {
  scope: 'midterm' | 'final' | 'overview';
  chapter: string;
  badgeText: string;
  badgeColor: string;
  badgeBg: string;
}

export const getTutorialExamInfo = (doc: CourseDocument): TutorialExamInfo | null => {
  const t = doc.title || doc.filename;
  if (/05 - Traveling Salesperson/i.test(t)) {
    return {
      scope: 'midterm',
      chapter: 'Chapter 5',
      badgeText: '🎯 Required for Midterm (Ch 5)',
      badgeColor: '#16a34a',
      badgeBg: 'rgba(22, 163, 74, 0.14)'
    };
  }
  if (/01 - Demand Forecasting/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapter 7',
      badgeText: '🏁 Final Exam Scope (Ch 7)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/02 - Linear Programming Minimization/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapter 14',
      badgeText: '🏁 Final Exam Scope (Ch 14)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/03 - Project Management/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapter 17',
      badgeText: '🏁 Final Exam Scope (Ch 17)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/04 - Queuing Theory/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapter 15',
      badgeText: '🏁 Final Exam Scope (Ch 15)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/06 - Linear Programming Production/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapter 14',
      badgeText: '🏁 Final Exam Scope (Ch 14)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/07 - Statistical Quality Control/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapter 8',
      badgeText: '🏁 Final Exam Scope (Ch 8)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/00 - INDU 211 - Problem Solutions Complete Roadmap/i.test(t)) {
    return {
      scope: 'overview',
      chapter: 'All Chapters',
      badgeText: '📋 Full Playlist Roadmap',
      badgeColor: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.14)'
    };
  }
  if (/Professor Leonard - Differential Equations Complete Roadmap/i.test(t)) {
    return {
      scope: 'overview',
      chapter: 'All Lessons',
      badgeText: '📋 Full Series Roadmap',
      badgeColor: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.14)'
    };
  }
  if (/Professor Dave - Differential Equations Complete Roadmap/i.test(t)) {
    return {
      scope: 'overview',
      chapter: 'All Lessons',
      badgeText: '📋 Full Series Roadmap',
      badgeColor: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.14)'
    };
  }
  if (/0[1-6]\s*-\s*.*(Separable|Linear First|Exact First|Homogeneous|Bernoulli|Classification|Introduction to Differential)/i.test(t) ||
      /Professor Dave.*(Lesson\s*0?[1-6]\b|Separable|Linear First|Exact First|Homogeneous|Bernoulli|Classification|Introduction)/i.test(t)) {
    return {
      scope: 'midterm',
      chapter: 'Chapters 1-2',
      badgeText: '🎯 Required for Midterm (Ch 1-2)',
      badgeColor: '#16a34a',
      badgeBg: 'rgba(22, 163, 74, 0.14)'
    };
  }
  if (/0[7-9]\s*-\s*.*(Linear Second|Special Second|Cauchy-Euler)/i.test(t) ||
      /Professor Dave.*(Lesson\s*0?[7-9]\b|Linear Second|Special Second|Cauchy-Euler)/i.test(t)) {
    return {
      scope: 'midterm',
      chapter: 'Chapter 3',
      badgeText: '🎯 Required for Midterm (Ch 3)',
      badgeColor: '#16a34a',
      badgeBg: 'rgba(22, 163, 74, 0.14)'
    };
  }
  if (/(1[0-6])\s*-\s*.*(Numerical|Power Series|Systems of Differential|Laplace)/i.test(t) ||
      /Professor Dave.*(Lesson\s*(1[0-6])\b|Numerical|Power Series|Systems|Laplace)/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapters 4-5, 10',
      badgeText: '🏁 Final Exam Scope (Ch 4-5, 10)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  if (/(1[7-9]|2[0-7])\s*-\s*.*(Difference Equations|Partial Differential|Lagrange|Fourier|Wave Equation|Diffusion)/i.test(t) ||
      /Professor Dave.*(Lesson\s*(1[7-9]|2[0-7])\b|Difference|PDE|Lagrange|Fourier|Wave|Diffusion)/i.test(t)) {
    return {
      scope: 'overview',
      chapter: 'Advanced Topics',
      badgeText: '🚀 Advanced ODE & PDE Scope',
      badgeColor: '#d97706',
      badgeBg: 'rgba(217, 119, 6, 0.12)'
    };
  }
  if (/Lesson\s*([1-9]|10)\b/i.test(t) || /The Plan for Differential|Checking Solutions|Slope Fields|Time Rate of Change|Velocity and Acceleration/i.test(t)) {
    return {
      scope: 'midterm',
      chapter: 'Chapter 1',
      badgeText: '🎯 Required for Midterm (Ch 1)',
      badgeColor: '#16a34a',
      badgeBg: 'rgba(22, 163, 74, 0.14)'
    };
  }
  if (/Lesson\s*(1[1-9]|2[0-9]|3[0-9])\b/i.test(t) || /Separable|Integrating Factor|Bernoulli|Exact Differential|Population Models|Homogeneous/i.test(t)) {
    return {
      scope: 'midterm',
      chapter: 'Chapter 2',
      badgeText: '🎯 Required for Midterm (Ch 2)',
      badgeColor: '#16a34a',
      badgeBg: 'rgba(22, 163, 74, 0.14)'
    };
  }
  if (/Second-Order|Undetermined Coefficients|Variation of Parameters|Oscillations|Laplace|Linear Systems/i.test(t)) {
    return {
      scope: 'final',
      chapter: 'Chapters 3-4',
      badgeText: '🏁 Final Exam Scope (Ch 3-4)',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.12)'
    };
  }
  return null;
};


