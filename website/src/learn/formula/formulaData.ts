// Master Formula Sheet & Symbol Reference for MIAE 221 (Materials Science)
// Covers Chapters 1 to 6 in full pedagogical detail.
// isOnOfficialSheet = true -> printed on the official MECH/MIAE 221 Midterm formula sheet.
// isOnOfficialSheet = false -> NOT ON SHEET! Highlighted in RED ALERT as mandatory to memorize.

export interface FormulaSymbol {
  symbol: string;
  name: string;
  role: string;
  units: string;
}

export interface MasterFormulaItem {
  id: string;
  name: string;
  chapter: number;
  chapterTitle: string;
  tex: string;
  meaning: string;
  isOnOfficialSheet: boolean;
  importance: 'red_alert' | 'core' | 'analytical';
  symbols: FormulaSymbol[];
  quickTip: string;
  officialSheetNote?: string;
  lessonId?: string;
}

export const MIAE221_MASTER_FORMULAS: MasterFormulaItem[] = [
  // =========================================================================
  // CHAPTER 1: ATOMIC STRUCTURE & BONDING
  // =========================================================================
  {
    id: 'ch1-moles-atoms',
    name: 'Moles, Mass, and Total Atomic Count',
    chapter: 1,
    chapterTitle: 'Atomic Structure & Bonding',
    tex: String.raw`n_{\text{mol}} = \frac{m}{A} \qquad N_{\text{atoms}} = n_{\text{mol}} \cdot N_A = \frac{m}{A} N_A`,
    meaning: 'Converts between macroscopic mass $m$, molar quantity $n$, and microscopic atom count $N$. Dividing mass by molar mass yields moles; multiplying by Avogadro’s number gives total atoms.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: 'm', name: 'Sample Mass', role: 'Total mass of the physical metal specimen', units: String.raw`\text{g}` },
      { symbol: 'A', name: 'Atomic Weight (Molar Mass)', role: 'Mass per mole of pure element from periodic table', units: String.raw`\text{g/mol}` },
      { symbol: 'n_{\text{mol}}', name: 'Molar Quantity', role: 'Number of chemical moles', units: String.raw`\text{mol}` },
      { symbol: 'N_{\text{atoms}}', name: 'Atom Count', role: 'Total discrete atoms in the sample', units: String.raw`\text{atoms}` },
      { symbol: 'N_A', name: 'Avogadro’s Constant', role: 'Universal count of entities per mole ($6.022 \times 10^{23}$)', units: String.raw`\text{atoms/mol}` }
    ],
    quickTip: '🚨 RED ALERT: NOT on the official midterm sheet! Whenever an exam problem asks for "number of atoms in a wire of radius r and length L", find volume $V = \pi r^2 L$, mass $m = \rho V$, then $N = (m/A)N_A$.',
    officialSheetNote: 'Not provided on official sheet. Must memorize.'
  },
  {
    id: 'ch1-ionic-character',
    name: 'Percent Ionic Character (Pauling Relation)',
    chapter: 1,
    chapterTitle: 'Atomic Structure & Bonding',
    tex: String.raw`\% \text{Ionic Character} = \left[ 1 - \exp\left( -0.25 \left( \chi_A - \chi_B \right)^2 \right) \right] \times 100`,
    meaning: 'Quantifies the degree of ionic vs. covalent bonding character between two bonded elements based on their electronegativity difference $\Delta \chi = |\chi_A - \chi_B|$.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\chi_A, \chi_B', name: 'Pauling Electronegativities', role: 'Tendency of atoms $A$ and $B$ to attract shared electrons', units: String.raw`\text{dimensionless}` },
      { symbol: '\Delta \chi', name: 'Electronegativity Difference', role: 'Magnitude $|\chi_A - \chi_B|$ driving electron transfer', units: String.raw`\text{dimensionless}` }
    ],
    quickTip: 'Tip: When $\Delta \chi = 0$, ionic character is $0\%$ (pure covalent/metallic). When $\Delta \chi \ge 1.7$, ionic character exceeds $50\%$ (predominantly ionic ceramic). Don\'t forget to square $\Delta \chi$ inside the exponent!',
    officialSheetNote: 'Given on official formula sheet.'
  },
  {
    id: 'ch1-net-force-energy',
    name: 'Net Interatomic Force & Equilibrium Spacing',
    chapter: 1,
    chapterTitle: 'Atomic Structure & Bonding',
    tex: String.raw`F_N(r) = F_A(r) + F_R(r) = -\frac{A}{r^2} + \frac{B}{r^n} = 0 \quad \text{at } r = r_0`,
    meaning: 'At the equilibrium separation $r_0$, attractive electrostatic force $F_A$ exactly cancels repulsive electron-cloud Pauli repulsion $F_R$, resulting in zero net force.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'F_N', name: 'Net Interatomic Force', role: 'Total force between two adjacent atomic centers', units: String.raw`\text{N}` },
      { symbol: 'F_A', name: 'Attractive Force', role: 'Electrostatic Coulomb pull ($-\frac{A}{r^2}$ or $-\frac{k |z_1 z_2| e^2}{r^2}$)', units: String.raw`\text{N}` },
      { symbol: 'F_R', name: 'Repulsive Force', role: 'Core electron orbital overlap resistance ($\frac{B}{r^n}$)', units: String.raw`\text{N}` },
      { symbol: 'r_0', name: 'Equilibrium Spacing', role: 'Stable interatomic bond distance where $F_N = 0$', units: String.raw`\text{m} \text{ or } \text{nm}` },
      { symbol: 'k', name: 'Coulomb Constant', role: 'Electrostatic constant $8.99 \times 10^9$', units: String.raw`\text{N}\cdot\text{m}^2/\text{C}^2` }
    ],
    quickTip: 'Memory hook from handwritten notes: Setting $F_N = 0 \implies \frac{A}{r_0^2} = \frac{n B}{r_0^{n+1}} \implies r_0 = \left(\frac{n B}{A}\right)^{\frac{1}{n-1}}$. The bond energy well depth is $E_0 = -\frac{A(n-1)}{n r_0}$.',
    officialSheetNote: 'General forms $F_N = F_A + F_R$ and $E_N = \int F_N dr$ given.'
  },

  // =========================================================================
  // CHAPTER 2: CRYSTAL STRUCTURES & CRYSTALLOGRAPHY
  // =========================================================================
  {
    id: 'ch2-theoretical-density',
    name: 'Theoretical Crystal Density',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`\rho = \frac{n \cdot A}{V_C \cdot N_A}`,
    meaning: 'Calculates the macroscopic bulk density directly from atomic weight $A$, atoms per unit cell $n$, unit cell volume $V_C$, and Avogadro’s number $N_A$.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\rho', name: 'Theoretical Density', role: 'Mass per unit volume of the perfect crystal', units: String.raw`\text{g/cm}^3` },
      { symbol: 'n', name: 'Atoms Per Unit Cell', role: 'Net count: $\text{SC}=1$, $\text{BCC}=2$, $\text{FCC}=4$, $\text{HCP}=6$', units: String.raw`\text{atoms/cell}` },
      { symbol: 'A', name: 'Atomic Weight', role: 'Molar mass of the constituent element', units: String.raw`\text{g/mol}` },
      { symbol: 'V_C', name: 'Unit Cell Volume', role: 'Lattice volume $a^3$ (cubic) or $\frac{3\sqrt{3}}{2} a^2 c$ (HCP)', units: String.raw`\text{cm}^3` },
      { symbol: 'N_A', name: 'Avogadro’s Number', role: 'Constant $6.022 \times 10^{23}$', units: String.raw`\text{atoms/mol}` }
    ],
    quickTip: '🚨 UNIT TRAP: If lattice parameter $a$ is in nanometers ($\text{nm}$), multiply by $10^{-7}$ to get $\text{cm}$, then cube it to get $\text{cm}^3$ ($1\text{ nm} = 10^{-7}\text{ cm} \implies 1\text{ nm}^3 = 10^{-21}\text{ cm}^3$).',
    officialSheetNote: 'Formula is on sheet, but $n$ values (1, 2, 4, 6) are NOT.'
  },
  {
    id: 'ch2-unit-cell-sample-count',
    name: 'Number of Unit Cells in a Solid Sample',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`N_{\text{cells}} = \frac{V_{\text{sample}}}{V_C} = \frac{m / \rho}{a^3}`,
    meaning: 'Determines the total number of microscopic crystallographic unit cells present within a macroscopic sample of given volume $V_{\text{sample}}$ or mass $m$.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: 'N_{\text{cells}}', name: 'Unit Cell Count', role: 'Total number of unit cell repetitions in specimen', units: String.raw`\text{dimensionless}` },
      { symbol: 'V_{\text{sample}}', name: 'Sample Volume', role: 'Macroscopic physical volume ($m/\rho$)', units: String.raw`\text{cm}^3 \text{ or } \text{m}^3` },
      { symbol: 'V_C = a^3', name: 'Unit Cell Volume', role: 'Microscopic cube volume from lattice parameter', units: String.raw`\text{cm}^3 \text{ or } \text{m}^3` }
    ],
    quickTip: '🚨 RED ALERT: NOT on the official sheet! Direct handwritten tip: Total atoms in sample $= n \times N_{\text{cells}}$. Always check whether the question asks for unit cells or atoms!',
    officialSheetNote: 'Not provided on official formula sheet.'
  },
  {
    id: 'ch2-atomic-packing-factor',
    name: 'Atomic Packing Factor (APF)',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`\text{APF} = \frac{V_{\text{atoms}}}{V_C} = \frac{n \cdot \left(\frac{4}{3}\pi R^3\right)}{V_C}`,
    meaning: 'The fraction of solid sphere volume occupied by hard-sphere atoms inside the geometric boundary of the unit cell.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\text{APF}', name: 'Atomic Packing Factor', role: 'Volume packing efficiency', units: String.raw`\text{fraction (dimensionless)}` },
      { symbol: 'n', name: 'Atoms Per Unit Cell', role: 'Hard sphere count per unit cell', units: String.raw`\text{atoms/cell}` },
      { symbol: 'R', name: 'Atomic Radius', role: 'Radius of the hard spherical atom', units: String.raw`\text{nm} \text{ or } \text{m}` },
      { symbol: 'V_C', name: 'Volume of Unit Cell', role: 'Total volume of unit cell', units: String.raw`\text{nm}^3 \text{ or } \text{m}^3` }
    ],
    quickTip: 'Mental lookup table: SC = 0.52 (open) | BCC = 0.68 | FCC = 0.74 (close-packed max) | HCP = 0.74 (close-packed max). If asked for maximum possible packing of equal spheres, it is ALWAYS 0.74.',
    officialSheetNote: 'APF definition given; exact numerical values (0.52, 0.68, 0.74) are NOT.'
  },
  {
    id: 'ch2-lattice-radius-relations',
    name: 'Lattice Parameter vs. Atomic Radius ($a$ - $R$ Geometry)',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`\text{SC: } a = 2R \qquad \text{BCC: } a = \frac{4R}{\sqrt{3}} \qquad \text{FCC: } a = 2\sqrt{2}R = \frac{4R}{\sqrt{2}}`,
    meaning: 'Rigorous geometric contact relations derived from hard spheres touching along specific close-packed crystallographic directions.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'a', name: 'Lattice Parameter', role: 'Edge length of the cubic unit cell', units: String.raw`\text{nm} \text{ or } \text{m}` },
      { symbol: 'R', name: 'Atomic Radius', role: 'Hard-sphere radius of the atom', units: String.raw`\text{nm} \text{ or } \text{m}` }
    ],
    quickTip: 'Mental Contact Map: SC touches along Cube Edge $\\langle 100 \\rangle$ ($a = 2R$). BCC touches along Body Diagonal $\\langle 111 \\rangle$ ($\sqrt{3}a = 4R$). FCC touches along Face Diagonal $\\langle 110 \\rangle$ ($\sqrt{2}a = 4R$).',
    officialSheetNote: 'Formula sheet gives BCC and FCC $a(R)$ equations.'
  },
  {
    id: 'ch2-metal-structures-list',
    name: 'Common Engineering Metals Crystal Structures',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`\text{BCC: Fe, Cr, W, V, Mo} \quad \text{FCC: Al, Cu, Au, Ag, Ni, Pt} \quad \text{HCP: Mg, Zn, Ti, Co} \quad \text{SC: Po}`,
    meaning: 'Empirical classification of structural metals at room temperature and standard atmospheric pressure.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '\text{BCC}', name: 'Body-Centered Cubic', role: 'Ductile, higher strength: $\\alpha$-Iron, Chromium, Tungsten, Vanadium', units: String.raw`n=2, CN=8` },
      { symbol: '\text{FCC}', name: 'Face-Centered Cubic', role: 'Highly ductile, malleable: Aluminum, Copper, Gold, Silver, Nickel', units: String.raw`n=4, CN=12` },
      { symbol: '\text{HCP}', name: 'Hexagonal Close-Packed', role: 'Lower ductility (fewer slip systems): Magnesium, Zinc, Titanium, Cobalt', units: String.raw`n=6, CN=12` },
      { symbol: '\text{SC}', name: 'Simple Cubic', role: 'Extremely rare, unstable: Polonium only', units: String.raw`n=1, CN=6` }
    ],
    quickTip: '🚨 RED ALERT: NOT on the formula sheet! The exam frequently asks "Which metal is FCC at room temperature?" or asks you to compute density of tungsten without giving $n$. Remember: Tungsten/Chromium/Iron = BCC ($n=2$); Copper/Aluminum/Nickel = FCC ($n=4$).',
    officialSheetNote: 'Not on formula sheet. Must memorize metal groupings.'
  },
  {
    id: 'ch2-miller-rules',
    name: 'Miller Indices Rules for Directions & Planes',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`[uvw] = \text{Direction vector cleared of fractions} \qquad (hkl) = \text{Reciprocals of axial intercepts: } \left(\frac{1}{x_0}, \frac{1}{y_0}, \frac{1}{z_0}\right)`,
    meaning: 'Systematic shorthand to identify directions and planes in cubic lattices without ambiguity.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '[uvw]', name: 'Direction Indices', role: 'Specific vector enclosed in square brackets', units: String.raw`\text{integers}` },
      { symbol: '\langle uvw \rangle', name: 'Family of Directions', role: 'All symmetry-equivalent directions', units: String.raw`\text{crystallographic family}` },
      { symbol: '(hkl)', name: 'Plane Indices', role: 'Specific plane enclosed in parentheses', units: String.raw`\text{integers}` },
      { symbol: '\{hkl\}', name: 'Family of Planes', role: 'All symmetry-equivalent planes', units: String.raw`\text{crystallographic family}` }
    ],
    quickTip: '🚨 Handwritten Golden Rule: Parallel to axis $\implies$ intercept is $\infty \implies$ index is $1/\infty = 0$. Pass through origin? MUST shift coordinate origin before measuring! Never write fractions in $(hkl)$; always clear by multiplying by common denominator.',
    officialSheetNote: 'Not explained on formula sheet.'
  },
  {
    id: 'ch2-linear-density',
    name: 'Linear Atomic Density (LD)',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`\text{LD} = \frac{\text{Number of atom diameters intercepted by direction vector}}{\text{Length of direction vector}} = \frac{N_{\text{line}}}{L}`,
    meaning: 'Fractional atom centering along a specific crystallographic line vector within a single repeat distance.',
    isOnOfficialSheet: true,
    importance: 'analytical',
    symbols: [
      { symbol: '\text{LD}', name: 'Linear Density', role: 'Atoms per unit length along vector', units: String.raw`\text{atoms/nm} \text{ or } \text{m}^{-1}` },
      { symbol: 'N_{\text{line}}', name: 'Atoms on Vector', role: 'Sum of fractional atomic lengths centered on vector', units: String.raw`\text{atoms}` },
      { symbol: 'L', name: 'Length of Vector', role: 'Vector magnitude ($a, \sqrt{2}a, \sqrt{3}a$)', units: String.raw`\text{nm} \text{ or } \text{m}` }
    ],
    quickTip: 'Direct handwritten example: In FCC along [110] (the face diagonal), $N_{\text{line}} = 1/2 + 1 + 1/2 = 2$ atoms, and $L = \sqrt{2}a = 4R$. Therefore $\\text{LD} = \\frac{2}{4R} = \\frac{1}{2R}$. This is the closest-packed direction in FCC!',
    officialSheetNote: 'Definition given on official sheet.'
  },
  {
    id: 'ch2-planar-density',
    name: 'Planar Atomic Density (PD)',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`\text{PD} = \frac{\text{Number of atoms centered on plane}}{\text{Area of plane}} = \frac{N_{\text{plane}}}{A_{\text{plane}}}`,
    meaning: 'The fraction of 2D atomic circles intersected by a specific crystallographic plane per unit area of that plane.',
    isOnOfficialSheet: true,
    importance: 'analytical',
    symbols: [
      { symbol: '\text{PD}', name: 'Planar Density', role: 'Atoms per unit area on plane', units: String.raw`\text{atoms/nm}^2 \text{ or } \text{m}^{-2}` },
      { symbol: 'N_{\text{plane}}', name: 'Atoms on Plane', role: 'Sum of fractional atomic circle areas inside unit cell boundary', units: String.raw`\text{atoms}` },
      { symbol: 'A_{\text{plane}}', name: 'Area of Plane', role: 'Geometric surface area inside the unit cell', units: String.raw`\text{nm}^2 \text{ or } \text{m}^2` }
    ],
    quickTip: 'Key benchmark values: FCC (111) is the close-packed plane: $N_{\text{plane}} = 2$ atoms, Area $= \frac{\sqrt{3}}{2} a^2 = 2\sqrt{3}a^2/4 \implies \text{PD} = \frac{4}{\sqrt{3}a^2}$. This is why $\{111\}$ is the preferred slip plane in FCC!',
    officialSheetNote: 'Definition given on official sheet.'
  },
  {
    id: 'ch2-braggs-law',
    name: 'Bragg’s Law of X-Ray Diffraction & Interplanar Spacing',
    chapter: 2,
    chapterTitle: 'Crystal Structures & Geometry',
    tex: String.raw`n\lambda = 2 d_{hkl} \sin\theta \qquad d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}`,
    meaning: 'Condition for constructive interference of X-rays scattered by parallel atomic planes separated by interplanar spacing $d_{hkl}$ at incident angle $\theta$.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'n', name: 'Diffraction Order', role: 'Integer order of constructive interference ($n=1$ in all exam problems)', units: String.raw`\text{dimensionless}` },
      { symbol: '\lambda', name: 'X-Ray Wavelength', role: 'Monochromatic incident X-ray wavelength', units: String.raw`\text{nm}` },
      { symbol: 'd_{hkl}', name: 'Interplanar Spacing', role: 'Distance between adjacent parallel $(hkl)$ lattice planes', units: String.raw`\text{nm}` },
      { symbol: '\theta', name: 'Bragg Angle', role: 'Angle between incident beam and atomic plane (half of detector angle $2\theta$)', units: String.raw`\text{degrees or rad}` },
      { symbol: 'a', name: 'Lattice Parameter', role: 'Cube edge dimension', units: String.raw`\text{nm}` },
      { symbol: 'h, k, l', name: 'Miller Indices of Plane', role: 'Integers defining diffracting plane', units: String.raw`\text{integers}` }
    ],
    quickTip: '🚨 CLASSIC EXAM TRAP: The diffractometer records diffraction angle $2\theta$! You MUST divide by 2 before evaluating $\sin\theta$. If $2\theta = 45^\circ$, then $\theta = 22.5^\circ$.',
    officialSheetNote: 'Both Bragg’s law and $d_{hkl}$ equation are on the sheet.'
  },

  // =========================================================================
  // CHAPTER 3: IMPERFECTIONS IN SOLIDS
  // =========================================================================
  {
    id: 'ch3-atomic-site-density',
    name: 'Atomic Site Concentration ($N$ Sites per Unit Volume)',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    tex: String.raw`N = \frac{\rho \cdot N_A}{A}`,
    meaning: 'Computes the total number of regular lattice atomic sites per unit volume of a pure solid element.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: 'N', name: 'Total Atomic Sites / Volume', role: 'Base site density before vacancy formation', units: String.raw`\text{sites/m}^3 \text{ or } \text{atoms/cm}^3` },
      { symbol: '\rho', name: 'Mass Density', role: 'Physical density of the metal', units: String.raw`\text{g/cm}^3 \text{ or } \text{kg/m}^3` },
      { symbol: 'N_A', name: 'Avogadro’s Number', role: 'Universal atomic constant $6.022 \times 10^{23}$', units: String.raw`\text{atoms/mol}` },
      { symbol: 'A', name: 'Atomic Weight', role: 'Molar mass from periodic table', units: String.raw`\text{g/mol}` }
    ],
    quickTip: '🚨 RED ALERT: NOT on the official midterm sheet! In 2017 Midterm Q2 (and Final F17-2), you are asked to compute vacancy concentration $N_v$, but the sheet ONLY gives $N_v = N e^{-Q_v/kT}$. If you don\'t know $N = \frac{\rho N_A}{A}$, you get stuck!',
    officialSheetNote: 'Not provided on formula sheet. Must memorize.'
  },
  {
    id: 'ch3-equilibrium-vacancies',
    name: 'Equilibrium Vacancy Concentration',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    tex: String.raw`N_v = N \exp\left(-\frac{Q_v}{k T}\right) \qquad \text{or} \qquad \frac{N_v}{N} = \exp\left(-\frac{Q_v}{k T}\right)`,
    meaning: 'Thermodynamic equilibrium number of vacant lattice sites. Vacancies naturally form because they increase configurational entropy ($\Delta S$), minimizing free energy ($G = H - TS$).',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'N_v', name: 'Equilibrium Vacancies', role: 'Number of vacant sites per unit volume', units: String.raw`\text{vacancies/m}^3` },
      { symbol: 'N', name: 'Total Atomic Sites', role: 'Total regular lattice positions ($N = \rho N_A / A$)', units: String.raw`\text{sites/m}^3` },
      { symbol: 'Q_v', name: 'Vacancy Formation Energy', role: 'Energy needed to remove an atom from inside to surface', units: String.raw`\text{eV/atom} \text{ or } \text{J/atom}` },
      { symbol: 'k', name: 'Boltzmann Constant', role: '$8.62 \times 10^{-5}\ \text{eV/(atom}\cdot\text{K)}$ or $1.38 \times 10^{-23}\ \text{J/K}$', units: String.raw`\text{eV/K} \text{ or } \text{J/K}` },
      { symbol: 'T', name: 'Absolute Temperature', role: 'Thermodynamic temperature in Kelvin ($T_{^\circ\text{C}} + 273.15$)', units: String.raw`\text{K}` }
    ],
    quickTip: '🚨 UNITS & TEMP CHECK: Always convert $^\circ\text{C} \to \text{K}$! If $Q_v$ is given in $\text{eV/atom}$, you MUST use $k = 8.62 \times 10^{-5}\ \text{eV/K}$. If $Q_v$ is in $\text{J/mol}$, you MUST use $R = 8.314\ \text{J/(mol}\cdot\text{K)}$.',
    officialSheetNote: 'Given on official sheet.'
  },
  {
    id: 'ch3-amorphous-vs-crystalline',
    name: 'Amorphous vs. Crystalline Structural Fundamentals',
    chapter: 3,
    chapterTitle: 'Imperfections in Solids',
    tex: String.raw`\text{Amorphous: Short-range order only, NO grains, NO grain boundaries} \quad \text{vs.} \quad \text{Crystalline: Long-range 3D periodic order}`,
    meaning: 'Core distinction between non-crystalline (amorphous/glasses) and crystalline solids.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '\text{Amorphous}', name: 'Non-Crystalline State', role: 'No crystal lattice, can contain voids, but NEVER grain boundaries', units: String.raw`\text{microstructure}` },
      { symbol: '\text{Polycrystalline}', name: 'Aggregate of Crystalline Grains', role: 'Same crystal structure, different 3D crystallographic orientations separated by grain boundaries', units: String.raw`\text{microstructure}` },
      { symbol: '\text{Single Crystal}', name: 'Single Unbroken Grain', role: 'Anisotropic (properties vary with measurement direction)', units: String.raw`\text{microstructure}` },
      { symbol: '\text{Polymorphism / Allotropy}', name: 'Phase Multiplicity', role: 'Same chemical composition adopting different crystal structures at different $T, P$', units: String.raw`\text{thermodynamics}` }
    ],
    quickTip: '🚨 Direct handwritten rule: Amorphous $\implies$ NO grains $\implies$ NO grain boundaries. It can have voids, but NEVER grain boundaries! Poly-crystal = many grains. Poly-morph = many crystal forms (e.g. Iron $\alpha$-BCC to $\gamma$-FCC at $912^\circ\text{C}$).',
    officialSheetNote: 'Not on formula sheet. High-frequency theory exam topic.'
  },

  // =========================================================================
  // CHAPTER 4: DIFFUSION
  // =========================================================================
  {
    id: 'ch4-ficks-first-law',
    name: 'Fick’s First Law (Steady-State Diffusion)',
    chapter: 4,
    chapterTitle: 'Diffusion in Solids',
    tex: String.raw`J = -D \frac{dC}{dx} \approx -D \frac{\Delta C}{\Delta x} = -D \frac{C_B - C_A}{x_B - x_A}`,
    meaning: 'In steady state ($\partial C/\partial t = 0$), diffusion flux $J$ is directly proportional to the concentration gradient $dC/dx$. The negative sign reflects flux moving from high to low concentration.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'J', name: 'Diffusion Flux', role: 'Mass or atom transfer rate per unit area per second', units: String.raw`\text{kg/(m}^2\cdot\text{s)} \text{ or } \text{atoms/(m}^2\cdot\text{s)}` },
      { symbol: 'D', name: 'Diffusion Coefficient', role: 'Diffusivity of solute in host matrix', units: String.raw`\text{m}^2/\text{s}` },
      { symbol: '\frac{dC}{dx}', name: 'Concentration Gradient', role: 'Slope of concentration profile across spatial distance', units: String.raw`\text{kg/m}^4 \text{ or } \text{atoms/m}^4` }
    ],
    quickTip: 'Steady state means the concentration profile does not change with time ($dC/dt = 0$). If given a flat plate of thickness $\Delta x$, $\frac{\Delta C}{\Delta x} = \frac{C_2 - C_1}{x_2 - x_1}$. Flux is constant across the entire thickness.',
    officialSheetNote: 'Given on official formula sheet.'
  },
  {
    id: 'ch4-ficks-second-law',
    name: 'Fick’s Second Law (Non-Steady-State Semi-Infinite Solid)',
    chapter: 4,
    chapterTitle: 'Diffusion in Solids',
    tex: String.raw`\frac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)`,
    meaning: 'Describes time-dependent transient diffusion into a semi-infinite solid with constant surface concentration $C_s$ and uniform initial composition $C_0$.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'C_x', name: 'Concentration at Depth $x$', role: 'Solute concentration at distance $x$ after time $t$', units: String.raw`\text{wt}\% \text{ or } \text{atoms/m}^3` },
      { symbol: 'C_0', name: 'Initial Bulk Concentration', role: 'Uniform starting concentration throughout workpiece', units: String.raw`\text{wt}\% \text{ or } \text{atoms/m}^3` },
      { symbol: 'C_s', name: 'Constant Surface Concentration', role: 'Concentration imposed by carburizing gas or bath at $x=0$', units: String.raw`\text{wt}\% \text{ or } \text{atoms/m}^3` },
      { symbol: 'x', name: 'Penetration Depth', role: 'Distance perpendicular from external surface into interior', units: String.raw`\text{m}` },
      { symbol: 't', name: 'Diffusion Time', role: 'Duration of thermal soaking heat treatment', units: String.raw`\text{s}` },
      { symbol: '\text{erf}(z)', name: 'Gaussian Error Function', role: 'Standard mathematical integral tabulated on exam sheet', units: String.raw`\text{dimensionless}` }
    ],
    quickTip: 'Key Rule: If concentration ratio $\frac{C_x - C_0}{C_s - C_0}$ is constant, then argument $z = \frac{x}{2\sqrt{Dt}}$ is constant! This yields the famous scaling law: $\frac{x_1^2}{D_1 t_1} = \frac{x_2^2}{D_2 t_2}$.',
    officialSheetNote: 'Given on official sheet along with Error Function table.'
  },
  {
    id: 'ch4-arrhenius-diffusivity',
    name: 'Temperature Dependence of Diffusion (Arrhenius Equation)',
    chapter: 4,
    chapterTitle: 'Diffusion in Solids',
    tex: String.raw`D = D_0 \exp\left(-\frac{Q_d}{R T}\right) \qquad \text{or} \qquad \ln D = \ln D_0 - \frac{Q_d}{R} \left(\frac{1}{T}\right)`,
    meaning: 'Diffusivity increases exponentially with temperature because atoms need thermal activation energy $Q_d$ to overcome energy barriers between adjacent lattice sites.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'D', name: 'Diffusion Coefficient at $T$', role: 'Thermal diffusivity rate', units: String.raw`\text{m}^2/\text{s}` },
      { symbol: 'D_0', name: 'Pre-Exponential Factor', role: 'Temperature-independent frequency factor', units: String.raw`\text{m}^2/\text{s}` },
      { symbol: 'Q_d', name: 'Activation Energy for Diffusion', role: 'Energy barrier to jump from site to site', units: String.raw`\text{J/mol} \text{ or } \text{eV/atom}` },
      { symbol: 'R', name: 'Gas Constant', role: '$8.314\ \text{J/(mol}\cdot\text{K)}$ (use $k$ if $Q_d$ is in eV)', units: String.raw`\text{J/(mol}\cdot\text{K)}` },
      { symbol: 'T', name: 'Absolute Temperature', role: 'Heat treatment temperature in Kelvin', units: String.raw`\text{K}` }
    ],
    quickTip: 'Solving for two temperatures: $\ln\left(\frac{D_2}{D_1}\right) = -\frac{Q_d}{R} \left(\frac{1}{T_2} - \frac{1}{T_1}\right) = \frac{Q_d}{R} \left(\frac{1}{T_1} - \frac{1}{T_2}\right)$. Interstitial diffusion (e.g. C in Fe) has much lower $Q_d$ and is orders of magnitude faster than vacancy/substitutional diffusion (e.g. Cu in Ni).',
    officialSheetNote: 'Given on official formula sheet.'
  },

  // =========================================================================
  // CHAPTER 5: MECHANICAL PROPERTIES
  // =========================================================================
  {
    id: 'ch5-engineering-stress',
    name: 'Engineering Stress Definition',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`\sigma = \frac{F}{A_0} = \frac{F}{w_0 \cdot t_0} = \frac{F}{\frac{\pi}{4} d_0^2}`,
    meaning: 'Instantaneous tensile or compressive load $F$ normalized by the ORIGINAL undeformed cross-sectional area $A_0$.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '\sigma', name: 'Engineering Stress', role: 'Normalized load intensity on initial cross section', units: String.raw`\text{MPa} \text{ or } \text{N/m}^2` },
      { symbol: 'F', name: 'Applied Tensile Force', role: 'External load pulling the specimen', units: String.raw`\text{N}` },
      { symbol: 'A_0', name: 'Original Cross-Sectional Area', role: 'Initial dimensions ($w_0 t_0$ for rectangle, $\pi r_0^2$ for cylinder)', units: String.raw`\text{m}^2 \text{ or } \text{mm}^2` }
    ],
    quickTip: '🚨 RED ALERT: NOT on the official formula sheet! The sheet jumps straight to $\sigma = E \varepsilon$. Always remember: $1\text{ MPa} = 1\text{ N/mm}^2 = 10^6\text{ N/m}^2$. If you enter dimensions in $\text{mm}$ and force in $\text{N}$, stress comes out directly in $\text{MPa}$!',
    officialSheetNote: 'Not provided on official sheet. Must memorize.'
  },
  {
    id: 'ch5-engineering-strain',
    name: 'Engineering Strain Definition',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`\varepsilon = \frac{\Delta l}{l_0} = \frac{l_i - l_0}{l_0}`,
    meaning: 'Elongation $\Delta l$ normalized by the original gauge length $l_0$. Dimensionless measure of deformation.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\varepsilon', name: 'Engineering Strain', role: 'Relative axial deformation', units: String.raw`\text{dimensionless (m/m)}` },
      { symbol: '\Delta l', name: 'Change in Gauge Length', role: 'Net elongation $l_i - l_0$', units: String.raw`\text{mm} \text{ or } \text{m}` },
      { symbol: 'l_0', name: 'Original Gauge Length', role: 'Initial baseline distance between punch marks', units: String.raw`\text{mm} \text{ or } \text{m}` }
    ],
    quickTip: 'Strain is unitless. Often expressed as percentage strain: $\% \varepsilon = \varepsilon \times 100\%$.',
    officialSheetNote: 'Given on official formula sheet.'
  },
  {
    id: 'ch5-hookes-law',
    name: 'Hooke’s Law (Linear Elasticity)',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`\sigma = E \cdot \varepsilon \implies \frac{F}{A_0} = E \frac{\Delta l}{l_0} \implies \Delta l = \frac{F \cdot l_0}{A_0 \cdot E}`,
    meaning: 'Linear reversible deformation in the elastic regime, where stress is directly proportional to strain through Young’s Modulus $E$ (the stiffness of interatomic bonds).',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'E', name: 'Modulus of Elasticity (Young’s Modulus)', role: 'Measure of interatomic bond stiffness (slope of elastic line)', units: String.raw`\text{GPa} = 10^9\ \text{Pa} = 10^3\ \text{MPa}` },
      { symbol: '\sigma', name: 'Tensile Stress', role: 'Elastic stress level ($\sigma \le \sigma_y$)', units: String.raw`\text{MPa}` },
      { symbol: '\varepsilon', name: 'Elastic Strain', role: 'Reversible lattice stretch', units: String.raw`\text{dimensionless}` }
    ],
    quickTip: 'Young’s modulus $E$ is proportional to the curvature of the interatomic potential energy curve at the minimum $r_0$. A higher melting point material has a deeper potential well and therefore a higher modulus $E$.',
    officialSheetNote: '$\sigma = E\varepsilon$ is on the sheet.'
  },
  {
    id: 'ch5-poissons-ratio-lateral-contraction',
    name: 'Poisson’s Ratio & Transverse Width Contraction',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`\nu = -\frac{\varepsilon_x}{\varepsilon_z} = -\frac{\varepsilon_y}{\varepsilon_z} \implies \Delta w = -\nu \cdot w_0 \cdot \varepsilon_z = -\nu \cdot w_0 \frac{F}{A_0 E}`,
    meaning: 'Ratio of lateral (transverse) contraction strain to axial (longitudinal) tensile extension strain. For metals, typically $\nu \approx 0.25 - 0.35$.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\nu', name: 'Poisson’s Ratio', role: 'Lateral contraction ratio for isotropic material', units: String.raw`\text{dimensionless}` },
      { symbol: '\varepsilon_z', name: 'Axial Tensile Strain', role: 'Elongation strain along loading axis', units: String.raw`\text{positive (dimensionless)}` },
      { symbol: '\varepsilon_x, \varepsilon_y', name: 'Lateral Strain', role: 'Transverse contracting strain perpendicular to load', units: String.raw`\text{negative (dimensionless)}` },
      { symbol: '\Delta w', name: 'Change in Width', role: 'Net transverse dimensional change ($w_f - w_0$)', units: String.raw`\text{mm}` },
      { symbol: 'w_0', name: 'Initial Width', role: 'Original transverse specimen width', units: String.raw`\text{mm}` }
    ],
    quickTip: '🚨 RED ALERT: $\nu = -\varepsilon_x/\varepsilon_z$ is on the sheet, but the practical engineering width formula $\Delta w = -\nu w_0 \frac{F}{E A_0}$ is NOT! 2017 Midterm Question 38 specifically tests this exact multi-step calculation.',
    officialSheetNote: '$\nu = -\varepsilon_x/\varepsilon_z$ is on the sheet.'
  },
  {
    id: 'ch5-resilience',
    name: 'Modulus of Resilience ($U_r$)',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`U_r = \int_0^{\varepsilon_y} \sigma \, d\varepsilon = \frac{1}{2} \sigma_y \varepsilon_y = \frac{\sigma_y^2}{2E}`,
    meaning: 'Capacity of a material to absorb elastic energy per unit volume when deformed up to the yield point, and then release that energy upon unloading (springiness).',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: 'U_r', name: 'Modulus of Resilience', role: 'Elastic energy absorption capacity per volume', units: String.raw`\text{J/m}^3 \text{ or } \text{Pa}` },
      { symbol: '\sigma_y', name: 'Yield Strength', role: 'Stress at onset of plastic deformation (0.002 offset)', units: String.raw`\text{Pa} \text{ or } \text{N/m}^2` },
      { symbol: 'E', name: 'Young’s Modulus', role: 'Elastic modulus', units: String.raw`\text{Pa}` }
    ],
    quickTip: '🚨 UNIT TRAP: If you plug $\sigma_y$ in $\text{MPa}$ into $\sigma_y^2/(2E)$ where $E$ is in $\text{GPa}$, convert both to $\text{Pa}$ ($\text{N/m}^2$) first! $1\text{ MPa} = 10^6\text{ Pa}$, $1\text{ GPa} = 10^9\text{ Pa}$. The result comes out in $\text{J/m}^3$.',
    officialSheetNote: 'Given on official formula sheet.'
  },
  {
    id: 'ch5-ductility-measures',
    name: 'Ductility Measures: Percent Elongation (%EL) & Reduction in Area (%RA)',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`\% \text{EL} = \frac{l_f - l_0}{l_0} \times 100\% \qquad \% \text{RA} = \frac{A_0 - A_f}{A_0} \times 100\%`,
    meaning: 'Quantitative measures of the degree of plastic deformation a material can sustain prior to fracture.',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\% \text{EL}', name: 'Percent Elongation', role: 'Permanent plastic axial stretch at fracture', units: String.raw`\%` },
      { symbol: '\% \text{RA}', name: 'Percent Reduction in Area', role: 'Cross-sectional necking contraction at fracture', units: String.raw`\%` },
      { symbol: 'l_f, A_f', name: 'Fracture Length & Area', role: 'Dimensions measured after specimen pieces are fitted together', units: String.raw`\text{mm, mm}^2` }
    ],
    quickTip: 'A material is classified as brittle if its ductility is less than $\approx 5\% \text{EL}$. Ductile metals show significant necking ($A_f \ll A_0$) before final cup-and-cone rupture.',
    officialSheetNote: 'Both $\% \text{EL}$ and $\% \text{RA}$ are given on the sheet.'
  },
  {
    id: 'ch5-true-stress-strain',
    name: 'True Stress ($\sigma_T$) & True Strain ($\varepsilon_T$) Conversions',
    chapter: 5,
    chapterTitle: 'Mechanical Properties',
    tex: String.raw`\sigma_T = \sigma(1 + \varepsilon) \qquad \varepsilon_T = \ln(1 + \varepsilon)`,
    meaning: 'Converts engineering stress $\sigma$ and engineering strain $\varepsilon$ to true stress $\sigma_T = F/A_i$ and true strain $\varepsilon_T = \ln(l_i/l_0)$, assuming volume conservation ($A_0 l_0 = A_i l_i$) up to the onset of necking.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '\sigma_T', name: 'True Stress', role: 'Load divided by instantaneous actual area $A_i$', units: String.raw`\text{MPa}` },
      { symbol: '\varepsilon_T', name: 'True Strain', role: 'Natural log of instantaneous length ratio $\ln(l_i/l_0)$', units: String.raw`\text{dimensionless}` },
      { symbol: '\sigma', name: 'Engineering Stress', role: 'Load divided by original initial area $A_0$', units: String.raw`\text{MPa}` },
      { symbol: '\varepsilon', name: 'Engineering Strain', role: 'Elongation divided by original gauge length $l_0$', units: String.raw`\text{dimensionless}` }
    ],
    quickTip: '🚨 RED ALERT: NOT on the official formula sheet! Valid ONLY up to the onset of necking (the UTS point). Beyond necking, deformation is localized and cross-sectional volume conservation in the gauge length fails.',
    officialSheetNote: 'Not provided on formula sheet. Must memorize.'
  },

  // =========================================================================
  // CHAPTER 6: DISLOCATIONS & STRENGTHENING MECHANISMS
  // =========================================================================
  {
    id: 'ch6-schmids-law',
    name: 'Schmid’s Law (Resolved Shear Stress on Slip System)',
    chapter: 6,
    chapterTitle: 'Dislocations & Strengthening Mechanisms',
    tex: String.raw`\tau_R = \sigma \cos\phi \cos\lambda = \frac{F}{A_0} \cos\phi \cos\lambda \quad \implies \quad \sigma_y = \frac{\tau_{\text{CRSS}}}{(\cos\phi \cos\lambda)_{\max}}`,
    meaning: 'Calculates the shear stress resolved onto a specific crystallographic slip plane in a specific slip direction under uniaxial tensile stress $\sigma$. Yielding occurs when $\tau_R$ reaches the Critical Resolved Shear Stress ($\tau_{\text{CRSS}}$).',
    isOnOfficialSheet: true,
    importance: 'core',
    symbols: [
      { symbol: '\tau_R', name: 'Resolved Shear Stress', role: 'Driving force moving dislocations on the slip plane', units: String.raw`\text{MPa}` },
      { symbol: '\sigma', name: 'Applied Tensile Stress', role: 'Uniaxial stress applied along longitudinal specimen axis', units: String.raw`\text{MPa}` },
      { symbol: '\phi', name: 'Slip Plane Normal Angle', role: 'Angle between tensile axis and normal to slip plane', units: String.raw`\text{degrees}` },
      { symbol: '\lambda', name: 'Slip Direction Angle', role: 'Angle between tensile axis and slip direction', units: String.raw`\text{degrees}` },
      { symbol: '\tau_{\text{CRSS}}', name: 'Critical Resolved Shear Stress', role: 'Intrinsic material threshold required to initiate dislocation glide', units: String.raw`\text{MPa}` }
    ],
    quickTip: '🚨 MAXIMUM SCHMID FACTOR: The maximum possible resolved shear stress occurs when $\phi = \lambda = 45^\circ$. Then $\cos 45^\circ \cos 45^\circ = (1/\sqrt{2})(1/\sqrt{2}) = 0.5$. Thus $\tau_{R,\max} = \sigma / 2$, and yielding occurs at minimum tensile stress $\sigma_y = 2\tau_{\text{CRSS}}$. If $\phi = 90^\circ$ or $\lambda = 90^\circ$, $\tau_R = 0$ (no slip possible!).',
    officialSheetNote: '$\tau_R = \sigma \cos\phi \cos\lambda$ is given on official sheet.'
  },
  {
    id: 'ch6-slip-systems',
    name: 'Close-Packed Slip Systems by Crystal Structure',
    chapter: 6,
    chapterTitle: 'Dislocations & Strengthening Mechanisms',
    tex: String.raw`\text{FCC: } \{111\}\langle 110 \rangle \ (12 \text{ systems}) \qquad \text{BCC: } \{110\}\langle 111 \rangle \ (12+ \text{ systems}) \qquad \text{HCP: } \{0001\}\langle 11\bar{2}0 \rangle \ (3 \text{ basal systems})`,
    meaning: 'Slip occurs along the planes with the highest planar atomic density (most widely spaced) and along directions with the highest linear atomic density (shortest Burgers vector).',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '\text{Slip Plane}', name: 'Plane of Dislocation Glide', role: 'Plane of closest atomic packing (highest PD)', units: String.raw`\text{Miller plane}` },
      { symbol: '\text{Slip Direction}', name: 'Direction of Dislocation Motion', role: 'Direction of closest atomic packing (highest LD)', units: String.raw`\text{Miller direction}` },
      { symbol: '\text{Slip System}', name: 'Combination', role: '$\text{Number of independent slip systems} = (\text{Planes}) \times (\text{Directions})$', units: String.raw`\text{integer count}` }
    ],
    quickTip: '🚨 EXAM CLASSIC: Why is FCC (Al, Cu) extremely ductile at low temperatures while HCP (Zn, Mg) is brittle? Because FCC has 12 slip systems intersecting in 3D, satisfying von Mises criterion ($\ge 5$ independent systems). HCP has only 3 active basal slip systems at room temperature!',
    officialSheetNote: 'Not on formula sheet. Frequently tested theory question.'
  },
  {
    id: 'ch6-burgers-vector-geometry',
    name: 'Burgers Vector ($\vec{b}$) Relationship to Dislocation Line ($\vec{t}$)',
    chapter: 6,
    chapterTitle: 'Dislocations & Strengthening Mechanisms',
    tex: String.raw`\text{Edge Dislocation: } \vec{b} \perp \vec{t} \qquad \text{Screw Dislocation: } \vec{b} \parallel \vec{t} \qquad \text{Mixed Dislocation: Neither } \perp \text{ nor } \parallel`,
    meaning: 'The Burgers vector $\vec{b}$ defines the magnitude and direction of lattice distortion resulting from dislocation displacement relative to dislocation line $\vec{t}$.',
    isOnOfficialSheet: false,
    importance: 'red_alert',
    symbols: [
      { symbol: '\vec{b}', name: 'Burgers Vector', role: 'Closure vector of the Burgers circuit surrounding dislocation', units: String.raw`\text{nm}` },
      { symbol: '\vec{t}', name: 'Dislocation Line Vector', role: 'Tangent vector along the core line of the defect', units: String.raw`\text{unit vector}` }
    ],
    quickTip: '🚨 Direct mnemonic: EDGE has a sharp corner (perpendicular $\perp$). SCREW turns along the shaft (parallel $\parallel$). 2017 Midterm Question 18 tests this directly!',
    officialSheetNote: 'Not on formula sheet. Mandatory theory question.'
  }
];
