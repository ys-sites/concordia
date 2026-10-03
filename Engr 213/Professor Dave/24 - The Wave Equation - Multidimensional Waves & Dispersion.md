# Lesson 24: The Wave Equation - Multidimensional Waves & Dispersion
### Professor Dave Explains Differential Equations Master Series · Lesson 24
> * **Direct Video Link**: [The Wave Equation Part 2: Multidimensional Waves and Dispersion](https://www.youtube.com/watch?v=BKhc7nJ4QAY&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=24)
> * **Target Exam Scope**: Advanced Multidimensional PDEs
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave expands the wave equation into two and three dimensions: $u_{tt} = c^2 
abla^2 u$. When vibrating a circular drumhead, Cartesian coordinates fail, and cylindrical polar coordinates summon Bessel functions $J_m(k r)$, producing beautiful circular and radial nodal lines where the drumhead remains motionless. Furthermore, Dave explains wave dispersion: in real physical media (like ocean waves or optical fiber glass), different frequencies travel at different speeds, causing phase velocity $v_p = \omega/k$ to detach from group velocity $v_g = d\omega/dk$!

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The 2D Wave Equation in Polar Coordinates

$$\frac{\partial^2 u}{\partial t^2} = c^2 \left( \frac{\partial^2 u}{\partial r^2} + \frac{1}{r}\frac{\partial u}{\partial r} + \frac{1}{r^2}\frac{\partial^2 u}{\partial \theta^2} \right)$$
For axisymmetric vibrations ($u = u(r,t)$): spatial separation yields **Bessel's Equation of Order Zero**:

$$r^2 R'' + r R' + k^2 r^2 R = 0 \implies R(r) = J_0(k r)$$
Clamped edge condition $R(a) = 0 \implies k_{0,n} = \frac{\alpha_{0,n}}{a}$, where $\alpha_{0,n}$ are the zeros of $J_0(z)$.

### 2. Dispersion Relations: Phase vs Group Velocity

$$\omega = \omega(k) \quad \text{(Dispersion Relation)}$$

  - **Phase Velocity**: $v_p = \frac{\omega}{k}$ (speed of individual wave crests).
  - **Group Velocity**: $v_g = \frac{d\omega}{dk}$ (speed of the overall wave packet and energy transfer).
  - If $v_p \neq v_g$, the medium is **dispersive**, causing pulses to broaden and distort over time.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Optics Problem: Calculating Phase vs Group Velocity in a Dispersive Medium
**Problem Statement**:
> In a plasma waveguide, electromagnetic waves obey the dispersion relation $\omega(k) = \sqrt{c^2 k^2 + \omega_p^2}$, where $\omega_p$ is the plasma frequency. Compute the phase velocity $v_p$ and group velocity $v_g$, and show that $v_p \cdot v_g = c^2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Compute Phase Velocity**:
  $v_p = \frac{\omega}{k} = \frac{\sqrt{c^2 k^2 + \omega_p^2}}{k} = \sqrt{c^2 + \frac{\omega_p^2}{k^2}}$. Notice $v_p > c$ (individual wave crests travel faster than the speed of light in vacuum!).

* **Step 2: Differentiate Dispersion Relation to Compute Group Velocity**:
  $\omega^2 = c^2 k^2 + \omega_p^2 \implies 2\omega \frac{d\omega}{dk} = 2c^2 k \implies \frac{d\omega}{dk} = \frac{c^2 k}{\omega}$.

* **Step 3: Evaluate Group Velocity $v_g$**:
  $v_g = \frac{c^2 k}{\sqrt{c^2 k^2 + \omega_p^2}} = \frac{c^2}{v_p}$. Notice $v_g < c$ (physical energy and information travel strictly subluminally, preserving Einstein's special relativity!).

* **Step 4: Verify Product Relation**:
  $v_p \cdot v_g = v_p \left(\frac{c^2}{v_p}\right) = c^2$.

> [!WARNING]
> **Common Exam Pitfall**: Never claim that physical signals travel faster than light when $v_p > c$. Information and energy travel at the group velocity $v_g$, which strictly obeys $v_g \le c$.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [The Wave Equation Part 2: Multidimensional Waves and Dispersion](https://www.youtube.com/watch?v=BKhc7nJ4QAY&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=24)
- **Exam Takeaway**: Circular membranes vibrate in Bessel modes $J_m(kr)$. Dispersion ($d\omega/dk \neq \omega/k$) separates individual phase crests from overall packet energy.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
