// Renders the app to static HTML for each language after `vite build`,
// so the content is readable by search engines and link previews without JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const server = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const { render, content, SITE_URL } = server

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(lang) {
  const c = content[lang]
  const url = lang === 'ar' ? `${SITE_URL}ar/` : SITE_URL
  let html = template
    .replace('<html lang="en">', `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(c.meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(c.meta.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(c.meta.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(c.meta.description)}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${escape(c.meta.title)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${escape(c.meta.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:locale" content=")[^"]*/, `$1${lang === 'ar' ? 'ar_SA' : 'en_US'}`)
    .replace('<div id="root"></div>', `<div id="root">${render(lang)}</div>`)
  // The Arabic page lives one folder deeper, so relative asset paths need one more "../".
  if (lang === 'ar') html = html.replace(/(src|href)="\.\/(?!\/)/g, '$1="../')
  return html
}

fs.writeFileSync(path.join(dist, 'index.html'), page('en'))
fs.mkdirSync(path.join(dist, 'ar'), { recursive: true })
fs.writeFileSync(path.join(dist, 'ar', 'index.html'), page('ar'))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Prerendered dist/index.html and dist/ar/index.html')
