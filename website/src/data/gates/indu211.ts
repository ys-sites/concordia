// INDU211 exam-prep content: past-exam questions, topics, lessons, repeat clusters and study videos.
// Formerly the encrypted Midterm Gate; migrated to plain data when the password was removed (see ARCHITECTURE.md, Part C).
import type { GateContent } from './types';

const content: GateContent = {
 "version": 2,
 "course": "INDU211",
 "builtFor": "INDU 211 · Fall 2026 midterm (week 6) · Chapters 1–5",
 "midterm": {
  "date": null,
  "label": "Week 6 · confirm the date on Moodle · 35 %",
  "scope": "Chapters 1–5: engineering and IE, manufacturing and break-even, facility location and layout, material handling and routing (TSP, Clark-Wright)."
 },
 "labTitle": "Calculation Lab",
 "labBlurb": "Every INDU 211 midterm topic as a lesson: the idea, the lecture example worked step by step, a calculator (transportation, TSP, savings, break-even, centre of gravity) loaded with the slide and exam numbers, and a practice quiz. The definition chapters have lessons too, built from the past multiple-choice questions.",
 "docs": {
  "ch12": {
   "title": "Slides 1 · Ch 1–2",
   "path": "Indu 211/01 - Teacher Lecture Notes/1.0.INDU_211_CH12_2025.pdf"
  },
  "ch3": {
   "title": "Slides 2 · Ch 3",
   "path": "Indu 211/01 - Teacher Lecture Notes/2.0.INDU_211_CH3_2025.pdf"
  },
  "ch41": {
   "title": "Slides 3 · Ch 4 location",
   "path": "Indu 211/01 - Teacher Lecture Notes/3.0.INDU_211_CH4_1-2025.pdf"
  },
  "ch42": {
   "title": "Slides 4 · Ch 4 layout",
   "path": "Indu 211/01 - Teacher Lecture Notes/4.0.INDU_211_CH4_2_2025.pdf"
  },
  "ch5": {
   "title": "Slides 5 · Ch 5",
   "path": "Indu 211/01 - Teacher Lecture Notes/5.0.INDU_211_CH5_2025.pdf"
  },
  "ch71": {
   "title": "Slides 6 · Ch 7 inventory",
   "path": "Indu 211/01 - Teacher Lecture Notes/6.0.INDU_211_CH7-1_2025.pdf"
  },
  "ch72": {
   "title": "Slides 7 · Ch 7 MRP/JIT",
   "path": "Indu 211/01 - Teacher Lecture Notes/7.0.INDU_211_CH7_2_2025-F.pdf"
  },
  "ch73": {
   "title": "Slides 8 · Ch 7 forecasting",
   "path": "Indu 211/01 - Teacher Lecture Notes/8.0.INDU_211_CH7_3_2025F.pdf"
  },
  "master": {
   "title": "Master study guide & exam strategy",
   "path": "Indu 211/00 - Course Overview & Study Guide/INDU 211 - Master Study Guide & Exam Strategy.pdf"
  },
  "g1": {
   "title": "Part 1 guide · Ch 1–2",
   "path": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 1 - Chapters 1 & 2 - Foundations of Industrial & Systems Engineering.pdf"
  },
  "g2": {
   "title": "Part 2 guide · Ch 3",
   "path": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 2 - Chapter 3 - Manufacturing & Process Engineering Master Guide.pdf"
  },
  "g3": {
   "title": "Part 3 guide · Ch 4",
   "path": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 3 - Chapter 4 - Facilities Location, Layout & Material Handling Master Guide.pdf"
  },
  "g4": {
   "title": "Part 4 guide · Ch 5",
   "path": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 4 - Chapter 5 - Material Handling, Distribution & Routing Master Guide.pdf"
  },
  "g5": {
   "title": "Part 5 guide · Ch 7",
   "path": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 5 - Chapter 7 - Operations Planning & Control Master Guide.pdf"
  },
  "r1": {
   "title": "Review sheet · Ch 1–2",
   "path": "Indu 211/03 - 1-Page Rapid Review Sheets/Part 1 - Chapters 1 & 2 - One-Page Rapid Review Sheet.pdf"
  },
  "r2": {
   "title": "Review sheet · Ch 3",
   "path": "Indu 211/03 - 1-Page Rapid Review Sheets/Part 2 - Chapter 3 - One-Page Rapid Review Sheet.pdf"
  },
  "r3": {
   "title": "Review sheet · Ch 4",
   "path": "Indu 211/03 - 1-Page Rapid Review Sheets/Part 3 - Chapter 4 - One-Page Rapid Review Sheet.pdf"
  },
  "qmid": {
   "title": "Midterm quantitative problem guide",
   "path": "Indu 211/04 - Worked Problems & Quantitative Analysis/INDU 211 - Midterm Quantitative Problem Guide (Forecasting & Warehouse TSP Heuristics).pdf"
  },
  "qbep": {
   "title": "Cost-volume & break-even guide",
   "path": "Indu 211/04 - Worked Problems & Quantitative Analysis/Cost-Volume & Break-Even Engineering Decision Guide.pdf"
  },
  "qloc": {
   "title": "Location & transportation guide",
   "path": "Indu 211/04 - Worked Problems & Quantitative Analysis/Facilities Location & Transportation Quantitative Decision Guide.pdf"
  }
 },
 "overview": {
  "headline": "Definitions + two calculations, every year",
  "points": [
   "The midterm covers Chapters 1–5. Only one full midterm (2020) and the 2019 sample exist, so the Chapter 1–2 questions from two finals are included too.",
   "The 2019 sample (two MCs and a transportation table) was handed out again in 2020, 2022 and 2024, and the 2020 midterm repeated its ideas.",
   "The calculations are always heuristics from the slides: lowest-cost-first transportation and nearest-neighbour TSP. The current instructor’s Assignment 2 asks both.",
   "Most MCs are select-all-that-apply with −1 per wrong letter. No official key was published for them; the answers here follow the slides, and the notes flag the judgement calls."
  ]
 },
 "exams": [
  {
   "id": "M20",
   "short": "MT 2020",
   "label": "Fall 2020 midterm (Oct 20, 2020)",
   "kind": "midterm",
   "detail": "9 select-all-that-apply MCs (25 marks), a warehouse TSP (18 marks), a location essay (7 marks)",
   "count": 16
  },
  {
   "id": "S19",
   "short": "Sample",
   "label": "2019 midterm sample (handed out again in 2020, 2022 and 2024)",
   "kind": "quiz",
   "detail": "Two MCs and one transportation calculation, taken from the 2019 midterm",
   "count": 3
  },
  {
   "id": "F20",
   "short": "Final 2020",
   "label": "Fall 2020 final, Chapter 1–5 questions only",
   "kind": "final",
   "counts": true,
   "detail": "The Chapter 1–2 MCs: engineering practice and what an IE P.Eng. may do",
   "count": 2
  },
  {
   "id": "SF22",
   "short": "Sample 2022",
   "label": "2022 sample final, Chapter 1–5 questions only",
   "kind": "final",
   "counts": true,
   "detail": "Two MCs: P.Eng. and the areas of IE",
   "count": 2
  },
  {
   "id": "A2",
   "short": "Assign. 2",
   "label": "Assignment 2 (current instructor, 2025)",
   "kind": "homework",
   "detail": "T/F on two feasible transportation plans (the lecture example)",
   "count": 6
  }
 ],
 "subjects": [
  {
   "id": "found",
   "name": "Foundations of IE",
   "ch": "Ch 1–2 · Slides 1",
   "blurb": "Science vs engineering, the profession, IE, supply chains, concurrent engineering.",
   "topics": [
    "ie",
    "ise"
   ]
  },
  {
   "id": "mfg",
   "name": "Manufacturing & process selection",
   "ch": "Ch 3 · Slides 2",
   "blurb": "BOM, processes, break-even.",
   "topics": [
    "mfg",
    "bep"
   ]
  },
  {
   "id": "fac",
   "name": "Facilities: location & layout",
   "ch": "Ch 4 · Slides 3–4",
   "blurb": "Transportation, centre of gravity, layout types.",
   "topics": [
    "loc",
    "layout"
   ]
  },
  {
   "id": "route",
   "name": "Material handling & routing",
   "ch": "Ch 5 · Slides 5",
   "blurb": "TSP heuristics, Clark-Wright savings.",
   "topics": [
    "tsp"
   ]
  }
 ],
 "topics": [
  {
   "id": "ie",
   "name": "Engineering, science & the profession",
   "ch": "Ch 1",
   "lec": [
    {
     "d": "ch12",
     "label": "Science vs engineering, P.Eng."
    }
   ],
   "cal": "Textbook Ch 1",
   "guide": "Part 1"
  },
  {
   "id": "ise",
   "name": "Industrial & systems engineering, supply chains",
   "ch": "Ch 2",
   "lec": [
    {
     "d": "ch12",
     "s": 16,
     "label": "Chronology of IE"
    }
   ],
   "cal": "Textbook Ch 2",
   "guide": "Part 1"
  },
  {
   "id": "mfg",
   "name": "Manufacturing engineering: BOM, processes",
   "ch": "Ch 3",
   "lec": [
    {
     "d": "ch3",
     "s": 7,
     "label": "BOM"
    }
   ],
   "cal": "Textbook Ch 3",
   "guide": "Part 2"
  },
  {
   "id": "bep",
   "name": "Cost-volume & break-even",
   "ch": "Ch 3",
   "lec": [
    {
     "d": "ch3",
     "s": 10,
     "label": "Cost-volume"
    },
    {
     "d": "ch3",
     "s": 15,
     "label": "Process selection"
    }
   ],
   "cal": "Textbook Ch 3",
   "guide": "Part 2"
  },
  {
   "id": "loc",
   "name": "Facility location: transportation & centre of gravity",
   "ch": "Ch 4",
   "lec": [
    {
     "d": "ch41",
     "s": 9,
     "label": "Transportation"
    },
    {
     "d": "ch41",
     "s": 18,
     "label": "Centre of gravity"
    }
   ],
   "cal": "Textbook Ch 4",
   "guide": "Part 3"
  },
  {
   "id": "layout",
   "name": "Facility layout types",
   "ch": "Ch 4",
   "lec": [
    {
     "d": "ch42",
     "s": 8,
     "label": "Layout types"
    }
   ],
   "cal": "Textbook Ch 4",
   "guide": "Part 3"
  },
  {
   "id": "tsp",
   "name": "Material routing: TSP & Clark-Wright",
   "ch": "Ch 5",
   "lec": [
    {
     "d": "ch5",
     "s": 13,
     "label": "TSP"
    },
    {
     "d": "ch5",
     "s": 16,
     "label": "VRP"
    }
   ],
   "cal": "Textbook Ch 5",
   "guide": "Part 4"
  }
 ],
 "questions": [
  {
   "id": "M20-1",
   "exam": "M20",
   "n": 1,
   "topic": "ie",
   "kind": "multi",
   "q": "As discussed in class, engineering study may be described as…",
   "opts": [
    "Social Science and Humanity Studies",
    "Social Science",
    "Applied Science",
    "Management Science",
    "Study on using scientific knowledge to solve real-world problems"
   ],
   "ans": "c,e",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of."
  },
  {
   "id": "M20-2",
   "exam": "M20",
   "n": 2,
   "topic": "ie",
   "kind": "multi",
   "q": "Regarding science and engineering…",
   "opts": [
    "science and engineering are not related",
    "both science study and engineering study involve experiments",
    "science is to understand the world, engineering is to make life better",
    "science is based on pure mathematics, engineering on computer science",
    "scientific discovery always results in immediate advancement of engineering"
   ],
   "ans": "b,c",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of."
  },
  {
   "id": "M20-3",
   "exam": "M20",
   "n": 3,
   "topic": "ie",
   "kind": "multi",
   "q": "As discussed in class, in Canada engineering is a profession and…",
   "opts": [
    "anyone practising it must meet academic qualifications approved by CEAB",
    "can be practised by anyone with a Ph.D. in science",
    "can be practised by anyone with a Ph.D. in science who is “handy”",
    "is regulated through provincial associations of professional engineers",
    "is regulated by a United Nations commission"
   ],
   "ans": "a,d",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of."
  },
  {
   "id": "M20-4",
   "exam": "M20",
   "n": 4,
   "topic": "ie",
   "kind": "multi",
   "q": "Which activities are considered engineering practice?",
   "opts": [
    "Supervising a team of nurses for Covid-19 treatment",
    "Planning a project that requires engineering principles",
    "Designing a phone app to rank engineering schools",
    "Selling products designed by a high-tech company",
    "Designing a new electric vehicle for public use"
   ],
   "ans": "b,e",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of. The test from the slides: does it apply engineering principles where public safety, health or property is at stake?"
  },
  {
   "id": "M20-5",
   "exam": "M20",
   "n": 5,
   "topic": "ise",
   "kind": "multi",
   "q": "As discussed in class, Industrial Engineering evolved from…",
   "opts": [
    "IE salaries being higher",
    "division of labour / job specialisation",
    "its influence on other disciplines",
    "scientific work methods becoming more important in production",
    "engineering systems becoming more complicated"
   ],
   "ans": "b,d,e",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of."
  },
  {
   "id": "M20-6",
   "exam": "M20",
   "n": 6,
   "topic": "ise",
   "kind": "multi",
   "q": "A Concordia IE bachelor’s degree prepares you for which positions?",
   "opts": [
    "Supply chain analyst / junior manager",
    "Software developer for social networking",
    "Aerospace manufacturing system engineer",
    "Covid-19 data analyst",
    "Wireless communication software designer",
    "Production system integration engineer",
    "Turbine engine designer",
    "Quality engineer",
    "Industrial engineer",
    "Process control engineer",
    "System engineer"
   ],
   "ans": "a,c,d,f,h,i,j,k",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of. D (data analyst) and J (process control) are the judgement calls; both use IE tools taught in this course."
  },
  {
   "id": "M20-7",
   "exam": "M20",
   "n": 7,
   "topic": "ise",
   "kind": "multi",
   "q": "As discussed in class, in a supply chain system…",
   "opts": [
    "typically there are many suppliers and only one manufacturer",
    "typically there is one supplier and many manufacturers",
    "there can be many suppliers and many manufacturers",
    "suppliers and manufacturers may belong to the same company",
    "suppliers and manufacturers may belong to different companies"
   ],
   "ans": "c,d,e",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of."
  },
  {
   "id": "M20-8",
   "exam": "M20",
   "n": 8,
   "topic": "ise",
   "kind": "multi",
   "q": "Concurrent engineering typically refers to…",
   "opts": [
    "the design and manufacturing of a product being done concurrently",
    "engineers considering how the product is manufactured while designing it",
    "a new discipline applied in concurrent situations",
    "a discipline practised with artificial intelligence",
    "a systematic approach to design and develop a new product"
   ],
   "ans": "a,b,e",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of. Textbook: “a systematic approach to the integrated, concurrent design of products and their related processes, including manufacture”."
  },
  {
   "id": "M20-9",
   "exam": "M20",
   "n": 9,
   "topic": "layout",
   "kind": "multi",
   "q": "Types of facility layout in a factory can be…",
   "opts": [
    "U-shaped layout, for flexible and mass production",
    "AGV-based layout, for small items",
    "product layout, for one or a few products in large quantity",
    "process layout, for many different parts in smaller quantities",
    "fixed product layout, for production using fixed automation"
   ],
   "ans": "c,d",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of. Fixed-position layout is for large, immobile products (ships, aircraft), not fixed automation."
  },
  {
   "id": "M20-10",
   "exam": "M20",
   "n": "2.1",
   "topic": "tsp",
   "kind": "num",
   "q": "A forklift starts and ends at P and visits A–E once (one-way corridors, so the matrix is not symmetric). Using the nearest-neighbour method, what is the total distance?",
   "code": "        To:  P   A   B   C   D   E\nFrom P       -  15  20  19  26  13\n     A       9   -  12  16  13  18\n     B      19  13   -  17  15  18\n     C      22  16  12   -  16  14\n     D      18  10  18  20   -  12\n     E      22   9  11  13  14   -",
   "ans": "91",
   "tol": 0.001,
   "steps": [
    "P → E (13), E → A (9), A → B (12), B → D (15), D → C (20), C → P (22)",
    "Total 13 + 9 + 12 + 15 + 20 + 22 = 91"
   ],
   "status": "verified",
   "f": [
    "C-tsp"
   ]
  },
  {
   "id": "M20-11",
   "exam": "M20",
   "n": "2.2",
   "topic": "tsp",
   "kind": "num",
   "q": "Same matrix. Go to the SECOND-nearest department first, then nearest neighbour for every other stop. Total distance?",
   "code": "        To:  P   A   B   C   D   E\nFrom P       -  15  20  19  26  13\n     A       9   -  12  16  13  18\n     B      19  13   -  17  15  18\n     C      22  16  12   -  16  14\n     D      18  10  18  20   -  12\n     E      22   9  11  13  14   -",
   "ans": "89",
   "tol": 0.001,
   "steps": [
    "From P the 2nd nearest is A (15)",
    "A → B (12), B → D (15), D → E (12), E → C (13), C → P (22)",
    "Total 89: shorter than the pure nearest-neighbour route"
   ],
   "status": "verified",
   "f": [
    "C-tsp"
   ]
  },
  {
   "id": "M20-12",
   "exam": "M20",
   "n": "2.3",
   "topic": "tsp",
   "kind": "mc",
   "q": "Are the routes from 2.1 and 2.2 optimal?",
   "opts": [
    "Yes, nearest neighbour always gives the optimum",
    "Only the 2.2 route, because it is shorter",
    "Neither is guaranteed optimal: both are heuristics",
    "Both are optimal because every department is visited"
   ],
   "ans": "c",
   "status": "verified",
   "note": "2.2 beating 2.1 proves that nearest neighbour is not optimal here; whether 89 is optimal is still unknown without a full search."
  },
  {
   "id": "M20-13",
   "exam": "M20",
   "n": "2.4.1",
   "topic": "tsp",
   "kind": "tf",
   "q": "A total-search app that generates every possible route and picks the shortest finds the optimal route.",
   "ans": "True",
   "status": "verified",
   "note": "Total enumeration is exact; it is just slow."
  },
  {
   "id": "M20-14",
   "exam": "M20",
   "n": "2.4.2",
   "topic": "tsp",
   "kind": "num",
   "q": "How many routes must the total search generate for P plus 5 departments (start and end at P, one-way distances)?",
   "ans": "120",
   "tol": 0.001,
   "steps": [
    "Fix P as start; order the other 5 in 5! ways",
    "5! = 120 (no halving: the matrix is asymmetric)"
   ],
   "status": "verified"
  },
  {
   "id": "M20-15",
   "exam": "M20",
   "n": "2.4.3",
   "topic": "tsp",
   "kind": "num",
   "q": "And for P plus 20 departments?",
   "ans": "2.43e18",
   "tol": 0.01,
   "steps": [
    "20! = 2.43 × 10¹⁸ routes: why heuristics are used"
   ],
   "status": "verified"
  },
  {
   "id": "M20-16",
   "exam": "M20",
   "n": 3,
   "topic": "loc",
   "kind": "open",
   "q": "List 7 relevant factors for locating a Covid-19 testing centre in a large city (≤ 3 lines each).",
   "ans": "Any 7 of: proximity to population/demand; accessibility (transit, parking, roads); cost of land/rent; available space & expansion; proximity to hospitals and labs; utilities/infrastructure; safety & zoning regulations; labour availability; community acceptance; competition/coverage of other centres.",
   "status": "unofficial",
   "steps": [
    "Group them as the textbook does: market, transportation, cost, regulation, community."
   ]
  },
  {
   "id": "S19-1",
   "exam": "S19",
   "n": 1,
   "topic": "ie",
   "kind": "mc",
   "q": "Regarding science and engineering,",
   "opts": [
    "there are no major differences between them",
    "science is concerned with the quest for basic knowledge and engineering is to solve real-life problems",
    "science relies on mathematics, engineering relies on computers, not much mathematics",
    "science and engineering are unrelated",
    "none of the above"
   ],
   "ans": "b",
   "status": "key"
  },
  {
   "id": "S19-2",
   "exam": "S19",
   "n": 2,
   "topic": "ise",
   "kind": "mc",
   "q": "As discussed in class, a supply chain system typically refers to a…",
   "opts": [
    "process that fabricates and supplies metal chains",
    "supplier who provides products to many customers in a chain of retailers",
    "complex production system with components and final products made by different entities with physical, information and commercial links",
    "physical system supplying electricity to a chain of communities",
    "none of the above"
   ],
   "ans": "c",
   "status": "key"
  },
  {
   "id": "S19-3",
   "exam": "S19",
   "n": 3,
   "topic": "loc",
   "kind": "num",
   "q": "Use the “lowest-unit-cost-first” rule to ship containers from the three factories to the three warehouses. Total transportation cost?",
   "code": "            Montreal  Ottawa  Toronto | Supply\nEdmonton        12       10       8   |   40\nWinnipeg         6       12      16   |   20\nSaskatoon        7       15       9   |   80\nDemand          50       30      60   |  140",
   "ans": "1280",
   "tol": 0.001,
   "unit": "$",
   "steps": [
    "Cheapest cell first: Winnipeg → Montreal at 6: ship 20 (Winnipeg empty)",
    "Saskatoon → Montreal at 7: ship 30 (Montreal full)",
    "Edmonton → Toronto at 8: ship 40 (Edmonton empty)",
    "Saskatoon → Toronto at 9: ship 20 (Toronto full)",
    "Saskatoon → Ottawa at 15: ship 30",
    "Cost 20·6 + 30·7 + 40·8 + 20·9 + 30·15 = 1280"
   ],
   "status": "verified",
   "f": [
    "C-transport"
   ]
  },
  {
   "id": "F20-1",
   "exam": "F20",
   "n": 1,
   "topic": "ie",
   "kind": "multi",
   "q": "As discussed in class, which may be considered practice of engineering?",
   "opts": [
    "Developing a simulation model to evaluate a production line",
    "Using a TSP model to plan visits to family over the holidays",
    "Applying a queuing model to size a clinic’s waiting area",
    "Setting up an X-bar chart for your home’s temperature",
    "Developing an app to follow Covid vaccine research"
   ],
   "ans": "a,c",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of."
  },
  {
   "id": "F20-2",
   "exam": "F20",
   "n": 2,
   "topic": "ie",
   "kind": "multi",
   "q": "A P.Eng. specialising in Industrial Engineering may practise in…",
   "opts": [
    "designing a production line for face masks",
    "designing a ventilator",
    "evaluating financial transactions of a charity",
    "evaluating and improving service quality of a financial institution",
    "planning a residential construction project"
   ],
   "ans": "a,d,e",
   "status": "unofficial",
   "note": "No official answer key was posted. Answers follow the lecture slides; the select-all-that-apply marking gives +1 per correct letter and −1 per wrong one, so leave out letters you are unsure of. E counts because project planning (CPM/PERT) is IE; B is device design, outside IE competence."
  },
  {
   "id": "SF22-1",
   "exam": "SF22",
   "n": 1,
   "topic": "ie",
   "kind": "mc",
   "q": "To obtain the title of Professional Engineer in Canada, one must have completed…",
   "opts": [
    "a college Industrial Technology programme",
    "a graduate programme at a well-known university",
    "ISO quality-standards training",
    "an undergraduate engineering programme accredited by CEAB",
    "none of the above"
   ],
   "ans": "d",
   "status": "key"
  },
  {
   "id": "SF22-2",
   "exam": "SF22",
   "n": 2,
   "topic": "ise",
   "kind": "mc",
   "q": "The areas of the Industrial Engineering discipline mainly include…",
   "opts": [
    "Operations Research, Materials Engineering, Product and Process Design",
    "Computer Science, Human Factors, System Integration",
    "Operations Research, Human Factors Engineering, System Analysis and Design",
    "SQC, Inventory Control, Queuing Theory",
    "none of the above"
   ],
   "ans": "c",
   "status": "key"
  },
  {
   "id": "A2-a",
   "exam": "A2",
   "n": "P1a",
   "topic": "loc",
   "kind": "tf",
   "q": "Lecture example: two feasible plans cost $39,900 and $42,300. “The first solution ($39,900) may be optimal.”",
   "code": "             San Antonio  Dallas  Houston | Capacity\nAmarillo          31        21      42    |   400\nWaco              20        21      30    |  1000\nHuntsville        23        20      15    |   600\nRequirement      300       900     800    |  2000",
   "ans": "True",
   "status": "verified",
   "note": "A heuristic plan might happen to be optimal; you just cannot be sure."
  },
  {
   "id": "A2-c",
   "exam": "A2",
   "n": "P1c",
   "topic": "loc",
   "kind": "tf",
   "q": "“The first solution ($39,900) is definitely optimal.”",
   "ans": "False",
   "status": "verified",
   "note": "Lowest-cost-first is a heuristic: no optimality guarantee."
  },
  {
   "id": "A2-e",
   "exam": "A2",
   "n": "P1e",
   "topic": "loc",
   "kind": "tf",
   "q": "“The second solution ($42,300) may be optimal.”",
   "ans": "False",
   "status": "verified",
   "note": "A cheaper feasible plan ($39,900) exists, so $42,300 is definitely not optimal."
  },
  {
   "id": "A2-g",
   "exam": "A2",
   "n": "P1g",
   "topic": "loc",
   "kind": "tf",
   "q": "“An optimal solution means every other solution has the same or higher total cost.”",
   "ans": "True",
   "status": "verified"
  },
  {
   "id": "A2-h",
   "exam": "A2",
   "n": "P1h",
   "topic": "loc",
   "kind": "tf",
   "q": "“The two plans are solutions of the model and may need further evaluation before being implemented in the real world.”",
   "ans": "True",
   "status": "verified"
  },
  {
   "id": "A2-i",
   "exam": "A2",
   "n": "P1i",
   "topic": "loc",
   "kind": "tf",
   "q": "“A general transportation model may have no feasible solution, depending on supplies, demands and other requirements.”",
   "ans": "True",
   "status": "verified",
   "note": "For example, total demand larger than total supply with every demand required."
  }
 ],
 "clusters": [
  {
   "id": "c-sci",
   "topic": "ie",
   "match": "template",
   "expect": "Very likely",
   "title": "Science vs engineering",
   "members": [
    "S19-1",
    "M20-2",
    "M20-1"
   ],
   "changes": "The 2019 sample (single answer) became a select-all-that-apply in 2020 with the same idea.",
   "study": "Science seeks knowledge (understand the world); engineering applies it to solve real problems (make life better). Both use experiments and mathematics.",
   "trap": "Absolute statements (“always”, “not related”) are false.",
   "refs": {
    "lec": [
     {
      "d": "ch12",
      "s": 5
     },
     {
      "d": "ch12",
      "s": 6
     }
    ],
    "guide": "Part 1"
   }
  },
  {
   "id": "c-practice",
   "topic": "ie",
   "match": "template",
   "expect": "Very likely",
   "title": "What counts as engineering practice?",
   "members": [
    "M20-4",
    "F20-1",
    "F20-2"
   ],
   "changes": "A list of activities, pick the engineering ones (2020 midterm, 2020 final); then what an IE P.Eng. may do.",
   "study": "Slide definition: planning, designing, evaluating … applying engineering principles where life, health, property or the public interest is at stake.",
   "trap": "Personal uses of IE tools (holiday TSP, home control chart) are not “practice”.",
   "refs": {
    "lec": [
     {
      "d": "ch12",
      "s": 13
     }
    ],
    "guide": "Part 1"
   }
  },
  {
   "id": "c-peng",
   "topic": "ie",
   "match": "template",
   "expect": "Very likely",
   "title": "The profession: CEAB & provincial regulation",
   "members": [
    "M20-3",
    "SF22-1"
   ],
   "changes": "Same facts asked as select-all (2020) and single answer (2022 sample).",
   "study": "A CEAB-accredited bachelor’s degree; regulated by provincial associations (OIQ in Québec).",
   "trap": "A Ph.D. in science does not make you an engineer.",
   "refs": {
    "lec": [
     {
      "d": "ch12",
      "s": 12
     }
    ],
    "guide": "Part 1"
   }
  },
  {
   "id": "c-ie",
   "topic": "ise",
   "match": "concept",
   "expect": "Likely",
   "title": "What IE is and where it came from",
   "members": [
    "M20-5",
    "M20-6",
    "SF22-2"
   ],
   "changes": "Origins (division of labour, scientific methods, complexity), jobs, and the three core areas.",
   "study": "Core areas: operations research, human factors, systems analysis & design.",
   "trap": "Salary and “influence” are not origins.",
   "refs": {
    "lec": [
     {
      "d": "ch12",
      "s": 16
     },
     {
      "d": "ch12",
      "s": 18
     }
    ],
    "guide": "Part 1"
   }
  },
  {
   "id": "c-supply",
   "topic": "ise",
   "match": "template",
   "expect": "Very likely",
   "title": "Supply chains",
   "members": [
    "S19-2",
    "M20-7",
    "M20-8"
   ],
   "changes": "Definition (2019 sample), then structure (2020: many suppliers/manufacturers, same or different companies).",
   "study": "A network of entities linked physically, informationally and commercially, from raw material to customer.",
   "trap": "“Typically only one…” options.",
   "refs": {
    "lec": [
     {
      "d": "ch12",
      "s": 20
     }
    ],
    "guide": "Part 1"
   }
  },
  {
   "id": "c-transport",
   "topic": "loc",
   "match": "template",
   "expect": "Very likely",
   "title": "Transportation by “lowest unit cost first”",
   "members": [
    "S19-3",
    "A2-a",
    "A2-c",
    "A2-e"
   ],
   "changes": "The sample calculation has been handed out every year since 2020, and the current instructor’s Assignment 2 drills the same method on the lecture example.",
   "study": "Take the cheapest open cell, ship as much as supply/demand allows, cross out the exhausted row or column, repeat.",
   "trap": "A heuristic plan is feasible, not necessarily optimal.",
   "refs": {
    "lec": [
     {
      "d": "ch41",
      "s": 13
     },
     {
      "d": "ch41",
      "s": 14
     }
    ],
    "guide": "Part 3"
   }
  },
  {
   "id": "c-tsp",
   "topic": "tsp",
   "match": "template",
   "expect": "Very likely",
   "title": "Warehouse TSP: nearest neighbour & variants",
   "members": [
    "M20-10",
    "M20-11",
    "M20-12",
    "M20-14"
   ],
   "changes": "18 marks on the 2020 midterm; the current Assignment 2 asks nearest-neighbour and next-nearest on a fork-truck problem.",
   "study": "Always go to the closest unvisited stop; a one-way matrix is read row = from. Count routes with (n − 1)!.",
   "trap": "Reading the column instead of the row in an asymmetric matrix.",
   "refs": {
    "lec": [
     {
      "d": "ch5",
      "s": 13
     },
     {
      "d": "ch5",
      "s": 14
     }
    ],
    "guide": "Part 4"
   }
  }
 ],
 "formulas": [
  {
   "id": "C-found",
   "topic": "ie",
   "name": "Engineering & the profession",
   "calc": null,
   "meaning": "The Chapter 1 definitions the multiple-choice section tests.",
   "steps": [
    "Science = understand; engineering = apply knowledge to solve real problems.",
    "Engineering practice = applying engineering principles to plan, design, evaluate… where public safety is concerned.",
    "P.Eng.: CEAB-accredited degree + provincial regulation."
   ],
   "traps": [
    "Absolute words.",
    "Personal uses of engineering tools."
   ],
   "seen": [
    "M20-1",
    "M20-2",
    "M20-3",
    "M20-4",
    "S19-1",
    "SF22-1",
    "F20-1",
    "F20-2"
   ],
   "lec": [
    {
     "d": "ch12"
    }
   ],
   "guide": "Part 1",
   "cal": "Textbook Ch 1",
   "learn": {
    "idea": "The first lecture defines engineering by contrast with science (knowledge vs application), and defines the profession by regulation: an accredited degree and a provincial licence. Every past paper has 2–4 marks on these definitions, written as “select all that apply”.",
    "when": [
     "MCs starting “As discussed in class…”."
    ],
    "example": {
     "title": "2019 sample MC 1",
     "given": "Regarding science and engineering…",
     "find": "the best statement",
     "steps": [
      {
       "say": "Science seeks basic knowledge."
      },
      {
       "say": "Engineering uses knowledge to solve real-life problems."
      }
     ],
     "answer": "(b)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "S19-1"
     },
     {
      "type": "exam",
      "id": "M20-1"
     },
     {
      "type": "exam",
      "id": "M20-2"
     },
     {
      "type": "exam",
      "id": "M20-3"
     },
     {
      "type": "exam",
      "id": "M20-4"
     },
     {
      "type": "exam",
      "id": "SF22-1"
     },
     {
      "type": "exam",
      "id": "F20-1"
     },
     {
      "type": "exam",
      "id": "F20-2"
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Slides 1 · science vs engineering",
      "q": "Engineering applies scientific knowledge to solve practical, real-world problems.",
      "ans": true,
      "why": "Science seeks to understand; engineering applies that knowledge."
     },
     {
      "type": "mc",
      "badge": "concept",
      "src": "Slides 1 · the profession",
      "q": "Which body accredits Canadian undergraduate engineering programmes?",
      "opts": [
       "CEAB",
       "OIQ",
       "ISO",
       "IISE"
      ],
      "ans": "a",
      "why": "The CEAB accredits programmes; provincial associations (the OIQ in Québec) license engineers."
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Slides 1 · the profession",
      "q": "Engineering in Canada is regulated by provincial associations, such as the OIQ in Québec.",
      "ans": true,
      "why": "Licensing is provincial, not federal or international."
     }
    ]
   }
  },
  {
   "id": "C-ise",
   "topic": "ise",
   "name": "Industrial & systems engineering",
   "calc": null,
   "meaning": "What IE is, where it came from, supply chains, concurrent engineering.",
   "steps": [
    "Origins: division of labour, scientific work methods, growing system complexity.",
    "Core areas: operations research, human factors, systems analysis & design.",
    "Supply chain: many entities linked physically, by information and commercially.",
    "Concurrent engineering: design product and process together."
   ],
   "traps": [
    "Picking “salary” or “influence” as origins."
   ],
   "seen": [
    "M20-5",
    "M20-6",
    "M20-7",
    "M20-8",
    "S19-2",
    "SF22-2"
   ],
   "lec": [
    {
     "d": "ch12",
     "s": 16
    }
   ],
   "guide": "Part 1",
   "cal": "Textbook Ch 2",
   "learn": {
    "idea": "IE grew out of the factory: once work was divided into specialised tasks and studied scientifically, someone had to design the whole system. That is still the job: optimise systems of people, machines, material and information, including supply chains that cross company boundaries.",
    "when": [
     "Definition MCs on IE, supply chains and concurrent engineering."
    ],
    "example": {
     "title": "2019 sample MC 2",
     "given": "A supply chain system typically refers to…",
     "find": "the definition",
     "steps": [
      {
       "say": "Components and final products are made by DIFFERENT entities."
      },
      {
       "say": "They are linked physically, by information and commercially."
      }
     ],
     "answer": "(c)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "S19-2"
     },
     {
      "type": "exam",
      "id": "M20-5"
     },
     {
      "type": "exam",
      "id": "M20-6"
     },
     {
      "type": "exam",
      "id": "M20-7"
     },
     {
      "type": "exam",
      "id": "M20-8"
     },
     {
      "type": "exam",
      "id": "SF22-2"
     },
     {
      "type": "mc",
      "badge": "concept",
      "src": "Textbook Ch 2 · concurrent engineering",
      "q": "Concurrent engineering means…",
      "opts": [
       "designing the product and its manufacturing processes together",
       "building the product in several factories at once",
       "engineering done with artificial intelligence",
       "finishing the design before thinking about manufacturing"
      ],
      "ans": "a",
      "why": "Integrated, concurrent design of products and their related processes."
     },
     {
      "type": "mc",
      "badge": "concept",
      "src": "Slides 1 · areas of IE (also 2022 sample Q2)",
      "q": "Which is NOT one of the three core areas of industrial engineering named in class?",
      "opts": [
       "Materials engineering",
       "Operations research",
       "Human factors engineering",
       "Systems analysis and design"
      ],
      "ans": "a",
      "why": "The three core areas: operations research, human factors, systems analysis & design."
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Slides 1 · supply chains",
      "q": "A supply chain can include several companies linked by physical, information and commercial flows.",
      "ans": true,
      "why": "Suppliers and manufacturers may belong to the same or different companies."
     }
    ]
   }
  },
  {
   "id": "C-bom",
   "topic": "mfg",
   "name": "Multi-level BOM explosion",
   "calc": null,
   "meaning": "Explode parent product requirements down through subassemblies to raw components.",
   "steps": [
    "Identify finished products and master schedule quantities.",
    "Level 1: multiply finished product quantities by usage brackets to find subassemblies.",
    "Sum subassembly quantities across all finished products.",
    "Level 2: explode each subassembly into its component requirements and sum across all subassemblies."
   ],
   "traps": [
    "A part under two parents (SS1 under S1 and under S2) must be summed over both branches.",
    "Multiply along the whole path: R4 under C3 is 3 × 4 × 6 per product, not 6."
   ],
   "seen": [],
   "lec": [
    {
     "d": "ch3",
     "s": 7
    }
   ],
   "guide": "Part 2",
   "cal": "Textbook Ch 3",
   "learn": {
    "idea": "A Bill of Materials (BOM) specifies the hierarchy of assemblies, subassemblies, and parts needed to make one unit of finished product. For multi-level BOM explosion across multiple end products, calculate top-down level by level, aggregating shared requirements at each stage.",
    "when": [
     "BOM explosion problems with product structure trees."
    ],
    "example": {
     "title": "Lecture slide 7 product tree",
     "given": "Product → S1 (3), S2 (1); S1 → SS1 (2), C3 (4); S2 → SS1 (4), SS3 (3); SS1 → C1 (1), C2 (1); C2 → R2 (2), R3 (1); C3 → R4 (6); SS3 → R4 (3), C4 (1), C5 (1); C4 → R5 (2), R6 (2)",
     "find": "every part needed for one product",
     "steps": [
      {
       "say": "Level 1: S1 = 1 × 3 = 3, S2 = 1 × 1 = 1."
      },
      {
       "say": "Level 2: SS1 sits under both S1 and S2, so add both branches.",
       "tex": "SS1 = 3(2) + 1(4) = 10,quad C3 = 3(4) = 12,quad SS3 = 1(3) = 3"
      },
      {
       "say": "Level 3: C1 = C2 = 10 (one each per SS1); C4 = C5 = 3 (one each per SS3)."
      },
      {
       "say": "Level 4: R4 comes from C3 and from SS3, so add both.",
       "tex": "R2 = 10(2) = 20, R3 = 10, R4 = 12(6) + 3(3) = 81, R5 = R6 = 3(2) = 6"
      }
     ],
     "answer": "S1 3, S2 1, SS1 10, SS3 3, C1 10, C2 10, C3 12, C4 3, C5 3, R2 20, R3 10, R4 81, R5 6, R6 6"
    },
    "quiz": [
     {
      "type": "value",
      "badge": "lecture",
      "src": "Slides 2, slide 7",
      "q": "Slide 7 product tree: how many SS1 are needed for 5 products?",
      "answer": 50,
      "unit": "",
      "steps": [
       "Per product: 3 S1 × 2 + 1 S2 × 4 = 10",
       "5 products × 10 = 50"
      ]
     },
     {
      "type": "value",
      "badge": "lecture",
      "src": "Slides 2, slide 7",
      "q": "Slide 7 product tree: how many R4 are needed for one product?",
      "answer": 81,
      "unit": "",
      "steps": [
       "Through C3: 3 S1 × 4 C3 × 6 = 72",
       "Through SS3: 1 S2 × 3 SS3 × 3 = 9",
       "72 + 9 = 81"
      ]
     },
     {
      "type": "value",
      "badge": "lecture",
      "src": "Slides 2, slide 7",
      "q": "Slide 7 product tree: how many R2 are needed for 2 products?",
      "answer": 40,
      "unit": "",
      "steps": [
       "SS1 per product = 10, C2 = 10, R2 = 10 × 2 = 20",
       "2 products × 20 = 40"
      ]
     },
     {
      "type": "mc",
      "badge": "concept",
      "src": "Slides 2, slide 8",
      "q": "In the bookcase BOM (slide 8), shelves and legs are “Manufacturing” while inserts and screws are “Purchasing”. What does the Source column tell the planner?",
      "opts": [
       "Which department designs the part",
       "Whether the part is made in-house or bought from a supplier",
       "The order in which parts are assembled",
       "The cost of each part"
      ],
      "ans": "b",
      "why": "Make-or-buy: manufactured parts get their own BOM (shelf, leg → sheet metal); purchased parts are ordered."
     }
    ]
   }
  },
  {
   "id": "C-bep",
   "topic": "bep",
   "name": "Break-even & process selection",
   "calc": "breakeven",
   "meaning": "Total cost = fixed + variable × volume; compare processes or find the break-even volume.",
   "tex": "TC = F + vQ,\\qquad Q_{BEP} = \\frac{F}{p - v},\\qquad Q_{A\\text{-}B} = \\frac{F_B - F_A}{v_A - v_B}",
   "steps": [
    "Write TC for each process.",
    "At a given demand, pick the lowest TC.",
    "Crossover volume between two processes: set their TCs equal.",
    "Revenue break-even: pQ = F + vQ."
   ],
   "traps": [
    "High fixed cost is only worth it at high volume.",
    "Dividing by the wrong difference."
   ],
   "seen": [],
   "lec": [
    {
     "d": "ch3",
     "s": 12
    },
    {
     "d": "ch3",
     "s": 15
    }
   ],
   "guide": "Part 2",
   "cal": "Textbook Ch 3",
   "presets": [
    {
     "label": "Slide 15: processes A, B, C at 10,000 units",
     "values": {
      "mode": "compare",
      "procs": "A 110000 2\nB 80000 4\nC 75000 5",
      "D": 10000
     }
    },
    {
     "label": "Slide 12: F = 28,000, v = 100, p = 200",
     "values": {
      "mode": "price",
      "F": 28000,
      "vc": 100,
      "p": 200
     }
    }
   ],
   "learn": {
    "idea": "Every process has a fixed cost (machine, tooling) and a variable cost per unit. Plotted against volume they are straight lines, and the cheapest process changes where the lines cross. The crossover volumes split the demand axis into “choose C / choose B / choose A” ranges.",
    "when": [
     "Fixed and variable costs are given; “which process” or “at what volume”."
    ],
    "example": {
     "title": "Lecture slides 15–17",
     "given": "A: $110,000 + $2/unit; B: $80,000 + $4; C: $75,000 + $5; demand 10,000",
     "find": "best process and the ranges",
     "steps": [
      {
       "say": "Total costs at 10,000.",
       "tex": "TC_A = 130{,}000,\\ TC_B = 120{,}000,\\ TC_C = 125{,}000"
      },
      {
       "say": "B–C crossover.",
       "tex": "80{,}000 + 4Q = 75{,}000 + 5Q \\Rightarrow Q = 5{,}000"
      },
      {
       "say": "A–B crossover.",
       "tex": "110{,}000 + 2Q = 80{,}000 + 4Q \\Rightarrow Q = 15{,}000"
      }
     ],
     "answer": "B at 10,000. C below 5,000; B from 5,000 to 15,000; A above 15,000"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Slide 12: fixed cost ${F}, variable ${vc}/unit, price ${p}. Break-even volume?",
      "calc": "breakeven",
      "values": {
       "mode": "price",
       "F": 28000,
       "vc": 100,
       "p": 200
      },
      "row": "Break-even volume",
      "unit": "units"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Fixed cost ${F}, variable cost ${vc}/unit, selling price ${p}/unit. Break-even volume?",
      "calc": "breakeven",
      "values": {
       "mode": "price",
       "F": 28000,
       "vc": 100,
       "p": 200
      },
      "vary": [
       {
        "key": "F",
        "min": 10000,
        "max": 90000,
        "dp": -3
       },
       {
        "key": "vc",
        "min": 20,
        "max": 120,
        "dp": 0
       },
       {
        "key": "p",
        "min": 150,
        "max": 260,
        "dp": 0
       }
      ],
      "row": "Break-even volume",
      "unit": "units",
      "tol": 0.01
     },
     {
      "type": "value",
      "badge": "lecture",
      "q": "Slide 15: at what volume do processes B ($80,000 + $4) and C ($75,000 + $5) cost the same?",
      "answer": 5000,
      "unit": "units",
      "steps": [
       "80,000 + 4Q = 75,000 + 5Q → Q = 5,000"
      ]
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Expected demand is far above every crossover volume. Which process should you choose?",
      "opts": [
       "the lowest fixed cost",
       "the lowest variable cost",
       "the highest selling price",
       "it does not matter"
      ],
      "ans": "b",
      "why": "At high volume the variable cost dominates the total."
     }
    ]
   }
  },
  {
   "id": "C-transport",
   "topic": "loc",
   "name": "Transportation: lowest cost first",
   "calc": "transport",
   "meaning": "Allocate shipments starting from the cheapest route.",
   "steps": [
    "Find the cheapest cell still open.",
    "Ship min(remaining supply, remaining demand).",
    "Cross out the exhausted row or column.",
    "Repeat until everything is shipped; total = Σ quantity × cost."
   ],
   "traps": [
    "Ties: pick either; the plan can change, and so can the cost (39,900 vs 42,300).",
    "The result is feasible, not guaranteed optimal."
   ],
   "seen": [
    "S19-3",
    "A2-a",
    "A2-c",
    "A2-e"
   ],
   "lec": [
    {
     "d": "ch41",
     "s": 13
    },
    {
     "d": "ch41",
     "s": 14
    }
   ],
   "guide": "Part 3",
   "cal": "Textbook Ch 4",
   "presets": [
    {
     "label": "2019 sample: Edmonton/Winnipeg/Saskatoon",
     "from": "S19-3",
     "values": {
      "cost": "12 10 8\n6 12 16\n7 15 9",
      "supply": "40 20 80",
      "demand": "50 30 60"
     }
    },
    {
     "label": "Lecture: Plain View (with Huntsville)",
     "values": {
      "cost": "31 21 42\n20 21 30\n23 20 15",
      "supply": "400 1000 600",
      "demand": "300 900 800"
     }
    }
   ],
   "learn": {
    "idea": "The transportation table lists unit costs from each source to each destination. The greedy rule from class fills the cheapest cell first with as much as it can take, then moves to the next cheapest open cell. It is fast and usually good, but not always optimal, which is exactly what Assignment 2 asks you to explain.",
    "when": [
     "A cost table with supplies and demands; “lowest-unit-cost-first”."
    ],
    "example": {
     "title": "Lecture example (Plain View with Huntsville)",
     "given": "costs, capacities 400/1000/600, requirements 300/900/800",
     "find": "a feasible plan and its cost",
     "code": "             San Antonio  Dallas  Houston | Capacity\nAmarillo          31        21      42    |   400\nWaco              20        21      30    |  1000\nHuntsville        23        20      15    |   600\nRequirement      300       900     800    |  2000",
     "steps": [
      {
       "say": "Huntsville → Houston at 15: ship 600."
      },
      {
       "say": "Waco → San Antonio at 20: ship 300."
      },
      {
       "say": "Amarillo → Dallas at 21: 400; Waco → Dallas at 21: 500."
      },
      {
       "say": "Waco → Houston at 30: 200."
      },
      {
       "say": "Cost.",
       "tex": "6\\cdot15 + 3\\cdot20 + 4\\cdot21 + 5\\cdot21 + 2\\cdot30 = 399\\ (\\times100)"
      }
     ],
     "answer": "$39,900"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "S19-3"
     },
     {
      "type": "exam",
      "id": "A2-a"
     },
     {
      "type": "exam",
      "id": "A2-c"
     },
     {
      "type": "exam",
      "id": "A2-e"
     },
     {
      "type": "exam",
      "id": "A2-g"
     },
     {
      "type": "exam",
      "id": "A2-i"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Costs (rows = factories): {cost}. Supplies {supply}, demands {demand}. Total cost with lowest-unit-cost-first?",
      "calc": "transport",
      "values": {
       "cost": "12 10 8\n6 12 16\n7 15 9",
       "supply": "40 20 80",
       "demand": "50 30 60"
      },
      "vary": [
       {
        "keys": [
         "cost",
         "supply",
         "demand"
        ],
        "pick": [
         [
          "5 8 4\n6 3 7\n9 6 5",
          "50 40 60",
          "30 70 50"
         ],
         [
          "10 2 20\n12 7 9\n4 14 16",
          "15 25 10",
          "5 15 30"
         ],
         [
          "6 4 9\n3 8 5\n7 2 6",
          "100 80 120",
          "90 110 100"
         ],
         [
          "12 10 8\n6 12 16\n7 15 9",
          "40 20 80",
          "50 30 60"
         ]
        ]
       }
      ],
      "row": "Total cost",
      "unit": "$",
      "tol": 0.001,
      "hint": "Cheapest cell first; cross out exhausted rows/columns."
     }
    ]
   }
  },
  {
   "id": "C-cog",
   "topic": "loc",
   "name": "Centre of gravity",
   "calc": "cog",
   "meaning": "Weighted average of destination coordinates.",
   "tex": "\\bar x = \\frac{\\sum Q_ix_i}{\\sum Q_i},\\qquad \\bar y = \\frac{\\sum Q_iy_i}{\\sum Q_i}",
   "steps": [
    "Equal quantities: plain average of x and of y.",
    "Different quantities: weight each coordinate by its quantity."
   ],
   "traps": [
    "Weighting x by quantity but forgetting y."
   ],
   "seen": [],
   "lec": [
    {
     "d": "ch41",
     "s": 18
    },
    {
     "d": "ch41",
     "s": 22
    }
   ],
   "guide": "Part 3",
   "cal": "Textbook Ch 4",
   "presets": [
    {
     "label": "Slide 22: four hospitals",
     "values": {
      "pts": "2 2 800\n3 5 900\n5 4 200\n8 5 100"
     }
    }
   ],
   "learn": {
    "idea": "Put the facility where the shipments balance: the average position of the destinations, weighted by how much each one receives. Heavy destinations pull the location towards them.",
    "when": [
     "Coordinates and quantities for several destinations."
    ],
    "example": {
     "title": "Lecture slide 22",
     "given": "D1(2,2) 800, D2(3,5) 900, D3(5,4) 200, D4(8,5) 100",
     "find": "location, equal and weighted",
     "steps": [
      {
       "say": "Equal.",
       "tex": "\\bar x = \\frac{2+3+5+8}{4} = 4.5,\\ \\bar y = 4"
      },
      {
       "say": "Weighted.",
       "tex": "\\bar x = \\frac{6100}{2000} = 3.05,\\ \\bar y = \\frac{7400}{2000} = 3.7"
      }
     ],
     "answer": "(4.5, 4) equal; (3.05, 3.7) weighted"
    },
    "quiz": [
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Slide 22 weighted case. x-coordinate of the centre of gravity?",
      "calc": "cog",
      "values": {
       "pts": "2 2 800\n3 5 900\n5 4 200\n8 5 100"
      },
      "row": "Weighted x",
      "unit": ""
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "Destinations (x, y, quantity): {pts}. x-coordinate of the weighted centre of gravity?",
      "calc": "cog",
      "values": {
       "pts": "2 2 800\n3 5 900\n5 4 200\n8 5 100"
      },
      "vary": [
       {
        "key": "pts",
        "pick": [
         "1 3 400\n4 6 300\n7 2 300",
         "2 8 100\n6 2 500\n9 5 400\n3 3 200",
         "0 0 600\n10 0 200\n5 8 200",
         "2 2 800\n3 5 900\n5 4 200\n8 5 100"
        ]
       }
      ],
      "row": "Weighted x",
      "unit": "",
      "tol": 0.005
     }
    ]
   }
  },
  {
   "id": "C-layout",
   "topic": "layout",
   "name": "Facility layout types",
   "calc": null,
   "meaning": "Product, process, cellular, fixed-position.",
   "steps": [
    "Product layout: one/few products, high volume, line.",
    "Process layout: similar machines grouped, many products, low volume.",
    "Cellular: families of parts in cells (between the two).",
    "Fixed-position: product too big to move (ships, aircraft)."
   ],
   "traps": [
    "“Fixed” means the product stays put, not fixed automation."
   ],
   "seen": [
    "M20-9"
   ],
   "lec": [
    {
     "d": "ch42",
     "s": 8
    }
   ],
   "guide": "Part 3",
   "cal": "Textbook Ch 4",
   "learn": {
    "idea": "Layout follows volume and variety. High volume and low variety → a product line. Low volume and high variety → group machines by process. Cells sit in between. If the product cannot move, workers and machines come to it.",
    "when": [
     "Layout MCs; “which layout suits…”."
    ],
    "example": {
     "title": "2020 midterm Q9",
     "given": "five layout statements",
     "find": "the correct ones",
     "steps": [
      {
       "say": "Product layout ↔ few products, large quantity ✓"
      },
      {
       "say": "Process layout ↔ many parts, small quantity ✓"
      },
      {
       "say": "Fixed-position is about big products, not fixed automation ✗"
      }
     ],
     "answer": "C and D"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M20-9"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "A shipyard building a ferry uses which layout?",
      "opts": [
       "product",
       "process",
       "cellular",
       "fixed-position"
      ],
      "ans": "d",
      "why": "The product is too large to move."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "A machine shop making hundreds of different small parts in small batches suits…",
      "opts": [
       "product layout",
       "process layout",
       "fixed-position layout",
       "continuous flow"
      ],
      "ans": "b",
      "why": "High variety, low volume."
     }
    ]
   }
  },
  {
   "id": "C-tsp",
   "topic": "tsp",
   "name": "TSP: nearest neighbour & variants",
   "calc": "tsp",
   "meaning": "Visit every stop once and return, by heuristics.",
   "steps": [
    "Read the matrix as row = from, column = to.",
    "From the current stop, go to the closest unvisited stop.",
    "Variant: the 2nd-nearest at the first stop (or at every stop).",
    "Add the return leg; (n − 1)! routes for total enumeration."
   ],
   "traps": [
    "Forgetting the return to the start.",
    "Asymmetric distances."
   ],
   "seen": [
    "M20-10",
    "M20-11",
    "M20-12",
    "M20-13",
    "M20-14",
    "M20-15"
   ],
   "lec": [
    {
     "d": "ch5",
     "s": 13
    },
    {
     "d": "ch5",
     "s": 14
    }
   ],
   "guide": "Part 4",
   "cal": "Textbook Ch 5",
   "presets": [
    {
     "label": "2020 midterm warehouse (P, A–E)",
     "from": "M20-10",
     "values": {
      "mode": "nn"
     }
    },
    {
     "label": "2020 midterm 2.2: 2nd-nearest first",
     "from": "M20-11",
     "values": {
      "mode": "second"
     }
    },
    {
     "label": "Lecture example 1 (A–G)",
     "values": {
      "mode": "nn",
      "d": "- 14 21 20 6 24 9\n14 - 10 9 9 10 11\n21 10 - 1 15 9 21\n20 9 1 - 14 9 20\n6 9 15 14 - 19 9\n24 10 9 9 19 - 21\n9 11 21 20 9 21 -",
      "names": "A B C D E F G",
      "start": "A"
     }
    }
   ],
   "learn": {
    "idea": "The travelling-salesperson problem asks for the shortest round trip through every stop. It explodes combinatorially, (n − 1)! routes, so the course uses the nearest-neighbour heuristic: always drive to the closest place you have not visited yet. It is quick but not optimal, and small changes (the 2nd-nearest first stop) can beat it.",
    "when": [
     "A distance matrix and “visit each once and return”."
    ],
    "example": {
     "title": "2020 midterm 2.1",
     "given": "the warehouse matrix",
     "find": "the nearest-neighbour route",
     "code": "        To:  P   A   B   C   D   E\nFrom P       -  15  20  19  26  13\n     A       9   -  12  16  13  18\n     B      19  13   -  17  15  18\n     C      22  16  12   -  16  14\n     D      18  10  18  20   -  12\n     E      22   9  11  13  14   -",
     "steps": [
      {
       "say": "From P the smallest is E (13)."
      },
      {
       "say": "From E: A (9). From A: B (12). From B: D (15). From D: C (20)."
      },
      {
       "say": "Return C → P (22).",
       "tex": "13 + 9 + 12 + 15 + 20 + 22 = 91"
      }
     ],
     "answer": "P-E-A-B-D-C-P, 91"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M20-10"
     },
     {
      "type": "exam",
      "id": "M20-11"
     },
     {
      "type": "exam",
      "id": "M20-12"
     },
     {
      "type": "exam",
      "id": "M20-13"
     },
     {
      "type": "exam",
      "id": "M20-14"
     },
     {
      "type": "exam",
      "id": "M20-15"
     },
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Lecture distance matrix (A–G). Nearest-neighbour tour starting at A: total distance?",
      "calc": "tsp",
      "values": {
       "mode": "nn",
       "d": "- 14 21 20 6 24 9\n14 - 10 9 9 10 11\n21 10 - 1 15 9 21\n20 9 1 - 14 9 20\n6 9 15 14 - 19 9\n24 10 9 9 19 - 21\n9 11 21 20 9 21 -",
       "names": "A B C D E F G",
       "start": "A"
      },
      "row": "Total distance",
      "unit": "",
      "tol": 0.001
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "2020 warehouse matrix (start and end at P). Total distance using: {how}?",
      "code": "        To:  P   A   B   C   D   E\nFrom P       -  15  20  19  26  13\n     A       9   -  12  16  13  18\n     B      19  13   -  17  15  18\n     C      22  16  12   -  16  14\n     D      18  10  18  20   -  12\n     E      22   9  11  13  14   -",
      "calc": "tsp",
      "values": {
       "mode": "second",
       "how": "2nd-nearest first stop, then nearest neighbour"
      },
      "vary": [
       {
        "keys": [
         "mode",
         "how"
        ],
        "pick": [
         [
          "nn",
          "nearest neighbour"
         ],
         [
          "second",
          "2nd-nearest first stop, then nearest neighbour"
         ],
         [
          "next",
          "2nd-nearest at every stop"
         ]
        ]
       }
      ],
      "row": "Total distance",
      "unit": "",
      "tol": 0.001,
      "hint": "Row = from. Add the return leg to P."
     }
    ]
   }
  },
  {
   "id": "C-savings",
   "topic": "tsp",
   "name": "Clark-Wright savings (VRP)",
   "calc": "savings",
   "meaning": "Join stops into truck routes by largest savings, within capacity.",
   "tex": "s_{ij} = d_{0i} + d_{0j} - d_{ij}",
   "steps": [
    "Start with one route per stop.",
    "Savings for each pair; rank them high to low.",
    "Link pairs in that order if both are route ends and the load fits the truck.",
    "Total distance of the resulting routes."
   ],
   "traps": [
    "Linking a stop that is in the middle of a route.",
    "Ignoring capacity."
   ],
   "seen": [],
   "lec": [
    {
     "d": "ch5",
     "s": 16
    },
    {
     "d": "ch5",
     "s": 19
    }
   ],
   "guide": "Part 4",
   "cal": "Textbook Ch 5",
   "presets": [
    {
     "label": "Lecture example 2: depot A, 25,000 capacity",
     "values": {}
    }
   ],
   "learn": {
    "idea": "Instead of sending a truck out and back for each customer, join two customers into one trip whenever that saves distance: the saving is the two return legs to the depot minus the direct link between them. Take the biggest savings first, as long as the truck can carry the combined load.",
    "when": [
     "Several trucks or a capacity limit; “Clark-Wright”, “vehicle routing”."
    ],
    "example": {
     "title": "Lecture slides 16–21",
     "given": "depot A, six warehouses, 25,000-unit trucks",
     "find": "routes and total distance",
     "steps": [
      {
       "say": "Largest saving: C–D.",
       "tex": "s_{CD} = 21 + 20 - 1 = 40"
      },
      {
       "say": "Grow routes in savings order within capacity: F-C-D (23,000) and E-B-G (19,000)."
      },
      {
       "say": "Distance.",
       "tex": "24 + 9 + 1 + 20 + 6 + 9 + 11 + 9 = 89"
      }
     ],
     "answer": "89 (8,900 miles)"
    },
    "quiz": [
     {
      "type": "value",
      "badge": "lecture",
      "q": "Lecture VRP: saving for joining C and D (d_AC = 21, d_AD = 20, d_CD = 1)?",
      "answer": 40,
      "unit": "",
      "steps": [
       "21 + 20 − 1 = 40"
      ]
     },
     {
      "type": "calc",
      "badge": "lecture",
      "q": "Lecture VRP with truck capacity {cap}. Total distance of the Clark-Wright routes?",
      "calc": "savings",
      "values": {},
      "vary": [
       {
        "key": "cap",
        "pick": [
         25000,
         20000,
         30000
        ]
       }
      ],
      "row": "Total distance",
      "unit": "",
      "tol": 0.001
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Two stops have a large saving but together exceed the truck capacity. You…",
      "opts": [
       "link them anyway",
       "skip that pair and try the next saving",
       "stop the algorithm",
       "swap the depot"
      ],
      "ans": "b",
      "why": "Capacity is a hard constraint."
     }
    ]
   }
  }
 ],
 "videoStops": [
  {
   "topic": "bep",
   "title": "Break-even & process selection",
   "why": "Chapter 3’s main calculation.",
   "videos": [
    {
     "id": "Uqp9NQepVj4",
     "title": "Location Selection: Break-Even Analysis I",
     "channel": "The Business Doctor",
     "len": "2:51",
     "role": "learn",
     "watch": [
      "Total cost lines and where they cross."
     ]
    },
    {
     "id": "tuKLU6aQnJg",
     "title": "MA22 - Breakeven Point and CVP Analysis - Explained",
     "channel": "Tony Bell",
     "len": "11:00",
     "role": "extra",
     "watch": [
      "Revenue break-even F/(p − v)."
     ]
    }
   ],
   "after": "Break-even lesson + calculator.",
   "gate": [],
   "formulas": [
    "C-bep"
   ]
  },
  {
   "topic": "loc",
   "title": "Transportation & centre of gravity",
   "why": "The sample calculation handed out every year, and Assignment 2.",
   "videos": [
    {
     "id": "S8sECfa8ioQ",
     "title": "Operations Research: Solving the Transportation Problem Using the Least Cost Method",
     "channel": "Zach's Math Zone",
     "len": "6:47",
     "role": "learn",
     "watch": [
      "Exactly the lowest-cost-first rule from class."
     ]
    },
    {
     "id": "cipzCjYhs38",
     "title": "Operations Management: Location Selection – Centre of Gravity Method",
     "channel": "The Business Doctor",
     "len": "5:13",
     "role": "learn",
     "watch": [
      "Weighted averages of coordinates."
     ]
    }
   ],
   "after": "Transportation lesson, then the 2019 sample.",
   "gate": [
    "S19-3"
   ],
   "formulas": [
    "C-transport",
    "C-cog"
   ]
  },
  {
   "topic": "layout",
   "title": "Layout types",
   "why": "2020 midterm Q9.",
   "videos": [
    {
     "id": "qKca93vGPho",
     "title": "Facility Layout in Operations Management - Product vs Process Oriented Layout & Fixed",
     "channel": "Dr. Haywood",
     "len": "4:26",
     "role": "learn",
     "watch": [
      "Volume vs variety decides the layout."
     ]
    }
   ],
   "after": "Layout lesson.",
   "gate": [
    "M20-9"
   ],
   "formulas": [
    "C-layout"
   ]
  },
  {
   "topic": "tsp",
   "title": "TSP & vehicle routing",
   "why": "18 marks on the 2020 midterm and on Assignment 2.",
   "videos": [
    {
     "id": "ayqA56IHMZ0",
     "title": "INDU 211 - TSP Problem",
     "channel": "IISE Concordia Chapter",
     "len": "",
     "role": "worked",
     "watch": [
      "A Concordia student chapter solving this course’s TSP."
     ]
    },
    {
     "id": "zPgsNsOfxQ8",
     "title": "Graph Theory: Nearest Neighbor Algorithm (NNA)",
     "channel": "Mathispower4u",
     "len": "9:16",
     "role": "learn",
     "watch": [
      "The heuristic step by step."
     ]
    },
    {
     "id": "kserookKlLM",
     "title": "The Vehicle Routing Problem, Example",
     "channel": "Sebastian Sanchez",
     "len": "12:47",
     "role": "extra",
     "watch": [
      "Savings and capacity."
     ]
    }
   ],
   "after": "TSP and savings lessons.",
   "gate": [
    "M20-10",
    "M20-11"
   ],
   "formulas": [
    "C-tsp",
    "C-savings"
   ]
  },
  {
   "topic": "mfg",
   "title": "Bill of materials",
   "why": "Assignment 1: reading a bill-of-materials (product structure) tree.",
   "videos": [
    {
     "id": "Aa3wseZdU7w",
     "title": "MRP - Product Tree",
     "channel": "Tim Nelson",
     "len": "3:24",
     "role": "learn",
     "watch": [
      "Reading a product structure tree."
     ]
    }
   ],
   "after": "Review Assignment 1’s BOM tree.",
   "gate": [],
   "formulas": []
  }
 ],
 "plan": {
  "intro": "The midterm (35 %) covers Chapters 1–5. Past papers split into about half “select all that apply” definitions (Ch 1–2) and half calculations: transportation by lowest unit cost (Ch 4) and the warehouse TSP (Ch 5), and the current instructor’s assignments drill exactly those calculations. Do the definitions with the drills, and the calculations with the lessons and calculators.",
  "phases": [
   {
    "title": "Chapters 1–2: definitions",
    "when": "Days 1–2",
    "goal": "The MC section: about half the 2020 midterm.",
    "steps": [
     {
      "id": "i1",
      "kind": "doc",
      "doc": "ch12",
      "text": "Slides 1: engineering, the profession, IE, supply chains.",
      "minutes": 40
     },
     {
      "id": "i2",
      "kind": "doc",
      "doc": "r1",
      "text": "One-page review sheet for Ch 1–2.",
      "minutes": 10
     },
     {
      "id": "i3",
      "kind": "lesson",
      "lesson": "C-found",
      "text": "Lesson: engineering & the profession (8 past MCs).",
      "minutes": 20
     },
     {
      "id": "i4",
      "kind": "lesson",
      "lesson": "C-ise",
      "text": "Lesson: IE, supply chains, concurrent engineering.",
      "minutes": 20
     },
     {
      "id": "i5",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "found",
       "mode": "all"
      },
      "text": "Drill: all Ch 1–2 questions until you score 80 %+.",
      "minutes": 20
     }
    ]
   },
   {
    "title": "Chapter 3: manufacturing & break-even",
    "when": "Day 3",
    "goal": "BOM, processes and the break-even calculation.",
    "steps": [
     {
      "id": "i6",
      "kind": "doc",
      "doc": "ch3",
      "text": "Slides 2: manufacturing engineering, cost-volume (slides 10–17).",
      "minutes": 40
     },
     {
      "id": "i7",
      "kind": "lesson",
      "lesson": "C-bep",
      "text": "Lesson: break-even & process selection.",
      "minutes": 20
     },
     {
      "id": "i8",
      "kind": "doc",
      "doc": "qbep",
      "text": "Cost-volume & break-even worked guide.",
      "minutes": 20
     }
    ]
   },
   {
    "title": "Chapter 4: location & layout",
    "when": "Days 4–5",
    "goal": "Transportation (repeated every year) and centre of gravity.",
    "steps": [
     {
      "id": "i9",
      "kind": "doc",
      "doc": "ch41",
      "text": "Slides 3: location, transportation, centre of gravity.",
      "minutes": 35
     },
     {
      "id": "i10",
      "kind": "lesson",
      "lesson": "C-transport",
      "text": "Lesson: transportation, lowest cost first.",
      "minutes": 25
     },
     {
      "id": "i11",
      "kind": "lesson",
      "lesson": "C-cog",
      "text": "Lesson: centre of gravity.",
      "minutes": 10
     },
     {
      "id": "i12",
      "kind": "doc",
      "doc": "ch42",
      "text": "Slides 4: layout types.",
      "minutes": 20
     },
     {
      "id": "i13",
      "kind": "lesson",
      "lesson": "C-layout",
      "text": "Lesson: layout types.",
      "minutes": 10
     },
     {
      "id": "i14",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "fac",
       "mode": "all"
      },
      "text": "Drill: facilities questions.",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Chapter 5: material handling & routing",
    "when": "Day 6",
    "goal": "The 18-mark TSP problem type.",
    "steps": [
     {
      "id": "i15",
      "kind": "doc",
      "doc": "ch5",
      "text": "Slides 5: material handling, TSP, VRP.",
      "minutes": 35
     },
     {
      "id": "i16",
      "kind": "lesson",
      "lesson": "C-tsp",
      "text": "Lesson: TSP nearest neighbour & variants.",
      "minutes": 25
     },
     {
      "id": "i17",
      "kind": "lesson",
      "lesson": "C-savings",
      "text": "Lesson: Clark-Wright savings.",
      "minutes": 20
     },
     {
      "id": "i18",
      "kind": "videos",
      "topic": "tsp",
      "text": "Watch the IISE Concordia TSP video.",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Exam mode",
    "when": "Days 7–8",
    "goal": "Past papers, then your weak spots.",
    "steps": [
     {
      "id": "i24",
      "kind": "drill",
      "drill": {
       "scope": "mock"
      },
      "text": "Mock midterm.",
      "minutes": 40
     },
     {
      "id": "i25",
      "kind": "drill",
      "drill": {
       "scope": "missed"
      },
      "text": "Everything I missed.",
      "minutes": 25
     },
     {
      "id": "i26",
      "kind": "doc",
      "doc": "qmid",
      "text": "Midterm quantitative problem guide: redo the TSP and transportation problems on paper.",
      "minutes": 40
     },
     {
      "id": "i27",
      "kind": "task",
      "text": "Select-all-that-apply strategy: each wrong letter costs a mark, so only write letters you are sure of.",
      "minutes": 1
     }
    ]
   }
  ]
 }
};

export default content;
