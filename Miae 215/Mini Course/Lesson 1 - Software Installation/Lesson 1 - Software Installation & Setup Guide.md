# MIAE 215 · Mini-Course Lesson 1
# Software Installation & Development Environment Setup
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Source**: [Lesson 1 Web Page](https://users.encs.concordia.ca/~bwgordon/lesson1_software_installation.html)

---

## Table of Contents
1. [Required Software Package Checklist](#1-required-software-package-checklist)
2. [The Code::Blocks IDE & MinGW Compiler Toolchain](#2-the-codeblocks-ide--mingw-compiler-toolchain)
3. [Text Editors & Archive Utilities](#3-text-editors--archive-utilities)
4. [Verification: Building Your First Test Executable](#4-verification-building-your-first-test-executable)

---

## 1. Required Software Package Checklist

Before writing C++ programs, engineers require five foundational software utilities:

| Tool | Recommended Software | Function in MIAE 215 |
| :--- | :--- | :--- |
| **C++ IDE & Compiler** | **Code::Blocks 17.12 / 20.03** (with MinGW) | Integrated development environment, syntax highlighting, compiler & debugger. |
| **Video Player** | **VLC Media Player** ([videolan.org](https://www.videolan.org/vlc/)) | Plays high-bitrate `.mp4` lecture screencasts with full audio codec support. |
| **PDF Reader** | **Adobe Acrobat Reader** ([get.adobe.com/reader](https://get.adobe.com/reader/)) | Renders comprehensive topic guides, slides, and syllabus tables without font glitches. |
| **Programmer's Editor** | **Notepad++** ([notepad-plus-plus.org](https://notepad-plus-plus.org/)) | Lightweight source code inspection, line numbering, and script editing. |
| **Archive Utility** | **7-Zip** ([7-zip.org](http://www.7-zip.org/)) or **WinRAR** | Extracts `.rar` and `.zip` weekly course packs and software bundles. |

---

## 2. The Code::Blocks IDE & MinGW Compiler Toolchain

The primary recommended development platform for MIAE 215 is **Code::Blocks** paired with the **MinGW GNU GCC/G++** compiler.

```
┌────────────────────────────────────────────────────────┐
│                   CODE::BLOCKS IDE                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Source Editor (main.cpp) with Syntax Coloring    │  │
│  └──────────────────────────┬───────────────────────┘  │
│                             │ Press F9 (Build & Run)   │
│  ┌──────────────────────────▼───────────────────────┐  │
│  │ MinGW GCC/G++ Compiler (gcc.exe, g++.exe)        │  │
│  └──────────────────────────┬───────────────────────┘  │
│                             │ Generates Machine Code   │
│  ┌──────────────────────────▼───────────────────────┐  │
│  │ Windows Console Terminal (program.exe)           │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

### Installation Steps on Windows
1. Download `codeblocks-17.12mingw-setup.exe` (or `codeblocks-20.03mingw-setup.exe`).
2. **Crucial**: Ensure you download the installer that includes **`mingw`** in the filename! A setup without MinGW includes only the editor without the actual C++ compiler.
3. Run the installer and accept default settings (installing to `C:\Program Files\CodeBlocks`).
4. **Portable Alternative**: If you cannot install software on your machine, a standalone pre-configured portable version is provided in this repository at:
   `05 - Software & Flowcharts/CodeBlocks_17.12_portable/`

---

## 3. Text Editors & Archive Utilities

* **Notepad++**: Prof. Gordon demonstrates Notepad++ for quickly reading `.cpp` files without launching a heavy IDE. Download demo video: `http://users.encs.concordia.ca/~bwgordon/notepad++_demo.mp4`.
* **7-Zip / WinRAR**: All course code packs from the professor are distributed as `.rar` archives. Extract files using right-click $	o$ "Extract Here".

---

## 4. Verification: Building Your First Test Executable

To verify that your compiler is operating correctly:
1. Open Code::Blocks $	o$ **File $	o$ New $	o$ Project...**
2. Select **Console Application** $	o$ choose **C++**.
3. Set project title as `test_installation` and save in a clean directory on your local drive.
4. Open `main.cpp` and press **F9** (Build and Run).
5. If a black console window appears displaying `"Hello world!"`, your toolchain is 100% operational!
