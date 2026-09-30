# Chapter 17: Complex Numbers, Powers & De Moivre's Formula
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Dennis G. Zill (7th Ed., Sections 17.1 & 17.2)

---

## 1. Executive Summary & First-Principles Philosophy
Complex numbers are the mathematical bridge that allows higher-order differential equations and vibrations to be solved elegantly. Without the imaginary unit $i = \sqrt{-1}$, oscillatory solutions like $\sin(\omega t)$ and $\cos(\omega t)$ would have to be handled through cumbersome trigonometric identities. Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ unifies algebraic exponentials with oscillatory trigonometry.

---

## 2. Core Mechanics & Mathematical Engine

### A. Rectangular and Polar Representations
* **Rectangular Form**: $z = x + i y$
* **Modulus**: $|z| = r = \sqrt{x^2 + y^2}$
* **Argument**: $\theta = \arg(z) = \text{atan2}(y, x)$ (Principal argument: $-\pi < \text{Arg}(z) \le \pi$)
* **Polar / Exponential Form**:
  $$z = r(\cos\theta + i\sin\theta) = r e^{i\theta}$$

### B. Powers & De Moivre's Formula
For any integer $n$:
$$z^n = (r e^{i\theta})^n = r^n e^{i n\theta} = r^n(\cos(n\theta) + i\sin(n\theta))$$

### C. Roots of Complex Numbers ($n$-th Roots)
To solve $w^n = z_0 = r_0 e^{i\theta_0}$, there exist exactly $n$ distinct roots distributed symmetrically on a circle of radius $r_0^{1/n}$ with angular spacing $\frac{2\pi}{n}$:
$$w_k = r_0^{1/n} \exp\left(i\frac{\theta_0 + 2k\pi}{n}\right), \quad k = 0, 1, 2, \dots, n-1$$

---

## 3. Curriculum-Grounded Visual Reference

![Figure 17.1.1: Complex Plane Representation](./images/zill_fig_17_1_1_complex_plane.png)
*Figure 17.1: The Argand complex plane: Cartesian coordinates $(x, y)$ vs Polar $(r, \theta)$ — from Zill 7th Ed. Chapter 17 (Fig. 17.1.1).*

![Figure 17.2.1: Roots of Unity on Circle](./images/zill_fig_17_2_1_roots_of_unity.png)
*Figure 17.2: Roots of a complex number evenly spaced on a circle in the complex plane — from Zill 7th Ed. Chapter 17 (Fig. 17.2.1).*

---

## 4. Fully Worked Exam Archetype: Finding All Cube Roots

**Problem**: Find all cube roots of $z = -8i$ in exact rectangular form.

### Step-by-Step Solution:
* **Step 1: Convert $z$ to polar form**:
  Modulus $r = |-8i| = 8$.
  Argument: $-8i$ lies on the negative imaginary axis $\implies \theta = -\frac{\pi}{2}$ (or $\frac{3\pi}{2}$).
  $$z = 8 e^{-i\pi/2}$$
* **Step 2: Apply the $n$-th Root Formula for $n = 3$**:
  $$w_k = 8^{1/3} \exp\left(i\frac{-\pi/2 + 2k\pi}{3}\right) = 2 \exp\left(i\left[-\frac{\pi}{6} + \frac{2k\pi}{3}\right]\right), \quad k = 0, 1, 2$$
* **Step 3: Evaluate each root**:
  * **For $k = 0$**:
    $$\theta_0 = -\frac{\pi}{6} \implies w_0 = 2\left(\cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)\right) = 2\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) = \sqrt{3} - i$$
  * **For $k = 1$**:
    $$\theta_1 = -\frac{\pi}{6} + \frac{2\pi}{3} = \frac{\pi}{2} \implies w_1 = 2\left(\cos\left(\frac{\pi}{2}\right) + i\sin\left(\frac{\pi}{2}\right)\right) = 2(0 + i) = 2i$$
  * **For $k = 2$**:
    $$\theta_2 = -\frac{\pi}{6} + \frac{4\pi}{3} = \frac{7\pi}{6} \implies w_2 = 2\left(\cos\left(\frac{7\pi}{6}\right) + i\sin\left(\frac{7\pi}{6}\right)\right) = 2\left(-\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) = -\sqrt{3} - i$$

---

## 5. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Quadrant Checks in $\arctan(y/x)$**: Never blindly calculate $\arctan(y/x)$! If $z = -1 - i$, $y/x = 1$, but $\arctan(1) = \pi/4$ (Quadrant I), whereas $z$ is in Quadrant III. You must add $\pi$ (or subtract $\pi$) to get $-\frac{3\pi}{4}$.
* ⚠️ **Trap 2: Forgetting Root Spacing**: The roots are separated by exactly $\frac{2\pi}{n}$ radians. If your roots are not symmetrically distributed on a circle, your angular arithmetic has an error.
