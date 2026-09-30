import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

// INDU 211 — questions for teacher decks 6.0–13 (Chapters 7, 14, 15, 8, 6 & 11, 17), reinforced with
// the matching textbook chapters, plus past-paper practice (2019 midterm sample, Fall 2020 final).
const D7a = '6.0.INDU_211_CH7-1_2025.pdf';
const D7b = '7.0.INDU_211_CH7_2_2025-F.pdf';
const D7c = '8.0.INDU_211_CH7_3_2025F.pdf';
const D14 = '9.0.INDU_211_CH14_2025.pdf';
const D15 = '10.INDU_211_CH15_2025.pdf';
const D8 = '11.INDU_211_CH8_2025.pdf';
const D611 = '12.INDU_211_CH6and11_2025.pdf';
const D17 = '13.INDU_211_CH17_2025.pdf';
const D4a = '3.0.INDU_211_CH4_1-2025.pdf';
const D4b = '4.0.INDU_211_CH4_2_2025.pdf';
const D5 = '5.0.INDU_211_CH5_2025.pdf';
const D12 = '1.0.INDU_211_CH12_2025.pdf';
const TB = 'Turner, Mize, Case & Nazemetz (3rd Ed.) — Introduction to Industrial and Systems Engineering';
const C4 = 'Chapter 4 — Facilities Location & Layout';
const C5 = 'Chapter 5 — Material Handling & Routing';
const C7 = 'Chapter 7 — Operations Planning & Control';
const C14 = 'Chapter 14 — Deterministic Operations Research';
const C15 = 'Chapter 15 — Probabilistic Models (Queuing)';
const C8 = 'Chapter 8 — Quality Control';
const C611 = 'Chapters 6 & 11 — Work Design & Human Factors';
const C17 = 'Chapter 17 — Project Management';
const src = (deck: string, chapter: string, location: string): QuestionSource[] => [{ deck, chapter, location }];
const q = (p: Omit<PracticeQuestion, 'courseId'>): PracticeQuestion => ({ courseId: 'INDU211', ...p });

export const INDU211_EXTRA: PracticeQuestion[] = [
  // ============================================================ Chapter 7
  q({
    id: 'Q_INDU211_C701',
    chapter: 'ch7',
    topic: 'EOQ (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`Company ABC: $D = 10{,}000$ widgets/year, ordering cost $PC = \$5.50$/order, carrying cost $CC = \$0.40$/widget/year. What is the economic order quantity?`,
    options: [t`$\approx 525$ units`, t`$\approx 371$ units`, t`$\approx 275{,}000$ units`, t`$400$ units`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`EOQ balances annual ordering cost $(D/Q)PC$ against annual carrying cost $(Q/2)CC$: $\;Q^{*} = \sqrt{\dfrac{2\,D\,PC}{CC}}$.`,
      stepByStep: [],
      steps: [
        { title: 'Total annual stocking cost', math: t`TC(Q) = \frac{Q}{2}CC + \frac{D}{Q}PC` },
        { title: 'Set the derivative to zero', math: t`\frac{dTC}{dQ} = \frac{CC}{2} - \frac{D\,PC}{Q^{2}} = 0 \;\Rightarrow\; Q^{2} = \frac{2D\,PC}{CC}` },
        { title: 'Substitute', math: t`Q^{*} = \sqrt{\frac{2(10{,}000)(5.50)}{0.40}} = \sqrt{275{,}000}` },
        { title: 'Evaluate and round up to whole units', math: t`Q^{*} \approx 524.4 \;\Rightarrow\; 525\ \text{units}` }
      ],
      answer: t`Q^{*} \approx 525`,
      whyWrong: {
        '1': t`371 drops the factor 2 under the root: $\sqrt{10{,}000 \times 5.5 / 0.4}$.`,
        '2': t`275,000 is the value under the square root; the root was not taken.`,
        '3': t`400 is ABC's current rule-of-thumb order size, not the optimum.`
      },
      commonTrap: t`Putting $CC$ in the numerator. Higher carrying cost should make orders smaller, so it belongs in the denominator.`,
      reference: `${D7a} · Pages 18–21`
    },
    source: src(D7a, C7, 'Pages 18–21 (EOQ derivation and example)')
  }),
  q({
    id: 'Q_INDU211_C702',
    chapter: 'ch7',
    topic: 'EOQ vs Current Policy',
    difficulty: 'Midterm Level',
    question: t`For ABC ($D = 10{,}000$, $PC = \$5.50$, $CC = \$0.40$), what is the annual stocking cost at the current order size $Q = 400$, and at the EOQ $Q = 525$?`,
    options: [t`\$217.50 at 400; \$209.76 at 525`, t`\$160.00 at 400; \$210.00 at 525`, t`\$137.50 at 400; \$104.76 at 525`, t`Both cost the same`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`At the EOQ the ordering and carrying costs are (almost exactly) equal, and their sum is the minimum.`,
      stepByStep: [],
      steps: [
        { title: 'At $Q = 400$: 25 orders a year', math: t`TC = \frac{400}{2}(0.40) + \frac{10{,}000}{400}(5.50) = 80 + 137.50 = \$217.50` },
        { title: 'At $Q = 525$', math: t`TC = \frac{525}{2}(0.40) + \frac{10{,}000}{525}(5.50) = 105 + 104.76 = \$209.76` },
        { title: 'Saving', math: t`217.50 - 209.76 \approx \$7.74\ \text{per year}` },
        { title: 'Observe', note: t`At the EOQ, carrying (\$105) ≈ ordering (\$104.76). (The slide rounds to 19 orders, giving \$209.50.)` }
      ],
      answer: t`\$217.50 \to \$209.76`,
      whyWrong: {
        '1': t`\$160 uses $Q \times CC$ for carrying cost; average inventory is $Q/2$, not $Q$.`,
        '2': t`These are only the ordering-cost parts; add the carrying cost $(Q/2)CC$.`,
        '3': t`The costs differ; the EOQ is lower by about \$7.74/year.`
      },
      commonTrap: t`Using $Q$ instead of $Q/2$ as average inventory. With instant replenishment the stock falls linearly from $Q$ to 0.`,
      reference: `${D7a} · Pages 21–22`
    },
    source: src(D7a, C7, 'Pages 21–22 (EOQ example)')
  }),
  q({
    id: 'Q_INDU211_C703',
    chapter: 'ch7',
    topic: 'EOQ Assumptions',
    difficulty: 'Foundation',
    question: t`Which is NOT an assumption of the basic EOQ model?`,
    options: [
      t`Quantity discounts are available for large orders`,
      t`Demand occurs at a known, uniform rate`,
      t`Orders are received all at once (instantaneously)`,
      t`Average inventory is $Q/2$ (no safety stock)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Basic EOQ assumes a fixed acquisition cost (no discounts), constant known demand, instantaneous receipt and no stock-outs.`,
      stepByStep: [],
      steps: [
        { title: 'Slide 18 assumptions', note: t`Known $D$, $CC$, $PC$; average inventory $Q/2$; orders received all at once; uniform demand; no inventory when an order arrives; fixed acquisition cost (no quantity discounts).` },
        { title: 'Model variations (slide 23)', note: t`Stock-outs, quantity discounts and demand variation require revised models.` }
      ],
      whyWrong: {
        '1': t`Uniform, known demand is a core EOQ assumption.`,
        '2': t`Instantaneous receipt is assumed (zero lead-time build-up).`,
        '3': t`$Q/2$ average inventory follows from the saw-tooth pattern with no safety stock.`
      },
      commonTrap: t`Thinking EOQ minimises purchase price. It only balances ordering and carrying costs.`,
      reference: `${D7a} · Pages 16–18, 23`
    },
    source: src(D7a, C7, 'Pages 16–18 and 23 (assumptions and variations)')
  }),
  q({
    id: 'Q_INDU211_C704',
    chapter: 'ch7',
    topic: 'Independent vs Dependent Demand',
    difficulty: 'Foundation',
    question: t`A car plant sells finished cars and buys tires. Which statement is correct?`,
    options: [
      t`Cars have independent demand; tires used on the line have dependent demand`,
      t`Both have independent demand`,
      t`Cars have dependent demand; tires have independent demand`,
      t`Both have dependent demand`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Independent demand comes from the market (end items, forecast). Dependent demand is calculated from the end-item schedule through the bill of materials (MRP).`,
      stepByStep: [],
      steps: [
        { title: 'End item', note: t`Customer orders for cars do not depend on any other item: independent (forecast, EOQ).` },
        { title: 'Component', note: t`Once we plan 1,000 cars, we need exactly 5,000 tires (4 + spare): dependent (MRP).` }
      ],
      whyWrong: {
        '1': t`Tire demand follows directly from the car schedule, so it is dependent.`,
        '2': t`Reversed.`,
        '3': t`The end item's demand comes from customers, so it is independent.`
      },
      commonTrap: t`Forecasting components separately. Dependent demand should be computed, not forecast.`,
      reference: `${D7a} · Pages 13–14`
    },
    source: src(D7a, C7, 'Pages 13–14 (inventory systems)')
  }),
  q({
    id: 'Q_INDU211_C705',
    chapter: 'ch7',
    topic: 'Level vs Chase Planning',
    difficulty: 'Foundation',
    question: t`Which describes a "chase" aggregate plan?`,
    options: [
      t`Match output to demand period by period, which means frequent hiring/firing and training cost`,
      t`Keep a level workforce and steady output, absorbing swings with inventory`,
      t`Always produce at maximum capacity`,
      t`Stop production whenever demand is low and never hold inventory`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Level plan: steady output, inventory absorbs demand swings (high initial inventory, carrying cost). Chase plan: output follows demand (less inventory, hiring/firing cost).`,
      stepByStep: [],
      steps: [
        { title: 'Level (Plan 1)', note: t`Constant workforce; overtime or idle time; inventory carrying cost.` },
        { title: 'Chase (Plan 2)', note: t`Match demand each period; frequent hiring and firing; high training cost; less inventory.` },
        { title: 'Constraint for both', note: t`Cumulative production must cover cumulative demand in every period.` }
      ],
      whyWrong: {
        '1': t`That is the level strategy.`,
        '2': t`Producing at full capacity ignores demand and builds excess inventory.`,
        '3': t`Chase still produces to meet each period's demand.`
      },
      commonTrap: t`Thinking one strategy is always best. Most plants combine them.`,
      reference: `${D7a} · Pages 6–7`
    },
    source: src(D7a, C7, 'Pages 6–7 (planning strategies)')
  }),
  q({
    id: 'Q_INDU211_C706',
    chapter: 'ch7',
    topic: 'MRP Netting (Lecture Example 1)',
    difficulty: 'Midterm Level',
    question: t`200 units of P1 are needed in week 17. Each P1 needs 1 SA2 and each SA2 needs 16 C5. There are 716 C5 on hand and C5 has a 2-week lead time. What planned-order release does MRP give for C5?`,
    options: [t`2,484 units released in week 12`, t`3,200 units released in week 14`, t`2,484 units released in week 14`, t`3,916 units released in week 12`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`MRP explodes gross requirements through the BOM, nets them against inventory, then offsets the release by the lead time.`,
      stepByStep: [],
      steps: [
        { title: 'P1 (LT 1): release 200 in week 16', note: t`So SA2 is needed in week 16.` },
        { title: 'SA2 (LT 2): released in week 14', note: t`So C5 is needed (gross requirement) in week 14.` },
        { title: 'Gross requirement for C5', math: t`200 \times 1 \times 16 = 3{,}200\ \text{in week }14` },
        { title: 'Net requirement', math: t`3{,}200 - 716 = 2{,}484` },
        { title: 'Offset by the 2-week lead time', math: t`\text{release } 2{,}484 \text{ in week } 14 - 2 = 12` }
      ],
      answer: t`2{,}484 \text{ in week } 12`,
      whyWrong: {
        '1': t`3,200 is the gross requirement; MRP subtracts the 716 on hand. Week 14 is when it is needed, not when it is ordered.`,
        '2': t`The quantity is right, but a planned-order release must be offset by the lead time: week 14 − 2 = 12.`,
        '3': t`3,916 adds the inventory instead of subtracting it.`
      },
      commonTrap: t`Forgetting either the netting step or the lead-time offset.`,
      reference: `${D7b} · Pages 7–8`
    },
    source: src(D7b, C7, 'Pages 7–8 (MRP Example 1)')
  }),
  q({
    id: 'Q_INDU211_C707',
    chapter: 'ch7',
    topic: 'MRP with Lot Sizes (Shutters)',
    difficulty: 'Exam Master',
    question: t`Shutter example: frames (2 per shutter, lead time 2 weeks, lots of 320). Shutters need 200 frames in week 3 and 300 in week 7, with no frames on hand. When and how many frames are released?`,
    options: [
      t`320 in week 1 and 320 in week 5`,
      t`200 in week 1 and 300 in week 5`,
      t`320 in week 3 and 320 in week 7`,
      t`640 in week 1`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`With a fixed lot size, order whole lots to cover the net requirement, carry the leftover forward as projected on-hand, and offset each receipt by the lead time.`,
      stepByStep: [],
      steps: [
        { title: 'Week 3: net requirement', math: t`200 - 0 = 200 \;\Rightarrow\; \text{receive one lot of } 320` },
        { title: 'Left over after week 3', math: t`320 - 200 = 120\ \text{on hand}` },
        { title: 'Week 7: net requirement', math: t`300 - 120 = 180 \;\Rightarrow\; \text{receive one lot of } 320,\ \text{leaving } 140` },
        { title: 'Offset receipts by LT = 2', math: t`\text{release in week } 3 - 2 = 1 \text{ and week } 7 - 2 = 5` }
      ],
      answer: t`320\ (\text{wk }1),\ 320\ (\text{wk }5)`,
      whyWrong: {
        '1': t`This is lot-for-lot; frames must be ordered in lots of 320.`,
        '2': t`These are the receipt weeks; releases happen 2 weeks earlier.`,
        '3': t`One big lot ignores the timing: MRP orders when each requirement appears.`
      },
      commonTrap: t`Forgetting that the 120 left over from the first lot reduces the second net requirement.`,
      reference: `${D7b} · Pages 9–10`
    },
    source: src(D7b, C7, 'Pages 9–10 (MRP Example 2: shutters)')
  }),
  q({
    id: 'Q_INDU211_C708',
    chapter: 'ch7',
    topic: 'MRP → MRP II → ERP',
    difficulty: 'Foundation',
    question: t`What distinguishes ERP from MRP II?`,
    options: [
      t`ERP ties customer orders to enterprise-wide resources and suppliers in a single integrated database`,
      t`ERP only computes component requirements from a master schedule`,
      t`ERP removes the need for a bill of materials`,
      t`ERP is a manual paper-based system`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`MRP → closed-loop MRP (feedback) → MRP II (integrates marketing, finance, purchasing, what-if simulation) → ERP (whole enterprise and supply chain in one system).`,
      stepByStep: [],
      steps: [
        { title: 'MRP', note: t`Component requirements from the master schedule, BOM and inventory records.` },
        { title: 'MRP II', note: t`Adds integration with finance and marketing, capacity checks, what-if analysis.` },
        { title: 'ERP', note: t`An MRP II system extended to the whole enterprise and its suppliers, with one database and interface.` }
      ],
      whyWrong: {
        '1': t`That is plain MRP.`,
        '2': t`ERP still needs the product structure (BOM).`,
        '3': t`ERP replaces paper and separate systems with one integrated system.`
      },
      commonTrap: t`Reading "ERP" as something unrelated to manufacturing; the 2020 final defined it as an extended MRP II system.`,
      reference: `${D7b} · Pages 11–17`
    },
    source: src(D7b, C7, 'Pages 11–17 (evolution of planning systems)')
  }),
  q({
    id: 'Q_INDU211_C709',
    chapter: 'ch7',
    topic: 'Push vs Pull (JIT)',
    difficulty: 'Foundation',
    question: t`In a Just-in-Time system with Kanban:`,
    options: [
      t`Material is pulled to a workstation when it is needed, authorised by a signal from downstream`,
      t`Material is pushed downstream regardless of whether the next station is ready`,
      t`Large buffers of inventory hide problems so the line never stops`,
      t`Production is scheduled only by a central MRP computer`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`JIT is a pull philosophy: consumption downstream triggers replenishment upstream (Kanban card, flag or signal), keeping inventory low and exposing problems.`,
      stepByStep: [],
      steps: [
        { title: 'Push', note: t`Work is released according to a plan (e.g. MRP), whether or not the next resource is free.` },
        { title: 'Pull', note: t`A station produces only when the downstream station signals it has consumed material.` },
        { title: 'Effect', note: t`Low inventory exposes variability and bottlenecks so they get fixed.` }
      ],
      whyWrong: {
        '1': t`That describes a push system.`,
        '2': t`JIT deliberately reduces inventory to reveal problems.`,
        '3': t`MRP is top-down planning; Kanban is bottom-up control.`
      },
      commonTrap: t`Thinking JIT means "no inventory at all". It means only the minimum needed.`,
      reference: `${D7b} · Pages 23–31`
    },
    source: src(D7b, C7, 'Pages 23–31 (JIT, push vs pull, Kanban)')
  }),
  q({
    id: 'Q_INDU211_C710',
    chapter: 'ch7',
    topic: 'Lean: Types of Waste',
    difficulty: 'Foundation',
    question: t`Which of the following is NOT one of the seven types of waste (muda) listed in the lecture?`,
    options: [t`Preventive maintenance`, t`Overproduction`, t`Unnecessary motion`, t`Waiting`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Waste is anything beyond the minimum equipment, material, space and time that adds value.`,
      stepByStep: [],
      steps: [
        { title: 'The seven wastes', note: t`Overproduction, waiting, transportation, inefficient processing, inventory, unnecessary motion, product defects.` },
        { title: 'Preventive maintenance', note: t`It is a JIT success factor (slide 27), not a waste.` }
      ],
      whyWrong: {
        '1': t`Overproduction is the first waste on the list.`,
        '2': t`Unnecessary motion is a waste.`,
        '3': t`Waiting is a waste.`
      },
      commonTrap: t`Counting inventory as an asset only. In lean thinking excess inventory is waste.`,
      reference: `${D7b} · Pages 21–22, 27`
    },
    source: src(D7b, C7, 'Pages 21–22 and 27')
  }),
  q({
    id: 'Q_INDU211_C711',
    chapter: 'ch7',
    topic: 'Moving Average Forecast',
    difficulty: 'Foundation',
    question: t`Demand for product A in periods 1–5 was 42, 40, 43, 40, 41. What is the 3-period moving-average forecast for period 6?`,
    options: [t`$\approx 41.3$`, t`$41.2$`, t`$41.7$`, t`$40.0$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\hat x_t = \dfrac{1}{n}\sum_{i=1}^{n} x_{t-i}$: the average of the last $n$ actual values.`,
      stepByStep: [],
      steps: [
        { title: 'Take the last 3 actuals (periods 3, 4, 5)', math: t`43,\ 40,\ 41` },
        { title: 'Average them', math: t`\hat x_6 = \frac{43 + 40 + 41}{3} = \frac{124}{3} \approx 41.3` }
      ],
      answer: t`\hat x_6 \approx 41.3`,
      whyWrong: {
        '1': t`41.2 averages all five periods; a 3-period MA uses only the most recent three.`,
        '2': t`41.7 averages periods 1–3 (42, 40, 43), the oldest data.`,
        '3': t`40 is just the period-4 value.`
      },
      commonTrap: t`Using the oldest periods instead of the most recent ones.`,
      reference: `${D7c} · Pages 8–9`
    },
    source: src(D7c, C7, 'Pages 8–9 (simple moving average)')
  }),
  q({
    id: 'Q_INDU211_C712',
    chapter: 'ch7',
    topic: 'Exponential Smoothing (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`Complaints in periods 1–5: 60, 65, 55, 58, 64. With $\alpha = 0.40$ and the first forecast equal to 60, what is the forecast for period 6?`,
    options: [t`$\approx 60.83$`, t`$\approx 58.72$`, t`$\approx 61.94$`, t`$60.40$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\hat x_t = \hat x_{t-1} + \alpha\,(x_{t-1} - \hat x_{t-1})$: new forecast = old forecast + α × (last error).`,
      stepByStep: [],
      steps: [
        { title: 'Period 2', math: t`\hat x_2 = 60` },
        { title: 'Period 3', math: t`\hat x_3 = 60 + 0.4(65 - 60) = 62` },
        { title: 'Period 4', math: t`\hat x_4 = 62 + 0.4(55 - 62) = 59.2` },
        { title: 'Period 5', math: t`\hat x_5 = 59.2 + 0.4(58 - 59.2) = 58.72` },
        { title: 'Period 6', math: t`\hat x_6 = 58.72 + 0.4(64 - 58.72) = 60.83` }
      ],
      answer: t`\hat x_6 \approx 60.83`,
      whyWrong: {
        '1': t`58.72 is the forecast for period 5; one more update with the actual 64 is needed.`,
        '2': t`61.94 uses $\alpha = 0.6$ on the error ($58.72 + 0.6 \times 5.28$).`,
        '3': t`60.40 applies one update to the first forecast only.`
      },
      commonTrap: t`Swapping α and 1 − α: α multiplies the error (actual − forecast).`,
      reference: `${D7c} · Pages 10–11`
    },
    source: src(D7c, C7, 'Pages 10–11 (exponentially weighted moving average)')
  }),
  q({
    id: 'Q_INDU211_C713',
    chapter: 'ch7',
    topic: 'Linear Regression Forecast',
    difficulty: 'Exam Master',
    question: t`Sales for weeks $t = 1$–5 are 150, 157, 162, 166, 177 ($\sum t = 15$, $\sum t^{2} = 55$, $\sum x = 812$, $\sum tx = 2499$). Using $x_t = a + bt$, forecast week 6.`,
    options: [t`$\approx 181.3$`, t`$\approx 149.8$`, t`$\approx 183.0$`, t`$\approx 200.2$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Least squares: $b = \dfrac{n\sum tx - \sum t\sum x}{n\sum t^{2} - (\sum t)^{2}}$, $\;a = \dfrac{\sum x - b\sum t}{n}$.`,
      stepByStep: [],
      steps: [
        { title: 'Slope', math: t`b = \frac{5(2499) - 15(812)}{5(55) - 15^{2}} = \frac{12{,}495 - 12{,}180}{275 - 225} = \frac{315}{50} = 6.3` },
        { title: 'Intercept', math: t`a = \frac{812 - 6.3(15)}{5} = \frac{717.5}{5} = 143.5` },
        { title: 'Trend line', math: t`x_t = 143.5 + 6.3\,t` },
        { title: 'Week 6', math: t`x_6 = 143.5 + 6.3(6) = 181.3` }
      ],
      answer: t`x_6 \approx 181.3`,
      whyWrong: {
        '1': t`149.8 is the line evaluated at $t = 1$, not $t = 6$.`,
        '2': t`183.0 extends the last jump (+11) instead of using the fitted trend.`,
        '3': t`200.2 takes the intercept as the mean sales $\bar x = 162.4$; the intercept is $a = (\sum x - b\sum t)/n = 143.5$.`
      },
      commonTrap: t`Confusing $\sum t^{2} = 55$ with $(\sum t)^{2} = 225$.`,
      reference: `${D7c} · Pages 13–17`
    },
    source: src(D7c, C7, 'Pages 13–17 (linear regression)')
  }),

  // ============================================================ Chapter 14
  q({
    id: 'Q_INDU211_C1401',
    chapter: 'ch14',
    topic: 'LP Formulation (Lawn Grow)',
    difficulty: 'Foundation',
    question: t`Lawn Grow makes Max ($X_1$, profit \$400) and Multimax ($X_2$, \$800). Fabrication: 3 h and 5 h per unit, 5,000 h available; assembly: 1 h and 4 h, 3,000 h available. Which is the correct LP?`,
    options: [
      t`$\max Z = 400X_1 + 800X_2$ s.t. $3X_1 + 5X_2 \le 5000$, $X_1 + 4X_2 \le 3000$, $X_1, X_2 \ge 0$`,
      t`$\max Z = 400X_1 + 800X_2$ s.t. $3X_1 + X_2 \le 5000$, $5X_1 + 4X_2 \le 3000$`,
      t`$\min Z = 400X_1 + 800X_2$ s.t. $3X_1 + 5X_2 \ge 5000$, $X_1 + 4X_2 \ge 3000$`,
      t`$\max Z = 3X_1 + 5X_2$ s.t. $400X_1 + 800X_2 \le 5000$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`An LP has decision variables, a linear objective, linear resource constraints ($\le$ available capacity) and non-negativity.`,
      stepByStep: [],
      steps: [
        { title: 'Decision variables', note: t`$X_1$ = Max units per month, $X_2$ = Multimax units per month.` },
        { title: 'Objective (profit)', math: t`\max Z = 400X_1 + 800X_2` },
        { title: 'One constraint per resource (row = resource)', math: t`\begin{aligned} 3X_1 + 5X_2 &\le 5000 \quad (\text{fab}) \\ X_1 + 4X_2 &\le 3000 \quad (\text{assembly}) \\ X_1, X_2 &\ge 0 \end{aligned}` }
      ],
      whyWrong: {
        '1': t`Coefficients were read down the columns: each constraint must use one resource's hours for both products.`,
        '2': t`Profit is maximised, and hours used cannot exceed the hours available ($\le$, not $\ge$).`,
        '3': t`Profits and hours are swapped.`
      },
      commonTrap: t`Forgetting the non-negativity constraints.`,
      reference: `${D14} · Pages 9–13`
    },
    source: src(D14, C14, 'Pages 9–13 (product mix example)')
  }),
  q({
    id: 'Q_INDU211_C1402',
    chapter: 'ch14',
    topic: 'LP Graphical Solution (Lawn Grow)',
    difficulty: 'Midterm Level',
    question: t`For the Lawn Grow LP, the optimum is at the intersection of the two constraints. What is it (to the nearest unit)?`,
    options: [t`$X_1 \approx 714$, $X_2 \approx 571$, $Z \approx \$742{,}857$`, t`$X_1 = 0$, $X_2 = 750$, $Z = \$600{,}000$`, t`$X_1 \approx 1667$, $X_2 = 0$, $Z \approx \$666{,}667$`, t`$X_1 = 1000$, $X_2 = 500$, $Z = \$800{,}000$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The optimum of an LP lies at a corner of the feasible region. Solve the two binding constraints simultaneously and compare corner values.`,
      stepByStep: [],
      steps: [
        { title: 'Binding constraints', math: t`3X_1 + 5X_2 = 5000, \qquad X_1 + 4X_2 = 3000` },
        { title: 'From the second', math: t`X_1 = 3000 - 4X_2` },
        { title: 'Substitute into the first', math: t`3(3000 - 4X_2) + 5X_2 = 5000 \;\Rightarrow\; 9000 - 7X_2 = 5000 \;\Rightarrow\; X_2 = 571.4` },
        { title: 'Back-substitute', math: t`X_1 = 3000 - 4(571.4) = 714.3` },
        { title: 'Profit', math: t`Z = 400(714.3) + 800(571.4) \approx \$742{,}857` },
        { title: 'Compare other corners', math: t`(0, 750): Z = 600{,}000; \qquad (1666.7, 0): Z = 666{,}667` }
      ],
      answer: t`(714,\ 571),\ Z \approx \$742{,}857`,
      whyWrong: {
        '1': t`(0, 750) is a corner but gives less profit.`,
        '2': t`(1667, 0) is a corner but gives less profit.`,
        '3': t`(1000, 500) is infeasible: fabrication would need $3000 + 2500 = 5500 > 5000$ hours.`
      },
      commonTrap: t`Rounding up to (715, 571), as the slide does: that uses 5,002 fabrication hours, slightly more than available.`,
      reference: `${D14} · Pages 15–17`
    },
    source: src(D14, C14, 'Pages 15–17 (graphical solution)')
  }),
  q({
    id: 'Q_INDU211_C1403',
    chapter: 'ch14',
    topic: 'LP Minimisation (Lecture Example 2)',
    difficulty: 'Midterm Level',
    question: t`$\min Z = 5x_1 + 4x_2$ subject to $5x_1 + x_2 \ge 5$, $x_1 + 5x_2 \ge 5$, $x_1, x_2 \ge 0$. What is the optimum?`,
    options: [t`$(\tfrac56, \tfrac56)$, $Z = 7.5$`, t`$(0, 5)$, $Z = 20$`, t`$(5, 0)$, $Z = 25$`, t`$(0, 0)$, $Z = 0$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`With $\ge$ constraints the feasible region is unbounded above; the minimum sits at the corner closest to the origin in the direction of the cost line.`,
      stepByStep: [],
      steps: [
        { title: 'Corner points of the feasible region', math: t`(0, 5),\quad (5, 0),\quad \text{and the intersection of the two lines}` },
        { title: 'Intersection', math: t`5x_1 + x_2 = 5,\ \ x_1 + 5x_2 = 5 \;\Rightarrow\; 24x_2 = 20 \;\Rightarrow\; x_2 = \tfrac56,\ x_1 = \tfrac56` },
        { title: 'Evaluate $Z$ at each corner', math: t`Z(0,5) = 20,\qquad Z(5,0) = 25,\qquad Z\left(\tfrac56,\tfrac56\right) = \tfrac{25}{6} + \tfrac{20}{6} = 7.5` },
        { title: 'Minimum', note: t`$(5/6, 5/6)$ with $Z = 7.5$.` }
      ],
      answer: t`\left(\tfrac56, \tfrac56\right),\ Z = 7.5`,
      whyWrong: {
        '1': t`(0, 5) is feasible but costs 20.`,
        '2': t`(5, 0) is feasible but costs 25.`,
        '3': t`The origin violates both $\ge 5$ constraints.`
      },
      commonTrap: t`Treating a minimisation like a maximisation and moving the cost line away from the origin.`,
      reference: `${D14} · Pages 18–19`
    },
    source: src(D14, C14, 'Pages 18–19 (minimisation example)')
  }),
  q({
    id: 'Q_INDU211_C1404',
    chapter: 'ch14',
    topic: 'Elements of an LP',
    difficulty: 'Foundation',
    question: t`What makes a mathematical programming model a linear program?`,
    options: [
      t`The objective and all constraints are linear functions of the decision variables`,
      t`It has exactly two decision variables`,
      t`All decision variables must be integers`,
      t`It uses probabilities for the parameters`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`LP = linear objective + linear constraints + non-negative continuous variables. Integer requirements make it IP/MIP; probabilities make it probabilistic.`,
      stepByStep: [],
      steps: [
        { title: 'Model elements', note: t`Decision variables, parameters, objective function, constraints.` },
        { title: 'Linearity', note: t`Every term is a constant times a single variable ($C_jX_j$, $A_{ij}X_j$): no $X^{2}$, $X_1X_2$ or $\sqrt X$.` }
      ],
      whyWrong: {
        '1': t`Two variables only makes the graphical method possible; LPs can have thousands of variables.`,
        '2': t`Integer variables make it integer programming.`,
        '3': t`LPs are deterministic; probabilistic models are Chapter 15.`
      },
      commonTrap: t`Assuming "linear" refers to the graph being a line in 2D.`,
      reference: `${D14} · Pages 5–8, 20`
    },
    source: src(D14, C14, 'Pages 5–8 and 20')
  }),

  // ============================================================ Chapter 15
  q({
    id: 'Q_INDU211_C1501',
    chapter: 'ch15',
    topic: 'M/M/1 Queue (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`A drive-up window: arrivals $\lambda = 25$/h, one customer served every 2 minutes. What are the utilization and the average number waiting in line?`,
    options: [t`$\rho \approx 0.833$, $N_q \approx 4.17$`, t`$\rho = 1.2$, $N_q = 5$`, t`$\rho \approx 0.833$, $N_q = 5$`, t`$\rho = 12.5$ (the line grows without limit)`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`M/M/1: $\rho = \lambda/\mu$, $\;N_q = \dfrac{\lambda^{2}}{\mu(\mu - \lambda)}$, $\;N_s = \dfrac{\lambda}{\mu - \lambda}$. Rates must be in the same time unit.`,
      stepByStep: [],
      steps: [
        { title: 'Service rate per hour', math: t`\mu = \frac{60\ \text{min/h}}{2\ \text{min}} = 30\ \text{customers/h}` },
        { title: 'Utilization', math: t`\rho = \frac{\lambda}{\mu} = \frac{25}{30} = 0.833` },
        { title: 'Average number in line', math: t`N_q = \frac{25^{2}}{30(30 - 25)} = \frac{625}{150} = 4.17` }
      ],
      answer: t`\rho \approx 0.833,\ N_q \approx 4.17`,
      whyWrong: {
        '1': t`$\rho = \mu/\lambda$ is inverted; utilization must be below 1 for a stable queue.`,
        '2': t`$N = 5$ is the number in the system ($N_s$), which includes the one being served.`,
        '3': t`12.5 = 25/2 treats the 2-minute service time as a rate of 2 per hour. The rate is $60/2 = 30$ per hour.`
      },
      commonTrap: t`Using service time (2 min) as the service rate. The rate is its reciprocal: 30 per hour.`,
      reference: `${D15} · Pages 16–19`
    },
    source: src(D15, C15, 'Pages 16–19 (M/M/1 example)')
  }),
  q({
    id: 'Q_INDU211_C1502',
    chapter: 'ch15',
    topic: 'M/M/1 Waiting Times',
    difficulty: 'Midterm Level',
    question: t`For the same window ($\lambda = 25$/h, $\mu = 30$/h), what are the average wait in line and the average time in the system?`,
    options: [t`$T_q = 10$ min, $T_s = 12$ min`, t`$T_q = 12$ min, $T_s = 10$ min`, t`$T_q = 2$ min, $T_s = 12$ min`, t`$T_q = 0.2$ min, $T_s = 0.1667$ min`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$T_s = \dfrac{1}{\mu - \lambda}$, $\;T_q = \dfrac{\lambda}{\mu(\mu - \lambda)} = T_s - \dfrac{1}{\mu}$ (the difference is one service time).`,
      stepByStep: [],
      steps: [
        { title: 'Time in system', math: t`T_s = \frac{1}{30 - 25} = 0.2\ \text{h} = 12\ \text{min}` },
        { title: 'Time in line', math: t`T_q = \frac{25}{30(5)} = 0.1667\ \text{h} = 10\ \text{min}` },
        { title: 'Consistency check', math: t`T_s - T_q = 2\ \text{min} = \frac{1}{\mu}\ \checkmark` },
        { title: "Little's law check", math: t`N_s = \lambda T_s = 25(0.2) = 5\ \checkmark` }
      ],
      answer: t`T_q = 10\ \text{min},\ T_s = 12\ \text{min}`,
      whyWrong: {
        '1': t`Swapped: time in the system is always longer, because it includes service.`,
        '2': t`2 min is the service time $1/\mu$, not the wait in line.`,
        '3': t`These are in hours, not minutes (0.2 h = 12 min), and they are swapped.`
      },
      commonTrap: t`Forgetting that formulas give hours when the rates are per hour.`,
      reference: `${D15} · Pages 13–16, 20`
    },
    source: src(D15, C15, 'Pages 13–16 and 20')
  }),
  q({
    id: 'Q_INDU211_C1503',
    chapter: 'ch15',
    topic: 'Probability of n in System',
    difficulty: 'Exam Master',
    question: t`For $\rho = 25/30$, what is the probability that exactly two cars are in the system?`,
    options: [t`$\approx 0.116$`, t`$\approx 0.694$`, t`$\approx 0.139$`, t`$\approx 0.579$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`M/M/1: $P(n) = (1 - \rho)\,\rho^{n}$, with $P(0) = 1 - \rho$.`,
      stepByStep: [],
      steps: [
        { title: 'Formula', math: t`P(2) = (1 - \rho)\,\rho^{2}` },
        { title: 'Substitute', math: t`P(2) = \left(1 - \tfrac{25}{30}\right)\left(\tfrac{25}{30}\right)^{2} = \tfrac16 \times 0.6944` },
        { title: 'Evaluate', math: t`P(2) \approx 0.116` }
      ],
      answer: t`P(2) \approx 0.116`,
      whyWrong: {
        '1': t`0.694 is $\rho^{2}$ alone; multiply by $P(0) = 1 - \rho$.`,
        '2': t`0.139 is $P(1) = (1 - \rho)\rho$.`,
        '3': t`0.579 is $\rho^{3}$, the probability of 3 or more.`
      },
      commonTrap: t`Forgetting the factor $(1 - \rho)$.`,
      reference: `${D15} · Pages 14, 21`
    },
    source: src(D15, C15, 'Pages 14 and 21')
  }),
  q({
    id: 'Q_INDU211_C1504',
    chapter: 'ch15',
    topic: 'Probability of More Than n',
    difficulty: 'Exam Master',
    question: t`For $\rho = 25/30$, what is the probability that more than 5 cars are in the system?`,
    options: [t`$\rho^{6} \approx 0.335$`, t`$\rho^{5} \approx 0.402$`, t`$(1 - \rho)\rho^{5} \approx 0.067$`, t`$1 - \rho^{6} \approx 0.665$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$P(n > k) = 1 - \sum_{n=0}^{k}(1 - \rho)\rho^{n} = \rho^{k+1}$ (geometric series).`,
      stepByStep: [],
      steps: [
        { title: 'Complement', math: t`P(n > 5) = 1 - [P(0) + P(1) + \dots + P(5)]` },
        { title: 'Geometric sum', math: t`\sum_{n=0}^{5}(1 - \rho)\rho^{n} = 1 - \rho^{6}` },
        { title: 'So', math: t`P(n > 5) = \rho^{6} = (0.8333)^{6} \approx 0.335` },
        { title: 'Note', note: t`The slide adds six rounded terms and gets 0.339; the exact value is 0.335.` }
      ],
      answer: t`P(n > 5) \approx 0.335`,
      whyWrong: {
        '1': t`$\rho^{5}$ is $P(n \ge 5)$ (5 or more). "More than 5" starts at 6.`,
        '2': t`That is $P(n = 5)$ only.`,
        '3': t`That is $P(n \le 5)$, the complement.`
      },
      commonTrap: t`Off-by-one: "more than 5" means 6 or more.`,
      reference: `${D15} · Page 22`
    },
    source: src(D15, C15, 'Page 22')
  }),
  q({
    id: 'Q_INDU211_C1505',
    chapter: 'ch15',
    topic: 'Steady-State Condition',
    difficulty: 'Foundation',
    question: t`For an infinite-population queue with random (Poisson/exponential) arrivals and service and $M$ servers, when does a steady state exist?`,
    options: [t`Only if $\lambda / (M\mu) < 1$`, t`Whenever $\lambda / (M\mu) \le 1$`, t`Only if $\lambda > M\mu$`, t`Always, regardless of the rates`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`With randomness, utilization must be strictly below 1; at exactly 1 the queue grows without bound. Only fully deterministic systems can run at $\rho = 1$.`,
      stepByStep: [],
      steps: [
        { title: 'Utilization', math: t`\rho = \frac{\lambda}{M\mu}` },
        { title: 'Random arrivals/service', note: t`Idle time lost during random gaps can never be recovered, so if $\rho = 1$ the backlog drifts upward forever.` }
      ],
      whyWrong: {
        '1': t`$\rho = 1$ is allowed only when both arrivals and service are deterministic.`,
        '2': t`If arrivals exceed capacity the line grows without limit.`,
        '3': t`Steady state requires spare capacity.`
      },
      commonTrap: t`Planning a server to be 100% busy.`,
      reference: `${D15} · Page 23`
    },
    source: src(D15, C15, 'Page 23 (features of M-server systems)')
  }),
  q({
    id: 'Q_INDU211_C1506',
    chapter: 'ch15',
    topic: "Little's Law",
    difficulty: 'Foundation',
    question: t`A clinic averages $\lambda = 12$ patients/h and patients spend on average 30 min in the clinic. By Little's law, how many patients are in the clinic on average?`,
    options: [t`6`, t`24`, t`0.4`, t`360`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Little's law: $N_s = \lambda T_s$ (and $N_q = \lambda T_q$), valid at steady state with consistent units.`,
      stepByStep: [],
      steps: [
        { title: 'Convert time to hours', math: t`T_s = 30\ \text{min} = 0.5\ \text{h}` },
        { title: 'Multiply', math: t`N_s = \lambda T_s = 12 \times 0.5 = 6` }
      ],
      answer: t`6`,
      whyWrong: {
        '1': t`24 divides by 0.5 instead of multiplying.`,
        '2': t`0.4 = 12/30 mixes minutes with an hourly rate.`,
        '3': t`360 = 12 × 30 uses minutes with a per-hour rate.`
      },
      commonTrap: t`Mixing time units.`,
      reference: `${D15} · Page 13`
    },
    source: src(D15, C15, "Page 13 (Little's law)")
  }),

  // ============================================================ Chapter 8
  q({
    id: 'Q_INDU211_C801',
    chapter: 'ch8',
    topic: 'X-bar and R Chart Limits (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`Soft-drink fill weights: $\bar{\bar X} = 16$ oz, $\bar R = 0.4$ oz, $n = 20$ ($A_2 = 0.18$, $D_3 = 0.41$, $D_4 = 1.59$). What are the 3σ limits of the $\bar X$ chart?`,
    options: [t`$15.93$ to $16.07$ oz`, t`$15.60$ to $16.40$ oz`, t`$0.164$ to $0.636$ oz`, t`$15.28$ to $16.72$ oz`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\bar X$ chart: $\bar{\bar X} \pm A_2\bar R$. $R$ chart: $LCL = D_3\bar R$, $UCL = D_4\bar R$. $A_2$, $D_3$, $D_4$ depend on the sample size.`,
      stepByStep: [],
      steps: [
        { title: 'Half-width of the $\\bar X$ limits', math: t`A_2\bar R = 0.18 \times 0.4 = 0.072` },
        { title: 'Limits', math: t`UCL = 16 + 0.072 = 16.07, \qquad LCL = 16 - 0.072 = 15.93` },
        { title: 'Apply to the data', note: t`Sample 4 ($\bar X = 15.91$) is below 15.93 and sample 6 (16.09) is above 16.07: out of control. Sample 4's range 0.71 also exceeds $UCL_R = 1.59 \times 0.4 = 0.636$.` }
      ],
      answer: t`15.93 \le \bar X \le 16.07`,
      whyWrong: {
        '1': t`$\pm\bar R$ uses the range itself; the width is $A_2\bar R$.`,
        '2': t`These are the $R$-chart limits ($D_3\bar R$, $D_4\bar R$).`,
        '3': t`$\pm 1.8\bar R$ uses $A_2 = 1.8$ (ten times too large).`
      },
      commonTrap: t`Mixing up the $\bar X$ and $R$ chart formulas.`,
      reference: `${D8} · Pages 49, 56–57`
    },
    source: src(D8, C8, 'Pages 49 and 56–57 (control charts for variables)')
  }),
  q({
    id: 'Q_INDU211_C802',
    chapter: 'ch8',
    topic: 'p-Chart (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`Bolts: expected 4% defective, daily samples of $n = 100$. What are the 3σ p-chart limits?`,
    options: [t`$UCL \approx 9.88\%$, $LCL = 0$`, t`$UCL \approx 5.96\%$, $LCL \approx 2.04\%$`, t`$UCL \approx 9.88\%$, $LCL \approx -1.88\%$`, t`$UCL = 12\%$, $LCL = 0$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\bar p \pm 3\sqrt{\bar p(1 - \bar p)/n}$; a negative lower limit is set to zero because a defect rate cannot be negative.`,
      stepByStep: [],
      steps: [
        { title: 'Standard deviation of $p$', math: t`\sigma_p = \sqrt{\frac{0.04(0.96)}{100}} = 0.0196` },
        { title: 'Upper limit', math: t`UCL = 0.04 + 3(0.0196) = 0.0988 = 9.88\%` },
        { title: 'Lower limit', math: t`0.04 - 0.0588 = -0.0188 \;\Rightarrow\; LCL = 0` },
        { title: 'Apply', note: t`Day 8 (12%) is above 9.88%: the process is out of control.` }
      ],
      answer: t`UCL = 9.88\%,\ LCL = 0`,
      whyWrong: {
        '1': t`$\pm 1\sigma$ limits; the lecture uses 3σ.`,
        '2': t`A negative fraction defective is impossible, so the LCL is truncated at 0.`,
        '3': t`12% is the worst observed day, not a control limit.`
      },
      commonTrap: t`Leaving a negative LCL on the chart.`,
      reference: `${D8} · Pages 59–62`
    },
    source: src(D8, C8, 'Pages 59–62 (p-chart)')
  }),
  q({
    id: 'Q_INDU211_C803',
    chapter: 'ch8',
    topic: 'Costs of Quality',
    difficulty: 'Foundation',
    question: t`Warranty repairs on products already delivered to customers are which cost of quality?`,
    options: [t`External failure`, t`Internal failure`, t`Appraisal`, t`Prevention`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Prevention (stop defects), appraisal (find them by inspection), internal failure (found before delivery), external failure (found after delivery).`,
      stepByStep: [],
      steps: [
        { title: 'When is the defect found?', note: t`After delivery, by the customer ⇒ external failure (warranty, returns, complaints, loss of goodwill).` },
        { title: 'Contrast', note: t`Scrap and rework are internal failure; inspection and audits are appraisal; training and quality planning are prevention.` }
      ],
      whyWrong: {
        '1': t`Internal failure is caught before the product ships (scrap, rework).`,
        '2': t`Appraisal is the cost of testing and inspection.`,
        '3': t`Prevention is spent before defects occur (training, planning).`
      },
      commonTrap: t`Classifying by what is paid for instead of when the defect is discovered.`,
      reference: `${D8} · Pages 28–32`
    },
    source: src(D8, C8, 'Pages 28–32 (costs of quality)')
  }),
  q({
    id: 'Q_INDU211_C804',
    chapter: 'ch8',
    topic: 'Quality Control vs Quality Assurance',
    difficulty: 'Foundation',
    question: t`Which pairing is correct?`,
    options: [
      t`Quality control → detection of defects; quality assurance → prevention of defects`,
      t`Quality control → prevention; quality assurance → detection`,
      t`Both only inspect finished products`,
      t`Quality assurance is limited to ISO certification`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`QC checks the output (inspection, testing, sampling, rework). QA makes the process capable (procedures, audits, training, documentation).`,
      stepByStep: [],
      steps: [
        { title: 'QC', note: t`Focus: detection. Goal: find and fix issues in the output.` },
        { title: 'QA', note: t`Focus: prevention. Goal: an effective, consistent process.` }
      ],
      whyWrong: {
        '1': t`Reversed.`,
        '2': t`QA works on the process, not just the finished product.`,
        '3': t`Certification is one QA activity among many.`
      },
      commonTrap: t`Using the two terms interchangeably.`,
      reference: `${D8} · Page 27`
    },
    source: src(D8, C8, 'Page 27')
  }),
  q({
    id: 'Q_INDU211_C805',
    chapter: 'ch8',
    topic: 'Quality Gurus',
    difficulty: 'Foundation',
    question: t`Who defined quality as "fitness for use"?`,
    options: [t`Juran`, t`Crosby`, t`Deming`, t`Imai`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Each quality pioneer's definition from the slides.`,
      stepByStep: [],
      steps: [
        { title: 'Definitions', note: t`Juran: fitness for use. Crosby: conformance to requirements. Deming: predictable uniformity and dependability at low cost. Imai: anything that can be improved. Shewhart: conformance to specified standards.` }
      ],
      whyWrong: {
        '1': t`Crosby: "conformance to requirement".`,
        '2': t`Deming: "a predictable degree of uniformity and dependability at a low cost".`,
        '3': t`Imai: "anything which can be improved".`
      },
      commonTrap: t`Mixing Crosby (conformance) with Juran (fitness for use).`,
      reference: `${D8} · Pages 3–10`
    },
    source: src(D8, C8, 'Pages 3–10 (definitions of quality)')
  }),
  q({
    id: 'Q_INDU211_C806',
    chapter: 'ch8',
    topic: 'Assignable vs Random Variation',
    difficulty: 'Foundation',
    question: t`Which is an assignable (special-cause) variation?`,
    options: [t`A machine loses its calibration`, t`Tiny fluctuations in raw-material properties`, t`Gradual, normal tool wear`, t`Small humidity changes`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Random variation comes from many small, inherent causes. Assignable variation has an identifiable source with a significant effect, and should be found and removed.`,
      stepByStep: [],
      steps: [
        { title: 'Assignable causes (slide 37)', note: t`Equipment failure, lost calibration, changeover mistake, new supplier, operator error, power surge.` },
        { title: 'Random causes', note: t`Minor material fluctuations, gradual tool wear, temperature/humidity, operator reaction time.` }
      ],
      whyWrong: {
        '1': t`Minor material fluctuations are natural variation.`,
        '2': t`Gradual wear is listed as natural variation.`,
        '3': t`Small ambient changes are natural variation.`
      },
      commonTrap: t`Reacting to every point inside the limits as if it were special-cause.`,
      reference: `${D8} · Page 37`
    },
    source: src(D8, C8, 'Page 37 (statistical process control)')
  }),
  q({
    id: 'Q_INDU211_C807',
    chapter: 'ch8',
    topic: 'Normal Distribution & Z',
    difficulty: 'Foundation',
    question: t`A test has mean 50 and standard deviation 10. What fraction of scores lies between 30 and 70?`,
    options: [t`About 95.44%`, t`About 68.26%`, t`About 99.72%`, t`About 47.72%`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$Z = (X - \mu)/\sigma$. Areas: ±1σ 68.26%, ±2σ 95.44%, ±3σ 99.72%.`,
      stepByStep: [],
      steps: [
        { title: 'Convert the ends to $Z$', math: t`Z_{30} = \frac{30 - 50}{10} = -2,\qquad Z_{70} = \frac{70 - 50}{10} = +2` },
        { title: 'Area within ±2σ', math: t`95.44\%` }
      ],
      answer: t`\approx 95.44\%`,
      whyWrong: {
        '1': t`68.26% is ±1σ (40 to 60).`,
        '2': t`99.72% is ±3σ (20 to 80).`,
        '3': t`47.72% is only one side (50 to 70).`
      },
      commonTrap: t`Counting only one tail.`,
      reference: `${D8} · Pages 44–45`
    },
    source: src(D8, C8, 'Pages 44–45 (normal distribution)')
  }),

  // ============================================================ Chapters 6 & 11
  q({
    id: 'Q_INDU211_C601',
    chapter: 'ch6-11',
    topic: 'Standard Time (Lecture Example 1)',
    difficulty: 'Midterm Level',
    question: t`Nine observations total 10.35 min. Performance rating 1.13, allowances 20% of job time. What is the standard time?`,
    options: [t`$\approx 1.56$ min`, t`$\approx 1.30$ min`, t`$\approx 1.38$ min`, t`$\approx 14.03$ min`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Observed time $OT = \sum x_i / n$; normal time $NT = OT \times PR$; standard time $ST = NT \times AF$.`,
      stepByStep: [],
      steps: [
        { title: 'Observed (actual) time', math: t`OT = \frac{10.35}{9} = 1.15\ \text{min}` },
        { title: 'Normal time (operator 13% faster than normal)', math: t`NT = 1.15 \times 1.13 = 1.30\ \text{min}` },
        { title: 'Allowance factor', math: t`AF = 1 + 0.20 = 1.20` },
        { title: 'Standard time', math: t`ST = 1.30 \times 1.20 = 1.56\ \text{min}` }
      ],
      answer: t`ST \approx 1.56\ \text{min}`,
      whyWrong: {
        '1': t`1.30 min is the normal time; allowances are not yet included.`,
        '2': t`1.38 = 1.15 × 1.20 skips the performance rating.`,
        '3': t`14.03 uses the total 10.35 instead of the average per cycle.`
      },
      commonTrap: t`Dividing by the rating instead of multiplying: a fast operator (PR > 1) means normal time is longer than observed.`,
      reference: `${D611} · Pages 53–55`
    },
    source: src(D611, C611, 'Pages 53–55 (direct time study)')
  }),
  q({
    id: 'Q_INDU211_C602',
    chapter: 'ch6-11',
    topic: 'Standard Time (Slide Arithmetic Check)',
    difficulty: 'Exam Master',
    question: t`Element averages 15, 7, 5 and 8 min; performance rating 90%; allowances 12%. What is the standard time? (Check the arithmetic on the slide.)`,
    options: [t`$\approx 35.28$ min`, t`$\approx 31.92$ min`, t`$\approx 45.08$ min`, t`$31.50$ min`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Sum the elements, multiply by the rating, then by the allowance factor.`,
      stepByStep: [],
      steps: [
        { title: 'Total observed time', math: t`15 + 7 + 5 + 8 = 35\ \text{min}` },
        { title: 'Normal time at 90%', math: t`NT = 35 \times 0.90 = 31.5\ \text{min}` },
        { title: 'Standard time', math: t`ST = 31.5 \times 1.12 = 35.28\ \text{min}` },
        { title: 'Note on the slide', note: t`Slide 56 writes $35 \times 0.9 = 28.5$ and gets 31.92; the correct product is 31.5, giving 35.28.` }
      ],
      answer: t`ST \approx 35.28\ \text{min}`,
      whyWrong: {
        '1': t`31.92 carries the slide's arithmetic slip ($35 \times 0.9 = 28.5$); it is 31.5.`,
        '2': t`45.08 uses the 115% rating from the other case on the slide.`,
        '3': t`31.5 is the normal time; allowances still need to be added.`
      },
      commonTrap: t`Copying numbers from a slide without re-checking them.`,
      reference: `${D611} · Page 56`
    },
    source: src(D611, C611, 'Page 56 (time study example 2)')
  }),
  q({
    id: 'Q_INDU211_C603',
    chapter: 'ch6-11',
    topic: 'Anthropometric Design Percentiles',
    difficulty: 'Foundation',
    question: t`Designing the height of a shelf everyone must reach, and the width of a manhole everyone must fit through: which users set each dimension?`,
    options: [
      t`Shelf reach: 5th percentile (smallest); manhole clearance: 95th percentile (largest)`,
      t`Both: the 50th percentile (average person)`,
      t`Shelf reach: 95th percentile; manhole clearance: 5th percentile`,
      t`Both: the 5th percentile`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Design for the extreme that is limiting: reach is limited by the smallest user; clearance by the largest.`,
      stepByStep: [],
      steps: [
        { title: 'Reach', note: t`If the 5th-percentile (short) user can reach it, taller users can too.` },
        { title: 'Clearance', note: t`If the 95th-percentile (large) user fits, smaller users fit too.` },
        { title: 'Adjustable items', note: t`Seats, helmets and work-surface heights cover the 5th–95th range.` }
      ],
      whyWrong: {
        '1': t`Designing for the average excludes about half the users on the critical side.`,
        '2': t`Reversed: a shelf set for the tallest user is out of reach for short users.`,
        '3': t`A manhole sized for the smallest users would trap larger ones.`
      },
      commonTrap: t`Assuming "the average person" is the right design target.`,
      reference: `${D611} · Pages 15–18`
    },
    source: src(D611, C611, 'Pages 15–18 (anthropometry)')
  }),
  q({
    id: 'Q_INDU211_C604',
    chapter: 'ch6-11',
    topic: 'Job Enlargement vs Enrichment',
    difficulty: 'Foundation',
    question: t`A worker who assembled one part now also plans and schedules the work for her station. This is:`,
    options: [t`Job enrichment`, t`Job enlargement`, t`Job rotation`, t`Job specialization`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Enlargement adds more tasks of the same level (horizontal). Enrichment adds responsibility for planning and coordination (vertical). Rotation swaps jobs periodically.`,
      stepByStep: [],
      steps: [
        { title: 'What was added?', note: t`Planning and scheduling responsibility, which is vertical.` },
        { title: 'So', note: t`Job enrichment.` }
      ],
      whyWrong: {
        '1': t`Enlargement would add more assembly tasks, not planning responsibility.`,
        '2': t`Rotation means moving between different jobs periodically.`,
        '3': t`Specialization narrows the job; this widens it.`
      },
      commonTrap: t`Treating enlargement and enrichment as synonyms.`,
      reference: `${D611} · Page 35`
    },
    source: src(D611, C611, 'Page 35 (behavioral approaches to job design)')
  }),
  q({
    id: 'Q_INDU211_C605',
    chapter: 'ch6-11',
    topic: 'Motivation Theories',
    difficulty: 'Foundation',
    question: t`Which theorist proposed a piece-rate system, assuming workers are motivated mainly by money?`,
    options: [t`Taylor (1911)`, t`Maslow (1943)`, t`Herzberg (1959)`, t`Adam Smith (1776)`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Taylor: money and piece rates. Maslow: hierarchy of needs. Herzberg: job enrichment, rotation, empowerment. Adam Smith: specialization (pin factory).`,
      stepByStep: [],
      steps: [
        { title: 'Match', note: t`Scientific management (Taylor, 1911) paid per piece because it assumed money is the main motivator.` }
      ],
      whyWrong: {
        '1': t`Maslow's hierarchy treats money as only one of several needs.`,
        '2': t`Herzberg stressed enrichment and recognition, not piece rates.`,
        '3': t`Adam Smith described specialization, not a pay scheme.`
      },
      commonTrap: t`Mixing the three motivation theories' dates and ideas.`,
      reference: `${D611} · Pages 25–26, 32`
    },
    source: src(D611, C611, 'Pages 25–26 and 32')
  }),
  q({
    id: 'Q_INDU211_C606',
    chapter: 'ch6-11',
    topic: 'Productivity Measures',
    difficulty: 'Foundation',
    question: t`A plant produced 4,000 units using 800 labour-hours and \$20,000 of machine time. What is the labour productivity?`,
    options: [t`5 units per labour-hour`, t`0.2 units per labour-hour`, t`0.19 units per dollar`, t`200 units per labour-hour`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Productivity = output / input. Partial measures use one input (labour, machine, capital, energy); multifactor measures use several.`,
      stepByStep: [],
      steps: [
        { title: 'Labour productivity (partial)', math: t`\frac{\text{output}}{\text{labour input}} = \frac{4{,}000}{800} = 5\ \text{units/h}` }
      ],
      answer: t`5\ \text{units/labour-hour}`,
      whyWrong: {
        '1': t`0.2 is input/output, the reciprocal.`,
        '2': t`0.19 = 4,000 / (800 + 20,000) adds labour-hours to dollars. Labour productivity uses labour-hours only.`,
        '3': t`200 divides by 20 instead of 800.`
      },
      commonTrap: t`Inverting output and input.`,
      reference: `${D611} · Pages 4–5`
    },
    source: src(D611, C611, 'Pages 4–5 (measures of productivity)')
  }),
  q({
    id: 'Q_INDU211_C607',
    chapter: 'ch6-11',
    topic: 'Human Factors Foundations',
    difficulty: 'Foundation',
    question: t`Human factors issues are addressed using knowledge from which two fields (as discussed in class)?`,
    options: [t`Physiology and psychology`, t`Philosophy and sociology`, t`Mathematics and physics`, t`Fine arts and literature`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Human factors = human characteristics (physiology: body; psychology: mind) matched to system characteristics.`,
      stepByStep: [],
      steps: [
        { title: 'Physiology', note: t`Skeleton, muscles, nervous system, metabolism: lifting, reaching, seeing, hearing.` },
        { title: 'Psychology', note: t`Stress, boredom, motivation, mistakes.` }
      ],
      whyWrong: {
        '1': t`Not the basis given on slide 9.`,
        '2': t`Used in engineering generally, but not the human-side foundation.`,
        '3': t`Not part of ergonomics.`
      },
      commonTrap: t`Picking "ergonomics and workplace safety" (the 2020 final's distractor): ergonomics is human factors itself, not its foundation.`,
      reference: `${D611} · Pages 9–12`
    },
    source: src(D611, C611, 'Pages 9–12')
  }),

  // ============================================================ Chapter 17
  q({
    id: 'Q_INDU211_C1701',
    chapter: 'ch17',
    topic: 'CPM Critical Path (Lecture Example)',
    difficulty: 'Midterm Level',
    question: t`A(8), B(20), C(33) start the project; D(18), E(20) follow A; F(9) follows B; G(10) follows C; H(8) follows D; I(4) follows E and F; the project ends after G, H, I. What is the critical path and project duration?`,
    options: [t`C–G, 43 days`, t`A–D–H, 34 days`, t`B–F–I, 33 days`, t`A–E–I, 32 days`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The critical path is the longest path through the network; its length is the minimum project duration.`,
      stepByStep: [],
      steps: [
        { title: 'List every start-to-finish path', math: t`\begin{aligned} A{-}D{-}H &: 8 + 18 + 8 = 34 \\ A{-}E{-}I &: 8 + 20 + 4 = 32 \\ B{-}F{-}I &: 20 + 9 + 4 = 33 \\ C{-}G &: 33 + 10 = 43 \end{aligned}` },
        { title: 'Pick the longest', note: t`C–G, 43 days. Forward pass: node 7's earliest time is 43; backward pass confirms zero slack on C and G.` }
      ],
      answer: t`C\text{–}G,\ 43\ \text{days}`,
      whyWrong: {
        '1': t`A–D–H (34) has 9 days of slack: it is not the longest path.`,
        '2': t`B–F–I (33) has 10 days of slack.`,
        '3': t`A–E–I (32) is the shortest path.`
      },
      commonTrap: t`Choosing the path with the most activities instead of the longest total duration.`,
      reference: `${D17} · Pages 10–13`
    },
    source: src(D17, C17, 'Pages 10–13 (CPM example, forward and backward pass)')
  }),
  q({
    id: 'Q_INDU211_C1702',
    chapter: 'ch17',
    topic: 'Slack',
    difficulty: 'Midterm Level',
    question: t`In the same CPM network, how much slack does activity F (B → F → I path) have?`,
    options: [t`10 days`, t`0 days`, t`9 days`, t`33 days`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Slack = latest start − earliest start: how long an activity can slip without delaying the project.`,
      stepByStep: [],
      steps: [
        { title: 'Earliest start of F', math: t`ES_F = EF_B = 20` },
        { title: 'Latest start of F (backward pass)', math: t`LF_I = 43 \Rightarrow LS_I = 39 = LF_F \Rightarrow LS_F = 39 - 9 = 30` },
        { title: 'Slack', math: t`LS_F - ES_F = 30 - 20 = 10\ \text{days}` }
      ],
      answer: t`10\ \text{days}`,
      whyWrong: {
        '1': t`Zero slack means critical; only C and G are critical.`,
        '2': t`9 days is the slack on the A–D–H path.`,
        '3': t`33 is the length of path B–F–I, not a slack.`
      },
      commonTrap: t`Subtracting durations instead of start times.`,
      reference: `${D17} · Pages 12–14`
    },
    source: src(D17, C17, 'Pages 12–14 (forward and backward pass)')
  }),
  q({
    id: 'Q_INDU211_C1703',
    chapter: 'ch17',
    topic: 'PERT Expected Time (Textbook Eq. 17.1)',
    difficulty: 'Midterm Level',
    question: t`An activity has optimistic time 4 days, most likely 6 days, pessimistic 14 days. What is its PERT expected time?`,
    options: [t`7 days`, t`8 days`, t`6 days`, t`24 days`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`PERT weights the most likely time four times: $t_e = \dfrac{t_o + 4t_m + t_p}{6}$, variance $\sigma^{2} = \left(\dfrac{t_p - t_o}{6}\right)^{2}$.`,
      stepByStep: [],
      steps: [
        { title: 'Weighted average', math: t`t_e = \frac{4 + 4(6) + 14}{6} = \frac{42}{6} = 7\ \text{days}` },
        { title: 'Spread (for probabilities)', math: t`\sigma = \frac{14 - 4}{6} = 1.67\ \text{days}` }
      ],
      answer: t`t_e = 7\ \text{days}`,
      whyWrong: {
        '1': t`8 is the simple average $(4 + 6 + 14)/3$; PERT weights the most likely time by 4.`,
        '2': t`6 is the most likely time; the long pessimistic tail pulls the expectation up.`,
        '3': t`24 = 4 + 6 + 14 is the sum, not an average.`
      },
      commonTrap: t`Forgetting the weights (1, 4, 1) and the divisor 6.`,
      reference: `Textbook Chapter 17, Eq. 17.1; ${D17} · Page 17`
    },
    source: [
      { deck: D17, chapter: C17, location: 'Page 17 (PERT: three time estimates, weighted average)' },
      { deck: 'Textbook Chapter 17 - Project Management.pdf', chapter: C17, location: 'Section 17 PERT, Eq. 17.1' }
    ]
  }),
  q({
    id: 'Q_INDU211_C1704',
    chapter: 'ch17',
    topic: 'CPM vs PERT',
    difficulty: 'Foundation',
    question: t`Which statement is correct?`,
    options: [
      t`CPM uses deterministic durations; PERT uses probabilistic (three-point) estimates. Both find a critical path.`,
      t`Both CPM and PERT use probabilistic information`,
      t`CPM is probabilistic and PERT is deterministic`,
      t`Only CPM finds a critical path`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`CPM: one known duration per activity. PERT: optimistic, most likely and pessimistic times give expected durations and variances.`,
      stepByStep: [],
      steps: [
        { title: 'CPM', note: t`Deterministic; finds the longest path (minimum project duration).` },
        { title: 'PERT', note: t`Probabilistic; the critical path uses expected times, and the chance of meeting a deadline can be estimated.` }
      ],
      whyWrong: {
        '1': t`CPM is deterministic.`,
        '2': t`Reversed.`,
        '3': t`PERT also determines a critical path (using expected times).`
      },
      commonTrap: t`This was a multi-answer question on the 2020 final: both "CPM deterministic / PERT probabilistic" and "both compute a critical path" were correct.`,
      reference: `${D17} · Pages 9, 17`
    },
    source: src(D17, C17, 'Pages 9 and 17')
  }),
  q({
    id: 'Q_INDU211_C1705',
    chapter: 'ch17',
    topic: 'Critical Activities',
    difficulty: 'Midterm Level',
    question: t`Which statement about critical and non-critical activities is TRUE?`,
    options: [
      t`A non-critical activity can become critical if it is delayed by more than its slack`,
      t`A critical activity can be delayed without delaying the project`,
      t`Shortening a critical activity can never change the critical path`,
      t`Delaying a critical activity makes a non-critical activity critical`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Critical activities have zero slack. Non-critical ones can absorb delays up to their slack; beyond that, their path becomes the longest.`,
      stepByStep: [],
      steps: [
        { title: 'Delay beyond slack', note: t`If F (slack 10) slips 12 days, B–F–I becomes 45 > 43 and is now critical.` },
        { title: 'Shortening a critical activity', note: t`If G is cut from 10 to 0, C–G = 33 and A–D–H (34) becomes critical: a new bottleneck emerges (slide 19).` }
      ],
      whyWrong: {
        '1': t`Zero slack: any delay to a critical activity delays the project.`,
        '2': t`Shortening it enough can make another path the longest.`,
        '3': t`Delaying a critical activity lengthens the critical path even more; other paths stay shorter.`
      },
      commonTrap: t`Thinking the critical path is fixed once computed.`,
      reference: `${D17} · Pages 9, 19`
    },
    source: src(D17, C17, 'Pages 9 and 19')
  }),

  // ============================================================ Past papers
  q({
    id: 'Q_INDU211_P01',
    chapter: 'past-mid',
    pastPaper: 'Midterm 2019 (calculation sample)',
    topic: 'Transportation: Least-Cost Rule',
    difficulty: 'Exam Master',
    question: t`Supplies: Edmonton 40, Winnipeg 20, Saskatoon 80. Demands: Montreal 50, Ottawa 30, Toronto 60. Unit costs (Mtl/Ott/Tor): Edmonton 12/10/8, Winnipeg 6/12/16, Saskatoon 7/15/9. Using the lowest-unit-cost-first rule, what is the total cost?`,
    options: [t`\$1,280`, t`\$1,340`, t`\$1,180`, t`\$1,500`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Repeatedly fill the cheapest remaining cell with as much as supply and demand allow, crossing out exhausted rows/columns.`,
      stepByStep: [],
      steps: [
        { title: 'Table', math: t`\begin{array}{l|ccc|c} & \text{Mtl} & \text{Ott} & \text{Tor} & \text{Supply} \\ \hline \text{Edm} & 12 & 10 & 8 & 40 \\ \text{Wpg} & 6 & 12 & 16 & 20 \\ \text{Sask} & 7 & 15 & 9 & 80 \\ \hline \text{Demand} & 50 & 30 & 60 & 140 \end{array}` },
        { title: '\\$6: Winnipeg → Montreal', math: t`20\ \ (\text{Wpg done; Mtl needs }30)` },
        { title: '\\$7: Saskatoon → Montreal', math: t`30\ \ (\text{Mtl done; Sask has }50)` },
        { title: '\\$8: Edmonton → Toronto', math: t`40\ \ (\text{Edm done; Tor needs }20)` },
        { title: '\\$9: Saskatoon → Toronto', math: t`20\ \ (\text{Tor done; Sask has }30)` },
        { title: 'Remaining: Saskatoon → Ottawa at \\$15', math: t`30` },
        { title: 'Total', math: t`20(6) + 30(7) + 40(8) + 20(9) + 30(15) = 120 + 210 + 320 + 180 + 450 = \$1{,}280` }
      ],
      answer: t`\$1{,}280`,
      whyWrong: {
        '1': t`\$1,340 comes from filling a dearer cell before a cheaper one. Follow the costs strictly in the order \$6, \$7, \$8, \$9, then the forced cell.`,
        '2': t`\$1,180 leaves demand unmet; check every row and column total.`,
        '3': t`\$1,500 skips the least-cost order entirely.`
      },
      commonTrap: t`Forgetting that the last allocation is forced (Saskatoon → Ottawa), even though it is expensive.`,
      reference: `${D4a} · transportation method`
    },
    source: src(D4a, 'Chapter 4 — Facilities Location & Layout', 'Transportation method (least-cost assignment)')
  }),
  q({
    id: 'Q_INDU211_P02',
    chapter: 'past-mid',
    pastPaper: 'Midterm 2019 (multiple-choice sample)',
    topic: 'Supply Chain',
    difficulty: 'Foundation',
    question: t`As discussed in class, a supply chain system typically refers to:`,
    options: [
      t`A complex production system with components and final products made by different entities, with physical, information and commercial links`,
      t`A process that fabricates and supplies metal chains`,
      t`One supplier selling to a chain of retailers`,
      t`A physical system supplying electricity to a chain of communities`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A supply chain links many organisations (suppliers, manufacturers, distributors, retailers) through material, information and money flows.`,
      stepByStep: [],
      steps: [{ title: 'Key idea', note: t`Several entities, three kinds of links (physical, information, commercial).` }],
      whyWrong: {
        '1': t`A literal reading of "chain".`,
        '2': t`Only one link of a supply chain.`,
        '3': t`That is a utility grid.`
      },
      commonTrap: t`Taking the name literally.`,
      reference: `${D12} · systems view of production`
    },
    source: src(D12, 'Chapters 1 & 2 — Engineering & IE Foundations', 'Production systems')
  }),
  q({
    id: 'Q_INDU211_P03',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 2',
    topic: 'Moving Average (Monitors)',
    difficulty: 'Midterm Level',
    question: t`Product 1 sold 20, 25, 50, 55, 45 in weeks 1–5. Using a 3-period moving average, how many should ABC plan to sell in week 6?`,
    options: [t`50`, t`39`, t`41.7`, t`45`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The forecast for week $t$ averages the $n$ most recent actual weeks.`,
      stepByStep: [],
      steps: [
        { title: 'Most recent 3 weeks: 3, 4, 5', math: t`50,\ 55,\ 45` },
        { title: 'Average', math: t`\hat x_6 = \frac{50 + 55 + 45}{3} = \frac{150}{3} = 50` }
      ],
      answer: t`50`,
      whyWrong: {
        '1': t`39 averages all five weeks (195/5).`,
        '2': t`41.7 averages weeks 2–4 (the forecast for week 5).`,
        '3': t`45 is just the last actual value (a naive forecast).`
      },
      commonTrap: t`Shifting the window one period too early.`,
      reference: `${D7c} · Pages 8–9`
    },
    source: src(D7c, C7, 'Pages 8–9 (moving average)')
  }),
  q({
    id: 'Q_INDU211_P04',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 2.2',
    topic: 'Moving Average of Market Share',
    difficulty: 'Exam Master',
    question: t`ABC's total sales in weeks 1–4 were 165, 142, 275, 331. ABC holds 80% of the market and competitor XYZ's Product 5 holds 20%. Using a 4-period moving average of ABC's totals, estimate XYZ's Product 5 sales in week 5.`,
    options: [t`$\approx 57$`, t`$\approx 46$`, t`$\approx 228$`, t`$\approx 285$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Forecast ABC's total, scale up to the whole market (÷ 0.8), then take XYZ's 20% share.`,
      stepByStep: [],
      steps: [
        { title: "4-period MA of ABC's totals", math: t`\hat x_5 = \frac{165 + 142 + 275 + 331}{4} = \frac{913}{4} = 228.25` },
        { title: 'Whole market (ABC is 80%)', math: t`\frac{228.25}{0.80} = 285.3` },
        { title: "XYZ's 20%", math: t`0.20 \times 285.3 \approx 57` },
        { title: 'Shortcut', math: t`\frac{0.20}{0.80}\times 228.25 = 0.25 \times 228.25 \approx 57` }
      ],
      answer: t`\approx 57`,
      whyWrong: {
        '1': t`46 takes 20% of ABC's sales; XYZ is 20% of the whole market, i.e. 25% of ABC's volume.`,
        '2': t`228 is ABC's own forecast.`,
        '3': t`285 is the total market.`
      },
      commonTrap: t`Applying the percentage to the wrong base.`,
      reference: `${D7c} · Pages 8–9`
    },
    source: src(D7c, C7, 'Pages 8–9 (moving average)')
  }),
  q({
    id: 'Q_INDU211_P05',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 3.1',
    topic: 'Graphical LP (Maximisation)',
    difficulty: 'Midterm Level',
    question: t`$\max Z = 3x_1 + 2x_2$ subject to $4x_1 + x_2 \le 7$, $-x_1 + x_2 \le 2$, $x_1, x_2 \ge 0$. What is the optimum?`,
    options: [t`$(1, 3)$, $Z = 9$`, t`$(1.75, 0)$, $Z = 5.25$`, t`$(0, 2)$, $Z = 4$`, t`$(0, 7)$, $Z = 14$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`List the corner points of the feasible region and evaluate $Z$ at each.`,
      stepByStep: [],
      steps: [
        { title: 'Axis corners', math: t`(0, 0),\qquad (0, 2)\ \text{from } -x_1 + x_2 = 2,\qquad (1.75, 0)\ \text{from } 4x_1 + x_2 = 7` },
        { title: 'Intersection of the two constraints', math: t`x_2 = 2 + x_1 \;\Rightarrow\; 4x_1 + 2 + x_1 = 7 \;\Rightarrow\; x_1 = 1,\ x_2 = 3` },
        { title: 'Evaluate $Z$', math: t`Z(0,0) = 0,\quad Z(0,2) = 4,\quad Z(1.75,0) = 5.25,\quad Z(1,3) = 9` },
        { title: 'Maximum', note: t`$(1, 3)$ with $Z = 9$.` }
      ],
      answer: t`(1,\ 3),\ Z = 9`,
      whyWrong: {
        '1': t`A corner, but not the best one.`,
        '2': t`A corner, but not the best one.`,
        '3': t`(0, 7) violates $-x_1 + x_2 \le 2$.`
      },
      commonTrap: t`Using an axis intercept that is cut off by the other constraint.`,
      reference: `${D14} · Pages 12–17`
    },
    source: src(D14, C14, 'Pages 12–17 (graphical method)')
  }),
  q({
    id: 'Q_INDU211_P06',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 3.2',
    topic: 'Graphical LP with an Equality',
    difficulty: 'Exam Master',
    question: t`$\min Z = 4x_1 + x_2$ subject to $x_1 + 3x_2 = 9$, $x_1 + x_2 \le 5$, $x_1, x_2 \ge 0$. What is the optimum?`,
    options: [t`$(0, 3)$, $Z = 3$`, t`$(3, 2)$, $Z = 14$`, t`$(9, 0)$, $Z = 36$`, t`$(0, 0)$, $Z = 0$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`An equality constraint restricts the feasible region to a line segment; the optimum is at one of its endpoints.`,
      stepByStep: [],
      steps: [
        { title: 'Parametrise the equality', math: t`x_1 = 9 - 3x_2` },
        { title: 'Apply $x_1 + x_2 \\le 5$', math: t`9 - 3x_2 + x_2 \le 5 \;\Rightarrow\; x_2 \ge 2` },
        { title: 'Apply $x_1 \\ge 0$', math: t`9 - 3x_2 \ge 0 \;\Rightarrow\; x_2 \le 3` },
        { title: 'Feasible segment', math: t`\text{from } (3, 2) \text{ to } (0, 3) \text{ on } x_1 + 3x_2 = 9` },
        { title: 'Evaluate endpoints', math: t`Z(3, 2) = 14,\qquad Z(0, 3) = 3` }
      ],
      answer: t`(0,\ 3),\ Z = 3`,
      whyWrong: {
        '1': t`The other endpoint of the feasible segment, with a higher cost.`,
        '2': t`(9, 0) violates $x_1 + x_2 \le 5$.`,
        '3': t`The origin is not on the line $x_1 + 3x_2 = 9$.`
      },
      commonTrap: t`Treating the equality as "$\le$" and shading a whole region.`,
      reference: `${D14} · Pages 12–19`
    },
    source: src(D14, C14, 'Pages 12–19 (graphical method)')
  }),
  q({
    id: 'Q_INDU211_P07',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 4',
    topic: 'Process Capability (Best-Wood)',
    difficulty: 'Exam Master',
    question: t`After removing two out-of-control samples, 13 samples of $n = 4$ beams give $\bar R = 1.392$ cm ($d_2 = 2.059$). Specs are $24 \pm 2.2$ cm. What is the process capability ratio $C_p$?`,
    options: [t`$\approx 1.08$`, t`$\approx 0.53$`, t`$\approx 3.25$`, t`$\approx 2.17$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\hat\sigma = \bar R / d_2$ and $C_p = \dfrac{USL - LSL}{6\hat\sigma}$. $C_p > 1$ means the natural spread fits inside the tolerance.`,
      stepByStep: [],
      steps: [
        { title: 'Revised average range (samples 4 and 10 removed)', math: t`\bar R = \frac{21.2 - 2.1 - 1.0}{13} = \frac{18.1}{13} = 1.392` },
        { title: 'Estimate the process standard deviation', math: t`\hat\sigma = \frac{1.392}{2.059} = 0.676\ \text{cm}` },
        { title: 'Tolerance width', math: t`USL - LSL = 26.2 - 21.8 = 4.4\ \text{cm}` },
        { title: 'Capability ratio', math: t`C_p = \frac{4.4}{6(0.676)} = \frac{4.4}{4.057} \approx 1.08` },
        { title: 'Sigma level', math: t`k = \frac{2.2}{0.676} \approx 3.25\sigma \;\;(\text{far from } 6\sigma)` }
      ],
      answer: t`C_p \approx 1.08`,
      whyWrong: {
        '1': t`0.53 uses $\bar R = 1.392$ directly as σ: $4.4/(6 \times 1.392)$. Divide by $d_2$ first.`,
        '2': t`3.25 is the sigma level $k$ (half-tolerance ÷ σ), not $C_p$.`,
        '3': t`2.17 divides by $3\hat\sigma$ instead of $6\hat\sigma$: the full natural spread is ±3σ = 6σ.`
      },
      commonTrap: t`Keeping the two out-of-control samples: with all 15 ($\bar R = 1.413$) you get $C_p \approx 1.07$, which describes a process that was not in control.`,
      reference: `${D8} · Pages 49, 65–68`
    },
    source: src(D8, C8, 'Pages 49 and 65–68 (σ̂ = R̄/d₂, process capability, six sigma)')
  }),
  q({
    id: 'Q_INDU211_P08',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 5',
    topic: 'M/M/1: Take-Out Window',
    difficulty: 'Exam Master',
    question: t`One window open 12 h/day. On average a customer arrives every 10 min and service takes 4 min (Poisson). How long is the window busy per day, and how long does a customer wait before being served?`,
    options: [t`Busy 4.8 h/day; waits $\approx 2.67$ min`, t`Busy 12 h/day; waits 4 min`, t`Busy 4.8 h/day; waits $\approx 6.67$ min`, t`Busy 7.2 h/day; waits $\approx 2.67$ min`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Convert to rates: $\lambda = 6$/h, $\mu = 15$/h. Busy fraction $\rho = \lambda/\mu$; wait in line $T_q = \dfrac{\lambda}{\mu(\mu - \lambda)}$.`,
      stepByStep: [],
      steps: [
        { title: 'Rates', math: t`\lambda = \frac{60}{10} = 6\ /\text{h},\qquad \mu = \frac{60}{4} = 15\ /\text{h}` },
        { title: 'Utilization and busy time', math: t`\rho = \frac{6}{15} = 0.4 \;\Rightarrow\; 0.4 \times 12\ \text{h} = 4.8\ \text{h}` },
        { title: 'Wait before service', math: t`T_q = \frac{6}{15(15 - 6)} = \frac{6}{135} = 0.0444\ \text{h} = 2.67\ \text{min}` },
        { title: 'Time in the restaurant', math: t`T_s = \frac{1}{15 - 6} = 0.111\ \text{h} = 6.67\ \text{min}` },
        { title: 'Two or more customers', math: t`P(n \ge 2) = \rho^{2} = 0.16 \;\Rightarrow\; 0.16 \times 12 = 1.92\ \text{h/day}` }
      ],
      answer: t`4.8\ \text{h};\ T_q \approx 2.67\ \text{min}`,
      whyWrong: {
        '1': t`The window is busy only a fraction $\rho = 0.4$ of the time, and 4 min is the service time, not the wait in line.`,
        '2': t`6.67 min is the time in the system ($T_s$), which includes the 4-min service.`,
        '3': t`7.2 h is the idle time $(1 - \rho) \times 12$.`
      },
      commonTrap: t`Treating "every 10 minutes" as the rate. The rate is 6 per hour.`,
      reference: `${D15} · Pages 13–16`
    },
    source: src(D15, C15, 'Pages 13–16 (M/M/1 results)')
  }),
  q({
    id: 'Q_INDU211_P09',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 1 (Q7)',
    topic: 'What EOQ Minimises',
    difficulty: 'Foundation',
    question: t`In a fixed-order inventory system, the EOQ solution minimises the sum of:`,
    options: [
      t`Ordering (procurement) cost and inventory carrying cost`,
      t`Ordering cost and purchasing (acquisition) cost`,
      t`Purchasing cost and carrying cost`,
      t`Carrying cost and variable production cost`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$TC = (Q/2)CC + (D/Q)PC$; the purchase price is assumed fixed (no discounts), so it does not affect the choice of $Q$.`,
      stepByStep: [],
      steps: [
        { title: 'Two opposing costs', note: t`Bigger orders mean fewer orders (less ordering cost) but more stock (more carrying cost).` },
        { title: 'Purchase cost', note: t`$D \times$ price is the same for every $Q$, so it drops out.` }
      ],
      whyWrong: {
        '1': t`Purchasing cost does not depend on $Q$ in the basic model.`,
        '2': t`Ordering cost is one of the two terms; purchasing cost is not.`,
        '3': t`Production cost is not part of the EOQ trade-off.`
      },
      commonTrap: t`Including the unit price in the EOQ trade-off.`,
      reference: `${D7a} · Pages 18–20`
    },
    source: src(D7a, C7, 'Pages 18–20')
  }),
  q({
    id: 'Q_INDU211_P10',
    chapter: 'past-final',
    pastPaper: 'Final Fall 2020, Problem 1 (Q8)',
    topic: 'What MRP Needs',
    difficulty: 'Foundation',
    question: t`For a basic MRP system, which statement is correct?`,
    options: [
      t`It needs the product structure (BOM) and the inventory on hand to determine how much to order`,
      t`Order quantities are always optimised with EOQ`,
      t`It explicitly models demand uncertainty`,
      t`It is based on the just-in-time pull approach`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`MRP inputs: master schedule, bill of materials file and inventory records. It computes net, time-phased requirements.`,
      stepByStep: [],
      steps: [
        { title: 'Inputs (slide 4)', note: t`Master schedule, BOM file, inventory records file.` },
        { title: 'What it is not', note: t`Lot sizes may be lot-for-lot or fixed lots (not necessarily EOQ); the schedule is treated as known; it is a push (top-down) system.` }
      ],
      whyWrong: {
        '1': t`Lot sizing can be lot-for-lot or fixed lots, as in the shutter example.`,
        '2': t`Basic MRP treats the master schedule as deterministic.`,
        '3': t`MRP is push (top-down); Kanban is pull.`
      },
      commonTrap: t`Confusing MRP with JIT/Kanban.`,
      reference: `${D7b} · Pages 3–4, 31`
    },
    source: src(D7b, C7, 'Pages 3–4 and 31')
  }),

  // ============================================================ Turner Textbook Quantitative Practice (Chapters 4–17)
  // 1. Rectilinear 1-Median Location Problem
  q({
    id: 'Q_INDU211_TB01',
    chapter: 'ch4',
    topic: 'Rectilinear 1-Median Location (Turner)',
    difficulty: 'Midterm Level',
    question: t`A central facility serves four workstations at coordinates $(10, 20)$, $(20, 50)$, $(40, 10)$, and $(70, 30)$ with trip weights $w = [5, 15, 10, 10]$. Under rectilinear travel, what is the optimal location $(x^*, y^*)$ that minimizes total travel distance?`,
    options: [
      t`$(20, 30)$`,
      t`$(35, 27.5)$`,
      t`$(40, 20)$`,
      t`$(20, 50)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Under rectilinear distance, the $x$ and $y$ coordinates separate and can be solved independently. The optimal coordinate is the weighted median: the point where cumulative weight reaches or exceeds half of the total weight ($W/2$).`,
      stepByStep: [],
      steps: [
        { title: 'Calculate total weight and half-weight threshold', math: t`W = \sum w_i = 5 + 15 + 10 + 10 = 40 \implies \frac{W}{2} = 20` },
        { title: 'Sort by $x$-coordinate and find cumulative weight', math: t`\begin{array}{c|c|c} x_i & w_i & \text{Cum. } w \\ \hline 10 & 5 & 5 \\ 20 & 15 & 20 \leftarrow \text{reaches } W/2 \\ 40 & 10 & 30 \\ 70 & 10 & 40 \end{array} \implies x^* = 20` },
        { title: 'Sort by $y$-coordinate and find cumulative weight', math: t`\begin{array}{c|c|c} y_i & w_i & \text{Cum. } w \\ \hline 10 & 10 & 10 \\ 20 & 5 & 15 \\ 30 & 10 & 25 \leftarrow \text{exceeds } W/2 \\ 50 & 15 & 40 \end{array} \implies y^* = 30` },
        { title: 'Combine optimal coordinates', math: t`(x^*, y^*) = (20, 30)` }
      ],
      answer: t`(x^*, y^*) = (20, 30)`,
      whyWrong: {
        '1': t`$(35, 27.5)$ is the unweighted/weighted Center of Gravity (squared Euclidean metric), not the rectilinear 1-median.`,
        '2': t`$(40, 20)$ reverses the coordinates and picks the 3rd sorted point.`,
        '3': t`$(20, 50)$ is the single heaviest workstation location ($w=15$), but not the median.`
      },
      commonTrap: t`Confusing the Center of Gravity (which takes weighted averages: $\bar{x} = \sum w_i x_i / W$) with the Rectilinear 1-Median (which sorts and finds the 50% cumulative weight point). Rectilinear distance ALWAYS uses the median!`,
      reference: `${TB} · Chapter 4 (§4.3); ${D4a} · Slide 14`
    },
    source: [
      { deck: TB, chapter: C4, location: 'Section 4.3 (Single Facility Location Models)' },
      { deck: D4a, chapter: C4, location: 'Slide 14 (Rectilinear distance and location)' }
    ]
  }),

  // 2. Muther REL Chart Closeness Values
  q({
    id: 'Q_INDU211_TB02',
    chapter: 'ch4',
    topic: 'REL Chart Closeness Ratings (Turner)',
    difficulty: 'Foundation',
    question: t`In Richard Muther's Systematic Layout Planning (SLP), which closeness rating indicates that placing two departments adjacent is "Especially Important", and what standard letter code represents it?`,
    options: [
      t`$\mathbf{E}$ (Especially Important)`,
      t`$\mathbf{A}$ (Absolutely Necessary)`,
      t`$\mathbf{I}$ (Important)`,
      t`$\mathbf{O}$ (Ordinary Closeness)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Muther's Activity Relationship Chart (REL chart) uses standard vowels to denote qualitative closeness requirements: A (Absolutely necessary, 4 lines), E (Especially important, 3 lines), I (Important, 2 lines), O (Ordinary, 1 line), U (Unimportant, 0 lines), X (Undesirable).`,
      stepByStep: [],
      steps: [
        { title: 'The standard Muther vowel hierarchy (SLP)', note: t`A = Absolutely Necessary, E = Especially Important, I = Important, O = Ordinary Closeness, U = Unimportant, X = Undesirable.` },
        { title: 'Inspect the letter requested: "Especially Important"', math: t`\text{Especially Important} \iff \mathbf{E}` },
        { title: 'Numerical weighting commonly used in software', math: t`A \approx 16\text{ (or 4)}, \quad E \approx 8\text{ (or 3)}, \quad I \approx 4\text{ (or 2)}, \quad O \approx 2\text{ (or 1)}, \quad U = 0, \quad X = -8` }
      ],
      answer: t`\mathbf{E}\ \text{(Especially Important)}`,
      whyWrong: {
        '1': t`A represents "Absolutely Necessary" (the highest possible priority rating).`,
        '2': t`I represents "Important" (priority rank 3).`,
        '3': t`O represents "Ordinary Closeness" (priority rank 4).`
      },
      commonTrap: t`Confusing E (Especially Important) with I (Important). In Muther's scale, E ranks above I.`,
      reference: `${TB} · Chapter 4 (§4.5); ${D4b} · Slides 18–20`
    },
    source: [
      { deck: TB, chapter: C4, location: 'Section 4.5 (Layout Planning & Relationship Charts)' },
      { deck: D4b, chapter: C4, location: 'Slides 18–20 (Systematic Layout Planning)' }
    ]
  }),

  // 3. Material Handling AGV Fleet Sizing
  q({
    id: 'Q_INDU211_TB03',
    chapter: 'ch5',
    topic: 'AGV Fleet Sizing (Turner)',
    difficulty: 'Midterm Level',
    question: t`A manufacturing facility requires $40$ delivery trips per hour. Each AGV trip requires an average delivery cycle time of $6.0\text{ minutes}$ (loaded travel, unloading, empty return, loading). Operating with a traffic congestion factor $TF = 0.80$, how many AGVs are required?`,
    options: [
      t`$5\text{ AGVs}$`,
      t`$4\text{ AGVs}$ (ignores traffic congestion)`,
      t`$6\text{ AGVs}$`,
      t`$8\text{ AGVs}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Vehicle fleet size is computed as $N_v = \dfrac{\text{Total Hourly Workload}}{\text{Effective Available Time per Vehicle}} = \dfrac{D_{\text{trips}} \times T_{\text{cycle}}}{60 \times TF}$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate total workload in vehicle-minutes per hour', math: t`WL = 40\text{ trips/hr} \times 6.0\text{ min/trip} = 240\text{ min/hr}` },
        { title: 'Compute effective available operating time per AGV per hour', math: t`T_{\text{avail}} = 60\text{ min/hr} \times TF = 60 \times 0.80 = 48\text{ min/hr per AGV}` },
        { title: 'Divide total workload by single vehicle capacity', math: t`N_v = \frac{WL}{T_{\text{avail}}} = \frac{240}{48} = 5.0 \implies 5\text{ AGVs}` }
      ],
      answer: t`5\text{ AGVs}`,
      whyWrong: {
        '1': t`4 AGVs ($240 / 60 = 4$) ignores the traffic factor ($TF = 0.80$). Without accounting for congestion and waiting at intersections, the fleet will fall behind schedule.`,
        '2': t`6 AGVs overestimates requirement ($240 / (60 \times 0.67)$).`,
        '3': t`8 AGVs doubles the necessary fleet size.`
      },
      commonTrap: t`Multiplying by the traffic factor instead of dividing the workload ($240 \times 0.8 = 192$). Congestion reduces available time, requiring MORE vehicles ($N_v \propto 1/TF$).`,
      reference: `${TB} · Chapter 5 (§5.3); ${D5} · Slide 12`
    },
    source: [
      { deck: TB, chapter: C5, location: 'Section 5.3 (Material Handling Equipment Fleet Sizing)' },
      { deck: D5, chapter: C5, location: 'Slide 12 (Automated material handling)' }
    ]
  }),

  // 4. Reorder Point with Safety Stock
  q({
    id: 'Q_INDU211_TB04',
    chapter: 'ch7',
    topic: 'Reorder Point with Safety Stock (Turner)',
    difficulty: 'Midterm Level',
    question: t`Daily demand for an assembly component is $d = 50\text{ units/day}$ with supplier lead time $L = 9\text{ days}$. The standard deviation of demand during lead time is $\sigma_L = 20\text{ units}$. For a $95\%$ service level ($z = 1.645$), what is the reorder point (ROP)?`,
    options: [
      t`$483\text{ units}$`,
      t`$450\text{ units}$ (no safety stock)`,
      t`$516\text{ units}$ ($z = 3.3$)`,
      t`$466\text{ units}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Reorder Point ($ROP$) covers expected lead-time demand plus safety stock to protect against demand fluctuations: $ROP = d \times L + z\,\sigma_L$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate expected demand during lead time', math: t`\mu_L = d \times L = 50\text{ units/day} \times 9\text{ days} = 450\text{ units}` },
        { title: 'Calculate buffer safety stock for 95% service level ($z = 1.645$)', math: t`SS = z \times \sigma_L = 1.645 \times 20 = 32.9 \approx 33\text{ units}` },
        { title: 'Sum expected demand and safety stock', math: t`ROP = \mu_L + SS = 450 + 32.9 = 482.9 \approx 483\text{ units}` }
      ],
      answer: t`ROP = 483\text{ units}`,
      whyWrong: {
        '1': t`450 units is strictly expected demand ($50 \times 9$), with zero safety stock, leading to a 50% stockout probability during lead time.`,
        '2': t`516 units corresponds to an overly conservative 99.9% service level ($z \approx 3.3$).`,
        '3': t`466 units uses $z = 0.8$, which provides only an ~79% service level.`
      },
      commonTrap: t`Forgetting that $\sigma_L$ is already the standard deviation over the FULL lead time. If given daily standard deviation $\sigma_d$, then $\sigma_L = \sqrt{L}\cdot\sigma_d$.`,
      reference: `${TB} · Chapter 7 (§7.2); ${D7a} · Slide 22`
    },
    source: [
      { deck: TB, chapter: C7, location: 'Section 7.2 (Inventory Management & Safety Stock)' },
      { deck: D7a, chapter: C7, location: 'Slide 22 (Inventory control and reorder point)' }
    ]
  }),

  // 5. Quantity Discount Decision
  q({
    id: 'Q_INDU211_TB05',
    chapter: 'ch7',
    topic: 'Quantity Discount Evaluation (Turner)',
    difficulty: 'Exam Master',
    question: t`A company faces demand $D = 10{,}000$ units/year, ordering cost $PC = \$40$/order, and carrying cost rate $i = 20\%$ of unit price. The normal price is $\$5.00$ ($Q < 1{,}000$), with an all-units discount to $\$4.80$ if $Q \ge 1{,}000$. What should the company do?`,
    options: [
      t`Order $Q = 1{,}000$; total annual cost decreases by $\approx \$2{,}014$ due to purchase price savings`,
      t`Order $EOQ = 894$; ordering $1{,}000$ units increases carrying cost too much`,
      t`Do not order; ordering cost increases when order size increases`,
      t`Order $Q = 2{,}000$ to maximize the discount further`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`To evaluate all-units quantity discounts, calculate total cost (purchase cost $D\cdot P$ + ordering $(D/Q)PC$ + holding $(Q/2)CC$) at the base $EOQ$ and compare it against the total cost at the discount breakpoint $Q = 1{,}000$.`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate total annual cost at normal price $P = \$5.00$ ($EOQ = 894$)', math: t`CC_1 = 0.20(5.00) = \$1.00 \implies EOQ_1 = \sqrt{\frac{2(10{,}000)(40)}{1.00}} \approx 894.4\text{ units}` },
        { title: 'Calculate total cost at $EOQ_1 = 894$', math: t`TC_1 = 10{,}000(5.00) + \frac{10{,}000}{894}(40) + \frac{894}{2}(1.00) = 50{,}000 + 447.4 + 447.0 = \$50{,}894.40` },
        { title: 'Evaluate total annual cost at discount breakpoint $Q = 1{,}000$ ($P = \$4.80$)', math: t`CC_2 = 0.20(4.80) = \$0.96 \implies TC_2 = 10{,}000(4.80) + \frac{10{,}000}{1000}(40) + \frac{1000}{2}(0.96) = 48{,}000 + 400 + 480 = \$48{,}880.00` },
        { title: 'Compare total costs', math: t`\Delta TC = 50{,}894.40 - 48{,}880.00 = +\$2{,}014.40\ \text{annual net savings}` }
      ],
      answer: t`Order $Q = 1{,}000\ (\approx \$2{,}014\ \text{savings})`,
      whyWrong: {
        '1': t`While holding cost increases from \$447 to \$480 (a \$33 rise), purchase cost drops by \$2,000, overwhelmingly favoring the discount.`,
        '2': t`Ordering cost actually decreases with larger order sizes ($(10{,}000/1{,}000)(40) = \$400 < \$447$).`,
        '3': t`There is no further discount above 1,000 units, so ordering 2,000 would needlessly inflate inventory holding costs.`
      },
      commonTrap: t`Focusing only on the inventory trade-off ($CC$ vs $PC$) and forgetting the purchase cost $D \times P$. A 20-cent discount across 10,000 units is a \$2,000 direct saving!`,
      reference: `${TB} · Chapter 7 (§7.2); ${D7a} · Slide 20`
    },
    source: [
      { deck: TB, chapter: C7, location: 'Section 7.2 (Quantity Discount Inventory Models)' },
      { deck: D7a, chapter: C7, location: 'Slide 20 (EOQ cost models)' }
    ]
  }),

  // 6. Process Capability Index Cpk vs Cp
  q({
    id: 'Q_INDU211_TB06',
    chapter: 'ch8',
    topic: 'Process Capability Index Cpk (Turner)',
    difficulty: 'Midterm Level',
    question: t`A process has specification limits $USL = 50.0\text{ mm}$ and $LSL = 40.0\text{ mm}$ with standard deviation $\sigma = 1.0\text{ mm}$. If the process mean has drifted to $\mu = 43.0\text{ mm}$, what are the capability values $C_p$ and $C_{pk}$?`,
    options: [
      t`$C_p = 1.67, \quad C_{pk} = 1.00$`,
      t`$C_p = 1.00, \quad C_{pk} = 1.67$`,
      t`$C_p = 1.67, \quad C_{pk} = 1.67$`,
      t`$C_p = 3.33, \quad C_{pk} = 2.00$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$C_p = \dfrac{USL - LSL}{6\sigma}$ measures potential capability assuming a centered process. $C_{pk} = \min\left(\dfrac{USL - \mu}{3\sigma}, \dfrac{\mu - LSL}{3\sigma}\right)$ penalizes for mean decentering.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate potential process capability $C_p$', math: t`C_p = \frac{USL - LSL}{6\sigma} = \frac{50.0 - 40.0}{6(1.0)} = \frac{10.0}{6.0} \approx 1.67` },
        { title: 'Calculate upper capability $C_{pu}$', math: t`C_{pu} = \frac{USL - \mu}{3\sigma} = \frac{50.0 - 43.0}{3(1.0)} = \frac{7.0}{3.0} \approx 2.33` },
        { title: 'Calculate lower capability $C_{pl}$', math: t`C_{pl} = \frac{\mu - LSL}{3\sigma} = \frac{43.0 - 40.0}{3(1.0)} = \frac{3.0}{3.0} = 1.00` },
        { title: 'Determine $C_{pk}$ as the minimum of $C_{pu}$ and $C_{pl}$', math: t`C_{pk} = \min(2.33, 1.00) = 1.00` }
      ],
      answer: t`C_p = 1.67, \quad C_{pk} = 1.00`,
      whyWrong: {
        '1': t`Inverted values: $C_p$ is always greater than or equal to $C_{pk}$. $C_p$ cannot be less than $C_{pk}$.`,
        '2': t`$C_p = C_{pk} = 1.67$ is only true when the process is perfectly centered at $\mu = 45.0\text{ mm}$. Here $\mu = 43.0$ is shifted toward LSL.`,
        '3': t`Divides by $3\sigma$ in $C_p$ instead of $6\sigma$.`
      },
      commonTrap: t`Assuming $C_p > 1.33$ guarantees zero defects. If the mean drifts ($C_{pk} < C_p$), parts will violate the nearer specification limit despite a high $C_p$.`,
      reference: `${TB} · Chapter 8 (§8.4); ${D8} · Slide 65`
    },
    source: [
      { deck: TB, chapter: C8, location: 'Section 8.4 (Process Capability Indices Cp and Cpk)' },
      { deck: D8, chapter: C8, location: 'Slide 65 (Process capability)' }
    ]
  }),

  // 7. Standard Time with Allowance Factor
  q({
    id: 'Q_INDU211_TB07',
    chapter: 'ch6-11',
    topic: 'Standard Time with Allowances (Turner)',
    difficulty: 'Foundation',
    question: t`An assembly task has an average Observed Time $OT = 1.50\text{ minutes}$ and operator Performance Rating $PR = 120\%$ ($1.20$). With an Allowance Factor $AF = 15\%$ ($0.15$) applied to normal time, what is the Standard Time ($ST$)?`,
    options: [
      t`$2.07\text{ minutes}$`,
      t`$1.80\text{ minutes}$`,
      t`$1.725\text{ minutes}$`,
      t`$2.12\text{ minutes}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Work measurement standard time formula: First calculate Normal Time $NT = OT \times PR$, then add allowances: $ST = NT \times (1 + AF)$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate Normal Time ($NT$)', math: t`NT = OT \times PR = 1.50\text{ min} \times 1.20 = 1.80\text{ min}` },
        { title: 'Apply the allowance factor ($AF = 0.15$ on normal time)', math: t`ST = NT \times (1 + AF) = 1.80 \times (1 + 0.15) = 1.80 \times 1.15` },
        { title: 'Evaluate numerically', math: t`ST = 2.07\text{ minutes}` }
      ],
      answer: t`ST = 2.07\text{ minutes}`,
      whyWrong: {
        '1': t`1.80 minutes is Normal Time, omitting fatigue, personal, and unavoidable delay allowances.`,
        '2': t`1.725 minutes applies allowance directly to observed time without rating ($1.50 \times 1.15$).`,
        '3': t`2.12 minutes ($1.80 / 0.85$) applies allowance on total job time ($ST = NT / (1 - AF)$), rather than on normal time.`
      },
      commonTrap: t`Forgetting to apply the performance rating before adding allowances. Always pace-rate first ($NT$), then add allowances ($ST$).`,
      reference: `${TB} · Chapter 6 (§6.3); ${D611} · Slides 26–28`
    },
    source: [
      { deck: TB, chapter: C611, location: 'Section 6.3 (Work Measurement & Standard Time)' },
      { deck: D611, chapter: C611, location: 'Slides 26–28 (Time study and allowances)' }
    ]
  }),

  // 8. Linear Programming Shadow Price
  q({
    id: 'Q_INDU211_TB08',
    chapter: 'ch14',
    topic: 'LP Shadow Price (Turner)',
    difficulty: 'Midterm Level',
    question: t`In a profit-maximization linear program, a binding milling constraint has a shadow price of $\$35.00/\text{hour}$. If management can acquire $10$ additional milling hours at an overtime cost of $\$20.00/\text{hour}$, what is the net impact on total profit?`,
    options: [
      t`Net profit increases by $+\$150.00$`,
      t`Net profit decreases by $-\$200.00$`,
      t`Net profit increases by $+\$350.00$`,
      t`No change in profit`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A shadow price (dual value) represents the marginal increase in total objective value per unit increase in the constraint's right-hand side. If the shadow price exceeds the unit procurement cost, acquiring capacity is profitable.`,
      stepByStep: [],
      steps: [
        { title: 'Determine gross profit increase per additional hour', math: t`\text{Gross Value} = \text{Shadow Price} = \$35.00/\text{hour}` },
        { title: 'Compute net marginal profit per hour after overtime cost', math: t`\text{Net Marginal Profit} = \$35.00 - \$20.00 = +\$15.00/\text{hour}` },
        { title: 'Multiply by acquired capacity ($10\text{ hours}$)', math: t`\Delta \text{Profit} = 10\text{ hours} \times \$15.00/\text{hour} = +\$150.00` }
      ],
      answer: t`+\$150.00\ \text{net profit increase}`,
      whyWrong: {
        '1': t`Decreases by \$200 only counts the cost of the hours without recognizing the revenue generated by utilizing them.`,
        '2': t`+\$350.00 is the gross revenue increase, failing to deduct the overtime cost (\$200).`,
        '3': t`Profit definitely changes because the milling constraint was binding (resource was fully utilized).`
      },
      commonTrap: t`Confusing shadow price with market price. Shadow price is the internal opportunity value to the firm's optimal product mix.`,
      reference: `${TB} · Chapter 14 (§14.2); ${D14} · Slides 10–12`
    },
    source: [
      { deck: TB, chapter: C14, location: 'Section 14.2 (Linear Programming Duality & Shadow Prices)' },
      { deck: D14, chapter: C14, location: 'Slides 10–12 (Graphical LP and sensitivity)' }
    ]
  }),

  // 9. Multi-Server M/M/s Queue Stability
  q({
    id: 'Q_INDU211_TB09',
    chapter: 'ch15',
    topic: 'Multi-Server Queue Utilization (Turner)',
    difficulty: 'Midterm Level',
    question: t`A customer service center has $s = 3$ identical agents, each completing service at rate $\mu = 10\text{ calls/hour}$. Incoming calls arrive at Poisson rate $\lambda = 24\text{ calls/hour}$. What is the facility utilization factor $\rho$, and is the queue stable?`,
    options: [
      t`$\rho = 0.80$; the system is stable because $\rho < 1.0$`,
      t`$\rho = 2.40$; the system is unstable and the queue explodes`,
      t`$\rho = 0.30$; tellers are mostly idle`,
      t`$\rho = 1.25$; unstable`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For a multi-server $M/M/s$ queue, total service capacity is $s\mu$. Traffic intensity is $\rho = \dfrac{\lambda}{s\mu}$. A steady state exists if and only if $\rho < 1.0$.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate combined processing capacity of $s = 3$ servers', math: t`\text{Total Capacity} = s \times \mu = 3 \times 10 = 30\text{ calls/hour}` },
        { title: 'Calculate facility utilization factor $\rho$', math: t`\rho = \frac{\lambda}{s\mu} = \frac{24}{3(10)} = \frac{24}{30} = 0.80\ (80\%)` },
        { title: 'Check steady-state equilibrium condition', note: t`Since $\rho = 0.80 < 1.0$, arrival rate does not exceed total service capacity; the queue is stable.` }
      ],
      answer: t`\rho = 0.80\ \text{(stable)}`,
      whyWrong: {
        '1': t`$\rho = 2.40$ divides $\lambda$ by $\mu$ without dividing by the number of servers $s = 3$. That is $\lambda/\mu$, which represents the expected number of busy servers, not utilization per server!`,
        '2': t`$\rho = 0.30$ divides 10 by 30 instead of 24 by 30.`,
        '3': t`$\rho = 1.25$ inverts the ratio ($30/24$).`
      },
      commonTrap: t`Confusing server utilization $\rho = \frac{\lambda}{s\mu}$ with workload parameter $r = \frac{\lambda}{\mu}$. The average number of busy servers is $r = 2.4$, but each individual server is utilized at $\rho = 80\%$.`,
      reference: `${TB} · Chapter 15 (§15.3); ${D15} · Slide 8`
    },
    source: [
      { deck: TB, chapter: C15, location: 'Section 15.3 (Multi-Server Queueing Models)' },
      { deck: D15, chapter: C15, location: 'Slide 8 (Queuing formulas)' }
    ]
  }),

  // 10. Project Crashing Cost Slope
  q({
    id: 'Q_INDU211_TB10',
    chapter: 'ch17',
    topic: 'Project Crashing Cost Slope (Turner)',
    difficulty: 'Midterm Level',
    question: t`A project manager must compress a critical path by $1\text{ day}$. Two critical activities can be crashed: Activity A (Normal: 5 days, \$1,000; Crash: 3 days, \$1,600) and Activity B (Normal: 6 days, \$2,000; Crash: 4 days, \$2,800). Which activity should be crashed first?`,
    options: [
      t`Crash Activity A; cost slope is $\$300/\text{day}$ (cheaper than B's $\$400/\text{day}$)`,
      t`Crash Activity B; cost slope is $\$400/\text{day}$`,
      t`Crash both activities simultaneously`,
      t`Crash Activity B because it has a longer duration`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Project crashing cost slope represents the marginal cost to compress an activity by one unit of time: $\text{Slope} = \dfrac{\text{Crash Cost} - \text{Normal Cost}}{\text{Normal Duration} - \text{Crash Duration}}$. Always crash the critical activity with the LOWEST cost slope first.`,
      stepByStep: [],
      steps: [
        { title: 'Calculate cost slope for Activity A', math: t`S_A = \frac{\text{CC}_A - \text{NC}_A}{\text{NT}_A - \text{CT}_A} = \frac{1600 - 1000}{5 - 3} = \frac{600}{2} = \$300/\text{day}` },
        { title: 'Calculate cost slope for Activity B', math: t`S_B = \frac{\text{CC}_B - \text{NC}_B}{\text{NT}_B - \text{CT}_B} = \frac{2800 - 2000}{6 - 4} = \frac{800}{2} = \$400/\text{day}` },
        { title: 'Select the most economical critical activity to crash', math: t`S_A = \$300/\text{day} < S_B = \$400/\text{day} \implies \text{Crash Activity A}` }
      ],
      answer: t`Crash Activity A (\$300/\text{day})`,
      whyWrong: {
        '1': t`Activity B costs \$400/day to compress, which is \$100/day more expensive than Activity A.`,
        '2': t`Crashing both is unnecessary and doubles the expenditure when only 1 day of total compression is required.`,
        '3': t`Initial duration is irrelevant; only the marginal cost per day saved ($\text{Slope}$) determines optimal crashing.`
      },
      commonTrap: t`Comparing total crash costs (\$1,600 vs \$2,800) instead of the marginal cost per day saved ($\Delta \text{Cost} / \Delta \text{Time}$). Always compute the slope!`,
      reference: `${TB} · Chapter 17 (§17.3); ${D17} · Slide 14`
    },
    source: [
      { deck: TB, chapter: C17, location: 'Section 17.3 (Project Crashing and Time-Cost Trade-Offs)' },
      { deck: D17, chapter: C17, location: 'Slide 14 (Project crashing)' }
    ]
  }),

  // Past Exam Practice from Concordia University INDU 211 Midterm & Final Exams
  q({
    id: 'Q_INDU211_E01',
    chapter: 'ch4',
    pastPaper: 'Midterm Exam 2020 (Problem 2) · Concordia University',
    topic: 'Warehouse Forklift Routing: Nearest Neighbor Heuristic',
    difficulty: 'Exam Master',
    question: t`A warehouse forklift visits 5 departments (A, B, C, D, E) starting from and returning to depot P. Using the Nearest Neighbor heuristic yields the route $P \\to E \\to A \\to B \\to D \\to C \\to P$ with total distance 91. Using Second-Nearest First yields $P \\to A \\to B \\to D \\to E \\to C \\to P$ with distance 89. Is either solution guaranteed to be optimal?`,
    options: [
      t`Neither solution is optimal; Nearest Neighbor is a greedy heuristic that often incurs a severe penalty on the final return leg (true optimal is 72)`,
      t`Yes, Nearest Neighbor is guaranteed to find the global optimum for the Traveling Salesperson Problem`,
      t`Yes, the Second-Nearest First route of 89 is mathematically optimal`,
      t`Only an exhaustive search over 6! = 720 routes is capable of finding a feasible path`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Traveling Salesperson Problem (TSP) heuristics. Nearest Neighbor makes greedy, myopic local choices that neglect the overall network, frequently forcing a catastrophic last-leg penalty to return to the depot.`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate Nearest Neighbor Route', math: t`P \\xrightarrow{13} E \\xrightarrow{9} A \\xrightarrow{12} B \\xrightarrow{15} D \\xrightarrow{20} C \\xrightarrow{22} P \\implies \\text{Total} = 91` },
        { title: 'Notice the last-leg trap', note: t`Visiting C last leaves the truck with a costly return trip from C to P (22 units).` },
        { title: 'Evaluate Second-Nearest First Route', math: t`P \\xrightarrow{15} A \\xrightarrow{12} B \\xrightarrow{15} D \\xrightarrow{12} E \\xrightarrow{13} C \\xrightarrow{22} P \\implies \\text{Total} = 89` },
        { title: 'Compute True Global Optimum (via full permutation)', math: t`P \\xrightarrow{13} E \\xrightarrow{13} C \\xrightarrow{12} B \\xrightarrow{15} D \\xrightarrow{10} A \\xrightarrow{9} P \\implies \\text{Total} = 72` }
      ],
      answer: t`Neither solution is optimal; Nearest Neighbor is a greedy heuristic (true optimal is 72)`,
      whyWrong: {
        '1': t`Nearest Neighbor is an approximation heuristic, NOT an exact optimization algorithm. It guarantees neither global optimality nor bounded error.`,
        '2': t`89 is improved over 91, but still 17 units longer than the true optimum (72).`,
        '3': t`With 5 departments, total routes from P are $(5-1)! = 24$ (if symmetric) or $5! = 120$ (if directed), not 720.`
      },
      commonTrap: t`Believing greedy heuristics produce optimal results. Always check the final leg: greedy algorithms often leave the most distant points for last!`,
      reference: 'INDU 211 Midterm 2020 Problem 2; Facilities Logistics'
    },
    source: src('Midterm 2020', 'Material Handling & Logistics', 'Problem 2')
  }),

  q({
    id: 'Q_INDU211_E02',
    chapter: 'ch7',
    pastPaper: 'Sample Final Exam 2022 (Q3) · Concordia University',
    topic: 'EOQ Model Cost Trade-Off Objective',
    difficulty: 'Foundation',
    question: t`In a continuous-review fixed-order quantity inventory system, the solution of the classic Economic Order Quantity (EOQ) model determines the order quantity that:`,
    options: [
      t`Minimizes the sum of annual material ordering costs and annual inventory holding costs`,
      t`Minimizes material ordering cost and material purchasing cost`,
      t`Minimizes material purchasing cost and material carrying cost`,
      t`Minimizes variable production costs and safety stock buffer cost`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The classic EOQ model ($Q^* = \\sqrt{\\frac{2DS}{H}}$) balances ordering costs ($S \\frac{D}{Q}$) against holding costs ($H \\frac{Q}{2}$). Unit purchase cost is constant and unaffected by $Q$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify relevant annual variable inventory costs', math: t`TC(Q) = S\\left(\\frac{D}{Q}\\right) + H\\left(\\frac{Q}{2}\\right)` },
        { title: 'Differentiate with respect to Q and set to zero', math: t`\\frac{dTC}{dQ} = -\\frac{DS}{Q^2} + \\frac{H}{2} = 0 \\implies Q^* = \\sqrt{\\frac{2DS}{H}}` }
      ],
      answer: t`Minimizes the sum of annual material ordering costs and annual inventory holding costs`,
      whyWrong: {
        '1': t`In basic EOQ without quantity discounts, purchasing cost $P \\times D$ is fixed and unaffected by batch size.`,
        '2': t`Omits ordering setup costs.`,
        '3': t`Safety stock is zero in deterministic EOQ.`
      },
      commonTrap: t`Confusing total business costs with relevant trade-off costs. Only costs that vary with order size $Q$ dictate the EOQ minimum!`,
      reference: 'INDU 211 Sample Final Exam 2022 Question 3; Turner Chapter 7'
    },
    source: src('Final 2022', 'Inventory Control', 'Question 3')
  }),

  q({
    id: 'Q_INDU211_E03',
    chapter: 'ch4',
    pastPaper: 'Midterm Exam 2020 (Q9) · Concordia University',
    topic: 'Facility Layout Typology & Production Volume',
    difficulty: 'Midterm Level',
    question: t`Which combination correctly pairs manufacturing facility layout types with their ideal production environment?`,
    options: [
      t`Product layout: single/few product types in high volume; Process layout: diverse parts in lower quantities`,
      t`Product layout: high variety and low volume; Process layout: dedicated mass production lines`,
      t`Fixed-position layout: mass production of microelectronics`,
      t`Cellular layout: exclusively used for one-of-a-kind naval shipbuilding`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Facility layout typology. Product layouts (assembly lines) group machines according to product flow for high-volume standardized production. Process layouts group by machine function for high-variety job shops.`,
      stepByStep: [],
      steps: [
        { title: 'Product layout', note: t`Dedicated sequence of workstations; high volume, low variety (e.g. automotive assembly).` },
        { title: 'Process layout', note: t`Functional departments (milling, welding); low volume, high variety (e.g. custom machine shops).` },
        { title: 'Fixed-position layout', note: t`Product remains stationary while tools and workers move (e.g. ships, aircraft).` }
      ],
      answer: t`Product layout: high volume; Process layout: diverse parts in lower quantities`,
      whyWrong: {
        '1': t`Reverses product and process layouts.`,
        '2': t`Microelectronics use cleanroom product or cellular layouts, not fixed-position.`,
        '3': t`Shipbuilding uses fixed-position layout, not cellular manufacturing.`
      },
      commonTrap: t`Confusing process layout (functional grouping) with product layout (sequential line flow).`,
      reference: 'INDU 211 Midterm 2020 Question 9; Turner Chapter 4'
    },
    source: src('Midterm 2020', 'Facility Layout', 'Question 9')
  }),

  q({
    id: 'Q_INDU211_E04',
    chapter: 'ch1',
    pastPaper: 'Sample Final Exam 2022 (Q1) & Midterm 2020 (Q3) · Concordia University',
    topic: 'Professional Engineering Accreditation in Canada',
    difficulty: 'Foundation',
    question: t`In Canada, engineering is a regulated profession. To obtain the title of Professional Engineer (P.Eng. / ing.), an applicant must:`,
    options: [
      t`Complete an undergraduate engineering program accredited by the Canadian Engineering Accreditation Board (CEAB) and fulfill provincial licensure requirements (e.g. OIQ/PEO)`,
      t`Obtain a Ph.D. degree in natural science or mathematics from any recognized university`,
      t`Complete ISO quality management certification authorized by the federal government`,
      t`Complete a two-year college diploma in industrial technology approved by a municipality`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Under Canadian provincial engineering acts, professional engineering licensure requires an undergraduate engineering degree accredited by Engineers Canada's CEAB (or passing equivalency examinations), plus ethical and practical experience requirements.`,
      stepByStep: [],
      steps: [
        { title: 'Academic Accreditation', note: t`CEAB accredits Canadian undergraduate engineering programs.` },
        { title: 'Provincial Regulation', note: t`Provincial associations (OIQ in Quebec, PEO in Ontario) license individuals to practice.` }
      ],
      answer: t`Complete an undergraduate engineering program accredited by CEAB and fulfill provincial licensure`,
      whyWrong: {
        '1': t`A Ph.D. in pure science does not fulfill CEAB engineering curriculum requirements without professional qualification.`,
        '2': t`ISO certification is for organizational quality management, not professional engineering licensure.`,
        '3': t`College diplomas qualify for engineering technologist status, not Professional Engineer (P.Eng. / ing.).`
      },
      commonTrap: t`Assuming Canadian engineering is regulated federally or that science degrees automatically confer engineering status.`,
      reference: 'INDU 211 Sample Final Exam 2022 Question 1; Concordia Course Introduction'
    },
    source: src('Final 2022', 'Engineering Profession', 'Question 1')
  }),

  q({
    id: 'Q_INDU211_E05',
    chapter: 'ch1',
    pastPaper: 'Midterm Exam 2020 (Q8) · Concordia University',
    topic: 'Concurrent Engineering Principles',
    difficulty: 'Midterm Level',
    question: t`In modern industrial manufacturing systems, 'Concurrent Engineering' fundamentally refers to:`,
    options: [
      t`A systematic approach where product design and manufacturing process development are integrated simultaneously from the earliest phase`,
      t`Designing a product entirely first, and then handing it 'over the wall' to manufacturing engineers`,
      t`Running two identical assembly lines concurrently to double production throughput`,
      t`A software method exclusively used for concurrent multithreaded cloud computing`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Concurrent (Simultaneous) Engineering replaces sequential 'over-the-wall' product development by involving cross-functional teams (design, manufacturing, quality, suppliers) concurrently from concept inception.`,
      stepByStep: [],
      steps: [
        { title: 'Sequential vs Concurrent', note: t`Sequential engineering leads to costly redesigns when manufacturing discovers design flaws late. Concurrent engineering considers manufacturability (DFM/DFA) early.` },
        { title: 'Benefits', note: t`Shorter lead time to market, lower lifetime product costs, higher quality.` }
      ],
      answer: t`A systematic approach where product design and manufacturing processes are integrated simultaneously`,
      whyWrong: {
        '1': t`'Over the wall' is traditional sequential engineering, the exact opposite of concurrent engineering.`,
        '2': t`Duplicating assembly lines is capacity expansion, not concurrent product engineering.`,
        '3': t`Multithreaded computing is computer science concurrency, not industrial engineering product design.`
      },
      commonTrap: t`Confusing concurrent product development methodology with computer multiprocessing.`,
      reference: 'INDU 211 Midterm 2020 Question 8; Turner Chapter 1'
    },
    source: src('Midterm 2020', 'Concurrent Engineering', 'Question 8')
  })
];
