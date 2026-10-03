# Lesson 02: Classification of Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 2
> * **Direct Video Link**: [Classification of Differential Equations](https://www.youtube.com/watch?v=lwed4VVYuHo&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=2)
> * **Target Exam Scope**: Midterm 1 Scope · Chapter 1.1
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that classifying an equation is like diagnosing a medical condition: before you can prescribe the cure (an integration technique), you must precisely identify the disease. You must immediately recognize whether the system involves one independent variable (ODE) or multiple spatial dimensions (PDE), pinpoint the highest derivative present (order), and rigorously test whether the unknown function behaves in a strictly linear manner.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### Taxonomy Criteria


  | Property | Definition | Exam Diagnostic Rule 

  | **Type** | ODE vs PDE | ODEs have 1 independent variable ($d/dx$); PDEs have 2+ independent variables ($\partial/\partial x, \partial/\partial t$). 

  | **Order** | Highest derivative | Look for the highest derivative operator $y^{(n)}$; do not confuse with powers/exponents! 

  | **Linearity** | $a_n(x) y^{(n)} + \dots + a_0(x) y = g(x)$ | $y$ and all derivatives must appear to power 1 only; no cross-products ($y y'$); no nonlinear functions ($\sin y, e^y$).

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia Diagnostic Drill: Full Classification Battery
**Problem Statement**:
> Classify the following equations by type, order, and linearity. If nonlinear, explicitly isolate the offending term:
1. $x^3 y''' + 4x y' - 5y = \cos(x)$
2. $\dfrac{d^2 y}{dx^2} + y \dfrac{dy}{dx} = 0$
3. $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = \rho(x,y)$
4. $\left(\dfrac{dy}{dx}\right)^3 + y = x$

**Step-by-Step Whiteboard Solution**:
* **Equation 1: $x^3 y''' + 4x y' - 5y = \cos(x)$**:
  Type: ODE. Order: 3rd. Linearity: Linear (coefficients depend only on independent variable $x$; $y, y', y'''$ appear strictly to degree 1).

* **Equation 2: $y'' + y y' = 0$**:
  Type: ODE. Order: 2nd. Linearity: Nonlinear. Offending term: $y \cdot y'$ (cross-multiplication of the dependent variable by its derivative).

* **Equation 3: $\partial_{xx} u + \partial_{yy} u = \rho(x,y)$**:
  Type: PDE (independent variables $x$ and $y$). Order: 2nd. Linearity: Linear (Poisson's equation).

* **Equation 4: $(y')^3 + y = x$**:
  Type: ODE. Order: 1st (highest derivative is 1st order). Linearity: Nonlinear. Offending term: $(y')^3$ (first derivative raised to the 3rd power).

> [!WARNING]
> **Common Exam Pitfall**: Never confuse the order of a derivative with the power to which it is raised. $(y')^4$ is a first-order nonlinear term, while $y^{(4)}$ is a fourth-order linear term.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Classification of Differential Equations](https://www.youtube.com/watch?v=lwed4VVYuHo&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=2)
- **Exam Takeaway**: Order determines the required number of initial conditions; linearity determines whether superposition applies.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
