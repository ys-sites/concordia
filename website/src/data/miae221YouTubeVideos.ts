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
    videoTitle: 'Bonding Overview (Texas A&M, Intro to Materials)',
    channel: 'Patrick Shamberger',
    duration: '20:03',
    durationSec: 1203,
    youtubeId: 'whmLL77C8e0',
    embedUrl: 'https://www.youtube.com/embed/whmLL77C8e0',
    watchUrl: 'https://www.youtube.com/watch?v=whmLL77C8e0',
    summary: 'University lecture on the four bond types (ionic, covalent, metallic and secondary), with examples of the materials each one makes.',
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
    videoTitle: 'Miller Indices Practice Examples',
    channel: 'MrClean1796',
    duration: '6:51',
    durationSec: 411,
    youtubeId: 'n84gzYlB0BQ',
    embedUrl: 'https://www.youtube.com/embed/n84gzYlB0BQ',
    watchUrl: 'https://www.youtube.com/watch?v=n84gzYlB0BQ',
    summary: 'Worked practice on planes and directions in the cubic cell: intercepts, reciprocals, clearing fractions and bars.',
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
    videoTitle: 'Example: Hume-Rothery Rules',
    channel: 'Dr Kidd Engineering',
    duration: '6:52',
    durationSec: 412,
    youtubeId: 'aMCth97s-Ns',
    embedUrl: 'https://www.youtube.com/embed/aMCth97s-Ns',
    watchUrl: 'https://www.youtube.com/watch?v=aMCth97s-Ns',
    summary: 'A worked example of the four Hume-Rothery criteria (size, crystal structure, electronegativity, valence) for substitutional solid solubility.',
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
    videoTitle: 'Diffusion: Fick’s first law (Texas A&M, Intro to Materials)',
    channel: 'Patrick Shamberger',
    duration: '8:24',
    durationSec: 504,
    youtubeId: 'iOHFrtCxAxc',
    embedUrl: 'https://www.youtube.com/embed/iOHFrtCxAxc',
    watchUrl: 'https://www.youtube.com/watch?v=iOHFrtCxAxc',
    summary: 'Where Fick’s first law comes from: flux, the concentration gradient and the diffusion coefficient D.',
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
    videoTitle: 'Slip in single crystals due to resolved shear stress (Schmid’s Law) example problem',
    channel: 'Taylor Sparks',
    duration: '6:23',
    durationSec: 383,
    youtubeId: 'kwdQtThSFiw',
    embedUrl: 'https://www.youtube.com/embed/kwdQtThSFiw',
    watchUrl: 'https://www.youtube.com/watch?v=kwdQtThSFiw',
    summary: 'Worked Schmid’s-law problem: the angles φ and λ, the resolved shear stress, and the stress needed to start slip.',
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
    videoTitle: 'Phase Diagrams: The Lever Rule (Texas A&M, Intro to Materials)',
    channel: 'Patrick Shamberger',
    duration: '14:01',
    durationSec: 841,
    youtubeId: '_UGVDKlquxo',
    embedUrl: 'https://www.youtube.com/embed/_UGVDKlquxo',
    watchUrl: 'https://www.youtube.com/watch?v=_UGVDKlquxo',
    summary: 'How to draw the tie line in a two-phase region and use the lever rule for the fraction of each phase.',
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
    videoTitle: 'Iron-Carbon Phase Diagram simply explained, Part I',
    channel: 'tec-science',
    duration: '15:56',
    durationSec: 956,
    youtubeId: 'l-7pNy-BlLg',
    embedUrl: 'https://www.youtube.com/embed/l-7pNy-BlLg',
    watchUrl: 'https://www.youtube.com/watch?v=l-7pNy-BlLg',
    summary: 'The metastable Fe–Fe₃C diagram: ferrite, austenite, cementite, the eutectoid at 0.76 wt% C and 727 °C, and the microstructures of hypo- and hypereutectoid steels.',
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
    videoTitle: 'Using TTT diagrams to predict the microstructures of steel',
    channel: 'Taylor Sparks',
    duration: '16:23',
    durationSec: 983,
    youtubeId: 'P4FFlpsJ8No',
    embedUrl: 'https://www.youtube.com/embed/P4FFlpsJ8No',
    watchUrl: 'https://www.youtube.com/watch?v=P4FFlpsJ8No',
    summary: 'Following a cooling path on a TTT diagram to predict pearlite, bainite, martensite, spheroidite and tempered martensite.',
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
    videoTitle: 'Glass Transition Temperature',
    channel: 'PolymerWorld',
    duration: '11:46',
    durationSec: 706,
    youtubeId: '5lH_Xt2KUjA',
    embedUrl: 'https://www.youtube.com/embed/5lH_Xt2KUjA',
    watchUrl: 'https://www.youtube.com/watch?v=5lH_Xt2KUjA',
    summary: 'What Tg is, how it is measured, and what raises or lowers it in a polymer.',
    keyTakeaways: [
      'Thermoplastics: linear/branched chains, melt upon heating, recyclable.',
      'Thermosets: cross-linked/network covalent bonds, degrade rather than melt.',
      'Below Tg: hard, rigid, glassy; Above Tg: rubbery, flexible.'
    ]
  },
  {
    id: 'yt-12-microscopy',
    subtopicNum: 12,
    subtopicTitle: 'Optical Microscopy & Scanning Electron Microscopy (SEM)',
    lectureRef: 'Lecture 8 (Callister Ch. 4)',
    videoTitle: 'Introduction to Scanning Electron Microscopy (SEM)',
    channel: 'Penn State MRI',
    duration: '4:08',
    durationSec: 248,
    youtubeId: 'g-M6i2TQJP0',
    embedUrl: 'https://www.youtube.com/embed/g-M6i2TQJP0',
    watchUrl: 'https://www.youtube.com/watch?v=g-M6i2TQJP0',
    summary: 'How an SEM scans a focused electron beam across a sample to image its surface and microstructure.',
    keyTakeaways: [
      'Etching preferentially attacks higher-energy grain boundaries, creating small grooved steps.',
      'Reflected light scatters at grain boundary grooves, making boundaries appear dark under optical microscopes.',
      'Optical resolution is limited by visible light wavelength (~0.2 μm); electron beams allow magnification beyond 50,000x.',
      'SEM uses focused electron beams; secondary electrons yield high-depth-of-field 3D surface morphology.'
    ]
  },
  {
    id: 'yt-13-tensile-calc',
    subtopicNum: 13,
    subtopicTitle: 'Tensile Test Calculations: Stress, Strain & Ductility',
    lectureRef: 'Lecture 10–11 (Callister Ch. 6)',
    videoTitle: 'Extracting Tensile Properties from Stress-Strain Data',
    channel: 'Materials & Manufacturing Training at Swansea Uni',
    duration: '11:16',
    durationSec: 676,
    youtubeId: '_Utmj2jfUsM',
    embedUrl: 'https://www.youtube.com/embed/_Utmj2jfUsM',
    watchUrl: 'https://www.youtube.com/watch?v=_Utmj2jfUsM',
    summary: 'Reading Young’s modulus, yield stress, UTS and ductility off real tensile-test data.',
    keyTakeaways: [
      'Engineering stress uses initial original cross-sectional area A0: σ = F / A0 (units: N/m² or Pa).',
      'Engineering strain is dimensionless ratio of elongation to original gauge length: ε = (Li - L0) / L0.',
      'Ductility expressed as percent elongation %EL = [(Lf - L0) / L0] * 100%.',
      'Percent reduction in area %RA = [(A0 - Af) / A0] * 100%.',
      'Within linear elastic limit, Hooke’s law relates stress and strain: σ = E * ε.'
    ]
  },
  {
    id: 'yt-14-braggs-law',
    subtopicNum: 14,
    subtopicTitle: "Bragg's Law & X-Ray Diffraction (XRD)",
    lectureRef: 'Lecture 6 (Callister Ch. 3)',
    videoTitle: "Bragg's Law & X-Ray Diffraction (XRD) Explained",
    channel: 'The Organic Chemistry Tutor',
    duration: '14:58',
    durationSec: 898,
    youtubeId: 'Cjce4QumZNk',
    embedUrl: 'https://www.youtube.com/embed/Cjce4QumZNk',
    watchUrl: 'https://www.youtube.com/watch?v=Cjce4QumZNk',
    summary: 'Practice problems with nλ = 2d sin θ: solving for the spacing, the angle or the wavelength.',
    keyTakeaways: [
      'Constructive interference condition: extra path length must equal integer wavelengths (nλ = 2d sin θ).',
      'Interplanar spacing for cubic crystals: d_hkl = a / √(h² + k² + l²).',
      'Diffractometers record intensity against detector angle 2θ; remember to divide by 2 for Bragg angle θ.',
      'Peak angular positions determine unit cell size (a); peak intensities determine atomic positions inside the unit cell.'
    ]
  }
];

