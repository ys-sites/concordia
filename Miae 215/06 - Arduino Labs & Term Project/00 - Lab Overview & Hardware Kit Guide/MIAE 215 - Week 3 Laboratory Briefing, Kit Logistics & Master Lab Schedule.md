# MIAE 215 · Embedded C++ & Physical Computing
# Week 3 Laboratory Briefing, Kit Logistics & Master Lab Schedule
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)**  
**Instructor**: Prof. Brandon W. Gordon · **Language**: Embedded C++ (Arduino Core) · **Platform**: Atmel ATmega328P

---

## 1. Executive Summary & Week 3 Official Standing

> [!IMPORTANT]
> **Week 3 Laboratory Status**:
> * **Laboratory attendance during Week 3 is completely optional**. There are no in-person lab experiments conducted in Week 3, and **no lab assignment is handed in**.
> * **Arduino Lab #1 officially starts in Week 4**.
> * The official course lab portal is maintained at: `https://users.encs.concordia.ca/~bwgordon/MIAE_215_labs.html`.

---

## 2. Master Laboratory Schedule & Milestone Roadmap

The laboratory component provides hands-on practical experience in circuit interfacing, sensor signal acquisition, and servo actuation.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   MIAE 215 LABORATORY TIMELINE & MILESTONES            │
├─────────┬──────────────────────────────────────────┬───────────────────┤
│ Period  │ Laboratory Module & Technical Scope      │ Deliverable Type  │
├─────────┼──────────────────────────────────────────┼───────────────────┤
│ Week 3  │ Kit Acquisition, Driver Setup & Reading  │ Independent Prep  │
│ Week 4  │ Lab 1: Software Environment & Blink Test │ Optional / Practice│
│ Week 6  │ Lab 2: Digital I/O & Speed Profiling     │ Optional / Practice│
│ Week 8  │ Lab 3: Analog ADC & Servo Kinematics     │ Optional / Practice│
│ Week 9+ │ Arduino Mechatronics Term Project        │ MANDATORY (Moodle)│
│ Final   │ Final Exam Embedded Programming (10%)    │ In-Person Exam    │
└─────────┴──────────────────────────────────────────┴───────────────────┘
```

### Essential Academic Regulations
1. **Deliverable Submissions**:
   * **Labs 1, 2, and 3 are NOT submitted for grading**. They are self-study practice modules with full official solution archives posted online.
   * **Only the Arduino Term Project is submitted for a course grade** via Moodle.
2. **Attendance Policy**:
   * Scheduled campus lab sessions function as open help/drop-in hours with Teaching Assistants (TAs).
   * If you complete the labs independently on your personal computer, you do not need to attend campus labs.
   * You may drop into alternate lab sections if physical space is available.
3. **10% Final Exam Impact**:
   * **Approximately 10% of the MIAE 215 Final Examination** is composed of questions drawn directly from the Arduino laboratory circuits and C++ code.

---

## 3. Recommended Hardware Starter Kits & Logistics

The Arduino hardware kit works with both **Windows** and **macOS**. Compatible starter kits available on Amazon Canada:

| Starter Kit Model | Amazon Canada Direct Link | Included Key Components |
| :--- | :--- | :--- |
| **ELEGOO UNO Project Super Starter Kit** | [Amazon.ca B06XXYVWVJ](https://www.amazon.ca/gp/product/B06XXYVWVJ) | Arduino Uno R3, SG90 Servo, Photoresistors, LEDs, Resistors, Breadboard, Jumper Wires |
| **SunFounder Starter Kit for Arduino** | [Amazon.ca B08B4JY95V](https://www.amazon.ca/gp/product/B08B4JY95V) | Uno R3, Ultrasonic Sensor, SG90 Servo, LDR Light Sensors, Buzzer, Breadboard |
| **Rexqualis Complete Starter Kit** | [Amazon.ca B07BTB3N3J](https://www.amazon.ca/gp/product/B07BTB3N3J) | Uno R3, Dual-axis Joystick, Stepper Motor, Servo, Resistor packs, Wires |
| **Kuman Complete Starter Kit** | [Amazon.ca B01D8KOZF4](https://www.amazon.ca/gp/product/B01D8KOZF4) | Uno R3, Multiple Sensors, Breadboard, Jumper cables, Power Supply Module |

> [!TIP]
> **Minimalist Component Checklist**:
> If you already have electronic components, you do not need to purchase a full boxed kit. For Labs 1–3, you need:
> * 1x Arduino Uno R3 (or 100% compatible clone) with USB cable.
> * 1x Half-size or full-size solderless breadboard.
> * Male-to-male jumper wires (pack of 20+).
> * 2x 5mm LEDs and 2x $220\ \Omega$ current-limiting resistors.
> * 1x Photoresistor (LDR) and 1x $10\text{ k}\Omega$ pull-down resistor.
> * 1x SG90 9g micro-servo motor.
> * 1x Additional sensor of your choice for the Term Project (e.g., HC-SR04 ultrasonic distance sensor, analog 2-axis joystick, or TMP36 temperature sensor).

---

## 4. Software Setup & Download Resources

1. **Arduino IDE**:
   * Download the latest official IDE from [arduino.cc](https://www.arduino.cc/en/software).
2. **Video Podcasts Audio Notice**:
   * All lab screencast videos must be downloaded first and played using **VLC Media Player**. Built-in web browser players or Windows Media Player may drop the audio track.
3. **RAR Archive Handling**:
   * Teacher files use `*.rar` archive formats. Extract using 7-Zip or WinRAR (as demonstrated in Lesson #1 of the mini-course).
4. **Early Start Recommendation**:
   * Students are strongly encouraged to review the online lab modules early and begin planning their Term Project well ahead of the Week 9 rush.

---
*Concordia University · Department of Mechanical, Industrial & Aerospace Engineering · MIAE 215*
