import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

const src = (deck: string, chapter: string, location: string): QuestionSource[] => [{ deck, chapter, location }];
const q = (p: Omit<PracticeQuestion, 'courseId'>): PracticeQuestion => ({ courseId: 'MIAE221', ...p });

export const MIAE221_ENHANCEMENTS: PracticeQuestion[] = [
  // ==================================================================
  // Chapter 2: Bonding & Potential Wells (Concordia Past Midterms)
  // ==================================================================
  q({
    id: 'Q_MIAE221_PM01',
    chapter: 'bonding',
    pastPaper: 'Midterm Exam · Concordia University',
    topic: 'Covalent Bonding Mechanism',
    difficulty: 'Foundation',
    question: t`Which of the following statements best describes covalent bonding in engineering materials?`,
    options: [
      t`One atom shares its outer valence electron(s) with neighboring atom(s) to achieve a stable filled outer electron configuration.`,
      t`One atom donates its outer electron(s) to a different atom, producing oppositely charged ions held together by Coulombic forces.`,
      t`All atoms collectively pool their valence electrons into a delocalized electron cloud surrounding positive ion cores.`,
      t`A permanent molecular dipole with a hydrogen atom electrostatically attracts electronegative atoms of neighboring molecules.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Covalent bonding occurs when atoms with similar and relatively high electronegativities share pairs of valence electrons in overlapping quantum orbitals (e.g. s and p hybrids) so that both atoms achieve stable inert-gas electronic configurations (such as in CH4, diamond, and silicon).`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate Covalent Sharing', note: t`Electrons are shared between adjacent atoms to fill valence shells with no net charge transfer.` },
        { title: 'Distinguish from Other Bonding Types', note: t`Option 1 describes Ionic bonding (electron transfer + Coulomb attraction). Option 2 describes Metallic bonding (electron sea). Option 3 describes Hydrogen bonding (secondary dipole interaction).` }
      ],
      answer: t`Sharing outer valence electrons with neighboring atoms`,
      whyWrong: {
        '1': t`This describes ionic bonding, where large electronegativity differences drive electron transfer.`,
        '2': t`This describes metallic bonding, characterized by delocalized valence electron gas.`,
        '3': t`This describes hydrogen bonding, a strong type of secondary dipole-dipole attraction.`
      },
      commonTrap: t`Confusing covalent orbital sharing with metallic delocalization. In covalent bonds, shared electron pairs are localized strictly between bonded atomic pairs.`,
      reference: 'Chapter 2 Notes · Slide 47 (Past Midterm Question)'
    },
    source: src('Chapter 2', 'Atomic Structure & Bonding', 'Past Midterm Q1')
  }),

  q({
    id: 'Q_MIAE221_PM02',
    chapter: 'bonding',
    pastPaper: 'Midterm Exam · Concordia University',
    topic: 'Interatomic Potential Well Equilibrium',
    difficulty: 'Midterm Level',
    question: t`Ideally speaking, bonds tend to form between two particles such that they are separated by an equilibrium distance $r_0$ where the net force exerted on them is ________ and their overall potential energy is ________.`,
    options: [
      t`zero, minimized`,
      t`a negative minimum, minimized`,
      t`zero, maximized`,
      t`a positive maximum, minimized`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`At the equilibrium interatomic separation $r_0$, the attractive force $F_A(r)$ and repulsive force $F_R(r)$ exactly balance, so $F_{\text{net}} = F_A + F_R = 0$. Since force is the negative derivative of potential energy ($F = -dE/dr$), a zero net force corresponds to an extremum in potential energy, specifically the global minimum where the bonding energy well is deepest ($E_0 = -E_{\text{bond}}$).`,
      stepByStep: [],
      steps: [
        { title: 'Force Equilibrium', math: t`F_{\text{net}}(r_0) = \left[\frac{dE}{dr}\right]_{r=r_0} = 0` },
        { title: 'Potential Energy Minimum', math: t`E(r_0) = E_0 = -E_{\text{bond}} \quad (\text{minimized})` }
      ],
      answer: t`zero, minimized`,
      whyWrong: {
        '1': t`Net force is zero at equilibrium, not a negative quantity. A negative force would cause acceleration.`,
        '2': t`Maximizing potential energy would represent an unstable equilibrium. Physical systems spontaneously seek minimum energy.`,
        '3': t`A positive net force would push atoms apart rather than maintain stable equilibrium.`
      },
      commonTrap: t`Confusing the bonding energy depth $E_0$ (which has a large negative value) with a 'maximized' quantity. The energy state is minimized (deepest point in the well).`,
      reference: 'Chapter 2 Notes · Slide 48 (Past Midterm Question)'
    },
    source: src('Chapter 2', 'Atomic Structure & Bonding', 'Past Midterm Q2')
  }),

  q({
    id: 'Q_MIAE221_CH2_03',
    chapter: 'bonding',
    topic: 'Potential Well Shape & Thermal Expansion',
    difficulty: 'Midterm Level',
    question: t`How are the elastic modulus $E$ and the linear coefficient of thermal expansion $\alpha$ related to the shape and depth of the interatomic potential energy well $E(r)$?`,
    options: [
      t`A deeper, more symmetric potential well yields a higher elastic modulus $E$ and a lower thermal expansion coefficient $\alpha$.`,
      t`A deeper potential well yields a lower elastic modulus $E$ and a higher thermal expansion coefficient $\alpha$.`,
      t`A shallower potential well yields a higher elastic modulus $E$ and a lower thermal expansion coefficient $\alpha$.`,
      t`Thermal expansion and elastic modulus are independent of potential well curvature and depend only on atomic radius.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The elastic modulus $E$ is proportional to the slope of the interatomic force curve at $r_0$, which equals the second derivative (curvature) of the potential well: $E \propto \left(\dfrac{d^2E}{dr^2}\right)_{r_0}$. Deeper potential wells have steeper curvature, producing high stiffness and high melting point $T_m$. The thermal expansion coefficient $\alpha$ arises from the asymmetry (anharmonicity) of the well; deeper, stiffer wells are more parabolic/symmetric, producing very low thermal expansion.`,
      stepByStep: [],
      steps: [
        { title: 'Elastic Modulus', math: t`E \propto \left(\frac{dF}{dr}\right)_{r_0} = \left(\frac{d^2E}{dr^2}\right)_{r_0}` },
        { title: 'Thermal Expansion Origin', note: t`Thermal expansion is caused by well asymmetry. Stiff, deep wells (like diamond and tungsten) have low $\alpha$ and high $E$.` }
      ],
      answer: t`Deeper, steeper well $\implies$ higher $E$, lower $\alpha$`,
      whyWrong: {
        '1': t`Deep wells resist deformation strongly (high $E$) and expand very little with heating (low $\alpha$).`,
        '2': t`Shallow wells have low curvature (low $E$) and high asymmetry (high $\alpha$).`,
        '3': t`Both $E$ and $\alpha$ are directly governed by the interatomic potential curve.`
      },
      commonTrap: t`Thinking thermal expansion is symmetric vibration. Because the repulsive wall is steeper than the attractive tail, heating shifts the average interatomic distance outward.`,
      reference: 'Chapter 2 Notes · Slide 45; Callister Chapter 2'
    },
    source: src('Chapter 2', 'Atomic Structure & Bonding', 'Slide 45')
  }),

  // ==================================================================
  // Chapter 4: Imperfections in Solids
  // ==================================================================
  q({
    id: 'Q_MIAE221_CH4_01',
    chapter: 'defects',
    topic: 'Equilibrium Vacancy Concentration Calculation',
    difficulty: 'Exam Master',
    question: t`Estimate the equilibrium number of vacancies in $1.0\text{ m}^3$ of copper at $1000^\circ\text{C}$ ($1273\text{ K}$). For copper: density $\rho = 8.40\text{ g/cm}^3$, atomic mass $A_{\text{Cu}} = 63.5\text{ g/mol}$, and vacancy activation energy $Q_v = 0.90\text{ eV/atom}$. (Use $k = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$, $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$)`,
    options: [
      t`$2.2 \times 10^{25}\text{ vacancies/m}^3$`,
      t`$8.0 \times 10^{28}\text{ vacancies/m}^3$`,
      t`$1.4 \times 10^{21}\text{ vacancies/m}^3$`,
      t`$5.7 \times 10^{26}\text{ vacancies/m}^3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The equilibrium number of vacancies is given by the Arrhenius relation $N_v = N \exp\left(-\dfrac{Q_v}{kT}\right)$, where $N = \dfrac{\rho N_A}{A} \times 10^6$ is the total number of atomic lattice sites per cubic meter.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate total atomic sites $N$ in $1\text{ m}^3$', math: t`N = \frac{\rho}{A} N_A = \frac{8.40\text{ g/cm}^3}{63.5\text{ g/mol}} \times (10^6\text{ cm}^3/\text{m}^3) \times 6.022\times 10^{23} = 7.97 \times 10^{28}\text{ atoms/m}^3` },
        { title: 'Calculate the thermal exponent $Q_v / (kT)$', math: t`\frac{Q_v}{kT} = \frac{0.90\text{ eV}}{(8.62 \times 10^{-5}\text{ eV/K})(1273\text{ K})} = \frac{0.90}{0.10973} = 8.2018` },
        { title: 'Evaluate vacancy fraction $N_v / N$', math: t`\frac{N_v}{N} = \exp(-8.2018) = 2.74 \times 10^{-4}` },
        { title: 'Compute $N_v$', math: t`N_v = (2.74 \times 10^{-4}) \times (7.97 \times 10^{28}) \approx 2.18 \times 10^{25} \approx 2.2 \times 10^{25}\text{ vacancies/m}^3` }
      ],
      answer: t`2.2 \times 10^{25}\text{ vacancies/m}^3`,
      whyWrong: {
        '1': t`$8.0 \times 10^{28}$ is the total number of copper atoms $N$, not the number of vacancies.`,
        '2': t`$1.4 \times 10^{21}$ uses temperature in Celsius ($1000$) instead of Kelvin ($1273\text{ K}$).`,
        '3': t`$5.7 \times 10^{26}$ uses $Q_v = 0.5\text{ eV}$ or forgets the negative sign in the exponential.`
      },
      commonTrap: t`Forgetting to convert temperature from Celsius to Kelvin ($1000 + 273 = 1273\text{ K}$), or forgetting to convert $\text{cm}^3$ to $\text{m}^3$ ($1\text{ m}^3 = 10^6\text{ cm}^3$).`,
      reference: 'Chapter 4 Notes · Slide 10; Callister CH 4.2'
    },
    source: src('Chapter 4', 'Imperfections in Solids', 'Slide 10')
  }),

  q({
    id: 'Q_MIAE221_CH4_02',
    chapter: 'defects',
    topic: 'Arrhenius Slope for Vacancy Formation Energy',
    difficulty: 'Midterm Level',
    question: t`In an experiment measuring the vacancy concentration in a metal as a function of temperature, a plot of $\ln(N_v/N)$ against $1/T$ (in $\text{K}^{-1}$) yields a straight line with a slope of $-10,440\text{ K}$. What is the activation energy for vacancy formation $Q_v$? (Given $k = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$)`,
    options: [
      t`$0.90\text{ eV/atom}$`,
      t`$1.80\text{ eV/atom}$`,
      t`$0.45\text{ eV/atom}$`,
      t`$1.21\text{ eV/atom}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Taking the natural logarithm of the vacancy equation yields $\ln(N_v/N) = -\dfrac{Q_v}{k}\left(\dfrac{1}{T}\right)$. Comparing this to $y = mx + b$ shows the slope is $m = -\dfrac{Q_v}{k}$. Therefore, $Q_v = -k \times m$.`,
      stepByStep: [],
      steps: [
        { title: 'Relate Slope to $Q_v$', math: t`\text{Slope} = -\frac{Q_v}{k} = -10,440\text{ K}` },
        { title: 'Solve for $Q_v$', math: t`Q_v = 10,440\text{ K} \times 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K} = 0.8999\text{ eV/atom} \approx 0.90\text{ eV/atom}` }
      ],
      answer: t`0.90\text{ eV/atom}`,
      whyWrong: {
        '1': t`$1.80\text{ eV}$ erroneously divides by 0.5 or uses the gas constant $R$ with incorrect units.`,
        '2': t`$0.45\text{ eV}$ is half the true value.`,
        '3': t`$1.21\text{ eV}$ occurs when using $1000/T$ without scaling back by $10^3$.`
      },
      commonTrap: t`Forgetting that the slope is negative ($-Q_v/k$), so $Q_v$ must be positive.`,
      reference: 'Chapter 4 Notes · Slide 10; Callister CH 4.2'
    },
    source: src('Chapter 4', 'Imperfections in Solids', 'Arrhenius Analysis')
  }),

  q({
    id: 'Q_MIAE221_CH4_03',
    chapter: 'defects',
    topic: 'Hume-Rothery Rules for Solid Solubility',
    difficulty: 'Foundation',
    question: t`Which of the following is NOT one of the classic Hume-Rothery rules governing complete (unlimited) substitutional solid solubility between two metallic elements?`,
    options: [
      t`The theoretical densities of the solute and solvent metals must differ by less than $5\%$.`,
      t`The difference in atomic radii between solute and solvent atoms must be less than approximately $\pm 15\%$.`,
      t`Both elements must possess the identical crystal lattice structure (e.g. both FCC).`,
      t`Solute and solvent must have similar electronegativities (to prevent chemical compound formation).`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The four Hume-Rothery conditions for complete solid solubility are: 1. Atomic size factor ($\Delta r < 15\%$), 2. Crystal structure rule (must be identical), 3. Electronegativity rule (small difference to avoid intermediate phase/compound formation), 4. Valency rule (a metal dissolves another metal of higher valency more readily than one of lower valency). Density is NOT an independent Hume-Rothery criterion.`,
      stepByStep: [],
      steps: [
        { title: 'Rule 1: Atomic Size', note: t`$\Delta r / r_1 < 15\%$ minimizes lattice strain energy.` },
        { title: 'Rule 2: Crystal Structure', note: t`Must be identical (e.g. Cu and Ni are both FCC).` },
        { title: 'Rule 3: Electronegativity', note: t`Similar electronegativities prevent intermetallic compound formation.` },
        { title: 'Rule 4: Valency', note: t`Higher valency solute dissolves more readily.` }
      ],
      answer: t`Density difference rule is NOT a Hume-Rothery rule`,
      whyWrong: {
        '1': t`$\Delta r < 15\%$ is the foundational size factor rule.`,
        '2': t`Identical crystal structure is mandatory for unlimited isomorphous solubility across all compositions.`,
        '3': t`Electronegativity proximity is required so ionic/covalent intermediate compounds do not precipitate.`
      },
      commonTrap: t`Assuming density governs solid solubility. Density depends on atomic weight and packing, but atomic radius and crystal structure are what dictate lattice fitting.`,
      reference: 'Chapter 4 Notes · Slide 16; Callister CH 4.3'
    },
    source: src('Chapter 4', 'Imperfections in Solids', 'Slide 16')
  }),

  q({
    id: 'Q_MIAE221_CH4_04',
    chapter: 'defects',
    topic: 'ASTM Grain Size Intercept Method',
    difficulty: 'Midterm Level',
    question: t`In an ASTM grain size analysis of a metal alloy, seven randomly oriented straight test lines, each $60\text{ mm}$ long, are superimposed on a photomicrograph taken at a magnification of $100\times$. Across the 7 lines, an average of $9.1$ grain boundaries are intercepted per line. What is the average grain diameter $\bar{d}$?`,
    options: [
      t`$6.59 \times 10^{-2}\text{ mm}$ ($65.9\ \mu\text{m}$)`,
      t`$6.59\text{ mm}$`,
      t`$6.59 \times 10^{-4}\text{ mm}$`,
      t`$1.52 \times 10^{-2}\text{ mm}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By the linear intercept method, the average grain diameter is calculated by dividing the true line length on the specimen by the average number of grains intercepted: $\bar{d} = \dfrac{l / n_g}{M}$, where $l$ is the measured line length on the photo, $n_g$ is the mean number of grain intersections, and $M$ is the magnification.`,
      stepByStep: [],
      steps: [
        { title: 'Compute apparent grain segment length on photo', math: t`\bar{l}_{\text{photo}} = \frac{l}{n_g} = \frac{60\text{ mm}}{9.1} = 6.5934\text{ mm}` },
        { title: 'Scale by magnification $M = 100\times$', math: t`\bar{d} = \frac{\bar{l}_{\text{photo}}}{M} = \frac{6.5934\text{ mm}}{100} = 6.5934 \times 10^{-2}\text{ mm} = 65.9\ \mu\text{m}` }
      ],
      answer: t`6.59 \times 10^{-2}\text{ mm} = 65.9\ \mu\text{m}`,
      whyWrong: {
        '1': t`$6.59\text{ mm}$ forgets to divide by the magnification $M = 100\times$.`,
        '2': t`$6.59 \times 10^{-4}\text{ mm}$ divides by $M^2 = 10,000$ instead of $M$.`,
        '3': t`$1.52 \times 10^{-2}\text{ mm}$ takes the reciprocal ($9.1 / 60$).`
      },
      commonTrap: t`Forgetting to divide by the magnification $M$, which results in reporting the apparent millimeter size on the printed micrograph instead of the true microstructural grain dimension.`,
      reference: 'Chapter 4 Notes · Slide 29; Callister CH 4.10'
    },
    source: src('Chapter 4', 'Imperfections in Solids', 'Slide 29')
  }),

  // ==================================================================
  // Chapter 6: Mechanical Properties of Metals
  // ==================================================================
  q({
    id: 'Q_MIAE221_CH6_01',
    chapter: 'mechanical',
    topic: 'Elastic Modulus Calculation from Tensile Data',
    difficulty: 'Foundation',
    question: t`During a tensile test on a brass specimen, the engineering stress increases linearly from $0$ to $150\text{ MPa}$ while the engineering strain increases from $0$ to $0.0016$. What is the modulus of elasticity $E$ of this brass?`,
    options: [
      t`$93.8\text{ GPa}$`,
      t`$240\text{ GPa}$`,
      t`$150\text{ GPa}$`,
      t`$9.38\text{ MPa}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Within the linear elastic regime, Hooke's law applies: $\sigma = E \epsilon$. The modulus of elasticity is the slope of the initial linear portion of the stress-strain curve: $E = \dfrac{\Delta \sigma}{\Delta \epsilon}$.`,
      stepByStep: [],
      steps: [
        { title: 'Apply Hooke\'s Law', math: t`E = \frac{\sigma_2 - \sigma_1}{\epsilon_2 - \epsilon_1} = \frac{150\text{ MPa} - 0}{0.0016 - 0}` },
        { title: 'Compute numerical value', math: t`E = \frac{150 \times 10^6\text{ Pa}}{0.0016} = 9.375 \times 10^{10}\text{ Pa} = 93.75\text{ GPa} \approx 93.8\text{ GPa}` }
      ],
      answer: t`93.8\text{ GPa}`,
      whyWrong: {
        '1': t`$240\text{ GPa}$ is the modulus of elasticity of steel, not brass.`,
        '2': t`$150\text{ GPa}$ assumes strain was $0.0010$.`,
        '3': t`$9.38\text{ MPa}$ makes a unit prefix error of $10^3$.`
      },
      commonTrap: t`Confusing megapascals ($\text{MPa} = 10^6\text{ Pa}$) with gigapascals ($\text{GPa} = 10^9\text{ Pa}$). Dividing $150\text{ MPa}$ by $0.0016$ yields $93,750\text{ MPa} = 93.8\text{ GPa}$.`,
      reference: 'Chapter 6 Notes · Slide 38; Callister CH 6.3'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 38a')
  }),

  q({
    id: 'Q_MIAE221_CH6_02',
    chapter: 'mechanical',
    topic: '0.002 Strain Offset Yield Strength Convention',
    difficulty: 'Foundation',
    question: t`Why is the $0.002$ ($0.2\%$) strain offset method universally utilized to determine the yield strength $\sigma_y$ of ductile metals?`,
    options: [
      t`Because most metallic alloys transition gradually from elastic to plastic deformation without a distinct yield point, requiring a standardized convention for the onset of plastic flow.`,
      t`At exactly $0.002$ strain, every dislocation in the crystal lattice simultaneously ceases all motion, so the measured stress is by definition the highest stress the metal can ever support`,
      t`$0.002$ is the universal strain at which necking and ultimate tensile failure begin in every metal, so the offset line simply marks the point where the specimen starts to break`,
      t`Hooke's law ceases to be valid for every material beyond a strain of exactly $0.0002$, so the $0.002$ offset is placed ten times further out to keep the measurement in the elastic region`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For materials without a sharp yield drop (such as aluminum, copper, and brass), plastic deformation begins imperceptibly and continuously. To eliminate ambiguity, engineering standards construct a line parallel to the elastic slope ($E$) offset along the strain axis by $\epsilon = 0.002$ ($0.2\%$). The stress at the intersection of this offset line with the stress-strain curve is defined as the $0.2\%$ yield strength $\sigma_y$.`,
      stepByStep: [],
      steps: [
        { title: 'Standard Engineering Convention', note: t`Offset line equation: $\sigma = E(\epsilon - 0.002)$.` },
        { title: 'Physical Meaning', note: t`Represents the stress level producing a permanent plastic strain of $0.2\%$.` }
      ],
      answer: t`Standardized convention for gradual elastic-to-plastic transition`,
      whyWrong: {
        '1': t`Dislocations do not cease motion; they begin multiplying and gliding extensively.`,
        '2': t`Necking occurs at the UTS, which is typically at strains of $0.15$ to $0.40$, far higher than $0.002$.`,
        '3': t`Hooke's law validity ends at the proportional limit, which varies for every material.`
      },
      commonTrap: t`Thinking the $0.002$ offset is an inherent fundamental law of physics. It is an internationally agreed engineering convention (ASTM standard) to ensure reproducibility.`,
      reference: 'Chapter 6 Notes · Slide 38; Callister CH 6.6'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 38b')
  }),

  q({
    id: 'Q_MIAE221_CH6_03',
    chapter: 'mechanical',
    topic: 'Maximum Tensile Load Sustained Calculation',
    difficulty: 'Midterm Level',
    question: t`A cylindrical tensile specimen of brass has an original diameter $d_0 = 12.8\text{ mm}$ and an ultimate tensile strength $\sigma_{\text{UTS}} = 450\text{ MPa}$. What is the maximum tensile load $F_{\max}$ the specimen can support prior to necking?`,
    options: [
      t`$57.9\text{ kN}$`,
      t`$45.0\text{ kN}$`,
      t`$115.8\text{ kN}$`,
      t`$23.2\text{ kN}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The maximum load a tensile specimen can carry is determined by its ultimate tensile strength multiplied by its original cross-sectional area: $F_{\max} = \sigma_{\text{UTS}} \cdot A_0 = \sigma_{\text{UTS}} \cdot \left(\dfrac{\pi d_0^2}{4}\right)$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate original cross-sectional area $A_0$', math: t`A_0 = \frac{\pi d_0^2}{4} = \frac{\pi (12.8 \times 10^{-3}\text{ m})^2}{4} = 1.2868 \times 10^{-4}\text{ m}^2` },
        { title: 'Compute maximum load $F_{\max}$', math: t`F_{\max} = \sigma_{\text{UTS}} \times A_0 = (450 \times 10^6\text{ N/m}^2) \times (1.2868 \times 10^{-4}\text{ m}^2) = 57,906\text{ N} \approx 57.9\text{ kN}` }
      ],
      answer: t`57.9\text{ kN} \approx 58\text{ kN}`,
      whyWrong: {
        '1': t`$45.0\text{ kN}$ simply multiplies $\sigma_{\text{UTS}}$ by $10^{-4}$.`,
        '2': t`$115.8\text{ kN}$ uses the diameter instead of the radius in the area formula ($\pi d^2$ instead of $\pi d^2 / 4$).`,
        '3': t`$23.2\text{ kN}$ uses the yield strength ($250\text{ MPa}$) instead of the tensile strength ($450\text{ MPa}$).`
      },
      commonTrap: t`Using yield strength instead of ultimate tensile strength. The maximum load sustained corresponds to the peak of the engineering stress curve ($\sigma_{\text{UTS}}$).`,
      reference: 'Chapter 6 Notes · Slide 38; Callister CH 6.6'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 38c')
  }),

  q({
    id: 'Q_MIAE221_CH6_04',
    chapter: 'mechanical',
    topic: 'Tensile Elongation under Stress',
    difficulty: 'Midterm Level',
    question: t`A brass specimen originally $250\text{ mm}$ long is subjected to a tensile stress of $345\text{ MPa}$. From its stress-strain curve, this stress level produces an engineering strain $\epsilon = 0.060$. What is the total change in length $\Delta l$ of the specimen?`,
    options: [
      t`$15.0\text{ mm}$`,
      t`$0.060\text{ mm}$`,
      t`$2.5\text{ mm}$`,
      t`$25.0\text{ mm}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Engineering strain is defined as the change in length divided by the original length: $\epsilon = \dfrac{\Delta l}{l_0}$. Rearranging gives $\Delta l = \epsilon \cdot l_0$.`,
      stepByStep: [],
      steps: [
        { title: 'Apply strain definition', math: t`\Delta l = \epsilon \times l_0` },
        { title: 'Compute elongation', math: t`\Delta l = 0.060 \times 250\text{ mm} = 15.0\text{ mm}` }
      ],
      answer: t`15.0\text{ mm}`,
      whyWrong: {
        '1': t`$0.060\text{ mm}$ is the unitless strain $\epsilon$, not the elongation.`,
        '2': t`$2.5\text{ mm}$ assumes a strain of $0.010$.`,
        '3': t`$25.0\text{ mm}$ assumes a strain of $0.10$.`
      },
      commonTrap: t`Attempting to use Hooke's law $\Delta l = \sigma l_0 / E$ at $345\text{ MPa}$. Since $345\text{ MPa} > \sigma_y$ ($250\text{ MPa}$), deformation is plastic, so one must read the total strain $\epsilon$ directly from the curve!`,
      reference: 'Chapter 6 Notes · Slide 38; Callister CH 6.6'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 38d')
  }),

  q({
    id: 'Q_MIAE221_CH6_05',
    chapter: 'mechanical',
    topic: 'Ductility: Percent Elongation & Area Reduction',
    difficulty: 'Midterm Level',
    question: t`A cylindrical metal specimen with initial diameter $d_0 = 12.80\text{ mm}$ and gauge length $l_0 = 50.80\text{ mm}$ is pulled in tension until fracture. The fractured gauge length is $l_f = 72.14\text{ mm}$ and the minimum diameter at the fracture neck is $d_f = 6.60\text{ mm}$. Calculate the ductility in terms of percent elongation ($\%\text{EL}$) and percent reduction in area ($\%\text{RA}$).`,
    options: [
      t`$\%\text{EL} = 42.0\%, \quad \%\text{RA} = 73.4\%$`,
      t`$\%\text{EL} = 29.6\%, \quad \%\text{RA} = 48.4\%$`,
      t`$\%\text{EL} = 42.0\%, \quad \%\text{RA} = 48.4\%$`,
      t`$\%\text{EL} = 72.1\%, \quad \%\text{RA} = 51.6\%$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Ductility measures the degree of plastic deformation sustained before fracture: $\%\text{EL} = \left(\dfrac{l_f - l_0}{l_0}\right) \times 100\%$ and $\%\text{RA} = \left(\dfrac{A_0 - A_f}{A_0}\right) \times 100\% = \left(1 - \dfrac{d_f^2}{d_0^2}\right) \times 100\%$.`,
      stepByStep: [],
      steps: [
        { title: 'Compute Percent Elongation $\%\text{EL}$', math: t`\%\text{EL} = \frac{72.14\text{ mm} - 50.80\text{ mm}}{50.80\text{ mm}} \times 100\% = \frac{21.34}{50.80} \times 100\% = 42.01\%` },
        { title: 'Compute Percent Reduction in Area $\%\text{RA}$', math: t`\%\text{RA} = \left(1 - \frac{d_f^2}{d_0^2}\right) \times 100\% = \left(1 - \frac{6.60^2}{12.80^2}\right) \times 100\% = \left(1 - \frac{43.56}{163.84}\right) \times 100\% = 73.41\%` }
      ],
      answer: t`\%\text{EL} = 42.0\%,\ \%\text{RA} = 73.4\%`,
      whyWrong: {
        '1': t`$29.6\%$ divides by $l_f$ instead of the original gauge length $l_0$.`,
        '2': t`$48.4\%$ calculates diameter reduction $(12.8 - 6.6)/12.8 = 48.4\%$ instead of cross-sectional area reduction.`,
        '3': t`$72.1\%$ takes $l_f$ as the percentage directly.`
      },
      commonTrap: t`Calculating the linear percentage reduction in diameter instead of squaring diameters to compute area reduction. Remember that area scales as $d^2$.`,
      reference: 'Chapter 6 Notes · Slide 45; Callister CH 6.6'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 45')
  }),

  q({
    id: 'Q_MIAE221_CH6_06',
    chapter: 'mechanical',
    topic: 'Modulus of Resilience Formulation',
    difficulty: 'Midterm Level',
    question: t`A structural steel has a yield strength $\sigma_y = 300\text{ MPa}$ and Young's modulus $E = 200\text{ GPa}$. What is its modulus of resilience $U_r$, which represents the capacity of the material to absorb elastic energy per unit volume without permanent deformation?`,
    options: [
      t`$225\text{ kJ/m}^3$`,
      t`$450\text{ kJ/m}^3$`,
      t`$150\text{ kJ/m}^3$`,
      t`$900\text{ kJ/m}^3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The modulus of resilience $U_r$ is the area under the engineering stress-strain curve up to yielding: $U_r = \int_0^{\epsilon_y} \sigma \, d\epsilon = \dfrac{1}{2} \sigma_y \epsilon_y = \dfrac{\sigma_y^2}{2E}$.`,
      stepByStep: [],
      steps: [
        { title: 'Formula for Triangular Elastic Energy Area', math: t`U_r = \frac{\sigma_y^2}{2E}` },
        { title: 'Substitute Values', math: t`U_r = \frac{(300 \times 10^6\text{ Pa})^2}{2 \times (200 \times 10^9\text{ Pa})} = \frac{9.0 \times 10^{16}}{4.0 \times 10^{11}} = 2.25 \times 10^5\text{ J/m}^3 = 225\text{ kJ/m}^3` }
      ],
      answer: t`225\text{ kJ/m}^3`,
      whyWrong: {
        '1': t`$450\text{ kJ/m}^3$ forgets the factor of $1/2$ in the triangular area ($U_r = \sigma_y^2 / E$).`,
        '2': t`$150\text{ kJ/m}^3$ calculates $\sigma_y / E$ without squaring $\sigma_y$.`,
        '3': t`$900\text{ kJ/m}^3$ forgets both the 2 in the denominator and has power-of-ten errors.`
      },
      commonTrap: t`Forgetting that the elastic region is a right triangle, so the area is $\frac{1}{2} \times \text{base} \times \text{height} = \frac{\sigma_y^2}{2E}$.`,
      reference: 'Chapter 6 Notes · Slide 46; Callister CH 6.6'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Resilience')
  }),

  q({
    id: 'Q_MIAE221_CH6_07',
    chapter: 'mechanical',
    topic: 'True Stress vs Engineering Stress Divergence',
    difficulty: 'Midterm Level',
    question: t`In a standard tensile test, why does the engineering stress curve reach a maximum (the UTS) and subsequently drop, while the true stress continues to increase monotonically until fracture?`,
    options: [
      t`Because engineering stress is calculated using the constant original area $A_0$, while true stress uses the instantaneous area $A_i$, which shrinks rapidly in the localized neck after UTS.`,
      t`The specimen begins to work-soften right after the UTS because massive dislocation annihilation wipes out the strain hardening, so the metal genuinely needs less and less stress to keep deforming until it fractures`,
      t`Elastic deformation begins again after the UTS, so the atomic bonds stretch reversibly instead of breaking; this elastic recovery lowers the load the machine must apply, which shows up as the drop in the engineering curve`,
      t`True stress corrects for the temperature rise from adiabatic heating during the test while engineering stress ignores it; the hotter the neck gets, the softer it becomes, which explains the drop in the engineering curve`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Engineering stress is $\sigma = F / A_0$. Prior to UTS, strain is uniform. At UTS, localized necking starts, causing the load-bearing cross-sectional area to contract much faster than the load decreases. Because $A_0$ is held fixed in the formula, engineering stress falsely appears to decrease. In contrast, true stress $\sigma_T = F / A_i$ accounts for the real instantaneous area $A_i$; because the material continues to strain harden within the neck, true stress rises continuously until fracture.`,
      stepByStep: [],
      steps: [
        { title: 'Engineering Stress Definition', math: t`\sigma = \frac{F}{A_0} \quad (A_0 \text{ fixed})` },
        { title: 'True Stress Definition', math: t`\sigma_T = \frac{F}{A_i} \quad (A_i \text{ contracts locally})` },
        { title: 'Before Necking Relation', math: t`\sigma_T = \sigma(1 + \epsilon), \quad \epsilon_T = \ln(1 + \epsilon)` }
      ],
      answer: t`Engineering stress uses fixed $A_0$, ignoring local neck contraction`,
      whyWrong: {
        '1': t`The metal does not work-soften; it continues to work-harden vigorously within the necked region.`,
        '2': t`Elastic deformation does not resume after UTS; deformation remains overwhelmingly plastic.`,
        '3': t`Adiabatic heating is not the fundamental mechanical cause of the $\sigma - \sigma_T$ divergence.`
      },
      commonTrap: t`Believing that the material actually becomes weaker when the engineering curve turns downwards after UTS. The material is actually at its strongest inside the neck!`,
      reference: 'Chapter 6 Notes · Slide 41; Callister CH 6.7'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 41')
  }),

  q({
    id: 'Q_MIAE221_CH6_08',
    chapter: 'mechanical',
    topic: 'Brinell Hardness Formulation & Principle',
    difficulty: 'Foundation',
    question: t`In a Brinell hardness test, a spherical indenter of diameter $D$ is pressed into a metal surface under load $P$ (in kg), leaving a spherical impression of diameter $d$. How is the Brinell Hardness Number ($HB$) determined?`,
    options: [
      t`$HB = \dfrac{2P}{\pi D \left(D - \sqrt{D^2 - d^2}\right)}$`,
      t`$HB = \dfrac{P}{\pi D d}$`,
      t`$HB = \dfrac{P}{\frac{\pi}{4} d^2}$`,
      t`$HB = \dfrac{2P}{\pi d \left(D + \sqrt{D^2 - d^2}\right)}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The Brinell hardness number $HB$ is defined as the applied load $P$ divided by the actual surface area of the spherical cap indentation: $A_{\text{cap}} = \pi D h = \dfrac{\pi D}{2}\left(D - \sqrt{D^2 - d^2}\right)$. Dividing $P$ by $A_{\text{cap}}$ gives $HB = \dfrac{2P}{\pi D \left(D - \sqrt{D^2 - d^2}\right)}$.`,
      stepByStep: [],
      steps: [
        { title: 'Surface Area of Spherical Cap', math: t`A_{\text{cap}} = \frac{\pi D}{2} \left(D - \sqrt{D^2 - d^2}\right)` },
        { title: 'Brinell Formula', math: t`HB = \frac{P}{A_{\text{cap}}} = \frac{2P}{\pi D \left(D - \sqrt{D^2 - d^2}\right)}` }
      ],
      answer: t`HB = \frac{2P}{\pi D (D - \sqrt{D^2 - d^2})}`,
      whyWrong: {
        '1': t`$\frac{P}{\pi D d}$ is an oversimplified linear approximation that ignores spherical geometry.`,
        '2': t`$\frac{P}{\frac{\pi}{4} d^2}$ uses projected flat circle area rather than curved surface indentation area.`,
        '3': t`Reverses signs and places indenter diameter terms in the denominator incorrectly.`
      },
      commonTrap: t`Using the projected circle area ($\frac{\pi}{4}d^2$) instead of the curved spherical cap area. Brinell hardness measures load per unit curved surface contact area.`,
      reference: 'Chapter 6 Notes · Slide 50; Callister CH 6.10'
    },
    source: src('Chapter 6', 'Mechanical Properties', 'Slide 50')
  }),

  // ==================================================================
  // Chapter 7: Dislocations & Strengthening Mechanisms
  // ==================================================================
  q({
    id: 'Q_MIAE221_CH7_01',
    chapter: 'strengthening',
    topic: 'Slip Systems in FCC vs BCC vs HCP',
    difficulty: 'Midterm Level',
    question: t`Why do FCC metals (such as copper and aluminum) demonstrate exceptional ductility even at very low temperatures, whereas HCP metals (such as zinc and magnesium) are comparatively brittle?`,
    options: [
      t`FCC possesses 12 close-packed slip systems ($\{111\}\langle 110 \rangle$) with four distinct slip planes, whereas HCP has only 3 primary basal slip systems ($\{0001\}\langle 11\bar{2}0 \rangle$), severely restricting plastic deformation across random grain orientations.`,
      t`HCP metals such as zinc and magnesium contain virtually no dislocations because their dense packing locks all defects out of the lattice, so they can only deform elastically until the applied stress suddenly cleaves the crystal apart`,
      t`FCC metals have a much lower atomic packing factor (about $0.52$) than HCP metals (about $0.74$), so the extra empty space between FCC atoms gives them more room to shift positions, which is what allows such large plastic deformation before fracture`,
      t`BCC metals possess 48 independent slip systems on $\{110\}$, $\{112\}$ and $\{123\}$ planes, which makes them the most ductile metals at sub-zero cryogenic temperatures, since a higher slip-system count always guarantees easier dislocation motion regardless of thermal activation barriers`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Von Mises criterion requires at least 5 independent slip systems for arbitrary, uniform plastic deformation of a polycrystal. FCC has 12 slip systems: 4 unique $\{111\}$ close-packed planes $\times$ 3 close-packed $\langle 110 \rangle$ directions per plane. HCP has only 1 basal plane $\{0001\}$ with 3 close-packed $\langle 11\bar{2}0 \rangle$ directions ($1 \times 3 = 3$ systems). With fewer than 5 slip systems available at room temperature, HCP crystals cannot accommodate stress across grain boundaries without cracking.`,
      stepByStep: [],
      steps: [
        { title: 'FCC Slip Systems', math: t`\{111\}\langle 110 \rangle \implies 4 \text{ planes} \times 3 \text{ directions} = 12 \text{ systems}` },
        { title: 'HCP Slip Systems', math: t`\{0001\}\langle 11\bar{2}0 \rangle \implies 1 \text{ plane} \times 3 \text{ directions} = 3 \text{ systems}` },
        { title: 'Polycrystal Ductility Requirement', note: t`Taylor / Von Mises criterion requires $\ge 5$ independent slip systems.` }
      ],
      answer: t`FCC has 12 slip systems on 4 planes; HCP has only 3 systems on 1 basal plane`,
      whyWrong: {
        '1': t`HCP metals contain abundant dislocations; brittleness is caused by limited slip directions, not absence of dislocations.`,
        '2': t`Both FCC and HCP have the exact same close-packed APF of $0.74$.`,
        '3': t`Although BCC has 48 slip systems, BCC undergoes a ductile-to-brittle transition (DBTT) at cold temperatures due to high thermal activation barriers (Peierls stress) for dislocation motion.`
      },
      commonTrap: t`Assuming BCC is always more ductile because it has 48 slip systems. BCC slip planes (\{110\}, \{112\}, \{123\}) are not close-packed, which gives BCC high yield strength and a severe ductile-to-brittle transition temperature (DBTT).`,
      reference: 'Chapter 7 Notes · Slide 13; Callister CH 7.4'
    },
    source: src('Chapter 7', 'Dislocations & Strengthening', 'Slide 13')
  }),

  q({
    id: 'Q_MIAE221_CH7_02',
    chapter: 'strengthening',
    topic: 'Schmid\'s Law & Resolved Shear Stress',
    difficulty: 'Midterm Level',
    question: t`A tensile stress $\sigma$ is applied uniaxially along the axis of a single crystal. Plastic deformation initiates on a slip plane oriented at angle $\phi$ to the tensile axis, along a slip direction oriented at angle $\lambda$ to the tensile axis. What is the resolved shear stress $\tau_R$, and at what angles is the Schmid factor maximized?`,
    options: [
      t`$\tau_R = \sigma \cos \phi \cos \lambda$; maximized at $\phi = \lambda = 45^\circ$ ($m_{\max} = 0.50$).`,
      t`$\tau_R = \sigma \sin \phi \sin \lambda$; maximized at $\phi = \lambda = 90^\circ$.`,
      t`$\tau_R = \sigma \cos(\phi + \lambda)$; maximized at $\phi + \lambda = 0^\circ$.`,
      t`$\tau_R = \dfrac{\sigma}{\cos \phi \cos \lambda}$; maximized at $\phi = 0^\circ$.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By Schmid's law, the component of tensile force projected along the slip direction is $F_s = F \cos \lambda$, and the area of the inclined slip plane is $A_s = A_0 / \cos \phi$. Thus, the resolved shear stress is $\tau_R = \dfrac{F_s}{A_s} = \dfrac{F}{A_0} \cos \phi \cos \lambda = \sigma m$, where $m = \cos \phi \cos \lambda$ is the Schmid factor. The maximum possible value of $m$ occurs when $\phi = \lambda = 45^\circ$, giving $m = \cos(45^\circ)\cos(45^\circ) = 0.50$.`,
      stepByStep: [],
      steps: [
        { title: 'Project Load along Slip Direction', math: t`F_s = F \cos \lambda` },
        { title: 'Calculate Inclined Slip Plane Area', math: t`A_s = \frac{A_0}{\cos \phi}` },
        { title: 'Schmid\'s Law Formulation', math: t`\tau_R = \frac{F_s}{A_s} = \sigma \cos \phi \cos \lambda` },
        { title: 'Maximum Schmid Factor', math: t`m_{\max} = \cos 45^\circ \cos 45^\circ = \frac{1}{\sqrt2} \times \frac{1}{\sqrt2} = 0.50` }
      ],
      answer: t`\tau_R = \sigma \cos \phi \cos \lambda; \quad \phi = \lambda = 45^\circ \implies m_{\max} = 0.50`,
      whyWrong: {
        '1': t`Uses sine functions instead of cosine projections.`,
        '2': t`Sums angles inside a single cosine argument.`,
        '3': t`Inverts the cosine terms into the denominator.`
      },
      commonTrap: t`Believing $\tau_R$ can equal $\sigma$. Because $\phi + \lambda \ge 90^\circ$, the maximum resolved shear stress in uniaxial tension is always $\tau_R = 0.5\,\sigma$.`,
      reference: 'Chapter 7 Notes · Slide 14; Callister CH 7.5'
    },
    source: src('Chapter 7', 'Dislocations & Strengthening', 'Schmid\'s Law')
  }),

  q({
    id: 'Q_MIAE221_CH7_03',
    chapter: 'strengthening',
    topic: 'Hall-Petch Grain Boundary Strengthening',
    difficulty: 'Midterm Level',
    question: t`According to the Hall-Petch equation $\sigma_y = \sigma_0 + k_y d^{-1/2}$, if grain refining treatment reduces the average grain diameter $d$ of a brass alloy from $100\ \mu\text{m}$ down to $25\ \mu\text{m}$, by what factor does the grain-boundary contribution to yield strength ($k_y d^{-1/2}$) increase?`,
    options: [
      t`It increases by a factor of $2.0$ (doubles).`,
      t`It increases by a factor of $4.0$.`,
      t`It increases by a factor of $1.414$ ($\sqrt{2}$).`,
      t`It decreases by a factor of $2.0$.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Grain boundaries act as formidable barriers to dislocation motion because adjacent grains have different crystallographic orientations and disordered boundary structures. The strengthening increment is inversely proportional to the square root of grain diameter: $\Delta \sigma \propto d^{-1/2}$.`,
      stepByStep: [],
      steps: [
        { title: 'Hall-Petch Equation', math: t`\sigma_y = \sigma_0 + k_y d^{-1/2}` },
        { title: 'Compute Ratio of Grain Boundary Terms', math: t`\frac{\Delta \sigma_2}{\Delta \sigma_1} = \frac{d_2^{-1/2}}{d_1^{-1/2}} = \left(\frac{d_1}{d_2}\right)^{1/2} = \left(\frac{100\ \mu\text{m}}{25\ \mu\text{m}}\right)^{1/2} = \sqrt{4} = 2.0` }
      ],
      answer: t`Increases by a factor of 2.0 (doubles)`,
      whyWrong: {
        '1': t`$4.0$ assumes linear scaling with $1/d$ instead of the inverse square root $d^{-1/2}$.`,
        '2': t`$1.414$ takes the fourth root instead of square root.`,
        '3': t`Smaller grains strengthen the metal, so the yield contribution must increase, not decrease.`
      },
      commonTrap: t`Forgetting the square root power $-1/2$. A 4-fold reduction in grain diameter yields a $\sqrt{4} = 2$-fold increase in the boundary strengthening term.`,
      reference: 'Chapter 7 Notes · Slide 14; Callister CH 7.8'
    },
    source: src('Chapter 7', 'Dislocations & Strengthening', 'Hall-Petch')
  }),

  q({
    id: 'Q_MIAE221_CH7_04',
    chapter: 'strengthening',
    topic: 'Solid Solution Strengthening Mechanism',
    difficulty: 'Foundation',
    question: t`Why does alloying pure copper with zinc (to make brass) produce a significant increase in tensile strength and hardness?`,
    options: [
      t`Solute zinc atoms introduce localized lattice misfit strain fields (compression/tension) that interact with and pin dislocation strain fields, requiring higher shear stress for dislocations to move.`,
      t`Zinc atoms diffuse into copper and completely fill every vacancy, eliminating all defects from the lattice; with the crystal now perfect, dislocations need far higher shear stress to nucleate and move, raising strength and hardness`,
      t`Zinc atoms migrate to the exterior surface and form an impermeable covalent crust that seals the copper grains inside, and this hard outer shell is what resists indentation and raises the measured tensile strength`,
      t`Each zinc atom chemically reacts with nearby dislocations and transforms them into tiny brittle ceramic particles, so the alloy hardens because it now contains a dispersion of hard ceramic precipitates throughout the copper matrix`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Substitutional or interstitial solute atoms that differ in size from the solvent atoms distort the surrounding host crystal lattice. A smaller solute atom generates tensile lattice strain, while a larger solute atom creates compressive strain. These elastic stress fields attract and interact with the compressive and tensile fields of edge and screw dislocations, effectively pinning them in low-energy potential valleys. An increased external shear stress is required to pull the dislocation away from the solute cluster.`,
      stepByStep: [],
      steps: [
        { title: 'Size Misfit Distorts Lattice', note: t`Solute atoms produce elastic strain fields in the solvent matrix.` },
        { title: 'Dislocation Interaction', note: t`Dislocation stress fields cancel partially with solute strain fields, pinning the dislocation.` },
        { title: 'Macroscopic Result', note: t`Higher yield strength $\sigma_y$ and hardness, with a slight decrease in ductility.` }
      ],
      answer: t`Lattice misfit strain fields interact with and pin dislocations`,
      whyWrong: {
        '1': t`Solid solutions do not eliminate vacancies; thermodynamically, vacancies always persist at $T > 0\text{ K}$.`,
        '2': t`Alloying is an internal bulk solid solution, not a surface coating.`,
        '3': t`Zinc forms a metallic solid solution with copper, not ceramic particles.`
      },
      commonTrap: t`Thinking solid solution strengthening happens by chemical reactions. It is a purely mechanical interaction between elastic stress fields in the crystal lattice.`,
      reference: 'Chapter 7 Notes · Slide 14; Callister CH 7.9'
    },
    source: src('Chapter 7', 'Dislocations & Strengthening', 'Solid Solution')
  }),

  q({
    id: 'Q_MIAE221_CH7_05',
    chapter: 'strengthening',
    topic: 'Strain Hardening / Cold Work Mechanism',
    difficulty: 'Foundation',
    question: t`What is the underlying physical mechanism that causes a metal to become stronger and harder during cold working (plastic deformation below recrystallization temperature)?`,
    options: [
      t`Dislocation density multiplies dramatically (from $\sim 10^5-10^6\text{ cm}^{-2}$ up to $\sim 10^9-10^{10}\text{ cm}^{-2}$), causing dislocations to entangle and mutually obstruct each other's movement.`,
      t`Cold working shatters the crystal grains into individual amorphous molecules that pack more tightly together, and this complete loss of long-range order is what makes the metal harder and stronger`,
      t`Cold working sweeps vacancies together into microscopic voids that act as cushions, absorbing the applied stress before it reaches the lattice so the metal becomes harder and stronger`,
      t`During cold work the metal atoms permanently lose their valence electrons, converting the weak metallic bonds into much stronger directional covalent bonds that resist deformation`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`During cold work, Frank-Read sources and dislocation interactions generate vast numbers of new dislocations. As dislocation density $\rho_d$ surges from $10^5\text{ cm}^{-2}$ to $10^{10}\text{ cm}^{-2}$, the average spacing between dislocations shrinks. Dislocation stress fields mutually repel and intersect, forming sessile jogs and complex tangles that act as impenetrable obstacles to further slip. Consequently, higher stress is required to sustain plastic deformation.`,
      stepByStep: [],
      steps: [
        { title: 'Cold Work Definition', math: t`\%\text{CW} = \left(\frac{A_0 - A_d}{A_0}\right) \times 100\%` },
        { title: 'Dislocation Multiplication', math: t`\rho_d: 10^6\text{ cm}^{-2} \longrightarrow 10^{10}\text{ cm}^{-2}` },
        { title: 'Dislocation Pinning & Hardening', math: t`\tau_y \propto G b \sqrt{\rho_d}` }
      ],
      answer: t`Dislocation density multiplies and dislocations mutually pin one another`,
      whyWrong: {
        '1': t`Cold working deforms grains plastically; it does not amorphize the crystalline lattice.`,
        '2': t`Microscopic voids cause fracture/failure, not strengthening.`,
        '3': t`Metallic bonding character is preserved throughout cold work.`
      },
      commonTrap: t`Believing cold work eliminates dislocations. Cold work actually creates billions of new dislocations, but packs them so tightly together that they cannot move.`,
      reference: 'Chapter 7 Notes · Slide 15; Callister CH 7.10'
    },
    source: src('Chapter 7', 'Dislocations & Strengthening', 'Cold Work')
  }),

  q({
    id: 'Q_MIAE221_CH7_06',
    chapter: 'strengthening',
    topic: 'Annealing Stages: Recovery vs Recrystallization',
    difficulty: 'Midterm Level',
    question: t`During the heat treatment (annealing) of a heavily cold-worked metal, which stage is characterized by the nucleation and growth of a new set of strain-free, equiaxed grains that rapidly consumes the cold-worked structure, restoring ductility?`,
    options: [
      t`Recrystallization`,
      t`Recovery`,
      t`Grain Growth`,
      t`Ostwald Ripening`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Annealing proceeds in three successive stages: 1. Recovery (enhanced atomic diffusion allows dislocation annihilation and polygonization into low-angle boundaries; electrical conductivity is restored with minor strength drop), 2. Recrystallization (nucleation and growth of new, strain-free equiaxed grains driven by stored cold-work strain energy; tensile strength drops sharply and ductility is fully restored; occurs around $T_R \approx 0.3-0.4\,T_m$), 3. Grain Growth (coarsening of grains to reduce total grain boundary interfacial area).`,
      stepByStep: [],
      steps: [
        { title: 'Stage 1: Recovery', note: t`Dislocations rearrange; residual stresses relieve; microstructure unchanged.` },
        { title: 'Stage 2: Recrystallization', note: t`New strain-free grains nucleate and replace cold-worked grains; ductility restored.` },
        { title: 'Stage 3: Grain Growth', note: t`Larger grains grow at expense of smaller grains to minimize interfacial energy.` }
      ],
      answer: t`Recrystallization`,
      whyWrong: {
        '1': t`Recovery only relieves internal residual stress through local dislocation rearrangement without forming new grains.`,
        '2': t`Grain growth occurs after recrystallization is complete, where already strain-free grains coarsen.`,
        '3': t`Ostwald ripening describes precipitate coarsening, not grain recrystallization.`
      },
      commonTrap: t`Confusing Recovery with Recrystallization. Recovery does NOT form new grains. New strain-free grains appear exclusively during Recrystallization.`,
      reference: 'Chapter 7 Notes · Slide 15; Callister CH 7.11–7.13'
    },
    source: src('Chapter 7', 'Dislocations & Strengthening', 'Annealing')
  }),

  // ==================================================================
  // Chapter 9: Phase Diagrams & Iron-Carbon Systems
  // ==================================================================
  q({
    id: 'Q_MIAE221_CH9_01',
    chapter: 'phase',
    topic: 'Condensed Gibbs Phase Rule',
    difficulty: 'Foundation',
    question: t`For a binary alloy system ($C = 2$) held at constant atmospheric pressure ($N = 1$), the condensed Gibbs Phase Rule is $P + F = C + 1 = 3$. If two phases ($\alpha$ and $L$) coexist in thermodynamic equilibrium ($P = 2$), how many external degrees of freedom $F$ remain?`,
    options: [
      t`$F = 1$ (univariant)`,
      t`$F = 0$ (invariant)`,
      t`$F = 2$ (bivariant)`,
      t`$F = 3$ (trivariant)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By the condensed Gibbs phase rule $P + F = C + 1$, where pressure is fixed at 1 atm. Substituting $C = 2$ and $P = 2$ gives $2 + F = 2 + 1 = 3 \implies F = 1$. This means the system has exactly one degree of freedom: specifying temperature automatically fixes the compositions of both the liquid and $\alpha$ phases at the tie-line endpoints.`,
      stepByStep: [],
      steps: [
        { title: 'Condensed Phase Rule Formula', math: t`P + F = C + 1` },
        { title: 'Substitute Parameters', math: t`2 + F = 2 + 1 = 3 \implies F = 1` },
        { title: 'Physical Interpretation', note: t`One variable (e.g. Temperature) can be varied independently without changing the number of equilibrium phases.` }
      ],
      answer: t`F = 1 (univariant)`,
      whyWrong: {
        '1': t`$F = 0$ occurs at an invariant three-phase reaction point (e.g. eutectic where $P = 3$).`,
        '2': t`$F = 2$ occurs in a single-phase region ($P = 1$) where both temperature and composition can vary independently.`,
        '3': t`$F = 3$ is impossible in a condensed binary system.`
      },
      commonTrap: t`Using the standard Gibbs phase rule $P + F = C + 2$ which allows pressure to vary. In condensed metallurgical systems at 1 atm, the condensed rule $P + F = C + 1$ must be used.`,
      reference: 'Chapter 9 Notes · Slide 15; Callister CH 9.4'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slide 15')
  }),

  q({
    id: 'Q_MIAE221_CH9_02',
    chapter: 'phase',
    topic: 'Pb-Sn Eutectic Lever Rule at 150°C',
    difficulty: 'Midterm Level',
    question: t`A $40\text{ wt}\%\text{ Sn} - 60\text{ wt}\%\text{ Pb}$ alloy ($C_0 = 40$) is cooled to $150^\circ\text{C}$ in the two-phase $\alpha + \beta$ region. The tie line at $150^\circ\text{C}$ intersects the solid solubility limits at $C_\alpha = 11\text{ wt}\%\text{ Sn}$ and $C_\beta = 99\text{ wt}\%\text{ Sn}$. What are the relative mass fractions of the $\alpha$ and $\beta$ phases?`,
    options: [
      t`$W_\alpha = 67.0\text{ wt}\%, \quad W_\beta = 33.0\text{ wt}\\%$`,
      t`$W_\alpha = 33.0\text{ wt}\%, \quad W_\beta = 67.0\text{ wt}\\%$`,
      t`$W_\alpha = 50.0\text{ wt}\%, \quad W_\beta = 50.0\text{ wt}\\%$`,
      t`$W_\alpha = 60.0\text{ wt}\%, \quad W_\beta = 40.0\text{ wt}\\%$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By the inverse lever rule, the mass fraction of a phase is proportional to the length of the opposite tie-line segment divided by total tie-line length: $W_\alpha = \dfrac{C_\beta - C_0}{C_\beta - C_\alpha}$ and $W_\beta = \dfrac{C_0 - C_\alpha}{C_\beta - C_\alpha}$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify tie-line bounds and overall composition', math: t`C_\alpha = 11, \quad C_0 = 40, \quad C_\beta = 99` },
        { title: 'Total tie-line length', math: t`L = C_\beta - C_\alpha = 99 - 11 = 88` },
        { title: 'Calculate $W_\alpha$ (opposite arm)', math: t`W_\alpha = \frac{C_\beta - C_0}{C_\beta - C_\alpha} = \frac{99 - 40}{88} = \frac{59}{88} = 0.6705 \approx 67.0\text{ wt}\%` },
        { title: 'Calculate $W_\beta$', math: t`W_\beta = \frac{C_0 - C_\alpha}{C_\beta - C_\alpha} = \frac{40 - 11}{88} = \frac{29}{88} = 0.3295 \approx 33.0\text{ wt}\%` }
      ],
      answer: t`W_\alpha = 67.0\text{ wt}\%,\ W_\beta = 33.0\text{ wt}\%`,
      whyWrong: {
        '1': t`Inverts the lever arm calculation, assigning the right arm to $\alpha$. Remember the lever rule is inverse!`,
        '2': t`$50/50$ assumes $C_0$ is centered on the tie line.`,
        '3': t`$60/40$ simply reports the alloy composition ($60\text{ wt}\%\text{ Pb}, 40\text{ wt}\%\text{ Sn}$) instead of phase fractions.`
      },
      commonTrap: t`Using the adjacent tie-line segment rather than the opposite arm. To find the fraction of the phase on the left ($\alpha$), you must measure the segment on the right ($C_\beta - C_0$).`,
      reference: 'Chapter 9 Notes · Slide 30; Callister CH 9.7'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slide 30')
  }),

  q({
    id: 'Q_MIAE221_CH9_03',
    chapter: 'phase',
    topic: 'Pb-Sn Eutectic Lever Rule at 220°C (Solid + Liquid)',
    difficulty: 'Midterm Level',
    question: t`A $40\text{ wt}\%\text{ Sn} - 60\text{ wt}\%\text{ Pb}$ alloy is heated to $220^\circ\text{C}$ in the $\alpha + L$ two-phase region. A horizontal tie line drawn at $220^\circ\text{C}$ intersects the solidus at $C_\alpha = 17\text{ wt}\%\text{ Sn}$ and the liquidus at $C_L = 46\text{ wt}\%\text{ Sn}$. What is the mass fraction of liquid phase $W_L$?`,
    options: [
      t`$79.3\text{ wt}\\%$`,
      t`$20.7\text{ wt}\\%$`,
      t`$46.0\text{ wt}\\%$`,
      t`$50.0\text{ wt}\\%$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By the inverse lever rule, the mass fraction of the liquid phase is the ratio of the left tie-line segment ($C_0 - C_\alpha$) to the total tie-line length ($C_L - C_\alpha$): $W_L = \dfrac{C_0 - C_\alpha}{C_L - C_\alpha}$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify tie-line endpoints', math: t`C_\alpha = 17\text{ wt}\%\text{ Sn}, \quad C_0 = 40\text{ wt}\%\text{ Sn}, \quad C_L = 46\text{ wt}\%\text{ Sn}` },
        { title: 'Calculate liquid fraction $W_L$', math: t`W_L = \frac{C_0 - C_\alpha}{C_L - C_\alpha} = \frac{40 - 17}{46 - 17} = \frac{23}{29} = 0.7931 \approx 79.3\text{ wt}\%` },
        { title: 'Calculate solid $\alpha$ fraction $W_\alpha$', math: t`W_\alpha = \frac{C_L - C_0}{C_L - C_\alpha} = \frac{46 - 40}{29} = \frac{6}{29} = 0.2069 \approx 20.7\text{ wt}\%` }
      ],
      answer: t`W_L = 79.3\text{ wt}\%`,
      whyWrong: {
        '1': t`$20.7\text{ wt}\\%$ is the solid fraction $W_\alpha$, not the liquid fraction $W_L$.`,
        '2': t`$46.0\text{ wt}\\%$ is the chemical composition of the liquid phase $C_L$, not the mass amount of the liquid phase.`,
        '3': t`$50.0\text{ wt}\\%$ is an arbitrary midpoint estimate.`
      },
      commonTrap: t`Confusing phase composition ($C_L = 46\text{ wt}\%\text{ Sn}$) with phase amount ($W_L = 79.3\text{ wt}\\%$). $C_L$ tells what the liquid is made of; $W_L$ tells how much liquid is in the crucible!`,
      reference: 'Chapter 9 Notes · Slide 31; Callister CH 9.7'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slide 31')
  }),

  q({
    id: 'Q_MIAE221_CH9_04',
    chapter: 'phase',
    topic: 'Primary (Proeutectic) vs Eutectic Microconstituent Fractions',
    difficulty: 'Exam Master',
    question: t`For a hypoeutectic Pb-Sn alloy ($C_0 = 40\text{ wt}\%\text{ Sn}$) cooled slowly to just below the eutectic temperature ($183^\circ\text{C}$), the maximum solid solubility of Sn in $\alpha$ is $C_\alpha = 18.3\text{ wt}\%\text{ Sn}$ and the eutectic composition is $C_E = 61.9\text{ wt}\%\text{ Sn}$. What is the mass fraction of the primary (proeutectic) $\alpha'$ microconstituent?`,
    options: [
      t`$50.2\text{ wt}\\%$`,
      t`$49.8\text{ wt}\\%$`,
      t`$67.0\text{ wt}\\%$`,
      t`$21.9\text{ wt}\\%$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Primary $\alpha'$ forms prior to reaching the eutectic temperature. Just above $183^\circ\text{C}$, the phases in equilibrium are primary $\alpha'$ and liquid of eutectic composition $L(C_E)$. When cooled just below $183^\circ\text{C}$, the liquid transforms into eutectic microconstituent $(\alpha + \beta)$. By applying the lever rule just above $183^\circ\text{C}$: $W_{\alpha'} = \dfrac{C_E - C_0}{C_E - C_\alpha}$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify Eutectic Lever Arm Points', math: t`C_\alpha = 18.3, \quad C_0 = 40.0, \quad C_E = 61.9` },
        { title: 'Apply Lever Rule for Primary $\alpha\'$', math: t`W_{\alpha'} = \frac{C_E - C_0}{C_E - C_\alpha} = \frac{61.9 - 40.0}{61.9 - 18.3} = \frac{21.9}{43.6} = 0.5023 \approx 50.2\text{ wt}\%` },
        { title: 'Compute Eutectic Microconstituent Fraction', math: t`W_e = 1 - W_{\alpha'} = \frac{C_0 - C_\alpha}{C_E - C_\alpha} = \frac{40.0 - 18.3}{43.6} = \frac{21.7}{43.6} = 0.4977 \approx 49.8\text{ wt}\%` }
      ],
      answer: t`W_{\alpha'} = 50.2\text{ wt}\%`,
      whyWrong: {
        '1': t`$49.8\text{ wt}\\%$ is the fraction of the eutectic microconstituent $W_e$, not primary $\alpha'$.`,
        '2': t`$67.0\text{ wt}\\%$ is the TOTAL $\alpha$ phase fraction (which combines primary $\alpha'$ and eutectic $\alpha$).`,
        '3': t`$21.9\text{ wt}\\%$ is the numerator length ($61.9 - 40.0$), forgotten to divide by $43.6$.`
      },
      commonTrap: t`Failing to distinguish between total phase amount ($W_\alpha$) and microconstituent amount ($W_{\alpha'}$). Total $\alpha$ includes both primary $\alpha'$ dendrites and the fine $\alpha$ lamellae inside the eutectic structure!`,
      reference: 'Chapter 9 Notes · Slides 43–44; Callister CH 9.8'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slides 43–44')
  }),

  q({
    id: 'Q_MIAE221_CH9_05',
    chapter: 'phase',
    topic: 'Three Foundational Invariant Reactions',
    difficulty: 'Foundation',
    question: t`Which of the following correctly matches the invariant three-phase reaction with its phase transformation upon cooling?`,
    options: [
      t`Eutectic: $L \longrightarrow \alpha + \beta$; \quad Eutectoid: $\gamma \longrightarrow \alpha + \beta$; \quad Peritectic: $L + \alpha \longrightarrow \beta$`,
      t`Eutectic: $\gamma \longrightarrow \alpha + \beta$; \quad Eutectoid: $L \longrightarrow \alpha + \beta$; \quad Peritectic: $\alpha + \beta \longrightarrow L$`,
      t`Eutectic: $L_1 \longrightarrow L_2 + \alpha$; \quad Eutectoid: $\alpha \longrightarrow \beta + \gamma$; \quad Peritectic: $L \longrightarrow \alpha + \beta$`,
      t`Eutectic: $L + \alpha \longrightarrow \beta$; \quad Eutectoid: $L \longrightarrow \alpha + \beta$; \quad Peritectic: $\gamma \longrightarrow \alpha + \beta$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The classical invariant reactions are defined upon cooling: 1. Eutectic: a single liquid solidifies into two distinct solid phases ($L \to \alpha + \beta$). 2. Eutectoid: a single solid phase transforms into two distinct solid phases ($\gamma \to \alpha + \beta$). 3. Peritectic: a liquid and a solid react to form a new single solid phase ($L + \alpha \to \beta$).`,
      stepByStep: [],
      steps: [
        { title: 'Eutectic (Liquid $\to$ 2 Solids)', math: t`L \xrightarrow{\text{cool}} \alpha + \beta` },
        { title: 'Eutectoid (Solid $\to$ 2 Solids)', math: t`\gamma \xrightarrow{\text{cool}} \alpha + \beta` },
        { title: 'Peritectic (Liquid + Solid $\to$ New Solid)', math: t`L + \alpha \xrightarrow{\text{cool}} \beta` }
      ],
      answer: t`Eutectic: $L \to \alpha + \beta$; Eutectoid: $\gamma \to \alpha + \beta$; Peritectic: $L + \alpha \to \beta$`,
      whyWrong: {
        '1': t`Swaps the definitions of eutectic and eutectoid. The suffix '-oid' designates an all-solid transformation.`,
        '2': t`$L_1 \to L_2 + \alpha$ is a monotectic reaction.`,
        '3': t`Scrambles all three reactions.`
      },
      commonTrap: t`Confusing Eutectic with Eutectoid. Remember that 'eutectoid' has an 'o' for 'one solid' decomposing into two solids (like austenite decomposing into pearlite).`,
      reference: 'Chapter 9 Notes · Slide 50; Callister CH 9.11'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slide 50')
  }),

  q({
    id: 'Q_MIAE221_CH9_06',
    chapter: 'phase',
    topic: 'Iron-Carbon Allotropes: Ferrite vs Austenite Solubility',
    difficulty: 'Midterm Level',
    question: t`In the $\text{Fe-Fe}_3\text{C}$ system, why does FCC $\gamma$-austenite exhibit a maximum carbon solid solubility of $2.14\text{ wt}\%$, whereas BCC $\alpha$-ferrite can only dissolve a maximum of $0.022\text{ wt}\%\text{ C}$, even though BCC is less densely packed ($APF = 0.68$) than FCC ($APF = 0.74$)?`,
    options: [
      t`Because the octahedral interstitial sites in FCC are symmetrical and significantly larger ($r_{\text{site}} \approx 0.414\,R$) than the highly cramped, distorted octahedral sites in BCC ($r_{\text{site}} \approx 0.155\,R$).`,
      t`Because carbon atoms in ferrite slowly evaporate from the solid lattice as gaseous carbon monoxide at room temperature, leaving almost no carbon dissolved in the BCC iron`,
      t`Because ferrite possesses absolutely no interstitial positions whatsoever within its unit cell, so carbon atoms simply cannot fit at all anywhere inside the BCC iron lattice`,
      t`Because austenite contains ionic bonds whose electrostatic attraction pulls carbon ions into the lattice, greatly raising its carbon solubility compared with metallic ferrite`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Although BCC has more total unoccupied interstitial space ($32\%$ vs $26\%$), its interstitial volume is fragmented into numerous tiny, non-spherical tetrahedral and octahedral voids. The largest interstitial void in BCC has a radius of only $0.036\text{ nm}$ ($0.155\,R$), which severely pinches the carbon atom ($r_{\text{C}} \approx 0.071\text{ nm}$), producing intense tetragonal lattice distortion and limiting solubility to $0.022\text{ wt}\%$. In FCC, the octahedral sites at edge centers and body center are spherical with radius $0.053\text{ nm}$ ($0.414\,R$), accommodating carbon with substantially lower strain energy up to $2.14\text{ wt}\%$.`,
      stepByStep: [],
      steps: [
        { title: 'FCC Interstitial Geometry', math: t`r_{\text{oct, FCC}} = (\sqrt2 - 1) R = 0.414 R \approx 0.053\text{ nm}` },
        { title: 'BCC Interstitial Geometry', math: t`r_{\text{oct, BCC}} = 0.155 R \approx 0.019\text{ nm}` },
        { title: 'Lattice Strain Comparison', note: t`Carbon atom ($r_C = 0.071\text{ nm}$) causes severe lattice distortion in BCC ferrite, severely capping its solubility.` }
      ],
      answer: t`FCC octahedral interstitial sites are larger and more symmetric than in BCC`,
      whyWrong: {
        '1': t`Carbon does not evaporate from solid steel.`,
        '2': t`BCC has 6 octahedral sites and 12 tetrahedral sites per unit cell; they are simply smaller.`,
        '3': t`Both ferrite and austenite are metallic iron allotropes with interstitial carbon; no ionic bonding is present.`
      },
      commonTrap: t`Assuming lower packing factor automatically means larger interstitial holes. BCC has more total empty volume, but the individual hole sizes are much smaller than in FCC!`,
      reference: 'Chapter 9 Notes · Slides 60–62; Callister CH 9.18'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slides 60–62')
  }),

  q({
    id: 'Q_MIAE221_CH9_07',
    chapter: 'phase',
    topic: 'Pearlite Microstructure & Eutectoid Transformation',
    difficulty: 'Foundation',
    question: t`In plain carbon steel of eutectoid composition ($0.76\text{ wt}\%\text{ C}$), what microconstituent forms upon slow cooling below the eutectoid temperature ($727^\circ\text{C}$), and what is its physical morphology?`,
    options: [
      t`Pearlite, consisting of alternating lamellae (plates) of ductile $\alpha$-ferrite ($0.022\text{ wt}\%\text{ C}$) and hard, brittle cementite $\text{Fe}_3\text{C}$ ($6.70\text{ wt}\%\text{ C}$).`,
      t`Bainite, consisting of fine needle-like cementite particles embedded in an amorphous metallic matrix, nucleating directly from austenite during slow furnace cooling below $727^{\circ}\text{C}$`,
      t`Martensite, consisting of a diffusionless body-centered tetragonal (BCT) supersaturated solid solution that forms directly from austenite during slow furnace cooling below the eutectoid temperature`,
      t`Ledeburite, consisting of spherical graphite nodules surrounded by an austenite matrix, which precipitates when a $0.76\text{ wt}\%\text{ C}$ steel is slowly cooled below $727^{\circ}\text{C}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Upon slow furnace cooling through $727^\circ\text{C}$, the eutectoid reaction occurs: $\gamma(0.76\text{ wt}\%\text{ C}) \rightleftharpoons \alpha(0.022\text{ wt}\%\text{ C}) + \text{Fe}_3\text{C}(6.70\text{ wt}\%\text{ C})$. Because carbon must redistribute by solid-state diffusion over minimal distances, carbon atoms segregate into carbon-rich cementite layers ($6.70\text{ wt}\%\text{ C}$) while iron rejects carbon into adjacent carbon-poor ferrite layers ($0.022\text{ wt}\%\text{ C}$), creating a characteristic alternating lamellar structure termed pearlite (so named because of its mother-of-pearl iridescent luster under reflected light).`,
      stepByStep: [],
      steps: [
        { title: 'Eutectoid Reaction Formula', math: t`\gamma(0.76\%\text{ C}) \xrightarrow{727^\circ\text{C}} \alpha(0.022\%\text{ C}) + \text{Fe}_3\text{C}(6.70\%\text{ C})` },
        { title: 'Diffusion Mechanism', note: t`Carbon diffuses laterally across the transformation front to create alternating $\alpha$ and $\text{Fe}_3\text{C}$ lamellae.` }
      ],
      answer: t`Pearlite: alternating lamellae of $\alpha$-ferrite and $\text{Fe}_3\text{C}$ cementite`,
      whyWrong: {
        '1': t`Bainite forms at intermediate cooling rates (temperatures below pearlite but above martensite).`,
        '2': t`Martensite forms upon rapid quenching (athermal, diffusionless transformation).`,
        '3': t`Ledeburite is the eutectic microconstituent formed in cast irons at $1147^\circ\text{C}$ ($4.3\text{ wt}\%\text{ C}$).`
      },
      commonTrap: t`Calling pearlite a 'phase'. Pearlite is NOT a phase; it is a two-phase microconstituent composed of the $\alpha$-ferrite phase and the $\text{Fe}_3\text{C}$ phase.`,
      reference: 'Chapter 9 Notes · Slides 63–66; Callister CH 9.19'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slides 63–66')
  }),

  q({
    id: 'Q_MIAE221_CH9_08',
    chapter: 'phase',
    topic: 'Hypoeutectoid Steel Microconstituent Calculation',
    difficulty: 'Exam Master',
    question: t`A hypoeutectoid plain carbon steel containing $0.40\text{ wt}\%\text{ C}$ is slowly cooled from the austenite region to just below the eutectoid temperature ($727^\circ\text{C}$). Given that the eutectoid composition is $C_{\text{eutectoid}} = 0.76\text{ wt}\%\text{ C}$ and the ferrite composition is $C_\alpha = 0.022\text{ wt}\%\text{ C}$, what are the mass fractions of proeutectoid ferrite ($\alpha'$) and pearlite ($p$)?`,
    options: [
      t`$W_{\alpha'} = 48.8\%, \quad W_p = 51.2\%$`,
      t`$W_{\alpha'} = 51.2\%, \quad W_p = 48.8\%$`,
      t`$W_{\alpha'} = 94.3\%, \quad W_p = 5.7\%$`,
      t`$W_{\alpha'} = 40.0\%, \quad W_p = 60.0\%$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For a hypoeutectoid steel ($C_0 < 0.76\text{ wt}\%\text{ C}$), proeutectoid ferrite nucleates and grows along austenite grain boundaries between the $A_3$ line and $727^\circ\text{C}$. Just above $727^\circ\text{C}$, the remaining austenite has reached the eutectoid composition ($0.76\text{ wt}\%\text{ C}$) and transforms completely into pearlite. By the lever rule just above $727^\circ\text{C}$: $W_{\alpha'} = \dfrac{0.76 - C_0}{0.76 - 0.022}$ and $W_p = W_\gamma = \dfrac{C_0 - 0.022}{0.76 - 0.022}$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify Lever Rule Compositions', math: t`C_\alpha = 0.022, \quad C_0 = 0.400, \quad C_{\text{eutectoid}} = 0.760` },
        { title: 'Calculate Total Tie-Line Length', math: t`L = 0.760 - 0.022 = 0.738` },
        { title: 'Calculate Proeutectoid Ferrite Fraction $W_{\alpha\'}$', math: t`W_{\alpha'} = \frac{0.760 - 0.400}{0.738} = \frac{0.360}{0.738} = 0.4878 \approx 48.8\%` },
        { title: 'Calculate Pearlite Fraction $W_p$', math: t`W_p = \frac{0.400 - 0.022}{0.738} = \frac{0.378}{0.738} = 0.5122 \approx 51.2\%` }
      ],
      answer: t`W_{\alpha'} = 48.8\%,\ W_p = 51.2\%`,
      whyWrong: {
        '1': t`Inverts the lever arm calculation, swapping proeutectoid ferrite and pearlite.`,
        '2': t`$94.3\%$ is the TOTAL ferrite phase fraction $W_\alpha = (6.70 - 0.40)/(6.70 - 0.022) = 94.3\%$, which includes both proeutectoid ferrite and eutectoid ferrite inside pearlite!`,
        '3': t`$40/60$ is simply reporting the carbon wt% number directly without performing lever rule.`
      },
      commonTrap: t`Failing to distinguish between TOTAL ferrite $W_\alpha$ ($94.3\%$) and PROEUTECTOID ferrite $W_{\alpha'}$ ($48.8\%$). Pearlite itself is mostly ferrite ($88\%$) layered with cementite ($12\%$)!`,
      reference: 'Chapter 9 Notes · Slide 68; Callister CH 9.19'
    },
    source: src('Chapter 9', 'Phase Diagrams', 'Slide 68')
  })
];
