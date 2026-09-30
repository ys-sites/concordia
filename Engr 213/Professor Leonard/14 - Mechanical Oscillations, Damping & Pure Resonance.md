# Topic 14: Mechanical Oscillations, Damping & Pure Resonance
### Professor Leonard Master Series
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Spring-Mass-Damper Universe
Professor Leonard brings 2nd-order ODEs to life with Newtonian mechanics:
> *"Newton's 2nd Law: $m a = \sum F$. A mass on a spring experiences Restoring Force $-k x$, Damping Friction $-c x'$, and External Forcing $F_0 \cos(\omega t)$. Summing them up gives the master equation of mechanical engineering:"*

$$m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + k x = F_0 \cos(\omega t)$$
Characteristic Equation: $m r^2 + c r + k = 0$.
Discriminant $\Delta = c^2 - 4mk$:
1. $c^2 - 4mk < 0$: **Underdamped** (Oscillates with exponentially decaying envelope).
2. $c^2 - 4mk = 0$: **Critically Damped** ($c_{\text{crit}} = 2\sqrt{km}$, returns to rest fastest without oscillating).
3. $c^2 - 4mk > 0$: **Overdamped** (Sluggish, no oscillations).

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 14.1: Underdamped Motion & Amplitude-Phase Form
**Statement**: A 2-kg mass is attached to a spring with $k = 50$ N/m and a dashpot with $c = 12$ N$\cdot$s/m. Released from $x(0) = 0.2$ m with initial velocity $v(0) = -1$ m/s. Find $x(t)$ in amplitude-phase form $A e^{-\gamma t}\cos(\omega_d t - \phi)$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Set up ODE**:
  $$2 x'' + 12 x' + 50 x = 0 \implies x'' + 6x' + 25x = 0$$
* **Step 2: Characteristic Roots**:
  $$r^2 + 6r + 25 = 0 \implies r = \frac{-6 \pm \sqrt{36 - 100}}{2} = -3 \pm 4i$$
  Damping factor $\gamma = 3$, Quasi-frequency $\omega_d = 4$ rad/s.
* **Step 3: General Solution**:
  $$x(t) = e^{-3t}(c_1 \cos 4t + c_2 \sin 4t)$$
* **Step 4: Apply Initial Conditions**:
  $$x(0) = c_1 = 0.2 = \frac{1}{5}$$
  $$x'(t) = -3e^{-3t}(c_1 \cos 4t + c_2 \sin 4t) + e^{-3t}(-4c_1 \sin 4t + 4c_2 \cos 4t)$$
  $$x'(0) = -3c_1 + 4c_2 = -1 \implies -3(0.2) + 4c_2 = -1 \implies -0.6 + 4c_2 = -1 \implies 4c_2 = -0.4 \implies c_2 = -0.1$$
  $$x(t) = e^{-3t}(0.2 \cos 4t - 0.1 \sin 4t)$$
* **Step 5: Convert to Amplitude-Phase Form**:
  $$A = \sqrt{c_1^2 + c_2^2} = \sqrt{(0.2)^2 + (-0.1)^2} = \sqrt{0.04 + 0.01} = \sqrt{0.05} = \frac{\sqrt{5}}{10} \approx 0.2236\text{ m}$$
  $$\phi = \arctan\left(\frac{c_2}{c_1}\right) = \arctan\left(\frac{-0.1}{0.2}\right) = \arctan(-0.5) \approx -0.4636\text{ rad}$$
  $$x(t) = 0.224 e^{-3t}\cos(4t + 0.464)\text{ m}$$

---

### Problem 14.2: Pure Resonance Catastrophe (The Bridge Destroyer)
**Statement**: Solve $x'' + 9x = 4\cos 3t$ with $x(0) = 0, x'(0) = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Natural frequency**:
  $\omega_0^2 = 9 \implies \omega_0 = 3$ rad/s.
  Driving frequency $\omega = 3$ rad/s. $\omega = \omega_0 \implies$ **PURE RESONANCE!**
* **Step 2: Particular Solution**:
  $$x_p(t) = t(A \cos 3t + B \sin 3t)$$
  Substituting into $x'' + 9x$:
  $$x_p'' + 9x_p = -6A \sin 3t + 6B \cos 3t = 4\cos 3t$$
  $$-6A = 0 \implies A = 0, \qquad 6B = 4 \implies B = \frac{2}{3}$$
  $$x_p(t) = \frac{2}{3}t \sin 3t$$
* **Step 3: General Solution**:
  $$x(t) = c_1 \cos 3t + c_2 \sin 3t + \frac{2}{3}t \sin 3t$$
* **Step 4: Apply $x(0) = 0, x'(0) = 0$**:
  $$x(0) = c_1 = 0$$
  $$x'(t) = 3c_2 \cos 3t + \frac{2}{3}\sin 3t + 2t \cos 3t \implies x'(0) = 3c_2 = 0 \implies c_2 = 0$$
* **Step 5: Final Solution**:
  $$x(t) = \frac{2}{3}t \sin 3t$$
  Notice the amplitude $\frac{2}{3}t$ **grows linearly to infinity** as $t \to \infty$! This is the physical mechanism that shatters structures and bridges!

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Confusing Natural vs Quasi-Frequency**: $\omega_0 = \sqrt{k/m}$ is undamped frequency. $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$ is damped frequency. $\omega_d < \omega_0$ always!
- **Trap 2: Resonance Amplitude Blow-Up**: In un-damped systems driven at $\omega_0$, $x_p$ has a factor of $t$. In damped systems ($c > 0$), friction prevents infinite blow-up!
