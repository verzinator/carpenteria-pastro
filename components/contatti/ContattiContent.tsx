'use client'

import { useState } from 'react'

const CONTACT_EMAIL = ''

const labelStyle = {
  fontSize: '9px',
  letterSpacing: '0.2em',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '6px',
}

const inputStyle = {
  width: '100%',
  backgroundColor: 'var(--color-surface-2)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--color-text)',
  fontSize: '14px',
  padding: '10px 14px',
  outline: 'none',
  fontFamily: 'var(--font-body)',
}

const infoLabelStyle = {
  fontSize: '9px',
  letterSpacing: '0.2em',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '4px',
}

const infoValueStyle = {
  fontSize: '14px',
  color: 'var(--color-text)',
  fontFamily: 'monospace',
}

export default function ContattiContent() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  })
  const [privacyRequired, setPrivacyRequired] = useState(false)
  const [privacyMarketing, setPrivacyMarketing] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!(form.nome.trim() && form.email.trim() && form.messaggio.trim() && privacyRequired && privacyMarketing)) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
          messaggio: form.messaggio.trim(),
          privacyRequired,
          privacyMarketing,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitted(true)
        setForm({ nome: '', email: '', telefono: '', messaggio: '' })
      } else {
        setError(data.message || 'Errore nell\'invio della richiesta')
      }
    } catch (err) {
      setError('Errore di connessione. Riprova più tardi.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ backgroundColor: 'var(--color-bg)', paddingBottom: 'var(--space-24)' }}>
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2
                className="font-display"
                style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.01em', marginBottom: 'var(--space-6)' }}
              >
                Dove siamo
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <span style={infoLabelStyle}>Indirizzo</span>
                  <span style={infoValueStyle}>Via Esempio 1, Campodarsego (PD)</span>
                </div>
                <div>
                  <span style={infoLabelStyle}>Telefono</span>
                  <a
                    href="tel:+390000000000"
                    style={{ ...infoValueStyle, color: 'var(--color-primary-light)', textDecoration: 'none' }}
                  >
                    +39 000 000 0000
                  </a>
                </div>
                <div>
                  <span style={infoLabelStyle}>Email</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{ ...infoValueStyle, color: 'var(--color-primary-light)', textDecoration: 'none' }}
                  >
                    {CONTACT_EMAIL || 'info@carpenteriapastro.it'}
                  </a>
                </div>
                <div>
                  <span style={infoLabelStyle}>Orari</span>
                  <div style={infoValueStyle}>
                    <div>Lun – Ven: 08:00 – 17:30</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '13px', marginTop: '2px' }}>Sabato e domenica: chiuso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div id="form">
            <h2
              className="font-display"
              style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.01em', marginBottom: 'var(--space-6)' }}
            >
              Scrivi un messaggio
            </h2>

            {submitted ? (
              <div
                className="font-body"
                style={{
                  padding: 'var(--space-8)',
                  backgroundColor: 'rgba(77,143,212,0.08)',
                  border: '1px solid var(--color-primary-light)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-primary-light)',
                  fontSize: '14px',
                }}
              >
                Richiesta acquisita. Un nostro referente ti contatterà al più presto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nome" style={labelStyle}>Nome e Cognome *</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="telefono" style={labelStyle}>Telefono (opzionale)</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="messaggio" style={labelStyle}>Messaggio / Descrizione del progetto *</label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    rows={5}
                    value={form.messaggio}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                {/* Privacy checkboxes */}
                <div
                  className="flex flex-col gap-4 pt-2"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <label className="flex gap-3 items-start cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={privacyRequired}
                      onChange={(e) => setPrivacyRequired(e.target.checked)}
                      style={{ marginTop: '2px', accentColor: 'var(--color-primary-light)', flexShrink: 0 }}
                    />
                    <span className="font-body" style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      Acconsento al trattamento dei dati personali ai sensi del Reg. (UE) 2016/679 (GDPR).{' '}
                      <a href="/privacy" style={{ color: 'var(--color-primary-light)', textDecoration: 'underline' }}>
                        Leggi informativa privacy
                      </a>{' '}
                      <span style={{ color: 'var(--color-accent-silver)' }}>*</span>
                    </span>
                  </label>

                  <label className="flex gap-3 items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyMarketing}
                      onChange={(e) => setPrivacyMarketing(e.target.checked)}
                      style={{ marginTop: '2px', accentColor: 'var(--color-primary-light)', flexShrink: 0 }}
                    />
                    <span className="font-body" style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      Presto il mio consenso al trattamento dei miei dati personali per ricevere, tramite telefono o via email, comunicazioni commerciali, newsletter, aggiornamenti o inviti relativi a eventi, questionari di soddisfazione, etc.
                    </span>
                  </label>
                </div>

                {error && (
                  <div
                    className="font-body"
                    style={{
                      padding: 'var(--space-6)',
                      backgroundColor: 'rgba(248,113,113,0.1)',
                      border: '1px solid #f87171',
                      borderRadius: 'var(--radius-sm)',
                      color: '#f87171',
                      fontSize: '13px',
                    }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!(form.nome.trim() && form.email.trim() && form.messaggio.trim() && privacyRequired && privacyMarketing) || loading}
                  className="font-display font-semibold uppercase transition-all duration-200"
                  style={{
                    height: '44px',
                    background: (form.nome.trim() && form.email.trim() && form.messaggio.trim() && privacyRequired && privacyMarketing) && !loading
                      ? 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary-hover) 100%)'
                      : 'var(--color-surface-3)',
                    color: (form.nome.trim() && form.email.trim() && form.messaggio.trim() && privacyRequired && privacyMarketing) && !loading ? '#fff' : 'var(--color-text-faint)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    border: 'none',
                    cursor: (form.nome.trim() && form.email.trim() && form.messaggio.trim() && privacyRequired && privacyMarketing) && !loading ? 'pointer' : 'not-allowed',
                  }}
                >
                  {loading ? 'Invio in corso...' : 'Invia richiesta'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
