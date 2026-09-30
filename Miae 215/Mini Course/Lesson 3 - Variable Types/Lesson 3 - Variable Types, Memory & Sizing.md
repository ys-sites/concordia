# MIAE 215 · Mini-Course Lesson 3
# Variable Types, Memory Allocation & Keyboard Input
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Source**: [Lesson 3 Web Page](https://users.encs.concordia.ca/~bwgordon/lesson3_variable_types.html) | **Video**: [lesson3_variable_types.mp4](http://users.encs.concordia.ca/~bwgordon/lesson3_variable_types.mp4)

---

## Table of Contents
1. [Core Primitive Data Types](#1-core-primitive-data-types)
2. [Memory Sizing & `sizeof()` Inspection](#2-memory-sizing--sizeof-inspection)
3. [Keyboard Stream Input: `cin >>`](#3-keyboard-stream-input-cin-)
4. [Integer Division vs. Floating Division](#4-integer-division-vs-floating-division)
5. [Teacher Code & Exercise Walkthroughs](#5-teacher-code--exercise-walkthroughs)

---

## 1. Core Primitive Data Types

In Lesson 3, Prof. Gordon introduces the five fundamental data types used in engineering computation:

| Type | Size (Bytes) | Range / Precision | Typical Engineering Purpose |
| :--- | :---: | :--- | :--- |
| `int` | 4 bytes | $-2.14 \times 10^9 \text{ to } +2.14 \times 10^9$ | Integer counters, loop indices, discrete states. |
| `float` | 4 bytes | $\pm 10^{-38} \text{ to } \pm 10^{+38}$ (~7 digits) | Embedded memory buffers, low-precision signals. |
| `double` | 8 bytes | $\pm 10^{-308} \text{ to } \pm 10^{+308}$ (~16 digits) | Standard for physics, aerodynamics, and robotics. |
| `char` | 1 byte | $-128 \text{ to } +127$ (ASCII code) | Keyboard keys, ASCII text, single telemetry bytes. |
| `bool` | 1 byte | `true` (1) or `false` (0) | Decision flags, binary sensor triggers. |

---

## 2. Memory Sizing & `sizeof()` Inspection

C++ provides the compile-time operator `sizeof()` to measure the exact byte footprint of any type or variable:
```cpp
int a = 10;
cout << "Size of integer variable a: " << sizeof(a) << " bytes
";
cout << "Size of double type:       " << sizeof(double) << " bytes
";
```

---

## 3. Keyboard Stream Input: `cin >>`

To read data entered by the user at the keyboard, C++ uses the standard input stream `cin` and the **stream extraction operator** (`>>`):
```cpp
int i;
double x;

cout << "Enter an integer and a double: ";
cin >> i >> x; // Skips leading whitespace and reads values sequentially
```

> **Teacher Exam Warning / Pitfall:**  
> When a user enters numeric data with `cin >>` and presses Enter, a newline character (`
`) remains in the keyboard buffer. If you follow `cin >>` with `getchar()`, the `getchar()` will instantly read the leftover newline without pausing! Call `getchar()` twice to guarantee a pause.

---

## 4. Integer Division vs. Floating Division

When dividing two integers, C++ forcibly truncates the result to an integer:
```cpp
int a = 7, b = 2;
cout << a / b;     // PRINTS 3, NOT 3.5!

double x = 7 / 2;  // Still evaluates to 3, then converts to 3.0!
double y = 7.0 / 2; // Evaluates to 3.5 (floating-point division)
```

---

## 5. Teacher Code & Exercise Walkthroughs

The following source files are provided in this lesson folder:
* [`lesson3.cpp`](./lesson3.cpp): Main lecture code demonstrating variable declarations, `sizeof()`, and `cin`.
* [`lesson3_exercises.cpp`](./lesson3_exercises.cpp): Practice questions on variable assignment.
* [`lesson3_exercises_solutions.cpp`](./lesson3_exercises_solutions.cpp): Fully annotated solutions.
* [`lesson3_more.cpp`](./lesson3_more.cpp) & [`lesson3_more_solutions.cpp`](./lesson3_more_solutions.cpp): Supplemental challenges.
