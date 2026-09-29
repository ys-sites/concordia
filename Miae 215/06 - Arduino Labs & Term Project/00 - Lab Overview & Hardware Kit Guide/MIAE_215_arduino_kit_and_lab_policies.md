# MIAE 215: Computer Programming for Engineers
# Arduino Hardware Kit Specifications & Laboratory Academic Policies
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering**  
**Instructor**: Prof. Brandon W. Gordon · **Language**: Embedded C++ (Arduino Core)

---

## 1. Official Course Laboratory Regulations

The laboratory component of **MIAE 215** provides practical experience in physical computing, digital input/output, analog sensor signal acquisition, and servo actuation on the Atmel ATmega328P platform.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   MIAE 215 LABORATORY TIMELINE & MILESTONES            │
├─────────┬──────────────────────────────────────────┬───────────────────┤
│ Period  │ Laboratory Module & Scope                │ Deliverable Type  │
├─────────┼──────────────────────────────────────────┼───────────────────┤
│ Weeks 1–3│ Hardware Kit Acquisition & Setup        │ Independent Prep  │
│ Week 4  │ Lab 1: Software Setup & Blink Lifecycle  │ Optional/Practice │
│ Week 6  │ Lab 2: Digital I/O & Speed Profiling     │ Optional/Practice │
│ Week 8  │ Lab 3: Analog ADC & Servo Kinematics     │ Optional/Practice │
│ Week 9+ │ Arduino Mechatronics Term Project        │ MANDATORY MOODLE  │
│ Final   │ Final Exam Embedded C++ Questions        │ 10% OF COURSE GR. │
└─────────┴──────────────────────────────────────────┴───────────────────┘
```

### Key Academic Policies
1. **Individual Work Mandate**: Every student must complete the labs and the term project independently. Collaboration or code copying between students is strictly forbidden and subject to academic integrity review.
2. **Attendance Policy**:
   * Laboratory attendance in scheduled campus rooms is **completely optional**.
   * All lab manuals, video demonstrations, and official solution sets are published online.
   * If you are able to perform the experiments on your personal computer and hardware kit, you are not required to attend in person.
   * In-person sessions function as open drop-in support hours with Teaching Assistants (TAs).
3. **Section Flexibility**: Students who need in-person assistance may attend alternative lab sections provided physical seating and bench equipment are available.
4. **Graded Deliverables**:
   * **Labs 1, 2, and 3 are NOT submitted for grades**. They are self-study practice modules with full solutions provided.
   * **Only the Arduino Term Project is submitted for a course grade** via Moodle.
5. **Final Exam Impact (10%)**:
   * **Approximately 10% of the MIAE 215 Final Examination** consists of circuit analysis and embedded C++ coding questions drawn directly from the Arduino labs and project concepts.

---

## 2. Recommended Hardware Starter Kits

The Arduino kit works with both **Windows** and **macOS** operating systems. Prof. Gordon recommends acquiring one of the following starter kits:

| Kit Description | Amazon Canada Link | Included Essential Components |
| :--- | :--- | :--- |
| **ELEGOO UNO Project Super Starter Kit** | [Amazon.ca B06XXYVWVJ](https://www.amazon.ca/gp/product/B06XXYVWVJ) | Arduino Uno R3, SG90 Servo, Photoresistors, LEDs, Resistors, Breadboard, Wires |
| **SunFounder Starter Kit for Arduino** | [Amazon.ca B08B4JY95V](https://www.amazon.ca/gp/product/B08B4JY95V) | Uno R3, Ultrasonic Sensor, SG90 Servo, LDR Light Sensors, Buzzer, Breadboard |
| **Rexqualis Complete Starter Kit** | [Amazon.ca B07BTB3N3J](https://www.amazon.ca/gp/product/B07BTB3N3J) | Uno R3, Dual-axis Joystick, Stepper Motor, Servo, Resistor packs, Wires |
| **Kuman Complete Starter Kit** | [Amazon.ca B01D8KOZF4](https://www.amazon.ca/gp/product/B01D8KOZF4) | Uno R3, Multiple Sensors, Breadboard, Jumper cables, Power Supply Module |

> [!TIP]
> **Minimalist Component List**: If you already have Arduino hardware, you do not need to buy a new kit. For Labs 1–3, you need:
> * 1x Arduino Uno (or compatible clone) with USB cable.
> * 1x Solderless breadboard and male-to-male jumper wires.
> * 1x SG90 9g micro-servo motor.
> * 1x Photoresistor (LDR) and 10 kΩ pull-down resistor.
> * 2x LEDs and 220 Ω current-limiting resistors.
> * 1x Additional sensor of your choice for the Term Project (e.g., analog joystick, HC-SR04 ultrasonic sensor, or TMP36 temperature sensor).

---

## 3. Official Lab Download Resources

All official files provided by Prof. Gordon are hosted at:
`https://users.encs.concordia.ca/~bwgordon/MIAE_215_labs.html`

* **Lab 1 Files**: Google Drive archive (`Arduino_lab_introduction.rar`) containing video screencasts and starter code.
* **Lab 2 Files**: `arduino_lab_2.pdf`, `arduino_lab_2.rar` (starter code), and `arduino_lab_2_sol.rar` (solutions).
* **Lab 3 Files**: `arduino_lab_3.pdf` and `arduino_lab_3_sol.rar` (solutions).
* **Term Project**: `MIAE_215_arduino_project.rar` containing the project prompt document (`MIAE_215_arduino_project.doc`).
