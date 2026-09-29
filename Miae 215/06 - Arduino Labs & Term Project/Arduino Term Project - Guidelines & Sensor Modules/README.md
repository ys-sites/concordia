# MIAE 215: Arduino Mechatronics Term Project
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**  
**Official Instruction Documents**: 
* [`MIAE_215_arduino_project.pdf`](./MIAE_215_arduino_project.pdf) (Printable Vector PDF)
* [`MIAE_215_arduino_project.doc`](./MIAE_215_arduino_project.doc) (Original Handout)

---

## 📌 Project Overview & Engineering Challenge

The **Arduino Term Project** is the sole graded coursework submission of the laboratory curriculum. Building upon the sensor-actuator foundations established in **Lab 3**, each student must design, build, and program an autonomous mechatronic apparatus combining the **servo motor** with **at least one new sensor** of their choice.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   MIAE 215 TERM PROJECT ARCHITECTURE                   │
│                                                                        │
│   [ New Sensor Module ]          [ Embedded Controller ]               │
│   • Ultrasonic (HC-SR04)   ──►   • Arduino Uno R3                      │
│   • Analog Joystick        ──►   • Modular C++ Code                    │
│   • Temperature (TMP36)    ──►   • Functions & Logic                   │
│                                           │                            │
│                                           ▼                            │
│                                  [ Servo Actuator ]                    │
│                                  • Proportional Position / Sweep       │
│                                  • Mechanical Indicator / Pointer      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📦 Required Moodle Deliverables

Students must upload three specific items to Moodle before the final deadline:
1. **Source Code (`program.ino`)**: Complete, clean Arduino C++ program. Must include meaningful code comments explaining the algorithm (approximately one comment every 3–5 lines).
2. **High-Resolution Apparatus Photos (1–2 images)**: Clear photos (*.jpg, *.png) displaying the overall circuit wiring, sensor mounting, and mechanical setup.
3. **Demonstration Video (*.mp4)**: A brief video clip (1–2 minutes) clearly demonstrating the autonomous mechatronic system operating in response to physical stimuli.

> [!IMPORTANT]
> **No formal written laboratory report is required!** Your grade is determined directly by the correctness, elegance, and modularity of your C++ code and the demonstrated performance of your hardware.

---

## 🏆 Official Evaluation Criteria

| Criterion | Weight / Focus | Details |
| :--- | :--- | :--- |
| **Technical Merit** | ~50% | Correctness of circuit interface, accurate sensor calibration, robust boundary checks, clean modular C++ function design, and absence of blocking bugs. |
| **Originality & Independence** | ~50% | Individual authorship of code, innovative functional behavior, and creative mechatronic application. Direct copy-pasting from online repositories will result in severe grade penalties. |

---

## 💡 Sensor Selection Ideas & Project Blueprints

Students may choose any sensor from their kit (or external sources) other than the simple photoresistor used in Lab 3:

1. **Dual-Axis Analog Joystick**:
   * *Mechanism*: Dual potentiometers providing analog $X$ and $Y$ voltages ($0\text{V} - 5\text{V}$) plus digital push button.
   * *Application*: Direct manual joystick control of servo steering angle, or rate-controlled angular velocity tracking.
2. **Ultrasonic Distance Sensor (HC-SR04)**:
   * *Mechanism*: Emits 40 kHz ultrasonic sound bursts; measures echo round-trip flight time via `pulseIn()`.
   * *Application*: Automated radar scanner, obstacle-avoiding sonar turret, or contactless distance-meter dial.
3. **Temperature Sensor (TMP36 / DHT11)**:
   * *Mechanism*: Outputs analog voltage proportional to Celsius temperature ($10\text{ mV}/^\circ\text{C}$).
   * *Application*: Analog thermostat gauge; servo pointer moves proportionally across a calibrated temperature dial.

---

## 🎓 Final Exam Direct Preparation (10%)
Remember that **10% of the MIAE 215 Final Examination** is based directly on:
* Microcontroller ADC resolution and voltage conversion formulas:
  $$V = \frac{\text{ADC}}{1023} \times 5.0\text{ V}$$
* `pinMode()`, `digitalRead()`, `digitalWrite()`, `analogRead()`.
* Servo pulse width modulation (PWM) range ($1.0\text{ ms} - 2.0\text{ ms}$) and `<Servo.h>` functions (`attach()`, `write()`).
* Execution profiling with `micros()`.
