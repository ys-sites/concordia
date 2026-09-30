# Topic 01: The Big Picture, Order, Linearity & Verifying Solutions
### Professor Leonard Master Series · Lessons 1 to 4
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Professor Leonard's Whiteboard Intuition: What is a Differential Equation?
Imagine you are driving a car down the highway.
* In **Algebra**, someone asks: *"Where are you right now?"* You give a static number: *"Mile marker 50."*
* In **Calculus 1**, someone asks: *"How fast are you changing your position right now?"* You give a derivative: *"65 miles per hour."*
* In **Differential Equations**, someone asks: *"If your speed at any moment is proportional to where you are, where will you be in two hours?"*

A Differential Equation is simply a mathematical sentence that relates an **unknown function** $y(x)$ to its **rates of change** ($y', y'', \dots$).
When you "solve" an algebraic equation like $x^2 - 4 = 0$, the answer is a **number** ($x = \pm 2$).
When you "solve" a differential equation like $y' = 2x$, the answer is a **whole family of functions** ($y(x) = x^2 + C$).

---

## 2. Order, Degree & Linearity (Leonard's Rules of the Road)

### Rule 1: The Order is King
Look for the highest derivative on the board:
$$y''' + 4(y')^5 - y = 0 \implies \text{Order } 3$$
The exponent $5$ on $y'$ is the **degree**, but the **order** is strictly $3$.

### Rule 2: Linearity is Fragile
Professor Leonard explains linearity like this: *"The dependent variable $y$ and its derivatives are delicate. The moment you do anything fancy to them, linearity breaks!"*
* If you square $y$ $\implies$ **Nonlinear** ($y^2$)
* If you take the cosine of $y$ $\implies$ **Nonlinear** ($\cos y$)
* If you multiply $y$ by its own derivative $\implies$ **Nonlinear** ($y \cdot y'$)
* If $y$ appears in an exponent $\implies$ **Nonlinear** ($e^y$)

Only terms like $x^3 y'' + \sin(x) y' + e^x y = \ln(x)$ are **linear**, because the coefficients involve only the independent variable $x$, while $y, y', y''$ stand alone to the first power.

---

## 3. How to Verify a Solution (The 3-Step Whiteboard Protocol)

**Example**: Verify that $y(x) = C_1 e^{2x} + C_2 e^{-3x}$ is a solution to $y'' + y' - 6y = 0$.

### Step 1: Compute the necessary derivatives
$$y = C_1 e^{2x} + C_2 e^{-3x}$$
$$y' = 2C_1 e^{2x} - 3C_2 e^{-3x}$$
$$y'' = 4C_1 e^{2x} + 9C_2 e^{-3x}$$

### Step 2: Plug directly into the Left-Hand Side (LHS)
$$\text{LHS} = y'' + y' - 6y$$
$$= (4C_1 e^{2x} + 9C_2 e^{-3x}) + (2C_1 e^{2x} - 3C_2 e^{-3x}) - 6(C_1 e^{2x} + C_2 e^{-3x})$$

### Step 3: Collect like terms
$$e^{2x} \text{ terms}: (4C_1 + 2C_1 - 6C_1)e^{2x} = 0 e^{2x} = 0$$
$$e^{-3x} \text{ terms}: (9C_2 - 3C_2 - 6C_2)e^{-3x} = 0 e^{-3x} = 0$$
$$\text{LHS} = 0 = \text{RHS} \quad \checkmark$$
The relation holds for all values of $C_1$ and $C_2$!

---

## 4. Leonard's Red Flag Alerts
* 🚩 **Red Flag**: Treating an Initial Value Problem condition $y(0) = 4$ as a point $x=4, y=0$. Remember: the inside is $x$, the outside is $y$! $y(x_0) = y_0 \implies (x_0, y_0) = (0, 4)$.
