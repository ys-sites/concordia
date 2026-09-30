import { SolutionUpgrade, t } from './types';

// Second pass: baby-step solutions for the remaining computational questions
// (MIAE 215 expression/code evaluation and ENGR 213 classification, phase-line and interval questions).
export const MORE_SOLUTIONS: Record<string, SolutionUpgrade> = {
  // ------------------------------------------------------------------ MIAE 215
  Q_MIAE215_009: {
    steps: [
      { title: 'Largest 4-byte int', math: t`\text{INT\_MAX} = 2^{31} - 1 = 2{,}147{,}483{,}647` },
      { title: 'Adding 1 needs a value one past the top', math: t`2{,}147{,}483{,}647 + 1 = 2^{31}` },
      { title: 'That does not fit, so the bits wrap to the other end of the range', math: t`x = -2^{31} = -2{,}147{,}483{,}648` }
    ],
    answer: t`x = -2{,}147{,}483{,}648`,
    whyWrong: {
      '1': t`2,147,483,648 is the true sum, but a 4-byte int cannot store it.`,
      '2': t`Integer overflow does not raise an exception; it silently wraps (Variable Types I, p. 2).`,
      '3': t`Inf is what a **float** gives on overflow; ints have no Inf.`
    }
  },
  Q_MIAE215_011: {
    steps: [
      { title: 'Declaration without a value', note: t`"int y, z;" reserves memory for y but puts nothing in it: y holds whatever bits were left there.` },
      { title: 'Use of the unset value', math: t`z = y + 1 = (\text{garbage}) + 1 = \text{garbage}` },
      { title: 'Rule from the slides', note: t`Always initialise a variable to a valid value before using it.` }
    ],
    whyWrong: {
      '1': t`That assumes y starts at 0. C++ does not zero local variables.`,
      '2': t`Nothing sets y or z to 0.`,
      '3': t`It compiles (maybe with a warning); the bug appears only at run time.`
    }
  },
  Q_MIAE215_012: {
    steps: [
      { title: 'Case 1: int ÷ int', math: t`z = 1 / y,\quad y = 0 \;\Rightarrow\; \text{integer division by zero} \;\Rightarrow\; \text{exception (program stops)}` },
      { title: 'Case 2: float ÷ float', math: t`fz = 1 / 0.0 \;\Rightarrow\; +\text{Inf}` },
      { title: 'Why they differ', note: t`Floating-point numbers have special values (Inf, NaN) for such results; integers have no way to represent infinity.` }
    ],
    whyWrong: {
      '1': t`Only floating-point types have Inf.`,
      '2': t`Neither gives 0.`,
      '3': t`Reversed: the float version gives Inf, the int version is the one that fails.`
    }
  },
  Q_MIAE215_018: {
    steps: [
      { title: 'Cast first, then divide', math: t`(\text{double})a / b = 7.0 / 2 \;\to\; 7.0 / 2.0 = 3.5` },
      { title: 'Compare: divide first, then cast', math: t`(\text{double})(a / b) = (\text{double})(3) = 3.0` },
      { title: 'Rule', note: t`The cast must be applied to an operand **before** the division; casting the result is too late.` }
    ],
    answer: t`\texttt{(double)a / b} = 3.5`,
    whyWrong: {
      '1': t`$a/b$ is evaluated first as integers ($7/2 = 3$), so the cast only turns 3 into 3.0.`,
      '2': t`$a/b$ is integer division (3); storing it in a double gives 3.0.`,
      '3': t`$a \% b = 1$, so this stores 1.0.`
    }
  },
  Q_MIAE215_022: {
    steps: [
      { title: 'Both operands are int', math: t`7 / 2 \;\to\; \text{integer division}` },
      { title: 'Quotient, remainder discarded', math: t`7 = 3 \times 2 + 1 \;\Rightarrow\; 7/2 = 3` }
    ],
    answer: t`3`,
    whyWrong: {
      '1': t`3.5 needs a floating-point operand, e.g. $7.0/2$.`,
      '2': t`Integer division truncates toward zero; it never rounds up.`,
      '3': t`It compiles; dividing ints is legal.`
    }
  },
  Q_MIAE215_026: {
    steps: [
      { title: 'Post-increment returns the OLD value', math: t`b = a{+}{+} \;\Rightarrow\; b = 5` },
      { title: 'Then a is increased', math: t`a = 5 + 1 = 6` }
    ],
    answer: t`a = 6,\ b = 5`,
    whyWrong: {
      '1': t`That is pre-increment ("b = ++a"), which increments first.`,
      '2': t`a does change: "a++" adds 1 to it.`,
      '3': t`The values are swapped.`
    }
  },
  Q_MIAE215_033: {
    steps: [
      { title: 'Evaluate each comparison with i = 5, k = 3', math: t`i > k:\ 5 > 3 = \text{T}, \quad k \le 3:\ 3 \le 3 = \text{T}, \quad i < k: \text{F}, \quad k > 3: \text{F}, \quad i == k: \text{F}` },
      { title: 'Combine', math: t`\text{T} \;\&\&\; \text{T} = \text{T}` }
    ],
    whyWrong: {
      '1': t`$5 > 3$ is true, so "!(i > k)" is false.`,
      '2': t`Both parts are false: $5 < 3$ is F and $3 > 3$ is F, so F || F = F.`,
      '3': t`$i == k$ is false ($5 \neq 3$), so the whole AND is false.`
    }
  },
  Q_MIAE215_038: {
    steps: [
      { title: 'List the values that pass the test $i < 10$', math: t`i = 0,\ 2,\ 4,\ 6,\ 8` },
      { title: 'Next value fails', math: t`i = 10 \Rightarrow 10 < 10 \text{ is false}` },
      { title: 'Count', math: t`5 \text{ executions}` }
    ],
    answer: t`5`,
    whyWrong: {
      '1': t`10 would be the count for "i++"; here the step is 2.`,
      '2': t`4 misses $i = 0$.`,
      '3': t`6 counts $i = 10$, which fails the strict test $i < 10$.`
    }
  },
  Q_MIAE215_069: {
    steps: [
      { title: 'int / int', math: t`1 / 3 = 0\ (\text{remainder } 1 \text{ discarded})` },
      { title: 'Store', math: t`z = 0` }
    ],
    answer: t`0`,
    whyWrong: {
      '1': t`0.333 needs a floating-point operand, and z is an int anyway.`,
      '2': t`Integer division truncates; it never rounds up to 1.`,
      '3': t`Only division by **zero** raises an exception.`
    }
  },
  Q_MIAE215_071: {
    steps: [
      { title: 'bool values', math: t`b1 = \text{true},\qquad b2 = \text{false}` },
      { title: 'cout prints bools as numbers by default', math: t`\text{true} \to 1,\qquad \text{false} \to 0` },
      { title: 'Output', math: t`\texttt{b1 = 1 , b2 = 0}` }
    ],
    whyWrong: {
      '1': t`Printing the words needs "cout << boolalpha"; by default cout prints 1 and 0.`,
      '2': t`The values are swapped.`,
      '3': t`bools print fine, as 1 or 0.`
    }
  },
  Q_MIAE215_079: {
    steps: [
      { title: 'Print x', math: t`\texttt{1}` },
      { title: "c1 = '\\n'", note: t`A newline character: the cursor moves to the next line.` },
      { title: 'Print y, then c2 (a space), then z, then c3', math: t`\texttt{-1}\ \ \texttt{5c}` }
    ],
    whyWrong: {
      '1': t`c1 is a newline, so -1 appears on a second line.`,
      '2': t`"'\n'" is one control character; it is not printed as the two symbols \ and n.`,
      '3': t`The items print in the order they appear in the cout chain: x, c1, y, c2, z, c3.`
    }
  },
  Q_MIAE215_083: {
    steps: [
      { title: 'Both operands are double', math: t`7.0 / 3.0 = 2.33333\ldots` },
      { title: 'Compare with ints', math: t`7 / 3 = 2` }
    ],
    answer: t`\approx 2.33333`,
    whyWrong: {
      '1': t`2 is the int result of "7 / 3"; here the operands are doubles.`,
      '2': t`2.0 would come from storing the int division result in a double.`,
      '3': t`1 is the remainder $7 \% 3$.`
    }
  },
  Q_MIAE215_084: {
    steps: [
      { title: 'Left to right: 3 * 3.5 (int promoted to double)', math: t`3.0 \times 3.5 = 10.5` },
      { title: 'Then × 7', math: t`10.5 \times 7 = 73.5` }
    ],
    answer: t`73.5`,
    whyWrong: {
      '1': t`63 treats 3.5 as 3; mixed int/double arithmetic promotes to double, it does not truncate 3.5.`,
      '2': t`73 would only happen if x were an int.`,
      '3': t`70 does not follow from the multiplication.`
    }
  },
  Q_MIAE215_090: {
    steps: [
      { title: 'Parentheses first: int division', math: t`7 / 3 = 2` },
      { title: 'Multiply', math: t`2 \times 3 = 6` },
      { title: 'Subtract', math: t`q = 7 - 6 = 1 \quad (= 7 \,\%\, 3)` }
    ],
    answer: t`q = 1`,
    whyWrong: {
      '1': t`0 treats $(7/3) \times 3$ as exactly 7; integer division loses the remainder.`,
      '2': t`7 ignores the subtraction.`,
      '3': t`−2 does not follow from these operations.`
    }
  },
  Q_MIAE215_091: {
    steps: [
      { title: '* and / are left to right: 1/3 first, both ints', math: t`1 / 3 = 0` },
      { title: 'Then × 10.0', math: t`0 \times 10.0 = 0.0` }
    ],
    answer: t`0`,
    whyWrong: {
      '1': t`3.333 would need the 10.0 to be applied first, or "1.0/3".`,
      '2': t`3.0 does not follow; the product is 0.`,
      '3': t`0.333 needs floating-point division.`
    }
  },
  Q_MIAE215_092: {
    steps: [
      { title: 'Both operands are double', math: t`-1.0 / 0.0` },
      { title: 'IEEE floating point', math: t`\text{negative} / 0.0 = -\text{Inf}` }
    ],
    answer: t`-\text{inf}`,
    whyWrong: {
      '1': t`Division by zero never gives 0.`,
      '2': t`Only **integer** division by zero raises an exception.`,
      '3': t`1 does not follow.`
    }
  },
  Q_MIAE215_095: {
    steps: [
      { title: 'Left to right: 1/q with q an int', math: t`1 / 3 = 0` },
      { title: 'Then × r × r', math: t`0 \times 3.0 \times 3.0 = 0.0` }
    ],
    answer: t`A = 0`,
    whyWrong: {
      '1': t`3 is the mathematical value $\tfrac13 \times 9$; the int division makes the first factor 0.`,
      '2': t`1 does not follow.`,
      '3': t`9 is only $r \times r$.`
    }
  },
  Q_MIAE215_096: {
    steps: [
      { title: 'Inner bracket needs 21 significant digits', math: t`1.0 - 1.0\times10^{-20} = 0.99999999999999999999` },
      { title: 'A double keeps about 16', math: t`\Rightarrow\ \text{rounds to } 1.0` },
      { title: 'Outer subtraction', math: t`r4 = 1.0 - 1.0 = 0` }
    ],
    whyWrong: {
      '1': t`Subtraction of doubles is legal; the issue is precision.`,
      '2': t`"1.0e-20" is a double literal.`,
      '3': t`The compiler keeps the parentheses; the rounding happens at run time.`
    }
  },
  Q_MIAE215_100: {
    steps: [
      { title: 'Right side is the int 3', note: t`Before assignment, it is converted to the type of the variable on the left.` },
      { title: 'Stored value', math: t`y = 3.0` }
    ],
    whyWrong: {
      '1': t`y was declared double, so it holds a double.`,
      '2': t`Assigning an int to a double is a safe widening conversion.`,
      '3': t`The assignment does set y.`
    }
  },
  Q_MIAE215_106: {
    steps: [
      { title: 'Inner comparison', math: t`i > k:\ 1 > 2 = \text{false}` },
      { title: 'NOT inverts it', math: t`!\text{false} = \text{true}` },
      { title: 'So the if runs', note: t`"yes" is printed.` }
    ],
    whyWrong: {
      '1': t`"!" turns the false comparison into true.`,
      '2': t`k's value only matters through the comparison $1 > 2$.`,
      '3': t`"!( … )" is valid C++.`
    }
  },
  Q_MIAE215_114: {
    steps: [
      { title: 'Values that pass $i \\le 10$', math: t`0,\ 2,\ 4,\ 6,\ 8,\ 10` },
      { title: 'Count them', math: t`6` },
      { title: 'Exit value', math: t`i = 12 \Rightarrow 12 \le 10 \text{ false}` }
    ],
    answer: t`6`,
    whyWrong: {
      '1': t`5 uses the strict test $i < 10$, which excludes 10.`,
      '2': t`10 assumes a step of 1 (and misses 0).`,
      '3': t`11 counts 0 through 10 in steps of 1.`
    }
  },
  Q_MIAE215_117: {
    steps: [
      { title: 'Values printed', math: t`i = 10, 9, \dots, 1, 0` },
      { title: 'After printing 0, the update runs', math: t`i{-}{-} \Rightarrow i = -1` },
      { title: 'Test fails', math: t`-1 > -1 \text{ is false} \Rightarrow \text{exit with } i = -1` }
    ],
    answer: t`i = -1`,
    whyWrong: {
      '1': t`0 is the last value printed, but the update runs once more before the test fails.`,
      '2': t`10 is the starting value.`,
      '3': t`1 is two steps before the end.`
    }
  },

  // ------------------------------------------------------------------ ENGR 213
  Q_ENGR213_002: {
    steps: [
      { title: 'Order = highest derivative present', math: t`(y'')^{3} \Rightarrow \text{highest is } y'' \Rightarrow \text{order } 2` },
      { title: 'Linearity: every $y$-term must be first degree', math: t`(y'')^{3} \text{ is third degree in } y'' \Rightarrow \text{nonlinear}` }
    ],
    answer: t`\text{second order, nonlinear}`,
    whyWrong: {
      '1': t`The exponent 3 is a power, not a derivative order; and a cubed derivative makes it nonlinear.`,
      '2': t`The order is right, but $(y'')^{3}$ breaks linearity.`,
      '3': t`Nonlinear is right, but the order is 2: the cube does not raise the order.`
    }
  },
  Q_ENGR213_003: {
    steps: [
      { title: 'Differentiate', math: t`\varphi = x^{-1} \Rightarrow \varphi' = -x^{-2}` },
      { title: 'Substitute', math: t`x\left(-\frac{1}{x^{2}}\right) + \frac1x = -\frac1x + \frac1x = 0\ \checkmark` },
      { title: 'Where is $\\varphi$ defined and differentiable?', math: t`x \neq 0` },
      { title: 'A solution lives on one interval', math: t`(-\infty, 0) \quad\text{or}\quad (0, \infty)` }
    ],
    whyWrong: {
      '1': t`$(-\infty,\infty)$ contains $x = 0$, where $1/x$ is undefined.`,
      '2': t`$[0, \infty)$ includes 0.`,
      '3': t`$(-1, 1)$ includes 0; it is also not the largest interval.`
    }
  },
  Q_ENGR213_032: {
    steps: [
      { title: 'Net flow into the tank', math: t`\frac{dV}{dt} = r_{in} - r_{out} = 5 - 3 = 2\ \text{L/min}` },
      { title: 'Integrate with $V(0) = 500$', math: t`V(t) = 500 + 2t` }
    ],
    answer: t`V(t) = 500 + 2t`,
    whyWrong: {
      '1': t`More flows in than out, so the volume grows.`,
      '2': t`The flows are subtracted (in − out), not added.`,
      '3': t`Volume changes linearly with a constant net flow, not in proportion to itself.`
    }
  },
  Q_ENGR213_039: {
    steps: [
      { title: 'Derivatives present', math: t`\frac{d^{2}y}{dx^{2}},\quad \frac{dy}{dx}` },
      { title: 'Highest one', math: t`\text{second derivative} \Rightarrow \text{order } 2` },
      { title: 'Note', note: t`The cube on $dy/dx$ makes it nonlinear; it does not change the order.` }
    ],
    answer: t`\text{second order}`,
    whyWrong: {
      '1': t`3 is the power on $dy/dx$, not a derivative order.`,
      '2': t`$d^{2}y/dx^{2}$ is present, so the order is at least 2.`,
      '3': t`5 is a coefficient.`
    }
  },
  Q_ENGR213_042: {
    steps: [
      { title: 'Highest derivative', math: t`\frac{d^{4}y}{dx^{4}} \Rightarrow \text{order } 4` },
      { title: 'Degree of each $y$-term', math: t`y^{2} \text{ is second degree} \Rightarrow \text{nonlinear}` }
    ],
    answer: t`\text{fourth order, nonlinear}`,
    whyWrong: {
      '1': t`$y^{2}$ makes it nonlinear.`,
      '2': t`The squared term does not set the order; the 4th derivative does.`,
      '3': t`The highest derivative is the 4th, not the 1st.`
    }
  },
  Q_ENGR213_045: {
    steps: [
      { title: 'Differentiate twice', math: t`y = \sin x,\quad y' = \cos x,\quad y'' = -\sin x` },
      { title: 'Substitute', math: t`y'' + y = -\sin x + \sin x = 0\ \checkmark` },
      { title: 'Interval', note: t`$\sin x$ and its derivatives exist for every real $x$, so it is a solution on $(-\infty, \infty)$.` }
    ],
    whyWrong: {
      '1': t`The second derivative of $\sin x$ is $-\sin x$ (sign error).`,
      '2': t`Nothing restricts $x$ to positive values.`,
      '3': t`The identity holds for every $x$, not just 0.`
    }
  },
  Q_ENGR213_052: {
    steps: [
      { title: '$f$ and its partial derivative', math: t`f = x\sqrt{y}, \qquad \frac{\partial f}{\partial y} = \frac{x}{2\sqrt{y}}` },
      { title: 'Where they fail', note: t`$\sqrt y$ needs $y \ge 0$; $\partial f/\partial y$ blows up at $y = 0$.` },
      { title: 'At $(2, 1)$', math: t`y = 1 > 0 \Rightarrow \text{both continuous on a rectangle around }(2,1) \Rightarrow \text{unique solution}` }
    ],
    whyWrong: {
      '1': t`The two-solution example is at $(0, 0)$, where $y = 0$; the point $(2, 1)$ is away from that line.`,
      '2': t`The theorem works for nonlinear equations too.`,
      '3': t`$x = 0$ is irrelevant; the problem line is $y = 0$.`
    }
  },
  Q_ENGR213_055: {
    steps: [
      { title: 'Critical points', math: t`y(1 - y) = 0 \Rightarrow y = 0,\ 1` },
      { title: 'Sign of $f(y) = y(1-y)$ around $y = 0$', math: t`y < 0:\ (-)(+) < 0 \ \downarrow \qquad 0 < y < 1:\ (+)(+) > 0 \ \uparrow` },
      { title: 'Read the arrows at 0', note: t`Below 0 solutions go down (away), above 0 they go up (away): a repeller.` }
    ],
    answer: t`y = 0 \text{ is unstable}`,
    whyWrong: {
      '1': t`Arrows point away from 0 on both sides, not toward it.`,
      '2': t`Semi-stable needs the same direction on both sides; here they point in opposite directions (both away).`,
      '3': t`$f(0) = 0$, so it is a critical point.`
    }
  },
  Q_ENGR213_056: {
    steps: [
      { title: 'Sign of $f(y) = (y-2)^{2}$', math: t`(y - 2)^{2} \ge 0 \text{ on both sides of } 2` },
      { title: 'Arrows', math: t`y < 2:\ \uparrow \text{ (toward 2)} \qquad y > 2:\ \uparrow \text{ (away from 2)}` },
      { title: 'Classify', note: t`Attracting from one side, repelling on the other: semi-stable.` }
    ],
    whyWrong: {
      '1': t`Above 2 solutions move away, so it is not an attractor.`,
      '2': t`Below 2 solutions move toward it, so it is not a pure repeller.`,
      '3': t`$f(2) = 0$, so it is a critical point.`
    }
  },
  Q_ENGR213_072: {
    steps: [
      { title: 'Critical points', math: t`P(4 - P) = 0 \Rightarrow P = 0,\ 4` },
      { title: 'Sign between them', math: t`0 < P < 4:\ (+)(+) > 0 \Rightarrow P \text{ increases}` },
      { title: 'Above 4', math: t`P > 4:\ (+)(-) < 0 \Rightarrow P \text{ decreases}` },
      { title: 'Starting at $P(0) = 1$', note: t`P rises toward 4 and can never cross it, so $P \to 4$.` }
    ],
    answer: t`P \to 4`,
    whyWrong: {
      '1': t`0 is a repeller: solutions starting above it move away.`,
      '2': t`$P = 1$ is only the starting value; $P' > 0$ there.`,
      '3': t`Growth stops at the critical point $P = 4$.`
    }
  },
  Q_ENGR213_084: {
    steps: [
      { title: 'Divide by $x$', math: t`y' - \frac{1 + x}{x}\,y = y^{2}` },
      { title: 'Compare with Bernoulli form $y\' + P(x)y = f(x)y^{n}$', math: t`n = 2` },
      { title: 'Substitution', math: t`u = y^{1-n} = y^{-1}` }
    ],
    whyWrong: {
      '1': t`$n = 2$ is right, but the substitution is $y^{1-n} = y^{-1}$, not $y^{2}$.`,
      '2': t`The power on the right side is 2, and $n = 1$ would already be linear.`,
      '3': t`The right side has $y^{2}$, so $n = +2$.`
    }
  },
  Q_ENGR213_086: {
    steps: [
      { title: 'Where is $y = 1/(1-x)$ undefined?', math: t`1 - x = 0 \Rightarrow x = 1` },
      { title: 'The function lives on two pieces', math: t`(-\infty, 1) \quad\text{and}\quad (1, \infty)` },
      { title: 'The IVP solution is the piece containing $x_0 = 0$', math: t`(-\infty, 1)` }
    ],
    whyWrong: {
      '1': t`The solution cannot cross $x = 1$, where it blows up.`,
      '2': t`$(1, \infty)$ does not contain the initial point $x = 0$.`,
      '3': t`$(0, 1)$ is valid but not the largest interval.`
    }
  },
  Q_ENGR213_091: {
    steps: [
      { title: 'Near $y = 0$', math: t`y^{2} \ge 0 \quad\text{and}\quad 4 - y^{2} > 0 \text{ for small } y` },
      { title: 'So', math: t`f(y) = y^{2}(4 - y^{2}) > 0 \text{ on both sides of } 0` },
      { title: 'Arrows', note: t`Both point up: toward 0 from below, away from 0 above. Semi-stable.` }
    ],
    whyWrong: {
      '1': t`Above 0 solutions move away, so it does not attract from both sides.`,
      '2': t`Below 0 solutions move toward 0, so it is not a pure repeller.`,
      '3': t`$f(0) = 0$.`
    }
  },
  Q_ENGR213_092: {
    steps: [
      { title: 'Exactness test', math: t`M = x^{2} + 2y \Rightarrow M_y = 2, \qquad N = -x \Rightarrow N_x = -1 \Rightarrow \text{not exact}` },
      { title: 'Rewrite as $dy/dx$', math: t`x\,y' = x^{2} + 2y \;\Rightarrow\; y' - \frac{2}{x}y = x` },
      { title: 'Linear: integrating factor', math: t`\mu = e^{-\int \frac2x dx} = x^{-2}` },
      { title: 'Solve', math: t`\left(\frac{y}{x^{2}}\right)' = \frac1x \Rightarrow y = x^{2}\ln|x| + cx^{2}` }
    ],
    whyWrong: {
      '1': t`$M_y = 2 \neq N_x = -1$.`,
      '2': t`$x^{2} + 2y$ cannot be split into (function of $x$) × (function of $y$).`,
      '3': t`There is no $y^{n}$ term with $n \neq 0, 1$.`
    }
  },
  Q_ENGR213_098: {
    steps: [
      { title: 'Constant solutions make the right side zero', math: t`xy^{2} = 0 \text{ for all } x \Rightarrow y = 0` },
      { title: 'Can the family produce it?', math: t`-\frac{2}{x^{2} + c} = 0 \text{ has no solution for any } c` },
      { title: 'Why it was lost', note: t`Separating divided by $y^{2}$, which assumed $y \neq 0$.` }
    ],
    answer: t`y = 0`,
    whyWrong: {
      '1': t`$y = 1$ is not a solution: $y' = 0 \neq x$.`,
      '2': t`$y = -2$ is not constant-solution-compatible: $x(4) \neq 0$.`,
      '3': t`$y = 0$ solves the ODE but is not in the family.`
    }
  }
};
