import { PracticeQuestion } from '../types';
import { t } from './solutions/types';

// Official Teacher Midterm Examination Questions & Complete Worked Solutions
// Course: INDU 211 (Introduction to Production and Manufacturing Systems)
// Exam: Midterm Exam (Paper A, October 21, 2025, Total Marks: 50)
// Concordia University · Gina Cody School of Engineering

export const TEACHER_EXAM_CHAPTER = 'teacher-exam';
const P211 = 'INDU 211 Midterm Fall 2025 (Paper A)';

const FIG_BOM = {
  src: '/teacher-exams/indu211_bom_trees.png',
  alt: 'Bill of Materials trees for Product 1 (demand 10) and Product 2 (demand 20) showing subassemblies S-1 to S-5 and components C-1 to C-5 with bracket usage multipliers.',
  caption: 'Figure 1: Multi-level BOM hierarchy for Product 1 and Product 2 (Problem 2, 10 Marks)'
};

const FIG_TRANS = {
  src: '/teacher-exams/indu211_transportation_table.png',
  alt: 'Transportation problem initial matrix and comparison between Northwest Corner Solution S1 ($935) and Lowest Cost First Solution S2 ($725).',
  caption: 'Figure 2: Problem 3 Transportation matrix and comparison of S1 vs S2 allocations (16 Marks)'
};

const FIG_TSP = {
  src: '/teacher-exams/indu211_tsp_matrix.png',
  alt: 'Asymmetric AGV travel time matrix across Storage S and Machines M1 through M5 with routing sequences S1 and S2.',
  caption: 'Figure 3: Problem 4 AGV Travel Time Matrix and Nearest-Neighbor Tours (12 Marks)'
};

const indu = (n: number, p: Omit<PracticeQuestion, 'courseId' | 'chapter' | 'pastPaper' | 'id' | 'keepOptionOrder'>): PracticeQuestion => ({
  id: `TX_INDU211_2025_Q${String(n).padStart(2, '0')}`,
  courseId: 'INDU211',
  chapter: TEACHER_EXAM_CHAPTER,
  pastPaper: `${P211}, Q${n}`,
  keepOptionOrder: true,
  ...p
});

export const INDU211_TEACHER_EXAM: PracticeQuestion[] = [
  // -----------------------------------------------------------------------
  // Problem 1: Multiple Choice Questions (12 Marks, 1 mark each)
  // -----------------------------------------------------------------------
  indu(1, {
    topic: 'Engineering Foundations & Ethics (Ch. 1–2)',
    difficulty: 'Foundation',
    question: 'Which of the following statements is correct regarding the nature of science and engineering?',
    options: [
      'Science is based purely on imagination and creativity rather than observation and experimentation.',
      'Results generated from computer modeling are sufficiently realistic to guide engineering practice without validation.',
      'Scientific theories can be validated through physical experiments, and these theories may be applied to develop technologies that solve practical problems.',
      'None of the above.'
    ],
    correctIndex: 2,
    explanation: {
      coreConcept: 'Science discovers and validates physical theories empirically through experimentation; engineering synthesizes and applies these validated theories to design practical technologies.',
      stepByStep: [
        'Option (a) is incorrect: science is fundamentally grounded in empirical observation and rigorous hypothesis testing.',
        'Option (b) is incorrect: computer models are idealized mathematical simulations that must be verified against physical tests and safety codes.',
        'Option (c) accurately captures the relationship between scientific discovery and applied engineering.'
      ],
      whyWrong: {
        '0': 'Ignores the requirement of empirical validation in the scientific method.',
        '1': 'Over-relies on computational modeling without experimental verification.',
        '3': 'Option (c) is completely correct.'
      },
      commonTrap: 'Assuming computer simulations in modern engineering replace the need for physical experimental validation.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q1; Course Text Chapter 1'
    }
  }),

  indu(2, {
    topic: 'Engineering Foundations & Ethics (Ch. 1–2)',
    difficulty: 'Foundation',
    question: 'Which of the following activities falls under the statutory definition of the "practice of engineering"?',
    options: [
      'Designing a bridge using structural analysis principles',
      'Advising on safe material use for a factory process',
      'Supervising the construction of a power plant',
      'All of the above'
    ],
    correctIndex: 3,
    explanation: {
      coreConcept: 'Under Canadian provincial engineering statutes (e.g., OIQ, PEO), the practice of engineering encompasses planning, designing, evaluating, advising, and supervising any work requiring engineering principles to safeguard life, health, and property.',
      stepByStep: [
        'Bridge structural design requires public safety analysis and engineering principles.',
        'Advising on hazardous materials requires chemical/materials engineering expertise.',
        'Supervising industrial facility construction involves direct engineering oversight.',
        'Therefore, all three activities fall under the legal practice of engineering.'
      ],
      whyWrong: {
        '0': 'Designing is an engineering activity, but advising and supervising also qualify.',
        '1': 'Advising on safety is an engineering activity, but designing and supervising also qualify.',
        '2': 'Construction supervision is an engineering activity, but designing and advising also qualify.'
      },
      commonTrap: 'Thinking engineering practice only includes technical mathematical design and excludes advisory safety reports or construction supervision.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q2; Engineers Act / OIQ Code of Ethics'
    }
  }),

  indu(3, {
    topic: 'Engineering Foundations & Ethics (Ch. 1–2)',
    difficulty: 'Foundation',
    question: 'In Canada, engineering is a profession and:',
    options: [
      'Can be carried out by scientists who hold a Ph.D. in a scientific field.',
      'Is regulated by provincial associations of professional engineers.',
      'Is open to anyone with a high school diploma and practical skills.',
      'Is governed by the United Nations Commission on Science and Technology for Development (UNCSTD).',
      'None of the above.'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'In Canada, the engineering profession is self-regulated at the provincial and territorial level through 12 constituent associations (such as OIQ in Quebec and PEO in Ontario) pursuant to provincial law.',
      stepByStep: [
        'Professional licensure is provincially regulated under the Canadian Constitution.',
        'Holding a Ph.D. in science does not grant practice rights without a P.Eng / ing. license.',
        'UNCSTD is an international policy advisory forum, not a licensing regulator.'
      ],
      whyWrong: {
        '0': 'A doctorate in physics or chemistry does not confer legal engineering practice rights.',
        '2': 'Requires an accredited engineering degree (CEAB), exams, and licensed peer review.',
        '3': 'UNCSTD is an international advisory committee, not a Canadian licensing regulator.',
        '4': 'Option (b) is the established statutory truth.'
      },
      commonTrap: 'Confusing provincial statutory self-regulation with federal or academic credentials.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q3; Chapter 2 Professional Ethics'
    }
  }),

  indu(4, {
    topic: 'Engineering Foundations & Ethics (Ch. 1–2)',
    difficulty: 'Midterm Level',
    question: 'Which of the following is NOT necessarily part of the engineering profession as defined in its practice?',
    options: [
      'Performing scientific experiments to establish new theories',
      'Safeguarding life and health',
      'Protecting economic interests and property',
      'Ensuring public welfare and environmental safety'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Establishing new fundamental physical theories is the defining mission of pure science. Engineering applies established physical theories to design and build cost-effective systems that safeguard human life, health, property, and the environment.',
      stepByStep: [
        'Safeguarding life, health, property, economic viability, and public welfare are mandatory ethical duties of an engineer.',
        'Developing new fundamental scientific theories is the objective of pure scientists (e.g. theoretical physicists), not an inherent requirement of engineering practice.'
      ],
      whyWrong: {
        '1': 'Safeguarding life and health is the primary ethical canon of engineering.',
        '2': 'Protecting economic interests and client property is an explicit legal duty of engineers (frequent student trap!).',
        '3': 'Ensuring public welfare and the environment is paramount under provincial codes.'
      },
      commonTrap: 'Circling "Protecting economic interests" under the misconception that engineers do not consider economics. In reality, economic viability is essential, while discovering fundamental physical laws belongs to pure science.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q4; Chapter 1 Science vs Engineering'
    }
  }),

  indu(5, {
    topic: 'Industrial Systems & Human Activity (Ch. 2)',
    difficulty: 'Foundation',
    question: 'Industrial Engineering, as a discipline, mainly deals with issues related to:',
    options: [
      'Software and App development for social networking among engineers',
      'Discovering certain chemical compounds for effective treatments of workplace related sickness',
      'Analyzing, designing, and evaluating integrated systems of people, equipment and information',
      'Developing microelectronic chips for faster and more reliable communication',
      'None of the above'
    ],
    correctIndex: 2,
    explanation: {
      coreConcept: 'The Institute of Industrial and Systems Engineers (IISE) formally defines Industrial Engineering as concerned with the design, improvement, and installation of integrated systems of people, materials, information, equipment, and energy.',
      stepByStep: [
        'Industrial engineering focuses on holistic sociotechnical systems optimization.',
        'Options (a), (b), and (d) describe software engineering, pharmacology/biomedical, and microelectronics respectively.'
      ],
      whyWrong: {
        '0': 'Social networking app development belongs to Computer Science.',
        '1': 'Drug discovery belongs to pharmacology and chemical engineering.',
        '3': 'Microchip hardware development belongs to Electrical/Computer Engineering.',
        '4': 'Option (c) matches the official IISE definition verbatim.'
      },
      commonTrap: 'Confusing industrial engineering system integration with specific subfield hardware development.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q5; Chapter 2 Foundations of IE'
    }
  }),

  indu(6, {
    topic: 'Industrial Systems & Human Activity (Ch. 2)',
    difficulty: 'Foundation',
    question: 'Which of the following is an example of a human activity system considered by Industrial Engineering?',
    options: [
      'Forecasting procedures',
      'Physical workplace layout, material handling, safety procedures',
      'Production scheduling',
      'Budgeting and incentive plans'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Human activity systems in industrial engineering focus on the direct physical, biomechanical, and ergonomics interaction of human operators within the physical workstation, handling materials, and following occupational safety rules.',
      stepByStep: [
        'Forecasting procedures are information/mathematical models.',
        'Production scheduling is a production planning and control management system.',
        'Budgeting and incentive plans are financial control systems.',
        'Workplace layout, material handling, and safety procedures represent physical human activity systems.'
      ],
      whyWrong: {
        '0': 'Mathematical prediction model, not a physical human activity system.',
        '2': 'Operations control logic, not an ergonomic/physical human activity system.',
        '3': 'Managerial accounting framework, not a physical human activity system.'
      },
      commonTrap: 'Equating any procedure carried out by humans with a formal "human activity system" (which specifically denotes physical ergonomics and operator movement).',
      reference: 'INDU 211 Midterm 2025 Paper A, Q6; Chapter 2 Systems Engineering Taxonomy'
    }
  }),

  indu(7, {
    topic: 'Break-Even & Process Selection (Ch. 3)',
    difficulty: 'Midterm Level',
    question: 'A company produces gadgets with a fixed cost of \\$15,000 and a variable cost of \\$30/unit. If the break-even quantity is 500 units, what should be the selling price per unit so the production remains profitable?',
    options: ['\\$45/unit', '\\$50/unit', '\\$55/unit', '\\$60/unit'],
    correctIndex: 3,
    explanation: {
      coreConcept: 'At break-even, Total Revenue equals Total Cost: $P \\cdot Q_{BE} = FC + VC \\cdot Q_{BE}$. Solving for selling price yields $P = VC + \\frac{FC}{Q_{BE}}$.',
      stepByStep: [
        'Given: Fixed Cost $FC = \\$15{,}000$, Variable Cost $VC = \\$30/\\text{unit}$, Break-Even Quantity $Q_{BE} = 500\\text{ units}$.',
        'Set $Q_{BE} (P - VC) = FC \\implies P - 30 = \\frac{15{,}000}{500} = 30$.',
        'Solve for $P$: $P = 30 + 30 = \\$60/\\text{unit}$.',
        'Check: $TR = 60 \\times 500 = \\$30{,}000$; $TC = 15{,}000 + 30(500) = \\$30{,}000$. Profit is $0$ at exactly \\$60/unit.'
      ],
      steps: [
        { title: 'State the equilibrium break-even equation', math: t`Q_{BE} = \frac{FC}{P - VC}` },
        { title: 'Rearrange to solve for unit price $P$', math: t`P = VC + \frac{FC}{Q_{BE}}` },
        { title: 'Substitute values ($FC=15000, VC=30, Q_{BE}=500$)', math: t`P = 30 + \frac{15000}{500} = 30 + 30 = 60` }
      ],
      answer: t`P = \$60/\text{unit}`,
      whyWrong: {
        '0': 'At \\$45, Total Revenue is \\$22,500 < Total Cost \\$30,000 (Loss of \\$7,500).',
        '1': 'At \\$50, Total Revenue is \\$25,000 < Total Cost \\$30,000 (Loss of \\$5,000; common student arithmetic slip).',
        '2': 'At \\$55, Total Revenue is \\$27,500 < Total Cost \\$30,000 (Loss of \\$2,500).'
      },
      commonTrap: 'Subtracting variable cost from fixed cost or forgetting that price must cover BOTH fixed cost amortization (\\$30) AND unit variable cost (\\$30).',
      reference: 'INDU 211 Midterm 2025 Paper A, Q7; Chapter 3 Break-Even Economics'
    }
  }),

  indu(8, {
    topic: 'Break-Even & Process Selection (Ch. 3)',
    difficulty: 'Midterm Level',
    question: 'Based on the data provided (Process A: Fixed Cost = \\$50,000, Variable Cost = \\$10/unit; Process B: Fixed Cost = \\$80,000, Variable Cost = \\$5/unit), if projected annual demand is 5,200 units, which process would be preferred based on break-even analysis?',
    options: [
      'Process A, because it reaches break-even earlier',
      'Process B, because it has lower variable cost',
      'Either process, because both are above break-even',
      'Cannot decide'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'The crossover (indifference) volume between two manufacturing processes is $Q^* = \\frac{\\Delta FC}{\\Delta VC}$. For demand below $Q^*$, the alternative with lower fixed cost incurs lower total cost.',
      stepByStep: [
        'Calculate crossover point: $50{,}000 + 10Q = 80{,}000 + 5Q \\implies 5Q = 30{,}000 \\implies Q^* = 6{,}000\\text{ units}$.',
        'Evaluate total cost at annual demand $Q = 5{,}200\\text{ units}$:',
        'Total Cost of A: $TC_A = 50{,}000 + 10(5{,}200) = \\$50{,}000 + \\$52{,}000 = \\$102{,}000$.',
        'Total Cost of B: $TC_B = 80{,}000 + 5(5{,}200) = \\$80{,}000 + \\$26{,}000 = \\$106{,}000$.',
        'Since \\$102,000 < \\$106,000, Process A saves \\$4,000 annually and reaches profitability with lower risk.'
      ],
      steps: [
        { title: 'Determine the crossover volume $Q^*$', math: t`Q^* = \frac{80000 - 50000}{10 - 5} = \frac{30000}{5} = 6000\text{ units}` },
        { title: 'Compare Total Cost at $Q = 5,200 < 6,000$', math: t`TC_A(5200) = 50000 + 10(5200) = \$102,000` },
        { title: 'Compute Total Cost for Process B', math: t`TC_B(5200) = 80000 + 5(5200) = \$106,000` },
        { title: 'Cost Difference (Advantage of Process A)', math: t`\Delta TC = \$106,000 - \$102,000 = \$4,000` }
      ],
      answer: t`\text{Process A (Saves \$4,000 annually)}`,
      whyWrong: {
        '1': 'Process B has lower variable cost (\\$5 vs \\$10), but at 5,200 units its \\$30,000 higher fixed cost is not yet amortized.',
        '2': 'The processes are not indifferent; Process A is \\$4,000 cheaper.',
        '3': 'Demand and cost functions are fully specified, so the decision is deterministic.'
      },
      commonTrap: 'Selecting Process B reflexively because its variable cost (\\$5) is lower, without checking whether demand exceeds the 6,000-unit crossover volume.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q8; Chapter 3 Process Selection'
    }
  }),

  indu(9, {
    topic: 'Break-Even & Process Selection (Ch. 3)',
    difficulty: 'Foundation',
    question: 'Which of the following is a key advantage of concurrent engineering over traditional sequential engineering?',
    options: [
      'Longer product development cycle',
      'Increased separation of functional teams',
      'Faster time to market and better product quality',
      'Reduced emphasis on environmental concerns'
    ],
    correctIndex: 2,
    explanation: {
      coreConcept: 'Concurrent engineering integrates product design, process engineering, quality control, and procurement simultaneously from day one, drastically shortening lead times and preventing costly engineering change orders.',
      stepByStep: [
        'Concurrent engineering minimizes late-stage tooling reworks.',
        'It delivers faster time-to-market, higher initial quality, and lower total lifecycle cost.'
      ],
      whyWrong: {
        '0': 'Development cycle is shortened, not lengthened.',
        '1': 'Eliminates organizational silos; it does not increase separation.',
        '3': 'Design for Environment (DfE) is integrated earlier in the design phase.'
      },
      commonTrap: 'Confusing concurrent engineering with traditional sequential "over-the-wall" departmental handoffs.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q9; Chapter 3 Concurrent Engineering'
    }
  }),

  indu(10, {
    topic: 'Facility Layout & Material Handling (Ch. 4–5)',
    difficulty: 'Foundation',
    question: 'The three basic types of facility layout in manufacturing systems are:',
    options: [
      'Product layout, U-shaped layout, fixed layout',
      'Product layout, process layout, fixed layout',
      'Conveyor-based layout, AGV layout, cellular layout',
      'Optimal layout, sub-optimal layout, non-optimal layout',
      'None of the above'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Classical facility layout theory categorizes manufacturing spaces into Product Layout (flow shop / assembly line), Process Layout (functional job shop), and Fixed-Position Layout (stationary project).',
      stepByStep: [
        'Product layout organizes equipment sequentially according to product steps.',
        'Process layout groups similar machines and processes together.',
        'Fixed-position layout keeps the product stationary while workers and equipment move to it.'
      ],
      whyWrong: {
        '0': 'U-shaped is a geometric configuration of a line/cell, not a primary layout type.',
        '2': 'Lists material handling equipment and cellular group technology, not basic layouts.',
        '3': 'Optimization adjectives, not structural layout categories.'
      },
      commonTrap: 'Mistaking U-shaped lines or cellular layouts for one of the three primary historical archetypes.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q10; Chapter 4 Facility Layouts'
    }
  }),

  indu(11, {
    topic: 'Facility Layout & Material Handling (Ch. 4–5)',
    difficulty: 'Foundation',
    question: 'Which layout usually requires little operator skill but demands high investment in machines?',
    options: ['Process layout', 'Product layout', 'Fixed-position layout', 'Cellular layout'],
    correctIndex: 1,
    explanation: {
      coreConcept: 'In a Product Layout (assembly line), tasks are broken down into short, highly standardized, repetitive operations powered by expensive specialized machinery, allowing operators to be trained quickly with little prior craft skill.',
      stepByStep: [
        'Process layouts require highly skilled machinists to set up general-purpose machines.',
        'Product layouts invest heavily in dedicated automation, minimizing required manual skill per station.'
      ],
      whyWrong: {
        '0': 'Process layouts require high operator craftsmanship and versatile skills.',
        '2': 'Fixed-position layouts require highly skilled construction/fabrication specialists.',
        '3': 'Cellular layouts require cross-trained workers capable of operating multiple machines.'
      },
      commonTrap: 'Thinking high machine investment requires higher manual operator skills. Highly automated dedicated lines simplify operator tasks.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q11; Chapter 4 Layout Economic Characteristics'
    }
  }),

  indu(12, {
    topic: 'Facility Layout & Material Handling (Ch. 4–5)',
    difficulty: 'Foundation',
    question: 'A company introduces a new automated material-handling system. This is most directly related to which reason for facility redesign?',
    options: [
      'Changes in methods and equipment',
      'Changes in environmental requirements',
      'Morale problems',
      'Inefficient operations'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Introducing automated guided vehicles (AGVs) or smart conveyors represents an explicit technological shift classified as "Changes in methods and equipment".',
      stepByStep: [
        'While operational inefficiencies may motivate a study, the installation of automated equipment is classified under technological and equipment changes.'
      ],
      whyWrong: {
        '1': 'Environmental changes relate to emissions, toxicity, or noise abatement regulations.',
        '2': 'Morale is an organizational/human resources issue.',
        '3': 'Inefficient operations is an operational symptom, whereas equipment automation is the method change itself.'
      },
      commonTrap: 'Selecting "Inefficient operations" because automation improves efficiency, rather than identifying the formal category of equipment modernization.',
      reference: 'INDU 211 Midterm 2025 Paper A, Q12; Chapter 5 Material Handling Drivers'
    }
  }),

  // -----------------------------------------------------------------------
  // Problem 2: Bill of Materials (BOM) Calculations (10 Marks)
  // -----------------------------------------------------------------------
  indu(13, {
    topic: 'Bill of Materials (BOM) Explosion (Ch. 3)',
    difficulty: 'Exam Master',
    question: 'A company produces two optical devices, Product 1 (weekly demand = 10 units) and Product 2 (weekly demand = 20 units), using the BOM trees shown in Figure 1. What are the total weekly numbers of intermediate subassemblies S-1, S-2, S-3, S-4, and S-5 company ABC needs to prepare?',
    figure: FIG_BOM,
    options: [
      'S-1: 160, S-2: 120, S-3: 60, S-4: 200, S-5: 240',
      'S-1: 20, S-2: 20, S-3: 70, S-4: 40, S-5: 60',
      'S-1: 20, S-2: 20, S-3: 50, S-4: 40, S-5: 60',
      'S-1: 10, S-2: 10, S-3: 35, S-4: 20, S-5: 30'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Subassembly gross requirements equal end-item demand multiplied by the parent branch usage factor. Common subassemblies used in multiple products (like S-3) must sum the requirements from all parent products.',
      stepByStep: [
        'Weekly Demand: D(P-1) = 10, D(P-2) = 20.',
        'S-1 (under P-1 only, bracket 2): 10 * 2 = 20 units.',
        'S-2 (under P-1 only, bracket 2): 10 * 2 = 20 units.',
        'S-3 (used in BOTH products): from P-1 (bracket 3) = 10 * 3 = 30; from P-2 (bracket 2) = 20 * 2 = 40. Total S-3 = 30 + 40 = 70 units.',
        'S-4 (under P-2 only, bracket 2): 20 * 2 = 40 units.',
        'S-5 (under P-2 only, bracket 3): 20 * 3 = 60 units.'
      ],
      steps: [
        { title: 'Calculate S-1 requirement from Product 1', math: t`S_1 = D(P_1) \times 2 = 10 \times 2 = 20` },
        { title: 'Calculate S-2 requirement from Product 1', math: t`S_2 = D(P_1) \times 2 = 10 \times 2 = 20` },
        { title: 'Calculate S-3 from Product 1 ($10 \\times 3$) and Product 2 ($20 \\times 2$)', math: t`S_3 = (10 \times 3) + (20 \times 2) = 30 + 40 = 70` },
        { title: 'Calculate S-4 requirement from Product 2', math: t`S_4 = D(P_2) \times 2 = 20 \times 2 = 40` },
        { title: 'Calculate S-5 requirement from Product 2', math: t`S_5 = D(P_2) \times 3 = 20 \times 3 = 60` }
      ],
      answer: t`S_1=20,\ S_2=20,\ S_3=70,\ S_4=40,\ S_5=60`,
      whyWrong: {
        '0': 'This is the catastrophic exam error where the student multiplied child component multipliers backwards into the subassembly slots (scored -10 on the midterm!).',
        '2': 'Fails to properly aggregate both parent contributions for common subassembly S-3.',
        '3': 'Divides quantities in half instead of multiplying by parent usage multipliers.'
      },
      commonTrap: 'Inverting the BOM hierarchy: summing component multipliers underneath a subassembly rather than exploding downwards from end-item demand.',
      reference: 'INDU 211 Midterm 2025 Paper A, Problem 2 (10 Marks); Chapter 3 BOM Explosion'
    }
  }),

  indu(14, {
    topic: 'Bill of Materials (BOM) Explosion (Ch. 3)',
    difficulty: 'Exam Master',
    question: 'Continuing from the BOM trees in Figure 1 with weekly subassembly requirements established, what are the total weekly requirements of raw components C-1, C-2, C-3, C-4, and C-5 that company ABC must prepare?',
    figure: FIG_BOM,
    options: [
      'C-1: 40, C-2: 20, C-3: 40, C-4: 60, C-5: 60',
      'C-1: 300, C-2: 120, C-3: 160, C-4: 200, C-5: 120',
      'C-1: 280, C-2: 100, C-3: 140, C-4: 180, C-5: 120',
      'C-1: 300, C-2: 60, C-3: 160, C-4: 200, C-5: 60'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Raw component requirements equal the sum of each parent subassembly requirement multiplied by its child usage factor across all branches of the BOM trees.',
      stepByStep: [
        'C-1 is used in S-1 (bracket 3), S-2 (bracket 2), S-4 (bracket 2), S-5 (bracket 2): Total C-1 = 20(3) + 20(2) + 40(2) + 60(2) = 60 + 40 + 80 + 120 = 300 units.',
        'C-2 is used in S-1 (bracket 3) and S-3 under P-1 (bracket 2): Total C-2 = 20(3) + 30(2) = 60 + 60 = 120 units.',
        'C-3 is used in S-1 (bracket 2) and S-5 (bracket 2): Total C-3 = 20(2) + 60(2) = 40 + 120 = 160 units.',
        'C-4 is used in S-2 (bracket 4) and S-4 (bracket 3): Total C-4 = 20(4) + 40(3) = 80 + 120 = 200 units.',
        'C-5 is used in S-3 under P-2 (bracket 3): Total C-5 = 40(3) = 120 units.'
      ],
      steps: [
        { title: 'Explode C-1 across $S_1, S_2, S_4, S_5$', math: t`C_1 = 20(3) + 20(2) + 40(2) + 60(2) = 60 + 40 + 80 + 120 = 300` },
        { title: 'Explode C-2 from $S_1$ and $S_3$ (in $P_1$)', math: t`C_2 = 20(3) + 30(2) = 60 + 60 = 120` },
        { title: 'Explode C-3 from $S_1$ and $S_5$', math: t`C_3 = 20(2) + 60(2) = 40 + 120 = 160` },
        { title: 'Explode C-4 from $S_2$ and $S_4$', math: t`C_4 = 20(4) + 40(3) = 80 + 120 = 200` },
        { title: 'Explode C-5 from $S_3$ (in $P_2$)', math: t`C_5 = 40(3) = 120` }
      ],
      answer: t`C_1=300,\ C_2=120,\ C_3=160,\ C_4=200,\ C_5=120`,
      whyWrong: {
        '0': 'Arbitrary small numbers resulting from confusing subassembly totals with component multipliers.',
        '2': 'Drops the 20 units of C-1 from subassembly S-2.',
        '3': 'Forgets that C-2 and C-5 are also demanded through subassembly S-3.'
      },
      commonTrap: 'Forgetting that subassembly S-3 has different component requirements in Product 1 (uses C-2) vs Product 2 (uses C-5).',
      reference: 'INDU 211 Midterm 2025 Paper A, Problem 2 (10 Marks); Chapter 3 BOM Explosion'
    }
  }),

  // -----------------------------------------------------------------------
  // Problem 3: Transportation Problem & Heuristics (16 Marks)
  // -----------------------------------------------------------------------
  indu(15, {
    topic: 'Transportation Method & Feasibility (Ch. 4)',
    difficulty: 'Exam Master',
    question: 'In the transportation problem shown in Figure 2 (Total Supply = 80, Total Demand = 80), what are the total transportation costs of Solution S1 (Northwest Corner method) and Solution S2 (Lowest Cost First method)?',
    figure: FIG_TRANS,
    options: [
      'S1 = \\$640, S2 = \\$725',
      'S1 = \\$935, S2 = \\$725',
      'S1 = \\$935, S2 = \\$710',
      'S1 = \\$880, S2 = \\$750'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Northwest Corner allocates sequentially from top-left to bottom-right regardless of shipping costs (\\$935). Lowest Cost First greedily allocates to the lowest cost cells in the matrix first (\\$725).',
      stepByStep: [
        'Solution S1 (Northwest Corner): allocations are x_11 = 20 (cost 14), x_12 = 5 (cost 9), x_22 = 30 (cost 12), x_33 = 25 (cost 10).',
        'Cost of S1 = 20(14) + 5(9) + 30(12) + 25(10) = 280 + 45 + 360 + 250 = \\$935.',
        'Solution S2 (Lowest Cost First): allocations are x_32 = 25 (cost 7), x_23 = 25 (cost 8), x_12 = 10 (cost 9), x_21 = 5 (cost 10), x_11 = 15 (cost 14).',
        'Cost of S2 = 15(14) + 10(9) + 5(10) + 25(8) + 25(7) = 210 + 90 + 50 + 200 + 175 = \\$725.'
      ],
      steps: [
        { title: 'Compute Solution S1 (Northwest Corner) Cost', math: t`TC(S1) = 20(14) + 5(9) + 30(12) + 25(10) = 280 + 45 + 360 + 250 = \$935` },
        { title: 'Compute Solution S2 (Lowest Cost First) Cost', math: t`TC(S2) = 15(14) + 10(9) + 5(10) + 25(8) + 25(7) = 210 + 90 + 50 + 200 + 175 = \$725` }
      ],
      answer: t`TC(S1) = \$935,\quad TC(S2) = \$725`,
      whyWrong: {
        '0': '\\$640 was the incorrect student answer on the midterm where printed table cells were miscalculated.',
        '2': '\\$710 is the theoretical MODI global minimum, but S2 itself yields \\$725.',
        '3': 'Incorrect intermediate cell products.'
      },
      commonTrap: 'Misreading the Northwest Corner allocation cells already printed in Table S1 on the exam paper.',
      reference: 'INDU 211 Midterm 2025 Paper A, Questions 3.1 & 3.3 (16 Marks); Chapter 4 Transportation Problem'
    }
  }),

  indu(16, {
    topic: 'Transportation Method & Feasibility (Ch. 4)',
    difficulty: 'Midterm Level',
    question: 'Based on the transportation problem results where $TC(S1) = \\$935$ and $TC(S2) = \\$725$, what are the correct answers (True, False, or MTF) for: (A) S1 is optimal, (B) S1 is NOT optimal, (C) S2 is optimal, and (D) this is a balanced problem?',
    options: [
      'A: True, B: False, C: False, D: True',
      'A: False, B: True, C: True, D: True',
      'A: False, B: True, C: MTF (May be True or False), D: True',
      'A: False, B: True, C: False, D: False'
    ],
    correctIndex: 2,
    explanation: {
      coreConcept: 'A solution cannot be optimal if a cheaper feasible solution exists (making S1 False for optimal, and True for NOT optimal). Heuristics like Lowest Cost First yield feasible basic solutions that May or May Not be globally optimal (MTF) without a formal MODI test.',
      stepByStep: [
        'Statement A: S1 is optimal -> FALSE (because S2 is feasible and cheaper: \\$725 < \\$935).',
        'Statement B: S1 is NOT optimal -> TRUE (direct logical negation of A).',
        'Statement C: S2 is optimal -> MTF (Lowest Cost First is a heuristic; without MODI u-v testing, optimality is uncertain. In fact, true optimum is \\$710).',
        'Statement D: This problem is a balanced problem -> TRUE (Total supply = 25+30+25 = 80 = Total demand = 20+35+25 = 80).'
      ],
      whyWrong: {
        '0': 'S1 cannot be optimal when S2 is cheaper (\\$725 vs \\$935).',
        '1': 'S2 is not unconditionally True for optimal; greedy heuristics do not guarantee global optimality.',
        '3': 'The problem is balanced (80 = 80), so D is True, not False.'
      },
      commonTrap: 'Marking C as "True" assuming the Lowest Cost heuristic is always optimal, or marking it "False" without knowing the formal MODI test (teacher expects MTF!).',
      reference: 'INDU 211 Midterm 2025 Paper A, Question 3.4 (6 Marks); Chapter 4 Heuristics Optimality'
    }
  }),

  // -----------------------------------------------------------------------
  // Problem 4: Traveling Salesperson Problem (TSP) & AGV Routing (12 Marks)
  // -----------------------------------------------------------------------
  indu(17, {
    topic: 'Traveling Salesperson AGV Routing (Ch. 5)',
    difficulty: 'Exam Master',
    question: 'In the asymmetric travel time matrix shown in Figure 3, what are the sequences and total travel times obtained using the nearest-neighbor heuristic starting from Storage room S (Sequence S1) and starting from Machine M1 (Sequence S2)?',
    figure: FIG_TSP,
    options: [
      'S1: S -> M3 -> M2 -> M5 -> M4 -> M1 -> S (T1 = 6.4); S2: M1 -> S -> M4 -> M3 -> M2 -> M5 -> M1 (T2 = 7.7)',
      'S1: S -> M3 -> M4 -> M5 -> M1 -> M2 -> S (T1 = 9.0); S2: M1 -> S -> M3 -> M4 -> M5 -> M2 -> M1 (T2 = 7.9)',
      'S1: S -> M1 -> M5 -> M2 -> M3 -> M4 -> S (T1 = 7.0); S2: M1 -> S -> M3 -> M4 -> M5 -> M2 -> M1 (T2 = 7.9)',
      'S1: S -> M3 -> M4 -> M5 -> M1 -> M2 -> S (T1 = 8.5); S2: M1 -> S -> M2 -> M3 -> M4 -> M5 -> M1 (T2 = 8.1)'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Nearest-neighbor selects the minimum available distance from the current vertex row. Because the matrix is asymmetric, you must strictly trace across rows (from current node), never down columns.',
      stepByStep: [
        'Tour S1 (Start S): S -> M3 (0.7) -> M4 (1.0) -> M5 (1.4) -> M1 (1.1) -> M2 (2.7) -> S (2.1). Total T1 = 0.7 + 1.0 + 1.4 + 1.1 + 2.7 + 2.1 = 9.0.',
        'Tour S2 (Start M1): M1 -> S (1.8) -> M3 (0.7) -> M4 (1.0) -> M5 (1.4) -> M2 (1.3) -> M1 (1.7). Total T2 = 1.8 + 0.7 + 1.0 + 1.4 + 1.3 + 1.7 = 7.9.'
      ],
      steps: [
        { title: 'Trace Nearest Neighbor from S (Sequence S1)', math: t`S \xrightarrow{0.7} M_3 \xrightarrow{1.0} M_4 \xrightarrow{1.4} M_5 \xrightarrow{1.1} M_1 \xrightarrow{2.7} M_2 \xrightarrow{2.1} S` },
        { title: 'Calculate Total Travel Time T1', math: t`T1 = 0.7 + 1.0 + 1.4 + 1.1 + 2.7 + 2.1 = 9.0\text{ minutes}` },
        { title: 'Trace Nearest Neighbor from M1 (Sequence S2)', math: t`M_1 \xrightarrow{1.8} S \xrightarrow{0.7} M_3 \xrightarrow{1.0} M_4 \xrightarrow{1.4} M_5 \xrightarrow{1.3} M_2 \xrightarrow{1.7} M_1` },
        { title: 'Calculate Total Changeover Time T2', math: t`T2 = 1.8 + 0.7 + 1.0 + 1.4 + 1.3 + 1.7 = 7.9\text{ minutes}` }
      ],
      answer: t`S1:\ T1 = 9.0\text{ min},\quad S2:\ T2 = 7.9\text{ min}`,
      whyWrong: {
        '0': 'This was the exam error where the student read the matrix down columns (reading 0.6 from M2 to M3 instead of 1.6 from M3 to M2, scoring -3 marks!).',
        '2': '7.0 is the absolute global optimum tour (S -> M1 -> M5 -> M2 -> M3 -> M4 -> S), but nearest-neighbor from S yields 9.0.',
        '3': 'Incorrect step additions.'
      },
      commonTrap: 'Reading down columns instead of across rows in an asymmetric distance matrix ($c_{ij} \\neq c_{ji}$).',
      reference: 'INDU 211 Midterm 2025 Paper A, Questions 4.1 & 4.2 (12 Marks); Chapter 5 TSP Heuristics'
    }
  }),

  indu(18, {
    topic: 'Traveling Salesperson AGV Routing (Ch. 5)',
    difficulty: 'Midterm Level',
    question: 'Comparing nearest-neighbor routing sequences T1 = 9.0 and T2 = 7.9, which evaluation correctly characterizes heuristic optimality and multi-start limits (Questions 4.3 and 4.4)?',
    options: [
      'S1 is optimal (True), and multi-start nearest neighbor guarantees the absolute global optimum.',
      'S1 is NOT optimal (True), S2 is MTF, and greedy heuristics do not guarantee the true global optimum across all possible permutations.',
      'S2 is definitely optimal (True), because it has a lower travel time than S1.',
      'Both S1 and S2 are strictly optimal solutions.'
    ],
    correctIndex: 1,
    explanation: {
      coreConcept: 'The Traveling Salesperson Problem (TSP) is NP-hard. Generating multi-start nearest-neighbor tours from each vertex improves heuristic quality, but greedy heuristics can never theoretically guarantee the global optimum of all (N-1)! possible tours.',
      stepByStep: [
        'Question 4.3 (a): S1 is optimal -> FALSE (T1 = 9.0 > T2 = 7.9).',
        'Question 4.3 (c): S1 is NOT optimal -> TRUE (since T1 > T2).',
        'Question 4.3 (b, d): S2 is optimal / NOT optimal -> MTF (without testing all 120 tours, heuristic optimality is unproven).',
        'Question 4.4: In TSP, multi-start nearest neighbor evaluates N heuristic tours; it does not guarantee the global optimum over all (N-1)! permutations (true minimum is 7.0 min).'
      ],
      whyWrong: {
        '0': 'S1 has a higher travel time than S2, so it cannot be optimal.',
        '2': 'S2 is cheaper than S1, but nearest-neighbor is not guaranteed to be the global minimum.',
        '3': 'Two distinct routes with different times (9.0 vs 7.9) cannot both be optimal.'
      },
      commonTrap: 'Believing that taking the best among multi-start heuristic tours guarantees the true mathematical global optimum for NP-hard problems.',
      reference: 'INDU 211 Midterm 2025 Paper A, Questions 4.3 & 4.4; Chapter 5 Routing Complexity'
    }
  })
];
