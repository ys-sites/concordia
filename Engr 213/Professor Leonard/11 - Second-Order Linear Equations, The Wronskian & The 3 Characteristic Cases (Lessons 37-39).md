# Topic 11: Second-Order Linear Equations & The 3 Characteristic Cases
### Professor Leonard Master Series · Lessons 37 to 39
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Why $y = e^{rx}$?
*"Why do we guess $y = e^{rx}$ for constant-coefficient equations $a y'' + b y' + c y = 0$?"*

Professor Leonard explains:
*"Think about what this equation says. It says: a multiple of the second derivative, plus a multiple of the first derivative, plus a multiple of the original function must CANCEL OUT to zero for ALL $x$. What is the ONLY function in mathematics whose derivatives are multiples of itself? The exponential function $e^{rx}$!"*

Substitute $y = e^{rx}, y' = r e^{rx}, y'' = r^2 e^{rx}$:
$$a(r^2 e^{rx}) + b(r e^{rx}) + c(e^{rx}) = 0$$
$$(a r^2 + b r + c)e^{rx} = 0$$
Since $e^{rx}$ is never zero, we get the **Characteristic Auxiliary Equation**:
$$a r^2 + b r + c = 0$$

---

## 2. The Three Great Cases

### Case 1: Distinct Real Roots ($r_1 \neq r_2$)
$$y_h(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}$$

### Case 2: Repeated Real Roots ($r_1 = r_2 = r$)
*"If you write $y = C_1 e^{rx} + C_2 e^{rx}$, those are NOT independent! That is just $(C_1 + C_2)e^{rx} = C e^{rx}$."*
Using reduction of order, the second independent solution picks up a factor of $x$:
$$y_h(x) = C_1 e^{rx} + C_2 x e^{rx}$$

### Case 3: Complex Conjugate Roots ($r = \alpha \pm i\beta$)
By Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$:
$$e^{(\alpha \pm i\beta)x} = e^{\alpha x}(\cos(\beta x) \pm i\sin(\beta x))$$
Combining the positive and negative branches gives the pure real general solution:
$$y_h(x) = e^{\alpha x}\left(C_1 \cos(\beta x) + C_2 \sin(\beta x)\right)$$
