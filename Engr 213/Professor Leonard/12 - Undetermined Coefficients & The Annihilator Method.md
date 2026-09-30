# Topic 12: Undetermined Coefficients & The Annihilator Method
### Professor Leonard Master Series · Undetermined Coefficients
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Educated Guess
When solving non-homogeneous equations:
$$a y'' + b y' + c y = g(x)$$
The general solution is:
$$y(x) = y_c(x) + y_p(x)$$
* $y_c(x)$ is the complementary solution to $a y'' + b y' + c y = 0$.
* $y_p(x)$ is a particular solution that produces $g(x)$.

The **Method of Undetermined Coefficients** is based on a simple observation: if $g(x)$ is a polynomial, exponential, or sine/cosine, its derivatives look like variations of the same family. So we make an **educated guess** with unknown coefficients $A, B, C$, plug it into the left-hand side, and solve for those coefficients!

---

## 2. Leonard's Master Guessing Table

| Driving Term $g(x)$ | Trial Particular Solution $Y_p(x)$ |
| :--- | :--- |
| $k$ (constant) | $A$ |
| $3x + 5$ | $A x + B$ |
| $x^2 - 1$ | $A x^2 + B x + C$ |
| $e^{5x}$ | $A e^{5x}$ |
| $\sin(3x)$ or $\cos(3x)$ | $A \cos(3x) + B \sin(3x)$ *(Must include BOTH!)* |
| $x e^{2x}$ | $(A x + B)e^{2x}$ |
| $e^{x}\cos(2x)$ | $e^x(A \cos(2x) + B \sin(2x))$ |

---

## 3. The Number One Trap: The Duplication Rule
*"If any term in your guess $Y_p$ already appears in $y_c$, that term will be annihilated to 0 by the left-hand side!"*

**The Fix**: Multiply your guess by $x$ (or $x^2$ if it was a repeated root) until NO term in $Y_p$ matches any term in $y_c$.
* *Example*: $y'' - 4y' + 4y = e^{2x}$.
  * Characteristic eq: $(r - 2)^2 = 0 \implies y_c = C_1 e^{2x} + C_2 x e^{2x}$.
  * Guessing $Y_p = A e^{2x}$ fails (duplicates $C_1 e^{2x}$).
  * Guessing $Y_p = A x e^{2x}$ fails (duplicates $C_2 x e^{2x}$).
  * **Correct Guess**: Multiply by $x^2$: $Y_p = A x^2 e^{2x}$!
