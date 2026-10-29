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

const TOPIC_ALIASES: Record<string, string> = {
  intro: 'intro',
  'materials-intro': 'intro',
  'materials and why structure decides properties': 'intro',
  'material classes & structure–property links': 'intro',
  'material classes & structure-property links': 'intro',
  config: 'config',
  'atomic-structure': 'config',
  'atomic structure, moles & electron configuration': 'config',
  'electron configuration & periodic groups': 'config',
  atomsmass: 'atomsmass',
  'moles, atoms & mass': 'atomsmass',
  bonding: 'bonding',
  'bond types & % ionic character': 'bonding',
  'bond-energy': 'bondcurve',
  bondcurve: 'bondcurve',
  'force–energy curves & properties from bonding': 'bondcurve',
  'force-energy curves & properties from bonding': 'bondcurve',
  'potential well & interatomic force curve': 'bondcurve',
  cells: 'cells',
  'unit-cells': 'cells',
  'unit cells: n, cn, apf & crystal systems': 'cells',
  'unit cells, packing & crystal systems': 'cells',
  density: 'density',
  'theoretical-density': 'density',
  'theoretical density': 'density',
  structure: 'structure',
  'crystalline-amorphous': 'structure',
  'crystalline, amorphous & polycrystalline': 'structure',
  directions: 'directions',
  'miller indices: directions': 'directions',
  'miller indices (directions)': 'directions',
  planes: 'planes',
  'miller indices: planes': 'planes',
  'miller indices (planes)': 'planes',
  ldpd: 'ldpd',
  'linear-planar-density': 'ldpd',
  'linear & planar density, close packing': 'ldpd',
  'linear & planar atomic density': 'ldpd',
  xrd: 'xrd',
  "x-ray diffraction & bragg's law": 'xrd',
  "bragg's law & x-ray diffraction": 'xrd',
  "bragg's law": 'xrd',
  vacancy: 'vacancy',
  'point-defects': 'vacancy',
  'point defects & vacancy concentration': 'vacancy',
  'vacancy concentration & arrhenius equation': 'vacancy',
  solidsol: 'solidsol',
  'solid-solutions': 'solidsol',
  'solid solutions': 'solidsol',
  'solid solutions & hume-rothery': 'solidsol',
  'solid solutions & hume-rothery rules': 'solidsol',
  'impurities & solid solutions': 'solidsol',
  defects: 'defects',
  'dislocations-grains': 'defects',
  'dislocations, grain boundaries & microscopy': 'defects',
  'dislocations & grain boundaries': 'defects',
  diffmech: 'diffmech',
  'diffusion-mechanisms': 'diffmech',
  'diffusion mechanisms': 'diffmech',
  'diffusion mechanisms & d(t)': 'diffmech',
  'diffusion mechanisms & temperature dependence': 'diffmech',
  fick1: 'fick1',
  'fick-first': 'fick1',
  "fick's first law: steady state": 'fick1',
  "fick's 1st law (steady-state flux)": 'fick1',
  fick2: 'fick2',
  'fick-second': 'fick2',
  "fick's second law, erf & carburizing": 'fick2',
  "fick's 2nd law (non-steady-state & erf)": 'fick2',
  elastic: 'elastic',
  "stress, strain, hooke's law & poisson's ratio": 'elastic',
  "stress, strain & hooke's law": 'elastic',
  tensile: 'tensile',
  'the tensile curve: yield, ts, ductility & hardness': 'tensile',
  'tensile curve, yield, uts & ductility': 'tensile',
  'plastic-true-stress': 'tensile',
  'plastic deformation, true stress & design': 'tensile',
  slip: 'slip',
  'slip-systems': 'slip',
  'dislocations & slip systems': 'slip',
  'dislocations & slip': 'slip',
  strengthening: 'slip',
  'strengthening mechanisms & annealing': 'slip'
};

const SUBJECT_ALIASES: Record<string, string> = {
  atoms: 'atoms',
  'introduction, atoms & bonding': 'atoms',
  'intro, atoms & bonding': 'atoms',
  'ch 1–2': 'atoms',
  'ch 1-2': 'atoms',
  crystals: 'crystals',
  'crystal structures': 'crystals',
  'ch 3': 'crystals',
  cryst: 'cryst',
  crystallography: 'cryst',
  'crystallography & x-rays': 'cryst',
  imperf: 'imperf',
  imperfections: 'imperf',
  'imperfections in solids': 'imperf',
  'ch 4': 'imperf',
  diffusion: 'diffusion',
  'diffusion in solids': 'diffusion',
  'ch 5': 'diffusion',
  mech: 'mech',
  mechanical: 'mech',
  'mechanical properties': 'mech',
  'mechanical properties of metals': 'mech',
  'ch 6': 'mech',
  slip: 'slip',
  dislocations: 'slip',
  'dislocations & strengthening': 'slip',
  'dislocations & slip': 'slip',
  'ch 7': 'slip'
};

export function getExamRatio(rawId?: string): ExamRatio | null {
  if (!rawId) return null;
  if (MIAE221_TOPIC_RATIOS[rawId]) return MIAE221_TOPIC_RATIOS[rawId];

  // Clean raw id
  let clean = rawId.trim();
  clean = clean.replace(/^(x:MIAE221:|b:|d:)/, '');
  clean = clean.replace(/\.(exam|practice|check|video|notes|tool|reading)$/, '');
  const lower = clean.toLowerCase();

  // 1. Direct alias lookup
  if (TOPIC_ALIASES[lower] && MIAE221_TOPIC_RATIOS[TOPIC_ALIASES[lower]]) {
    return MIAE221_TOPIC_RATIOS[TOPIC_ALIASES[lower]];
  }

  // 2. Substring matching against known topic names and aliases
  for (const [alias, canonical] of Object.entries(TOPIC_ALIASES)) {
    if (lower.includes(alias) || alias.includes(lower)) {
      if (MIAE221_TOPIC_RATIOS[canonical]) return MIAE221_TOPIC_RATIOS[canonical];
    }
  }

  // 3. Fallback to subject ratio converted into an ExamRatio
  const sub = getSubjectRatio(rawId);
  if (sub) {
    return {
      topicId: sub.subjectId,
      topicName: sub.subjectName,
      subjectId: sub.subjectId,
      subjectName: sub.subjectName,
      chapter: sub.chapter,
      m2017Count: sub.m2017Count,
      m2017Total: sub.m2017Total,
      m2017Pct: sub.m2017Pct,
      allPapersCount: sub.allPapersCount,
      allPapersTotal: sub.allPapersTotal,
      allPapersPct: sub.allPapersPct
    };
  }

  return null;
}

export function getSubjectRatio(rawId?: string): SubjectRatio | null {
  if (!rawId) return null;
  if (MIAE221_SUBJECT_RATIOS[rawId]) return MIAE221_SUBJECT_RATIOS[rawId];

  const lower = rawId.toLowerCase().trim();
  const canonical = SUBJECT_ALIASES[lower];
  if (canonical && MIAE221_SUBJECT_RATIOS[canonical]) {
    return MIAE221_SUBJECT_RATIOS[canonical];
  }

  for (const [alias, can] of Object.entries(SUBJECT_ALIASES)) {
    if (lower.includes(alias) || alias.includes(lower)) {
      if (MIAE221_SUBJECT_RATIOS[can]) return MIAE221_SUBJECT_RATIOS[can];
    }
  }

  return null;
}

