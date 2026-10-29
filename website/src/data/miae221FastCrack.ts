// Master Exam Solver & Fast-Crack Knowledge Base for MIAE 221
// Grounded in Callister Ch 1–6 and the exam blueprints by Drs. Mamoun Medraj & Martin Pugh
//
// Quick-revision rules for every strategy:
// - All maths is written as real LaTeX inside $...$ so it typesets as proper
//   mathematical notation (subscripts, fractions, symbols), never as code-style
//   variables like F_N or dE/dr. In this source file every LaTeX backslash is
//   doubled (\\frac) so the string that reaches KaTeX holds a single backslash.
// - howItWorks explains the idea in plain words: how it works, in 2-3 sentences.
// - tips are short exam tips for that subtopic.

export interface FastCrackStrategy {
  typeId: string;
  typeName: string;
  system: string;
  howToSpot: string;
  turboFormula: string;
  steps: string[];
  commonTrap: string;
  referenceExam: string;
  howItWorks: string;
  tips: string[];
}

// 15 strategies, one per MIAE 221 subtopic, each a quick revision: how it works, the formula, the moves, and the tips.
export const MIAE221_FAST_CRACK_TYPES: Record<string, FastCrackStrategy> = {
  miller_planes: {
    typeId: 'type_1_miller_planes',
    typeName: 'Type 1: Miller Indices of Planes (hkl) — Figure X',
    system: 'Cubic Crystallography (Callister Ch 3.8)',
    howToSpot: 'A shaded plane cutting through a unit cell. Look for the ticks where it crosses the axes (like 1/2 or 3/4) and check whether the plane touches the origin.',
    turboFormula: 'Intercepts $p, q, r$ $\\to$ reciprocals $\\frac{1}{p}, \\frac{1}{q}, \\frac{1}{r}$ $\\to$ smallest whole numbers $\\to (hkl)$',
    steps: [
      'Move the origin if the plane passes through $(0, 0, 0)$: shift it by $+1$ along one axis so every intercept can be read. A negative intercept gets a bar on top, like $(\\bar{1}20)$, never a minus sign.',
      'Read the three intercepts $p, q, r$ where the plane cuts the $x$, $y$ and $z$ axes. A plane parallel to an axis never cuts it, so that intercept is $\\infty$.',
      'Flip each intercept: take the reciprocal $\\frac{1}{p}, \\frac{1}{q}, \\frac{1}{r}$. Parallel gives $\\frac{1}{\\infty} = 0$.',
      'Clear fractions: multiply through by the smallest number that leaves whole numbers only.',
      'Write the answer in round brackets: $(hkl)$. Square brackets $[uvw]$ mean a direction, and angle brackets $\\langle uvw \\rangle$ mean a family. Planes always get round brackets.'
    ],
    commonTrap: 'Writing a negative index with a minus sign, like $(-1, 2, 0)$, instead of a bar, like $(\\bar{1}20)$. Or writing $\\infty$ as an index instead of $0$.',
    referenceExam: '2017 Sample Q1–Q3 · W26 Midterm Q3–Q4 · F24 Midterm Q13–Q14',
    howItWorks: 'A plane is named by where it cuts the three axes of the unit cell. Read the three cut points, flip each one into a fraction, and clear the fractions to whole numbers. That triple of whole numbers is the plane name, and the same plane shifted anywhere parallel to itself keeps the same name.',
    tips: [
      'If the plane touches the origin, move the origin first. Everything else follows from clean intercepts.',
      'Parallel to an axis always means $0$ in that slot. It is the fastest mark on the question.',
      'Check the brackets last: round brackets for a plane, square brackets for a direction.',
      'A bar over a number means negative. Read $(\\bar{1}20)$ as "bar one, two, zero".'
    ]
  },
  miller_directions: {
    typeId: 'type_1b_miller_directions',
    typeName: 'Type 1B: Miller Indices of Directions [uvw]',
    system: 'Cubic Vector Geometry (Callister Ch 3.8)',
    howToSpot: 'An arrow inside a unit cell, running from a tail point to a head point.',
    turboFormula: '$\\Delta x = x_2 - x_1$, $\\Delta y = y_2 - y_1$, $\\Delta z = z_2 - z_1$ $\\to$ smallest whole numbers $\\to [uvw]$',
    steps: [
      'Read the tail coordinates $(x_1, y_1, z_1)$ and the head coordinates $(x_2, y_2, z_2)$.',
      'Subtract tail from head on each axis: head minus tail, never the other way round.',
      'Clear fractions to the smallest set of whole numbers.',
      'Write the answer in square brackets: $[uvw]$. In a cubic cell, the direction $[hkl]$ is perpendicular ($\\perp$) to the plane $(hkl)$ with the same numbers.'
    ],
    commonTrap: 'Subtracting the wrong way round. Tail minus head points the arrow backwards.',
    referenceExam: 'W26 Midterm Q1–Q2 · F24 Midterm Q13 · 2017 Sample Q22',
    howItWorks: 'A direction is just the arrow from where it starts to where it ends. Subtract the start point from the end point on each axis, shrink the result to the smallest whole numbers, and that is the direction name.',
    tips: [
      'Head minus tail. Say it as you write it and the sign takes care of itself.',
      'Fractions mean you forgot to clear them. Multiply until every number is whole.',
      'Same numbers, different brackets: $[uvw]$ is a direction, $(hkl)$ is a plane. In cubic crystals they are perpendicular.'
    ]
  },
  density_unit_cells: {
    typeId: 'type_2_density',
    typeName: 'Type 2: Unit Cell Geometry & Theoretical Density',
    system: 'BCC, FCC & HCP Crystal Structures (Callister Ch 3.4–3.5)',
    howToSpot: 'Names a crystal structure (FCC or BCC), gives an atomic radius $R$ and an atomic weight $A$, and asks for the density $\\rho$ or the lattice parameter $a$.',
    turboFormula: '$\\rho = \\frac{nA}{V_c N_A}$, $V_c = a^3$, $N_A = 6.022 \\times 10^{23}$',
    steps: [
      'FCC (copper, aluminium, nickel): $n = 4$ atoms per cell, $a = 2\\sqrt{2}\\,R$, packing factor $0.74$, coordination number $12$. Closest-packed direction: $\\langle 110 \\rangle$.',
      'BCC (iron, tungsten, chromium): $n = 2$ atoms per cell, $a = \\frac{4R}{\\sqrt{3}}$, packing factor $0.68$, coordination number $8$. Closest-packed direction: $\\langle 111 \\rangle$.',
      'HCP (titanium, magnesium, zinc): $n = 6$ atoms per cell, $a = 2R$, $c/a = 1.633$, packing factor $0.74$, coordination number $12$.',
      'Mind the units: $1$ nm $= 10^{-7}$ cm and $1$ angstrom $= 10^{-8}$ cm. Density in g/cm$^3$ is the same number as Mg/m$^3$.'
    ],
    commonTrap: 'Mixing up FCC ($n = 4$, $a = 2\\sqrt{2}R$) with BCC ($n = 2$, $a = 4R/\\sqrt{3}$), or forgetting to cube $a$ in $V_c = a^3$.',
    referenceExam: '2017 Sample Q4, Q25, Q30 · W26 Midterm Q5 · F24 Midterm Q4',
    howItWorks: 'Density is mass over volume, counted one unit cell at a time. Count how many atoms the cell owns, multiply by the mass of one atom, and divide by the volume of the cell. The cell shape tells you both the atom count and how the edge length relates to the atomic radius.',
    tips: [
      'Learn the two pairs cold: FCC is $4$ atoms with $a = 2\\sqrt{2}R$; BCC is $2$ atoms with $a = 4R/\\sqrt{3}$.',
      'Convert nanometres to centimetres before you divide, not after.',
      'If your density comes out near water ($1$ g/cm$^3$) for a metal, a unit went wrong. Metals sit roughly between $2$ and $20$ g/cm$^3$.'
    ]
  },
  linear_planar_density: {
    typeId: 'type_3_linear_planar',
    typeName: 'Type 3: Linear Density (LD) & Planar Density (PD)',
    system: 'Crystallographic Packing (Callister Ch 3.11)',
    howToSpot: 'Asks for the linear density along a direction like $[110]$, or the planar density of a plane like $(100)$, often "in terms of $R$".',
    turboFormula: '$LD = \\frac{N}{L}$ (atoms centred on the line, over the line length)  |  $PD = \\frac{N}{A}$ (atoms centred on the plane, over the plane area)',
    steps: [
      'BCC $[110]$: the line is the face diagonal, $L = \\sqrt{2}\\,a$. The body-centre atom is NOT on this line, so only $N = 1$ atom counts and $LD = \\frac{1}{\\sqrt{2}\\,a}$.',
      'BCC $[111]$: the close-packed body diagonal. $N = 2$ atoms over $L = \\sqrt{3}\\,a$, so $LD = \\frac{2}{\\sqrt{3}\\,a} = \\frac{1}{2R}$.',
      'FCC $[110]$: the close-packed face diagonal. $N = 2$ atoms over $L = \\sqrt{2}\\,a$, so $LD = \\frac{2}{\\sqrt{2}\\,a} = \\frac{1}{2R}$.',
      'FCC $(100)$ plane: area $A = a^2 = 8R^2$. The atoms on the face add to $N = 2$ (four corner quarters plus the face centre), so $PD = \\frac{2}{8R^2} = \\frac{1}{4R^2}$.'
    ],
    commonTrap: 'Counting the body-centre atom on the BCC $[110]$ line. That line runs across the face and misses the centre atom completely. Only $[111]$ goes through it.',
    referenceExam: '2017 Sample Q4 · W26 Midterm Q6 · Tutorial Problem Set #1',
    howItWorks: 'Density here means how crowded the atoms are along a line or on a plane. Count only the atoms whose centres sit exactly on that line or plane, then divide by the length or the area. Corner atoms count as fractions, because each corner is shared.',
    tips: [
      'Only centred atoms count. An atom the line just touches at its edge does not count.',
      'Close-packed directions always simplify to $\\frac{1}{2R}$. If yours does not, recheck the atom count.',
      'Draw the face and mark the atoms. The picture settles the count faster than memory.'
    ]
  },
  xrd_bragg: {
    typeId: 'type_4_xrd',
    typeName: 'Type 4: XRD & Bragg\'s Law Selection Rules',
    system: 'X-Ray Diffraction & Crystal Structure Determination (Callister Ch 3.16)',
    howToSpot: 'Gives a diffractometer angle $2\\theta$, a wavelength $\\lambda$ (often $0.0711$ nm or $0.154$ nm), and a plane $(hkl)$.',
    turboFormula: '$n\\lambda = 2\\,d_{hkl}\\sin\\theta$,  $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$',
    steps: [
      'Halve the given angle first: the question gives $2\\theta$ (for example $36.12^\\circ$), so $\\theta = 18.06^\\circ$ before you take the sine.',
      'Find the plane spacing: $d_{hkl} = \\frac{\\lambda}{2\\sin\\theta}$ (with $n = 1$).',
      'Find the lattice constant: $a = d_{hkl} \\cdot \\sqrt{h^2 + k^2 + l^2}$.',
      'Turn $a$ into an atomic radius: FCC uses $R = \\frac{a}{2\\sqrt{2}}$ and BCC uses $R = \\frac{a\\sqrt{3}}{4}$.',
      'Selection rules: BCC only shows planes with $h + k + l$ even. FCC only shows planes whose indices are all odd or all even.'
    ],
    commonTrap: 'Putting $2\\theta$ straight into $\\sin(2\\theta)$. Bragg\'s law needs $\\theta$, which is half the number on the diffractometer.',
    referenceExam: 'W26 Midterm Q7 · 2017 Sample Final Q1 · Callister Ch 3.16',
    howItWorks: 'X-rays bounce off crystal planes and add up only when the extra distance travelled is a whole number of wavelengths. That condition is Bragg\'s law, and it links the angle you measure to the spacing between planes, which links back to the size of the unit cell.',
    tips: [
      'See $2\\theta$ on the page? Halve it before anything else. It is the single most common lost mark here.',
      'If a reflection breaks the selection rule, it simply does not appear. Cross it out and move on.',
      'Keep $\\lambda$ and $d$ in the same units. Nanometres throughout is the safest habit.'
    ]
  },
  stress_strain_curve: {
    typeId: 'type_5_stress_strain',
    typeName: 'Type 5: Figure 1 Decoder — Stress-Strain Curve Landmarks',
    system: 'Tensile Mechanical Properties (Callister Ch 6.6–6.8)',
    howToSpot: 'A stress-strain graph with labelled points (O, A, B, C, D, E, F) and a dashed unloading line.',
    turboFormula: 'Slope of the straight part $= E$  |  Point B $= \\sigma_y$  |  Peak D $=$ UTS, where necking starts  |  Unloading line $\\parallel$ to OA',
    steps: [
      'Modulus $E$ (stiffness): the slope of the first straight section, $E = \\frac{\\Delta\\sigma}{\\Delta\\epsilon}$, read at point A.',
      'Yield strength $\\sigma_y$: where the curve leaves the straight line, at point B (or the $0.2\\%$ offset point).',
      'Necking starts exactly at the top of the curve, peak D, which is the ultimate tensile strength (UTS).',
      'Uniform plastic flow runs from yield (B) to the peak (D). After the peak, deformation localises in the neck, from D to fracture (F).',
      'Unloading from C drops parallel to OA and meets the strain axis at H. The leftover strain $OH$ is permanent; the recovered elastic strain is $HI$.',
      'Modulus of resilience $U_r$: the area of the elastic triangle, $U_r \\approx \\frac{\\sigma_y^2}{2E}$.',
      'Toughness: the whole area under the curve up to fracture.'
    ],
    commonTrap: 'Thinking necking starts after the peak. Necking starts at the peak itself, the moment the curve turns down.',
    referenceExam: '2017 Sample Q7–Q16 (10-question sequence) · W26 Midterm Q16–Q20 (5-question sequence)',
    howItWorks: 'Pull a metal and it first stretches like a spring, then gives way and flows. The curve records that story: the straight rise is elastic, the bend is yielding, the top is the strongest it ever gets, and the fall is the neck thinning down to fracture. Every landmark on the graph is one property.',
    tips: [
      'Name each point before you answer anything: A is the end of the straight line, B is yielding, D is the peak.',
      'Any unloading line is parallel to the first straight section. Use that to read permanent strain.',
      'Area under the curve means energy. Small triangle means resilience; whole curve means toughness.'
    ]
  },
  tensile_calculations: {
    typeId: 'type_6_tensile_calc',
    typeName: 'Type 6: Tensile Calculations & Hooke\'s Law Rod Sizing',
    system: 'Elastic & Plastic Deformation (Callister Ch 6.3–6.6)',
    howToSpot: 'Gives a load $F$, a starting length $L_0$, an allowed stretch $\\Delta L$, a modulus $E$ and a yield strength $\\sigma_y$, and asks for a diameter $d$ or a ductility.',
    turboFormula: '$d = \\sqrt{\\frac{4FL_0}{\\pi E \\Delta L}}$  $\\to$  check $\\sigma = \\frac{4F}{\\pi d^2} < \\sigma_y$',
    steps: [
      'Start from Hooke\'s law: $\\sigma = E\\epsilon$, with $\\sigma = \\frac{F}{A}$ and $\\epsilon = \\frac{\\Delta L}{L_0}$.',
      'With a round bar $A = \\frac{\\pi d^2}{4}$, solve for the smallest diameter: $d = \\sqrt{\\frac{4FL_0}{\\pi E \\Delta L}}$.',
      'Check yielding: $\\sigma = \\frac{4F}{\\pi d^2}$ must stay at or below $\\sigma_y$, or the bar would stretch permanently.',
      'Elongation ductility: $\\%EL = \\frac{L_f - L_0}{L_0} \\times 100\\%$.',
      'Reduction of area: $\\%RA = \\left[1 - \\left(\\frac{d_f}{d_0}\\right)^2\\right] \\times 100\\%$. Diameters are squared because area goes as diameter squared.'
    ],
    commonTrap: 'Forgetting to square the diameters in $\\%RA$. Using $\\frac{d_0 - d_f}{d_0}$ answers a different question and is wrong.',
    referenceExam: '2017 Sample Q18, Q19 · W26 Midterm Q18, Q20 · F24 Midterm Q17',
    howItWorks: 'Hooke\'s law says stretch is proportional to load, with the modulus as the constant. Rearranged, it tells you how fat a rod must be so that a given load only stretches it by the amount you are allowed. Then you check the stress never reaches yielding, so the stretch stays elastic.',
    tips: [
      'Keep $F$, $L_0$ and $\\Delta L$ in matching units before you touch the calculator.',
      'The yield check is part of the answer, not an extra. A diameter that yields is a wrong diameter.',
      'See $\\%RA$? Square the diameters first, then subtract from one.'
    ]
  },
  diffusion_fick: {
    typeId: 'type_7_diffusion',
    typeName: 'Type 7: Diffusion (Fick\'s Laws & Arrhenius D(T))',
    system: 'Mass Transport in Solids (Callister Ch 5)',
    howToSpot: 'Mentions a diffusion coefficient $D$, an activation energy $Q_d$, a temperature $T$, a flux $J$, or a carburising depth $x$.',
    turboFormula: '$D = D_0\\,e^{-Q_d/RT}$  |  $J = -D\\,\\frac{\\Delta C}{\\Delta x}$  |  $\\frac{x_1^2}{D_1 t_1} = \\frac{x_2^2}{D_2 t_2}$',
    steps: [
      'Temperature goes in Kelvin: add $273.15$ to the Celsius value. And $Q_d$ in kJ/mol must become J/mol (multiply by $1000$) before it meets $RT$.',
      'Gas constant $R = 8.314$ J/(mol·K).',
      'Steady-state flux (Fick\'s first law): $J = \\frac{M}{A\\,t} = -D\\,\\frac{\\Delta C}{\\Delta x}$. The minus sign says atoms flow from high concentration to low.',
      'Depth scaling (non-steady state): for the same surface and core concentrations, $\\frac{x_1^2}{D_1 t_1} = \\frac{x_2^2}{D_2 t_2}$. Double the depth needs four times the $D \\times t$.',
      'Interdiffusion (a copper-nickel couple): both species move at once, each down its own concentration gradient.'
    ],
    commonTrap: 'Leaving the temperature in Celsius, or forgetting the $\\times 1000$ on $Q_d$. Either one wrecks the exponential.',
    referenceExam: '2017 Sample Q5, Q6, Q24, Q26, Q29 · W26 Midterm Q12, Q13, Q37',
    howItWorks: 'Diffusion is atoms hopping into neighbouring empty sites, faster when hot. The hotter it is, the more atoms have the energy to jump, so the diffusion coefficient grows exponentially with temperature. Fick\'s laws turn that into a flow rate and a penetration depth.',
    tips: [
      'Kelvin first, kJ to J second, then calculate. Do those two conversions before anything else.',
      'Depth goes as the square root of time. Twice as deep means four times as long.',
      'The minus sign in Fick\'s law is the physics: flow runs downhill in concentration.'
    ]
  },
  dislocations_slip: {
    typeId: 'type_8_dislocations_slip',
    typeName: 'Type 8: Dislocations & Schmid\'s Law',
    system: 'Slip Mechanics & Plasticity (Callister Ch 7.1–7.4)',
    howToSpot: 'Asks about resolved shear stress $\\tau_R$, the angles $\\phi$ and $\\lambda$, a critical resolved shear stress, or which slip system operates.',
    turboFormula: '$\\tau_R = \\sigma \\cos\\phi \\cos\\lambda$  |  largest Schmid factor $m = \\cos\\phi\\cos\\lambda = 0.5$ at $\\phi = \\lambda = 45^\\circ$',
    steps: [
      "Schmid's law: slip starts when the resolved shear stress $\\tau_R$ reaches the critical value $\\tau_{CRSS}$.",
      'Easiest yielding is at $m = 0.5$, so the lowest tensile stress that causes yielding is $\\sigma_y = 2\\,\\tau_{CRSS}$.',
      'Slip picks the most close-packed plane and the most close-packed direction on it, because that path needs the least energy.',
      'Burgers vector $b$: for an edge dislocation $b$ is perpendicular ($\\perp$) to the dislocation line; for a screw dislocation $b$ is parallel ($\\parallel$) to it.',
      'Slip systems: FCC has $12$ ($\\{111\\}\\langle 110 \\rangle$), BCC has $12$ ($\\{110\\}\\langle 111 \\rangle$), HCP has only $3$ ($(0001)\\langle 11\\bar{2}0 \\rangle$).',
      'Grain boundaries and microscopy: boundaries are high-energy planar defects, so etching attacks them first and they look dark under the microscope. Smaller grains mean more boundaries and a stronger metal.'
    ],
    commonTrap: 'Expecting dislocations to glide easily in ionic crystals. They do not: moving a dislocation would push like charges together, so ionic solids are brittle instead.',
    referenceExam: '2017 Sample Q21, Q27, Q31 · W26 Midterm Q10, Q27, Q28',
    howItWorks: 'Metals bend because line defects called dislocations glide through the crystal, one plane of atoms slipping over the next. Only the part of the pull that acts along the slip direction counts, and Schmid\'s law works out exactly how much that is. More slip systems means easier bending.',
    tips: [
      '$45^\\circ$ and $45^\\circ$ is the magic pair: the Schmid factor peaks at $0.5$ there.',
      'Edge or screw? Ask where $b$ points relative to the line: across it is edge, along it is screw.',
      'Few slip systems means brittle behaviour. That is why HCP metals are harder to form than FCC ones.'
    ]
  },
  crystal_types: {
    typeId: 'type_10_crystal_types',
    typeName: 'Type 10: Crystalline vs Amorphous & Polymorphism',
    system: 'Crystal Structures & Non-Crystalline Solids (Callister Ch 3.3, 3.13–3.14)',
    howToSpot: 'Asks whether a solid is crystalline or amorphous, single crystal or polycrystal, or names polymorphs or allotropes (diamond and graphite, or the two forms of iron).',
    turboFormula: 'Crystalline $=$ long-range order  ·  Amorphous $=$ short-range order only  ·  Polymorphism $=$ same chemistry, different crystal structure',
    steps: [
      'Single crystal: one continuous lattice all the way through, so properties depend on direction (anisotropic).',
      'Polycrystal: many small grains, each a tiny crystal, separated by grain boundaries. The random grain orientations average out, so properties look the same in every direction.',
      'Amorphous (glass, many polymers): no long-range order and no sharp melting point. It softens gradually over a glass-transition range around $T_g$ instead of melting at one temperature.',
      'Polymorphism / allotropy: the SAME chemistry with a DIFFERENT structure. Carbon as diamond (hard, three-dimensional covalent network) versus graphite (soft, slippery layers). Iron as BCC ferrite versus FCC austenite.',
      'Grain boundaries are high-energy planar defects that block dislocations, so smaller grains make a stronger metal.'
    ],
    commonTrap: 'Calling glass crystalline just because it is a solid. Glass has no long-range order. And polymorphs share chemistry: they differ in structure, not in what they are made of.',
    referenceExam: 'W26 Midterm · F24 Midterm · A25 Midterm',
    howItWorks: 'Order is the whole story. Crystals repeat the same pattern over long distances; amorphous solids only have local order. Whether a solid is one crystal, many grains, or no order at all decides how it melts, how it breaks, and whether its properties change with direction.',
    tips: [
      'No sharp melting point means amorphous. A range means glass transition, not melting.',
      'Same chemistry plus different structure is the definition of polymorphism. Check the chemistry first.',
      'Single crystal means direction matters. Polycrystal means it mostly does not.'
    ]
  },
  point_defects: {
    typeId: 'type_11_point_defects',
    typeName: 'Type 11: Point Defects & Vacancy Concentration',
    system: 'Imperfections in Solids (Callister Ch 4.2–4.3)',
    howToSpot: 'Names a vacancy, a self-interstitial, a Schottky or Frenkel defect, or asks "how many vacancies per cubic metre at temperature $T$".',
    turboFormula: '$N_v = N\\,e^{-Q_v/kT}$  |  $k = 8.62 \\times 10^{-5}$ eV/(atom·K)  |  $T$ in Kelvin',
    steps: [
      'Vacancy: one missing atom. The most common point defect, and its number grows exponentially as temperature rises.',
      'Self-interstitial: an extra atom of the same type squeezed between lattice sites. Rare, because squeezing it in costs a lot of distortion energy.',
      'Schottky defect (ceramics): a cation vacancy plus an anion vacancy together, so the crystal stays electrically neutral.',
      'Frenkel defect (ceramics): a cation vacancy plus a cation interstitial together, also neutral overall.',
      'Number of sites: $N = \\frac{n\\,\\rho\\,N_A}{A}$ for a metal, or work out atoms per cubic metre from the density $\\rho$ and atomic weight $A$.',
      'Units: $T$ MUST be in Kelvin. Use $k$ in eV/K when $Q_v$ is in eV per atom, or $R = 8.314$ J/(mol·K) when $Q_v$ is in J per mole. Never mix the two.'
    ],
    commonTrap: 'Using Celsius in the exponential, or mixing eV per atom (with $k$) and J per mole (with $R$).',
    referenceExam: 'W26 Midterm · F24 Midterm · A25 Midterm',
    howItWorks: 'A perfect crystal costs energy to keep perfect. At any temperature above absolute zero, some atoms leave their sites and create vacancies, and the hotter it gets, the more there are. The number follows an exponential law: a small temperature rise makes a big difference in vacancy count.',
    tips: [
      'Kelvin, always. Then check your energy units match your constant: eV goes with $k$, joules per mole go with $R$.',
      'Schottky is a vacancy pair; Frenkel is a vacancy plus an interstitial. Both keep the charge balanced.',
      'Vacancies rise with temperature, so the highest temperature in the question gives the most vacancies.'
    ]
  },
  electron_config: {
    typeId: 'type_12_electron_config',
    typeName: 'Type 12: Electron Configuration & Periodic Groups',
    system: 'Atomic Structure (Callister Ch 2.2–2.3)',
    howToSpot: 'Asks for an electron configuration, the number of valence electrons, or which group or period an element sits in.',
    turboFormula: 'Fill order: $1s$ $2s$ $2p$ $3s$ $3p$ $4s$ $3d$ $4p$ $5s$ $4d$ $5p$ $6s$ $4f$ $5d$ $6p$ $7s$ $5f$ $6d$ $7p$  |  Valence $=$ outermost $s + p$ electrons',
    steps: [
      'Aufbau order: fill $4s$ BEFORE $3d$ (and $5s$ before $4d$). The $s$ level of the next shell sits lower in energy than the $d$ level.',
      'Valence electrons: for main-group elements the group number is the valence count (Group 1 has $1$, Group 17 has $7$).',
      'Stable octet: a full $s^2p^6$ outer shell is the stable arrangement, which is why the noble gases barely react.',
      'Ions: cations lose valence electrons first. Transition metals lose their $4s$ electrons BEFORE their $3d$ electrons.',
      'Trends: atoms get smaller across a period and larger down a group. Electronegativity climbs towards the top right, peaking at fluorine.'
    ],
    commonTrap: 'Writing $3d$ before $4s$, or counting $d$ electrons as valence electrons for main-group elements.',
    referenceExam: 'A25 Midterm · W26 Midterm',
    howItWorks: 'Electrons fill shells in order of energy, not in order of shell number, which is why $4s$ fills before $3d$. The electrons in the outermost shell decide how an element bonds, and the periodic table is arranged so that elements in the same column share the same outer-shell count.',
    tips: [
      'Write the fill order out and cross levels off as you fill. Guessing the order from memory is where marks go.',
      'Group number equals valence electrons for main groups. It is the fastest check on the table.',
      'Forming a cation? Take the $4s$ electrons off a transition metal before touching the $3d$.'
    ]
  },
  solid_solutions: {
    typeId: 'type_13_solid_solutions',
    typeName: 'Type 13: Impurities & Solid Solutions',
    system: 'Imperfections in Solids (Callister Ch 4.4–4.5)',
    howToSpot: 'Asks about substitutional versus interstitial impurities, an alloy composition in wt% or at%, or the Hume-Rothery rules.',
    turboFormula: 'Substitutional: solute REPLACES a solvent atom  ·  Interstitial: solute squeezes BETWEEN solvent atoms  ·  Hume-Rothery: size within $15\\%$, same structure, similar electronegativity, same valence',
    steps: [
      'Substitutional: the solute atom takes a lattice site. It needs a similar atomic radius (within about $15\\%$) to dissolve well.',
      'Interstitial: only TINY atoms fit in the gaps between solvent atoms: hydrogen, carbon, nitrogen, oxygen and boron. Carbon in iron is the classic case.',
      'Hume-Rothery rules for wide solubility: atomic size within $15\\%$, same crystal structure, similar electronegativity, same valence.',
      'Composition: wt% and at% are different. To convert, divide each wt% by its atomic weight to get moles, then take the share of total moles.',
      'Strengthening: impurity atoms distort the lattice and pin dislocations, which is why an alloy is stronger than the pure metal.'
    ],
    commonTrap: 'Calling a large atom an interstitial impurity. Big atoms substitute; only tiny atoms fit in the gaps.',
    referenceExam: 'A25 Midterm · W26 Midterm',
    howItWorks: 'An alloy is a solvent crystal with guest atoms mixed in. Guests can either take a host atom\'s place or squeeze into the gaps, and the size of the guest decides which. When the guest fits well by the Hume-Rothery rules, the two metals dissolve into each other freely; when it does not, solubility stays small.',
    tips: [
      'Size decides the site: within $15\\%$ means substitutional; tiny means interstitial. Big never means interstitial.',
      'wt% is by mass, at% is by count. Convert through moles, never directly.',
      'All four Hume-Rothery rules together mean wide solubility. One broken rule shrinks it.'
    ]
  },
  moles_atoms: {
    typeId: 'type_14_moles_atoms',
    typeName: 'Type 14: Moles, Atoms & Mass',
    system: 'Atomic Mass & the Mole (Callister Ch 2.1)',
    howToSpot: 'Asks "how many atoms" or "how many moles", or any conversion between grams and atoms using an atomic weight.',
    turboFormula: '$n = \\frac{m}{A}$ (moles)  |  $N = n \\cdot N_A$ (atoms)  |  $N_A = 6.022 \\times 10^{23}$ atoms/mol',
    steps: [
      'Atomic weight $A$: grams per mole of that element, read straight off the periodic table.',
      'Moles: $n = \\frac{m}{A}$. The mass $m$ MUST be in grams before you divide.',
      'Atoms: $N = n \\times N_A$, with $N_A = 6.022 \\times 10^{23}$ atoms per mole.',
      'Atomic mass unit: $1$ amu $= \\frac{1}{N_A}$ grams $= 1.66 \\times 10^{-24}$ g.',
      'Compounds: use the formula weight, the sum of the atomic weights in the formula. For example $Al_2O_3$ is $2(27) + 3(16) = 102$ g/mol.'
    ],
    commonTrap: "Forgetting kilograms to grams ($\\times 1000$) before dividing, or dividing by Avogadro's number instead of multiplying when going from moles to atoms.",
    referenceExam: 'Finals bank · Tutorial problem sets',
    howItWorks: 'A mole is just a counting unit for atoms: one mole is Avogadro\'s number of them. The atomic weight tells you how many grams one mole weighs, so grams divided by atomic weight gives moles, and moles times Avogadro\'s number gives the atom count.',
    tips: [
      'Grams first. Convert kilograms to grams before any division.',
      'Moles to atoms means multiply by Avogadro. Atoms to moles means divide.',
      'For a compound, add up the formula weight before you start, and double-check the subscripts.'
    ]
  },
  potential_well: {
    typeId: 'type_9_potential_well',
    typeName: 'Type 9: Potential Well & Bonding Correlations',
    system: 'Atomic Bonding & Thermal Properties (Callister Ch 2.5–2.6)',
    howToSpot: 'Shows a net force $F_N$ against separation $r$ curve, or a potential energy $E_N$ against separation curve.',
    turboFormula: '$F_N = F_A + F_R = 0$ at $r = r_0$ (equilibrium)  |  $\\frac{dE}{dr} = 0$ at the energy minimum',
    steps: [
      'Equilibrium spacing $r_0$: find where the net force curve CROSSES ZERO, or where the potential energy sits at its MINIMUM. Same point, two pictures.',
      'Well depth $E_0$: a deeper well means stronger bonding, which means a higher melting temperature $T_m$ and a higher elastic modulus $E$.',
      'Well asymmetry: a more lopsided (skewed) well means a higher linear thermal expansion coefficient $\\alpha_L$. Atoms rattle further apart than together as they heat up.',
      'Bonding types: $sp^3$ hybrid orbitals form directional COVALENT bonds, not ionic ones. The three primary bonds are ionic, covalent and metallic.',
      'Percent ionic character: $\\left[1 - e^{-0.25(X_A - X_B)^2}\\right] \\times 100\\%$, where $X_A$ and $X_B$ are the electronegativities. A bigger difference means more ionic; a small difference means covalent (or metallic for two metals).'
    ],
    commonTrap: 'Hunting for a minimum on the force curve. Equilibrium force is ZERO; equilibrium energy is the MINIMUM. The minimum belongs to the energy curve.',
    referenceExam: '2017 Sample Q17, Q23, Q37 · W26 Midterm Q11, Q14, Q39 · F24 Midterm Q6',
    howItWorks: 'Two atoms attract at a distance and repel up close. Where the two balance, the pair sits at its favourite spacing, and the energy curve dips into a well there. The depth of the well sets how hard the bond is to break, which shows up as melting temperature and stiffness. The lopsidedness of the well sets how much the solid expands when heated.',
    tips: [
      'Force curve? Read the zero crossing. Energy curve? Read the bottom of the well. Same answer, different picture.',
      'Deeper well, higher $T_m$, higher $E$. The three always move together.',
      'For percent ionic, the electronegativity difference is squared, so the sign never matters. Big gap means ionic.'
    ]
  }
};

// Match a question to its Fast-Crack Strategy.
// Topic-first: every question carries the subtopic it belongs to, and each
// subtopic maps to exactly one strategy, so the advice is specific to the
// question instead of one generic card for the whole course. Prompt keywords
// are only a fallback for questions whose topic label is unknown, plus a
// calc-vs-curve refinement inside the two tensile topics.
const normTopic = (s: string) =>
  s
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/['']/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

function strategyForTopic(topic: string): FastCrackStrategy | null {
  const t = normTopic(topic);
  if (!t) return null;
  if (t.includes('miller') && t.includes('plane')) return MIAE221_FAST_CRACK_TYPES.miller_planes;
  if (t.includes('miller') && t.includes('direction')) return MIAE221_FAST_CRACK_TYPES.miller_directions;
  if (t.includes('theoretical density') || t.includes('unit cell')) return MIAE221_FAST_CRACK_TYPES.density_unit_cells;
  if ((t.includes('linear') && t.includes('planar')) || t.includes('close packing')) return MIAE221_FAST_CRACK_TYPES.linear_planar_density;
  if (t.includes('bragg') || t.includes('x-ray') || t.includes('diffraction')) return MIAE221_FAST_CRACK_TYPES.xrd_bragg;
  if (t.includes('fick') || t.includes('diffusion') || t.includes('carburiz')) return MIAE221_FAST_CRACK_TYPES.diffusion_fick;
  if (t.includes('dislocation') || t.includes('slip') || t.includes('grain boundar') || t.includes('microscopy')) return MIAE221_FAST_CRACK_TYPES.dislocations_slip;
  if (t.includes('point defect') || t.includes('vacancy')) return MIAE221_FAST_CRACK_TYPES.point_defects;
  if (t.includes('electron configuration') || t.includes('periodic')) return MIAE221_FAST_CRACK_TYPES.electron_config;
  if (t.includes('solid solution') || t.includes('impurit')) return MIAE221_FAST_CRACK_TYPES.solid_solutions;
  if (t.includes('moles') || t.includes('atoms & mass') || t.includes('atoms and mass')) return MIAE221_FAST_CRACK_TYPES.moles_atoms;
  if (t.includes('crystalline vs amorphous') || t.includes('polymorphism') || t.includes('polycrystal')) return MIAE221_FAST_CRACK_TYPES.crystal_types;
  if ((t.includes('force') && t.includes('energy')) || t.includes('bond')) return MIAE221_FAST_CRACK_TYPES.potential_well;
  if (t.includes('tensile curve')) return MIAE221_FAST_CRACK_TYPES.stress_strain_curve;
  if (t.includes('hooke') || t.includes('stress, strain')) return MIAE221_FAST_CRACK_TYPES.tensile_calculations;
  return null;
}

const CALC_SIGNALS = /%el|%ra|reduction (of|in) area|gauge length|elongation|diameter|cylindrical (rod|specimen)|cross-section|cross section|minimum diameter|applied (force|load)|how much (force|load)/i;
const CURVE_SIGNALS = /stress-strain|stress–strain|necking|resilience|toughness|unloading|yield point|ultimate tensile|landmark/i;

export function detectFastCrackType(questionText: string, topic?: string, id?: string): FastCrackStrategy {
  const topicStrategy = strategyForTopic(topic ?? '');

  // The two tensile topics each hold both curve-reading and calculation
  // questions: let the prompt decide which side of the topic this one is.
  if (topicStrategy === MIAE221_FAST_CRACK_TYPES.stress_strain_curve) {
    return CALC_SIGNALS.test(questionText) && !CURVE_SIGNALS.test(questionText)
      ? MIAE221_FAST_CRACK_TYPES.tensile_calculations
      : topicStrategy;
  }
  if (topicStrategy === MIAE221_FAST_CRACK_TYPES.tensile_calculations) {
    return CURVE_SIGNALS.test(questionText) && !CALC_SIGNALS.test(questionText)
      ? MIAE221_FAST_CRACK_TYPES.stress_strain_curve
      : topicStrategy;
  }
  if (topicStrategy) return topicStrategy;

  // Fallback: keyword match on the prompt itself (bank / drill questions
  // whose topic label does not name a subtopic). Specific types first; the
  // generic density type is the last resort, never the first guess.
  const combined = (questionText + ' ' + (topic ?? '') + ' ' + (id ?? '')).toLowerCase();

  if ((combined.includes('plane') && combined.includes('miller')) || combined.includes('plane a') || combined.includes('plane b') || combined.includes('plane c') || combined.includes('figure x')) {
    return MIAE221_FAST_CRACK_TYPES.miller_planes;
  }
  if (combined.includes('direction') && (combined.includes('miller') || combined.includes('indices') || combined.includes('vector'))) {
    return MIAE221_FAST_CRACK_TYPES.miller_directions;
  }
  if (combined.includes('diffract') || combined.includes('bragg') || combined.includes('x-ray') || combined.includes('xrd') || combined.includes('wavelength')) {
    return MIAE221_FAST_CRACK_TYPES.xrd_bragg;
  }
  if (combined.includes('linear density') || combined.includes('planar density') || combined.includes('linear atomic density') || combined.includes('close-packed')) {
    return MIAE221_FAST_CRACK_TYPES.linear_planar_density;
  }
  if (combined.includes('diffus') || combined.includes('fick') || combined.includes('carburiz') || combined.includes('activation energy')) {
    return MIAE221_FAST_CRACK_TYPES.diffusion_fick;
  }
  if (combined.includes('schmid') || combined.includes('slip') || combined.includes('dislocation') || combined.includes('burgers') || combined.includes('grain boundar')) {
    return MIAE221_FAST_CRACK_TYPES.dislocations_slip;
  }
  if (combined.includes('vacancy') || combined.includes('vacancies') || combined.includes('point defect') || combined.includes('schottky') || combined.includes('frenkel') || combined.includes('self-interstitial')) {
    return MIAE221_FAST_CRACK_TYPES.point_defects;
  }
  if (combined.includes('electron configuration') || combined.includes('valence electron') || combined.includes('aufbau')) {
    return MIAE221_FAST_CRACK_TYPES.electron_config;
  }
  if (combined.includes('substitutional') || combined.includes('interstitial') || combined.includes('hume-rothery') || combined.includes('solid solution')) {
    return MIAE221_FAST_CRACK_TYPES.solid_solutions;
  }
  if (combined.includes('how many atoms') || combined.includes('how many moles') || combined.includes('avogadro') || combined.includes('atomic mass unit')) {
    return MIAE221_FAST_CRACK_TYPES.moles_atoms;
  }
  if (combined.includes('amorphous') || combined.includes('polymorph') || combined.includes('single crystal') || combined.includes('polycrystal')) {
    return MIAE221_FAST_CRACK_TYPES.crystal_types;
  }
  if (CALC_SIGNALS.test(combined)) {
    return MIAE221_FAST_CRACK_TYPES.tensile_calculations;
  }
  if (combined.includes('stress-strain') || combined.includes('stress–strain') || combined.includes('necking') || combined.includes('resilience') || combined.includes('toughness') || (combined.includes('figure') && combined.includes('curve'))) {
    return MIAE221_FAST_CRACK_TYPES.stress_strain_curve;
  }
  if (combined.includes('density') || combined.includes('apf') || combined.includes('packing factor') || combined.includes('lattice constant') || combined.includes('coordination number')) {
    return MIAE221_FAST_CRACK_TYPES.density_unit_cells;
  }
  if (combined.includes('bond') || combined.includes('potential') || combined.includes('hybrid') || combined.includes('interatomic') || combined.includes('sp3')) {
    return MIAE221_FAST_CRACK_TYPES.potential_well;
  }

  // Last resort for a question with no recognizable topic or keywords.
  return MIAE221_FAST_CRACK_TYPES.density_unit_cells;
}
