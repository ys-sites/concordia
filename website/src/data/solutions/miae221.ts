import { SolutionUpgrade, t } from './types';

// MIAE 221 — baby-step solutions (calculations) and reasoning steps (concept questions that had none),
// following the teacher's Lectures 1–5 and Practice Problem Set #1.
export const MIAE221_SOLUTIONS: Record<string, SolutionUpgrade> = {
  Q_MIAE221_008: {
    steps: [
      { title: 'Convert mass to moles (divide by the atomic mass)', math: t`n = \frac{m}{A} = \frac{6.0\ \text{g}}{12.011\ \text{g/mol}} = 0.4995\ \text{mol}` },
      { title: "Convert moles to atoms (multiply by Avogadro's number)", math: t`N = n\,N_A = 0.4995 \times 6.022\times10^{23}` },
      { title: 'Evaluate', math: t`N \approx 3.01\times10^{23}\ \text{atoms}` },
      { title: 'Sanity check', note: t`6 g is about half of 12 g (one mole of C), so about half of $6.022\times10^{23}$.` }
    ],
    answer: t`\approx 3.01\times10^{23}\ \text{atoms}`,
    whyWrong: {
      '1': t`$6.022\times10^{23}$ is one full mole (12 g of carbon). 6 g is only half a mole.`,
      '2': t`$7.23\times10^{24} = 12.011 \times 6.022\times10^{23}$ multiplies the atomic mass by $N_A$; the mass of the sample was never used.`,
      '3': t`0.5 is the number of moles, not atoms. Multiply by $N_A$ to count atoms.`
    }
  },

  Q_MIAE221_014: {
    steps: [
      { title: 'Electronegativity difference', math: t`\Delta X = X_O - X_{Ti} = 3.5 - 1.5 = 2.0` },
      { title: 'Square it and multiply by 0.25', math: t`0.25\,(\Delta X)^{2} = 0.25 \times 4.0 = 1.0` },
      { title: "Apply Pauling's formula", math: t`\%\text{IC} = \left[1 - e^{-0.25(\Delta X)^{2}}\right]\times100 = \left(1 - e^{-1}\right)\times100` },
      { title: 'Evaluate', math: t`= (1 - 0.368)\times100 \approx 63.2\%` }
    ],
    answer: t`\approx 63.2\%\ \text{ionic}`,
    whyWrong: {
      '1': t`$36.8\% = e^{-1}\times100$: the "$1 -$" in the formula was forgotten. That value is the covalent fraction.`,
      '2': t`6.1% is the ZnTe example ($\Delta X = 0.5$), not Ti–O.`,
      '3': t`The formula approaches 100% only as $\Delta X \to \infty$; no real bond is 100% ionic.`
    }
  },

  Q_MIAE221_020: {
    steps: [
      { title: 'Counting rule: corner atoms are shared by 8 cells, face atoms by 2, body atoms by 1', math: t`N = N_i + \frac{N_f}{2} + \frac{N_c}{8}` },
      { title: 'Simple cubic: 8 corners only', math: t`N_{SC} = 0 + 0 + \frac{8}{8} = 1` },
      { title: 'BCC: 8 corners + 1 body centre', math: t`N_{BCC} = 1 + 0 + \frac88 = 2` },
      { title: 'FCC: 8 corners + 6 face centres', math: t`N_{FCC} = 0 + \frac62 + \frac88 = 4` }
    ],
    answer: t`SC = 1,\ BCC = 2,\ FCC = 4`,
    whyWrong: {
      '1': t`8, 9 and 14 count every atom drawn as a whole atom; corner and face atoms are shared with neighbouring cells.`,
      '2': t`BCC and FCC were swapped: the face-centred cell has more atoms (4) because of its 6 half-atoms.`,
      '3': t`Each count was doubled; recheck the sharing fractions $\tfrac18$ and $\tfrac12$.`
    }
  },

  Q_MIAE221_021: {
    steps: [
      { title: 'HCP hexagonal-prism cell: corner atoms are shared by 6 cells', math: t`12 \times \tfrac16 = 2` },
      { title: 'Top and bottom face centres are shared by 2 cells', math: t`2 \times \tfrac12 = 1` },
      { title: 'Three atoms sit fully inside the middle layer', math: t`3 \times 1 = 3` },
      { title: 'Total', math: t`N_{HCP} = 2 + 1 + 3 = 6` }
    ],
    answer: t`6`,
    whyWrong: {
      '1': t`2 counts only the corner contribution ($12 \times \tfrac16$); the face and interior atoms are missing.`,
      '2': t`4 is the FCC count; the HCP prism is a larger cell.`,
      '3': t`12 is the coordination number of HCP, not the atoms per cell.`
    }
  },

  Q_MIAE221_023: {
    steps: [
      { title: 'Atoms touch along the face diagonal', math: t`\sqrt2\,a = 4R \quad\Rightarrow\quad a = 2\sqrt2\,R` },
      { title: 'Cell volume', math: t`V_C = a^{3} = \left(2\sqrt2\,R\right)^{3} = 16\sqrt2\,R^{3}` },
      { title: 'Volume of the 4 atoms in the cell', math: t`V_S = 4 \times \tfrac43\pi R^{3} = \tfrac{16}{3}\pi R^{3}` },
      { title: 'Divide', math: t`\text{APF} = \frac{V_S}{V_C} = \frac{\tfrac{16}{3}\pi R^{3}}{16\sqrt2\,R^{3}} = \frac{\pi}{3\sqrt2}` },
      { title: 'Evaluate', math: t`\text{APF} \approx 0.74` }
    ],
    answer: t`0.74`,
    whyWrong: {
      '1': t`0.68 is the BCC packing factor (2 atoms, $a = 4R/\sqrt3$).`,
      '2': t`0.52 is simple cubic (1 atom, $a = 2R$).`,
      '3': t`0.78 does not correspond to any of the cubic structures; recompute $(2\sqrt2)^{3} = 16\sqrt2 \approx 22.6$.`
    }
  },

  Q_MIAE221_024: {
    steps: [
      { title: 'Atoms touch along the body diagonal', math: t`\sqrt3\,a = 4R \quad\Rightarrow\quad a = \frac{4R}{\sqrt3}` },
      { title: 'Cell volume', math: t`V_C = a^{3} = \frac{64R^{3}}{3\sqrt3}` },
      { title: 'Volume of the 2 atoms in the cell', math: t`V_S = 2\times\tfrac43\pi R^{3} = \tfrac83\pi R^{3}` },
      { title: 'Divide', math: t`\text{APF} = \frac{\tfrac83\pi R^{3}}{\tfrac{64R^{3}}{3\sqrt3}} = \frac{8\pi \cdot 3\sqrt3}{3 \cdot 64} = \frac{\sqrt3\,\pi}{8}` },
      { title: 'Evaluate', math: t`\text{APF} \approx 0.68` }
    ],
    answer: t`0.68`,
    whyWrong: {
      '1': t`0.74 is FCC/HCP (close-packed). BCC is less dense.`,
      '2': t`0.52 is simple cubic.`,
      '3': t`0.64 does not match; check that the cube diagonal gives $a = 4R/\sqrt3$, not $a = 2R$.`
    }
  },

  Q_MIAE221_031: {
    steps: [
      { title: 'FCC lattice parameter from the radius', math: t`a = 2\sqrt2\,R = 2\sqrt2\,(0.128\ \text{nm}) = 0.362\ \text{nm} = 3.62\times10^{-8}\ \text{cm}` },
      { title: 'Cell volume', math: t`V_C = a^{3} = \left(3.62\times10^{-8}\ \text{cm}\right)^{3} = 4.75\times10^{-23}\ \text{cm}^{3}` },
      { title: 'Mass of atoms in one cell ($n = 4$ for FCC)', math: t`nA = 4 \times 63.5 = 254\ \text{g/mol}` },
      { title: 'Theoretical density', math: t`\rho = \frac{nA}{V_C N_A} = \frac{254}{\left(4.75\times10^{-23}\right)\left(6.022\times10^{23}\right)} = \frac{254}{28.6}` },
      { title: 'Evaluate', math: t`\rho \approx 8.89\ \text{g/cm}^{3}\quad(\text{measured: } 8.94)` }
    ],
    answer: t`\rho \approx 8.89\ \text{g/cm}^{3}`,
    whyWrong: {
      '1': t`4.45 g/cm³ uses $n = 2$ (the BCC count). Copper is FCC, so $n = 4$.`,
      '2': t`17.8 g/cm³ uses $n = 8$: the 8 corner atoms were counted as whole atoms.`,
      '3': t`2.22 g/cm³ uses $n = 1$.`
    }
  },

  Q_MIAE221_032: {
    steps: [
      { title: 'Head minus tail (tail at the origin)', math: t`(x, y, z) = \left(\tfrac12,\ 1,\ 0\right) - (0, 0, 0)` },
      { title: 'Clear the fraction: multiply by 2', math: t`\left(\tfrac12,\ 1,\ 0\right)\times 2 = (1,\ 2,\ 0)` },
      { title: 'Write in square brackets (a direction)', math: t`[1\,2\,0]` }
    ],
    answer: t`[1\,2\,0]`,
    whyWrong: {
      '1': t`The components keep their order $x, y, z$: the $x$-component is the $\tfrac12$ (becoming 1).`,
      '2': t`Round brackets $(\,)$ denote a plane; directions use square brackets $[\,]$.`,
      '3': t`Miller indices are the smallest whole numbers: clear the fraction.`
    }
  },

  Q_MIAE221_033: {
    steps: [
      { title: 'Intercepts', math: t`x = 1,\quad y = 2,\quad z = \infty` },
      { title: 'Take reciprocals', math: t`\tfrac11,\quad \tfrac12,\quad \tfrac1\infty = 0` },
      { title: 'Clear fractions: multiply by 2', math: t`(2,\ 1,\ 0)` },
      { title: 'Write in round brackets (a plane)', math: t`(2\,1\,0)` }
    ],
    answer: t`(2\,1\,0)`,
    whyWrong: {
      '1': t`$(1\,2\,0)$ uses the intercepts directly; Miller indices of a plane are the reciprocals.`,
      '2': t`Reciprocals must be cleared to whole numbers.`,
      '3': t`Square brackets denote a direction; a plane uses round brackets.`
    }
  },

  Q_MIAE221_069: {
    steps: [
      { title: 'Molar volume = mass of one mole ÷ density', math: t`V_m = \frac{A}{\rho}` },
      { title: 'Substitute', math: t`V_m = \frac{196.97\ \text{g/mol}}{19.32\ \text{g/cm}^{3}}` },
      { title: 'Evaluate (units: cm³/mol)', math: t`V_m \approx 10.2\ \text{cm}^{3}` }
    ],
    answer: t`\approx 10.2\ \text{cm}^{3}`,
    whyWrong: {
      '1': t`3805 cm³ multiplies $A \times \rho$; the units would be g²/(mol·cm³), not a volume.`,
      '2': t`0.098 is $\rho/A$ (moles per cm³), the inverse of what is asked.`,
      '3': t`19.3 is the density itself.`
    }
  },

  Q_MIAE221_079: {
    steps: [
      { title: 'Radius in cm (0.70 mm diameter)', math: t`r = \frac{0.70\ \text{mm}}{2} = 0.35\ \text{mm} = 0.035\ \text{cm}` },
      { title: 'Wire volume (cylinder)', math: t`V = \pi r^{2}L = \pi\,(0.035)^{2}(8.0) = 0.0308\ \text{cm}^{3}` },
      { title: 'Mass', math: t`m = \rho V = 19.3 \times 0.0308 = 0.594\ \text{g}` },
      { title: 'Moles', math: t`n = \frac{0.594}{196.97} = 3.02\times10^{-3}\ \text{mol}` },
      { title: 'Atoms', math: t`N = n N_A = 3.02\times10^{-3}\times6.022\times10^{23} \approx 1.82\times10^{21}` }
    ],
    answer: t`\approx 1.82\times10^{21}\ \text{atoms}`,
    whyWrong: {
      '1': t`$7.3\times10^{21}$ is 4 times too big: the diameter (0.070 cm) was used as the radius.`,
      '2': t`A factor of 100 too big: the radius 0.35 mm was used as 0.35 cm, and $r^{2}$ makes the error $10^{2}$.`,
      '3': t`About 600 times too small; no single step of the method produces it. Recompute $V = \pi r^{2}L$ with $r = 0.035$ cm and $L = 8.0$ cm, then $m = \rho V$, $n = m/A$, $N = nN_A$.`
    }
  },

  Q_MIAE221_090: {
    steps: [
      { title: 'Head minus tail', math: t`\left(1,\ \tfrac12,\ 1\right) - (0,0,0) = \left(1,\ \tfrac12,\ 1\right)` },
      { title: 'Multiply by 2 to clear the fraction', math: t`(2,\ 1,\ 2)` },
      { title: 'Direction notation', math: t`[2\,1\,2]` }
    ],
    answer: t`[2\,1\,2]`,
    whyWrong: {
      '1': t`Every component is multiplied by the same factor: $1 \to 2$, $\tfrac12 \to 1$, $1 \to 2$.`,
      '2': t`Indices must be whole numbers.`,
      '3': t`Round brackets mean a plane.`
    }
  },

  Q_MIAE221_091: {
    steps: [
      { title: 'Intercepts', math: t`1,\quad 1,\quad \tfrac12` },
      { title: 'Reciprocals', math: t`1,\quad 1,\quad 2` },
      { title: 'Already whole numbers', math: t`(1\,1\,2)` }
    ],
    answer: t`(1\,1\,2)`,
    whyWrong: {
      '1': t`$(2\,2\,1)$ multiplies the intercepts by 2 instead of taking reciprocals.`,
      '2': t`$(1\,1\,\tfrac12)$ copies the intercepts; take reciprocals.`,
      '3': t`Square brackets denote a direction.`
    }
  },

  Q_MIAE221_094: {
    steps: [
      { title: 'BCC lattice parameter', math: t`a = \frac{4R}{\sqrt3} = \frac{4(0.124)}{1.732} = 0.2864\ \text{nm} = 2.864\times10^{-8}\ \text{cm}` },
      { title: 'Cell volume', math: t`V_C = a^{3} = 2.349\times10^{-23}\ \text{cm}^{3}` },
      { title: 'BCC has $n = 2$', math: t`nA = 2 \times 55.85 = 111.7\ \text{g/mol}` },
      { title: 'Theoretical density', math: t`\rho = \frac{111.7}{\left(2.349\times10^{-23}\right)\left(6.022\times10^{23}\right)} = \frac{111.7}{14.14}` },
      { title: 'Evaluate', math: t`\rho \approx 7.90\ \text{g/cm}^{3}` }
    ],
    answer: t`\rho \approx 7.90\ \text{g/cm}^{3}`,
    whyWrong: {
      '1': t`3.95 g/cm³ uses $n = 1$; BCC has a corner share (1) plus a body atom (1).`,
      '2': t`15.8 g/cm³ uses $n = 4$ (the FCC count).`,
      '3': t`8.89 g/cm³ is copper's density.`
    }
  },

  Q_MIAE221_095: {
    steps: [
      { title: 'FCC lattice parameter', math: t`a = 2\sqrt2\,R` },
      { title: 'Cube it: $2^{3} = 8$ and $(\sqrt2)^{3} = 2\sqrt2$', math: t`a^{3} = 8 \times 2\sqrt2\,R^{3} = 16\sqrt2\,R^{3}` }
    ],
    answer: t`V_C = 16\sqrt2\,R^{3}`,
    whyWrong: {
      '1': t`$64R^{3}/(3\sqrt3)$ is the BCC cell volume ($a = 4R/\sqrt3$).`,
      '2': t`$8R^{3} = (2R)^{3}$ is the simple cubic cell.`,
      '3': t`$4R^{3}$ is not a cube of any lattice parameter relation.`
    }
  },

  Q_MIAE221_096: {
    steps: [
      { title: 'Atoms per unit volume = atoms per cell ÷ cell volume', math: t`\frac{n}{V_C} = \frac{4}{4.75\times10^{-23}\ \text{cm}^{3}}` },
      { title: 'Evaluate', math: t`\approx 8.4\times10^{22}\ \text{atoms/cm}^{3}` },
      { title: 'Cross-check with density', math: t`\frac{\rho N_A}{A} = \frac{8.89 \times 6.022\times10^{23}}{63.5} \approx 8.4\times10^{22}\ \checkmark` }
    ],
    answer: t`\approx 8.4\times10^{22}\ \text{atoms}`,
    whyWrong: {
      '1': t`$2.1\times10^{22}$ uses one atom per cell; FCC has 4.`,
      '2': t`$6.0\times10^{23}$ is one mole of atoms (63.5 g of Cu, about 7 cm³), not 1 cm³.`,
      '3': t`$4.0\times10^{23}$ does not follow from $n/V_C$; recheck the division.`
    }
  },

  Q_MIAE221_101: {
    steps: [
      { title: 'Electronegativity difference', math: t`\Delta X = 3.5 - 1.2 = 2.3` },
      { title: 'Square and multiply by 0.25', math: t`0.25\,(2.3)^{2} = 0.25 \times 5.29 = 1.3225` },
      { title: 'Exponential', math: t`e^{-1.3225} \approx 0.266` },
      { title: "Pauling's formula", math: t`\%\text{IC} = (1 - 0.266)\times100 \approx 73\%` }
    ],
    answer: t`\approx 73\%`,
    whyWrong: {
      '1': t`27% is $e^{-1.3225}$, the covalent fraction. Subtract it from 1.`,
      '2': t`50% is a guess for "in between"; the formula gives 73% for $\Delta X = 2.3$.`,
      '3': t`No bond is 100% ionic in Pauling's formula.`
    }
  },

  // ---- Concept questions that previously had no reasoning ----
  Q_MIAE221_043: {
    steps: [
      { title: 'Recall the Lecture 1 list for space', note: t`Space: shuttle tiles (ceramic thermal protection) and high-temperature alloys.` },
      { title: 'Match the other items to their fields', note: t`Semiconductors → communications; batteries and solar power → energy; auto bodies → transportation.` }
    ]
  },
  Q_MIAE221_050: {
    steps: [
      { title: 'Cause', note: t`The horizontal stabilizer jackscrew nut threads wore excessively (poor lubrication), so the stabilizer could not be controlled.` },
      { title: 'Why the others are wrong', note: t`Crosswind stiffening is Tacoma Narrows, the ductile-to-brittle transition is the Liberty ships, and rivet-hole fatigue is the Comet.` }
    ]
  },
  Q_MIAE221_051: {
    steps: [
      { title: 'Cause', note: t`A design problem, not a material failure: the deck lacked stiffening against crosswinds, so wind-driven oscillation grew until collapse.` },
      { title: 'Takeaway', note: t`Not every failure in the Lecture 1 list is a materials failure; some are pure design errors.` }
    ]
  },
  Q_MIAE221_052: {
    steps: [
      { title: 'Cause', note: t`An inclusion (defect) in the turbine disc of the #2 engine started a crack that grew until the disc burst, destroying the hydraulics.` },
      { title: 'Link to the course', note: t`A microstructural defect → crack → catastrophic failure: structure controls properties.` }
    ]
  },
  Q_MIAE221_053: {
    steps: [
      { title: 'Cause', note: t`Cyclic cabin pressurisation caused metal fatigue; the stress concentrated at rivet holes near the square window openings.` },
      { title: 'Key word', note: t`Fatigue = failure under repeated loading below the static strength.` }
    ]
  },
  Q_MIAE221_059: {
    steps: [
      { title: 'Definition of a property', note: t`A property is the material's response to a stimulus, independent of the part's shape and size.` },
      { title: 'Apply it', note: t`Both cubes are the same pure copper, so density, conductivity and modulus are identical.` }
    ]
  },
  Q_MIAE221_063: {
    steps: [
      { title: 'Bohr vs wave-mechanical', note: t`Bohr: electrons in discrete circular orbits. Wave-mechanical: an electron is a wave–particle whose position is a probability distribution (an electron cloud).` }
    ]
  },
  Q_MIAE221_065: {
    steps: [
      { title: 'Pauling scale', note: t`Values run from about 0.7 (Cs, Fr, most electropositive) to 4.0 (F, most electronegative).` }
    ]
  },
  Q_MIAE221_066: {
    steps: [
      { title: 'Low electronegativity', note: t`Group IA atoms have one loosely held valence electron that they give up easily, forming $+$ ions.` },
      { title: 'Name', note: t`Atoms that give up electrons readily are electropositive (the opposite of electronegative).` }
    ]
  },
  Q_MIAE221_067: {
    steps: [
      { title: 'Range from the slides', note: t`Most engineering solids lie between about 1 g/cm³ (polymers) and about 23 g/cm³ (the densest metals such as Os and Ir).` }
    ]
  },
  Q_MIAE221_071: {
    steps: [
      { title: 'Bonding energy vs thermal energy', note: t`A substance is solid when bonding energy is large compared with thermal energy at room temperature, liquid when moderate, gas when small.` }
    ]
  },
  Q_MIAE221_073: {
    steps: [
      { title: 'Covalent bonds vary widely', note: t`Diamond (very strong bonds, $T_m > 3550$ °C, insulator) and bismuth (weak, $T_m = 270$ °C) are both covalent; GaAs is a semiconductor.` },
      { title: 'Conclusion', note: t`No single set of properties describes covalent materials.` }
    ]
  },
  Q_MIAE221_074: {
    steps: [
      { title: 'Compare two metals', note: t`Mercury: 68 kJ/mol (liquid at room temperature). Tungsten: 850 kJ/mol ($T_m \approx 3410$ °C). Both are metallic bonds.` }
    ]
  },
  Q_MIAE221_075: {
    steps: [
      { title: 'Non-directional sea of electrons', note: t`The valence electrons are shared by all ion cores, so bonds are not tied to particular neighbours.` },
      { title: 'Consequence', note: t`Planes of atoms can slide past each other without breaking the bonding, so metals deform plastically (ductility).` }
    ]
  },
  Q_MIAE221_076: {
    steps: [
      { title: 'Orders of magnitude', note: t`Secondary (van der Waals, hydrogen) bonds: about 10 kJ/mol. Primary (ionic, covalent, metallic): about 50–1000 kJ/mol, roughly 10–100 times stronger.` }
    ]
  },
  Q_MIAE221_077: {
    steps: [
      { title: 'AlP: neighbours in period 3', math: t`\Delta X = X_P - X_{Al} = 2.1 - 1.5 = 0.6 \;\Rightarrow\; \text{small} \Rightarrow \text{mostly covalent}` },
      { title: 'BaS: far apart in the table (IIA and VIA)', math: t`\Delta X = X_S - X_{Ba} = 2.5 - 0.9 = 1.6 \;\Rightarrow\; \text{large} \Rightarrow \text{mostly ionic}` }
    ]
  },
  Q_MIAE221_078: {
    steps: [
      { title: 'Count the valence electrons (outer shell $n = 2$)', math: t`2s^{2}\,2p^{5} \;\Rightarrow\; 2 + 5 = 7` },
      { title: 'One short of a filled shell', note: t`It needs one electron to reach the neon configuration, which is the defining feature of the halogens (Group VIIA). This is fluorine.` }
    ]
  },
  Q_MIAE221_081: {
    steps: [
      { title: 'Two different scales', note: t`Atomic structure: inside one atom (protons, neutrons, electron configuration). Crystal structure: how many atoms are arranged in space in the solid.` }
    ]
  },
  Q_MIAE221_083: {
    steps: [
      { title: 'Definition', note: t`The lattice parameters are the unit-cell edge lengths $a, b, c$ (and angles). Edges are typically a few ångströms, e.g. $a = 0.362$ nm for Cu.` }
    ]
  },
  Q_MIAE221_088: {
    steps: [
      { title: 'Structures of common metals (Lecture 5)', note: t`HCP: Mg, Co, Ti, Zn, Zr. FCC: Cu, Ni, Au, Ag, Al. BCC: Cr, W, Mo, Ta, α-Fe.` }
    ]
  },
  Q_MIAE221_089: {
    steps: [
      { title: 'Tetragonal', note: t`Two equal edges and one different, all angles 90°: $a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$.` },
      { title: 'Compare', note: t`Cubic has $a = b = c$; orthorhombic has $a \neq b \neq c$; hexagonal has $\gamma = 120^\circ$.` }
    ]
  },
  Q_MIAE221_092: {
    steps: [
      { title: 'Why it fails', note: t`A plane through the origin has an intercept of 0 on some axis, and $1/0$ is undefined.` },
      { title: 'Fix', note: t`Translate the origin to another corner of the cell (or pick a parallel equivalent plane), then take intercepts.` }
    ]
  },
  Q_MIAE221_093: {
    steps: [
      { title: 'Bonding', note: t`Copper is a metal: metallic bonding.` },
      { title: 'Structure', note: t`Cu is FCC, so each atom has CN = 12 and the APF is 0.74.` }
    ]
  }
};
