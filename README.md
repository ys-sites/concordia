# 🎓 Concordia University Engineering Portal & Exam Prep Hub

[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Academic-blue.svg)](#)

A centralized, interactive educational repository and web portal for Concordia University engineering students covering **ENGR 213**, **INDU 211**, **MIAE 215**, and **MIAE 221**. Includes over **140+ organized curriculum documents**, a bank of **146 multiple-choice practice questions** built only from the teachers' lecture notes, and **per-course drills** (midterm review or a single chapter) with step-by-step solutions and common exam traps.

---

## 🚀 Quick Deploy to Vercel

Deploy this entire portal to Vercel with zero configuration:

1. Import this repository (`https://github.com/ys-sites/concordia.git`) into **[Vercel](https://vercel.com/)**.
2. **Build Settings**: Vercel automatically detects the **Vite** framework at the root:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
3. Click **Deploy**!

---

## 🏛️ Curriculum & Courses Covered

| Course Code | Course Title | Curriculum Highlights | Practice Bank |
| :--- | :--- | :--- | :---: |
| **ENGR 213** | **Applied Ordinary Differential Equations** | Ch. 1–2 (Lectures 1–6): terminology, IVPs, direction fields, separable, linear, exact, substitutions, linear models. | **33 Questions** |
| **INDU 211** | **Introduction to Production & Manufacturing** | Ch. 1–5: IE foundations, manufacturing engineering & break-even, facility location & layout, material handling & routing. | **37 Questions** |
| **MIAE 215** | **Programming for Mechanical & Industrial Engineers** | Build process, variable types, expressions & operators, control statements & loops. | **41 Questions** |
| **MIAE 221** | **Materials Science** | Lectures 1–5: classes of materials, atomic structure & bonding, crystal structures, density, Miller indices. | **35 Questions** |

---

## ✨ Features

- **📁 Local Directory Tree Explorer**: Documents are organized within their exact course folders (`00 - Overview`, `01 - Lecture Notes`, `02 - Comprehensive Guides`, `03 - 1-Page Rapid Reviews`, `04 - Practice Problems`, etc.) with expandable accordion sections and tree branch guides (`├──` / `└──`).
- **🧠 Midterm & Chapter Drills**: Pick a course, then Midterm Review or one chapter. Up to 20 questions per drill, never mixed across courses, with shuffled answer order and audio feedback.
- **🔒 Study material only**: Assignment/lab handouts, solutions and the term paper are never shown or deployed (see `src/data/localOnly.ts`).
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

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Visit **`http://localhost:5173/`** in your browser.

---

## 📦 Building for Production

```bash
npm run build
```

This compiles TypeScript, generates the optimized static bundle, and packages all 150+ course curriculum assets into `dist/courses/` ready for Vercel edge delivery.

---

## 🛡️ License & Academic Integrity
All course outlines, notes, and problem sets belong to their respective professors and Concordia University. Intended for student study and exam preparation.
