import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en'
const app = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
)

// Production pages are prerendered (see scripts/prerender.js), so hydrate them; the dev server starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
