import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
// Prerendered pages carry their language on <html>; the dev server only has the URL to go on.
const lang = document.documentElement.lang === 'ar' || window.location.pathname.startsWith('/ar') ? 'ar' : 'en'
const app = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
)

// Production pages are prerendered (see scripts/prerender.js), so hydrate them; the dev server starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
