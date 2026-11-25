# K&M BLUEPRINT
### Bangladesh's First All-in-One HSC Learning Platform

> **Tagline:** Bangladesh's First All-in-One HSC Learning Platform.  
> **Target Audience:** HSC Science Students (Session 2024–2026 / 2028).  
> **Cost Architecture:** ৳0/month Free-First Architecture (Cloudflare Pages, Supabase PostgreSQL with RLS, Google AI Studio Free Tier).

---

## 1. Overview & Core Features

**K&M Blueprint** is an educational platform and smart progress tracking system built specifically for Bangladesh HSC Science students. It is completely independent of the owner's PC, runs 24/7 on Cloudflare Pages and Supabase, and is mobile-first, responsive, and Bangla-capable.

### Core Capabilities:
1. **Complete 13-Subject HSC Educational Library:**
   - বাংলা ১ম পত্র (Bangla 1st Paper)
   - বাংলা ২য় পত্র (Bangla 2nd Paper)
   - English 1st Paper
   - English 2nd Paper
   - ICT (Information & Communication Technology)
   - Physics 1st Paper
   - Physics 2nd Paper
   - Chemistry 1st Paper
   - Chemistry 2nd Paper
   - Biology 1st Paper
   - Biology 2nd Paper
   - Higher Mathematics 1st Paper
   - Higher Mathematics 2nd Paper
2. **Permanent HSC Examination Countdown & HSC Date Monitor AI:**
   - Permanent countdown in `Days : Hours : Minutes : Seconds` in **Asia/Dhaka (UTC+6)** timezone.
   - For unannounced exam dates (such as HSC 2028), displays the verified disclaimer:
     > **"২০২৮ সালের HSC পরীক্ষার তারিখ এখনো আনুষ্ঠানিকভাবে ঘোষণা বা যাচাই করা হয়নি।"**
   - Autonomous background monitor checking Bangladesh Ministry of Education, Dhaka Education Board, and official notice boards without fabricating dates.
3. **Student Study Submission — "What I Studied Today" (আজকের পড়াশোনা জমা দিন):**
   - Natural language Bangla submission area: *"আজ তুমি কী কী পড়েছো এবং কী কী কাজ শেষ করেছো?"*
   - AI/Rule-based parser extracting subject, paper, chapter, topics, practice items, and time.
   - **Mandatory Confirmation Workflow:** Displays "তোমার আজকের পড়াশোনার সারাংশ" with explicit **Confirm & Save**, **Edit**, or **Cancel** before student's confirmed syllabus progress is updated.
4. **Exact Syllabus Completion & Remaining Tracker:**
   - Formula:  
     $$\text{Overall Completion \%} = \frac{\text{Completed Confirmed Syllabus Topics}}{\text{Total Confirmed Syllabus Topics}} \times 100$$  
     $$\text{Overall Remaining \%} = 100\% - \text{Overall Completion \%}$$
   - Subject-wise, paper-wise, chapter-wise, and topic-wise breakdowns.
   - Dedicated "Remaining Syllabus" page highlighting subjects with the most remaining work and "Next Incomplete Topic" action.
5. **Randomized Timed MCQ Examination Center:**
   - Question pool selection, option shuffle with stable answer mapping.
   - Subject-specific defaults (Biology 25q/25m, Physics 25q/25m, Chemistry 25q/25m, Math 25q/25m, ICT 25q/25m, Bangla 1st 30q/30m).
   - Reliable countdown timer (immune to refresh, tab switches, and device clock alterations).
   - Automatic submission on timeout: locks attempt, preserves all answered items, leaves unanswered blank.
   - In-depth mistake explanations: student answer, correct answer, explanation, why wrong, relevant topic, formula, step-by-step solution.
6. **Print the Blueprint — Educational Research AI:**
   - Generates original lessons, definitions, formulas, chemical reactions, diagrams, and model questions.
   - Statuses: `Researching`, `Draft Generated`, `Needs Verification`, `Verified`, `Published`, `Needs Update`, `Rejected`.
   - Free-first: Built-in high-quality offline knowledge base with optional Google Gemini API key integration.
7. **Specialized Knowledge Centers:**
   - **Formula Center:** SI units, symbols, conditions, and worked examples.
   - **Chemical Equation Center:** Balanced organic & inorganic reactions, reagents, observations.
   - **English Learning Center:** Clickable vocabulary cards (synonyms, antonyms, parts of speech) and grammar rules.
   - **Bangla Learning Center:** গদ্য-পদ্য সাহিত্য বিশ্লেষণ ও প্রমিত উচ্চারণ/বানানের ৫টি নিয়ম।
8. **Study Routine, Missions & General Study Timer:**
   - Daily and weekly routines, missions with action steps and priority.
   - 25/5 Pomodoro, stopwatch, and countdown timer (strictly separated from the HSC countdown and MCQ exam timer).

---

## 2. Ownership, Accounts & Privacy

The platform enforces strict Row Level Security (RLS) and local isolation among 3 dedicated accounts:

| Account | Role | PIN | Permissions |
|---|---|---|---|
| **Owner / Academic Director** | `owner` | `9999` | Controls global curriculum, question banks, HSC date configurations, content publishing, and backups. **Cannot** inspect students' private notes or passwords. |
| **Tahmid (Student 1)** | `student` | `1111` | Private syllabus progress, study submissions, exam attempts, personal notes, flashcards, routines. |
| **Nafis (Student 2)** | `student` | `2222` | Private syllabus progress, study submissions, exam attempts, personal notes, flashcards, routines. |

*Privacy Guarantee:* Students never access one another's records.

---

## 3. Technology & ৳0/Month Free-Tier Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti.
- **Hosting:** Cloudflare Pages (Free tier: Unlimited bandwidth, global CDN, 500 builds/month).
- **Database & Auth:** Supabase PostgreSQL with Row Level Security (Free tier: 500 MB DB, 50,000 active users).
- **Background Cron:** Cloudflare Workers Cron Trigger (`functions/cron-date-monitor.ts`).
- **AI Engine:** Google AI Studio Gemini API Free Tier (15 RPM, 1,500 RPD) + local offline K&M rules engine.
- **Offline / PWA:** Service Worker (`public/sw.js`), Web App Manifest (`public/manifest.json`), IndexedDB.

---

## 4. Local Development & Production Build

### Prerequisites
- Node.js v20+ and npm

### Steps
1. Clone repository to root:
   ```bash
   git clone <YOUR_REPO_URL> .
   # or
   git clone <YOUR_REPO_URL> hsc-quest
   cd hsc-quest
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
3. Run production build:
   ```bash
   npm run build
   ```
   The compiled production output is generated in `dist/`.

---

## 5. Cloudflare Pages & Supabase Deployment Guide

### A. Deploy to Cloudflare Pages (Free)
1. Push this repository to GitHub.
2. Log in to [dash.cloudflare.com](https://dash.cloudflare.com).
3. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Select repository and configure build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**. Your production URL will be live at `https://<your-project>.pages.dev` with free SSL and global CDN!

### B. Setup Supabase Database & RLS
1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Copy and run the entire SQL script from `supabase/schema.sql`.
4. The tables, foreign keys, and Row Level Security policies will be created immediately.

---

## 6. Directory Structure

```
hsc-quest/
├── dist/                      # Production build bundle
├── functions/
│   └── cron-date-monitor.ts  # Cloudflare Worker Cron Trigger for HSC announcements
├── public/
│   ├── _redirects             # Cloudflare Pages SPA rewrite rule
│   ├── _headers               # Production security & cache headers
│   ├── manifest.json          # PWA Mobile manifest
│   └── sw.js                  # Service worker for offline caching
├── src/
│   ├── components/            # UI Components & View Handlers
│   │   ├── AccountSwitcherModal.tsx
│   │   ├── BanglaCenterView.tsx
│   │   ├── ChemicalEquationCenterView.tsx
│   │   ├── DashboardView.tsx
│   │   ├── EnglishCenterView.tsx
│   │   ├── ExamResultView.tsx
│   │   ├── ExamRunner.tsx
│   │   ├── FormulaCenterView.tsx
│   │   ├── HscCountdownBanner.tsx
│   │   ├── HscDateMonitorView.tsx
│   │   ├── HscLibraryView.tsx
│   │   ├── LearningWorkspace.tsx
│   │   ├── McqExamCenterView.tsx
│   │   ├── MobileBottomNav.tsx
│   │   ├── Navbar.tsx
│   │   ├── OwnerPanel.tsx
│   │   ├── PrintBlueprintView.tsx
│   │   ├── RemainingSyllabusView.tsx
│   │   ├── Sidebar.tsx
│   │   ├── StudyCoachView.tsx
│   │   ├── StudyTimerView.tsx
│   │   ├── SubmitStudyModal.tsx
│   │   └── TextbookDiscoveryView.tsx
│   ├── context/
│   │   └── AppContext.tsx     # Global React state for accounts, navigation & progress
│   ├── data/
│   │   ├── kmBanglaLessons.ts
│   │   ├── kmChemicalReactions.ts
│   │   ├── kmCurriculum.ts    # 13 Official HSC science subjects, papers, chapters
│   │   ├── kmEnglishLessons.ts
│   │   ├── kmFormulas.ts      # Physics, Chemistry & Math formulas
│   │   ├── kmQuestionBank.ts  # Verified MCQ & CQ questions
│   │   └── kmTextbooks.ts     # Legal NCTB textbooks directory
│   ├── services/
│   │   ├── aiResearchService.ts # Print the Blueprint research & chapter builder
│   │   ├── examService.ts     # Randomized selection, timer & mistake analysis
│   │   ├── hscDateMonitor.ts  # Official date monitor & Asia/Dhaka countdown
│   │   ├── storage.ts         # User isolation & snapshot export/import
│   │   └── submissionService.ts # Bangla study submission natural language parser
│   ├── types/
│   │   └── index.ts           # Unified TypeScript definitions
│   ├── App.tsx                # Main application routing 46 functional views
│   ├── index.css              # Tailwind styles & typography
│   └── main.tsx               # React root entry
├── supabase/
│   └── schema.sql             # Complete PostgreSQL schema with Row Level Security
├── package.json
└── vite.config.ts
```

---

## 7. Acceptance Criteria Verification

- [x] Public production bundle built cleanly in `dist/` with zero TypeScript errors.
- [x] Owner (`9999`) and two students (`1111`, `2222`) isolated with strict privacy.
- [x] All 13 HSC subjects, papers, chapters, and topics organized.
- [x] Randomized timed MCQ examinations with option shuffle, rock-solid timer, auto-submit on timeout, and mistake explanations.
- [x] Permanent HSC countdown in Asia/Dhaka time with unannounced notice for 2028.
- [x] Autonomous background HSC Date Monitor with audit log.
- [x] Student study submission ("What I Studied Today") with natural language parsing and confirmation workflow.
- [x] Exact syllabus completion & remaining percentage calculation.
- [x] Formula Center, Chemical Equation Center, English & Bangla Learning Centers.
- [x] ৳0/month free-tier architecture operating independently of the owner's PC.
