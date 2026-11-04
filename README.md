# CampusCode ReBuild '26 — Dashboard Recreation

A faithful, modern, desktop-first recreation of the **CampusCode** ecosystem for the **ReBuild '26 Dashboard Recreation Hackathon** (Solo Participation).

Live Reference Analyzed: [campus-code-ten.vercel.app](https://campus-code-ten.vercel.app)

---

## 🎯 4 Core Recreated Pages & User Flows

1. **Public Dashboard / Landing Page (`/`)**:
   - Cyber-dark tech grid styling with neon glow orbs.
   - Live navigation bar (`About`, `How It Works`, `Hackathons`, `Community`, `Login`, `Join CampusCode`).
   - Hero banner: *"CODE. COMPETE. BUILD."* with collegiate ecosystem metrics (15K+ Coders, 180+ Campuses, ₹25L+ Grants).
   - Featured Sprints grid with live status badges (`ONGOING`, `UPCOMING`, `COMPLETED`), tags, prize pools, and modal details.
   - Step-by-step interactive workflow, terminal preview, and community action banner.

2. **Login Page (`/login`)**:
   - Cyberpunk animated SVG wave lines, glowing node indicators, and background matrix.
   - Dual-state authentication: **Credentials Sign-in** vs **Forgot Password OTP Recovery**.
   - Interactive human verification captcha with generator refresh.
   - Password reveal toggles and instant validation feedback.

3. **Register Page (`/register`)**:
   - Multi-step onboarding workflow (`Details` ➔ `OTP Verification`).
   - Role switcher: `STUDENT BUILDER` vs `HACKATHON ORGANIZER`.
   - Real-time 4-level password security strength analyzer.
   - 18+ age verification consent check.
   - OTP verification with test code simulator (`262626`).

4. **Student Dashboard (`/student`)**:
   - Faithful collapsible sidebar navigation:
     - `Overview`
     - `Events`
     - `My Events`
     - `HackMate AI` (Teammate skill matching)
     - `IdeaCheck AI` (Architecture & rubric audit engine)
     - `RuleBot AI` (Hackathon FAQ & compliance bot)
     - `Certificates` (Cryptographic verification & downloads)
     - `Digital Card` (Official Collegiate Builder Pass)
     - `Student Guide`
     - `Notifications` (Live unread counter & mark-all-read)
     - `Help & Support`
     - `Profile`
   - Hero welcome card with active sprint tracker.
   - 4-metric counter grid: Registered, Ongoing, Completed, Certificates.
   - Enrich cards: Upcoming deadlines, AI Spotlight, and journey progress bars.

---

## 🛠️ Tech Stack Used

- **Framework**: React 18 + Vite (Ultralight, lightning-fast rendering)
- **Styling**: Custom Desktop-First CSS with Dark-theme Design System, glassmorphism, responsive grid & flexbox layouts.
- **Icons**: Lucide React
- **State Management**: Reactive in-memory state & mock backend datasets.

---

## 🚀 Running Locally

```bash
cd campus-rebuild
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. Use the top switcher bar to instantly switch between all 4 user flows or test the complete interactive journey from Register ➔ Login ➔ Student Dashboard.

---

## 📦 Deployment to Vercel

```bash
cd campus-rebuild
npm run build
npx vercel
```
