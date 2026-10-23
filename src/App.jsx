import { useEffect, useState } from 'react'
import { profile, heroStats, journey, experience, projects, otherProjects, skills, education, languages } from './data'
import './App.css'

const NAV = ['about', 'experience', 'projects', 'skills', 'contact']

const Icon = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  ),
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
    } catch {
      // storage unavailable
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          AN<span>.</span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {id}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn primary talk-btn" onClick={() => setOpen(false)}>
            Let's talk
          </a>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? Icon.sun : Icon.moon}
          </button>
          <button className={`menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="dot" /> Open to Front-End roles
          </p>
          <p className="hero-name">{profile.name}</p>
          <p className="hero-role">
            {profile.role} · {profile.location}
          </p>
          <h1>
            {profile.headline[0]} <span className="gradient">{profile.headline[1]}</span>
          </h1>
          <p className="hero-sub">{profile.intro}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">
              View my work
            </a>
            <a href={profile.cv} className="btn ghost" download>
              {Icon.download} Download CV
            </a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              {Icon.github}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              {Icon.linkedin}
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              {Icon.mail}
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <div className="photo-ring">
            <img src={profile.avatar} alt={profile.name} width="320" height="320" />
          </div>
          <div className="float-card fc-1">⚛️ React · TypeScript</div>
          <div className="float-card fc-2">🎓 150+ students taught</div>
        </div>
        <ul className="hero-stats">
          {heroStats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="section-title reveal">
      <span>{kicker}</span>
      <h3>{title}</h3>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle kicker="01 · About" title="A bit about me" />
        <div className="about-grid">
          <div className="about-text reveal">
            <p>{profile.summary}</p>
            <ul className="meta">
              <li>
                {Icon.pin} {profile.location}
              </li>
              <li>
                {Icon.mail} <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
            <div className="edu-card">
              <div>
                <strong>{education.degree}</strong>
                <span>{education.school}</span>
              </div>
              <em>{education.period}</em>
            </div>
            <div className="langs">
              {languages.map((l) => (
                <span key={l.name}>
                  <strong>{l.name}</strong> · {l.level}
                </span>
              ))}
            </div>
          </div>
          <ol className="journey reveal">
            {journey.map((j, i) => (
              <li key={j.stage}>
                <span className="journey-num">0{i + 1}</span>
                <div>
                  <span className="journey-stage">{j.stage}</span>
                  <h4>{j.title}</h4>
                  <p>{j.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle kicker="02 · Experience" title="Where I've worked" />
        <ol className="timeline">
          {experience.map((job) => (
            <li className="reveal" key={job.title + job.company}>
              <div className="tl-head">
                <div>
                  <h4>{job.title}</h4>
                  <span className="company">{job.company}</span>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <div className="metrics">
                {job.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle kicker="03 · Projects" title="Things I've built" />
        <div className="projects">
          {projects.map((p, i) => (
            <article className="project reveal" key={p.name}>
              <div className="project-top">
                <span className="project-cat">
                  0{i + 1} · {p.category}
                </span>
                <a className="project-link" href={p.repo} target="_blank" rel="noreferrer">
                  {Icon.github} Public repo {Icon.arrow}
                </a>
              </div>
              <h4>{p.name}</h4>
              <p className="tagline">{p.tagline}</p>
              <div className="metrics">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="case">
                <div>
                  <span className="case-label">Challenge</span>
                  <p>{p.challenge}</p>
                </div>
                <div>
                  <span className="case-label">Solution</span>
                  <p>{p.solution}</p>
                </div>
              </div>
              <ul className="features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h4 className="sub-heading reveal">Other noteworthy projects</h4>
        <div className="mini-grid">
          {otherProjects.map((p) => (
            <a className="mini reveal" key={p.name} href={p.repo} target="_blank" rel="noreferrer">
              <div className="mini-top">
                {Icon.github}
                <span className="mini-arrow">{Icon.arrow}</span>
              </div>
              <h5>{p.name}</h5>
              <p>{p.desc}</p>
              <span className="mini-tech">{p.tech}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle kicker="04 · Skills" title="My toolbox" />
        <div className="skills">
          {skills.map((s) => (
            <div className="skill-group reveal" key={s.group}>
              <h5>{s.group}</h5>
              <div className="chips">
                {s.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact reveal">
          <span className="kicker">05 · Contact</span>
          <h3>Need a front-end developer who ships clean, fast UIs?</h3>
          <p>
            I'm open to Front-End Developer roles and freelance projects. Send me a message — I usually reply within a
            day.
          </p>
          <button className="email-pill" onClick={copyEmail}>
            {Icon.mail}
            <span>{profile.email}</span>
            <em>{copied ? 'Copied!' : 'Copy'}</em>
          </button>
          <div className="hero-cta center">
            <a href={`mailto:${profile.email}`} className="btn primary">
              {Icon.mail} Send an email
            </a>
            <a href={profile.linkedin} className="btn ghost" target="_blank" rel="noreferrer">
              {Icon.linkedin} LinkedIn
            </a>
            <a href={profile.github} className="btn ghost" target="_blank" rel="noreferrer">
              {Icon.github} GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  useReveal()

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            Designed & built by {profile.name} with React · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}
