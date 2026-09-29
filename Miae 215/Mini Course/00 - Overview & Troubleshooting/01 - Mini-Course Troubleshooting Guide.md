# MIAE 215 · Mini-Course Troubleshooting Guide
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)
**Source**: [MECH 215 Mini Course Troubleshooting Guide](https://users.encs.concordia.ca/~bwgordon/mech215_mini_troubleshooting.html)

---

## Table of Contents
1. [Security Warning: "File can't be downloaded securely"](#1-security-warning-file-cant-be-downloaded-securely)
2. [Video Player & Audio Playback Diagnostics](#2-video-player--audio-playback-diagnostics)
3. [Operating System Compatibility & Windows 10/11](#3-operating-system-compatibility--windows-1011)
4. [Compiler Detection & The Infamous "Plus Button"](#4-compiler-detection--the-infamous-plus-button)
5. [Virtual Machines & Parallels UNC Path Errors](#5-virtual-machines--parallels-unc-path-errors)
6. [Top IDE Runtime Traps & Solutions](#6-top-ide-runtime-traps--solutions)

---

## 1. Security Warning: "File can't be downloaded securely"

When downloading `.exe`, `.rar`, or `.cpp` course materials from the Concordia university web servers via Google Chrome or Microsoft Edge, you may receive a browser security banner stating:
> *"File can't be downloaded securely"*

### Resolution:
1. Right-click the warning banner in your browser's download manager.
2. Select **"Keep"** (or click the three dots $\dots 	o$ **"Keep anyway"**).
3. The university HTTP server is trusted; your browser flags it simply because the download link uses standard HTTP instead of HTTPS.

---

## 2. Video Player & Audio Playback Diagnostics

Some students experience missing sound when playing lecture recordings:
1. **Lesson #1 Has No Audio**: Prof. Gordon created the Lesson #1 installation screen captures without audio narration (except for `codelite_mac_install_more.mp4`). Audio narration begins in **Lesson #2**.
2. **Download First**: Do not attempt to stream high-bitrate video directly through browser tabs. Right-click the video link $	o$ select **"Save link as..."** $	o$ save to disk.
3. **Recommended Video Player**: Use **VLC Media Player** ([videolan.org](https://www.videolan.org/vlc/)). Standard Windows Media Player lacks certain MPEG-4 audio codecs. Alternate players: 5KPlayer (Mac/Win), KMPlayer (Win).

---

## 3. Operating System Compatibility & Windows 10/11

If you experience crashes when running legacy IDE installers on Windows:
* Upgrade your operating system to a modern 64-bit release of Windows 10 or Windows 11. Older versions (Windows 8/8.1) have buggy runtime compatibility layers for Mingw toolchains.
* If you cannot install software due to administrative privileges on a university laptop, use the **portable Code::Blocks package** located in:
  `05 - Software & Flowcharts/CodeBlocks_17.12_portable/codeblocks.exe`

---

## 4. Compiler Detection & The Infamous "Plus Button"

If your IDE reports `No compiler detected` or `Can't find compiler executable in search path`:
1. In Code::Blocks, navigate to:  
   **Settings $	o$ Compiler... $	o$ Selected Compiler: GNU GCC Compiler $	o$ Toolchain Executables**.
2. Verify that **Compiler's installation directory** points to the MinGW folder:
   `C:\Program Files\CodeBlocks\MinGW` (or `CodeBlocks_17.12_portable\MinGW`).
3. Click **"Auto-detect"**.
4. In CodeLite on macOS, if the compiler is missing, install the Apple Command Line Developer Tools:
   ```bash
   xcode-select --install
   ```
   Then open CodeLite $	o$ Settings $	o$ Build Settings $	o$ click the green **"+" (Plus) button** at time 5:12 in the demo video to auto-scan for `g++`.

---

## 5. Virtual Machines & Parallels UNC Path Errors

When running Windows inside **Parallels Desktop**, **VMware Fusion**, or **VirtualBox** on a Mac:
* **The Error**: `UNC paths are not supported. Defaulting to Windows directory.`
* **The Cause**: Mac network shared folders are exposed to Windows as UNC network shares (`\\mac\Home\Desktop`). The GCC compiler cannot compile directly on network shares.
* **The Fix**: Create your workspace and project folder directly on the virtual Windows `C:\` drive (e.g., `C:\miae215_projects\`). Never place projects on the Mac Desktop or shared iCloud folders when using a virtual machine.

---

## 6. Top IDE Runtime Traps & Solutions

### Trap A: Console Closes Instantly
* **Cause**: Your program finished executing and the OS terminated the terminal window.
* **Solution**: Always place `getchar();` immediately before `return 0;` inside `main()`.

### Trap B: "Target is up to date" (Old Output Still Displays)
* **Cause**: You clicked "Run" without clicking "Build" after modifying source code.
* **Solution**: Press **F9** (Build and Run) or click the yellow gear with green play icon.

### Trap C: Antivirus False Positive
* **Cause**: Windows Defender or Avast may sandbox your freshly compiled `program.exe` because it has no commercial digital signature.
* **Solution**: Add an exclusion for your project directory in Windows Security.
