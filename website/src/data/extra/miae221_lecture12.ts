import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

// MIAE 221 — Lecture 12: Ductility, Resilience, Toughness, Hardness & Slip Systems
const DECK = 'lecture 12-mech prop 3-students26.pdf';
const CHAPTER = 'Lecture 12 · Ductility, Toughness, Hardness & Slip Mechanics';
const src = (location: string): QuestionSource[] => [{ deck: DECK, chapter: CHAPTER, location }];
const ref = (slide: string) => `${DECK} · ${slide}`;

const q = (p: Omit<PracticeQuestion, 'courseId' | 'chapter'>): PracticeQuestion => ({
  courseId: 'MIAE221',
  chapter: 'lecture_12',
  ...p
});

export const MIAE221_LECTURE_12: PracticeQuestion[] = [
  q({
    id: 'Q_MIAE221_L12_01',
    topic: 'Ductility Metrics: Percent Elongation and Area Reduction',
    difficulty: 'Foundation',
    question: t`A cylindrical tensile specimen with initial diameter $d_0 = 12.8\text{ mm}$ and initial gauge length $l_0 = 50.80\text{ mm}$ fractures at $l_f = 72.14\text{ mm}$ with a fracture neck diameter of $d_f = 6.60\text{ mm}$.
What are the percent elongation ($\%EL$) and percent reduction in area ($\%RA$)?`,
    options: [
      t`$\%EL = 42.0\%, \quad \%RA = 73.4\%$`,
      t`$\%EL = 42.0\%, \quad \%RA = 48.4\%$`,
      t`$\%EL = 29.6\%, \quad \%RA = 73.4\%$`,
      t`$\%EL = 70.4\%, \quad \%RA = 51.6\%$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Percent elongation measures axial plastic strain up to fracture, while percent reduction in area measures cross-sectional necking contraction.`,
      stepByStep: [
        t`Step 1: Compute percent elongation: $\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\% = \left(\frac{72.14 - 50.80}{50.80}\right) \times 100\% = \left(\frac{21.34}{50.80}\right) \times 100\% = 42.0\%$.`,
        t`Step 2: Compute percent reduction in area using the squared diameter ratio: $\%RA = \left[1 - \left(\frac{d_f}{d_0}\right)^2\right] \times 100\%$.`,
        t`Step 3: Evaluate ratio: $\left(\frac{6.60}{12.8}\right)^2 = (0.515625)^2 = 0.26587$.`,
        t`Step 4: $\%RA = (1 - 0.26587) \times 100\% = 73.41\% \approx 73.4\%$.`
      ],
      whyWrong: {
        '1': t`Calculated $\%RA$ using linear diameters without squaring: $\frac{12.8 - 6.60}{12.8} = 48.4\%$.`,
        '2': t`Divided $\Delta l$ by $l_f$ instead of the initial gauge length $l_0$.`,
        '3': t`Calculated remaining area fraction instead of reduction in area.`
      },
      commonTrap: t`Forgetting to square the diameter ratio when computing $\%RA$, mistaking diameter reduction for area reduction.`,
      reference: ref('Slide 11, Example 6.4')
    },
    source: src('Slide 11')
  }),

  q({
    id: 'Q_MIAE221_L12_02',
    topic: 'Resilience: Strain Energy at the Yield Point',
    difficulty: 'Midterm Level',
    question: t`A structural steel alloy has a yield strength of $\sigma_y = 600\text{ MPa}$ and Young's modulus $E = 200\text{ GPa}$.
Assuming linear elastic behavior up to yield, what is the Modulus of Resilience $U_r$?`,
    options: [
      t`$U_r = 900\text{ kJ/m}^3$ ($0.90\text{ MJ/m}^3$)`,
      t`$U_r = 1.80\text{ MJ/m}^3$`,
      t`$U_r = 900\text{ J/m}^3$`,
      t`$U_r = 0.45\text{ MJ/m}^3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Modulus of resilience is the elastic strain energy absorbed per unit volume up to yielding, represented by the triangular area under the elastic curve.`,
      stepByStep: [
        t`Step 1: State formula: $U_r = \frac{\sigma_y^2}{2E}$.`,
        t`Step 2: Convert to SI base units: $\sigma_y = 600 \times 10^6\text{ Pa}$, $E = 200 \times 10^9\text{ Pa}$.`,
        t`Step 3: Square $\sigma_y$: $(600 \times 10^6)^2 = 3.6 \times 10^{17}\text{ Pa}^2$.`,
        t`Step 4: Divide by $2E$: $2(200 \times 10^9) = 400 \times 10^9\text{ Pa}$.`,
        t`Step 5: $U_r = \frac{3.6 \times 10^{17}}{4.0 \times 10^{11}} = 9.0 \times 10^5\text{ J/m}^3 = 900\text{ kJ/m}^3 = 0.90\text{ MJ/m}^3$.`
      ],
      whyWrong: {
        '1': t`Forgot the factor of $1/2$ in the triangular area formula ($U_r = \sigma_y^2 / E$).`,
        '2': t`Unit error mixing $\text{MPa}$ with $\text{GPa}$ without powers of 10.`,
        '3': t`Divided by $4E$ instead of $2E$.`
      },
      commonTrap: t`Omitting the $1/2$ coefficient or mixing prefix exponents ($\text{MPa}$ vs $\text{GPa}$).`,
      reference: ref('Slide 6')
    },
    source: src('Slide 6')
  }),

  q({
    id: 'Q_MIAE221_L12_03',
    topic: 'Toughness: Tensile vs Notch Toughness',
    difficulty: 'Foundation',
    question: t`Which of the following statements correctly distinguishes Modulus of Resilience ($U_r$) from Tensile Toughness ($U_t$)?`,
    options: [
      t`Resilience is the energy absorbed elastically up to the yield point, whereas Toughness is the total energy absorbed up to fracture.`,
      t`Resilience is measured dynamically using Charpy impact testing, whereas Toughness is determined from quasistatic tensile elongation.`,
      t`Resilience applies solely to brittle ceramic materials, whereas Toughness describes the reversible mechanical behavior of ductile metals.`,
      t`Resilience possesses dimensional units of $\\text{J/m}^3$, whereas Tensile Toughness is defined as a purely dimensionless energy ratio.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Resilience quantifies reversible elastic energy storage, while toughness quantifies total energy absorption (elastic plus plastic) prior to catastrophic fracture.`,
      stepByStep: [
        t`Step 1: Resilience ($U_r$) represents the area under the linear elastic portion of the stress-strain curve from $\varepsilon = 0$ to $\varepsilon = \varepsilon_y$.`,
        t`Step 2: Toughness represents the entire integrated area under the stress-strain curve from $\varepsilon = 0$ to fracture strain $\varepsilon_f$.`,
        t`Step 3: Both quantities share the identical physical units of energy per unit volume: $\text{J/m}^3 = \text{Pa}$.`
      ],
      whyWrong: {
        '1': t`Charpy impact testing measures notch toughness (impact energy), not resilience.`,
        '2': t`Resilience is defined for all engineering materials with a measurable linear elastic region and yield point.`,
        '3': t`Toughness is not dimensionless; its units are $\text{J/m}^3$.`
      },
      commonTrap: t`Confusing the integration limit: resilience stops at yielding ($\varepsilon_y$), while toughness integrates all the way to fracture ($\varepsilon_f$).`,
      reference: ref('Slide 7')
    },
    source: src('Slide 7')
  }),

  q({
    id: 'Q_MIAE221_L12_04',
    topic: 'Dislocation Mechanics: Slip Systems and Lattice Ductility',
    difficulty: 'Exam Master',
    question: t`Why do Face-Centered Cubic (FCC) metals exhibit substantially higher ductility than Hexagonal Close-Packed (HCP) metals at room temperature?`,
    options: [
      t`FCC possesses 12 active intersecting slip systems ($\{111\}\\langle 1\\bar{1}0 \\rangle$), satisfying the von Mises criterion of 5 independent systems, whereas HCP has only 3 active basal slip systems at room temperature.`,
      t`FCC possesses a significantly lower atomic packing factor than HCP, creating extensive vacant interstitial corridors that permit atoms to slide without requiring cooperative dislocation motion.`,
      t`HCP metals are completely free of crystallographic line dislocations, thereby forcing plastic deformation to occur through simultaneous theoretical bond-breaking across entire atomic planes.`,
      t`FCC crystals deform almost exclusively by mechanical deformation twinning rather than dislocation glide, whereas HCP metals lack active deformation twinning systems under room temperature loading.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Polycrystalline plasticity requires at least 5 independent slip systems (von Mises criterion). FCC has 12, whereas HCP has only 3 active at room temperature.`,
      stepByStep: [
        t`Step 1: A slip system is the combination of a close-packed plane and a close-packed direction.`,
        t`Step 2: FCC has 4 distinct $\{111\}$ planes, each containing 3 independent $\langle 1\bar{1}0 \rangle$ directions: $4 \times 3 = 12$ slip systems.`,
        t`Step 3: HCP has only 1 basal plane $\{0001\}$ with 3 directions $\langle 11\bar{2}0 \rangle$: $1 \times 3 = 3$ slip systems active at room temperature.`,
        t`Step 4: Because 3 systems fail the von Mises 5-system requirement, dislocations in HCP cannot navigate random grain orientations, causing brittle grain boundary cracking unless heated.`
      ],
      whyWrong: {
        '1': t`Both FCC and HCP have the exact same maximum atomic packing factor: $\text{APF} = 0.74$.`,
        '2': t`HCP metals contain high densities of dislocations; their glide is simply geometrically constrained to basal planes at room temperature.`,
        '3': t`FCC deforms primarily by dislocation slip on $\{111\}\langle 1\bar{1}0 \rangle$, not mechanical twinning.`
      },
      commonTrap: t`Thinking HCP is less dense than FCC; they have identical packing density ($\text{APF} = 0.74$), but dramatically different numbers of intersecting slip planes.`,
      reference: ref('Slide 14-15')
    },
    source: src('Slide 14-15')
  })
];
