# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 07: Statistical Quality Control & Process Capability
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 7: INDU 211 - Quality Control Problem](https://www.youtube.com/watch?v=1BcAZosLMb0)
> * **Video ID**: `1BcAZosLMb0` · **Duration**: 18:10
> * **Target Exam Scope**: 🏁 **FINAL EXAM (Weeks 7–12, Chapters 14, 15, 8, 17)**
> * **Curriculum Context**: Chapter 8 — Quality Control & Statistical Process Control (SPC)

---

## 1. Problem Description & Initial Process Data

**Bestwood Manufacturing** produces short wooden beams with a nominal design length of **$24.0\text{ cm}$**. Quality engineers sampled 15 subgroups ($m=15$), with each subgroup containing 4 individual beams ($n=4$):

* **Initial Process Summary Statistics**:
  * Number of subgroups: $m = 15$
  * Subgroup sample size: $n = 4$
  * Initial grand mean (average of subgroup averages): $\bar{\bar{X}}_{\text{initial}} = \mathbf{24.00\text{ cm}}$
  * Initial average range: $\bar{R}_{\text{initial}} = \mathbf{1.413\text{ cm}}$
* **Control Chart Out-of-Control Identification**:
  * Initial $\bar{X}$ and $R$ charts revealed that **Sample 4** ($\bar{X}_4 = 26.15\text{ cm}$) and **Sample 10** ($\bar{X}_{10} = 22.75\text{ cm}$) exceeded the 3-sigma control limits.
  * Assignable causes were identified and corrected. Standard industrial quality protocol requires eliminating these two out-of-control subgroups and recalculating revised in-control process parameters using the remaining $m = 13$ subgroups.
* **Engineering Design Tolerances**:
  * Nominal length: $24.0\text{ cm} \pm 2.2\text{ cm}$
  * Upper Specification Limit: $\text{USL} = 24.0 + 2.2 = \mathbf{26.2\text{ cm}}$
  * Lower Specification Limit: $\text{LSL} = 24.0 - 2.2 = \mathbf{21.8\text{ cm}}$

---

## 2. Step-by-Step Worked Solutions

### Part 4.1: Revised In-Control Average Length ($\bar{\bar{X}}_{\text{revised}}$)

* **Rapid Calculation Technique**:
  1. Calculate initial sum of all 15 subgroup means:
     $$\sum_{i=1}^{15} \bar{X}_i = m \times \bar{\bar{X}}_{\text{initial}} = 15 \times 24.00 = 360.00\text{ cm}$$
  2. Subtract the two out-of-control sample means:
     $$\sum_{\text{revised}} \bar{X} = 360.00 - \bar{X}_4 - \bar{X}_{10} = 360.00 - 26.15 - 22.75 = \mathbf{311.10\text{ cm}}$$
  3. Divide by the revised number of in-control subgroups ($m_{\text{new}} = 15 - 2 = 13$):
     $$\bar{\bar{X}}_{\text{revised}} = \frac{311.10}{13} = \mathbf{23.93\text{ cm}}$$
* **Conclusion**: When the process is operating in a state of statistical control, the true average beam length produced is **$23.93\text{ cm}$**.

---

### Part 4.2: Estimation of Process Standard Deviation ($\hat{\sigma}$)

* **Theoretical SPC Formula**:
  The population standard deviation is unbiasedly estimated from the average range using the Hartley control chart factor $d_2$:
  $$\hat{\sigma} = \frac{\bar{R}}{d_2}$$
* **Hartley Constant Lookup**:
  From the Standard Control Chart Constants table for subgroup size $n=4$:
  $$d_2 = 2.059$$
* **Calculation**:
  $$\hat{\sigma} = \frac{1.413}{2.059} = \mathbf{0.686\text{ cm}}$$

---

### Part 4.3: Process Capability Ratio ($C_p$) & Industrial Interpretation

* **Process Capability Ratio Formula**:
  $$C_p = \frac{\text{USL} - \text{LSL}}{6 \hat{\sigma}}$$
* **Calculation**:
  $$C_p = \frac{26.2 - 21.8}{6 \times 0.686} = \frac{4.40}{4.116} = \mathbf{1.07}$$

* **Industrial Engineering Interpretation**:
  * **The 1.33 Standard**: In industrial manufacturing, an existing production process requires a minimum $C_p \ge 1.33$ (a 4-sigma safety margin) to be certified as capable of producing within specifications.
  * **Assessment**: Because $C_p = 1.07 < 1.33$, the beam manufacturing process is **NOT CAPABLE** of consistently satisfying the $\pm 2.2\text{ cm}$ tolerance requirements.
  * **Remedial Action**: Bestwood quality engineering must either reduce process variability ($\sigma$) by recalibrating cutting equipment or negotiate wider design tolerances with the client.
