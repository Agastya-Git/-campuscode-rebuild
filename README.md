# CampusCode ReBuild '26 — Dashboard Recreation

A faithful, desktop-first recreation of the **CampusCode** platform for **ReBuild '26** (Round 1).

---

## 🏗️ Project Architecture

This project is built using **React 18** and **Vite**, structured desktop-first to faithfully reproduce the layout, design system, and user flows of CampusCode.

```
campus-rebuild/
├── public/                 # Static assets (brand favicon, illustrations)
├── src/
│   ├── assets/             # Icons & graphics
│   ├── original_runtime.js # Core application runtime & client-side route handlers
│   ├── campus-original.css # CampusCode design system & typography tokens
│   ├── mockData.js         # Offline student dataset & hackathon schedule
│   └── App.jsx             # Root layout & page coordination
├── index.html              # Entry HTML with official fonts & reviewer quick-bar
└── package.json            # Dependencies (React, Vite)
```

---

## 🎯 4 Core Recreated Pages (Round 1 Scope)

1. **Landing Page (`/`)**:
   - Three-slashes brand logo (`#111111`, `#7665ff`, `#a8e62e`).
   - "BUILD. COMPETE. SHIP." typography hierarchy.
   - Interactive sections: *Where Students Build*, *How We Work*, *Recent Hackathons*, and *Find Your People*.

2. **Login Page (`/login`)**:
   - Split layout with *ENTER THE ARENA* background.
   - Institutional email & password inputs with visibility toggle.
   - Dynamic captcha verification code with refresh action.
   - Password reset / OTP recovery flow.

3. **Register Page (`/register`)**:
   - *JOIN THE ARENA* onboarding flow.
   - Student role indicator and 18+ verification agreement.
   - Captcha check and OTP delivery step.

4. **Student Dashboard (`/student`)**:
   - Sidebar workspace navigation.
   - **Overview**: Active sprint (*ReBuild '26*), metrics counter, upcoming deadlines, and AI spotlight.
   - **My Events**: Displays joined events (*ReBuild '26*, *FirstCommit '26 Quiz 2.0*, *FirstCommit '26 Quiz*).
   - **Events**: Directory of active and upcoming campus competitions.

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser. Use the quick switcher at the bottom to jump between pages, or walk through the interactive user flow.
