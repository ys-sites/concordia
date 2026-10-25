# Video Production Spec: ENGR 213 — Lecture 11: Auxiliary Equations and Root Cases
**Series**: ENGR 213 AI Motion Lessons  
**Renderer Engine**: DOM + KaTeX (001 Main/ode-motion-lessons)  
**Voiceover**: Kokoro-82M (`af_heart`, speed 0.96)  
**Visual Palette**:
- Math Chalk: `#E8EDF7`
- $x$-terms: `#38BDF8` (Cyan)
- $y$-terms: `#FBBF24` (Amber)
- Constants / Params / $\mu$: `#F472B6` (Pink)
- Verified Results: `#34D399` (Emerald Green Box)
- Exam Traps: `#F87171` (Coral Red Distractor)
- Structural Guide: `#94A3B8` (Dim)

---

## Chapter Breakdown & Narration Script

### Chapter 1: The Big Idea (0:00 - 0:45)
* **Visual**: Chalkboard background (`#182246`), clean centered title card. Car suspension strut animation (mass $a$, dashpot $b$, spring $c$).
* **Narration**:
  "Welcome back to Engineering 213. Today we unlock the master method for higher-order linear equations with constant coefficients.
   Think of a car hitting a bump: the mass resists acceleration, the shock absorber resists velocity, and the spring pulls back against displacement.
   Because exponential functions reproduce themselves upon differentiation, every single solution to this equation is born from $e^{mx}$."
* **Motion**: Smooth entry, title fades out at $t = 12$s; mechanical balance diagram illuminates.

### Chapter 2: Spot It (0:45 - 1:30)
* **Visual**: Equation spotlight: $a y'' + b y' + c y = 0$. 10-second exam signature card.
* **Narration**:
  "On a timed midterm, how do you spot this in five seconds?
   Look for three features: first, it is linear—no squared terms or nonlinear functions of $y$.
   Second, the coefficients $a$, $b$, and $c$ are pure constants.
   Third, the right side is zero.
   The moment you see this, convert primes directly into powers of $m$: $a m^2 + b m + c = 0$."
* **Motion**: Cyan pulse highlights prime-to-power mapping ($y'' \to m^2$, $y' \to m$, $y \to 1$).

### Chapter 3: Why It Works / The 3 Root Cases (1:30 - 3:00)
* **Visual**: Three-column comparison layout with coordinate plots of trajectories.
* **Narration**:
  "The quadratic formula splits nature into three distinct physical fates based on the discriminant.
   Case One: real and distinct roots. The solutions are simple exponentials $c_1 e^{m_1 x} + c_2 e^{m_2 x}$.
   Case Two: repeated roots. Reduction of order proves the second linearly independent solution must multiply by $x$: $(c_1 + c_2 x) e^{mx}$.
   Case Three: negative discriminant. Euler's formula turns imaginary exponentials into real decaying oscillations: $e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$."
* **Motion**: KaTeX write-on for each case; roots light up with corresponding colors.

### Chapter 4: Worked Example (3:00 - 4:45)
* **Visual**: Dr. Haghighat's Lecture Example 4 IVP: $4y'' + 4y' + 17y = 0, \quad y(0) = -1, \quad y'(0) = 2$.
* **Narration**:
  "Let's solve the professor's IVP from lecture with zero skipped steps.
   First, form the auxiliary equation: $4m^2 + 4m + 17 = 0$.
   The discriminant is $16 - 272 = -256$, giving roots $m = -1/2 \pm 2i$.
   The general solution is $e^{-x/2} (c_1 \cos 2x + c_2 \sin 2x)$.
   Plugging in $y(0) = -1$ immediately forces $c_1 = -1$.
   Differentiating with the product rule and setting $y'(0) = 2$ gives $-1/2(-1) + 2 c_2 = 2$, yielding $c_2 = 3/4$."
* **Motion**: Arithmetic and algebra shown line-by-line; final formula glows in green boxed border with checkmark.

### Chapter 5: The Traps (4:45 - 5:30)
* **Visual**: Trap card with red stamp overlays.
* **Narration**:
  "Here are the two traps that cost students marks.
   Trap One: writing $c_1 e^{5x} + c_2 e^{5x}$ for repeated roots. If you forget the factor of $x$, those two terms collapse into a single constant and you lose full marks.
   Trap Two: slipping the sign on the real part $\alpha$. The formula is $-b / (2a)$. If $b$ is positive four, $\alpha$ is negative two."
* **Motion**: Negative red stamp `-7°` pops over incorrect answer with SFX thud; green arrow reveals correction.

### Chapter 6: Recap (5:30 - 6:00)
* **Visual**: Clean chalkboard reference card with boxed formulas and roots table.
* **Narration**:
  "To recap: turn derivatives into an algebraic polynomial, solve for the roots, and match to one of the three cases.
   Next lecture, we add an external driving force on the right-hand side using undetermined coefficients. See you there."
* **Motion**: Card docks smoothly at center, soft fade out to chalkboard radial.
