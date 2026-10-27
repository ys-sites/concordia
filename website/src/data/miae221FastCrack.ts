// Master Exam Solver & Fast-Crack Knowledge Base for MIAE 221
// Grounded in Callister Ch 1–7.4 and the exam blueprints by Drs. Mamoun Medraj & Martin Pugh

export interface FastCrackStrategy {
  typeId: string;
  typeName: string;
  system: string;
  howToSpot: string;
  turboFormula: string;
  steps: string[];
  commonTrap: string;
  referenceExam: string;
}

// 9 Master Question Types with Under-60-Second Solving Strategies
export const MIAE221_FAST_CRACK_TYPES: Record<string, FastCrackStrategy> = {
  miller_planes: {
    typeId: 'type_1_miller_planes',
    typeName: 'Type 1: Miller Indices of Planes (hkl) — Figure X',
    system: 'Cubic Crystallography (Callister Ch 3.8)',
    howToSpot: 'Shaded plane intersecting unit cell axes. Look for axial ticks (1/4, 1/2, 3/4) and check if plane touches the origin.',
    turboFormula: 'Intercepts (x, y, z) ➔ Reciprocals (1/x, 1/y, 1/z) ➔ Clear fractions to smallest integers ➔ Round parentheses (hkl)',
    steps: [
      'Origin Shift: If the plane touches (0,0,0), shift origin by +1 along the touching axis (measure negative intercepts with overbar).',
      'Read Intercepts: Parallel to an axis means intercept = ∞, giving index 1/∞ = 0.',
      'Invert: Take reciprocals of intercepts.',
      'Clear Fractions: Multiply by least common denominator to get integers.',
      'Notation Check: Planes MUST be enclosed in parentheses (hkl). Never choose directions [uvw] or families ⟨uvw⟩!'
    ],
    commonTrap: 'Using regular minus sign (-1, 2, 0) instead of overbar (1̄20), or writing ∞ as an index instead of 0.',
    referenceExam: '2017 Sample Q1–Q3 · W26 Midterm Q3–Q4 · F24 Midterm Q13–Q14'
  },
  miller_directions: {
    typeId: 'type_1b_miller_directions',
    typeName: 'Type 1B: Miller Indices of Directions [uvw]',
    system: 'Cubic Vector Geometry (Callister Ch 3.8)',
    howToSpot: 'Vector with an arrow inside a unit cell from a tail coordinate to a head coordinate.',
    turboFormula: 'Δx = Head_x - Tail_x,  Δy = Head_y - Tail_y,  Δz = Head_z - Tail_z ➔ Clear denominators ➔ Square brackets [uvw]',
    steps: [
      'Identify tail coordinates (x1, y1, z1) and head coordinates (x2, y2, z2).',
      'Subtract: Head - Tail for each component.',
      'Multiply by common denominator to obtain smallest integer set.',
      'Enclose in square brackets [uvw]. In cubic systems, [hkl] is strictly perpendicular ⊥ to (hkl)!'
    ],
    commonTrap: 'Subtracting tail from head in reverse (Tail - Head gives opposite direction vector).',
    referenceExam: 'W26 Midterm Q1–Q2 · F24 Midterm Q13 · 2017 Sample Q22'
  },
  density_unit_cells: {
    typeId: 'type_2_density',
    typeName: 'Type 2: Unit Cell Geometry & Theoretical Density',
    system: 'BCC, FCC & HCP Crystal Structures (Callister Ch 3.4–3.5)',
    howToSpot: 'Mentions crystal structure (FCC/BCC), atomic radius R, atomic weight A, asking for density ρ or lattice parameter a.',
    turboFormula: 'ρ = (n · A) / (V_c · N_A)    where V_c = a³,  N_A = 6.022 × 10²³',
    steps: [
      'FCC (Cu, Al, Ni): n = 4 atoms, a = 2√2·R, APF = 0.74, CN = 12. Closest-packed direction = ⟨110⟩.',
      'BCC (α-Fe, W, Cr): n = 2 atoms, a = 4R/√3, APF = 0.68, CN = 8. Closest-packed direction = ⟨111⟩.',
      'HCP (Ti, Mg, Zn): n = 6 atoms, a = 2R, c/a = 1.633, APF = 0.74, CN = 12.',
      'Unit Conversion Shortcut: 1 nm = 10⁻⁷ cm; 1 Å = 10⁻⁸ cm ➔ Density in g/cm³ = Mg/m³ = 1000 kg/m³.'
    ],
    commonTrap: 'Confusing FCC (n=4, a=2√2R) with BCC (n=2, a=4R/√3) or forgetting to cube the lattice parameter a³.',
    referenceExam: '2017 Sample Q4, Q25, Q30 · W26 Midterm Q5 · F24 Midterm Q4'
  },
  linear_planar_density: {
    typeId: 'type_3_linear_planar',
    typeName: 'Type 3: Linear Density (LD) & Planar Density (PD)',
    system: 'Crystallographic Packing (Callister Ch 3.11)',
    howToSpot: '"Linear atomic density along [110] in BCC..." or "Planar density of (100) plane in FCC in terms of R..."',
    turboFormula: 'LD = (Atoms centered on line) / (Length of vector L)  |  PD = (Atoms centered on plane) / (Area of plane A)',
    steps: [
      'BCC [110]: L = √2·a. Body-center atom is NOT on face diagonal! Only 2 corner half-radii ➔ N = 1 atom ➔ LD = 1 / (√2·a).',
      'BCC [111]: Close-packed body diagonal. N = 2 atoms, L = √3·a ➔ LD = 2 / (√3·a) = 1 / (2R).',
      'FCC [110]: Close-packed face diagonal. N = 2 atoms, L = √2·a ➔ LD = 2 / (√2·a) = 1 / (2R).',
      'FCC (100) Plane: Area = a² = (2√2R)² = 8R². Atoms on face = 4 corner quarters (1) + 1 face center = 2 atoms ➔ PD = 2 / (8R²) = 1 / (4R²).'
    ],
    commonTrap: 'Assuming BCC [110] cuts through the center atom (it does not; only [111] pierces the body center).',
    referenceExam: '2017 Sample Q4 · W26 Midterm Q6 · Tutorial Problem Set #1'
  },
  xrd_bragg: {
    typeId: 'type_4_xrd',
    typeName: 'Type 4: XRD & Bragg\'s Law Selection Rules',
    system: 'X-Ray Diffraction & Crystal Structure Determination (Callister Ch 3.16)',
    howToSpot: 'Diffractometer angle 2θ, wavelength λ (usually 0.0711 nm or 0.154 nm), reflection order n=1, Miller plane (hkl).',
    turboFormula: 'nλ = 2 · d_hkl · sin θ,   d_hkl = a / √(h² + k² + l²)',
    steps: [
      'CRITICAL ANGLE TRAP: The question gives 2θ (e.g. 36.12°). ALWAYS divide by 2 to get θ = 18.06° before taking sin θ!',
      'Calculate d_hkl = λ / (2 sin θ).',
      'Calculate lattice constant a = d_hkl · √(h² + k² + l²).',
      'Relate a to atomic radius R: For FCC R = a / (2√2); For BCC R = a√3 / 4.',
      'Systematic Absences Rules: BCC allows ONLY even sum (h+k+l = even); FCC allows ONLY unmixed indices (all odd or all even).'
    ],
    commonTrap: 'Plugging in 2θ directly into sin(2θ) instead of dividing by 2 to obtain θ.',
    referenceExam: 'W26 Midterm Q7 · 2017 Sample Final Q1 · Callister Ch 3.16'
  },
  stress_strain_curve: {
    typeId: 'type_5_stress_strain',
    typeName: 'Type 5: Figure 1 Decoder — Stress-Strain Curve Landmarks',
    system: 'Tensile Mechanical Properties (Callister Ch 6.6–6.8)',
    howToSpot: 'Stress-strain graph with landmarks (Points O, A, B, C, D, E, F) and dashed unloading lines.',
    turboFormula: 'Linear slope = E  |  Point B = σ_y  |  Peak D = UTS & Necking Start  |  Unloading line ∥ slope O–A',
    steps: [
      'Modulus of Elasticity E (Stiffness): Initial linear slope at Point A (E = Δσ / Δε).',
      'Yield Strength (σ_y): Departure from linearity at Point B (or 0.2% offset intercept).',
      'Necking Onset: Begins EXACTLY at the curve maximum (Peak D = Ultimate Tensile Strength).',
      'Uniform Plastic: Region from Yield (B) to Peak (D). Non-Uniform Plastic (Necking): Region from Peak (D) to Fracture (F).',
      'Unloading from C: Drops parallel to OA to strain axis H ➔ Permanent plastic strain = OH; Recovered elastic strain = HI.',
      'Modulus of Resilience (U_r): Area under elastic triangle OBG (U_r ≈ σ_y² / 2E).',
      'Toughness: Total area under the entire curve to fracture (OBFM).'
    ],
    commonTrap: 'Believing necking starts after the peak (necking begins precisely AT the UTS maximum Point D).',
    referenceExam: '2017 Sample Q7–Q16 (10-question sequence) · W26 Midterm Q16–Q20 (5-question sequence)'
  },
  tensile_calculations: {
    typeId: 'type_6_tensile_calc',
    typeName: 'Type 6: Tensile Calculations & Hooke\'s Law Rod Sizing',
    system: 'Elastic & Plastic Deformation (Callister Ch 6.3–6.6)',
    howToSpot: 'Load F, initial length L₀, allowable elongation ΔL, modulus E, yield strength σ_y. Find diameter d or ductility.',
    turboFormula: 'd = √[ (4 · F · L₀) / (π · E · ΔL) ]   ➔  CHECK: σ = 4F/(πd²) < σ_y',
    steps: [
      'Equate Hooke\'s Law: σ = E · ε ➔ F / (πd²/4) = E · (ΔL / L₀).',
      'Solve for minimum diameter: d = √[ 4·F·L₀ / (π·E·ΔL) ].',
      'Yield Verification: Calculate stress σ = 4F/(πd²). Ensure σ ≤ σ_y so deformation remains purely elastic.',
      'Ductility %EL = [ (L_f - L₀) / L₀ ] × 100%.',
      'Ductility %RA = [ 1 - (d_f / d₀)² ] × 100%  (DIAMETERS MUST BE SQUARED!).'
    ],
    commonTrap: 'Forgetting to square the diameters in reduction of area (%RA): (d₀ - d_f)/d₀ is completely wrong.',
    referenceExam: '2017 Sample Q18, Q19 · W26 Midterm Q18, Q20 · F24 Midterm Q17'
  },
  diffusion_fick: {
    typeId: 'type_7_diffusion',
    typeName: 'Type 7: Diffusion (Fick\'s Laws & Arrhenius D(T))',
    system: 'Mass Transport in Solids (Callister Ch 5)',
    howToSpot: 'Diffusion coefficient D, activation energy Q_d, temperature T, steady-state flux J, or carburizing depth x.',
    turboFormula: 'D = D₀ · exp(-Q_d / RT)   |   J = -D · (ΔC / Δx)   |   x² / (D · t) = constant',
    steps: [
      'Arrhenius D(T): Temperature MUST be in Kelvin (T = °C + 273.15). Convert Q_d from kJ/mol to J/mol (× 1000)!',
      'Gas Constant: R = 8.314 J/(mol·K).',
      'Steady-State Flux (Fick 1st Law): J = M / (A · t) = -D · (C_low - C_high) / Δx.',
      'Non-Steady State Depth Scaling: For the same surface/core concentrations, (x₁)² / (D₁ · t₁) = (x₂)² / (D₂ · t₂).',
      'Interdiffusion (Cu–Ni couple): Both species diffuse simultaneously down their own concentration gradients.'
    ],
    commonTrap: 'Leaving temperature in Celsius or forgetting to multiply Q_d (in kJ/mol) by 1000 before dividing by RT.',
    referenceExam: '2017 Sample Q5, Q6, Q24, Q26, Q29 · W26 Midterm Q12, Q13, Q37'
  },
  dislocations_slip: {
    typeId: 'type_8_dislocations_slip',
    typeName: 'Type 8: Dislocations & Schmid\'s Law',
    system: 'Slip Mechanics & Plasticity (Callister Ch 7.1–7.4)',
    howToSpot: 'Resolved shear stress τ_R, tensile axis angle φ with slip plane normal, angle λ with slip direction, CRSS.',
    turboFormula: 'τ_R = σ · cos φ · cos λ    |    Max Schmid factor m = cos φ cos λ = 0.5 at φ = λ = 45°',
    steps: [
      'Schmid\'s Law: Yielding starts when τ_R reaches critical resolved shear stress (τ_CRSS).',
      'Minimum Yield Stress: Occurs when m is maximum (0.5) ➔ σ_y = 2 · τ_CRSS.',
      'Slip Plane & Direction: Slip occurs most easily on HIGHEST planar density plane in HIGHEST linear density direction.',
      'Burgers Vector (b): Edge dislocation has b ⊥ dislocation line; Screw dislocation has b ∥ dislocation line.',
      'Slip Systems: FCC has 12 ({111}⟨110⟩), BCC has 12 ({110}⟨111⟩), HCP has only 3 ((0001)⟨112̄0⟩).',
      'Grain Boundaries & Microscopy: Boundaries are high-energy planar defects; etching attacks them first, so they show up dark under a microscope. Smaller grains = more boundaries = stronger metal.'
    ],
    commonTrap: 'Thinking dislocations slip easily in ionic materials (they do not; like-charge electrostatic repulsion creates brittleness).',
    referenceExam: '2017 Sample Q21, Q27, Q31 · W26 Midterm Q10, Q27, Q28'
  },
  crystal_types: {
    typeId: 'type_10_crystal_types',
    typeName: 'Type 10: Crystalline vs Amorphous & Polymorphism',
    system: 'Crystal Structures & Non-Crystalline Solids (Callister Ch 3.3, 3.13–3.14)',
    howToSpot: 'Asks whether a solid is crystalline or amorphous, single crystal vs polycrystal, or names polymorphs/allotropes (diamond/graphite, α-Fe/γ-Fe).',
    turboFormula: 'Crystalline = long-range order  ·  Amorphous = short-range order only  ·  Polymorphism = same chemistry, different crystal structure',
    steps: [
      'Single Crystal: One continuous lattice throughout — properties are anisotropic (direction-dependent).',
      'Polycrystal: Many small grains, each a tiny crystal, separated by grain boundaries — properties are roughly isotropic.',
      'Amorphous (glass, many polymers): No long-range order, no sharp melting point — softens over a glass-transition range (Tg) instead.',
      'Polymorphism / Allotropy: SAME chemistry, DIFFERENT structure. Carbon: diamond (hard, 3D covalent network) vs graphite (soft, layered). Iron: BCC α-ferrite vs FCC γ-austenite.',
      'Grain Boundaries: High-energy planar defects that block dislocations — smaller grains mean more boundaries and a stronger metal.'
    ],
    commonTrap: 'Calling glass crystalline because it is a solid — glass has no long-range order. Or thinking polymorphs differ in chemistry (same chemistry, different structure).',
    referenceExam: 'W26 Midterm · F24 Midterm · A25 Midterm'
  },
  point_defects: {
    typeId: 'type_11_point_defects',
    typeName: 'Type 11: Point Defects & Vacancy Concentration',
    system: 'Imperfections in Solids (Callister Ch 4.2–4.3)',
    howToSpot: 'Vacancy, self-interstitial, Schottky or Frenkel defect, or "how many vacancies per m³ at temperature T".',
    turboFormula: 'Nv = N · exp(−Qv / kT)   |   k = 8.62 × 10⁻⁵ eV/(atom·K)  |  T in Kelvin',
    steps: [
      'Vacancy: A missing atom — the most common point defect; its concentration rises exponentially with temperature.',
      'Self-Interstitial: An extra atom of the same type squeezed between lattice sites — rare, because the distortion energy is large.',
      'Schottky Defect (ceramics): A paired cation + anion vacancy — keeps the crystal electrically neutral.',
      'Frenkel Defect (ceramics): A cation vacancy + a cation interstitial pair — also charge neutral overall.',
      'Number of Sites N: N = (n · ρ · N_A) / A for a metal, or compute atoms per m³ from density ρ and atomic weight A.',
      'Units Trap: T MUST be in Kelvin. Use k (eV/K) when Qv is in eV/atom, or R (8.314 J/mol·K) when Qv is in J/mol — never mix them.'
    ],
    commonTrap: 'Plugging Celsius into the exponential, or mixing eV/atom (k) with J/mol (R) energy units.',
    referenceExam: 'W26 Midterm · F24 Midterm · A25 Midterm'
  },
  electron_config: {
    typeId: 'type_12_electron_config',
    typeName: 'Type 12: Electron Configuration & Periodic Groups',
    system: 'Atomic Structure (Callister Ch 2.2–2.3)',
    howToSpot: 'Electron configuration, valence electrons, or "which group/period" for an element.',
    turboFormula: 'Fill order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p   |   Valence = outermost s + p electrons',
    steps: [
      'Aufbau Order: Fill 4s BEFORE 3d (and 5s before 4d) — the s level sits lower in energy than the d level of the next shell.',
      'Valence Electrons: For main-group elements, the group number equals the valence count (Group 1 = 1, Group 17 = 7).',
      'Stable Octet: A full s²p⁶ outer shell is the stable configuration — that is why noble gases barely react.',
      'Ions: Cations lose valence electrons first; transition metals lose their 4s electrons BEFORE their 3d electrons.',
      'Periodic Trends: Atomic size decreases across a period and increases down a group; electronegativity increases toward the upper right (fluorine highest).'
    ],
    commonTrap: 'Writing 3d before 4s, or counting d electrons as valence for main-group elements.',
    referenceExam: 'A25 Midterm · W26 Midterm'
  },
  solid_solutions: {
    typeId: 'type_13_solid_solutions',
    typeName: 'Type 13: Impurities & Solid Solutions',
    system: 'Imperfections in Solids (Callister Ch 4.4–4.5)',
    howToSpot: 'Substitutional vs interstitial impurity, alloy composition in wt% or at%, or the Hume-Rothery rules.',
    turboFormula: 'Substitutional: solute REPLACES a solvent atom  ·  Interstitial: solute squeezes BETWEEN solvent atoms  ·  Hume-Rothery: Δr < 15%, same structure, similar electronegativity, same valence',
    steps: [
      'Substitutional: The solute atom takes a lattice site — needs a similar atomic radius (within ~15%) to dissolve well.',
      'Interstitial: Only TINY atoms fit in the gaps (H, C, N, O, B) — e.g. carbon in iron.',
      'Hume-Rothery Rules (extensive solubility): atomic size within 15%, same crystal structure, similar electronegativity, same valence.',
      'Composition: wt% ↔ at% conversions need atomic weights — at% = (moles of solute / total moles) × 100.',
      'Strengthening: Impurity atoms distort the lattice and pin dislocations, which is why alloys are stronger than pure metals.'
    ],
    commonTrap: 'Calling a large atom an interstitial impurity — big atoms substitute; only tiny atoms fit interstitially.',
    referenceExam: 'A25 Midterm · W26 Midterm'
  },
  moles_atoms: {
    typeId: 'type_14_moles_atoms',
    typeName: 'Type 14: Moles, Atoms & Mass',
    system: 'Atomic Mass & the Mole (Callister Ch 2.1)',
    howToSpot: '"How many atoms", "how many moles", or any grams ↔ atoms conversion using atomic weight.',
    turboFormula: 'n (mol) = m / A   |   N (atoms) = n · N_A   |   N_A = 6.022 × 10²³ atoms/mol',
    steps: [
      'Atomic Weight A: Grams per mole of that element — read it straight off the periodic table.',
      'Moles: n = mass ÷ atomic weight. Mass MUST be in grams before dividing.',
      'Atoms: N = n × Avogadro’s number (6.022 × 10²³ atoms/mol).',
      'Atomic Mass Unit: 1 amu = 1 / N_A grams = 1.66 × 10⁻²⁴ g.',
      'Compounds: Use the formula weight — the sum of the atomic weights in the formula (e.g. Al₂O₃ = 2·27 + 3·16 = 102 g/mol).'
    ],
    commonTrap: 'Forgetting kg → g (×1000) before dividing, or dividing by Avogadro instead of multiplying when going moles → atoms.',
    referenceExam: 'Finals bank · Tutorial problem sets'
  },
  potential_well: {
    typeId: 'type_9_potential_well',
    typeName: 'Type 9: Potential Well & Bonding Correlations',
    system: 'Atomic Bonding & Thermal Properties (Callister Ch 2.5–2.6)',
    howToSpot: 'Net force F_N vs separation r, or potential energy E_N vs separation curve.',
    turboFormula: 'F_N = F_A + F_R = 0 at r = r₀ (equilibrium)  |  dE/dr = 0 at energy minimum trough',
    steps: [
      'Equilibrium Spacing r₀: Located where net force curve CROSSES ZERO, or where potential energy is at its MINIMUM.',
      'Well Depth E₀: Deeper well = Higher bond strength = Higher melting temperature T_m = Higher elastic modulus E.',
      'Well Asymmetry: More asymmetric (skewed) well = Higher linear thermal expansion coefficient α_L.',
      'Bonding Types: sp³ hybrid orbitals form directional COVALENT bonds (not ionic). Primary bonds: ionic, covalent, metallic.',
      '% Ionic Character: % ionic = [1 − exp(−0.25·(X_A − X_B)²)] × 100%. Bigger electronegativity difference = more ionic; small difference = covalent (or metallic for metals).'
    ],
    commonTrap: 'Looking for a minimum on the force curve (equilibrium force is ZERO, equilibrium energy is MINIMUM).',
    referenceExam: '2017 Sample Q17, Q23, Q37 · W26 Midterm Q11, Q14, Q39 · F24 Midterm Q6'
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
