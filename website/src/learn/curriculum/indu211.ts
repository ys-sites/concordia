// INDU 211 — Introduction to Production and Manufacturing Systems. Order follows the teacher's slide decks
// (1.0 → 13); the midterm covers Chapters 1–5.
import type { CourseSpec } from './types';

export const INDU211_SPEC: CourseSpec = {
  id: 'INDU211',
  whatYouLearn: [
    'Explain what engineers and industrial engineers do, and how the profession is regulated in Canada',
    'Read a bill of materials and choose a process with cost-volume and break-even analysis',
    'Locate a facility with the transportation method and the centre of gravity, and pick a layout',
    'Route vehicles with nearest-neighbour TSP and the Clark-Wright savings method',
    'Forecast demand, size orders with EOQ and plan with MRP and JIT',
    'Solve LP, queuing, quality-control and CPM/PERT problems step by step'
  ],
  sections: [
    {
      id: 'foundations',
      title: 'Engineering & industrial engineering',
      subtitle: 'Ch 1–2 · Slides 1',
      midterm: true,
      lessons: [
        {
          id: 'engineering-profession',
          title: 'Engineering, science & the profession',
          summary: 'Science versus engineering, the history of the discipline, and how P.Eng. regulation and ethics work in Canada and Québec.',
          gate: ['ie'],
          bank: [{ ch: 'ch1-2', re: /science|engineer|profession|ethic|OIQ|CEAB|regulat|practice of|origin|marvel|scientific|foundation/i }],
          resources: [/^00 - Textbook Chapters\/Textbook Chapter 01 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 1 - /, /^03 - 1-Page Rapid Review Sheets\/Part 1 - /]
        },
        {
          id: 'industrial-systems',
          title: 'Industrial & systems engineering',
          summary: 'What IE adds: systems thinking, decision levels, production systems and supply chains, from Taylor and Gilbreth to AI.',
          gate: ['ise'],
          bank: [{ ch: 'ch1-2' }],
          resources: [/^00 - Textbook Chapters\/Textbook Chapter 02 /]
        }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing engineering',
      subtitle: 'Ch 3 · Slides 2',
      midterm: true,
      lessons: [
        {
          id: 'bom-processes',
          title: 'Bill of materials & industrial processes',
          summary: 'Read a product structure tree, count parts, and know the main forming, cutting and joining processes.',
          tools: ['3d:bom-exploded', '3d:manufacturing-processes'],
          gate: ['mfg'],
          bank: [{ ch: 'ch3' }],
          resources: [/^00 - Textbook Chapters\/Textbook Chapter 03 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 2 - /, /^03 - 1-Page Rapid Review Sheets\/Part 2 - /]
        },
        {
          id: 'break-even',
          title: 'Cost-volume & break-even analysis',
          summary: 'Fixed and variable costs, the break-even point, make-or-buy and choosing between processes by volume.',
          gate: ['bep'],
          bank: [{ ch: 'ch3', re: /break-even|BEP|cost|make-or-buy|selling price|crossover|process choice|three-process|two-process|alternatives/i }],
          resources: [/^04 - Worked Problems[^/]*\/Cost-Volume/]
        }
      ]
    },
    {
      id: 'facilities',
      title: 'Facility location & layout',
      subtitle: 'Ch 4 · Slides 3–4',
      midterm: true,
      lessons: [
        {
          id: 'location',
          title: 'Facility location: transportation & centre of gravity',
          summary: 'Distance measures, the least-cost transportation method and the weighted centre of gravity.',
          gate: ['loc'],
          bank: [{ ch: 'ch4', re: /location|transportation|cent(er|re) of gravity|distance|euclid|rectilinear|metric|allocation|least-cost|min-max|1-median|analytical/i }],
          resources: [/^04 - Worked Problems[^/]*\/Facilities Location/, /^00 - Textbook Chapters\/Textbook Chapter 04 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 3 - /, /^03 - 1-Page Rapid Review Sheets\/Part 3 - /]
        },
        {
          id: 'layout',
          title: 'Facility layout',
          summary: 'Product, process, fixed-position, cellular and mixed layouts, REL charts and when each one fits.',
          tools: ['3d:product-layout', '3d:process-layout', '3d:cellular-layout', '3d:fixed-position-layout', '3d:hybrid-layout'],
          gate: ['layout'],
          bank: [{ ch: 'ch4' }]
        }
      ]
    },
    {
      id: 'handling',
      title: 'Material handling & routing',
      subtitle: 'Ch 5 · Slides 5',
      midterm: true,
      lessons: [
        {
          id: 'material-handling',
          title: 'Material handling equipment & principles',
          summary: 'Trucks, AGVs, cranes and conveyors, and the principles that decide how material should move.',
          tools: ['3d:material-handling'],
          bank: [{ ch: 'ch5' }],
          read: [/^01 - Teacher Lecture Notes\/5\.0\.INDU_211_CH5/],
          resources: [/^00 - Textbook Chapters\/Textbook Chapter 05 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 4 - /]
        },
        {
          id: 'routing',
          title: 'Routing: TSP & Clark-Wright savings',
          summary: 'Nearest-neighbour tours, why exact TSP explodes factorially, and building vehicle routes with the savings method.',
          gate: ['tsp'],
          bank: [{ ch: 'ch5', re: /TSP|VRP|route|routing|nearest|clark|savings|heuristic|trucks|salesperson/i }],
          tools: ['tsp', '3d:warehouse-routing'],
          resources: [/^04 - Worked Problems[^/]*\/INDU 211 - Factorial Complexity/, /^YouTube Tutorial Solutions\/05 - /, /^04 - Worked Problems[^/]*\/INDU 211 - Midterm Quantitative/]
        }
      ]
    },
    {
      id: 'operations',
      title: 'Operations planning & control',
      subtitle: 'Ch 7 · Slides 6–8',
      lessons: [
        {
          id: 'forecasting',
          title: 'Demand forecasting',
          summary: 'Moving averages, exponential smoothing and linear regression, and how to judge a forecast.',
          bank: [{ ch: 'ch7', re: /forecast|moving average|smoothing|regression/i }],
          read: [/^01 - Teacher Lecture Notes\/6\.0\.INDU_211_CH7-1/],
          resources: [/^YouTube Tutorial Solutions\/01 - /]
        },
        {
          id: 'inventory',
          title: 'Inventory: EOQ & reorder points',
          summary: 'The EOQ trade-off, quantity discounts, safety stock and the reorder point.',
          bank: [{ ch: 'ch7', re: /EOQ|reorder|quantity discount|safety stock|inventory/i }],
          read: [/^01 - Teacher Lecture Notes\/7\.0\.INDU_211_CH7_2/]
        },
        {
          id: 'mrp-jit',
          title: 'Aggregate planning, MRP, ERP & JIT',
          summary: 'Level versus chase plans, MRP netting with lot sizes, and the push and pull philosophies.',
          bank: [{ ch: 'ch7' }],
          read: [/^01 - Teacher Lecture Notes\/8\.0\.INDU_211_CH7_3/],
          resources: [/^00 - Textbook Chapters\/Textbook Chapter 07 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 5 - /]
        }
      ]
    },
    {
      id: 'operations-research',
      title: 'Operations research & queuing',
      subtitle: 'Ch 14–15 · Slides 9–10',
      lessons: [
        {
          id: 'linear-programming',
          title: 'Linear programming',
          summary: 'Formulate an LP, solve it graphically, and read shadow prices.',
          bank: [{ ch: 'ch14' }],
          read: [/^01 - Teacher Lecture Notes\/9\.0\.INDU_211_CH14/],
          resources: [/^YouTube Tutorial Solutions\/0[26] - /, /^00 - Textbook Chapters\/Textbook Chapter 14 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 6 - /]
        },
        {
          id: 'queuing',
          title: 'Queuing models',
          summary: "M/M/1 and multi-server measures, Little's law and the steady-state condition.",
          bank: [{ ch: 'ch15' }],
          read: [/^01 - Teacher Lecture Notes\/10\.INDU_211_CH15/],
          resources: [/^YouTube Tutorial Solutions\/04 - /, /^00 - Textbook Chapters\/Textbook Chapter 1[56] /]
        }
      ]
    },
    {
      id: 'quality-work',
      title: 'Quality, work design & human factors',
      subtitle: 'Ch 8, 6 & 11 · Slides 11–12',
      lessons: [
        {
          id: 'quality',
          title: 'Quality control & SPC',
          summary: 'Costs of quality, control charts (X-bar, R, p) and process capability.',
          bank: [{ ch: 'ch8' }],
          read: [/^01 - Teacher Lecture Notes\/11\.INDU_211_CH8/],
          resources: [/^YouTube Tutorial Solutions\/07 - /, /^00 - Textbook Chapters\/Textbook Chapter 08 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 7 - /]
        },
        {
          id: 'work-design',
          title: 'Work design & human factors',
          summary: 'Productivity, standard time with allowances, anthropometry and job design.',
          tools: ['3d:work-ergonomics'],
          bank: [{ ch: 'ch6-11' }],
          read: [/^01 - Teacher Lecture Notes\/12\.INDU_211_CH6and11/],
          resources: [/^00 - Textbook Chapters\/Textbook Chapter (06|11) /, /^02 - Comprehensive Topic Guides[^/]*\/Part 8 - /]
        }
      ]
    },
    {
      id: 'projects',
      title: 'Project management',
      subtitle: 'Ch 17 · Slides 13',
      lessons: [
        {
          id: 'cpm-pert',
          title: 'CPM & PERT',
          summary: 'Network diagrams, the critical path, slack, PERT expected times and crashing.',
          bank: [{ ch: 'ch17' }],
          read: [/^01 - Teacher Lecture Notes\/13\.INDU_211_CH17/],
          resources: [/^YouTube Tutorial Solutions\/03 - /, /^00 - Textbook Chapters\/Textbook Chapter 17 /, /^02 - Comprehensive Topic Guides[^/]*\/Part 9 - /]
        }
      ]
    }
  ],
  examPrep: {
    bankPast: [
      { ch: 'past-mid', title: 'Exam-style questions: midterm', summary: 'Questions modelled on past INDU 211 midterms (Chapters 1–5), each with a worked solution.' },
      { ch: 'past-final', title: 'Exam-style questions: final', summary: 'Questions modelled on past finals, covering the whole course.' }
    ],
    mock: { title: 'Mock midterm (Chapters 1–5)', size: 20, minutes: 75 }
  }
};
