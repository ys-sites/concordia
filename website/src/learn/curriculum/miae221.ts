// MIAE 221 — Materials Science & Engineering. Order follows Dr. Medraj's lectures; the midterm covers
// Ch 1–6.
import type { CourseSpec } from './types';

export const MIAE221_SPEC: CourseSpec = {
  id: 'MIAE221',
  whatYouLearn: [
    'Link structure to properties across metals, ceramics and polymers',
    'Explain bonding from electron configuration, and read force and energy curves',
    'Count atoms, coordination and packing in FCC, BCC and HCP cells, and compute density',
    'Index directions and planes, compute linear and planar density, and apply Bragg’s law',
    'Calculate vacancy concentrations, diffusion fluxes and carburizing times',
    'Read a stress–strain curve: modulus, yield, tensile strength, ductility and true stress'
  ],
  sections: [
    {
      id: 'atoms',
      title: 'Introduction, atoms & bonding',
      subtitle: 'Ch 1–2 · Lectures 1–3',
      midterm: true,
      lessons: [
        {
          id: 'materials-intro',
          title: 'Materials and why structure decides properties',
          summary: 'The classes of materials, science versus engineering, and the failures that taught us to care.',
          gate: ['intro'],
          videos: ['topic221:m221-01-intro'],
          bank: [{ ch: 'intro' }],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 01 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 1 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 01 /]
        },
        {
          id: 'atomic-structure',
          title: 'Atomic structure, moles & electron configuration',
          summary: 'Protons, isotopes and atomic mass; the mole; electron shells and the periodic table.',
          gate: ['config', 'atomsmass'],
          bank: [{ ch: 'bonding', re: /atomic number|isotope|avogadro|\bmole\b|bohr|wave-mechanical|electron config|stable electron|electronegativity scale|electropositive|atoms in|volume of a mole|density of solids/i }],
          resources: [/^03 - 1-Page Rapid Review Sheets\/Part 1 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 02 /]
        },
        {
          id: 'bonding',
          title: 'Bond types & % ionic character',
          summary: 'Ionic, covalent, metallic and secondary bonds, and how electronegativity sets the ionic character.',
          gate: ['bonding'],
          videos: ['topic221:m221-02-bonding'],
          youtube: ['whmLL77C8e0'],
          bank: [{ ch: 'bonding', not: /potential|well|energy|separation|melting|thermal expansion/i }, { ch: 'mixed', re: /ionic character|bonding/i, not: /bond energy/i }],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 02 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 2 - /, /^03 - 1-Page Rapid Review Sheets\/Part 2 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 03 /]
        },
        {
          id: 'bond-energy',
          title: 'Force–energy curves & properties from bonding',
          summary: 'The potential well: equilibrium spacing, bond energy, and why it predicts melting point, stiffness and expansion.',
          gate: ['bondcurve'],
          videos: ['topic221:m221-02b-bondcurve'],
          bank: [{ ch: 'bonding', re: /potential|well|energy|separation|melting|thermal expansion/i }, { ch: 'mixed', re: /bond energy|melting/i }]
        }
      ]
    },
    {
      id: 'crystals',
      title: 'Crystal structures',
      subtitle: 'Ch 3 · Lectures 4–5',
      midterm: true,
      lessons: [
        {
          id: 'unit-cells',
          title: 'Unit cells: n, CN, APF & crystal systems',
          summary: 'Count atoms per cell, coordination and packing for SC, BCC, FCC and HCP, and name the crystal systems.',
          gate: ['cells'],
          videos: ['topic221:m221-03-crystal'],
          youtube: ['PaGJwOPg2kU'],
          bank: [{ ch: 'crystal' }, { ch: 'mixed' }],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 03 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 3 - /, /^03 - 1-Page Rapid Review Sheets\/Part 3 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 0[45] /]
        },
        {
          id: 'theoretical-density',
          title: 'Theoretical density',
          summary: 'ρ = nA / (V_c N_A): from the crystal structure and atomic radius to a density you can check.',
          gate: ['density'],
          bank: [{ ch: 'crystal', re: /density/i }, { ch: 'mixed', re: /density|atoms per cm|cell volume/i }]
        },
        {
          id: 'crystalline-amorphous',
          title: 'Crystalline, amorphous & polycrystalline',
          summary: 'Long-range order, single crystals versus grains, anisotropy, and polymorphism.',
          gate: ['structure'],
          bank: [{ ch: 'crystal', re: /amorphous|crystalline|polymorph|allotrop|anisotropy|crystal vs atomic/i }, { ch: 'densities', re: /single crystals vs poly|allotropic/i }]
        }
      ]
    },
    {
      id: 'crystallography',
      title: 'Crystallography & X-rays',
      subtitle: 'Ch 3 · Lectures 5–6',
      midterm: true,
      lessons: [
        {
          id: 'directions',
          title: 'Miller indices: directions',
          summary: 'Point coordinates, direction indices and families of directions, step by step.',
          gate: ['directions'],
          bank: [{ ch: 'crystal', re: /direction/i }]
        },
        {
          id: 'planes',
          title: 'Miller indices: planes',
          summary: 'Intercepts, reciprocals and clearing fractions, including planes through the origin.',
          gate: ['planes'],
          videos: ['topic221:m221-04-densities'],
          youtube: ['9Tf1dB1yVKY'],
          bank: [{ ch: 'crystal', re: /plane|miller/i }]
        },
        {
          id: 'linear-planar-density',
          title: 'Linear & planar density, close packing',
          summary: 'Atoms per length and per area along key directions and planes, and why slip follows the densest ones.',
          gate: ['ldpd'],
          videos: ['topic221:m221-04-densities'],
          bank: [{ ch: 'densities', re: /linear density|planar density|slip/i }],
          resources: [/^02 - Comprehensive Topic Guides[^/]*\/Part 4 - /, /^03 - 1-Page Rapid Review Sheets\/Part 4 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 06 /]
        },
        {
          id: 'xrd',
          title: "X-ray diffraction & Bragg's law",
          summary: 'nλ = 2d sin θ, interplanar spacing in cubic crystals, and reading a powder pattern.',
          gate: ['xrd'],
          bank: [{ ch: 'densities' }]
        }
      ]
    },
    {
      id: 'imperfections',
      title: 'Imperfections in solids',
      subtitle: 'Ch 4 · Lectures 7–8',
      midterm: true,
      lessons: [
        {
          id: 'point-defects',
          title: 'Point defects & vacancy concentration',
          summary: 'Vacancies and self-interstitials, the Arrhenius law for N_v, and finding Q_v from data.',
          gate: ['vacancy'],
          videos: ['topic221:m221-05-defects'],
          bank: [{ ch: 'defects', re: /vacanc|self-interstitial|activation energy|arrhenius|defects bad/i }],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 04 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 5 - /, /^03 - 1-Page Rapid Review Sheets\/Part 5 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 07 /]
        },
        {
          id: 'solid-solutions',
          title: 'Impurities & solid solutions',
          summary: 'Substitutional and interstitial solutions, the Hume-Rothery rules, and converting wt% to at%.',
          gate: ['solidsol'],
          videos: ['topic221:m221-05-defects'],
          youtube: ['aMCth97s-Ns'],
          bank: [{ ch: 'defects', re: /hume|solid solu|interstitial vs|weight %|atom %|substitutional/i }]
        },
        {
          id: 'dislocations-grains',
          title: 'Dislocations, grain boundaries & microscopy',
          summary: 'Edge and screw dislocations, the Burgers vector, grain size and how we see microstructure.',
          gate: ['defects'],
          videos: ['topic221:m221-06-interfaces'],
          youtube: ['g-M6i2TQJP0'],
          bank: [{ ch: 'defects' }],
          resources: [/^02 - Comprehensive Topic Guides[^/]*\/Part 5B - /, /^03 - 1-Page Rapid Review Sheets\/Part 5B - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 08 /]
        }
      ]
    },
    {
      id: 'diffusion',
      title: 'Diffusion',
      subtitle: 'Ch 5 · Lecture 9',
      midterm: true,
      lessons: [
        {
          id: 'diffusion-mechanisms',
          title: 'Diffusion mechanisms & D(T)',
          summary: 'Vacancy and interstitial diffusion, and the Arrhenius dependence of the diffusion coefficient.',
          gate: ['diffmech'],
          videos: ['topic221:m221-07-diffusion'],
          youtube: ['K_1QmKJvNjc'],
          read: [/^01 - Teacher Lecture Notes\/Lecture 9 - Diffusion in Solids \(Expanded/],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 05 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 9 - /, /^03 - 1-Page Rapid Review Sheets\/Part 9 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 09 /]
        },
        {
          id: 'fick-first',
          title: "Fick's first law: steady state",
          summary: 'J = −D dC/dx: flux through a membrane and purification problems.',
          gate: ['fick1']
        },
        {
          id: 'fick-second',
          title: "Fick's second law, erf & carburizing",
          summary: 'Non-steady diffusion with the error function, and the shortcut Dt = constant.',
          gate: ['fick2']
        }
      ]
    },
    {
      id: 'mechanical',
      title: 'Mechanical properties of metals',
      subtitle: 'Ch 6 · Lectures 10–11',
      midterm: true,
      lessons: [
        {
          id: 'elastic',
          title: "Stress, strain, Hooke's law & Poisson's ratio",
          summary: 'Engineering stress and strain, the elastic modulus and lateral contraction.',
          gate: ['elastic'],
          videos: ['topic221:m221-08-mechanical'],
          youtube: ['pNIvZyd5djQ'],
          bank: [{ ch: 'mechanical', re: /elastic|modulus calc|hooke|poisson|elongation under/i, not: /resilience|recovery|permanent/i }],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 06 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 6 - /, /^03 - 1-Page Rapid Review Sheets\/Part 6 - /, /^01 - In-Class Lecture Notes[^/]*\/Lecture 10 /]
        },
        {
          id: 'tensile',
          title: 'The tensile curve: yield, TS, ductility & hardness',
          summary: 'The 0.002 offset, tensile strength, %EL and %RA, elastic recovery, resilience and hardness.',
          gate: ['tensile'],
          videos: ['topic221:m221-10-plastic'],
          youtube: ['-qHEi9kijj0'],
          bank: [{ ch: 'mechanical' }, { ch: 'lecture_12' }],
          read: [/^01 - Teacher Lecture Notes\/lecture 12-mech prop 3/, /^02 - Comprehensive Topic Guides.*Lecture 12/]
        },
        {
          id: 'plastic-true-stress',
          title: 'Plastic deformation, true stress & design',
          summary: 'True stress and strain, strain hardening σ = Kεⁿ, and safety factors.',
          videos: ['topic221:m221-10-plastic'],
          bank: [{ ch: 'mechanical', re: /true|hollomon|strain-hardening|n and K|log–log|safety|plastic deformation|unload/i }],
          read: [/^01 - Teacher Lecture Notes\/Lecture 11 - Plastic Deformation/],
          resources: [/^01 - In-Class Lecture Notes[^/]*\/Lecture 11 /]
        }
      ]
    },
    {
      id: 'dislocations',
      title: 'Dislocations & strengthening',
      subtitle: 'Ch 7 · Lectures 11–12 (After the midterm)',
      lessons: [
        {
          id: 'slip-systems',
          title: 'Dislocations & slip systems',
          summary: 'How dislocations move, slip planes and directions in FCC, BCC and HCP, and resolved shear stress.',
          gate: ['slip'],
          videos: ['topic221:m221-09-strengthening'],
          bank: [{ ch: 'strengthening', re: /slip|schmid|resolved/i }],
          youtube: ['QgymOJv0Igc'],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 07 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 7 - /, /^03 - 1-Page Rapid Review Sheets\/Part 7 - /]
        },
        {
          id: 'strengthening',
          title: 'Strengthening mechanisms & annealing',
          summary: 'Grain-size (Hall-Petch), solid-solution and strain hardening, then recovery and recrystallization. After the midterm.',
          bank: [{ ch: 'strengthening' }]
        }
      ]
    },
    {
      id: 'phase',
      title: 'Phase diagrams',
      subtitle: 'Ch 9 · Lectures 13–16',
      lessons: [
        {
          id: 'phase-diagrams',
          title: 'Binary phase diagrams & the lever rule',
          summary: 'Read a binary diagram, find the phases present and their amounts with the lever rule.',
          bank: [{ ch: 'phase', not: /iron|steel|pearlite|eutectoid|ferrite|austenite/i }],
          read: [/^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 13 - /],
          youtube: ['_UGVDKlquxo'],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 09 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 8 - /, /^03 - 1-Page Rapid Review Sheets\/Part 8 - /]
        },
        {
          id: 'iron-carbon',
          title: 'The iron–carbon system',
          summary: 'Ferrite, austenite, cementite and pearlite, and the microconstituents of hypoeutectoid steels.',
          bank: [{ ch: 'phase' }],
          read: [/^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 15 - /, /^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 16 - /],
          youtube: ['Cq6Ym5_OvEg', 'P4FFlpsJ8No']
        }
      ]
    },
    {
      id: 'beyond-metals',
      title: 'Ceramics, polymers & properties',
      subtitle: 'Lectures 17–25',
      lessons: [
        {
          id: 'ceramics',
          title: 'Ceramics',
          summary: 'Ceramic structures, processing and brittle fracture.',
          read: [/^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 17 - /, /^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 18 - /],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 12 & 13 /]
        },
        {
          id: 'polymers',
          title: 'Polymers',
          summary: 'Polymer structure, crystallinity, the glass transition and mechanical behaviour.',
          read: [/^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 19 - /, /^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 2[01] - /],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 14 & 15 /]
        },
        {
          id: 'functional-properties',
          title: 'Electrical, thermal, magnetic & optical properties',
          summary: 'Conductivity, heat capacity and expansion, magnetism and optics, in one tour.',
          read: [/^01 - Teacher Lecture Notes \(Dr\. Medraj\)\/Lecture 2[2-5] - /],
          resources: [/^02 - Callister Textbook Expanded Notes\/Chapter 18, 19, 21 /]
        }
      ]
    }
  ],
  examPrep: {
    bankPast: [
      { ch: 'midterm-drill', title: 'Midterm drill: 40 questions', summary: 'A full 40-question midterm drill in the teacher’s format, with solutions.' },
      { ch: 'past', title: 'Exam-style questions: midterms', summary: 'Questions modelled on past MIAE 221 midterms, including corrected exam answers.' },
      { ch: 'past-final', title: 'Exam-style questions: finals', summary: 'Questions modelled on past finals, for the whole course.' }
    ],
    mock: { title: 'Mock midterm (Ch 1–6)', size: 30, minutes: 90 },
    extra: [
      {
        id: 'teacher-practice',
        title: 'Midterm practice by subject',
        subtitle: 'Official marking key questions for Chapters 1–6, each with a course video lesson and worked solution',
        lessons: [
          {
            id: 'tp-miller-planes',
            title: 'Miller indices: planes',
            summary: 'Q1–Q3 on the 2017 exam paper: coordinate intercepts, reciprocals and plane indices (hkl).',
            steps: [
              { kind: 'video', title: 'Watch: Crystallographic Planes & Densities', slug: 'video', videoId: 'topic221:m221-04-densities' },
              { kind: 'practice', title: 'Index the planes', slug: 'practice', questions: { teacher: /^Miller Indices/ }, ordered: true }
            ]
          },
          {
            id: 'tp-crystal-densities',
            title: 'Crystal structures & densities',
            summary: 'Packing factor, coordination, theoretical density and unit cell geometries.',
            steps: [
              { kind: 'video', title: 'Watch: Crystal Structures', slug: 'video', videoId: 'topic221:m221-03-crystal' },
              { kind: 'practice', title: 'Solve the structure questions', slug: 'practice', questions: { teacher: /^Crystal Structures & Densities$/ }, ordered: true }
            ]
          },
          {
            id: 'tp-bonding',
            title: 'Atomic bonding',
            summary: 'Primary and secondary bond types, force-energy curves and percent ionic character.',
            steps: [
              { kind: 'video', title: 'Watch: Chemical Bonding', slug: 'video', videoId: 'topic221:m221-02-bonding' },
              { kind: 'practice', title: 'Answer the bonding questions', slug: 'practice', questions: { teacher: /^Atomic Bonding$/ }, ordered: true }
            ]
          },
          {
            id: 'tp-defects',
            title: 'Defects & solid solutions',
            summary: 'Vacancies, equilibrium Arrhenius concentration and Hume-Rothery solubility criteria.',
            steps: [
              { kind: 'video', title: 'Watch: Imperfections in Solids', slug: 'video', videoId: 'topic221:m221-05-defects' },
              { kind: 'practice', title: 'Answer the defect questions', slug: 'practice', questions: { teacher: /^Defects & Solid Solutions$/ }, ordered: true }
            ]
          },
          {
            id: 'tp-microscopy',
            title: 'Microscopy',
            summary: 'Sample polishing, chemical etching of grain boundaries, optical reflection and SEM.',
            steps: [
              { kind: 'video', title: 'Watch: Grain Boundaries & Microscopy', slug: 'video', videoId: 'topic221:m221-06-interfaces' },
              { kind: 'practice', title: 'Answer the microscopy questions', slug: 'practice', questions: { teacher: /^Microscopy$/ }, ordered: true }
            ]
          },
          {
            id: 'tp-diffusion',
            title: 'Diffusion',
            summary: "Fick's 1st law steady-state flux and 2nd law non-steady state concentration profiles.",
            steps: [
              { kind: 'video', title: 'Watch: Diffusion', slug: 'video', videoId: 'topic221:m221-07-diffusion' },
              { kind: 'practice', title: 'Solve the diffusion questions', slug: 'practice', questions: { teacher: /^Diffusion$/ }, ordered: true }
            ]
          },
          {
            id: 'tp-stress-strain',
            title: 'The stress–strain curve (Figure 1)',
            summary: 'Modulus E, 0.2% offset yield strength, ultimate tensile strength and necking.',
            steps: [
              { kind: 'video', title: 'Watch: Mechanical Properties of Metals', slug: 'video', videoId: 'topic221:m221-08-mechanical' },
              { kind: 'practice', title: 'Read the curve', slug: 'practice', questions: { teacher: /^Stress–Strain Curve/ }, ordered: true }
            ]
          },
          {
            id: 'tp-tensile',
            title: 'Tensile test calculations',
            summary: 'Engineering stress, engineering strain, percent elongation (%EL) and reduction in area (%RA).',
            steps: [
              { kind: 'video', title: 'Watch: Plastic Deformation & Tensile Properties', slug: 'video', videoId: 'topic221:m221-10-plastic' },
              { kind: 'practice', title: 'Do the calculations', slug: 'practice', questions: { teacher: /^Tensile Test Calculations$/ }, ordered: true }
            ]
          },
          {
            id: 'tp-full-paper',
            title: 'Complete midterm subject bundle (Ch 1–6)',
            summary: 'All midterm questions from Chapters 1–6 grouped by subject, with a timer, immediate feedback, and worked solutions.',
            steps: [{ kind: 'exam', title: 'Complete midterm subject bundle (Ch 1–6)', slug: 'exam', questions: { teacher: /^(?!Dislocations)/ }, ordered: false, timeLimit: 90 }]
          }
        ]
      },
      {
        id: 'post-midterm-practice',
        title: 'Post-midterm & Final exam topics',
        subtitle: 'Dislocations, strengthening and slip (Ch 7) covered after the midterm',
        lessons: [
          {
            id: 'tp-dislocations',
            title: 'Dislocations & slip',
            summary: 'Burgers vectors, slip planes and directions, and Schmid’s law resolved shear stress (Ch 7 · Final exam scope).',
            steps: [
              { kind: 'video', title: 'Watch: Dislocations & Strengthening', slug: 'video', videoId: 'topic221:m221-09-strengthening' },
              { kind: 'practice', title: 'Answer the slip questions', slug: 'practice', questions: { teacher: /^Dislocations & Slip$/ }, ordered: true }
            ]
          }
        ]
      },
      {
        id: 'exam-kit',
        title: 'Exam kit',
        subtitle: 'Cheat sheets and the equation sheet',
        lessons: [
          {
            id: 'cheat-sheet',
            title: 'Your one-page cheat sheet',
            summary: 'Ready-to-print one-page sheets and the official equation sheet.',
            steps: [
              { kind: 'reading', title: 'Read: midterm exam cheatsheet', slug: 'sheet', docs: [/^03 - 1-Page Rapid Review Sheets\/MIAE 221 - Midterm 1-Page Exam Cheatsheet/] },
              { kind: 'reading', title: 'Read: cheatsheet & survival guide', slug: 'survival', docs: [/^03 - 1-Page Rapid Review Sheets\/MIAE 221 - Midterm 1-Page Document Cheatsheet/] },
              { kind: 'reading', title: 'Read: equation sheet', slug: 'equations', docs: [/Final Exam Equation Sheet/] }
            ]
          }
        ]
      }
    ]
  }
};
