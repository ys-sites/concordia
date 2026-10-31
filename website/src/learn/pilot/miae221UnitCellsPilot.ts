// Complete, Verified Pilot Lesson for the AI-Guided Visual Learning System
// Course: MIAE 221 (Materials Science) · Subject: Metallic Crystal Structures (unit-cells)
// Zero teacher slide or textbook citations; 100% original one-on-one AI tutor explanation,
// complete symbol/unit definitions, zero-skip worked derivations, interactive exploration prompts,
// exam pitfalls & revision summary, and synchronized 3D video choreography specification.

export interface PilotSectionBlock {
  heading: string;
  intuition: string;
  paragraphs: string[];
  keyEquationTex?: string;
  keyEquationNote?: string;
}

export interface PilotWorkedExample {
  id: string;
  title: string;
  given: string;
  find: string;
  steps: {
    stepNumber: number;
    title: string;
    explanation: string;
    tex: string;
  }[];
  finalAnswer: string;
  verificationCheck: string;
}

export interface PilotPitfallItem {
  mistake: string;
  whyItHappens: string;
  howToAvoid: string;
}

export interface PilotVideoSceneSpec {
  sceneNumber: number;
  timeRange: string;
  title: string;
  visual3DState: string;
  cameraAndMotion: string;
  onScreenMath: string[];
  tutorNarration: string;
}

export const MIAE221_UNIT_CELLS_PILOT = {
  lessonId: 'unit-cells',
  courseId: 'MIAE221' as const,
  title: 'Metallic Crystal Structures: SC, BCC, FCC & HCP',
  subtitle: 'One-on-One AI Tutor Lesson · Hard-Sphere Packing, Atom Sharing, Lattice Geometry & Packing Factor',

  tutorWelcome:
    'Imagine pouring identical steel marbles into a box and gently shaking it. Because metallic bonds are non-directional, metal atoms act just like hard spheres that want to nestle as close together as possible to minimize potential energy. In this session, we will build the four fundamental metallic unit cells from scratch—Simple Cubic (SC), Body-Centered Cubic (BCC), Face-Centered Cubic (FCC), and Hexagonal Close-Packed (HCP)—and derive every formula directly from 3D geometry.',

  sections: [
    {
      heading: '1. Physical Intuition: Why Atoms Pack into Unit Cells',
      intuition:
        'A crystal lattice is a 3D periodic grid, and the unit cell is the smallest repeating brick that tiles all of 3D space when translated along the x, y, and z axes.',
      paragraphs: [
        'In the hard-sphere model, each metal atom is modelled as a solid sphere of atomic radius $R$. Two neighboring atoms touch along the close-packed direction of the crystal, meaning the distance between their centers along that touching line is exactly $2R$ (one radius from the first atom plus one radius from the second).',
        'Crucially, atoms do not always touch along the cube edge $a$! In BCC and FCC crystals, the central or face-centered atoms push the corner atoms slightly apart along the cube edge so that contact occurs along a diagonal instead. Identifying WHICH line has touching spheres is the single secret to unlocking every unit-cell calculation.'
      ],
      keyEquationTex: 'd_{\\text{touch}} = 2R',
      keyEquationNote: 'Along the close-packed direction of any unit cell, adjacent hard spheres touch surface-to-surface.'
    },
    {
      heading: '2. Boundary Atom Sharing: Counting Effective Atoms per Unit Cell (n)',
      intuition:
        'When you slice a single unit cell out of an infinite crystal using six flat planes, any atom sitting on a boundary is shared with the neighboring unit cells that meet at that boundary.',
      paragraphs: [
        '• Interior (Body-Centered) Atoms ($N_i$): An atom sitting completely inside the cell boundaries belongs $100\\%$ ($1$) to that single unit cell.',
        '• Face-Centered Atoms ($N_f$): A flat cube face is shared between $2$ adjacent unit cells (the cell on the left and the cell on the right). Slicing along the face cuts the sphere into two equal hemispheres, so each face atom contributes $\\frac{1}{2}$ of an atom to the cell.',
        '• Cubic Corner Atoms ($N_c$): At any corner of a cubic lattice, $8$ unit cells meet ($4$ on the bottom layer, $4$ on the top layer). Three mutually perpendicular slicing planes cut the corner sphere into $8$ equal octants, so each corner atom contributes $\\frac{1}{8}$ of an atom.',
        '• Hexagonal Corner Atoms ($N_c$ in HCP): At the $12$ top and bottom corners of a hexagonal prism, $6$ hexagonal unit cells meet ($3$ in the same layer because the interior angle of a regular hexagon is $120^\\circ = \\frac{360^\\circ}{3}$, doubled across $2$ vertical layers). Therefore, each hexagonal corner atom contributes $\\frac{1}{6}$ of an atom.'
      ],
      keyEquationTex: 'n_{\\text{cubic}} = \\frac{N_c}{8} + \\frac{N_f}{2} + N_i \\qquad\\text{and}\\qquad n_{\\text{HCP}} = \\frac{N_c}{6} + \\frac{N_f}{2} + N_i',
      keyEquationNote: 'SC: n = 8/8 = 1 · BCC: n = 8/8 + 1 = 2 · FCC: n = 8/8 + 6/2 = 4 · HCP: n = 12/6 + 2/2 + 3 = 6.'
    },
    {
      heading: '3. Deriving Lattice Parameter a(R) from 3D Pythagorean Geometry',
      intuition:
        'Never memorize $a(R)$ blindly—read it off the right triangle where the spheres touch.',
      paragraphs: [
        '• Simple Cubic (SC): Atoms touch directly along the cube edge of length $a$. Two corner radii meet along the edge: $a = R + R = 2R$.',
        '• Body-Centered Cubic (BCC): The center atom touches all $8$ corner atoms along the 3D body diagonal. By the 3D Pythagorean theorem, a cube of side $a$ has a floor face diagonal of $\\sqrt{a^2 + a^2} = \\sqrt{2}a$ and a 3D body diagonal of $\\sqrt{(\\sqrt{2}a)^2 + a^2} = \\sqrt{3}a$. Passing from one corner through the full body-center sphere to the opposite corner covers $R + 2R + R = 4R$. Setting $\\sqrt{3}a = 4R$ gives $a = \\frac{4R}{\\sqrt{3}}$.',
        '• Face-Centered Cubic (FCC): Atoms touch along the 2D face diagonal of length $\\sqrt{a^2 + a^2} = \\sqrt{2}a$. Passing from one corner through the full face-centered sphere to the opposite face corner covers $R + 2R + R = 4R$. Setting $\\sqrt{2}a = 4R$ gives $a = \\frac{4R}{\\sqrt{2}} = 2\\sqrt{2}R$.',
        '• Hexagonal Close-Packed (HCP): Atoms touch along the basal hexagon edge ($a = 2R$), while the three mid-plane interior atoms nestle into the hollows between the top and bottom basal planes, yielding an ideal height-to-edge ratio of $\\frac{c}{a} = \\sqrt{\\frac{8}{3}} \\approx 1.633$.'
      ],
      keyEquationTex: 'a_{\\text{SC}} = 2R, \\qquad a_{\\text{BCC}} = \\frac{4R}{\\sqrt{3}}, \\qquad a_{\\text{FCC}} = 2\\sqrt{2}R',
      keyEquationNote: 'Notice that as packing becomes denser (SC → BCC → FCC), the cube edge a grows from 2.000R to 2.309R to 2.828R because more atoms are packed inside the cell.'
    },
    {
      heading: '4. Coordination Number (CN) & Atomic Packing Factor (APF)',
      intuition:
        'Coordination Number counts how many nearest neighbors touch a single atom; Atomic Packing Factor measures the fraction of the unit-cell box filled by solid sphere volume.',
      paragraphs: [
        '• Coordination Number (CN): In SC, each atom touches $6$ neighbors ($\\pm x, \\pm y, \\pm z$). In BCC, the center atom touches all $8$ corner atoms ($\\text{CN} = 8$). In both FCC and ideal HCP, each atom touches $12$ equidistant nearest neighbors ($\\text{CN} = 12$), which is the maximum possible for identical spheres in 3D space.',
        '• Atomic Packing Factor (APF): Defined as total sphere volume inside the cell ($V_{\\text{atoms}} = n \\cdot \\frac{4}{3}\\pi R^3$) divided by the geometric volume of the unit cell ($V_c = a^3$ for cubic cells). Because $a$ is proportional to $R$, the $R^3$ factor always cancels out! Thus APF is a pure geometric constant for each crystal structure: $0.524$ ($52.4\\%$) for SC, $0.680$ ($68.0\\%$) for BCC, and $0.740$ ($74.0\\%$) for both FCC and HCP.'
      ],
      keyEquationTex: '\\text{APF} = \\frac{V_{\\text{atoms}}}{V_c} = \\frac{n \\cdot \\frac{4}{3}\\pi R^3}{V_c}',
      keyEquationNote: 'Void fraction = 1 - APF. For example, BCC has 68.0% occupied volume and 32.0% empty interstitial space.'
    }
  ] as PilotSectionBlock[],

  structureComparisonTable: [
    { structure: 'Simple Cubic (SC)', n: '1', cn: '6', aInTermsOfR: 'a = 2R = 2.000R', touchDirection: 'Cube edge ⟨100⟩', apf: 'π / 6 ≈ 0.524 (52.4%)', examples: 'Po (Polonium)' },
    { structure: 'Body-Centered Cubic (BCC)', n: '2', cn: '8', aInTermsOfR: 'a = 4R / √3 ≈ 2.309R', touchDirection: 'Body diagonal ⟨111⟩', apf: 'π√3 / 8 ≈ 0.680 (68.0%)', examples: 'α-Fe, Cr, W, Mo, V' },
    { structure: 'Face-Centered Cubic (FCC)', n: '4', cn: '12', aInTermsOfR: 'a = 2√2R ≈ 2.828R', touchDirection: 'Face diagonal ⟨110⟩', apf: 'π√2 / 6 ≈ 0.740 (74.0%)', examples: 'Cu, Al, Ni, Ag, Au, γ-Fe' },
    { structure: 'Hexagonal Close-Packed (HCP)', n: '6', cn: '12', aInTermsOfR: 'a = 2R, c/a = 1.633', touchDirection: 'Basal edge ⟨112̄0⟩', apf: 'π√2 / 6 ≈ 0.740 (74.0%)', examples: 'Ti, Mg, Zn, Co, Zr' }
  ],

  workedExamples: [
    {
      id: 'pilot-ex-bcc-apf',
      title: 'Worked Example 1 (Zero-Skip Derivation): Prove that APF of BCC is 0.680',
      given: 'A Body-Centered Cubic (BCC) unit cell with hard spheres of atomic radius $R$.',
      find: '1) The effective number of atoms $n$, 2) The lattice parameter $a$ in terms of $R$, and 3) The exact and decimal Atomic Packing Factor (APF).',
      steps: [
        {
          stepNumber: 1,
          title: 'Count the effective number of atoms (n) inside one BCC cell',
          explanation: 'A BCC unit cell has $N_c = 8$ corner atoms, $N_f = 0$ face-centered atoms, and $N_i = 1$ body-centered atom.',
          tex: 'n = \\frac{N_c}{8} + \\frac{N_f}{2} + N_i = \\frac{8}{8} + \\frac{0}{2} + 1 = 1 + 0 + 1 = 2\\text{ atoms}'
        },
        {
          stepNumber: 2,
          title: 'Write the total volume of atoms (V_atoms) in terms of R',
          explanation: 'Each atom is a sphere of volume $\\frac{4}{3}\\pi R^3$. Multiply by $n = 2$ atoms:',
          tex: 'V_{\\text{atoms}} = n \\cdot \\left(\\frac{4}{3}\\pi R^3\\right) = 2 \\cdot \\frac{4}{3}\\pi R^3 = \\frac{8}{3}\\pi R^3'
        },
        {
          stepNumber: 3,
          title: 'Relate cube edge a to atomic radius R along the touching body diagonal',
          explanation: 'In BCC, spheres touch along the 3D cube body diagonal. By the 3D Pythagorean theorem, the body diagonal length is $\\sqrt{a^2 + a^2 + a^2} = \\sqrt{3a^2} = \\sqrt{3}a$. This diagonal spans one corner radius ($R$), one full center diameter ($2R$), and the opposite corner radius ($R$):',
          tex: '\\sqrt{3}a = R + 2R + R = 4R \\implies a = \\frac{4R}{\\sqrt{3}}'
        },
        {
          stepNumber: 4,
          title: 'Compute the cubic unit-cell volume V_c = a³ in terms of R',
          explanation: 'Cube both the numerator ($4^3 = 4 \\times 4 \\times 4 = 64$) and the denominator ($(\\sqrt{3})^3 = 3\\sqrt{3}$):',
          tex: 'V_c = a^3 = \\left(\\frac{4R}{\\sqrt{3}}\\right)^3 = \\frac{4^3 R^3}{(\\sqrt{3})^3} = \\frac{64 R^3}{3\\sqrt{3}}'
        },
        {
          stepNumber: 5,
          title: 'Divide V_atoms by V_c and cancel R³ step by step',
          explanation: 'Substitute $V_{\\text{atoms}} = \\frac{8}{3}\\pi R^3$ and $V_c = \\frac{64 R^3}{3\\sqrt{3}}$ into the APF definition:',
          tex: '\\text{APF} = \\frac{V_{\\text{atoms}}}{V_c} = \\frac{\\frac{8}{3}\\pi R^3}{\\frac{64 R^3}{3\\sqrt{3}}} = \\frac{8\\pi R^3}{3} \\times \\frac{3\\sqrt{3}}{64 R^3} = \\frac{8\\pi \\sqrt{3}}{64} = \\frac{\\pi\\sqrt{3}}{8}'
        },
        {
          stepNumber: 6,
          title: 'Evaluate the numerical value',
          explanation: 'Using $\\pi \\approx 3.14159265$ and $\\sqrt{3} \\approx 1.7320508$:',
          tex: '\\text{APF} = \\frac{3.14159265 \\times 1.7320508}{8} = \\frac{5.441398}{8} = 0.680175 \\approx 0.680\\text{ (or }68.0\\%)'
        }
      ],
      finalAnswer: 'n = 2 atoms, a = 4R/√3 ≈ 2.309R, and APF = π√3 / 8 ≈ 0.680 (68.0% occupied volume, 32.0% void space).',
      verificationCheck: 'Check: 0.680 lies strictly between Simple Cubic (0.524) and close-packed FCC/HCP (0.740), confirming our geometric derivation.'
    },
    {
      id: 'pilot-ex-fcc-cu',
      title: 'Worked Example 2 (Zero-Skip Calculation): FCC Copper Unit-Cell Volume from Atomic Radius',
      given: 'Copper (Cu) crystallizes in the Face-Centered Cubic (FCC) structure with an atomic radius of $R = 0.1278\\text{ nm}$.',
      find: '1) The lattice parameter $a$ in $\\text{nm}$ and $\\text{cm}$, and 2) The unit-cell volume $V_c$ in $\\text{nm}^3$ and $\\text{cm}^3$.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate the FCC lattice parameter a in nanometers (nm)',
          explanation: 'In FCC, atoms touch along the face diagonal ($\\sqrt{2}a = 4R$), so $a = 2\\sqrt{2}R$. Using $\\sqrt{2} \\approx 1.4142136$:',
          tex: 'a = 2\\sqrt{2}R = 2 \\times 1.4142136 \\times 0.1278\\text{ nm} = 2.828427 \\times 0.1278\\text{ nm} = 0.361473\\text{ nm} \\approx 0.3615\\text{ nm}'
        },
        {
          stepNumber: 2,
          title: 'Convert lattice parameter a from nm to cm',
          explanation: 'Since $1\\text{ nm} = 10^{-9}\\text{ m}$ and $1\\text{ cm} = 10^{-2}\\text{ m}$, we have $1\\text{ nm} = 10^{-7}\\text{ cm}$:',
          tex: 'a = 0.361473 \\times 10^{-7}\\text{ cm} = 3.61473 \\times 10^{-8}\\text{ cm}'
        },
        {
          stepNumber: 3,
          title: 'Compute the cubic unit-cell volume V_c = a³ in nm³ and cm³',
          explanation: 'Cube $a$ in both unit systems ($(10^{-8}\\text{ cm})^3 = 10^{-24}\\text{ cm}^3$):',
          tex: 'V_c = (0.361473\\text{ nm})^3 = 0.047231\\text{ nm}^3 = 4.7231 \\times 10^{-2}\\text{ nm}^3 = 4.7231 \\times 10^{-23}\\text{ cm}^3'
        }
      ],
      finalAnswer: 'a = 0.3615 nm = 3.615 × 10⁻⁸ cm, and V_c = 0.04723 nm³ = 4.723 × 10⁻²³ cm³.',
      verificationCheck: 'Unit check: 1 nm³ = (10⁻⁷ cm)³ = 10⁻²¹ cm³, so 0.04723 nm³ × 10⁻²¹ cm³/nm³ = 4.723 × 10⁻²³ cm³.'
    }
  ] as PilotWorkedExample[],

  interactiveExplorationGuide: [
    'Open the 3D Visual Learner step in this lesson and switch between SC, BCC, FCC, and HCP using the top pills.',
    'Toggle "Slice to cell" (Boundary Slicing) on FCC to see why the 8 corners become 1/8 octants and the 6 faces become 1/2 hemispheres.',
    'Toggle "Close-packed line" on BCC vs. FCC to verify visually that BCC spheres touch along the 3D body diagonal (√3 a = 4R) while FCC spheres touch along the 2D face diagonal (√2 a = 4R).',
    'Toggle "Coordination (CN)" to highlight the central reference atom and count its 6 (SC), 8 (BCC), or 12 (FCC/HCP) touching nearest neighbors.'
  ],

  pitfalls: [
    {
      mistake: 'Using a = 2R for BCC or FCC unit cells',
      whyItHappens: 'Students assume corner atoms always touch along the cube edge.',
      howToAvoid: 'Remember: corner atoms ONLY touch along the cube edge in Simple Cubic (SC). In BCC, the center atom pushes corners apart so contact is along the body diagonal (√3 a = 4R). In FCC, contact is along the face diagonal (√2 a = 4R).'
    },
    {
      mistake: 'Dividing HCP corner atoms by 8 instead of 6',
      whyItHappens: 'Habit from cubic unit cells where 8 cubes meet at a 90° corner.',
      howToAvoid: 'A regular hexagon has 120° interior angles, so 3 hexagons meet in a flat plane (360° / 120° = 3). Across 2 vertical layers, 6 hexagonal prisms share each corner: n_HCP = 12/6 + 2/2 + 3 = 6.'
    },
    {
      mistake: 'Converting nm³ to cm³ using 10⁻⁷ instead of (10⁻⁷)³ = 10⁻²¹',
      whyItHappens: 'Applying the linear conversion factor (1 nm = 10⁻⁷ cm) after cubing instead of before cubing.',
      howToAvoid: 'Always convert R or a into cm FIRST (e.g., R = 1.28 × 10⁻⁸ cm) BEFORE cubing to find V_c = a³ in cm³.'
    },
    {
      mistake: 'Confusing Coordination Number (CN) with effective atoms per cell (n)',
      whyItHappens: 'Both are integer counts associated with a crystal structure.',
      howToAvoid: 'n is how many whole spheres fit inside ONE unit cell box (1, 2, 4, 6). CN is how many neighboring spheres physically touch a single atom in the infinite lattice (6, 8, 12, 12).'
    }
  ] as PilotPitfallItem[],

  videoChoreographySpec: [
    {
      sceneNumber: 1,
      timeRange: '0:00 – 0:45',
      title: 'Why Metal Atoms Pack Like Hard Spheres',
      visual3DState: 'UnitCellScene in 3D isometric orbit showing metallic atoms settling into a repeating cubic lattice box with equilibrium spacing r₀ = 2R.',
      cameraAndMotion: 'Smooth dolly-in from 3×3×3 supercell to a single glowing unit cell; camera orbits 25° horizontally so depth is unmistakable.',
      onScreenMath: ['d_{\\text{touch}} = 2R'],
      tutorNarration: 'Welcome! Think of metal atoms as identical hard spheres pulled together by non-directional metallic bonds. To minimize energy, they pack into a repeating 3D box called a unit cell.'
    },
    {
      sceneNumber: 2,
      timeRange: '0:45 – 1:45',
      title: 'Slicing the Cell: Corner (1/8), Face (1/2) & Interior (1) Atoms',
      visual3DState: 'Animated slicing planes cut an FCC unit cell along all 6 faces, morphing full spheres into 8 corner octants (1/8) and 6 face hemispheres (1/2).',
      cameraAndMotion: 'Camera elevates to 35° pitch as the 8 corner octants briefly translate inward to assemble 1 complete sphere, followed by the 6 hemispheres assembling 3 complete spheres.',
      onScreenMath: [
        'n_{\\text{cubic}} = \\frac{N_c}{8} + \\frac{N_f}{2} + N_i',
        'n_{\\text{SC}} = 1, \\quad n_{\\text{BCC}} = 2, \\quad n_{\\text{FCC}} = 4, \\quad n_{\\text{HCP}} = 6'
      ],
      tutorNarration: 'When we slice a single unit cell out of the crystal, boundary atoms are shared with neighboring cells. Eight cubes share each corner, so a corner contributes one-eighth. Two cubes share each face, so a face contributes one-half.'
    },
    {
      sceneNumber: 3,
      timeRange: '1:45 – 3:00',
      title: 'Close-Packed Directions & Deriving a(R) in 3D',
      visual3DState: 'Side-by-side 3D comparison of SC (glowing edge rod), BCC (glowing body-diagonal rod through center atom), and FCC (glowing face-diagonal rod).',
      cameraAndMotion: 'Camera locks normal to the (110) diagonal plane in BCC to reveal the right triangle with base √2 a, height a, and hypotenuse √3 a = 4R.',
      onScreenMath: [
        '\\text{SC: } a = 2R',
        '\\text{BCC: } \\sqrt{3}a = 4R \\implies a = \\frac{4R}{\\sqrt{3}}',
        '\\text{FCC: } \\sqrt{2}a = 4R \\implies a = 2\\sqrt{2}R'
      ],
      tutorNarration: 'Here is the most important geometric insight in crystallography: spheres only touch along the close-packed direction. In BCC, that line is the 3D body diagonal of length square-root-of-3 times a, which spans four radii.'
    },
    {
      sceneNumber: 4,
      timeRange: '3:00 – 4:15',
      title: 'Atomic Packing Factor (APF) & Exam Pitfall Check',
      visual3DState: '3D unit cell fills occupied sphere volume in warm gold and interstitial void volume in translucent cool cyan, displaying live APF gauges (52.4% → 68.0% → 74.0%).',
      cameraAndMotion: 'Slow 180° orbit around FCC and HCP cells showing identical 74.0% packing efficiency and CN = 12 nearest neighbors.',
      onScreenMath: [
        '\\text{APF} = \\frac{n \\cdot \\frac{4}{3}\\pi R^3}{a^3}',
        '\\text{APF}_{\\text{SC}} = 0.524, \\quad \\text{APF}_{\\text{BCC}} = 0.680, \\quad \\text{APF}_{\\text{FCC/HCP}} = 0.740'
      ],
      tutorNarration: 'When we divide the sphere volume by the box volume a-cubed, the atomic radius R-cubed cancels out completely! That leaves a universal packing fraction: 52.4% for SC, 68% for BCC, and 74% for both FCC and HCP.'
    }
  ] as PilotVideoSceneSpec[]
};

