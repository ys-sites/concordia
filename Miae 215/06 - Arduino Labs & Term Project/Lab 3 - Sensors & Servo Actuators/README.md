# Lab 3: Analog Sensors & Servo Motor Actuators
**MIAE 215: Programming for Mechanical, Industrial & Aerospace Engineers**  
**Schedule**: Starts Week #8 · **Type**: Self-Study / Hands-on Lab  
**Accompanying Files**: [`arduino_lab_3.pdf`](./arduino_lab_3.pdf), [`arduino_lab3_Q1.ino`](./arduino_lab3_Q1.ino), [`arduino_lab3_Q2.ino`](./arduino_lab3_Q2.ino), [`arduino_lab3_Q3.ino`](./arduino_lab3_Q3.ino)

---

## 🎯 Lab Objectives
1. Read analog sensor voltages using the Arduino 10-bit **Analog-to-Digital Converter (ADC)**.
2. Characterize environmental sensor noise using statistical metrics (min, max, average, peak-to-peak $\Delta V$).
3. Generate Pulse Width Modulation (**PWM**) control signals to position a 9g micro-servo motor across $0^\circ$ to $180^\circ$.
4. Build a **Closed-Loop Heliotropic Light Tracker**: mount a photoresistor on the servo horn to actively seek the angle of maximum illumination!

---

## 📐 Circuit Architectures

### 1. Photoresistor (LDR) Voltage Divider on Pin A0
```
     +5V ──────────────┬───────────────
                       │
                  [ 10 kΩ Resistor ]
                       │
     Pin A0 ───────────┼─────────────── (Voltage Tap: V_out)
                       │
                  [ Photoresistor ]
                       │
     GND ──────────────┴───────────────
```
The 10-bit ADC quantizes the analog input voltage into an integer from $0$ to $1023$:
$$V_{\text{in}} = \frac{\text{ADC Value}}{1023.0} \times 5.0\text{ V}$$

### 2. Servo Actuator PWM Physics on Pin D7
A standard hobby servo expects a **50 Hz PWM frame** (period $T = 20\text{ ms}$):
* **1.0 ms pulse**: Positions the output shaft at $0^\circ$.
* **1.5 ms pulse**: Positions the output shaft at neutral ($90^\circ$).
* **2.0 ms pulse**: Positions the output shaft at full span ($180^\circ$).

---

## 💻 Solved Problems Breakdown

### Question 1: Sensor Statistical Sampling & Noise Analysis
* **File**: [`arduino_lab3_Q1.ino`](./arduino_lab3_Q1.ino)
* Samples $N = 1000$ readings on pin A0.
* Computes real-time minimum, maximum, mean, and peak-to-peak noise:
  $$\Delta V = V_{\max} - V_{\min}$$
* **Memory Note**: AVR architecture uses 16-bit integers (`-32,768` to `+32,767`). Accumulating 1000 samples requires a `float` or `long int` accumulator to prevent integer overflow wrap-around!

### Question 2: Dynamic Harmonic Servo Sweeping
* **File**: [`arduino_lab3_Q2.ino`](./arduino_lab3_Q2.ino)
* Uses `#include <Servo.h>` and `servo1.attach(7)`.
* Drives the servo in smooth sinusoidal motion:
  $$\theta_d(t) = A \sin(\omega t + \phi) + \theta_0$$

### Question 3: Autonomous Closed-Loop Light Tracker
* **File**: [`arduino_lab3_Q3.ino`](./arduino_lab3_Q3.ino)
* The photoresistor is physically mounted onto the servo horn.
* **Algorithm**: The servo performs a sweep across $0^\circ$ to $180^\circ$, records light voltage at each increment, identifies the maximum illumination angle $\theta_{\text{best}}$, and actively slews to point directly at the light source!
