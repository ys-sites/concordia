// MIAE221 exam-prep content: past-exam questions, topics, lessons, repeat clusters and study videos.
// Formerly the encrypted Midterm Gate; migrated to plain data when the password was removed (see ARCHITECTURE.md, Part C).
import type { GateContent } from './types';
import { MIAE221_SOLVE_VIDEOS } from './miae221SolveVideos';
import { MIAE221_TOPIC_VIDEOS } from './miae221TopicVideos';
import { MIAE221_FIGURES } from './miae221Figures';

const content: GateContent = {
 "version": 2,
 "course": "MIAE221",
 "builtFor": "MIAE 221 · Fall 2026 midterm (Ch 1–7.4)",
 "midterm": {
  "date": "2026-10-30",
  "label": "Fri Oct 30, 8:30 AM · 25 % of the grade · closed book, no cheat sheet",
  "scope": "Ch 1–7.4: bonding, crystal structures & crystallography, imperfections, diffusion, mechanical properties, dislocations & slip systems (7.1–7.4)"
 },
 "labTitle": "Formula Lab",
 "labBlurb": "Every calculation the midterm needs, in teacher-notes order. Each one goes through four steps: understand it, follow a worked example from the slides or Callister, try the calculator with real exam numbers, then a practice quiz that mixes the real past questions with new ones in the same style.",
 "lectureMatch": "^lecture {l}-",
 "docs": {
  "master": {
   "title": "Master Study Guide & Exam Strategy",
   "path": "Miae 221/00 - Course Overview & Study Guide/MIAE 221 - Master Study Guide & Exam Strategy.pdf"
  },
  "l1": {
   "title": "Lecture 1 · Introduction",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 1-introduction-2026-students (1).pdf"
  },
  "l2": {
   "title": "Lecture 2 · Chemistry review",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 2-review chemistry-students26.pdf"
  },
  "l3": {
   "title": "Lecture 3 · Bonding",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 3-review chemistry 2-students26.pdf"
  },
  "l4": {
   "title": "Lecture 4 · Crystal structure 1",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 4-crystal structure 1-students26.pdf"
  },
  "l5": {
   "title": "Lecture 5 · Crystal structure 2",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 5-crystal structure 2-students26.pdf"
  },
  "l6": {
   "title": "Lecture 6 · Crystal structure 3",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 6-crystal structure3-students26.pdf"
  },
  "l7": {
   "title": "Lecture 7 · Defects 1",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 7-defects 1-students26.pdf"
  },
  "l8": {
   "title": "Lecture 8 · Defects 2",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 8-defects 2-students26.pdf"
  },
  "l9": {
   "title": "Lecture 9 · Diffusion",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 9-diffusion-students26.pdf"
  },
  "l10": {
   "title": "Lecture 10 · Mechanical properties 1",
   "path": "Miae 221/01 - Teacher Lecture Notes/lecture 10-mech prop 1-students26.pdf"
  },
  "g1": {
   "title": "Part 1 guide · Atomic structure",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 1 - Materials Classes, Atomic Structure & Energy Curves.pdf"
  },
  "g2": {
   "title": "Part 2 guide · Bonding",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 2 - Chemical Bonding, Potential Wells & Physical Properties.pdf"
  },
  "g3": {
   "title": "Part 3 guide · Crystal structures",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 3 - Crystal Structures, Unit Cells & Crystallography Master Guide.pdf"
  },
  "g4": {
   "title": "Part 4 guide · Densities & XRD",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 4 - Crystallographic Densities, XRD, Anisotropy & Bragg's Law Master Guide.pdf"
  },
  "g5": {
   "title": "Part 5 guide · Point defects & dislocations",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 5 - Imperfections in Solids, Point Defects, Solid Solutions & Dislocations Master Guide.pdf"
  },
  "g5b": {
   "title": "Part 5B guide · Grain boundaries & microscopy",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 5B - Grain Boundaries, Stacking Faults, Volume Defects & Microscopy Master Guide.pdf"
  },
  "g6": {
   "title": "Part 6 guide · Mechanical properties",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 6 - Mechanical Properties of Metals Master Guide.pdf"
  },
  "g7": {
   "title": "Part 7 guide · Dislocations & strengthening",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 7 - Dislocations & Strengthening Mechanisms Master Guide.pdf"
  },
  "g9": {
   "title": "Part 9 guide · Diffusion",
   "path": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 9 - Diffusion in Solids Master Guide.pdf"
  },
  "r3": {
   "title": "Review sheet · Crystal structures & Miller",
   "path": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 3 - Crystal Structures & Miller Indices - One-Page Review Sheet.pdf"
  },
  "r4": {
   "title": "Review sheet · Densities, XRD",
   "path": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 4 - Planar Densities, XRD & Bragg's Law - One-Page Review Sheet.pdf"
  },
  "r5": {
   "title": "Review sheet · Defects",
   "path": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 5 - Point Defects, Hume-Rothery & Dislocations - One-Page Review Sheet.pdf"
  },
  "r6": {
   "title": "Review sheet · Mechanical properties",
   "path": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 6 - Mechanical Properties of Metals - One-Page Review Sheet.pdf"
  },
  "r9": {
   "title": "Review sheet · Diffusion",
   "path": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 9 - Diffusion in Solids - One-Page Review Sheet.pdf"
  },
  "t1": {
   "title": "Tutorial 1 solved",
   "path": "Miae 221/04 - Practice Problems & Step-by-Step Solutions/Tutorial 1 - Fully Solved Master Guide.pdf"
  },
  "t2": {
   "title": "Tutorial 2 solved",
   "path": "Miae 221/04 - Practice Problems & Step-by-Step Solutions/Tutorial 2 - Fully Solved Master Guide.pdf"
  },
  "quant": {
   "title": "Step-by-step quantitative problem guide",
   "path": "Miae 221/04 - Practice Problems & Step-by-Step Solutions/MIAE 221 - Step-by-Step Quantitative Problem Guide.pdf"
  }
 },
 "overview": {
  "headline": "Three midterms, one bank of questions",
  "points": [
   "The F24, A25 and W26 midterms were written by different instructors, but they reuse the same question bank: identical stems, identical option lists, sometimes only shuffled.",
   "Calculation questions keep the template and change the numbers: a different metal, temperature, thickness or plane. The lecture and Callister examples are the originals.",
   "True/False sections recycle definitions word for word, often with one word flipped (elastic/plastic, FCC/HCP, θ/2θ).",
   "Three posted answer keys are wrong (A25 Q4, A25 Q20, A25 T/F 30), and the photographed W26 paper has student marks on Q2, Q3, Q6, Q12 and Q16 that are wrong. Use the corrected answers here.",
   "New this term: Ch 7.1–7.4 is inside the midterm scope. Old midterms barely touched it."
  ]
 },
 "exams": [
  {
   "id": "F24",
   "short": "F24",
   "label": "Fall 2024 midterm",
   "kind": "midterm",
   "detail": "Version X-A · 20 MC × 2 marks + 10 T/F × 1 mark · equation sheet + erf table attached",
   "count": 30
  },
  {
   "id": "A25",
   "short": "A25",
   "label": "Midterm 2025 (Version A)",
   "kind": "midterm",
   "detail": "20 MC × 2 marks + 10 T/F × 1 mark · same equation sheet as F24",
   "count": 30
  },
  {
   "id": "W26",
   "short": "W26",
   "label": "Winter 2026 midterm",
   "kind": "midterm",
   "detail": "20 MC × 2 marks + 20 T/F × 1 mark · photographed paper (marks on it are a student’s, not an official key)",
   "count": 40
  },
  {
   "id": "FX",
   "short": "Old final",
   "label": "Old final (MECH 221, undated)",
   "kind": "final",
   "detail": "Only the Ch 1–7 questions are used here",
   "count": 13
  },
  {
   "id": "F17",
   "short": "F17",
   "label": "Final 2017 (MECH 221)",
   "kind": "final",
   "detail": "Only the Ch 1–7 questions are used here",
   "count": 7
  },
  {
   "id": "PPS1",
   "short": "PPS #1",
   "label": "Practice Problem Set #1 (Fall 2026)",
   "kind": "homework",
   "detail": "Your tutorial set — the in-tutorial exercises are built from it",
   "count": 5
  }
 ],
 "subjects": [
  {
   "id": "atoms",
   "name": "Intro, atoms & bonding",
   "ch": "Ch 1–2 · Lectures 1–3",
   "blurb": "Material classes and structure–property links (Ch 1), then electron configurations, bond types, % ionic character, force/energy curves and what bond strength does to Tm, E and α.",
   "topics": [
    "intro",
    "config",
    "atomsmass",
    "bonding",
    "bondcurve"
   ]
  },
  {
   "id": "crystals",
   "name": "Crystal structures",
   "ch": "Ch 3 · Lectures 4–5",
   "blurb": "Unit cells, atoms per cell, APF, theoretical density, crystalline vs amorphous, polymorphism.",
   "topics": [
    "cells",
    "density",
    "structure"
   ]
  },
  {
   "id": "cryst",
   "name": "Crystallography & X-rays",
   "ch": "Ch 3 · Lectures 5–6",
   "blurb": "Miller indices for directions and planes, linear/planar density, close packing, Bragg’s law.",
   "topics": [
    "directions",
    "planes",
    "ldpd",
    "xrd"
   ]
  },
  {
   "id": "imperf",
   "name": "Imperfections",
   "ch": "Ch 4 · Lectures 7–8",
   "blurb": "Vacancies (Arrhenius), solid solutions, dislocations, grain boundaries, microscopy.",
   "topics": [
    "vacancy",
    "solidsol",
    "defects"
   ]
  },
  {
   "id": "diffusion",
   "name": "Diffusion",
   "ch": "Ch 5 · Lecture 9",
   "blurb": "Mechanisms, D(T), Fick’s 1st law (palladium), Fick’s 2nd law with erf.",
   "topics": [
    "diffmech",
    "fick1",
    "fick2"
   ]
  },
  {
   "id": "mech",
   "name": "Mechanical properties",
   "ch": "Ch 6 · Lecture 10",
   "blurb": "Stress, strain, E and its temperature dependence, tangent/secant modulus, Poisson and G, anelasticity, then the tensile curve (yield, TS, ductility, recovery) and hardness.",
   "topics": [
    "elastic",
    "tensile"
   ]
  },
  {
   "id": "slip",
   "name": "Dislocations & slip",
   "ch": "Ch 7.1–7.4",
   "blurb": "New to this term’s scope: dislocation motion and slip systems.",
   "topics": [
    "slip"
   ]
  }
 ],
 "topics": [
  {
   "id": "intro",
   "name": "Material classes & structure–property links",
   "ch": "Ch 1",
   "lec": [
    {
     "l": 1,
     "s": 4,
     "label": "What is a material?"
    },
    {
     "l": 1,
     "s": 7,
     "label": "Science vs engineering"
    },
    {
     "l": 1,
     "s": 8,
     "label": "Properties"
    },
    {
     "l": 1,
     "s": 9,
     "label": "Processing–structure–properties"
    },
    {
     "l": 1,
     "s": 12,
     "label": "Failure case studies"
    }
   ],
   "guide": "Part 1",
   "cal": "CH 1.1–1.4"
  },
  {
   "id": "config",
   "name": "Electron configuration & periodic groups",
   "ch": "Ch 2",
   "lec": [
    {
     "l": 2,
     "s": 9,
     "label": "Periodic table"
    },
    {
     "l": 2,
     "s": 14,
     "label": "Electron energy states"
    }
   ],
   "cal": "CH 2.3–2.4"
  },
  {
   "id": "atomsmass",
   "name": "Moles, atoms & mass",
   "ch": "Ch 2",
   "lec": [
    {
     "l": 2,
     "s": 12,
     "label": "Density, atomic weight & mole"
    },
    {
     "l": 2,
     "s": 13,
     "label": "Review problems"
    }
   ],
   "cal": "CH 2.2"
  },
  {
   "id": "bonding",
   "name": "Bond types & % ionic character",
   "ch": "Ch 2",
   "lec": [
    {
     "l": 3,
     "s": 2,
     "label": "Ionic"
    },
    {
     "l": 3,
     "s": 5,
     "label": "Covalent"
    },
    {
     "l": 3,
     "s": 9,
     "label": "% ionic character"
    },
    {
     "l": 3,
     "s": 11,
     "label": "Metallic"
    },
    {
     "l": 3,
     "s": 12,
     "label": "Secondary bonding"
    }
   ],
   "cal": "CH 2.6–2.8, Ex 2.3"
  },
  {
   "id": "bondcurve",
   "name": "Force–energy curves & properties from bonding",
   "ch": "Ch 2",
   "lec": [
    {
     "l": 2,
     "s": 15,
     "label": "Bonding forces"
    },
    {
     "l": 2,
     "s": 16,
     "label": "Bonding energy"
    },
    {
     "l": 3,
     "s": 14,
     "label": "Tm from bonding"
    },
    {
     "l": 3,
     "s": 15,
     "label": "E from bonding"
    },
    {
     "l": 3,
     "s": 16,
     "label": "α from bonding"
    }
   ],
   "cal": "CH 2.5, Ex 2.2"
  },
  {
   "id": "cells",
   "name": "Unit cells, n, CN, APF & crystal systems",
   "ch": "Ch 3",
   "lec": [
    {
     "l": 4,
     "s": 7,
     "label": "Unit cell"
    },
    {
     "l": 4,
     "s": 10,
     "label": "APF"
    },
    {
     "l": 4,
     "s": 12,
     "label": "FCC"
    },
    {
     "l": 4,
     "s": 16,
     "label": "Crystal systems"
    },
    {
     "l": 5,
     "s": 2,
     "label": "BCC/FCC/HCP review"
    }
   ],
   "cal": "CH 3.3–3.4, 3.7, Ex 3.1–3.3"
  },
  {
   "id": "density",
   "name": "Theoretical density",
   "ch": "Ch 3",
   "lec": [
    {
     "l": 5,
     "s": 8,
     "label": "Copper density example"
    }
   ],
   "cal": "CH 3.5, Ex 3.4"
  },
  {
   "id": "directions",
   "name": "Miller indices — directions",
   "ch": "Ch 3",
   "lec": [
    {
     "l": 5,
     "s": 9,
     "label": "Crystallographic points"
    },
    {
     "l": 5,
     "s": 11,
     "label": "General rules"
    },
    {
     "l": 5,
     "s": 15,
     "label": "Drawing directions"
    },
    {
     "l": 5,
     "s": 16,
     "label": "Families"
    }
   ],
   "cal": "CH 3.9, Ex 3.7–3.8"
  },
  {
   "id": "planes",
   "name": "Miller indices — planes",
   "ch": "Ch 3",
   "lec": [
    {
     "l": 5,
     "s": 18,
     "label": "Planes"
    },
    {
     "l": 5,
     "s": 19,
     "label": "Planes, worked"
    },
    {
     "l": 5,
     "s": 20,
     "label": "Families of planes"
    }
   ],
   "cal": "CH 3.10, Ex 3.10–3.11"
  },
  {
   "id": "ldpd",
   "name": "Linear & planar density, close packing",
   "ch": "Ch 3",
   "lec": [
    {
     "l": 6,
     "s": 4,
     "label": "Linear density"
    },
    {
     "l": 6,
     "s": 5,
     "label": "Planar density"
    },
    {
     "l": 6,
     "s": 6,
     "label": "FCC (110) PD"
    },
    {
     "l": 6,
     "s": 7,
     "label": "Why: slip"
    },
    {
     "l": 5,
     "s": 5,
     "label": "ABCABC stacking"
    },
    {
     "l": 5,
     "s": 7,
     "label": "HCP vs FCC"
    }
   ],
   "cal": "CH 3.11–3.12"
  },
  {
   "id": "xrd",
   "name": "X-ray diffraction & Bragg’s law",
   "ch": "Ch 3",
   "lec": [
    {
     "l": 6,
     "s": 10,
     "label": "Interplanar spacing"
    },
    {
     "l": 6,
     "s": 14,
     "label": "Bragg’s law"
    },
    {
     "l": 6,
     "s": 16,
     "label": "Diffractometer"
    },
    {
     "l": 6,
     "s": 17,
     "label": "Fe (220) example"
    }
   ],
   "cal": "CH 3.16, Ex 3.13–3.14"
  },
  {
   "id": "structure",
   "name": "Crystalline vs amorphous, single vs polycrystal, polymorphism",
   "ch": "Ch 3–4",
   "lec": [
    {
     "l": 4,
     "s": 3,
     "label": "Crystalline vs amorphous"
    },
    {
     "l": 6,
     "s": 9,
     "label": "Single vs polycrystals"
    },
    {
     "l": 6,
     "s": 18,
     "label": "Polymorphism"
    },
    {
     "l": 8,
     "s": 2,
     "label": "Polycrystalline"
    },
    {
     "l": 8,
     "s": 3,
     "label": "Grain boundaries"
    }
   ],
   "cal": "CH 3.6, 3.13–3.15, 3.17"
  },
  {
   "id": "vacancy",
   "name": "Point defects & vacancy concentration",
   "ch": "Ch 4",
   "lec": [
    {
     "l": 7,
     "s": 4,
     "label": "Point defects"
    },
    {
     "l": 7,
     "s": 5,
     "label": "Arrhenius"
    },
    {
     "l": 7,
     "s": 8,
     "label": "Lead example"
    }
   ],
   "cal": "CH 4.2, Ex 4.1"
  },
  {
   "id": "solidsol",
   "name": "Impurities & solid solutions",
   "ch": "Ch 4",
   "lec": [
    {
     "l": 7,
     "s": 11,
     "label": "Solid solution"
    },
    {
     "l": 7,
     "s": 12,
     "label": "Substitutional vs interstitial"
    },
    {
     "l": 7,
     "s": 13,
     "label": "Solubility rules"
    }
   ],
   "cal": "CH 4.3–4.4"
  },
  {
   "id": "defects",
   "name": "Dislocations, grain boundaries & microscopy",
   "ch": "Ch 4",
   "lec": [
    {
     "l": 7,
     "s": 16,
     "label": "Dislocations"
    },
    {
     "l": 7,
     "s": 17,
     "label": "Edge"
    },
    {
     "l": 7,
     "s": 18,
     "label": "Screw"
    },
    {
     "l": 7,
     "s": 20,
     "label": "Defects summary"
    },
    {
     "l": 8,
     "s": 3,
     "label": "Grain boundaries"
    },
    {
     "l": 8,
     "s": 5,
     "label": "Etching"
    }
   ],
   "cal": "CH 4.5–4.10"
  },
  {
   "id": "diffmech",
   "name": "Diffusion mechanisms & D(T)",
   "ch": "Ch 5",
   "lec": [
    {
     "l": 9,
     "s": 3,
     "label": "Diffusion couple"
    },
    {
     "l": 9,
     "s": 5,
     "label": "Vacancy diffusion"
    },
    {
     "l": 9,
     "s": 6,
     "label": "Interstitial diffusion"
    },
    {
     "l": 9,
     "s": 18,
     "label": "Factors"
    },
    {
     "l": 9,
     "s": 20,
     "label": "Activation energy"
    }
   ],
   "cal": "CH 5.2, 5.5, Ex 5.4–5.5"
  },
  {
   "id": "fick1",
   "name": "Fick’s 1st law (steady state)",
   "ch": "Ch 5",
   "lec": [
    {
     "l": 9,
     "s": 8,
     "label": "Flux"
    },
    {
     "l": 9,
     "s": 9,
     "label": "Pd purification example"
    },
    {
     "l": 9,
     "s": 11,
     "label": "Steady-state summary"
    }
   ],
   "cal": "CH 5.3, Ex 5.1"
  },
  {
   "id": "fick2",
   "name": "Fick’s 2nd law, erf & carburizing",
   "ch": "Ch 5",
   "lec": [
    {
     "l": 9,
     "s": 10,
     "label": "Case hardening"
    },
    {
     "l": 9,
     "s": 12,
     "label": "Non-steady state"
    },
    {
     "l": 9,
     "s": 15,
     "label": "erf solution"
    },
    {
     "l": 9,
     "s": 16,
     "label": "erf table"
    },
    {
     "l": 9,
     "s": 17,
     "label": "Special case"
    },
    {
     "l": 9,
     "s": 21,
     "label": "Decarburization example"
    }
   ],
   "cal": "CH 5.4, Ex 5.2–5.3"
  },
  {
   "id": "elastic",
   "name": "Stress, strain, Hooke’s law, E & Poisson",
   "ch": "Ch 6",
   "lec": [
    {
     "l": 10,
     "s": 3,
     "label": "Loading modes"
    },
    {
     "l": 10,
     "s": 6,
     "label": "Engineering strain"
    },
    {
     "l": 10,
     "s": 8,
     "label": "Engineering stress"
    },
    {
     "l": 10,
     "s": 10,
     "label": "Hooke’s law"
    },
    {
     "l": 10,
     "s": 11,
     "label": "Steel wire example"
    },
    {
     "l": 10,
     "s": 12,
     "label": "E vs temperature"
    },
    {
     "l": 10,
     "s": 13,
     "label": "Tangent & secant modulus"
    },
    {
     "l": 10,
     "s": 15,
     "label": "Poisson’s ratio"
    },
    {
     "l": 10,
     "s": 16,
     "label": "Anelasticity"
    }
   ],
   "guide": "Part 6",
   "cal": "CH 6.1–6.5, 6.9, Ex 6.1–6.2"
  },
  {
   "id": "tensile",
   "name": "Tensile curve: yield, TS, ductility, recovery, hardness",
   "ch": "Ch 6",
   "lec": [],
   "guide": "Part 6",
   "cal": "CH 6.6–6.10, Ex 6.3–6.4"
  },
  {
   "id": "slip",
   "name": "Dislocations & slip systems (Ch 7.1–7.4)",
   "ch": "Ch 7",
   "lec": [],
   "guide": "Part 7",
   "cal": "CH 7.1–7.4"
  }
 ],
 "questions": [
  {
   "id": "F24-1",
   "exam": "F24",
   "n": 1,
   "topic": "directions",
   "kind": "concept",
   "q": "The face diagonals of a cubic crystal are represented by which family of directions?",
   "opts": [
    "<100>",
    "<110>",
    "<111>",
    "<210>",
    "{211}"
   ],
   "ans": "b",
   "status": "key"
  },
  {
   "id": "F24-2",
   "exam": "F24",
   "n": 2,
   "topic": "diffmech",
   "kind": "calc",
   "q": "Carbon in BCC iron: $Q_d = 80$ kJ/mol, $D_0 = 6.2\\times10^{-7}$ m²/s. In FCC iron: $148$ kJ/mol, $2.3\\times10^{-5}$ m²/s. At 910 °C the carbon atoms…",
   "opts": [
    "move ~3× faster in BCC",
    "move ~3× faster in FCC",
    "move at the same speed",
    "move ~30× faster in BCC",
    "move ~30× faster in FCC"
   ],
   "ans": "d",
   "status": "verified",
   "note": "$T = 1183$ K → $D_{BCC}/D_{FCC} = 27.1 \\approx 30$.",
   "f": [
    "arrD"
   ]
  },
  {
   "id": "F24-3",
   "exam": "F24",
   "n": 3,
   "topic": "bonding",
   "kind": "concept",
   "q": "Diamond and graphite are both carbon, but diamond is much harder because…",
   "opts": [
    "diamond only covalent, graphite only vdW",
    "graphite only covalent, diamond only vdW",
    "diamond covalent + vdW, graphite only vdW",
    "graphite covalent + vdW, diamond only vdW",
    "diamond only covalent; graphite both covalent and van der Waals"
   ],
   "ans": "e",
   "status": "key"
  },
  {
   "id": "F24-4",
   "exam": "F24",
   "n": 4,
   "topic": "cells",
   "kind": "calc",
   "q": "Vanadium (BCC) has a lattice constant of 0.304 nm. How many unit cells are there in 1 mm³?",
   "opts": [
    "3.56×10¹⁹",
    "3.289×10⁹",
    "3.56×10²⁸",
    "2.847×10²⁰",
    "3.289×10¹⁸"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$V_C = a^3 = (0.304\\times10^{-6}\\text{ mm})^3 = 2.81\\times10^{-20}$ mm³ → $1/V_C = 3.56\\times10^{19}$ cells.",
   "f": [
    "cubic"
   ]
  },
  {
   "id": "F24-5",
   "exam": "F24",
   "n": 5,
   "topic": "tensile",
   "kind": "concept",
   "q": "A can dropped on a concrete floor is permanently distorted. The cause is best described as…",
   "opts": [
    "tensile strength exceeded",
    "yield strength exceeded",
    "elastic modulus exceeded",
    "spontaneous combustion",
    "ductility insufficient"
   ],
   "ans": "b",
   "status": "key"
  },
  {
   "id": "F24-6",
   "exam": "F24",
   "n": 6,
   "topic": "bondcurve",
   "kind": "figure",
   "q": "The figure shows the net bonding force between two atoms. What is the equilibrium spacing between the two atoms? (1 Å = 10⁻¹⁰ m)",
   "opts": [
    "2 Å",
    "3 Å",
    "5 Å",
    "7 Å",
    "8 Å"
   ],
   "ans": "b",
   "status": "key",
   "note": "Equilibrium is where $F_N = 0$ on a force curve (on an energy curve it is the minimum)."
  },
  {
   "id": "F24-7",
   "exam": "F24",
   "n": 7,
   "topic": "fick2",
   "kind": "calc",
   "q": "Thick iron, $C_0 \\approx 0$, surface nitrogen held at 5 kg/m³, $D = 6.9\\times10^{-11}$ m²/s. Concentration 0.5 mm below the surface after 1 h?",
   "opts": [
    "5 kg/m³",
    "0.48 kg/m³",
    "1.0 kg/m³",
    "2.4 kg/m³",
    "6.9 kg/m³"
   ],
   "ans": "d",
   "status": "verified",
   "note": "$z = 0.5\\times10^{-3}/(2\\sqrt{6.9\\times10^{-11}\\cdot3600}) = 0.502$ → erf = 0.5205 → $C_x = 5(1-0.5205) = 2.4$.",
   "f": [
    "erf"
   ]
  },
  {
   "id": "F24-8",
   "exam": "F24",
   "n": 8,
   "topic": "diffmech",
   "kind": "concept",
   "q": "A copper block pressed against a nickel block and held hot for a long time:",
   "opts": [
    "Cu diffuses into Ni (lower melting point)",
    "Ni diffuses into Cu",
    "Cu diffuses into Ni AND Ni diffuses into Cu",
    "no diffusion (complete solubility)",
    "Ni diffuses into Cu (Cu lower packing)"
   ],
   "ans": "c",
   "status": "key",
   "note": "This is the diffusion couple of Lecture 9, slide 3 (Callister Fig. 5.1): interdiffusion."
  },
  {
   "id": "F24-9",
   "exam": "F24",
   "n": 9,
   "topic": "elastic",
   "kind": "concept",
   "q": "Steel A has twice the yield strength of steel B but half the ductility. Bending identical bars elastically by the same amount:",
   "opts": [
    "A easier",
    "B easier",
    "no difference in the forces initially",
    "difference set by the yield strengths",
    "impossible, different ductility"
   ],
   "ans": "c",
   "status": "key",
   "note": "Elastic response depends on E only. Both are steels → same E (~207 GPa). Stiffness ≠ strength."
  },
  {
   "id": "F24-10",
   "exam": "F24",
   "n": 10,
   "topic": "vacancy",
   "kind": "concept",
   "q": "A self-interstitial is…",
   "opts": [
    "a small atom crowded into the interstices of larger atoms",
    "an empty lattice position",
    "an extra-large interstitial space",
    "an atom of the crystal crowded into an interstitial space between similar atoms",
    "an atom that likes to take pictures of itself"
   ],
   "ans": "d",
   "status": "key"
  },
  {
   "id": "F24-11",
   "exam": "F24",
   "n": 11,
   "topic": "elastic",
   "kind": "calc",
   "q": "Steel rods, 20 mm diameter, 10 m long, each carry 9800 N (elastic). E = 207 GPa. New length?",
   "opts": [
    "10.00151 m",
    "10.000338 m",
    "10.151 m",
    "10.00015 m",
    "10.00227 m"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$\\Delta L = FL_0/(AE) = 9800\\cdot10/(\\pi(0.01)^2\\cdot207\\times10^9) = 1.507$ mm.",
   "f": [
    "hooke"
   ]
  },
  {
   "id": "F24-12",
   "exam": "F24",
   "n": 12,
   "topic": "elastic",
   "kind": "calc",
   "q": "Same rods as Q11 (steel, 20 mm diameter, 10 m long, each carrying 9800 N, E = 207 GPa). The load on each rod increases by 50 %. New length?",
   "opts": [
    "10.00151 m",
    "10.0023 m",
    "10.32 m",
    "12.27 m",
    "1000.151 mm"
   ],
   "ans": "b",
   "status": "verified",
   "note": "Elastic → $\\Delta L$ scales with load: $1.5\\times1.507 = 2.26$ mm.",
   "f": [
    "hooke"
   ]
  },
  {
   "id": "F24-13",
   "exam": "F24",
   "n": 13,
   "topic": "planes",
   "kind": "figure",
   "q": "In the figure, plane K is best described by which Miller indices?",
   "opts": [
    "(111)",
    "(100)",
    "[111]",
    "$[\\bar{1}\\bar{1}0]$",
    "$(\\bar{1}\\bar{1}1)$"
   ],
   "ans": "e",
   "status": "key",
   "f": [
    "plane"
   ]
  },
  {
   "id": "F24-14",
   "exam": "F24",
   "n": 14,
   "topic": "directions",
   "kind": "figure",
   "q": "In the figure, direction I is best described by which Miller indices?",
   "opts": [
    "[122]",
    "[221]",
    "(½ ½ 0)",
    "$[0\\bar{2}\\bar{1}]$",
    "$[\\bar{2}\\bar{2}\\bar{1}]$"
   ],
   "ans": "e",
   "status": "key",
   "f": [
    "direction"
   ]
  },
  {
   "id": "F24-15",
   "exam": "F24",
   "n": 15,
   "topic": "xrd",
   "kind": "calc",
   "q": "FCC platinum, $R = 0.1387$ nm, first-order reflection from (113), $\\lambda = 0.1542$ nm. Expected $2\\theta$?",
   "opts": [
    "5°",
    "29°",
    "63°",
    "81°",
    "180°"
   ],
   "ans": "d",
   "status": "verified",
   "note": "$a = 2R\\sqrt2 = 0.3923$, $d_{113} = a/\\sqrt{11} = 0.1183$, $\\sin\\theta = 0.652$, $\\theta = 40.68°$, $2\\theta = 81.36°$.",
   "f": [
    "bragg"
   ]
  },
  {
   "id": "F24-16",
   "exam": "F24",
   "n": 16,
   "topic": "bonding",
   "kind": "concept",
   "q": "Which best describes covalent bonding?",
   "opts": [
    "one atom donates electrons, electrostatic attraction",
    "one atom shares outer electron(s) with neighbour(s), both more stable",
    "hydrogen molecules join the atoms",
    "atoms plastically deform and neck",
    "random dipole attracts an induced dipole"
   ],
   "ans": "b",
   "status": "key"
  },
  {
   "id": "F24-17",
   "exam": "F24",
   "n": 17,
   "topic": "density",
   "kind": "calc",
   "q": "Thorium (FCC) has ρ = 11.72 g/cm³ and A = 232 g/mol. Lattice parameter?",
   "opts": [
    "radioactive, no crystals",
    "5.0856×10⁻⁸ cm",
    "2.1487×10⁻⁸ cm",
    "10.0943×10⁻⁸ cm",
    "15 Å"
   ],
   "ans": "b",
   "status": "verified",
   "note": "$a = \\sqrt[3]{nA/(\\rho N_A)} = \\sqrt[3]{4\\cdot232/(11.72\\cdot6.022\\times10^{23})} = 5.085\\times10^{-8}$ cm.",
   "f": [
    "density"
   ]
  },
  {
   "id": "F24-18",
   "exam": "F24",
   "n": 18,
   "topic": "fick2",
   "kind": "concept",
   "q": "A carburizing treatment takes too long. What reduces the time to reach the same carbon concentration?",
   "opts": [
    "lower C₀ (steeper gradient)",
    "raise T (same crystal structure)",
    "raise surface gas carbon Cₛ",
    "use FCC-stabilised steel",
    "both b and c"
   ],
   "ans": "e",
   "status": "key",
   "note": "Higher $T$ → larger $D$; higher $C_s$ → the target ratio $(C_x-C_0)/(C_s-C_0)$ is reached at a smaller $z$."
  },
  {
   "id": "F24-19",
   "exam": "F24",
   "n": 19,
   "topic": "elastic",
   "kind": "calc",
   "q": "Brass rod, L₀ = 50 mm, d₀ = 10 mm: length +0.01 mm, diameter −6×10⁻⁴ mm. Poisson’s ratio?",
   "opts": [
    "0.35",
    "0.30",
    "0.25",
    "0.4",
    "not enough information"
   ],
   "ans": "b",
   "status": "verified",
   "note": "$\\varepsilon_z = 2\\times10^{-4}$, $\\varepsilon_x = -6\\times10^{-5}$ → $\\nu = 0.30$.",
   "f": [
    "poisson"
   ]
  },
  {
   "id": "F24-20",
   "exam": "F24",
   "n": 20,
   "topic": "tensile",
   "kind": "concept",
   "q": "Which property cannot be measured from a tensile test?",
   "opts": [
    "Hardness",
    "Yield strength",
    "Tensile strength",
    "Young’s modulus",
    "Ductility"
   ],
   "ans": "a",
   "status": "key"
  },
  {
   "id": "F24-21",
   "exam": "F24",
   "n": 21,
   "topic": "tensile",
   "kind": "tf",
   "q": "The plastic region of a metal’s stress–strain curve is a linear stress–strain relationship.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "F24-22",
   "exam": "F24",
   "n": 22,
   "topic": "bondcurve",
   "kind": "tf",
   "q": "A weakly bonded solid generally has a lower melting point, lower E and higher thermal expansion coefficient than a strongly bonded one.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "F24-23",
   "exam": "F24",
   "n": 23,
   "topic": "tensile",
   "kind": "tf",
   "q": "Ductility is the ability to absorb energy during plastic deformation and give it back on unloading.",
   "ans": "False",
   "status": "key",
   "note": "Energy given back on unloading = resilience (elastic). Ductility = plastic strain at fracture."
  },
  {
   "id": "F24-24",
   "exam": "F24",
   "n": 24,
   "topic": "bonding",
   "kind": "tf",
   "q": "Ice floats because its structure is less dense, a result of hydrogen bonding between H₂O molecules on freezing.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "F24-25",
   "exam": "F24",
   "n": 25,
   "topic": "structure",
   "kind": "tf",
   "q": "Amorphous structures have both long- and short-range order; crystalline structures only long-range order.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "F24-26",
   "exam": "F24",
   "n": 26,
   "topic": "cells",
   "kind": "tf",
   "q": "FCC has the highest packing factor in the cubic system.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "F24-27",
   "exam": "F24",
   "n": 27,
   "topic": "diffmech",
   "kind": "tf",
   "q": "Interstitial diffusion of a small atom is usually SLOWER than vacancy diffusion in the same metal.",
   "ans": "False",
   "status": "key",
   "note": "Interstitial is faster: many empty interstitial sites, no vacancy needed (L9 s6)."
  },
  {
   "id": "F24-28",
   "exam": "F24",
   "n": 28,
   "topic": "bondcurve",
   "kind": "tf",
   "q": "E of a metal is set by bond strength, so it cannot be changed significantly unless the bonds change (e.g. alloying).",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "F24-29",
   "exam": "F24",
   "n": 29,
   "topic": "structure",
   "kind": "tf",
   "q": "“Polycrystalline” means an element that can exist in more than one crystal form; “single crystal” means only one possible form.",
   "ans": "False",
   "status": "key",
   "note": "That definition is polymorphism/allotropy."
  },
  {
   "id": "F24-30",
   "exam": "F24",
   "n": 30,
   "topic": "cells",
   "kind": "tf",
   "q": "BCC has 2 atoms/cell, FCC 4 and HCP 3.",
   "ans": "False",
   "status": "key",
   "note": "HCP has 6."
  },
  {
   "id": "A25-1",
   "exam": "A25",
   "n": 1,
   "topic": "cells",
   "kind": "figure",
   "q": "The crystal structure illustrated in Figure 1 is…",
   "opts": [
    "BCC",
    "HCP",
    "FCC",
    "SC",
    "OLP"
   ],
   "ans": "a",
   "status": "key"
  },
  {
   "id": "A25-2",
   "exam": "A25",
   "n": 2,
   "topic": "ldpd",
   "kind": "figure",
   "q": "In Figure 1, which of the following is a close-packed plane?",
   "opts": [
    "ABCD",
    "ABGF",
    "ACGE",
    "BGE",
    "none"
   ],
   "ans": "c",
   "status": "key",
   "note": "ACGE is the diagonal {110} plane, the most densely packed plane in BCC. Strictly, BCC has no perfectly close-packed plane; this exam uses “close-packed” to mean densest. Careful: ABGF (b) is also a {110} diagonal plane through the body centre (Q3 on the same paper says so), so it is equally dense; the key takes (c).",
   "drill": false
  },
  {
   "id": "A25-3",
   "exam": "A25",
   "n": 3,
   "topic": "planes",
   "kind": "figure",
   "q": "In Figure 1, planes ABGF and BCFE belong to the family…",
   "opts": [
    "{100}",
    "{110}",
    "{111}",
    "<110>",
    "<100>"
   ],
   "ans": "b",
   "status": "key",
   "drill": false
  },
  {
   "id": "A25-4",
   "exam": "A25",
   "n": 4,
   "topic": "ldpd",
   "kind": "calc",
   "q": "In Figure 1, the planar density of the (110) plane, in terms of the atomic radius R, is…",
   "opts": [
    "$1/(\\sqrt2R^2)$",
    "$1/(2\\sqrt2R^2)$",
    "$1/(4\\sqrt2R^2)$",
    "$1/(8\\sqrt2R^2)$",
    "$3/(8\\sqrt2R^2)$"
   ],
   "ans": "e",
   "keyAns": "b",
   "status": "corrected",
   "note": "The posted solution highlights (b), but BCC (110): 2 atoms on area $a\\cdot a\\sqrt2$ with $a = 4R/\\sqrt3$ → $PD = 3/(8\\sqrt2R^2)$ (Callister CH 3.11). (b) is not the planar density of any of BCC (100)/(110)/(111).",
   "f": [
    "pd"
   ]
  },
  {
   "id": "A25-5",
   "exam": "A25",
   "n": 5,
   "topic": "tensile",
   "kind": "concept",
   "q": "Which property cannot be measured from a tensile test?",
   "opts": [
    "Hardness",
    "Yield strength",
    "Tensile strength",
    "Young’s modulus",
    "Ductility"
   ],
   "ans": "a",
   "status": "key"
  },
  {
   "id": "A25-6",
   "exam": "A25",
   "n": 6,
   "topic": "config",
   "kind": "concept",
   "q": "Which electron configuration is an inert gas?",
   "opts": [
    "1s²2s²2p⁶3s²3p⁶",
    "1s²2s²2p⁶3s²",
    "1s²2s²2p⁶3s²3p⁶4s¹",
    "1s²2s²2p⁶3s²3p⁶3d²4s²",
    "1s²2s²2p⁶3s¹"
   ],
   "ans": "a",
   "status": "key",
   "note": "Argon (Z = 18): filled outer s and p."
  },
  {
   "id": "A25-7",
   "exam": "A25",
   "n": 7,
   "topic": "fick1",
   "kind": "calc",
   "q": "H₂ purified through an 8 mm Pd sheet, area 1.20 m², 500 °C, D = 1.0×10⁻⁸ m²/s, concentrations 2.4 and 0.6 kg/m³. kg of H₂ per hour?",
   "opts": [
    "2.7×10⁻⁶",
    "2.16×10⁻³",
    "7.5×10⁻¹⁰",
    "9.72×10⁻³",
    "1.62×10⁻⁴"
   ],
   "ans": "d",
   "status": "verified",
   "note": "$J = D\\Delta C/\\Delta x = 2.25\\times10^{-6}$ kg/m²s → $\\times1.2\\times3600 = 9.72\\times10^{-3}$ kg/h. Trap (a) = per second.",
   "f": [
    "fick1"
   ]
  },
  {
   "id": "A25-8",
   "exam": "A25",
   "n": 8,
   "topic": "density",
   "kind": "calc",
   "q": "Tungsten: BCC, R = 0.137 nm, A = 183.85 g/mol. Theoretical density?",
   "opts": [
    "1.93",
    "5.18",
    "9.65",
    "19.3",
    "38.6 g/cm³"
   ],
   "ans": "d",
   "status": "verified",
   "note": "$a = 4R/\\sqrt3 = 0.3164$ nm, $V_C = 3.167\\times10^{-23}$ cm³ → $\\rho = 2\\cdot183.85/(V_CN_A) = 19.3$. (e) uses n = 4, (c) uses n = 1.",
   "f": [
    "density"
   ]
  },
  {
   "id": "A25-9",
   "exam": "A25",
   "n": 9,
   "topic": "planes",
   "kind": "figure",
   "q": "Miller indices of planes A and B in Figure 2…",
   "opts": [
    "A (232), B (112)",
    "A (320), B (002)",
    "A [320], B [112]",
    "A $(6\\bar{3}3)$, B (212)",
    "A $(3\\bar{2}4)$, B (221)"
   ],
   "ans": "e",
   "status": "key",
   "f": [
    "plane"
   ],
   "drill": false
  },
  {
   "id": "A25-10",
   "exam": "A25",
   "n": 10,
   "topic": "solidsol",
   "kind": "concept",
   "q": "15 % Ni added to molten Cu and cooled gives a substitutional solid solution. Its structure is…",
   "opts": [
    "Ni with Cu squeezed between",
    "Cu with Ni squeezed between Cu atoms",
    "85 % Cu grains + 15 % Ni grains",
    "FCC copper with some Cu atoms replaced by Ni",
    "FCC Cu cells interspersed with FCC Ni cells"
   ],
   "ans": "d",
   "status": "key"
  },
  {
   "id": "A25-11",
   "exam": "A25",
   "n": 11,
   "topic": "structure",
   "kind": "concept",
   "q": "Adjacent grains in a polycrystalline pure metal differ in…",
   "opts": [
    "Density",
    "Lattice parameter",
    "Crystal structure",
    "Composition",
    "Orientation"
   ],
   "ans": "e",
   "status": "key"
  },
  {
   "id": "A25-12",
   "exam": "A25",
   "n": 12,
   "topic": "bonding",
   "kind": "concept",
   "q": "Electronegativities Na = 1.0, Cl = 2.9. The bonding is predominantly…",
   "opts": [
    "Metallic",
    "Covalent",
    "Ionic",
    "Van der Waals",
    "Hydrogen"
   ],
   "ans": "c",
   "status": "verified",
   "note": "$\\%IC = 1 - e^{-0.25(1.9)^2} = 59\\%$ → predominantly ionic.",
   "f": [
    "ionic"
   ]
  },
  {
   "id": "A25-13",
   "exam": "A25",
   "n": 13,
   "topic": "vacancy",
   "kind": "concept",
   "q": "Regarding defects, which statement is FALSE? (a) concerns how the vacancy concentration changes with temperature; (b) grain boundaries; (c) pores form during solidification; (d) impurities can be substitutional or interstitial; (e) vacancies are required for substitutional diffusion.",
   "opts": [
    "vacancy concentration vs temperature",
    "grain boundaries",
    "pores in solidification",
    "substitutional or interstitial impurities",
    "vacancies needed for substitutional diffusion"
   ],
   "ans": "a",
   "status": "key",
   "note": "Statement (a) is partly hidden in the scan; it is the false one per the key. Remember: vacancy concentration RISES exponentially with T."
  },
  {
   "id": "A25-14",
   "exam": "A25",
   "n": 14,
   "topic": "defects",
   "kind": "figure",
   "q": "The defect shown in Figure 3 is a representation of…",
   "opts": [
    "a vacancy",
    "a screw dislocation",
    "an edge dislocation",
    "a substitutional impurity",
    "a grain boundary"
   ],
   "ans": "c",
   "status": "key"
  },
  {
   "id": "A25-15",
   "exam": "A25",
   "n": 15,
   "topic": "cells",
   "kind": "concept",
   "q": "APF for BCC : FCC : HCP are respectively…",
   "opts": [
    "0.74 : 0.74 : 0.68",
    "0.68 : 0.74 : 0.74",
    "0.74 : 0.68 : 0.68",
    "0.68 : 0.74 : 0.68",
    "none"
   ],
   "ans": "b",
   "status": "verified",
   "f": [
    "cubic"
   ]
  },
  {
   "id": "A25-16",
   "exam": "A25",
   "n": 16,
   "topic": "cells",
   "kind": "concept",
   "q": "Which best describes a body-centred TETRAGONAL unit cell?",
   "opts": [
    "a = b ≠ c, α = β = γ = 90°, corners + centre",
    "a = b = c, 90°, corners + centre",
    "a ≠ b ≠ c, 90°, corners + centre",
    "a = b ≠ c, 90°, corners + face centres",
    "a ≠ b = c, 90°, corners + centre"
   ],
   "ans": "a",
   "status": "key",
   "note": "Lecture 4 slide 16: tetragonal a = b ≠ c, all angles 90°."
  },
  {
   "id": "A25-17",
   "exam": "A25",
   "n": 17,
   "topic": "vacancy",
   "kind": "calc",
   "q": "At 660 °C the vacancy fraction in aluminium is $9\\times10^{-5}$. The vacancy formation energy is…",
   "opts": [
    "0.72 eV",
    "0.68 eV",
    "0.75 eV",
    "0.79 eV",
    "none"
   ],
   "ans": "c",
   "status": "verified",
   "note": "$Q_v = -kT\\ln(N_v/N) = -(8.62\\times10^{-5})(933)\\ln(9\\times10^{-5}) = 0.749$ eV.",
   "f": [
    "vacancy"
   ]
  },
  {
   "id": "A25-18",
   "exam": "A25",
   "n": 18,
   "topic": "tensile",
   "kind": "figure",
   "q": "Figure 4: five stress–strain curves. Which material is the stiffest?",
   "opts": [
    "A",
    "B",
    "C",
    "D",
    "F"
   ],
   "ans": "e",
   "status": "key",
   "note": "Steepest initial slope = highest E.",
   "drill": false
  },
  {
   "id": "A25-19",
   "exam": "A25",
   "n": 19,
   "topic": "tensile",
   "kind": "figure",
   "q": "Figure 4: which material has the highest yield strength?",
   "opts": [
    "A",
    "B",
    "C",
    "D",
    "F"
   ],
   "ans": "d",
   "status": "key",
   "note": "F is brittle (fractures while still linear, never yields); D leaves the linear region at the highest stress.",
   "drill": false
  },
  {
   "id": "A25-20",
   "exam": "A25",
   "n": 20,
   "topic": "tensile",
   "kind": "figure",
   "q": "Figure 4: which material shows the highest ductility?",
   "opts": [
    "A",
    "B",
    "C",
    "D",
    "F"
   ],
   "ans": "a",
   "keyAns": "d",
   "status": "corrected",
   "note": "The posted key highlights D, but on the figure curve A reaches the largest strain at fracture. D has the largest area (toughness), not the largest strain; the key confused the two.",
   "drill": false
  },
  {
   "id": "A25-21",
   "exam": "A25",
   "n": 21,
   "topic": "structure",
   "kind": "tf",
   "q": "Allotropy/polymorphism: some elements crystallise in different structures at different temperature and pressure ranges.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "A25-22",
   "exam": "A25",
   "n": 22,
   "topic": "structure",
   "kind": "tf",
   "q": "Non-crystalline (amorphous) materials have grain boundaries but no crystals.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "A25-23",
   "exam": "A25",
   "n": 23,
   "topic": "config",
   "kind": "tf",
   "q": "Krypton (…3d¹⁰4s²4p⁶) is a highly reactive gas.",
   "ans": "False",
   "status": "key",
   "note": "Filled s and p → inert."
  },
  {
   "id": "A25-24",
   "exam": "A25",
   "n": 24,
   "topic": "planes",
   "kind": "tf",
   "q": "In the cubic system, the direction perpendicular to the (hkl) plane is [hkl].",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "A25-25",
   "exam": "A25",
   "n": 25,
   "topic": "cells",
   "kind": "tf",
   "q": "A BCC unit cell contains 9 atoms: one at each corner and one in the centre.",
   "ans": "False",
   "status": "key",
   "note": "$8\\times\\frac18 + 1 = 2$."
  },
  {
   "id": "A25-26",
   "exam": "A25",
   "n": 26,
   "topic": "bonding",
   "kind": "tf",
   "q": "Covalent bonding is primary bonding based on permanent or induced dipoles.",
   "ans": "False",
   "status": "key",
   "note": "Dipoles = secondary (van der Waals) bonding."
  },
  {
   "id": "A25-27",
   "exam": "A25",
   "n": 27,
   "topic": "bonding",
   "kind": "tf",
   "q": "Ice floats because of the lower density of the ice structure caused by hydrogen bonding on freezing.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "A25-28",
   "exam": "A25",
   "n": 28,
   "topic": "bonding",
   "kind": "tf",
   "q": "Carbon (1s²2s²2p²) hybridises its 2s and 2p electrons to form four equal bonds with four H atoms (methane).",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "A25-29",
   "exam": "A25",
   "n": 29,
   "topic": "xrd",
   "kind": "tf",
   "q": "For FCC Pt ($a = 0.3923$ nm), (113), $\\lambda = 0.1542$ nm: the diffraction angle $2\\theta$ is 40.69°.",
   "ans": "False",
   "status": "verified",
   "note": "40.67° is $\\theta$; $2\\theta = 81.3°$. Same numbers as F24 Q15.",
   "f": [
    "bragg"
   ]
  },
  {
   "id": "A25-30",
   "exam": "A25",
   "n": 30,
   "topic": "structure",
   "kind": "tf",
   "q": "Crystalline structures have both short- and long-range order, whereas amorphous materials (e.g. glass) have only short-range order.",
   "ans": "True",
   "keyAns": "False",
   "status": "corrected",
   "note": "The posted key marks F, but the statement is the textbook definition (Callister CH 3.17, Lecture 4 slide 3). F24 Q25 is the false version of it (orders swapped)."
  },
  {
   "id": "W26-1",
   "exam": "W26",
   "n": 1,
   "topic": "directions",
   "kind": "figure",
   "q": "Directions A and B in the figure are…",
   "opts": [
    "A $[\\bar{4}11]$, B $[2\\bar{2}1]$",
    "A $[3\\bar{4}4]$, B $[\\bar{3}3\\bar{1}]$",
    "A $[\\bar{1}11]$, B $[\\bar{3}3\\bar{1}]$",
    "A $[3\\bar{4}4]$, B $[\\bar{1}1\\bar{3}]$",
    "A $[\\bar{4}11]$, B $[\\bar{1}1\\bar{3}]$"
   ],
   "ans": "b",
   "status": "unofficial",
   "note": "Re-read from the figure: B runs from $(1, 0, \\tfrac23)$ to $(0, 1, \\tfrac13)$ → $(-1, 1, -\\tfrac13)$ → $[\\bar{3}3\\bar{1}]$, which leaves (b) or (c). A runs from $(1, 1, 0)$ to $(\\tfrac14, 0, 1)$ → $(-\\tfrac34, -1, 1)$ → $[\\bar{3}\\bar{4}4]$; the photo shows (b) as $[3\\bar{4}4]$ (the first bar is probably lost in the photo), and (b) is the only option with A’s 3-4-4 and the right B.",
   "f": [
    "direction"
   ],
   "drill": false
  },
  {
   "id": "W26-2",
   "exam": "W26",
   "n": 2,
   "topic": "directions",
   "kind": "figure",
   "q": "Directions C and D in the figure are…",
   "opts": [
    "C $[\\bar{6}11]$, D $[4\\bar{3}\\bar{4}]$",
    "C $[4\\bar{4}1]$, D $[4\\bar{3}\\bar{4}]$",
    "C $[1\\bar{1}4]$, D [212]",
    "C $[1\\bar{1}4]$, D $[3\\bar{4}\\bar{3}]$",
    "C $[4\\bar{4}1]$, D $[3\\bar{4}\\bar{3}]$"
   ],
   "ans": "e",
   "status": "unofficial",
   "note": "Re-read from the figure: C runs from $(0, 1, \\tfrac12)$ to $(1, 0, \\tfrac14)$ → $(1, -1, -\\tfrac14)$ → $[4\\bar{4}\\bar{1}]$ (the photo’s student working says the same); D runs from $(0, 1, \\tfrac34)$ to $(\\tfrac34, 0, 0)$ → $(\\tfrac34, -1, -\\tfrac34)$ → $[3\\bar{4}\\bar{3}]$. Only (e) has that D; (b)’s $[4\\bar{3}\\bar{4}]$ cannot come from this figure. Both (b) and (e) are circled on the photo, so this replaces the earlier (b).",
   "f": [
    "direction"
   ],
   "drill": false
  },
  {
   "id": "W26-3",
   "exam": "W26",
   "n": 3,
   "topic": "planes",
   "kind": "figure",
   "q": "Planes A and B in the figure are…",
   "opts": [
    "A (034), B $(0\\bar{1}3)$",
    "A (332), B (130)",
    "A $(0\\bar{1}\\bar{4})$, B $(0\\bar{1}3)$",
    "A (034), B (130)",
    "A $(0\\bar{1}4)$, B (230)"
   ],
   "ans": "c",
   "status": "unofficial",
   "note": "Re-read from the figure: plane A contains the top edge $(x, 0, 1)$ and drops to $z = \\tfrac34$ at $y = 1$, so $z = 1 - y/4$ → intercepts $(\\infty, 4, 1)$ → (014), the same plane as $(0\\bar{1}\\bar{4})$. Plane B contains the x-axis and rises to $z = \\tfrac13$ at $y = 1$ (it passes through the origin): move the origin to $(0, 1, 0)$ → intercepts $(\\infty, -1, \\tfrac13)$ → $(0\\bar{1}3)$, as the student’s own working on the photo shows. Only (c) has both; the circled (e) has B = (230), which does not fit. Option (c) is printed as $(0\\bar{1}\\bar{4})$.",
   "f": [
    "plane"
   ],
   "drill": false
  },
  {
   "id": "W26-4",
   "exam": "W26",
   "n": 4,
   "topic": "planes",
   "kind": "figure",
   "q": "Planes C and D in the figure are…",
   "opts": [
    "C $(2\\bar{2}\\bar{3})$, D $(\\bar{1}20)$",
    "C $(\\bar{2}21)$, D $(1\\bar{1}\\bar{3})$",
    "C (221), D $(\\bar{1}20)$",
    "C $(2\\bar{2}\\bar{3})$, D $(1\\bar{1}\\bar{3})$",
    "C (212), D $(2\\bar{2}2)$"
   ],
   "ans": "a",
   "status": "unofficial",
   "f": [
    "plane"
   ],
   "drill": false
  },
  {
   "id": "W26-5",
   "exam": "W26",
   "n": 5,
   "topic": "cells",
   "kind": "concept",
   "q": "APF for BCC : FCC : HCP are respectively…",
   "opts": [
    "0.74 : 0.74 : 0.68",
    "0.68 : 0.74 : 0.68",
    "0.74 : 0.68 : 0.68",
    "0.68 : 0.74 : 0.74",
    "0.74 : 0.68 : 0.74"
   ],
   "ans": "d",
   "status": "verified",
   "f": [
    "cubic"
   ]
  },
  {
   "id": "W26-6",
   "exam": "W26",
   "n": 6,
   "topic": "ldpd",
   "kind": "calc",
   "q": "Planar density of the (100) plane in FCC in terms of R…",
   "opts": [
    "$1/(\\sqrt2R^2)$",
    "$1/(2\\sqrt2R^2)$",
    "$1/(4R^2)$",
    "$1/(4\\sqrt2R^2)$",
    "$1/(8\\sqrt2R^2)$"
   ],
   "ans": "c",
   "status": "verified",
   "note": "2 atoms on $a^2 = 8R^2$ → $1/(4R^2)$. The photo has (d) circled: that is FCC (110), the case worked on Lecture 6 slide 6, so it is the obvious memorised trap.",
   "f": [
    "pd"
   ]
  },
  {
   "id": "W26-7",
   "exam": "W26",
   "n": 7,
   "topic": "xrd",
   "kind": "calc",
   "q": "Rhodium (FCC): first-order (311) reflection at $2\\theta = 36.12°$ with $\\lambda = 0.0711$ nm. Atomic radius?",
   "opts": [
    "0.1147 nm",
    "0.1345 nm",
    "0.3300 nm",
    "0.3804 nm",
    "need the whole spectrum"
   ],
   "ans": "b",
   "status": "verified",
   "note": "$d = \\lambda/(2\\sin18.06°) = 0.1147$ → $a = d\\sqrt{11} = 0.3803$ → $R = a/(2\\sqrt2) = 0.1345$ nm. (a) is $d$, (d) is $a$: each wrong option is a step you forgot to finish.",
   "f": [
    "bragg"
   ]
  },
  {
   "id": "W26-8",
   "exam": "W26",
   "n": 8,
   "topic": "vacancy",
   "kind": "calc",
   "q": "Cu: Qv = 0.9 eV/atom, A = 63.5 g/mol, ρ = 8.9 g/cm³ at 20 °C. Vacancies per m³ at 20 °C?",
   "opts": [
    "2.8×10¹³",
    "1.1×10²⁵",
    "3.0×10³⁰",
    "4.4×10³¹",
    "2.5×10⁴⁴"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$N = \\rho N_A/A = 8.44\\times10^{28}$ m⁻³; $e^{-0.9/(8.62\\times10^{-5}\\cdot293)} = 3.3\\times10^{-16}$ → $2.8\\times10^{13}$. This is Callister Ex 4.1 with T moved from 1000 °C to 20 °C.",
   "f": [
    "vacancy"
   ]
  },
  {
   "id": "W26-9",
   "exam": "W26",
   "n": 9,
   "topic": "solidsol",
   "kind": "concept",
   "q": "Ferrite (solid solution of C in BCC Fe) is best described as…",
   "opts": [
    "grains of C mixed with grains of Fe",
    "random distribution of C atoms in the interatomic spaces of BCC iron",
    "random Fe on an FCC carbon lattice",
    "very specific arrangement of C on BCC lattice positions",
    "random C on BCC lattice positions"
   ],
   "ans": "b",
   "status": "key",
   "note": "C is far smaller than Fe → interstitial solid solution."
  },
  {
   "id": "W26-10",
   "exam": "W26",
   "n": 10,
   "topic": "defects",
   "kind": "concept",
   "q": "Regarding defects, which is FALSE?",
   "opts": [
    "vacancies are required for substitutional diffusion",
    "dislocations can be edge, screw or mixed",
    "dislocations have only negative consequences (they reduce strength)",
    "edge: dislocation line ⊥ direction of dislocation motion",
    "screw: dislocation line ∥ direction of dislocation motion"
   ],
   "ans": "c",
   "status": "key",
   "note": "Dislocation tangles cause strain hardening, and dislocation motion is what makes metals ductile (Lecture 7 slide 20: defects can be desirable). Statements (d)/(e) use “direction of motion” to mean the slip (Burgers) direction."
  },
  {
   "id": "W26-11",
   "exam": "W26",
   "n": 11,
   "topic": "bondcurve",
   "kind": "concept",
   "q": "Which statement about atomic bonding is correct?",
   "opts": [
    "the three primary bonds are ionic, metallic and van der Waals",
    "intermolecular bonds are stronger than atomic bonds",
    "metallic bonds come from attraction of opposite ions",
    "atoms feel attraction and repulsion; the lowest potential energy is where these forces cancel",
    "ionic bonding is often found in metals"
   ],
   "ans": "d",
   "status": "key"
  },
  {
   "id": "W26-12",
   "exam": "W26",
   "n": 12,
   "topic": "diffmech",
   "kind": "calc",
   "q": "Same carbon data as F24 Q2 (BCC 80 kJ/mol, 6.2×10⁻⁷; FCC 148 kJ/mol, 2.3×10⁻⁵) but at 1200 °C. The carbon atoms…",
   "opts": [
    "move ~3× faster in BCC",
    "move ~3× faster in FCC",
    "same speed",
    "move ~30× faster in BCC",
    "move ~30× faster in FCC"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$T = 1473$ K: $D_{BCC} = 9.0\\times10^{-10}$, $D_{FCC} = 1.3\\times10^{-10}$ → ratio $6.95$. The closest option is (a). The photo marks (d), the 910 °C answer from F24 Q2. Recompute every time, because they change T.",
   "f": [
    "arrD"
   ]
  },
  {
   "id": "W26-13",
   "exam": "W26",
   "n": 13,
   "topic": "fick1",
   "kind": "calc",
   "q": "H₂ through a 4 mm Pd sheet, area 0.60 m², 500 °C, D = 1.0×10⁻⁸ m²/s, concentrations 2.0 and 0.5 kg/m³. kg per hour?",
   "opts": [
    "4.05×10⁻³",
    "8.10×10⁻³",
    "1.62×10⁻³",
    "3.24×10⁻³",
    "6.48×10⁻³"
   ],
   "ans": "b",
   "status": "verified",
   "note": "$J = 10^{-8}\\cdot1.5/0.004 = 3.75\\times10^{-6}$ → $\\times0.60\\times3600 = 8.10\\times10^{-3}$ kg/h.",
   "f": [
    "fick1"
   ]
  },
  {
   "id": "W26-14",
   "exam": "W26",
   "n": 14,
   "topic": "bonding",
   "kind": "concept",
   "q": "Which best describes covalent bonding?",
   "opts": [
    "one atom donates electrons to another",
    "all atoms share valence electrons in a sea of free electrons",
    "hydrogen molecules join the atoms",
    "one atom shares its outer electron(s) with neighbouring atom(s) and becomes more stable",
    "a random dipole attracts an induced dipole"
   ],
   "ans": "d",
   "status": "key"
  },
  {
   "id": "W26-15",
   "exam": "W26",
   "n": 15,
   "topic": "tensile",
   "kind": "concept",
   "q": "Which property cannot be measured from a tensile test?",
   "opts": [
    "Hardness",
    "Yield strength",
    "Tensile strength",
    "Young’s modulus",
    "Ductility"
   ],
   "ans": "a",
   "status": "key"
  },
  {
   "id": "W26-16",
   "exam": "W26",
   "n": 16,
   "topic": "tensile",
   "kind": "figure",
   "q": "From the engineering stress–strain curve (with low-strain inset): Young’s modulus?",
   "opts": [
    "445 GPa",
    "78 GPa",
    "207 GPa",
    "114 GPa",
    "58 GPa"
   ],
   "ans": "e",
   "status": "verified",
   "note": "Read the inset: its strain axis runs 0 → 0.005 → 0.010 (minor ticks every 0.001), and the 200 MPa line meets the curve at ε ≈ 0.0034 → $E = 200/0.0034 \\approx 59$ GPa → (e). 114 GPa is what you get by misreading the inset scale by a factor of 2 (ε ≈ 0.00175). The figure is Callister’s aluminium-alloy curve (textbook value 62.5 GPa). Do not use the main plot: its elastic line is almost vertical.",
   "f": [
    "modulus"
   ],
   "drill": false
  },
  {
   "id": "W26-17",
   "exam": "W26",
   "n": 17,
   "topic": "tensile",
   "kind": "figure",
   "q": "The 0.2 % offset yield strength is…",
   "opts": [
    "200 MPa",
    "295 MPa",
    "360 MPa",
    "207 GPa",
    "not possible (failed below 0.2 strain)"
   ],
   "ans": "b",
   "status": "verified",
   "note": "Offset line from ε = 0.002 with slope E meets the inset curve at ≈ 295 MPa. 360 MPa is the peak (tensile strength): the classic swap. (e) confuses 0.2 % = 0.002 with 0.2.",
   "drill": false
  },
  {
   "id": "W26-18",
   "exam": "W26",
   "n": 18,
   "topic": "tensile",
   "kind": "figure",
   "q": "The %EL ductility is…",
   "opts": [
    "15.4 %",
    "16.0 %",
    "10.4 %",
    "0.16 %",
    "needs the initial diameter"
   ],
   "ans": "a",
   "status": "verified",
   "note": "Fracture strain ≈ 0.157 minus the elastic recovery at fracture (σ/E ≈ 300/60 000 ≈ 0.005) ≈ 0.152 → about 15 %, closest option 15.4 %. (b) 16.0 % forgets the elastic recovery.",
   "drill": false
  },
  {
   "id": "W26-19",
   "exam": "W26",
   "n": 19,
   "topic": "tensile",
   "kind": "figure",
   "q": "The metal starts necking at…",
   "opts": [
    "0.004 strain",
    "0.01 strain",
    "0.09 strain",
    "0.16 strain",
    "needs the true curve"
   ],
   "ans": "c",
   "status": "verified",
   "note": "Necking starts at the maximum of the engineering curve (tensile strength), ε ≈ 0.09.",
   "drill": false
  },
  {
   "id": "W26-20",
   "exam": "W26",
   "n": 20,
   "topic": "tensile",
   "kind": "figure",
   "q": "A 100 mm sample loaded to 320 MPa then unloaded. Permanent change in length?",
   "opts": [
    "0.025 mm",
    "0.25 mm",
    "2.5 mm",
    "25 mm",
    "impossible to determine"
   ],
   "ans": "c",
   "status": "verified",
   "note": "On the main curve 320 MPa is reached at ε ≈ 0.02–0.03 (the curve is very flat there); the elastic part $320/60\\,000 \\approx 0.005$ recovers → plastic ≈ 0.015–0.025 → about 2 mm on 100 mm. Closest option 2.5 mm; the others are 10× too small or too large.",
   "f": [
    "recovery"
   ],
   "drill": false
  },
  {
   "id": "W26-21",
   "exam": "W26",
   "n": 21,
   "topic": "bondcurve",
   "kind": "tf",
   "q": "The modulus of elasticity of a solid metal decreases as temperature increases.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-22",
   "exam": "W26",
   "n": 22,
   "topic": "bonding",
   "kind": "tf",
   "q": "Secondary bonds have no effect on polymer properties because of the strong primary bonds.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "W26-23",
   "exam": "W26",
   "n": 23,
   "topic": "structure",
   "kind": "tf",
   "q": "Single crystals are rare and used only at high temperature because their properties are uniform in all directions.",
   "ans": "False",
   "status": "key",
   "note": "Single crystals are anisotropic."
  },
  {
   "id": "W26-24",
   "exam": "W26",
   "n": 24,
   "topic": "structure",
   "kind": "tf",
   "q": "“Polycrystalline” refers to materials that can exist in more than one crystal form depending on T and P.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "W26-25",
   "exam": "W26",
   "n": 25,
   "topic": "defects",
   "kind": "tf",
   "q": "Etching is used to see the grain boundaries of a polycrystalline metal under the microscope.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-26",
   "exam": "W26",
   "n": 26,
   "topic": "tensile",
   "kind": "tf",
   "q": "If a metal is stressed to its 0.2 % offset yield strength, all the deformation is recovered on unloading.",
   "ans": "False",
   "status": "key",
   "note": "0.002 permanent strain remains, by definition."
  },
  {
   "id": "W26-27",
   "exam": "W26",
   "n": 27,
   "topic": "ldpd",
   "kind": "tf",
   "q": "FCC and HCP both have close-packed planes; FCC stacks ABAB… and HCP stacks ABCABC….",
   "ans": "False",
   "status": "key",
   "note": "Swapped: FCC = ABCABC, HCP = ABAB."
  },
  {
   "id": "W26-28",
   "exam": "W26",
   "n": 28,
   "topic": "ldpd",
   "kind": "tf",
   "q": "In FCC, [111] is close-packed; in BCC, [110] is close-packed.",
   "ans": "False",
   "status": "key",
   "note": "Swapped: FCC <110>, BCC <111>."
  },
  {
   "id": "W26-29",
   "exam": "W26",
   "n": 29,
   "topic": "planes",
   "kind": "tf",
   "q": "In the cubic system, planes and directions with identical Miller indices are mutually perpendicular.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-30",
   "exam": "W26",
   "n": 30,
   "topic": "bondcurve",
   "kind": "tf",
   "q": "The linear thermal expansion coefficient generally increases with decreasing bond energy.",
   "ans": "True",
   "status": "key",
   "note": "Lecture 3 slide 16: α larger when E₀ is smaller."
  },
  {
   "id": "W26-31",
   "exam": "W26",
   "n": 31,
   "topic": "bonding",
   "kind": "tf",
   "q": "In an ionic bond, the species donate or accept electrons to result in unstable configurations.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "W26-32",
   "exam": "W26",
   "n": 32,
   "topic": "tensile",
   "kind": "tf",
   "q": "In a tensile test, true stress is always ≥ engineering stress.",
   "ans": "True",
   "status": "key",
   "note": "$\\sigma_T = \\sigma(1+\\varepsilon)$: the real area shrinks."
  },
  {
   "id": "W26-33",
   "exam": "W26",
   "n": 33,
   "topic": "vacancy",
   "kind": "tf",
   "q": "The equilibrium number of vacancies increases with temperature, reaching a maximum just below the melting point.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-34",
   "exam": "W26",
   "n": 34,
   "topic": "bonding",
   "kind": "tf",
   "q": "Diamond is a three-dimensional network of covalently bonded carbon atoms.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-35",
   "exam": "W26",
   "n": 35,
   "topic": "tensile",
   "kind": "tf",
   "q": "Ductility measures how much a material ELASTICALLY deforms before fracture.",
   "ans": "False",
   "status": "key",
   "note": "Plastically."
  },
  {
   "id": "W26-36",
   "exam": "W26",
   "n": 36,
   "topic": "config",
   "kind": "tf",
   "q": "Valence electrons are the ones most responsible for the type of interatomic bonding.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-37",
   "exam": "W26",
   "n": 37,
   "topic": "fick2",
   "kind": "tf",
   "q": "Fick’s 2nd law (non-steady state) is a PDE that must be solved for each set of boundary and initial conditions.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-38",
   "exam": "W26",
   "n": 38,
   "topic": "structure",
   "kind": "tf",
   "q": "In a polycrystalline metal, different grains have different crystallographic orientations.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-39",
   "exam": "W26",
   "n": 39,
   "topic": "bonding",
   "kind": "tf",
   "q": "Covalent bonds are directional.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "W26-40",
   "exam": "W26",
   "n": 40,
   "topic": "structure",
   "kind": "tf",
   "q": "Non-crystalline (amorphous) materials have grain boundaries but do not have crystals.",
   "ans": "False",
   "status": "key"
  },
  {
   "id": "FX-1",
   "exam": "FX",
   "n": 1,
   "topic": "bondcurve",
   "kind": "figure",
   "q": "In Figure 1, the bond length is obtained from…",
   "opts": [
    "point A",
    "points B or E",
    "point C",
    "point D",
    "depends on bond type"
   ],
   "ans": "b",
   "status": "key",
   "note": "Where F = 0 on the force curve, i.e. where the energy curve is at its minimum.",
   "drill": false
  },
  {
   "id": "FX-5",
   "exam": "FX",
   "n": 5,
   "topic": "ldpd",
   "kind": "figure",
   "q": "A close-packed plane for the unit cell in Figure 2 would be…",
   "opts": [
    "ABC",
    "ABD",
    "ABE",
    "ACE",
    "none"
   ],
   "ans": "d",
   "status": "key",
   "note": "Same idea as A25 Q2: pick the diagonal plane that the atoms touch across.",
   "drill": false
  },
  {
   "id": "FX-6",
   "exam": "FX",
   "n": 6,
   "topic": "atomsmass",
   "kind": "calc",
   "q": "Atomic weight of Cu = 63.54 g/mol. 15 g of copper contains…",
   "opts": [
    "6.32×10²⁰",
    "1.42×10²³",
    "2.55×10²⁴",
    "9.03×10²⁴",
    "5.74×10²⁶ atoms"
   ],
   "ans": "b",
   "status": "verified",
   "note": "$15/63.54\\times6.022\\times10^{23} = 1.42\\times10^{23}$.",
   "f": [
    "atoms"
   ]
  },
  {
   "id": "FX-8",
   "exam": "FX",
   "n": 8,
   "topic": "defects",
   "kind": "concept",
   "q": "Which is a “surface” (interfacial) defect?",
   "opts": [
    "a vacancy",
    "an edge dislocation",
    "a grain boundary",
    "all of a, b, c",
    "none"
   ],
   "ans": "c",
   "status": "key"
  },
  {
   "id": "FX-9",
   "exam": "FX",
   "n": 9,
   "topic": "vacancy",
   "kind": "calc",
   "q": "Cu: Qv = 0.9 eV/atom, A = 63.5 g/mol, ρ = 8.9 g/cm³ (20 °C). Vacancies per m³?",
   "opts": [
    "2.8×10¹³",
    "2.2×10²⁵",
    "3.0×10³⁰",
    "4.4×10³¹",
    "2.5×10⁴⁴"
   ],
   "ans": "a",
   "status": "verified",
   "note": "Word-for-word the W26 Q8. Option (b) 2.2×10²⁵ is the Callister Ex 4.1 answer at 1000 °C, a trap for anyone who memorised the textbook number.",
   "f": [
    "vacancy"
   ]
  },
  {
   "id": "FX-12",
   "exam": "FX",
   "n": 12,
   "topic": "defects",
   "kind": "figure",
   "q": "The defect in Figure 5 is…",
   "opts": [
    "a vacancy",
    "a screw dislocation",
    "an edge dislocation",
    "a substitutional impurity",
    "a grain boundary"
   ],
   "ans": "c",
   "status": "key",
   "drill": false
  },
  {
   "id": "FX-31",
   "exam": "FX",
   "n": 31,
   "topic": "planes",
   "kind": "tf",
   "q": "When determining Miller indices, the plane must pass through the origin.",
   "ans": "False",
   "status": "key",
   "note": "The opposite: if it passes through the origin, move the origin."
  },
  {
   "id": "FX-32",
   "exam": "FX",
   "n": 32,
   "topic": "slip",
   "kind": "tf",
   "q": "The more slip systems a metal has, the easier it is to deform.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "FX-35",
   "exam": "FX",
   "n": 35,
   "topic": "tensile",
   "kind": "tf",
   "q": "Most hardness tests press a hard indenter into the surface and measure the indentation.",
   "ans": "True",
   "status": "key"
  },
  {
   "id": "F17-1",
   "exam": "F17",
   "n": 1,
   "topic": "planes",
   "kind": "figure",
   "q": "The Miller indices of the plane shown in the cubic unit cell are…",
   "opts": [
    "(102)",
    "(1 1 ½)",
    "(1 ∞ ½)",
    "(110)",
    "(1 0 ½)"
   ],
   "ans": "a",
   "status": "verified",
   "f": [
    "plane"
   ]
  },
  {
   "id": "F17-2",
   "exam": "F17",
   "n": 2,
   "topic": "vacancy",
   "kind": "calc",
   "q": "Vacancies per m³ at 1000 °C: Qv = 1.22 eV/atom, ρ = 6.25 g/cm³, A = 37.4 g/mol.",
   "opts": [
    "7.25×10¹⁶",
    "1.49×10²²",
    "1.49×10²⁴",
    "2.57×10²⁴",
    "1.49×10¹⁸"
   ],
   "ans": "c",
   "status": "verified",
   "f": [
    "vacancy"
   ]
  },
  {
   "id": "F17-12",
   "exam": "F17",
   "n": 12,
   "topic": "elastic",
   "kind": "calc",
   "q": "Steel bar 20 mm wide × 40 mm thick, E = 207 GPa, ν = 0.30, pulled with 60 kN. Change in width?",
   "opts": [
    "+3.62 µm",
    "−7.24 µm",
    "+7.24 µm",
    "−2.18 µm",
    "−4.35 µm"
   ],
   "ans": "d",
   "status": "verified",
   "note": "$\\Delta w = -\\nu F/(E\\,t) = -0.3\\cdot60000/(207\\times10^9\\cdot0.04) = -2.17$ µm. Width shrinks in tension.",
   "f": [
    "poisson"
   ]
  },
  {
   "id": "F17-16",
   "exam": "F17",
   "n": 16,
   "topic": "density",
   "kind": "concept",
   "q": "Metals A (FCC, a = 0.3 nm) and B (BCC, a = 0.4 nm) have equal densities. Which atom is heavier?",
   "opts": [
    "A",
    "B"
   ],
   "ans": "b",
   "status": "verified",
   "note": "$A \\propto \\rho a^3/n$: A → 0.027/4, B → 0.064/2. B is heavier.",
   "f": [
    "density"
   ]
  },
  {
   "id": "F17-17",
   "exam": "F17",
   "n": 17,
   "topic": "ldpd",
   "kind": "calc",
   "q": "FCC copper, a = 0.361 nm. Atoms per nm² on the cube face?",
   "opts": [
    "15.35",
    "23.02",
    "2",
    "38.4",
    "7.67"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$2/a^2 = 2/0.361^2 = 15.35$ nm⁻². The numeric twin of W26 Q6.",
   "f": [
    "pd"
   ]
  },
  {
   "id": "F17-18",
   "exam": "F17",
   "n": 18,
   "topic": "solidsol",
   "kind": "concept",
   "q": "10 % Sn added to molten Cu → substitutional solid solution (bronze). Its structure is…",
   "opts": [
    "FCC Cu cells interspersed with FCC Sn cells",
    "FCC Cu with some Cu atoms replaced by Sn",
    "85 % Cu grains + 15 % Sn grains",
    "Sn with Cu squeezed in",
    "Cu with Sn squeezed between Cu atoms"
   ],
   "ans": "b",
   "status": "key",
   "note": "Same five options as A25 Q10, shuffled, with Ni in place of Sn."
  },
  {
   "id": "PPS1-1",
   "exam": "PPS1",
   "n": 1,
   "topic": "config",
   "kind": "concept",
   "q": "Which of the following electron configurations is correctly matched with its periodic group classification?",
   "opts": [
    "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^7 4s^2$ → Transition metal; $1s^2 2s^2 2p^5$ → Halogen",
    "$1s^2 2s^2 2p^6 3s^2 3p^6$ → Alkali metal; $1s^2 2s^2 2p^6 3s^2$ → Halogen",
    "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$ → Alkaline earth metal; $1s^2 2s^2 2p^5$ → Inert gas",
    "$1s^2 2s^2 2p^6 3s^2$ → Transition metal; $1s^2 2s^2 2p^6 3s^2 3p^6 3d^2 4s^2$ → Alkali metal"
   ],
   "ans": "a",
   "status": "verified",
   "note": "Elements with partially filled inner d-orbitals ($3d^7 4s^2$) are transition metals (Co, $Z=27$). Elements with $ns^2 np^5$ valence shells lack 1 electron for an octet, classifying them as halogens (F, $Z=9$)."
  },
  {
   "id": "PPS1-2",
   "exam": "PPS1",
   "n": 2,
   "topic": "bonding",
   "kind": "calc",
   "q": "Using Pauling's formula $\\%\\text{IC} = [1 - \\exp(-0.25(\\Delta X)^2)] \\times 100\\%$, what is the dominant bond type and % ionic character of $\\text{TiO}_2$ ($X_{\\text{Ti}} = 1.5, X_{\\text{O}} = 3.5$) and diamond ($C$)?",
   "opts": [
    "$\\text{TiO}_2$: mixed (63.2% ionic); Diamond: pure covalent (0% ionic)",
    "$\\text{TiO}_2$: pure covalent (0% ionic); Diamond: metallic",
    "$\\text{TiO}_2$: metallic alloy; Diamond: mixed (63.2% ionic)",
    "$\\text{TiO}_2$: 36.8% ionic; Diamond: 50% covalent"
   ],
   "ans": "a",
   "status": "verified",
   "note": "For $\\text{TiO}_2$, $\\Delta X = 3.5 - 1.5 = 2.0 \\implies \\%\\text{IC} = 1 - e^{-0.25(4)} = 1 - e^{-1} = 63.2\\%$ (predominantly ionic). Diamond has $\\Delta X = 0 \\implies 0\\%$ ionic (100% covalent).",
   "f": [
    "ionic"
   ]
  },
  {
   "id": "PPS1-3",
   "exam": "PPS1",
   "n": 3,
   "topic": "bondcurve",
   "kind": "calc",
   "q": "For a $\\text{K}^+–\\text{Cl}^-$ ion pair where $E_A(r) = -1.436/r$ and $E_R(r) = 5.8\\times10^{-6}/r^9$ (eV, nm), calculate the equilibrium spacing $r_0$ and bond energy $E_0$.",
   "opts": [
    "$r_0 = 0.279\\text{ nm},\\; E_0 = -4.58\\text{ eV}$",
    "$r_0 = 0.140\\text{ nm},\\; E_0 = -9.16\\text{ eV}$",
    "$r_0 = 0.558\\text{ nm},\\; E_0 = -2.29\\text{ eV}$",
    "$r_0 = 0.279\\text{ nm},\\; E_0 = +4.58\\text{ eV}$"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$dE_N/dr = 1.436/r^2 - 5.22\\times10^{-5}/r^{10} = 0 \\implies r_0^8 = 3.635\\times10^{-5} \\implies r_0 = 0.2789\\text{ nm} \\approx 0.279\\text{ nm}$. $E_0 = E_N(r_0) = -1.436/0.2789 + 5.8\\times10^{-6}/(0.2789)^9 = -4.58\\text{ eV}$.",
   "f": [
    "bondwell"
   ]
  },
  {
   "id": "PPS1-4",
   "exam": "PPS1",
   "n": 4,
   "topic": "bondcurve",
   "kind": "calc",
   "q": "Calculate the electrostatic force of attraction $F_A$ between $\\text{K}^+$ ($z_1=+1$) and $\\text{O}^{2-}$ ($z_2=-2$) at $r = 1.5\\text{ nm}$, and the repulsive force $F_R$ if this is the equilibrium spacing.",
   "opts": [
    "$F_A = 2.05\\times10^{-10}\\text{ N},\\; F_R = -2.05\\times10^{-10}\\text{ N}$ (equal magnitude, repulsive)",
    "$F_A = 1.02\\times10^{-10}\\text{ N},\\; F_R = +1.02\\times10^{-10}\\text{ N}$",
    "$F_A = 4.10\\times10^{-10}\\text{ N},\\; F_R = 0\\text{ N}$",
    "$F_A = 2.05\\times10^{-10}\\text{ N},\\; F_R = 0\\text{ N}$"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$F_A = \\frac{|z_1 z_2| e^2}{4\\pi \\varepsilon_0 r^2} = \\frac{2(1.602\\times10^{-19})^2}{4\\pi(8.854\\times10^{-12})(1.5\\times10^{-9})^2} = 2.05\\times10^{-10}\\text{ N}$. At equilibrium, $F_N = F_A + F_R = 0 \\implies F_R = -F_A$.",
   "f": [
    "ionforce"
   ]
  },
  {
   "id": "PPS1-5",
   "exam": "PPS1",
   "n": 5,
   "topic": "atomsmass",
   "kind": "calc",
   "q": "How many atoms are in a gold wire ($d = 0.70\\text{ mm}$, $L = 8.0\\text{ cm}$, $\\rho = 19.3\\text{ g/cm}^3$, $A = 196.97\\text{ g/mol}$) and in one metric ton of iron ($A = 55.85\\text{ g/mol}$)?",
   "opts": [
    "Au: $1.82\\times10^{21}$ atoms; Fe: $1.08\\times10^{28}$ atoms",
    "Au: $7.28\\times10^{21}$ atoms; Fe: $1.08\\times10^{28}$ atoms",
    "Au: $1.82\\times10^{23}$ atoms; Fe: $5.40\\times10^{27}$ atoms",
    "Au: $3.64\\times10^{20}$ atoms; Fe: $2.16\\times10^{28}$ atoms"
   ],
   "ans": "a",
   "status": "verified",
   "note": "Au: $V = \\pi(0.035\\text{ cm})^2(8.0\\text{ cm}) = 0.0308\\text{ cm}^3$, $m = 19.3 \\times 0.0308 = 0.594\\text{ g} \\implies N = (0.594/196.97) \\times 6.022\\times10^{23} = 1.82\\times10^{21}$ atoms. Fe: $m = 10^6\\text{ g} \\implies N = (10^6/55.85) \\times 6.022\\times10^{23} = 1.08\\times10^{28}$ atoms.",
   "f": [
    "atoms"
   ]
  }
 ],
 "clusters": [
  {
   "id": "hardness",
   "topic": "tensile",
   "match": "exact",
   "expect": "Very likely",
   "title": "Which property can’t a tensile test measure? → Hardness",
   "members": [
    "F24-20",
    "A25-5",
    "W26-15",
    "FX-35"
   ],
   "changes": "Nothing changed: same stem and same five options in the same order, three midterms in a row.",
   "study": "Hardness = resistance to local indentation (Rockwell, Brinell, Vickers), Callister CH 6.10. E, σy, TS and %EL all come off the tensile curve.",
   "trap": "None, apart from second-guessing yourself. Two free marks.",
   "refs": {
    "cal": "CH 6.10",
    "guide": "Part 6"
   }
  },
  {
   "id": "apf",
   "topic": "cells",
   "match": "exact",
   "expect": "Very likely",
   "title": "APF ratio BCC : FCC : HCP = 0.68 : 0.74 : 0.74",
   "members": [
    "A25-15",
    "W26-5",
    "F24-26"
   ],
   "changes": "A25 and W26 use the same stem; only the option order was shuffled (correct answer moved from (b) to (d)). F24 tested it as a T/F (“FCC has the highest APF in the cubic system”).",
   "study": "Know the derivation, not just the number: $APF_{FCC} = \\frac{4\\cdot\\frac43\\pi R^3}{(2R\\sqrt2)^3} = 0.74$, $APF_{BCC} = \\frac{2\\cdot\\frac43\\pi R^3}{(4R/\\sqrt3)^3} = 0.68$. HCP is close-packed like FCC → 0.74.",
   "trap": "Options are built from the two numbers 0.68 and 0.74 in every order. Read which structure each position refers to.",
   "refs": {
    "lec": [
     {
      "l": 4,
      "s": 10
     },
     {
      "l": 4,
      "s": 12
     },
     {
      "l": 5,
      "s": 2
     }
    ],
    "cal": "CH 3.4, Ex 3.2"
   }
  },
  {
   "id": "atomspercell",
   "topic": "cells",
   "match": "template",
   "expect": "Likely",
   "title": "Atoms per unit cell trap (BCC 2 · FCC 4 · HCP 6)",
   "members": [
    "F24-30",
    "A25-25",
    "A25-1",
    "A25-16"
   ],
   "changes": "F24 gave HCP = 3 (false); A25 gave BCC = 9 (false, it counted whole corner atoms). A25 also asked you to recognise BCC from a picture and to define body-centred tetragonal.",
   "study": "$n = N_i + N_f/2 + N_c/8$ (Lecture 4 slide 12). Crystal systems: tetragonal $a = b \\ne c$, all 90° (Lecture 4 slide 16).",
   "trap": "Counting corner atoms as whole atoms.",
   "refs": {
    "lec": [
     {
      "l": 4,
      "s": 8
     },
     {
      "l": 4,
      "s": 12
     },
     {
      "l": 4,
      "s": 16
     }
    ],
    "cal": "CH 3.4, CH 3.7"
   }
  },
  {
   "id": "ice",
   "topic": "bonding",
   "match": "exact",
   "expect": "Likely",
   "title": "Ice floats because of hydrogen bonding",
   "members": [
    "F24-24",
    "A25-27"
   ],
   "changes": "Same sentence, word for word (True).",
   "study": "Hydrogen bonding is the strongest secondary bond; it holds H₂O in an open, low-density hexagonal structure.",
   "trap": "None. Recognise it and move on.",
   "refs": {
    "lec": [
     {
      "l": 3,
      "s": 12
     },
     {
      "l": 3,
      "s": 13
     }
    ],
    "cal": "CH 2.7"
   }
  },
  {
   "id": "polycrystal",
   "topic": "structure",
   "match": "exact",
   "expect": "Very likely",
   "title": "“Polycrystalline” ≠ polymorphism (allotropy)",
   "members": [
    "F24-29",
    "W26-24",
    "A25-21"
   ],
   "changes": "F24 and W26: same false definition (“more than one crystal form with T and P”). A25 gave the correct definition of allotropy as a True.",
   "study": "Polycrystalline = many grains with different orientations. Polymorphism/allotropy = same element, different crystal structures at different T, P (e.g. Fe BCC ↔ FCC, carbon diamond/graphite).",
   "trap": "The statement borrows the allotropy definition and attaches the wrong word to it.",
   "refs": {
    "lec": [
     {
      "l": 6,
      "s": 18
     },
     {
      "l": 8,
      "s": 2
     }
    ],
    "cal": "CH 3.6, CH 3.14"
   }
  },
  {
   "id": "amorphousgb",
   "topic": "structure",
   "match": "exact",
   "expect": "Very likely",
   "title": "Amorphous materials have NO grain boundaries",
   "members": [
    "A25-22",
    "W26-40"
   ],
   "changes": "Same sentence in consecutive midterms (False both times).",
   "study": "A grain boundary is the interface between two crystals. No crystals, no grain boundaries.",
   "trap": "The sentence sounds half-right (“do not have crystals” is true).",
   "refs": {
    "lec": [
     {
      "l": 4,
      "s": 3
     },
     {
      "l": 8,
      "s": 3
     }
    ],
    "cal": "CH 3.17"
   }
  },
  {
   "id": "order",
   "topic": "structure",
   "match": "template",
   "expect": "Likely",
   "title": "Short-range vs long-range order",
   "members": [
    "F24-25",
    "A25-30"
   ],
   "changes": "F24 swapped the orders (False). A25 stated it correctly. The posted A25 key says False, but the statement is the textbook definition, so it is True.",
   "study": "Crystalline: short AND long-range order. Amorphous (glass): short-range only.",
   "trap": "Watch which noun each order is attached to; they flip it.",
   "refs": {
    "lec": [
     {
      "l": 4,
      "s": 3
     }
    ],
    "cal": "CH 3.17"
   }
  },
  {
   "id": "perp",
   "topic": "planes",
   "match": "exact",
   "expect": "Likely",
   "title": "Cubic: [hkl] ⟂ (hkl)",
   "members": [
    "A25-24",
    "W26-29"
   ],
   "changes": "Same fact, reworded (True both times).",
   "study": "Only guaranteed in the cubic system. In non-cubic systems it is generally false.",
   "trap": "A future version may say “in all crystal systems” → False.",
   "refs": {
    "lec": [
     {
      "l": 5,
      "s": 20
     }
    ],
    "cal": "CH 3.10"
   }
  },
  {
   "id": "covalent",
   "topic": "bonding",
   "match": "exact",
   "expect": "Very likely",
   "title": "Definition of covalent bonding (sharing)",
   "members": [
    "F24-16",
    "W26-14",
    "A25-26"
   ],
   "changes": "F24 and W26: same stem and the same correct sentence; W26 swapped one distractor for the metallic “sea of electrons” line and moved the answer from (b) to (d). A25 tested the opposite as T/F (“based on dipoles” = False).",
   "study": "Ionic = transfer. Covalent = sharing (directional). Metallic = electron sea. Secondary = dipoles.",
   "trap": "The dipole sentence describes van der Waals, and the sea-of-electrons sentence describes metallic bonding.",
   "refs": {
    "lec": [
     {
      "l": 3,
      "s": 5
     },
     {
      "l": 3,
      "s": 7
     },
     {
      "l": 3,
      "s": 12
     }
    ],
    "cal": "CH 2.6–2.7"
   }
  },
  {
   "id": "carbon",
   "topic": "bonding",
   "match": "concept",
   "expect": "Likely",
   "title": "Carbon: diamond network, graphite layers, sp³ hybrids, directional bonds",
   "members": [
    "F24-3",
    "W26-34",
    "A25-28",
    "W26-39"
   ],
   "changes": "One carbon fact per exam: diamond vs graphite (F24), hybridisation in methane (A25), diamond 3-D network + “covalent bonds are directional” (W26).",
   "study": "Diamond: every bond covalent, 3-D network → hardest. Graphite: covalent inside layers + van der Waals between layers → soft, slippery.",
   "trap": "Options that give graphite “only” van der Waals bonds.",
   "refs": {
    "lec": [
     {
      "l": 3,
      "s": 6
     },
     {
      "l": 3,
      "s": 8
     }
    ],
    "cal": "CH 2.6, CH 3.6"
   }
  },
  {
   "id": "cbccfcc",
   "topic": "diffmech",
   "match": "template",
   "expect": "Very likely",
   "title": "Carbon in BCC vs FCC iron: ratio of D = D₀e^(−Q/RT)",
   "members": [
    "F24-2",
    "W26-12"
   ],
   "changes": "Same Q and D₀ values and the same five options. Only T changed: 910 °C → ratio 27 ≈ “30× faster in BCC”; 1200 °C → ratio 7 ≈ “3× faster in BCC”.",
   "study": "Compute both $D$ (T in kelvin, $R = 8.314$, Q in J/mol), then divide. BCC wins because the activation energy is lower (more open, less tightly packed structure).",
   "trap": "Memorising “30×”. The paper photo for W26 marks exactly that wrong answer. Expect a third temperature.",
   "refs": {
    "lec": [
     {
      "l": 9,
      "s": 18
     },
     {
      "l": 9,
      "s": 19
     }
    ],
    "cal": "CH 5.5, Ex 5.4"
   }
  },
  {
   "id": "palladium",
   "topic": "fick1",
   "match": "template",
   "expect": "Very likely",
   "title": "Hydrogen purification through a palladium sheet (Fick I)",
   "members": [
    "A25-7",
    "W26-13"
   ],
   "changes": "Lecture 9 slide 9: 5 mm, 0.20 m². A25: 8 mm, 1.20 m², 2.4/0.6 kg/m³. W26: 4 mm, 0.60 m², 2.0/0.5 kg/m³. Same D = 10⁻⁸ m²/s and 500 °C every time.",
   "study": "$J = D\\,\\frac{C_1 - C_2}{\\Delta x}$, then mass $= J\\,A\\,t$ with $t = 3600$ s for “per hour”. Callister CH 5.3 describes this exact device.",
   "trap": "Forgetting ×3600 (A25 option (a) is the per-second value), or leaving Δx in mm.",
   "refs": {
    "lec": [
     {
      "l": 9,
      "s": 9
     },
     {
      "l": 9,
      "s": 11
     }
    ],
    "cal": "CH 5.3, Ex 5.1"
   }
  },
  {
   "id": "vacancies",
   "topic": "vacancy",
   "match": "template",
   "expect": "Very likely",
   "title": "Vacancy concentration Nᵥ = N·e^(−Qᵥ/kT)",
   "members": [
    "W26-8",
    "FX-9",
    "A25-17",
    "F17-2",
    "W26-33"
   ],
   "changes": "W26 Q8 is word for word the old final Q9, which is itself Callister Ex 4.1 (Cu, 0.9 eV) with T moved from 1000 °C to 20 °C. A25 inverted it (given the fraction, find Qᵥ). The 2017 final changed the metal (1.22 eV, 37.4 g/mol).",
   "study": "Two steps: $N = \\rho N_A/A$ (ρ in g/m³!) then $N_v = N e^{-Q_v/kT}$ with $k = 8.62\\times10^{-5}$ eV/K and T in kelvin. Inverse: $Q_v = -kT\\ln(N_v/N)$.",
   "trap": "The old final offers 2.2×10²⁵ (Callister’s 1000 °C answer) as a distractor. Other traps: T in °C, ρ left in g/cm³ (factor 10⁶).",
   "refs": {
    "lec": [
     {
      "l": 7,
      "s": 5
     },
     {
      "l": 7,
      "s": 8
     }
    ],
    "cal": "CH 4.2, Ex 4.1"
   }
  },
  {
   "id": "bragg",
   "topic": "xrd",
   "match": "template",
   "expect": "Very likely",
   "title": "Bragg’s law on a cubic metal (forward or backward)",
   "members": [
    "F24-15",
    "A25-29",
    "W26-7"
   ],
   "changes": "F24: Pt (113), R given → find 2θ = 81°. A25: the same Pt numbers recycled as a T/F claiming 2θ = 40.69° (that is θ). W26: run backwards, from Rh (311) at 2θ = 36.12° to R.",
   "study": "$d_{hkl} = a/\\sqrt{h^2+k^2+l^2}$, $n\\lambda = 2d\\sin\\theta$, then $a \\leftrightarrow R$ ($a = 2R\\sqrt2$ FCC, $4R/\\sqrt3$ BCC). Lecture 6 slide 17 is Callister Ex 3.13 (BCC Fe 220).",
   "trap": "θ vs 2θ, and stopping early: W26 offers d (0.1147) and a (0.3804) as wrong answers before R.",
   "refs": {
    "lec": [
     {
      "l": 6,
      "s": 10
     },
     {
      "l": 6,
      "s": 15
     },
     {
      "l": 6,
      "s": 17
     }
    ],
    "cal": "CH 3.16, Ex 3.13"
   }
  },
  {
   "id": "planardensity",
   "topic": "ldpd",
   "match": "template",
   "expect": "Very likely",
   "title": "Planar density in terms of R",
   "members": [
    "A25-4",
    "W26-6",
    "F17-17"
   ],
   "changes": "Lecture 6 slide 6 works FCC (110) = 1/(4√2R²). A25 asked BCC (110); W26 asked FCC (100); F17 asked FCC (100) numerically with a = 0.361 nm. Every option list contains the slide-6 answer.",
   "study": "Count atoms centred on the plane, divide by the plane area in $R$. FCC: (100) $1/4R^2$, (110) $1/4\\sqrt2R^2$, (111) $1/2\\sqrt3R^2$. BCC: (100) $3/16R^2$, (110) $3/8\\sqrt2R^2$.",
   "trap": "Answering the slide’s plane instead of the asked plane. The A25 posted key itself is wrong here; the correct answer is (e).",
   "refs": {
    "lec": [
     {
      "l": 6,
      "s": 5
     },
     {
      "l": 6,
      "s": 6
     }
    ],
    "cal": "CH 3.11"
   }
  },
  {
   "id": "closepacked",
   "topic": "ldpd",
   "match": "concept",
   "expect": "Likely",
   "title": "Close-packed planes, directions & stacking",
   "members": [
    "A25-2",
    "FX-5",
    "W26-27",
    "W26-28",
    "F24-1"
   ],
   "changes": "Picture versions (pick the close-packed plane in a drawn cell: A25, old final) and T/F swaps (ABC vs AB stacking, <110> vs <111>). F24 asked which family the face diagonals are.",
   "study": "FCC: planes {111}, directions <110> (face diagonal), stacking ABCABC. HCP: basal plane, ABAB. BCC: densest plane {110}, close-packed direction <111> (body diagonal).",
   "trap": "Every T/F swaps the pairs: FCC↔HCP stacking, FCC↔BCC directions.",
   "refs": {
    "lec": [
     {
      "l": 5,
      "s": 5
     },
     {
      "l": 5,
      "s": 7
     },
     {
      "l": 6,
      "s": 7
     }
    ],
    "cal": "CH 3.12"
   }
  },
  {
   "id": "miller",
   "topic": "directions",
   "match": "template",
   "expect": "Very likely",
   "title": "Miller indices read off a drawn unit cell",
   "members": [
    "F24-13",
    "F24-14",
    "A25-3",
    "A25-9",
    "W26-1",
    "W26-2",
    "W26-3",
    "W26-4",
    "F17-1",
    "FX-31"
   ],
   "changes": "Every exam draws new vectors and planes; the method never changes. Weight is rising: F24 had 2 questions, A25 2, W26 4 (8 marks).",
   "study": "Directions: head − tail, clear fractions, bar the negatives, [uvw]. Planes: shift the origin if the plane passes through it, take intercepts, reciprocals, clear fractions, (hkl).",
   "trap": "Tail − head (sign flip), forgetting to move the origin, brackets [ ] vs ( ) vs { } vs < >.",
   "refs": {
    "lec": [
     {
      "l": 5,
      "s": 11
     },
     {
      "l": 5,
      "s": 15
     },
     {
      "l": 5,
      "s": 18
     },
     {
      "l": 5,
      "s": 19
     }
    ],
    "cal": "CH 3.9–3.10, Ex 3.7, 3.10"
   }
  },
  {
   "id": "density",
   "topic": "density",
   "match": "template",
   "expect": "Very likely",
   "title": "ρ = nA/(V꜀N_A), forward or inverted",
   "members": [
    "A25-8",
    "F24-17",
    "F24-4",
    "F17-16"
   ],
   "changes": "A25: W (BCC) forward to ρ. F24: Th (FCC) inverted for a. F24 also asked unit cells per mm³ (just 1/a³). F17: compare two metals.",
   "study": "Lecture 5 slide 8 = Callister Ex 3.4 (Cu, R = 0.128 nm → 8.89 g/cm³). Keep $a$ in cm when ρ is in g/cm³.",
   "trap": "Wrong n (W26-style options include n = 1 and n = 4 answers for a BCC metal). nm → cm is ×10⁻⁷.",
   "refs": {
    "lec": [
     {
      "l": 5,
      "s": 8
     }
    ],
    "cal": "CH 3.5, Ex 3.4"
   }
  },
  {
   "id": "solidsolution",
   "topic": "solidsol",
   "match": "exact",
   "expect": "Very likely",
   "title": "Substitutional vs interstitial solid solution",
   "members": [
    "A25-10",
    "F17-18",
    "W26-9",
    "F24-10"
   ],
   "changes": "A25 Q10 is the 2017 final Q18 with Sn → Ni and 10 % → 15 %; the five options are the same sentences. W26 asked the interstitial case (C in BCC Fe = ferrite). F24 asked the self-interstitial definition.",
   "study": "Similar size → substitutional (Ni in Cu, Sn in Cu). Much smaller atom → interstitial (C, N, H in Fe). The host lattice is unchanged in both.",
   "trap": "Options describing separate grains or separate unit cells describe mixtures, not solid solutions.",
   "refs": {
    "lec": [
     {
      "l": 7,
      "s": 11
     },
     {
      "l": 7,
      "s": 12
     },
     {
      "l": 7,
      "s": 13
     }
    ],
    "cal": "CH 4.3"
   }
  },
  {
   "id": "defectsfalse",
   "topic": "defects",
   "match": "template",
   "expect": "Likely",
   "title": "“Which statement about defects is FALSE?”",
   "members": [
    "A25-13",
    "W26-10",
    "FX-8"
   ],
   "changes": "Same stem and the same true filler statements (vacancies needed for substitutional diffusion; impurities substitutional or interstitial). Only the false line changes.",
   "study": "Lecture 7 slide 20: defects can be desirable (strengthening, doping) or undesirable. Vacancy concentration rises with T. Grain boundary = interfacial (surface) defect.",
   "trap": "Absolute words: “only”, “always”, “never”.",
   "refs": {
    "lec": [
     {
      "l": 7,
      "s": 3
     },
     {
      "l": 7,
      "s": 20
     }
    ],
    "cal": "CH 4.1–4.6"
   }
  },
  {
   "id": "edge",
   "topic": "defects",
   "match": "exact",
   "expect": "Likely",
   "title": "Identify the edge dislocation picture",
   "members": [
    "A25-14",
    "FX-12"
   ],
   "changes": "Same figure type and the same five options.",
   "study": "Edge = extra half-plane; b ⟂ dislocation line. Screw = spiral ramp; b ∥ line.",
   "trap": "Mixing up edge and screw.",
   "refs": {
    "lec": [
     {
      "l": 7,
      "s": 17
     },
     {
      "l": 7,
      "s": 18
     }
    ],
    "cal": "CH 4.5"
   }
  },
  {
   "id": "bondcurve",
   "topic": "bondcurve",
   "match": "template",
   "expect": "Likely",
   "title": "Force/energy vs separation: r₀ where F = 0 (energy minimum)",
   "members": [
    "F24-6",
    "W26-11",
    "FX-1",
    "PPS1-3",
    "PPS1-4"
   ],
   "changes": "F24 read r₀ off a force curve; the old final read it off a labelled figure; W26 asked for the correct sentence. Practice Set #1 Q3–4 are the calculation versions (Callister Ex 2.2).",
   "study": "$F = dE/dr$; $r_0$: $F_N = 0$ ⇔ $dE_N/dr = 0$; $E_0$ = depth of the well (Lecture 2 slides 15–16).",
   "trap": "On a FORCE curve the equilibrium is the zero crossing, not the peak.",
   "refs": {
    "lec": [
     {
      "l": 2,
      "s": 15
     },
     {
      "l": 2,
      "s": 16
     }
    ],
    "cal": "CH 2.5, Ex 2.2"
   }
  },
  {
   "id": "bondprops",
   "topic": "bondcurve",
   "match": "concept",
   "expect": "Very likely",
   "title": "Bond strength → Tm, E, α (and E vs T)",
   "members": [
    "F24-22",
    "W26-30",
    "W26-21",
    "F24-28"
   ],
   "changes": "A different sentence each year from Lecture 3 slides 14–16: weak bonds give low Tm, low E, high α (F24); α rises as bond energy falls (W26); E drops as T rises (W26); E is fixed by bonding (F24).",
   "study": "Deep, narrow well → high Tm, high E, low α. Shallow, asymmetric well → the opposite.",
   "trap": "The direction words (increase/decrease) are what get flipped.",
   "refs": {
    "lec": [
     {
      "l": 3,
      "s": 14
     },
     {
      "l": 3,
      "s": 15
     },
     {
      "l": 3,
      "s": 16
     }
    ],
    "cal": "CH 2.5"
   }
  },
  {
   "id": "curve",
   "topic": "tensile",
   "match": "template",
   "expect": "Very likely",
   "title": "Read a stress–strain curve (E, σy at 0.2 %, TS, %EL, necking, recovery)",
   "members": [
    "W26-16",
    "W26-17",
    "W26-18",
    "W26-19",
    "W26-20",
    "A25-18",
    "A25-19",
    "A25-20"
   ],
   "changes": "W26 spent 10 marks on one metal’s curve (Callister’s aluminium-alloy curve with a low-strain inset), following the Callister Ex 6.3 procedure step for step: E from the inset (≈ 60 GPa), offset yield, %EL, necking, permanent set after unloading. A25 compared five curves (stiffest, strongest, most ductile).",
   "study": "E = slope of the inset. 0.2 % offset: line parallel to the elastic slope from ε = 0.002. Necking starts at the curve’s maximum. %EL = plastic strain at fracture. After unloading, only σ/E is recovered.",
   "trap": "Swapping yield strength and TS. Taking ductility as the largest area (that is toughness, which is the A25 key’s mistake). Forgetting the elastic recovery.",
   "refs": {
    "cal": "CH 6.6–6.8, Ex 6.3",
    "guide": "Part 6"
   }
  },
  {
   "id": "hooke",
   "topic": "elastic",
   "match": "template",
   "expect": "Likely",
   "title": "Elastic elongation ΔL = FL₀/(A₀E)",
   "members": [
    "F24-11",
    "F24-12"
   ],
   "changes": "F24 asked a pair: the length under load, then under 1.5× the load. Callister Ex 6.1 is the same calculation for copper.",
   "study": "Elastic → linear: 1.5× load = 1.5× ΔL. Add ΔL back to L₀ when they ask for the new length.",
   "trap": "Using radius as diameter in A₀ = πd²/4; reporting ΔL instead of L.",
   "refs": {
    "cal": "CH 6.3, Ex 6.1",
    "guide": "Part 6"
   }
  },
  {
   "id": "poisson",
   "topic": "elastic",
   "match": "template",
   "expect": "Likely",
   "title": "Poisson’s ratio ν = −εₓ/ε_z",
   "members": [
    "F24-19",
    "F17-12"
   ],
   "changes": "F24 gave the measured strains and asked for ν; F17 gave ν and asked for the width change. Callister Ex 6.2 (brass rod, Δd → load) is the third form.",
   "study": "$\\varepsilon_z = \\sigma/E$, $\\varepsilon_x = -\\nu\\varepsilon_z$, $\\Delta w = \\varepsilon_x w_0$. Metals: $\\nu \\approx 0.3$.",
   "trap": "Sign: lateral dimension DECREASES in tension. Divide by the lateral dimension, not the length.",
   "refs": {
    "cal": "CH 6.5, Ex 6.2",
    "guide": "Part 6"
   }
  },
  {
   "id": "definitions6",
   "topic": "tensile",
   "match": "concept",
   "expect": "Very likely",
   "title": "Ch 6 definition T/Fs (ductility, resilience, plastic region, offset, true stress)",
   "members": [
    "F24-21",
    "F24-23",
    "W26-35",
    "W26-26",
    "W26-32",
    "F24-5",
    "F24-9"
   ],
   "changes": "Every exam has 2–3 of these. Ductility is defined wrongly in both F24 (it absorbs and gives back energy) and W26 (elastic deformation).",
   "study": "Ductility = PLASTIC strain at fracture. Resilience = elastic energy recovered. Toughness = total energy to fracture. Stiffness (E) ≠ strength (σy).",
   "trap": "Elastic/plastic and stiffness/strength swaps.",
   "refs": {
    "cal": "CH 6.6–6.7",
    "guide": "Part 6"
   }
  },
  {
   "id": "ionic",
   "topic": "bonding",
   "match": "template",
   "expect": "Likely",
   "title": "Electronegativity → bond type / %IC",
   "members": [
    "A25-12",
    "PPS1-2",
    "W26-31"
   ],
   "changes": "A25 gave X values for Na and Cl; Practice Set Q2 and Lecture 3 slide 9 (TiO₂, ZnTe) ask for the full %IC.",
   "study": "$\\%IC = \\{1 - e^{-0.25(X_A - X_B)^2}\\}\\times100$ (on the equation sheet). Large ΔX → ionic.",
   "trap": "Squaring the difference, not the difference of squares.",
   "refs": {
    "lec": [
     {
      "l": 3,
      "s": 9
     }
    ],
    "cal": "CH 2.6, Ex 2.3"
   }
  },
  {
   "id": "config",
   "topic": "config",
   "match": "template",
   "expect": "Likely",
   "title": "Electron configurations: inert gas, groups, valence electrons",
   "members": [
    "A25-6",
    "A25-23",
    "W26-36",
    "PPS1-1"
   ],
   "changes": "A25 asked you to pick the inert gas and gave Krypton as a false “reactive” statement. Practice Set Q1 classifies six configurations (it is your in-tutorial exercise base).",
   "study": "Filled s + p outer shell → inert. ns¹ alkali, ns² alkaline earth, ns²np⁵ halogen, partly filled d → transition metal.",
   "trap": "…3d²4s² looks like an alkaline earth but is a transition metal (Ti).",
   "refs": {
    "lec": [
     {
      "l": 2,
      "s": 9
     },
     {
      "l": 2,
      "s": 14
     }
    ],
    "cal": "CH 2.3–2.4"
   }
  },
  {
   "id": "erf",
   "topic": "fick2",
   "match": "template",
   "expect": "Likely",
   "title": "Fick II with erf + carburizing logic",
   "members": [
    "F24-7",
    "F24-18",
    "W26-37"
   ],
   "changes": "F24 asked one erf calculation (nitrogen into iron) and one “how do you speed up carburizing” concept; W26 tested Fick II as a T/F.",
   "study": "$\\frac{C_x - C_0}{C_s - C_0} = 1 - \\mathrm{erf}\\left(\\frac{x}{2\\sqrt{Dt}}\\right)$, erf table on the sheet. Same profile ⇔ same $x^2/Dt$ (Lecture 9 slide 17, Ex 5.3).",
   "trap": "Time in hours instead of seconds; x in mm.",
   "refs": {
    "lec": [
     {
      "l": 9,
      "s": 15
     },
     {
      "l": 9,
      "s": 16
     },
     {
      "l": 9,
      "s": 17
     }
    ],
    "cal": "CH 5.4, Ex 5.2–5.3"
   }
  },
  {
   "id": "mechanisms",
   "topic": "diffmech",
   "match": "concept",
   "expect": "Possible",
   "title": "Diffusion mechanisms: interstitial faster, interdiffusion couple",
   "members": [
    "F24-8",
    "F24-27"
   ],
   "changes": "F24 only: Cu–Ni couple (both diffuse) and interstitial vs vacancy speed.",
   "study": "Interstitial diffusion is faster: more empty sites and no vacancy needed (Lecture 9 slide 6).",
   "trap": "“More energy to squeeze” sounds plausible but is the wrong conclusion.",
   "refs": {
    "lec": [
     {
      "l": 9,
      "s": 3
     },
     {
      "l": 9,
      "s": 5
     },
     {
      "l": 9,
      "s": 6
     }
    ],
    "cal": "CH 5.2"
   }
  },
  {
   "id": "grains",
   "topic": "structure",
   "match": "concept",
   "expect": "Likely",
   "title": "Grains differ only in orientation; anisotropy; etching",
   "members": [
    "A25-11",
    "W26-38",
    "W26-23",
    "W26-25"
   ],
   "changes": "A25 as MC (grains differ in orientation); W26 as three T/Fs.",
   "study": "Single crystals are anisotropic; randomly oriented polycrystals behave isotropically. Grain boundaries etch faster → visible (Lecture 8 slide 5).",
   "trap": "“Uniform in all directions” attached to single crystals.",
   "refs": {
    "lec": [
     {
      "l": 6,
      "s": 9
     },
     {
      "l": 8,
      "s": 3
     },
     {
      "l": 8,
      "s": 5
     }
    ],
    "cal": "CH 3.13–3.15, CH 4.10"
   }
  },
  {
   "id": "slip",
   "topic": "slip",
   "match": "concept",
   "expect": "Possible",
   "title": "Ch 7.1–7.4: dislocation motion & slip systems (new to your scope)",
   "members": [
    "FX-32",
    "W26-10"
   ],
   "changes": "Past midterms barely touched Ch 7, but your Fall 2026 outline puts Ch 7.1–7.4 inside the midterm. Expect 1–2 conceptual questions.",
   "study": "Slip system = slip plane + slip direction (densest plane + densest direction). FCC: {111}<110>, 12 systems. BCC: {110}<111>. More slip systems → more ductile.",
   "trap": "Assuming Ch 7 is “final only”, as it was in older outlines.",
   "refs": {
    "cal": "CH 7.1–7.4",
    "guide": "Part 7"
   }
  }
 ],
 "formulas": [
  {
   "id": "classes",
   "topic": "intro",
   "name": "Material classes & processing → structure → properties",
   "sheet": false,
   "calc": null,
   "tex": "\\text{Processing} \\rightarrow \\text{Structure} \\rightarrow \\text{Properties} \\rightarrow \\text{Performance}",
   "meaning": "Materials science relates structure to properties; materials engineering designs the structure to give a predetermined set of properties (Lecture 1 slide 7).",
   "vars": [],
   "presets": [],
   "steps": [
    "Name the class from the bonding: metallic → metal, ionic/covalent compound → ceramic, covalent chains → polymer, two classes combined → composite.",
    "A property is a response to an external stimulus: mechanical, thermal, electrical, magnetic, optical.",
    "Explain a failure or an improvement as processing → structure → property."
   ],
   "traps": [
    "Saying a property depends on the size or shape of the part (it does not; a load or a resistance does).",
    "Mixing up science (understand structure–property) and engineering (design the structure)."
   ],
   "seen": [],
   "lec": [
    {
     "l": 1,
     "s": 4
    },
    {
     "l": 1,
     "s": 7
    },
    {
     "l": 1,
     "s": 8
    },
    {
     "l": 1,
     "s": 9
    },
    {
     "l": 1,
     "s": 15
    }
   ],
   "cal": "CH 1.2–1.4",
   "learn": {
    "idea": "A material is a substance that can be put into a shape and given a function (Lecture 1 slide 4). Everything in the course fits four classes: metals (metallic bonding, free electrons: conductive, ductile, opaque), ceramics (ionic/covalent compounds of metals and non-metals: hard, brittle, insulating, high melting point), polymers (covalent carbon chains held together by secondary bonds: light, flexible, low melting point) and composites (two or more classes combined, e.g. glass fibres in a polymer). A property is the material's response to an external stimulus (mechanical, thermal, electrical, magnetic, optical) and does not depend on the part's shape or size. Processing sets the structure, the structure sets the properties, and the properties set the performance.",
    "when": [
     "T/F on definitions: material, property, materials science vs engineering.",
     "“Which class…?” from a list of properties or a bonding type.",
     "Explaining a failure or an improvement (Lecture 1 slides 12–15)."
    ],
    "example": {
     "title": "Lecture 1 slide 15: single-crystal turbine blades",
     "given": "jet-engine blades creep at high temperature, and grain boundaries are where creep starts",
     "find": "why blades went from equiaxed grains to columnar grains to a single crystal",
     "steps": [
      {
       "say": "Processing: directional solidification, then a single-crystal casting."
      },
      {
       "say": "Structure: fewer grain boundaries across the load, then none at all."
      },
      {
       "say": "Property: much better creep resistance at high temperature."
      },
      {
       "say": "Performance: about 200 °C higher operating temperature, so a more efficient engine."
      }
     ],
     "answer": "Removing grain boundaries (structure) raises creep resistance (property), which allows a hotter, more efficient engine (performance)."
    },
    "quiz": [
     {
      "type": "tf",
      "badge": "lecture",
      "q": "A property is a material’s response to an external stimulus and does not depend on the size or shape of the piece.",
      "ans": true,
      "why": "Lecture 1 slide 8. Stiffness E is a property; the stiffness of a particular beam also depends on its geometry."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "q": "Materials engineering, as opposed to materials science, is mainly about…",
      "opts": [
       "measuring properties of existing materials",
       "designing the structure of a material to give a predetermined set of properties",
       "the history of materials use",
       "choosing the cheapest material"
      ],
      "ans": "b",
      "why": "Lecture 1 slide 7: science = structure–property correlations; engineering = design the structure for predetermined properties."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Which class is typically hard and brittle, electrically and thermally insulating, with a high melting point?",
      "opts": [
       "metals",
       "ceramics",
       "polymers",
       "composites"
      ],
      "ans": "b",
      "why": "Strong ionic/covalent bonds and no free electrons."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Which class conducts electricity well because of delocalised (free) electrons?",
      "opts": [
       "metals",
       "ceramics",
       "polymers",
       "none of them"
      ],
      "ans": "a",
      "why": "Metallic bonding: a “sea” of valence electrons."
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "Fibreglass is a composite: glass fibres (a ceramic) in a polymer matrix.",
      "ans": true,
      "why": "Two classes combined to get properties neither has alone."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "q": "The WWII Liberty ships cracked in two mainly because of…",
      "opts": [
       "the ductile-to-brittle transition of BCC steel at low temperature",
       "a failed polymer O-ring seal",
       "fatigue cracks at rivet holes near windows",
       "excessive wear on a jackscrew"
      ],
      "ans": "a",
      "why": "Lecture 1 slide 12. The O-ring is Challenger, the rivet holes the de Havilland Comet, the jackscrew Alaska MD-80."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Put the chain in order:",
      "opts": [
       "Structure → Processing → Properties → Performance",
       "Processing → Structure → Properties → Performance",
       "Properties → Structure → Processing → Performance",
       "Performance → Properties → Structure → Processing"
      ],
      "ans": "b",
      "why": "Processing creates the structure; the structure determines the properties; the properties determine the performance."
     }
    ]
   }
  },
  {
   "id": "ionic",
   "topic": "bonding",
   "name": "% ionic character",
   "sheet": true,
   "calc": "ionic",
   "tex": "\\%IC = \\left\\{1 - \\exp\\!\\left[-0.25\\,(X_A - X_B)^2\\right]\\right\\}\\times 100",
   "meaning": "How ionic a bond between A and B is, from the electronegativity difference (Pauling).",
   "vars": [
    [
     "X_A, X_B",
     "electronegativities (Callister Fig. 2.9)",
     "—"
    ]
   ],
   "presets": [
    {
     "label": "A25 Q12 — Na (1.0) / Cl (2.9)",
     "from": "A25-12",
     "values": {
      "XA": 2.9,
      "XB": 1
     }
    },
    {
     "label": "Lecture 3 s9 — ZnTe (Zn 1.6, Te 2.1)",
     "values": {
      "XA": 2.1,
      "XB": 1.6
     }
    },
    {
     "label": "Callister Ex 2.3 — C–H (2.5, 2.1)",
     "values": {
      "XA": 2.5,
      "XB": 2.1
     }
    }
   ],
   "steps": [
    "Look up both electronegativities.",
    "Square the DIFFERENCE, multiply by −0.25, exponentiate.",
    "Above ~50 % → predominantly ionic; small → covalent."
   ],
   "traps": [
    "Squaring each value and then subtracting.",
    "Forgetting the ×100."
   ],
   "seen": [
    "A25-12",
    "PPS1-2"
   ],
   "lec": [
    {
     "l": 3,
     "s": 9
    }
   ],
   "cal": "CH 2.6, Ex 2.3",
   "learn": {
    "idea": "Electronegativity $X$ measures how hard an atom pulls on shared electrons. When two atoms pull equally the electrons sit in the middle (covalent); when one pulls much harder it effectively takes them (ionic). Pauling’s formula turns the difference $\\Delta X$ into a percentage. Most real bonds are in between: the teacher’s slide says it outright, “most materials are neither 100 % ionic nor 100 % covalent.”",
    "when": [
     "You are given two electronegativities (or told to read them from Callister Fig. 2.9).",
     "The question asks “predominantly ionic or covalent?”, or for the % ionic character of a compound."
    ],
    "example": {
     "title": "Lecture 3 slide 9: TiO₂ and ZnTe",
     "given": "$X_O = 3.5$, $X_{Ti} = 1.5$; $X_{Te} = 2.1$, $X_{Zn} = 1.6$",
     "find": "% ionic character of each bond",
     "steps": [
      {
       "say": "Take the difference for Ti–O and square it.",
       "tex": "(X_O - X_{Ti})^2 = (3.5 - 1.5)^2 = 4"
      },
      {
       "say": "Multiply by −0.25, exponentiate, subtract from 1.",
       "tex": "\\%IC_{TiO_2} = \\{1 - e^{-0.25(4)}\\}\\times100 = \\{1 - e^{-1}\\}\\times100 = 63.2\\%"
      },
      {
       "say": "Same for Zn–Te: a small difference gives a small ionic character.",
       "tex": "\\%IC_{ZnTe} = \\{1 - e^{-0.25(0.5)^2}\\}\\times100 = \\{1 - e^{-0.0625}\\}\\times100 = 6.1\\%"
      },
      {
       "say": "Interpret with the 50% rule of thumb: below 50% ionic character means predominantly covalent; 50% is an even ionic–covalent mix; above 50% means predominantly ionic. TiO₂ is mostly ionic, while ZnTe is mostly covalent. This describes the dominant character—real bonds are not perfectly one type or the other."
      }
     ],
     "answer": "TiO₂ ≈ 63 % ionic → predominantly ionic; ZnTe ≈ 6 % ionic → predominantly covalent. Use 50 % ionic character as the practical boundary."
    },
    "quiz": [
     {
      "type": "exam",
      "id": "A25-12"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Two elements have electronegativities {XA} and {XB}. What is the % ionic character of the bond between them?",
      "calc": "ionic",
      "values": {
       "XA": 3,
       "XB": 0.9
      },
      "vary": [
       {
        "key": "XA",
        "min": 2.5,
        "max": 4,
        "dp": 1
       },
       {
        "key": "XB",
        "min": 0.8,
        "max": 2.1,
        "dp": 1
       }
      ],
      "row": "% ionic character",
      "unit": "%",
      "hint": "Square the difference first."
     },
     {
      "type": "calc",
      "badge": "textbook",
      "q": "Callister Ex 2.3: compute the % ionic character of the C–H bond (X_C = {XA}, X_H = {XB}).",
      "calc": "ionic",
      "values": {
       "XA": 2.5,
       "XB": 2.1
      },
      "row": "% ionic character",
      "unit": "%"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Which bond is the most covalent?",
      "opts": [
       "Na–Cl (0.9, 3.0)",
       "C–H (2.5, 2.1)",
       "Mg–O (1.2, 3.5)",
       "Ca–F (1.0, 4.0)"
      ],
      "ans": "b",
      "why": "Smallest ΔX (0.4) → smallest % ionic character → most covalent."
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "Most engineering materials are either 100 % ionic or 100 % covalent.",
      "ans": false,
      "why": "Lecture 3 slide 9: most materials are neither; the bond is a mixture and %IC measures the ionic share."
     }
    ]
   }
  },
  {
   "id": "bondwell",
   "topic": "bondcurve",
   "name": "Equilibrium spacing r₀ and bond energy E₀",
   "sheet": true,
   "calc": "bondwell",
   "tex": "E_N = -\\frac{A}{r} + \\frac{B}{r^n},\\qquad \\frac{dE_N}{dr}=0 \\Rightarrow r_0 = \\left(\\frac{nB}{A}\\right)^{\\frac{1}{n-1}},\\qquad E_0 = E_N(r_0)",
   "meaning": "Net energy = attraction + repulsion. Equilibrium where the net force is zero (energy minimum).",
   "vars": [
    [
     "A, B",
     "attractive / repulsive constants",
     "eV·nm, eV·nmⁿ"
    ],
    [
     "n",
     "repulsion exponent (≈ 8–9)",
     "—"
    ]
   ],
   "presets": [
    {
     "label": "Practice Set #1 Q3 — K⁺–Cl⁻",
     "from": "PPS1-3",
     "values": {
      "A": 1.436,
      "B": 0.0000058,
      "n": 9
     }
    }
   ],
   "steps": [
    "Differentiate: $A/r^2 - nB/r^{n+1} = 0$.",
    "Solve: $r_0 = (nB/A)^{1/(n-1)}$.",
    "Substitute $r_0$ back into $E_N$ to get $E_0$ (negative)."
   ],
   "traps": [
    "On a force graph r₀ is the zero crossing; on an energy graph it is the minimum.",
    "E₀ is negative; the “bonding energy” to break the bond is |E₀|."
   ],
   "seen": [
    "F24-6",
    "W26-11",
    "FX-1",
    "PPS1-3"
   ],
   "lec": [
    {
     "l": 2,
     "s": 15
    },
    {
     "l": 2,
     "s": 16
    }
   ],
   "cal": "CH 2.5",
   "learn": {
    "idea": "Two atoms attract (long range) and repel (short range, when electron clouds overlap). Add the two energies to get the net energy curve $E_N(r)$. The bottom of that well is the equilibrium spacing $r_0$, where the net force $F = dE/dr$ is zero, and the depth of the well $E_0$ is the bond energy. Deep wells mean strong bonds: high melting point, high E, low thermal expansion.",
    "when": [
     "You get $E_A = -A/r$ and $E_R = B/r^n$ and are asked for $r_0$ or $E_0$.",
     "A graph of force or energy against separation asks where equilibrium is."
    ],
    "example": {
     "title": "Practice Problem Set #1 Q3: K⁺–Cl⁻",
     "given": "$E_A = -1.436/r$, $E_R = 5.8\\times10^{-6}/r^9$ (eV, nm)",
     "find": "$r_0$ and $E_0$",
     "steps": [
      {
       "say": "Write the net energy and differentiate.",
       "tex": "E_N = -\\frac{A}{r} + \\frac{B}{r^n},\\qquad \\frac{dE_N}{dr} = \\frac{A}{r^2} - \\frac{nB}{r^{n+1}}"
      },
      {
       "say": "Set the derivative to zero (that is the F = 0 condition) and solve for r.",
       "tex": "r_0 = \\left(\\frac{nB}{A}\\right)^{1/(n-1)} = \\left(\\frac{9\\times5.8\\times10^{-6}}{1.436}\\right)^{1/8} = 0.279\\ \\text{nm}"
      },
      {
       "say": "Put r₀ back into E_N.",
       "tex": "E_0 = -\\frac{1.436}{0.279} + \\frac{5.8\\times10^{-6}}{0.279^9} = -5.15 + 0.57 = -4.58\\ \\text{eV}"
      },
      {
       "say": "Check: at equilibrium the repulsive term is exactly A/(n r₀) = 1.436/(9·0.279) = 0.57. ✓"
      }
     ],
     "answer": "r₀ = 0.279 nm, E₀ = −4.58 eV"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Practice Set Q3: E_A = −{A}/r and E_R = {B}/rⁿ with n = {n} (eV, nm). Find r₀.",
      "calc": "bondwell",
      "values": {
       "A": 1.436,
       "B": 0.0000058,
       "n": 9
      },
      "row": "r₀",
      "unit": "nm"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "An ion pair has E_A = −{A}/r and E_R = {B}/rⁿ with n = {n} (eV, nm). Find the equilibrium spacing r₀.",
      "calc": "bondwell",
      "values": {
       "A": 1.436,
       "B": 0.000007,
       "n": 8
      },
      "vary": [
       {
        "key": "B",
        "min": 2,
        "max": 9,
        "dp": 1,
        "mul": 0.000001
       },
       {
        "key": "n",
        "pick": [
         8,
         9,
         10
        ]
       }
      ],
      "row": "r₀",
      "unit": "nm",
      "hint": "r₀ = (nB/A)^(1/(n−1))."
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Same model: E_A = −{A}/r, E_R = {B}/rⁿ, n = {n}. What is the bond energy E₀ (eV)?",
      "calc": "bondwell",
      "values": {
       "A": 1.436,
       "B": 0.0000058,
       "n": 9
      },
      "vary": [
       {
        "key": "B",
        "min": 2,
        "max": 9,
        "dp": 1,
        "mul": 0.000001
       },
       {
        "key": "n",
        "pick": [
         8,
         9,
         10
        ]
       }
      ],
      "row": "E₀",
      "unit": "eV",
      "tol": 0.03,
      "hint": "Find r₀ first, then E_N(r₀). The answer is negative."
     },
     {
      "type": "exam",
      "id": "F24-6"
     },
     {
      "type": "exam",
      "id": "W26-11"
     },
     {
      "type": "exam",
      "id": "W26-30"
     }
    ]
   }
  },
  {
   "id": "ionforce",
   "topic": "bondcurve",
   "name": "Coulomb attraction between two ions",
   "sheet": false,
   "calc": "ionforce",
   "tex": "F_A = \\frac{|Z_1||Z_2|\\,e^2}{4\\pi\\varepsilon_0 r^2},\\qquad F_R = -F_A \\text{ at } r_0",
   "meaning": "Attractive force between ions of charge Z₁e and Z₂e; at equilibrium the repulsive force balances it.",
   "vars": [
    [
     "Z",
     "ion valence (K⁺ = 1, O²⁻ = 2)",
     "—"
    ],
    [
     "r",
     "centre-to-centre distance",
     "nm"
    ],
    [
     "e,\\ \\varepsilon_0",
     "1.602×10⁻¹⁹ C, 8.85×10⁻¹² F/m",
     ""
    ]
   ],
   "presets": [
    {
     "label": "Practice Set #1 Q4 — K⁺ & O²⁻ at 1.5 nm",
     "from": "PPS1-4",
     "values": {
      "z1": 1,
      "z2": 2,
      "r": 1.5
     }
    },
    {
     "label": "Callister Ex 2.2 — K⁺ & Br⁻ touching (0.334 nm)",
     "values": {
      "z1": 1,
      "z2": 1,
      "r": 0.334
     }
    }
   ],
   "steps": [
    "Convert r to metres.",
    "Multiply the charges, divide by 4πε₀r².",
    "At equilibrium F_R has the same size and the opposite sign."
   ],
   "traps": [
    "Using r in nm without converting (×10⁻⁹)."
   ],
   "seen": [
    "PPS1-4"
   ],
   "lec": [
    {
     "l": 2,
     "s": 15
    }
   ],
   "cal": "CH 2.5, Ex 2.2",
   "learn": {
    "idea": "Ions attract like point charges (Coulomb’s law). The force grows with the charges and falls with the square of the distance. At the equilibrium spacing the repulsive force exactly cancels it, so $F_R = -F_A$; that is how “find the repulsive force at equilibrium” questions are answered without knowing the repulsion law.",
    "when": [
     "Two ions with given charges and a centre-to-centre distance (or two radii that touch: r = r₁ + r₂).",
     "“Force of attraction” or “repulsive force at the equilibrium separation”."
    ],
    "example": {
     "title": "Practice Problem Set #1 Q4: K⁺ and O²⁻ at 1.5 nm",
     "given": "$|Z_1| = 1$, $|Z_2| = 2$, $r = 1.5$ nm",
     "find": "$F_A$, and $F_R$ if this is $r_0$",
     "steps": [
      {
       "say": "Convert r to metres.",
       "tex": "r = 1.5\\times10^{-9}\\ \\text{m}"
      },
      {
       "say": "Coulomb attraction.",
       "tex": "F_A = \\frac{|Z_1||Z_2|e^2}{4\\pi\\varepsilon_0r^2} = \\frac{(1)(2)(1.602\\times10^{-19})^2}{4\\pi(8.85\\times10^{-12})(1.5\\times10^{-9})^2} = 2.05\\times10^{-10}\\ \\text{N}"
      },
      {
       "say": "At equilibrium the net force is zero.",
       "tex": "F_R = -F_A = -2.05\\times10^{-10}\\ \\text{N}"
      }
     ],
     "answer": "F_A = 2.05×10⁻¹⁰ N; F_R = −2.05×10⁻¹⁰ N"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Practice Set Q4: force of attraction between K⁺ and O²⁻ whose centres are {r} nm apart?",
      "calc": "ionforce",
      "values": {
       "z1": 1,
       "z2": 2,
       "r": 1.5
      },
      "row": "F_A (attractive)",
      "unit": "N"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "An ion of charge +{z1} and an ion of charge −{z2} have centres {r} nm apart. Attractive force?",
      "calc": "ionforce",
      "values": {
       "z1": 1,
       "z2": 1,
       "r": 0.5
      },
      "vary": [
       {
        "key": "z1",
        "pick": [
         1,
         2
        ]
       },
       {
        "key": "z2",
        "pick": [
         1,
         2,
         3
        ]
       },
       {
        "key": "r",
        "min": 0.25,
        "max": 2,
        "dp": 2
       }
      ],
      "row": "F_A (attractive)",
      "unit": "N",
      "hint": "Convert nm to m before squaring."
     },
     {
      "type": "calc",
      "badge": "textbook",
      "q": "Callister Ex 2.2: K⁺ (r = 0.138 nm) and Br⁻ (r = 0.196 nm) just touch, so r = {r} nm. Attractive force?",
      "calc": "ionforce",
      "values": {
       "z1": 1,
       "z2": 1,
       "r": 0.334
      },
      "row": "F_A (attractive)",
      "unit": "N"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "At the equilibrium separation r₀, the repulsive force between two ions is…",
      "opts": [
       "zero",
       "equal in size and opposite in sign to the attractive force",
       "twice the attractive force",
       "equal to the bond energy"
      ],
      "ans": "b",
      "why": "F_N = F_A + F_R = 0 at r₀."
     }
    ]
   }
  },
  {
   "id": "atoms",
   "topic": "atomsmass",
   "name": "Number of atoms from mass",
   "sheet": false,
   "calc": "atoms",
   "tex": "N = \\frac{m\\,N_A}{A}\\qquad\\left(m = \\rho V\\right)",
   "meaning": "Moles × Avogadro. Use the density to get the mass from a shape.",
   "vars": [
    [
     "m",
     "mass",
     "g"
    ],
    [
     "A",
     "atomic weight",
     "g/mol"
    ],
    [
     "N_A",
     "6.022×10²³",
     "atoms/mol"
    ]
   ],
   "presets": [
    {
     "label": "Old final Q6 — 15 g Cu",
     "from": "FX-6",
     "values": {
      "mode": "mass",
      "mass": 15,
      "A": 63.54
     }
    },
    {
     "label": "Practice Set #1 Q5a — gold wire",
     "from": "PPS1-5",
     "values": {
      "mode": "wire",
      "d": 0.7,
      "L": 8,
      "rho": 19.3,
      "A": 196.97
     }
    },
    {
     "label": "Lecture 2 s13 — 6 g of carbon",
     "values": {
      "mode": "mass",
      "mass": 6,
      "A": 12.01
     }
    }
   ],
   "steps": [
    "Get the mass (ρ × volume if a shape is given; keep cm with g/cm³).",
    "Divide by A for moles.",
    "Multiply by N_A."
   ],
   "traps": [
    "Wire volume uses the RADIUS: π(d/2)²L."
   ],
   "seen": [
    "FX-6",
    "PPS1-5"
   ],
   "lec": [
    {
     "l": 2,
     "s": 12
    },
    {
     "l": 2,
     "s": 13
    }
   ],
   "cal": "CH 2.2",
   "learn": {
    "idea": "Avogadro’s number links the scale you can weigh (grams) to the scale of atoms. One mole of an element weighs $A$ grams and holds $6.022\\times10^{23}$ atoms, so atoms $= (m/A)\\,N_A$. If the question gives a shape, get the mass from density × volume first.",
    "when": [
     "“How many atoms in … g / in a wire / in a ton…”",
     "Any time you need atoms per volume (it is the first step of the vacancy formula, too)."
    ],
    "example": {
     "title": "Practice Problem Set #1 Q5a: gold wire",
     "given": "d = 0.70 mm, L = 8.0 cm, ρ = 19.3 g/cm³, A = 196.97 g/mol",
     "find": "number of atoms",
     "steps": [
      {
       "say": "Volume of a cylinder, in cm (radius = 0.035 cm).",
       "tex": "V = \\pi r^2L = \\pi(0.035)^2(8.0) = 0.0308\\ \\text{cm}^3"
      },
      {
       "say": "Mass from density.",
       "tex": "m = \\rho V = 19.3\\times0.0308 = 0.594\\ \\text{g}"
      },
      {
       "say": "Moles, then atoms.",
       "tex": "N = \\frac{0.594}{196.97}\\times6.022\\times10^{23} = 1.82\\times10^{21}\\ \\text{atoms}"
      }
     ],
     "answer": "1.82×10²¹ atoms"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "FX-6"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "How many atoms are in {mass} g of iron (A = {A} g/mol)?",
      "calc": "atoms",
      "values": {
       "mode": "mass",
       "mass": 100,
       "A": 55.85
      },
      "vary": [
       {
        "key": "mass",
        "min": 2,
        "max": 500,
        "dp": 0
       }
      ],
      "row": "Atoms",
      "unit": "atoms"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A gold wire (ρ = {rho} g/cm³, A = {A} g/mol) is {d} mm in diameter and {L} cm long. How many atoms does it contain?",
      "calc": "atoms",
      "values": {
       "mode": "wire",
       "d": 0.7,
       "L": 8,
       "rho": 19.3,
       "A": 196.97
      },
      "vary": [
       {
        "key": "d",
        "min": 0.3,
        "max": 1.5,
        "dp": 2
       },
       {
        "key": "L",
        "min": 2,
        "max": 20,
        "dp": 0
       }
      ],
      "row": "Atoms",
      "unit": "atoms",
      "hint": "Use the radius (d/2) in cm."
     },
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Lecture 2 slide 13: how many atoms in {mass} g of carbon (A = {A})?",
      "calc": "atoms",
      "values": {
       "mode": "mass",
       "mass": 6,
       "A": 12.01
      },
      "row": "Atoms",
      "unit": "atoms"
     }
    ]
   }
  },
  {
   "id": "cubic",
   "topic": "cells",
   "name": "Unit-cell geometry: a(R), n, CN, APF",
   "sheet": true,
   "calc": "cubic",
   "tex": "a_{SC} = 2R,\\quad a_{BCC} = \\frac{4R}{\\sqrt3},\\quad a_{FCC} = 2R\\sqrt2,\\qquad APF = \\frac{n\\cdot\\frac43\\pi R^3}{a^3}",
   "meaning": "Where the atoms touch sets a; the number of atoms per cell sets the packing.",
   "vars": [
    [
     "n",
     "atoms per cell: SC 1, BCC 2, FCC 4, HCP 6",
     "—"
    ],
    [
     "CN",
     "coordination number: 6, 8, 12, 12",
     "—"
    ]
   ],
   "presets": [
    {
     "label": "A25 Q15 / W26 Q5 — APF of BCC",
     "from": "W26-5",
     "values": {
      "struct": "BCC",
      "R": 0.124,
      "a": ""
     }
    },
    {
     "label": "A25 Q15 / W26 Q5 — APF of FCC",
     "from": "A25-15",
     "values": {
      "struct": "FCC",
      "R": 0.128,
      "a": ""
     }
    },
    {
     "label": "F24 Q4 — vanadium cells per mm³ (a = 0.304 nm)",
     "from": "F24-4",
     "values": {
      "struct": "BCC",
      "R": 0.136,
      "a": 0.304
     }
    }
   ],
   "steps": [
    "FCC atoms touch along the face diagonal (4R = a√2).",
    "BCC atoms touch along the body diagonal (4R = a√3).",
    "APF depends only on the structure, not on R."
   ],
   "traps": [
    "Mixing the FCC and BCC a(R) relations.",
    "Counting corner atoms as whole atoms."
   ],
   "seen": [
    "A25-15",
    "W26-5",
    "F24-4",
    "F24-26",
    "F24-30",
    "A25-25"
   ],
   "lec": [
    {
     "l": 4,
     "s": 10
    },
    {
     "l": 4,
     "s": 12
    },
    {
     "l": 5,
     "s": 2
    },
    {
     "l": 5,
     "s": 3
    }
   ],
   "cal": "CH 3.4, Ex 3.1–3.2",
   "learn": {
    "idea": "Every cubic-cell number comes from one picture: where do the atoms touch? In SC they touch along the edge ($a = 2R$), in BCC along the body diagonal ($4R = a\\sqrt3$), in FCC along the face diagonal ($4R = a\\sqrt2$). Count the atoms in the cell (corner ⅛, face ½, body 1), and APF is the volume of those spheres divided by $a^3$.",
    "when": [
     "APF, atoms per cell, coordination number, a from R (or R from a).",
     "Unit cells per volume (just 1/a³)."
    ],
    "example": {
     "title": "Derive the BCC APF (the A25/W26 answer)",
     "given": "BCC: 2 atoms/cell, atoms touch along the body diagonal",
     "find": "APF",
     "steps": [
      {
       "say": "Body diagonal: four radii long.",
       "tex": "a\\sqrt3 = 4R \\Rightarrow a = \\frac{4R}{\\sqrt3}"
      },
      {
       "say": "Count atoms: 8 corners × ⅛ + 1 centre.",
       "tex": "n = 8\\cdot\\tfrac18 + 1 = 2"
      },
      {
       "say": "Volume of atoms over volume of cell. R cancels.",
       "tex": "APF = \\frac{2\\cdot\\frac43\\pi R^3}{(4R/\\sqrt3)^3} = \\frac{\\sqrt3\\,\\pi}{8} = 0.68"
      },
      {
       "say": "FCC by the same route: n = 4, a = 2R√2 → APF = π/(3√2) = 0.74. HCP is also 0.74."
      }
     ],
     "answer": "APF(BCC) = 0.68; FCC = HCP = 0.74"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W26-5"
     },
     {
      "type": "exam",
      "id": "A25-25"
     },
     {
      "type": "exam",
      "id": "F24-30"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Vanadium (BCC) has a lattice constant of {a} nm. How many unit cells are in 1 mm³?",
      "calc": "cubic",
      "values": {
       "struct": "BCC",
       "R": 0.13,
       "a": 0.304
      },
      "vary": [
       {
        "key": "a",
        "min": 0.28,
        "max": 0.42,
        "dp": 3
       }
      ],
      "row": "Unit cells per mm³",
      "unit": "cells"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A {struct} metal has atomic radius R = {R} nm. What is its lattice parameter a?",
      "calc": "cubic",
      "values": {
       "struct": "FCC",
       "R": 0.128,
       "a": ""
      },
      "vary": [
       {
        "key": "struct",
        "pick": [
         "BCC",
         "FCC"
        ]
       },
       {
        "key": "R",
        "min": 0.12,
        "max": 0.15,
        "dp": 3
       }
      ],
      "row": "a",
      "unit": "nm",
      "hint": "FCC: a = 2R√2. BCC: a = 4R/√3."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "The coordination number of FCC is…",
      "opts": [
       "6",
       "8",
       "12",
       "4"
      ],
      "ans": "c",
      "why": "Each atom touches 12 neighbours (4 in its own plane, 4 above, 4 below)."
     }
    ]
   }
  },
  {
   "id": "density",
   "topic": "density",
   "name": "Theoretical density",
   "sheet": true,
   "calc": "density",
   "tex": "\\rho = \\frac{n\\,A}{V_C\\,N_A},\\qquad V_C = a^3",
   "meaning": "Mass of the atoms in one cell ÷ volume of the cell. Rearrange for a when ρ is given.",
   "vars": [
    [
     "n",
     "atoms per cell",
     "—"
    ],
    [
     "A",
     "atomic weight",
     "g/mol"
    ],
    [
     "V_C",
     "cell volume",
     "cm³"
    ],
    [
     "N_A",
     "6.022×10²³",
     "/mol"
    ]
   ],
   "presets": [
    {
     "label": "A25 Q8 — tungsten (BCC, R = 0.137 nm)",
     "from": "A25-8",
     "values": {
      "mode": "rho",
      "struct": "BCC",
      "R": 0.137,
      "A": 183.85
     }
    },
    {
     "label": "F24 Q17 — thorium (FCC, ρ = 11.72) → a",
     "from": "F24-17",
     "values": {
      "mode": "a",
      "struct": "FCC",
      "rho": 11.72,
      "A": 232
     }
    },
    {
     "label": "Lecture 5 s8 / Ex 3.4 — copper (FCC, R = 0.128 nm)",
     "values": {
      "mode": "rho",
      "struct": "FCC",
      "R": 0.128,
      "A": 63.5
     }
    }
   ],
   "steps": [
    "Pick n from the structure.",
    "a from R (nm → cm: ×10⁻⁷), V_C = a³.",
    "ρ = nA/(V_C N_A). For the inverse: a = ∛(nA/(ρN_A))."
   ],
   "traps": [
    "A n = 1 or n = 4 answer is always among the options for a BCC metal.",
    "nm³ → cm³ is ×10⁻²¹."
   ],
   "seen": [
    "A25-8",
    "F24-17",
    "F17-16"
   ],
   "lec": [
    {
     "l": 5,
     "s": 8
    }
   ],
   "cal": "CH 3.5, Ex 3.4",
   "learn": {
    "idea": "Density is mass over volume, applied to one unit cell: the mass of the $n$ atoms inside ($nA/N_A$) divided by the cell volume $a^3$. The trick is units: with ρ in g/cm³, $a$ must be in cm (1 nm = 10⁻⁷ cm).",
    "when": [
     "Structure + R + A given → ρ.",
     "ρ + A + structure given → a (and then R).",
     "Comparing two metals’ atomic weights or densities."
    ],
    "example": {
     "title": "A25 Q8: tungsten",
     "given": "BCC, R = 0.137 nm, A = 183.85 g/mol",
     "find": "ρ",
     "steps": [
      {
       "say": "BCC: n = 2 and a from the body diagonal.",
       "tex": "a = \\frac{4R}{\\sqrt3} = \\frac{4(0.137)}{\\sqrt3} = 0.3164\\ \\text{nm} = 3.164\\times10^{-8}\\ \\text{cm}"
      },
      {
       "say": "Cell volume.",
       "tex": "V_C = a^3 = 3.167\\times10^{-23}\\ \\text{cm}^3"
      },
      {
       "say": "Density.",
       "tex": "\\rho = \\frac{nA}{V_CN_A} = \\frac{2(183.85)}{(3.167\\times10^{-23})(6.022\\times10^{23})} = 19.3\\ \\text{g/cm}^3"
      },
      {
       "say": "Sanity check against the wrong options: n = 1 gives 9.65 and n = 4 gives 38.6. Both are on the paper."
      }
     ],
     "answer": "ρ = 19.3 g/cm³ (option d)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "A25-8"
     },
     {
      "type": "exam",
      "id": "F24-17"
     },
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Lecture 5 slide 8: copper is FCC with R = {R} nm and A = {A} g/mol. Theoretical density?",
      "calc": "density",
      "values": {
       "mode": "rho",
       "struct": "FCC",
       "R": 0.128,
       "A": 63.5
      },
      "row": "ρ",
      "unit": "g/cm³"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A {struct} metal has R = {R} nm and A = {A} g/mol. Theoretical density?",
      "calc": "density",
      "values": {
       "mode": "rho",
       "struct": "BCC",
       "R": 0.124,
       "A": 55.85
      },
      "vary": [
       {
        "key": "struct",
        "pick": [
         "BCC",
         "FCC"
        ]
       },
       {
        "key": "R",
        "min": 0.12,
        "max": 0.16,
        "dp": 3
       },
       {
        "key": "A",
        "min": 40,
        "max": 200,
        "dp": 1
       }
      ],
      "row": "ρ",
      "unit": "g/cm³"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A {struct} metal has ρ = {rho} g/cm³ and A = {A} g/mol. Find the lattice parameter a in nm.",
      "calc": "density",
      "values": {
       "mode": "a",
       "struct": "FCC",
       "rho": 11.72,
       "A": 232
      },
      "vary": [
       {
        "key": "struct",
        "pick": [
         "BCC",
         "FCC"
        ]
       },
       {
        "key": "rho",
        "min": 6,
        "max": 20,
        "dp": 2
       },
       {
        "key": "A",
        "min": 40,
        "max": 240,
        "dp": 1
       }
      ],
      "row": "a",
      "unit": "nm",
      "hint": "a = ∛(nA/(ρN_A)) gives cm; ×10⁷ for nm."
     },
     {
      "type": "exam",
      "id": "F17-16"
     }
    ]
   }
  },
  {
   "id": "direction",
   "topic": "directions",
   "name": "Direction indices [uvw]",
   "sheet": false,
   "calc": "direction",
   "tex": "[u\\,v\\,w] \\propto \\left(x_2 - x_1,\\; y_2 - y_1,\\; z_2 - z_1\\right)\\ \\text{cleared to smallest integers}",
   "meaning": "Head minus tail, in units of a, b, c; clear fractions; bar the negatives.",
   "vars": [
    [
     "(x₁,y₁,z₁)",
     "tail coordinates",
     "unit-cell fractions"
    ],
    [
     "(x₂,y₂,z₂)",
     "head coordinates",
     "unit-cell fractions"
    ]
   ],
   "presets": [
    {
     "label": "Callister Ex 3.7 — tail (1,0,0) → head (0,1,½)",
     "values": {
      "tx": "1",
      "ty": "0",
      "tz": "0",
      "hx": "0",
      "hy": "1",
      "hz": "1/2"
     }
    },
    {
     "label": "F24 Q14 — direction I (Δ = −1, −1, −½)",
     "from": "F24-14",
     "values": {
      "tx": "1",
      "ty": "1",
      "tz": "1/2",
      "hx": "0",
      "hy": "0",
      "hz": "0"
     }
    },
    {
     "label": "Face diagonal (F24 Q1)",
     "from": "F24-1",
     "values": {
      "tx": "0",
      "ty": "0",
      "tz": "0",
      "hx": "1",
      "hy": "1",
      "hz": "0"
     }
    }
   ],
   "steps": [
    "Write tail and head coordinates (fractions of a).",
    "Head − tail.",
    "Multiply by the common denominator, divide by any common factor.",
    "Negative → bar. Square brackets [ ]."
   ],
   "traps": [
    "Tail − head gives the opposite direction (all signs flipped).",
    "Family of directions uses ⟨ ⟩."
   ],
   "seen": [
    "F24-1",
    "F24-14",
    "W26-1",
    "W26-2"
   ],
   "lec": [
    {
     "l": 5,
     "s": 11
    },
    {
     "l": 5,
     "s": 13
    },
    {
     "l": 5,
     "s": 15
    }
   ],
   "cal": "CH 3.9, Ex 3.7",
   "learn": {
    "idea": "A crystallographic direction is a vector. Write where it starts (tail) and ends (head) as fractions of the cell edges, subtract head − tail, then scale the three numbers to the smallest whole numbers. Negative numbers get a bar. Square brackets $[uvw]$ for one direction, angle brackets $\\langle uvw\\rangle$ for the whole family.",
    "when": [
     "A vector is drawn in a cell, or tail/head coordinates are given.",
     "A family question (“face diagonals are…”)."
    ],
    "example": {
     "title": "Callister Ex 3.7",
     "given": "tail (1, 0, 0), head (0, 1, ½)",
     "find": "[uvw]",
     "steps": [
      {
       "say": "Head − tail, coordinate by coordinate.",
       "tex": "(0-1,\\ 1-0,\\ \\tfrac12-0) = (-1,\\ 1,\\ \\tfrac12)"
      },
      {
       "say": "Clear the fraction: multiply everything by 2.",
       "tex": "(-2,\\ 2,\\ 1)"
      },
      {
       "say": "Bar the negative and use square brackets.",
       "tex": "[\\bar{2}21]"
      }
     ],
     "answer": "$[\\bar{2}21]$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F24-1"
     },
     {
      "type": "exam",
      "id": "F24-14"
     },
     {
      "type": "calc",
      "badge": "textbook",
      "q": "Callister Ex 3.7: tail ({tx}, {ty}, {tz}), head ({hx}, {hy}, {hz}). Indices of the direction?",
      "calc": "direction",
      "values": {
       "tx": "1",
       "ty": "0",
       "tz": "0",
       "hx": "0",
       "hy": "1",
       "hz": "1/2"
      },
      "row": "Direction",
      "unit": ""
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A vector starts at ({tx}, {ty}, {tz}) and ends at ({hx}, {hy}, {hz}). What are its direction indices?",
      "calc": "direction",
      "values": {
       "tx": "1",
       "ty": "0",
       "tz": "1/4",
       "hx": "1/4",
       "hy": "1",
       "hz": "1"
      },
      "vary": [
       {
        "key": "tx",
        "pick": [
         "0",
         "1",
         "1/2"
        ]
       },
       {
        "key": "ty",
        "pick": [
         "0",
         "1",
         "1/3"
        ]
       },
       {
        "key": "tz",
        "pick": [
         "0",
         "1",
         "1/4",
         "1/2"
        ]
       },
       {
        "key": "hx",
        "pick": [
         "0",
         "1",
         "1/4",
         "1/2"
        ]
       },
       {
        "key": "hy",
        "pick": [
         "0",
         "1",
         "2/3"
        ]
       },
       {
        "key": "hz",
        "pick": [
         "0",
         "1",
         "3/4"
        ]
       }
      ],
      "row": "Direction",
      "unit": "",
      "hint": "Type the three integers, e.g. -2 2 1."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Which notation means the whole FAMILY of equivalent directions?",
      "opts": [
       "[110]",
       "(110)",
       "⟨110⟩",
       "{110}"
      ],
      "ans": "c",
      "why": "[ ] one direction, ⟨ ⟩ family of directions, ( ) one plane, { } family of planes."
     }
    ]
   }
  },
  {
   "id": "plane",
   "topic": "planes",
   "name": "Plane (Miller) indices (hkl)",
   "sheet": false,
   "calc": "plane",
   "tex": "(h\\,k\\,l) \\propto \\left(\\frac{1}{x_{int}},\\ \\frac{1}{y_{int}},\\ \\frac{1}{z_{int}}\\right),\\qquad \\frac{1}{\\infty} = 0",
   "meaning": "Reciprocals of the intercepts (in units of a), cleared to integers.",
   "vars": [
    [
     "intercepts",
     "where the plane cuts x, y, z (∞ if parallel)",
     "unit-cell fractions"
    ]
   ],
   "presets": [
    {
     "label": "Final 2017 Q1 — intercepts 1, ∞, ½",
     "from": "F17-1",
     "values": {
      "x": "1",
      "y": "inf",
      "z": "1/2"
     }
    },
    {
     "label": "Callister Ex 3.10 — ∞, −1, ½",
     "values": {
      "x": "inf",
      "y": "-1",
      "z": "1/2"
     }
    },
    {
     "label": "F24 Q13 — plane K: −1, −1, 1",
     "from": "F24-13",
     "values": {
      "x": "-1",
      "y": "-1",
      "z": "1"
     }
    }
   ],
   "steps": [
    "If the plane passes through the origin, move the origin to an adjacent corner.",
    "Read the three intercepts (∞ if parallel).",
    "Take reciprocals, clear fractions, bar the negatives. Round brackets ( )."
   ],
   "traps": [
    "Using the intercepts themselves instead of their reciprocals.",
    "Not moving the origin (old final T/F: the plane must NOT pass through it)."
   ],
   "seen": [
    "F24-13",
    "A25-3",
    "A25-9",
    "W26-3",
    "W26-4",
    "F17-1",
    "FX-31"
   ],
   "lec": [
    {
     "l": 5,
     "s": 18
    },
    {
     "l": 5,
     "s": 19
    }
   ],
   "cal": "CH 3.10, Ex 3.10",
   "learn": {
    "idea": "A plane is labelled by where it cuts the three axes. Take the intercepts (∞ if the plane is parallel to that axis), flip each into its reciprocal, and clear fractions. If the plane passes through the origin you cannot read intercepts, so move the origin to a neighbouring corner first. Round brackets $(hkl)$.",
    "when": [
     "A shaded plane in a drawn cell.",
     "Intercepts given; or T/F about the method (origin, perpendicularity)."
    ],
    "example": {
     "title": "Callister Ex 3.10",
     "given": "The plane passes through the chosen origin",
     "find": "(hkl)",
     "steps": [
      {
       "say": "Move the origin one cell along y (new origin O′). Now read the intercepts.",
       "tex": "x = \\infty,\\quad y = -1,\\quad z = \\tfrac12"
      },
      {
       "say": "Reciprocals (1/∞ = 0).",
       "tex": "\\left(0,\\ -1,\\ 2\\right)"
      },
      {
       "say": "Already integers: bar the negative.",
       "tex": "(0\\bar{1}2)"
      }
     ],
     "answer": "$(0\\bar{1}2)$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F17-1"
     },
     {
      "type": "exam",
      "id": "F24-13"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A plane cuts the axes at x = {x}, y = {y}, z = {z} (∞ = parallel). Miller indices?",
      "calc": "plane",
      "values": {
       "x": "1",
       "y": "inf",
       "z": "1/2"
      },
      "vary": [
       {
        "keys": [
         "x",
         "y",
         "z"
        ],
        "pick": [
         [
          "1",
          "1",
          "1"
         ],
         [
          "1/2",
          "inf",
          "1"
         ],
         [
          "inf",
          "-1",
          "1/4"
         ],
         [
          "inf",
          "-1",
          "1/3"
         ],
         [
          "1",
          "-1",
          "2/3"
         ],
         [
          "-1",
          "1/2",
          "inf"
         ],
         [
          "1/3",
          "1/2",
          "1"
         ],
         [
          "1",
          "1",
          "1/2"
         ],
         [
          "2/3",
          "inf",
          "1/2"
         ],
         [
          "-1/2",
          "1",
          "inf"
         ]
        ]
       }
      ],
      "row": "Plane",
      "unit": "",
      "anySign": true,
      "hint": "Reciprocals, then clear fractions. Type e.g. 0 -1 4."
     },
     {
      "type": "exam",
      "id": "FX-31"
     },
     {
      "type": "exam",
      "id": "W26-29"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "A plane is parallel to the x-axis. Its h index is…",
      "opts": [
       "1",
       "0",
       "∞",
       "−1"
      ],
      "ans": "b",
      "why": "Intercept ∞ → reciprocal 1/∞ = 0."
     }
    ]
   }
  },
  {
   "id": "pd",
   "topic": "ldpd",
   "name": "Linear & planar density",
   "sheet": true,
   "calc": "pd",
   "tex": "LD = \\frac{n_{\\text{atoms centred on the vector}}}{L_{\\text{vector}}},\\qquad PD = \\frac{n_{\\text{atoms centred on the plane}}}{A_{\\text{plane}}}",
   "meaning": "Count only the fraction of each atom whose CENTRE lies on the line/plane, then divide by the length/area written in R.",
   "vars": [
    [
     "n",
     "atoms centred on the line / plane",
     "—"
    ],
    [
     "L, A",
     "length / area, in terms of R",
     "nm, nm²"
    ]
   ],
   "presets": [
    {
     "label": "W26 Q6 — FCC (100)",
     "from": "W26-6",
     "values": {
      "struct": "FCC",
      "kind": "plane",
      "hkl": "100",
      "R": 0.128,
      "a": ""
     }
    },
    {
     "label": "A25 Q4 — BCC (110)",
     "from": "A25-4",
     "values": {
      "struct": "BCC",
      "kind": "plane",
      "hkl": "110",
      "R": 0.124,
      "a": ""
     }
    },
    {
     "label": "Lecture 6 s6 — FCC (110)",
     "values": {
      "struct": "FCC",
      "kind": "plane",
      "hkl": "110",
      "R": 0.128,
      "a": ""
     }
    },
    {
     "label": "Final 2017 Q17 — Cu face, a = 0.361 nm",
     "from": "F17-17",
     "values": {
      "struct": "FCC",
      "kind": "plane",
      "hkl": "100",
      "R": 0.128,
      "a": 0.361
     }
    }
   ],
   "steps": [
    "Sketch the plane inside the cell and mark which atom centres lie on it.",
    "Corner of a square face contributes ¼, face centre 1 (for a (100) face).",
    "Write the area with a, then replace a with R."
   ],
   "traps": [
    "Answering FCC (110) (the Lecture 6 slide 6 example) when (100) is asked.",
    "BCC (111): the body-centre atom is NOT on the plane."
   ],
   "seen": [
    "A25-4",
    "W26-6",
    "F17-17"
   ],
   "lec": [
    {
     "l": 6,
     "s": 4
    },
    {
     "l": 6,
     "s": 5
    },
    {
     "l": 6,
     "s": 6
    }
   ],
   "cal": "CH 3.11",
   "learn": {
    "idea": "Planar density counts how many atoms are centred on a plane per unit area; linear density counts atoms per unit length along a direction. Only the part of an atom whose CENTRE lies on the plane counts (a corner of a square face contributes ¼). Write the area with $a$, then swap $a$ for $R$. Slip happens on the densest planes along the densest directions, which is why the course cares.",
    "when": [
     "“Planar density of (hkl) in terms of R”.",
     "Atoms per nm² on a face, or atoms per nm along a direction."
    ],
    "example": {
     "title": "Lecture 6 slide 6: FCC (110), then the W26 twist",
     "given": "FCC, a = 2R√2",
     "find": "PD(110), then PD(100)",
     "steps": [
      {
       "say": "(110) is a rectangle a × a√2 = 2R√2 × 4R. On it: 4 corners × ¼ + 2 face-centres × ½ = 2 atoms.",
       "tex": "A_{110} = (4R)(2R\\sqrt2) = 8\\sqrt2R^2"
      },
      {
       "say": "Planar density of (110).",
       "tex": "PD_{110} = \\frac{2}{8\\sqrt2R^2} = \\frac{1}{4\\sqrt2R^2}"
      },
      {
       "say": "W26 asked (100) instead: the cube face holds 4 × ¼ + 1 centre = 2 atoms on a² = 8R².",
       "tex": "PD_{100} = \\frac{2}{8R^2} = \\frac{1}{4R^2}"
      },
      {
       "say": "Same method, different plane. The slide’s answer was offered as a distractor."
      }
     ],
     "answer": "FCC: (110) = 1/(4√2R²), (100) = 1/(4R²)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W26-6"
     },
     {
      "type": "exam",
      "id": "A25-4"
     },
     {
      "type": "exam",
      "id": "F17-17"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "FCC metal with a = {a} nm. How many atoms per nm² are centred on the (100) face?",
      "calc": "pd",
      "values": {
       "struct": "FCC",
       "kind": "plane",
       "hkl": "100",
       "R": 0.128,
       "a": 0.361
      },
      "vary": [
       {
        "key": "a",
        "min": 0.35,
        "max": 0.42,
        "dp": 3
       }
      ],
      "row": "Numeric",
      "unit": "atoms/nm²"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "{struct} metal with R = {R} nm. Planar density of the ({hkl}) plane, in atoms/nm²?",
      "calc": "pd",
      "values": {
       "struct": "BCC",
       "kind": "plane",
       "hkl": "110",
       "R": 0.124,
       "a": ""
      },
      "vary": [
       {
        "key": "struct",
        "pick": [
         "BCC",
         "FCC"
        ]
       },
       {
        "key": "hkl",
        "pick": [
         "100",
         "110",
         "111"
        ]
       },
       {
        "key": "R",
        "min": 0.12,
        "max": 0.15,
        "dp": 3
       }
      ],
      "row": "Numeric",
      "unit": "atoms/nm²",
      "hint": "Count atoms centred on the plane, area in R."
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "{struct} metal with R = {R} nm. Linear density along [{hkl}] in atoms/nm?",
      "calc": "pd",
      "values": {
       "struct": "FCC",
       "kind": "direction",
       "hkl": "110",
       "R": 0.128,
       "a": ""
      },
      "vary": [
       {
        "key": "struct",
        "pick": [
         "BCC",
         "FCC"
        ]
       },
       {
        "key": "hkl",
        "pick": [
         "100",
         "110",
         "111"
        ]
       },
       {
        "key": "R",
        "min": 0.12,
        "max": 0.15,
        "dp": 3
       }
      ],
      "row": "Numeric",
      "unit": "atoms/nm"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "In BCC, the body-centre atom lies on which of these planes?",
      "opts": [
       "(100)",
       "(110)",
       "(111)",
       "none of them"
      ],
      "ans": "b",
      "why": "The (110) diagonal plane cuts through the cell centre; (100) is a face and (111) passes through three corners only."
     }
    ]
   }
  },
  {
   "id": "bragg",
   "topic": "xrd",
   "name": "Bragg’s law + interplanar spacing",
   "sheet": true,
   "calc": "bragg",
   "tex": "n\\lambda = 2\\,d_{hkl}\\sin\\theta,\\qquad d_{hkl} = \\frac{a}{\\sqrt{h^2+k^2+l^2}}",
   "meaning": "Constructive interference from parallel (hkl) planes. The diffractometer reports 2θ.",
   "vars": [
    [
     "\\lambda",
     "X-ray wavelength",
     "nm"
    ],
    [
     "\\theta",
     "Bragg angle (half of the measured 2θ)",
     "°"
    ],
    [
     "n",
     "order (1 unless stated)",
     "—"
    ]
   ],
   "presets": [
    {
     "label": "F24 Q15 — Pt FCC (113), R = 0.1387 nm",
     "from": "F24-15",
     "values": {
      "mode": "forward",
      "struct": "FCC",
      "R": 0.1387,
      "a": "",
      "h": 1,
      "k": 1,
      "l": 3,
      "lambda": 0.1542,
      "n": 1
     }
    },
    {
     "label": "W26 Q7 — Rh FCC (311), 2θ = 36.12° → R",
     "from": "W26-7",
     "values": {
      "mode": "reverse",
      "struct": "FCC",
      "h": 3,
      "k": 1,
      "l": 1,
      "lambda": 0.0711,
      "n": 1,
      "twoTheta": 36.12
     }
    },
    {
     "label": "Lecture 6 s17 / Ex 3.13 — BCC Fe (220), a = 0.2866 nm",
     "values": {
      "mode": "forward",
      "struct": "BCC",
      "R": 0.124,
      "a": 0.2866,
      "h": 2,
      "k": 2,
      "l": 0,
      "lambda": 0.179,
      "n": 1
     }
    }
   ],
   "steps": [
    "a from R (or given).",
    "d from a and (hkl).",
    "sin θ = nλ/(2d) → θ → report 2θ. Backwards: 2θ → θ → d → a → R."
   ],
   "traps": [
    "Reporting θ when 2θ is asked (A25 T/F 29).",
    "Stopping at d or a when R is asked (W26 options a, d)."
   ],
   "seen": [
    "F24-15",
    "A25-29",
    "W26-7"
   ],
   "lec": [
    {
     "l": 6,
     "s": 10
    },
    {
     "l": 6,
     "s": 15
    },
    {
     "l": 6,
     "s": 17
    }
   ],
   "cal": "CH 3.16, Ex 3.13",
   "learn": {
    "idea": "X-rays reflected from neighbouring parallel planes interfere constructively only when the extra path $2d\\sin\\theta$ is a whole number of wavelengths. The plane spacing in a cubic crystal is $a/\\sqrt{h^2+k^2+l^2}$, so the angle tells you $a$ and therefore $R$. The machine reports $2\\theta$, so halve it before using Bragg’s law.",
    "when": [
     "Structure, R (or a), (hkl) and λ → 2θ.",
     "A measured 2θ → d → a → R (run it backwards)."
    ],
    "example": {
     "title": "Lecture 6 slide 17 / Callister Ex 3.13: BCC iron (220)",
     "given": "a = 0.2866 nm, λ = 0.1790 nm, n = 1",
     "find": "d₂₂₀ and 2θ",
     "steps": [
      {
       "say": "Interplanar spacing.",
       "tex": "d_{220} = \\frac{0.2866}{\\sqrt{2^2+2^2+0^2}} = \\frac{0.2866}{\\sqrt8} = 0.1013\\ \\text{nm}"
      },
      {
       "say": "Bragg’s law for sin θ.",
       "tex": "\\sin\\theta = \\frac{n\\lambda}{2d} = \\frac{0.1790}{2(0.1013)} = 0.883"
      },
      {
       "say": "Angle, then double it.",
       "tex": "\\theta = 62.1^\\circ,\\qquad 2\\theta = 124.1^\\circ"
      },
      {
       "say": "Check the reflection is allowed: BCC needs h + k + l even (2 + 2 + 0 = 4 ✓)."
      }
     ],
     "answer": "d = 0.1013 nm, 2θ ≈ 124°"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F24-15"
     },
     {
      "type": "exam",
      "id": "W26-7"
     },
     {
      "type": "exam",
      "id": "A25-29"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "{struct} metal, R = {R} nm, first-order ({h}{k}{l}) reflection with λ = {lambda} nm. Diffraction angle 2θ?",
      "calc": "bragg",
      "values": {
       "mode": "forward",
       "struct": "FCC",
       "R": 0.1387,
       "a": "",
       "h": 1,
       "k": 1,
       "l": 3,
       "lambda": 0.1542,
       "n": 1
      },
      "vary": [
       {
        "key": "R",
        "min": 0.12,
        "max": 0.145,
        "dp": 4
       },
       {
        "keys": [
         "struct",
         "h",
         "k",
         "l"
        ],
        "pick": [
         [
          "FCC",
          1,
          1,
          1
         ],
         [
          "FCC",
          2,
          0,
          0
         ],
         [
          "FCC",
          2,
          2,
          0
         ],
         [
          "FCC",
          3,
          1,
          1
         ],
         [
          "BCC",
          1,
          1,
          0
         ],
         [
          "BCC",
          2,
          0,
          0
         ],
         [
          "BCC",
          2,
          1,
          1
         ]
        ]
       },
       {
        "key": "lambda",
        "pick": [
         0.1542,
         0.0711
        ]
       }
      ],
      "row": "2θ",
      "unit": "°",
      "hint": "a from R, then d, then sin θ = λ/(2d). Report 2θ."
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "{struct} metal: the first-order ({h}{k}{l}) peak is at 2θ = {twoTheta}° with λ = {lambda} nm. Atomic radius?",
      "calc": "bragg",
      "values": {
       "mode": "reverse",
       "struct": "FCC",
       "h": 3,
       "k": 1,
       "l": 1,
       "lambda": 0.0711,
       "n": 1,
       "twoTheta": 36.12
      },
      "vary": [
       {
        "key": "twoTheta",
        "min": 30,
        "max": 80,
        "dp": 2
       },
       {
        "keys": [
         "struct",
         "h",
         "k",
         "l"
        ],
        "pick": [
         [
          "FCC",
          1,
          1,
          1
         ],
         [
          "FCC",
          2,
          0,
          0
         ],
         [
          "FCC",
          3,
          1,
          1
         ],
         [
          "BCC",
          1,
          1,
          0
         ],
         [
          "BCC",
          2,
          1,
          1
         ]
        ]
       },
       {
        "key": "lambda",
        "pick": [
         0.1542,
         0.0711
        ]
       }
      ],
      "row": "R",
      "unit": "nm",
      "hint": "Halve 2θ → d → a = d√(h²+k²+l²) → R."
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "A BCC metal shows a (111) diffraction peak.",
      "ans": false,
      "why": "BCC reflections need h + k + l even; 1 + 1 + 1 = 3 is odd, so (111) is absent."
     }
    ]
   }
  },
  {
   "id": "vacancy",
   "topic": "vacancy",
   "name": "Equilibrium vacancies",
   "sheet": true,
   "calc": "vacancy",
   "tex": "N_v = N\\exp\\!\\left(-\\frac{Q_v}{kT}\\right),\\qquad N = \\frac{\\rho\\,N_A}{A}",
   "meaning": "Arrhenius: the vacancy fraction grows exponentially with temperature.",
   "vars": [
    [
     "Q_v",
     "vacancy formation energy",
     "eV/atom"
    ],
    [
     "k",
     "8.62×10⁻⁵ eV/(atom·K)",
     ""
    ],
    [
     "T",
     "absolute temperature",
     "K"
    ],
    [
     "N",
     "atomic sites per volume",
     "m⁻³"
    ]
   ],
   "presets": [
    {
     "label": "W26 Q8 / old final Q9 — Cu at 20 °C",
     "from": "W26-8",
     "values": {
      "mode": "nv",
      "Qv": 0.9,
      "T": 20,
      "rho": 8.9,
      "A": 63.5
     }
    },
    {
     "label": "Callister Ex 4.1 — Cu at 1000 °C (ρ = 8.4)",
     "values": {
      "mode": "nv",
      "Qv": 0.9,
      "T": 1000,
      "rho": 8.4,
      "A": 63.5
     }
    },
    {
     "label": "A25 Q17 — Al, fraction 9×10⁻⁵ at 660 °C → Qᵥ",
     "from": "A25-17",
     "values": {
      "mode": "qv",
      "frac": 0.00009,
      "T": 660
     }
    },
    {
     "label": "Final 2017 Q2 — 1.22 eV, 1000 °C, ρ = 6.25, A = 37.4",
     "from": "F17-2",
     "values": {
      "mode": "nv",
      "Qv": 1.22,
      "T": 1000,
      "rho": 6.25,
      "A": 37.4
     }
    },
    {
     "label": "Lecture 7 s8 — lead at 600 K, 0.55 eV (fraction)",
     "values": {
      "mode": "nv",
      "Qv": 0.55,
      "T": 326.85,
      "rho": 11.35,
      "A": 207.2
     }
    }
   ],
   "steps": [
    "T to kelvin.",
    "N = ρN_A/A with ρ in g/m³ (× 10⁶) → sites per m³.",
    "Multiply by exp(−Qᵥ/kT)."
   ],
   "traps": [
    "Old final option (b) is the 1000 °C textbook answer.",
    "k in J/K with Qᵥ in eV."
   ],
   "seen": [
    "W26-8",
    "FX-9",
    "A25-17",
    "F17-2",
    "W26-33"
   ],
   "lec": [
    {
     "l": 7,
     "s": 5
    },
    {
     "l": 7,
     "s": 8
    }
   ],
   "cal": "CH 4.2, Ex 4.1",
   "learn": {
    "idea": "Making a vacancy costs energy $Q_v$; thermal energy $kT$ pays for it. The fraction of empty sites follows an Arrhenius exponential, so it rises steeply with temperature. Total sites per volume come from the density: $N = \\rho N_A/A$. Two steps, every time.",
    "when": [
     "Qᵥ, T, ρ, A given → vacancies per m³.",
     "A vacancy fraction at a temperature given → Qᵥ (take the logarithm)."
    ],
    "example": {
     "title": "Callister Ex 4.1: copper at 1000 °C",
     "given": "Qᵥ = 0.9 eV/atom, A = 63.5 g/mol, ρ = 8.4 g/cm³, T = 1273 K",
     "find": "Nᵥ per m³",
     "steps": [
      {
       "say": "Sites per m³ (ρ in g/m³: ×10⁶).",
       "tex": "N = \\frac{\\rho N_A}{A} = \\frac{(8.4\\times10^6)(6.022\\times10^{23})}{63.5} = 7.97\\times10^{28}\\ \\text{m}^{-3}"
      },
      {
       "say": "The exponent (k in eV/K because Qᵥ is in eV).",
       "tex": "\\frac{Q_v}{kT} = \\frac{0.9}{(8.62\\times10^{-5})(1273)} = 8.20"
      },
      {
       "say": "Vacancies.",
       "tex": "N_v = (7.97\\times10^{28})\\,e^{-8.20} = 2.2\\times10^{25}\\ \\text{m}^{-3}"
      },
      {
       "say": "W26 Q8 is this exact problem at 20 °C (ρ = 8.9): 2.8×10¹³. Recompute; never reuse the textbook number."
      }
     ],
     "answer": "2.2×10²⁵ vacancies/m³ at 1000 °C"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W26-8"
     },
     {
      "type": "exam",
      "id": "A25-17"
     },
     {
      "type": "exam",
      "id": "F17-2"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Copper: Qᵥ = {Qv} eV/atom, A = {A} g/mol, ρ = {rho} g/cm³. Vacancies per m³ at {T} °C?",
      "calc": "vacancy",
      "values": {
       "mode": "nv",
       "Qv": 0.9,
       "T": 1000,
       "rho": 8.4,
       "A": 63.5
      },
      "vary": [
       {
        "key": "T",
        "min": 20,
        "max": 1050,
        "dp": 0
       }
      ],
      "row": "Nᵥ",
      "unit": "m⁻³",
      "tol": 0.04,
      "hint": "T + 273, then N = ρN_A/A with ρ in g/m³."
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "At {T} °C the fraction of vacant sites in a metal is {frac}. Vacancy formation energy Qᵥ (eV)?",
      "calc": "vacancy",
      "values": {
       "mode": "qv",
       "frac": 0.00009,
       "T": 660
      },
      "vary": [
       {
        "key": "T",
        "min": 300,
        "max": 1100,
        "dp": 0
       },
       {
        "key": "frac",
        "min": 1,
        "max": 9,
        "dp": 1,
        "mul": 0.00001
       }
      ],
      "row": "Qᵥ",
      "unit": "eV",
      "hint": "Qᵥ = −kT ln(fraction)."
     },
     {
      "type": "exam",
      "id": "W26-33"
     }
    ]
   }
  },
  {
   "id": "wtat",
   "topic": "solidsol",
   "name": "Weight % → atom %",
   "sheet": true,
   "calc": "wtat",
   "tex": "C_1' = \\frac{C_1A_2}{C_1A_2 + C_2A_1}\\times100",
   "meaning": "Converts a composition by mass into a composition by number of atoms (the sheet prints the mass-fraction definition C₁ = m₁/(m₁+m₂)).",
   "vars": [
    [
     "C₁, C₂",
     "weight percents",
     "wt%"
    ],
    [
     "A₁, A₂",
     "atomic weights",
     "g/mol"
    ]
   ],
   "presets": [
    {
     "label": "Callister Ex 4.4 — 97 wt% Al, 3 wt% Cu",
     "values": {
      "c1": 97,
      "A1": 26.98,
      "A2": 63.55
     }
    }
   ],
   "steps": [
    "Divide each wt% by its atomic weight (moles per 100 g).",
    "Normalise to 100."
   ],
   "traps": [
    "Not tested on the three past midterms, so it is low priority."
   ],
   "seen": [],
   "lec": [
    {
     "l": 7,
     "s": 15
    }
   ],
   "cal": "CH 4.4, Ex 4.4",
   "learn": {
    "idea": "Weight percent counts mass; atom percent counts atoms. A light element contributes more atoms per gram, so its atom % is higher than its weight %. Divide each wt% by its atomic weight (moles in 100 g) and renormalise.",
    "when": [
     "An alloy composition must be expressed in atoms (e.g. to count solute atoms)."
    ],
    "example": {
     "title": "Callister Ex 4.4: 97 wt% Al – 3 wt% Cu",
     "given": "A_Al = 26.98, A_Cu = 63.55 g/mol",
     "find": "at% Al",
     "steps": [
      {
       "say": "Moles per 100 g: Al 97/26.98 = 3.595; Cu 3/63.55 = 0.0472."
      },
      {
       "say": "Normalise.",
       "tex": "C'_{Al} = \\frac{3.595}{3.595 + 0.0472}\\times100 = 98.7\\ \\text{at\\%}"
      }
     ],
     "answer": "98.7 at% Al, 1.3 at% Cu"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "similar",
      "q": "An Al–Cu alloy contains {c1} wt% Al (A_Al = {A1}, A_Cu = {A2}). What is its atom % Al?",
      "calc": "wtat",
      "values": {
       "c1": 97,
       "A1": 26.98,
       "A2": 63.55
      },
      "vary": [
       {
        "key": "c1",
        "min": 70,
        "max": 99,
        "dp": 0
       }
      ],
      "row": "Element 1",
      "unit": "at%"
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "In an Al–Cu alloy the atom % of Al is higher than its weight %.",
      "ans": true,
      "why": "Al is lighter, so each gram of Al holds more atoms."
     }
    ]
   }
  },
  {
   "id": "fick1",
   "topic": "fick1",
   "name": "Fick’s 1st law (steady state)",
   "sheet": true,
   "calc": "fick1",
   "tex": "J = -D\\frac{dC}{dx} \\approx D\\,\\frac{C_{high} - C_{low}}{\\Delta x},\\qquad M = J\\,A\\,t",
   "meaning": "Constant gradient → constant flux. Total mass = flux × area × time.",
   "vars": [
    [
     "D",
     "diffusion coefficient",
     "m²/s"
    ],
    [
     "C",
     "concentration",
     "kg/m³"
    ],
    [
     "\\Delta x",
     "thickness",
     "m"
    ],
    [
     "A, t",
     "area, time",
     "m², s"
    ]
   ],
   "presets": [
    {
     "label": "W26 Q13 — 4 mm Pd, 0.60 m², 2.0/0.5",
     "from": "W26-13",
     "values": {
      "D": 1e-8,
      "C1": 2,
      "C2": 0.5,
      "dx": 4,
      "area": 0.6,
      "hours": 1
     }
    },
    {
     "label": "A25 Q7 — 8 mm Pd, 1.20 m², 2.4/0.6",
     "from": "A25-7",
     "values": {
      "D": 1e-8,
      "C1": 2.4,
      "C2": 0.6,
      "dx": 8,
      "area": 1.2,
      "hours": 1
     }
    },
    {
     "label": "Lecture 9 s9 — 5 mm Pd, 0.20 m², 2.4/0.6",
     "values": {
      "D": 1e-8,
      "C1": 2.4,
      "C2": 0.6,
      "dx": 5,
      "area": 0.2,
      "hours": 1
     }
    },
    {
     "label": "Callister Ex 5.1 — C through Fe plate (Δx = 5 mm, 1.2/0.8)",
     "values": {
      "D": 3e-11,
      "C1": 1.2,
      "C2": 0.8,
      "dx": 5,
      "area": 1,
      "hours": 1
     }
    }
   ],
   "steps": [
    "ΔC (high − low), Δx in metres.",
    "J = DΔC/Δx (kg/m²·s).",
    "× A × t (3600 s per hour)."
   ],
   "traps": [
    "Per-second answer (A25 option a).",
    "Δx left in mm (factor 1000)."
   ],
   "seen": [
    "A25-7",
    "W26-13"
   ],
   "lec": [
    {
     "l": 9,
     "s": 8
    },
    {
     "l": 9,
     "s": 9
    },
    {
     "l": 9,
     "s": 11
    }
   ],
   "cal": "CH 5.3, Ex 5.1",
   "learn": {
    "idea": "In steady state the concentration profile through a membrane is a straight line and never changes, so the flux $J$ (mass per area per time) is constant: $J = D\\,\\Delta C/\\Delta x$. Multiply by the area and the time to get the total mass. This is exactly how a palladium sheet purifies hydrogen.",
    "when": [
     "A sheet/plate/membrane with two fixed concentrations and “steady state”.",
     "“kg per hour through…”, “diffusion flux”."
    ],
    "example": {
     "title": "Lecture 9 slide 9: hydrogen through palladium",
     "given": "Δx = 5 mm, A = 0.20 m², D = 1.0×10⁻⁸ m²/s, C = 2.4 and 0.6 kg/m³",
     "find": "kg of H₂ per hour",
     "steps": [
      {
       "say": "Thickness in metres.",
       "tex": "\\Delta x = 5\\times10^{-3}\\ \\text{m}"
      },
      {
       "say": "Flux.",
       "tex": "J = D\\frac{C_1 - C_2}{\\Delta x} = (1.0\\times10^{-8})\\frac{2.4 - 0.6}{5\\times10^{-3}} = 3.6\\times10^{-6}\\ \\text{kg/m}^2\\text{s}"
      },
      {
       "say": "Total per hour.",
       "tex": "M = JAt = (3.6\\times10^{-6})(0.20)(3600) = 2.6\\times10^{-3}\\ \\text{kg/h}"
      }
     ],
     "answer": "2.6×10⁻³ kg of H₂ per hour"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "A25-7"
     },
     {
      "type": "exam",
      "id": "W26-13"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "H₂ is purified through a {dx} mm palladium sheet of area {area} m² at 500 °C. D = {D} m²/s; concentrations {C1} and {C2} kg/m³. Mass of H₂ per hour (kg)?",
      "calc": "fick1",
      "values": {
       "D": 1e-8,
       "C1": 2,
       "C2": 0.5,
       "dx": 4,
       "area": 0.6,
       "hours": 1
      },
      "vary": [
       {
        "key": "dx",
        "min": 2,
        "max": 10,
        "dp": 0
       },
       {
        "key": "area",
        "min": 0.1,
        "max": 1.5,
        "dp": 2
       },
       {
        "key": "C1",
        "min": 1.5,
        "max": 3,
        "dp": 1
       },
       {
        "key": "C2",
        "min": 0.2,
        "max": 1,
        "dp": 1
       }
      ],
      "row": "Mass in",
      "unit": "kg",
      "hint": "J = DΔC/Δx (Δx in m), then × A × 3600."
     },
     {
      "type": "calc",
      "badge": "textbook",
      "q": "Callister Ex 5.1: carbon through iron at 700 °C, D = {D} m²/s; 1.2 kg/m³ at 5 mm and 0.8 kg/m³ at 10 mm (Δx = {dx} mm). Diffusion flux J?",
      "calc": "fick1",
      "values": {
       "D": 3e-11,
       "C1": 1.2,
       "C2": 0.8,
       "dx": 5,
       "area": 1,
       "hours": 1
      },
      "row": "Flux J",
      "unit": "kg/m²·s"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "In steady-state diffusion through a plate, the concentration profile is…",
      "opts": [
       "an error-function curve that changes with time",
       "a straight line that does not change with time",
       "flat (no gradient)",
       "exponential"
      ],
      "ans": "b",
      "why": "Steady state: dC/dx is constant and the profile is fixed (Lecture 9 slide 11)."
     }
    ]
   }
  },
  {
   "id": "erf",
   "topic": "fick2",
   "name": "Fick’s 2nd law — erf solution",
   "sheet": true,
   "calc": "erf",
   "tex": "\\frac{C_x - C_0}{C_s - C_0} = 1 - \\mathrm{erf}\\!\\left(\\frac{x}{2\\sqrt{Dt}}\\right)",
   "meaning": "Semi-infinite solid, constant surface concentration. The erf table is printed on the equation sheet.",
   "vars": [
    [
     "C_s, C_0, C_x",
     "surface, initial, at depth x",
     "wt% or kg/m³"
    ],
    [
     "x",
     "depth",
     "m"
    ],
    [
     "t",
     "time",
     "s"
    ]
   ],
   "presets": [
    {
     "label": "F24 Q7 — N into Fe, 0.5 mm, 1 h",
     "from": "F24-7",
     "values": {
      "mode": "cx",
      "Cs": 5,
      "C0": 0,
      "x": 0.5,
      "D": 6.9e-11,
      "hours": 1
     }
    },
    {
     "label": "Callister Ex 5.2 — carburize to 0.80 wt% at 0.5 mm (find t)",
     "values": {
      "mode": "t",
      "Cs": 1.2,
      "C0": 0.25,
      "Cx": 0.8,
      "x": 0.5,
      "D": 1.6e-11
     }
    }
   ],
   "steps": [
    "z = x/(2√(Dt)) with x in m and t in s.",
    "erf(z) from the table (interpolate).",
    "Solve for Cₓ, or invert the table to get z and then t."
   ],
   "traps": [
    "Hours left in hours.",
    "Using erf(z) where 1 − erf(z) belongs."
   ],
   "seen": [
    "F24-7",
    "F24-18",
    "W26-37"
   ],
   "lec": [
    {
     "l": 9,
     "s": 15
    },
    {
     "l": 9,
     "s": 16
    },
    {
     "l": 9,
     "s": 17
    }
   ],
   "cal": "CH 5.4, Ex 5.2",
   "learn": {
    "idea": "When the surface concentration is held fixed and diffusion has not reached steady state, the profile is an error-function curve that moves inward with time. Everything depends on one number, $z = x/(2\\sqrt{Dt})$. Find the left side of the equation from the concentrations, look up erf on the equation-sheet table, and solve for what is missing.",
    "when": [
     "Carburizing / nitriding / decarburizing, “after t hours at depth x”.",
     "Find Cₓ, or find the time to reach a target concentration."
    ],
    "example": {
     "title": "F24 Q7: nitrogen into iron",
     "given": "C₀ = 0, Cₛ = 5 kg/m³, D = 6.9×10⁻¹¹ m²/s, x = 0.5 mm, t = 1 h",
     "find": "Cₓ",
     "steps": [
      {
       "say": "z with SI units (t = 3600 s).",
       "tex": "z = \\frac{0.5\\times10^{-3}}{2\\sqrt{(6.9\\times10^{-11})(3600)}} = 0.502"
      },
      {
       "say": "Table: erf(0.50) = 0.5205 (interpolating gives 0.522).",
       "tex": "\\mathrm{erf}(0.502) \\approx 0.52"
      },
      {
       "say": "Solve for Cₓ.",
       "tex": "\\frac{C_x - 0}{5 - 0} = 1 - 0.52 \\Rightarrow C_x = 2.4\\ \\text{kg/m}^3"
      }
     ],
     "answer": "Cₓ ≈ 2.4 kg/m³ (option d)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F24-7"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Nitrogen diffuses into thick iron: Cₛ = {Cs} kg/m³, C₀ = {C0}, D = {D} m²/s. Concentration at {x} mm after {hours} h?",
      "calc": "erf",
      "values": {
       "mode": "cx",
       "Cs": 5,
       "C0": 0,
       "x": 0.5,
       "D": 6.9e-11,
       "hours": 1
      },
      "vary": [
       {
        "key": "Cs",
        "min": 2,
        "max": 8,
        "dp": 0
       },
       {
        "key": "x",
        "min": 0.2,
        "max": 1,
        "dp": 1
       },
       {
        "key": "hours",
        "min": 0.5,
        "max": 4,
        "dp": 1
       }
      ],
      "row": "Cₓ",
      "unit": "kg/m³",
      "tol": 0.04,
      "hint": "z = x/(2√(Dt)) with x in m and t in s."
     },
     {
      "type": "calc",
      "badge": "textbook",
      "q": "Callister Ex 5.2 style: steel with C₀ = {C0} wt% C is carburized with Cₛ = {Cs} wt% at D = {D} m²/s. How many hours to reach {Cx} wt% C at {x} mm?",
      "calc": "erf",
      "values": {
       "mode": "t",
       "Cs": 1.2,
       "C0": 0.25,
       "Cx": 0.8,
       "x": 0.5,
       "D": 1.6e-11
      },
      "vary": [
       {
        "key": "Cx",
        "min": 0.45,
        "max": 0.95,
        "dp": 2
       },
       {
        "key": "x",
        "min": 0.3,
        "max": 0.8,
        "dp": 1
       }
      ],
      "row": "t",
      "unit": "h",
      "tol": 0.05,
      "hint": "Find erf(z) = 1 − (Cₓ−C₀)/(Cₛ−C₀), invert the table, then t = x²/(4z²D)."
     },
     {
      "type": "exam",
      "id": "F24-18"
     },
     {
      "type": "exam",
      "id": "W26-37"
     }
    ]
   }
  },
  {
   "id": "dtconst",
   "topic": "fick2",
   "name": "Same profile ⇔ same Dt",
   "sheet": false,
   "calc": null,
   "tex": "\\frac{x^2}{Dt} = \\text{const}\\ \\Rightarrow\\ D_1t_1 = D_2t_2\\ \\ (\\text{same } x),\\qquad x \\propto \\sqrt{Dt}",
   "meaning": "To double the case depth you need 4× the time (Lecture 9 slide 17, Callister Ex 5.3).",
   "vars": [],
   "presets": [],
   "steps": [
    "Same concentration at the same depth ⇒ same z ⇒ same Dt.",
    "Raising T raises D, so the time drops (F24 Q18)."
   ],
   "traps": [
    "Thinking depth scales with t (it scales with √t)."
   ],
   "seen": [
    "F24-18"
   ],
   "lec": [
    {
     "l": 9,
     "s": 17
    }
   ],
   "cal": "CH 5.4, Ex 5.3",
   "learn": {
    "idea": "Because the erf solution depends only on $x/(2\\sqrt{Dt})$, two treatments that produce the same concentration at the same depth must have the same $Dt$. Depth grows with $\\sqrt{Dt}$, not with $t$: double the depth needs four times the time (or a higher T to raise D).",
    "when": [
     "“Same diffusion result at another temperature: how long?”",
     "“How do you double the case depth / speed up carburizing?”"
    ],
    "example": {
     "title": "Callister Ex 5.3: Cu in Al",
     "given": "D₅₀₀ = 4.8×10⁻¹⁴, D₆₀₀ = 5.3×10⁻¹³ m²/s; 10 h at 600 °C",
     "find": "time at 500 °C for the same result",
     "steps": [
      {
       "say": "Same profile ⇒ same Dt.",
       "tex": "D_{500}\\,t_{500} = D_{600}\\,t_{600}"
      },
      {
       "say": "Solve.",
       "tex": "t_{500} = \\frac{(5.3\\times10^{-13})(10)}{4.8\\times10^{-14}} = 110\\ \\text{h}"
      }
     ],
     "answer": "≈ 110 h"
    },
    "quiz": [
     {
      "type": "value",
      "badge": "textbook",
      "q": "Callister Ex 5.3: D at 500 °C = 4.8×10⁻¹⁴ and at 600 °C = 5.3×10⁻¹³ m²/s. A 10 h treatment at 600 °C equals how many hours at 500 °C?",
      "answer": 110.4,
      "unit": "h",
      "steps": [
       "$t_{500} = D_{600}t_{600}/D_{500} = (5.3\\times10^{-13})(10)/(4.8\\times10^{-14}) = 110$ h"
      ]
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "At a fixed temperature, doubling the case depth requires…",
      "opts": [
       "twice the time",
       "four times the time",
       "half the time",
       "√2 times the time"
      ],
      "ans": "b",
      "why": "x ∝ √(Dt) → x doubles when t quadruples."
     },
     {
      "type": "exam",
      "id": "F24-18"
     }
    ]
   }
  },
  {
   "id": "arrD",
   "topic": "diffmech",
   "name": "Temperature dependence of D",
   "sheet": true,
   "calc": "arrD",
   "tex": "D = D_0\\exp\\!\\left(-\\frac{Q_d}{RT}\\right),\\qquad \\frac{D_1}{D_2} = \\frac{D_{0,1}}{D_{0,2}}\\exp\\!\\left(-\\frac{Q_1 - Q_2}{RT}\\right)",
   "meaning": "Arrhenius. Lower activation energy → faster diffusion; higher T → faster for everything.",
   "vars": [
    [
     "Q_d",
     "activation energy",
     "J/mol"
    ],
    [
     "R",
     "8.314 J/(mol·K)",
     ""
    ],
    [
     "T",
     "absolute temperature",
     "K"
    ]
   ],
   "presets": [
    {
     "label": "F24 Q2 — C in BCC vs FCC Fe at 910 °C",
     "from": "F24-2",
     "values": {
      "D01": 6.2e-7,
      "Q1": 80,
      "D02": 0.000023,
      "Q2": 148,
      "T": 910
     }
    },
    {
     "label": "W26 Q12 — same data at 1200 °C",
     "from": "W26-12",
     "values": {
      "D01": 6.2e-7,
      "Q1": 80,
      "D02": 0.000023,
      "Q2": 148,
      "T": 1200
     }
    }
   ],
   "steps": [
    "T to kelvin; Q to J/mol.",
    "Compute both D.",
    "Ratio → pick the option nearest to it."
   ],
   "traps": [
    "Reusing the 910 °C answer at a new temperature.",
    "R = 8.314 with Q in kJ (factor 1000)."
   ],
   "seen": [
    "F24-2",
    "W26-12"
   ],
   "lec": [
    {
     "l": 9,
     "s": 18
    },
    {
     "l": 9,
     "s": 19
    },
    {
     "l": 9,
     "s": 20
    }
   ],
   "cal": "CH 5.5, Ex 5.4–5.5",
   "learn": {
    "idea": "Diffusion is thermally activated: an atom must jump an energy barrier $Q_d$. $D$ grows exponentially with temperature, and at the same temperature a lower $Q_d$ usually wins. Carbon diffuses faster in BCC iron than in FCC because BCC is more open (lower $Q_d$); the ratio depends on T, so recompute it.",
    "when": [
     "D₀ and Q_d given, find D at a temperature.",
     "Compare two systems (“moves ~N times faster in…”)."
    ],
    "example": {
     "title": "F24 Q2: carbon in BCC vs FCC iron at 910 °C",
     "given": "BCC: 80 kJ/mol, 6.2×10⁻⁷ m²/s; FCC: 148 kJ/mol, 2.3×10⁻⁵ m²/s; T = 1183 K",
     "find": "D_BCC / D_FCC",
     "steps": [
      {
       "say": "BCC (Q in J/mol).",
       "tex": "D_{BCC} = 6.2\\times10^{-7}\\exp\\left(-\\frac{80000}{8.314\\cdot1183}\\right) = 1.82\\times10^{-10}\\ \\text{m}^2/\\text{s}"
      },
      {
       "say": "FCC.",
       "tex": "D_{FCC} = 2.3\\times10^{-5}\\exp\\left(-\\frac{148000}{8.314\\cdot1183}\\right) = 6.7\\times10^{-12}\\ \\text{m}^2/\\text{s}"
      },
      {
       "say": "Ratio.",
       "tex": "\\frac{D_{BCC}}{D_{FCC}} = 27 \\approx 30"
      },
      {
       "say": "W26 asked the same data at 1200 °C: the ratio drops to ≈ 7, so the nearest option became “~3×”."
      }
     ],
     "answer": "BCC ≈ 30× faster at 910 °C"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F24-2"
     },
     {
      "type": "exam",
      "id": "W26-12"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Carbon in iron: BCC Q = {Q1} kJ/mol, D₀ = {D01}; FCC Q = {Q2} kJ/mol, D₀ = {D02} (m²/s). At {T} °C, D_BCC / D_FCC = ?",
      "calc": "arrD",
      "values": {
       "D01": 6.2e-7,
       "Q1": 80,
       "D02": 0.000023,
       "Q2": 148,
       "T": 1000
      },
      "vary": [
       {
        "key": "T",
        "min": 800,
        "max": 1400,
        "dp": 0
       }
      ],
      "row": "D₁ / D₂",
      "unit": "×",
      "tol": 0.04,
      "hint": "Compute each D separately with T in K and Q in J/mol."
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "D₀ = {D01} m²/s and Q_d = {Q1} kJ/mol. What is D at {T} °C?",
      "calc": "arrD",
      "values": {
       "D01": 0.000023,
       "Q1": 148,
       "D02": 1,
       "Q2": 1,
       "T": 900
      },
      "vary": [
       {
        "key": "D01",
        "min": 1,
        "max": 9,
        "dp": 1,
        "mul": 0.00001
       },
       {
        "key": "Q1",
        "min": 100,
        "max": 250,
        "dp": 0
       },
       {
        "key": "T",
        "min": 500,
        "max": 1200,
        "dp": 0
       }
      ],
      "row": "D₁",
      "unit": "m²/s",
      "tol": 0.04
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "With the same D₀, the species with the lower activation energy diffuses faster at a given temperature.",
      "ans": true,
      "why": "Smaller Q_d → smaller exponent → larger D."
     }
    ]
   }
  },
  {
   "id": "hooke",
   "topic": "elastic",
   "name": "Stress, strain & Hooke’s law",
   "sheet": true,
   "calc": "hooke",
   "tex": "\\sigma = \\frac{F}{A_0},\\quad \\varepsilon = \\frac{\\Delta l}{l_0},\\quad \\sigma = E\\varepsilon\\ \\Rightarrow\\ \\Delta l = \\frac{F\\,l_0}{A_0E}",
   "meaning": "Elastic region only: strain is proportional to stress.",
   "vars": [
    [
     "F",
     "load",
     "N"
    ],
    [
     "A_0",
     "original area = πd²/4",
     "m²"
    ],
    [
     "E",
     "Young’s modulus",
     "Pa"
    ]
   ],
   "presets": [
    {
     "label": "F24 Q11 — steel rod, 9800 N",
     "from": "F24-11",
     "values": {
      "F": 9800,
      "d": 20,
      "L0": 10,
      "E": 207
     }
    },
    {
     "label": "F24 Q12 — +50 % load (14 700 N)",
     "from": "F24-12",
     "values": {
      "F": 14700,
      "d": 20,
      "L0": 10,
      "E": 207
     }
    },
    {
     "label": "Callister Ex 6.1 — Cu, 276 MPa on 305 mm (d chosen for 276 MPa)",
     "values": {
      "F": 21676,
      "d": 10,
      "L0": 0.305,
      "E": 110
     }
    }
   ],
   "steps": [
    "A₀ from the diameter.",
    "σ = F/A₀, check σ < σy.",
    "ε = σ/E, Δl = εl₀, new length = l₀ + Δl."
   ],
   "traps": [
    "d used as radius.",
    "Reporting Δl when the new length is asked."
   ],
   "seen": [
    "F24-11",
    "F24-12",
    "F24-9"
   ],
   "lec": [
    {
     "l": 10,
     "s": 8
    },
    {
     "l": 10,
     "s": 11
    }
   ],
   "guide": "Part 6",
   "cal": "CH 6.2–6.3, Ex 6.1",
   "learn": {
    "idea": "Stress is force per original area, strain is stretch per original length. In the elastic region they are proportional, with E as the constant. So elongation is $\\Delta l = Fl_0/(A_0E)$, and it scales linearly with the load as long as you stay below yield.",
    "when": [
     "A rod/wire under a load, “new length” or “elongation” (elastic).",
     "Load scaled up or down in the elastic range."
    ],
    "example": {
     "title": "F24 Q11: steel walkway rods",
     "given": "d = 20 mm, l₀ = 10 m, F = 9800 N, E = 207 GPa",
     "find": "new length",
     "steps": [
      {
       "say": "Area from the diameter.",
       "tex": "A_0 = \\pi\\left(\\frac{0.020}{2}\\right)^2 = 3.14\\times10^{-4}\\ \\text{m}^2"
      },
      {
       "say": "Stress and strain.",
       "tex": "\\sigma = \\frac{9800}{3.14\\times10^{-4}} = 31.2\\ \\text{MPa},\\qquad \\varepsilon = \\frac{31.2\\times10^6}{207\\times10^9} = 1.51\\times10^{-4}"
      },
      {
       "say": "Elongation and new length.",
       "tex": "\\Delta l = \\varepsilon l_0 = 1.51\\ \\text{mm} \\Rightarrow l = 10.00151\\ \\text{m}"
      },
      {
       "say": "F24 Q12 adds 50 % load: elastic, so Δl × 1.5 = 2.26 mm → 10.0023 m."
      }
     ],
     "answer": "10.00151 m"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F24-11"
     },
     {
      "type": "exam",
      "id": "F24-12"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A steel rod (E = {E} GPa) {d} mm in diameter and {L0} m long carries {F} N (elastic). Elongation in mm?",
      "calc": "hooke",
      "values": {
       "F": 9800,
       "d": 20,
       "L0": 10,
       "E": 207
      },
      "vary": [
       {
        "key": "F",
        "min": 2000,
        "max": 40000,
        "dp": 0
       },
       {
        "key": "d",
        "min": 8,
        "max": 30,
        "dp": 0
       },
       {
        "key": "L0",
        "min": 0.5,
        "max": 12,
        "dp": 1
       }
      ],
      "row": "Δl",
      "unit": "mm",
      "hint": "A₀ = πd²/4 with d in m."
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A {d} mm diameter rod carries {F} N. Engineering stress in MPa?",
      "calc": "hooke",
      "values": {
       "F": 9800,
       "d": 20,
       "L0": 1,
       "E": 207
      },
      "vary": [
       {
        "key": "F",
        "min": 1000,
        "max": 60000,
        "dp": 0
       },
       {
        "key": "d",
        "min": 5,
        "max": 25,
        "dp": 0
       }
      ],
      "row": "σ",
      "unit": "MPa"
     },
     {
      "type": "exam",
      "id": "F24-9"
     },
     {
      "type": "tf",
      "badge": "lecture",
      "q": "Elastic deformation is reversible: when the load is removed, the stretched bonds return the part to its original length.",
      "ans": true,
      "why": "Lecture 10 slide 9: initial → small load (bonds stretch) → unload (return to initial)."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "q": "Shear strain is defined as…",
      "opts": [
       "γ = θ / 2",
       "γ = tan θ",
       "γ = Δl / l₀",
       "γ = −ε_x / ε_z"
      ],
      "ans": "b",
      "why": "Lecture 10 slide 6. Like all strains it is dimensionless."
     },
     {
      "type": "tf",
      "badge": "lecture",
      "q": "By convention, stress and strain are negative in a compression test.",
      "ans": true,
      "why": "Lecture 10 slide 14."
     },
     {
      "type": "tf",
      "badge": "lecture",
      "q": "Anelasticity (elastic strain that develops and recovers over time) is usually small in metals but can be significant in polymers.",
      "ans": true,
      "why": "Lecture 10 slide 16: polymers show viscoelastic behaviour."
     }
    ]
   }
  },
  {
   "id": "modulus",
   "topic": "tensile",
   "name": "E from the elastic slope",
   "sheet": true,
   "calc": "modulus",
   "tex": "E = \\frac{\\Delta\\sigma}{\\Delta\\varepsilon}\\ \\ (\\text{initial linear part})",
   "meaning": "Read one clean point on the straight part of the low-strain inset.",
   "vars": [],
   "presets": [
    {
     "label": "W26 Q16 — 200 MPa at ε ≈ 0.0034",
     "from": "W26-16",
     "values": {
      "sigma": 200,
      "eps": 0.0034
     }
    },
    {
     "label": "Lecture 10 slide 11 — steel wire, 17.24 N on 0.55 mm², 1.68 mm on 10 m",
     "values": {
      "sigma": 31.345,
      "eps": 0.000168
     }
    }
   ],
   "steps": [
    "Use the inset (expanded strain axis).",
    "Pick a point you can read exactly.",
    "E = σ/ε; MPa → GPa ÷1000."
   ],
   "traps": [
    "Reading the main plot: the elastic line is nearly vertical there."
   ],
   "seen": [
    "W26-16",
    "A25-18"
   ],
   "lec": [
    {
     "l": 10,
     "s": 10
    },
    {
     "l": 10,
     "s": 11
    },
    {
     "l": 10,
     "s": 12
    },
    {
     "l": 10,
     "s": 13
    }
   ],
   "guide": "Part 6",
   "cal": "CH 6.3, Ex 6.3(a)",
   "learn": {
    "idea": "Young’s modulus is the slope of the straight, elastic start of the stress–strain curve: stiffness. It is set by the bonds, so all steels share E ≈ 207 GPa regardless of strength. On a full curve the elastic line is almost vertical, which is why exams add a low-strain inset; read E there.",
    "when": [
     "A curve or a (σ, ε) point on the elastic line.",
     "“Which material is stiffest?” (steepest initial slope)."
    ],
    "example": {
     "title": "W26 Q16: read the inset",
     "given": "the inset elastic line passes through σ = 200 MPa at ε ≈ 0.0034 (the inset strain axis runs 0 → 0.005 → 0.010)",
     "find": "E",
     "steps": [
      {
       "say": "Slope of the line from the origin.",
       "tex": "E = \\frac{\\sigma}{\\varepsilon} = \\frac{200\\ \\text{MPa}}{0.0034} = 58\\,800\\ \\text{MPa} \\approx 59\\ \\text{GPa}"
      }
     ],
     "answer": "E ≈ 59 GPa (option e; 114 GPa comes from misreading the inset scale by a factor of 2)"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "similar",
      "q": "On the elastic part of a tensile curve, σ = {sigma} MPa at ε = {eps}. Young’s modulus in GPa?",
      "calc": "modulus",
      "values": {
       "sigma": 200,
       "eps": 0.0034
      },
      "vary": [
       {
        "key": "sigma",
        "min": 100,
        "max": 400,
        "dp": 0
       },
       {
        "key": "eps",
        "min": 0.001,
        "max": 0.004,
        "dp": 5
       }
      ],
      "row": "E",
      "unit": "GPa"
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "The 0.2 % offset line is drawn parallel to the elastic line, starting at a strain of 0.002.",
      "ans": true,
      "why": "Same slope as E, shifted to ε = 0.002; where it meets the curve is the yield strength (W26 Q17)."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Two steels: A has twice the yield strength of B. Their Young’s moduli are…",
      "opts": [
       "A twice B",
       "B twice A",
       "about the same",
       "impossible to compare"
      ],
      "ans": "c",
      "why": "E comes from bond stiffness; all steels ≈ 207 GPa (F24 Q9)."
     },
     {
      "type": "value",
      "badge": "lecture",
      "q": "Lecture 10 slide 11: a steel wire with A₀ = 0.55 mm² and l₀ = 10 m is stretched elastically by 1.68 mm under 17.24 N. Modulus of elasticity in GPa?",
      "answer": 186.6,
      "unit": "GPa",
      "tol": 0.02,
      "steps": [
       "$\\sigma = 17.24/(0.55\\times10^{-6}) = 31.35$ MPa",
       "$\\varepsilon = 1.68\\times10^{-3}/10 = 1.68\\times10^{-4}$",
       "$E = \\sigma/\\varepsilon = 1.866\\times10^{11}$ Pa $\\approx 187$ GPa"
      ]
     },
     {
      "type": "tf",
      "badge": "lecture",
      "q": "W, Ta and Mo have a steeper elastic slope on a stress–strain plot than Al, Cu and Ag.",
      "ans": true,
      "why": "Lecture 10 slide 10: high stiffness = steep slope, low stiffness = shallow slope."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "q": "On one engineering stress–strain plot, the least stiff material is the curve with…",
      "opts": [
       "the highest tensile strength",
       "the smallest initial (elastic) slope",
       "the largest strain at fracture",
       "the lowest yield strength"
      ],
      "ans": "b",
      "why": "Stiffness is E, the initial slope (Lecture 10 slide 17), not strength or ductility."
     },
     {
      "type": "tf",
      "badge": "lecture",
      "q": "The Young’s modulus of a metal generally increases as the temperature rises.",
      "ans": false,
      "why": "Lecture 10 slide 12: E falls with temperature for W, steel and Al. Thermal expansion moves atoms apart, where the force–separation curve is less steep."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "q": "Cast iron has a non-linear elastic region. The slope of the straight line from the origin to a chosen stress on its curve is the…",
      "opts": [
       "tangent modulus",
       "secant modulus",
       "shear modulus",
       "modulus of resilience"
      ],
      "ans": "b",
      "why": "Lecture 10 slide 13. The tangent modulus is the slope of the tangent at one stress level."
     }
    ]
   }
  },
  {
   "id": "poisson",
   "topic": "elastic",
   "name": "Poisson’s ratio",
   "sheet": true,
   "calc": "poisson",
   "tex": "\\nu = -\\frac{\\varepsilon_x}{\\varepsilon_z},\\qquad \\varepsilon_z = \\frac{\\sigma}{E},\\quad \\Delta d = \\varepsilon_x d_0,\\qquad E = 2G(1+\\nu)",
   "meaning": "Lateral contraction ÷ axial extension.",
   "vars": [
    [
     "\\varepsilon_z",
     "axial strain",
     "—"
    ],
    [
     "\\varepsilon_x",
     "lateral strain (negative in tension)",
     "—"
    ]
   ],
   "presets": [
    {
     "label": "F24 Q19 — brass, find ν",
     "from": "F24-19",
     "values": {
      "mode": "nu",
      "dL": 0.01,
      "L0": 50,
      "dd": 0.0006,
      "d0": 10
     }
    },
    {
     "label": "Final 2017 Q12 — steel bar, find Δwidth",
     "from": "F17-12",
     "values": {
      "mode": "lateral",
      "nu": 0.3,
      "F": 60000,
      "E": 207,
      "w": 20,
      "th": 40
     }
    },
    {
     "label": "Callister Ex 6.2 — brass rod, Δd = 2.5×10⁻³ mm → F",
     "values": {
      "mode": "force",
      "nu": 0.34,
      "E": 97,
      "d0": 10,
      "dd": 0.0025
     }
    }
   ],
   "steps": [
    "Axial strain from ΔL/L₀ or σ/E.",
    "Lateral strain = −ν × axial.",
    "Δ(dimension) = lateral strain × that dimension."
   ],
   "traps": [
    "Width change for a rectangular bar: σ uses the full cross-section w×t, but Δw = εₓ·w.",
    "Lateral dimension SHRINKS in tension."
   ],
   "seen": [
    "F24-19",
    "F17-12"
   ],
   "lec": [
    {
     "l": 10,
     "s": 15
    }
   ],
   "guide": "Part 6",
   "cal": "CH 6.5, Ex 6.2",
   "learn": {
    "idea": "Pull a bar and it gets longer and thinner. Poisson’s ratio is how much thinner per unit of longer: $\\nu = -\\varepsilon_x/\\varepsilon_z$, about 0.3 for metals. The minus sign is there because the lateral strain is negative in tension. Lateral change = lateral strain × that lateral dimension.",
    "when": [
     "Measured length and diameter changes → ν.",
     "ν given → change in width/diameter, or the load for a diameter change."
    ],
    "example": {
     "title": "F24 Q19: brass rod",
     "given": "l₀ = 50 mm, Δl = 0.01 mm; d₀ = 10 mm, Δd = −6×10⁻⁴ mm",
     "find": "ν",
     "steps": [
      {
       "say": "Axial strain.",
       "tex": "\\varepsilon_z = \\frac{0.01}{50} = 2\\times10^{-4}"
      },
      {
       "say": "Lateral strain (negative).",
       "tex": "\\varepsilon_x = \\frac{-6\\times10^{-4}}{10} = -6\\times10^{-5}"
      },
      {
       "say": "Ratio.",
       "tex": "\\nu = -\\frac{\\varepsilon_x}{\\varepsilon_z} = 0.30"
      }
     ],
     "answer": "ν = 0.30"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F24-19"
     },
     {
      "type": "exam",
      "id": "F17-12"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A rod l₀ = {L0} mm, d₀ = {d0} mm stretches by {dL} mm while its diameter shrinks by {dd} mm. Poisson’s ratio?",
      "calc": "poisson",
      "values": {
       "mode": "nu",
       "dL": 0.01,
       "L0": 50,
       "dd": 0.0006,
       "d0": 10
      },
      "vary": [
       {
        "key": "dL",
        "min": 0.005,
        "max": 0.05,
        "dp": 3
       },
       {
        "key": "dd",
        "min": 0.0002,
        "max": 0.002,
        "dp": 4
       }
      ],
      "row": "ν",
      "unit": ""
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A steel bar {w} mm wide × {th} mm thick (E = {E} GPa, ν = {nu}) is pulled with {F} N. Change in width in µm (negative = shrinks)?",
      "calc": "poisson",
      "values": {
       "mode": "lateral",
       "nu": 0.3,
       "F": 60000,
       "E": 207,
       "w": 20,
       "th": 40
      },
      "vary": [
       {
        "key": "F",
        "min": 10000,
        "max": 120000,
        "dp": 0
       },
       {
        "key": "w",
        "min": 10,
        "max": 50,
        "dp": 0
       },
       {
        "key": "th",
        "min": 10,
        "max": 50,
        "dp": 0
       }
      ],
      "row": "Δw",
      "unit": "µm",
      "hint": "σ uses w × t; Δw = −ν(σ/E)·w."
     },
     {
      "type": "calc",
      "badge": "textbook",
      "q": "Callister Ex 6.2: brass rod d₀ = {d0} mm, E = {E} GPa, ν = {nu}. Load needed for a {dd} mm decrease in diameter (N)?",
      "calc": "poisson",
      "values": {
       "mode": "force",
       "nu": 0.34,
       "E": 97,
       "d0": 10,
       "dd": 0.0025
      },
      "row": "F",
      "unit": "N"
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "In a tensile test the lateral strain is positive.",
      "ans": false,
      "why": "The bar gets thinner, so εₓ < 0; that is why ν has a minus sign."
     },
     {
      "type": "value",
      "badge": "lecture",
      "q": "An isotropic steel has E = 207 GPa and ν = 0.30. Shear modulus G in GPa? (Lecture 10 slide 15)",
      "answer": 79.6,
      "unit": "GPa",
      "tol": 0.02,
      "steps": [
       "$E = 2G(1+\\nu) \\Rightarrow G = E/[2(1+\\nu)] = 207/2.6 = 79.6$ GPa"
      ]
     },
     {
      "type": "mc",
      "badge": "lecture",
      "q": "Typical values of Poisson’s ratio lie between…",
      "opts": [
       "0 and 0.1",
       "0.2 and 0.5",
       "0.5 and 1",
       "1 and 2"
      ],
      "ans": "b",
      "why": "Lecture 10 slide 15; metals are about 0.3."
     }
    ]
   }
  },
  {
   "id": "recovery",
   "topic": "tensile",
   "name": "Elastic recovery & permanent set",
   "sheet": false,
   "calc": "recovery",
   "tex": "\\varepsilon_{plastic} = \\varepsilon_{total} - \\frac{\\sigma}{E},\\qquad \\Delta l_{perm} = \\varepsilon_{plastic}\\,l_0",
   "meaning": "Unloading follows a line parallel to the elastic slope; only the elastic part comes back.",
   "vars": [],
   "presets": [
    {
     "label": "W26 Q20 — 320 MPa, ε ≈ 0.025, E ≈ 60 GPa, 100 mm",
     "from": "W26-20",
     "values": {
      "sigma": 320,
      "E": 60,
      "eps": 0.025,
      "L0": 100
     }
    }
   ],
   "steps": [
    "Read the total strain at the stress on the curve.",
    "Subtract σ/E.",
    "Multiply by l₀."
   ],
   "traps": [
    "Answering the total change (that is under load).",
    "Claiming “impossible because it yielded” (W26 option e)."
   ],
   "seen": [
    "W26-20",
    "W26-26"
   ],
   "lec": [],
   "guide": "Part 6",
   "cal": "CH 6.8, Ex 6.3(d)",
   "learn": {
    "idea": "Once a metal yields, unloading follows a line parallel to the elastic slope. Only the elastic part, $\\sigma/E$, comes back; the rest is permanent. So permanent strain = total strain at that stress − σ/E.",
    "when": [
     "“Loaded to X MPa then released: permanent change in length?”",
     "“Final length after the load is removed.”"
    ],
    "example": {
     "title": "W26 Q20",
     "given": "σ = 320 MPa, total ε ≈ 0.025 read from the (very flat) curve, E ≈ 60 GPa from the inset (Q16), l₀ = 100 mm",
     "find": "permanent Δl",
     "steps": [
      {
       "say": "Elastic strain that recovers.",
       "tex": "\\varepsilon_e = \\frac{320}{60\\,000} = 0.0053"
      },
      {
       "say": "Plastic strain that stays.",
       "tex": "\\varepsilon_p = 0.025 - 0.0053 = 0.0197"
      },
      {
       "say": "Length change.",
       "tex": "\\Delta l = 0.0197\\times100 \\approx 2\\ \\text{mm}"
      }
     ],
     "answer": "≈ 2 mm → closest option 2.5 mm (c); the other options are 10× off"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "similar",
      "q": "A metal (E = {E} GPa) is loaded to {sigma} MPa, where the total strain is {eps}, then unloaded. Permanent change in a {L0} mm gauge length (mm)?",
      "calc": "recovery",
      "values": {
       "sigma": 320,
       "E": 60,
       "eps": 0.025,
       "L0": 100
      },
      "vary": [
       {
        "key": "sigma",
        "min": 250,
        "max": 500,
        "dp": 0
       },
       {
        "key": "E",
        "pick": [
         70,
         110,
         114,
         207
        ]
       },
       {
        "key": "eps",
        "min": 0.01,
        "max": 0.08,
        "dp": 3
       },
       {
        "key": "L0",
        "pick": [
         50,
         100,
         250
        ]
       }
      ],
      "row": "Permanent Δl",
      "unit": "mm"
     },
     {
      "type": "exam",
      "id": "W26-26"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "After unloading from the plastic region, the strain that is recovered equals…",
      "opts": [
       "the total strain",
       "σ/E at the stress reached",
       "zero",
       "0.002"
      ],
      "ans": "b",
      "why": "Unloading is elastic and parallel to the original slope."
     }
    ]
   }
  },
  {
   "id": "ductility",
   "topic": "tensile",
   "name": "Ductility: %EL and %RA",
   "sheet": true,
   "calc": "ductility",
   "tex": "\\%EL = \\frac{l_f - l_0}{l_0}\\times100,\\qquad \\%RA = \\frac{A_0 - A_f}{A_0}\\times100",
   "meaning": "Plastic deformation at fracture, by length or by area.",
   "vars": [],
   "presets": [
    {
     "label": "Callister Ex 6.4 — 12.8 → 10.7 mm diameter",
     "values": {
      "L0": "",
      "Lf": "",
      "d0": 12.8,
      "df": 10.7
     }
    }
   ],
   "steps": [
    "l_f is measured after fracture (elastic part already recovered).",
    "On a curve: fracture strain − σ_f/E."
   ],
   "traps": [
    "Using the total strain at fracture without the elastic recovery."
   ],
   "seen": [
    "W26-18",
    "A25-20",
    "W26-35",
    "F24-23"
   ],
   "lec": [],
   "guide": "Part 6",
   "cal": "CH 6.6, Ex 6.4",
   "learn": {
    "idea": "Ductility is how much a material deforms PLASTICALLY before it breaks: as a percent elongation (lengths after fracture) or a percent reduction in area (neck diameter). On a curve, %EL is the fracture strain minus the elastic bit that springs back.",
    "when": [
     "Initial/final lengths or diameters after fracture.",
     "Reading “ductility” off a curve.",
     "T/F definitions (elastic vs plastic)."
    ],
    "example": {
     "title": "Callister Ex 6.4: %RA",
     "given": "d₀ = 12.8 mm, d_f = 10.7 mm",
     "find": "%RA",
     "steps": [
      {
       "say": "Areas scale with d², so π/4 cancels.",
       "tex": "\\%RA = \\frac{12.8^2 - 10.7^2}{12.8^2}\\times100 = \\frac{163.8 - 114.5}{163.8}\\times100 = 30\\%"
      }
     ],
     "answer": "%RA = 30 %"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "similar",
      "q": "A tensile specimen necks from d₀ = {d0} mm to d_f = {df} mm at fracture. Percent reduction in area?",
      "calc": "ductility",
      "values": {
       "L0": "",
       "Lf": "",
       "d0": 12.8,
       "df": 10.7
      },
      "vary": [
       {
        "key": "d0",
        "min": 10,
        "max": 14,
        "dp": 1
       },
       {
        "key": "df",
        "min": 5,
        "max": 9.5,
        "dp": 1
       }
      ],
      "row": "%RA",
      "unit": "%"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A {L0} mm gauge length measures {Lf} mm after fracture. Percent elongation?",
      "calc": "ductility",
      "values": {
       "L0": 50,
       "Lf": 57.7,
       "d0": "",
       "df": ""
      },
      "vary": [
       {
        "key": "Lf",
        "min": 52,
        "max": 75,
        "dp": 1
       }
      ],
      "row": "%EL",
      "unit": "%"
     },
     {
      "type": "exam",
      "id": "W26-35"
     },
     {
      "type": "exam",
      "id": "F24-23"
     }
    ]
   }
  },
  {
   "id": "resilience",
   "topic": "tensile",
   "name": "Modulus of resilience",
   "sheet": true,
   "calc": "resilience",
   "tex": "U_r = \\tfrac12\\sigma_y\\varepsilon_y = \\frac{\\sigma_y^2}{2E}",
   "meaning": "Elastic energy per volume stored up to yielding and released on unloading.",
   "vars": [],
   "presets": [
    {
     "label": "Final review (Fall 2021) Q7 — brass, σy = 250 MPa, E = 97 GPa",
     "values": {
      "sy": 250,
      "E": 97
     }
    }
   ],
   "steps": [
    "Area under the elastic triangle."
   ],
   "traps": [
    "Calling it ductility (F24 T/F 23 does exactly that)."
   ],
   "seen": [
    "F24-23"
   ],
   "lec": [],
   "guide": "Part 6",
   "cal": "CH 6.6",
   "learn": {
    "idea": "Resilience is the elastic energy a material stores per unit volume up to yielding, and gives back when unloaded: the area of the elastic triangle, $\\sigma_y^2/2E$. Springs want high yield strength and low E.",
    "when": [
     "σy and E given → U_r.",
     "Definitions: resilience vs ductility vs toughness."
    ],
    "example": {
     "title": "Final review (Fall 2021) Q7: brass",
     "given": "σy = 250 MPa, E = 97 GPa",
     "find": "U_r",
     "steps": [
      {
       "say": "Triangle area (MPa = MJ/m³).",
       "tex": "U_r = \\frac{\\sigma_y^2}{2E} = \\frac{250^2}{2(97\\,000)} = 0.322\\ \\text{MJ/m}^3"
      }
     ],
     "answer": "0.32 MJ/m³ = 3.2×10⁵ J/m³"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "similar",
      "q": "A metal has σy = {sy} MPa and E = {E} GPa. Modulus of resilience in MJ/m³?",
      "calc": "resilience",
      "values": {
       "sy": 250,
       "E": 97
      },
      "vary": [
       {
        "key": "sy",
        "min": 150,
        "max": 900,
        "dp": 0
       },
       {
        "key": "E",
        "pick": [
         45,
         70,
         97,
         110,
         207
        ]
       }
      ],
      "row": "U_r",
      "unit": "MJ/m³"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "The energy a material absorbs elastically and gives back on unloading is…",
      "opts": [
       "ductility",
       "toughness",
       "resilience",
       "hardness"
      ],
      "ans": "c",
      "why": "F24 T/F 23 calls this “ductility”, which is false."
     }
    ]
   }
  },
  {
   "id": "truess",
   "topic": "tensile",
   "name": "True stress & true strain",
   "sheet": false,
   "calc": "truess",
   "tex": "\\sigma_T = \\sigma(1+\\varepsilon),\\qquad \\varepsilon_T = \\ln(1+\\varepsilon)\\quad(\\text{until necking})",
   "meaning": "Uses the instantaneous area. In tension σ_T ≥ σ always.",
   "vars": [],
   "presets": [
    {
     "label": "W26 T/F 32 check — σ = 360 MPa at ε = 0.09",
     "from": "W26-32",
     "values": {
      "sigma": 360,
      "eps": 0.09
     }
    }
   ],
   "steps": [
    "Only valid up to the onset of necking (constant volume)."
   ],
   "traps": [
    "After necking the area must be measured."
   ],
   "seen": [
    "W26-32"
   ],
   "lec": [],
   "guide": "Part 6",
   "cal": "CH 6.7",
   "learn": {
    "idea": "Engineering stress divides by the ORIGINAL area; true stress uses the actual, shrinking area. In tension the area only gets smaller, so true stress is always at least the engineering stress. Up to necking (constant volume) $\\sigma_T = \\sigma(1+\\varepsilon)$ and $\\varepsilon_T = \\ln(1+\\varepsilon)$.",
    "when": [
     "Convert an engineering point to true values (before necking).",
     "T/F comparing true and engineering stress."
    ],
    "example": {
     "title": "Check W26 T/F 32 with numbers",
     "given": "σ = 360 MPa, ε = 0.09",
     "find": "σ_T, ε_T",
     "steps": [
      {
       "say": "True stress.",
       "tex": "\\sigma_T = 360(1 + 0.09) = 392\\ \\text{MPa}"
      },
      {
       "say": "True strain.",
       "tex": "\\varepsilon_T = \\ln(1.09) = 0.086"
      }
     ],
     "answer": "σ_T = 392 MPa ≥ 360 MPa, so the statement is True"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "similar",
      "q": "Engineering stress {sigma} MPa at engineering strain {eps} (before necking). True stress in MPa?",
      "calc": "truess",
      "values": {
       "sigma": 360,
       "eps": 0.09
      },
      "vary": [
       {
        "key": "sigma",
        "min": 200,
        "max": 700,
        "dp": 0
       },
       {
        "key": "eps",
        "min": 0.02,
        "max": 0.25,
        "dp": 3
       }
      ],
      "row": "σ_T",
      "unit": "MPa"
     },
     {
      "type": "exam",
      "id": "W26-32"
     }
    ]
   }
  }
 ],
 "videoStops": [
  {
   "topic": "config",
   "title": "Electron configurations → periodic groups",
   "why": "Inert-gas pick (A25), Krypton T/F (A25), valence electrons T/F (W26), and your Practice Set Q1.",
   "videos": [
    {
     "id": "NIwcDnFjj98",
     "title": "Electron Configuration - Basic introduction",
     "channel": "The Organic Chemistry Tutor",
     "len": "10:19",
     "role": "learn",
     "watch": [
      "Watch the 1s → 2s → 2p → 3s → 3p → 4s → 3d filling order and write it on your formula card.",
      "Pause at each example and write the configuration before he does."
     ]
    },
    {
     "id": "6MAKMnZdfbs",
     "title": "Electron Configuration With Noble Gas Notation",
     "channel": "The Organic Chemistry Tutor",
     "len": "10:06",
     "role": "extra",
     "watch": [
      "Focus on why [Ar] = 1s²2s²2p⁶3s²3p⁶: that line is the A25 Q6 answer."
     ]
    }
   ],
   "after": "Classify the six configurations of Practice Set Q1 without notes: ns¹ alkali, ns² alkaline earth, np⁵ halogen, full np⁶ inert, partly filled d transition.",
   "gate": [
    "A25-6",
    "A25-23",
    "W26-36"
   ],
   "formulas": []
  },
  {
   "topic": "bonding",
   "title": "Four bond types + % ionic character",
   "why": "Covalent definition appeared in F24, W26 and (inverted) A25. Na–Cl ionic MC in A25. Carbon bonding every year.",
   "videos": [
    {
     "id": "uDFLHTDJ4XA",
     "title": "Ionic and covalent bonding: a clear foundation",
     "channel": "The Organic Chemistry Tutor",
     "len": "12:50",
     "role": "learn",
     "watch": [
      "Focus on the electron-transfer versus electron-sharing comparison; it makes the ionic-covalent distinction clear before using percent ionic character.",
      "Then connect the examples to this lesson: NaCl is predominantly ionic; diamond is covalent. Metallic and secondary bonds are covered in the lesson notes and practice that follow."
     ]
    },
    {
     "id": "l1GgVwqiufE",
     "title": "Dipole Moment, Molecular Polarity & Percent Ionic Character",
     "channel": "The Organic Chemistry Tutor",
     "len": "16:01",
     "role": "worked",
     "watch": [
      "Skip to the percent-ionic-character part.",
      "Then use the % ionic character calculator (Learn → Calculator) with Lecture 3 slide 9 (TiO₂, ZnTe)."
     ]
    }
   ],
   "after": "Cover the options of F24 Q16 and W26 Q14 and write the covalent definition yourself. Then do A25 T/F 26 (dipoles → False).",
   "gate": [
    "F24-16",
    "W26-14",
    "A25-26",
    "A25-12",
    "F24-3",
    "F24-24"
   ],
   "formulas": [
    "ionic"
   ]
  },
  {
   "topic": "bondcurve",
   "title": "Force & energy curves → Tm, E, α",
   "why": "r₀ from a force curve (F24), the correct-statement MC (W26), and 4 T/Fs on bond strength vs properties across F24 and W26.",
   "videos": [
    {
     "id": "DLE-ieOVFjI",
     "title": "Understanding Young's Modulus & Interatomic Bonds",
     "channel": "The Efficient Engineer",
     "len": "6:42",
     "role": "learn",
     "watch": [
          "Note how Hooke's law at the macro scale emerges directly from the interatomic force curve.",
          "Sketch F_A, F_R and F_N on one axis to see the net force root r_0."
     ]
},
    {
     "id": "U43-NTF-79E",
     "title": "Bond Energy & Potential Energy Curves",
     "channel": "The Organic Chemistry Tutor",
     "len": "11:35",
     "role": "learn",
     "watch": [
          "Link well depth E_0 to melting temperature Tm, and well curvature to stiffness E.",
          "See why repulsive Pauli wall creates asymmetry leading to thermal expansion."
     ]
},
    {
     "id": "-mZAsdJnnMM",
     "title": "Interpreting Potential Energy Curves Worked Example",
     "channel": "Khan Academy",
     "len": "7:15",
     "role": "worked",
     "watch": [
          "Follow the calculation of r_0 where dE/dr = 0 and well depth E_0.",
          "Practice setting up the power-law derivatives step-by-step."
     ]
}
   ],
   "after": "Load Practice Set Q3 in the Formula Lab (r₀ = 0.279 nm, E₀ = −4.58 eV), then answer the four bond-property T/Fs.",
   "gate": [
    "F24-6",
    "W26-11",
    "F24-22",
    "W26-30",
    "W26-21",
    "F24-28"
   ],
   "formulas": [
    "bondwell",
    "ionforce"
   ]
  },
  {
   "topic": "cells",
   "title": "Unit cells: n, CN, a(R), APF",
   "why": "APF ratio was the same question in A25 and W26. Atoms-per-cell traps in F24 and A25.",
   "videos": [
    {
     "id": "HCWwRh5CXYU",
     "title": "Unit Cell Chemistry Simple Cubic, Body Centered Cubic, Face Centered Cubic Crystal Lattice Structure",
     "channel": "The Organic Chemistry Tutor",
     "len": "17:22",
     "role": "learn",
     "watch": [
      "Write n, CN, a(R) and APF for SC, BCC and FCC as he derives each one.",
      "Check your table against Lecture 4 slides 10–12."
     ]
    },
    {
     "id": "HCWwRh5CXYU",
     "title": "Unit Cell Chemistry: Simple Cubic, BCC & FCC Crystal Structures",
     "channel": "The Organic Chemistry Tutor",
     "len": "17:21",
     "role": "learn",
     "watch": [
          "Visualize atom packing, coordination numbers, and lattice parameter geometry for BCC.",
          "Verify the 2 atoms per cell calculation along the body diagonal."
     ]
},
    {
     "id": "vK913oWl_XI",
     "title": "Miller-Bravais Indices & HCP Unit Cell Structure",
     "channel": "LearnChemE",
     "len": "3:47",
     "role": "learn",
     "watch": [
          "Understand the 4-index system (hkil) and basal plane geometry of HCP.",
          "Note the c/a ratio and 6 atoms per unit cell."
     ]
}
   ],
   "after": "Without notes, derive APF for BCC and FCC. Then A25 Q15, W26 Q5, F24 T/F 30, A25 T/F 25.",
   "gate": [
    "A25-15",
    "W26-5",
    "F24-30",
    "A25-25",
    "A25-16",
    "F24-4"
   ],
   "formulas": [
    "cubic"
   ]
  },
  {
   "topic": "density",
   "title": "Theoretical density (forward & backward)",
   "why": "Tungsten (A25) forward, thorium (F24) backwards. Lecture 5 slide 8 is the same template.",
   "videos": [
    {
     "id": "HCWwRh5CXYU",
     "title": "Theoretical Density Calculation for Crystal Structures",
     "channel": "The Organic Chemistry Tutor",
     "len": "17:21",
     "role": "learn",
     "watch": [
      "Use rho = n·A / (Vc·NA) and convert lattice parameter 'a' from nm to cm.",
      "Check unit conversions carefully for grams per cubic centimeter."
     ]
    },
    {
     "id": "ZmcmLibDg_8",
     "title": "Calculation of the Estimated Density of Palladium",
     "channel": "Engineering and Design Solutions",
     "len": "6:26",
     "role": "worked",
     "watch": [
      "He sets up the FCC cell first: 4 atoms per cell and a = 2√2·R, so V_c = a³.",
      "Then ρ = n·A / (V_c·N_A). Convert R from nm to cm before you cube it; that is where most answers go wrong."
     ]
    },
    {
     "id": "aQ6-gUUXKOk",
     "title": "Calculating Density of a Hexagonal Close-Packed Cell of Magnesium",
     "channel": "Engineering and Design Solutions",
     "len": "7:55",
     "role": "extra",
     "watch": [
      "The same formula with an HCP cell: 6 atoms per cell and V_c = (3√3/2)·a²·c."
     ]
    }
   ],
   "after": "Do A25 Q8 by hand, then check with the calculator. Then F24 Q17 using the “find a” mode.",
   "gate": [
    "A25-8",
    "F24-17",
    "F17-16"
   ],
   "formulas": [
    "density"
   ]
  },
  {
   "topic": "directions",
   "title": "Miller indices — directions",
   "why": "W26 had two direction questions (4 marks); F24 had two. Every drawing is new, so only the method transfers.",
   "videos": [
    {
     "id": "9vs_uakh1p8",
     "title": "Crystal Directions",
     "channel": "Engineering and Design Solutions",
     "len": "21:20",
     "role": "learn",
     "watch": [
      "He starts with point coordinates: each one is a fraction of the cell edge along x, y and z.",
      "A direction is head minus tail. Clear the fractions, reduce to the smallest whole numbers, and put a bar over a negative index.",
      "Pause on each practice problem and find the tail and the head yourself before he does."
     ]
    },
    {
     "id": "UobLvLs75l0",
     "title": "Miller Indices: Planes, Directions, and Structures Examples",
     "channel": "MrClean1796",
     "len": "7:41",
     "role": "worked",
     "watch": [
      "Pause before each answer and work it yourself first; check the tail point every time before subtracting."
     ]
    }
   ],
   "after": "Use the direction calculator to check Callister Ex 3.7 and F24 Q14, then do W26 Q1–2 on paper.",
   "gate": [
    "F24-1",
    "F24-14",
    "W26-1",
    "W26-2"
   ],
   "formulas": [
    "direction"
   ]
  },
  {
   "topic": "planes",
   "title": "Miller indices — planes",
   "why": "Planes appeared in all three midterms and both finals; W26 alone had 4 marks of them.",
   "videos": [
    {
     "id": "9Tf1dB1yVKY",
     "title": "Crystallographic Planes",
     "channel": "Engineering and Design Solutions",
     "len": "18:41",
     "role": "learn",
     "watch": [
      "Find where the plane cuts each axis in units of the cell edge; a plane parallel to an axis cuts it at infinity.",
      "Take the reciprocals (1/∞ = 0), clear the fractions and write (hkl); a negative index gets a bar.",
      "If the plane passes through the origin, move the origin to another corner first."
     ]
    },
    {
     "id": "1wsNHLkHiNs",
     "title": "Planes in a Cubic Unit Cell",
     "channel": "Engineering and Design Solutions",
     "len": "3:26",
     "role": "worked",
     "watch": [
      "A short worked problem: pause once he has marked the intercepts and finish it yourself."
     ]
    },
    {
     "id": "zfVWGH8ELc8",
     "title": "Planes in a Unit Cell",
     "channel": "Engineering and Design Solutions",
     "len": "2:08",
     "role": "worked",
     "watch": [
      "One more quick plane: intercepts, reciprocals, whole numbers."
     ]
    }
   ],
   "after": "Plane calculator: Final 2017 Q1 and Callister Ex 3.10. Then A25 Q3, W26 Q3–4, and the old final T/F 31.",
   "gate": [
    "F24-13",
    "A25-3",
    "A25-9",
    "W26-3",
    "W26-4",
    "F17-1",
    "FX-31",
    "A25-24",
    "W26-29"
   ],
   "formulas": [
    "plane"
   ]
  },
  {
   "topic": "ldpd",
   "title": "Linear & planar density, close packing",
   "why": "Planar density is in A25, W26 and F17, each time on a different plane from the lecture example. Close-packed T/Fs in W26.",
   "videos": [
    {
     "id": "VAP_SozPa8M",
     "title": "Linear and Planar Density",
     "channel": "Engineering and Design Solutions",
     "len": "17:11",
     "role": "learn",
     "watch": [
      "Linear density = atoms centred on the direction vector ÷ the length of the vector.",
      "Planar density = atoms centred on the plane ÷ the area of the plane. Count only the share of each atom whose centre lies on the plane."
     ]
    },
    {
     "id": "F0uEfVntPMo",
     "title": "FCC Planar Density",
     "channel": "Engineering and Design Solutions",
     "len": "15:45",
     "role": "worked",
     "watch": [
      "He works FCC (100) and (110) for copper. Write both in terms of R, then try (111) the same way.",
      "Then do BCC (110) yourself: 3/(8√2R²)."
     ]
    },
    {
     "id": "aPC8YwHNrL0",
     "title": "BCC Linear Density",
     "channel": "Engineering and Design Solutions",
     "len": "25:23",
     "role": "extra",
     "watch": [
      "BCC [100], [110] and [111] for iron. The body diagonal [111] is the close-packed direction: 2 atoms in a length of 4R."
     ]
    }
   ],
   "after": "Run all nine plane cases in the calculator once. Then W26 Q6 and A25 Q4 (A25’s posted key is wrong, the answer is e).",
   "gate": [
    "W26-6",
    "A25-4",
    "F17-17",
    "A25-2",
    "W26-27",
    "W26-28"
   ],
   "formulas": [
    "pd"
   ]
  },
  {
   "topic": "xrd",
   "title": "X-ray diffraction & Bragg’s law",
   "why": "Bragg appeared in all three midterms: Pt (F24, then recycled as an A25 T/F) and Rh solved backwards (W26).",
   "videos": [
    {
     "id": "MU2jpHg2vX8",
     "title": "X-Ray Diffraction Peak Analysis & Bragg's Law",
     "channel": "LearnChemE",
     "len": "4:11",
     "role": "learn",
     "watch": [
          "Relate peak angles 2-theta to interplanar spacing d_hkl using n·lambda = 2·d·sin(theta).",
          "Notice selection rules for BCC and FCC peak reflections."
     ]
},
    {
     "id": "Cjce4QumZNk",
     "title": "Bragg's Equation For X-Ray Diffraction Practice Problems",
     "channel": "The Organic Chemistry Tutor",
     "len": "14:58",
     "role": "worked",
     "watch": [
          "Solve for lattice parameter 'a' from diffraction peak angle 2-theta.",
          "Watch the distinction between theta and 2-theta."
     ]
},
    {
     "id": "Cjce4QumZNk",
     "title": "Bragg's Equation For X-Ray Diffraction In Chemistry - Practice Problems",
     "channel": "The Organic Chemistry Tutor",
     "len": "14:59",
     "role": "extra",
     "watch": [
      "Extra reps on rearranging nλ = 2d sin θ."
     ]
    }
   ],
   "after": "Calculator: Lecture 6 slide 17 / Callister Ex 3.13 (BCC Fe 220 → 2θ ≈ 124°), then F24 Q15 forward and W26 Q7 backward.",
   "gate": [
    "F24-15",
    "A25-29",
    "W26-7"
   ],
   "formulas": [
    "bragg"
   ]
  },
  {
   "topic": "structure",
   "title": "Crystalline vs amorphous, polycrystals, polymorphism",
   "why": "The highest-repeat T/F area: polycrystalline-vs-polymorph (F24, W26), amorphous grain boundaries (A25, W26), order (F24, A25).",
   "videos": [
    {
     "id": "KaJfI3IjcA0",
     "title": "Single Crystal, Polycrystalline, Amorphous (Texas A&M, Intro to Materials)",
     "channel": "Patrick Shamberger",
     "len": "13:48",
     "role": "learn",
     "watch": [
      "Single crystal: one continuous lattice. Polycrystal: many grains with different orientations, joined at grain boundaries. Amorphous: no long-range order.",
      "How the form (and grain size) links to properties such as strength and anisotropy."
     ]
    },
    {
     "id": "6l2at-u18sQ",
     "title": "Silicon and Carbon Polymorphism, plus SiC",
     "channel": "Engineering and Design Solutions",
     "len": "17:42",
     "role": "extra",
     "watch": [
      "Polymorphism: the same composition in more than one crystal structure (carbon as diamond and as graphite)."
     ]
    }
   ],
   "after": "Do all eight T/Fs in a row; they are free marks once the definitions are clean.",
   "gate": [
    "F24-29",
    "W26-24",
    "A25-21",
    "A25-22",
    "W26-40",
    "F24-25",
    "A25-30",
    "A25-11",
    "W26-23",
    "W26-38"
   ],
   "formulas": []
  },
  {
   "topic": "vacancy",
   "title": "Vacancies (Arrhenius)",
   "why": "Appeared in every exam: W26 (= old final, = Callister Ex 4.1 at a new T), A25 inverse, F17 another metal.",
   "videos": [
    {
     "id": "idqQhFwg-mo",
     "title": "Vacancies in Metals: Equilibrium Concentration",
     "channel": "LearnChemE",
     "len": "2:52",
     "role": "learn",
     "watch": [
          "Boltzmann-type Arrhenius relation: Nv = N·exp(-Qv / kT).",
          "Notice how vacancy concentration increases exponentially with temperature."
     ]
},
    {
     "id": "m62X8sM6-wI",
     "title": "Materials science vacancies example problem",
     "channel": "Taylor Sparks",
     "len": "2:35",
     "role": "worked",
     "watch": [
          "Find N, the number of atomic sites per volume, from density and atomic weight: $N = N_A\\rho/A$.",
          "Then $N_v = N\\exp(-Q_v/kT)$ with T in kelvin and k in eV/atom·K."
     ]
}
   ],
   "after": "Calculator: Callister Ex 4.1 (2.2×10²⁵), then W26 Q8 at 20 °C (2.8×10¹³). Note how T changes the answer by 12 orders of magnitude. Then A25 Q17 in the Qᵥ mode.",
   "gate": [
    "W26-8",
    "FX-9",
    "A25-17",
    "F17-2",
    "F24-10",
    "W26-33"
   ],
   "formulas": [
    "vacancy"
   ]
  },
  {
   "topic": "solidsol",
   "title": "Solid solutions: substitutional vs interstitial",
   "why": "A25 Q10 = 2017 final Q18 (same options). W26 asked ferrite (interstitial).",
   "videos": [
    {
     "id": "5yW9YnOcEpg",
     "title": "Hume-Rothery Rules for Solid Solutions",
     "channel": "LearnChemE",
     "len": "5:10",
     "role": "learn",
     "watch": [
          "The 4 Hume-Rothery conditions: atomic size (<15%), crystal structure, electronegativity, valence.",
          "Predicting complete vs partial solid solubility in binary alloys."
     ]
},
    {
     "id": "5yW9YnOcEpg",
     "title": "Hume-Rothery Rules",
     "channel": "LearnChemE",
     "len": "5:11",
     "role": "extra",
     "watch": [
      "Quick recap of the four rules."
     ]
    }
   ],
   "after": "Answer A25 Q10, F17 Q18 and W26 Q9 in under a minute total.",
   "gate": [
    "A25-10",
    "F17-18",
    "W26-9"
   ],
   "formulas": [
    "wtat"
   ]
  },
  {
   "topic": "defects",
   "title": "Dislocations & grain boundaries",
   "why": "Edge dislocation figure (A25, old final), “which is false” defect statements (A25, W26), etching (W26).",
   "videos": [
    {
     "id": "1aFgLJcVyaQ",
     "title": "Edge, screw and mixed dislocations",
     "channel": "Introduction to Materials Science and Engineering",
     "len": "9:52",
     "role": "learn",
     "watch": [
      "Edge: b ⟂ line. Screw: b ∥ line. Draw both."
     ]
    },
    {
     "id": "PaGJwOPg2kU",
     "title": "Understanding Dislocations & Crystal Defects in Metals",
     "channel": "The Efficient Engineer",
     "len": "17:57",
     "role": "learn",
     "watch": [
          "Visualize edge and screw dislocations and their Burgers vectors.",
          "See how dislocation slip generates plastic deformation in crystalline metals."
     ]
}
   ],
   "after": "A25 Q14, W26 Q10, A25 Q13, old final Q8.",
   "gate": [
    "A25-14",
    "FX-12",
    "W26-10",
    "A25-13",
    "FX-8",
    "W26-25"
   ],
   "formulas": []
  },
  {
   "topic": "fick1",
   "title": "Fick’s 1st law — the palladium problem",
   "why": "A25 and W26 both asked the Lecture 9 slide 9 hydrogen-purification problem with new numbers.",
   "videos": [
    {
     "id": "c0sigNy6FF4",
     "title": "Diffusion Through a Polymer Film",
     "channel": "Engineering and Design Solutions",
     "len": "6:13",
     "role": "worked",
     "watch": [
      "Steady state: the concentration falls in a straight line, so J = −D·ΔC/Δx.",
      "Keep the units consistent: D in m²/s, C in kg/m³, x in m gives J in kg/(m²·s)."
     ]
    },
    {
     "id": "FuevAkamXNc",
     "title": "Fick’s First Law Example: Steady-State Hydrogen Diffusion Through Palladium",
     "channel": "Fertig Research Group",
     "len": "7:29",
     "role": "worked",
     "watch": [
      "The classic palladium-sheet problem: a straight concentration profile, so $dC/dx$ is just the difference in concentration over the thickness.",
      "Flux $J = -D\\,dC/dx$, then mass per hour = J × area × time."
     ]
    },
    {
     "id": "G5pHnXrACfA",
     "title": "Diffusion and Flux of Carbon in Steel",
     "channel": "Engineering and Design Solutions",
     "len": "14:50",
     "role": "extra",
     "watch": [
      "Carbon into steel, with the flux worked out from a linear concentration profile."
     ]
    }
   ],
   "after": "Calculator: Lecture 9 slide 9, A25 Q7, W26 Q13. Same method three times, with new numbers each time.",
   "gate": [
    "A25-7",
    "W26-13"
   ],
   "formulas": [
    "fick1"
   ]
  },
  {
   "topic": "fick2",
   "title": "Fick’s 2nd law — erf and carburizing",
   "why": "F24 had an erf calculation plus a carburizing-speed concept question; W26 had a T/F.",
   "videos": [
    {
     "id": "WaR3uC-mzCQ",
     "title": "Diffusion - Coefficients and Non Steady State",
     "channel": "Engineering and Design Solutions",
     "len": "23:28",
     "role": "learn",
     "watch": [
      "D(T) first, then non-steady state: (C_x − C₀)/(C_s − C₀) = 1 − erf(x / 2√(Dt)).",
      "He writes k in one formula where R belongs but uses the right value: R = 8.314 J/(mol·K). The audio is quiet, so turn the volume up."
     ]
    },
    {
     "id": "zQ86CTMb6O8",
     "title": "Diffusion of Nitrogen into Iron, Concentration at a Depth",
     "channel": "Engineering and Design Solutions",
     "len": "12:00",
     "role": "worked",
     "watch": [
      "Work out z = x / 2√(Dt), read erf(z) from the table (interpolate), then solve for C_x."
     ]
    }
   ],
   "after": "Calculator: F24 Q7 (Cₓ mode), Callister Ex 5.2 (t mode). Then answer F24 Q18 with the Dt argument.",
   "gate": [
    "F24-7",
    "F24-18",
    "W26-37"
   ],
   "formulas": [
    "erf",
    "dtconst"
   ]
  },
  {
   "topic": "diffmech",
   "title": "Diffusion mechanisms & D(T)",
   "why": "The BCC vs FCC carbon question appeared at 910 °C (F24) and 1200 °C (W26); expect another temperature.",
   "videos": [
    {
     "id": "K_1QmKJvNjc",
     "title": "Introduction to Diffusion in Solids",
     "channel": "Engineering and Design Solutions",
     "len": "17:08",
     "role": "learn",
     "watch": [
      "Diffusion is atoms hopping from site to site: into a neighbouring vacancy, or between atoms (interstitial).",
      "Interstitial diffusion is faster: small atoms, and there are always empty interstitial sites next door."
     ]
    },
    {
     "id": "S8qDlpKiY9c",
     "title": "Diffusion of Copper into Gold",
     "channel": "Engineering and Design Solutions",
     "len": "10:57",
     "role": "worked",
     "watch": [
      "D = D₀·exp(−Q_d / RT): he uses one experiment to predict another at a different temperature.",
      "Use R = 8.314 J/(mol·K) and temperatures in kelvin."
     ]
    },
    {
     "id": "unSnInC0RrI",
     "title": "Basic Metal Diffusion",
     "channel": "Engineering and Design Solutions",
     "len": "10:14",
     "role": "extra",
     "watch": [
      "Iron into cobalt: solving D = D₀·exp(−Q_d / RT) for the temperature, so take ln of both sides."
     ]
    }
   ],
   "after": "Calculator: F24 Q2 at 910 °C, then W26 Q12 at 1200 °C. Then try 1000 °C yourself (≈ 17×).",
   "gate": [
    "F24-2",
    "W26-12",
    "F24-8",
    "F24-27"
   ],
   "formulas": [
    "arrD"
   ]
  },
  {
   "topic": "elastic",
   "title": "Stress, strain, E & Poisson",
   "why": "Rod elongation pair (F24), Poisson in F24 and F17, stiffness vs strength concept (F24).",
   "videos": [
    {
     "id": "zZKn1nrBg1E",
     "title": "Hooke's Law for Solids",
     "channel": "Engineering and Design Solutions",
     "len": "17:49",
     "role": "learn",
     "watch": [
      "σ = F/A₀ and ε = Δl/l₀; in the elastic region σ = E·ε.",
      "Watch where Hooke’s law stops working: past the proportional limit the line bends."
     ]
    },
    {
     "id": "AkX6JqlWRqc",
     "title": "Understanding True Stress and True Strain",
     "channel": "The Efficient Engineer",
     "len": "6:50",
     "role": "learn",
     "watch": [
      "The engineering stress-strain curve from elastic limit to necking and fracture.",
      "Calculating Young's modulus E from the linear Hookean slope."
     ]
    },
    {
     "id": "aZMeXmWtiFc",
     "title": "Stress, Strain, Deformation, and Poisson's Ratio",
     "channel": "Engineering and Design Solutions",
     "len": "11:07",
     "role": "worked",
     "watch": [
      "Poisson’s ratio ν = −ε_lateral / ε_axial; he links it to the shear modulus with E = 2G(1 + ν)."
     ]
    },
    {
     "id": "seYFFn5kAAg",
     "title": "Load, Deformation, and Stress in Tension",
     "channel": "Engineering and Design Solutions",
     "len": "8:56",
     "role": "extra",
     "watch": [
      "Load from stress × area, then the elongation from Δl = σ·l₀ / E, with a check of the units."
     ]
    }
   ],
   "after": "Calculator: F24 Q11 → Q12 (×1.5), F24 Q19, F17 Q12, Callister Ex 6.2.",
   "gate": [
    "F24-11",
    "F24-12",
    "F24-19",
    "F17-12",
    "F24-9"
   ],
   "formulas": [
    "hooke",
    "poisson"
   ]
  },
  {
   "topic": "tensile",
   "title": "Reading the tensile curve (10 marks on W26)",
   "why": "W26 Q16–20 was one curve worth 10 marks, the same sequence as Callister Ex 6.3. A25 compared 5 curves. Hardness MC three times.",
   "videos": [
    {
     "id": "pNIvZyd5djQ",
     "title": "Stress-Strain Curve for Steel and Resulting Points of Interest",
     "channel": "Engineering and Design Solutions",
     "len": "17:47",
     "role": "learn",
     "watch": [
      "He turns load and length data into engineering stress and strain, then reads E, the yield strength, the tensile strength, the ductility and the resilience off the curve."
     ]
    },
    {
     "id": "-qHEi9kijj0",
     "title": "Stress Strain Offset",
     "channel": "Engineering and Design Solutions",
     "len": "35:03",
     "role": "worked",
     "watch": [
      "The 0.2% offset: draw a line with slope E starting at ε = 0.002; where it crosses the curve is the yield strength."
     ]
    }
   ],
   "after": "Redo W26 Q16–20 in order: E (inset) → offset yield → %EL → necking strain → permanent set (recovery calculator).",
   "gate": [
    "W26-16",
    "W26-17",
    "W26-18",
    "W26-19",
    "W26-20",
    "A25-18",
    "A25-19",
    "A25-20",
    "F24-20",
    "A25-5",
    "W26-15",
    "F24-21",
    "F24-23",
    "W26-26",
    "W26-32",
    "W26-35"
   ],
   "formulas": [
    "modulus",
    "recovery",
    "ductility",
    "resilience",
    "truess"
   ]
  },
  {
   "topic": "slip",
   "title": "Ch 7.1–7.4: dislocation motion & slip systems",
   "why": "In your Fall 2026 midterm scope but barely tested before, so expect 1–2 conceptual questions.",
   "videos": [
    {
     "id": "PaGJwOPg2kU",
     "title": "Understanding Plastic Deformation & Slip in Metals",
     "channel": "The Efficient Engineer",
     "len": "17:57",
     "role": "learn",
     "watch": [
      "Dislocation motion along close-packed slip planes and directions.",
      "Schmid's law: resolved shear stress tau_R = sigma·cos(phi)·cos(lambda)."
     ]
    },
    {
     "id": "cpvTwYAUeA8",
     "title": "Dislocations and Plastic Deformation",
     "channel": "LearnChemE",
     "len": "4:04",
     "role": "learn",
     "watch": [
      "The 4 strengthening mechanisms: grain size reduction, solid solution, strain hardening, precipitate hardening.",
      "Why hindering dislocation motion increases yield strength."
     ]
    },
    {
     "id": "QgymOJv0Igc",
     "title": "Loading of a Single Crystal Along Various Slip Systems",
     "channel": "Engineering and Design Solutions",
     "len": "16:16",
     "role": "worked",
     "watch": [
      "Resolved shear stress τ_R = σ·cos φ·cos λ, with φ measured to the slip-plane normal and λ to the slip direction.",
      "The slip system with the largest τ_R slips first, once τ_R reaches the critical value τ_CRSS."
     ]
    }
   ],
   "after": "Write FCC {111}<110> (12 systems) and BCC {110}<111> from memory; answer the old final T/F 32.",
   "gate": [
    "FX-32",
    "W26-10"
   ],
   "formulas": []
  }
 ],
 "plan": {
  "intro": "23 days, four phases, in the order of the teacher’s notes. Each phase is read the slides, then the expanded guide, then the lessons and a drill. Do the drills honestly; your missed questions collect in “Everything I missed” for the last week. The highest-value material is everything marked “Very likely” in Topics: those questions came back on paper after paper.",
  "phases": [
   {
    "title": "Atoms, bonding & crystal structures",
    "when": "Oct 7 – 11",
    "goal": "Ch 1–3 first half: the T/F definitions that repeat every year, plus APF and density.",
    "steps": [
     {
      "id": "p1",
      "kind": "doc",
      "doc": "master",
      "text": "Skim the Master Study Guide so you know the whole map (15 min).",
      "minutes": 15
     },
     {
      "id": "p1a",
      "kind": "doc",
      "doc": "l1",
      "text": "Lecture 1 slides: what a material is, the four classes, processing → structure → properties, the failure case studies.",
      "minutes": 15
     },
     {
      "id": "p1b",
      "kind": "lesson",
      "lesson": "classes",
      "text": "Lesson: material classes and structure–property links (Ch 1 concept checks).",
      "minutes": 10
     },
     {
      "id": "p2",
      "kind": "doc",
      "doc": "l2",
      "text": "Lecture 2 slides: electron configurations, mole calculations, force/energy curves.",
      "minutes": 30
     },
     {
      "id": "p3",
      "kind": "doc",
      "doc": "l3",
      "text": "Lecture 3 slides: the four bond types, % ionic character, properties from bonding.",
      "minutes": 30
     },
     {
      "id": "p4",
      "kind": "lesson",
      "lesson": "ionic",
      "text": "Lesson: % ionic character (understand → example → calculator → practice).",
      "minutes": 15
     },
     {
      "id": "p5",
      "kind": "lesson",
      "lesson": "bondwell",
      "text": "Lesson: r₀ and E₀ from the energy curve (Practice Set Q3).",
      "minutes": 20
     },
     {
      "id": "p6",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "atoms",
       "mode": "all"
      },
      "text": "Drill: Atoms & bonding, every past-paper question.",
      "minutes": 20
     },
     {
      "id": "p7",
      "kind": "doc",
      "doc": "l4",
      "text": "Lecture 4 slides: unit cells, APF, crystal systems.",
      "minutes": 30
     },
     {
      "id": "p8",
      "kind": "lesson",
      "lesson": "cubic",
      "text": "Lesson: unit-cell geometry and APF (derive 0.68 and 0.74 yourself).",
      "minutes": 15
     },
     {
      "id": "p9",
      "kind": "lesson",
      "lesson": "density",
      "text": "Lesson: theoretical density, forward and backward.",
      "minutes": 15
     },
     {
      "id": "p10",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "crystals",
       "mode": "all"
      },
      "text": "Drill: Crystal structures (includes the order and polycrystal T/Fs).",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Crystallography & X-rays",
    "when": "Oct 12 – 16",
    "goal": "Miller indices, planar density and Bragg: the biggest block of marks on W26.",
    "steps": [
     {
      "id": "p11",
      "kind": "doc",
      "doc": "l5",
      "text": "Lecture 5 slides: points, directions, planes, families.",
      "minutes": 40
     },
     {
      "id": "p12",
      "kind": "lesson",
      "lesson": "direction",
      "text": "Lesson: direction indices [uvw].",
      "minutes": 15
     },
     {
      "id": "p13",
      "kind": "lesson",
      "lesson": "plane",
      "text": "Lesson: plane indices (hkl), including moving the origin.",
      "minutes": 15
     },
     {
      "id": "p14",
      "kind": "videos",
      "topic": "planes",
      "text": "Watch LearnChemE on labelling planes if (hkl) still feels slow.",
      "minutes": 15
     },
     {
      "id": "p15",
      "kind": "doc",
      "doc": "l6",
      "text": "Lecture 6 slides: linear/planar density, single vs polycrystals, XRD.",
      "minutes": 40
     },
     {
      "id": "p16",
      "kind": "lesson",
      "lesson": "pd",
      "text": "Lesson: planar density. Do (100), (110) and (111) for both FCC and BCC.",
      "minutes": 20
     },
     {
      "id": "p17",
      "kind": "lesson",
      "lesson": "bragg",
      "text": "Lesson: Bragg’s law, forwards (Pt) and backwards (Rh).",
      "minutes": 20
     },
     {
      "id": "p18",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "cryst",
       "mode": "repeats"
      },
      "text": "Drill: Crystallography repeated questions.",
      "minutes": 20
     },
     {
      "id": "p19",
      "kind": "doc",
      "doc": "r3",
      "text": "One-page review sheets for Parts 3 and 4.",
      "minutes": 10
     }
    ]
   },
   {
    "title": "Imperfections & diffusion",
    "when": "Oct 17 – 22",
    "goal": "Ch 4–5: vacancies, solid solutions, Fick I (palladium) and D(T), all asked every year.",
    "steps": [
     {
      "id": "p20",
      "kind": "doc",
      "doc": "l7",
      "text": "Lecture 7 slides: point defects, Arrhenius, solid solutions, dislocations.",
      "minutes": 40
     },
     {
      "id": "p21",
      "kind": "lesson",
      "lesson": "vacancy",
      "text": "Lesson: equilibrium vacancies (Callister Ex 4.1, then W26 at 20 °C).",
      "minutes": 20
     },
     {
      "id": "p22",
      "kind": "doc",
      "doc": "l8",
      "text": "Lecture 8 slides: grain boundaries, stacking faults, microscopy.",
      "minutes": 25
     },
     {
      "id": "p23",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "imperf",
       "mode": "all"
      },
      "text": "Drill: Imperfections.",
      "minutes": 15
     },
     {
      "id": "p24",
      "kind": "doc",
      "doc": "l9",
      "text": "Lecture 9 slides: mechanisms, Fick I & II, D(T).",
      "minutes": 45
     },
     {
      "id": "p25",
      "kind": "lesson",
      "lesson": "fick1",
      "text": "Lesson: Fick’s first law, the palladium problem.",
      "minutes": 15
     },
     {
      "id": "p26",
      "kind": "lesson",
      "lesson": "arrD",
      "text": "Lesson: D(T). Recompute the BCC/FCC ratio at a new temperature.",
      "minutes": 15
     },
     {
      "id": "p27",
      "kind": "lesson",
      "lesson": "erf",
      "text": "Lesson: Fick’s second law with the erf table.",
      "minutes": 20
     },
     {
      "id": "p28",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "diffusion",
       "mode": "all"
      },
      "text": "Drill: Diffusion.",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Mechanical properties & slip",
    "when": "Oct 23 – 26",
    "goal": "Ch 6–7.4: the tensile-curve block was 10 marks on W26.",
    "steps": [
     {
      "id": "p28a",
      "kind": "doc",
      "doc": "l10",
      "text": "Lecture 10 slides: stress and strain, Hooke’s law, E vs temperature, tangent/secant modulus, Poisson, anelasticity.",
      "minutes": 35
     },
     {
      "id": "p29",
      "kind": "doc",
      "doc": "g6",
      "text": "Part 6 guide: Lecture 10 worked through (blanks filled), then the tensile curve, which the plastic-deformation lecture will cover.",
      "minutes": 45
     },
     {
      "id": "p30",
      "kind": "lesson",
      "lesson": "hooke",
      "text": "Lesson: elastic elongation (F24 rods).",
      "minutes": 15
     },
     {
      "id": "p31",
      "kind": "lesson",
      "lesson": "poisson",
      "text": "Lesson: Poisson’s ratio in all three directions.",
      "minutes": 15
     },
     {
      "id": "p32",
      "kind": "lesson",
      "lesson": "recovery",
      "text": "Lesson: elastic recovery and permanent set.",
      "minutes": 10
     },
     {
      "id": "p33",
      "kind": "videos",
      "topic": "tensile",
      "text": "Videos: reading the tensile curve (0.2 % offset, ductility vs toughness).",
      "minutes": 20
     },
     {
      "id": "p34",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "mech",
       "mode": "all"
      },
      "text": "Drill: Mechanical properties.",
      "minutes": 20
     },
     {
      "id": "p35",
      "kind": "doc",
      "doc": "g7",
      "text": "Part 7 guide, sections 7.1–7.4 only: dislocation motion and slip systems.",
      "minutes": 25
     }
    ]
   },
   {
    "title": "Exam mode",
    "when": "Oct 27 – 29",
    "goal": "Timed practice, then only your weak spots.",
    "steps": [
     {
      "id": "p36",
      "kind": "drill",
      "drill": {
       "scope": "mock"
      },
      "text": "Mock midterm #1 (20 questions, aim for 75 min).",
      "minutes": 40
     },
     {
      "id": "p37",
      "kind": "drill",
      "drill": {
       "scope": "missed"
      },
      "text": "Everything I missed, until it is empty.",
      "minutes": 30
     },
     {
      "id": "p38",
      "kind": "drill",
      "drill": {
       "scope": "repeats"
      },
      "text": "All repeated questions one last time.",
      "minutes": 40
     },
     {
      "id": "p39",
      "kind": "task",
      "text": "Re-read the answer-key corrections at the bottom of Topics (A25 Q4, Q20, T/F 30; W26 Q2, Q3, Q6, Q12, Q16).",
      "minutes": 5
     },
     {
      "id": "p40",
      "kind": "drill",
      "drill": {
       "scope": "mock"
      },
      "text": "Mock midterm #2 the evening before.",
      "minutes": 40
     },
     {
      "id": "p41",
      "kind": "task",
      "text": "Pack: approved calculator, pencil. The equation sheet and erf table are provided.",
      "minutes": 2
     }
    ]
   }
  ]
 }
};

// narrated solve video per question (generated by the motion-lesson publisher)
content.solveVideos = MIAE221_SOLVE_VIDEOS;
// narrated "topic explained" video per subtopic (same publisher)
content.topicVideos = MIAE221_TOPIC_VIDEOS;
// the figure each past-exam question asks about
for (const q of content.questions) if (MIAE221_FIGURES[q.id]) q.fig = MIAE221_FIGURES[q.id];

export default content;
