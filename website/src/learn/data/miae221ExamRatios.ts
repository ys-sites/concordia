// MIAE 221 Exam Question Topic Ratios & Frequency Distribution
// Compares the 2017 Sample Midterm (40 questions) against the entire historical past paper pool (120 questions)

export interface ExamRatio {
  topicId: string;
  topicName: string;
  subjectId: string;
  subjectName: string;
  chapter: string;
  m2017Count: number;
  m2017Total: number;
  m2017Pct: number;
  allPapersCount: number;
  allPapersTotal: number;
  allPapersPct: number;
}

export interface SubjectRatio {
  subjectId: string;
  subjectName: string;
  chapter: string;
  m2017Count: number;
  m2017Total: number;
  m2017Pct: number;
  allPapersCount: number;
  allPapersTotal: number;
  allPapersPct: number;
}

export const MIAE221_SUBJECT_RATIOS: Record<string, SubjectRatio> = {
  atoms: {
    subjectId: 'atoms',
    subjectName: 'Intro, Atoms & Bonding',
    chapter: 'Ch 1–2',
    m2017Count: 3,
    m2017Total: 40,
    m2017Pct: 7.5,
    allPapersCount: 28,
    allPapersTotal: 120,
    allPapersPct: 23.3
  },
  crystals: {
    subjectId: 'crystals',
    subjectName: 'Crystal Structures',
    chapter: 'Ch 3',
    m2017Count: 3,
    m2017Total: 40,
    m2017Pct: 7.5,
    allPapersCount: 21,
    allPapersTotal: 120,
    allPapersPct: 17.5
  },
  cryst: {
    subjectId: 'cryst',
    subjectName: 'Crystallography & X-rays',
    chapter: 'Ch 3',
    m2017Count: 6,
    m2017Total: 40,
    m2017Pct: 15.0,
    allPapersCount: 23,
    allPapersTotal: 120,
    allPapersPct: 19.2
  },
  imperf: {
    subjectId: 'imperf',
    subjectName: 'Imperfections',
    chapter: 'Ch 4',
    m2017Count: 6,
    m2017Total: 40,
    m2017Pct: 15.0,
    allPapersCount: 15,
    allPapersTotal: 120,
    allPapersPct: 12.5
  },
  diffusion: {
    subjectId: 'diffusion',
    subjectName: 'Diffusion',
    chapter: 'Ch 5',
    m2017Count: 6,
    m2017Total: 40,
    m2017Pct: 15.0,
    allPapersCount: 9,
    allPapersTotal: 120,
    allPapersPct: 7.5
  },
  mech: {
    subjectId: 'mech',
    subjectName: 'Mechanical Properties',
    chapter: 'Ch 6',
    m2017Count: 13,
    m2017Total: 40,
    m2017Pct: 32.5,
    allPapersCount: 23,
    allPapersTotal: 120,
    allPapersPct: 19.2
  },
  slip: {
    subjectId: 'slip',
    subjectName: 'Dislocations & Slip',
    chapter: 'Ch 7',
    m2017Count: 3,
    m2017Total: 40,
    m2017Pct: 7.5,
    allPapersCount: 1,
    allPapersTotal: 120,
    allPapersPct: 0.8
  }
};

export const MIAE221_TOPIC_RATIOS: Record<string, ExamRatio> = {
  intro: {
    topicId: 'intro',
    topicName: 'Material classes & structure–property links',
    subjectId: 'atoms',
    subjectName: 'Intro, Atoms & Bonding',
    chapter: 'Ch 1',
    m2017Count: 0,
    m2017Total: 40,
    m2017Pct: 0.0,
    allPapersCount: 0,
    allPapersTotal: 120,
    allPapersPct: 0.0
  },
  config: {
    topicId: 'config',
    topicName: 'Electron configuration & periodic groups',
    subjectId: 'atoms',
    subjectName: 'Intro, Atoms & Bonding',
    chapter: 'Ch 2',
    m2017Count: 0,
    m2017Total: 40,
    m2017Pct: 0.0,
    allPapersCount: 4,
    allPapersTotal: 120,
    allPapersPct: 3.3
  },
  atomsmass: {
    topicId: 'atomsmass',
    topicName: 'Moles, atoms & mass',
    subjectId: 'atoms',
    subjectName: 'Intro, Atoms & Bonding',
    chapter: 'Ch 2',
    m2017Count: 0,
    m2017Total: 40,
    m2017Pct: 0.0,
    allPapersCount: 2,
    allPapersTotal: 120,
    allPapersPct: 1.7
  },
  bonding: {
    topicId: 'bonding',
    topicName: 'Bond types & % ionic character',
    subjectId: 'atoms',
    subjectName: 'Intro, Atoms & Bonding',
    chapter: 'Ch 2',
    m2017Count: 2,
    m2017Total: 40,
    m2017Pct: 5.0,
    allPapersCount: 13,
    allPapersTotal: 120,
    allPapersPct: 10.8
  },
  bondcurve: {
    topicId: 'bondcurve',
    topicName: 'Force-energy curves, Tm, E, α',
    subjectId: 'atoms',
    subjectName: 'Intro, Atoms & Bonding',
    chapter: 'Ch 2',
    m2017Count: 1,
    m2017Total: 40,
    m2017Pct: 2.5,
    allPapersCount: 9,
    allPapersTotal: 120,
    allPapersPct: 7.5
  },
  cells: {
    topicId: 'cells',
    topicName: 'Unit cells, APF & coordination',
    subjectId: 'crystals',
    subjectName: 'Crystal Structures',
    chapter: 'Ch 3',
    m2017Count: 2,
    m2017Total: 40,
    m2017Pct: 5.0,
    allPapersCount: 8,
    allPapersTotal: 120,
    allPapersPct: 6.7
  },
  density: {
    topicId: 'density',
    topicName: 'Theoretical density',
    subjectId: 'crystals',
    subjectName: 'Crystal Structures',
    chapter: 'Ch 3',
    m2017Count: 1,
    m2017Total: 40,
    m2017Pct: 2.5,
    allPapersCount: 3,
    allPapersTotal: 120,
    allPapersPct: 2.5
  },
  structure: {
    topicId: 'structure',
    topicName: 'Crystalline vs amorphous',
    subjectId: 'crystals',
    subjectName: 'Crystal Structures',
    chapter: 'Ch 3',
    m2017Count: 0,
    m2017Total: 40,
    m2017Pct: 0.0,
    allPapersCount: 10,
    allPapersTotal: 120,
    allPapersPct: 8.3
  },
  directions: {
    topicId: 'directions',
    topicName: 'Miller indices: directions',
    subjectId: 'cryst',
    subjectName: 'Crystallography & X-rays',
    chapter: 'Ch 3',
    m2017Count: 1,
    m2017Total: 40,
    m2017Pct: 2.5,
    allPapersCount: 4,
    allPapersTotal: 120,
    allPapersPct: 3.3
  },
  planes: {
    topicId: 'planes',
    topicName: 'Miller indices: planes',
    subjectId: 'cryst',
    subjectName: 'Crystallography & X-rays',
    chapter: 'Ch 3',
    m2017Count: 4,
    m2017Total: 40,
    m2017Pct: 10.0,
    allPapersCount: 9,
    allPapersTotal: 120,
    allPapersPct: 7.5
  },
  ldpd: {
    topicId: 'ldpd',
    topicName: 'Linear & planar density',
    subjectId: 'cryst',
    subjectName: 'Crystallography & X-rays',
    chapter: 'Ch 3',
    m2017Count: 1,
    m2017Total: 40,
    m2017Pct: 2.5,
    allPapersCount: 7,
    allPapersTotal: 120,
    allPapersPct: 5.8
  },
  xrd: {
    topicId: 'xrd',
    topicName: 'X-ray diffraction & Bragg’s law',
    subjectId: 'cryst',
    subjectName: 'Crystallography & X-rays',
    chapter: 'Ch 3',
    m2017Count: 0,
    m2017Total: 40,
    m2017Pct: 0.0,
    allPapersCount: 3,
    allPapersTotal: 120,
    allPapersPct: 2.5
  },
  vacancy: {
    topicId: 'vacancy',
    topicName: 'Equilibrium vacancies (Arrhenius)',
    subjectId: 'imperf',
    subjectName: 'Imperfections',
    chapter: 'Ch 4',
    m2017Count: 1,
    m2017Total: 40,
    m2017Pct: 2.5,
    allPapersCount: 7,
    allPapersTotal: 120,
    allPapersPct: 5.8
  },
  solidsol: {
    topicId: 'solidsol',
    topicName: 'Solid solutions & Hume-Rothery',
    subjectId: 'imperf',
    subjectName: 'Imperfections',
    chapter: 'Ch 4',
    m2017Count: 2,
    m2017Total: 40,
    m2017Pct: 5.0,
    allPapersCount: 3,
    allPapersTotal: 120,
    allPapersPct: 2.5
  },
  defects: {
    topicId: 'defects',
    topicName: 'Dislocations, interfaces & microscopy',
    subjectId: 'imperf',
    subjectName: 'Imperfections',
    chapter: 'Ch 4',
    m2017Count: 3,
    m2017Total: 40,
    m2017Pct: 7.5,
    allPapersCount: 5,
    allPapersTotal: 120,
    allPapersPct: 4.2
  },
  diffmech: {
    topicId: 'diffmech',
    topicName: 'Diffusion mechanisms & D(T)',
    subjectId: 'diffusion',
    subjectName: 'Diffusion',
    chapter: 'Ch 5',
    m2017Count: 5,
    m2017Total: 40,
    m2017Pct: 12.5,
    allPapersCount: 4,
    allPapersTotal: 120,
    allPapersPct: 3.3
  },
  fick1: {
    topicId: 'fick1',
    topicName: 'Fick’s 1st law steady-state flux',
    subjectId: 'diffusion',
    subjectName: 'Diffusion',
    chapter: 'Ch 5',
    m2017Count: 1,
    m2017Total: 40,
    m2017Pct: 2.5,
    allPapersCount: 2,
    allPapersTotal: 120,
    allPapersPct: 1.7
  },
  fick2: {
    topicId: 'fick2',
    topicName: 'Fick’s 2nd law non-steady state',
    subjectId: 'diffusion',
    subjectName: 'Diffusion',
    chapter: 'Ch 5',
    m2017Count: 0,
    m2017Total: 40,
    m2017Pct: 0.0,
    allPapersCount: 3,
    allPapersTotal: 120,
    allPapersPct: 2.5
  },
  elastic: {
    topicId: 'elastic',
    topicName: 'Elastic deformation, E & Poisson',
    subjectId: 'mech',
    subjectName: 'Mechanical Properties',
    chapter: 'Ch 6',
    m2017Count: 3,
    m2017Total: 40,
    m2017Pct: 7.5,
    allPapersCount: 5,
    allPapersTotal: 120,
    allPapersPct: 4.2
  },
  tensile: {
    topicId: 'tensile',
    topicName: 'Tensile curve, yield, UTS & ductility',
    subjectId: 'mech',
    subjectName: 'Mechanical Properties',
    chapter: 'Ch 6',
    m2017Count: 10,
    m2017Total: 40,
    m2017Pct: 25.0,
    allPapersCount: 18,
    allPapersTotal: 120,
    allPapersPct: 15.0
  },
  slip: {
    topicId: 'slip',
    topicName: 'Dislocations & slip systems',
    subjectId: 'slip',
    subjectName: 'Dislocations & Slip',
    chapter: 'Ch 7',
    m2017Count: 3,
    m2017Total: 40,
    m2017Pct: 7.5,
    allPapersCount: 1,
    allPapersTotal: 120,
    allPapersPct: 0.8
  }
};

export function getExamRatio(topicId?: string): ExamRatio | null {
  if (!topicId) return null;
  return MIAE221_TOPIC_RATIOS[topicId] ?? null;
}

export function getSubjectRatio(subjectId?: string): SubjectRatio | null {
  if (!subjectId) return null;
  return MIAE221_SUBJECT_RATIOS[subjectId] ?? null;
}
