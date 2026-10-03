# Lesson 21: Fourier Series & Frequency Analysis
### Professor Dave Explains Differential Equations Master Series · Lesson 21
> * **Direct Video Link**: [Fourier Series and Transforms Part 1: Concepts in Frequency Analysis](https://www.youtube.com/watch?v=Eta7T0DoYu8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=21)
> * **Target Exam Scope**: Advanced Mathematics & Signal Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains Jean-Baptiste Joseph Fourier's revolutionary discovery: any periodic signal, no matter how jagged, discontinuous, or complex (like a square wave or an audio synthesizer tone), can be dismantled into an infinite sum of simple pure sine and cosine harmonics! In music, this is the overtone series; in engineering, it is frequency analysis. By exploiting the mathematical orthogonality of sines and cosines, we compute the exact harmonic weight of every frequency in the signal.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Trigonometric Fourier Series on $[-L, L]$

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty \left[ a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right]$$
### 2. Euler-Fourier Formulas

$$a_0 = \frac{1}{L} \int_{-L}^L f(x) dx, \quad a_n = \frac{1}{L} \int_{-L}^L f(x) \cos\left(\frac{n\pi x}{L}\right) dx, \quad b_n = \frac{1}{L} \int_{-L}^L f(x) \sin\left(\frac{n\pi x}{L}\right) dx$$
### 3. Symmetry Exploitation Rules


  - **Even Functions ($f(-x) = f(x)$)**: Symmetric about $y$-axis. $b_n = 0$ identically! $a_n = \frac{2}{L}\int_0^L f(x) \cos\left(\frac{n\pi x}{L}\right) dx$. (Fourier Cosine Series)
  - **Odd Functions ($f(-x) = -f(x)$)**: Anti-symmetric about origin. $a_0 = 0, a_n = 0$ identically! $b_n = \frac{2}{L}\int_0^L f(x) \sin\left(\frac{n\pi x}{L}\right) dx$. (Fourier Sine Series)

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Engineering Classic: Fourier Expansion of a Square Wave
**Problem Statement**:
> Compute the Fourier series of the periodic square wave $f(x) = \begin{cases} -1, & -\pi < x < 0 \\ +1, & 0 < x < \pi \end{cases}$ with period $T = 2\pi$ ($L = \pi$).

**Step-by-Step Whiteboard Solution**:
* **Step 1: Check Symmetry**:
  Observe $f(-x) = -f(x)$. The function is strictly **Odd**! Therefore, $a_0 = 0$ and $a_n = 0$ for all $n \ge 1$ without doing any integration!

* **Step 2: Calculate Sine Coefficients $b_n$**:
  $b_n = \frac{2}{\pi}\int_0^\pi (1) \sin(nx) dx = \frac{2}{\pi}\left[-\frac{\cos(nx)}{n}\right]_0^\pi = \frac{2}{n\pi}[1 - \cos(n\pi)]$.

* **Step 3: Evaluate Parity of $\cos(n\pi) = (-1)^n$**:
  If $n$ is even ($n = 2, 4, 6$): $1 - (-1)^n = 1 - 1 = 0 \implies b_n = 0$. If $n$ is odd ($n = 1, 3, 5$): $1 - (-1)^n = 1 - (-1) = 2 \implies b_n = \frac{4}{n\pi}$.

* **Step 4: Assemble Trigonometric Series**:
  $f(x) = \frac{4}{\pi}\left(\sin x + \frac{1}{3}\sin 3x + \frac{1}{5}\sin 5x + \frac{1}{7}\sin 7x + \dots\right)$.

* **Step 5: Bonus Mathematical Jewel (Leibniz Formula for $\pi$)**:
  Evaluate at $x = \frac{\pi}{2}$ where $f(\frac{\pi}{2}) = 1$: $1 = \frac{4}{\pi}(1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots) \implies \frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots$!

> [!WARNING]
> **Common Exam Pitfall**: Always check function parity (even vs odd) before computing integrals. Calculating $a_n$ by hand for an odd function wastes 10 minutes on an exam only to arrive at zero.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Fourier Series and Transforms Part 1: Concepts in Frequency Analysis](https://www.youtube.com/watch?v=Eta7T0DoYu8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=21)
- **Exam Takeaway**: Odd functions generate pure sine series ($b_n$); even functions generate pure cosine series ($a_n$).
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
