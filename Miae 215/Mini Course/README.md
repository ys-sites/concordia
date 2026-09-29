# MIAE 215 · Getting Started with C++ Online Mini-Course
### Department of Mechanical, Industrial & Aerospace Engineering (MIAE) · Concordia University
**Instructor**: Prof. Brandon W. Gordon | **Original Course URL**: [Getting Started C++ Mini-Course](https://users.encs.concordia.ca/~bwgordon/Getting_started_C++.html)

---

## 🧭 Course Overview & Learning Roadmap

This folder contains the complete, verified, and structured curriculum of the **MIAE 215 (MECH 215) Online C++ Mini-Course**. Designed by Prof. Brandon W. Gordon, this course provides engineering students with an accelerated, high-yield foundation in C++ programming during the first two weeks of the term before formal lectures and labs begin.

```
┌────────────────────────────────────────────────────────────────────────┐
│               MIAE 215 C++ MINI-COURSE CURRICULUM ARCHITECTURE         │
├────────────────────────────────┬───────────────────────────────────────┤
│ WEEK 1: Foundations & Toolchain│ WEEK 2: Control Logic & Data Buffers  │
├────────────────────────────────┼───────────────────────────────────────┤
│ • Lesson 1: Software Install   │ • Lesson 5: Control Statements        │
│   (Code::Blocks, GCC, MinGW)   │   (if/else, logical operators, loops) │
│ • Lesson 2: First C++ Programs │ • Lesson 6: Arrays                    │
│   (Anatomy, main(), streams)   │   (Memory layout, 0-indexing, stats)  │
│ • Lesson 3: Variable Types     │                                       │
│   (int, float, double, char)   │                                       │
│ • Lesson 4: Expressions        │                                       │
│   (Arithmetic, truncation, %)  │                                       │
└────────────────────────────────┴───────────────────────────────────────┘
```

---

## 📂 Folder Contents & Navigation

* **[MIAE 215 - C++ Getting Started Mini-Course Master Guide.pdf](./MIAE%20215%20-%20C%2B%2B%20Getting%20Started%20Mini-Course%20Master%20Guide.pdf)**: Comprehensive 8-page publication-grade reference manual covering all 6 lessons, troubleshooting steps, and exercise solutions.
* **[00 - Overview & Troubleshooting/](./00%20-%20Overview%20%26%20Troubleshooting/)**:
  * [00 - Mini-Course Overview & Guidelines.md](./00%20-%20Overview%20%26%20Troubleshooting/00%20-%20Mini-Course%20Overview%20%26%20Guidelines.md): Course motivation, time commitments (5–10 hours), and robotics/Arduino relevance.
  * [01 - Mini-Course Troubleshooting Guide.md](./00%20-%20Overview%20%26%20Troubleshooting/01%20-%20Mini-Course%20Troubleshooting%20Guide.md): Official solutions for compiler errors, "Target is up to date", linker faults, and OS path issues.
* **[Lesson 1 - Software Installation/](./Lesson%201%20-%20Software%20Installation/)**:
  * [Lesson 1 - Software Installation & Setup Guide.md](./Lesson%201%20-%20Software%20Installation/Lesson%201%20-%20Software%20Installation%20%26%20Setup%20Guide.md): Setting up Code::Blocks with MinGW, VLC, Adobe Reader, and Notepad++.
* **[Lesson 2 - C++ Programs/](./Lesson%202%20-%20C%2B%2B%20Programs/)**:
  * [Lesson 2 - C++ Programs & First Hello World.md](./Lesson%202%20-%20C%2B%2B%20Programs/Lesson%202%20-%20C%2B%2B%20Programs%20%26%20First%20Hello%20World.md): Structure of a C++ program, `#include`, `main()`, `cout`, `
` vs `endl`, and `getchar()`.
  * `lesson2.cpp`: Demonstration source file.
* **[Lesson 3 - Variable Types/](./Lesson%203%20-%20Variable%20Types/)**:
  * [Lesson 3 - Variable Types, Memory & Sizing.md](./Lesson%203%20-%20Variable%20Types/Lesson%203%20-%20Variable%20Types%2C%20Memory%20%26%20Sizing.md): Memory footprints, `sizeof()`, limits, keyboard input via `cin`.
  * `lesson3.cpp`, `lesson3_exercises.cpp`, `lesson3_exercises_solutions.cpp`, `lesson3_more.cpp`, `lesson3_more_solutions.cpp`.
* **[Lesson 4 - Expressions & Operators/](./Lesson%204%20-%20Expressions%20%26%20Operators/)**:
  * [Lesson 4 - Expressions, Operators & Precedence.md](./Lesson%204%20-%20Expressions%20%26%20Operators/Lesson%204%20-%20Expressions%2C%20Operators%20%26%20Precedence.md): Basic arithmetic, the truncated integer division trap (`1/3 == 0`), operator precedence, and type coercion.
  * `lesson4.cpp`, `lesson4_exercises.cpp`, `lesson4_exercises_solutions.cpp`, `lesson4_more.cpp`.
* **[Lesson 5 - Control Statements/](./Lesson%205%20-%20Control%20Statements/)**:
  * [Lesson 5 - Decision Logic, Branches & Loops.md](./Lesson%205%20-%20Control%20Statements/Lesson%205%20-%20Decision%20Logic%2C%20Branches%20%26%20Loops.md): `if`, `if-else`, cascading `else if`, relational operators, Boolean logic (`&&`, `||`, `!`), and `for`/`while` loops.
  * `lesson5.cpp`, `lesson5_exercises.cpp`, `lesson5_exercises_solutions.cpp`, `lesson5_more.cpp`, `lesson5_more_solutions.cpp`.
* **[Lesson 6 - Arrays/](./Lesson%206%20-%20Arrays/)**:
  * [Lesson 6 - Arrays & Numerical Processing.md](./Lesson%206%20-%20Arrays/Lesson%206%20-%20Arrays%20%26%20Numerical%20Processing.md): 1D arrays, continuous memory layout, 0-based indexing, bounds checking, and computing array averages.
  * `lesson6.cpp`, `lesson6_exercises.cpp`, `lesson6_exercises_solutions.cpp`, `lesson6_more.cpp`, `lesson6_more_solutions.cpp`.

---

## ⚡ Essential Mini-Course Advice from Prof. Gordon

1. **Spend 1 to 2 Hours per Lesson**: Spread the lessons across two weeks. Do not attempt to binge the entire course in a single day—material requires time to absorb.
2. **Work Through the Exercise Problems**: The `.cpp` exercise and solution files provided in each lesson folder should be opened, built, modified, and executed in Code::Blocks.
3. **Check the Troubleshooting Guide First**: Most common compiler, linker, and operating system errors are thoroughly documented in `00 - Overview & Troubleshooting/01 - Mini-Course Troubleshooting Guide.md`.
