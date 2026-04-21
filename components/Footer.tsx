'use client'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 max-w-[1440px] mx-auto w-full gap-8">
        <span
          className="font-display uppercase font-bold"
          style={{ fontSize: '18px', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
        >
          PASTRO
        </span>

        <p
          className="font-body font-medium uppercase text-center md:text-left"
          style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}
        >
          © 2025 Carpenteria Pastro S.r.l., Tutti i diritti riservati
        </p>

        <div className="flex gap-8 items-center">
          {[
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Cookie Policy', href: '/cookie-policy' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body font-medium uppercase transition-colors duration-200 hover:underline underline-offset-4"
              style={{
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
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
          <a
            href="/en"
            className="font-display font-bold uppercase"
            style={{
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: 'var(--color-primary-light)',
            }}
          >
            EN / IT
          </a>
        </div>
      </div>
    </footer>
  )
}
