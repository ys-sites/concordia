# MIAE 215 · Mini-Course Lesson 6
# Fixed-Size Arrays & Numerical Data Buffers
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Source**: [Lesson 6 Web Page](https://users.encs.concordia.ca/~bwgordon/lesson6_arrays.html) | **Video**: [lesson6_arrays.mp4](http://users.encs.concordia.ca/~bwgordon/lesson6_arrays.mp4)

---

## Table of Contents
1. [Concept & Continuous Memory Architecture](#1-concept--continuous-memory-architecture)
2. [Declaration & Zero-Based Indexing](#2-declaration--zero-based-indexing)
3. [The Out-of-Bounds Memory Corruption Trap](#3-the-out-of-bounds-memory-corruption-trap)
4. [Statistical Computations on Arrays](#4-statistical-computations-on-arrays)
5. [Teacher Code & Exercise Walkthroughs](#5-teacher-code--exercise-walkthroughs)

---

## 1. Concept & Continuous Memory Architecture

An **array** is a contiguous block of memory allocated to store multiple elements of the identical data type under a single identifier.

```
 Array 'double sensor_readings[4]' in RAM (4 * 8 = 32 contiguous bytes):
 ┌──────────────┬──────────────┬──────────────┬──────────────┐
 │ Index 0      │ Index 1      │ Index 2      │ Index 3      │
 │ [ 12.4 V ]   │ [ 14.1 V ]   │ [ 11.8 V ]   │ [ 13.5 V ]   │
 └──────────────┴──────────────┴──────────────┴──────────────┘
 Address: 0x100  Address: 0x108  Address: 0x110  Address: 0x118
```

---

## 2. Declaration & Zero-Based Indexing

```cpp
int counts[5]; // Allocates 5 integers: counts[0] through counts[4]

// Initializing elements:
counts[0] = 10;
counts[1] = 25;
counts[2] = 40;
counts[3] = 55;
counts[4] = 70;
```

---

## 3. The Out-of-Bounds Memory Corruption Trap

In standard C++, **there is no automatic array bounds checking**!
```cpp
int arr[5]; // Valid indices: 0, 1, 2, 3, 4
arr[5] = 99; // CATASTROPHIC BUG: Overwrites adjacent memory outside the array!
```
Writing past the end of an array can overwrite other variables, corrupt return pointers, or cause runtime segmentation faults.

---

## 4. Statistical Computations on Arrays

### Calculating Mean & Sum:
```cpp
double readings[5] = {10.5, 12.2, 11.0, 13.8, 12.5};
double sum = 0.0;

for (int i = 0; i < 5; i++) {
    sum += readings[i];
}

double average = sum / 5.0;
cout << "Average Sensor Reading: " << average << " V
";
```

---

## 5. Teacher Code & Exercise Walkthroughs

* [`lesson6.cpp`](./lesson6.cpp): Demonstration of array declaration, indexing, and loops.
* [`lesson6_exercises.cpp`](./lesson6_exercises.cpp) & [`lesson6_exercises_solutions.cpp`](./lesson6_exercises_solutions.cpp): Exercise questions and solutions.
* [`lesson6_more.cpp`](./lesson6_more.cpp) & [`lesson6_more_solutions.cpp`](./lesson6_more_solutions.cpp): Supplemental practice exercises.
