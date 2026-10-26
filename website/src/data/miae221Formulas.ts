// Every MIAE 221 formula in one place (the course's Formulas tab), in course order.
// sheet: true = printed on the official MECH 221 equation sheet handed out in the exam;
// sheet: false = used in the lectures but NOT on the sheet, so it has to be memorised.
// lesson: the Learn lesson that teaches it (learn/curriculum/miae221.ts).

export interface SheetFormula {
  id: string;
  name: string;
  tex: string;
  meaning: string; // plain words, may contain $…$
  vars?: [symbol: string, meaning: string, unit: string][];
  sheet: boolean;
  lesson?: string;
  note?: string;
}

export interface FormulaChapter {
  id: string;
  title: string;
  ch: string;
  formulas: SheetFormula[];
}

export const MIAE221_CONSTANTS: { sym: string; name: string; value: string }[] = [
  { sym: 'N_A', name: 'Avogadro’s number', value: String.raw`6.023\times10^{23}\ \text{atoms/mol}` },
  { sym: 'k', name: 'Boltzmann’s constant', value: String.raw`8.62\times10^{-5}\ \text{eV/atom·K}` },
  { sym: 'R', name: 'Gas constant', value: String.raw`8.314\ \text{J/(mol·K)}` },
  { sym: 'c', name: 'Speed of light', value: String.raw`3\times10^{8}\ \text{m/s}` },
  { sym: 'h', name: 'Planck’s constant', value: String.raw`6.63\times10^{-34}\ \text{J·s} = 4.13\times10^{-15}\ \text{eV·s}` },
  { sym: '|e|', name: 'Electron charge (not on the sheet)', value: String.raw`1.602\times10^{-19}\ \text{C}` },
  { sym: '1\\ \\text{eV}', name: 'Electron-volt (not on the sheet)', value: String.raw`1.602\times10^{-19}\ \text{J}` }
];

export const MIAE221_FORMULAS: FormulaChapter[] = [
  {
    id: 'atoms',
    title: 'Atoms & bonding',
    ch: 'Ch 2 · Lectures 2–3',
    formulas: [
      {
        id: 'moles',
        name: 'Moles and number of atoms',
        tex: String.raw`n_{\text{mol}} = \frac{m}{A} \qquad N_{\text{atoms}} = n_{\text{mol}}\,N_A`,
        meaning: 'Mass divided by atomic weight gives moles; moles times Avogadro’s number gives atoms.',
        vars: [
          ['m', 'mass of the sample', 'g'],
          ['A', 'atomic weight', 'g/mol'],
          ['N_A', 'Avogadro’s number', 'atoms/mol']
        ],
        sheet: false,
        lesson: 'atomic-structure'
      },
      {
        id: 'fnet',
        name: 'Net force between two atoms',
        tex: String.raw`F_{Net} = F_A + F_R`,
        meaning: 'The attractive and repulsive forces add. At the equilibrium spacing $r_0$ they cancel: $F_{Net} = 0$.',
        vars: [
          ['F_A', 'attractive force', 'N'],
          ['F_R', 'repulsive force', 'N']
        ],
        sheet: true,
        lesson: 'bond-energy'
      },
      {
        id: 'efromf',
        name: 'Energy from force',
        tex: String.raw`E = \int F\,dr`,
        meaning: 'The bonding energy is the integral of the force over separation. Where the force is zero, the energy is at its minimum.',
        sheet: true,
        lesson: 'bond-energy'
      },
      {
        id: 'enet',
        name: 'Net bonding energy',
        tex: String.raw`E_{Net} = E_A + E_R`,
        meaning: 'Attractive and repulsive energies add. The depth of the minimum, $E_0$, is the bonding energy: a deeper well means a higher melting point and a stiffer material.',
        sheet: true,
        lesson: 'bond-energy'
      },
      {
        id: 'equil',
        name: 'Equilibrium spacing',
        tex: String.raw`F_{Net}(r_0) = 0 \iff \left.\frac{dE_{Net}}{dr}\right|_{r_0} = 0`,
        meaning: 'The bond length $r_0$ is read where the force curve crosses zero, which is the bottom of the energy curve.',
        sheet: false,
        lesson: 'bond-energy'
      },
      {
        id: 'ionic',
        name: '% ionic character',
        tex: String.raw`\%\,\text{ionicity} = \left\{1 - \exp\!\left[-0.25\,(X_A - X_B)^2\right]\right\}\times 100`,
        meaning: 'The bigger the electronegativity difference, the more ionic the bond.',
        vars: [['X_A,\\ X_B', 'electronegativities of the two elements', '–']],
        sheet: true,
        lesson: 'bonding'
      }
    ]
  },
  {
    id: 'crystals',
    title: 'Crystal structures',
    ch: 'Ch 3 · Lectures 4–5',
    formulas: [
      {
        id: 'ncell',
        name: 'Atoms per unit cell',
        tex: String.raw`n = N_{\text{inside}} + \tfrac{1}{2}N_{\text{face}} + \tfrac{1}{8}N_{\text{corner}}`,
        meaning: 'A corner atom is shared by 8 cells, a face atom by 2, an inside atom by 1. SC: $n = 1$, BCC: $n = 2$, FCC: $n = 4$, HCP: $n = 6$.',
        sheet: false,
        lesson: 'unit-cells'
      },
      {
        id: 'aR',
        name: 'Cell edge from atomic radius',
        tex: String.raw`\text{SC: } a = 2R \qquad \text{BCC: } a = \frac{4R}{\sqrt{3}} \qquad \text{FCC: } a = 2R\sqrt{2}`,
        meaning: 'Atoms touch along the cube edge (SC), the body diagonal (BCC) or the face diagonal (FCC).',
        vars: [
          ['a', 'lattice parameter (cube edge)', 'nm'],
          ['R', 'atomic radius', 'nm']
        ],
        sheet: false,
        lesson: 'unit-cells'
      },
      {
        id: 'apf',
        name: 'Atomic packing factor',
        tex: String.raw`APF = \frac{n \cdot \tfrac{4}{3}\pi R^3}{V_C}`,
        meaning: 'The fraction of the cell volume filled by atoms. SC 0.52, BCC 0.68, FCC and HCP 0.74.',
        vars: [
          ['n', 'atoms per cell', '–'],
          ['V_C', 'cell volume ($a^3$ for cubic)', 'nm³']
        ],
        sheet: false,
        lesson: 'unit-cells'
      },
      {
        id: 'cn',
        name: 'Coordination numbers',
        tex: String.raw`CN_{SC} = 6 \qquad CN_{BCC} = 8 \qquad CN_{FCC} = CN_{HCP} = 12`,
        meaning: 'The number of nearest neighbours touching each atom.',
        sheet: false,
        lesson: 'unit-cells'
      },
      {
        id: 'hcp',
        name: 'HCP cell',
        tex: String.raw`\frac{c}{a} = 1.633 \qquad V_C = \frac{3\sqrt{3}}{2}\,a^2 c \qquad a = 2R`,
        meaning: 'Ideal hexagonal close-packed cell: 6 atoms, APF 0.74.',
        sheet: false,
        lesson: 'unit-cells'
      },
      {
        id: 'rho',
        name: 'Theoretical density',
        tex: String.raw`\rho = \frac{nA}{V_C\,N_A}`,
        meaning: 'Mass of the atoms in one cell divided by the cell volume.',
        vars: [
          ['n', 'atoms per cell', '–'],
          ['A', 'atomic weight', 'g/mol'],
          ['V_C', 'cell volume', 'cm³'],
          ['N_A', 'Avogadro’s number', 'atoms/mol']
        ],
        sheet: true,
        lesson: 'theoretical-density',
        note: 'Convert nm³ to cm³ (1 nm³ = 10⁻²¹ cm³) to get g/cm³.'
      }
    ]
  },
  {
    id: 'cryst',
    title: 'Crystallography & X-rays',
    ch: 'Ch 3 · Lectures 5–6',
    formulas: [
      {
        id: 'dir',
        name: 'Direction indices [uvw]',
        tex: String.raw`[u\,v\,w] \propto (x_2 - x_1,\; y_2 - y_1,\; z_2 - z_1)`,
        meaning: 'Head minus tail, in units of the cell edge, then multiply to clear fractions and reduce to the smallest integers. A negative index gets a bar: $[\\bar{1}10]$.',
        sheet: false,
        lesson: 'directions'
      },
      {
        id: 'plane',
        name: 'Plane indices (hkl)',
        tex: String.raw`(h\,k\,l) \propto \left(\frac{1}{x},\; \frac{1}{y},\; \frac{1}{z}\right)`,
        meaning: 'Take the intercepts with the axes (in units of the cell edge), take reciprocals (parallel → ∞ → 0), then clear fractions. If the plane passes through the origin, move the origin first.',
        sheet: false,
        lesson: 'planes'
      },
      {
        id: 'ld',
        name: 'Linear density',
        tex: String.raw`LD = \frac{\text{atoms centred on the direction}}{\text{length of the direction}}`,
        meaning: 'Count only atoms whose centres lie on the line; atoms at the two ends count ½ each.',
        sheet: false,
        lesson: 'linear-planar-density'
      },
      {
        id: 'pd',
        name: 'Planar density',
        tex: String.raw`PD = \frac{\text{atoms centred on the plane}}{\text{area of the plane}}`,
        meaning: 'Count only atoms whose centres lie in the plane, using the fraction of each atom inside the plane’s outline. FCC (111) and BCC (110) are the densest planes.',
        sheet: false,
        lesson: 'linear-planar-density'
      },
      {
        id: 'dhkl',
        name: 'Interplanar spacing (cubic)',
        tex: String.raw`d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}`,
        meaning: 'The distance between neighbouring parallel (hkl) planes in a cubic crystal.',
        vars: [['a', 'lattice parameter', 'nm']],
        sheet: true,
        lesson: 'xrd'
      },
      {
        id: 'bragg',
        name: 'Bragg’s law',
        tex: String.raw`n\lambda = 2\,d_{hkl}\sin\theta`,
        meaning: 'X-rays reflect strongly when the path difference between neighbouring planes is a whole number of wavelengths. The diffractometer reports $2\theta$: halve it first.',
        vars: [
          ['n', 'order of reflection (usually 1)', '–'],
          ['\\lambda', 'X-ray wavelength', 'nm'],
          ['\\theta', 'Bragg angle (half of $2\\theta$)', '°']
        ],
        sheet: true,
        lesson: 'xrd'
      },
      {
        id: 'reflect',
        name: 'Which planes reflect',
        tex: String.raw`\text{BCC: } h+k+l \text{ even} \qquad \text{FCC: } h,k,l \text{ all odd or all even}`,
        meaning: 'The other planes cancel out and give no peak.',
        sheet: false,
        lesson: 'xrd'
      }
    ]
  },
  {
    id: 'imperf',
    title: 'Imperfections in solids',
    ch: 'Ch 4 · Lectures 7–8',
    formulas: [
      {
        id: 'nv',
        name: 'Equilibrium number of vacancies',
        tex: String.raw`N_v = N\exp\!\left(\frac{-Q_v}{kT}\right)`,
        meaning: 'Vacancies increase exponentially with temperature.',
        vars: [
          ['N', 'number of atomic sites per volume', 'atoms/m³'],
          ['Q_v', 'energy to form a vacancy', 'eV/atom'],
          ['k', 'Boltzmann’s constant', 'eV/atom·K'],
          ['T', 'absolute temperature', 'K']
        ],
        sheet: true,
        lesson: 'point-defects',
        note: 'T in kelvin; Q in eV pairs with k = 8.62 × 10⁻⁵ eV/atom·K.'
      },
      {
        id: 'nsites',
        name: 'Atomic sites per volume',
        tex: String.raw`N = \frac{N_A\,\rho}{A}`,
        meaning: 'The N to use in the vacancy equation.',
        vars: [
          ['\\rho', 'density', 'g/cm³'],
          ['A', 'atomic weight', 'g/mol']
        ],
        sheet: false,
        lesson: 'point-defects'
      },
      {
        id: 'wt',
        name: 'Weight percent',
        tex: String.raw`C_1 = \frac{m_1}{m_1 + m_2}\times 100`,
        meaning: 'Composition of element 1 by mass.',
        sheet: true,
        lesson: 'solid-solutions'
      },
      {
        id: 'at',
        name: 'Weight % to atom %',
        tex: String.raw`C'_1 = \frac{C_1 A_2}{C_1 A_2 + C_2 A_1}\times 100`,
        meaning: 'Converts a composition by mass into a composition by number of atoms.',
        sheet: false,
        lesson: 'solid-solutions'
      },
      {
        id: 'astm',
        name: 'ASTM grain size number',
        tex: String.raw`N = 2^{\,n-1}`,
        meaning: 'N grains per square inch at 100× magnification; a larger n means smaller grains.',
        vars: [
          ['N', 'grains per in² at 100×', '–'],
          ['n', 'ASTM grain size number', '–']
        ],
        sheet: true,
        lesson: 'dislocations-grains'
      }
    ]
  },
  {
    id: 'diffusion',
    title: 'Diffusion',
    ch: 'Ch 5 · Lectures 9–10',
    formulas: [
      {
        id: 'flux',
        name: 'Diffusion flux',
        tex: String.raw`J = -\frac{M}{At}`,
        meaning: 'Mass crossing a unit area per unit time. The minus sign on the sheet only gives the direction: use the magnitude $M/(At)$.',
        vars: [
          ['M', 'mass diffused', 'kg'],
          ['A', 'area', 'm²'],
          ['t', 'time', 's']
        ],
        sheet: true,
        lesson: 'fick-first'
      },
      {
        id: 'fick1',
        name: 'Fick’s first law (steady state)',
        tex: String.raw`J = -D\,\frac{dC}{dx}`,
        meaning: 'Flux runs down the concentration gradient. For a straight profile, $dC/dx = (C_B - C_A)/(x_B - x_A)$.',
        vars: [
          ['D', 'diffusion coefficient', 'm²/s'],
          ['dC/dx', 'concentration gradient', 'kg/m⁴']
        ],
        sheet: true,
        lesson: 'fick-first'
      },
      {
        id: 'fick2',
        name: 'Fick’s second law (non-steady state)',
        tex: String.raw`\frac{dC}{dt} = D\,\frac{d^2C}{dx^2}`,
        meaning: 'How the concentration profile changes with time.',
        sheet: true,
        lesson: 'fick-second'
      },
      {
        id: 'erf',
        name: 'Semi-infinite solid solution',
        tex: String.raw`\frac{C_x - C_0}{C_s - C_0} = 1 - \operatorname{erf}\!\left(\frac{x}{2\sqrt{Dt}}\right)`,
        meaning: 'Concentration at depth $x$ after time $t$, for a constant surface concentration. Look up erf in the table given with the exam.',
        vars: [
          ['C_0', 'initial concentration', 'wt% or kg/m³'],
          ['C_s', 'surface concentration', 'wt% or kg/m³'],
          ['C_x', 'concentration at depth x', 'wt% or kg/m³']
        ],
        sheet: true,
        lesson: 'fick-second'
      },
      {
        id: 'dT',
        name: 'Diffusion coefficient vs temperature',
        tex: String.raw`D = D_0\exp\!\left(\frac{-Q_d}{RT}\right)`,
        meaning: 'Diffusion speeds up exponentially with temperature. Taking ln gives a straight line of slope $-Q_d/R$ against $1/T$.',
        vars: [
          ['D_0', 'pre-exponential factor', 'm²/s'],
          ['Q_d', 'activation energy', 'J/mol'],
          ['R', 'gas constant', 'J/(mol·K)'],
          ['T', 'absolute temperature', 'K']
        ],
        sheet: true,
        lesson: 'diffusion-mechanisms'
      },
      {
        id: 'dtconst',
        name: 'Same profile, different time or temperature',
        tex: String.raw`D_1 t_1 = D_2 t_2`,
        meaning: 'The same concentration at the same depth needs the same $Dt$.',
        sheet: false,
        lesson: 'fick-second'
      }
    ]
  },
  {
    id: 'mech',
    title: 'Mechanical properties',
    ch: 'Ch 6 · Lectures 10–11',
    formulas: [
      {
        id: 'stress',
        name: 'Engineering stress and strain',
        tex: String.raw`\sigma = \frac{F}{A_0} \qquad \varepsilon = \frac{l_i - l_0}{l_0} = \frac{\Delta l}{l_0}`,
        meaning: 'Load per original area; change in length per original length.',
        vars: [
          ['F', 'load', 'N'],
          ['A_0', 'original cross-section', 'm²'],
          ['l_0', 'original length', 'm']
        ],
        sheet: false,
        lesson: 'elastic'
      },
      {
        id: 'hooke',
        name: 'Hooke’s law',
        tex: String.raw`\sigma = E\,\varepsilon`,
        meaning: 'Stress is proportional to strain in the elastic region; $E$ is the slope of that line.',
        vars: [['E', 'Young’s modulus', 'GPa']],
        sheet: false,
        lesson: 'elastic'
      },
      {
        id: 'shear',
        name: 'Shear stress and strain',
        tex: String.raw`\tau = \frac{F}{A_0} = G\gamma`,
        meaning: 'Shear stress is proportional to shear strain; $G$ is the shear modulus.',
        sheet: true,
        lesson: 'elastic'
      },
      {
        id: 'poisson',
        name: 'Poisson’s ratio',
        tex: String.raw`\nu = -\frac{\varepsilon_x}{\varepsilon_z} = -\frac{\varepsilon_y}{\varepsilon_z}`,
        meaning: 'How much the sides shrink compared with how much the length grows ($z$ is the loading axis).',
        sheet: true,
        lesson: 'elastic'
      },
      {
        id: 'eg',
        name: 'E, G and ν',
        tex: String.raw`E = 2G(1 + \nu)`,
        meaning: 'Links the three elastic constants of an isotropic material.',
        sheet: true,
        lesson: 'elastic'
      },
      {
        id: 'el',
        name: 'Ductility: % elongation',
        tex: String.raw`\%EL = \left(\frac{l_f - l_0}{l_0}\right)\times 100`,
        meaning: 'Plastic strain at fracture. Off a curve: fracture strain minus the elastic part that springs back.',
        sheet: true,
        lesson: 'tensile'
      },
      {
        id: 'ar',
        name: 'Ductility: % reduction in area',
        tex: String.raw`\%AR = \left(\frac{A_0 - A_f}{A_0}\right)\times 100`,
        meaning: 'How much the cross-section shrank at the fracture.',
        sheet: true,
        lesson: 'tensile'
      },
      {
        id: 'ur',
        name: 'Resilience',
        tex: String.raw`U_r = \tfrac{1}{2}\sigma_y\varepsilon_y = \frac{\sigma_y^2}{2E}`,
        meaning: 'Elastic energy stored per unit volume up to yielding: the area under the elastic line.',
        sheet: true,
        lesson: 'tensile'
      },
      {
        id: 'offset',
        name: '0.2 % offset yield strength',
        tex: String.raw`\text{line of slope } E \text{ from } \varepsilon = 0.002`,
        meaning: 'Draw a line parallel to the elastic line starting at a strain of 0.002; where it cuts the curve is $\sigma_y$.',
        sheet: false,
        lesson: 'tensile'
      },
      {
        id: 'recovery',
        name: 'Elastic recovery on unloading',
        tex: String.raw`\varepsilon_{\text{elastic}} = \frac{\sigma}{E} \qquad \varepsilon_{\text{plastic}} = \varepsilon_{\text{total}} - \frac{\sigma}{E}`,
        meaning: 'When the load is removed, the elastic part springs back along a line of slope $E$; the plastic part stays.',
        sheet: false,
        lesson: 'tensile'
      },
      {
        id: 'true',
        name: 'True stress and true strain',
        tex: String.raw`\sigma_T = \frac{F}{A_i} = \sigma(1 + \varepsilon) \qquad \varepsilon_T = \ln\frac{l_i}{l_0} = \ln(1 + \varepsilon)`,
        meaning: 'Uses the actual area and length; the shortcuts hold only up to the start of necking.',
        sheet: false,
        lesson: 'plastic-true-stress'
      },
      {
        id: 'hollomon',
        name: 'Strain hardening (Hollomon)',
        tex: String.raw`\sigma_T = K\,\varepsilon_T^{\,n}`,
        meaning: 'The true curve between yielding and necking; $n$ is the strain-hardening exponent.',
        sheet: false,
        lesson: 'plastic-true-stress'
      },
      {
        id: 'safety',
        name: 'Safe working stress',
        tex: String.raw`\sigma_w = \frac{\sigma_y}{N}`,
        meaning: 'Divide the yield strength by a factor of safety N (usually 1.2 to 4).',
        sheet: false,
        lesson: 'plastic-true-stress'
      }
    ]
  },
  {
    id: 'slip',
    title: 'Dislocations & strengthening',
    ch: 'Ch 7 · Lectures 12–13',
    formulas: [
      {
        id: 'schmid',
        name: 'Resolved shear stress (Schmid’s law)',
        tex: String.raw`\tau_R = \sigma\cos\phi\cos\lambda`,
        meaning: 'The part of the applied stress that pushes along the slip direction on the slip plane.',
        vars: [
          ['\\phi', 'angle between the load and the slip-plane normal', '°'],
          ['\\lambda', 'angle between the load and the slip direction', '°']
        ],
        sheet: false,
        lesson: 'slip-systems'
      },
      {
        id: 'crss',
        name: 'Yielding of a single crystal',
        tex: String.raw`\sigma_y = \frac{\tau_{CRSS}}{(\cos\phi\cos\lambda)_{\max}}`,
        meaning: 'Slip starts when $\tau_R$ on the best-oriented slip system reaches the critical resolved shear stress.',
        sheet: false,
        lesson: 'slip-systems'
      },
      {
        id: 'hallpetch',
        name: 'Grain-size strengthening (Hall–Petch)',
        tex: String.raw`\sigma_y = \sigma_0 + k_y\,d^{-1/2}`,
        meaning: 'Smaller grains block dislocations more often, so the metal gets stronger.',
        vars: [['d', 'average grain diameter', 'm']],
        sheet: false,
        lesson: 'strengthening'
      },
      {
        id: 'cw',
        name: 'Percent cold work',
        tex: String.raw`\%CW = \left(\frac{A_0 - A_d}{A_0}\right)\times 100`,
        meaning: 'How much the cross-section was reduced by deforming the metal cold.',
        sheet: false,
        lesson: 'strengthening'
      }
    ]
  },
  {
    id: 'phase',
    title: 'Phase diagrams',
    ch: 'Ch 9',
    formulas: [
      {
        id: 'lever',
        name: 'Lever rule',
        tex: String.raw`W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L} \qquad W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L}`,
        meaning: 'In a two-phase region, the fraction of each phase is the opposite arm of the tie line divided by the whole tie line.',
        vars: [
          ['C_0', 'overall alloy composition', 'wt%'],
          ['C_L,\\ C_\\alpha', 'compositions at the ends of the tie line', 'wt%']
        ],
        sheet: false,
        lesson: 'phase-diagrams'
      }
    ]
  },
  {
    id: 'ceramics-polymers',
    title: 'Ceramics & polymers',
    ch: 'Ch 12–15',
    formulas: [
      {
        id: 'k1c',
        name: 'Fracture toughness',
        tex: String.raw`K_{Ic} = Y\sigma\sqrt{\pi a}`,
        meaning: 'The stress at which a crack of length $a$ grows. $a$ is the full length of a surface crack, half the length of an internal one.',
        vars: [
          ['Y', 'geometry factor', '–'],
          ['a', 'crack length', 'm']
        ],
        sheet: true,
        lesson: 'ceramics'
      },
      {
        id: 'flexrect',
        name: 'Flexural strength, rectangular bar',
        tex: String.raw`\sigma_{fs} = \frac{3F_f L}{2bd^2}`,
        meaning: 'Three-point bend test: the stress at fracture.',
        vars: [
          ['F_f', 'load at fracture', 'N'],
          ['L', 'distance between supports', 'm'],
          ['b,\\ d', 'width and height', 'm']
        ],
        sheet: true,
        lesson: 'ceramics'
      },
      {
        id: 'flexcirc',
        name: 'Flexural strength, circular bar',
        tex: String.raw`\sigma_{fs} = \frac{F_f L}{\pi R^3}`,
        meaning: 'Three-point bend test on a round specimen of radius $R$.',
        sheet: true,
        lesson: 'ceramics'
      },
      {
        id: 'flexE',
        name: 'Modulus from a bend test',
        tex: String.raw`E = \frac{F}{\delta}\,\frac{L^3}{4bd^3} \;\;(\text{rectangular}) \qquad E = \frac{F}{\delta}\,\frac{L^3}{12\pi R^4} \;\;(\text{circular})`,
        meaning: '$F/\\delta$ is the slope of the load–deflection line.',
        sheet: true,
        lesson: 'ceramics'
      },
      {
        id: 'porosityS',
        name: 'Strength vs porosity',
        tex: String.raw`\sigma_{fs} = \sigma_0\exp(-nP)`,
        meaning: 'Pores cut the strength of a ceramic exponentially.',
        vars: [['P', 'volume fraction of pores', '–']],
        sheet: true,
        lesson: 'ceramics'
      },
      {
        id: 'porosityE',
        name: 'Modulus vs porosity',
        tex: String.raw`E = E_0(1 - 1.9P + 0.9P^2)`,
        meaning: 'Pores also lower the stiffness.',
        sheet: true,
        lesson: 'ceramics'
      },
      {
        id: 'mn',
        name: 'Molecular weight averages',
        tex: String.raw`\bar{M}_n = \sum x_i M_i \qquad \bar{M}_w = \sum w_i M_i \qquad DP = \frac{\bar{M}_n}{m}`,
        meaning: 'Number-average uses number fractions $x_i$, weight-average uses weight fractions $w_i$; DP is the number of repeat units of mass $m$.',
        sheet: false,
        lesson: 'polymers'
      },
      {
        id: 'ts',
        name: 'Polymer tensile strength vs molecular weight',
        tex: String.raw`TS = TS_\infty - \frac{A}{\bar{M}_n}`,
        meaning: 'Longer chains make a stronger polymer, up to a limit $TS_\infty$.',
        sheet: true,
        lesson: 'polymers'
      },
      {
        id: 'cryst',
        name: '% crystallinity of a polymer',
        tex: String.raw`\%\,\text{crystallinity} = \frac{\rho_c(\rho_s - \rho_a)}{\rho_s(\rho_c - \rho_a)}\times 100`,
        meaning: 'From the densities of the sample, the fully crystalline and the fully amorphous polymer.',
        vars: [
          ['\\rho_s', 'density of the sample', 'g/cm³'],
          ['\\rho_c,\\ \\rho_a', 'fully crystalline / fully amorphous densities', 'g/cm³']
        ],
        sheet: true,
        lesson: 'polymers'
      }
    ]
  },
  {
    id: 'functional',
    title: 'Electrical, thermal, magnetic & optical',
    ch: 'Ch 18–21',
    formulas: [
      {
        id: 'ohm',
        name: 'Ohm’s law and resistance',
        tex: String.raw`\Delta V = IR \qquad R = \frac{\rho L}{A} = \frac{L}{A\sigma}`,
        meaning: 'Resistivity $\\rho$ is a material property; conductivity $\\sigma = 1/\\rho$.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'matthiessen',
        name: 'Matthiessen’s rule',
        tex: String.raw`\rho_{total} = \rho_{thermal} + \rho_{impurity} + \rho_{def} \qquad \rho_{thermal} = \rho_0 + aT \qquad \rho_{impurity} = Ac_i(1 - c_i)`,
        meaning: 'The resistivity of a metal is the sum of the thermal, impurity and deformation parts.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'cond',
        name: 'Electrical conductivity',
        tex: String.raw`\sigma = n|e|\mu_e + p|e|\mu_h`,
        meaning: 'Electrons and holes both carry current. In an intrinsic semiconductor, $n = p$.',
        vars: [
          ['n,\\ p', 'electrons / holes per volume', 'm⁻³'],
          ['\\mu_e,\\ \\mu_h', 'mobilities', 'm²/(V·s)']
        ],
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'heatcap',
        name: 'Heat capacity',
        tex: String.raw`C = \frac{q}{\Delta T} = \frac{\delta q}{dT} \qquad C_V = \left(\frac{\delta q}{dT}\right)_V \qquad C_P = \left(\frac{\delta q}{dT}\right)_P`,
        meaning: 'Energy needed per degree of temperature rise, in J/(mol·K).',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'expansion',
        name: 'Thermal expansion',
        tex: String.raw`\frac{\Delta L}{L_0} = \alpha(T_2 - T_1)`,
        meaning: 'Strain from heating; $\\alpha$ is the linear coefficient of thermal expansion.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'conduction',
        name: 'Heat conduction',
        tex: String.raw`q = -k\,\frac{dT}{dx}`,
        meaning: 'Heat flows down the temperature gradient; $k$ is the thermal conductivity.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'magnetic',
        name: 'Magnetic field and induction',
        tex: String.raw`H = \frac{NI}{L} \qquad B = \mu H \qquad \mu_r = \frac{\mu}{\mu_0}`,
        meaning: 'A coil of N turns carrying current I sets up the field H; the material turns it into induction B.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'magnetization',
        name: 'Magnetization and susceptibility',
        tex: String.raw`B = \mu_0 H + \mu_0 M \qquad M = \chi_m H \qquad \chi_m = \mu_r - 1`,
        meaning: 'M is the material’s own contribution to the induction.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'photon',
        name: 'Photon energy',
        tex: String.raw`E = h\nu = \frac{hc}{\lambda}`,
        meaning: 'Shorter wavelength, more energetic photon.',
        sheet: true,
        lesson: 'functional-properties'
      },
      {
        id: 'light',
        name: 'Light balance',
        tex: String.raw`I_0 = I_T + I_A + I_R`,
        meaning: 'Incident light is transmitted, absorbed or reflected. (The sheet prints the last term as $I_P$.)',
        sheet: true,
        lesson: 'functional-properties'
      }
    ]
  }
];
