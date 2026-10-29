// 2017 Midterm Theory & Past Exam Master Explainer
// Categorized by Chapter (1 to 6)
// Provides: Question, Options, Correct Answer, Explanation, The Theory Behind It, and Quick Understanding Tip

export interface TheoryQuestionItem {
  id: string;
  paper: string;
  qNum: string;
  chapter: number;
  chapterTitle: string;
  subject: string;
  prompt: string;
  options: { key: string; text: string }[];
  correctKey: string;
  correctAnswerText: string;
  explanation: string;
  theoryBehindIt: string;
  quickTip: string;
}

export const MIDTERM_2017_THEORY_QUESTIONS: TheoryQuestionItem[] = [
  // =========================================================================
  // CHAPTER 1: ATOMIC STRUCTURE & BONDING
  // =========================================================================
  {
    id: 'm17-q1',
    paper: '2017 Sample Midterm',
    qNum: 'Q1',
    chapter: 1,
    chapterTitle: 'Atomic Structure & Bonding',
    subject: 'Interatomic Bonding Mechanisms',
    prompt: 'Which of the following substances exhibits the lowest melting temperature, and which bonding mechanism accounts for this behavior?',
    options: [
      { key: 'A', text: 'Argon (Ar), due to weak van der Waals London dispersion bonds' },
      { key: 'B', text: 'Sodium Chloride (NaCl), due to ionic bonding' },
      { key: 'C', text: 'Silicon (Si), due to strong directional covalent bonding' },
      { key: 'D', text: 'Tungsten (W), due to high-electron-density metallic bonding' },
      { key: 'E', text: 'Alumina (Al2O3), due to mixed ionic-covalent bonding' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Argon (Ar), due to weak van der Waals London dispersion bonds',
    explanation: 'Argon is an inert noble gas with a complete valence octet ($s^2 p^6$). Solid argon can only be bound together by fluctuating instantaneous induced dipole moments (London dispersion secondary bonds), which possess tiny bond energies ($\approx 0.1 - 10\\text{ kJ/mol}$). Consequently, argon melts at $-189.3^\\circ\\text{C}$ ($84\\text{ K}$). In contrast, ionic (NaCl), covalent (Si), and metallic (W) materials feature primary bonds with bond energies ranging from $100$ to $>800\\text{ kJ/mol}$, resulting in melting temperatures in the hundreds to thousands of degrees Celsius.',
    theoryBehindIt: 'Melting temperature $T_m$ directly mirrors the depth of the interatomic potential energy well $E_0$. Primary bonds (ionic, covalent, metallic) have deep energy wells requiring massive thermal kinetic vibrations ($k T$) to break. Secondary van der Waals bonds have extremely shallow potential wells, so minimal thermal energy ruptures the solid.',
    quickTip: '💡 Quick Mental Rule: Look for noble gases (Ar, He, Ne, Kr) or non-polar polymers. If it has van der Waals / London dispersion bonding, its melting point is rock-bottom near absolute zero!'
  },
  {
    id: 'm17-q3',
    paper: '2017 Sample Midterm',
    qNum: 'Q3',
    chapter: 1,
    chapterTitle: 'Atomic Structure & Bonding',
    subject: 'Potential Energy & Equilibrium Spacing',
    prompt: 'At the equilibrium interatomic separation distance $r_0$ between two bonded atoms, which of the following thermodynamic and mechanical conditions is satisfied?',
    options: [
      { key: 'A', text: 'The net interatomic force is zero ($F_N = 0$) and the net potential energy is at its minimum ($E_N = -E_0$)' },
      { key: 'B', text: 'The net interatomic force is at its maximum and the potential energy is zero' },
      { key: 'C', text: 'The repulsive force is greater than the attractive force to prevent atomic collapse' },
      { key: 'D', text: 'The potential energy is positive and the force derivative is zero' },
      { key: 'E', text: 'Both attractive and repulsive forces reach their absolute maximum values' }
    ],
    correctKey: 'A',
    correctAnswerText: 'The net interatomic force is zero ($F_N = 0$) and the net potential energy is at its minimum ($E_N = -E_0$)',
    explanation: 'Interatomic force is the spatial derivative of the potential energy curve: $F_N = -\\frac{dE_N}{dr}$. At equilibrium separation $r_0$, the attractive Coulomb pull exactly balances the electron-orbital Pauli repulsion: $F_A + F_R = 0$. Since the slope of energy with respect to distance is zero ($\\frac{dE_N}{dr} = 0$) and the second derivative is positive ($\\frac{d^2E_N}{dr^2} > 0$), the potential energy reaches its deepest negative minimum, $-E_0$, which defines the bond energy.',
    theoryBehindIt: 'Every physical system seeks to minimize Helmholtz/Gibbs free energy. An atom displaced closer than $r_0$ experiences net repulsion ($F_N > 0$ pushing them apart); an atom pulled farther than $r_0$ experiences net attraction ($F_N < 0$ pulling them back). Thus, $r_0$ acts like an equilibrium mechanical spring.',
    quickTip: '💡 Quick Visual Tip: Remember the potential well valley! Valley bottom = minimum energy $E_0$, slope = zero force ($F_N = 0$). Curvature at the bottom = Young’s modulus $E$!'
  },

  // =========================================================================
  // CHAPTER 2: CRYSTAL STRUCTURES & CRYSTALLOGRAPHY
  // =========================================================================
  {
    id: 'm17-q5',
    paper: '2017 Sample Midterm',
    qNum: 'Q5',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'Crystal Systems & Bravais Lattices',
    prompt: 'In three-dimensional crystallography, all possible periodic arrangements of points in space are classified into how many distinct crystal systems and how many Bravais space lattices?',
    options: [
      { key: 'A', text: '7 crystal systems and 14 Bravais lattices' },
      { key: 'B', text: '14 crystal systems and 7 Bravais lattices' },
      { key: 'C', text: '6 crystal systems and 12 Bravais lattices' },
      { key: 'D', text: '32 point groups and 230 space groups' },
      { key: 'E', text: '4 crystal systems and 8 Bravais lattices' }
    ],
    correctKey: 'A',
    correctAnswerText: '7 crystal systems and 14 Bravais lattices',
    explanation: 'There are exactly 7 crystal systems defined by the relationships between lattice edge lengths ($a, b, c$) and interaxial angles ($\\alpha, \\beta, \\gamma$): Cubic, Tetragonal, Orthorhombic, Hexagonal, Rhombohedral (Trigonal), Monoclinic, and Triclinic. When centering types (Primitive P, Body-centered I, Face-centered F, Base-centered C) are factored in, Auguste Bravais proved mathematically that only 14 unique 3D translational lattices can exist without violating rotational symmetry.',
    theoryBehindIt: 'Triclinic has the lowest symmetry ($a \\neq b \\neq c, \\alpha \\neq \\beta \\neq \\gamma \\neq 90^\\circ$); Cubic has the highest symmetry ($a = b = c, \\alpha = \\beta = \\gamma = 90^\\circ$). Even though combinations suggest $7 \\times 4 = 28$ lattices, 14 of those are identical to simpler unit cells via alternate coordinate axes.',
    quickTip: '💡 Mnemonic: "7 Systems, 14 Bravais". Think 7 days in a week, 14 days in a fortnight!'
  },
  {
    id: 'm17-q6',
    paper: '2017 Sample Midterm',
    qNum: 'Q6',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'Close-Packed Stacking Sequences',
    prompt: 'What are the stacking sequences of close-packed atomic planes for the Face-Centered Cubic (FCC) and Hexagonal Close-Packed (HCP) crystal structures, respectively?',
    options: [
      { key: 'A', text: 'FCC is ABCABC... and HCP is ABABAB...' },
      { key: 'B', text: 'FCC is ABABAB... and HCP is ABCABC...' },
      { key: 'C', text: 'FCC is AAAA... and HCP is ABABAB...' },
      { key: 'D', text: 'FCC is ABACABAC... and HCP is ABCABC...' },
      { key: 'E', text: 'Both FCC and HCP have the identical ABCABC... stacking sequence' }
    ],
    correctKey: 'A',
    correctAnswerText: 'FCC is ABCABC... and HCP is ABABAB...',
    explanation: 'Both FCC and HCP have the highest theoretical atomic packing factor ($APF = 0.74$) and coordination number $CN = 12$. They are both constructed by stacking close-packed hexagonal sheets of spheres. In HCP, the third layer is placed directly above the first layer ($A$), giving a two-layer repeating sequence $ABABAB...$. In FCC, the third layer is placed over the triangular interstitial valleys of the first layer ($C$), not aligning with layer $A$ until the fourth layer, creating a three-layer repeating sequence $ABCABC...$.',
    theoryBehindIt: 'The close-packed planes in FCC are the $\\{111\\}$ family; in HCP they are the basal $\\{0001\\}$ planes. This 3D stacking difference makes FCC much more ductile because $\\{111\\}$ planes intersect along 12 symmetric slip systems, whereas HCP basal planes are parallel to each other with only 3 coplanar slip systems at room temperature.',
    quickTip: '💡 Quick Tip: FCC has 3 letters $\\implies$ 3 repeating planes: $ABCABC...$. HCP has 2 syllables (Hex-Pack) $\\implies$ 2 repeating planes: $ABABAB...$!'
  },
  {
    id: 'm17-q8',
    paper: '2017 Sample Midterm',
    qNum: 'Q8',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'Anisotropy vs. Isotropy',
    prompt: 'Regarding crystallographic directionality of properties, a single crystal is generally __________, whereas a fine-grained polycrystalline material with randomly oriented grains is generally __________:',
    options: [
      { key: 'A', text: 'Anisotropic; Isotropic' },
      { key: 'B', text: 'Isotropic; Anisotropic' },
      { key: 'C', text: 'Amorphous; Crystalline' },
      { key: 'D', text: 'Isotropic; Isotropic' },
      { key: 'E', text: 'Homogeneous; Heterogeneous' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Anisotropic; Isotropic',
    explanation: 'In a single crystal, atoms are aligned in unbroken periodic rows. Elastic modulus $E$, electrical conductivity, and refractive index depend on the direction of measurement because interatomic spacing differs along $[100]$, $[110]$, and $[111]$ (this direction-dependence is ANISOTROPY). In a polycrystalline material, millions of microscopic single-crystal grains are randomly oriented; their directional variations average out in all spatial directions, producing macroscopic ISOTROPY.',
    theoryBehindIt: 'If a polycrystalline metal is cold-rolled, its grains become elongated and align along a preferred crystallographic texture (preferred orientation), reintroducing anisotropy into the bulk metal sheet.',
    quickTip: '💡 Handwritten Rule: Single crystal = 1 grain $\\implies$ ANISOTROPIC (direction dependent). Polycrystal = many random grains $\\implies$ ISOTROPIC (same in every direction)!'
  },
  {
    id: 'm17-q11',
    paper: '2017 Sample Midterm',
    qNum: 'Q11',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'Miller Indices for Planes',
    prompt: 'A crystallographic plane within a cubic unit cell intersects the $x$-axis at 1, the $y$-axis at 2, and is parallel to the $z$-axis. What are its Miller indices $(hkl)$?',
    options: [
      { key: 'A', text: '(210)' },
      { key: 'B', text: '(120)' },
      { key: 'C', text: '(1 1/2 0)' },
      { key: 'D', text: '(21\\infty)' },
      { key: 'E', text: '(012)' }
    ],
    correctKey: 'A',
    correctAnswerText: '(210)',
    explanation: 'Step 1: Axial intercepts: $x = 1$, $y = 2$, $z = \\infty$ (parallel to $z$-axis means it intercepts at infinity). Step 2: Take reciprocals: $1/1 = 1$, $1/2 = 1/2$, $1/\\infty = 0$. Step 3: Clear fractions by multiplying through by the lowest common denominator (2): $1 \\times 2 = 2$, $1/2 \\times 2 = 1$, $0 \\times 2 = 0$. Step 4: Enclose in parentheses: $(210)$. Option C is wrong because Miller indices must NEVER contain fractions.',
    theoryBehindIt: 'Miller indices represent the components of the normal vector perpendicular to the plane. By convention, reciprocals prevent infinite coordinates for parallel planes and integer clearing standardizes the notation across any unit cell size.',
    quickTip: '💡 Golden Rule from user notes: Parallel to axis $\\implies$ intercept $= \\infty \\implies$ index $= 0$. Always take reciprocal and NEVER leave fractions in your final $(hkl)$ answer!'
  },
  {
    id: 'm17-q14',
    paper: '2017 Sample Midterm',
    qNum: 'Q14',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'X-Ray Diffraction & Bragg\'s Law',
    prompt: 'Under what physical condition does constructive interference occur when monochromatic X-rays of wavelength $\\lambda$ scatter from parallel atomic planes separated by spacing $d_{hkl}$?',
    options: [
      { key: 'A', text: 'When the path length difference between scattered waves is an integer multiple of the wavelength: $n\\lambda = 2 d_{hkl} \\sin\\theta$' },
      { key: 'B', text: 'When the angle of incidence equals the critical angle: $\\sin\\theta_c = n_2/n_1$' },
      { key: 'C', text: 'When the interplanar spacing equals the X-ray wavelength: $d_{hkl} = \\lambda$' },
      { key: 'D', text: 'When the path length difference is a half-integer multiple: $(n + 1/2)\\lambda = 2 d_{hkl} \\cos\\theta$' },
      { key: 'E', text: 'When the diffraction angle $2\\theta$ is exactly $90^\\circ$' }
    ],
    correctKey: 'A',
    correctAnswerText: 'When the path length difference between scattered waves is an integer multiple of the wavelength: $n\\lambda = 2 d_{hkl} \\sin\\theta$',
    explanation: 'X-rays penetrate the crystal and scatter elastically off electrons in parallel planes of atoms. Waves reflecting from the second plane travel an extra path distance equal to $2 d_{hkl} \\sin\\theta$. For constructive interference (where wave crests align to produce a sharp diffraction peak), this extra path length must equal an integer number of whole wavelengths $n\\lambda$. At any other angle, the scattered waves are out of phase and destructively cancel each other out.',
    theoryBehindIt: 'Diffraction patterns serve as an atomic fingerprint. Cubic peak positions allow calculation of $d_{hkl} = \\frac{a}{\\sqrt{h^2+k^2+l^2}}$, identifying the lattice parameter $a$ and distinguishing BCC (where $h+k+l$ must be even) from FCC (where $h, k, l$ must be unmixed all-even or all-odd).',
    quickTip: '💡 Quick Trap Alert: The detector records $2\\theta$! Always divide the given peak angle by 2 to get $\\theta$ before calculating $\\sin\\theta$ in Bragg’s law!'
  },

  // =========================================================================
  // CHAPTER 3: IMPERFECTIONS IN SOLIDS
  // =========================================================================
  {
    id: 'm17-q15',
    paper: '2017 Sample Midterm',
    qNum: 'Q15',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    subject: 'Thermodynamics of Point Defects',
    prompt: 'Why are atomic vacancies classified as thermodynamic equilibrium defects that are intrinsically present in all crystalline materials above absolute zero ($T > 0\\text{ K}$)?',
    options: [
      { key: 'A', text: 'Because introducing vacancies increases configurational entropy ($\Delta S$), which minimizes total Gibbs free energy ($\Delta G = \Delta H - T\Delta S < 0$)' },
      { key: 'B', text: 'Because vacancies reduce the enthalpy of the crystal by releasing internal bonding strain' },
      { key: 'C', text: 'Because vacancy formation energy $Q_v$ is negative at elevated temperatures' },
      { key: 'D', text: 'Because dislocations constantly generate vacancies through mechanical work' },
      { key: 'E', text: 'Because vacancies prevent grain boundary migration' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Because introducing vacancies increases configurational entropy ($\Delta S$), which minimizes total Gibbs free energy ($\Delta G = \Delta H - T\Delta S < 0$)',
    explanation: 'Creating a vacancy requires breaking bonds and expanding the lattice, which costs enthalpy ($\\Delta H_v > 0$). However, distributing vacant sites randomly among $N$ atomic sites dramatically increases the number of available microstates $W$, creating a positive configurational entropy of mixing ($\\Delta S = k \\ln W > 0$). In the Gibbs free energy equation $G = H - TS$, the $-T\\Delta S$ term dominates at small vacancy concentrations, driving $\\Delta G$ negative. The equilibrium vacancy concentration $N_v/N = \\exp(-Q_v/kT)$ is where $dG/dN_v = 0$.',
    theoryBehindIt: 'Dislocations, grain boundaries, and surface voids are NOT equilibrium defects (their formation energy is too high and entropy gain too low; annealing always drives them out). Vacancies are the ONLY defects guaranteed by the second law of thermodynamics to exist at thermal equilibrium.',
    quickTip: '💡 Quick Theory Tip: Why do vacancies exist? ENTROPY! Thermal randomness favors disorder at any temperature above $0\\text{ K}$.'
  },
  {
    id: 'm17-q17',
    paper: '2017 Sample Midterm',
    qNum: 'Q17',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    subject: 'Hume-Rothery Rules for Solid Solutions',
    prompt: 'According to the Hume-Rothery rules, which of the following is a necessary requirement for two metallic elements to exhibit complete (unlimited) substitutional solid solubility across all compositions?',
    options: [
      { key: 'A', text: 'The difference in atomic radii of the two elements must not exceed $\\pm 15\\%$' },
      { key: 'B', text: 'The two metals must possess different crystal structures to stabilize the mixture' },
      { key: 'C', text: 'The electronegativity difference between the elements must be as large as possible' },
      { key: 'D', text: 'The solute metal must have a lower valence than the solvent metal' },
      { key: 'E', text: 'The melting point of the solute must be twice that of the solvent' }
    ],
    correctKey: 'A',
    correctAnswerText: 'The difference in atomic radii of the two elements must not exceed $\\pm 15\\%$',
    explanation: 'For complete substitutional solid solubility (such as the Cu-Ni system), Hume-Rothery established 4 mandatory conditions: 1) Atomic size factor: $\\Delta R = |R_{\\text{solute}} - R_{\\text{solvent}}| / R_{\\text{solvent}} \\le 15\\%$. 2) Crystal structure rule: Both metals must possess the same crystal structure (e.g. both FCC for Cu and Ni). 3) Electronegativity rule: Small difference in electronegativity (otherwise they form an intermetallic compound instead of a solution). 4) Valency rule: A metal has a higher tendency to dissolve another metal of higher valency than of lower valency.',
    theoryBehindIt: 'If atomic radii differ by more than $15\\%$, the severe local lattice distortion strain makes substitutional dissolution thermodynamically unfavorable, leading to phase separation or limited solubility.',
    quickTip: '💡 4 Hume-Rothery Commandments: 1) Size $\\le 15\\%$, 2) Same crystal structure, 3) Similar electronegativity, 4) Same/higher valency!'
  },
  {
    id: 'm17-q18',
    paper: '2017 Sample Midterm',
    qNum: 'Q18',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    subject: 'Dislocation Geometry & Burgers Vector',
    prompt: 'What is the geometric relationship between the Burgers vector $\\vec{b}$ and the dislocation line vector $\\vec{t}$ for a pure screw dislocation and a pure edge dislocation, respectively?',
    options: [
      { key: 'A', text: 'Screw: $\\vec{b}$ is parallel to $\\vec{t}$; Edge: $\\vec{b}$ is perpendicular to $\\vec{t}$' },
      { key: 'B', text: 'Screw: $\\vec{b}$ is perpendicular to $\\vec{t}$; Edge: $\\vec{b}$ is parallel to $\\vec{t}$' },
      { key: 'C', text: 'Both screw and edge dislocations have $\\vec{b}$ parallel to $\\vec{t}$' },
      { key: 'D', text: 'Both screw and edge dislocations have $\\vec{b}$ perpendicular to $\\vec{t}$' },
      { key: 'E', text: 'Screw: $\\vec{b}$ is at $45^\\circ$ to $\\vec{t}$; Edge: $\\vec{b}$ is parallel to $\\vec{t}$' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Screw: $\\vec{b}$ is parallel to $\\vec{t}$; Edge: $\\vec{b}$ is perpendicular to $\\vec{t}$',
    explanation: 'In an edge dislocation, an extra half-plane of atoms is inserted into the lattice; the displacement $\\vec{b}$ is perpendicular ($\perp$) to the bottom edge of that inserted plane (the dislocation line $\\vec{t}$). In a screw dislocation, the crystal lattice is sheared around the line like a spiral staircase / helical ramp; the displacement $\\vec{b}$ is parallel ($\\parallel$) to the dislocation line $\\vec{t}$. In a mixed dislocation, $\\vec{b}$ and $\\vec{t}$ are neither perpendicular nor parallel.',
    theoryBehindIt: 'Under applied shear stress, an edge dislocation glides in the direction of the Burgers vector (parallel to the shear stress). A screw dislocation glides perpendicular to the direction of its Burgers vector. Both produce the identical macroscopic shear strain step!',
    quickTip: '💡 Instant Mnemonic: EDGE = Perpendicular ($\perp$, like an edge of a table). SCREW = Parallel ($\\parallel$, turns along its axis).'
  },
  {
    id: 'm17-q20',
    paper: '2017 Sample Midterm',
    qNum: 'Q20',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    subject: 'Grain Boundaries & Interfacial Energy',
    prompt: 'Why do grain boundaries possess higher energy per unit area than the interior of crystalline grains, and how does this affect atomic diffusion and chemical reactivity?',
    options: [
      { key: 'A', text: 'Grain boundaries have less dense atomic packing and disrupted, strained interatomic bonds; this makes them preferred paths for rapid diffusion and preferential sites for chemical corrosion' },
      { key: 'B', text: 'Grain boundaries have higher atomic packing factor than grain interiors, preventing diffusion' },
      { key: 'C', text: 'Grain boundaries contain perfect metallic bonds that reflect diffusing atoms back into the grains' },
      { key: 'D', text: 'Grain boundary energy is zero because grains share common lattice planes' },
      { key: 'E', text: 'Grain boundaries only exist in single crystals, where they decrease reactivity' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Grain boundaries have less dense atomic packing and disrupted, strained interatomic bonds; this makes them preferred paths for rapid diffusion and preferential sites for chemical corrosion',
    explanation: 'Grain boundaries are 2D interfacial planar defects separating two crystalline grains of different spatial orientation. Because of crystallographic misalignment, atoms at the boundary cannot achieve their optimal coordination number and equilibrium bond lengths. This disorder creates interfacial energy ($\\gamma_{gb}$). The open atomic spacing provides a "short-circuit" highway for rapid diffusion ($D_{gb} \\gg D_{\\text{bulk}}$), and the higher state of chemical potential makes grain boundaries etch and corrode much faster than bulk grains.',
    theoryBehindIt: 'High-angle grain boundaries (misorientation $> 10-15^\\circ$) have significantly higher energy than low-angle tilt/twist boundaries (which can be modeled as arrays of individual edge/screw dislocations). Fine-grained materials have more boundary area, accelerating diffusion and etching.',
    quickTip: '💡 Mental Picture: Grain boundaries are atomic traffic jams with loose gaps. Atoms diffuse faster through gaps, and corrosive chemicals attack the high-energy broken bonds first!'
  },

  // =========================================================================
  // CHAPTER 4: DIFFUSION
  // =========================================================================
  {
    id: 'm17-q22',
    paper: '2017 Sample Midterm',
    qNum: 'Q22',
    chapter: 4,
    chapterTitle: 'Diffusion in Solids',
    subject: 'Steady-State vs. Non-Steady-State Diffusion',
    prompt: 'In mass diffusion through a solid, what is the defining mathematical condition for steady-state diffusion, and which law governs it?',
    options: [
      { key: 'A', text: 'The concentration profile does not change with time at any position ($\\partial C / \\partial t = 0$), governed by Fick’s First Law: $J = -D \\frac{dC}{dx}$' },
      { key: 'B', text: 'The concentration gradient is zero everywhere, governed by Fick’s Second Law' },
      { key: 'C', text: 'The diffusion flux $J$ changes constantly with time, governed by Fick’s First Law' },
      { key: 'D', text: 'The diffusion coefficient $D$ becomes infinite at the surface' },
      { key: 'E', text: 'Atoms stop jumping between lattice sites' }
    ],
    correctKey: 'A',
    correctAnswerText: 'The concentration profile does not change with time at any position ($\\partial C / \\partial t = 0$), governed by Fick’s First Law: $J = -D \\frac{dC}{dx}$',
    explanation: 'Steady state means that at any specific spatial coordinate $x$, the concentration $C$ remains completely constant over time: $\\frac{\\partial C}{\\partial t} = 0$. Therefore, the rate at which solute atoms enter a slice of material equals the rate at which they exit ($J_{\\text{in}} = J_{\\text{out}}$). Flux $J$ is constant across the entire membrane and is directly proportional to the linear concentration gradient, described by Fick’s First Law: $J = -D \\frac{dC}{dx}$. In non-steady state, concentration varies with both time and position ($\\frac{\\partial C}{\\partial t} = D \\frac{\\partial^2 C}{\\partial x^2}$, Fick’s Second Law).',
    theoryBehindIt: 'A classic steady-state example is hydrogen gas purifying through a palladium foil where high pressure on side A and low pressure on side B maintain a static linear concentration slope across the foil.',
    quickTip: '💡 Quick Rule: Steady State = No change with time ($\\partial C/\\partial t = 0$, straight line slope, Fick 1). Non-Steady State = Profile evolves over time (curved profile, erf function, Fick 2).'
  },
  {
    id: 'm17-q23',
    paper: '2017 Sample Midterm',
    qNum: 'Q23',
    chapter: 4,
    chapterTitle: 'Diffusion in Solids',
    subject: 'Interstitial vs. Vacancy Diffusion Mechanisms',
    prompt: 'Why is interstitial diffusion (such as carbon diffusing in iron) typically several orders of magnitude faster than vacancy/substitutional diffusion (such as copper diffusing in nickel) at the same temperature?',
    options: [
      { key: 'A', text: 'Interstitial solute atoms are significantly smaller than host atoms, and there are far more unoccupied interstitial sites than lattice vacancies' },
      { key: 'B', text: 'Vacancy diffusion requires high pressures while interstitial diffusion does not' },
      { key: 'C', text: 'Interstitial atoms do not need any activation energy to jump' },
      { key: 'D', text: 'Substitutional atoms have zero mass and therefore cannot move' },
      { key: 'E', text: 'Vacancy diffusion only occurs in liquid metals' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Interstitial solute atoms are significantly smaller than host atoms, and there are far more unoccupied interstitial sites than lattice vacancies',
    explanation: 'For an atom to diffuse via the vacancy mechanism, two events must happen: 1) a vacant site must be adjacent to the atom, and 2) the atom must have sufficient thermal energy to break bonds and squeeze through surrounding host atoms. Since equilibrium vacancy concentration is tiny ($\\sim 10^{-5}$ near melting), finding an open site is rare. In contrast, small interstitial atoms (C, H, N, O) sit in interstitial voids; nearly ALL adjacent interstitial sites are permanently empty, and smaller atomic radii produce lower activation barrier energies ($Q_{\\text{interstitial}} \\ll Q_{\\text{vacancy}}$).',
    theoryBehindIt: 'Carbon in $\\alpha$-Fe at $500^\\circ\\text{C}$ has $D \\approx 10^{-11}\\text{ m}^2/\\text{s}$, whereas self-diffusion of iron has $D \\approx 10^{-20}\\text{ m}^2/\\text{s}$ (9 orders of magnitude difference!). This explains why steel can be rapidly case-hardened by carburizing in a few hours.',
    quickTip: '💡 Mental Model: Interstitial = small mouse scurrying through empty hallways. Vacancy = giant person trying to move in a packed crowd where someone must leave before anyone can step forward!'
  },
  {
    id: 'm17-q25',
    paper: '2017 Sample Midterm',
    qNum: 'Q25',
    chapter: 4,
    chapterTitle: 'Diffusion in Solids',
    subject: 'Temperature Dependence of Diffusion',
    prompt: 'How does temperature affect the diffusion coefficient $D$, and what is the physical meaning of the activation energy $Q_d$ in the Arrhenius equation $D = D_0 \\exp(-Q_d / RT)$?',
    options: [
      { key: 'A', text: '$D$ increases exponentially with temperature; $Q_d$ represents the thermal energy barrier that an atom must overcome to jump between adjacent positions' },
      { key: 'B', text: '$D$ decreases linearly with temperature; $Q_d$ is the heat released during cooling' },
      { key: 'C', text: '$D$ is independent of temperature for crystalline metals' },
      { key: 'D', text: '$D$ doubles for every $10^\\circ\\text{C}$ increase, regardless of material' },
      { key: 'E', text: '$Q_d$ is the melting point of the solute in Kelvin' }
    ],
    correctKey: 'A',
    correctAnswerText: '$D$ increases exponentially with temperature; $Q_d$ represents the thermal energy barrier that an atom must overcome to jump between adjacent positions',
    explanation: 'Atomic jump rate is governed by Boltzmann statistics: the probability of an atom possessing thermal vibrational energy equal to or greater than the barrier height $Q_d$ is proportional to $\\exp(-Q_d / RT)$. Raising temperature increases the population of high-energy vibrating atoms exponentially. A plot of $\\ln D$ versus $1/T$ yields a straight line with slope $-Q_d / R$ and intercept $\\ln D_0$.',
    theoryBehindIt: 'For vacancy diffusion, activation energy consists of two parts: $Q_d = Q_v + Q_m$ (energy to form a vacancy $Q_v$ plus energy to migrate into it $Q_m$). For interstitial diffusion, interstitial sites already exist, so $Q_d = Q_m$ only.',
    quickTip: '💡 Arrhenius Golden Graph: Plot $\\ln D$ vs $1/T$. The slope is $-\\frac{Q_d}{R}$. Higher slope = higher activation energy = diffusivity changes more drastically with temperature!'
  },

  // =========================================================================
  // CHAPTER 5: MECHANICAL PROPERTIES
  // =========================================================================
  {
    id: 'm17-q27',
    paper: '2017 Sample Midterm',
    qNum: 'Q27',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    subject: 'Yield Strength Determination',
    prompt: 'For metallic materials that exhibit a continuous transition from elastic to plastic deformation without a distinct yield point drop, the yield strength $\\sigma_y$ is standardly specified by:',
    options: [
      { key: 'A', text: 'The 0.002 (0.2%) plastic strain offset method' },
      { key: 'B', text: 'The ultimate tensile strength (UTS) peak point' },
      { key: 'C', text: 'The fracture stress point where the specimen breaks' },
      { key: 'D', text: 'The point where true strain equals engineering strain' },
      { key: 'E', text: 'The 0.05 (5%) total strain method' }
    ],
    correctKey: 'A',
    correctAnswerText: 'The 0.002 (0.2%) plastic strain offset method',
    explanation: 'Most metals (like aluminum, copper, and austenitic stainless steels) do not exhibit a sharp upper and lower yield point. To establish a reproducible engineering yield strength, ASTM standardizes the offset method: on the engineering stress-strain curve, construct a straight line starting at $\\varepsilon = 0.002$ ($0.2\\%$) on the horizontal axis, parallel to the initial linear elastic slope (modulus $E$). The stress at the intersection of this offset line with the stress-strain curve is defined as the $0.2\\%$ offset yield strength $\\sigma_y$.',
    theoryBehindIt: 'Low-carbon steels are an exception: they display an upper yield point (where dislocations break free from interstitial carbon/nitrogen Cottrell atmospheres) followed by a lower yield point (Lüders bands) before strain hardening begins.',
    quickTip: '💡 0.002 Offset Rule: Draw parallel to elastic slope from $\\varepsilon = 0.002$ ($0.2\\%$). The intersection is $\\sigma_y$!'
  },
  {
    id: 'm17-q28',
    paper: '2017 Sample Midterm',
    qNum: 'Q28',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    subject: 'Elastic vs. Plastic Deformation Mechanism',
    prompt: 'At the microscopic atomic level, what distinguishes reversible elastic deformation from irreversible plastic deformation in a metallic crystal?',
    options: [
      { key: 'A', text: 'Elastic deformation involves temporary stretching of interatomic bonds without breaking them; plastic deformation involves permanent movement of dislocations and breaking/re-forming of bonds' },
      { key: 'B', text: 'Elastic deformation creates new grains; plastic deformation destroys vacancies' },
      { key: 'C', text: 'Elastic deformation occurs only under compression; plastic deformation occurs only under tension' },
      { key: 'D', text: 'Elastic deformation breaks covalent bonds; plastic deformation stretches metallic bonds' },
      { key: 'E', text: 'Elastic deformation increases dislocation density; plastic deformation reduces it' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Elastic deformation involves temporary stretching of interatomic bonds without breaking them; plastic deformation involves permanent movement of dislocations and breaking/re-forming of bonds',
    explanation: 'In the elastic regime ($\sigma < \sigma_y$), external force pulls atoms slightly away from their equilibrium spacing $r_0$ within their interatomic potential energy wells. When the force is released, interatomic bonding forces pull every atom back to its original lattice site (zero permanent strain). In plastic deformation ($\sigma \ge \sigma_y$), applied shear stresses cause dislocations to glide across slip planes; planes of atoms slide past each other, breaking bonds with old neighbors and forming bonds with new neighbors, permanently altering the geometry of the crystal.',
    theoryBehindIt: 'Because elastic deformation only stretches bonds, Young\'s modulus $E$ is an structure-insensitive property (cannot be changed by heat treatment or cold work). Yield strength $\sigma_y$ depends directly on dislocation mobility, making it a highly structure-sensitive property.',
    quickTip: '💡 Fundamental Distinction: Elastic = bond stretching (reversible like a spring, slope $E$). Plastic = dislocation slip (permanent sliding of atomic planes).'
  },
  {
    id: 'm17-q30',
    paper: '2017 Sample Midterm',
    qNum: 'Q30',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    subject: 'Poisson’s Ratio for Metals',
    prompt: 'For the vast majority of isotropic polycrystalline engineering metals and alloys, what is the typical range of Poisson’s ratio $\nu$?',
    options: [
      { key: 'A', text: '0.25 to 0.35' },
      { key: 'B', text: '0.00 to 0.10' },
      { key: 'C', text: '0.50 to 0.65' },
      { key: 'D', text: '0.90 to 1.00' },
      { key: 'E', text: '-0.20 to -0.35' }
    ],
    correctKey: 'A',
    correctAnswerText: '0.25 to 0.35',
    explanation: 'Poisson’s ratio $\nu = -\varepsilon_{\text{lateral}} / \varepsilon_{\text{axial}}$ characterizes transverse contraction during uniaxial tension. For an ideal incompressible material (where volume is strictly conserved during elastic deformation), $\nu = 0.50$ (common in rubber). In metals, elastic stretching involves slight volume expansion ($\Delta V/V = \varepsilon(1 - 2\nu) > 0$), resulting in values tightly clustered between $0.25$ and $0.35$ (for example: steel $\approx 0.30$, aluminum $\approx 0.33$, titanium $\approx 0.34$). Cork has $\nu \approx 0$; brittle ceramics typically have $\nu \approx 0.20 - 0.25$.',
    theoryBehindIt: 'In isotropic materials, the three elastic constants are linked by $E = 2G(1 + \nu) = 3K(1 - 2\nu)$, where $G$ is shear modulus and $K$ is bulk modulus. If $\nu > 0.5$, volume would decrease in tension, violating thermodynamic stability.',
    quickTip: '💡 Mental Benchmark: For metals, always expect $\nu \approx 1/3 \approx 0.33$. If your calculation gives $0.05$ or $0.85$, recheck your math!'
  },
  {
    id: 'm17-q33',
    paper: '2017 Sample Midterm',
    qNum: 'Q33',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    subject: 'Resilience vs. Toughness',
    prompt: 'On an engineering stress-strain curve, the area under the linear elastic portion up to the yield point represents the __________, whereas the total area under the entire curve up to fracture represents the __________:',
    options: [
      { key: 'A', text: 'Modulus of Resilience ($U_r$); Toughness' },
      { key: 'B', text: 'Toughness; Modulus of Resilience ($U_r$)' },
      { key: 'C', text: 'Ductility; Hardness' },
      { key: 'D', text: 'Modulus of Elasticity ($E$); Tensile Strength' },
      { key: 'E', text: 'Plastic work; Elastic recovery' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Modulus of Resilience ($U_r$); Toughness',
    explanation: 'Modulus of resilience $U_r = \int_0^{\varepsilon_y} \sigma d\varepsilon = \frac{\sigma_y^2}{2E}$ is the capacity of a material to store elastic strain energy per unit volume without permanent deformation (crucial for springs and shock absorbers). Toughness is the total mechanical energy per unit volume that a material can absorb before catastrophic fracture occurs; it requires a combination of BOTH high strength and high ductility. A ceramic has high strength but near-zero ductility, giving it very low toughness.',
    theoryBehindIt: 'High resilience requires high yield strength $\sigma_y$ and low modulus of elasticity $E$. High toughness requires the largest possible product of stress and strain across the entire test.',
    quickTip: '💡 Visual Comparison: Small triangle under yield point = Resilience (springiness). Entire curve all the way to fracture = Toughness (resistance to breaking)!'
  },

  // =========================================================================
  // CHAPTER 6: DISLOCATIONS & STRENGTHENING MECHANISMS
  // =========================================================================
  {
    id: 'm17-q39',
    paper: '2017 Sample Midterm',
    qNum: 'Q39',
    chapter: 6,
    chapterTitle: 'Dislocations & Strengthening Mechanisms',
    subject: 'Slip Systems in FCC Metals',
    prompt: 'What constitutes the primary slip system for Face-Centered Cubic (FCC) metals, and how many independent slip systems does this combination yield?',
    options: [
      { key: 'A', text: '$\{111\}$ close-packed planes and $\langle 110 \rangle$ close-packed directions, yielding 12 slip systems' },
      { key: 'B', text: '$\{110\}$ planes and $\langle 111 \rangle$ directions, yielding 12 slip systems' },
      { key: 'C', text: '$\{100\}$ planes and $\langle 100 \rangle$ directions, yielding 6 slip systems' },
      { key: 'D', text: '$\{0001\}$ basal planes and $\langle 11\bar{2}0 \rangle$ directions, yielding 3 slip systems' },
      { key: 'E', text: '$\{111\}$ planes and $\langle 111 \rangle$ directions, yielding 8 slip systems' }
    ],
    correctKey: 'A',
    correctAnswerText: '$\{111\}$ close-packed planes and $\langle 110 \rangle$ close-packed directions, yielding 12 slip systems',
    explanation: 'Dislocation glide occurs preferentially on planes with the highest planar atomic density (greatest interplanar spacing $d_{hkl}$, requiring lowest critical shear stress) and in directions with the highest linear atomic density (shortest Burgers vector $\vec{b}$, minimizing dislocation line energy $E \propto G b^2$). In FCC, the close-packed planes are the 4 octahedral $\{111\}$ planes. On each $\{111\}$ plane, there are 3 close-packed $\langle 110 \rangle$ directions. Multiplying gives $4 \times 3 = 12$ independent slip systems.',
    theoryBehindIt: 'Because FCC has 12 slip systems oriented symmetrically throughout 3D space, several slip systems are always favorably oriented relative to any applied stress (Schmid factor $m \approx 0.4 - 0.5$). This makes FCC metals (Cu, Al, Ni, Au) exceptionally ductile even at cryogenic temperatures, preventing brittle cleavage fracture.',
    quickTip: '💡 FCC Slip Rule: $\{111\}\langle 110 \rangle = 4 \text{ planes} \times 3 \text{ directions} = 12 \text{ systems}$. Highest planar density plane + highest linear density direction!'
  },
  {
    id: 'm17-q40',
    paper: '2017 Sample Midterm',
    qNum: 'Q40',
    chapter: 6,
    chapterTitle: 'Dislocations & Strengthening Mechanisms',
    subject: 'Schmid\'s Law & Maximum Resolved Shear Stress',
    prompt: 'According to Schmid’s Law ($\\tau_R = \sigma \cos\phi \cos\lambda$), what are the angles $\phi$ (between tensile axis and slip plane normal) and $\lambda$ (between tensile axis and slip direction) that maximize the resolved shear stress $\tau_R$, and what is that maximum value?',
    options: [
      { key: 'A', text: '$\phi = \lambda = 45^\circ$, giving $\tau_{R,\max} = 0.5\sigma$ (meaning yield occurs at minimum applied stress $\sigma_y = 2\tau_{\text{CRSS}}$)' },
      { key: 'B', text: '$\phi = 0^\circ, \lambda = 90^\circ$, giving $\tau_{R,\max} = \sigma$' },
      { key: 'C', text: '$\phi = \lambda = 90^\circ$, giving $\tau_{R,\max} = 0$' },
      { key: 'D', text: '$\phi = 30^\circ, \lambda = 60^\circ$, giving $\tau_{R,\max} = 0.866\sigma$' },
      { key: 'E', text: '$\phi = \lambda = 0^\circ$, giving $\tau_{R,\max} = \sigma$' }
    ],
    correctKey: 'A',
    correctAnswerText: '$\phi = \lambda = 45^\circ$, giving $\tau_{R,\max} = 0.5\sigma$ (meaning yield occurs at minimum applied stress $\sigma_y = 2\tau_{\text{CRSS}}$)',
    explanation: 'The Schmid factor is $m = \cos\phi \cos\lambda$. Because $\phi$ and $\lambda$ are geometric angles in 3D space, their sum must satisfy $\phi + \lambda \ge 90^\circ$. The product $\cos\phi \cos\lambda$ attains its absolute mathematical maximum when $\phi = \lambda = 45^\circ$, where $\cos 45^\circ \cos 45^\circ = (1/\sqrt{2})(1/\sqrt{2}) = 1/2 = 0.5$. Thus, $\tau_{R,\max} = 0.5\sigma$. When $\tau_R$ reaches $\tau_{\text{CRSS}}$, the single crystal yields. The minimum tensile stress required to cause yielding is therefore $\sigma_y = \tau_{\text{CRSS}} / 0.5 = 2\tau_{\text{CRSS}}$.',
    theoryBehindIt: 'If the tensile axis is perpendicular to the slip plane ($\phi = 0^\circ \implies \lambda = 90^\circ$) or parallel to the slip plane ($\phi = 90^\circ$), the Schmid factor is $\cos 90^\circ = 0$, meaning resolved shear stress is zero and no slip can occur regardless of how high the tensile force is!',
    quickTip: '💡 Golden Schmid Rule: Max shear is always at $45^\circ$! $m_{\max} = 0.5$. Minimum yield stress is $\sigma_y = 2\tau_{\text{CRSS}}$. If either angle is $90^\circ$, shear stress is ZERO!'
  },

  // =========================================================================
  // HIGH-YIELD HIGHLIGHTS FROM ALL PAST PAPERS (FALL 2017 FINAL, W26, 2018 MIDTERM)
  // =========================================================================
  {
    id: 'past-amorphous-grains',
    paper: 'Past Exam Highlight · Structure of Glass',
    qNum: 'Theory Pattern 1',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'Amorphous vs Crystalline Structure',
    prompt: 'Which of the following statements is strictly TRUE regarding non-crystalline (amorphous) materials such as silicate glasses and certain rapid-quenched polymers?',
    options: [
      { key: 'A', text: 'Amorphous materials have only short-range atomic order, have no grains, and NEVER possess grain boundaries (though they may contain physical voids)' },
      { key: 'B', text: 'Amorphous materials are composed of ultra-fine grains with high-angle grain boundaries' },
      { key: 'C', text: 'Amorphous materials exhibit sharp X-ray diffraction Bragg peaks' },
      { key: 'D', text: 'Amorphous materials have long-range 3D periodic translational order' },
      { key: 'E', text: 'Amorphous materials are completely anisotropic in all thermal and optical properties' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Amorphous materials have only short-range atomic order, have no grains, and NEVER possess grain boundaries (though they may contain physical voids)',
    explanation: 'A crystalline solid has both short-range order (bonding to nearest neighbors) and long-range order (3D periodic repetition over thousands of unit cells). An amorphous solid retains short-range order (e.g. SiO4 tetrahedra in fused silica) but lacks long-range periodicity. Because there are no crystalline lattices, there are no individual crystals (grains); without grains, grain boundaries CANNOT physically exist! Voids, gas bubbles, or micro-cracks can occur, but NEVER grain boundaries. Amorphous materials produce broad, diffuse X-ray diffraction halos, not sharp Bragg peaks.',
    theoryBehindIt: 'Amorphous solids are structurally akin to frozen liquids. Because they lack crystallographic slip planes and grain boundaries, they cannot deform via dislocation slip, making them completely brittle at temperatures below their glass transition temperature $T_g$.',
    quickTip: '💡 User Handwritten Note Rule: Amorphous $\implies$ NO grains $\implies$ NO grain boundaries. Can have voids, but NEVER grain boundaries!'
  },
  {
    id: 'past-polymorphism-allotropy',
    paper: 'Past Exam Highlight · Phase Transformations',
    qNum: 'Theory Pattern 2',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    subject: 'Polymorphism & Allotropy',
    prompt: 'The phenomenon wherein a pure elemental solid or compound can exist in more than one crystal structure depending on ambient temperature and pressure is known as:',
    options: [
      { key: 'A', text: 'Polymorphism (or Allotropy for elemental solids)' },
      { key: 'B', text: 'Polycrystallinity' },
      { key: 'C', text: 'Anisotropy' },
      { key: 'D', text: 'Isomorphism' },
      { key: 'E', text: 'Amorphization' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Polymorphism (or Allotropy for elemental solids)',
    explanation: 'Polymorphism is the property of a material to adopt different crystal structures at different temperatures and pressures. When found in pure elemental solids (like Carbon existing as graphite or diamond, or Iron existing as $\alpha$-BCC ferrite below $912^\circ\text{C}$ and $\gamma$-FCC austenite between $912^\circ\text{C}$ and $1394^\circ\text{C}$), it is termed Allotropy. It is accompanied by a change in volume and density, which is the foundational basis for the heat treatment and hardening of steels.',
    theoryBehindIt: 'Do not confuse Poly-crystal with Poly-morph! Polycrystalline means many grains having the SAME crystal structure in different orientations. Polymorphic means having DIFFERENT crystal structures (different atomic arrangements) under different thermodynamic conditions.',
    quickTip: '💡 User Handwritten Note Rule: Poly-crystal = many grains. Poly-morph = many structures (different crystal forms at different $T, P$)!'
  },
  {
    id: 'past-strengthening-mechanisms',
    paper: 'Past Exam Highlight · Strengthening Mechanisms',
    qNum: 'Theory Pattern 3',
    chapter: 6,
    chapterTitle: 'Dislocations & Strengthening Mechanisms',
    subject: 'Solid-Solution & Grain Boundary Strengthening',
    prompt: 'All commercial strengthening mechanisms in metals (solid-solution hardening, strain hardening/cold work, grain size refinement, precipitation hardening) achieve higher yield strength by which fundamental common mechanism?',
    options: [
      { key: 'A', text: 'Restricting, pinning, or impeding the motion of dislocations through the crystal lattice' },
      { key: 'B', text: 'Increasing the modulus of elasticity ($E$) of interatomic bonds' },
      { key: 'C', text: 'Eliminating all vacancies from the metallic crystal' },
      { key: 'D', text: 'Converting the crystal structure from FCC to HCP' },
      { key: 'E', text: 'Increasing the electrical conductivity of the metal' }
    ],
    correctKey: 'A',
    correctAnswerText: 'Restricting, pinning, or impeding the motion of dislocations through the crystal lattice',
    explanation: 'Plastic deformation in metals occurs through the glide of dislocations. Because plastic yielding begins when dislocations move, ANY microscopic feature that resists, pins, or blocks dislocation movement increases the mechanical stress required to cause plastic flow, thereby increasing the yield strength $\sigma_y$. Grain boundaries act as physical barriers (Hall-Petch); solute atoms create local strain fields that pin dislocations; cold work multiplies dislocation density creating tangled forests; precipitates act as hard obstacles that dislocations must cut or bypass (Orowan looping).',
    theoryBehindIt: 'Notice the engineering trade-off: almost every strengthening mechanism that increases yield strength simultaneously reduces ductility (%EL), because dislocations can no longer glide freely across long distances.',
    quickTip: '💡 Core Principle of Metallurgy: Strength = Dislocation Resistance. If dislocations move easily $\implies$ soft & ductile. If dislocations are blocked $\implies$ strong & hard!'
  }
];
