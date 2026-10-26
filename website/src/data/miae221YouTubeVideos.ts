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
    videoTitle: 'Crystallographic Planes',
    channel: 'Engineering and Design Solutions',
    duration: '18:41',
    durationSec: 1121,
    youtubeId: '9Tf1dB1yVKY',
    embedUrl: 'https://www.youtube.com/embed/9Tf1dB1yVKY',
    watchUrl: 'https://www.youtube.com/watch?v=9Tf1dB1yVKY',
    summary: 'A lecture on describing planes in a crystal lattice, with many visual aids and several solved problems: intercepts, reciprocals, clearing fractions and bars.',
    keyTakeaways: [
      'If the plane passes through the origin, move the origin to another corner first.',
      'Read the intercepts on x, y and z in units of the cell edge; a plane parallel to an axis meets it at ∞.',
      'Take the reciprocals (1/∞ = 0) and clear the fractions to the smallest whole numbers (hkl).',
      'A negative intercept gives an index with a bar over it.'
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
    videoTitle: 'Introduction to Diffusion in Solids',
    channel: 'Engineering and Design Solutions',
    duration: '17:08',
    durationSec: 1028,
    youtubeId: 'K_1QmKJvNjc',
    embedUrl: 'https://www.youtube.com/embed/K_1QmKJvNjc',
    watchUrl: 'https://www.youtube.com/watch?v=K_1QmKJvNjc',
    summary: 'The first lecture of a diffusion series for a first-year materials course: what diffusion is, how atoms move (vacancy and interstitial), where it is used, and a simple simulation.',
    keyTakeaways: [
      'Vacancy diffusion: an atom jumps into a neighbouring empty lattice site.',
      'Interstitial diffusion: a small atom moves between the host atoms, and is faster.',
      'Steady state (Fick’s first law): J = −D·dC/dx.',
      'D rises steeply with temperature: D = D₀·exp(−Q_d / RT).'
    ]
  },
  {
    id: 'yt-06-tensile-curve',
    subtopicNum: 6,
    subtopicTitle: 'Mechanical Properties & Stress-Strain Curve',
    lectureRef: 'Lecture 10–12 (Callister Ch. 6)',
    videoTitle: 'Stress-Strain Curve for Steel and Resulting Points of Interest',
    channel: 'Engineering and Design Solutions',
    duration: '17:47',
    durationSec: 1067,
    youtubeId: 'pNIvZyd5djQ',
    embedUrl: 'https://www.youtube.com/embed/pNIvZyd5djQ',
    watchUrl: 'https://www.youtube.com/watch?v=pNIvZyd5djQ',
    summary: 'Turns tensile-test load and length data into engineering stress and strain, plots the curve, and reads off the modulus, yield strength, tensile strength, ductility and resilience.',
    keyTakeaways: [
      'Engineering stress σ = F/A₀ and strain ε = Δl/l₀.',
      'E is the slope of the straight elastic part.',
      'Yield strength by the 0.2% offset; tensile strength is the highest point of the curve.',
      'Resilience is the area under the elastic part: U_r = σ_y² / 2E.'
    ]
  },
  {
    id: 'yt-07-schmid-slip',
    subtopicNum: 7,
    subtopicTitle: 'Dislocations, Slip Systems & Schmid’s Law',
    lectureRef: 'Lecture 11–12 (Callister Ch. 7)',
    videoTitle: 'Loading of a Single Crystal Along Various Slip Systems',
    channel: 'Engineering and Design Solutions',
    duration: '16:16',
    durationSec: 976,
    youtubeId: 'QgymOJv0Igc',
    embedUrl: 'https://www.youtube.com/embed/QgymOJv0Igc',
    watchUrl: 'https://www.youtube.com/watch?v=QgymOJv0Igc',
    summary: 'A single crystal loaded in tension: the resolved shear stress on each slip system depends on the angles between the load and the slip plane and direction.',
    keyTakeaways: [
      'τ_R = σ·cos φ·cos λ (φ: load to slip-plane normal, λ: load to slip direction).',
      'The system with the largest Schmid factor cos φ·cos λ slips first.',
      'Slip starts when τ_R reaches τ_CRSS, so σ_y = τ_CRSS / (cos φ·cos λ)max.'
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
    videoTitle: 'Iron-carbon (Steel) Phase Diagram w/ Pro-Eutectoid Step',
    channel: 'Engineering and Design Solutions',
    duration: '16:44',
    durationSec: 1004,
    youtubeId: 'Cq6Ym5_OvEg',
    embedUrl: 'https://www.youtube.com/embed/Cq6Ym5_OvEg',
    watchUrl: 'https://www.youtube.com/watch?v=Cq6Ym5_OvEg',
    summary: 'A 0.3 wt% C steel cooled from austenite: the proeutectoid ferrite, eutectoid ferrite and cementite fractions and masses, with two uses of the lever rule and the eutectic and eutectoid explained.',
    keyTakeaways: [
      'Hypoeutectoid steel (< 0.76 wt% C): proeutectoid ferrite forms first, then pearlite at 727 °C.',
      'Lever rule just above 727 °C gives proeutectoid ferrite vs pearlite.',
      'Lever rule just below 727 °C gives total ferrite vs cementite (0.022 to 6.70 wt% C).'
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
    videoTitle: 'Stress Strain Offset',
    channel: 'Engineering and Design Solutions',
    duration: '35:03',
    durationSec: 2103,
    youtubeId: '-qHEi9kijj0',
    embedUrl: 'https://www.youtube.com/embed/-qHEi9kijj0',
    watchUrl: 'https://www.youtube.com/watch?v=-qHEi9kijj0',
    summary: 'How to plot a stress-strain diagram from test data and find a very close value of the 0.2% offset yield strength.',
    keyTakeaways: [
      'Draw a line with slope E starting at ε = 0.002; it meets the curve at the yield strength.',
      'Tensile strength: the highest engineering stress on the curve.',
      '%EL from the plastic strain at fracture: (l_f − l₀)/l₀ × 100.'
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

