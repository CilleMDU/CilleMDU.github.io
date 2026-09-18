# Cecilie Schmidt - Portfolio

Personal portfolio site built with React, Vite and React Router, deployed to GitHub Pages.

Live site: https://cillemdu.github.io

## Tech stack

- Vite + React
- React Router for pages and navigation
- EmailJS for the contact form

## Project structure

- `src/pages` - one folder per page (Home, Projects, Process, About, Contact, etc.)
- `src/components` - shared UI components (Navbar, Footer, Hero, ProjectCards, etc.)
- `src/Data/projects.json` - project data shown on the Projects/Process pages
- `src/img` - images and SVG assets
- `src/PDF` - resume PDFs

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in the browser.

## Build

```bash
npm run build
```

Deployment to GitHub Pages happens automatically via `.github/workflows/deploy.yml` on push to `main`.
