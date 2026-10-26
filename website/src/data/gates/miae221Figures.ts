// The figure each MIAE 221 past-exam question asks about (public/exam-figures/miae221). Every one is redrawn as a
// clean SVG from the paper it was set on, with each point, intercept and curve placed from the question's own data
// and its verified answer: scripts/figures/miae221-exam-figures.py.
import type { QuestionFigure } from './types';

const fig = (file: string, alt: string, caption: string): QuestionFigure => ({ src: `/exam-figures/miae221/${file}.svg`, alt, caption });

const F24_FORCE = fig('f24-force-curve', 'Net bonding force (kN) against interatomic separation (Å); the curve crosses zero between 2 and 4 Å', 'Fall 2024 midterm, Q6: net bonding force vs interatomic separation (redrawn from the paper).');
const F24_CUBE = fig('f24-cube-plane-k-direction-i', 'Cubic unit cell with axes, showing planes K and L, directions I and J, point H, the edge centre and face-centre point G', 'Fall 2024 midterm, Q13–14: planes K and L, directions I and J (redrawn from the paper).');
const A25_1 = fig('a25-figure-1', 'Unit cell with corner atoms A to G and one atom at the body centre', 'Midterm 2025, Figure 1 (redrawn from the paper).');
const A25_2 = fig('a25-figure-2', 'Cubic unit cell with two shaded planes A and B and their axis intercepts ½, ½, ½ and ⅔', 'Midterm 2025, Figure 2: planes A and B (redrawn from the paper).');
const A25_3 = fig('a25-figure-3', 'Atomic lattice drawn with depth, with an extra half-plane of atoms ending in the middle and shear stress τ arrows', 'Midterm 2025, Figure 3 (redrawn from the paper).');
const A25_4 = fig('a25-figure-4', 'Five stress–strain curves labelled A, B, C, D and F', 'Midterm 2025, Figure 4: stress–strain curves of five materials (redrawn from the paper).');
const W26_DIRS = fig('w26-directions-a-d', 'Cubic unit cell with four directions A, B, C and D and the fractional coordinates of their ends', 'Winter 2026 midterm, Q1–2: directions A to D (redrawn from the paper).');
const W26_AB = fig('w26-planes-a-b', 'Cubic unit cell with shaded plane A at the top and plane B through the bottom, intercepts ¾ and ⅓ marked', 'Winter 2026 midterm, Q3: planes A and B (redrawn from the paper).');
const W26_CD = fig('w26-planes-c-d', 'Cubic unit cell with triangular plane C and vertical plane D, with the points ¼, ⅓ and ¾ marked', 'Winter 2026 midterm, Q4: planes C and D (redrawn from the paper).');
const W26_SS = fig(
  'w26-stress-strain',
  'Engineering stress (0 to 400 MPa) against strain (0 to 0.2), with a low-strain inset',
  'Winter 2026 midterm, Q16–20 (redrawn from the paper). The inset magnifies the start of the curve: strain 0 to 0.010, minor ticks every 0.001.'
);
const FX_1 = fig('fx-figure-1', 'a) energy and b) force against separation r, with points A to E marked', 'Old final, Figure 1: energy and force curves (redrawn from the paper).');
const FX_2 = fig('fx-figure-2', 'Unit cell with corner atoms A to E and an atom at the centre of every face', 'Old final, Figure 2 (redrawn from the paper).');
const F17_1 = fig('f17-q1-plane', 'Cubic unit cell of edge a with a shaded plane cutting x at 1, parallel to y, and z at ½', 'Final 2017, Q1: the plane in the cubic unit cell (redrawn from the paper).');
const FX_5 = fig('fx-figure-5', 'Atomic lattice with a distorted region and arrows showing the shear direction', 'Old final, Figure 5 (redrawn from the paper).');

export const MIAE221_FIGURES: Record<string, QuestionFigure> = {
  'F24-6': F24_FORCE,
  'F24-13': F24_CUBE,
  'F24-14': F24_CUBE,
  'A25-1': A25_1,
  'A25-2': A25_1,
  'A25-3': A25_1,
  'A25-4': A25_1,
  'A25-9': A25_2,
  'A25-14': A25_3,
  'A25-18': A25_4,
  'A25-19': A25_4,
  'A25-20': A25_4,
  'W26-1': W26_DIRS,
  'W26-2': W26_DIRS,
  'W26-3': W26_AB,
  'W26-4': W26_CD,
  'W26-16': W26_SS,
  'W26-17': W26_SS,
  'W26-18': W26_SS,
  'W26-19': W26_SS,
  'W26-20': W26_SS,
  'FX-1': FX_1,
  'FX-5': FX_2,
  'FX-12': FX_5,
  'F17-1': F17_1
};
