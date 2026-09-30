# 🎓 Concordia University Engineering Portal & Exam Prep Hub

[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Academic-blue.svg)](#)

A centralized, interactive educational repository and web portal for Concordia University engineering students covering **ENGR 213**, **INDU 211**, **MIAE 215**, and **MIAE 221**. It holds the course's theory material (teacher lecture notes, textbook chapters, expanded topic guides and review sheets), a bank of **522 multiple-choice practice questions** grounded in the teachers' notes and previous years' quizzes and exams, and **per-course drills** with step-by-step worked solutions that explain exactly where a wrong answer comes from.

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
| **ENGR 213** | **Applied Ordinary Differential Equations** | Ch. 1–2 (Lectures 1–6): terminology, IVPs, direction fields, separable, linear, exact, substitutions, linear models; past-paper practice (Winter 2025 quizzes and Test 1). | **110 Questions** |
| **INDU 211** | **Introduction to Production & Manufacturing** | All 13 lecture decks with the textbook chapters: IE foundations, manufacturing & break-even, location & layout, material handling & routing, operations planning (EOQ, MRP, JIT, forecasting), linear programming, queuing, quality control, work design & human factors, project management; 2019 midterm and Fall 2020 final practice. | **175 Questions** |
| **MIAE 215** | **Programming for Mechanical & Industrial Engineers** | Build process, variable types, expressions & operators, control statements & loops; adapted Fall 2023 midterm program-output problems. | **114 Questions** |
| **MIAE 221** | **Materials Science** | Lectures 1–7: classes of materials, bonding, crystal structures, linear/planar density, X-ray diffraction, point defects, solid solutions, dislocations; 2025 midterm practice. | **123 Questions** |

---

## ✨ Features

- **📁 Local Directory Tree Explorer**: Documents are organized within their exact course folders (`00 - Overview`, `01 - Lecture Notes`, `02 - Comprehensive Guides`, `03 - 1-Page Rapid Reviews`, `04 - Practice Problems`, etc.) with expandable accordion sections and tree branch guides (`├──` / `└──`).
- **🧠 Midterm, Final & Chapter Drills**: Pick a course, then Midterm Review, Final Review (INDU 211), one chapter, or Past Papers. Up to 20 questions per drill, never mixed across courses, with shuffled answer order.
- **🔍 Wrong-answer diagnosis**: every calculation question explains the specific slip that produces each wrong option, then reveals the worked solution one step at a time so you can compare it with your own working.
- **📐 Step-by-step worked solutions in real maths**: each line of working is a typeset equation (KaTeX, bundled with the site), ending in a boxed answer and the common exam trap.
- **🔒 Study material only**: the site carries theory notes and practice problems only. Quiz, test and exam papers, assignment and lab handouts, homework solutions, Studocu downloads and the term paper are never shown or deployed (see `website/src/data/localOnly.ts`).
- **📄 PDF reader that works on phones**: documents are rendered page by page with PDF.js (zoom, page jump, range loading for large textbooks) instead of relying on the browser's PDF plug-in.
- **🧾 Build-time document registry**: the list of documents is generated from the same filter that copies files into the deployment, so every listed PDF is actually published.
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
