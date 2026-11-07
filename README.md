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

## 🎨 UI and Design Changes in This Implementation

The supplied original-site screenshots show warm off-white pages, large black display type, and purple/lime accents. This implementation uses those screenshots as its visual and workflow reference. The changes below describe the UI refinements in this codebase; the tools listed above describe the current platform, not features newly added in this comparison.

- **Student workspace surfaces:** Changed white panels and nested cards across student sections to dark navy surfaces with warm cream text, subtle borders, and CampusCode accent colors for contrast.
- **Official Communication section:** Restyled its hero panel in navy, improved text contrast, and made the channel label compact.
- **Login and registration controls:** Restyled password visibility buttons, CAPTCHA displays, the age-confirmation row, and the login status/vehicle panel to fit the dark treatment. The overall authentication card layout remains separate from these control changes.
- **Section and card motion:** Added scroll-triggered fade and rise effects with staggered timing, plus fades for student content when it changes. Journey bars in **Overview → Your Journey** fill when their card enters view.
- **Interaction feedback:** Added a subtle card lift and accent border on hover, plus lime keyboard-focus outlines on the landing and student dashboards.
- **Reduced motion:** Disables reveal, progress, and hover movement when the visitor prefers reduced motion.

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
