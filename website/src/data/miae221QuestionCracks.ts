// Per-question Fast-Crack records for MIAE 221: one tailored entry per quiz
// question, grounded in that question's own prompt, options, key and notes.
// The 60-second card shows the subtopic strategy plus this question's ask and
// trick; the step-by-step breakdown below the card renders `moves`.
// Maths follows the same rule as the strategies: real LaTeX inside $...$
// (double backslashes in this source so KaTeX sees single ones), never
// code-style variables. Every calc below follows the question's own verified
// note or key; where a note corrects the posted key, the record follows the
// correction and says so.

export interface QuestionCrack {
  /** What THIS question gives you and asks for, in one line. */
  ask: string;
  /** The step-by-step breakdown: the moves that solve this exact question. */
  moves: string[];
  /** One tip or trap specific to this question. */
  trick: string;
}

export const MIAE221_QUESTION_CRACKS: Record<string, QuestionCrack> = {
  'F24-1': {
    ask: 'Name the family of directions that the face diagonals of a cube belong to.',
    moves: [
      'A face diagonal runs across one square face, from one corner to the opposite corner: it moves $1$ along two axes and $0$ along the third.',
      'As a direction that is $[110]$ (or an equivalent). The family of all such diagonals is written in angle brackets: $\\langle 110 \\rangle$.',
      'Rule out $\\langle 100 \\rangle$ (cube edges), $\\langle 111 \\rangle$ (body diagonals) and $\\langle 210 \\rangle$ (not a diagonal at all).'
    ],
    trick: 'Families use angle brackets $\\langle \\rangle$. Option E, $\\{211\\}$, is a plane family in curly braces, so it cannot be a direction family.'
  },
  'F24-2': {
    ask: 'Given $Q_d$ and $D_0$ for carbon in BCC and FCC iron, compare how fast carbon moves in each at $910^\\circ$C.',
    moves: [
      'Convert the temperature first: $T = 910 + 273 = 1183$ K. The Arrhenius law needs Kelvin.',
      'Work out $D = D_0 e^{-Q_d/RT}$ for each structure. BCC has the smaller activation energy ($80$ kJ/mol against $148$ kJ/mol), so its exponential penalty is far smaller.',
      'The ratio comes out $D_{BCC}/D_{FCC} = 27.1 \\approx 30$, so carbon moves about $30\\times$ faster in BCC.'
    ],
    trick: 'Do not guess from the structure alone: FCC is close-packed, but the numbers decide. Here the lower $Q_d$ wins by a factor of about $30$, not $3$.'
  },
  'F24-3': {
    ask: 'Diamond and graphite are both carbon. Explain why diamond is much harder.',
    moves: [
      'Diamond: every carbon is covalently bonded in a three-dimensional network. Breaking it means breaking strong covalent bonds in every direction.',
      'Graphite: strong covalent bonds hold each flat layer together, but the layers themselves are held only by weak van der Waals forces and slide easily.',
      'So diamond is only covalent, while graphite mixes covalent (within layers) with van der Waals (between layers). That is option E.'
    ],
    trick: 'Hardness here is about what holds the structure together in 3D. Layers that slide mean soft, however strong the bonds inside each layer are.'
  },
  'F24-4': {
    ask: 'Vanadium (BCC), lattice constant $a = 0.304$ nm. How many unit cells fit in $1$ mm$^3$?',
    moves: [
      'One cell occupies $V_C = a^3$. In millimetres, $a = 0.304 \\times 10^{-6}$ mm, so $V_C = 2.81 \\times 10^{-20}$ mm$^3$.',
      'Cells per cubic millimetre $= 1/V_C = 3.56 \\times 10^{19}$.'
    ],
    trick: 'Convert $a$ to mm BEFORE cubing. Cubing first and converting after is how the $10^{28}$ and $10^{9}$ distractors are born.'
  },
  'F24-5': {
    ask: 'A can dropped on concrete is permanently distorted. What was exceeded?',
    moves: [
      'Permanent distortion means the metal did not spring back: it yielded.',
      'Yielding starts when the stress passes the yield strength. Tensile strength is the later maximum, and the modulus only sets the elastic stiffness.',
      'So the cause is the yield strength being exceeded.'
    ],
    trick: 'Permanent shape change is the fingerprint of yielding. If it had stayed elastic, the can would have bounced back to its shape.'
  },
  'F24-6': {
    ask: 'From the net bonding-force curve, read the equilibrium spacing between two atoms.',
    moves: [
      'On a FORCE curve, equilibrium is where the net force crosses zero: $F_N = 0$. (On an energy curve it would be the minimum instead.)',
      'Read the zero crossing off the curve: about $3$ Å, between the $2$ Å and $4$ Å marks.'
    ],
    trick: 'Force curve: look for zero. Energy curve: look for the bottom. Mixing the two up is the classic error on this figure.'
  },
  'F24-7': {
    ask: 'Nitrogen into iron at a fixed surface concentration. Find the concentration $0.5$ mm down after $1$ h.',
    moves: [
      'This is Fick\'s second law with a constant surface concentration, so use the error-function solution with $z = x / (2\\sqrt{Dt})$.',
      'With $x = 0.5 \\times 10^{-3}$ m, $D = 6.9 \\times 10^{-11}$ m$^2$/s and $t = 3600$ s, $z = 0.502$ and $\\mathrm{erf}(z) = 0.5205$.',
      '$C_x = C_s(1 - \\mathrm{erf}(z)) = 5(1 - 0.5205) = 2.4$ kg/m$^3$.'
    ],
    trick: 'Keep $x$, $D$ and $t$ in metres, m$^2$/s and seconds. Mixing millimetres in here is what sinks this question.'
  },
  'F24-8': {
    ask: 'A copper block pressed against nickel and held hot. What diffuses where?',
    moves: [
      'This is the copper-nickel diffusion couple: the two metals are completely soluble in each other.',
      'Interdiffusion happens: copper atoms move into the nickel AND nickel atoms move into the copper, each down its own concentration gradient.',
      'So both move at once. One-way answers and "no diffusion" are both wrong.'
    ],
    trick: 'A diffusion couple always runs both ways. If an option says only one species moves, it is describing the wrong picture.'
  },
  'F24-9': {
    ask: 'Steel A has twice the yield strength of steel B but half the ductility. Bend identical bars elastically by the same amount: do the forces differ?',
    moves: [
      'While the bending stays elastic, the force depends only on stiffness: the modulus $E$.',
      'Both bars are steel, so both have the same $E$ (about $207$ GPa). Yield strength and ductility only matter once yielding starts.',
      'So there is no difference in the forces initially.'
    ],
    trick: 'Stiffness is not strength. Yield strength and ductility describe what happens after yielding, and this question never gets there.'
  },
  'F24-10': {
    ask: 'Define a self-interstitial.',
    moves: [
      'A self-interstitial is an atom of the crystal itself, squeezed into a gap between its neighbours.',
      'It is not a small foreign atom (that is an interstitial impurity), and it is not an empty site (that is a vacancy).'
    ],
    trick: '"Self" is the clue: same kind of atom as the crystal. Any option with a different kind of atom is describing an impurity, not a self-interstitial.'
  },
  'F24-11': {
    ask: 'Steel rods, $20$ mm diameter, $10$ m long, $9800$ N each, $E = 207$ GPa. New length?',
    moves: [
      'Elongation: $\\Delta L = FL_0/(AE)$ with $A = \\pi(0.01)^2$ m$^2$.',
      '$\\Delta L = 9800 \\cdot 10 / (\\pi(0.01)^2 \\cdot 207 \\times 10^9) = 1.507$ mm.',
      'New length $= 10 + 0.001507 = 10.00151$ m.'
    ],
    trick: 'Radius, not diameter, goes into the area. Using $0.02$ m as the radius quarters the answer before you start.'
  },
  'F24-12': {
    ask: 'Same rods as Q11, but the load on each rises by $50\\%$. New length?',
    moves: [
      'The rods stay elastic, so elongation scales in direct proportion to load: $\\Delta L \\propto F$.',
      'New $\\Delta L = 1.5 \\times 1.507 = 2.26$ mm, so the new length is $10.0023$ m.',
      'No new calculation is needed: reuse Q11 and scale it.'
    ],
    trick: 'Elastic means proportional. A $50\\%$ load rise is a $50\\%$ stretch rise, and the $10.00151$ m option is the old Q11 answer sitting there as bait.'
  },
  'F24-13': {
    ask: 'From the figure, give the Miller indices of plane K.',
    moves: [
      'Read plane K\'s intercepts off the figure, moving the origin first if the plane passes through it.',
      'Flip each intercept to its reciprocal and clear fractions to the smallest whole numbers.',
      'The indices land on $(\\bar{1}\\bar{1}1)$: negative on the first two axes, positive on the third, in round brackets because it is a plane.'
    ],
    trick: 'Square brackets $[111]$ would name a direction, not a plane. If your numbers are right but the brackets are square, the answer is still wrong.'
  },
  'F24-14': {
    ask: 'From the figure, give the Miller indices of direction I.',
    moves: [
      'Read the tail and head coordinates of direction I off the figure.',
      'Subtract head minus tail on each axis, then clear fractions to the smallest whole numbers.',
      'The direction lands on $[\\bar{2}\\bar{2}\\bar{1}]$: all three components negative, in square brackets.'
    ],
    trick: 'Fractions in an option, like $(\\frac{1}{2}\\,\\frac{1}{2}\\,0)$, are never a finished direction. Clear them first, then match.'
  },
  'F24-15': {
    ask: 'FCC platinum, $R = 0.1387$ nm, first-order reflection from $(113)$, $\\lambda = 0.1542$ nm. Expected $2\\theta$?',
    moves: [
      'Lattice constant from the radius: $a = 2R\\sqrt{2} = 0.3923$ nm.',
      'Plane spacing: $d_{113} = a/\\sqrt{1^2 + 1^2 + 3^2} = a/\\sqrt{11} = 0.1183$ nm.',
      'Bragg: $\\sin\\theta = \\lambda/(2d) = 0.652$, so $\\theta = 40.68^\\circ$ and $2\\theta = 81.36^\\circ$, about $81^\\circ$.'
    ],
    trick: 'The question asks for $2\\theta$, so double at the end. Half of the class answers $40.7^\\circ$ and stops one step early.'
  },
  'F24-16': {
    ask: 'Which statement best describes covalent bonding?',
    moves: [
      'Covalent bonding is sharing: one atom shares outer electrons with its neighbours, and both end up more stable.',
      'Donating electrons with electrostatic attraction is ionic. A sea of shared electrons is metallic. Dipoles are secondary bonding.'
    ],
    trick: 'Share versus donate is the whole distinction. If the option says one atom gives electrons away, it is describing ionic bonding.'
  },
  'F24-17': {
    ask: 'Thorium (FCC), $\\rho = 11.72$ g/cm$^3$, $A = 232$ g/mol. Lattice parameter?',
    moves: [
      'Rearrange the density formula: $a = \\sqrt[3]{nA/(\\rho N_A)}$ with $n = 4$ for FCC.',
      '$a = \\sqrt[3]{4 \\cdot 232 / (11.72 \\cdot 6.022 \\times 10^{23})} = 5.085 \\times 10^{-8}$ cm.'
    ],
    trick: 'FCC means $n = 4$. Using $n = 1$ or $n = 2$ moves the cube root and lands on a different option entirely.'
  },
  'F24-18': {
    ask: 'A carburising treatment takes too long. What shortens the time to the same carbon level?',
    moves: [
      'Raising the temperature raises $D$ exponentially, so the same depth is reached sooner.',
      'Raising the surface carbon $C_s$ also helps: the target ratio is reached at a smaller $z$ value.',
      'Both help, so the answer is both (b) and (c). Lowering $C_0$ does not help in the way option (a) claims.'
    ],
    trick: 'Think in terms of what $D$ and the concentration ratio do. Temperature acts through $D$; surface carbon acts through the ratio. Both point the same way here.'
  },
  'F24-19': {
    ask: 'Brass rod stretched $0.01$ mm over $50$ mm, diameter down $6 \\times 10^{-4}$ mm over $10$ mm. Poisson\'s ratio?',
    moves: [
      'Axial strain: $\\varepsilon_z = 0.01/50 = 2 \\times 10^{-4}$.',
      'Lateral strain: $\\varepsilon_x = -6 \\times 10^{-4}/10 = -6 \\times 10^{-5}$.',
      '$\\nu = -\\varepsilon_x/\\varepsilon_z = 0.30$.'
    ],
    trick: 'Poisson\'s ratio is a ratio of two strains, so the units cancel. Forgetting the minus sign on the lateral strain flips the sign of the answer.'
  },
  'F24-20': {
    ask: 'Which property cannot be measured from a tensile test?',
    moves: [
      'A tensile test gives yield strength, tensile strength, Young\'s modulus (initial slope) and ductility (strain at fracture).',
      'Hardness is measured by pressing an indenter into the surface, a different test entirely.'
    ],
    trick: 'Hardness sounds like strength, but it is measured differently. If it needs an indenter, it is not a tensile-test property.'
  },
  'F24-21': {
    ask: 'True or false: the plastic region of a stress-strain curve is a linear stress-strain relationship.',
    moves: [
      'Linear stress-strain is Hooke\'s law, which holds only in the elastic region.',
      'In the plastic region the curve bends away from the straight line as dislocations move.',
      'So the statement is False.'
    ],
    trick: 'Straight line equals elastic. The moment the curve bends, you have left linearity behind.'
  },
  'F24-22': {
    ask: 'True or false: a weakly bonded solid has a lower melting point, lower E and higher thermal expansion than a strongly bonded one.',
    moves: [
      'Weaker bonds mean a shallower potential well: less energy to break free (lower melting point), less stiffness (lower $E$).',
      'A shallower, more lopsided well also expands more on heating (higher $\\alpha$).',
      'All three claims match, so the statement is True.'
    ],
    trick: 'One well explains all three properties. If you remember "shallow well, soft and melty", all three follow.'
  },
  'F24-23': {
    ask: 'True or false: ductility is the ability to absorb energy during plastic deformation and give it back on unloading.',
    moves: [
      'Energy absorbed and given BACK on unloading is elastic energy: that is resilience, not ductility.',
      'Ductility is how much plastic strain a material takes before fracture. Plastic strain is not recovered.',
      'So the statement is False.'
    ],
    trick: '"Given back on unloading" is the giveaway: only elastic deformation is recovered. Plastic deformation stays.'
  },
  'F24-24': {
    ask: 'True or false: ice floats because its structure is less dense, a result of hydrogen bonding between water molecules on freezing.',
    moves: [
      'On freezing, hydrogen bonds lock water molecules into an open structure with more empty space than the liquid.',
      'That open structure is less dense than liquid water, so ice floats.',
      'So the statement is True.'
    ],
    trick: 'Hydrogen bonding is a secondary bond, but here it decides the structure. The density drop on freezing is the whole reason ice floats.'
  },
  'F24-25': {
    ask: 'True or false: amorphous structures have both long- and short-range order; crystalline structures have only long-range order.',
    moves: [
      'It is the other way round: crystalline structures have both short- AND long-range order.',
      'Amorphous structures have only short-range order, with no repeating pattern over distance.',
      'So the statement is False.'
    ],
    trick: 'The two halves are swapped. Read which side "only" attaches to: "only short-range" belongs to amorphous.'
  },
  'F24-26': {
    ask: 'True or false: FCC has the highest packing factor in the cubic system.',
    moves: [
      'FCC packs at $0.74$, the highest of the cubic structures. BCC packs at $0.68$ and simple cubic at $0.52$.',
      'So the statement is True.'
    ],
    trick: 'FCC and HCP share the top value $0.74$, but HCP is not cubic. Inside the cubic system, FCC is the densest packing.'
  },
  'F24-27': {
    ask: 'True or false: interstitial diffusion of a small atom is usually slower than vacancy diffusion in the same metal.',
    moves: [
      'Interstitial diffusion needs no vacancy: small atoms hop between the many empty interstitial sites.',
      'Vacancy diffusion has to wait for a vacancy to turn up next door, which is rarer.',
      'So interstitial diffusion is usually FASTER, and the statement is False.'
    ],
    trick: 'No vacancy needed means no waiting. Small atoms in gaps move faster than atoms waiting for empty lattice sites.'
  },
  'F24-28': {
    ask: 'True or false: E is set by bond strength, so it cannot be changed much unless the bonds change (e.g. alloying).',
    moves: [
      'The modulus is the curvature of the bond energy well: it is a property of the bonds themselves.',
      'Working or heat-treating a metal moves dislocations around but barely touches the bonds, so $E$ barely moves. Changing the alloy (the bonds) is what shifts it.',
      'So the statement is True.'
    ],
    trick: 'Cold work raises strength, not stiffness. If a treatment does not change the bonding, $E$ stays put.'
  },
  'F24-29': {
    ask: 'True or false: "polycrystalline" means an element with more than one crystal form; "single crystal" means only one possible form.',
    moves: [
      'Those definitions describe polymorphism (allotropy): one chemistry, several crystal structures.',
      '"Polycrystalline" means many grains; "single crystal" means one continuous lattice.',
      'So the statement is False.'
    ],
    trick: 'Polycrystalline is about grains, not about forms. The form-changing word is polymorphism.'
  },
  'F24-30': {
    ask: 'True or false: BCC has 2 atoms/cell, FCC 4, and HCP 3.',
    moves: [
      'BCC: $8$ corners shared $8$ ways plus the centre $= 2$. FCC: corners plus $6$ face centres $= 4$.',
      'HCP: the hexagonal cell owns $6$ atoms, not $3$. (The $3$ counts only the atoms fully inside the hexagonal prism.)',
      'So the statement is False.'
    ],
    trick: 'HCP is the trap number here: $6$, not $3$. The $3$ is a partial count that ignores the shared atoms.'
  },
  'A25-1': {
    ask: 'From Figure 1, name the crystal structure shown.',
    moves: [
      'The figure shows corner atoms A to G with one atom at the body centre.',
      'Corners plus a body-centre atom is the definition of BCC. FCC would need face-centre atoms instead.'
    ],
    trick: 'Look for the centre atom. Body centre means BCC; face centres would mean FCC. One centre atom decides it.'
  },
  'A25-2': {
    ask: 'In Figure 1, which plane is a close-packed plane?',
    moves: [
      'In BCC the densest plane is the diagonal $\\{110\\}$ plane: it slices through the body centre and the corners.',
      'ACGE is that diagonal plane, so the key takes (c).',
      'Strictly, BCC has no perfectly close-packed plane: "close-packed" here means the densest plane available.'
    ],
    trick: 'ABGF is also a $\\{110\\}$ diagonal plane through the body centre and equally dense, so your crystallography was right if you picked it: the key simply takes ACGE.'
  },
  'A25-3': {
    ask: 'In Figure 1, planes ABGF and BCFE belong to which family?',
    moves: [
      'Both planes are diagonal planes: each cuts two axes at $1$ and runs parallel to the third.',
      'Reciprocals give $(110)$-type indices, and a family of planes takes curly braces: $\\{110\\}$.'
    ],
    trick: 'Angle brackets $\\langle 110 \\rangle$ name direction families. Planes take curly braces $\\{110\\}$: the bracket type is half the question.'
  },
  'A25-4': {
    ask: 'Planar density of the BCC $(110)$ plane, in terms of the atomic radius $R$.',
    moves: [
      'The BCC $(110)$ plane holds $2$ atoms on a rectangle of area $a \\cdot a\\sqrt{2}$, with $a = 4R/\\sqrt{3}$.',
      'So $PD = 2 / (a^2\\sqrt{2}) = 3/(8\\sqrt{2}R^2)$: option E.',
      'The posted solution highlights (b), but (b) is not the planar density of any BCC plane: this question is corrected from the posted key.'
    ],
    trick: 'Count the atoms on THIS plane and use THIS plane\'s area. The memorised FCC numbers do not transfer to BCC.'
  },
  'A25-5': {
    ask: 'Which property cannot be measured from a tensile test?',
    moves: [
      'A tensile test gives yield strength, tensile strength, Young\'s modulus and ductility.',
      'Hardness needs an indenter pressed into the surface: a different test.'
    ],
    trick: 'Same question as F24 Q20 with the options in the same places. Hardness is always the odd one out here.'
  },
  'A25-6': {
    ask: 'Which electron configuration is an inert gas?',
    moves: [
      'An inert gas has a filled outer shell: full $s$ and full $p$ in the outermost level.',
      'Option A, $1s^2 2s^2 2p^6 3s^2 3p^6$, is argon ($Z = 18$): the $3s$ and $3p$ subshells are both full.',
      'The others are one electron short, one electron over, or have a partly filled $d$ subshell.'
    ],
    trick: 'Count the outer shell, not the total. A full outer $s^2p^6$ is the inert-gas fingerprint, whatever sits underneath.'
  },
  'A25-7': {
    ask: 'Hydrogen through an $8$ mm Pd sheet, area $1.20$ m$^2$, at $500^\\circ$C. How many kg per hour?',
    moves: [
      'Steady state, so Fick\'s first law: $J = D\\Delta C/\\Delta x = 10^{-8} \\cdot 1.8 / 0.008 = 2.25 \\times 10^{-6}$ kg/m$^2$s.',
      'Multiply by area and convert seconds to hours: $2.25 \\times 10^{-6} \\cdot 1.2 \\cdot 3600 = 9.72 \\times 10^{-3}$ kg/h.'
    ],
    trick: 'The question asks per HOUR, and the per-second answer sits in the options as trap (a). Multiply by $3600$ last, and check you did.'
  },
  'A25-8': {
    ask: 'Tungsten (BCC), $R = 0.137$ nm, $A = 183.85$ g/mol. Theoretical density?',
    moves: [
      'Lattice constant for BCC: $a = 4R/\\sqrt{3} = 0.3164$ nm, so $V_C = 3.167 \\times 10^{-23}$ cm$^3$.',
      'Density: $\\rho = nA/(V_C N_A) = 2 \\cdot 183.85 / (V_C N_A) = 19.3$ g/cm$^3$.'
    ],
    trick: 'BCC means $n = 2$. Option (e) uses $n = 4$ and (c) uses $n = 1$: the $n$ you pick is the whole question.'
  },
  'A25-9': {
    ask: 'From Figure 2, give the Miller indices of planes A and B.',
    moves: [
      'Read each plane\'s intercepts off the figure (the marked $\\frac{1}{2}$ and $\\frac{2}{3}$ points are the readings).',
      'Flip each intercept to its reciprocal and clear fractions to the smallest whole numbers.',
      'Plane A lands on $(3\\bar{2}4)$ and plane B on $(221)$: option E.'
    ],
    trick: 'Options in square brackets $[320]$ name directions, not planes. Right numbers in the wrong brackets is still wrong.'
  },
  'A25-10': {
    ask: '15% Ni cooled in Cu gives a substitutional solid solution. Describe its structure.',
    moves: [
      'Substitutional means the solute atoms take lattice sites: nickel atoms replace copper atoms on the FCC lattice.',
      'The host structure stays FCC copper, with some sites occupied by Ni. Nothing is squeezed between atoms and no separate Ni grains appear.'
    ],
    trick: '"Squeezed between" describes interstitial, not substitutional. If the option says squeezed, it is describing the other kind of solution.'
  },
  'A25-11': {
    ask: 'Adjacent grains in a polycrystalline pure metal differ in what?',
    moves: [
      'Same metal, same crystal structure, same composition, same lattice parameter in every grain.',
      'What changes from grain to grain is the orientation of the lattice: each grain points a different way.'
    ],
    trick: 'Grains are the same stuff, differently aimed. Density, lattice parameter and structure are identical: only orientation differs.'
  },
  'A25-12': {
    ask: 'Na ($X = 1.0$) and Cl ($X = 2.9$). What kind of bonding dominates?',
    moves: [
      'Electronegativity difference: $\\Delta X = 1.9$.',
      'Pauling: $\\%IC = 1 - e^{-0.25(1.9)^2} = 59\\%$, over half ionic, so the bonding is predominantly ionic.'
    ],
    trick: 'Over $50\\%$ ionic character means call it ionic. A big $\\Delta X$ with a metal plus a non-metal is the classic ionic pair.'
  },
  'A25-13': {
    ask: 'About defects, which statement is FALSE?',
    moves: [
      'Grain boundaries, pores forming on solidification, substitutional or interstitial impurities, and vacancies being needed for substitutional diffusion are all true.',
      'The false statement is (a), about vacancy concentration against temperature: vacancy concentration RISES exponentially with temperature, so any claim that it falls or stays flat is false.'
    ],
    trick: 'Vacancies cost energy to make, and heat pays for them: hotter always means more vacancies, exponentially more.'
  },
  'A25-14': {
    ask: 'From Figure 3, name the defect shown.',
    moves: [
      'The figure shows an extra half-plane of atoms ending in the middle of the crystal, with shear arrows $\\tau$.',
      'An extra half-plane ending inside the lattice is an edge dislocation. A screw dislocation has no extra half-plane.'
    ],
    trick: 'Half-plane ending mid-crystal equals edge. If you see a spiral ramp instead, that is a screw.'
  },
  'A25-15': {
    ask: 'Give the atomic packing factors BCC : FCC : HCP, in that order.',
    moves: [
      'BCC packs at $0.68$. FCC and HCP both pack at $0.74$, the densest packing of equal spheres.',
      'In the asked order: $0.68 : 0.74 : 0.74$.'
    ],
    trick: 'The order in the question is the trap: BCC first. Memorise the pair "BCC 68, FCC/HCP 74" and read the order before answering.'
  },
  'A25-16': {
    ask: 'Which description fits a body-centred tetragonal unit cell?',
    moves: [
      'Tetragonal means $a = b \\neq c$ with all angles $90^\\circ$.',
      'Body-centred adds one atom at the centre, on top of the corner atoms.',
      'That is option A. Face-centre atoms would make it face-centred, and $a = b = c$ would make it cubic.'
    ],
    trick: 'Tetragonal is "cubic stretched in one direction". If all three edges are equal, you are back in the cubic system.'
  },
  'A25-17': {
    ask: 'At $660^\\circ$C the vacancy fraction in aluminium is $9 \\times 10^{-5}$. Vacancy formation energy?',
    moves: [
      'Rearrange the vacancy law: $Q_v = -kT \\ln(N_v/N)$ with $T = 933$ K.',
      '$Q_v = -(8.62 \\times 10^{-5})(933)\\ln(9 \\times 10^{-5}) = 0.749$ eV, about $0.75$ eV.'
    ],
    trick: 'Kelvin again: $660 + 273 = 933$. Using $660$ directly in $kT$ breaks the exponent and the answer with it.'
  },
  'A25-18': {
    ask: 'Figure 4: five stress-strain curves. Which material is the stiffest?',
    moves: [
      'Stiffness is Young\'s modulus: the slope of the initial straight part of the curve.',
      'Curve F has the steepest initial slope, so F is the stiffest, even though it fractures early.'
    ],
    trick: 'Stiffest means steepest start, not highest peak. A brittle material can be the stiffest curve on the plot and still break first.'
  },
  'A25-19': {
    ask: 'Figure 4: which material has the highest yield strength?',
    moves: [
      'Yield strength is where the curve leaves the straight elastic line.',
      'Curve D leaves the line at the highest stress, so D has the highest yield strength.',
      'F never yields at all: it fractures while still on the straight line, so it cannot have the highest yield strength.'
    ],
    trick: 'F is the trap: a fracture point is not a yield point. Brittle fracture while still linear means no yielding happened.'
  },
  'A25-20': {
    ask: 'Figure 4: which material shows the highest ductility?',
    moves: [
      'Ductility is the strain at fracture: how far right the curve reaches before it ends.',
      'Curve A reaches the largest strain at fracture, so A is the most ductile.',
      'D has the largest area under the curve, which is toughness, not ductility. The posted key highlights D, but the figure shows A reaching further: this question is corrected from the posted key.'
    ],
    trick: 'Ductility is distance along the strain axis. Toughness is area. Confusing the two is exactly how the posted key got this one wrong.'
  },
  'A25-21': {
    ask: 'True or false: allotropy/polymorphism means some elements crystallise in different structures at different temperatures and pressures.',
    moves: [
      'That is the textbook definition of allotropy (for elements) and polymorphism (in general).',
      'Iron is the classic case: BCC ferrite at room temperature, FCC austenite when hot.',
      'So the statement is True.'
    ],
    trick: 'One chemistry, several structures, switched by temperature or pressure. That sentence IS the definition.'
  },
  'A25-22': {
    ask: 'True or false: non-crystalline (amorphous) materials have grain boundaries but no crystals.',
    moves: [
      'Grain boundaries are the borders between grains. No grains means no grain boundaries.',
      'Amorphous materials have no crystals and no grains at all, so they have no grain boundaries either.',
      'So the statement is False.'
    ],
    trick: 'No crystals, no grains, no grain boundaries. The middle step cannot be skipped.'
  },
  'A25-23': {
    ask: 'True or false: krypton ($\\dots 3d^{10}4s^2 4p^6$) is a highly reactive gas.',
    moves: [
      'Krypton ends in a filled outer shell: $4s^2 4p^6$. Filled shells do not want to gain, lose or share electrons.',
      'That makes krypton an inert (noble) gas, the opposite of highly reactive.',
      'So the statement is False.'
    ],
    trick: 'Filled outer shell equals unreactive, every time. If the configuration ends $s^2p^6$, "reactive" is always the wrong word.'
  },
  'A25-24': {
    ask: 'True or false: in the cubic system, the direction perpendicular to the $(hkl)$ plane is $[hkl]$.',
    moves: [
      'In the cubic system, and only there, a plane and the direction with the same indices are perpendicular.',
      'So $[hkl]$ is the normal to $(hkl)$. The statement is True.'
    ],
    trick: 'This shortcut is cubic-only. It fails in tetragonal and hexagonal systems, but this question stays cubic.'
  },
  'A25-25': {
    ask: 'True or false: a BCC unit cell contains 9 atoms, one at each corner and one in the centre.',
    moves: [
      'Corner atoms are shared between $8$ cells: $8 \\times \\frac{1}{8} = 1$.',
      'Add the centre atom: $1 + 1 = 2$ atoms per cell, not $9$.',
      'So the statement is False.'
    ],
    trick: 'Count shared atoms as fractions. "One at each corner" is $8$ atoms only if you forget that every corner belongs to $8$ cells.'
  },
  'A25-26': {
    ask: 'True or false: covalent bonding is primary bonding based on permanent or induced dipoles.',
    moves: [
      'Permanent and induced dipoles are secondary (van der Waals) bonding, between molecules.',
      'Covalent bonding is primary bonding by electron sharing.',
      'So the statement is False.'
    ],
    trick: 'Dipoles always mean secondary bonding. If the sentence says dipoles, the bond type is van der Waals, whatever else it claims.'
  },
  'A25-27': {
    ask: 'True or false: ice floats because hydrogen bonding makes the ice structure less dense on freezing.',
    moves: [
      'Hydrogen bonds hold water molecules in an open structure on freezing, less dense than the liquid.',
      'Less dense means it floats. So the statement is True.'
    ],
    trick: 'Same idea as F24 Q24. Hydrogen bonding builds the open structure; the open structure is what floats.'
  },
  'A25-28': {
    ask: 'True or false: carbon ($1s^2 2s^2 2p^2$) hybridises its $2s$ and $2p$ electrons to form four equal bonds with four H atoms (methane).',
    moves: [
      'Carbon promotes and hybridises to four $sp^3$ orbitals, each holding one electron.',
      'Each hybrid orbital bonds with one hydrogen, giving four equal C-H bonds in methane.',
      'So the statement is True.'
    ],
    trick: 'Four equal bonds from one $s$ plus three $p$ orbitals: $sp^3$ is the word that makes all four bonds identical.'
  },
  'A25-29': {
    ask: 'True or false: for FCC Pt ($a = 0.3923$ nm), $(113)$, $\\lambda = 0.1542$ nm, the diffraction angle $2\\theta$ is $40.69^\\circ$.',
    moves: [
      'These are the same numbers as F24 Q15: $d_{113} = 0.1183$ nm and $\\sin\\theta = 0.652$, so $\\theta = 40.67^\\circ$.',
      'But $2\\theta$ is double that: $81.3^\\circ$. The statement calls $\\theta$ by the name $2\\theta$.',
      'So the statement is False.'
    ],
    trick: 'If a question hands you $\\theta$ and calls it $2\\theta$, the trap is the factor of two. Double before you agree.'
  },
  'A25-30': {
    ask: 'True or false: crystalline structures have both short- and long-range order; amorphous materials have only short-range order.',
    moves: [
      'Crystals repeat in all directions: short-range order (neighbours) plus long-range order (the repeating pattern).',
      'Glasses keep the neighbour order but lose the long-range pattern: only short-range order.',
      'So the statement is True. The posted key marks it false, but this is the textbook definition: this question is corrected from the posted key.'
    ],
    trick: 'F24 Q25 is the false version of this same sentence, with the two halves swapped. Here the halves are in the right places.'
  },
  'W26-1': {
    ask: 'From the figure, give directions A and B.',
    moves: [
      'Direction B runs from $(1, 0, \\frac{2}{3})$ to $(0, 1, \\frac{1}{3})$: subtract to get $(-1, 1, -\\frac{1}{3})$, clear fractions to $[\\bar{3}3\\bar{1}]$.',
      'Direction A runs from $(1, 1, 0)$ to $(\\frac{1}{4}, 0, 1)$: subtract to get $(-\\frac{3}{4}, -1, 1)$, clear fractions to $[\\bar{3}\\bar{4}4]$.',
      'Only option (b) has A\'s 3-4-4 with the right B. The photo prints A\'s first bar faintly, which is why the sign looks lost.'
    ],
    trick: 'Work both directions and let the pair decide. One direction alone leaves two options standing; the pair leaves one.'
  },
  'W26-2': {
    ask: 'From the figure, give directions C and D.',
    moves: [
      'Direction C runs from $(0, 1, \\frac{1}{2})$ to $(1, 0, \\frac{1}{4})$: subtract to get $(1, -1, -\\frac{1}{4})$, clear fractions to $[4\\bar{4}\\bar{1}]$.',
      'Direction D runs from $(0, 1, \\frac{3}{4})$ to $(\\frac{3}{4}, 0, 0)$: subtract to get $(\\frac{3}{4}, -1, -\\frac{3}{4})$, clear fractions to $[3\\bar{4}\\bar{3}]$.',
      'Only option (e) has that D. Option (b)\'s $[4\\bar{3}\\bar{4}]$ cannot come from this figure.'
    ],
    trick: 'When two options are circled on the paper, trust the subtraction, not the ink. D is the decider here: only (e) has the right D.'
  },
  'W26-3': {
    ask: 'From the figure, give planes A and B.',
    moves: [
      'Plane A contains the top edge and drops to $z = \\frac{3}{4}$ at $y = 1$, so $z = 1 - y/4$: intercepts $(\\infty, 4, 1)$ give $(014)$, the same plane as $(0\\bar{1}\\bar{4})$.',
      'Plane B contains the x-axis and rises to $z = \\frac{1}{3}$ at $y = 1$ through the origin, so move the origin to $(0, 1, 0)$: intercepts $(\\infty, -1, \\frac{1}{3})$ give $(0\\bar{1}3)$.',
      'Only option (c) has both.'
    ],
    trick: 'A plane through the origin must be moved before you read intercepts. Forgetting the origin shift is how the circled (e) answer goes wrong on plane B.'
  },
  'W26-4': {
    ask: 'From the figure, give planes C and D using the marked $\\frac{1}{4}$, $\\frac{1}{3}$ and $\\frac{3}{4}$ points.',
    moves: [
      'Read each plane\'s intercepts off the marked points in the figure, moving the origin first if a plane passes through it.',
      'Flip each intercept to its reciprocal and clear fractions to the smallest whole numbers.',
      'Plane C lands on $(2\\bar{2}\\bar{3})$ and the vertical plane D on $(\\bar{1}20)$: option A.'
    ],
    trick: 'A vertical plane runs parallel to one axis, so one intercept is infinity and one index is $0$. If your answer has no zero, re-read the figure.'
  },
  'W26-5': {
    ask: 'Give the atomic packing factors BCC : FCC : HCP, in that order.',
    moves: [
      'BCC packs at $0.68$. FCC and HCP both pack at $0.74$.',
      'In the asked order: $0.68 : 0.74 : 0.74$.'
    ],
    trick: 'Same numbers as A25 Q15, different option letter. Read the order in the question, not the letter you remember.'
  },
  'W26-6': {
    ask: 'Planar density of the FCC $(100)$ plane, in terms of $R$.',
    moves: [
      'The FCC $(100)$ face holds $2$ atoms: $4$ corners shared $4$ ways plus $1$ face centre.',
      'Face area $= a^2 = 8R^2$ (since $a = 2R\\sqrt{2}$ for FCC).',
      'So $PD = 2/(8R^2) = 1/(4R^2)$: option C.'
    ],
    trick: 'Option (d) is the FCC $(110)$ density from the lecture slides, the memorised trap. Count the atoms on the $(100)$ face you were actually asked about.'
  },
  'W26-7': {
    ask: 'Rhodium (FCC): first-order $(311)$ reflection at $2\\theta = 36.12^\\circ$, $\\lambda = 0.0711$ nm. Atomic radius?',
    moves: [
      'Half the given angle first: $\\theta = 18.06^\\circ$. Bragg gives $d = \\lambda/(2\\sin\\theta) = 0.1147$ nm.',
      'Then $a = d\\sqrt{11} = 0.3803$ nm, and for FCC $R = a/(2\\sqrt{2}) = 0.1345$ nm.',
      'Each wrong option is one unfinished step: (a) is $d$, (d) is $a$. Finish all three steps.'
    ],
    trick: 'Three steps, three numbers, three options. If your answer equals $d$ or $a$, you stopped early: the question asks for $R$.'
  },
  'W26-8': {
    ask: 'Copper at $20^\\circ$C: $Q_v = 0.9$ eV/atom, $A = 63.5$ g/mol, $\\rho = 8.9$ g/cm$^3$. Vacancies per m$^3$?',
    moves: [
      'Sites per m$^3$: $N = \\rho N_A/A = 8.44 \\times 10^{28}$ m$^{-3}$.',
      'Vacancy fraction: $e^{-Q_v/kT} = e^{-0.9/(8.62\\times10^{-5}\\cdot293)} = 3.3 \\times 10^{-16}$.',
      'Multiply: $N_v = 2.8 \\times 10^{13}$ vacancies per m$^3$.'
    ],
    trick: 'This is the textbook example with the temperature moved to $20^\\circ$C. The famous $10^{25}$ answer belongs to $1000^\\circ$C: do not recite it here.'
  },
  'W26-9': {
    ask: 'Ferrite, a solid solution of carbon in BCC iron, is best described as what?',
    moves: [
      'Carbon atoms are far smaller than iron atoms, so they fit in the gaps between iron atoms rather than replacing them.',
      'That is an interstitial solid solution: carbon randomly distributed in the interatomic spaces of BCC iron.'
    ],
    trick: 'Small solute means interstitial; similar-sized solute means substitutional. Size decides the type before anything else.'
  },
  'W26-10': {
    ask: 'About defects, which statement is FALSE?',
    moves: [
      'Vacancies are required for substitutional diffusion: true. Dislocations can be edge, screw or mixed: true.',
      'The false claim is (c): dislocations are not purely harmful. Dislocation tangles cause strain hardening, and dislocation motion is what makes metals ductile.',
      'The (d)/(e) statements about line direction use "direction of motion" to mean the slip (Burgers) direction: both are true as written.'
    ],
    trick: 'Defects can be desirable. Any option that says a defect is only ever bad is the one to distrust.'
  },
  'W26-11': {
    ask: 'Which statement about atomic bonding is correct?',
    moves: [
      'The three primary bonds are ionic, covalent and metallic: van der Waals is secondary, so (a) is wrong.',
      'Atoms feel both attraction and repulsion. The lowest potential energy, the equilibrium spacing, is where the two forces cancel: option D.',
      'Intermolecular bonds are weaker than atomic bonds, and ionic bonding is not typical of metals, so (b) and (e) fall too.'
    ],
    trick: 'Equilibrium is where forces cancel, on the energy curve it is the minimum. One idea answers the question and kills three options.'
  },
  'W26-12': {
    ask: 'Same carbon data as F24 Q2, but now at $1200^\\circ$C. How much faster in BCC vs FCC?',
    moves: [
      'Recompute at the new temperature: $T = 1473$ K. $D_{BCC} = 9.0 \\times 10^{-10}$ and $D_{FCC} = 1.3 \\times 10^{-10}$ m$^2$/s.',
      'Ratio $= 6.95$. The closest option is (a), about $3\\times$ faster in BCC.',
      'The photo marks (d), the $910^\\circ$C answer from F24 Q2. The temperature changed, so the ratio changed with it.'
    ],
    trick: 'Recompute every time they change $T$. Carrying the old paper\'s answer into a new temperature is exactly the trap this question sets.'
  },
  'W26-13': {
    ask: 'Hydrogen through a $4$ mm Pd sheet, area $0.60$ m$^2$, at $500^\\circ$C. Kg per hour?',
    moves: [
      'Fick\'s first law: $J = D\\Delta C/\\Delta x = 10^{-8} \\cdot 1.5 / 0.004 = 3.75 \\times 10^{-6}$ kg/m$^2$s.',
      'Multiply by area and by $3600$ s: $3.75 \\times 10^{-6} \\cdot 0.60 \\cdot 3600 = 8.10 \\times 10^{-3}$ kg/h.'
    ],
    trick: 'Same shape as A25 Q7 with different numbers. Convert millimetres to metres and seconds to hours, and the answer drops out.'
  },
  'W26-14': {
    ask: 'Which statement best describes covalent bonding?',
    moves: [
      'Covalent bonding is sharing: one atom shares its outer electrons with neighbouring atoms and becomes more stable.',
      'Donating electrons is ionic; a sea of shared electrons is metallic; dipoles are secondary bonding.'
    ],
    trick: 'Share versus donate, again. Same question as F24 Q16 with the options shuffled: the sharing option is the answer.'
  },
  'W26-15': {
    ask: 'Which property cannot be measured from a tensile test?',
    moves: [
      'A tensile test gives yield strength, tensile strength, Young\'s modulus and ductility.',
      'Hardness needs an indenter: a different test.'
    ],
    trick: 'Third time this question appears (F24 Q20, A25 Q5). Hardness is always the answer: it is the only one measured with an indenter.'
  },
  'W26-16': {
    ask: 'From the stress-strain curve with its low-strain inset, find Young\'s modulus.',
    moves: [
      'Use the inset, not the main plot: on the main plot the elastic line is almost vertical and unreadable.',
      'In the inset the $200$ MPa line meets the curve at $\\varepsilon \\approx 0.0034$, so $E = 200/0.0034 \\approx 59$ GPa, closest to option (e), $58$ GPa.',
      'Reading the inset scale a factor of $2$ off gives $114$ GPa: that is the trap option.'
    ],
    trick: 'The inset exists because the main plot cannot show the elastic region. If you read $E$ off the main plot, you are reading the wrong graph.'
  },
  'W26-17': {
    ask: 'From the same curve, find the $0.2\\%$ offset yield strength.',
    moves: [
      'Draw a line from $\\varepsilon = 0.002$ parallel to the elastic slope.',
      'Where it meets the curve is the offset yield: about $295$ MPa.',
      '$360$ MPa is the peak (tensile strength), the classic swap. And $0.2\\%$ is $0.002$, not $0.2$.'
    ],
    trick: 'Offset line starts at $0.002$ strain, not at the origin. Starting at zero gives the proportional limit, not the offset yield.'
  },
  'W26-18': {
    ask: 'From the same curve, find the %EL ductility.',
    moves: [
      'Fracture strain is about $0.157$. On unloading, the elastic part recovers: $\\sigma/E \\approx 300/60\\,000 \\approx 0.005$.',
      'Permanent strain $\\approx 0.157 - 0.005 = 0.152$, about $15\\%$: closest option (a), $15.4\\%$.',
      'Forgetting the elastic recovery gives $16.0\\%$: option (b), the trap.'
    ],
    trick: '%EL is the permanent strain after fracture, so subtract the elastic spring-back. Fracture strain alone overstates it.'
  },
  'W26-19': {
    ask: 'From the same curve, at what strain does necking start?',
    moves: [
      'Necking starts at the maximum of the engineering stress-strain curve, the tensile strength point.',
      'On this curve the maximum sits at $\\varepsilon \\approx 0.09$.'
    ],
    trick: 'Necking equals the peak, not the fracture point. After the peak the curve falls because the area shrinks, not because the metal weakens.'
  },
  'W26-20': {
    ask: 'A $100$ mm sample loaded to $320$ MPa then unloaded. Permanent change in length?',
    moves: [
      'On the main curve, $320$ MPa is reached at $\\varepsilon \\approx 0.02$–$0.03$, where the curve is very flat.',
      'The elastic part, $320/60\\,000 \\approx 0.005$, recovers on unloading, leaving plastic strain of about $0.015$–$0.025$.',
      'On $100$ mm that is about $2$ mm: closest option (c), $2.5$ mm. The other options are $10\\times$ too small or too large.'
    ],
    trick: 'Permanent means total minus recovered. If you forget to subtract the elastic recovery, you land an order of magnitude off.'
  },
  'W26-21': {
    ask: 'True or false: the modulus of elasticity of a solid metal decreases as temperature increases.',
    moves: [
      'Heating stretches the bonds and softens the potential well, so the stiffness falls.',
      'The effect is small but real: $E$ decreases with temperature. So the statement is True.'
    ],
    trick: 'Heat softens bonds, so $E$ drifts down. The direction is the whole question: down, not up.'
  },
  'W26-22': {
    ask: 'True or false: secondary bonds have no effect on polymer properties because of the strong primary bonds.',
    moves: [
      'In polymers the strong primary bonds run along each chain, but the chains are held together by secondary bonds.',
      'Those secondary bonds decide how the chains slide and pack, so they strongly affect polymer properties.',
      'So the statement is False.'
    ],
    trick: 'Along the chain is primary; between chains is secondary, and between chains is where polymer behaviour lives.'
  },
  'W26-23': {
    ask: 'True or false: single crystals are rare and used only at high temperature because their properties are uniform in all directions.',
    moves: [
      'Single crystals are anisotropic: their properties vary with direction. That is the opposite of uniform.',
      'They are used where that directionality helps, such as turbine blades, not because they are uniform.',
      'So the statement is False.'
    ],
    trick: 'Single crystal means one orientation, and one orientation means direction-dependent properties. Uniform in all directions would be isotropic.'
  },
  'W26-24': {
    ask: 'True or false: "polycrystalline" refers to materials that can exist in more than one crystal form depending on T and P.',
    moves: [
      'Existing in more than one crystal form is polymorphism, not polycrystallinity.',
      '"Polycrystalline" means many grains of one structure, each oriented differently.',
      'So the statement is False.'
    ],
    trick: 'Same trap as F24 Q29, restated. Forms equals polymorphism; grains equals polycrystalline.'
  },
  'W26-25': {
    ask: 'True or false: etching is used to see the grain boundaries of a polycrystalline metal under the microscope.',
    moves: [
      'Etching attacks grain boundaries faster than grain interiors, so the boundaries show up as dark lines.',
      'That contrast is what makes the grain structure visible. So the statement is True.'
    ],
    trick: 'Etching reveals what polishing hides. If the question mentions seeing grain boundaries, etching is almost always the answer.'
  },
  'W26-26': {
    ask: 'True or false: stressed to its $0.2\\%$ offset yield strength, all the deformation is recovered on unloading.',
    moves: [
      'The $0.2\\%$ offset yield is defined by $0.002$ permanent strain remaining after unloading.',
      'By definition, not all of it recovers. So the statement is False.'
    ],
    trick: 'The "$0.2\\%$" in the name IS the unrecovered part. The definition itself disproves the statement.'
  },
  'W26-27': {
    ask: 'True or false: FCC and HCP both have close-packed planes; FCC stacks ABAB and HCP stacks ABCABC.',
    moves: [
      'Both do have close-packed planes, but the stacking is swapped: FCC stacks ABCABC and HCP stacks ABAB.',
      'So the statement is False.'
    ],
    trick: 'The swap is the trap. FCC is the three-letter repeat, HCP the two-letter one: match the letter count to the name.'
  },
  'W26-28': {
    ask: 'True or false: in FCC, $[111]$ is close-packed; in BCC, $[110]$ is close-packed.',
    moves: [
      'The close-packed directions are swapped too: FCC is $\\langle 110 \\rangle$ (the face diagonal) and BCC is $\\langle 111 \\rangle$ (the body diagonal).',
      'So the statement is False.'
    ],
    trick: 'Face diagonal for FCC, body diagonal for BCC. The diagonal that touches the most atoms wins, and in BCC that is the body diagonal.'
  },
  'W26-29': {
    ask: 'True or false: in the cubic system, planes and directions with identical Miller indices are mutually perpendicular.',
    moves: [
      'In the cubic system the direction $[hkl]$ is the normal to the plane $(hkl)$.',
      'Identical indices therefore mean perpendicular. So the statement is True.'
    ],
    trick: 'Cubic-only shortcut, same as A25 Q24. Inside the cubic system it always holds.'
  },
  'W26-30': {
    ask: 'True or false: the linear thermal expansion coefficient generally increases with decreasing bond energy.',
    moves: [
      'Weaker bonds mean a shallower, more lopsided potential well, and the atoms swing further apart on heating.',
      'So weaker bonding gives larger $\\alpha$. The statement is True.'
    ],
    trick: 'Weak bonds, big expansion. One well, one rule: shallow well, soft, melty, and stretchy with heat.'
  },
  'W26-31': {
    ask: 'True or false: in an ionic bond, the species donate or accept electrons to result in unstable configurations.',
    moves: [
      'Ionic bonding is electron transfer, but the result is STABLE: each ion reaches a filled outer shell.',
      'The transfer happens precisely because the filled-shell configuration is more stable.',
      'So the statement is False: the last word flips it.'
    ],
    trick: 'Read to the last word. "Unstable" is the lie: bonding of any kind happens because the result is more stable.'
  },
  'W26-32': {
    ask: 'True or false: in a tensile test, true stress is always greater than or equal to engineering stress.',
    moves: [
      'True stress uses the real, shrinking area: $\\sigma_T = \\sigma(1 + \\varepsilon)$.',
      'Since $1 + \\varepsilon \\geq 1$ in tension, true stress is always at least the engineering stress.',
      'So the statement is True.'
    ],
    trick: 'True stress corrects for the shrinking area, so it runs ahead of engineering stress from the first stretch onward.'
  },
  'W26-33': {
    ask: 'True or false: the equilibrium number of vacancies increases with temperature, reaching a maximum just below the melting point.',
    moves: [
      'Vacancy concentration rises exponentially with temperature: hotter means more vacancies.',
      'It keeps rising right up to melting, so the maximum sits just below the melting point.',
      'So the statement is True.'
    ],
    trick: 'Exponential rise, no turning point before melting. More heat, more vacancies, all the way up.'
  },
  'W26-34': {
    ask: 'True or false: diamond is a three-dimensional network of covalently bonded carbon atoms.',
    moves: [
      'Every carbon in diamond bonds covalently to four neighbours in a 3D network.',
      'That network is exactly why diamond is so hard. So the statement is True.'
    ],
    trick: '3D network plus covalent equals diamond. Graphite is the layered one: if the sentence said layers, it would be graphite.'
  },
  'W26-35': {
    ask: 'True or false: ductility measures how much a material elastically deforms before fracture.',
    moves: [
      'Ductility is plastic deformation before fracture: the permanent strain the material takes.',
      'Elastic deformation is recovered and is not ductility. So the statement is False.'
    ],
    trick: 'One word decides it: "elastically" should read "plastically". Swap that word and the sentence becomes true.'
  },
  'W26-36': {
    ask: 'True or false: valence electrons are the ones most responsible for the type of interatomic bonding.',
    moves: [
      'Bonding is done by the outermost electrons: they are the ones shared, transferred or pooled.',
      'Inner electrons stay put and play almost no part. So the statement is True.'
    ],
    trick: 'Bonding happens at the outside of the atom. Valence electrons are the only ones in reach of a neighbour.'
  },
  'W26-37': {
    ask: 'True or false: Fick\'s second law (non-steady state) is a PDE that must be solved for each set of boundary and initial conditions.',
    moves: [
      'Fick\'s second law is a partial differential equation in space and time.',
      'Its solution depends on the boundary and initial conditions, so each setup needs its own solution.',
      'So the statement is True.'
    ],
    trick: 'Non-steady state means the profile changes with time, so the conditions at the start and at the surface decide the answer.'
  },
  'W26-38': {
    ask: 'True or false: in a polycrystalline metal, different grains have different crystallographic orientations.',
    moves: [
      'A polycrystal is many grains of the same structure, each pointing a different way.',
      'Different orientations from grain to grain is the definition. So the statement is True.'
    ],
    trick: 'Same stuff, different aim. Orientation is the one thing that changes between grains.'
  },
  'W26-39': {
    ask: 'True or false: covalent bonds are directional.',
    moves: [
      'Covalent bonds form where orbitals overlap, which happens in specific directions.',
      'That directionality is why covalent structures have fixed bond angles. So the statement is True.'
    ],
    trick: 'Sharing needs overlap, and overlap has a direction. Metallic and ionic bonds are the non-directional ones.'
  },
  'W26-40': {
    ask: 'True or false: non-crystalline (amorphous) materials have grain boundaries but do not have crystals.',
    moves: [
      'No crystals means no grains, and no grains means no grain boundaries.',
      'Amorphous materials have neither. So the statement is False.'
    ],
    trick: 'Same trap as A25 Q22. Grain boundaries need grains first.'
  },
  'FX-1': {
    ask: 'In Figure 1 (energy and force curves with points A to E), where is the bond length read from?',
    moves: [
      'Bond length is the equilibrium spacing: where the net force is zero.',
      'On the force curve that is the zero crossing; on the energy curve it is the minimum. The marked points at those spots are B and E.',
      'So the bond length comes from points B or E.'
    ],
    trick: 'Two curves, one spacing. Force zero and energy minimum are the same place: if your point is neither, it is not the bond length.'
  },
  'FX-5': {
    ask: 'For the unit cell in Figure 2 (corner atoms plus a face-centre atom), which plane is close-packed?',
    moves: [
      'A close-packed plane is the plane where the atoms touch along the diagonal.',
      'In this cell that is the diagonal plane ACE: it slices through the face centre and the corners, with atoms touching across it.',
      'The other named planes miss the touching diagonal.'
    ],
    trick: 'Follow the touching atoms. The close-packed plane is the one the atoms lie shoulder to shoulder on.'
  },
  'FX-6': {
    ask: 'Atomic weight of Cu $= 63.54$ g/mol. How many atoms in $15$ g of copper?',
    moves: [
      'Moles: $15 / 63.54 = 0.2361$ mol.',
      'Atoms: $0.2361 \\times 6.022 \\times 10^{23} = 1.42 \\times 10^{23}$.'
    ],
    trick: 'Grams to moles to atoms: divide by the atomic weight, multiply by Avogadro. Reversing the two steps is the only way to miss this one.'
  },
  'FX-8': {
    ask: 'Which of these is a surface (interfacial) defect?',
    moves: [
      'Classify by dimension: a vacancy is a point defect (0D), a dislocation is a line defect (1D).',
      'A grain boundary is a two-dimensional interface between grains: a surface defect.',
      'So the grain boundary is the answer, and "all of a, b, c" fails because a and b are the wrong dimensions.'
    ],
    trick: 'Dimension is the classifier: 0D point, 1D line, 2D surface. Name the dimension first and the answer follows.'
  },
  'FX-9': {
    ask: 'Copper at $20^\\circ$C: $Q_v = 0.9$ eV/atom, $A = 63.5$ g/mol, $\\rho = 8.9$ g/cm$^3$. Vacancies per m$^3$?',
    moves: [
      'Sites per m$^3$: $N = \\rho N_A/A = 8.44 \\times 10^{28}$ m$^{-3}$.',
      'Vacancy fraction at $293$ K: $e^{-0.9/(8.62\\times10^{-5}\\cdot293)} = 3.3 \\times 10^{-16}$.',
      'Multiply: $N_v = 2.8 \\times 10^{13}$ per m$^3$. Word for word the same question as W26 Q8.'
    ],
    trick: 'Option (b), $2.2 \\times 10^{25}$, is the textbook answer at $1000^\\circ$C: a trap for anyone who memorised the number instead of the method.'
  },
  'FX-12': {
    ask: 'From Figure 5, name the defect shown.',
    moves: [
      'The figure shows a distorted lattice region with shear-direction arrows and an extra half-plane ending inside the crystal.',
      'An extra half-plane ending mid-crystal is an edge dislocation, not a screw dislocation, vacancy, impurity or grain boundary.'
    ],
    trick: 'Half-plane ending inside equals edge. A screw dislocation would show a spiral ramp, not a half-plane.'
  },
  'FX-31': {
    ask: 'True or false: when determining Miller indices, the plane must pass through the origin.',
    moves: [
      'The opposite is true: if a plane passes through the origin, you must MOVE the origin before reading intercepts, because an intercept of zero has no reciprocal.',
      'A plane never has to pass through the origin. So the statement is False.'
    ],
    trick: 'Origin on the plane means shift it. The rule is "move the origin", never "the plane must go through it".'
  },
  'FX-32': {
    ask: 'True or false: the more slip systems a metal has, the easier it is to deform.',
    moves: [
      'Slip systems are the available paths for dislocation motion.',
      'More paths means dislocations can move more freely, so the metal deforms more easily. FCC, with $12$ slip systems, is the classic ductile case.',
      'So the statement is True.'
    ],
    trick: 'More slip systems, more ways to yield. Count the systems when comparing ductility between crystal structures.'
  },
  'FX-35': {
    ask: 'True or false: most hardness tests press a hard indenter into the surface and measure the indentation.',
    moves: [
      'Hardness testing is indentation testing: press a hard indenter in, measure the size of the dent left behind.',
      'That is exactly how Brinell, Vickers and Rockwell tests work. So the statement is True.'
    ],
    trick: 'Hardness equals indentation. If the description mentions an indenter and a dent, it is describing a hardness test.'
  },
  'F17-1': {
    ask: 'From the figure, give the Miller indices of the shaded plane: it cuts x at $1$, runs parallel to y, and cuts z at $\\frac{1}{2}$.',
    moves: [
      'Intercepts: $x = 1$, $y = \\infty$ (parallel), $z = \\frac{1}{2}$.',
      'Reciprocals: $1$, $0$, $2$.',
      'Miller indices: $(102)$.'
    ],
    trick: 'Parallel to an axis means an infinite intercept, which reciprocates to $0$. A fraction like $(1\\,0\\,\\frac{1}{2})$ is unfinished: clear it before matching.'
  },
  'F17-2': {
    ask: 'Vacancies per m$^3$ at $1000^\\circ$C: $Q_v = 1.22$ eV/atom, $\\rho = 6.25$ g/cm$^3$, $A = 37.4$ g/mol.',
    moves: [
      'Sites per m$^3$: $N = \\rho N_A/A = 6.25 \\times 6.022 \\times 10^{23} / 37.4$ per cm$^3$ $= 1.006 \\times 10^{29}$ m$^{-3}$.',
      'Vacancy fraction at $1273$ K: $e^{-1.22/(8.62\\times10^{-5}\\cdot1273)} = 1.48 \\times 10^{-5}$.',
      'Multiply: $N_v = 1.49 \\times 10^{24}$ per m$^3$.'
    ],
    trick: 'Two unit traps in one question: grams per cubic centimetre to sites per cubic metre, and Celsius to Kelvin. Convert both before the exponent.'
  },
  'F17-12': {
    ask: 'Steel bar $20$ mm wide, $40$ mm thick, $E = 207$ GPa, $\\nu = 0.30$, pulled with $60$ kN. Change in width?',
    moves: [
      'The width change comes straight from Poisson: $\\Delta w = -\\nu F/(E\\,t)$, where $t$ is the thickness in the load direction.',
      '$\\Delta w = -0.3 \\cdot 60000 / (207 \\times 10^9 \\cdot 0.04) = -2.17$ µm, about $-2.18$ µm.',
      'The minus sign is the physics: the bar gets narrower as it is pulled.'
    ],
    trick: 'Width shrinks in tension, so the answer must be negative. A positive option has the sign backwards.'
  },
  'F17-16': {
    ask: 'Metals A (FCC, $a = 0.3$ nm) and B (BCC, $a = 0.4$ nm) have equal densities. Which atom is heavier?',
    moves: [
      'From $\\rho = nA/(a^3 N_A)$, atomic weight $A \\propto \\rho a^3/n$ at equal density.',
      'A: $0.3^3/4 = 0.027/4$. B: $0.4^3/2 = 0.064/2$. B\'s value is larger, so B\'s atoms are heavier.',
      'The bigger cell wins here despite BCC having fewer atoms per cell.'
    ],
    trick: 'Equal density does not mean equal atomic weight: the cell volume and the atoms-per-cell both count. Compare $a^3/n$, not $a$ alone.'
  },
  'F17-17': {
    ask: 'FCC copper, $a = 0.361$ nm. Atoms per nm$^2$ on the cube face?',
    moves: [
      'The cube face holds $2$ atoms: corners plus the face centre.',
      'Face area $= a^2 = 0.361^2 = 0.1303$ nm$^2$.',
      'Planar density $= 2/0.1303 = 15.35$ atoms per nm$^2$.'
    ],
    trick: 'Same $2/a^2$ pattern as W26 Q6, here with a number for $a$. Keep the units in nanometres throughout and the answer comes out per nm$^2$ directly.'
  },
  'F17-18': {
    ask: '10% Sn added to molten Cu gives a substitutional solid solution (bronze). Describe its structure.',
    moves: [
      'Substitutional means tin atoms take copper lattice sites: FCC copper with some copper atoms replaced by tin.',
      'Nothing is squeezed between atoms and no separate tin grains appear. Same five options as A25 Q10, shuffled, with Sn in place of Ni.'
    ],
    trick: '"Squeezed between" is interstitial every time. Substitutional always means replaced on lattice sites.'
  },
  'PPS1-1': {
    ask: 'Which electron configuration is correctly matched with its periodic group?',
    moves: [
      'Option A, first half: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^7 4s^2$ is cobalt ($Z = 27$), a partially filled inner $d$ subshell: a transition metal.',
      'Option A, second half: $1s^2 2s^2 2p^5$ is fluorine ($Z = 9$), one electron short of an octet: a halogen.',
      'Both halves of A are right. The other options swap alkali, alkaline earth, halogen and inert gas labels.'
    ],
    trick: 'Check both halves of each option. One right half and one wrong half still makes the whole option wrong.'
  },
  'PPS1-2': {
    ask: 'With Pauling\'s formula, find the dominant bond type and % ionic character of TiO$_2$ ($X_{Ti} = 1.5$, $X_O = 3.5$) and of diamond.',
    moves: [
      'TiO$_2$: $\\Delta X = 3.5 - 1.5 = 2.0$, so $\\%IC = 1 - e^{-0.25(2.0)^2} = 1 - e^{-1} = 63.2\\%$ ionic: mixed bonding, predominantly ionic.',
      'Diamond: one element only, so $\\Delta X = 0$ and $\\%IC = 0\\%$: pure covalent.',
      'That pair is option A.'
    ],
    trick: 'Same element means zero difference, zero ionic character, pure covalent. Any option giving diamond an ionic percentage is wrong on sight.'
  },
  'PPS1-3': {
    ask: 'For a K$^+$–Cl$^-$ pair with $E_A(r) = -1.436/r$ and $E_R(r) = 5.8 \\times 10^{-6}/r^9$ (eV, nm), find $r_0$ and $E_0$.',
    moves: [
      'Set the slope to zero: $dE_N/dr = 1.436/r^2 - 5.22 \\times 10^{-5}/r^{10} = 0$, giving $r_0^8 = 3.635 \\times 10^{-5}$, so $r_0 = 0.279$ nm.',
      'Put $r_0$ back into the energy: $E_0 = -1.436/0.2789 + 5.8 \\times 10^{-6}/(0.2789)^9 = -4.58$ eV.',
      'The bond energy is negative: bound states sit below zero.'
    ],
    trick: 'Equilibrium is where the slope is zero, not where the energy is zero. And $E_0$ must be negative: a positive bond energy would mean the pair flies apart.'
  },
  'PPS1-4': {
    ask: 'Find the attractive force $F_A$ between K$^+$ ($z_1 = +1$) and O$^{2-}$ ($z_2 = -2$) at $r = 1.5$ nm, and the repulsive force $F_R$ if this is the equilibrium spacing.',
    moves: [
      'Coulomb: $F_A = |z_1 z_2| e^2 / (4\\pi\\varepsilon_0 r^2) = 2(1.602 \\times 10^{-19})^2 / (4\\pi(8.854 \\times 10^{-12})(1.5 \\times 10^{-9})^2) = 2.05 \\times 10^{-10}$ N.',
      'At equilibrium the net force is zero, $F_N = F_A + F_R = 0$, so $F_R = -F_A$: equal in size, opposite in direction (repulsive).',
      'That is option A.'
    ],
    trick: 'At equilibrium the forces balance exactly. If the question says "equilibrium spacing", the repulsive force is just the negative of the attractive one: no second calculation needed.'
  },
  'PPS1-5': {
    ask: 'How many atoms in a gold wire ($d = 0.70$ mm, $L = 8.0$ cm, $\\rho = 19.3$ g/cm$^3$, $A = 196.97$ g/mol) and in one metric ton of iron ($A = 55.85$ g/mol)?',
    moves: [
      'Gold: $V = \\pi(0.035)^2(8.0) = 0.0308$ cm$^3$, mass $= 19.3 \\times 0.0308 = 0.594$ g, atoms $= (0.594/196.97) \\times 6.022 \\times 10^{23} = 1.82 \\times 10^{21}$.',
      'Iron: one metric ton $= 10^6$ g, atoms $= (10^6/55.85) \\times 6.022 \\times 10^{23} = 1.08 \\times 10^{28}$.',
      'That pair is option A.'
    ],
    trick: 'Two volume traps: the wire radius is half the diameter ($0.035$ cm, not $0.07$), and a metric ton is $10^6$ g. Both halves must be right for the option to match.'
  }
};

/** Resolve a per-question crack from any id shape that carries a gate id
 * (`x:MIAE221:F24-1`, `MIAE221:F24-1`, `TX_MIAE221_F24-1`, or the bare id). */
export function getQuestionCrack(questionId: string): QuestionCrack | null {
  const m = questionId.match(/(F24|A25|W26|FX|F17|PPS1)-\d+$/);
  const raw = m ? m[0] : questionId.replace(/^x:[^:]+:/, '');
  return MIAE221_QUESTION_CRACKS[raw] ?? null;
}
