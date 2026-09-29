# 🎓 Concordia University Engineering Portal & Exam Prep Hub

[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Academic-blue.svg)](#)

A centralized, interactive educational repository and web portal for Concordia University engineering students covering **ENGR 213**, **INDU 211**, **MIAE 215**, and **MIAE 221**. Includes over **140+ organized curriculum documents**, an extensive bank of **120+ multiple-choice practice questions**, and a **20-Question Brain-Programming Exam Drill** with step-by-step derivations and common exam trap analysis.

---

## 🚀 Quick Deploy to Vercel

Deploy this entire portal to Vercel with zero configuration:

1. Import this repository (`https://github.com/ys-sites/concordia.git`) into **[Vercel](https://vercel.com/)**.
2. **Build Settings** are preconfigured via root [`vercel.json`](./vercel.json):
   - **Framework Preset**: `Vite`
   - **Build Command**: `cd "001 Main" && npm install && npm run build`
   - **Output Directory**: `001 Main/dist`
3. Click **Deploy**!

---

## 🏛️ Curriculum & Courses Covered

| Course Code | Course Title | Curriculum Highlights | Practice Bank |
| :--- | :--- | :--- | :---: |
| **ENGR 213** | **Applied Ordinary Differential Equations** | First/second order ODEs, integrating factors, Bernoulli substitutions, linear population models, Laplace transforms. | **30 Questions** |
| **INDU 211** | **Introduction to Production & Manufacturing** | Lean Six Sigma, EOQ inventory modeling, CPM/PERT project networks, assembly line balancing, GenAI industrial integration. | **30 Questions** |
| **MIAE 215** | **Programming for Mechanical & Industrial Engineers** | C++ memory architecture, bitwise bitmasks, nested control logic, arrays, Flowgorithm, and Arduino mechatronics. | **30 Questions** |
| **MIAE 221** | **Materials Science** | Crystal unit cells (BCC/FCC/HCP), APF calculations, Lennard-Jones potential wells, Miller indices, ionic bonding. | **30 Questions** |

---

## ✨ Features

- **📁 Local Directory Tree Explorer**: Documents are organized within their exact course folders (`00 - Overview`, `01 - Lecture Notes`, `02 - Comprehensive Guides`, `03 - 1-Page Rapid Reviews`, `04 - Practice Problems`, etc.) with expandable accordion sections and tree branch guides (`├──` / `└──`).
- **🧠 20-Question Brain-Programming Cycle**: Randomly cycles 20 exam-caliber questions per session, dynamically reinforcing core intuition with real-time audio synthesized feedback.
- **📐 Step-by-Step Derivations & KaTeX Formulas**: Every question includes a full mathematical proof and highlights common traps tested on midterms and finals.
- **📄 Embedded PDF Reader & Direct CDN Access**: View documents instantly inside the modal reader or download them directly.
- **🎨 Off-White Clean Design System**: High-contrast, WCAG-compliant styling crafted with Slate typography (`#0f172a`), emerald/rose feedback states, and glassmorphic elevation cards.

---

## 💻 Local Development

Clone the repository and run the development server:

```bash
# Clone repository
git clone https://github.com/ys-sites/concordia.git
cd concordia

# Navigate to web application
cd "001 Main"

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Visit **`http://localhost:5173/`** in your browser.

---

## 📦 Building for Production

```bash
# From within "001 Main"
npm run build

# Or from the repository root
npm run build
```

This compiles TypeScript, generates the optimized static bundle, and packages all 150+ course curriculum assets into `dist/courses/` ready for Vercel edge delivery.

---

## 🛡️ License & Academic Integrity
All course outlines, notes, and problem sets belong to their respective professors and Concordia University. Intended for student study and exam preparation.
