# Video Production Spec: ENGR 213 — Lecture 12: Undetermined Coefficients & Superposition
**Series**: ENGR 213 AI Motion Lessons  
**Renderer Engine**: DOM + KaTeX (001 Main/ode-motion-lessons)  
**Voiceover**: Kokoro-82M (`af_heart`, speed 0.96)  
**Visual Palette**:
- Math Chalk: `#E8EDF7`
- $x$-terms: `#38BDF8` (Cyan)
- $y$-terms: `#FBBF24` (Amber)
- Constants / Params: `#F472B6` (Pink)
- Verified Results: `#34D399` (Emerald Green Box)
- Exam Traps: `#F87171` (Coral Red Distractor)
- Structural Guide: `#94A3B8` (Dim)

---

## Chapter Breakdown & Narration Script

### Chapter 1: The Big Idea (0:00 - 0:45)
* **Visual**: Chalkboard background (`#182246`), clean centered title card. Forced oscillation animation (external periodic force pushing a spring-mass-damper system).
* **Narration**:
  "Welcome back to Engineering 213. Last lecture we studied systems left to vibrate on their own.
   Today, an external force pushes back. By the Superposition Principle, the total response is split into two halves:
   $y_c$, the natural response that eventually fades, and $y_p$, the steady-state response forced by the outside world."
* **Motion**: Split screen showing $y_c$ (transient decaying curve in cyan) and $y_p$ (forced persistent wave in amber); they add together into $y(x) = y_c(x) + y_p(x)$.

### Chapter 2: Spot It (0:45 - 1:30)
* **Visual**: The 10-second exam recognition card for Undetermined Coefficients.
* **Narration**:
  "When can you use Undetermined Coefficients?
   First, the left side must have constant coefficients.
   Second, the driving force $g(x)$ must come from the VIP list: polynomials, exponentials, sines, cosines, or their products.
   If $g(x)$ is tangent or $1/x$, this method fails and we will use Variation of Parameters later."
* **Motion**: Green checkmarks light up beside polynomials, $e^{\alpha x}$, $\cos(\beta x)$, and red cross appears beside $\tan x$ or $\ln x$.

### Chapter 3: Why It Works / The Multiplication Rule (1:30 - 3:00)
* **Visual**: Side-by-side comparison of Case I (Form Rule) vs Case II (Multiplication Rule for Resonance).
* **Narration**:
  "Here is the golden rule: ALWAYS solve for $y_c$ before guessing $y_p$.
   Why? Because if your trial form contains a term already in $y_c$, plugging it in yields zero!
   To fix this duplication, multiply your trial form by $x$. If it still duplicates, multiply by $x^2$.
   This extra power of $x$ represents resonance—the physical buildup of energy when pushing at the natural frequency."
* **Motion**: Naive guess $e^x$ enters left side of ODE $\to$ evaluates to $0$ with red alert; $x e^x$ multiplies through $\to$ successfully produces $8e^x$.

### Chapter 4: Worked Example (3:00 - 4:45)
* **Visual**: Dr. Haghighat's Lecture Example 11 IVP: $y'' + y = 4x + 10\sin x, \quad y(\pi) = 0, \quad y'(\pi) = 2$.
* **Narration**:
  "Let's solve the professor's exam-level resonance problem.
   The auxiliary equation $m^2 + 1 = 0$ gives $y_c = c_1 \cos x + c_2 \sin x$.
   For $4x$, the trial form is $Ax + B$, giving $A = 4, B = 0$.
   For $10\sin x$, since $\sin x$ is in $y_c$, the trial form must be multiplied by $x$: $x(C\cos x + D\sin x)$.
   Substituting yields $-2C = 10 \implies C = -5$ and $D = 0$.
   Now the golden exam tip: only apply initial conditions to the full sum $y = y_c + y_p$!
   Setting $y(\pi) = 0$ and $y'(\pi) = 2$ gives $c_1 = 9\pi$ and $c_2 = 7$."
* **Motion**: Step-by-step whiteboard layout; initial conditions evaluated at $x=\pi$; final formula glows in green border with checkmark.

### Chapter 5: The Traps (4:45 - 5:30)
* **Visual**: Trap card with animated red distractor stamps.
* **Narration**:
  "The number one exam killer on this midterm: applying initial conditions to $y_c$ before adding $y_p$.
   If you evaluate $c_1$ and $c_2$ from $y_c$ alone, your constants will be completely wrong.
   Trap Two: if $g(x) = \sin 3x$, guessing only $B\sin 3x$. The derivative produces $\cos 3x$, so you must always include both sine and cosine."
* **Motion**: Red distractor stamp pops at `-7°`; green checklist emphasizes correct order of operations.

### Chapter 6: Recap (5:30 - 6:00)
* **Visual**: High-yield reference blueprint.
* **Narration**:
  "To recap: solve $y_c$ first, guess $y_p$ by matching the driving family, check for duplication and multiply by $x$ if needed, and finally solve for constants on the full general solution.
   See you in the next lesson."
* **Motion**: Blueprint docks at center, soft fade to black.
