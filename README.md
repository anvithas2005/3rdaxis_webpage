# 3Dr Axis Labs – Experiential Tech Studio

Marketing site for a Kerala-based innovation lab specializing in FPV drones, robotics, rapid prototyping, and software products. This repository contains a React front end (single-page layout) and a small FastAPI backend scaffold under `backend/`.

## ✨ What’s here

- A modern single-page site with: Home (Hero), About, Services, Gallery, Achievements, and Contact sections.
- Reusable components under `src/components/` and modular styling using CSS Modules in `src/styles/`.
- Framer Motion micro-interactions and a reusable `AnimatedBackground` component for subtle particle/blob effects.
- A FastAPI backend scaffold in `backend/` for API endpoints (optional local use).

## Tech Stack

- Front end: React (Create React App), React Router
- Styling: CSS Modules
- Animation: Framer Motion
- Backend: FastAPI (optional)

## Quick Start (Frontend)

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm start
```

By default the app runs on `http://localhost:3000` or on the next available port (see terminal output). The dev server supports hot reload.

## Backend (optional)

```powershell
cd backend
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Update `src/services/api.js` base URL if you run the backend locally.

## Notable files & where to edit

- `src/pages/Home.jsx` — page composition (imports `Hero`, `About`, etc.).
- `src/components/Hero.jsx` — hero layout, CTAs, and stats.
- `src/components/AnimatedBackground.jsx` — centralized particle/blob background used across sections.
- `src/styles/Hero.module.css` — hero typography, CTA and stat styles (updated during recent work).
- `src/styles/AnimatedBackground.module.css` — background visuals and tuning.

## Recent UI notes

- The hero title can be found in `src/components/Hero.jsx` and was split into two lines for better readability. The color is set in `src/styles/Hero.module.css`.
- `AnimatedBackground` is intentionally lightweight (tunable particle count/density in the component) — reduce particles on low-end devices by editing `src/components/AnimatedBackground.jsx`.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start frontend dev server |
| `npm run build` | Create production build in `build/` |
| `npm test` | Run tests (if present) |

## Contributing

If you plan to extend the site:

- Keep styling modular (use the component CSS modules in `src/styles/`).
- Centralize background/animation changes in `AnimatedBackground.jsx` to avoid duplication.
- Use Framer Motion for micro-interactions (consistent patterns are used across components).

## License & notes

This project began from Create React App and contains custom assets and styles. Verify licensing with stakeholders before publishing.

---

If you want, I can expand this README with deployment steps (Netlify/Vercel), environment variable examples, or a short style guide for components. Tell me which you'd like next.
