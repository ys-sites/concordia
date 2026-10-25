# Video Production Spec: MIAE 221 — Lecture 12: Ductility, Toughness, Hardness & Slip Systems
**Series**: MIAE 221 AI Motion Lessons  
**Renderer Engine**: DOM + KaTeX (001 Main/ode-motion-lessons)  
**Voiceover**: Kokoro-82M (`af_heart`, speed 0.96)  
**Visual Palette**:
- Math Chalk: `#E8EDF7`
- $x$-terms / Strains: `#38BDF8` (Cyan)
- $y$-terms / Stresses: `#FBBF24` (Amber)
- Constants / Params: `#F472B6` (Pink)
- Verified Results: `#34D399` (Emerald Green Box)
- Exam Traps: `#F87171` (Coral Red Distractor)
- Structural Guide: `#94A3B8` (Dim)

---

## Chapter Breakdown & Narration Script

### Chapter 1: The Big Idea (0:00 - 0:45)
* **Visual**: Chalkboard background (`#182246`). Title card. Moving a heavy rug animation: whole rug pulled at once (red X) vs moving a small wrinkle across the floor (green checkmark).
* **Narration**:
  "Welcome back to Materials Science 221.
   Have you ever wondered why metals can be bent and forged into shape, but glass shatters instantly?
   And why real metals yield at stresses a thousand times smaller than what theoretical bond strength predicts?
   The secret lies in the movement of atomic wrinkles called dislocations, sliding along designated crystallographic highways called slip systems."
* **Motion**: Dislocation line shifts through atomic lattice one bond at a time; title card smoothly dissolves.

### Chapter 2: Spot It (0:45 - 1:30)
* **Visual**: Tensile curve landmarks comparison: Modulus of Resilience $U_r$ (small shaded elastic triangle in cyan) vs Toughness $U_t$ (total area under the entire curve up to fracture in amber).
* **Narration**:
  "On your midterm, watch out for the battle of the two areas.
   Resilience, $U_r$, is strictly elastic energy—the energy a diving board or tennis ball bounces back when unloaded. Its area stops at the yield point: $\sigma_y^2 / (2E)$.
   Toughness is total fracture energy—it covers the entire area from zero to final fracture.
   A tough material must have both high strength and high ductility."
* **Motion**: Shading wipes from 0 to $\varepsilon_y$ (cyan glow with label $U_r$), then expands all the way to $\varepsilon_f$ (amber glow with label Toughness).

### Chapter 3: Why It Works / The Dislocation Slip Mechanism (1:30 - 3:00)
* **Visual**: Close-packed plane and direction geometry. Slip systems across FCC, BCC, and HCP lattices.
* **Narration**:
  "In 1934, Taylor, Orowan, and Polanyi proved that dislocations glide along planes of highest atomic density and directions with the shortest Burgers vector.
   This combination is a slip system.
   Face-centered cubic metals have twelve independent slip systems active at all temperatures, making copper and aluminum incredibly ductile.
   In contrast, hexagonal close-packed metals like magnesium only have three slip systems at room temperature, making them brittle unless heated."
* **Motion**: 3D lattice models illuminate $\{111\}$ planes and $\langle 1\bar{1}0 \rangle$ directions with 12 slip system counter.

### Chapter 4: Worked Example (3:00 - 4:45)
* **Visual**: Dr. Medraj's Slide 11 tensile test calculation: original diameter $12.8\text{ mm}$, gauge length $50.80\text{ mm}$; fracture diameter $6.60\text{ mm}$, length $72.14\text{ mm}$.
* **Narration**:
  "Let's calculate the ductility metrics from the professor's lecture example.
   Percent elongation is change in length over initial length times one hundred:
   seventy-two point one four minus fifty point eight zero divided by fifty point eight zero gives forty-two point zero percent.
   Percent reduction in area compares initial area to fractured neck area.
   Using the diameter ratio formula, one minus six point six zero over twelve point eight squared gives seventy-three point four percent.
   Both values comfortably exceed twenty-five percent, confirming a highly ductile engineering alloy."
* **Motion**: Line-by-line reduction; emerald green boxed answers pop with animated checkmarks.

### Chapter 5: The Traps (4:45 - 5:30)
* **Visual**: Trap card with red warning stamps.
* **Narration**:
  "Trap One: calculating percent reduction in area using linear diameters instead of area! If you write $(d_0 - d_f)/d_0$, you get forty-eight percent instead of seventy-three percent and lose full marks.
   Trap Two: mixing megapascal with gigapascal when computing resilience. Always convert both to Pascals before evaluating $\sigma_y^2 / (2E)$."
* **Motion**: Red distractor stamp pops at `-7°` with soft thud SFX; unit conversion reminder highlighted in yellow chalk.

### Chapter 6: Recap (5:30 - 6:00)
* **Visual**: High-yield property summary cheatsheet.
* **Narration**:
  "To recap: ductility measures deformation before snap, resilience stores elastic spring-back, toughness absorbs fracture shock, and dislocations make it all possible through crystallographic slip.
   Next topic: phase diagrams and binary alloy systems. See you in the next lesson."
* **Motion**: Summary card docks at center, soft fade out to chalkboard radial.
