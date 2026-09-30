# Topic 15: Linear Systems of ODEs & Phase Plane Portraits
### Professor Leonard Master Series · Linear Systems
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Coupled Dynamics
In matrix form:
$$\mathbf{X}'(t) = \mathbf{A}\mathbf{X}(t)$$
We seek straight-line trajectories along which the velocity vector $\mathbf{X}'$ points directly parallel to the position vector $\mathbf{X}$:
$$\mathbf{A}\mathbf{v} = \lambda \mathbf{v} \iff (\mathbf{A} - \lambda \mathbf{I})\mathbf{v} = \mathbf{0}$$

---

## 2. Curriculum Reference Diagram

![Figure 10.2.2: Phase Plane Trajectories](./images/zill_fig_10_2_2_phase_portrait.png)
*Figure 15.1: Trajectories in phase plane for 2x2 linear system — from Zill 7th Ed. Chapter 10 (Fig. 10.2.2).*

---

## 3. Phase Plane Zoo: The Geometrical Classification
Compute $\lambda_1, \lambda_2$ from $\det(\mathbf{A} - \lambda \mathbf{I}) = 0$:
* **Both Real, Negative ($\lambda_1, \lambda_2 < 0$)**: **Stable Node (Sink)** — All trajectories rush into the origin.
* **Both Real, Positive ($\lambda_1, \lambda_2 > 0$)**: **Unstable Node (Source)** — All trajectories flee away.
* **Opposite Signs ($\lambda_1 < 0 < \lambda_2$)**: **Saddle Point (Always Unstable)** — Trajectories approach along the stable eigenvector and get flung away along the unstable eigenvector!
* **Pure Imaginary ($\lambda = \pm i\beta$)**: **Center (Neutrally Stable)** — Closed concentric ellipses.
* **Complex with Real Part ($\lambda = \alpha \pm i\beta$)**:
  * $\alpha < 0$: **Stable Spiral Sink** (spirals inward).
  * $\alpha > 0$: **Unstable Spiral Source** (spirals outward).
