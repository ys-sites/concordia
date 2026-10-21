import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

// MIAE 221 — Lecture 11 (Mechanical Properties II: plastic deformation, proportional limit, yield,
// elastic recovery, necking, engineering vs true stress, strain hardening, safety factors).
// The brass example (slide 12, parts a–d) and the post-UTS drop are already drilled in
// miae221_enhancements.ts (Q_MIAE221_CH6_01–04, _07), so these questions cover the rest of the deck.
const L11 = 'lecture 11-mech prop 2-students26.pdf';
const CH6 = 'Ch. 6 · Mechanical Properties of Metals';
const src = (location: string): QuestionSource[] => [{ deck: L11, chapter: CH6, location }];
const ref = (slide: string) => `${L11} · ${slide}`;

const q = (p: Omit<PracticeQuestion, 'courseId' | 'chapter'>): PracticeQuestion => ({ courseId: 'MIAE221', chapter: 'mechanical', ...p });

export const MIAE221_LECTURE11: PracticeQuestion[] = [
  q({
    id: 'Q_MIAE221_L1101',
    topic: 'Plastic Deformation: Definition',
    difficulty: 'Foundation',
    question: t`Lecture 11 lists the features of plastic deformation in metals. Which statement is FALSE?`,
    options: [
      t`Stress and strain stay proportional, so Hooke's law still holds with a smaller slope`,
      t`The deformation is not reversible: the specimen stays longer after the load is removed`,
      t`In crystalline metals it happens mainly by the motion of dislocations along slip planes`,
      t`Atomic bonds break and re-form as whole planes of atoms shear past one another`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Plastic deformation (slide 2): stress and strain are **not** proportional, the deformation is **not** reversible, and it occurs by breaking and re-arranging bonds, which in crystals means dislocation motion (Chapter 7).`,
      stepByStep: [
        t`Past the yield point the curve bends over, so no single slope relates $\sigma$ and $\varepsilon$: Hooke's law no longer applies at all.`,
        t`On unloading only the elastic strain $\sigma/E$ is recovered; the sheared planes stay sheared (slide 3), so the shape change is permanent.`,
        t`In crystals the shearing of planes is carried by dislocations, one row of bonds at a time.`
      ],
      whyWrong: {
        '1': t`True: "Plastic means permanent" is the point of slide 3. The planes stay sheared after unloading.`,
        '2': t`True: slide 2 says deformation in crystalline materials occurs primarily by motion of dislocations.`,
        '3': t`True: the slide 3 cartoon shows bonds stretching and planes shearing; planes remain sheared after unloading.`
      },
      commonTrap: t`Thinking plastic deformation is "elastic with a lower modulus". There is no constant slope past yield, and the unloading line still has the original slope $E$.`,
      reference: ref('Slides 2–3 (page 1)')
    },
    source: src('Slides 2–3 (plastic deformation)')
  }),
  q({
    id: 'Q_MIAE221_L1102',
    topic: 'Proportional Limit vs Yield Strength',
    difficulty: 'Midterm Level',
    question: t`How does the proportional limit $P$ (slide 4) relate to the 0.2 % offset yield strength $\sigma_y$ (slide 5)?`,
    options: [
      t`$P$ is where the curve stops being linear; $\sigma_y$ leaves 0.002 permanent strain; they are close but not the same`,
      t`They are two names for one point: Hooke's law stops working exactly where permanent deformation begins`,
      t`$\sigma_y$ is always reached first, because a little permanent strain appears before the curve bends at $P$`,
      t`$P$ is read where the 0.002 offset line meets the curve, and $\sigma_y$ is the peak of the engineering curve`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The proportional limit is the end of linearity (Hooke's law stops applying). The yield strength is defined by a rule: the stress at which a line of slope $E$ through $\varepsilon = 0.002$ meets the curve, i.e. the stress that leaves 0.2 % permanent strain.`,
      stepByStep: [
        t`Slide 4: beyond $P$ the strain is no longer proportional to the stress, so Hooke's law cannot be used.`,
        t`Slide 5: $\sigma_y$ is found with the 0.2 % offset construction when there is no distinct yield point.`,
        t`Slide 5 (highlighted): the yield and proportional-limit points are close to each other but do not correspond to the same location; normally $\sigma_p < \sigma_y$.`
      ],
      whyWrong: {
        '1': t`The slide stresses that they "do not correspond to the same location on the stress–strain curve".`,
        '2': t`The order is reversed: the curve first stops being linear at $P$, and the 0.002 offset stress lies a little higher.`,
        '3': t`The offset intersection defines $\sigma_y$, not $P$; the peak of the engineering curve is the tensile strength.`
      },
      commonTrap: t`Using "proportional limit", "elastic limit" and "yield strength" interchangeably. In exams, $\sigma_y$ means the 0.2 % offset value unless a distinct yield point is given.`,
      reference: ref('Slides 4–5 (pages 1–2)')
    },
    source: src('Slides 4–5 (proportional limit, yield strength)')
  }),
  q({
    id: 'Q_MIAE221_L1103',
    topic: 'Upper & Lower Yield Points (Low-Carbon Steel)',
    difficulty: 'Foundation',
    question: t`A low-carbon steel shows an upper yield point, a sudden drop, then a serrated plateau. According to Lecture 11, which value is reported as its yield strength?`,
    options: [
      t`The average stress along the lower yield point plateau`,
      t`The peak stress at the upper yield point before the drop`,
      t`The stress where a 0.002 offset line meets the upper peak`,
      t`The mean of the upper and the lower yield point stresses`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For a low-carbon steel with a yield-point phenomenon, the yield strength is defined as the **average stress at the lower yield point** (slide 6).`,
      stepByStep: [
        t`The upper yield point depends on test details (loading rate, alignment, surface), so it is not reproducible.`,
        t`After the drop the steel deforms at a nearly constant, serrated stress: the lower yield point. Its average is the design value.`,
        t`Physically, interstitial C and N atoms pin dislocations; breaking free needs the upper stress, gliding afterwards needs only the lower one.`
      ],
      whyWrong: {
        '1': t`The upper yield point is not used; it varies with the test conditions.`,
        '2': t`The offset method is for materials with no distinct yield point (material B on slide 5), not for this curve.`,
        '3': t`No averaging of upper and lower values; only the lower plateau is averaged.`
      },
      commonTrap: t`Reporting the highest point of the yield region because it "looks like" the yield point.`,
      reference: ref('Slide 6 (page 2)')
    },
    source: src('Slide 6 (upper and lower yield points)')
  }),
  q({
    id: 'Q_MIAE221_L1104',
    topic: 'Elastic Recovery & Permanent Set',
    difficulty: 'Midterm Level',
    question: t`The Lecture 11 brass specimen ($E = 93.8$ GPa, $l_0 = 250$ mm) is loaded to $345$ MPa, where its total strain is $0.06$, and then the load is removed. What permanent elongation remains?`,
    options: [t`$14.1$ mm`, t`$15.0$ mm`, t`$0.92$ mm`, t`$15.9$ mm`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`On unloading, the specimen comes back along a line of slope $E$ (slide 7) and recovers only the elastic strain $\sigma/E$. The rest of the strain is permanent.`,
      stepByStep: [],
      steps: [
        { title: 'Elastic strain recovered on unloading', math: t`\varepsilon_{el} = \frac{\sigma}{E} = \frac{345}{93\,800} = 0.0037` },
        { title: 'Permanent (plastic) strain', math: t`\varepsilon_{pl} = 0.06 - 0.0037 = 0.0563` },
        { title: 'Permanent elongation', math: t`\Delta l = 0.0563 \times 250\ \text{mm} = 14.1\ \text{mm}` }
      ],
      answer: t`\Delta l_{\text{permanent}} \approx 14.1\ \text{mm}`,
      whyWrong: {
        '1': t`$15.0$ mm is the elongation while the load is still applied ($0.06 \times 250$); part of it springs back.`,
        '2': t`$0.92$ mm is only the elastic part that is recovered, $0.0037 \times 250$.`,
        '3': t`$15.9$ mm adds the elastic strain instead of subtracting it.`
      },
      commonTrap: t`Forgetting elastic recovery: the total strain under load is not the permanent strain.`,
      reference: ref('Slides 7 and 12 (pages 2–3)')
    },
    source: src('Slides 7, 12 (elastic recovery, brass example)')
  }),
  q({
    id: 'Q_MIAE221_L1105',
    topic: 'Mechanical Behavior: Strain Hardening to Fracture',
    difficulty: 'Foundation',
    question: t`Slide 8: "As plastic deformation proceeds, the force increases due to ____ ... These voids result in even higher stress concentrations and eventual ____." Which pair fills the blanks?`,
    options: [
      t`strain hardening; fracture`,
      t`necking; elastic recovery`,
      t`a growing area; strain hardening`,
      t`recrystallization; necking`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Between yield and the tensile strength the load rises because the metal **strain hardens**: dislocations multiply and block one another. After necking, voids form in the neck, concentrate the stress further and lead to **fracture**.`,
      stepByStep: [
        t`Yield → $TS$: uniform plastic deformation; strain hardening raises the stress needed to keep deforming.`,
        t`At $TS$ (point $M$) hardening can no longer offset the shrinking area, so a neck forms.`,
        t`In the neck, voids nucleate, grow and join into a crack: fracture at point $F$.`
      ],
      whyWrong: {
        '1': t`Necking starts only at the maximum load and causes the load to drop, not rise; elastic recovery happens on unloading.`,
        '2': t`The cross-section shrinks during a tensile test, it never grows; and voids lead to fracture, not to hardening.`,
        '3': t`Recrystallization needs annealing at high temperature; it softens the metal rather than raising the load.`
      },
      commonTrap: t`Explaining the rising load with geometry. The area is decreasing the whole time; the load rises because the material itself gets stronger.`,
      reference: ref('Slide 8 (page 2)')
    },
    source: src('Slide 8 (mechanical behavior)')
  }),
  q({
    id: 'Q_MIAE221_L1106',
    topic: 'Why Design Uses Yield Strength',
    difficulty: 'Foundation',
    question: t`Why is the yield stress usually a more important design property than the tensile strength for structural applications (slide 9)?`,
    options: [
      t`Once $\sigma_y$ is passed the structure has deformed permanently beyond acceptable limits`,
      t`The tensile strength cannot be measured reliably because the specimen necks before it`,
      t`Yield strength is always much higher than the tensile strength for structural steels`,
      t`Tensile strength only applies to brittle materials, which never yield before breaking`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A structure fails its purpose when it deforms permanently, long before it breaks. So design keeps stresses below $\sigma_y$ (with a safety factor), not below $TS$.`,
      stepByStep: [
        t`Slide 9: once the yield stress is passed, the structure has deformed beyond acceptable limits.`,
        t`A permanently bent beam or stretched bolt has already failed in service, even if it is still in one piece.`,
        t`Slide 15 follows from this: $\sigma_{\text{working}} = \sigma_y / N$.`
      ],
      whyWrong: {
        '1': t`$TS$ is measured routinely as the maximum of the engineering curve; necking starts at that point.`,
        '2': t`The opposite: $\sigma_y < TS$ for ductile metals (1045 steel: $310$ vs $565$ MPa).`,
        '3': t`Ductile metals have both a yield strength and a tensile strength; brittle materials are the ones without much yielding.`
      },
      commonTrap: t`Designing against the largest number on the curve ($TS$). That allows permanent deformation in service.`,
      reference: ref('Slide 9 (page 3)')
    },
    source: src('Slide 9 (yield vs tensile strength in design)')
  }),
  q({
    id: 'Q_MIAE221_L1107',
    topic: 'Engineering → True Stress & Strain',
    difficulty: 'Midterm Level',
    question: t`At point $A$ of the brass curve the engineering stress is $345$ MPa at an engineering strain of $0.06$ (before necking). What are the true stress and true strain?`,
    options: [
      t`$\sigma_T = 366$ MPa, $\varepsilon_T = 0.058$`,
      t`$\sigma_T = 345$ MPa, $\varepsilon_T = 0.060$`,
      t`$\sigma_T = 325$ MPa, $\varepsilon_T = 0.058$`,
      t`$\sigma_T = 366$ MPa, $\varepsilon_T = 0.062$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Before necking the volume is constant ($A_0 l_0 = A_i l_i$), so $\sigma_T = \sigma(1+\varepsilon)$ and $\varepsilon_T = \ln(1+\varepsilon)$. True stress is higher than engineering stress because the real area is smaller than $A_0$.`,
      stepByStep: [],
      steps: [
        { title: 'True stress', math: t`\sigma_T = \sigma(1+\varepsilon) = 345 \times 1.06 = 366\ \text{MPa}` },
        { title: 'True strain', math: t`\varepsilon_T = \ln(1+\varepsilon) = \ln 1.06 = 0.058` }
      ],
      answer: t`\sigma_T \approx 366\ \text{MPa},\quad \varepsilon_T \approx 0.058`,
      whyWrong: {
        '1': t`These are the engineering values; the true stress divides by the smaller, current area.`,
        '2': t`$345/1.06 = 325$: dividing by $(1+\varepsilon)$ makes the true stress lower, which is backwards.`,
        '3': t`$e^{0.06} - 1 = 0.062$ inverts the strain relation; true strain is $\ln(1 + \varepsilon)$.`
      },
      commonTrap: t`Applying these formulas after necking. They assume uniform strain, which fails once the neck forms.`,
      reference: ref('Slides 11–12 (page 3)')
    },
    source: src('Slides 11–12 (true stress and strain)')
  }),
  q({
    id: 'Q_MIAE221_L1108',
    topic: 'Engineering vs True Stress: Reporting',
    difficulty: 'Foundation',
    question: t`The true stress–strain curve gives a more accurate picture of a material's breaking strength. Why are engineering values still the ones usually reported (slide 11)?`,
    options: [
      t`The actual cross-sectional area is difficult to measure in real time during the test`,
      t`True stress is always lower than engineering stress, so it is not conservative enough`,
      t`The true and engineering curves are identical until fracture for most ductile metals`,
      t`True stress can only be defined in compression tests, not in standard tensile tests`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\sigma_T = F/A_i$ needs the instantaneous area, which is hard to track while the specimen is being pulled, especially once it necks. $F/A_0$ only needs the load and the original area.`,
      stepByStep: [
        t`Slide 11: use of the initial area gives a lower value than the actual one (ratio $A_0/A_c$).`,
        t`The true curve is more accurate, but measuring the actual area in real time is difficult.`,
        t`So reported values are usually engineering stresses, and the true fracture strength ($> TS$) does not show on the engineering diagram.`
      ],
      whyWrong: {
        '1': t`Backwards: $A_i < A_0$, so true stress is higher than engineering stress.`,
        '2': t`They separate as soon as plastic strain is significant, and very strongly in the neck.`,
        '3': t`True stress $F/A_i$ is defined for any test; slide 11 discusses it for tension.`
      },
      commonTrap: t`Concluding that the true fracture strength is below $TS$ because the engineering curve ends lower. The true fracture strength is higher than $TS$.`,
      reference: ref('Slide 11 (page 3)')
    },
    source: src('Slide 11 (engineering vs true stress)')
  }),
  q({
    id: 'Q_MIAE221_L1109',
    topic: 'Strain Hardening: Unload & Reload',
    difficulty: 'Midterm Level',
    question: t`A metal with initial yield strength $\sigma_{y_0} = 250$ MPa is loaded to $400$ MPa, unloaded, and then reloaded. At approximately what stress does it now begin to yield (slide 13)?`,
    options: [t`About $400$ MPa`, t`About $250$ MPa`, t`About $325$ MPa`, t`About $150$ MPa`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Strain hardening is an increase in $\sigma_y$ due to plastic deformation. On reloading, the metal stays elastic up to the stress at which it was unloaded, so its new yield strength is $\sigma_{y_1} \approx 400$ MPa.`,
      stepByStep: [
        t`Unloading from $400$ MPa follows a line of slope $E$ back to a permanent strain.`,
        t`Reloading climbs back up the same line, elastically, to $400$ MPa.`,
        t`Only then does plastic flow resume, continuing the original curve: $\sigma_{y_1} \approx 400\ \text{MPa} > \sigma_{y_0}$.`
      ],
      whyWrong: {
        '1': t`That is the yield strength before deformation; the plastic strain has raised it.`,
        '2': t`There is no averaging: the reloading line is elastic all the way up to the previous maximum stress.`,
        '3': t`$400 - 250$ has no physical meaning here.`
      },
      commonTrap: t`Assuming unloading "resets" the material. The dislocations created during loading stay, which is the basis of cold working.`,
      reference: ref('Slide 13 (page 4)')
    },
    source: src('Slide 13 (strain hardening)')
  }),
  q({
    id: 'Q_MIAE221_L1110',
    topic: 'Hollomon Law: True Stress',
    difficulty: 'Midterm Level',
    question: t`For annealed low-carbon steel the slide 14 table gives $K = 530$ MPa and $n = 0.26$. Using $\sigma_T = K\varepsilon_T^{\,n}$, what true stress is needed for a true strain of $0.10$?`,
    options: [t`$291$ MPa`, t`$13.8$ MPa`, t`$53.0$ MPa`, t`$138$ MPa`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The Hollomon law $\sigma_T = K\varepsilon_T^{\,n}$ fits the plastic part of the true curve from yield up to necking. $n$ is an exponent, not a multiplier.`,
      stepByStep: [],
      steps: [
        { title: 'Raise the strain to the power n', math: t`(0.10)^{0.26} = 10^{-0.26} = 0.550` },
        { title: 'Multiply by K', math: t`\sigma_T = 530 \times 0.550 = 291\ \text{MPa}` }
      ],
      answer: t`\sigma_T \approx 291\ \text{MPa}`,
      whyWrong: {
        '1': t`$530 \times 0.26 \times 0.10$: multiplying by $n$ instead of using it as an exponent.`,
        '2': t`$530 \times 0.10$: this sets $n = 1$, which is linear behaviour.`,
        '3': t`$530 \times 0.26 \times |\log 0.10|$: mixing up the log–log form with the power law.`
      },
      commonTrap: t`Plugging engineering strain or using $n$ as a coefficient. Use true strain, raised to the power $n$.`,
      reference: ref('Slides 13–14 (page 4)')
    },
    source: src('Slides 13–14 (Hollomon equation)')
  }),
  q({
    id: 'Q_MIAE221_L1111',
    topic: 'Strain-Hardening Exponent n',
    difficulty: 'Midterm Level',
    question: t`From the slide 14 table, which material gains the most strength per unit of plastic strain, i.e. has the steepest line on the log–log plot?`,
    options: [
      t`Copper (annealed), $n = 0.54$`,
      t`Stainless steel 304, $K = 1275$ MPa`,
      t`Alloy steel 4340, $n = 0.15$`,
      t`Aluminum alloy 2024, $K = 690$ MPa`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Taking logs, $\log\sigma_T = \log K + n\log\varepsilon_T$: a straight line of slope $n$. The higher the slope, the stronger the material becomes when it is strained (slide 14), so the largest $n$ wins.`,
      stepByStep: [
        t`Compare $n$, not $K$: copper 0.54 > brass 0.49 > stainless 0.45 > low-carbon steel 0.26 > Al 0.20 > 2024 Al 0.16 > 4340 steel 0.15.`,
        t`$K$ is the true stress at $\varepsilon_T = 1$: it sets the height of the line, not its slope.`,
        t`Annealed FCC metals (copper, brass, austenitic stainless) typically have high $n$.`
      ],
      whyWrong: {
        '1': t`304 stainless has the largest $K$ (highest line), but its slope $n = 0.45$ is below copper's.`,
        '2': t`4340 has the smallest $n$ in the table, so it hardens the least.`,
        '3': t`$K$ does not measure hardening rate, and 2024's $n = 0.16$ is low: heat treatment already used up much of its hardening capacity.`
      },
      commonTrap: t`Picking the largest $K$. Strength level ($K$) and hardening rate ($n$) are different things.`,
      reference: ref('Slide 14 (page 4)')
    },
    source: src('Slide 14 (log–log plot and n, K table)')
  }),
  q({
    id: 'Q_MIAE221_L1112',
    topic: 'Log–Log Plot: Meaning of n and K',
    difficulty: 'Foundation',
    question: t`When the true stress–true strain curve is plotted on log–log axes (slide 14), what are the slope of the straight line and the stress read at $\varepsilon_T = 1$?`,
    options: [
      t`Slope $= n$; stress at $\varepsilon_T = 1$ is $K$`,
      t`Slope $= K$; stress at $\varepsilon_T = 1$ is $n$`,
      t`Slope $= E$; stress at $\varepsilon_T = 1$ is $TS$`,
      t`Slope $= 1/n$; stress at $\varepsilon_T = 1$ is $\sigma_y$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$\sigma_T = K\varepsilon_T^{\,n}$ becomes $\log\sigma_T = \log K + n\log\varepsilon_T$: a straight line ("because it is a straight line in a log–log plot") with slope $n = a/b$ and, since $\log 1 = 0$, $\sigma_T = K$ at $\varepsilon_T = 1$.`,
      stepByStep: [
        t`Take $\log$ of both sides of the power law.`,
        t`Compare with $y = c + mx$: $m = n$ and $c = \log K$.`,
        t`At $\varepsilon_T = 1$, $\log\varepsilon_T = 0$, so $\log\sigma_T = \log K$.`
      ],
      whyWrong: {
        '1': t`$K$ is a stress (MPa); $n$ is dimensionless. The exponent becomes the slope after taking logs.`,
        '2': t`$E$ is the slope of the elastic line on linear axes, not of the plastic true curve on log–log axes.`,
        '3': t`The slope is $n$ itself, and $\sigma_y$ marks the start of plastic flow, not the value at $\varepsilon_T = 1$.`
      },
      commonTrap: t`Reading $K$ at the start of the line. $K$ is extrapolated to $\varepsilon_T = 1.0$, beyond the start of necking.`,
      reference: ref('Slide 14 (page 4)')
    },
    source: src('Slide 14 (log–log plot)')
  }),
  q({
    id: 'Q_MIAE221_L1113',
    topic: 'Finding n and K from Two Points',
    difficulty: 'Exam Master',
    question: t`An annealed brass gives $\sigma_T = 206$ MPa at $\varepsilon_T = 0.05$ and $\sigma_T = 407$ MPa at $\varepsilon_T = 0.20$. Assuming $\sigma_T = K\varepsilon_T^{\,n}$, find $n$ and $K$.`,
    options: [
      t`$n = 0.49$, $K \approx 894$ MPa`,
      t`$n = 0.49$, $K \approx 4120$ MPa`,
      t`$n = 2.04$, $K \approx 93\,000$ MPa`,
      t`$n = 1340$ MPa, $K \approx 139$ MPa`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide the two Hollomon equations so that $K$ cancels, take logs to get $n$, then back-substitute one point for $K$. The result matches the slide 14 table for 70Cu–30Zn brass ($n = 0.49$, $K = 895$ MPa).`,
      stepByStep: [],
      steps: [
        { title: 'Ratio of the two points (K cancels)', math: t`\frac{407}{206} = \left(\frac{0.20}{0.05}\right)^{n} = 4^{\,n}` },
        { title: 'Take logs', math: t`n = \frac{\ln(407/206)}{\ln 4} = \frac{0.681}{1.386} = 0.49` },
        { title: 'Back-substitute the first point', math: t`K = \frac{206}{(0.05)^{0.49}} = \frac{206}{0.2304} \approx 894\ \text{MPa}` }
      ],
      answer: t`n \approx 0.49,\quad K \approx 894\ \text{MPa}`,
      whyWrong: {
        '1': t`$206/0.05 = 4120$ divides by the strain without the exponent $n$.`,
        '2': t`$\ln 4 / \ln(407/206) = 2.04$ inverts the ratio of logs.`,
        '3': t`$(407-206)/(0.20-0.05)$ is a slope on linear axes, with units of MPa; $n$ is the dimensionless log–log slope.`
      },
      commonTrap: t`Using engineering stress or strain values, or forgetting to apply the exponent when solving for $K$.`,
      reference: ref('Slides 13–14 (page 4)')
    },
    source: src('Slides 13–14 (strain hardening, log–log fit)')
  }),
  q({
    id: 'Q_MIAE221_L1114',
    topic: 'Factor of Safety: Rod Diameter',
    difficulty: 'Midterm Level',
    question: t`Slide 15: a 1045 carbon steel rod ($\sigma_y = 310$ MPa, $TS = 565$ MPa) carries $F = 220\,000$ N. With a factor of safety $N = 5$, what minimum diameter prevents yielding?`,
    options: [t`$6.7$ cm`, t`$5.0$ cm`, t`$3.0$ cm`, t`$3.4$ cm`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Design uncertainties mean we do not push the limit: the allowable stress is $\sigma_{\text{working}} = \sigma_y/N$, and the area must keep $F/A_0$ at or below it.`,
      stepByStep: [],
      steps: [
        { title: 'Working stress', math: t`\sigma_{w} = \frac{\sigma_y}{N} = \frac{310}{5} = 62\ \text{MPa}` },
        { title: 'Required area', math: t`A_0 = \frac{F}{\sigma_w} = \frac{220\,000}{62\times10^{6}} = 3.55\times10^{-3}\ \text{m}^2` },
        { title: 'Diameter from A = πd²/4', math: t`d = \sqrt{\frac{4A_0}{\pi}} = 0.0672\ \text{m} \approx 6.7\ \text{cm}` }
      ],
      answer: t`d \approx 6.7\ \text{cm}`,
      whyWrong: {
        '1': t`Using $TS = 565$ MPa: $\sigma_w = 113$ MPa gives $d \approx 5.0$ cm, but yielding (not breaking) is the design limit.`,
        '2': t`Forgetting the factor of safety ($\sigma_w = 310$ MPa) gives $d \approx 3.0$ cm, with no margin.`,
        '3': t`$\sqrt{A_0/\pi} = 3.36$ cm is the radius, not the diameter.`
      },
      commonTrap: t`Designing with $TS$ or mixing radius and diameter in $A_0$.`,
      reference: ref('Slide 15 (page 4)')
    },
    source: src('Slide 15 (safety factors in design)')
  })
];
