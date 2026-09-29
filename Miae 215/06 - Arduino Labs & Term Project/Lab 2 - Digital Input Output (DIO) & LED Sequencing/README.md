# Lab 2: Digital Input / Output (DIO) & Execution Timing
**MIAE 215: Programming for Mechanical, Industrial & Aerospace Engineers**  
**Schedule**: Starts Week #6 · **Type**: Self-Study / Hands-on Lab  
**Accompanying Files**: [`arduino_lab_2.pdf`](./arduino_lab_2.pdf), [`arduino_lab2_Q1.ino`](./arduino_lab2_Q1.ino), [`arduino_lab2_Q2.ino`](./arduino_lab2_Q2.ino)

---

## 🎯 Lab Objectives
1. Interface physical input switches using internal microcontroller pull-up resistors (`INPUT_PULLUP`).
2. Write digital output signals (`HIGH` / `LOW`, 5V / 0V) to control LEDs with current-limiting resistors.
3. Quantify embedded computational execution speed on the 8-bit **ATmega328P** (16 MHz clock) using `micros()`.
4. Stream real-time timestamped telemetry over the USB Serial interface at **115200 baud** in CSV format.

---

## 📐 Circuit Schematic: Digital Input with Pull-Up

```
     Arduino 5V ──────────────────────────────┐
                                              │ [Internal ~20kΩ Pull-Up]
                                              ▼
     Arduino Pin D3 ─────────────────┬───/\/\/\/\─── 5V Bus
                                     │
                                [Pushbutton]
                                     │
     Arduino GND ────────────────────┴────────────── System Ground
```

* **When button is open (unpressed)**: The internal resistor pulls pin D3 to **5.0V** $\to$ `digitalRead(3)` returns `HIGH` (`1`).
* **When button is closed (pressed)**: Current flows directly to Ground ($0\text{V}$) $\to$ `digitalRead(3)` returns `LOW` (`0`).

---

## 💻 Solved Problems Breakdown

### Question 1: CPU Execution Profiling via `micros()`
* **File**: [`arduino_lab2_Q1.ino`](./arduino_lab2_Q1.ino)
* **Engineering Concept**: The ATmega328P is an 8-bit processor lacking hardware floating-point acceleration. Floating-point transcendental functions like `sin(x)` require hundreds of CPU clock cycles of software emulation!
* **Measurement Mechanism**:
  ```cpp
  unsigned long t1 = micros(); // Capture timestamp before function call
  float result = sin(x);       // Execute mathematical computation
  unsigned long t2 = micros(); // Capture timestamp after completion
  unsigned long dt = t2 - t1;  // Net execution duration in microseconds
  ```

### Question 2: Real-Time CSV Telemetry & LED Mirroring
* **File**: [`arduino_lab2_Q2.ino`](./arduino_lab2_Q2.ino)
* **Wiring**: Pin 13 outputs to the LED; Pin 3 is configured as `INPUT_PULLUP`.
* **Telemetry Output**: Prints CSV lines over the serial bus:
  ```text
  1.000420,5.00
  2.000850,5.00
  3.001280,0.00
  ```
  This format can be copied directly into MATLAB, Python, or Excel for plotting.

---

## 📹 Video Lectures (Download & Play in VLC)
* [Arduino Lab 2 Overview Video (MP4)](http://users.encs.concordia.ca/~bwgordon/arduino_lab_2.mp4)
* [Arduino Lab 2 Examples Video (MP4)](http://users.encs.concordia.ca/~bwgordon/arduino_lab_2_examples.mp4)
