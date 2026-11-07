# CampusCode — ReBuild '26 Round 2 Submission

The Round 2 **CampusCode** web platform submission. It brings the public site, student workspace, and organizer/admin tools together in one responsive React application.

---

## 🏗️ Project Architecture

This project is built with **React** and **Vite**. The app is optimized for desktop and includes responsive layouts for smaller screens.

```
campus-rebuild/
├── public/                 # Static assets (brand favicon, illustrations)
├── src/
│   ├── assets/             # Local graphics
│   ├── original_runtime.js # Current application runtime and routes
│   ├── campus-original.css # Theme, page styles, and motion effects
│   └── scroll-reveal.js    # Scroll-triggered section and card reveals
├── public/                 # Static assets
├── index.html              # App entry point and reviewer quick switcher
├── package.json            # Scripts and dependencies
└── package-lock.json       # Locked dependency versions
```

---

## ✨ Platform Features

### Public site and account access

- Public landing page with CampusCode branding, event discovery, and community information.
- Student login and registration with CAPTCHA, password visibility controls, and OTP verification.

### Student workspace (`/student`)

- Overview with activity metrics, deadlines, AI tools, and journey progress.
- Browse events, manage registrations, and connect with potential teammates.
- IdeaCheck AI and RuleBot AI assistance, certificates, digital ID, student guide, notifications, official communication, and profile tools.
- Sections reveal with motion, with reduced-motion preferences respected.

### Organizer and admin workspaces

- Role-based organizer and admin routes for event operations and platform management.

## 🎨 Changes from the Original Site

The original CampusCode site was used as the visual and workflow reference. This Round 2 implementation carries its branding and core public, account, and student experiences into the submission, then extends the student workspace with additional tools and interactions.

- **Expanded student workspace:** Adds event and registration views, teammate matching, IdeaCheck and RuleBot assistants, certificates, digital ID, notifications, official communication, and profile tools.
- **Clearer card and form surfaces:** Gives panels, cards, CAPTCHA, password controls, and confirmation boxes a consistent dark navy treatment with readable cream text and CampusCode accent colors.
- **More motion and feedback:** Adds scroll-triggered fades, staggered cards, animated journey meters, hover feedback, and visible keyboard focus. Reduced-motion settings are respected.
- **Responsive React/Vite implementation:** Organizes the experience into a runnable app with local development and production build commands.

---

## 🛠️ Run from GitHub

Clone the repository, install the locked dependencies, and start the Vite development server:

```powershell
git clone https://github.com/Agastya-Git/-campuscode-rebuild.git
cd .\-campuscode-rebuild
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`. Use the reviewer quick switcher at the bottom to move between the public site, account pages, and student workspace.

To update an existing clone, run `git pull origin main` from the project folder before starting the app.

## 📦 Production Build

```bash
npm run build
```

Vite writes the production site to `dist/`. This generated folder is ignored by Git; deployment services such as Vercel build it from the tracked source files.
