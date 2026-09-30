import { SolutionUpgrade, t } from './types';

// MIAE 215 — line-by-line traces for the code-output questions in questionsData.ts, following the
// teacher's slides (variable types I & II, expressions & operators, control statements).
export const MIAE215_SOLUTIONS: Record<string, SolutionUpgrade> = {
  Q_MIAE215_013: {
    steps: [
      { title: 'Exact sum', math: t`1.0 + 1.0\times10^{-10} = 1.0000000001` },
      { title: 'Significant digits needed', note: t`That number needs 11 significant digits.` },
      { title: 'What a float can hold', note: t`A float keeps about 7–8 significant digits, so the digits after the 8th are rounded away.` },
      { title: 'Stored result', math: t`z = 1.0000000\ \ (\text{the } 10^{-10} \text{ is lost: round-off error})` }
    ],
    answer: t`z = 1.0000000`,
    whyWrong: {
      '1': t`Adding small numbers is legal; the problem is precision, not syntax.`,
      '2': t`$10^{-10}$ is far above float's smallest value (about $10^{-38}$), so it does not underflow; and underflow gives 0, not Inf.`,
      '3': t`The formatting is not the cause; the value itself is exactly 1.0 after rounding.`
    }
  },

  Q_MIAE215_019: {
    steps: [
      { title: 'f2 holds a float', math: t`f2 = 3.6` },
      { title: 'Assigning a float to an int is an implicit conversion', note: t`The fractional part is dropped (truncated toward zero), not rounded.` },
      { title: 'Result', math: t`i1 = 3` }
    ],
    answer: t`i1 = 3`,
    whyWrong: {
      '1': t`C++ truncates, it does not round: 3.6 → 3, not 4.`,
      '2': t`An int cannot hold a fractional part.`,
      '3': t`The conversion is legal (the compiler may warn, but it compiles).`
    }
  },

  Q_MIAE215_023: {
    steps: [
      { title: 'd1: evaluate the right side first', math: t`5 / 2 \;\to\; \text{int} / \text{int} = 2\ \ (\text{remainder discarded})` },
      { title: 'Then store the int 2 in a double', math: t`d1 = 2.0` },
      { title: 'd2: one operand is a double', math: t`5 / 2.0 \;\to\; 5.0 / 2.0 = 2.5` },
      { title: 'Store', math: t`d2 = 2.5` }
    ],
    answer: t`d1 = 2.0,\ d2 = 2.5`,
    whyWrong: {
      '1': t`The type of the variable on the left does not change how the right side is computed: 5/2 is integer division.`,
      '2': t`$5/2.0$ promotes 5 to double, so it is 2.5.`,
      '3': t`Integer division truncates (2), it never rounds up to 3.`
    }
  },

  Q_MIAE215_025: {
    steps: [
      { title: 'Divide 17 by 5 with integers', math: t`17 = 3 \times 5 + 2` },
      { title: '% gives the remainder', math: t`17 \,\%\, 5 = 2` }
    ],
    answer: t`r = 2`,
    whyWrong: {
      '1': t`3 is the quotient $17/5$, not the remainder.`,
      '2': t`3.4 is the real division $17/5$; % works with integers only.`,
      '3': t`The remainder is 0 only if 5 divides 17 exactly.`
    }
  },

  Q_MIAE215_027: {
    steps: [
      { title: 'Start', math: t`x = 10` },
      { title: 'x += 3 means x = x + 3', math: t`x = 10 + 3 = 13` },
      { title: 'x *= 2 means x = x * 2', math: t`x = 13 \times 2 = 26` }
    ],
    answer: t`x = 26`,
    whyWrong: {
      '1': t`23 applies $\times 2$ before $+3$; statements run in order, top to bottom.`,
      '2': t`20 skips the $+3$.`,
      '3': t`16 treats $x \mathrel{*}= 2$ as adding 3 again.`
    }
  },

  Q_MIAE215_028: {
    steps: [
      { title: '* and / have higher precedence than −, and are evaluated left to right', math: t`10 - \underbrace{4 / 2}_{2} * 3` },
      { title: 'Then multiply', math: t`2 * 3 = 6` },
      { title: 'Finally subtract', math: t`10 - 6 = 4` }
    ],
    answer: t`r = 4`,
    whyWrong: {
      '1': t`9 = $(10 - 4)/2 \times 3$: the subtraction was done first. Without parentheses, * and / come before −.`,
      '2': t`1 = $(10 - 4)/(2 \times 3)$: this invents two sets of parentheses.`,
      '3': t`12 does not come from any grouping of these operators; recheck $4/2 = 2$, $2 \times 3 = 6$, $10 - 6 = 4$.`
    }
  },

  Q_MIAE215_039: {
    steps: [
      { title: 'Trace the loop', math: t`\begin{array}{c|c|c} i & i < 5? & \text{action} \\ \hline 0 & \text{T} & \text{print, } i{+}{+} \\ 1 & \text{T} & \text{print, } i{+}{+} \\ 2 & \text{T} & \text{print, } i{+}{+} \\ 3 & \text{T} & \text{print, } i{+}{+} \\ 4 & \text{T} & \text{print, } i{+}{+} \\ 5 & \text{F} & \text{exit} \end{array}` },
      { title: 'After the loop', note: t`The update i++ ran once more before the test failed, so i = 5.` }
    ],
    answer: t`\text{exit } i = 5`,
    whyWrong: {
      '1': t`4 is the last value printed inside the loop; the update runs once more before the test fails.`,
      '2': t`0 is the start value.`,
      '3': t`The loop stops as soon as $i < 5$ is false at $i = 5$.`
    }
  },

  Q_MIAE215_040: {
    steps: [
      { title: 'Trace $x$ (multiplied by 10 each pass)', math: t`\begin{array}{c|c} x & x < 10^{5}? \\ \hline 1 & \text{T} \\ 10 & \text{T} \\ 100 & \text{T} \\ 1000 & \text{T} \\ 10000 & \text{T} \\ 100000 & \text{F} \end{array}` },
      { title: 'Count the T rows', math: t`5\ \text{iterations}` }
    ],
    answer: t`5`,
    whyWrong: {
      '1': t`4 misses the first pass at $x = 1$.`,
      '2': t`6 counts the final test at $x = 10^{5}$, which is false ($10^{5} < 10^{5}$ fails).`,
      '3': t`$x$ grows every pass, so the test eventually fails.`
    }
  },

  Q_MIAE215_085: {
    steps: [
      { title: 'x = 3', math: t`x = 3.0` },
      { title: 'Right side uses the current x', math: t`2x + 1 = 2(3) + 1 = 7` },
      { title: 'Store back into x', math: t`x = 7` }
    ],
    answer: t`7`,
    whyWrong: {
      '1': t`= is assignment, not an equation to solve: C++ never solves $x = 2x + 1$ for $x = -1$.`,
      '2': t`The second statement overwrites the 3.`,
      '3': t`1 drops the $2x$ term.`
    }
  },

  Q_MIAE215_093: {
    steps: [
      { title: 'Initial values', math: t`u = 0.0,\quad v = 1.1,\quad w = 1.0` },
      { title: 'Line 1: u--', math: t`u = -1.0` },
      { title: 'Line 2: w++', math: t`w = 2.0` },
      { title: 'Line 3: v = v - u', math: t`v = 1.1 - (-1.0) = 2.1` },
      { title: 'Line 4: w = w*w + v + w (all using current values)', math: t`w = 2(2) + 2.1 + 2 = 8.1` }
    ],
    answer: t`w = 8.1`,
    whyWrong: {
      '1': t`5.1 uses the old $w = 1$ somewhere in line 4; w was already incremented to 2.`,
      '2': t`4.0 is only $w \times w$.`,
      '3': t`2.0 is $w$ after line 2, before line 4 runs.`
    }
  },

  Q_MIAE215_097: {
    steps: [
      { title: 'Initial values', math: t`u = 0,\quad v = 2,\quad w = -1` },
      { title: 'Line 1', math: t`u = 0 + 3 = 3` },
      { title: 'Line 2', math: t`w = -1 / 2 = -0.5\quad(\text{double division})` },
      { title: 'Line 3', math: t`v = 2(3) + (-0.5) = 5.5` },
      { title: 'Line 4', math: t`v = 2(5.5) = 11` },
      { title: 'Line 5', math: t`w = -(-0.5)\cdot|{-(-0.5)}| = 0.5 \times 0.5 = 0.25` }
    ],
    answer: t`u = 3,\ v = 11,\ w = 0.25`,
    whyWrong: {
      '1': t`These are the values after line 3; lines 4 and 5 still change v and w.`,
      '2': t`These are the initial values; every line reassigns a variable.`,
      '3': t`Sign slip in line 5: $-w = +0.5$ and $|{-w}| = 0.5$, so the product is $+0.25$.`
    }
  },

  Q_MIAE215_099: {
    steps: [
      { title: 'x /= 4', math: t`x = 20 / 4 = 5` },
      { title: 'x -= 2', math: t`x = 5 - 2 = 3` }
    ],
    answer: t`3`,
    whyWrong: {
      '1': t`5 is the value after the first line only.`,
      '2': t`$x \mathrel{-}= 2$ means $x = x - 2$, not $x = 2 - x$.`,
      '3': t`18 applies the lines in the reverse order.`
    }
  },

  Q_MIAE215_115: {
    steps: [
      { title: 'Trace $k$ with the update $k = k^{2} + 1$', math: t`\begin{array}{c|c|c} k & k < 1000? & \text{next } k \\ \hline 0 & \text{T (print)} & 1 \\ 1 & \text{T (print)} & 2 \\ 2 & \text{T (print)} & 5 \\ 5 & \text{T (print)} & 26 \\ 26 & \text{T (print)} & 677 \\ 677 & \text{T (print)} & 458330 \\ 458330 & \text{F} & \end{array}` },
      { title: 'Count the prints', math: t`6` }
    ],
    answer: t`6`,
    whyWrong: {
      '1': t`5 forgets that $k = 0$ is printed first.`,
      '2': t`The update is not $k{+}{+}$; $k$ grows much faster.`,
      '3': t`$k$ increases every pass, so the test eventually fails.`
    }
  },

  Q_MIAE215_116: {
    steps: [
      { title: 'First test', math: t`x/y = 1.1/0.25 = 4.4 > 4 \;\Rightarrow\; \text{true}` },
      { title: 'Inside the block', math: t`z = |{-3.0}| = 3.0,\qquad z = 3 \times 3 = 9,\qquad x = -1.1` },
      { title: 'Second test uses the NEW x', math: t`x/y = -1.1/0.25 = -4.4 > 4 \;\Rightarrow\; \text{false}` },
      { title: 'Output', math: t`-1.1 \quad 0.25 \quad 9` }
    ],
    answer: t`-1.1\ \ 0.25\ \ 9`,
    whyWrong: {
      '1': t`The first condition is true ($4.4 > 4$), so the block runs.`,
      '2': t`The block also changes z: $|-3| = 3$, then $3 \times 3 = 9$.`,
      '3': t`The second if is false because x is now negative, so x stays $-1.1$.`
    }
  },

  Q_MIAE215_118: {
    steps: [
      { title: 'Trace $i$ (update $i = i + 2$)', math: t`\begin{array}{c|c|l} i & i \le 5? & \text{body} \\ \hline -1 & \text{T} & \text{print } -1 \\ 1 & \text{T} & \text{print } 1 \\ 3 & \text{T} & \text{print } 3,\ i = 7 \\ 9 & \text{F} & \text{exit} \end{array}` },
      { title: 'Why 9?', note: t`The body set $i = 7$, then the update added 2 before the next test.` }
    ],
    answer: t`-1\ \ 1\ \ 3`,
    whyWrong: {
      '1': t`5 is never reached: at $i = 3$ the body jumps $i$ to 7.`,
      '2': t`7 and 9 are never printed: the test $i \le 5$ fails before the body runs again.`,
      '3': t`1 is printed: the loop steps by 2 from $-1$.`
    }
  },

  Q_MIAE215_119: {
    steps: [
      { title: 'First test uses integer division', math: t`z/2 = 3/2 = 1\ (\text{int}) \;\Rightarrow\; 1 > 1 \text{ is false}` },
      { title: 'So the whole block is skipped', note: t`z stays 3, x stays 1.` },
      { title: 'Second test', math: t`x \ge 1 \Rightarrow 1 \ge 1 \text{ true} \Rightarrow x = -1` }
    ],
    answer: t`x = -1,\ y = 2,\ z = 3`,
    whyWrong: {
      '1': t`$3/2$ with ints is 1, not 1.5, so the first block never runs and z is unchanged.`,
      '2': t`Also assumes the block ran; $1 > 1$ is false.`,
      '3': t`The second if does run: $x \ge 1$ is true.`
    }
  },

  Q_MIAE215_120: {
    steps: [
      { title: 'Outer loop runs for $i = 1, 2$', math: t`k1 = 2,\qquad k3 \mathrel{+}= 2` },
      { title: 'Inner loop runs 3 times for each outer pass', math: t`2 \times 3 = 6 \;\Rightarrow\; k2 = 6,\qquad k3 \mathrel{+}= 6` },
      { title: 'Total for k3', math: t`k3 = 2 + 6 = 8` }
    ],
    answer: t`k1 = 2,\ k2 = 6,\ k3 = 8`,
    whyWrong: {
      '1': t`k2 counts the inner body over both outer passes: $2 \times 3 = 6$, not 3.`,
      '2': t`k1 and k2 are swapped: k1 is in the outer loop.`,
      '3': t`k3 is increased in both loops: $2 + 6 = 8$.`
    }
  },

  Q_MIAE215_041: {
    steps: [
      { title: 'Formula for each element', math: t`A[i][j] = 1.0 + i + j` },
      { title: 'Element row 2, column 1', math: t`A[2][1] = 1.0 + 2 + 1 = 4.0` },
      { title: 'Inner-loop executions', math: t`3\ (\text{rows}) \times 3\ (\text{columns}) = 9` }
    ],
    answer: t`A[2][1] = 4.0;\ 9\ \text{times}`,
    whyWrong: {
      '1': t`$1 + 2 + 1 = 4$, and the inner loop runs 3 times per row for 3 rows.`,
      '2': t`The inner body runs for every $(i, j)$ pair, $3 \times 3 = 9$ times, not 3.`,
      '3': t`2.0 would be $A[0][1]$ or $A[1][0]$.`
    }
  },

  Q_MIAE215_073: {
    steps: [
      { title: 'A char stores a small integer code', note: t`Characters are stored as ASCII codes: 'a' is 97.` },
      { title: 'Cast to int', math: t`(\text{int})\ 'a' = 97` }
    ],
    answer: t`z = 97`,
    whyWrong: {
      '1': t`An int cannot hold the character itself; it holds its code.`,
      '2': t`0 would be the null character.`,
      '3': t`1 is not the code of 'a'.`
    }
  },

  Q_MIAE215_034: {
    steps: [
      { title: 'Test the conditions in order', math: t`i == 1\ \text{F} \;\to\; i == 2\ \text{T}` },
      { title: 'A ladder runs only the first true branch', note: t`It prints "i == 2" and jumps past every remaining else if / else.` }
    ],
    answer: t`\text{"i == 2" only}`,
    whyWrong: {
      '1': t`The final else runs only if every condition is false.`,
      '2': t`Only one branch of an if-else ladder can run.`,
      '3': t`$i == 2$ is true, so something prints.`
    }
  },

  Q_MIAE215_036: {
    steps: [
      { title: 'Without braces, if controls only the next statement', note: t`So only cout << "a" belongs to the if; the indentation of cout << "b" means nothing to the compiler.` },
      { title: 'Evaluate', math: t`i > 0\ \text{with}\ i = -1 \;\Rightarrow\; \text{false: skip "a"}` },
      { title: 'Next statement always runs', note: t`Prints "b".` }
    ],
    answer: t`\text{b}`,
    whyWrong: {
      '1': t`"a" needs $i > 0$, which is false.`,
      '2': t`cout << "b" is outside the if, so it always runs.`,
      '3': t`"a" is skipped; only "b" prints.`
    }
  }
};
