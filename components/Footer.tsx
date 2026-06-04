'use client'

const columnLabelStyle = {
  fontSize: '10px',
  letterSpacing: '0.15em',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  textTransform: 'uppercase' as const,
  marginBottom: 'var(--space-6)',
  display: 'block',
}

const linkStyle = {
  fontSize: '14px',
  color: 'var(--color-accent-silver)',
  fontFamily: 'var(--font-body)',
  textDecoration: 'none',
  marginBottom: 'var(--space-4)',
  display: 'block',
  transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="px-6 md:px-12 py-12 md:py-16 max-w-[1440px] mx-auto w-full">
        {/* Main content — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Column 1 — Dati Societari */}
          <div>
            <span style={columnLabelStyle}>Dati Societari</span>
            <div className="flex flex-col">
              <span style={{ ...linkStyle, marginBottom: 'var(--space-3)' }}>
                <strong>CARPENTERIA PASTRO S.R.L.</strong>
              </span>
              <span style={{ ...linkStyle, marginBottom: 'var(--space-3)' }}>
                P.IVA: <strong>0378891​0267</strong>
              </span>
              <span style={{ ...linkStyle, marginBottom: 'var(--space-3)' }}>
                Codice Fiscale: <strong>0378891​0267</strong>
              </span>
              <span style={linkStyle}>
                Vat Europeo: <strong>IT0378891​0267</strong>
              </span>
            </div>
          </div>

          {/* Column 2 — Contatti */}
          <div>
            <span style={columnLabelStyle}>Contatti</span>
            <div className="flex flex-col">
              <a
                href="tel:+390423401219"
                style={{ ...linkStyle, color: 'var(--color-accent-silver)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent-silver-bright)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent-silver)')}
              >
                0423-401219
              </a>
              <span style={linkStyle}>0423-709147 (Fax)</span>
              <a
                href="mailto:ordini@carpenteriapastro.it"
                style={{ ...linkStyle, color: 'var(--color-accent-silver)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent-silver-bright)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent-silver)')}
              >
                ordini@carpenteriapastro.it
              </a>
              <a
                href="mailto:carpenteria.pastro.srl@pec-cfconfart.it"
                style={{ ...linkStyle, color: 'var(--color-accent-silver)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent-silver-bright)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent-silver)')}
              >
                carpenteria.pastro.srl@pec-cfconfart.it
              </a>
            </div>
          </div>

          {/* Column 3 — Indirizzo */}
          <div>
            <span style={columnLabelStyle}>Indirizzo</span>
            <div className="flex flex-col">
              <span style={linkStyle}>Via del Lavoro, 8</span>
              <span style={linkStyle}>31050 Vedelago (TV)</span>
            </div>
          </div>

          {/* Column 4 — Orari */}
          <div>
            <span style={columnLabelStyle}>Orari</span>
            <div className="flex flex-col">
              <span style={linkStyle}>Lun – Ven: 08:00 – 17:30</span>
              <span style={{ ...linkStyle, color: 'var(--color-text-muted)', fontSize: '12px' }}>Sabato e domenica: chiuso</span>
            </div>
          </div>
        </div>

        {/* Bottom — Copyright + Legal links */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 md:pt-10"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p
            className="font-body font-medium text-sm"
            style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--color-text-muted)', lineHeight: 1.6 }}
          >
            © 2026 Carpenteria Pastro S.r.l., Tutti i diritti riservati
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body uppercase transition-colors duration-200"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text-muted)')
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
