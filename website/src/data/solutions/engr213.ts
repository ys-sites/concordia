import { SolutionUpgrade, t } from './types';

// ENGR 213 — baby-step solutions for the calculation questions in questionsData.ts.
// Methods follow the teacher's Lectures 1–6 (Zill 7th ed. CH 1.1–1.3, CH 2.1–2.5, CH 2.7).
export const ENGR213_SOLUTIONS: Record<string, SolutionUpgrade> = {
  Q_ENGR213_004: {
    steps: [
      { title: 'Write the candidate and differentiate once (product rule)', math: t`y = xe^{x} \quad\Rightarrow\quad y' = e^{x} + xe^{x} = (1+x)e^{x}` },
      { title: 'Differentiate again', math: t`y'' = e^{x} + (1+x)e^{x} = (2+x)e^{x}` },
      { title: 'Substitute into the left side of the ODE', math: t`y'' - 2y' + y = (2+x)e^{x} - 2(1+x)e^{x} + xe^{x}` },
      { title: 'Factor out $e^{x}$ and collect', math: t`= e^{x}\big[(2 + x) - (2 + 2x) + x\big] = e^{x}\cdot 0 = 0` },
      { title: 'Conclusion', note: t`The left side is identically $0$ for every real $x$, and $xe^{x}$ is twice differentiable everywhere, so it is a solution on $(-\infty,\infty)$.` }
    ],
    answer: t`y = xe^{x}`,
    whyWrong: {
      '1': t`For $y = e^{-x}$: $y' = -e^{-x}$, $y'' = e^{-x}$, so $y'' - 2y' + y = e^{-x} + 2e^{-x} + e^{-x} = 4e^{-x} \neq 0$. Picking it usually means the sign of $y'$ was dropped.`,
      '2': t`For $y = \sin x$: $y'' - 2y' + y = -\sin x - 2\cos x + \sin x = -2\cos x \neq 0$. The $y''$ and $y$ terms cancel, but the middle term does not.`,
      '3': t`For $y = x^{2}e^{x}$: $y'' - 2y' + y = e^{x}\big[(x^2 + 4x + 2) - 2(x^2 + 2x) + x^2\big] = 2e^{x} \neq 0$. It looks close to $xe^x$, but only $xe^x$ makes every term cancel.`
    }
  },

  Q_ENGR213_006: {
    steps: [
      { title: 'Differentiate both sides of the relation with respect to $x$', math: t`\frac{d}{dx}\left(x^{2} + y^{2}\right) = \frac{d}{dx}(25)` },
      { title: 'Use the chain rule on $y^{2}$ ($y$ is a function of $x$)', math: t`2x + 2y\,\frac{dy}{dx} = 0` },
      { title: 'Isolate $dy/dx$', math: t`2y\,\frac{dy}{dx} = -2x \quad\Rightarrow\quad \frac{dy}{dx} = -\frac{x}{y}` },
      { title: 'Where it is valid', note: t`Division by $y$ requires $y \neq 0$, which holds for $-5 < x < 5$ on either semicircle $y = \pm\sqrt{25 - x^{2}}$.` }
    ],
    answer: t`\frac{dy}{dx} = -\frac{x}{y}`,
    whyWrong: {
      '1': t`The minus sign was lost when moving $2x$ to the other side: $2y\,y' = -2x$, not $+2x$.`,
      '2': t`$x$ and $y$ were swapped. $y' = -y/x$ is the ODE for the family $xy = c$ (hyperbolas), not circles.`,
      '3': t`This differentiates $y^{2}$ as $2y$ instead of $2y\,y'$: the chain rule factor $\dfrac{dy}{dx}$ was forgotten.`
    }
  },

  Q_ENGR213_007: {
    steps: [
      { title: 'Substitute the initial condition $x = 0$, $y = 3$ into the family', math: t`y(0) = 0^{2} + c = 3` },
      { title: 'Solve for the constant', math: t`c = 3` },
      { title: 'Write the member of the family', math: t`y = x^{2} + 3` }
    ],
    answer: t`y = x^{2} + 3`,
    whyWrong: {
      '1': t`Sign slip: $0 + c = 3$ gives $c = +3$, not $-3$.`,
      '2': t`The constant is added ($y = x^2 + c$), not multiplied. Also, $3x^{2}$ gives $y(0) = 0$, not 3.`,
      '3': t`$y = x^2 + 3x$ is not in the family at all: $y' = 2x + 3 \neq 2x$.`
    }
  },

  Q_ENGR213_008: {
    steps: [
      { title: 'Evaluate the family at $t = \pi/2$ (note $4t = 2\pi$)', math: t`x\!\left(\tfrac{\pi}{2}\right) = c_1\cos 2\pi + c_2\sin 2\pi = c_1(1) + c_2(0) = c_1` },
      { title: 'Apply $x(\pi/2) = -2$', math: t`c_1 = -2` },
      { title: 'Differentiate the family (chain rule gives the factor 4)', math: t`x'(t) = -4c_1\sin 4t + 4c_2\cos 4t` },
      { title: 'Evaluate at $t = \pi/2$', math: t`x'\!\left(\tfrac{\pi}{2}\right) = -4c_1(0) + 4c_2(1) = 4c_2` },
      { title: "Apply $x'(\pi/2) = 1$", math: t`4c_2 = 1 \quad\Rightarrow\quad c_2 = \tfrac14` },
      { title: 'Substitute both constants', math: t`x(t) = -2\cos 4t + \tfrac14\sin 4t` }
    ],
    answer: t`x = -2\cos 4t + \tfrac14\sin 4t`,
    whyWrong: {
      '1': t`From $4c_2 = 1$ you must divide by 4 ($c_2 = \tfrac14$). Multiplying gives $c_2 = 4$.`,
      '2': t`$\cos 2\pi = +1$, so $c_1 = -2$. Using $\cos 2\pi = -1$ flips the sign of $c_1$.`,
      '3': t`The derivative of $c_2\sin 4t$ is $+4c_2\cos 4t$. A minus sign here gives $c_2 = -\tfrac14$.`
    }
  },

  Q_ENGR213_011: {
    steps: [
      { title: 'The slope of the lineal element at $(x, y)$ is $f(x, y)$', math: t`\frac{dy}{dx} = f(x, y) = 0.2\,x\,y` },
      { title: 'Substitute $x = 2$, $y = 3$', math: t`f(2, 3) = 0.2 \times 2 \times 3` },
      { title: 'Multiply', math: t`= 0.2 \times 6 = 1.2` }
    ],
    answer: t`1.2`,
    whyWrong: {
      '1': t`$0.2$ is only the coefficient; the slope also depends on the point: multiply by $x = 2$ and $y = 3$.`,
      '2': t`$6 = x\cdot y$, but the factor $0.2$ was forgotten.`,
      '3': t`$1.0 = 0.2(2 + 3)$: $x$ and $y$ were added instead of multiplied.`
    }
  },

  Q_ENGR213_012: {
    steps: [
      { title: 'Critical points: set the right side to zero', math: t`y(y - 3) = 0 \quad\Rightarrow\quad y = 0 \ \text{ or } \ y = 3` },
      { title: 'Test the sign of $f(y) = y(y - 3)$ in each interval of the phase line', math: t`\begin{array}{c|c|c} y < 0 & 0 < y < 3 & y > 3 \\ \hline (-)(-) > 0 & (+)(-) < 0 & (+)(+) > 0 \\ \uparrow & \downarrow & \uparrow \end{array}` },
      { title: 'Read $y = 0$', note: t`Below 0 solutions rise toward 0; between 0 and 3 they fall toward 0. Arrows point in from both sides, so $y = 0$ is asymptotically stable (attractor).` },
      { title: 'Read $y = 3$', note: t`Below 3 solutions fall away; above 3 they rise away. Arrows point out on both sides, so $y = 3$ is unstable (repeller).` }
    ],
    answer: t`y = 0 \text{ stable},\quad y = 3 \text{ unstable}`,
    whyWrong: {
      '1': t`The critical points are right but the stability is reversed. Check the sign of $f$ between them: at $y = 1$, $f = 1(-2) < 0$, so solutions move down toward 0.`,
      '2': t`$y(y - 3) = 0$ gives $y = +3$, not $-3$ (sign slip in the factor).`,
      '3': t`The factor $y$ also gives a root: $y = 0$ makes the right side zero, so it is a critical point too.`
    }
  },

  Q_ENGR213_013: {
    steps: [
      { title: 'Separate the variables', math: t`\frac{dy}{dx} = -\frac{x}{y} \quad\Rightarrow\quad y\,dy = -x\,dx` },
      { title: 'Integrate both sides', math: t`\int y\,dy = -\int x\,dx \quad\Rightarrow\quad \frac{y^{2}}{2} = -\frac{x^{2}}{2} + c_1` },
      { title: 'Multiply by 2 and rename the constant', math: t`x^{2} + y^{2} = c \qquad (c = 2c_1)` },
      { title: 'Apply $y(4) = -3$', math: t`4^{2} + (-3)^{2} = 16 + 9 = 25 = c` },
      { title: 'Solve for $y$ explicitly', math: t`y^{2} = 25 - x^{2} \quad\Rightarrow\quad y = \pm\sqrt{25 - x^{2}}` },
      { title: 'Choose the branch that passes through the initial point', note: t`$y(4) = -3 < 0$, so take the negative root. It is defined and differentiable for $-5 < x < 5$ (at $x = \pm 5$, $y = 0$ and $y' = -x/y$ is undefined).` }
    ],
    answer: t`y = -\sqrt{25 - x^{2}},\quad -5 < x < 5`,
    whyWrong: {
      '1': t`$+\sqrt{25 - x^2}$ gives $y(4) = +3$, not $-3$. The sign of the initial value decides the branch.`,
      '2': t`This comes from losing the minus sign when separating ($y\,dy = +x\,dx$ gives a hyperbola). Check it: at $x = 4$, $\sqrt{16 - 25}$ is not even real.`,
      '3': t`The logarithm appears only if you integrate $dx/x$; here the separated integrals are $\int y\,dy$ and $\int x\,dx$, both power rules.`
    }
  },

  Q_ENGR213_014: {
    steps: [
      { title: 'Constant (equilibrium) solutions make $dy/dx = 0$', math: t`y^{2} - 4 = 0 \quad\Rightarrow\quad y = 2 \ \text{ or } \ y = -2` },
      { title: 'Is $y = 2$ in the family? Try $c = 0$', math: t`c = 0: \quad y = 2\,\frac{1 + 0}{1 - 0} = 2 \quad\checkmark` },
      { title: 'Is $y = -2$ in the family? Solve for $c$', math: t`2\,\frac{1 + ce^{4x}}{1 - ce^{4x}} = -2 \;\Rightarrow\; 1 + ce^{4x} = -1 + ce^{4x} \;\Rightarrow\; 1 = -1` },
      { title: 'Conclusion', note: t`No value of $c$ produces $y = -2$: it was lost when we divided by $y^{2} - 4$ during separation, so it is a singular solution.` }
    ],
    answer: t`y = -2`,
    whyWrong: {
      '1': t`$y = 2$ is a constant solution, but it is not lost: $c = 0$ gives it. Only solutions the family cannot produce are singular.`,
      '2': t`Reversed: $y = 2$ is in the family ($c = 0$). Substituting $y = -2$ leads to the contradiction $1 = -1$.`,
      '3': t`$y = 0$ is not even a solution: $0^{2} - 4 = -4 \neq 0 = y'$.`
    }
  },

  Q_ENGR213_015: {
    steps: [
      { title: 'Put the equation in standard form $y\' + P(x)y = f(x)$ by dividing by $x^{2} - 9$', math: t`\frac{dy}{dx} + \frac{x}{x^{2} - 9}\,y = 0, \qquad P(x) = \frac{x}{x^{2} - 9}` },
      { title: 'Integrate $P$ (substitute $u = x^{2} - 9$, $du = 2x\,dx$)', math: t`\int \frac{x}{x^{2} - 9}\,dx = \frac12\int\frac{du}{u} = \frac12\ln\left|x^{2} - 9\right|` },
      { title: 'Build the integrating factor (for $x > 3$, $x^2 - 9 > 0$)', math: t`\mu(x) = e^{\frac12\ln(x^{2} - 9)} = \sqrt{x^{2} - 9}` },
      { title: 'Multiply through: the left side becomes an exact derivative', math: t`\frac{d}{dx}\left[\sqrt{x^{2} - 9}\;y\right] = 0` },
      { title: 'Integrate and solve for $y$', math: t`\sqrt{x^{2} - 9}\;y = c \quad\Rightarrow\quad y = \frac{c}{\sqrt{x^{2} - 9}}` }
    ],
    answer: t`y = \frac{c}{\sqrt{x^{2} - 9}}`,
    whyWrong: {
      '1': t`The integrating factor multiplies $y$, so you must divide by it: $y = c/\mu$, not $c\cdot\mu$.`,
      '2': t`The $\tfrac12$ from $du = 2x\,dx$ was dropped, giving $\mu = x^{2} - 9$ instead of $\sqrt{x^{2} - 9}$.`,
      '3': t`This ignores the denominator $x^{2} - 9$ (as if $P(x) = x$). $P$ must be read after dividing by the coefficient of $y'$.`
    }
  },

  Q_ENGR213_016: {
    steps: [
      { title: 'Compare with the standard form $y\' + P(x)y = f(x)$', math: t`\frac{dy}{dx} + (-2)\,y = e^{2x} \quad\Rightarrow\quad P(x) = -2` },
      { title: 'Integrate $P$', math: t`\int P(x)\,dx = \int -2\,dx = -2x` },
      { title: 'Exponentiate', math: t`\mu(x) = e^{\int P\,dx} = e^{-2x}` }
    ],
    answer: t`\mu(x) = e^{-2x}`,
    whyWrong: {
      '1': t`The sign of $P$ was dropped: the equation reads $y' - 2y$, so $P(x) = -2$, not $+2$.`,
      '2': t`$-2x$ is $\int P\,dx$; the integrating factor is $e$ raised to it.`,
      '3': t`$\int -2\,dx = -2x$, not $-x^{2}$: $-2$ is a constant, not $-2x$.`
    }
  },

  Q_ENGR213_017: {
    steps: [
      { title: 'Identify $P(x)$ and $f(x)$', math: t`y' + (-3)y = 6 \qquad P(x) = -3,\quad f(x) = 6` },
      { title: 'Integrating factor', math: t`\mu(x) = e^{\int -3\,dx} = e^{-3x}` },
      { title: 'Multiply the ODE by $\mu$: the left side collapses', math: t`\frac{d}{dx}\left[e^{-3x}y\right] = 6e^{-3x}` },
      { title: 'Integrate the right side', math: t`\int 6e^{-3x}\,dx = 6\cdot\frac{e^{-3x}}{-3} = -2e^{-3x}` },
      { title: 'Include the constant', math: t`e^{-3x}y = -2e^{-3x} + c` },
      { title: 'Divide by $e^{-3x}$', math: t`y = -2 + c\,e^{3x}` },
      { title: 'Check the particular part', note: t`$y_p = -2$: $y_p' - 3y_p = 0 - 3(-2) = 6$ ✔` }
    ],
    answer: t`y = -2 + c\,e^{3x}`,
    whyWrong: {
      '1': t`$\int e^{-3x}dx = -\tfrac13 e^{-3x}$: the minus sign from the chain rule makes $y_p = -2$, not $+2$. Check: $y = 2$ gives $0 - 6 = -6 \neq 6$.`,
      '2': t`Dividing $c$ by $e^{-3x}$ gives $c\,e^{+3x}$. Writing $e^{-3x}$ means the integrating factor was copied instead of inverted.`,
      '3': t`The right side was integrated without the integrating factor ($\int 6\,dx = 6x$). You must integrate $\mu f = 6e^{-3x}$.`
    }
  },

  Q_ENGR213_019: {
    steps: [
      { title: 'Identify $M$ and $N$', math: t`M = 2xy, \qquad N = x^{2} - 1` },
      { title: 'Exactness test', math: t`\frac{\partial M}{\partial y} = 2x, \qquad \frac{\partial N}{\partial x} = 2x \quad\Rightarrow\quad \text{exact}` },
      { title: 'Integrate $M$ with respect to $x$ (treat $y$ as constant)', math: t`f(x, y) = \int 2xy\,dx = x^{2}y + g(y)` },
      { title: 'Differentiate $f$ with respect to $y$ and set it equal to $N$', math: t`\frac{\partial f}{\partial y} = x^{2} + g'(y) = x^{2} - 1` },
      { title: 'Solve for $g$', math: t`g'(y) = -1 \quad\Rightarrow\quad g(y) = -y` },
      { title: 'The solution is $f(x, y) = c$', math: t`x^{2}y - y = c` }
    ],
    answer: t`x^{2}y - y = c`,
    whyWrong: {
      '1': t`$\int 2xy\,dx$ is taken with $y$ constant, giving $x^{2}y$, not $x^{2}y^{2}$.`,
      '2': t`$\int 2x\,dx = x^{2}$; the 2 is absorbed by the power rule, so there is no factor 2 left.`,
      '3': t`The $y$ in $x^{2}y$ was dropped. Check by differentiating: $f_x$ must return $M = 2xy$.`
    }
  },

  Q_ENGR213_021: {
    steps: [
      { title: 'Test exactness', math: t`M = xy \Rightarrow M_y = x, \qquad N = 2x^{2} + 3y^{2} - 20 \Rightarrow N_x = 4x` },
      { title: 'Not exact. Try $\mu(x)$', math: t`\frac{M_y - N_x}{N} = \frac{-3x}{2x^{2} + 3y^{2} - 20}` },
      { title: 'That depends on both $x$ and $y$, so try $\mu(y)$', math: t`\frac{N_x - M_y}{M} = \frac{4x - x}{xy} = \frac{3}{y}` },
      { title: 'Only $y$ appears, so $\mu$ depends on $y$ alone', math: t`\mu(y) = e^{\int \frac{3}{y}\,dy} = e^{3\ln y} = y^{3}` },
      { title: 'Check', math: t`\frac{\partial}{\partial y}\left(xy^{4}\right) = 4xy^{3} = \frac{\partial}{\partial x}\left(2x^{2}y^{3} + 3y^{5} - 20y^{3}\right) \;\checkmark` }
    ],
    answer: t`\mu = y^{3}`,
    whyWrong: {
      '1': t`$\mu(x)$ only works when $(M_y - N_x)/N$ depends on $x$ alone. Here it contains $y$, so no $\mu(x)$ exists.`,
      '2': t`$\int \frac{3}{y}\,dy = 3\ln y$, not $3y$. Then $e^{3\ln y} = y^{3}$.`,
      '3': t`The order in the numerator matters: for $\mu(y)$ use $(N_x - M_y)/M = +3/y$. Using $(M_y - N_x)/M$ flips the sign to $y^{-3}$.`
    }
  },

  Q_ENGR213_024: {
    steps: [
      { title: 'Divide by $x$ to reach Bernoulli form', math: t`y' + \frac{1}{x}\,y = x\,y^{2} \qquad (n = 2)` },
      { title: 'Substitute $u = y^{1-n} = y^{-1}$, so $y = u^{-1}$', math: t`y' = -u^{-2}u'` },
      { title: 'Substitute into the ODE', math: t`-u^{-2}u' + \frac{1}{x}u^{-1} = x\,u^{-2}` },
      { title: 'Multiply every term by $-u^{2}$', math: t`u' - \frac{1}{x}u = -x` },
      { title: 'Integrating factor for the linear equation in $u$', math: t`\mu = e^{-\int \frac{dx}{x}} = e^{-\ln x} = \frac1x` },
      { title: 'Collapse and integrate', math: t`\frac{d}{dx}\left[\frac{u}{x}\right] = -1 \quad\Rightarrow\quad \frac{u}{x} = -x + c` },
      { title: 'Solve for $u$', math: t`u = -x^{2} + cx` },
      { title: 'Back-substitute $y = 1/u$', math: t`y = \frac{1}{-x^{2} + cx}` }
    ],
    answer: t`y = \frac{1}{-x^{2} + cx}`,
    whyWrong: {
      '1': t`When multiplying by $-u^{2}$, the right side $x\,u^{-2}$ becomes $-x$. Missing that sign gives $u = x^{2} + cx$.`,
      '2': t`This is $u$, not $y$. The last step of every Bernoulli problem is $y = u^{1/(1-n)} = 1/u$.`,
      '3': t`From $u/x = -x + c$ you must multiply by $x$ to get $u$. Writing $u = -x + c$ skips that.`
    }
  },

  Q_ENGR213_026: {
    steps: [
      { title: 'Solution of $dP/dt = kP$', math: t`P(t) = P_0\,e^{kt}` },
      { title: 'Doubling in 5 hours means $P(5) = 2P_0$', math: t`2P_0 = P_0\,e^{5k}` },
      { title: 'Cancel $P_0$', math: t`e^{5k} = 2` },
      { title: 'Take the natural log of both sides', math: t`5k = \ln 2` },
      { title: 'Divide by 5', math: t`k = \frac{\ln 2}{5} \approx 0.1386\ \text{h}^{-1}` }
    ],
    answer: t`k = \frac{\ln 2}{5}`,
    whyWrong: {
      '1': t`From $5k = \ln 2$ you divide by 5; multiplying gives $5\ln 2$.`,
      '2': t`$2/5$ treats growth as linear. The unknown $k$ sits in an exponent, so a logarithm is needed.`,
      '3': t`$\ln 2.5 = \ln(5/2)$ mixes up the ratio: the equation is $e^{5k} = 2$, not $e^{k} = 5/2$.`
    }
  },

  Q_ENGR213_027: {
    steps: [
      { title: 'Model', math: t`P(t) = P_0\,e^{kt}` },
      { title: 'Use $P(1) = 1.5P_0$', math: t`1.5P_0 = P_0 e^{k} \quad\Rightarrow\quad e^{k} = 1.5 \quad\Rightarrow\quad k = \ln 1.5 \approx 0.4055` },
      { title: 'Tripling means $P(t) = 3P_0$', math: t`3P_0 = P_0\,e^{kt} \quad\Rightarrow\quad e^{kt} = 3` },
      { title: 'Solve for $t$', math: t`t = \frac{\ln 3}{k} = \frac{\ln 3}{\ln 1.5} = \frac{1.0986}{0.4055} \approx 2.71\ \text{h}` }
    ],
    answer: t`t \approx 2.71\ \text{h}`,
    whyWrong: {
      '1': t`4 h assumes linear growth ($+0.5P_0$ per hour, so $+2P_0$ takes 4 h). Exponential growth multiplies by 1.5 each hour.`,
      '2': t`3 h would give $1.5^{3} = 3.375P_0$, more than triple.`,
      '3': t`2 h reasons $1.5 \times 2 = 3$, but two hours multiply by $1.5 \times 1.5 = 2.25$, not 3.`
    }
  },

  Q_ENGR213_028: {
    steps: [
      { title: 'Rate of salt in (concentration × flow)', math: t`R_{in} = (2\ \text{lb/gal})(3\ \text{gal/min}) = 6\ \text{lb/min}` },
      { title: 'Rate of salt out (tank concentration × flow; volume stays 300 gal)', math: t`R_{out} = \frac{A}{300}\ \text{lb/gal} \times 3\ \text{gal/min} = \frac{A}{100}\ \text{lb/min}` },
      { title: 'Balance: $dA/dt = R_{in} - R_{out}$', math: t`\frac{dA}{dt} + \frac{A}{100} = 6` },
      { title: 'Integrating factor $e^{t/100}$ and integrate', math: t`A(t) = 600 + c\,e^{-t/100}` },
      { title: 'Initial condition $A(0) = 50$', math: t`50 = 600 + c \quad\Rightarrow\quad c = -550` },
      { title: 'Let $t \to \infty$', math: t`A(t) = 600 - 550e^{-t/100} \;\longrightarrow\; 600\ \text{lb}` },
      { title: 'Sanity check', note: t`After a long time the tank holds inflow brine: $2\ \text{lb/gal} \times 300\ \text{gal} = 600$ lb.` }
    ],
    answer: t`600\ \text{lb}`,
    whyWrong: {
      '1': t`50 lb is only the initial amount $A(0)$; the transient $e^{-t/100}$ dies out and the tank fills with 2 lb/gal brine.`,
      '2': t`300 is the tank volume in gallons, not pounds of salt.`,
      '3': t`6 lb/min is the inflow rate $R_{in}$, not the amount in the tank.`
    }
  },

  Q_ENGR213_029: {
    steps: [
      { title: 'Newton\'s law with $T_m = 350$', math: t`\frac{dT}{dt} = k(T - 350)` },
      { title: 'Separate and integrate', math: t`\frac{dT}{T - 350} = k\,dt \;\Rightarrow\; \ln|T - 350| = kt + c_1` },
      { title: 'Exponentiate', math: t`T - 350 = C\,e^{kt} \quad\Rightarrow\quad T(t) = 350 + C\,e^{kt}` },
      { title: 'Apply $T(0) = 70$', math: t`70 = 350 + C \quad\Rightarrow\quad C = -280` },
      { title: 'Result', math: t`T(t) = 350 - 280\,e^{kt}\qquad (k < 0)` }
    ],
    answer: t`T(t) = 350 - 280e^{kt}`,
    whyWrong: {
      '1': t`$C$ is not $T(0)$. It is the initial difference $T(0) - T_m = 70 - 350 = -280$.`,
      '2': t`The roles are swapped: 350 °F is the surroundings (the value $T$ approaches), 70 °F is the start.`,
      '3': t`This drops the shift by $T_m$: Newton's law is exponential in $T - T_m$, not in $T$.`
    }
  },

  Q_ENGR213_030: {
    steps: [
      { title: 'Model with $T_m = 70$ and $T(0) = 300$', math: t`T(t) = 70 + 230\,e^{kt}` },
      { title: 'Use $T(3) = 200$', math: t`200 = 70 + 230\,e^{3k} \quad\Rightarrow\quad e^{3k} = \frac{130}{230} = \frac{13}{23}` },
      { title: 'Solve for $k$', math: t`k = \frac13\ln\frac{13}{23} = \frac{-0.5705}{3} \approx -0.190\ \text{min}^{-1}` },
      { title: 'Long-run behaviour', math: t`230\,e^{kt} > 0 \ \text{for all } t \quad\Rightarrow\quad T(t) > 70,\qquad \lim_{t\to\infty}T = 70` },
      { title: 'Conclusion', note: t`The cake never reaches exactly 70 °F; it only approaches it. (It is within 0.5 °F after about 32 min.)` }
    ],
    answer: t`k = \tfrac13\ln\tfrac{13}{23} \approx -0.190`,
    whyWrong: {
      '1': t`$\tfrac{2}{3} = \tfrac{200}{300}$ uses raw temperatures. Newton's law is exponential in the difference from the room: $\tfrac{200 - 70}{300 - 70} = \tfrac{13}{23}$.`,
      '2': t`$k$ is right, but an exponential never reaches its asymptote in finite time: $T = 70$ would need $e^{kt} = 0$.`,
      '3': t`A shrinking temperature difference means decay, so $k < 0$. With $k > 0$ the cake would get hotter.`
    }
  },

  Q_ENGR213_031: {
    steps: [
      { title: 'Rate in: pure water carries no salt', math: t`R_{in} = (0)(3) = 0` },
      { title: 'Rate out: concentration $A/100$ times 3 gal/min', math: t`R_{out} = \frac{A}{100}\cdot 3 = 0.03A` },
      { title: 'Balance', math: t`\frac{dA}{dt} = -0.03A` },
      { title: 'Solve (exponential decay) with $A(0) = 20$', math: t`A(t) = 20\,e^{-0.03t}` }
    ],
    answer: t`A(t) = 20e^{-0.03t}`,
    whyWrong: {
      '1': t`Salt only leaves the tank, so the amount decreases: the exponent must be negative.`,
      '2': t`3 gal/min of mixture is not 3 lb/min of salt. The salt leaving is concentration × flow $= 0.03A$.`,
      '3': t`The outflow concentration is $A/100$ (divide by the 100 gal volume), so $k = 3/100 = 0.03$, not 3.`
    }
  },

  Q_ENGR213_033: {
    steps: [
      { title: "Kirchhoff's law", math: t`L\frac{di}{dt} + Ri = E \quad\Rightarrow\quad 0.5\,\frac{di}{dt} + 10\,i = 12` },
      { title: 'Divide by $L = 0.5$ for standard form', math: t`\frac{di}{dt} + 20\,i = 24` },
      { title: 'Integrating factor', math: t`\mu = e^{\int 20\,dt} = e^{20t}` },
      { title: 'Collapse and integrate', math: t`\frac{d}{dt}\left[e^{20t}i\right] = 24e^{20t} \;\Rightarrow\; e^{20t}i = \frac{24}{20}e^{20t} + c` },
      { title: 'Solve for $i$', math: t`i(t) = \frac65 + c\,e^{-20t}` },
      { title: 'Apply $i(0) = 0$', math: t`0 = \frac65 + c \quad\Rightarrow\quad c = -\frac65` },
      { title: 'Result and check', math: t`i(t) = \frac65 - \frac65 e^{-20t} \;\to\; \frac{E}{R} = \frac{12}{10} = 1.2\ \text{A}` }
    ],
    answer: t`i(t) = \tfrac65 - \tfrac65 e^{-20t}`,
    whyWrong: {
      '1': t`This is only a decaying transient. With a 12 V source the current must build up to $E/R = 1.2$ A, and it violates $i(0) = 0$.`,
      '2': t`$\int 24e^{20t}dt = \tfrac{24}{20}e^{20t}$: the division by 20 was skipped.`,
      '3': t`The time constant is $R/L = 10/0.5 = 20$. The exponent 5 comes from multiplying $R \times L$.`
    }
  },

  Q_ENGR213_040: {
    steps: [
      { title: 'Move the $y$ term to the right side', math: t`4x\,y' = x - y` },
      { title: 'Divide by $4x$ (the coefficient of $y\'$)', math: t`y' = \frac{x - y}{4x}` }
    ],
    answer: t`y' = \frac{x - y}{4x}`,
    whyWrong: {
      '1': t`$4x$ multiplies $y'$, so you divide by it, not multiply.`,
      '2': t`Moving $+y$ across the equals sign makes it $-y$.`,
      '3': t`This rearranges terms incorrectly; isolate $y'$ first, then divide by its coefficient.`
    }
  },

  Q_ENGR213_047: {
    steps: [
      { title: 'Candidate', math: t`y = -x\cos x + cx` },
      { title: 'Differentiate (product rule on $x\cos x$)', math: t`y' = -\cos x + x\sin x + c` },
      { title: 'Form $xy\'$', math: t`xy' = -x\cos x + x^{2}\sin x + cx` },
      { title: 'Subtract $y$', math: t`xy' - y = (-x\cos x + x^{2}\sin x + cx) - (-x\cos x + cx)` },
      { title: 'Simplify', math: t`xy' - y = x^{2}\sin x \;\checkmark` }
    ],
    answer: t`y = -x\cos x + cx`,
    whyWrong: {
      '1': t`For $y = x\sin x + c$: $xy' - y = x\sin x + x^{2}\cos x - x\sin x - c = x^{2}\cos x - c \neq x^{2}\sin x$.`,
      '2': t`For $y = -\cos x + c$: $xy' - y = x\sin x + \cos x - c$, which is not $x^{2}\sin x$.`,
      '3': t`$c\,x^{2}\sin x$ gives $c(x^{2}\sin x + x^{3}\cos x)$; no single $c$ reproduces the right side for all $x$.`
    }
  },

  Q_ENGR213_057: {
    steps: [
      { title: 'Rearrange', math: t`(1 + x)\,dy = y\,dx` },
      { title: 'Separate (divide by $y(1 + x)$)', math: t`\frac{dy}{y} = \frac{dx}{1 + x}` },
      { title: 'Integrate both sides', math: t`\ln|y| = \ln|1 + x| + c_1` },
      { title: 'Exponentiate', math: t`|y| = e^{c_1}\,|1 + x|` },
      { title: 'Absorb $\pm e^{c_1}$ into one constant', math: t`y = c\,(1 + x)` },
      { title: 'Lost solution?', note: t`Dividing by $y$ assumed $y \neq 0$, but $y = 0$ is recovered with $c = 0$.` }
    ],
    answer: t`y = c(1 + x)`,
    whyWrong: {
      '1': t`$\int \frac{dx}{1 + x} = \ln|1 + x|$, not $x$.`,
      '2': t`The left side was integrated as $\int dy = y$; after separating it is $\int \frac{dy}{y} = \ln|y|$.`,
      '3': t`$\ln|y| = +\ln|1 + x|$, so $y$ is proportional to $1 + x$, not to its reciprocal.`
    }
  },

  Q_ENGR213_060: {
    steps: [
      { title: 'On $0 \le x \le 1$ the ODE is $y\' + y = 1$', math: t`\frac{d}{dx}\left[e^{x}y\right] = e^{x} \;\Rightarrow\; y = 1 + c_1e^{-x}` },
      { title: 'Apply $y(0) = 0$', math: t`0 = 1 + c_1 \;\Rightarrow\; y = 1 - e^{-x}` },
      { title: 'Value at the switch point', math: t`y(1) = 1 - e^{-1}` },
      { title: 'For $x > 1$ the ODE is $y\' + y = 0$', math: t`y = c_2\,e^{-x}` },
      { title: 'Require continuity at $x = 1$', math: t`c_2\,e^{-1} = 1 - e^{-1} \;\Rightarrow\; c_2 = e - 1` },
      { title: 'Result for $x > 1$', math: t`y = (e - 1)\,e^{-x}` }
    ],
    answer: t`y = (e - 1)e^{-x}`,
    whyWrong: {
      '1': t`$1 - e^{-x}$ solves $y' + y = 1$; for $x > 1$ the forcing is $0$, so a new solution must be joined continuously.`,
      '2': t`$e^{-x}$ uses $c_2 = 1$; the constant comes from matching $y(1) = 1 - e^{-1}$, which gives $c_2 = e - 1$.`,
      '3': t`Removing the forcing does not reset $y$ to 0: the solution starts from its value at $x = 1$ and decays.`
    }
  },

  Q_ENGR213_061: {
    steps: [
      { title: 'Rewrite in differential form $M\,dx + N\,dy = 0$', math: t`(\cos x\sin x - xy^{2})\,dx + y(1 - x^{2})\,dy = 0` },
      { title: 'Exactness test', math: t`M_y = -2xy, \qquad N_x = y(-2x) = -2xy \quad\Rightarrow\quad \text{exact}` },
      { title: 'Integrate $N$ with respect to $y$', math: t`f = \int y(1 - x^{2})\,dy = \frac{y^{2}}{2}(1 - x^{2}) + h(x)` },
      { title: 'Match $f_x$ with $M$', math: t`f_x = -xy^{2} + h'(x) = \cos x\sin x - xy^{2} \;\Rightarrow\; h'(x) = \sin x\cos x` },
      { title: 'Integrate $h\'$ (substitute $u = \cos x$)', math: t`h(x) = -\frac12\cos^{2}x` },
      { title: 'Implicit family (multiply $f = c$ by 2)', math: t`y^{2}(1 - x^{2}) - \cos^{2}x = c` },
      { title: 'Apply $y(0) = 2$', math: t`4(1) - 1 = 3 = c` }
    ],
    answer: t`y^{2}(1 - x^{2}) - \cos^{2}x = 3`,
    whyWrong: {
      '1': t`$\int \sin x\cos x\,dx = -\tfrac12\cos^{2}x$: the minus sign was lost, which also changes the constant to $4 + 1 = 5$.`,
      '2': t`The factor $(1 - x^{2})$ and the trigonometric part were dropped; check by differentiating: it does not return $M$ and $N$.`,
      '3': t`$\int y\,dy = y^{2}/2$, not $y$: the power rule was skipped.`
    }
  },

  Q_ENGR213_062: {
    steps: [
      { title: 'Differentiate the substitution', math: t`u = -2x + y \quad\Rightarrow\quad \frac{du}{dx} = -2 + \frac{dy}{dx}` },
      { title: 'Replace $dy/dx$ with the right side of the ODE', math: t`\frac{du}{dx} = -2 + \left(u^{2} - 7\right)` },
      { title: 'Simplify', math: t`\frac{du}{dx} = u^{2} - 9` },
      { title: 'Now it is separable', math: t`\frac{du}{u^{2} - 9} = dx` }
    ],
    answer: t`\frac{du}{dx} = u^{2} - 9`,
    whyWrong: {
      '1': t`The $-2$ from differentiating $-2x$ was forgotten: $u' = -2 + y'$, not $u' = y'$.`,
      '2': t`Sign slip: $\frac{d}{dx}(-2x) = -2$, so $-2 - 7 = -9$, not $+2 - 7 = -5$.`,
      '3': t`$(-2x + y)^{2} = u^{2}$ stays squared; it does not become $2u$.`
    }
  },

  Q_ENGR213_064: {
    steps: [
      { title: 'Divide by $x$ for standard form', math: t`y' + \frac{4}{x}y = x^{2} - 1, \qquad P(x) = \frac4x` },
      { title: 'Integrating factor ($x > 0$)', math: t`\mu = e^{\int \frac4x dx} = e^{4\ln x} = x^{4}` },
      { title: 'Multiply by $\mu$', math: t`\frac{d}{dx}\left[x^{4}y\right] = x^{4}(x^{2} - 1) = x^{6} - x^{4}` },
      { title: 'Integrate', math: t`x^{4}y = \frac{x^{7}}{7} - \frac{x^{5}}{5} + c` },
      { title: 'Divide by $x^{4}$', math: t`y = \frac{x^{3}}{7} - \frac{x}{5} + c\,x^{-4}` }
    ],
    answer: t`y = \frac{x^{3}}{7} - \frac{x}{5} + cx^{-4}`,
    whyWrong: {
      '1': t`The right side must also be multiplied by $\mu = x^{4}$ before integrating; and $c/\mu = cx^{-4}$, not $cx^{4}$.`,
      '2': t`$P(x) = 4/x$, not 4: dividing by $x$ first is essential, so $\mu = x^{4}$, not $e^{4x}$.`,
      '3': t`The particular part is right, but the homogeneous part is $c/\mu = c\,x^{-4}$; multiplying by $\mu$ gives the wrong power.`
    }
  },

  Q_ENGR213_065: {
    steps: [
      { title: 'Variables are already separated ($M$ depends on $x$, $N$ on $y$)', math: t`(2x - 1)\,dx + (3y + 7)\,dy = 0` },
      { title: 'Integrate each part', math: t`\int (2x - 1)\,dx = x^{2} - x, \qquad \int (3y + 7)\,dy = \frac32 y^{2} + 7y` },
      { title: 'Add and set equal to a constant', math: t`x^{2} - x + \frac32 y^{2} + 7y = c` }
    ],
    answer: t`x^{2} - x + \tfrac32 y^{2} + 7y = c`,
    whyWrong: {
      '1': t`The linear terms $-x$ and $7y$ were dropped: each term integrates separately.`,
      '2': t`The coefficients were not divided by the new powers: $\int 2x\,dx = x^{2}$ and $\int 3y\,dy = \tfrac32 y^{2}$.`,
      '3': t`Both integrals stay on the same side ($M\,dx + N\,dy = 0$). Moving one to the right and then back without changing sign flips it.`
    }
  },

  Q_ENGR213_066: {
    steps: [
      { title: 'Split the fraction', math: t`\frac{dy}{dx} = 1 - \frac{y}{x}` },
      { title: 'Standard linear form', math: t`y' + \frac1x y = 1, \qquad P(x) = \frac1x` },
      { title: 'Integrating factor', math: t`\mu = e^{\ln x} = x` },
      { title: 'Collapse and integrate', math: t`\frac{d}{dx}[xy] = x \quad\Rightarrow\quad xy = \frac{x^{2}}{2} + c` },
      { title: 'Divide by $x$', math: t`y = \frac{x}{2} + \frac{c}{x}` }
    ],
    answer: t`y = \frac x2 + \frac cx`,
    whyWrong: {
      '1': t`$P(x) = 1/x$, so $\mu = x$; using $e^{x}$ treats $P$ as the constant 1.`,
      '2': t`After $xy = \tfrac{x^{2}}{2} + c$, divide every term by $x$: $c$ becomes $c/x$.`,
      '3': t`A logarithm appears only when integrating $1/x$; here the right side after $\mu$ is just $x$.`
    }
  },

  Q_ENGR213_067: {
    steps: [
      { title: 'Expand and rearrange into Bernoulli form', math: t`y' = xy^{4} - y \quad\Rightarrow\quad y' + y = x\,y^{4} \qquad (n = 4)` },
      { title: 'Substitute $u = y^{1-n} = y^{-3}$, so $y = u^{-1/3}$', math: t`y' = -\tfrac13 u^{-4/3}\,u'` },
      { title: 'Substitute', math: t`-\tfrac13 u^{-4/3}u' + u^{-1/3} = x\,u^{-4/3}` },
      { title: 'Multiply every term by $-3u^{4/3}$', math: t`u' - 3u = -3x` },
      { title: 'Integrating factor', math: t`\mu = e^{-3x} \;\Rightarrow\; \frac{d}{dx}\left[e^{-3x}u\right] = -3x\,e^{-3x}` },
      { title: 'Integrate by parts', math: t`\int -3x\,e^{-3x}\,dx = x\,e^{-3x} + \tfrac13 e^{-3x} + c` },
      { title: 'Divide by $e^{-3x}$', math: t`u = x + \tfrac13 + c\,e^{3x}` },
      { title: 'Back-substitute $u = y^{-3}$', math: t`y^{-3} = x + \tfrac13 + c\,e^{3x}` }
    ],
    answer: t`y^{-3} = x + \tfrac13 + ce^{3x}`,
    whyWrong: {
      '1': t`The exponent is $1 - n = 1 - 4 = -3$, so $u = y^{-3}$, not $y^{3}$ (that is $n - 1$).`,
      '2': t`Integration by parts: $\int -3xe^{-3x}dx = xe^{-3x} + \tfrac13e^{-3x}$, so $+\tfrac13$; and dividing by $e^{-3x}$ gives $e^{+3x}$.`,
      '3': t`This skips the substitution: $u = y^{-3}$ solves the linear equation, not $y$.`
    }
  },

  Q_ENGR213_068: {
    steps: [
      { title: 'Substitute $u = x + y + 1$', math: t`\frac{du}{dx} = 1 + \frac{dy}{dx} = 1 + u^{2}` },
      { title: 'Separate', math: t`\frac{du}{1 + u^{2}} = dx` },
      { title: 'Integrate', math: t`\tan^{-1}u = x + c` },
      { title: 'Solve for $u$', math: t`u = \tan(x + c)` },
      { title: 'Back-substitute $u = x + y + 1$', math: t`y = \tan(x + c) - x - 1` }
    ],
    answer: t`y = \tan(x + c) - x - 1`,
    whyWrong: {
      '1': t`This forgets to back-substitute: $\tan(x + c)$ equals $u = x + y + 1$, not $y$.`,
      '2': t`The "1 +" in $u' = 1 + y'$ was forgotten: $du/u^{2} = dx$ gives $-1/u = x + c$, which is this option.`,
      '3': t`$y$ cannot be treated as a constant while integrating the right side; substitute first.`
    }
  },

  Q_ENGR213_069: {
    steps: [
      { title: 'Identify $P(x) = 2x$', math: t`\mu = e^{\int 2x\,dx} = e^{x^{2}}` },
      { title: 'Collapse the left side', math: t`\frac{d}{dx}\left[e^{x^{2}}y\right] = x\,e^{x^{2}}` },
      { title: 'Integrate (substitute $w = x^{2}$)', math: t`e^{x^{2}}y = \tfrac12 e^{x^{2}} + c` },
      { title: 'Solve for $y$', math: t`y = \tfrac12 + c\,e^{-x^{2}}` },
      { title: 'Apply $y(0) = -3$', math: t`-3 = \tfrac12 + c \quad\Rightarrow\quad c = -\tfrac72` },
      { title: 'Result', math: t`y = \tfrac12 - \tfrac72 e^{-x^{2}}` }
    ],
    answer: t`y = \tfrac12 - \tfrac72 e^{-x^{2}}`,
    whyWrong: {
      '1': t`$c = -3 - \tfrac12 = -\tfrac72$; the sign of $c$ was flipped.`,
      '2': t`This drops the particular solution $y_p = \tfrac12$ and solves only $y' + 2xy = 0$.`,
      '3': t`$c$ is not $y(0)$ here: $y(0) = \tfrac12 + c$, so $c = -3 - \tfrac12$.`
    }
  },

  Q_ENGR213_070: {
    steps: [
      { title: 'Compute $f$ and $\partial f/\partial y$', math: t`f(x, y) = \sqrt{y - x}, \qquad \frac{\partial f}{\partial y} = \frac{1}{2\sqrt{y - x}}` },
      { title: 'Region where both are continuous', math: t`y - x > 0 \quad\Leftrightarrow\quad y > x` },
      { title: 'Test each point', math: t`\begin{array}{lcl} (2,3) & y - x = 1 > 0 & \checkmark \\ (2,2),\ (3,3) & y - x = 0 & f_y \text{ undefined} \\ (5,2) & y - x = -3 & f \text{ undefined} \end{array}` }
    ],
    answer: t`(2, 3)`,
    whyWrong: {
      '1': t`On the line $y = x$, $\partial f/\partial y = \frac{1}{2\sqrt{0}}$ blows up, so uniqueness is not guaranteed there.`,
      '2': t`Same issue: $(3, 3)$ lies on $y = x$ where $\partial f/\partial y$ is not continuous.`,
      '3': t`At $(5, 2)$, $y - x < 0$ and $\sqrt{y - x}$ is not even real.`
    }
  },

  Q_ENGR213_073: {
    steps: [
      { title: 'Substitute $t = 100$', math: t`A(100) = 600 - 550\,e^{-100/100} = 600 - 550\,e^{-1}` },
      { title: 'Evaluate $e^{-1}$', math: t`e^{-1} \approx 0.36788` },
      { title: 'Multiply', math: t`550 \times 0.36788 \approx 202.3` },
      { title: 'Subtract', math: t`A(100) \approx 600 - 202.3 = 397.7\ \text{lb}` }
    ],
    answer: t`\approx 397.7\ \text{lb}`,
    whyWrong: {
      '1': t`202.3 is only the term $550e^{-1}$; it still has to be subtracted from 600.`,
      '2': t`600 lb is the limit as $t \to \infty$, not the value at $t = 100$.`,
      '3': t`550 is the coefficient of the transient, not an amount of salt at any time.`
    }
  },

  Q_ENGR213_074: {
    steps: [
      { title: 'Set $T(t) = 75$', math: t`75 = 70 + 230\,e^{kt}` },
      { title: 'Isolate the exponential', math: t`e^{kt} = \frac{5}{230} = \frac{1}{46}` },
      { title: 'Take logs', math: t`kt = \ln\frac{1}{46} \approx -3.8286` },
      { title: 'Divide by $k \approx -0.19018$', math: t`t = \frac{-3.8286}{-0.19018} \approx 20.1\ \text{min}` }
    ],
    answer: t`t \approx 20.1\ \text{min}`,
    whyWrong: {
      '1': t`3 min is when the cake was at 200 °F (the data used to find $k$).`,
      '2': t`11 min comes from treating the cooling as linear; the rate slows as $T$ approaches 70 °F.`,
      '3': t`"Never" is true for exactly 70 °F (the asymptote), but 75 °F is above it and is reached in finite time.`
    }
  },

  Q_ENGR213_075: {
    steps: [
      { title: '3% decayed means 97% remains after 100 years', math: t`A(100) = 0.97A_0 = A_0\,e^{100k}` },
      { title: 'Solve for $k$', math: t`k = \frac{\ln 0.97}{100} = \frac{-0.030459}{100} \approx -3.046\times10^{-4}\ \text{yr}^{-1}` },
      { title: 'Half-life: $A = \tfrac12 A_0$', math: t`e^{kT} = \tfrac12 \quad\Rightarrow\quad T = \frac{\ln\tfrac12}{k} = \frac{-0.693147}{-3.046\times10^{-4}}` },
      { title: 'Evaluate', math: t`T \approx 2276\ \text{years}` }
    ],
    answer: t`T \approx 2276\ \text{yr}`,
    whyWrong: {
      '1': t`1667 yr assumes a constant 3% per 100 yr (linear): $50/3 \times 100$. Decay is exponential.`,
      '2': t`3300 yr overshoots; recompute $\ln 0.97 = -0.0305$ carefully (not $-0.021$).`,
      '3': t`231 yr uses $k = 0.003$ (3% per decade). The data is 3% per century, and $k = \ln(0.97)/100$.`
    }
  },

  Q_ENGR213_076: {
    steps: [
      { title: 'Set $i(t) = 1.0$', math: t`1.0 = 1.2\left(1 - e^{-20t}\right)` },
      { title: 'Divide by 1.2', math: t`1 - e^{-20t} = \frac{5}{6}` },
      { title: 'Isolate the exponential', math: t`e^{-20t} = \frac16` },
      { title: 'Take logs and solve', math: t`-20t = \ln\tfrac16 = -\ln 6 \quad\Rightarrow\quad t = \frac{\ln 6}{20} \approx 0.090\ \text{s}` }
    ],
    answer: t`t = \frac{\ln 6}{20} \approx 0.090\ \text{s}`,
    whyWrong: {
      '1': t`This solves $e^{20t} = 1.2$, skipping the "$1 -$" in $1 - e^{-20t}$.`,
      '2': t`0.05 s is the time constant $L/R = 1/20$; at that time $i = 1.2(1 - e^{-1}) \approx 0.76$ A.`,
      '3': t`1.0 A is below the steady-state 1.2 A, so the current does reach it.`
    }
  },

  Q_ENGR213_077: {
    steps: [
      { title: 'Doubling time gives $k$', math: t`e^{3k} = 2 \quad\Rightarrow\quad k = \frac{\ln 2}{3}` },
      { title: 'Ten-fold growth', math: t`e^{kt} = 10 \quad\Rightarrow\quad t = \frac{\ln 10}{k}` },
      { title: 'Substitute $k$', math: t`t = \frac{3\ln 10}{\ln 2} = \frac{3(2.3026)}{0.6931}` },
      { title: 'Evaluate', math: t`t \approx 9.97\ \text{h}` }
    ],
    answer: t`t \approx 9.97\ \text{h}`,
    whyWrong: {
      '1': t`15 h reasons linearly ("10 is 5 × 2"). Doublings multiply: $2^{5} = 32$, far more than 10.`,
      '2': t`30 h multiplies the doubling time by 10, which ignores compounding.`,
      '3': t`6.64 h uses a doubling time of 2 h instead of 3 h ($2 \times 3.32$).`
    }
  },

  Q_ENGR213_078: {
    steps: [
      { title: 'Exactness test', math: t`M = 5x + 4y \Rightarrow M_y = 4, \qquad N = 4x - 8y^{3} \Rightarrow N_x = 4` },
      { title: 'Integrate $M$ with respect to $x$', math: t`f = \frac52 x^{2} + 4xy + g(y)` },
      { title: 'Match $f_y$ with $N$', math: t`f_y = 4x + g'(y) = 4x - 8y^{3} \;\Rightarrow\; g'(y) = -8y^{3}` },
      { title: 'Integrate', math: t`g(y) = -2y^{4}` },
      { title: 'Solution $f = c$', math: t`\frac52 x^{2} + 4xy - 2y^{4} = c` }
    ],
    answer: t`\tfrac52 x^{2} + 4xy - 2y^{4} = c`,
    whyWrong: {
      '1': t`The coefficients were not divided by the new powers: $\int 5x\,dx = \tfrac52x^{2}$ and $\int 8y^{3}dy = 2y^{4}$.`,
      '2': t`The cross term $4xy$ appears in both $\int M\,dx$ and $\int N\,dy$; it is counted once, not added twice.`,
      '3': t`The cross term $4xy$ was dropped. Check: $f_x$ must return the $4y$ in $M$.`
    }
  },

  Q_ENGR213_079: {
    steps: [
      { title: 'Exactness test', math: t`M_y = 2y\cos x - 3x^{2}, \qquad N_x = 2y\cos x - 3x^{2} \;\checkmark` },
      { title: 'Integrate $M$ with respect to $x$', math: t`f = y^{2}\sin x - x^{3}y - x^{2} + h(y)` },
      { title: 'Match $f_y$ with $N$', math: t`2y\sin x - x^{3} + h'(y) = 2y\sin x - x^{3} + \ln y \;\Rightarrow\; h'(y) = \ln y` },
      { title: 'Integrate $\ln y$ by parts', math: t`h(y) = y\ln y - y` },
      { title: 'General solution', math: t`y^{2}\sin x - x^{3}y - x^{2} + y\ln y - y = c` },
      { title: 'Apply $y(0) = e$', math: t`0 - 0 - 0 + e\ln e - e = e - e = 0 = c` }
    ],
    answer: t`y^{2}\sin x - x^{3}y - x^{2} + y\ln y - y = 0`,
    whyWrong: {
      '1': t`$\int \ln y\,dy = y\ln y - y$ (by parts). Dropping $-y$ also makes the constant $e$ instead of 0.`,
      '2': t`$\int y^{2}\cos x\,dx = y^{2}\sin x$: the cosine was not integrated.`,
      '3': t`Several terms are missing ($-x^{3}y$, $h(y)$). Rebuild $f$ from $\int M\,dx$ and check $f_y = N$.`
    }
  },

  Q_ENGR213_080: {
    steps: [
      { title: 'Exactness test', math: t`M = 2y^{2} + 3x \Rightarrow M_y = 4y, \qquad N = 2xy \Rightarrow N_x = 2y` },
      { title: 'Try $\mu(x)$', math: t`\frac{M_y - N_x}{N} = \frac{4y - 2y}{2xy} = \frac1x` },
      { title: 'Depends on $x$ only', math: t`\mu(x) = e^{\int \frac1x dx} = e^{\ln x} = x` },
      { title: 'Multiply through', math: t`(2xy^{2} + 3x^{2})\,dx + 2x^{2}y\,dy = 0` },
      { title: 'Now exact; integrate', math: t`f = \int (2xy^{2} + 3x^{2})\,dx = x^{2}y^{2} + x^{3} + g(y),\quad f_y = 2x^{2}y \Rightarrow g' = 0` },
      { title: 'Solution', math: t`x^{2}y^{2} + x^{3} = c` }
    ],
    answer: t`\mu = x;\quad x^{2}y^{2} + x^{3} = c`,
    whyWrong: {
      '1': t`$(N_x - M_y)/M = -2y/(2y^{2} + 3x)$ depends on both variables, so $\mu(y)$ does not exist here.`,
      '2': t`$\int \frac1x\,dx = \ln x$, so $\mu = e^{\ln x} = x$, not $e^{x}$.`,
      '3': t`The $\mu(x)$ formula uses $(M_y - N_x)/N = +1/x$. Reversing the numerator gives $-1/x$ and $\mu = 1/x$.`
    }
  },

  Q_ENGR213_081: {
    steps: [
      { title: 'Homogeneous of degree 2; substitute $y = ux$', math: t`dy = u\,dx + x\,du` },
      { title: 'Substitute and divide by $x^{2}$', math: t`(1 + u^{2})\,dx + (1 - u)(u\,dx + x\,du) = 0` },
      { title: 'Collect the $dx$ terms', math: t`(1 + u)\,dx + x(1 - u)\,du = 0` },
      { title: 'Separate', math: t`\frac{dx}{x} + \frac{1 - u}{1 + u}\,du = 0, \qquad \frac{1 - u}{1 + u} = -1 + \frac{2}{1 + u}` },
      { title: 'Integrate', math: t`\ln|x| - u + 2\ln|1 + u| = c_1` },
      { title: 'Replace $u = y/x$ and combine logs', math: t`\ln\left|\frac{(x + y)^{2}}{x}\right| = \frac yx + c_1` },
      { title: 'Exponentiate', math: t`(x + y)^{2} = c\,x\,e^{y/x}` }
    ],
    answer: t`(x + y)^{2} = cxe^{y/x}`,
    whyWrong: {
      '1': t`This ignores the $-xy$ term in $N$; the substitution must be carried through every term.`,
      '2': t`The sign in $1 + u$ comes from $x + y$ (after $u = y/x$), and the exponent is $y/x$, not $x/y$.`,
      '3': t`A single log term would come from $du/dx = $ const. Here the partial fraction $-1 + \frac{2}{1 + u}$ produces two terms.`
    }
  },

  Q_ENGR213_083: {
    steps: [
      { title: 'Volume is not constant ($5$ in, $3$ out)', math: t`V(t) = 500 + (5 - 3)t = 500 + 2t` },
      { title: 'Salt in', math: t`R_{in} = (2\ \text{kg/L})(5\ \text{L/min}) = 10\ \text{kg/min}` },
      { title: 'Salt out uses the current volume', math: t`R_{out} = \frac{A}{500 + 2t}\cdot 3` },
      { title: 'Balance', math: t`\frac{dA}{dt} = 10 - \frac{3A}{500 + 2t}` }
    ],
    answer: t`A' = 10 - \frac{3A}{500 + 2t}`,
    whyWrong: {
      '1': t`The volume grows by 2 L/min, so the concentration is $A/(500 + 2t)$, not $A/500$.`,
      '2': t`Salt leaves with the outflow (3 L/min), not the inflow (5 L/min).`,
      '3': t`Inflow salt is $2 \times 5 = 10$ kg/min, and the volume increases ($+2t$), not decreases.`
    }
  },

  Q_ENGR213_085: {
    steps: [
      { title: 'Separate', math: t`\frac{dy}{1 + y^{2}} = 3x^{2}\,dx` },
      { title: 'Integrate', math: t`\tan^{-1}y = x^{3} + c` },
      { title: 'Apply $y(0) = 1$', math: t`\tan^{-1}1 = \frac{\pi}{4} = c` },
      { title: 'Solve for $y$', math: t`y = \tan\!\left(x^{3} + \frac{\pi}{4}\right)` }
    ],
    answer: t`y = \tan\left(x^{3} + \tfrac{\pi}{4}\right)`,
    whyWrong: {
      '1': t`The constant belongs inside the tangent: $\tan^{-1}y = x^{3} + c$, so $y = \tan(x^{3} + c)$, not $\tan(x^{3}) + c$.`,
      '2': t`$\tan$ and $\tan^{-1}$ are swapped: the integral of $\frac{1}{1 + y^{2}}$ is $\tan^{-1}y$, so solving gives $y = \tan(\cdot)$.`,
      '3': t`$e^{x^{3}}$ would solve $y' = 3x^{2}y$; here the right side has $1 + y^{2}$.`
    }
  },

  Q_ENGR213_087: {
    steps: [
      { title: 'Homogeneous: substitute $y = ux$, $y\' = u + xu\'$', math: t`u + xu' = \frac{u^{2}x^{2} + ux^{2}}{x^{2}} = u^{2} + u` },
      { title: 'Cancel $u$', math: t`x\,u' = u^{2}` },
      { title: 'Separate', math: t`\frac{du}{u^{2}} = \frac{dx}{x}` },
      { title: 'Integrate', math: t`-\frac1u = \ln|x| + c` },
      { title: 'Solve for $u$, then $y = ux$', math: t`u = -\frac{1}{\ln|x| + c} \quad\Rightarrow\quad y = -\frac{x}{\ln|x| + c}` }
    ],
    answer: t`y = -\frac{x}{\ln|x| + c}`,
    whyWrong: {
      '1': t`This would come from $u' = 1/x$ (linear in $u$). Here $xu' = u^{2}$, which is separable in $u$.`,
      '2': t`$\int u^{-2}du = -u^{-1}$: the minus sign was lost.`,
      '3': t`$y = cx^{2}$ does not satisfy the ODE; check by substitution.`
    }
  },

  Q_ENGR213_089: {
    steps: [
      { title: 'Growth factor per hour', math: t`P(1) = 1.5P_0 \;\Rightarrow\; e^{k} = 1.5` },
      { title: 'After 5 hours', math: t`P(5) = P_0 e^{5k} = P_0\left(e^{k}\right)^{5} = P_0(1.5)^{5}` },
      { title: 'Evaluate', math: t`1.5^{5} = 7.59375 \quad\Rightarrow\quad P(5) \approx 7.59P_0` }
    ],
    answer: t`\approx 7.59P_0`,
    whyWrong: {
      '1': t`$3.5P_0 = P_0 + 5(0.5P_0)$ adds 50% of the original each hour (linear). Growth compounds.`,
      '2': t`$7.5P_0 = 1.5 \times 5$ multiplies instead of raising to the 5th power.`,
      '3': t`$e^{1.5} \approx 4.48$ treats 1.5 as $k t$; the data gives $e^{k} = 1.5$, so $k = \ln 1.5$.`
    }
  },

  Q_ENGR213_093: {
    steps: [
      { title: 'Divide by $x^{2}$', math: t`y' + \frac1x y = \frac{1}{x^{2}}` },
      { title: 'Integrating factor', math: t`\mu = e^{\ln x} = x` },
      { title: 'Collapse', math: t`\frac{d}{dx}[xy] = x\cdot\frac{1}{x^{2}} = \frac1x` },
      { title: 'Integrate', math: t`xy = \ln x + c` },
      { title: 'Divide by $x$', math: t`y = \frac{\ln x + c}{x}` }
    ],
    answer: t`y = \frac{\ln x + c}{x}`,
    whyWrong: {
      '1': t`The right side must be multiplied by $\mu$ before integrating: $\int \frac1x dx = \ln x$, not $\int \frac{1}{x^{2}}dx$.`,
      '2': t`After $xy = \ln x + c$, divide by $x$ (do not multiply).`,
      '3': t`Both $\ln x$ and $c$ must be divided by $x$.`
    }
  },

  Q_ENGR213_096: {
    steps: [
      { title: 'Substitute $t = 1$, $T = 110$', math: t`110 = 350 - 280\,e^{k}` },
      { title: 'Isolate the exponential', math: t`280\,e^{k} = 240 \quad\Rightarrow\quad e^{k} = \frac{240}{280} = \frac67` },
      { title: 'Take logs', math: t`k = \ln\frac67 \approx -0.154` }
    ],
    answer: t`k = \ln\tfrac67 \approx -0.154`,
    whyWrong: {
      '1': t`The ratio is inverted: $e^{k} = 240/280$. Also $k$ must be negative because the gap to 350 °F shrinks.`,
      '2': t`$110/70$ uses raw temperatures; Newton's law works with differences from $T_m$.`,
      '3': t`$-280$ is the constant $C$, not the rate $k$.`
    }
  },

  Q_ENGR213_099: {
    steps: [
      { title: 'Slope field value', math: t`f(x, y) = x - y` },
      { title: 'Substitute $(3, 1)$', math: t`f(3, 1) = 3 - 1 = 2` }
    ],
    answer: t`2`,
    whyWrong: {
      '1': t`$-2 = y - x$: the order of subtraction was reversed.`,
      '2': t`3 is only $x$; the $-y$ term was forgotten.`,
      '3': t`$4 = x + y$: the subtraction became addition.`
    }
  }
};
