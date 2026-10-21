export interface SubSubjectVideo {
  id: string;
  subtopicNum: number;
  subtopicTitle: string;
  lectureRef: string; // e.g. "Lecture 4–6 (Callister Ch. 3)"
  videoTitle: string;
  channel: string;
  duration: string; // e.g. "8:45" (< 10 mins)
  durationSec: number;
  youtubeId: string;
  embedUrl: string;
  watchUrl: string;
  summary: string;
  keyTakeaways: string[];
}

export const MIAE221_YOUTUBE_COMPANION: SubSubjectVideo[] = [
  {
    id: 'yt-01-intro-bonding',
    subtopicNum: 1,
    subtopicTitle: 'Atomic Bonding & Material Classes',
    lectureRef: 'Lecture 1–3 (Callister Ch. 1–2)',
    videoTitle: 'An Introduction to Material Properties & Interatomic Bonding',
    channel: 'The Efficient Engineer',
    duration: '8:15',
    durationSec: 495,
    youtubeId: 'aQf6Q8t1FQE',
    embedUrl: 'https://www.youtube.com/embed/aQf6Q8t1FQE',
    watchUrl: 'https://www.youtube.com/watch?v=aQf6Q8t1FQE',
    summary: 'Clear, 3D animated walkthrough of primary bonding (ionic, covalent, metallic) and how bond energy curves govern stiffness and melting temperature.',
    keyTakeaways: [
      'Ionic: electron transfer, non-directional, brittle ceramics.',
      'Covalent: electron sharing, directional, high hardness.',
      'Metallic: sea of delocalized electrons, high ductility & conductivity.',
      'Steeper net force curve slope at r0 = higher elastic modulus (E).'
    ]
  },
  {
    id: 'yt-02-crystal-structures',
    subtopicNum: 2,
    subtopicTitle: 'Crystal Structures (FCC, BCC, HCP) & APF',
    lectureRef: 'Lecture 4–5 (Callister Ch. 3)',
    videoTitle: 'Understanding Metals: Crystal Structures & Atomic Packing',
    channel: 'The Efficient Engineer',
    duration: '8:30',
    durationSec: 510,
    youtubeId: 'PaGJwOPg2kU',
    embedUrl: 'https://www.youtube.com/embed/PaGJwOPg2kU',
    watchUrl: 'https://www.youtube.com/watch?v=PaGJwOPg2kU',
    summary: 'Visual breakdown of metallic unit cells: FCC (a = 2√2 R, APF = 0.74), BCC (a = 4R/√3, APF = 0.68), and close-packed stacking sequences.',
    keyTakeaways: [
      'FCC: 4 atoms/unit cell, coordination number 12, APF = 74%.',
      'BCC: 2 atoms/unit cell, coordination number 8, APF = 68%.',
      'Theoretical density formula: ρ = (n * A) / (Vc * NA).'
    ]
  },
  {
    id: 'yt-03-miller-indices',
    subtopicNum: 3,
    subtopicTitle: 'Miller Indices for Crystallographic Planes (hkl)',
    lectureRef: 'Lecture 6 (Callister Ch. 3)',
    videoTitle: 'Crystal Plane Miller Indices (Step-by-Step Tutorial)',
    channel: 'LearnChemE',
    duration: '8:45',
    durationSec: 525,
    youtubeId: 'W5v_3vH7p2E',
    embedUrl: 'https://www.youtube.com/embed/W5v_3vH7p2E',
    watchUrl: 'https://www.youtube.com/watch?v=W5v_3vH7p2E',
    summary: 'The gold-standard concise walkthrough on finding coordinate intercepts, taking reciprocals, clearing fractions, and enclosing in parentheses (hkl).',
    keyTakeaways: [
      'Step 1: If plane passes through origin, translate the origin.',
      'Step 2: Read intercepts with axes x, y, z in units of lattice constants a, b, c.',
      'Step 3: Take reciprocals of intercepts (parallel axis = intercept ∞ → index 0).',
      'Step 4: Reduce to smallest integers (h k l); negative intercepts written with overbar.'
    ]
  },
  {
    id: 'yt-04-point-defects',
    subtopicNum: 4,
    subtopicTitle: 'Imperfections in Solids & Hume-Rothery Rules',
    lectureRef: 'Lecture 7–8 (Callister Ch. 4)',
    videoTitle: 'Point Defects & Solid Solution Hume-Rothery Criteria',
    channel: 'LearnChemE',
    duration: '6:15',
    durationSec: 375,
    youtubeId: '2_j_xV3sQBo',
    embedUrl: 'https://www.youtube.com/embed/2_j_xV3sQBo',
    watchUrl: 'https://www.youtube.com/watch?v=2_j_xV3sQBo',
    summary: 'Concise explanation of vacancies, self-interstitials, and the 4 Hume-Rothery rules required for complete substitutional solid solubility.',
    keyTakeaways: [
      'Equilibrium vacancy concentration: Nv = N * exp(-Qv / kT).',
      'Hume-Rothery 1: Atomic radius difference ΔR < 15%.',
      'Hume-Rothery 2: Same crystal structure.',
      'Hume-Rothery 3: Similar electronegativity (avoid compounds).',
      'Hume-Rothery 4: Solute must have equal or higher valence.'
    ]
  },
  {
    id: 'yt-05-diffusion',
    subtopicNum: 5,
    subtopicTitle: 'Diffusion in Solids (Fick’s 1st & 2nd Laws)',
    lectureRef: 'Lecture 9 (Callister Ch. 5)',
    videoTitle: 'Diffusion in Solids & Fick’s Laws Made Simple',
    channel: 'LearnChemE',
    duration: '7:10',
    durationSec: 430,
    youtubeId: 'W0E0nQe3v68',
    embedUrl: 'https://www.youtube.com/embed/W0E0nQe3v68',
    watchUrl: 'https://www.youtube.com/watch?v=W0E0nQe3v68',
    summary: 'Explains steady-state diffusion flux J = -D(dC/dx) and non-steady state diffusion with the Gaussian error function solution (Cx - C0)/(Cs - C0) = 1 - erf(x / 2√Dt).',
    keyTakeaways: [
      'Vacancy vs Interstitial: interstitial diffusion is much faster (smaller atoms, more sites).',
      'Arrhenius temperature effect: D = D0 * exp(-Qd / RT).',
      'Constant surface concentration depth profile depends on x / 2√(Dt).'
    ]
  },
  {
    id: 'yt-06-tensile-curve',
    subtopicNum: 6,
    subtopicTitle: 'Mechanical Properties & Stress-Strain Curve',
    lectureRef: 'Lecture 10–12 (Callister Ch. 6)',
    videoTitle: 'Understanding Material Strength, Ductility and Toughness',
    channel: 'The Efficient Engineer',
    duration: '8:12',
    durationSec: 492,
    youtubeId: 'WSRqJdT2COE',
    embedUrl: 'https://www.youtube.com/embed/WSRqJdT2COE',
    watchUrl: 'https://www.youtube.com/watch?v=WSRqJdT2COE',
    summary: 'The ultimate visual guide to tensile test curves: Hooke’s law, 0.2% offset yield strength (σy), ultimate tensile strength (UTS), necking, and fracture.',
    keyTakeaways: [
      'Elastic: linear reversible deformation (σ = E * ε).',
      'Yield strength (0.2% offset): draw parallel line at ε = 0.002 to find intersection.',
      'Resilience Ur = (σy^2) / (2E) = area under elastic curve.',
      'Toughness = total area under the entire stress-strain curve up to fracture.'
    ]
  },
  {
    id: 'yt-07-schmid-slip',
    subtopicNum: 7,
    subtopicTitle: 'Dislocations, Slip Systems & Schmid’s Law',
    lectureRef: 'Lecture 11–12 (Callister Ch. 7)',
    videoTitle: 'Resolved Shear Stress & Schmid’s Law in Single Crystals',
    channel: 'LearnChemE',
    duration: '5:40',
    durationSec: 340,
    youtubeId: 's48K4mK_E7c',
    embedUrl: 'https://www.youtube.com/embed/s48K4mK_E7c',
    watchUrl: 'https://www.youtube.com/watch?v=s48K4mK_E7c',
    summary: 'How dislocation glide causes plastic deformation on close-packed slip systems, and how Schmid’s law τR = σ * cos(λ) * cos(ϕ) determines critical yield.',
    keyTakeaways: [
      'Slip occurs along most densely packed directions on most densely packed planes.',
      'FCC slip systems: {111} planes and <110> directions = 12 slip systems.',
      'Schmid factor m = cos(λ) * cos(ϕ); max possible value is 0.5 (at 45° angles).'
    ]
  },
  {
    id: 'yt-08-lever-rule',
    subtopicNum: 8,
    subtopicTitle: 'Binary Phase Diagrams & The Lever Rule',
    lectureRef: 'Lecture 13, 15 (Callister Ch. 9)',
    videoTitle: 'Lever Rule for Binary Phase Diagrams in 4 Minutes',
    channel: 'LearnChemE',
    duration: '4:35',
    durationSec: 275,
    youtubeId: 'q_QkP56Dk9k',
    embedUrl: 'https://www.youtube.com/embed/q_QkP56Dk9k',
    watchUrl: 'https://www.youtube.com/watch?v=q_QkP56Dk9k',
    summary: 'A fast, foolproof visual demonstration of drawing horizontal tie lines and using the opposite arm over total arm length to find phase mass fractions.',
    keyTakeaways: [
      'Phase compositions: read directly down from tie-line ends.',
      'Liquid fraction W_L = (C_alpha - C_0) / (C_alpha - C_L) [opposite arm].',
      'Solid fraction W_alpha = (C_0 - C_L) / (C_alpha - C_L) [opposite arm].',
      'W_L + W_alpha must always equal exactly 1.0 (100%).'
    ]
  },
  {
    id: 'yt-09-iron-carbon',
    subtopicNum: 9,
    subtopicTitle: 'Iron-Carbon (Fe-Fe3C) Phase Diagram & Steel',
    lectureRef: 'Lecture 16 (Callister Ch. 9)',
    videoTitle: 'The Iron-Carbon Phase Diagram: Ferrite, Austenite & Pearlite',
    channel: 'The Efficient Engineer',
    duration: '8:50',
    durationSec: 530,
    youtubeId: 'vN4q0qBqR3M',
    embedUrl: 'https://www.youtube.com/embed/vN4q0qBqR3M',
    watchUrl: 'https://www.youtube.com/watch?v=vN4q0qBqR3M',
    summary: 'Explains the 0.76 wt% C eutectoid reaction (γ → α + Fe3C), proeutectoid ferrite/cementite, and the alternating lamellar structure of pearlite.',
    keyTakeaways: [
      'Ferrite (α): BCC iron, max 0.022 wt% C at 727°C (soft, ductile).',
      'Austenite (γ): FCC iron, high solubility (up to 2.14 wt% C at 1147°C).',
      'Cementite (Fe3C): interstitial compound at 6.70 wt% C (very hard and brittle).',
      'Pearlite: microconstituent of alternating α and Fe3C plates formed at 727°C.'
    ]
  },
  {
    id: 'yt-10-phase-transformations',
    subtopicNum: 10,
    subtopicTitle: 'Phase Transformations & TTT Diagrams',
    lectureRef: 'Lecture 26–27 (Callister Ch. 10)',
    videoTitle: 'Isothermal Transformation (TTT) Diagrams & Martensite',
    channel: 'LearnChemE',
    duration: '6:25',
    durationSec: 385,
    youtubeId: '9oK2GqG_rLk',
    embedUrl: 'https://www.youtube.com/embed/9oK2GqG_rLk',
    watchUrl: 'https://www.youtube.com/watch?v=9oK2GqG_rLk',
    summary: 'How cooling rate controls steel microstructure: slow cooling → pearlite; moderate quench → bainite; rapid quench → diffusionless martensite (BCT).',
    keyTakeaways: [
      'C-curve nose represents optimum temperature for nucleation and growth.',
      'Quenching faster than critical cooling rate avoids the pearlite nose.',
      'Martensite: diffusionless, body-centered tetragonal (BCT), extremely hard & brittle.',
      'Tempering martensite (heating below eutectoid) restores ductility.'
    ]
  },
  {
    id: 'yt-11-polymers-ceramics',
    subtopicNum: 11,
    subtopicTitle: 'Ceramics, Polymers & Glass Transition (Tg)',
    lectureRef: 'Lecture 17–21 (Callister Ch. 12–15)',
    videoTitle: 'Polymers, Ceramics & Glass Transition Temperature (Tg)',
    channel: 'CrashCourse Engineering',
    duration: '7:40',
    durationSec: 460,
    youtubeId: 'jWpB7_6X81Q',
    embedUrl: 'https://www.youtube.com/embed/jWpB7_6X81Q',
    watchUrl: 'https://www.youtube.com/watch?v=jWpB7_6X81Q',
    summary: 'A fast-paced review of polymer chains, cross-linking, thermoplastics vs thermosets, and the difference between glass transition Tg and melting Tm.',
    keyTakeaways: [
      'Thermoplastics: linear/branched chains, melt upon heating, recyclable.',
      'Thermosets: cross-linked/network covalent bonds, degrade rather than melt.',
      'Below Tg: hard, rigid, glassy; Above Tg: rubbery, flexible.'
    ]
  }
];
