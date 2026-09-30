# MIAE 221: Materials Science for Engineers
## Chapter 5: Diffusion in Solids (Expanded & Condensed Guide)
### Concordia University · Gina Cody School of Engineering
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Ed., Callister & Rethwisch)  
**Instructor**: Dr. Mamoun Medraj, P.Eng | **Curriculum Alignment**: Concordia University

---

*(Syllabus Week 5 · Core Midterm Topic)*

### 1. 🎯 30-Second Core Intuition & Plain-English Concept
Diffusion is the mass transport of atoms through a solid by random atomic jumping driven by thermal vibrations. Atoms jump into neighboring vacancies (**vacancy diffusion**) or squeeze through interstices (**interstitial diffusion**). 

Because small solute atoms (like C, H, N) don't need to wait for a vacancy to open up, **interstitial diffusion is thousands of times faster** than substitutional diffusion.

*Real-World Analogy*: Squeezing through a packed concert crowd. If you are a child (small interstitial carbon atom), you can weave between people's legs quickly. If you are a large adult (substitutional atom), you can only take a step forward when someone in front of you leaves their spot (vacancy diffusion).

### 2. ⚙️ High-Yield Mathematical Engine & Essential Laws

#### 1. Fick's First Law (Steady-State Diffusion)
$$J = -D \frac{dC}{dx}$$
* $J$: Diffusion flux ($	ext{kg}/(	ext{m}^2\cdot\text{s})$ or $	ext{atoms}/(	ext{m}^2\cdot\text{s})$).
* $D$: Diffusion coefficient ($	ext{m}^2/\text{s}$).
* $\frac{dC}{dx}$: Concentration gradient ($	ext{kg}/\text{m}^4$). The negative sign indicates diffusion flows down the concentration gradient (from high to low concentration).

#### 2. Fick's Second Law (Non-Steady-State Diffusion)
$$\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$$

*Standard Solution for Semi-Infinite Solid with Constant Surface Concentration $C_s$*:
$$\frac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left( \frac{x}{2\sqrt{Dt}} \right)$$
* $C_0$: Uniform initial bulk concentration.
* $C_s$: Constant surface concentration.
* $C_x$: Concentration at depth $x$ after elapsed time $t$.
* $\text{erf}(z)$: Gaussian error function.
* **Golden Shortcut Rule**: When concentration ratio $\frac{C_x - C_0}{C_s - C_0}$ is held constant:
  $$\frac{x^2}{Dt} = \text{constant} \implies \frac{x_1^2}{D_1 t_1} = \frac{x_2^2}{D_2 t_2}$$

#### 3. Temperature Dependence of Diffusion (Arrhenius)
$$D = D_0 \exp\left( -\frac{Q_d}{R T} \right) \iff \ln D = \ln D_0 - \frac{Q_d}{R}\left(\frac{1}{T}\right)$$
* $Q_d$: Activation energy for diffusion ($	ext{J/mol}$).
* $R$: Universal gas constant ($8.314\text{ J/mol}\cdot\text{K}$).

### 3. 🖼️ Textbook Reference Diagram & Visual Pedagogical Analysis

![Callister Figure 5.1 - Diffusion Couple Demonstration](./images/callister_fig_5_1_diffusion_couple.png)
*Figure 5.1: Copper-Nickel diffusion couple: (a) Schematic atom positions before heating, and (b) Concentration profile across the interface after elevated-temperature diffusion.*

![Callister Figure 5.5 - Non-Steady-State Concentration Profile (Fick's Second Law)](./images/callister_fig_5_5_carburizing_profile.png)
*Figure 5.5: Concentration profile $C_x$ vs. depth $x$ into a solid during gas carburizing at a specific time $t$.*

#### In-Depth Visual Breakdown:
* **The Diffusion Couple (Figure 5.1)**: Illustrates how an initially sharp chemical step-function ($100\%\text{ Cu}$ on left, $100\%\text{ Ni}$ on right) gradually smooths out into an S-shaped continuous concentration curve as Cu atoms diffuse right and Ni atoms diffuse left.
* **Carburizing Profile (Figure 5.5)**: Shows steel surface hardening. Carbon gas at surface maintains constant $C_s$. As diffusion proceeds, the carbon profile pushes deeper into the interior. The depth $x$ at which a target hardness/carbon level is reached scales directly with $\sqrt{Dt}$.

### 4. ⚖️ Teacher Notes Cross-Reference & Concordia Exam Traps
* **Concordia Exam Focus**:
  * Gas carburizing calculations for steel gear teeth: Determining time required to achieve a specified carbon concentration at a given depth.
  * **Linear Interpolation of Error Function Table**: Concordia exams provide an abbreviated table of $\text{erf}(z)$ values; students must interpolate precisely:
    $$z = z_1 + \frac{\text{erf}(z) - \text{erf}(z_1)}{\text{erf}(z_2) - \text{erf}(z_1)}(z_2 - z_1)$$
* **Concordia Exam Traps**:
  * **Gas Constant Units**: Using $k_B$ instead of $R$. If $Q_d$ is given in $\text{kJ/mol}$, use $R = 8.314\text{ J/mol}\cdot\text{K}$ (multiply $\text{kJ}$ by $1000$!). If $Q_d$ is in $\text{eV/atom}$, use $k_B = 8.62 \times 10^{-5}\text{ eV/K}$.

### 5. 💡 Master Exam Problem & Step-by-Step Solution Framework
**Problem**: *A gear made of $0.20\text{ wt}\%$ carbon steel is case-hardened in a gas atmosphere maintaining $1.20\text{ wt}\%$ carbon at the surface at $950^\circ\text{C}$ ($D = 1.6 \times 10^{-11}\text{ m}^2/\text{s}$). How long (in hours) will it take to achieve a carbon concentration of $0.60\text{ wt}\%$ at a depth of $0.5\text{ mm}$ below the surface?*  
*(Given: $\text{erf}(0.60) = 0.6039$, $\text{erf}(0.65) = 0.6420$)*

* **Step 1: Set Up Fick's Second Law Concentration Ratio**
  $$\frac{C_x - C_0}{C_s - C_0} = \frac{0.60 - 0.20}{1.20 - 0.20} = \frac{0.40}{1.00} = 0.40$$
* **Step 2: Solve for Error Function Value**
  $$1 - \text{erf}(z) = 0.40 \implies \text{erf}(z) = 0.60$$
* **Step 3: Interpolate to Find Argument $z$**
  $$z = 0.60 + \frac{0.6000 - 0.6039}{0.6420 - 0.6039}(0.65 - 0.60) \approx 0.595$$
* **Step 4: Relate $z$ to Physical Diffusion Parameters**
  $$z = \frac{x}{2\sqrt{Dt}} \implies 0.595 = \frac{0.5 \times 10^{-3}\text{ m}}{2\sqrt{(1.6 \times 10^{-11}\text{ m}^2/\text{s}) t}}$$
  $$\sqrt{t} = \frac{0.5 \times 10^{-3}}{2(0.595)\sqrt{1.6 \times 10^{-11}}} = \frac{5 \times 10^{-4}}{4.757 \times 10^{-6}} = 105.1\text{ s}^{1/2}$$
  $$t = (105.1)^2 = 11,048\text{ seconds} = \frac{11,048}{3600} = 3.07\text{ hours}$$

---
