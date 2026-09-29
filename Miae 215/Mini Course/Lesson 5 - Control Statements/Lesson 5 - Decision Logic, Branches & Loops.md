# MIAE 215 · Mini-Course Lesson 5
# Control Statements, Decision Logic & Loops
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Source**: [Lesson 5 Web Page](https://users.encs.concordia.ca/~bwgordon/lesson5_control_statements.html) | **Video**: [lesson5_control_statements.mp4](http://users.encs.concordia.ca/~bwgordon/lesson5_control_statements.mp4)

---

## Table of Contents
1. [Decision Branching: `if` and `if-else`](#1-decision-branching-if-and-if-else)
2. [Relational Operators & Dynamic Conditions](#2-relational-operators--dynamic-conditions)
3. [Boolean Logic Gates: `&&`, `||`, `!`](#3-boolean-logic-gates----)
4. [Iterative Loops: `for` and `while`](#4-iterative-loops-for-and-while)
5. [Teacher Code & Exercise Walkthroughs](#5-teacher-code--exercise-walkthroughs)

---

## 1. Decision Branching: `if` and `if-else`

Conditional structures allow programs to take alternate branches based on Boolean evaluation:
```cpp
if (distance > 0.5) {
    cout << "Path clear: Move robot forward
";
} else {
    cout << "Obstacle detected: Stop robot
";
}
```

---

## 2. Relational Operators & Dynamic Conditions

* `>` (greater than), `<` (less than)
* `>=` (greater than or equal), `<=` (less than or equal)
* `==` (equal to), `!=` (not equal to)

> **Teacher Exam Warning / Pitfall:**  
> Never confuse assignment (`=`) with equality (`==`):
> ```cpp
> if (x = 5) // BUG: assigns 5 to x; always evaluates to TRUE!
> if (x == 5) // CORRECT: tests if x is equal to 5
> ```

---

## 3. Boolean Logic Gates: `&&`, `||`, `!`

* `&&` (Logical AND): True only if both conditions are true.
* `||` (Logical OR): True if at least one condition is true.
* `!` (Logical NOT): Inverts condition truth value.

```cpp
if ((temperature < 100.0) && (pressure < 250.0)) {
    cout << "Turbine operating within normal parameters.
";
}
```

---

## 4. Iterative Loops: `for` and `while`

### The `for` Loop
Ideal for loops with a known iteration count:
```cpp
for (int i = 0; i < 10; i++) {
    cout << "Iteration: " << i << "
";
}
```

### Sentinel Termination with `break`:
```cpp
for (int i = 0; i < 1000; i++) {
    if (sensor_value > 500) break; // Exits loop immediately
}
```

---

## 5. Teacher Code & Exercise Walkthroughs

* [`lesson5.cpp`](./lesson5.cpp): Demonstration of branching structures and loops.
* [`lesson5_exercises.cpp`](./lesson5_exercises.cpp) & [`lesson5_exercises_solutions.cpp`](./lesson5_exercises_solutions.cpp): Exercise questions and solutions.
* [`lesson5_more.cpp`](./lesson5_more.cpp) & [`lesson5_more_solutions.cpp`](./lesson5_more_solutions.cpp): Supplemental practice exercises.
