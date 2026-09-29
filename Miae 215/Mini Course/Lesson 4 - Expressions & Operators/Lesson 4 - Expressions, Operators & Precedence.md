# MIAE 215 · Mini-Course Lesson 4
# Expressions, Operators, Precedence & Modulo Tricks
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Source**: [Lesson 4 Web Page](https://users.encs.concordia.ca/~bwgordon/lesson4_expressions_and_operators.html) | **Video**: [lesson4_expressions.mp4](http://users.encs.concordia.ca/~bwgordon/lesson4_expressions.mp4)

---

## Table of Contents
1. [Operators, Operands & Expressions](#1-operators-operands--expressions)
2. [Sequential Assignment (`=`) Lifecycle](#2-sequential-assignment--lifecycle)
3. [The Modulus Operator (`%`) & Digit Peeling](#3-the-modulus-operator---digit-peeling)
4. [Operator Precedence & Associativity Hierarchy](#4-operator-precedence--associativity-hierarchy)
5. [Teacher Code & Exercise Walkthroughs](#5-teacher-code--exercise-walkthroughs)

---

## 1. Operators, Operands & Expressions

* **Operator**: Performs an action on data (e.g., `+`, `-`, `*`, `/`, `%`).
* **Operand**: The data items or variables acted upon by an operator.
* **Expression**: A combination of operators and operands evaluating to a single value.

```cpp
y = x + 1 + z * w; // Expression containing 4 operators and multiple operands
```

---

## 2. Sequential Assignment (`=`) Lifecycle

In C++, assignment `=` is imperative:
```cpp
x = 3;
x = 2 * x + 1; // Evaluates RHS: 2*(3)+1 = 7, then stores 7 in x
```
This is **sequential memory mutation**, not a simultaneous algebraic equation.

### Chained Assignments
Assignment associates right-to-left:
```cpp
z1 = z2 = z3 = 11.0; // z3 gets 11.0, then z2 gets 11.0, then z1 gets 11.0
```

---

## 3. The Modulus Operator (`%`) & Digit Peeling

The `%` operator returns the integer remainder after division:
$$237 \% 10 = 7$$

### Extracting Digits Right-to-Left:
```cpp
int num = 237;
int d1 = num % 10; // d1 = 7
num = num / 10;    // num = 23
int d2 = num % 10; // d2 = 3
num = num / 10;    // num = 2
int d3 = num % 10; // d3 = 2
```

---

## 4. Operator Precedence & Associativity Hierarchy

```
Precedence Hierarchy:
1. ( ) Parentheses
2. ++, -- (prefix / postfix)
3. *, /, % (multiplicative)
4. +, - (additive)
5. = (assignment)
```

To evaluate rational expressions like $y = rac{ax^2+bx+c}{dx+e}$, **parentheses are mandatory**:
```cpp
y = (a*x*x + b*x + c) / (d*x + e);
```

---

## 5. Teacher Code & Exercise Walkthroughs

* [`lesson4.cpp`](./lesson4.cpp): Comprehensive lesson code covering arithmetic operators and precedence.
* [`lesson4_exercises.cpp`](./lesson4_exercises.cpp) & [`lesson4_exercises_solutions.cpp`](./lesson4_exercises_solutions.cpp): Exercise code and solutions.
* [`lesson4_more.cpp`](./lesson4_more.cpp): Supplemental practice exercises.
