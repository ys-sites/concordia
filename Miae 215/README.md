# MIAE 215: Computer Programming for Engineers (C++)
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Course Designation**: MIAE 215 / MECH 215 (Section Y) | **Instructor**: Prof. Brandon W. Gordon | **Core Language**: Standard C++

---

## 📚 Repository Navigation & Architecture

This repository has been comprehensively extracted, restructured, and enhanced into an intuitive, numbered educational hierarchy. It integrates all official lecture slides, outlines, video screencasts, IDE project packs, and standalone C++ programs with high-yield study guides and 1-page rapid review sheets.

```text
Miae 215/
├── 00 - Course Overview & Study Guide/
│   ├── MIAE_215_outline_fall_2026_section_Y.docx.pdf (Official Course Syllabus)
│   └── MIAE 215 - C++ Master Study Guide & Programming Roadmap.md (.pdf)
├── 01 - Teacher Lecture Notes & Slides/
│   ├── introduction.pdf
│   ├── variable_types1.pdf
│   ├── variable_types2.pdf
│   ├── control_statements1.pdf
│   ├── control_statements1_part2.pdf [NEW]
│   ├── extended_outline_introduction.txt
│   ├── variable_types_topics.txt
│   ├── expressions_operators_topics.txt
│   ├── MIAE_215_assignment1.doc
│   ├── MIAE_215_assignment2.doc [NEW]
│   └── Q2_e.pdf [NEW]
├── 02 - Comprehensive Topic Guides (Expanded & Intuitive)/
│   ├── Part 1 - C++ Foundations, Memory Architecture & Data Types.md (.pdf)
│   ├── Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.md (.pdf)
│   ├── Part 3 - Expressions, Operators & Math Library Functions.md (.pdf)
│   └── Part 4 - Control Statements, Logic Flow & Flowcharts.md (.pdf)
├── 03 - 1-Page Rapid Review Sheets/ (Strictly 1 Page Each)
│   ├── Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.md (.pdf)
│   ├── Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.md (.pdf)
│   └── Part 3 - Expressions, Precedence & Math Library - Review Sheet.md (.pdf)
├── 04 - Practice Problems & Code Solutions/
│   ├── Assignment 2 & Week 3 In-Person Lecture Problems - Fully Solved Master Guide.md (.pdf) [NEW]
│   ├── Assignment 1 & Exercises - Fully Solved Master Guide.md (.pdf)
│   ├── Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.md (.pdf)
│   ├── MIAE 215 - Step-by-Step Code Execution & Trace Manual.md (.pdf)
│   └── code_solutions/
│       ├── teacher_output_logs/
│       ├── assignment2_question1.cpp, 2.cpp, 3.cpp [NEW]
│       ├── w3_l2_control_statements_part2_demo.cpp [NEW]
│       ├── w3_l2_in_person_example1_if_else_ladder.cpp [NEW]
│       ├── w3_l2_in_person_example1b_count_neg_exit.cpp [NEW]
│       ├── w3_l2_in_person_example2_array_mean_threshold.cpp [NEW]
│       ├── w3_l1_in_person_example1_count_doubles.cpp
│       ├── w3_l1_control_statements_live_demo.cpp
│       ├── w3_l1_expressions_operators_master_demo.cpp
│       ├── expressions_operators_solutions.cpp
│       ├── variable_types1_solutions_corrected.cpp
│       ├── variable_types2_q1_solutions.cpp, variable_types2_q2_3_solutions.cpp
│       ├── control_statements1_examples.cpp
│       ├── in_person_w2_l2_example1.cpp, in_person_w2_l2_example2b.cpp
│       ├── in_person_example1.cpp, in_person_example2_ascii_case.cpp
│       └── assignment1_question5.cpp, 6.cpp, 7.cpp
├── 05 - Software & Flowcharts/
│   ├── CodeBlocks_17.12_portable/
│   ├── Flowgorithm-Setup/
│   ├── flow_chart1_simple_program.fprg
│   ├── flow_chart2_if_else.fprg
│   ├── flow_chart3_if_else_ladder.fprg [NEW]
│   ├── flow_chart4_for.fprg [NEW]
│   ├── flow_chart5_for_nested.fprg [NEW]
│   ├── Q2_e.fprg [NEW]
│   └── Q2_e.pdf [NEW]
├── 06 - Arduino Labs & Term Project/
│   ├── 00 - Lab Overview & Hardware Kit Guide/
│   │   ├── MIAE 215 - Week 3 Laboratory Briefing, Kit Logistics & Master Lab Schedule.md (.pdf) [NEW]
│   │   └── MIAE_215_arduino_kit_and_lab_policies.md (.pdf)
│   ├── Lab 1 - Introduction to Arduino & Software Setup/
│   ├── Lab 2 - Digital Input Output (DIO) & LED Sequencing/
│   ├── Lab 3 - Sensors & Servo Actuators/
│   ├── Arduino Term Project - Guidelines & Sensor Modules/
│   └── MIAE 215 - Arduino Labs & Mechatronics Project Master Guide.md (.pdf)
├── Mini Course/
│   ├── 00 - Overview & Troubleshooting/ (Course motivation & troubleshooting guide)
│   ├── Lesson 1 - Software Installation/ (Code::Blocks, VLC, Notepad++, 7-Zip)
│   ├── Lesson 2 - C++ Programs/ (Hello World anatomy & lesson2.cpp)
│   ├── Lesson 3 - Variable Types/ (Memory sizing & 5 .cpp exercise/solution files)
│   ├── Lesson 4 - Expressions & Operators/ (Arithmetic & 4 .cpp exercise/solution files)
│   ├── Lesson 5 - Control Statements/ (Branching logic & 5 .cpp exercise/solution files)
│   ├── Lesson 6 - Arrays/ (Continuous buffers & 5 .cpp exercise/solution files)
│   ├── MIAE 215 - C++ Getting Started Mini-Course Master Guide.md (.pdf)
│   └── README.md (Comprehensive Mini Course index)
└── _Source & Archive/
    ├── original_course_packs/ (12 clean, distinct course packs for reference)
    ├── video_podcasts/ (All 10 official .mp4 lecture recordings)
    └── build_miae212_pdfs.py (Automated PDF build pipeline)
```

---

## 📑 Core Document Catalog

### 1. [00 - Course Overview & Study Guide](./00%20-%20Course%20Overview%20%26%20Study%20Guide/)
* [MIAE_215_outline_fall_2026_section_Y.docx.pdf](./00%20-%20Course%20Overview%20%26%20Study%20Guide/MIAE_215_outline_fall_2026_section_Y.docx.pdf): Official Fall 2026 syllabus (grading weights, tentative schedule, lab dates).
* [MIAE 215 - C++ Master Study Guide & Programming Roadmap.md](./00%20-%20Course%20Overview%20%26%20Study%20Guide/MIAE%20215%20-%20C%2B%2B%20Master%20Study%20Guide%20%26%20Programming%20Roadmap.md) ([PDF](./00%20-%20Course%20Overview%20%26%20Study%20Guide/MIAE%20215%20-%20C%2B%2B%20Master%20Study%20Guide%20%26%20Programming%20Roadmap.pdf)): Engineering motivation (Arduino, ROS robotics, CFD), compiler-linker pipeline, and memory layout.

### 2. [Mini Course](./Mini%20Course/)
* [MIAE 215 - C++ Getting Started Mini-Course Master Guide.md](./Mini%20Course/MIAE%20215%20-%20C%2B%2B%20Getting%20Started%20Mini-Course%20Master%20Guide.md) ([PDF](./Mini%20Course/MIAE%20215%20-%20C%2B%2B%20Getting%20Started%20Mini-Course%20Master%20Guide.pdf)): Complete, simplified master guide for the online mini-course covering Lessons #1 through #6, troubleshooting, compiler setups, and full exercise solutions.
* [Mini Course README & Lesson Index](./Mini%20Course/README.md): Detailed navigation for all 6 lessons and 20 accompanying C++ files.

### 3. [01 - Teacher Lecture Notes & Slides](./01%20-%20Teacher%20Lecture%20Notes%20%26%20Slides/)
* Official lecture slides: `introduction.pdf`, `variable_types1.pdf`, `variable_types2.pdf`, and `control_statements1.pdf`.
* Topic outlines: `extended_outline_introduction.txt`, `variable_types_topics.txt`, and `expressions_operators_topics.txt`.
* Original assignment 1 handout: `MIAE_215_assignment1.doc`.

### 4. [02 - Comprehensive Topic Guides (Expanded & Intuitive)](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/)
* [Part 1 - C++ Foundations, Memory Architecture & Data Types.md](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%201%20-%20C%2B%2B%20Foundations%2C%20Memory%20Architecture%20%26%20Data%20Types.md) ([PDF](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%201%20-%20C%2B%2B%20Foundations%2C%20Memory%20Architecture%20%26%20Data%20Types.pdf)): CPU/RAM hardware execution, primitive data types (`int`, `float`, `double`, `char`, `bool`), `sizeof()`, integer wrap-around overflow, IEEE 754 precision limits, and the integer division trap (`1/3 == 0`).
* [Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.md](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%202%20-%20Type%20Casting%2C%20Modifiers%2C%20Control%20Flow%20%26%20Algorithms.md) ([PDF](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%202%20-%20Type%20Casting%2C%20Modifiers%2C%20Control%20Flow%20%26%20Algorithms.pdf)): Implicit widening vs explicit C-style casting, ASCII character arithmetic (`'a' - 32 == 'A'`), type modifiers (`const`, `unsigned`), short-circuit logic (`&&`, `||`), and numerical grid-search optimization.
* [Part 3 - Expressions, Operators & Math Library Functions.md](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%203%20-%20Expressions%2C%20Operators%20%26%20Math%20Library%20Functions.md) ([PDF](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%203%20-%20Expressions%2C%20Operators%20%26%20Math%20Library%20Functions.pdf)): Assignment semantics, chained assignments (`x = y = z = 10`), modulus tricks (digit peeling $237 \to 7, 3, 2$), operator precedence matrix, and `<cmath>` trigonometric nuances.
* [Part 4 - Control Statements, Logic Flow & Flowcharts.md](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%204%20-%20Control%20Statements%2C%20Logic%20Flow%20%26%20Flowcharts.md) ([PDF](./02%20-%20Comprehensive%20Topic%20Guides%20%28Expanded%20%26%20Intuitive%29/Part%204%20-%20Control%20Statements%2C%20Logic%20Flow%20%26%20Flowcharts.pdf)): Flowchart design, branching (`if`, `if-else`), dangling else bugs, loops (`for`, `while`, `do-while`), loop post-state tracing, and root-finding algorithms.

### 5. [03 - 1-Page Rapid Review Sheets](./03%20-%201-Page%20Rapid%20Review%20Sheets/)
Ultra-dense single-page cheatsheets formatted to fit strictly onto **EXACTLY 1 PDF PAGE**:
* [Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.md](./03%20-%201-Page%20Rapid%20Review%20Sheets/Part%201%20-%20C%2B%2B%20Data%20Types%2C%20Sizes%20%26%20Memory%20Limits%20-%20Review%20Sheet.md) ([PDF](./03%20-%201-Page%20Rapid%20Review%20Sheets/Part%201%20-%20C%2B%2B%20Data%20Types%2C%20Sizes%20%26%20Memory%20Limits%20-%20Review%20Sheet.pdf))
* [Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.md](./03%20-%201-Page%20Rapid%20Review%20Sheets/Part%202%20-%20C%2B%2B%20Operators%2C%20Casting%20%26%20Control%20Flow%20-%20Review%20Sheet.md) ([PDF](./03%20-%201-Page%20Rapid%20Review%20Sheets/Part%202%20-%20C%2B%2B%20Operators%2C%20Casting%20%26%20Control%20Flow%20-%20Review%20Sheet.pdf))
* [Part 3 - Expressions, Precedence & Math Library - Review Sheet.md](./03%20-%201-Page%20Rapid%20Review%20Sheets/Part%203%20-%20Expressions%2C%20Precedence%20%26%20Math%20Library%20-%20Review%20Sheet.md) ([PDF](./03%20-%201-Page%20Rapid%20Review%20Sheets/Part%203%20-%20Expressions%2C%20Precedence%20%26%20Math%20Library%20-%20Review%20Sheet.pdf))

### 6. [04 - Practice Problems & Code Solutions](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/)
* [MIAE 215 - Step-by-Step Code Execution & Trace Manual.md](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/MIAE%20215%20-%20Step-by-Step%20Code%20Execution%20%26%20Trace%20Manual.md) ([PDF](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/MIAE%20215%20-%20Step-by-Step%20Code%20Execution%20%26%20Trace%20Manual.pdf)) [NEW]: Complete pedagogical step-by-step code tracing manual following the exact_ode_step_by_step.pdf framework across 5 core programming archetypes (integer division traps, increment operators, short-circuit logic, nested loop post-states, and reference passing).
* [Assignment 1 & Exercises - Fully Solved Master Guide.md](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/Assignment%201%20%26%20Exercises%20-%20Fully%20Solved%20Master%20Guide.md) ([PDF](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/Assignment%201%20%26%20Exercises%20-%20Fully%20Solved%20Master%20Guide.pdf)): Complete solutions for Assignment 1 (Questions 1 through 7).
* [Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.md](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/Exercise%20Solutions%20Set%201%20-%20Master%20Analysis%20&%20Teacher%20Commentary.md) ([PDF](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/Exercise%20Solutions%20Set%201%20-%20Master%20Analysis%20&%20Teacher%20Commentary.pdf)): Deep-dive into official solution sets with teacher log annotations.
* [code_solutions/](./04%20-%20Practice%20Problems%20%26%20Code%20Solutions/code_solutions/): Standalone compilable source files and professor execution logs.

### 7. [05 - Software & Flowcharts](./05%20-%20Software%20%26%20Flowcharts/)
* `Flowgorithm-Setup/`: Official Flowgorithm 2024 installer recommended by Prof. Gordon.
* `flow_chart1_simple_program.fprg` & `flow_chart2_if_else.fprg`: Interactive visual flowchart models.
* `CodeBlocks_17.12_portable/`: Fully extracted, standalone portable Code::Blocks IDE with integrated MinGW GCC/G++ compiler toolchain (no installation required; run `codeblocks.exe` directly).

### 8. [06 - Arduino Labs & Term Project](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/)
* [MIAE 215 - Arduino Labs & Mechatronics Project Master Guide.md](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/MIAE%20215%20-%20Arduino%20Labs%20%26%20Mechatronics%20Project%20Master%20Guide.md) ([PDF](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/MIAE%20215%20-%20Arduino%20Labs%20%26%20Mechatronics%20Project%20Master%20Guide.pdf)): Comprehensive 8-page master laboratory manual and term project guide covering hardware specifications, safety rules, ATmega328P architecture, ADC mathematics ($V = \frac{\text{ADC}}{1023}\times 5\text{V}$), active-low pull-up circuits, servo PWM timing (1.0–2.0 ms), and complete `.ino` sketch solutions.
* [00 - Lab Overview & Hardware Kit Guide](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/00%20-%20Lab%20Overview%20%26%20Hardware%20Kit%20Guide/README.md): Self-study rules, kit purchasing options, section swapping, and exam weighting.
* [Lab 1 - Introduction to Arduino & Software Setup](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/Lab%201%20-%20Introduction%20to%20Arduino%20%26%20Software%20Setup/README.md): Board setup, USB driver troubleshooting, baud rates, and first compile.
* [Lab 2 - Digital Input Output (DIO) & LED Sequencing](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/Lab%202%20-%20Digital%20Input%20Output%20%28DIO%29%20%26%20LED%20Sequencing/): Digital pins, active-low pull-up button inputs, LED binary counting, and debounce delay logic. Includes `arduino_lab2_Q1.ino` and `arduino_lab2_Q2.ino`.
* [Lab 3 - Sensors & Servo Actuators](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/Lab%203%20-%20Sensors%20%26%20Servo%20Actuators/): Potentiometer analog reads, temperature sensing, light-dependent resistors, and continuous servo control. Includes `arduino_lab3_Q1.ino`, `arduino_lab3_Q2.ino`, and `arduino_lab3_Q3.ino`.
* [Arduino Term Project - Guidelines & Sensor Modules](./06%20-%20Arduino%20Labs%20%26%20Term%20Project/Arduino%20Term%20Project%20-%20Guidelines%20%26%20Sensor%20Modules/): Official project rubric, sensor module selection, video demonstration requirements, and Moodle submission specifications.

---

## ⚡ Top 5 Cardinal Rules for Engineering C++ Exams

1. **Never Integer Divide When Expecting Decimals**: `1 / 3 == 0`! Force floating-point literal: `1.0 / 3.0`.
2. **Never Compare Floats with `==`**: Always test with tolerance: `if (abs(z - target) < 1.0e-7)`.
3. **Trace Post-Loop Iterators Carefully**: `for (int i = 10; i > -1; i--)` finishes when `i == -1`.
4. **Always Initialize Variables**: Uninitialized local variables contain unpredictable stack garbage.
5. **Beware of Array Bounds**: An array `A[3]` has valid indices `0`, `1`, and `2`. Index `A[3]` is an illegal memory violation!
