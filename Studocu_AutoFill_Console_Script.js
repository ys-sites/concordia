// ==============================================================================
// STUDOCU 1-CLICK AUTOFILL CONSOLE SCRIPT (UPDATED & VERIFIED)
// Concordia University - Semester 1 Engineering Files
// ==============================================================================
// Instructions:
// 1. Open your browser where you have the Studocu upload page open:
//    https://www.studocu.com/en-us/document/upload#main-content
// 2. Press F12 (or right-click -> Inspect) to open Developer Tools.
// 3. Click the "Console" tab.
// 4. Paste this entire script and press Enter.
// 5. It will automatically match each document card by its filename and fill in:
//    - Title (Verified with exact Course Code prefix: ENGR 213, INDU 211, MIAE 215, MIAE 221)
//    - Category
//    - Academic Year (2025/2026)
//    - Description
// ==============================================================================

(function() {
  const metadata = {
    "Lecture 3 - Detailed Calculation Notes.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Practice materials",
        "title": "ENGR 213 Lecture 3 - Detailed Calculation Notes: Separable & Linear ODEs",
        "year": "2025/2026",
        "desc": "Step-by-step calculus derivations and worked calculation notes for separable differential equations, integrating factors, and first-order linear initial value problems in ENGR 213."
    },
    "MIAE_215_arduino_project.doc": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Project Specification & Design Guidelines (.doc)",
        "year": "2025/2026",
        "desc": "Official Concordia MIAE 215 term project document outlining requirements, circuit schematics, hardware components, state machine architecture, and grading rubrics."
    },
    "MIAE_215_assignment1.doc": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Mandatory assignments",
        "title": "MIAE 215 Assignment 1 - Programming Fundamentals & Logic (.doc)",
        "year": "2025/2026",
        "desc": "Official problem statement for MIAE 215 Assignment 1 covering basic C++ console I/O, arithmetic expressions, variable declarations, and control flow structure."
    },
    "Lesson 6 - Arrays & Numerical Processing.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Mini-Course Lesson 6: 1D & 2D Arrays and Numerical Processing",
        "year": "2025/2026",
        "desc": "Comprehensive study guide on C++ array indexing, multidimensional matrices, vector arithmetic, bounds checking, and memory layout for engineering applications."
    },
    "00 - Mini-Course Overview & Guidelines.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Other",
        "title": "MIAE 215 C++ Getting Started Mini-Course: Overview & Study Guidelines",
        "year": "2025/2026",
        "desc": "Orientation overview for Gordon's MIAE 215 introductory C++ mini-course, including module roadmaps, coding best practices, and compiler environment tips."
    },
    "MIAE_215_arduino_project.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Term Project Guidelines & Engineering Requirements (PDF)",
        "year": "2025/2026",
        "desc": "Complete term project brief detailing hardware kit integration, breadboard wiring, sensor data acquisition, actuator control, and grading scheme for MIAE 215."
    },
    "Lesson 4 - Expressions, Operators & Precedence.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Mini-Course Lesson 4: C++ Expressions, Operators & Precedence Rules",
        "year": "2025/2026",
        "desc": "In-depth guide covering arithmetic, relational, and logical operators, integer division pitfalls, associativity rules, and operator precedence hierarchies in C++."
    },
    "MIAE_215_arduino_kit_and_lab_policies.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Kit Guide, Hardware Inventory & Laboratory Policies",
        "year": "2025/2026",
        "desc": "Concordia University MIAE 215 lab manual detailing Arduino Uno hardware components, breadboard wiring safety, lab demo requirements, and component replacement policies."
    },
    "Lesson 5 - Decision Logic, Branches & Loops.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Mini-Course Lesson 5: Decision Logic, Conditional Branches & Loops",
        "year": "2025/2026",
        "desc": "Detailed lecture guide on boolean logic, if-else chains, switch statements, while loops, and for loops with mechanical engineering simulation examples."
    },
    "Lesson 1 - Software Installation & Setup Guide.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Mini-Course Lesson 1: Code::Blocks & GCC Compiler Setup Guide",
        "year": "2025/2026",
        "desc": "Step-by-step walkthrough for installing Code::Blocks, configuring the MinGW GCC compiler, creating console projects, and compiling C++ programs on Windows/macOS."
    },
    "Lesson 3 - Variable Types, Memory & Sizing.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Mini-Course Lesson 3: C++ Data Types, Memory Layout & Sizing",
        "year": "2025/2026",
        "desc": "In-depth guide explaining primitive types (int, float, double, char, bool), byte size limitations, signed vs unsigned integers, and floating-point precision issues."
    },
    "Lesson 2 - C++ Programs & First Hello World.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Mini-Course Lesson 2: Anatomy of a C++ Program & Hello World",
        "year": "2025/2026",
        "desc": "Beginner guide examining C++ program structure, preprocessor directives (#include), main() execution, standard stream I/O (cin/cout), and basic syntax rules."
    },
    "arduino_lab_3.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Lab 3: Analog Input, ADC Resolution & Sensor Interfacing",
        "year": "2025/2026",
        "desc": "Laboratory manual for Lab 3 exploring 10-bit analog-to-digital conversion, potentiometer voltage division, thermistor readings, and serial monitor telemetry."
    },
    "01 - Mini-Course Troubleshooting Guide.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 C++ Mini-Course: Common Compiler Errors & Troubleshooting Guide",
        "year": "2025/2026",
        "desc": "Comprehensive debugging handbook diagnosing common syntax mistakes, linker errors, undefined reference bugs, and runtime segfaults in Code::Blocks."
    },
    "Part 1 - Atomic Structure & Periodic Trends - One-Page Review Sheet.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Summaries",
        "title": "MIAE 221 One-Page Review: Atomic Structure, Electronegativity & Periodic Trends",
        "year": "2025/2026",
        "desc": "High-yield 1-page cheatsheet summarizing electron configurations, quantum numbers, periodic table trends, and electronegativity for materials engineering exams."
    },
    "Part 1 - Chapters 1 & 2 - One-Page Rapid Review Sheet.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Summaries",
        "title": "INDU 211 One-Page Rapid Review: Chapters 1 & 2 Foundations of IE",
        "year": "2025/2026",
        "desc": "Condensed high-yield exam summary of Industrial Engineering history, Taylorism, Gilbreth motions, production systems, and productivity ratio formulas."
    },
    "Part 2 - Chemical Bonding & Potential Wells - One-Page Review Sheet.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Summaries",
        "title": "MIAE 221 One-Page Review: Chemical Bonding, Interatomic Potential & Energy Wells",
        "year": "2025/2026",
        "desc": "Single-page formula cheatsheet detailing Lennard-Jones potential, equilibrium spacing r0, bonding force equilibrium, and thermal expansion coefficients."
    },
    "Part 2 - Chapter 3 - One-Page Rapid Review Sheet.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Summaries",
        "title": "INDU 211 One-Page Rapid Review: Chapter 3 Manufacturing & Process Engineering",
        "year": "2025/2026",
        "desc": "High-density 1-page summary covering cost-volume break-even formulas, 8-step steel shaft sequencing, casting/forming taxonomy, and jig vs fixture rules."
    },
    "Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Summaries",
        "title": "MIAE 215 Rapid Review: C++ Type Casting, Operators & Control Flow Cheatsheet",
        "year": "2025/2026",
        "desc": "Ultra-dense exam review sheet on implicit/explicit casting (static_cast), logical operators, short-circuit evaluation, switch jump tables, and loop optimization."
    },
    "Part 3 - Chapter 4 - One-Page Rapid Review Sheet.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Summaries",
        "title": "INDU 211 One-Page Rapid Review: Chapter 4 Facility Location & Layouts",
        "year": "2025/2026",
        "desc": "Single-page exam reference summarizing rectilinear vs Euclidean distances, center-of-gravity formulas, 1-median heuristic, and the 5 layout configurations."
    },
    "Topic 2.2 - Separable Equations & Lost Solutions.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Topic 2.2: Separable Differential Equations & Singular Solutions",
        "year": "2025/2026",
        "desc": "Analytical study guide explaining separation of variables, handling boundary conditions, and identifying lost constant singular solutions during division."
    },
    "Topic 2.7 & 2.8 - First-Order Modeling & Applications.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Topic 2.7 & 2.8: First-Order ODE Modeling, Mixing Tanks & Cooling",
        "year": "2025/2026",
        "desc": "Comprehensive engineering physics modeling guide covering Newton's Law of Cooling, brine tank mixing dynamics, exponential population decay, and RC circuits."
    },
    "Topic 2.5 - Solutions by Substitution (Bernoulli & Homogeneous).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Topic 2.5: Solutions by Substitution: Bernoulli & Homogeneous ODEs",
        "year": "2025/2026",
        "desc": "Master guide detailing substitution transformations: reducing Bernoulli equations to linear form (u=y^(1-n)) and solving homogeneous equations via y=ux."
    },
    "Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Summaries",
        "title": "MIAE 215 Rapid Review: C++ Primitive Types, Bit Sizes & Memory Limits",
        "year": "2025/2026",
        "desc": "Single-page cheatsheet covering standard type sizes (sizeof), signed/unsigned two's complement ranges, integer overflow hazards, and IEEE 754 float limits."
    },
    "Topic 2.4 - Exact Equations & Integrating Factors.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Topic 2.4: Exact Differential Equations & Special Integrating Factors",
        "year": "2025/2026",
        "desc": "Complete walkthrough of test for exactness (dM/dy = dN/dx), potential function integration, and deriving single-variable integrating factors mu(x) and mu(y)."
    },
    "Topic 2.3 - Linear First-Order Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Topic 2.3: First-Order Linear ODEs & Integrating Factor Method",
        "year": "2025/2026",
        "desc": "Rigorous explanation of standard linear form dy/dx + P(x)y = f(x), integrating factor derivation mu(x)=exp(int P dx), and general solution structure."
    },
    "Part 3 - Expressions, Precedence & Math Library - Review Sheet.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Summaries",
        "title": "MIAE 215 Rapid Review: C++ Math Library (cmath), Precedence & Operators",
        "year": "2025/2026",
        "desc": "Exam cheatsheet on cmath functions (pow, sqrt, sin, cos, atan2, fabs), modulus arithmetic quirks, operator precedence hierarchies, and floating-point errors."
    },
    "Cost-Volume & Break-Even Engineering Decision Guide.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Practice materials",
        "title": "INDU 211 Quantitative Guide: Cost-Volume Analysis & Multi-Process Selection",
        "year": "2025/2026",
        "desc": "Fully solved engineering economics guide featuring break-even point derivations, multi-process crossover point calculations, and decision rule plots."
    },
    "Topic 2.1 - Direction Fields & Autonomous Stability.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Topic 2.1: Direction Fields, Isoclines & Autonomous Stability",
        "year": "2025/2026",
        "desc": "Geometric interpretation of first-order ODEs using slope fields, isocline sketches, phase line portraits, and classifying critical points as attractors or repellers."
    },
    "arduino_lab_1_instructions.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Lab 1: Hardware Setup, IDE Installation & LED Blinking",
        "year": "2025/2026",
        "desc": "Official Concordia Lab 1 guide covering Arduino IDE configuration, USB serial driver setup, breadboard power buses, current-limiting resistors, and pinMode/digitalWrite."
    },
    "MIAE 221 - Master Study Guide & Exam Strategy.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Summaries",
        "title": "MIAE 221 Materials Science: Master Course Study Guide & Exam Strategy",
        "year": "2025/2026",
        "desc": "Comprehensive course revision blueprint for MIAE 221 covering bonding, crystal structures, defects, phase diagrams, mechanical properties, and exam scoring tactics."
    },
    "Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practice materials",
        "title": "MIAE 215 Exercise Set 1: Solved C++ Problems & Teacher Commentary",
        "year": "2025/2026",
        "desc": "Step-by-step solutions to textbook and tutorial exercises with in-depth teacher notes, alternative algorithmic approaches, and memory efficiency comparisons."
    },
    "Calculus for Differential Equations - Master Sheet.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Summaries",
        "title": "ENGR 213 Calculus Foundations: Prerequisite Master Review Sheet for ODEs",
        "year": "2025/2026",
        "desc": "Essential calculus prerequisite summary: integration by parts, partial fractions, trigonometric integrals, u-substitution, and standard derivative rules for ODEs."
    },
    "Lecture 1 - Beginners Guide (Alternative Draft).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 1: Beginner-Friendly Introduction to Differential Equations",
        "year": "2025/2026",
        "desc": "Intuitive, plain-English breakdown of ODE terminology, order, linearity vs non-linearity, verified solution testing, and physical system modeling."
    },
    "Practice Problem Set #1 - Fully Solved Master Guide.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Practice materials",
        "title": "MIAE 221 Practice Problem Set #1: Fully Solved Master Analysis Guide",
        "year": "2025/2026",
        "desc": "Complete worked numerical solutions for atomic weight calculations, electronegativity differences, percent ionic character, and interatomic force balances."
    },
    "Part 2 - Chemical Bonding, Potential Wells & Physical Properties.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Lecture notes",
        "title": "MIAE 221 Topic Guide Part 2: Chemical Bonding & Interatomic Potential Curves",
        "year": "2025/2026",
        "desc": "Extensive topic guide linking atomic bonding (ionic, covalent, metallic, van der Waals) to macroscopic properties: melting point, stiffness (E), and thermal expansion."
    },
    "MIAE 215 - C++ Master Study Guide & Programming Roadmap.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Summaries",
        "title": "MIAE 215 C++ Programming: Complete Master Study Guide & Exam Roadmap",
        "year": "2025/2026",
        "desc": "All-inclusive semester roadmap for MIAE 215 covering syntax, memory architecture, control flow, functions, arrays, pointers, and Arduino hardware interfacing."
    },
    "INDU 211 - Master Study Guide & Exam Strategy.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Summaries",
        "title": "INDU 211 Master Study Guide: Complete Exam Strategy & Course Synthesis",
        "year": "2025/2026",
        "desc": "Comprehensive semester review guide for INDU 211 integrating manufacturing processes, engineering economics, facility location models, and plant layout optimization."
    },
    "Part 1 - Materials Classes, Atomic Structure & Energy Curves.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Lecture notes",
        "title": "MIAE 221 Topic Guide Part 1: Materials Classes, Atomic Structure & Energy",
        "year": "2025/2026",
        "desc": "In-depth guide covering primary materials classes (metals, ceramics, polymers, composites), Bohr vs quantum models, electron configurations, and periodic trends."
    },
    "MIAE 215 - Arduino Labs & Mechatronics Project Master Guide.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Labs & Mechatronics Term Project: Master Lab Guide",
        "year": "2025/2026",
        "desc": "Unified laboratory manual synthesizing Labs 1 to 5 with full Arduino code examples, circuit schematics, hardware debugging, and term project integration tips."
    },
    "Part 1 - Chapters 1 & 2 - Foundations of Industrial & Systems Engineering.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Lecture notes",
        "title": "INDU 211 Master Guide Part 1: Foundations of Industrial & Systems Engineering",
        "year": "2025/2026",
        "desc": "Detailed study guide on the origins of IE, scientific management principles (Taylor & Gilbreth), system dynamics, and manufacturing productivity analysis."
    },
    "MIAE_215_outline_fall_2026_section_Y.docx.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Other",
        "title": "MIAE 215 Course Syllabus & Laboratory Outline (Concordia Fall 2026)",
        "year": "2025/2026",
        "desc": "Official Concordia course outline detailing lecture schedule, grading scheme, lab policies, midterm/final exam rules, and professor contact details."
    },
    "Practice Problem Set #1.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Practice materials",
        "title": "MIAE 221 Practice Problem Set #1: Atomic Structure & Interatomic Bonding",
        "year": "2025/2026",
        "desc": "Official problem set questions on atomic mass calculations, electron configurations, bonding energy curves, and material property correlations in MIAE 221."
    },
    "Manufacturing Engineering - Actually Explained.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Lecture notes",
        "title": "INDU 211 Chapter 3 Explained: Manufacturing Engineering & Process Selection",
        "year": "2025/2026",
        "desc": "Student-friendly conceptual guide explaining design vs production conflicts, concurrent engineering, process selection economics, and machining taxonomy."
    },
    "Lecture 4 - Exact Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 4: Exact Differential Equations & Integrating Factors",
        "year": "2025/2026",
        "desc": "Official instructor lecture slides detailing exactness testing of M(x,y)dx + N(x,y)dy = 0 and solving non-exact equations using integrating factor techniques."
    },
    "introduction.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Lecture Slides: Introduction to Programming & Computing Concepts",
        "year": "2025/2026",
        "desc": "Introductory course slides on computer hardware architecture, binary machine code, high-level languages, and the C++ compilation/execution pipeline."
    },
    "Facilities Location & Transportation Quantitative Decision Guide.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Practice materials",
        "title": "INDU 211 Quantitative Decision Guide: Facility Location & Transportation Models",
        "year": "2025/2026",
        "desc": "Step-by-step mathematical guide covering Center of Gravity, 1-Median rectilinear heuristics, and Northwest Corner/Stepping-Stone transportation LP models."
    },
    "Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Comprehensive Guide Part 2: Type Casting, Logic & Control Flow",
        "year": "2025/2026",
        "desc": "In-depth guide on type promotion, static_cast, nested conditional statements, switch jump tables, loop structures, and algorithmic flowchart translation."
    },
    "ENGR 213 - Course Outline Fall 2026.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Other",
        "title": "ENGR 213 Applied ODEs: Official Course Outline & Syllabus (Concordia Fall 2026)",
        "year": "2025/2026",
        "desc": "Official course syllabus outlining topic breakdown, textbook reading assignments, WeBWorK online homework deadlines, midterm dates, and grading weights."
    },
    "Lecture 3 - Separable and Linear Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 3: Separable & Linear First-Order Differential Equations",
        "year": "2025/2026",
        "desc": "Official lecture notes on separation of variables, integrating factors for linear equations, and step-by-step initial value problem solutions."
    },
    "Chapter 1 - Assigned Homework Solutions.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Mandatory assignments",
        "title": "ENGR 213 Chapter 1: Fully Solved Assigned Homework Problems (Zill 7th Ed)",
        "year": "2025/2026",
        "desc": "Complete handwritten/typed solutions for all assigned Chapter 1 textbook exercises on ODE classification, verification of solutions, and IVPs."
    },
    "Part 3 - Expressions, Operators & Math Library Functions.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Comprehensive Guide Part 3: C++ Expressions, Operators & <cmath>",
        "year": "2025/2026",
        "desc": "Exhaustive topic guide detailing arithmetic/logical operator evaluation, bitwise operators, cmath trigonometric/exponential functions, and precision limits."
    },
    "Assignment 1 & Exercises - Fully Solved Master Guide.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practice materials",
        "title": "MIAE 215 Assignment 1 & Coding Exercises: Fully Solved Master Guide",
        "year": "2025/2026",
        "desc": "Complete walkthrough of Assignment 1 and core practice problems with formatted C++ source code, logic explanations, and common edge-case testing."
    },
    "Lecture 2 - Plain English Guide (Alternative Draft).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 2: Initial Value Problems & Direction Fields Plain-English Guide",
        "year": "2025/2026",
        "desc": "Clear conceptual guide explaining existence and uniqueness theorems (Picard), IVP conditions, and visual slope field interpretation without complex jargon."
    },
    "arduino_lab_2.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Arduino Lab 2: Digital I/O, Pushbutton Switches & LED Sequencing",
        "year": "2025/2026",
        "desc": "Lab 2 instructional manual covering digital input reading, pull-up/pull-down resistor configurations, software debouncing algorithms, and multi-LED states."
    },
    "Part 4 - Control Statements, Logic Flow & Flowcharts.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Comprehensive Guide Part 4: Control Statements & Engineering Flowcharts",
        "year": "2025/2026",
        "desc": "Detailed engineering guide on translating flowcharts and pseudo-code into robust C++ control logic: while, do-while, for loops, and break/continue statements."
    },
    "Part 1 - C++ Foundations, Memory Architecture & Data Types.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Comprehensive Guide Part 1: Foundations, Memory & Data Types",
        "year": "2025/2026",
        "desc": "Master guide exploring computer memory architecture (RAM, stack, heap), binary representations, variable declarations, and fundamental C++ syntax."
    },
    "INDU211-2026-Fall-Course Outline.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Other",
        "title": "INDU 211 Course Outline & Syllabus: Production Systems (Concordia Fall 2026)",
        "year": "2025/2026",
        "desc": "Official department course outline detailing learning objectives, lecture modules, term project guidelines, exam policies, and grading breakdown."
    },
    "Lecture 1 - Introduction to DEs (Explained).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 1 Explained: Differential Equations Terminology & Solution Verification",
        "year": "2025/2026",
        "desc": "Intuitive deep-dive lecture guide on ODE definitions, ordinary vs partial, order, degree, linear vs non-linear, and direct solution verification by substitution."
    },
    "Lecture 2 - IVPs and Direction Fields (Explained).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 2 Explained: Initial Value Problems & Existence-Uniqueness Theorem",
        "year": "2025/2026",
        "desc": "Expanded study guide covering IVPs, geometric slope fields, isocline plotting, and applying the Picard Existence and Uniqueness Theorem to differential equations."
    },
    "MIAE 221-X-2026-Course Outline.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Other",
        "title": "MIAE 221 Materials Science: Official Course Outline & Syllabus (Concordia Fall 2026)",
        "year": "2025/2026",
        "desc": "Official Concordia course outline specifying lecture topics, textbook chapters (Callister), lab experiments, tutorial schedules, and exam grading schemes."
    },
    "MECH221_Lecture3_AtomicBonding_PlainEnglish_Guide.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Lecture notes",
        "title": "MIAE 221 Lecture 3 Guide: Atomic Bonding, Interatomic Forces & Material Properties",
        "year": "2025/2026",
        "desc": "Plain-English guide explaining primary vs secondary bonding, net interatomic force curves (FN = FA + FR), and connecting bond strength to melting points and stiffness."
    },
    "Part 2 - Chapter 3 - Manufacturing & Process Engineering Master Guide.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Summaries",
        "title": "INDU 211 Master Guide Part 2: Manufacturing & Process Engineering",
        "year": "2025/2026",
        "desc": "Complete 12-page study guide covering cost-volume break-even analysis, 8-step steel shaft sequencing, process taxonomy (casting, forming, cutting, welding), and jigs vs fixtures."
    },
    "Lecture 4 - Exact Equations (Explained).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 4 Explained: Exact Differential Equations & Integrating Factor Methods",
        "year": "2025/2026",
        "desc": "Detailed pedagogical guide explaining the exactness condition via Clairaut's theorem, potential function integration, and finding integrating factors."
    },
    "1.0.INDU_211_CH12_2025.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Lecture notes",
        "title": "INDU 211 Lecture Slides: Chapters 1 & 2 Introduction to Industrial Engineering",
        "year": "2025/2026",
        "desc": "Official instructor lecture presentation covering IE history, systems engineering, productivity metrics, human factors, and production process classifications."
    },
    "MIAE 215 - C++ Getting Started Mini-Course Master Guide.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Summaries",
        "title": "MIAE 215 C++ Mini-Course Master Guide: Lessons 1 to 6 Complete Compilation",
        "year": "2025/2026",
        "desc": "Comprehensive handbook compiling all 6 lessons of the C++ mini-course: setup, syntax, primitive types, operators, branching/loops, and array data structures."
    },
    "Chapter 2 - Master Summary.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Summaries",
        "title": "ENGR 213 Chapter 2 Master Summary: First-Order Differential Equations Solutions",
        "year": "2025/2026",
        "desc": "Complete revision guide summarizing all first-order ODE solution methods: separable, linear integrating factors, exact equations, and substitution techniques."
    },
    "Chapter 1 - Master Summary.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Summaries",
        "title": "ENGR 213 Chapter 1 Master Summary: Introduction & Basic Terminology of ODEs",
        "year": "2025/2026",
        "desc": "Quick revision summary covering ODE classification, order, linearity, initial value problems, boundary conditions, and solution verification methods."
    },
    "3.0.INDU_211_CH4_1-2025.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Lecture notes",
        "title": "INDU 211 Lecture Slides: Chapter 4 Part 1 Facility Location & Distance Metrics",
        "year": "2025/2026",
        "desc": "Official lecture slides detailing macro location criteria, rectilinear vs Euclidean distance formulas, and single-facility location heuristic algorithms."
    },
    "Part 3 - Chapter 4 - Facilities Location, Layout & Material Handling Master Guide.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Summaries",
        "title": "INDU 211 Master Guide Part 3: Facility Location, Plant Layout & Material Handling",
        "year": "2025/2026",
        "desc": "Comprehensive 14-page master guide covering location models (Center of Gravity, 1-Median, Transportation LP), material handling rules, and the 5 layout configurations."
    },
    "lecture 1-introduction-2026-students (1).pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Lecture notes",
        "title": "MIAE 221 Lecture 1 Slides: Course Overview & Introduction to Materials Science",
        "year": "2025/2026",
        "desc": "Official course slides introducing the tetrahedron of materials science: processing, structure, properties, and performance across metals, ceramics, and polymers."
    },
    "variable_types2.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Lecture Slides: Variable Types Part 2 - Sizing & Conversion Rules",
        "year": "2025/2026",
        "desc": "Official instructor lecture deck explaining numerical type casting, sizeof operator evaluations, character ASCII encoding, and arithmetic overflow errors."
    },
    "Lecture 3 - Separable and Linear Equations (Explained).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 3 Explained: Solving Separable & Linear ODEs Step-by-Step",
        "year": "2025/2026",
        "desc": "Expanded study guide detailing the algebraic separation of variables, integrating factor method derivation, boundary conditions, and physical applications."
    },
    "variable_types1.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Lecture Slides: Fundamental Variable Types, Integers & Memory Sizing",
        "year": "2025/2026",
        "desc": "Official instructor presentation on fundamental C++ data types: int, short, long, char, boolean, memory allocations, and variable initialization syntax."
    },
    "Lecture 1 - Introduction to Differential Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 1 Slides: Introduction to Differential Equations",
        "year": "2025/2026",
        "desc": "Official university slides introducing ODE classifications, notation conventions, ordinary vs partial, order, linear vs non-linear, and general solutions."
    },
    "Lecture 2 - IVPs and Direction Fields.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Lecture notes",
        "title": "ENGR 213 Lecture 2 Slides: Initial Value Problems & Direction Fields",
        "year": "2025/2026",
        "desc": "Official course slides covering first-order initial value problems (IVPs), uniqueness/existence theorems, slope fields, and solution curve sketching."
    },
    "lecture 3-review chemistry 2-students26.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Lecture notes",
        "title": "MIAE 221 Lecture 3 Slides: Chemical Bonding & Periodic Trends Review",
        "year": "2025/2026",
        "desc": "Official lecture slides reviewing ionic, covalent, and metallic bonding mechanisms, electronegativity differences, and bond energy potential curves."
    },
    "Chapter 2 - Assigned Homework Solutions.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Mandatory assignments",
        "title": "ENGR 213 Chapter 2: Fully Solved Assigned Homework Problems (Zill 7th Ed)",
        "year": "2025/2026",
        "desc": "Complete worked homework solutions for Chapter 2 textbook problems on separable ODEs, linear integrating factors, exact equations, and substitution methods."
    },
    "control_statements1.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Lecture notes",
        "title": "MIAE 215 Lecture Slides: Control Statements & Decision Structures",
        "year": "2025/2026",
        "desc": "Official lecture slides detailing program flow control, truth tables, short-circuit evaluation in C++, and engineering decision structures."
    },
    "lecture 2-review chemistry-students26.pdf": {
        "course": "Materials Science (MIAE 221)",
        "category": "Lecture notes",
        "title": "MIAE 221 Lecture 2 Slides: Atomic Structure & Electron Configurations Review",
        "year": "2025/2026",
        "desc": "Official instructor lecture deck reviewing atomic number, valence electrons, quantum numbers, Aufbau principle, and periodic table classification."
    },
    "2.0.INDU_211_CH3_2025.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Lecture notes",
        "title": "INDU 211 Lecture Slides: Chapter 3 Manufacturing & Process Engineering",
        "year": "2025/2026",
        "desc": "Official university lecture slides covering concurrent engineering, break-even analysis, sequence of operations, industrial process taxonomy, and jigs vs fixtures."
    },
    "codeblocks.pdf": {
        "course": "Mechanical, Industrial & Aerospace engineering (MIAE 215)",
        "category": "Practical",
        "title": "MIAE 215 Code::Blocks User Manual & IDE Configuration Guide",
        "year": "2025/2026",
        "desc": "Comprehensive official manual and configuration reference for Code::Blocks IDE, detailing compiler flags, debugger setup (GDB), and workspace management."
    },
    "4.0.INDU_211_CH4_2_2025.pdf": {
        "course": "Introduction to Production and Manufacturing Systems (INDU 211)",
        "category": "Lecture notes",
        "title": "INDU 211 Lecture Slides: Chapter 4 Part 2 Facility Layouts & Material Handling",
        "year": "2025/2026",
        "desc": "Official lecture slides examining plant layout types (product, process, cellular, fixed-position), material handling equipment, and line balancing techniques."
    },
    "Zill_Advanced_Engineering_Mathematics_Solutions_Manual.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Practice materials",
        "title": "ENGR 213 Solutions Manual: Zill Advanced Engineering Mathematics (7th Edition)",
        "year": "2025/2026",
        "desc": "Comprehensive solutions manual providing fully worked, step-by-step answers for all textbook problems in Zill's Advanced Engineering Mathematics (7th Ed)."
    },
    "Zill Chapter 4 - The Laplace Transform.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Other",
        "title": "ENGR 213 Textbook Chapter 4: The Laplace Transform (Zill 7th Edition)",
        "year": "2025/2026",
        "desc": "Textbook reference chapter detailing definition of Laplace transforms, inverse transforms, translation theorems, derivatives of transforms, and solving IVPs."
    },
    "Zill Chapter 1 - Introduction to Differential Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Other",
        "title": "ENGR 213 Textbook Chapter 1: Introduction to Differential Equations (Zill 7th Edition)",
        "year": "2025/2026",
        "desc": "Textbook reference chapter covering basic definitions, order, linearity, verification of explicit/implicit solutions, and first-order differential equation modeling."
    },
    "Zill Chapter 3 - Higher-Order Differential Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Other",
        "title": "ENGR 213 Textbook Chapter 3: Higher-Order Differential Equations (Zill 7th Edition)",
        "year": "2025/2026",
        "desc": "Textbook reference chapter detailing linear higher-order ODE theory, characteristic roots, undetermined coefficients, variation of parameters, and Cauchy-Euler equations."
    },
    "Zill Chapter 2 - First-Order Differential Equations.pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Other",
        "title": "ENGR 213 Textbook Chapter 2: First-Order Differential Equations (Zill 7th Edition)",
        "year": "2025/2026",
        "desc": "Textbook reference chapter covering separable equations, linear first-order ODEs, exact differential equations, integrating factors, and substitution methods."
    },
    "Zill - Advanced Engineering Mathematics (7th Edition).pdf": {
        "course": "Applied Ordinary Differential Equations (ENGR 213)",
        "category": "Other",
        "title": "ENGR 213 Complete Course Textbook: Zill Advanced Engineering Mathematics (7th Edition)",
        "year": "2025/2026",
        "desc": "Full official course textbook for ENGR 213 covering ordinary differential equations, series solutions, Laplace transforms, linear algebra, and vector calculus."
    }
};

  function setInputValue(input, val) {
    if (!input) return;
    input.value = val;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  let filledCount = 0;

  for (const [filename, info] of Object.entries(metadata)) {
    const xpath = "//*[contains(text(), '" + filename + "')]";
    const res = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (res) {
      const container = res.closest('div[class*="upload"], div[class*="item"], div[class*="document"], form') || res.parentElement.parentElement;
      if (container) {
        const titleInput = container.querySelector('input[name*="title"], input[placeholder*="title" i], input[type="text"]');
        if (titleInput) {
          setInputValue(titleInput, info.title);
        }

        const descInput = container.querySelector('textarea, textarea[name*="description"], [placeholder*="description" i]');
        if (descInput) {
          setInputValue(descInput, info.desc);
        }

        filledCount++;
      }
    }
  }

  console.log("Autofill completed for " + filledCount + " documents.");
  alert("Autofill completed for " + filledCount + " documents! Check your fields.");
})();
