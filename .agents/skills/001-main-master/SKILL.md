---
name: 001-main-master
description: "Master director for 001 Main. Directs user prompts to the best functionality in 001 Main (motion video director, REA, UI/UX systems, security hardening, or lesson expansion) and automates the 'update' cycle across all repositories and catalogs."
---

# 001 Main Master Director & Auto-Sync Skill

This skill governs the entire orchestration, routing, and synchronization lifecycle of `Semester 1/001 Main/`. Whenever `001 Main` is referenced, this skill directs the request to the optimal subsystem, executes the complete implementation with zero placeholders, and handles automatic updates across all tracked GitHub repositories and catalogs.

---

## 1. When to Activate

Activate this skill immediately whenever:
1. **User mentions `001 Main`**: (e.g. *"use 001 main to...", "check 001 main", "direct from 001 main"*).
2. **User says "Update"**: (e.g. *"update", "pull from repos", "sync 001 main", "refresh github data"*).
3. **Core Workflow Tasks**:
   - Creating motion lesson video specs or Remotion chalkboard scripts.
   - Building or upgrading UI/UX components, micro-interactions, or landing pages.
   - Investigating app code, binaries, or registering MCP servers via REA.
   - Hardening vibe-coded websites with runtime validation, auth, and security headers.
   - Processing teacher slides into zero-skip pedagogical study guides.

---

## 2. Autonomous Prompt Routing Matrix

When a prompt references `001 Main`, triage and execute through the matching subsystem:

```
                          [User Prompt Referencing 001 Main]
                                          │
    ┌───────────────────┬─────────────────┼──────────────────┬─────────────────┐
    ▼                   ▼                 ▼                  ▼                 ▼
[Motion & Video]  [UI/UX & Web]     [Reverse Eng/MCP]   [App Security]   [Course Lessons]
    │                   │                 │                  │                 │
    ▼                   ▼                 ▼                  ▼                 ▼
motion-video-     react-bits,       rea (morluto/rea)  secure-rules,     lesson-workflow,
director,         impeccable,       MCP server suite,  OWASP AISVS,      Studocu queue,
ode-motion TASTE  taste-skill,      CLI bridge         30 Vibe Security  zero-skip rules
                  100 Vibe Upgrade                     Catalogs
```

### Route A: Video Production & Chalkboard Motion
* **Target Files**: `001 Main/motion-video-director/SKILL.md` & `001 Main/ode-motion-lessons/TASTE.md`.
* **Execution Rules**:
  - Enforce the **6-Chapter Locked Structure**: (1) The Big Idea, (2) Spot It in $\le 10$s, (3) Why It Works, (4) Worked Example, (5) The Traps, (6) Boxed Recap.
  - Apply locked color tokens: Chalkboard (`#182246`), Chalk text (`#E8EDF7`), x/independent (`#38BDF8`), y/dependent (`#FBBF24`), constants (`#F472B6`), verified green (`#34D399`), trap red (`#F87171`).
  - Apply Kokoro-82M TTS specs: voice `af_heart`, speed `0.96`, 0.3s pause between sentences, +0.6s card hold.

### Route B: UI/UX Craft & Web Application Upgrades
* **Target Repos**: `001 Main/react-bits/`, `001 Main/02 - Website Design & UI/impeccable/`, `001 Main/taste-skill/`, `001 Main/ui-ux-pro-max-skill/`, and `001 Main/06 - Research Catalogs/100-vibe-coding-upgrade-repositories.md`.
* **Execution Rules**:
  - Eliminate generic template aesthetics.
  - Use modular component primitives (Radix, Lucide Icons, Sonner toasts, CMDK palettes).
  - Enforce strict client/server state caching (TanStack Query/Table, Zustand).
  - Use KaTeX for mathematical notation and Shiki for code syntax highlighting.

### Route C: Reverse Engineering & MCP Servers
* **Target Repos**: `001 Main/rea/` (*morluto/rea*).
* **Execution Rules**:
  - Bridge local MCP servers into agent configurations (`~/.claude.json`, `.agents/`).
  - Utilize Ghidra 12.1.4 and Frida instrumentation for deep binary and bundle analysis.
  - Trace application features down to runtime code and produce verified working copies.

### Route D: Vibe-Coded Web Security & Hardening
* **Target Catalogs**: `001 Main/06 - Research Catalogs/30-vibe-coding-security-repositories.md` & `001 Main/secure-rules-files/`.
* **Execution Rules**:
  - Add runtime schema validation with **Zod** or **Valibot** on every API endpoint (eliminates mass-assignment and parameter injection).
  - Add **Helmet** security headers (strict CSP, HSTS, X-Content-Type-Options).
  - Enforce rate limiting (`express-rate-limit` or Redis token bucket) on expensive AI routes to stop token-burn attacks.
  - Run secrets detection (`detect-secrets`) before code commits.

### Route E: Course Lessons & Academic Pipelines
* **Target Skill**: `.agents/skills/lesson-workflow/SKILL.md`.
* **Execution Rules**:
  - Apply Zero-Skip Arithmetic ($11 + 7 = 18$).
  - Never skip intermediate steps; show full substitutions with physical units.
  - Replicate output PDF to `Semester 1/Studocu/Need to Upload/` and log in `Studocu_Need_To_Upload.md`.

---

## 3. The Mandatory "Update" Protocol

Whenever the user says **"update"** (or asks to sync/refresh repos):
1. **Run Git Pull Across Core Repositories**:
   Execute safe pulls (with `$env:GIT_TERMINAL_PROMPT = "0"`) across:
   - `001 Main/rea/`
   - `001 Main/insta-reels/`
   - `001 Main/taste-skill/`
   - `001 Main/ui-ux-pro-max-skill/`
   - `001 Main/react-bits/`
   - `001 Main/05 - Security & Standards/AISVS/`
   - `001 Main/secure-rules-files/`
2. **Scan for New Catalog Data**:
   - Check `001 Main/insta-reels/apply_scan_*.py` and `video-catalog.json` for new video analyses, prompts, and verified tools.
   - If new verified creator picks or tools appear, register them in `001 Main/06 - Research Catalogs/`.
3. **Synchronize Skill & System Files**:
   - Update `001 Main/README.md` with newly pulled version tags, commits, or tools.
   - Ensure `rea` CLI / MCP registration is refreshed if upstream releases are detected (`rea update`).
4. **Permanent Anonymity & Git Safety**:
   - Ensure `001 Main/` is **NEVER** staged or pushed to GitHub (`concordia.git`).
   - Retain `.gitignore` rules: `/001 Main/`, `001 Main/`, `001 Main/**`, `**/001 Main/**`.
