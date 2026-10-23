# Ahmad Nashawi — Portfolio

Personal portfolio website built with **React** and **Vite**, deployed on GitHub Pages.

🔗 Live: https://ahmadmnashawi.github.io/ · Arabic: https://ahmadmnashawi.github.io/ar/

## Run locally

```bash
npm install
npm run dev
```

## How it works

- All content (English and Arabic) lives in `src/data.js`.
- `src/Lab.jsx` holds the interactive UI Lab demos.
- `npm run build` builds the site, then `scripts/prerender.js` renders both languages to static HTML
  (`dist/index.html` and `dist/ar/index.html`) so search engines and link previews see the full content.
- Every push to `main` deploys through `.github/workflows/deploy.yml`.
