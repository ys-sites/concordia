import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

// MIAE 221 — Lecture 6 (atomic densities, single vs polycrystals, X-ray diffraction, polymorphism),
// Lecture 7 (point defects, solid solutions, composition, dislocations) and past-midterm practice
// (2025 Midterm, version A), limited to topics the teacher's notes cover so far.
const L3 = 'lecture 3-review chemistry 2-students26.pdf';
const L4 = 'lecture 4-crystal structure 1-students26.pdf';
const L5 = 'lecture 5-crystal structure 2-students26.pdf';
const L6 = 'lecture 6-crystal structure3-students26.pdf';
const L7 = 'lecture 7-defects 1-students26.pdf';
const L2 = 'lecture 2-review chemistry-students26.pdf';
const CAL = 'Callister (10th/9th Ed.) — Materials Science and Engineering: An Introduction';
const CH3 = 'Ch. 3 · Crystal Structures';
const CH4 = 'Ch. 4 · Imperfections in Solids';
const CH2 = 'Ch. 2 · Atomic Structure & Bonding';
const src = (deck: string, chapter: string, location: string): QuestionSource[] => [{ deck, chapter, location }];

const q = (p: Omit<PracticeQuestion, 'courseId'>): PracticeQuestion => ({ courseId: 'MIAE221', ...p });

export const MIAE221_EXTRA: PracticeQuestion[] = [
  // ------------------------------------------------------------------ Lecture 6
  q({
    id: 'Q_MIAE221_L601',
    chapter: 'densities',
    topic: 'Linear Density',
    difficulty: 'Foundation',
    question: t`What is the linear density of the $[100]$ direction in FCC, in terms of the atomic radius $R$?`,
    options: [t`$\dfrac{1}{2\sqrt2\,R}$`, t`$\dfrac{2}{2\sqrt2\,R}$`, t`$\dfrac{1}{2R}$`, t`$\dfrac{1}{4R}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$LD = \dfrac{n}{L_L}$: count only atoms whose centres lie on the direction vector inside one cell length, and divide by that length.`,
      stepByStep: [],
      steps: [
        { title: 'The $[100]$ vector runs along a cube edge, from one corner to the next', note: t`Each corner atom on the line is shared with the neighbouring cell's segment.` },
        { title: 'Count atoms centred on the segment', math: t`n = \tfrac12 + \tfrac12 = 1` },
        { title: 'Line length is one lattice parameter', math: t`L_L = a = 2\sqrt2\,R` },
        { title: 'Divide', math: t`LD_{[100]} = \frac{1}{2\sqrt2\,R}` }
      ],
      answer: t`LD_{[100]} = \frac{1}{2\sqrt2\,R}`,
      whyWrong: {
        '1': t`The two corner atoms each contribute only half to this segment, so $n = 1$, not 2.`,
        '2': t`$\tfrac{1}{2R}$ is the $[110]$ density: along the face diagonal atoms touch, so $n = 2$ over $L_L = 4R$.`,
        '3': t`$4R$ is the face-diagonal length, not the edge length.`
      },
      commonTrap: t`Counting atoms that are near the line but not centred on it. In FCC the face-centre atoms do not lie on the $[100]$ edge.`,
      reference: `${L6} · Page 4`
    },
    source: src(L6, CH3, 'Page 4 (linear density)')
  }),
  q({
    id: 'Q_MIAE221_L602',
    chapter: 'densities',
    topic: 'Planar Density (FCC 110)',
    difficulty: 'Midterm Level',
    question: t`Following the Lecture 6 example, what is the planar density of the $(110)$ plane in FCC?`,
    options: [t`$\dfrac{1}{4\sqrt2\,R^{2}}$`, t`$\dfrac{1}{8\sqrt2\,R^{2}}$`, t`$\dfrac{3}{8\sqrt2\,R^{2}}$`, t`$\dfrac{1}{4R^{2}}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$PD = \dfrac{n}{A_P}$, where $n$ counts only atoms whose centres lie on the plane (as fractions inside the cell's section of that plane).`,
      stepByStep: [],
      steps: [
        { title: 'The $(110)$ section of the cell is a rectangle', note: t`One side is a cube edge ($a$), the other a face diagonal ($\sqrt2\,a$).` },
        { title: 'Side lengths in terms of $R$ (slide 6)', math: t`AD = a = 2\sqrt2\,R, \qquad AC = \sqrt2\,a = 4R` },
        { title: 'Area of the rectangle', math: t`A_P = (4R)\left(2\sqrt2\,R\right) = 8\sqrt2\,R^{2}` },
        { title: 'Atoms centred on the plane', math: t`n = 4\left(\tfrac14\right)_{\text{corners}} + 2\left(\tfrac12\right)_{\text{edge midpoints}} = 1 + 1 = 2` },
        { title: 'Divide', math: t`PD_{(110)} = \frac{2}{8\sqrt2\,R^{2}} = \frac{1}{4\sqrt2\,R^{2}}` }
      ],
      answer: t`PD_{(110)} = \frac{1}{4\sqrt2\,R^{2}}`,
      whyWrong: {
        '1': t`Only one atom was counted. The two face-centre atoms of the side faces sit on the long edges of the rectangle and add $2 \times \tfrac12 = 1$ more.`,
        '2': t`$\tfrac{3}{8\sqrt2 R^{2}}$ is the BCC $(110)$ result (2 atoms on a rectangle $a \times \sqrt2 a$ with $a = 4R/\sqrt3$).`,
        '3': t`$\tfrac{1}{4R^{2}}$ is the FCC $(100)$ plane (2 atoms on a square of side $2\sqrt2 R$).`
      },
      commonTrap: t`Counting the body-centre region: in FCC nothing sits at the cube centre, so no atom is added in the middle of the $(110)$ rectangle.`,
      reference: `${L6} · Pages 5–6`
    },
    source: src(L6, CH3, 'Pages 5–6 (planar density example)')
  }),
  q({
    id: 'Q_MIAE221_L603',
    chapter: 'densities',
    topic: 'Planar Density & Slip',
    difficulty: 'Midterm Level',
    question: t`In FCC, $PD_{(100)} = \dfrac{1}{4R^{2}}$, $PD_{(110)} = \dfrac{1}{4\sqrt2\,R^{2}}$ and $PD_{(111)} = \dfrac{1}{2\sqrt3\,R^{2}}$. On which plane does slip occur?`,
    options: [t`$(111)$, the most densely packed plane`, t`$(110)$, the least densely packed plane`, t`$(100)$, because it is parallel to a cube face`, t`All three equally`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Slip happens on the closest-packed planes along the closest-packed directions (Lecture 6, slide 7).`,
      stepByStep: [],
      steps: [
        { title: 'Put the densities on the same scale', math: t`PD_{(111)} = \frac{0.289}{R^{2}},\qquad PD_{(100)} = \frac{0.250}{R^{2}},\qquad PD_{(110)} = \frac{0.177}{R^{2}}` },
        { title: 'Rank them', math: t`(111) > (100) > (110)` },
        { title: 'Apply the slip rule', note: t`The densest plane is $(111)$, so slip occurs on $\{111\}$ planes (along the close-packed $\langle 110 \rangle$ face diagonals).` }
      ],
      answer: t`(111)`,
      whyWrong: {
        '1': t`Slip prefers the densest plane, not the least dense one: widely spaced, densely packed planes slide most easily.`,
        '2': t`Being parallel to a cube face is not the criterion; compare the numbers: $0.25 < 0.289$.`,
        '3': t`The planar densities differ, so the planes are not equivalent for slip.`
      },
      commonTrap: t`Comparing the fractions by their denominators without evaluating them: convert to decimals first.`,
      reference: `${L6} · Page 7`
    },
    source: src(L6, CH3, 'Page 7 (why linear and planar densities matter)')
  }),
  q({
    id: 'Q_MIAE221_L604',
    chapter: 'densities',
    topic: 'Bragg’s Law (Lecture Example)',
    difficulty: 'Exam Master',
    question: t`Lecture 6 example: BCC iron, $a = 0.2866$ nm, $\lambda = 0.1790$ nm, first-order reflection ($n = 1$). At what diffraction angle $2\theta$ does the $(220)$ reflection occur?`,
    options: [t`$2\theta \approx 124.1^\circ$`, t`$2\theta \approx 62.0^\circ$`, t`$2\theta \approx 52.4^\circ$`, t`No reflection: $\sin\theta > 1$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Cubic interplanar spacing $d_{hkl} = \dfrac{a}{\sqrt{h^{2} + k^{2} + l^{2}}}$, then Bragg's law $n\lambda = 2d_{hkl}\sin\theta$. The diffractometer reports $2\theta$.`,
      stepByStep: [],
      steps: [
        { title: 'Interplanar spacing of $(220)$', math: t`d_{220} = \frac{0.2866}{\sqrt{2^{2} + 2^{2} + 0^{2}}} = \frac{0.2866}{\sqrt8} = 0.1013\ \text{nm}` },
        { title: "Bragg's law solved for $\\sin\\theta$", math: t`\sin\theta = \frac{n\lambda}{2d_{220}} = \frac{(1)(0.1790)}{2(0.1013)} = 0.8833` },
        { title: 'Inverse sine', math: t`\theta = \sin^{-1}(0.8833) \approx 62.0^\circ` },
        { title: 'Diffraction angle', math: t`2\theta \approx 124.1^\circ` }
      ],
      answer: t`2\theta \approx 124.1^\circ`,
      whyWrong: {
        '1': t`$62.0^\circ$ is $\theta$. The question (and the diffractometer) uses $2\theta$.`,
        '2': t`$52.4^\circ$ uses $d_{110} = a/\sqrt2$. For $(220)$, $h^{2} + k^{2} + l^{2} = 8$.`,
        '3': t`$\sin\theta > 1$ happens if you drop the 2 in $2d\sin\theta$: $0.1790/0.1013 = 1.77$.`
      },
      commonTrap: t`Reporting $\theta$ when $2\theta$ is asked, and forgetting the square root in $d_{hkl}$.`,
      reference: `${L6} · Pages 14–17`
    },
    source: src(L6, CH3, 'Pages 14–17 (Bragg’s law and worked example)')
  }),
  q({
    id: 'Q_MIAE221_L605',
    chapter: 'densities',
    topic: 'Single Crystals vs Polycrystals',
    difficulty: 'Foundation',
    question: t`Single-crystal BCC iron has a modulus that depends on direction, yet a polycrystalline iron bar has $E \approx 210$ GPa in every direction. Why?`,
    options: [
      t`Its grains are randomly oriented, so the directional properties average out (isotropic)`,
      t`Polycrystals have no crystal structure`,
      t`Grain boundaries make every grain the same orientation`,
      t`The modulus of iron never depends on direction`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Each grain is a single crystal (anisotropic). The bulk property depends on how the grains are oriented.`,
      stepByStep: [],
      steps: [
        { title: 'Single crystal', note: t`Properties vary with direction (anisotropic), e.g. $E$ of BCC Fe differs along $[100]$ and $[111]$.` },
        { title: 'Random polycrystal', note: t`Many grains with random orientations: every direction samples all crystal directions, so the average is the same everywhere (isotropic).` },
        { title: 'Textured polycrystal', note: t`If rolling or casting aligns the grains, the bar becomes anisotropic again.` }
      ],
      whyWrong: {
        '1': t`Each grain is fully crystalline; only the orientation changes from grain to grain.`,
        '2': t`Adjacent grains differ precisely in orientation; that is what a grain boundary separates.`,
        '3': t`Slide 9 shows the modulus of single-crystal BCC iron does depend on direction.`
      },
      commonTrap: t`Thinking "polycrystalline" means "amorphous". A polycrystal is many crystals; an amorphous solid has no long-range order at all.`,
      reference: `${L6} · Pages 8–9`
    },
    source: src(L6, CH3, 'Pages 8–9 (single vs polycrystals)')
  }),
  q({
    id: 'Q_MIAE221_L606',
    chapter: 'densities',
    topic: 'X-Ray Diffraction Conditions',
    difficulty: 'Foundation',
    question: t`Why are X-rays (rather than visible light) used to study crystal planes?`,
    options: [
      t`Their wavelength is comparable to interatomic spacings, so the regularly spaced atoms diffract them`,
      t`They are cheaper than visible light`,
      t`They pass through without interacting with atoms`,
      t`Only X-rays can travel through a vacuum`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Diffraction needs obstacles that scatter the wave and are spaced at about the wavelength (slide 11).`,
      stepByStep: [],
      steps: [
        { title: 'Condition for diffraction', note: t`Regularly spaced scatterers with spacing comparable to $\lambda$.` },
        { title: 'Match the scales', note: t`Interatomic spacings are about 0.1–0.3 nm; X-ray wavelengths are about 0.1 nm. Visible light (400–700 nm) is thousands of times too long.` }
      ],
      whyWrong: {
        '1': t`Cost is not the reason; the physics of diffraction is.`,
        '2': t`X-rays must be scattered by the electrons of the atoms; that scattering is what produces the peaks.`,
        '3': t`Visible light also travels through a vacuum; this is irrelevant to diffraction.`
      },
      commonTrap: t`Forgetting that neutron and electron beams can also be diffracted for the same reason.`,
      reference: `${L6} · Page 11`
    },
    source: src(L6, CH3, 'Page 11 (X-ray diffraction)')
  }),
  q({
    id: 'Q_MIAE221_L607',
    chapter: 'densities',
    topic: 'Powder Diffraction',
    difficulty: 'Foundation',
    question: t`Why does the diffractometer technique use a powder (polycrystalline) sample?`,
    options: [
      t`So that some particles are oriented to satisfy Bragg's law for every set of planes`,
      t`Powders have a higher density than solids`,
      t`Powders remove the need for a monochromatic beam`,
      t`Powders are amorphous, so they give no peaks`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Bragg's law is satisfied only at a specific angle for each $(hkl)$. Random grains guarantee that every plane family is present in the diffracting orientation.`,
      stepByStep: [],
      steps: [
        { title: 'One crystal, one orientation', note: t`A single crystal diffracts only for the few planes that happen to meet $n\lambda = 2d\sin\theta$ at its orientation.` },
        { title: 'Many random grains', note: t`With thousands of randomly oriented particles, some are always correctly oriented for each $(hkl)$, so all reflections appear as the detector sweeps $2\theta$.` }
      ],
      whyWrong: {
        '1': t`Density is not the point; orientation is.`,
        '2': t`The source must still be monochromatic (slide 14) so each $d$ gives one angle.`,
        '3': t`Powder grains are still crystalline; amorphous material gives no sharp peaks.`
      },
      commonTrap: t`Confusing "polycrystalline" with "non-crystalline".`,
      reference: `${L6} · Page 16`
    },
    source: src(L6, CH3, 'Page 16 (diffractometer technique)')
  }),
  q({
    id: 'Q_MIAE221_L608',
    chapter: 'densities',
    topic: 'Linear Density (Copper)',
    difficulty: 'Midterm Level',
    question: t`Copper is FCC with $R = 0.128$ nm. What is the linear density along $[110]$?`,
    options: [t`$\approx 3.91\ \text{nm}^{-1}$`, t`$\approx 2.76\ \text{nm}^{-1}$`, t`$\approx 1.95\ \text{nm}^{-1}$`, t`$\approx 7.81\ \text{nm}^{-1}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In FCC, atoms touch along the face diagonal $\langle 110 \rangle$, which is the close-packed direction.`,
      stepByStep: [],
      steps: [
        { title: 'Atoms centred on one face diagonal', math: t`n = \tfrac12 + 1 + \tfrac12 = 2` },
        { title: 'Length of the face diagonal (atoms touch)', math: t`L_L = 4R = 4(0.128) = 0.512\ \text{nm}` },
        { title: 'Divide', math: t`LD_{[110]} = \frac{2}{0.512\ \text{nm}} = \frac{1}{2R} \approx 3.91\ \text{nm}^{-1}` }
      ],
      answer: t`LD_{[110]} \approx 3.91\ \text{nm}^{-1}`,
      whyWrong: {
        '1': t`$2.76\ \text{nm}^{-1} = 1/(2\sqrt2 R)$ is the $[100]$ density.`,
        '2': t`$1.95\ \text{nm}^{-1}$ counts only one atom on the diagonal; the face-centre atom lies on it too.`,
        '3': t`$7.81\ \text{nm}^{-1}$ divides by $2R$ instead of the full diagonal $4R$.`
      },
      commonTrap: t`Using $a$ as the length for every direction. Each direction has its own length inside the cell.`,
      reference: `${L6} · Page 4`
    },
    source: src(L6, CH3, 'Page 4 (linear density)')
  }),

  // ------------------------------------------------------------------ Lecture 7
  q({
    id: 'Q_MIAE221_L701',
    chapter: 'defects',
    topic: 'Vacancy Fraction (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`Lecture 7 example: lead at its melting point (600 K) has a vacancy formation energy $Q_v = 0.55$ eV/atom. What fraction of atom sites are vacant?`,
    options: [t`$\approx 2.4\times10^{-5}$`, t`$\approx 0.99998$`, t`$\approx 3.4\times10^{-9}$`, t`$\approx 4.2\times10^{4}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Arrhenius equation $\dfrac{N_v}{N} = \exp\left(-\dfrac{Q_v}{kT}\right)$ with $k = 8.62\times10^{-5}$ eV/(atom·K) and $T$ in kelvin.`,
      stepByStep: [],
      steps: [
        { title: 'Write the Arrhenius equation', math: t`\frac{N_v}{N} = \exp\!\left(-\frac{Q_v}{kT}\right)` },
        { title: 'Compute $kT$ (units: eV/atom)', math: t`kT = (8.62\times10^{-5})(600) = 0.05172\ \text{eV}` },
        { title: 'Exponent', math: t`\frac{Q_v}{kT} = \frac{0.55}{0.05172} = 10.63` },
        { title: 'Evaluate', math: t`\frac{N_v}{N} = e^{-10.63} \approx 2.4\times10^{-5}` },
        { title: 'Meaning', note: t`About 2 or 3 of every 100 000 lattice sites are empty, even at the melting point.` }
      ],
      answer: t`N_v/N \approx 2.4\times10^{-5}`,
      whyWrong: {
        '1': t`0.99998 is $1 - N_v/N$: the fraction of occupied sites.`,
        '2': t`$3.4\times10^{-9}$ uses $T = 327$ (°C instead of K), which makes the exponent $-19.5$. Arrhenius always needs kelvin.`,
        '3': t`$e^{+10.63}$: the minus sign in the exponent was dropped. A fraction cannot exceed 1.`
      },
      commonTrap: t`Mixing units: with $Q$ in eV use $k = 8.62\times10^{-5}$ eV/K; with $Q$ in J use $k = 1.38\times10^{-23}$ J/K.`,
      reference: `${L7} · Pages 5 and 8`
    },
    source: src(L7, CH4, 'Pages 5 and 8 (Arrhenius equation, lead example)')
  }),
  q({
    id: 'Q_MIAE221_L702',
    chapter: 'defects',
    topic: 'Number of Vacancies per Volume',
    difficulty: 'Exam Master',
    question: t`Copper at $1000^\circ$C: $Q_v = 0.9$ eV/atom, $\rho = 8.4$ g/cm³, $A = 63.5$ g/mol. How many vacancies are there per cubic metre?`,
    options: [t`$\approx 2.2\times10^{25}\ \text{m}^{-3}$`, t`$\approx 8.0\times10^{28}\ \text{m}^{-3}$`, t`$\approx 2.7\times10^{-4}\ \text{m}^{-3}$`, t`$\approx 2.2\times10^{19}\ \text{m}^{-3}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`First count all lattice sites per volume, $N = \dfrac{\rho N_A}{A}$ (Lecture 5), then multiply by the Arrhenius vacancy fraction (Lecture 7).`,
      stepByStep: [],
      steps: [
        { title: 'Density in g/m³', math: t`\rho = 8.4\ \text{g/cm}^{3} \times 10^{6}\ \tfrac{\text{cm}^{3}}{\text{m}^{3}} = 8.4\times10^{6}\ \text{g/m}^{3}` },
        { title: 'Atom sites per m³', math: t`N = \frac{\rho N_A}{A} = \frac{(8.4\times10^{6})(6.022\times10^{23})}{63.5} = 8.0\times10^{28}\ \text{m}^{-3}` },
        { title: 'Temperature in kelvin', math: t`T = 1000 + 273 = 1273\ \text{K}` },
        { title: 'Vacancy fraction', math: t`\frac{N_v}{N} = \exp\!\left(-\frac{0.9}{(8.62\times10^{-5})(1273)}\right) = e^{-8.20} = 2.74\times10^{-4}` },
        { title: 'Vacancies per m³', math: t`N_v = (8.0\times10^{28})(2.74\times10^{-4}) \approx 2.2\times10^{25}\ \text{m}^{-3}` }
      ],
      answer: t`N_v \approx 2.2\times10^{25}\ \text{m}^{-3}`,
      whyWrong: {
        '1': t`$8.0\times10^{28}$ is the total number of atom sites $N$; it still needs multiplying by $N_v/N$.`,
        '2': t`$2.7\times10^{-4}$ is the vacancy fraction $N_v/N$ (dimensionless), not a number per volume.`,
        '3': t`$2.2\times10^{19}$ keeps $\rho$ in g/cm³ ($10^{6}$ too small), which gives vacancies per cm³, not per m³.`
      },
      commonTrap: t`Forgetting the cm³ → m³ conversion, which is a factor of $10^{6}$.`,
      reference: `${L7} · Page 5`
    },
    source: [
      { deck: L7, chapter: CH4, location: 'Page 5 (equilibrium vacancy concentration)' },
      { deck: L5, chapter: CH3, location: 'Density relation ρ = nA/(V_C N_A)' }
    ]
  }),
  q({
    id: 'Q_MIAE221_L703',
    chapter: 'defects',
    topic: 'Vacancies vs Temperature',
    difficulty: 'Foundation',
    question: t`How does the equilibrium vacancy concentration change as temperature increases?`,
    options: [t`It increases exponentially`, t`It decreases exponentially`, t`It stays constant`, t`It increases linearly`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\dfrac{N_v}{N} = \exp\left(-\dfrac{Q_v}{kT}\right)$: as $T$ rises the negative exponent shrinks in size, so the fraction grows exponentially.`,
      stepByStep: [],
      steps: [
        { title: 'Look at the exponent', math: t`-\frac{Q_v}{kT} \;\to\; 0^{-} \quad\text{as } T \uparrow` },
        { title: 'So the exponential grows', math: t`e^{-Q_v/kT} \uparrow` },
        { title: 'Evidence from the slides', note: t`Surface islands on NiAl grow on heating because extra vacancies form as atoms move from the crystal to the surface (slide 6).` }
      ],
      whyWrong: {
        '1': t`That is the reverse; it was the false statement on the 2025 midterm.`,
        '2': t`Vacancies are thermally activated, so their number depends strongly on $T$.`,
        '3': t`The dependence is exponential (Arrhenius), not linear.`
      },
      commonTrap: t`Reading $e^{-Q/kT}$ as decreasing in $T$ because of the minus sign.`,
      reference: `${L7} · Pages 5–7`
    },
    source: src(L7, CH4, 'Pages 5–7 (Arrhenius behaviour)')
  }),
  q({
    id: 'Q_MIAE221_L704',
    chapter: 'defects',
    topic: 'Measuring Activation Energy',
    difficulty: 'Midterm Level',
    question: t`Vacancy fractions are measured at several temperatures and $\ln(N_v/N)$ is plotted against $1/T$. What does the slope give?`,
    options: [t`$-\dfrac{Q_v}{k}$`, t`$+\dfrac{Q_v}{k}$`, t`$-Q_v k$`, t`$\ln Q_v$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Taking logs turns the Arrhenius equation into a straight line in $1/T$.`,
      stepByStep: [],
      steps: [
        { title: 'Start from Arrhenius', math: t`\frac{N_v}{N} = e^{-Q_v/kT}` },
        { title: 'Natural log of both sides', math: t`\ln\frac{N_v}{N} = -\frac{Q_v}{k}\cdot\frac{1}{T}` },
        { title: 'Compare with $y = m x$', math: t`y = \ln\frac{N_v}{N},\quad x = \frac1T,\quad m = -\frac{Q_v}{k}` },
        { title: 'So', math: t`Q_v = -k \times \text{slope}` }
      ],
      answer: t`\text{slope} = -\frac{Q_v}{k}`,
      whyWrong: {
        '1': t`The slope is negative because the exponent is $-Q_v/kT$.`,
        '2': t`$Q_v$ is divided by $k$, not multiplied.`,
        '3': t`The log is taken of the concentration, not of $Q_v$.`
      },
      commonTrap: t`Plotting against $T$ instead of $1/T$, which gives a curve, not a line.`,
      reference: `${L7} · Page 7`
    },
    source: src(L7, CH4, 'Page 7 (measuring activation energy)')
  }),
  q({
    id: 'Q_MIAE221_L705',
    chapter: 'defects',
    topic: 'Weight % to Atom % (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`A steel contains 0.80 wt% C (rest Fe). With $A_C = 12.01$ and $A_{Fe} = 55.85$ g/mol, what is its composition in at.% C?`,
    options: [t`$\approx 3.6$ at.% C`, t`$0.80$ at.% C`, t`$\approx 0.17$ at.% C`, t`$\approx 3.75$ at.% C`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Take a 100 g basis, convert each mass to moles, then divide moles of C by total moles.`,
      stepByStep: [],
      steps: [
        { title: '100 g basis', math: t`m_C = 0.80\ \text{g},\qquad m_{Fe} = 99.20\ \text{g}` },
        { title: 'Moles of each', math: t`n_C = \frac{0.80}{12.01} = 0.0666,\qquad n_{Fe} = \frac{99.20}{55.85} = 1.776` },
        { title: 'Atom fraction of C', math: t`C'_C = \frac{0.0666}{0.0666 + 1.776}\times100` },
        { title: 'Evaluate', math: t`C'_C \approx 3.6\ \text{at.\%}` },
        { title: 'Meaning', note: t`About 3.6 of every 100 atoms are carbon, mostly in interstitial sites of the Fe lattice.` }
      ],
      answer: t`\approx 3.6\ \text{at.\% C}`,
      whyWrong: {
        '1': t`wt% and at.% are equal only if both elements have the same atomic mass. Carbon atoms are much lighter, so there are more of them per gram.`,
        '2': t`0.17 at.% divides C by the Fe atomic mass and Fe by the C atomic mass (masses swapped).`,
        '3': t`3.75% divides by the moles of Fe only. The denominator is the total moles, $n_C + n_{Fe}$.`
      },
      commonTrap: t`Forgetting that a light element (C, H, B) has a much higher at.% than wt%.`,
      reference: `${L7} · Pages 14–15`
    },
    source: src(L7, CH4, 'Pages 14–15 (composition and conversion)')
  }),
  q({
    id: 'Q_MIAE221_L706',
    chapter: 'defects',
    topic: 'Weight % to Atom % (Al–Cu)',
    difficulty: 'Midterm Level',
    question: t`An aluminium alloy has 5 wt% Cu (rest Al). With $A_{Cu} = 63.55$ and $A_{Al} = 26.98$ g/mol, what is the Cu content in at.%?`,
    options: [t`$\approx 2.2$ at.%`, t`$\approx 11.0$ at.%`, t`$5.0$ at.%`, t`$\approx 0.08$ at.%`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$C'_{Cu} = \dfrac{C_{Cu}/A_{Cu}}{C_{Cu}/A_{Cu} + C_{Al}/A_{Al}}\times100$. Copper is heavier than aluminium, so its at.% is lower than its wt%.`,
      stepByStep: [],
      steps: [
        { title: 'Moles per 100 g', math: t`n_{Cu} = \frac{5}{63.55} = 0.0787,\qquad n_{Al} = \frac{95}{26.98} = 3.521` },
        { title: 'Atom percent', math: t`C'_{Cu} = \frac{0.0787}{0.0787 + 3.521}\times100 = \frac{0.0787}{3.600}\times100` },
        { title: 'Evaluate', math: t`C'_{Cu} \approx 2.2\ \text{at.\%}` }
      ],
      answer: t`\approx 2.2\ \text{at.\% Cu}`,
      whyWrong: {
        '1': t`11.0% swaps the atomic masses (Cu divided by 26.98, Al by 63.55).`,
        '2': t`wt% ≠ at.% because Cu and Al atoms have different masses.`,
        '3': t`0.0787 is the number of moles of Cu in the 100 g basis, not a percentage: divide by the total moles and multiply by 100.`
      },
      commonTrap: t`Expecting at.% to be larger. It is larger only when the solute is lighter than the solvent.`,
      reference: `${L7} · Page 14`
    },
    source: src(L7, CH4, 'Page 14 (wt% ↔ at.% conversion)')
  }),
  q({
    id: 'Q_MIAE221_L707',
    chapter: 'defects',
    topic: 'Hume-Rothery Rules',
    difficulty: 'Midterm Level',
    question: t`Cu ($R = 0.128$ nm, FCC, $X = 1.9$) and Ni ($R = 0.125$ nm, FCC, $X = 1.8$), both valence +2. What do the Hume-Rothery rules predict?`,
    options: [
      t`Extensive (complete) substitutional solid solubility`,
      t`An interstitial solid solution of Ni in Cu`,
      t`No solubility, because the radii differ`,
      t`Formation of an intermetallic compound`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Appreciable substitutional solubility needs: radius difference ≤ 15%, similar electronegativity, the same crystal structure, and favourable valence.`,
      stepByStep: [],
      steps: [
        { title: 'Atomic size factor', math: t`\frac{0.128 - 0.125}{0.128}\times100 = 2.3\% \;\le\; 15\%\ \checkmark` },
        { title: 'Electronegativity', math: t`|1.9 - 1.8| = 0.1 \;\le\; 0.4\ \checkmark` },
        { title: 'Crystal structure', note: t`Both FCC ✔` },
        { title: 'Valence', note: t`Both +2 ✔` },
        { title: 'Conclusion', note: t`All four rules are satisfied, so Cu and Ni are soluble in each other in all proportions (substitutional).` }
      ],
      whyWrong: {
        '1': t`Interstitial solutions need a much smaller solute (like C in Fe); Ni is almost the same size as Cu.`,
        '2': t`A 2.3% size difference is far below the 15% limit.`,
        '3': t`Intermetallics form when electronegativities differ strongly; here the difference is only 0.1.`
      },
      commonTrap: t`Computing the size difference with the wrong reference; divide by the solvent's radius and compare with 15%.`,
      reference: `${L7} · Page 13`
    },
    source: src(L7, CH4, 'Page 13 (conditions for substitutional solubility)')
  }),
  q({
    id: 'Q_MIAE221_L708',
    chapter: 'defects',
    topic: 'Interstitial vs Substitutional',
    difficulty: 'Foundation',
    question: t`Carbon ($R \approx 0.071$ nm) dissolves in iron ($R = 0.124$ nm). Which type of solid solution forms, and why?`,
    options: [
      t`Interstitial, because C is far smaller than Fe (a size difference of about 43%)`,
      t`Substitutional, because both are elements`,
      t`Substitutional, because C and Fe have the same crystal structure`,
      t`None: carbon cannot dissolve in iron`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Solute atoms much smaller than the host fit in the voids (interstitial); similar-sized atoms replace host atoms (substitutional).`,
      stepByStep: [],
      steps: [
        { title: 'Size difference', math: t`\frac{0.124 - 0.071}{0.124}\times100 \approx 43\% \gg 15\%` },
        { title: 'Consequence', note: t`Substitution would badly distort the lattice, but the small C atom fits between Fe atoms: an interstitial solid solution (slide 12's example).` }
      ],
      whyWrong: {
        '1': t`Being elements says nothing about where the solute sits; size decides.`,
        '2': t`Carbon (graphite/diamond) does not share iron's BCC/FCC structure, and a 43% size difference already rules out substitution.`,
        '3': t`Carbon dissolves in iron; that is what makes steel (slide 2).`
      },
      commonTrap: t`Applying the 15% rule as "no solubility at all". It only rules out extensive substitutional solubility.`,
      reference: `${L7} · Pages 12–13`
    },
    source: src(L7, CH4, 'Pages 12–13 (solid solutions)')
  }),
  q({
    id: 'Q_MIAE221_L709',
    chapter: 'defects',
    topic: 'Edge vs Screw Dislocations',
    difficulty: 'Foundation',
    question: t`Which description matches an edge dislocation?`,
    options: [
      t`An extra half-plane of atoms inserted into the crystal`,
      t`A crystal cut halfway through and slid sideways, giving a helical path`,
      t`A missing atom at a lattice site`,
      t`A boundary between two grains of different orientation`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Line defects: edge (extra half-plane), screw (cut-and-shear helix) and mixed (both characters along one curved line).`,
      stepByStep: [],
      steps: [
        { title: 'Edge', note: t`Think of an extra half-plane of atoms; the planes bend around its bottom edge (slide 17).` },
        { title: 'Screw', note: t`Cut halfway and slide sideways; the atoms trace a helix like tearing paper (slide 18).` },
        { title: 'Mixed', note: t`Most real dislocations change from pure edge to pure screw along their length (slide 19).` }
      ],
      whyWrong: {
        '1': t`That is the screw dislocation.`,
        '2': t`A missing atom is a vacancy, a point defect.`,
        '3': t`A grain boundary is an area (planar) defect.`
      },
      commonTrap: t`Mixing up the dimension of the defect: point (0-D), line (1-D), area (2-D).`,
      reference: `${L7} · Pages 16–19`
    },
    source: src(L7, CH4, 'Pages 16–19 (dislocations)')
  }),
  q({
    id: 'Q_MIAE221_L710',
    chapter: 'defects',
    topic: 'Self-Interstitials',
    difficulty: 'Foundation',
    question: t`Why are self-interstitials far less common than vacancies in metals?`,
    options: [
      t`Squeezing a host atom into a small interstitial void needs a large energy`,
      t`Vacancies need more energy to form than interstitials`,
      t`Interstitial sites do not exist in metals`,
      t`Self-interstitials only form above the melting point`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Defect concentration depends exponentially on formation energy. A host-sized atom in a tiny void distorts the lattice strongly, so its formation energy is high.`,
      stepByStep: [],
      steps: [
        { title: 'Compare the distortion', note: t`A vacancy removes one atom (small local relaxation). A self-interstitial forces a full-sized atom into a gap much smaller than itself (large distortion).` },
        { title: 'Arrhenius consequence', note: t`Higher formation energy $Q$ ⇒ much smaller $e^{-Q/kT}$ ⇒ far fewer defects.` }
      ],
      whyWrong: {
        '1': t`Reversed: vacancies are easier to form.`,
        '2': t`Interstitial voids exist in every crystal (that is where C sits in Fe).`,
        '3': t`Above the melting point there is no crystal at all.`
      },
      commonTrap: t`Confusing self-interstitials (host atoms) with interstitial impurities (small foreign atoms such as C, N, H).`,
      reference: `${L7} · Page 4`
    },
    source: src(L7, CH4, 'Page 4 (vacancies and self-interstitials)')
  }),
  q({
    id: 'Q_MIAE221_L711',
    chapter: 'defects',
    topic: 'Are Defects Bad?',
    difficulty: 'Foundation',
    question: t`Which statement about defects in solids is MOST correct (Lecture 7 summary question)?`,
    options: [
      t`Defects may be desirable or undesirable, and may be introduced intentionally or occur naturally`,
      t`All defects are undesirable because they disrupt the crystal`,
      t`Desirable defects are always introduced intentionally`,
      t`Unintentional defects are always harmful`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`"Defect" just means a deviation from the perfect crystal; many engineering materials rely on them.`,
      stepByStep: [],
      steps: [
        { title: 'Desirable examples (slide 2)', note: t`C in Fe makes steel; Cr in Fe gives corrosion resistance; Cu in Ni makes thermocouple wire; grain boundaries strengthen metals.` },
        { title: 'Natural defects', note: t`Vacancies always exist at equilibrium (they lower the free energy), whether or not we want them.` }
      ],
      whyWrong: {
        '1': t`Alloying additions and grain boundaries are defects that we add on purpose to improve properties.`,
        '2': t`Equilibrium vacancies form naturally and are needed for processes such as atomic diffusion.`,
        '3': t`Naturally occurring vacancies are not necessarily harmful.`
      },
      commonTrap: t`Reading "defect" in its everyday sense of "flaw".`,
      reference: `${L7} · Pages 2 and 20`
    },
    source: src(L7, CH4, 'Pages 2 and 20')
  }),

  // ------------------------------------------------------------------ Past midterm (2025, version A)
  q({
    id: 'Q_MIAE221_P01',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q8',
    topic: 'Theoretical Density (Tungsten)',
    difficulty: 'Midterm Level',
    question: t`Tungsten is BCC with $R = 0.137$ nm and $A = 183.85$ g/mol. Its theoretical density is closest to:`,
    options: [t`$19.3\ \text{g/cm}^{3}$`, t`$9.65\ \text{g/cm}^{3}$`, t`$38.6\ \text{g/cm}^{3}$`, t`$21.0\ \text{g/cm}^{3}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\rho = \dfrac{nA}{V_C N_A}$ with $n = 2$ and $a = 4R/\sqrt3$ for BCC.`,
      stepByStep: [],
      steps: [
        { title: 'Lattice parameter (BCC)', math: t`a = \frac{4R}{\sqrt3} = \frac{4(0.137)}{1.732} = 0.3164\ \text{nm} = 3.164\times10^{-8}\ \text{cm}` },
        { title: 'Cell volume', math: t`V_C = a^{3} = 3.167\times10^{-23}\ \text{cm}^{3}` },
        { title: 'Mass per cell numerator', math: t`nA = 2 \times 183.85 = 367.7\ \text{g/mol}` },
        { title: 'Density', math: t`\rho = \frac{367.7}{(3.167\times10^{-23})(6.022\times10^{23})} = \frac{367.7}{19.07}` },
        { title: 'Evaluate', math: t`\rho \approx 19.3\ \text{g/cm}^{3}` }
      ],
      answer: t`\rho \approx 19.3\ \text{g/cm}^{3}`,
      whyWrong: {
        '1': t`9.65 g/cm³ uses $n = 1$.`,
        '2': t`38.6 g/cm³ uses $n = 4$ (FCC count).`,
        '3': t`21.0 g/cm³ treats tungsten as FCC ($a = 2\sqrt2 R$, $n = 4$).`
      },
      commonTrap: t`Using the FCC relation $a = 2\sqrt2 R$ for a BCC metal.`,
      reference: `${L5} · theoretical density`
    },
    source: src(L5, CH3, 'Theoretical density ρ = nA/(V_C N_A)')
  }),
  q({
    id: 'Q_MIAE221_P02',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q17',
    topic: 'Vacancy Formation Energy',
    difficulty: 'Exam Master',
    question: t`At $660^\circ$C the fractional vacancy concentration in aluminium is $9\times10^{-5}$. The energy for vacancy formation is:`,
    options: [t`$\approx 0.75$ eV`, t`$\approx 0.53$ eV`, t`$\approx 0.33$ eV`, t`$\approx 1.2\times10^{-19}$ eV`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Rearrange Arrhenius for $Q_v$: $Q_v = -kT\ln\left(\dfrac{N_v}{N}\right)$, with $T$ in kelvin and $k$ in eV/K.`,
      stepByStep: [],
      steps: [
        { title: 'Temperature in kelvin', math: t`T = 660 + 273 = 933\ \text{K}` },
        { title: 'Take the natural log of the Arrhenius equation', math: t`\ln\frac{N_v}{N} = -\frac{Q_v}{kT} \quad\Rightarrow\quad Q_v = -kT\ln\frac{N_v}{N}` },
        { title: 'Natural log of the fraction', math: t`\ln(9\times10^{-5}) = -9.316` },
        { title: 'Substitute', math: t`Q_v = -(8.62\times10^{-5})(933)(-9.316)` },
        { title: 'Evaluate', math: t`Q_v \approx 0.75\ \text{eV/atom}` }
      ],
      answer: t`Q_v \approx 0.75\ \text{eV}`,
      whyWrong: {
        '1': t`0.53 eV uses $T = 660$ (°C). Arrhenius needs kelvin: 933 K.`,
        '2': t`0.33 eV uses $\log_{10}$ instead of $\ln$.`,
        '3': t`$1.2\times10^{-19}$ is the answer in joules (using $k = 1.38\times10^{-23}$ J/K) mislabelled as eV.`
      },
      commonTrap: t`Using °C, and using $\log$ instead of $\ln$ on a calculator.`,
      reference: `${L7} · Pages 5 and 7`
    },
    source: src(L7, CH4, 'Pages 5 and 7 (Arrhenius equation)')
  }),
  q({
    id: 'Q_MIAE221_P03',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q12',
    topic: 'Bond Type from Electronegativity',
    difficulty: 'Foundation',
    question: t`The electronegativities of Na and Cl are 1.0 and 2.9. What is the dominant bonding in NaCl, and its percent ionic character?`,
    options: [t`Ionic, about 59% ionic character`, t`Covalent, about 41% ionic character`, t`Metallic`, t`Van der Waals`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A large electronegativity difference means electron transfer, i.e. ionic bonding. Pauling: $\%\text{IC} = \left[1 - e^{-0.25(\Delta X)^{2}}\right]\times100$.`,
      stepByStep: [],
      steps: [
        { title: 'Difference', math: t`\Delta X = 2.9 - 1.0 = 1.9` },
        { title: 'Exponent', math: t`0.25\,(1.9)^{2} = 0.25 \times 3.61 = 0.9025` },
        { title: 'Pauling', math: t`\%\text{IC} = \left(1 - e^{-0.9025}\right)\times100 = (1 - 0.406)\times100 \approx 59\%` },
        { title: 'Classify', note: t`More than half ionic, and Na (Group IA) readily gives its electron to Cl (Group VIIA): predominantly ionic.` }
      ],
      answer: t`\text{Ionic},\ \approx 59\%`,
      whyWrong: {
        '1': t`41% is $e^{-0.9025}$, the covalent share; the ionic share is $1 - 0.41$.`,
        '2': t`Metallic bonding happens between metal atoms; Cl is a non-metal.`,
        '3': t`Van der Waals bonds are secondary; Na–Cl is a primary bond with electron transfer.`
      },
      commonTrap: t`Forgetting to square $\Delta X$ in the exponent.`,
      reference: `${L3} · Pauling's ionic character`
    },
    source: src(L3, CH2, 'Electronegativity and percent ionic character')
  }),
  q({
    id: 'Q_MIAE221_P04',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q29',
    topic: 'Bragg’s Law (Platinum)',
    difficulty: 'Exam Master',
    question: t`FCC platinum ($a = 0.3923$ nm), radiation $\lambda = 0.1542$ nm, first order. At what angle $2\theta$ does the $(113)$ reflection appear?`,
    options: [t`$2\theta \approx 81.4^\circ$`, t`$2\theta \approx 40.7^\circ$`, t`$2\theta \approx 158.6^\circ$`, t`No reflection: $\sin\theta > 1$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$d_{hkl} = a/\sqrt{h^{2} + k^{2} + l^{2}}$, then $\sin\theta = n\lambda/(2d)$ and double $\theta$. (The midterm's statement "2θ = 40.69°" was false: 40.69° is $\theta$.)`,
      stepByStep: [],
      steps: [
        { title: 'Sum of squares', math: t`h^{2} + k^{2} + l^{2} = 1 + 1 + 9 = 11` },
        { title: 'Interplanar spacing', math: t`d_{113} = \frac{0.3923}{\sqrt{11}} = \frac{0.3923}{3.317} = 0.1183\ \text{nm}` },
        { title: "Bragg's law", math: t`\sin\theta = \frac{0.1542}{2(0.1183)} = 0.6518` },
        { title: 'Angle', math: t`\theta = \sin^{-1}(0.6518) = 40.7^\circ \quad\Rightarrow\quad 2\theta \approx 81.4^\circ` }
      ],
      answer: t`2\theta \approx 81.4^\circ`,
      whyWrong: {
        '1': t`$40.7^\circ$ is $\theta$, not $2\theta$ — exactly the trap in the midterm's true/false statement.`,
        '2': t`$158.6^\circ$ uses $d = a/(h + k + l) = a/5$; the formula uses the square root of the sum of squares.`,
        '3': t`$\sin\theta > 1$ happens when the 2 in $2d\sin\theta$ is dropped: $0.1542/0.1183 = 1.30$.`
      },
      commonTrap: t`Reporting $\theta$ as the diffraction angle.`,
      reference: `${L6} · Pages 14–17`
    },
    source: src(L6, CH3, 'Pages 14–17 (Bragg’s law)')
  }),
  q({
    id: 'Q_MIAE221_P05',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q10',
    topic: 'Substitutional Solid Solution',
    difficulty: 'Foundation',
    question: t`15% Ni is added to molten Cu and cooled to give a substitutional solid solution. The crystal structure of the solid solution is:`,
    options: [
      t`FCC copper with some Cu atoms replaced by Ni atoms`,
      t`Nickel with Cu atoms squeezed into the spaces between Ni atoms`,
      t`Grains of pure Cu (85%) mixed with grains of pure Ni (15%)`,
      t`Unit cells of FCC Cu equally interspersed with unit cells of FCC Ni`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In a substitutional solid solution the solute atoms take the place of solvent atoms at lattice sites; the solvent's crystal structure is kept and there is a single phase.`,
      stepByStep: [],
      steps: [
        { title: 'Identify solvent and solute', note: t`Cu is the majority (solvent, FCC); Ni is the solute.` },
        { title: 'Substitutional means replacement', note: t`Ni atoms randomly replace Cu atoms on FCC lattice sites (Cu and Ni satisfy the Hume-Rothery rules).` }
      ],
      whyWrong: {
        '1': t`"Squeezed into the spaces" describes an interstitial solution, and the solvent is Cu, not Ni.`,
        '2': t`Separate grains of each metal would be a two-phase mixture; a solid solution is one homogeneous phase.`,
        '3': t`Solute atoms are distributed randomly atom by atom, not as whole unit cells.`
      },
      commonTrap: t`Mixing up "solid solution" (one phase) with "mixture of two phases".`,
      reference: `${L7} · Pages 11–13`
    },
    source: src(L7, CH4, 'Pages 11–13 (solid solutions)')
  }),
  q({
    id: 'Q_MIAE221_P06',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q11',
    topic: 'Grains in a Polycrystal',
    difficulty: 'Foundation',
    question: t`In a polycrystalline pure metal, adjacent grains differ in their:`,
    options: [t`Orientation`, t`Density`, t`Lattice parameter`, t`Composition`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Each grain is a single crystal of the same pure metal; only the direction its lattice points in changes.`,
      stepByStep: [],
      steps: [
        { title: 'Same metal, same structure', note: t`A pure metal has one crystal structure, one lattice parameter, one density and one composition in every grain.` },
        { title: 'What changes', note: t`Grains nucleate independently during solidification, so their lattices are rotated relative to each other: the orientation differs.` }
      ],
      whyWrong: {
        '1': t`Every grain is the same crystal structure and composition, so the density is the same.`,
        '2': t`The lattice parameter is a property of the crystal structure, identical in every grain.`,
        '3': t`It is a pure metal: every grain has the same composition.`
      },
      commonTrap: t`Thinking grains are different phases. In a pure metal, grains differ only in orientation.`,
      reference: `${L6} · Pages 8–9`
    },
    source: src(L6, CH3, 'Pages 8–9 (single vs polycrystals)')
  }),
  q({
    id: 'Q_MIAE221_P07',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q16',
    topic: 'Body-Centred Tetragonal Cell',
    difficulty: 'Foundation',
    question: t`Which best describes a body-centred tetragonal unit cell?`,
    options: [
      t`$a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$, an atom at each corner and one at the centre`,
      t`$a = b = c$, $\alpha = \beta = \gamma = 90^\circ$, an atom at each corner and one at the centre`,
      t`$a \neq b \neq c$, $\alpha = \beta = \gamma = 90^\circ$, an atom at each corner and one at the centre`,
      t`$a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$, an atom at each corner and one at each face centre`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Split the name: "tetragonal" fixes the cell shape, "body-centred" fixes where the atoms sit.`,
      stepByStep: [],
      steps: [
        { title: 'Tetragonal shape', math: t`a = b \neq c,\qquad \alpha = \beta = \gamma = 90^\circ` },
        { title: 'Body-centred', note: t`Atoms at the 8 corners plus one at the body centre.` }
      ],
      whyWrong: {
        '1': t`$a = b = c$ is cubic, so this is BCC, not body-centred tetragonal.`,
        '2': t`$a \neq b \neq c$ with 90° angles is orthorhombic.`,
        '3': t`Atoms on the face centres would make it face-centred, not body-centred.`
      },
      commonTrap: t`Reading only half of the name.`,
      reference: `${L4} · Pages 16–17`
    },
    source: src(L4, CH3, 'Pages 16–17 (crystal systems)')
  }),
  q({
    id: 'Q_MIAE221_P08',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q15',
    topic: 'Atomic Packing Factors',
    difficulty: 'Foundation',
    question: t`The atomic packing factors of BCC : FCC : HCP are respectively:`,
    options: [t`$0.68 : 0.74 : 0.74$`, t`$0.74 : 0.74 : 0.68$`, t`$0.74 : 0.68 : 0.68$`, t`$0.68 : 0.74 : 0.68$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`FCC and HCP are both close-packed (APF 0.74, CN 12); BCC is not (APF 0.68, CN 8).`,
      stepByStep: [],
      steps: [
        { title: 'BCC', math: t`\text{APF} = \frac{\sqrt3\pi}{8} \approx 0.68` },
        { title: 'FCC', math: t`\text{APF} = \frac{\pi}{3\sqrt2} \approx 0.74` },
        { title: 'HCP', note: t`Same close-packed layers as FCC, only stacked ABAB instead of ABCABC, so APF $= 0.74$.` }
      ],
      whyWrong: {
        '1': t`The order is BCC : FCC : HCP; BCC is the one with 0.68.`,
        '2': t`Only BCC has 0.68.`,
        '3': t`HCP is close-packed like FCC: 0.74, not 0.68.`
      },
      commonTrap: t`Thinking HCP is less dense than FCC. They differ only in stacking sequence.`,
      reference: `${L5} · APF and stacking`
    },
    source: src(L5, CH3, 'APF of BCC, FCC and HCP; stacking sequences')
  }),
  q({
    id: 'Q_MIAE221_P09',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q6',
    topic: 'Inert Gas Configuration',
    difficulty: 'Foundation',
    question: t`Which electron configuration is that of an inert gas?`,
    options: [
      t`$1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}$`,
      t`$1s^{2}2s^{2}2p^{6}3s^{2}$`,
      t`$1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}4s^{1}$`,
      t`$1s^{2}2s^{2}2p^{6}3s^{1}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Inert gases have completely filled outer $s$ and $p$ subshells (a stable octet).`,
      stepByStep: [],
      steps: [
        { title: 'Check the outer shell of each', note: t`$3s^{2}3p^{6}$: 8 electrons, full (argon). $3s^{2}$: alkaline earth (Mg). $4s^{1}$: alkali metal (K). $3s^{1}$: alkali metal (Na).` }
      ],
      whyWrong: {
        '1': t`$3s^{2}$ with an empty $3p$ is magnesium (Group IIA), which gives up 2 electrons.`,
        '2': t`The single $4s^{1}$ electron makes this potassium (Group IA), highly reactive.`,
        '3': t`$3s^{1}$ is sodium (Group IA).`
      },
      commonTrap: t`Thinking any configuration ending in a full $s$ subshell is stable; the $p$ subshell must be full too.`,
      reference: `lecture 2-review chemistry-students26.pdf · Page 9`
    },
    source: src('lecture 2-review chemistry-students26.pdf', CH2, 'Page 9 (stable electron configurations)')
  }),
  q({
    id: 'Q_MIAE221_P10',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), T/F Q24',
    topic: 'Directions Normal to Planes',
    difficulty: 'Midterm Level',
    question: t`True or false: in the cubic system, the $[hkl]$ direction is perpendicular to the $(hkl)$ plane.`,
    options: [t`True, in cubic crystals only`, t`False in every crystal system`, t`True in every crystal system`, t`True only for $(100)$ planes`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In a cubic lattice the axes are orthogonal and equal in length, so the plane's normal has the same indices as the plane.`,
      stepByStep: [],
      steps: [
        { title: 'Check with $(111)$', note: t`The $(111)$ plane cuts all three axes at 1. Its normal points equally along $x$, $y$, $z$: that is $[111]$.` },
        { title: 'Why only cubic', note: t`If $a \neq c$ (e.g. tetragonal), the plane tilts differently and $[hkl]$ is no longer normal to $(hkl)$.` }
      ],
      whyWrong: {
        '1': t`It is true for cubic crystals (the 2025 key marked it True).`,
        '2': t`With unequal axes (tetragonal, orthorhombic…) the rule fails.`,
        '3': t`It holds for every $(hkl)$ in cubic, e.g. $[110] \perp (110)$ and $[111] \perp (111)$.`
      },
      commonTrap: t`Applying cubic shortcuts (families, normals) to non-cubic systems.`,
      reference: `${L5} · Miller indices`
    },
    source: src(L5, CH3, 'Miller indices of directions and planes')
  }),
  q({
    id: 'Q_MIAE221_P11',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), T/F Q22',
    topic: 'Amorphous Solids',
    difficulty: 'Foundation',
    question: t`True or false: non-crystalline (amorphous) materials have grain boundaries but no crystals.`,
    options: [
      t`False: with no crystals there are no grains, so no grain boundaries`,
      t`True: amorphous materials are made of grains`,
      t`True: glass has many grain boundaries`,
      t`False: amorphous materials are single crystals`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A grain boundary separates two crystals of different orientation. It cannot exist without crystals.`,
      stepByStep: [],
      steps: [
        { title: 'Amorphous', note: t`No long-range periodic order (Lecture 4): no unit cells, no crystals, no grains.` },
        { title: 'Therefore', note: t`No grains ⇒ nothing to separate ⇒ no grain boundaries. The statement is false.` }
      ],
      whyWrong: {
        '1': t`Grains are crystals; amorphous materials have none.`,
        '2': t`Glass is the classic amorphous solid: no grains.`,
        '3': t`A single crystal is the opposite extreme: perfect long-range order.`
      },
      commonTrap: t`Confusing polycrystalline with amorphous.`,
      reference: `${L4} · Pages 1–3`
    },
    source: src(L4, CH3, 'Pages 1–3 (crystalline vs amorphous)')
  }),
  q({
    id: 'Q_MIAE221_P12',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), T/F Q26',
    topic: 'Covalent vs Secondary Bonding',
    difficulty: 'Foundation',
    question: t`True or false: covalent bonding is a primary bond based on permanent or induced (temporary) dipoles.`,
    options: [
      t`False: dipole attraction is secondary (van der Waals) bonding; covalent bonding shares electrons`,
      t`True: covalent bonds are dipole bonds`,
      t`False: covalent bonding transfers electrons`,
      t`True: all primary bonds are dipole interactions`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Primary bonds: ionic (transfer), covalent (sharing), metallic (electron sea). Secondary bonds: attraction between permanent or induced dipoles.`,
      stepByStep: [],
      steps: [
        { title: 'Covalent', note: t`Neighbouring atoms share valence electrons; strong and directional.` },
        { title: 'Dipole-based', note: t`Fluctuating induced dipoles (London), permanent polar molecules, and hydrogen bonding are all secondary bonds (Lecture 3).` }
      ],
      whyWrong: {
        '1': t`Dipole attraction describes van der Waals (secondary) bonding.`,
        '2': t`Electron transfer is ionic bonding.`,
        '3': t`Primary bonds involve valence electrons directly, not dipoles.`
      },
      commonTrap: t`Mixing the mechanism of one bond type with the name of another.`,
      reference: `${L3} · Pages 12–13`
    },
    source: src(L3, CH2, 'Pages 12–13 (secondary bonding)')
  }),
  q({
    id: 'Q_MIAE221_P13',
    chapter: 'past',
    pastPaper: 'Midterm 2025 (version A), Q4 style',
    topic: 'Planar Density (BCC 110)',
    difficulty: 'Exam Master',
    question: t`What is the planar density of the $(110)$ plane in BCC, in terms of $R$?`,
    options: [t`$\dfrac{3}{8\sqrt2\,R^{2}}$`, t`$\dfrac{1}{4\sqrt2\,R^{2}}$`, t`$\dfrac{3}{16\sqrt2\,R^{2}}$`, t`$\dfrac{1}{2\sqrt2\,R^{2}}$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Same method as the FCC example on slide 6: rectangle area from the lattice parameter, then count atoms centred on the plane.`,
      stepByStep: [],
      steps: [
        { title: 'BCC lattice parameter', math: t`a = \frac{4R}{\sqrt3}` },
        { title: 'The $(110)$ rectangle is $a$ by $\sqrt2\,a$', math: t`A_P = \sqrt2\,a^{2} = \sqrt2\cdot\frac{16R^{2}}{3} = \frac{16\sqrt2\,R^{2}}{3}` },
        { title: 'Atoms on the plane: 4 corners and the body-centre atom', math: t`n = 4\left(\tfrac14\right) + 1 = 2` },
        { title: 'Divide', math: t`PD_{(110)} = \frac{2}{16\sqrt2\,R^{2}/3} = \frac{6}{16\sqrt2\,R^{2}} = \frac{3}{8\sqrt2\,R^{2}}` }
      ],
      answer: t`PD_{(110)} = \frac{3}{8\sqrt2\,R^{2}}`,
      whyWrong: {
        '1': t`$\tfrac{1}{4\sqrt2R^{2}}$ is the FCC $(110)$ result; BCC uses $a = 4R/\sqrt3$ and has the body-centre atom on this plane.`,
        '2': t`This counts only one atom: the body-centre atom lies on the $(110)$ plane and must be added.`,
        '3': t`Recheck the area: $a^{2} = 16R^{2}/3$, so $A_P = 16\sqrt2R^{2}/3$.`
      },
      commonTrap: t`Forgetting that the BCC body-centre atom lies on $(110)$, which is why $(110)$ is the densest BCC plane.`,
      reference: `${L6} · Pages 5–6`
    },
    source: src(L6, CH3, 'Pages 5–6 (planar density method)')
  }),

  // ============================================================ Callister Textbook Quantitative Practice (Lectures 1–7)
  // 1. Potential Energy Function & Equilibrium Separation
  q({
    id: 'Q_MIAE221_CAL01',
    chapter: 'bonding',
    topic: 'Net Potential Energy & Separation (Callister)',
    difficulty: 'Midterm Level',
    question: t`For a pair of atoms, the net potential energy curve is given by $E_N = -\dfrac{A}{r} + \dfrac{B}{r^9}$. In terms of the constants $A$ and $B$, what is the equilibrium interatomic separation distance $r_0$?`,
    options: [
      t`$r_0 = \left(\dfrac{9B}{A}\right)^{1/8}$`,
      t`$r_0 = \left(\dfrac{B}{9A}\right)^{1/8}$`,
      t`$r_0 = \left(\dfrac{9B}{A}\right)^{1/9}$`,
      t`$r_0 = \left(\dfrac{A}{9B}\right)^{1/8}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`At the equilibrium interatomic separation $r = r_0$, the net force is zero and the potential energy curve $E_N(r)$ is at its minimum: $\left.\dfrac{dE_N}{dr}\right|_{r=r_0} = 0$.`,
      stepByStep: [],
      steps: [
        { title: 'Differentiate the net potential energy $E_N$ with respect to separation $r$', math: t`\frac{dE_N}{dr} = \frac{d}{dr}\left(-A\,r^{-1} + B\,r^{-9}\right) = A\,r^{-2} - 9B\,r^{-10}` },
        { title: 'Set the derivative equal to zero at equilibrium separation $r_0$', math: t`\frac{A}{r_0^2} - \frac{9B}{r_0^{10}} = 0 \implies \frac{A}{r_0^2} = \frac{9B}{r_0^{10}}` },
        { title: 'Cross-multiply to isolate the powers of $r_0$', math: t`A\,r_0^{10} = 9B\,r_0^2 \implies r_0^8 = \frac{9B}{A}` },
        { title: 'Take the 8th root to solve for $r_0$', math: t`r_0 = \left(\frac{9B}{A}\right)^{1/8}` }
      ],
      answer: t`r_0 = \left(\frac{9B}{A}\right)^{1/8}`,
      whyWrong: {
        '1': t`Inverted coefficient: differentiating $B\,r^{-9}$ multiplies by $-9$, putting $9$ in the numerator alongside $B$.`,
        '2': t`Exponent error: the exponent comes from $r^{10-2} = r^8$, so the root is $1/8$, not $1/9$.`,
        '3': t`Inverted fraction: dividing $9B$ by $A$ yields $(9B/A)^{1/8}$, not $(A/9B)^{1/8}$.`
      },
      commonTrap: t`Forgetting that the net force is $F = -dE/dr$. Setting $dE/dr = 0$ is the universal condition for equilibrium separation in all materials potential functions.`,
      reference: `${CAL} · Section 2.5 & Problem 2.14; ${L2} · Pages 10–12`
    },
    source: [
      { deck: CAL, chapter: CH2, location: 'Problem 2.14 (Potential energy curve)' },
      { deck: L2, chapter: CH2, location: 'Pages 10–12 (Interatomic forces and potential wells)' }
    ]
  }),

  // 2. Pauling Percent Ionic Character
  q({
    id: 'Q_MIAE221_CAL02',
    chapter: 'bonding',
    topic: 'Percent Ionic Character of SiC (Callister)',
    difficulty: 'Midterm Level',
    question: t`Using Pauling's formula $\% \text{IC} = \left[1 - \exp\left(-0.25(X_A - X_B)^2\right)\right] \times 100\%$ with electronegativities $X_{\text{Si}} = 1.90$ and $X_{\text{C}} = 2.55$, what is the percent ionic character of Silicon Carbide ($\text{SiC}$)?`,
    options: [
      t`$\approx 10.0\%$ (predominantly covalent)`,
      t`$\approx 25.4\%$`,
      t`$\approx 50.0\%$ (equal ionic and covalent)`,
      t`$\approx 89.2\%$ (predominantly ionic)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Pauling's relation calculates the ionic fraction from the difference in electronegativity $\Delta X = |X_A - X_B|$. When $\Delta X < 1.0$, the bond is predominantly covalent with minor polar character.`,
      stepByStep: [],
      steps: [
        { title: 'Compute electronegativity difference between C and Si', math: t`\Delta X = |X_{\text{C}} - X_{\text{Si}}| = |2.55 - 1.90| = 0.65` },
        { title: 'Square the difference and multiply by $-0.25$', math: t`(\Delta X)^2 = (0.65)^2 = 0.4225 \implies -0.25 \times 0.4225 = -0.105625` },
        { title: 'Evaluate the exponential term', math: t`\exp(-0.105625) \approx 0.89976` },
        { title: 'Subtract from 1 and convert to percentage', math: t`\% \text{IC} = (1 - 0.89976) \times 100\% \approx 10.02\% \approx 10.0\%` }
      ],
      answer: t`\% \text{IC} \approx 10.0\%`,
      whyWrong: {
        '1': t`$25.4\%$ arises from erroneously using an electronegativity difference of $\Delta X = 1.1$.`,
        '2': t`$50\%$ occurs only when $\Delta X \approx 1.7$ (the classical boundary between ionic and covalent compounds).`,
        '3': t`$89.2\%$ is the covalent fraction ($\approx 90\%$), which is $100\% - \% \text{IC}$, not the ionic fraction itself.`
      },
      commonTrap: t`Confusing percent covalent character with percent ionic character. $\% \text{Covalent} = 100\% - \% \text{IC} \approx 90\%$.`,
      reference: `${CAL} · Section 2.6 & Problem 2.19; ${L3} · Pages 5–6`
    },
    source: [
      { deck: CAL, chapter: CH2, location: 'Problem 2.19 (Percent ionic character)' },
      { deck: L3, chapter: CH2, location: 'Pages 5–6 (Electronegativity and bond types)' }
    ]
  }),

  // 3. Ideal c/a Ratio in HCP
  q({
    id: 'Q_MIAE221_CAL03',
    chapter: 'crystal',
    topic: 'Ideal HCP c/a Axial Ratio (Callister)',
    difficulty: 'Midterm Level',
    question: t`For an ideal Hexagonal Close-Packed (HCP) crystal composed of rigid hard spheres in continuous contact, what is the exact theoretical axial ratio $c/a$?`,
    options: [
      t`$\sqrt{\dfrac{8}{3}} \approx 1.633$`,
      t`$\sqrt{\dfrac{3}{2}} \approx 1.225$`,
      t`$\dfrac{4}{3} \approx 1.333$`,
      t`$\sqrt{3} \approx 1.732$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In ideal HCP packing, the three atoms in the basal triangular cluster and the middle-plane atom form a regular tetrahedron with edge length $a$. The height of this tetrahedron determines the half-height $c/2$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify the tetrahedral geometry formed by 3 basal atoms and 1 mid-plane atom', note: t`All four atoms touch, so every edge of the regular tetrahedron has length $a = 2R$.` },
        { title: 'Find the planar distance from a triangle corner to its centroid', math: t`r_{\text{centroid}} = \frac{a}{\sqrt{3}}` },
        { title: 'Use the Pythagorean theorem to calculate the tetrahedron height $h = c/2$', math: t`\left(\frac{c}{2}\right)^2 + r_{\text{centroid}}^2 = a^2 \implies \left(\frac{c}{2}\right)^2 + \frac{a^2}{3} = a^2` },
        { title: 'Solve for $c/2$ and $c/a$', math: t`\left(\frac{c}{2}\right)^2 = \frac{2}{3}a^2 \implies \frac{c}{2} = \sqrt{\frac{2}{3}}\,a \implies \frac{c}{a} = 2\sqrt{\frac{2}{3}} = \sqrt{\frac{8}{3}} \approx 1.633` }
      ],
      answer: t`c/a = \sqrt{8/3} \approx 1.633`,
      whyWrong: {
        '1': t`$\sqrt{3/2} \approx 1.225$ is the reciprocal factor of the tetrahedral altitude, missing the factor of 2.`,
        '2': t`$4/3$ is an algebraic ratio unrelated to close-packed tetrahedral geometry.`,
        '3': t`$\sqrt{3}$ is the ratio between the long face diagonal and cube edge in cubic lattices, not HCP.`
      },
      commonTrap: t`Forgetting that real HCP metals deviate slightly from $1.633$: Zinc ($c/a = 1.856$) is elongated, while Titanium ($c/a = 1.587$) and Magnesium ($c/a = 1.624$) are compressed.`,
      reference: `${CAL} · Section 3.4 & Problem 3.5; ${L4} · Pages 10–12`
    },
    source: [
      { deck: CAL, chapter: CH3, location: 'Section 3.4 & Problem 3.5 (HCP crystal structure)' },
      { deck: L4, chapter: CH3, location: 'Pages 10–12 (HCP lattice geometry)' }
    ]
  }),

  // 4. Allotropic Volume Change in Iron
  q({
    id: 'Q_MIAE221_CAL04',
    chapter: 'densities',
    topic: 'Allotropic Transformation Volume Change (Callister)',
    difficulty: 'Exam Master',
    question: t`At $912^\circ\text{C}$, pure iron transforms from BCC ferrite ($\alpha$-Fe, $R_{\text{BCC}} = 0.1258\text{ nm}$) to FCC austenite ($\gamma$-Fe, $R_{\text{FCC}} = 0.1289\text{ nm}$). What is the percent volume change when BCC iron transforms into FCC iron?`,
    options: [
      t`$\approx -1.2\%$ (volume contraction / shrinkage)`,
      t`$\approx +1.2\%$ (volume expansion)`,
      t`$\approx -3.5\%$`,
      t`$\approx +0.0\%$ (zero net change)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When iron is heated past $912^\circ\text{C}$, it transforms from BCC to FCC. Because FCC has a significantly higher atomic packing factor ($0.74$ vs $0.68$), the metal contracts upon heating despite the slight increase in atomic radius.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate volume per atom in BCC iron', math: t`a_{\text{BCC}} = \frac{4R_{\text{BCC}}}{\sqrt{3}} = \frac{4(0.1258)}{\sqrt{3}} \approx 0.29052\text{ nm} \implies v_{\text{atom, BCC}} = \frac{a_{\text{BCC}}^3}{2} \approx 0.012261\text{ nm}^3` },
        { title: 'Calculate volume per atom in FCC iron', math: t`a_{\text{FCC}} = 2\sqrt{2}R_{\text{FCC}} = 2\sqrt{2}(0.1289) \approx 0.36458\text{ nm} \implies v_{\text{atom, FCC}} = \frac{a_{\text{FCC}}^3}{4} \approx 0.012115\text{ nm}^3` },
        { title: 'Compute percent volume change', math: t`\frac{\Delta V}{V} = \frac{v_{\text{atom, FCC}} - v_{\text{atom, BCC}}}{v_{\text{atom, BCC}}} \times 100\% = \frac{0.012115 - 0.012261}{0.012261} \times 100\% \approx -1.19\% \approx -1.2\%` }
      ],
      answer: t`\Delta V / V \approx -1.2\%`,
      whyWrong: {
        '1': t`Positive $+1.2\%$ ignores that FCC packing ($0.74$) is denser than BCC ($0.68$), causing a net contraction on heating.`,
        '2': t`$-3.5\%$ erroneously assumes the atomic radius $R$ remains constant across the phase transition.`,
        '3': t`Zero net change assumes the change in radius perfectly cancels the packing factor difference, which it does not.`
      },
      commonTrap: t`Assuming heating always causes expansion. At allotropic phase transitions, the crystal structure shift can cause an abrupt volumetric contraction.`,
      reference: `${CAL} · Problem 3.23; ${L6} · Slide 19`
    },
    source: [
      { deck: CAL, chapter: CH3, location: 'Problem 3.23 (Allotropic volume change)' },
      { deck: L6, chapter: CH3, location: 'Slide 19 (Iron allotropic transformations)' }
    ]
  }),

  // 5. Linear Density of Close-Packed [111] in BCC
  q({
    id: 'Q_MIAE221_CAL05',
    chapter: 'densities',
    topic: 'Linear Density of BCC [111] (Callister)',
    difficulty: 'Midterm Level',
    question: t`In a Body-Centered Cubic (BCC) crystal with atomic radius $R$, what is the linear atomic density along the close-packed $[111]$ body diagonal?`,
    options: [
      t`$\dfrac{1}{2R}$`,
      t`$\dfrac{1}{4R}$`,
      t`$\dfrac{\sqrt{3}}{4R}$`,
      t`$\dfrac{1}{2\sqrt{2}R}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$LD = n/L$. Along the close-packed $[111]$ body diagonal in BCC, atoms touch continuously: the length is $L = 4R$ and it intercepts 2 full atomic diameters.`,
      stepByStep: [],
      steps: [
        { title: 'The $[111]$ direction runs from one cube corner through the body-center to the opposite corner', note: t`Along this line, the body-center atom touches both corner atoms: $L = 4R$.` },
        { title: 'Count atoms centred on the $[111]$ vector segment', math: t`n = 2\left(\tfrac{1}{2}\right) + 1 = 2\text{ atoms}` },
        { title: 'Divide intercepted atoms by line length', math: t`LD_{[111]} = \frac{n}{L} = \frac{2}{4R} = \frac{1}{2R}` }
      ],
      answer: t`LD_{[111]} = \frac{1}{2R}`,
      whyWrong: {
        '1': t`$1/(4R)$ counts only 1 atom instead of 2 along the body diagonal.`,
        '2': t`$\sqrt{3}/(4R)$ incorrectly uses the edge length $a$ in the numerator.`,
        '3': t`$1/(2\sqrt{2}R)$ is the linear density along the $[100]$ edge in FCC, not BCC $[111]$.`
      },
      commonTrap: t`Forgetting that the body-center atom is completely inside the cell and centered directly on the $[111]$ line, contributing 1 full atom.`,
      reference: `${CAL} · Section 3.11 & Problem 3.54; ${L6} · Slide 4`
    },
    source: [
      { deck: CAL, chapter: CH3, location: 'Section 3.11 & Problem 3.54 (Linear density)' },
      { deck: L6, chapter: CH3, location: 'Slide 4 (Linear density derivations)' }
    ]
  }),

  // 6. Planar Density of Close-Packed (111) in FCC
  q({
    id: 'Q_MIAE221_CAL06',
    chapter: 'densities',
    topic: 'Planar Density of FCC (111) (Callister)',
    difficulty: 'Exam Master',
    question: t`In a Face-Centered Cubic (FCC) crystal with atomic radius $R$, what is the planar atomic density of the close-packed $(111)$ plane?`,
    options: [
      t`$\dfrac{1}{2\sqrt{3}\,R^2} \approx \dfrac{0.289}{R^2}$`,
      t`$\dfrac{1}{4\sqrt{2}\,R^2}$`,
      t`$\dfrac{1}{4\sqrt{3}\,R^2}$`,
      t`$\dfrac{3}{8\sqrt{2}\,R^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$PD = n/A_P$. The $(111)$ plane cuts through face diagonals of length $4R$, forming an equilateral triangle containing 2 equivalent atoms on an area of $4\sqrt{3}R^2$.`,
      stepByStep: [],
      steps: [
        { title: 'The $(111)$ plane intersects the FCC unit cell as an equilateral triangle', note: t`Each side of the triangle is a face diagonal where atoms touch: side length $b = 4R$.` },
        { title: 'Calculate the area of the equilateral triangle', math: t`A_P = \frac{\sqrt{3}}{4}b^2 = \frac{\sqrt{3}}{4}(4R)^2 = 4\sqrt{3}\,R^2` },
        { title: 'Count atoms centred on the triangular slice inside the cell', math: t`n = 3\left(\tfrac{1}{6}\right) + 3\left(\tfrac{1}{2}\right) = \tfrac{1}{2} + \tfrac{3}{2} = 2\text{ atoms}` },
        { title: 'Divide atom count by plane area', math: t`PD_{(111)} = \frac{2}{4\sqrt{3}\,R^2} = \frac{1}{2\sqrt{3}\,R^2} \approx \frac{0.2887}{R^2}` }
      ],
      answer: t`PD_{(111)} = \frac{1}{2\sqrt{3}\,R^2}`,
      whyWrong: {
        '1': t`$1/(4\sqrt{2}R^2)$ is the planar density of the $(110)$ plane in FCC (rectangular geometry).`,
        '2': t`$1/(4\sqrt{3}R^2)$ counts only 1 atom instead of 2 in the triangular slice.`,
        '3': t`$3/(8\sqrt{2}R^2)$ is the planar density of the $(110)$ plane in BCC.`
      },
      commonTrap: t`Forgetting that the three face-centered atoms each sit on an edge of the triangle and contribute $1/2$ each, while the three corners contribute $1/6$ each ($60^\circ$ angle).`,
      reference: `${CAL} · Section 3.11 & Problem 3.57; ${L6} · Slide 6`
    },
    source: [
      { deck: CAL, chapter: CH3, location: 'Section 3.11 & Problem 3.57 (Planar density)' },
      { deck: L6, chapter: CH3, location: 'Slide 6 (Planar density in close-packed planes)' }
    ]
  }),

  // 7. X-Ray Diffraction Indexing for BCC Metal
  q({
    id: 'Q_MIAE221_CAL07',
    chapter: 'densities',
    topic: 'XRD Lattice Parameter Calculation (Callister)',
    difficulty: 'Midterm Level',
    question: t`Monochromatic X-rays with wavelength $\lambda = 0.1542\text{ nm}$ are incident on a BCC metal. The first diffraction peak corresponding to $(110)$ planes occurs at $2\theta = 40.4^\circ$. What is the lattice parameter $a$ of this metal?`,
    options: [
      t`$a \approx 0.316\text{ nm}$`,
      t`$a \approx 0.223\text{ nm}$`,
      t`$a \approx 0.447\text{ nm}$`,
      t`$a \approx 0.158\text{ nm}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Use Bragg's Law $n\lambda = 2d_{hkl}\sin\theta$ (with $n=1$) to compute the interplanar spacing $d_{110}$, then relate $d_{hkl}$ to lattice parameter $a$ via $d_{hkl} = a/\sqrt{h^2+k^2+l^2}$.`,
      stepByStep: [],
      steps: [
        { title: 'Determine the Bragg angle $\theta$ from the diffraction angle $2\theta$', math: t`\theta = \frac{40.4^\circ}{2} = 20.2^\circ` },
        { title: 'Calculate interplanar spacing $d_{110}$ using Bragg\'s Law', math: t`d_{110} = \frac{\lambda}{2\sin\theta} = \frac{0.1542\text{ nm}}{2\sin(20.2^\circ)} = \frac{0.1542}{2(0.3453)} \approx 0.2233\text{ nm}` },
        { title: 'Relate $d_{110}$ to lattice parameter $a$ for a cubic system', math: t`d_{110} = \frac{a}{\sqrt{1^2 + 1^2 + 0^2}} = \frac{a}{\sqrt{2}} \implies a = d_{110}\sqrt{2}` },
        { title: 'Evaluate $a$', math: t`a = 0.2233 \times 1.4142 \approx 0.3158\text{ nm} \approx 0.316\text{ nm}` }
      ],
      answer: t`a \approx 0.316\text{ nm}`,
      whyWrong: {
        '1': t`$0.223\text{ nm}$ is the interplanar spacing $d_{110}$, not the lattice parameter $a$.`,
        '2': t`$0.447\text{ nm}$ results from multiplying by 2 instead of $\sqrt{2}$.`,
        '3': t`$0.158\text{ nm}$ erroneously divides by $\sqrt{2}$ instead of multiplying.`
      },
      commonTrap: t`Diffractometers record data as $2\theta$ (the total deviation of the diffracted beam), but Bragg's law requires $\theta$. Always divide $2\theta$ by 2 first!`,
      reference: `${CAL} · Section 3.16 & Problem 3.64; ${L6} · Slides 13–15`
    },
    source: [
      { deck: CAL, chapter: CH3, location: 'Section 3.16 & Problem 3.64 (XRD Bragg\'s Law calculations)' },
      { deck: L6, chapter: CH3, location: 'Slides 13–15 (XRD and lattice parameter determination)' }
    ]
  }),

  // 8. Equilibrium Vacancy Temperature in Copper
  q({
    id: 'Q_MIAE221_CAL08',
    chapter: 'defects',
    topic: 'Equilibrium Vacancy Temperature (Callister)',
    difficulty: 'Midterm Level',
    question: t`In pure copper, the activation energy for vacancy formation is $Q_v = 0.90\text{ eV/atom}$. Using Boltzmann's constant $k_B = 8.617 \times 10^{-5}\text{ eV/K}$, at what temperature will the fraction of vacant atomic sites ($N_v/N$) reach $1.0 \times 10^{-4}$ ($0.01\%$)?`,
    options: [
      t`$T \approx 1134\text{ K} \quad (861^\circ\text{C})$`,
      t`$T \approx 567\text{ K} \quad (294^\circ\text{C})$`,
      t`$T \approx 1356\text{ K} \quad (1083^\circ\text{C}, \text{melting point})$`,
      t`$T \approx 298\text{ K} \quad (25^\circ\text{C})`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Equilibrium vacancy concentration follows the Boltzmann distribution: $N_v/N = \exp(-Q_v / k_B T)$. Taking the natural logarithm allows direct algebraic solution for temperature $T$.`,
      stepByStep: [],
      steps: [
        { title: 'Write the governing equilibrium vacancy expression', math: t`\frac{N_v}{N} = \exp\left(-\frac{Q_v}{k_B T}\right)` },
        { title: 'Take the natural logarithm of both sides', math: t`\ln\left(\frac{N_v}{N}\right) = -\frac{Q_v}{k_B T} \implies T = \frac{-Q_v}{k_B \ln(N_v/N)}` },
        { title: 'Substitute given values ($Q_v = 0.90\text{ eV}$, $N_v/N = 10^{-4}$)', math: t`\ln(10^{-4}) \approx -9.21034 \implies T = \frac{-0.90}{(8.617 \times 10^{-5})(-9.21034)}` },
        { title: 'Evaluate numerically', math: t`T = \frac{0.90}{7.9365 \times 10^{-4}} \approx 1134.0\text{ K} \approx 861^\circ\text{C}` }
      ],
      answer: t`T \approx 1134\text{ K} \ (861^\circ\text{C})`,
      whyWrong: {
        '1': t`$567\text{ K}$ results from using common $\log_{10}$ instead of natural logarithm $\ln$.`,
        '2': t`$1356\text{ K}$ is the actual melting point of Copper, where the vacancy fraction is higher ($\sim 10^{-3}$).`,
        '3': t`At room temperature ($298\text{ K}$), the vacancy fraction in copper is virtually zero ($\sim 10^{-15}$).`
      },
      commonTrap: t`Units matching: since $Q_v$ is given in $\text{eV}$, use $k_B = 8.617 \times 10^{-5}\text{ eV/K}$, NOT the SI value $1.38 \times 10^{-23}\text{ J/K}$.`,
      reference: `${CAL} · Section 4.2 & Problem 4.3; ${L7} · Slide 5`
    },
    source: [
      { deck: CAL, chapter: CH4, location: 'Section 4.2 & Problem 4.3 (Vacancies in metals)' },
      { deck: L7, chapter: CH4, location: 'Slide 5 (Arrhenius vacancy equation)' }
    ]
  }),

  // 9. Hume-Rothery Complete Solubility (Cu-Ni vs Cu-Zn)
  q({
    id: 'Q_MIAE221_CAL09',
    chapter: 'defects',
    topic: 'Hume-Rothery Complete Solubility (Callister)',
    difficulty: 'Midterm Level',
    question: t`Why do Copper (Cu) and Nickel (Ni) form a complete solid solution across all compositions, whereas Copper and Zinc (Zn) have only limited solid solubility?`,
    options: [
      t`Cu and Ni have identical FCC structures, atomic radii within $2.5\%$, and nearly identical electronegativities, satisfying all 4 Hume-Rothery rules.`,
      t`Cu and Ni form strong ionic bonds with each other, preventing phase segregation.`,
      t`Ni is an interstitial solute in Cu because its atoms fit into octahedral interstices.`,
      t`Cu and Ni have different crystal structures (FCC vs BCC), allowing mechanical interlocking.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Complete (unlimited) solid solubility requires satisfying all four Hume-Rothery rules: (1) $\Delta R < 15\%$, (2) same crystal structure, (3) similar electronegativities, (4) same or compatible valence.`,
      stepByStep: [],
      steps: [
        { title: 'Check Hume-Rothery Rule 1: Atomic Size Difference', note: t`$R_{\text{Cu}} = 0.128\text{ nm}$, $R_{\text{Ni}} = 0.125\text{ nm} \implies \Delta R = \frac{0.128 - 0.125}{0.128} \times 100\% = 2.3\% < 15\%$ (satisfied).` },
        { title: 'Check Hume-Rothery Rule 2: Crystal Structure', note: t`Both Cu and Ni have Face-Centered Cubic (FCC) lattices (satisfied). In contrast, Zinc is HCP, which severely limits its solubility in FCC Copper.` },
        { title: 'Check Hume-Rothery Rule 3: Electronegativity', note: t`$X_{\text{Cu}} = 1.9$, $X_{\text{Ni}} = 1.8 \implies \Delta X = 0.1$ (very low, avoiding intermetallic compound formation).` },
        { title: 'Check Hume-Rothery Rule 4: Valence', note: t`Cu is $+1/+2$, Ni is $+2$, yielding compatible electronic valencies.` }
      ],
      answer: t`Cu and Ni satisfy all 4 Hume-Rothery criteria`,
      whyWrong: {
        '1': t`Metals form metallic bonds with each other, not ionic bonds.`,
        '2': t`Ni has an atomic radius of $0.125\text{ nm}$, almost identical to Cu ($0.128\text{ nm}$). It is strictly a substitutional solute, never interstitial.`,
        '3': t`Both Cu and Ni are FCC; they do not have different crystal structures.`
      },
      commonTrap: t`Forgetting that satisfying all 4 Hume-Rothery rules is necessary for UNLIMITED solubility. Failing even one rule (such as Zinc having an HCP structure) restricts solubility to a limited range.`,
      reference: `${CAL} · Section 4.3 & Problem 4.10; ${L7} · Slide 13`
    },
    source: [
      { deck: CAL, chapter: CH4, location: 'Section 4.3 & Problem 4.10 (Hume-Rothery rules for solid solutions)' },
      { deck: L7, chapter: CH4, location: 'Slide 13 (Solid solutions and Hume-Rothery criteria)' }
    ]
  }),

  // 10. Dislocation Burgers Vector Magnitude in FCC
  q({
    id: 'Q_MIAE221_CAL10',
    chapter: 'defects',
    topic: 'Burgers Vector Magnitude in FCC (Callister)',
    difficulty: 'Midterm Level',
    question: t`In Face-Centered Cubic (FCC) metals like Aluminum ($a = 0.405\text{ nm}$), slip occurs along close-packed directions with Burgers vector $\vec{b} = \dfrac{a}{2}\langle 110 \rangle$. What is the magnitude of the Burgers vector $|\vec{b}|$ in Aluminum?`,
    options: [
      t`$|\vec{b}| \approx 0.286\text{ nm}$`,
      t`$|\vec{b}| \approx 0.405\text{ nm}$`,
      t`$|\vec{b}| \approx 0.203\text{ nm}$`,
      t`$|\vec{b}| \approx 0.573\text{ nm}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In any crystal lattice, the Burgers vector magnitude $|\vec{b}|$ represents the unit slip distance. For FCC metals, $|\vec{b}| = \frac{a}{2}|\langle 110 \rangle| = \frac{a}{\sqrt{2}} = 2R$ (one atomic diameter).`,
      stepByStep: [],
      steps: [
        { title: 'Write the magnitude of the direction vector $\langle 110 \rangle$', math: t`|\langle 110 \rangle| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2}` },
        { title: 'Calculate the Burgers vector magnitude formula for FCC', math: t`|\vec{b}| = \frac{a}{2}\sqrt{2} = \frac{a}{\sqrt{2}}` },
        { title: 'Substitute the lattice parameter of Aluminum ($a = 0.405\text{ nm}$)', math: t`|\vec{b}| = \frac{0.405\text{ nm}}{\sqrt{2}} \approx 0.2864\text{ nm} \approx 0.286\text{ nm}` },
        { title: 'Physical verification: in FCC, atoms touch along $\langle 110 \rangle$', note: t`Since $a = 2\sqrt{2}R$, $|\vec{b}| = \frac{2\sqrt{2}R}{\sqrt{2}} = 2R$. The unit slip distance is exactly equal to one atomic diameter!` }
      ],
      answer: t`|\vec{b}| \approx 0.286\text{ nm}`,
      whyWrong: {
        '1': t`$0.405\text{ nm}$ is the unit cell lattice parameter $a$, not the Burgers vector along $\langle 110 \rangle$.`,
        '2': t`$0.203\text{ nm}$ is $a/2$, forgetting to multiply by the vector magnitude $\sqrt{2}$.`,
        '3': t`$0.573\text{ nm}$ is $a\sqrt{2}$, which is the entire face diagonal length across the unit cell.`
      },
      commonTrap: t`Forgetting that Burgers vector represents a single atomic jump. In FCC close-packed directions, the shortest lattice translation is from a corner to a face center: $\frac{a}{2}[110]$.`,
      reference: `${CAL} · Section 4.4 & Problem 4.25; ${L7} · Slides 16–17`
    },
    source: [
      { deck: CAL, chapter: CH4, location: 'Section 4.4 & Problem 4.25 (Dislocations and Burgers vectors)' },
      { deck: L7, chapter: CH4, location: 'Slides 16–17 (Burgers vector geometry)' }
    ]
  }),

  // Past Exam Practice & Corrections from Concordia Midterms and Finals
  q({
    id: 'Q_MIAE221_E01',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q4) · Concordia University',
    topic: 'Planar Density of (110) in BCC (Exam Correction)',
    difficulty: 'Exam Master',
    question: t`In a Body-Centered Cubic (BCC) unit cell, what is the planar density of the $(110)$ plane in terms of the atomic radius $R$?`,
    options: [
      t`$\\dfrac{3}{8\\sqrt{2} R^2}$`,
      t`$\\dfrac{1}{2\\sqrt{2} R^2}$`,
      t`$\\dfrac{1}{4\\sqrt{2} R^2}$`,
      t`$\\dfrac{1}{\\sqrt{2} R^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Planar density $PD = \\dfrac{n}{A_P}$. In BCC, the lattice parameter is $a = \\dfrac{4R}{\\sqrt{3}}$, and the $(110)$ plane is a rectangle of dimensions $a \\times a\\sqrt{2}$.`,
      stepByStep: [],
      steps: [
        { title: 'Count atoms centered on the plane', math: t`n = 4\\left(\\tfrac{1}{4}\\right)_{\\text{corners}} + 1_{\\text{body-center}} = 2\\text{ atoms}` },
        { title: 'Calculate area of the $(110)$ rectangle', math: t`A_P = a \\times a\\sqrt{2} = a^2 \\sqrt{2} = \\left(\\frac{4R}{\\sqrt{3}}\\right)^2 \\sqrt{2} = \\frac{16\\sqrt{2}}{3}R^2` },
        { title: 'Compute planar density', math: t`PD_{(110)} = \\frac{2}{\\frac{16\\sqrt{2}}{3}R^2} = \\frac{6}{16\\sqrt{2}R^2} = \\frac{3}{8\\sqrt{2}R^2}` }
      ],
      answer: t`PD_{(110)} = \\frac{3}{8\\sqrt{2}R^2}`,
      whyWrong: {
        '1': t`Exam Trap: The student scan marked $\\frac{1}{2\\sqrt{2}R^2}$ by misapplying FCC formulas ($a = 2\\sqrt{2}R$). BCC has $a = 4R/\\sqrt{3}$!`,
        '2': t`$\\frac{1}{4\\sqrt{2}R^2}$ is the planar density of $(110)$ in FCC, not BCC.`,
        '3': t`$\\frac{1}{\\sqrt{2}R^2}$ counts only 1 atom instead of 2 atoms.`
      },
      commonTrap: t`Student Mistake Alert: Confusing BCC with FCC. In BCC, the (110) plane passes directly through the body-center atom, giving 2 full atoms and area $\\frac{16\\sqrt{2}}{3}R^2$.`,
      reference: 'MIAE 221 Midterm 2025 Version A, Question 4; Callister Chapter 3'
    },
    source: src(L6, CH3, 'Midterm 2025 Q4 (BCC planar density correction)')
  }),

  q({
    id: 'Q_MIAE221_E02',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q20) · Concordia University',
    topic: 'Highest Ductility Identification (Exam Correction)',
    difficulty: 'Midterm Level',
    question: t`In the tensile stress-strain curves of five materials (Figure 4: A, B, C, D, F), which material exhibits the highest ductility?`,
    options: [
      t`Material A (largest fracture strain $\\epsilon_f$)`,
      t`Material D (highest tensile strength)`,
      t`Material F (highest Young's modulus)`,
      t`Material C (intermediate strength and strain)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Ductility is the measure of the degree of plastic deformation sustained at fracture ($\\%EL = \\epsilon_f \\times 100\\%$). It corresponds strictly to the horizontal strain distance at rupture.`,
      stepByStep: [],
      steps: [
        { title: 'Inspect the horizontal strain axis $\\epsilon$', note: t`The horizontal coordinate of the endpoint represents fracture strain $\\epsilon_f$.` },
        { title: 'Compare curve endpoints', note: t`Material A extends significantly further to the right than all other curves (B, C, D, F).` },
        { title: 'Conclude ductility', note: t`Because Material A endures the greatest elongation before breaking, it has the highest ductility.` }
      ],
      answer: t`Material A`,
      whyWrong: {
        '1': t`Exam Trap: The student scan marked Material D, confusing ductility with ultimate tensile strength! Material D is strong, but Material A is far more ductile.`,
        '2': t`Material F is brittle with high stiffness but virtually zero ductility.`,
        '3': t`Material C fractures at an intermediate strain lower than A.`
      },
      commonTrap: t`Student Mistake Alert: Confusing ductility with strength or toughness. High strength often correlates with low ductility. Look strictly at fracture strain $\\epsilon_f$ on the horizontal axis!`,
      reference: 'MIAE 221 Midterm 2025 Version A, Question 20; Callister Chapter 6'
    },
    source: src('Midterm 2025', 'Mechanical Properties', 'Question 20')
  }),

  q({
    id: 'Q_MIAE221_E03',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q30) · Concordia University',
    topic: 'Crystalline vs Amorphous Order (Exam Correction)',
    difficulty: 'Foundation',
    question: t`True or False: Crystalline atomic structures have both short-range and long-range order, whereas amorphous or non-crystalline materials (such as glass) have only short-range order.`,
    options: [
      t`True`,
      t`False`,
      t`False, neither crystalline nor amorphous materials possess short-range order`,
      t`False, amorphous materials possess neither short-range nor long-range order`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By fundamental definition, crystalline solids possess long-range periodic translational symmetry, while amorphous solids possess only localized short-range coordination.`,
      stepByStep: [],
      steps: [
        { title: 'Crystalline definition', note: t`Atoms arrange in periodic 3D lattices repeated over millions of unit cells $\\implies$ both short- and long-range order.` },
        { title: 'Amorphous definition', note: t`Bond angles and lengths are well-defined only for nearest neighbors (e.g., SiO4 tetrahedra in glass) $\\implies$ short-range order only.` }
      ],
      answer: t`True`,
      whyWrong: {
        '1': t`Exam Trap: The student scan marked this statement as False. The statement is fundamentally TRUE according to Callister and lecture definitions.`
      },
      commonTrap: t`Student Mistake Alert: Assuming amorphous materials have zero order. They DO have short-range order (coordination polyhedron), but NO long-range order.`,
      reference: 'MIAE 221 Midterm 2025 Version A, Question 30'
    },
    source: src(L4, CH3, 'Question 30 (crystalline vs amorphous order)')
  }),

  q({
    id: 'Q_MIAE221_E04',
    chapter: 'past-final',
    pastPaper: 'Final Exam Review for MIAE 221 (Q30) · Concordia University',
    topic: 'Ceramic Processing & Sintering Mechanism (Exam Correction)',
    difficulty: 'Midterm Level',
    question: t`Which of the following statements about ceramics is true? Ceramic components are:`,
    options: [
      t`Usually made from powder compacts which are sintered below their melting points`,
      t`Exceedingly hard but capable of substantial plastic deformation at room temperature`,
      t`Usually cast in the molten state in a similar way to cast irons`,
      t`Usually sintered just above their melting points to ensure liquefaction`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Due to extremely high melting points and brittleness, ceramics are shaped as powder compacts and densified via solid-state sintering BELOW their melting points ($T \\approx 0.7 - 0.8 T_m$).`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate sintering temperature', note: t`Solid-state diffusion drives pore elimination and neck formation below Tm.` },
        { title: 'Evaluate room temperature plasticity', note: t`Ceramics fracture elastically; dislocation motion is virtually impossible at room temperature due to high directional bonding.` }
      ],
      answer: t`Usually made from powder compacts which are sintered below their melting points`,
      whyWrong: {
        '1': t`Exam Trap: The student scan circled plastic deformation at room temperature. Ceramics are brittle with virtually zero plastic strain!`,
        '2': t`Ceramics are not cast because molten temperatures are prohibitively high and viscosity is extreme.`,
        '3': t`Sintering above the melting point is liquid-phase casting/melting, not solid-state sintering.`
      },
      commonTrap: t`Thinking ceramics can deform plastically at room temperature. Plastic deformation in ceramics only occurs at elevated temperatures near Tm.`,
      reference: 'MIAE 221 Final Exam Review Question 30; Callister Chapter 12 & 13'
    },
    source: src('Final Review', 'Ceramics', 'Question 30')
  }),

  q({
    id: 'Q_MIAE221_E05',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q29) · Concordia University',
    topic: 'Diffraction Angle vs Bragg Angle Trap',
    difficulty: 'Midterm Level',
    question: t`Monochromatic X-radiation ($\\lambda = 0.1542\\text{ nm}$) reflects in first order from the $(113)$ planes of FCC Platinum ($a = 0.3923\\text{ nm}$). The Bragg angle is $\\theta = 40.69^\\circ$. What is the expected diffraction angle $(2\\theta)$?`,
    options: [
      t`$2\\theta = 81.38^\\circ$`,
      t`$2\\theta = 40.69^\\circ$`,
      t`$2\\theta = 20.35^\\circ$`,
      t`$2\\theta = 121.07^\\circ$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Bragg's Law gives the glancing angle $\\theta$. The physical diffraction angle recorded on a powder diffractometer is $2\\theta$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate interplanar spacing', math: t`d_{113} = \\frac{a}{\\sqrt{1^2 + 1^2 + 3^2}} = \\frac{0.3923}{\\sqrt{11}} = 0.11828\\text{ nm}` },
        { title: 'Apply Bragg Law for theta', math: t`\\sin\\theta = \\frac{\\lambda}{2 d_{113}} = \\frac{0.1542}{2(0.11828)} = 0.6518 \\implies \\theta = 40.69^\\circ` },
        { title: 'Calculate diffraction angle 2-theta', math: t`2\\theta = 2 \\times 40.69^\\circ = 81.38^\\circ` }
      ],
      answer: t`2\\theta = 81.38^\\circ`,
      whyWrong: {
        '1': t`Exam Trap: Confusing $\\theta$ (Bragg angle) with $2\\theta$ (diffraction angle). If an exam asks for $2\\theta$, $40.69^\\circ$ is wrong!`,
        '2': t`$20.35^\\circ$ halves $\\theta$ instead of doubling it.`,
        '3': t`$121.07^\\circ$ adds $40.69^\\circ$ to $2\\theta$.`
      },
      commonTrap: t`Failing to double $\\theta$. Diffractometer charts always display peaks against $2\\theta$ on the horizontal axis!`,
      reference: 'MIAE 221 Midterm 2025 Version A, Question 29; Callister Section 3.16'
    },
    source: src(L6, CH3, 'Midterm 2025 Q29 (XRD diffraction angle)')
  }),

  q({
    id: 'Q_MIAE221_E06',
    chapter: 'past-final',
    pastPaper: 'Final Exam Review for MIAE 221 (Q24) · Concordia University',
    topic: 'Porosity Effect on Ceramic Elastic Modulus',
    difficulty: 'Midterm Level',
    question: t`The modulus of elasticity of beryllium oxide (BeO) with $5\\text{ vol}\\%$ porosity is $310\\text{ GPa}$. What is the modulus of elasticity $E_0$ of the fully dense, non-porous material ($0\\%$ porosity)?`,
    options: [
      t`$341.7\\text{ GPa}$`,
      t`$281.2\\text{ GPa}$`,
      t`$326.2\\text{ GPa}$`,
      t`$243.3\\text{ GPa}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Porosity diminishes the load-bearing cross section and acts as stress risers according to $E = E_0(1 - 1.9P + 0.9P^2)$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify porosity fraction', math: t`P = 0.05` },
        { title: 'Calculate polynomial reduction factor', math: t`1 - 1.9(0.05) + 0.9(0.05)^2 = 1 - 0.095 + 0.00225 = 0.90725` },
        { title: 'Solve for non-porous modulus E_0', math: t`E_0 = \\frac{E}{0.90725} = \\frac{310\\text{ GPa}}{0.90725} \\approx 341.7\\text{ GPa}` }
      ],
      answer: t`E_0 = 341.7\\text{ GPa}`,
      whyWrong: {
        '1': t`$281.2\\text{ GPa}$ incorrectly multiplies $310 \\times 0.90725$ instead of dividing (non-porous MUST be stiffer!).`,
        '2': t`$326.2\\text{ GPa}$ uses a linear $1 - P$ rule.`,
        '3': t`$243.3\\text{ GPa}$ uses flexural strength porosity exponent.`
      },
      commonTrap: t`Multiplying by the factor instead of dividing. A non-porous ceramic must always be STIFFIER than the porous specimen!`,
      reference: 'MIAE 221 Final Exam Review Question 24; Callister Chapter 12'
    },
    source: src('Final Review', 'Ceramics', 'Question 24')
  }),

  q({
    id: 'Q_MIAE221_E07',
    chapter: 'past-final',
    pastPaper: 'Final Exam Review for MIAE 221 (Q19) · Concordia University',
    topic: 'Electrical Resistance vs Temperature (Metal vs Semiconductor)',
    difficulty: 'Midterm Level',
    question: t`As temperature increases near room temperature, how does the electrical resistance of a metal compare to that of an intrinsic semiconductor?`,
    options: [
      t`Metal: increases; Semiconductor: decreases`,
      t`Metal: decreases; Semiconductor: increases`,
      t`Metal: increases; Semiconductor: increases`,
      t`Metal: decreases; Semiconductor: decreases`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Metal conductivity is mobility-limited by thermal phonon scattering (resistance rises). Semiconductor conductivity is carrier-limited by exponential thermal excitation across the band gap (resistance drops).`,
      stepByStep: [],
      steps: [
        { title: 'Metal mechanism', note: t`Carrier concentration is constant. Rising T increases lattice vibrations, scattering electrons $\\implies$ resistance INCREASES.` },
        { title: 'Semiconductor mechanism', note: t`Thermal energy promotes electrons across Eg, exponentially multiplying electron-hole pairs $\\implies$ resistance DECREASES.` }
      ],
      answer: t`Metal: increases; Semiconductor: decreases`,
      whyWrong: {
        '1': t`Reverses the physical mechanisms.`,
        '2': t`Fails to recognize that semiconductors generate carriers with heat.`,
        '3': t`Ignores phonon scattering in metals.`
      },
      commonTrap: t`Assuming all conductors behave alike. Semiconductors have negative temperature coefficients of resistance (NTC)!`,
      reference: 'MIAE 221 Final Exam Review Question 19; Callister Chapter 18'
    },
    source: src('Final Review', 'Electrical Properties', 'Question 19')
  }),

  q({
    id: 'Q_MIAE221_E08',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q7) · Concordia University',
    topic: 'Steady-State Diffusion Flux and Mass Flow',
    difficulty: 'Exam Master',
    question: t`Hydrogen gas diffuses through an 8-mm-thick palladium sheet ($A = 1.20\\text{ m}^2$) at $500^\\circ\\text{C}$ with $D = 1.0 \\times 10^{-8}\\text{ m}^2/\\text{s}$. If concentrations on the high- and low-pressure sides are $2.4$ and $0.6\\text{ kg/m}^3$ respectively, calculate the mass of hydrogen passing through per hour.`,
    options: [
      t`$9.72 \\times 10^{-3}\\text{ kg/h}$`,
      t`$2.70 \\times 10^{-6}\\text{ kg/h}$`,
      t`$2.16 \\times 10^{-3}\\text{ kg/h}$`,
      t`$1.62 \\times 10^{-4}\\text{ kg/h}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Fick's First Law: $J = -D \\frac{\\Delta C}{\\Delta x}$. Total mass per hour is $M = J \\times A \\times 3600\\text{ s}$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate concentration gradient', math: t`\\frac{\\Delta C}{\\Delta x} = \\frac{2.4 - 0.6}{8 \\times 10^{-3}\\text{ m}} = \\frac{1.8}{0.008} = 225\\text{ kg/m}^4` },
        { title: 'Calculate diffusion flux J', math: t`J = (1.0 \\times 10^{-8}\\text{ m}^2/\\text{s}) \\times 225 = 2.25 \\times 10^{-6}\\text{ kg/(m}^2\\cdot\\text{s)}` },
        { title: 'Mass flow per second', math: t`\\dot{M} = J \\cdot A = (2.25 \\times 10^{-6}) \\times 1.20 = 2.70 \\times 10^{-6}\\text{ kg/s}` },
        { title: 'Convert to mass per hour', math: t`M_{\\text{hour}} = (2.70 \\times 10^{-6}) \\times 3600\\text{ s/h} = 9.72 \\times 10^{-3}\\text{ kg/h}` }
      ],
      answer: t`9.72 \\times 10^{-3}\\text{ kg/h}`,
      whyWrong: {
        '1': t`$2.70 \\times 10^{-6}$ is the mass flow per SECOND, forgetting to multiply by 3600 seconds per hour.`,
        '2': t`$2.16 \\times 10^{-3}$ assumes sheet thickness was 10 mm.`,
        '3': t`$1.62 \\times 10^{-4}$ converts using 60 seconds instead of 3600.`
      },
      commonTrap: t`Forgetting unit conversion from seconds to hours ($3600\\text{ s/h}$). Check the handwritten calculations on the midterm paper!`,
      reference: 'MIAE 221 Midterm 2025 Version A, Question 7; Callister Chapter 5'
    },
    source: src('Midterm 2025', 'Diffusion', 'Question 7')
  }),

  // Authentic Exam Questions from Scanned Midterms and Reviews (2024-2025)
  q({
    id: 'Q_MIAE221_P14',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 / 2025 (Q1) · Concordia University',
    topic: 'Crystallographic Direction Families: Cubic Face Diagonals',
    difficulty: 'Foundation',
    question: t`In a cubic crystal structure, the face diagonals belong to which family of crystallographic directions?`,
    options: [
      t`$\\langle 110 \\rangle$`,
      t`$\\langle 100 \\rangle$`,
      t`$\\langle 111 \\rangle$`,
      t`$\\langle 112 \\rangle$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In cubic symmetry, indices enclose families of equivalent directions in angle brackets $\\langle uvw \\rangle$. A vector traversing a face diagonal runs 1 unit in $x$, 1 unit in $y$, and 0 in $z$, representing the $\\langle 110 \\rangle$ family (consisting of 12 equivalent directions).`,
      stepByStep: [],
      steps: [
        { title: 'Vector coordinates', math: t`\\vec{r} = 1\\hat{x} + 1\\hat{y} + 0\\hat{z} \\implies [110]` },
        { title: 'Family notation', note: t`By cubic symmetry, all 12 face diagonals ($[110], [101], [011], [1\\bar{1}0], \\dots$) form the \\langle 110 \\rangle family.` }
      ],
      answer: t`\\langle 110 \\rangle`,
      whyWrong: {
        '1': t`$\\langle 100 \\rangle$ is the family of cube edges (6 directions).`,
        '2': t`$\\langle 111 \\rangle$ is the family of body diagonals (8 directions).`,
        '3': t`$\\langle 112 \\rangle$ vectors connect corners to edge bisectors.`
      },
      commonTrap: t`Confusing body diagonals ($\\langle 111 \\rangle$) with face diagonals ($\\langle 110 \\rangle$).`,
      reference: 'MIAE 221 Midterm 2024 Question 1; Callister Chapter 3'
    },
    source: src('Midterm 2024', 'Crystal Directions', 'Question 1')
  }),

  q({
    id: 'Q_MIAE221_P15',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q2) · Concordia University',
    topic: 'Arrhenius Interstitial Diffusion: BCC vs FCC Iron',
    difficulty: 'Midterm Level',
    question: t`At $910^\\circ\\text{C}$, the diffusion coefficient of carbon in BCC iron ($\\alpha$-ferrite) is approximately how many times larger than that in FCC iron ($\\gamma$-austenite)?`,
    options: [
      t`$\\approx 30\\text{ times faster in BCC}$`,
      t`$\\approx 30\\text{ times faster in FCC}$`,
      t`Equal in both phases because the temperature is identical`,
      t`$\\approx 10{,}000\\text{ times faster in FCC}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`BCC iron has a lower atomic packing factor ($\text{APF} = 0.68$) than FCC ($\text{APF} = 0.74$). The lower packing density and shorter jump distances in BCC result in a significantly lower activation energy ($Q_d \\approx 80\\text{ kJ/mol}$ for BCC vs $148\\text{ kJ/mol}$ for FCC), making carbon diffuse roughly 25–30 times faster in BCC iron at $910^\\circ\\text{C}$.`,
      stepByStep: [],
      steps: [
        { title: 'Packing Factor Comparison', note: t`BCC APF = 0.68 (more open structure); FCC APF = 0.74 (close-packed).` },
        { title: 'Activation Energy', math: t`Q_{d,\\text{BCC}} \\approx 80\\text{ kJ/mol} < Q_{d,\\text{FCC}} \\approx 148\\text{ kJ/mol}` },
        { title: 'Arrhenius ratio at 1183 K', math: t`\\frac{D_{\\text{BCC}}}{D_{\\text{FCC}}} = \\frac{D_{0,\\text{BCC}} e^{-Q_1/RT}}{D_{0,\\text{FCC}} e^{-Q_2/RT}} \\approx 30` }
      ],
      answer: t`\\approx 30\\text{ times faster in BCC}`,
      whyWrong: {
        '1': t`FCC has a higher packing factor (0.74), which restricts interstitial jump mobility.`,
        '2': t`Diffusion coefficients depend exponentially on crystal crystal structure and activation energy, not temperature alone.`,
        '3': t`Reverses the structural openess of BCC.`
      },
      commonTrap: t`Assuming close-packed FCC allows faster diffusion. Because FCC atoms are packed more tightly, interstitial diffusion is significantly SLOWER!`,
      reference: 'MIAE 221 Midterm 2024 Question 2; Callister Chapter 5'
    },
    source: src('Midterm 2024', 'Diffusion', 'Question 2')
  }),

  q({
    id: 'Q_MIAE221_P16',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q3) · Concordia University',
    topic: 'Carbon Allotropes: Diamond vs Graphite Bonding',
    difficulty: 'Foundation',
    question: t`What fundamentally accounts for the dramatic difference in mechanical and electrical properties between diamond and graphite?`,
    options: [
      t`Diamond forms a 3D covalent network of $sp^3$ bonds; graphite consists of $sp^2$ covalent layered sheets bound by weak secondary van der Waals forces`,
      t`Diamond has metallic bonding with free electrons; graphite has purely ionic bonding`,
      t`Diamond is amorphous glass; graphite is an ordered single crystal`,
      t`Diamond contains high concentrations of interstitial metallic impurities`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Allotropy of carbon. Diamond has each carbon tetrahedral $sp^3$ covalently bonded to 4 neighbors, producing extreme hardness and electrical insulation. Graphite has $sp^2$ hexagonal sheets where delocalized $\\pi$-electrons provide electrical conductivity, while weak interlayer van der Waals bonds allow easy cleavage/lubrication.`,
      stepByStep: [],
      steps: [
        { title: 'Diamond Structure', note: t`3D tetrahedral covalent network ($sp^3$); no free electrons, isotropic high stiffness.` },
        { title: 'Graphite Structure', note: t`Planar hexagonal graphene sheets ($sp^2$) with delocalized pi-electrons (conductive) separated by weak van der Waals gaps (lubricating).` }
      ],
      answer: t`Diamond is 3D covalent ($sp^3$); graphite is layered $sp^2$ sheets with weak van der Waals interlayer bonds`,
      whyWrong: {
        '1': t`Neither carbon allotrope possesses metallic or ionic bonding.`,
        '2': t`Diamond is crystalline, not amorphous glass.`,
        '3': t`Both are pure elemental carbon allotropes.`
      },
      commonTrap: t`Thinking graphite's softness is due to weak covalent bonds within the sheets. The intra-layer bonds are stronger than diamond; only the INTER-layer van der Waals bonds are weak!`,
      reference: 'MIAE 221 Midterm 2024 Question 3; Callister Chapter 12'
    },
    source: src('Midterm 2024', 'Atomic Bonding', 'Question 3')
  }),

  q({
    id: 'Q_MIAE221_P17',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q4) · Concordia University',
    topic: 'BCC Unit Cell Number Density per Volume',
    difficulty: 'Midterm Level',
    question: t`Vanadium crystallizes in a BCC unit cell with lattice parameter $a = 0.304\\text{ nm}$. How many unit cells are contained within a volume of $1.0\\text{ mm}^3$?`,
    options: [
      t`$3.56 \\times 10^{19}\\text{ unit cells}$`,
      t`$7.12 \\times 10^{19}\\text{ unit cells}$`,
      t`$1.78 \\times 10^{16}\\text{ unit cells}$`,
      t`$3.56 \\times 10^{22}\\text{ unit cells}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Unit cell volume is $V_c = a^3$. The number of unit cells in total volume $V$ is $N = V / V_c$. Ensure proper metric unit conversion from $\\text{nm}$ to $\\text{mm}$.`,
      stepByStep: [],
      steps: [
        { title: 'Convert lattice parameter to millimeters', math: t`a = 0.304\\text{ nm} = 0.304 \\times 10^{-6}\\text{ mm}` },
        { title: 'Compute unit cell volume $V_c$', math: t`V_c = a^3 = (0.304 \\times 10^{-6}\\text{ mm})^3 = 2.8094 \\times 10^{-20}\\text{ mm}^3` },
        { title: 'Calculate number of unit cells in $1.0\\text{ mm}^3$', math: t`N = \\frac{1.0\\text{ mm}^3}{2.8094 \\times 10^{-20}\\text{ mm}^3} \\approx 3.56 \\times 10^{19}\\text{ unit cells}` }
      ],
      answer: t`3.56 \\times 10^{19}\\text{ unit cells}`,
      whyWrong: {
        '1': t`$7.12 \\times 10^{19}$ is the number of ATOMS ($2 \\times N$ for BCC), not the number of unit cells.`,
        '2': t`Unit conversion error: converting $\\text{nm}$ as $10^{-7}\\text{ mm}$.`,
        '3': t`Using $1\\text{ cm}^3$ volume instead of $1\\text{ mm}^3$.`
      },
      commonTrap: t`Multiplying by 2 (the BCC atom count). The question asks for the number of UNIT CELLS, not the number of atoms!`,
      reference: 'MIAE 221 Midterm 2024 Question 4; Callister Chapter 3'
    },
    source: src('Midterm 2024', 'Crystal Structures', 'Question 4')
  }),

  q({
    id: 'Q_MIAE221_P18',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q5) · Concordia University',
    topic: 'Mechanical Deformation Threshold: Yield Strength',
    difficulty: 'Foundation',
    question: t`A steel soup can dropped onto a concrete floor sustains a visible permanent dent. This permanent plastic deformation occurred because the impact stresses exceeded the material's:`,
    options: [
      t`Yield strength ($\\sigma_y$)`,
      t`Ultimate tensile strength ($\\sigma_{\\text{UTS}}$)`,
      t`Modulus of elasticity ($E$)`,
      t`Poisson's ratio ($\\nu$)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Elastic deformation is completely reversible upon load release. Plastic (permanent) deformation begins precisely when the local applied stress exceeds the yield strength ($\\sigma_y$). Below $\\sigma_y$, all deflection is elastic.`,
      stepByStep: [],
      steps: [
        { title: 'Deformation Regimes', note: t`$\\sigma < \\sigma_y$: Hookean elastic deformation (recovers 100%).` },
        { title: 'Onset of Plastic Flow', note: t`$\\sigma \\ge \\sigma_y$: Dislocation motion initiates permanent shape change (plasticity).` }
      ],
      answer: t`Yield strength (\\sigma_y)`,
      whyWrong: {
        '1': t`Ultimate tensile strength is the maximum engineering stress before necking and fracture, far beyond the initial yield threshold.`,
        '2': t`Modulus of elasticity measures initial elastic slope/stiffness, not a failure or transition stress.`,
        '3': t`Poisson's ratio is the ratio of lateral to axial strain.`
      },
      commonTrap: t`Confusing yield strength (onset of permanent deformation) with ultimate tensile strength (fracture limit).`,
      reference: 'MIAE 221 Midterm 2024 Question 5; Callister Chapter 6'
    },
    source: src('Midterm 2024', 'Mechanical Properties', 'Question 5')
  }),

  q({
    id: 'Q_MIAE221_P19',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q6) · Concordia University',
    topic: 'Interatomic Potential: Equilibrium Separation Conditions',
    difficulty: 'Foundation',
    question: t`At the equilibrium interatomic spacing $r_0$ between two bonded atoms, what are the net bonding force $F_{\\text{net}}$ and potential energy $E_{\\text{net}}$?`,
    options: [
      t`$F_{\\text{net}} = 0$, and $E_{\\text{net}}$ is at a global minimum`,
      t`$F_{\\text{net}}$ is at a maximum, and $E_{\\text{net}} = 0$`,
      t`$F_{\\text{net}} = 0$, and $E_{\\text{net}} = 0$`,
      t`Both $F_{\\text{net}}$ and $E_{\\text{net}}$ are at their absolute maximum`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By definition, force is the negative derivative of potential energy: $F = -\\dfrac{dE}{dr}$. At equilibrium separation $r_0$, attractive and repulsive forces exactly balance ($F_A + F_R = 0 \\implies F_{\\text{net}} = 0$). This zero-force location corresponds to the bottom of the potential energy well (minimum $E_{\\text{net}}$).`,
      stepByStep: [],
      steps: [
        { title: 'Force Equilibrium', math: t`F_{\\text{net}}(r_0) = F_A(r_0) + F_R(r_0) = 0` },
        { title: 'Energy Relationship', math: t`\\frac{dE_{\\text{net}}}{dr}\\Bigg|_{r_0} = -F_{\\text{net}}(r_0) = 0 \\implies E_{\\text{net}}(r_0) = -E_0\\text{ (potential well minimum)}` }
      ],
      answer: t`F_{\\text{net}} = 0, and E_{\\text{net}} is at a global minimum`,
      whyWrong: {
        '1': t`Net force is zero, not maximum. Maximum attractive force occurs at an inflection point $r > r_0$.`,
        '2': t`$E_{\\text{net}}$ is negative (the bonding energy $-E_0$), not zero.`,
        '3': t`Energy is at a stable minimum, not a maximum.`
      },
      commonTrap: t`Assuming potential energy must be zero at equilibrium. It is at its deepest negative trough (the bond dissociation energy $E_0$)!`,
      reference: 'MIAE 221 Midterm 2024 Question 6; Callister Chapter 2'
    },
    source: src('Midterm 2024', 'Atomic Bonding', 'Question 6')
  }),

  q({
    id: 'Q_MIAE221_P20',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q7) · Concordia University',
    topic: 'Non-Steady-State Diffusion: Fick\'s Second Law & Error Function',
    difficulty: 'Exam Master',
    question: t`A steel gear is carburized at high temperature with surface concentration maintained at $C_s = 4.0\\text{ kg/m}^3$ and initial uniform carbon concentration $C_0 = 0.8\\text{ kg/m}^3$. At a depth where $z = \\dfrac{x}{2\\sqrt{Dt}} = 0.50$ (given $\\text{erf}(0.50) = 0.5205$), what is the carbon concentration $C_x$?`,
    options: [
      t`$2.33\\text{ kg/m}^3$`,
      t`$2.46\\text{ kg/m}^3$`,
      t`$1.66\\text{ kg/m}^3$`,
      t`$3.20\\text{ kg/m}^3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Fick's Second Law for semi-infinite solid with constant surface concentration: $\\dfrac{C_x - C_0}{C_s - C_0} = 1 - \\text{erf}\\left(\\dfrac{x}{2\\sqrt{Dt}}\\right)$. Solve explicitly for $C_x$.`,
      stepByStep: [],
      steps: [
        { title: 'Standard Error Function Equation', math: t`\\frac{C_x - C_0}{C_s - C_0} = 1 - \\text{erf}(z)` },
        { title: 'Substitute given values', math: t`\\frac{C_x - 0.8}{4.0 - 0.8} = 1 - 0.5205 = 0.4795` },
        { title: 'Multiply by concentration range', math: t`C_x - 0.8 = 0.4795 \\times 3.2 = 1.5344` },
        { title: 'Add initial concentration $C_0$', math: t`C_x = 0.8 + 1.5344 = 2.3344 \\approx 2.33\\text{ kg/m}^3` }
      ],
      answer: t`2.33\\text{ kg/m}^3`,
      whyWrong: {
        '1': t`Using $\\text{erf}(z) = 0.5205$ directly without $1 - \\text{erf}(z)$: $0.8 + 0.5205(3.2) = 2.46\\text{ kg/m}^3$.`,
        '2': t`$1.66\\text{ kg/m}^3$ forgets to add initial baseline $C_0 = 0.8$.`,
        '3': t`$3.20\\text{ kg/m}^3$ is simply $(C_s - C_0)$.`
      },
      commonTrap: t`Forgetting that the profile uses $1 - \\text{erf}(z)$, not $\\text{erf}(z)$ directly when defining $(C_x - C_0)/(C_s - C_0)$.`,
      reference: 'MIAE 221 Midterm 2024 Question 7; Callister Chapter 5'
    },
    source: src('Midterm 2024', 'Diffusion', 'Question 7')
  }),

  q({
    id: 'Q_MIAE221_P21',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q8) · Concordia University',
    topic: 'Elastic Modulus Invariance in Structural Steels',
    difficulty: 'Midterm Level',
    question: t`A designer considers two steels for a cantilever leaf spring: Steel A (ultra-high strength quenched alloy, $\\sigma_y = 1200\\text{ MPa}$) and Steel B (standard mild carbon steel, $\\sigma_y = 250\\text{ MPa}$). Both beams have identical geometric cross-sections. In the purely elastic regime (small deflections), which beam requires more force to deflect by $2.0\\text{ mm}$?`,
    options: [
      t`Both require identical force because their Modulus of Elasticity ($E \\approx 207\\text{ GPa}$) is virtually identical`,
      t`Steel A requires nearly 5 times more force because of its higher yield strength`,
      t`Steel B requires more force because lower strength steels have greater stiffness`,
      t`Steel A requires less force due to alloy work softening`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Elastic stiffness is governed entirely by Hooke's Law and Young's modulus $E$. Young's modulus is a structure-insensitive property determined by the iron-iron atomic bond energy curve. Alloying and heat treatment change yield strength (dislocation pinning) but have negligible effect ($< 2\\%$) on $E$ ($E \\approx 207\\text{ GPa}$ for all carbon and low-alloy steels).`,
      stepByStep: [],
      steps: [
        { title: 'Stiffness Formula', math: t`k = \\frac{F}{\\delta} = \\frac{3EI}{L^3}` },
        { title: 'Material Dependency', note: t`The force depends strictly on E and geometry (I, L), NOT on yield strength. Both steels have E = 207 GPa.` }
      ],
      answer: t`Both require identical force because their Young's modulus (E ~ 207 GPa) is identical`,
      whyWrong: {
        '1': t`Exam Trap: Confusing yield strength (resistance to plastic deformation) with elastic modulus (resistance to elastic deflection).`,
        '2': t`Yield strength does not increase elastic stiffness.`,
        '3': t`Alloying does not lower the modulus of elasticity.`
      },
      commonTrap: t`Assuming high-strength steels are 'stiffer' than mild steel. Their elastic modulus $E$ is identical; high-strength steel simply stays elastic over a wider stress range!`,
      reference: 'MIAE 221 Midterm 2024 Question 8; Callister Chapter 6'
    },
    source: src('Midterm 2024', 'Mechanical Properties', 'Question 8')
  }),

  q({
    id: 'Q_MIAE221_P22',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q9) · Concordia University',
    topic: 'Elastic Elongation of Cylindrical Steel Rod',
    difficulty: 'Midterm Level',
    question: t`A vertical 10-meter-long cylindrical steel rod ($d = 20\\text{ mm}$, $E = 207\\text{ GPa}$) supports a static suspended weight of mass $m = 1000\\text{ kg}$ ($F = 9800\\text{ N}$). What is the final extended length of the rod under this load?`,
    options: [
      t`$10.00151\\text{ m}$`,
      t`$10.00603\\text{ m}$`,
      t`$10.01507\\text{ m}$`,
      t`$10.00038\\text{ m}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Hooke's Law: $\\sigma = E \\epsilon \\implies \\dfrac{F}{A} = E \\dfrac{\\Delta L}{L_0} \\implies \\Delta L = \\dfrac{F L_0}{A E}$. Final length is $L_f = L_0 + \\Delta L$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate cross-sectional area A', math: t`A = \\frac{\\pi}{4}d^2 = \\frac{\\pi}{4}(0.020\\text{ m})^2 = 3.1416 \\times 10^{-4}\\text{ m}^2` },
        { title: 'Calculate elongation $\\Delta L$', math: t`\\Delta L = \\frac{(9800\\text{ N})(10.0\\text{ m})}{(3.1416 \\times 10^{-4}\\text{ m}^2)(207 \\times 10^9\\text{ N/m}^2)} = \\frac{98000}{6.5031 \\times 10^7} \\approx 1.507 \\times 10^{-3}\\text{ m} = 1.507\\text{ mm}` },
        { title: 'Compute final length $L_f$', math: t`L_f = 10.0\\text{ m} + 0.001507\\text{ m} = 10.00151\\text{ m}` }
      ],
      answer: t`10.00151\\text{ m}`,
      whyWrong: {
        '1': t`Using radius $r = 20\\text{ mm}$ instead of diameter $d = 20\\text{ mm}$ ($4\\times$ error in area).`,
        '2': t`Decimal place conversion error on GPa ($10^6$ instead of $10^9$).`,
        '3': t`Using $E = 800\\text{ GPa}$.`
      },
      commonTrap: t`Forgetting to square the diameter in $A = \\pi d^2 / 4$ or confusing radius with diameter.`,
      reference: 'MIAE 221 Midterm 2024 Question 9; Callister Chapter 6'
    },
    source: src('Midterm 2024', 'Mechanical Properties', 'Question 9')
  }),

  q({
    id: 'Q_MIAE221_P23',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q10) · Concordia University',
    topic: 'Miller Indices of Crystallographic Plane from Intercepts',
    difficulty: 'Foundation',
    question: t`A crystallographic plane intersects the coordinate axes at $x = -1$, $y = -1$, and $z = 1$ in terms of lattice parameters. What are the Miller indices of this plane?`,
    options: [
      t`$(\\bar{1}\\bar{1}1)$`,
      t`$(11\\bar{1})$`,
      t`$[\\bar{1}\\bar{1}1]$`,
      t`$(\\bar{1}11)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Miller indices $(hkl)$ for planes are obtained by: (1) reading axial intercepts, (2) taking their reciprocals, (3) clearing fractions to smallest integers, and (4) enclosing in parentheses $(hkl)$ with negative signs represented by overbars.`,
      stepByStep: [],
      steps: [
        { title: 'Intercepts', math: t`x = -1, \\quad y = -1, \\quad z = 1` },
        { title: 'Take reciprocals', math: t`h = \\frac{1}{-1} = -1, \\quad k = \\frac{1}{-1} = -1, \\quad l = \\frac{1}{1} = 1` },
        { title: 'Format with overbars in parentheses', math: t`(\\bar{1}\\bar{1}1)` }
      ],
      answer: t`(\\bar{1}\\bar{1}1)`,
      whyWrong: {
        '1': t`$(11\\bar{1})$ is the opposite plane (inverted signs on all axes).`,
        '2': t`Square brackets $[\\bar{1}\\bar{1}1]$ denote a DIRECTION, not a plane. Planes must use parentheses ()!`,
        '3': t`Sign error on the y-axis.`
      },
      commonTrap: t`Using square brackets $[\\dots]$ instead of parentheses $(\\dots)$. Brackets denote crystallographic directions, whereas parentheses denote planes!`,
      reference: 'MIAE 221 Midterm 2024 Question 10; Callister Chapter 3'
    },
    source: src('Midterm 2024', 'Miller Indices', 'Question 10')
  }),

  q({
    id: 'Q_MIAE221_P24',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q11) · Concordia University',
    topic: 'Bragg\'s Law First-Order Diffraction Angle for Platinum',
    difficulty: 'Exam Master',
    question: t`Monochromatic X-radiation with wavelength $\\lambda = 0.1542\\text{ nm}$ diffracts from the $(113)$ planes of platinum (FCC, $a = 0.3924\\text{ nm}$). What is the diffraction angle $2\\theta$ for first-order reflection ($n = 1$)?`,
    options: [
      t`$2\\theta = 81.4^\\circ$`,
      t`$2\\theta = 40.7^\\circ$`,
      t`$2\\theta = 53.6^\\circ$`,
      t`$2\\theta = 90.0^\\circ$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`First calculate interplanar spacing $d_{hkl} = \\dfrac{a}{\\sqrt{h^2+k^2+l^2}}$. Then apply Bragg's Law: $n\\lambda = 2d\\sin\\theta$. Finally, compute the diffraction angle $2\\theta = 2 \\times \\theta$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate interplanar spacing $d_{113}$', math: t`d_{113} = \\frac{a}{\\sqrt{1^2 + 1^2 + 3^2}} = \\frac{0.3924\\text{ nm}}{\\sqrt{11}} = \\frac{0.3924}{3.3166} = 0.11831\\text{ nm}` },
        { title: 'Apply Bragg\'s law to find $\\sin\\theta$', math: t`\\sin\\theta = \\frac{\\lambda}{2 d_{113}} = \\frac{0.1542\\text{ nm}}{2(0.11831\\text{ nm})} = \\frac{0.1542}{0.23662} \\approx 0.65168` },
        { title: 'Compute Bragg angle $\\theta$', math: t`\\theta = \\arcsin(0.65168) \\approx 40.67^\\circ` },
        { title: 'Compute instrument diffraction angle $2\\theta$', math: t`2\\theta = 2 \\times 40.67^\\circ = 81.34^\\circ \\approx 81.4^\\circ` }
      ],
      answer: t`2\\theta = 81.4^\\circ`,
      whyWrong: {
        '1': t`Exam Trap: Reporting the Bragg angle $\\theta = 40.7^\\circ$ instead of the instrument diffractometer angle $2\\theta$!`,
        '2': t`$53.6^\\circ$ assumes diffraction from the (200) plane.`,
        '3': t`$90.0^\\circ$ assumes $\\sin\\theta = 1$.`
      },
      commonTrap: t`Reporting $\\theta$ instead of $2\\theta$. X-ray diffractometers always measure the deflection angle $2\\theta$!`,
      reference: 'MIAE 221 Midterm 2024 Question 11; Callister Chapter 3'
    },
    source: src('Midterm 2024', 'X-Ray Diffraction', 'Question 11')
  }),

  q({
    id: 'Q_MIAE221_P25',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q4) · Concordia University',
    topic: 'Student Scanned Error Correction: Planar Density of FCC (110) Plane',
    difficulty: 'Exam Master',
    question: t`A student's scanned midterm exam marks the planar density of the FCC $(110)$ plane as $PD = \\dfrac{1}{2\\sqrt{2}R^2}$. Is this answer mathematically correct?`,
    options: [
      t`No; the correct planar density is $\\dfrac{1}{4\\sqrt{2}R^2}$. The student undercalculated the rectangular plane area by a factor of 2`,
      t`Yes; the student's answer of $\\dfrac{1}{2\\sqrt{2}R^2}$ is completely correct`,
      t`No; the correct planar density is $\\dfrac{1}{8\\sqrt{2}R^2}$`,
      t`No; planar density for FCC (110) is zero because atoms do not touch along this plane`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Scanned Student Mistake Analysis! The FCC $(110)$ plane forms a rectangle with height $a = 2\\sqrt{2}R$ and width equal to the face diagonal $\\sqrt{2}a = 4R$. The area is $A = a \\times \\sqrt{2}a = \\sqrt{2}a^2 = 8\\sqrt{2}R^2$. The plane contains $4(1/4) + 2(1/2) = 2\\text{ atoms}$. Thus $PD = \\frac{2}{8\\sqrt{2}R^2} = \\frac{1}{4\\sqrt{2}R^2}$. The student forgot the face diagonal dimension is $4R$ (not $2R$), halving the true area!`,
      stepByStep: [],
      steps: [
        { title: 'Count atoms centered on the (110) slice', math: t`n = 4\\left(\\frac{1}{4}\\right) \\text{ [corners]} + 2\\left(\\frac{1}{2}\\right) \\text{ [face centers]} = 1 + 1 = 2\\text{ atoms}` },
        { title: 'Compute rectangular dimensions of the plane', math: t`\\text{Height} = a = 2\\sqrt{2}R; \\quad \\text{Width} = \\sqrt{2}a = \\sqrt{2}(2\\sqrt{2}R) = 4R` },
        { title: 'Compute total plane area $A_p$', math: t`A_p = a \\times (\\sqrt{2}a) = \\sqrt{2}a^2 = \\sqrt{2}(2\\sqrt{2}R)^2 = \\sqrt{2}(8R^2) = 8\\sqrt{2}R^2` },
        { title: 'Compute correct planar density', math: t`PD_{(110)} = \\frac{n}{A_p} = \\frac{2}{8\\sqrt{2}R^2} = \\frac{1}{4\\sqrt{2}R^2}` }
      ],
      answer: t`No; correct is 1 / (4*sqrt(2)*R^2). The student undercalculated plane area by a factor of 2`,
      whyWrong: {
        '1': t`Accepting the student's erroneous answer: $\\frac{1}{2\\sqrt{2}R^2}$ corresponds to an area of $4\\sqrt{2}R^2$, which wrongly assumes face diagonal length is $2R$ instead of $4R$.`,
        '2': t`$\\frac{1}{8\\sqrt{2}R^2}$ assumes only 1 atom lies in the plane instead of 2.`,
        '3': t`Atoms do lie directly in the (110) plane.`
      },
      commonTrap: t`Trusting student handwritten notes on past papers without deriving from first principles. The student missed the full $4R$ face diagonal width!`,
      reference: 'MIAE 221 Midterm 2025 Version A Question 4; Callister Chapter 3'
    },
    source: src('Midterm 2025', 'Planar Density', 'Question 4')
  }),

  q({
    id: 'Q_MIAE221_P26',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2025 Version A (Q8) · Concordia University',
    topic: 'Theoretical Density Calculation: BCC Tungsten',
    difficulty: 'Midterm Level',
    question: t`Tungsten (W) has a BCC crystal structure with atomic mass $A_W = 183.84\\text{ g/mol}$ and atomic radius $R = 0.1371\\text{ nm}$. What is its theoretical mass density $\\rho$?`,
    options: [
      t`$19.3\\text{ g/cm}^3$`,
      t`$16.5\\text{ g/cm}^3$`,
      t`$9.65\\text{ g/cm}^3$`,
      t`$21.4\\text{ g/cm}^3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Theoretical density formula: $\\rho = \\dfrac{n A}{V_c N_A}$. For BCC, $n = 2$ atoms/unit cell, and the lattice parameter along the close-packed body diagonal is $a = \\dfrac{4R}{\\sqrt{3}}$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate lattice parameter a', math: t`a = \\frac{4R}{\\sqrt{3}} = \\frac{4(0.1371\\text{ nm})}{\\sqrt{3}} = \\frac{0.5484}{1.73205} = 0.31662\\text{ nm} = 3.1662 \\times 10^{-8}\\text{ cm}` },
        { title: 'Compute unit cell volume $V_c$', math: t`V_c = a^3 = (3.1662 \\times 10^{-8}\\text{ cm})^3 = 3.174 \\times 10^{-23}\\text{ cm}^3` },
        { title: 'Apply theoretical density formula', math: t`\\rho = \\frac{n A_W}{V_c N_A} = \\frac{2(183.84\\text{ g/mol})}{(3.174 \\times 10^{-23}\\text{ cm}^3)(6.022 \\times 10^{23}\\text{ mol}^{-1})} = \\frac{367.68}{19.114} \\approx 19.24 \\approx 19.3\\text{ g/cm}^3` }
      ],
      answer: t`19.3\\text{ g/cm}^3`,
      whyWrong: {
        '1': t`Using FCC relation $a = 2\\sqrt{2}R$ instead of BCC $a = 4R/\\sqrt{3}$.`,
        '2': t`Using $n = 1$ (simple cubic) instead of $n = 2$ for BCC: yields half the density ($9.65\\text{ g/cm}^3$).`,
        '3': t`$21.4\\text{ g/cm}^3$ is the density of platinum (FCC).`
      },
      commonTrap: t`Mixing up BCC ($a = 4R/\\sqrt{3}$) and FCC ($a = 2\\sqrt{2}R$) lattice parameter formulas.`,
      reference: 'MIAE 221 Midterm 2025 Version A Question 8; Callister Chapter 3'
    },
    source: src('Midterm 2025', 'Theoretical Density', 'Question 8')
  }),

  q({
    id: 'Q_MIAE221_P27',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q19) · Concordia University',
    topic: 'Poisson\'s Ratio Determination from Tensile Data',
    difficulty: 'Midterm Level',
    question: t`A cylindrical metal specimen ($d_0 = 12.8000\\text{ mm}$) subjected to an elastic tensile stress exhibits an axial strain $\\epsilon_z = +0.0020$. Simultaneously, the diameter reduces to $12.7923\\text{ mm}$. What is the Poisson's ratio $\\nu$ of this material?`,
    options: [
      t`$0.30$`,
      t`$0.35$`,
      t`$0.25$`,
      t`$-0.30$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Poisson's ratio is defined as the negative ratio of lateral strain to axial strain: $\\nu = -\\dfrac{\\epsilon_x}{\\epsilon_z} = -\\dfrac{\\Delta d / d_0}{\\epsilon_z}$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate diameter change $\\Delta d$', math: t`\\Delta d = 12.7923 - 12.8000 = -0.0077\\text{ mm}` },
        { title: 'Compute lateral strain $\\epsilon_x$', math: t`\\epsilon_x = \\frac{\\Delta d}{d_0} = \\frac{-0.0077\\text{ mm}}{12.8000\\text{ mm}} = -0.00060156` },
        { title: 'Compute Poisson\'s ratio', math: t`\\nu = -\\frac{\\epsilon_x}{\\epsilon_z} = -\\frac{-0.00060156}{0.0020} = +0.3008 \\approx 0.30` }
      ],
      answer: t`0.30`,
      whyWrong: {
        '1': t`Rounding or calculation slip in diameter difference: using $0.0089$ instead of $0.0077$.`,
        '2': t`$0.25$ assumes $\\Delta d = -0.0064\\text{ mm}$.`,
        '3': t`Forgetting the negative sign in the definition of Poisson's ratio: $\\nu$ is conventionally positive for stable metals.`
      },
      commonTrap: t`Forgetting that tensile elongation produces lateral contraction (negative $\\Delta d$), which cancels with the minus sign in $\\nu = -\\epsilon_x / \\epsilon_z$.`,
      reference: 'MIAE 221 Midterm 2024 Question 19; Callister Chapter 6'
    },
    source: src('Midterm 2024', 'Mechanical Properties', 'Question 19')
  }),

  q({
    id: 'Q_MIAE221_P28',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 (Q20) · Concordia University',
    topic: 'Tensile Test Measurable Properties Boundary',
    difficulty: 'Foundation',
    question: t`Which of the following mechanical properties CANNOT be directly determined from a standard uniaxial tensile stress-strain test?`,
    options: [
      t`Hardness (Rockwell / Brinell indentation resistance)`,
      t`Yield strength ($\\sigma_y$ at $0.2\\%$ strain offset)`,
      t`Ultimate tensile strength ($\\sigma_{\\text{UTS}}$)`,
      t`Modulus of elasticity ($E$)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A standard tensile test continuously pulls a dogbone specimen uniaxially to measure the stress-strain curve, directly yielding $E$, $\\sigma_y$, $\\sigma_{\\text{UTS}}$, ductiliy ($\\text{\\%EL}$), and modulus of resilience. Hardness, however, measures localized surface resistance to permanent penetration/indentation under a pointed indenter (Rockwell, Brinell, Vickers) and requires a dedicated hardness tester.`,
      stepByStep: [],
      steps: [
        { title: 'Tensile Test Outputs', note: t`Yield strength, tensile strength, Young's modulus, and elongation to fracture are all derived from the tensile test curve.` },
        { title: 'Hardness Test', note: t`Indentation resistance requires pressing a diamond or carbide ball into the surface and measuring indentation depth or diameter.` }
      ],
      answer: t`Hardness`,
      whyWrong: {
        '1': t`Yield strength is directly read at the $0.002$ offset intersection with the linear curve.`,
        '2': t`Ultimate tensile strength is the maximum engineering stress point on the tensile curve.`,
        '3': t`Modulus of elasticity is the slope of the initial linear elastic region.`
      },
      commonTrap: t`Assuming empirical correlations (e.g. $\\text{TS} \\approx 3.45 \\times \\text{HB}$) mean hardness is directly measured in a tensile test. It is measured via indentation!`,
      reference: 'MIAE 221 Midterm 2024 Question 20; Callister Chapter 6'
    },
    source: src('Midterm 2024', 'Mechanical Properties', 'Question 20')
  })
];
