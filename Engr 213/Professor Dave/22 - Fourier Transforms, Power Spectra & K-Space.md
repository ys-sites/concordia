# Lesson 22: Fourier Transforms, Power Spectra & K-Space
### Professor Dave Explains Differential Equations Master Series · Lesson 22
> * **Direct Video Link**: [Fourier Series and Transforms Part 2: Power Spectra and K-Space](https://www.youtube.com/watch?v=CO8NX6qnWko&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=22)
> * **Target Exam Scope**: Advanced Transforms & Quantum Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that while Fourier Series decompose repetitive periodic signals with discrete harmonic spikes, real life features non-repeating pulses: a single clap of thunder, an optical laser burst, or a transient seismic jolt. By letting the period stretch to infinity ($T \to \infty$), the discrete frequency spikes blend into a smooth, continuous spectrum: the Fourier Transform. Dave also demystifies 'K-Space'—the spatial frequency realm where X-ray crystallographers and MRI machines view atoms before taking an inverse Fourier transform to construct a physical picture.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Continuous Fourier Transform Pair

$$\hat{f}(\omega) = \mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty f(t) e^{-i\omega t} dt$$
$$f(t) = \mathcal{F}^{-1}\{\hat{f}(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty \hat{f}(\omega) e^{i\omega t} d\omega$$
### 2. Parseval's Theorem & Power Spectral Density

Total energy in the time domain equals total energy in the frequency domain (Energy Conservation):

$$\int_{-\infty}^\infty |f(t)|^2 dt = \int_{-\infty}^\infty |\hat{f}(\omega)|^2 d\omega$$
$S(\omega) = |\hat{f}(\omega)|^2$ is the **Power Spectral Density (PSD)**.

### 3. Spatial Frequency & K-Space

Replacing time $t$ with spatial position $\mathbf{r}$ yields spatial frequencies $\mathbf{k}$ ($k = 2\pi/\lambda$). In MRI and X-ray diffraction, raw signals are gathered in reciprocal K-space, then reconstructed into physical tissue scans via the 2D Inverse Fourier Transform.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Physics Problem: Fourier Transform of a Rectangular Gate Pulse
**Problem Statement**:
> Compute the Fourier transform of a rectangular pulse of duration $2a$ and unit height: $f(t) = \begin{cases} 1, & |t| < a \\ 0, & |t| > a \end{cases}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Apply Direct Transform Integral**:
  $\hat{f}(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-a}^a (1) e^{-i\omega t} dt$.

* **Step 2: Evaluate Exponential Integration**:
  $\hat{f}(\omega) = \frac{1}{\sqrt{2\pi}} \left[\frac{e^{-i\omega t}}{-i\omega}\right]_{-a}^a = \frac{1}{\sqrt{2\pi}} \left(\frac{e^{-i\omega a} - e^{i\omega a}}{-i\omega}\right) = \frac{1}{\sqrt{2\pi}} \left(\frac{e^{i\omega a} - e^{-i\omega a}}{i\omega}\right)$.

* **Step 3: Convert to Trigonometric Form via Euler's Identity**:
  Recall $\sin(\omega a) = \frac{e^{i\omega a} - e^{-i\omega a}}{2i}$. Therefore: $\frac{e^{i\omega a} - e^{-i\omega a}}{i\omega} = \frac{2\sin(\omega a)}{\omega}$.

* **Step 4: Express in Canonical Sinc Form**:
  $\hat{f}(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega} = \sqrt{\frac{2}{\pi}} a \, \text{sinc}(\omega a)$.

* **Step 5: Physical Wave Interpretation**:
  A sharp localized rectangular box in time transforms into an oscillating, decaying $\text{sinc}$ function in frequency space. Narrower time pulses ($a \to 0$) require an infinitely wide spectrum of frequencies—the exact mathematical bedrock of the Heisenberg Uncertainty Principle!

> [!WARNING]
> **Common Exam Pitfall**: Notice that when normalizing the Fourier transform, constants like $1/\sqrt{2\pi}$ or $1/(2\pi)$ depend on conventions. Consistency between forward and inverse transforms is essential.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Fourier Series and Transforms Part 2: Power Spectra and K-Space](https://www.youtube.com/watch?v=CO8NX6qnWko&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=22)
- **Exam Takeaway**: The Fourier Transform maps localized signals into frequency spectra. Tight spatial localization spreads out frequency bandwidth ($\Delta x \Delta k \ge 1/2$).
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
