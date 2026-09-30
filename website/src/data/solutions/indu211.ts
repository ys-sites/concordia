import { SolutionUpgrade, t } from './types';

// INDU 211 — baby-step solutions for the calculation questions in questionsData.ts
// (teacher decks 2.0–5.0: break-even, facility location, transportation, TSP/VRP).
const PV = t`\begin{array}{l|ccc|c} & \text{S.A.} & \text{Dallas} & \text{Houston} & \text{Cap.} \\ \hline \text{Amarillo} & 31 & 21 & 42 & 400 \\ \text{Waco} & 20 & 21 & 30 & 1000 \\ \text{Huntsville} & 23 & 20 & 15 & 600 \\ \hline \text{Demand} & 300 & 900 & 800 & 2000 \end{array}`;

export const INDU211_SOLUTIONS: Record<string, SolutionUpgrade> = {
  Q_INDU211_005: {
    steps: [
      { title: 'At break-even, revenue equals total cost', math: t`pQ = FC + vQ` },
      { title: 'Collect the $Q$ terms', math: t`(p - v)\,Q = FC` },
      { title: 'Contribution margin per unit', math: t`p - v = 25 - 15 = \$10\ \text{per unit}` },
      { title: 'Divide the fixed cost by the margin', math: t`Q^{*} = \frac{50{,}000}{10} = 5{,}000\ \text{units}` },
      { title: 'Check', note: t`Revenue $= 25 \times 5000 = \$125{,}000$; cost $= 50{,}000 + 15 \times 5000 = \$125{,}000$ ✔` }
    ],
    answer: t`Q^{*} = 5{,}000\ \text{units}`,
    whyWrong: {
      '1': t`2,000 = 50,000 / 25 divides by the price instead of the margin $p - v$. Each unit only contributes \$10 toward fixed cost.`,
      '2': t`3,333 = 50,000 / 15 divides by the variable cost.`,
      '3': t`10,000 does not follow from the formula; at 10,000 units profit is already \$50,000.`
    }
  },

  Q_INDU211_006: {
    steps: [
      { title: 'Write both total-cost lines', math: t`TC_A = 10{,}000 + 8Q, \qquad TC_B = 30{,}000 + 4Q` },
      { title: 'Set them equal', math: t`10{,}000 + 8Q = 30{,}000 + 4Q` },
      { title: 'Move $Q$ terms left, constants right', math: t`8Q - 4Q = 30{,}000 - 10{,}000 \;\Rightarrow\; 4Q = 20{,}000` },
      { title: 'Solve', math: t`Q = 5{,}000\ \text{units}` },
      { title: 'Interpret', note: t`Below 5,000 units choose A (lower fixed cost); above 5,000 choose B (lower variable cost).` }
    ],
    answer: t`Q = 5{,}000\ \text{units}`,
    whyWrong: {
      '1': t`4,000 would need $\Delta FC = 16{,}000$; the fixed-cost difference is $30{,}000 - 10{,}000 = 20{,}000$.`,
      '2': t`7,500 = 30,000 / 4 ignores process A's fixed cost.`,
      '3': t`2,500 = 20,000 / 8 divides by one variable cost instead of the difference $8 - 4 = 4$.`
    }
  },

  Q_INDU211_007: {
    steps: [
      { title: 'Crossover of B and C', math: t`80{,}000 + 4Q = 75{,}000 + 5Q \;\Rightarrow\; Q_{BC} = 5{,}000` },
      { title: 'Crossover of A and B', math: t`110{,}000 + 2Q = 80{,}000 + 4Q \;\Rightarrow\; Q_{AB} = 15{,}000` },
      { title: 'Read the cheapest process on each interval', math: t`\underbrace{0 \to 5{,}000}_{C}\quad\underbrace{5{,}000 \to 15{,}000}_{B}\quad\underbrace{> 15{,}000}_{A}` },
      { title: 'Check at 10,000 units', math: t`TC_A = 130{,}000,\quad TC_B = 120{,}000,\quad TC_C = 125{,}000 \;\Rightarrow\; B\ \checkmark` }
    ],
    answer: t`5{,}000 < Q < 15{,}000`,
    whyWrong: {
      '1': t`Below 5,000 units C is cheapest (smallest fixed cost).`,
      '2': t`Above 15,000 units A is cheapest (smallest variable cost).`,
      '3': t`11,667 is the A–C crossover. It does not matter, because B is cheaper than both there.`
    }
  },

  Q_INDU211_008: {
    steps: [
      { title: 'Cost to buy vs cost to make', math: t`TC_{buy} = 7Q, \qquad TC_{make} = 15{,}000 + 4Q` },
      { title: 'Indifference point', math: t`7Q = 15{,}000 + 4Q \;\Rightarrow\; 3Q = 15{,}000 \;\Rightarrow\; Q = 5{,}000` },
      { title: 'Which side is cheaper to make?', note: t`Making has the smaller slope (\$4 < \$7), so it wins for volumes above 5,000 units.` }
    ],
    answer: t`Q > 5{,}000\ \text{units/year}`,
    whyWrong: {
      '1': t`Below 5,000 units buying is cheaper (no fixed cost).`,
      '2': t`2,143 = 15,000 / 7 divides by the purchase price instead of the saving per unit, $7 - 4 = 3$.`,
      '3': t`At high volume the \$3/unit saving pays back the \$15,000 fixed cost.`
    }
  },

  Q_INDU211_015: {
    steps: [
      { title: 'Rectilinear (city-block) distance', math: t`d = |x_A - x_B| + |y_A - y_B|` },
      { title: 'Substitute', math: t`d = |2 - 8| + |3 - 11| = 6 + 8` },
      { title: 'Add', math: t`d = 14` }
    ],
    answer: t`14`,
    whyWrong: {
      '1': t`10 is the Euclidean distance $\sqrt{6^{2} + 8^{2}}$; a street grid uses rectilinear distance.`,
      '2': t`8 is only the $y$-difference.`,
      '3': t`12 does not come from either metric; recheck $|2 - 8| = 6$ and $|3 - 11| = 8$.`
    }
  },

  Q_INDU211_016: {
    steps: [
      { title: 'Weighted-average formula', math: t`\bar x = \frac{\sum Q_i x_i}{\sum Q_i}` },
      { title: 'Numerator', math: t`100(10) + 200(30) + 100(20) = 1{,}000 + 6{,}000 + 2{,}000 = 9{,}000` },
      { title: 'Denominator', math: t`100 + 200 + 100 = 400` },
      { title: 'Divide', math: t`\bar x = \frac{9{,}000}{400} = 22.5` }
    ],
    answer: t`\bar x = 22.5`,
    whyWrong: {
      '1': t`20.0 is the plain average $(10 + 30 + 20)/3$; the tonnages must weight each location.`,
      '2': t`25.0 over-weights the 200-ton store; recheck the numerator.`,
      '3': t`18.5 does not follow from the weighted average; the heavy store at $x = 30$ pulls $\bar x$ above 20.`
    }
  },

  Q_INDU211_017: {
    steps: [
      { title: 'Total weight', math: t`\sum Q_i = 800 + 900 + 200 + 100 = 2{,}000` },
      { title: 'Weighted $x$', math: t`\sum Q_i x_i = 800(2) + 900(3) + 200(5) + 100(8) = 6{,}100 \;\Rightarrow\; \bar x = \frac{6{,}100}{2{,}000} = 3.05` },
      { title: 'Weighted $y$', math: t`\sum Q_i y_i = 800(2) + 900(5) + 200(4) + 100(5) = 7{,}400 \;\Rightarrow\; \bar y = \frac{7{,}400}{2{,}000} = 3.70` }
    ],
    answer: t`(\bar x, \bar y) = (3.05,\ 3.70)`,
    whyWrong: {
      '1': t`(4.50, 4.00) is the unweighted average; the heavy destinations D1 and D2 pull the centre toward them.`,
      '2': t`The coordinates are swapped: $\bar x$ uses the $x$-values.`,
      '3': t`Unweighted and swapped.`
    }
  },

  Q_INDU211_018: {
    steps: [
      { title: 'Cost table', math: PV },
      { title: 'Cheapest cell: Huntsville → Houston at \\$15', math: t`\min(600, 800) = 600 \;\Rightarrow\; \text{Huntsville done, Houston needs }200` },
      { title: 'Next cheapest: Waco → San Antonio at \\$20', math: t`\min(1000, 300) = 300 \;\Rightarrow\; \text{S.A. done, Waco has }700` },
      { title: '\\$21 tie: Amarillo → Dallas first (as stated)', math: t`\min(400, 900) = 400 \;\Rightarrow\; \text{Amarillo done, Dallas needs }500` },
      { title: 'Then Waco → Dallas at \\$21', math: t`\min(700, 500) = 500 \;\Rightarrow\; \text{Dallas done, Waco has }200` },
      { title: 'Remaining: Waco → Houston at \\$30', math: t`200\ \text{units}` },
      { title: 'Total cost', math: t`600(15) + 300(20) + 400(21) + 500(21) + 200(30) = 9{,}000 + 6{,}000 + 8{,}400 + 10{,}500 + 6{,}000 = \$39{,}900` }
    ],
    answer: t`\$39{,}900`,
    whyWrong: {
      '1': t`\$42,300 breaks the \$21 tie the other way (Waco → Dallas 700 first), which forces Amarillo to ship 200 to Houston at \$42.`,
      '2': t`\$36,000 is lower than any allocation that meets every row and column total; check that all 2,000 units are shipped.`,
      '3': t`\$45,600 skips a cheaper cell; always take the lowest remaining cost next.`
    }
  },

  Q_INDU211_028: {
    steps: [
      { title: 'Start at A; nearest unvisited is E', math: t`A \to E = 6` },
      { title: 'From E: B and G tie at 9; take B as stated', math: t`E \to B = 9` },
      { title: 'From B: nearest unvisited is D', math: t`B \to D = 9` },
      { title: 'From D: nearest is C', math: t`D \to C = 1` },
      { title: 'From C: nearest unvisited is F', math: t`C \to F = 9` },
      { title: 'Only G is left, then return to A', math: t`F \to G = 21, \qquad G \to A = 9` },
      { title: 'Total', math: t`6 + 9 + 9 + 1 + 9 + 21 + 9 = 64` }
    ],
    answer: t`64`,
    whyWrong: {
      '1': t`60 is the optimal tour. Nearest Neighbor is a heuristic and misses it here.`,
      '2': t`69 results from choosing G at the E-tie (A–E–G–B–D–C–F–A).`,
      '3': t`55 is below the optimum of 60, so no valid tour can have it.`
    }
  },

  Q_INDU211_029: {
    steps: [
      { title: 'Separate round trips', math: t`2d_{AC} + 2d_{AD} = 2(21) + 2(20) = 82` },
      { title: 'Combined route A–C–D–A', math: t`d_{AC} + d_{CD} + d_{DA} = 21 + 1 + 20 = 42` },
      { title: 'Saving', math: t`s_{CD} = d_{AC} + d_{AD} - d_{CD} = 21 + 20 - 1 = 40` }
    ],
    answer: t`s_{CD} = 40`,
    whyWrong: {
      '1': t`41 adds the two depot distances but forgets to subtract $d_{CD} = 1$.`,
      '2': t`1 is the C–D distance itself, not the saving.`,
      '3': t`82 is the cost of the two separate round trips.`
    }
  },

  Q_INDU211_030: {
    steps: [
      { title: 'Current route load', math: t`F + C + D = 6{,}000 + 7{,}000 + 10{,}000 = 23{,}000` },
      { title: 'Load if B is added', math: t`23{,}000 + 5{,}000 = 28{,}000` },
      { title: 'Capacity check', math: t`28{,}000 > 25{,}000 \;\Rightarrow\; \text{reject } B\text{–}F` },
      { title: 'Continue down the savings list', note: t`Clark-Wright skips infeasible links and tries the next saving. The final routes are Depot–F–C–D and Depot–E–B–G (19,000 units), total distance 89.` }
    ]
  },

  Q_INDU211_066: {
    steps: [
      { title: 'Margin per unit', math: t`p - v = 200 - 100 = \$100` },
      { title: 'Break-even volume', math: t`Q^{*} = \frac{28{,}000}{100} = 280\ \text{units}` }
    ],
    answer: t`280\ \text{units}`,
    whyWrong: {
      '1': t`140 = 28,000 / 200 divides by the price, not the margin.`,
      '2': t`28 is off by a factor of 10; recheck $28{,}000 / 100$.`,
      '3': t`560 would double-count the margin.`
    }
  },

  Q_INDU211_068: {
    steps: [
      { title: 'Total cost of each at $Q = 10{,}000$', math: t`\begin{aligned} TC_A &= 110{,}000 + 2(10{,}000) = 130{,}000 \\ TC_B &= 80{,}000 + 4(10{,}000) = 120{,}000 \\ TC_C &= 75{,}000 + 5(10{,}000) = 125{,}000 \end{aligned}` },
      { title: 'Pick the smallest', note: t`B at \$120,000.` }
    ],
    answer: t`B,\ \$120{,}000`,
    whyWrong: {
      '1': t`A has the lowest variable cost, but its large fixed cost only pays off above 15,000 units.`,
      '2': t`C has the lowest fixed cost, but at 10,000 units its \$5/unit makes it \$5,000 dearer than B.`,
      '3': t`The totals differ: 130,000, 120,000 and 125,000.`
    }
  },

  Q_INDU211_069: {
    steps: [
      { title: 'Total cost of B at 10,000 units', math: t`TC_B = 70{,}000 + 5(10{,}000) = 120{,}000` },
      { title: 'Break-even price is total cost per unit', math: t`p_{min} = \frac{120{,}000}{10{,}000} = \$12\ \text{per unit}` }
    ],
    answer: t`p \ge \$12`,
    whyWrong: {
      '1': t`B's variable cost is \$5; the \$12 includes \$7 of fixed cost per unit.`,
      '2': t`$70{,}000 / 12 \neq 10{,}000$; the fixed cost is spread over the volume, not divided by the price.`,
      '3': t`The \$12 comes from process B's own costs.`
    }
  },

  Q_INDU211_086: {
    steps: [
      { title: 'Euclidean distance', math: t`d = \sqrt{(x_A - x_B)^{2} + (y_A - y_B)^{2}}` },
      { title: 'Substitute', math: t`d = \sqrt{(2 - 8)^{2} + (3 - 11)^{2}} = \sqrt{36 + 64}` },
      { title: 'Evaluate', math: t`d = \sqrt{100} = 10` }
    ],
    answer: t`10`,
    whyWrong: {
      '1': t`14 is the rectilinear distance $6 + 8$.`,
      '2': t`8 is only the $y$-difference.`,
      '3': t`6 is only the $x$-difference.`
    }
  },

  Q_INDU211_092: {
    steps: [
      { title: 'Equal weights: plain average of $x$', math: t`\bar x = \frac{2 + 3 + 5 + 8}{4} = \frac{18}{4} = 4.5` },
      { title: 'Plain average of $y$', math: t`\bar y = \frac{2 + 5 + 4 + 5}{4} = \frac{16}{4} = 4.0` }
    ],
    answer: t`(4.5,\ 4.0)`,
    whyWrong: {
      '1': t`(3.05, 3.70) is the weighted answer for unequal shipments (800, 900, 200, 100).`,
      '2': t`$x$ and $y$ are swapped.`,
      '3': t`5.0 is not the mean of 2, 3, 5 and 8.`
    }
  },

  Q_INDU211_116: {
    steps: [
      { title: 'Excess distance', math: t`64 - 60 = 4` },
      { title: 'Relative to the optimum', math: t`\frac{4}{60} = 0.0667 = 6.7\%` }
    ],
    answer: t`\approx 6.7\%`,
    whyWrong: {
      '1': t`4% treats the 4-unit excess as a percentage directly; divide by the optimum 60.`,
      '2': t`10% overstates it; $4/60 \approx 0.067$.`,
      '3': t`The heuristic route (64) is longer than the optimum (60).`
    }
  },

  Q_INDU211_117: {
    steps: [
      { title: 'Follow the tie to G instead', math: t`A \xrightarrow{6} E \xrightarrow{9} G \xrightarrow{11} B \xrightarrow{9} D \xrightarrow{1} C \xrightarrow{9} F \xrightarrow{24} A` },
      { title: 'Add the legs', math: t`6 + 9 + 11 + 9 + 1 + 9 + 24 = 69` }
    ],
    answer: t`69`,
    whyWrong: {
      '1': t`64 is the route when the tie goes to B.`,
      '2': t`60 is the optimal route.`,
      '3': t`72 double-counts a leg; there are exactly 7 legs.`
    }
  },

  Q_INDU211_118: {
    steps: [
      { title: 'Savings formula', math: t`s_{CF} = d_{AC} + d_{AF} - d_{CF}` },
      { title: 'Substitute', math: t`s_{CF} = 21 + 24 - 9 = 36` }
    ],
    answer: t`36`,
    whyWrong: {
      '1': t`45 forgets to subtract $d_{CF} = 9$.`,
      '2': t`9 is the C–F distance itself.`,
      '3': t`30 subtracts the wrong distance; use $d_{CF}$ from row C, column F.`
    }
  },

  Q_INDU211_120: {
    steps: [
      { title: 'Route 1: Depot–F–C–D–Depot', math: t`24 + 9 + 1 + 20 = 54` },
      { title: 'Route 2: Depot–E–B–G–Depot', math: t`6 + 9 + 11 + 9 = 35` },
      { title: 'Total', math: t`54 + 35 = 89\ \ (\times 100 = 8{,}900\ \text{miles})` }
    ],
    answer: t`89`,
    whyWrong: {
      '1': t`60 is the single-truck optimal TSP tour from Example 1, which ignores capacity.`,
      '2': t`64 is the Nearest Neighbor TSP tour.`,
      '3': t`120 does not come from these routes; add each leg of both routes.`
    }
  },

  Q_INDU211_121: {
    steps: [
      { title: 'Add the demands on the route', math: t`E + B + G = 4{,}000 + 5{,}000 + 10{,}000 = 19{,}000` },
      { title: 'Capacity check', math: t`19{,}000 \le 25{,}000\ \checkmark` }
    ],
    answer: t`19{,}000\ \text{units}`,
    whyWrong: {
      '1': t`23,000 is the other route (F + C + D).`,
      '2': t`25,000 is the truck capacity, not the load.`,
      '3': t`15,000 leaves out one customer.`
    }
  },

  Q_INDU211_122: {
    steps: [
      { title: 'Divide total demand by capacity', math: t`\frac{42{,}000}{25{,}000} = 1.68` },
      { title: 'Round up (trucks are whole)', math: t`\lceil 1.68 \rceil = 2` }
    ],
    answer: t`2`,
    whyWrong: {
      '1': t`One truck carries only 25,000 of the 42,000 units.`,
      '2': t`Three would work but is not the minimum.`,
      '3': t`6 is one truck per customer, ignoring that loads can be combined.`
    }
  }
};
