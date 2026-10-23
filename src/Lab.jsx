import { useEffect, useRef, useState } from 'react'

const ACCENTS = [
  { name: 'Indigo', a: '#6d7cff', b: '#a46bff' },
  { name: 'Ocean', a: '#22b8cf', b: '#3b82f6' },
  { name: 'Emerald', a: '#10b981', b: '#22c55e' },
  { name: 'Sunset', a: '#f97316', b: '#ef4444' },
  { name: 'Rose', a: '#ec4899', b: '#a855f7' },
]

const ROWS = ['A', 'B', 'C', 'D']
const COLS = 6
const BOOKED = new Set(['A3', 'B1', 'B2', 'C5', 'D4'])
const SEAT_PRICE = 120

function AccentPicker({ label }) {
  const [active, setActive] = useState(0)

  const pick = (i) => {
    setActive(i)
    const root = document.documentElement.style
    if (i === 0) {
      root.removeProperty('--accent')
      root.removeProperty('--accent-2')
      root.removeProperty('--accent-soft')
    } else {
      root.setProperty('--accent', ACCENTS[i].a)
      root.setProperty('--accent-2', ACCENTS[i].b)
      root.setProperty('--accent-soft', `${ACCENTS[i].a}1f`)
    }
  }

  return (
    <div className="accent-picker">
      <span>{label}</span>
      <div role="radiogroup" aria-label={label}>
        {ACCENTS.map((c, i) => (
          <button
            key={c.name}
            role="radio"
            aria-checked={active === i}
            aria-label={c.name}
            className={active === i ? 'on' : ''}
            style={{ background: `linear-gradient(135deg, ${c.a}, ${c.b})` }}
            onClick={() => pick(i)}
          />
        ))}
      </div>
    </div>
  )
}

function SeatPicker({ t }) {
  const [selected, setSelected] = useState([])
  const [booked, setBooked] = useState(false)

  const toggle = (id) => {
    setBooked(false)
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  const book = () => {
    setBooked(true)
    setSelected([])
  }

  return (
    <div className="lab-card">
      <div className="lab-head">
        <h4>{t.title}</h4>
        <span>{t.hint}</span>
      </div>
      <div className="screen" aria-hidden="true" />
      <div className="seats">
        {ROWS.map((r) =>
          Array.from({ length: COLS }, (_, c) => {
            const id = `${r}${c + 1}`
            const taken = BOOKED.has(id)
            const on = selected.includes(id)
            return (
              <button
                key={id}
                className={`seat ${taken ? 'taken' : ''} ${on ? 'on' : ''}`}
                disabled={taken}
                aria-pressed={on}
                aria-label={id}
                onClick={() => toggle(id)}
              >
                {id}
              </button>
            )
          }),
        )}
      </div>
      <div className="lab-foot">
        <div aria-live="polite">
          {booked ? (
            <strong className="ok">{t.booked}</strong>
          ) : selected.length ? (
            <>
              <strong>{t.selected(selected.length)}</strong>
              <span>
                {selected.length * SEAT_PRICE} {t.currency}
              </span>
            </>
          ) : (
            <span>{t.none}</span>
          )}
        </div>
        <button className="btn primary sm" disabled={!selected.length} onClick={book}>
          {t.book}
        </button>
      </div>
    </div>
  )
}

function scorePassword(p) {
  let s = 0
  if (p.length >= 8) s++
  if (/[A-Z]/.test(p)) s++
  if (/\d/.test(p)) s++
  if (/[^A-Za-z0-9]/.test(p) || p.length >= 12) s++
  return s
}

function FormDemo({ t }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [touched, setTouched] = useState(false)
  const [done, setDone] = useState(false)

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  const score = scorePassword(password)
  const passOk = password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)

  const submit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <form className="lab-card" onSubmit={submit} noValidate>
      <div className="lab-head">
        <h4>{t.title}</h4>
        <span>{t.hint}</span>
      </div>
      <label className="field">
        <span>{t.email}</span>
        <input
          type="email"
          value={email}
          placeholder="you@company.com"
          onChange={(e) => {
            setEmail(e.target.value)
            setDone(false)
          }}
          onBlur={() => setTouched(true)}
          aria-invalid={touched && !emailOk}
          dir="ltr"
        />
        {touched && !emailOk && <em className="err">{t.emailError}</em>}
      </label>
      <label className="field">
        <span>{t.password}</span>
        <input
          type="password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => {
            setPassword(e.target.value)
            setDone(false)
          }}
          dir="ltr"
        />
        <div className={`meter s${score}`} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <em className="muted">{password ? t.strength[score] : t.passwordHint}</em>
      </label>
      <div className="lab-foot">
        <div aria-live="polite">{done && <strong className="ok">{t.success}</strong>}</div>
        <button className="btn primary sm" type="submit" disabled={!emailOk || !passOk}>
          {t.submit}
        </button>
      </div>
    </form>
  )
}

function FetchDemo({ t }) {
  const [status, setStatus] = useState('idle')
  const [fail, setFail] = useState(false)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const load = () => {
    setStatus('loading')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus(fail ? 'error' : 'success'), 1400)
  }

  return (
    <div className="lab-card">
      <div className="lab-head">
        <h4>{t.title}</h4>
        <span>{t.hint}</span>
      </div>
      <div className="fetch-box" aria-live="polite" aria-busy={status === 'loading'}>
        {status === 'loading' &&
          [0, 1, 2].map((i) => (
            <div className="skeleton" key={i}>
              <i />
              <i />
            </div>
          ))}
        {status === 'success' &&
          t.trips.map((trip) => (
            <div className="trip" key={trip.city}>
              <strong>{trip.city}</strong>
              <span>
                {trip.price} <small>{t.perPerson}</small>
              </span>
            </div>
          ))}
        {status === 'error' && (
          <div className="fetch-error">
            <span>⚠ {t.error}</span>
            <button type="button" className="btn ghost sm" onClick={load}>
              {t.retry}
            </button>
          </div>
        )}
      </div>
      <div className="lab-foot">
        <label className="check">
          <input type="checkbox" checked={fail} onChange={(e) => setFail(e.target.checked)} />
          <span>{t.fail}</span>
        </label>
        <button className="btn primary sm" onClick={load} disabled={status === 'loading'}>
          {t.load}
        </button>
      </div>
    </div>
  )
}

export default function Lab({ t }) {
  return (
    <>
      <AccentPicker label={t.accent} />
      <div className="lab-grid">
        <SeatPicker t={t.seats} />
        <FormDemo t={t.form} />
        <FetchDemo t={t.fetch} />
      </div>
    </>
  )
}
