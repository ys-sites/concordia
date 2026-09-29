# Lab 1: Introduction to Arduino & Software Setup
**MIAE 215: Programming for Mechanical, Industrial & Aerospace Engineers**  
**Schedule**: Starts Week #4 · **Type**: Self-Study / Hands-on Lab · **Instructor**: Prof. Brandon W. Gordon

---

## 📄 Lab Instruction Manuals & Code Files
* **[`arduino_lab_1_instructions.pdf`](arduino_lab_1_instructions.pdf)**: Complete 6-page comprehensive laboratory manual covering IDE 2.x setup, USB drivers (CH340/FTDI), ATmega328P architecture, memory types, 115200 baud serial communication, and microsecond clock timing.
* **[`arduino_lab_1_instructions.md`](arduino_lab_1_instructions.md)**: Markdown source of the lab manual.
* **[`arduino_example1_hello_world.ino`](arduino_example1_hello_world.ino)**: Official starter program demonstrating serial output and `exit(0)` lifecycle control.
* **[`arduino_example2_clock_function.ino`](arduino_example2_clock_function.ino)**: Official starter program demonstrating real-time clock reading with `micros()` and high-precision printing.

---

## 🎯 Lab Objectives
1. Install the official **Arduino IDE** (Integrated Development Environment) on Windows or macOS.
2. Establish USB serial communication between the host PC and the **Atmel ATmega328P** microcontroller.
3. Understand the fundamental structure of an Arduino C++ sketch: `setup()` and `loop()`.
4. Master 8-bit AVR data types: 16-bit `int` (`-32,768` to `+32,767`), 32-bit `float`/`double`.
5. Compile, upload, and verify hardware execution using the onboard LED test routine (digital pin 13).

---

## 🛠️ Software Installation & Quick-Start
1. Navigate to the official Arduino download portal: [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software).
2. Download and install **Arduino IDE 2.x** for your operating system.
3. Connect the Arduino Uno to your computer using the USB-A to USB-B cable.
4. Launch the Arduino IDE and configure your board:
   * Go to **Tools $\to$ Board $\to$ Arduino AVR Boards $\to$ Arduino Uno**.
   * Go to **Tools $\to$ Port** and select the active COM port (e.g., `COM3`, `COM4` on Windows, or `/dev/cu.usbmodem...` on macOS).
5. Open and upload [`arduino_example1_hello_world.ino`](arduino_example1_hello_world.ino) to verify serial communication at **115200 baud**.
6. Open and upload [`arduino_example2_clock_function.ino`](arduino_example2_clock_function.ino) to observe real-time clock reading with `micros()`.

---

## 🔍 Verification & Policies
* Attendance for Lab 1 is **completely optional** if your board communicates cleanly and you can run the example programs at home.
* In-person sessions serve as open support hours with Teaching Assistants (TAs).
