# Topic 04: Separable Equations & Initial Value Problems (The Clean Split)
### Professor Leonard Master Series · Lessons 12 to 14
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Great Divorce
Separable differential equations are the bread and butter of calculus. 
Professor Leonard calls this **"The Great Divorce"**:
*"You have a crowded room where $x$'s and $y$'s are mingled together. Your job is to put all the $y$'s on the left side of the room with $dy$, and all the $x$'s on the right side with $dx$. Once they are completely separated, both sides can be integrated independently!"*

$$\frac{dy}{dx} = g(x) h(y) \implies \frac{1}{h(y)}dy = g(x)dx$$

---

## 2. Step-by-Step Whiteboard Walkthrough

**Problem**: Solve the Initial-Value Problem:
$$\frac{dy}{dx} = \frac{2x(y^2 + 1)}{y}, \quad y(0) = 1$$

### Step 1: Separate the variables
Move $y$ and $(y^2 + 1)$ to the left, $dx$ and $x$ to the right:
$$\frac{y}{y^2 + 1}dy = 2x dx$$

### Step 2: Integrate both sides
$$\int \frac{y}{y^2 + 1}dy = \int 2x dx$$
* **Left Side**: Use $u$-substitution ($u = y^2 + 1, du = 2y dy \implies y dy = \frac{1}{2}du$):
  $$\frac{1}{2}\ln|y^2 + 1| = \frac{1}{2}\ln(y^2 + 1) \quad (\text{since } y^2 + 1 > 0)$$
* **Right Side**:
  $$\int 2x dx = x^2 + C$$

### Step 3: Combine and isolate $y$
$$\frac{1}{2}\ln(y^2 + 1) = x^2 + C$$
Multiply by 2:
$$\ln(y^2 + 1) = 2x^2 + 2C$$
Exponentiate both sides (Leonard's Rule: $e^{2x^2 + 2C} = e^{2C} e^{2x^2} = A e^{2x^2}$):
$$y^2 + 1 = A e^{2x^2} \implies y^2 = A e^{2x^2} - 1$$

### Step 4: Apply the initial condition $y(0) = 1$
$$1^2 = A e^0 - 1 \implies 1 = A - 1 \implies A = 2$$
$$y^2 = 2e^{2x^2} - 1$$
Since $y(0) = 1 > 0$, choose the positive branch:
$$y(x) = \sqrt{2e^{2x^2} - 1}$$

---

## 3. Leonard's Red Flag: The "Lost" Equilibrium Solutions
Whenever you divide by a function of $y$ (say, dividing by $h(y)$), you are assuming $h(y) \neq 0$.
If there is a constant $y = k$ such that $h(k) = 0$, that constant function is an **Equilibrium Solution**!
* In $\frac{dy}{dx} = y(y - 3)$, dividing by $y(y - 3)$ risks losing $y = 0$ and $y = 3$.
* Always write: *"Check singular solutions: $y = 0$ and $y = 3$."* on the side of your board!
