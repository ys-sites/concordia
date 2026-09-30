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
  })
];
