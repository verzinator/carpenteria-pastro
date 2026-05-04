export default function SettoriCTA() {
  return (
    <section
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2
          className="font-display tracking-tight"
          style={{
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          Hai un disegno? Mandacelo.
        </h2>
        <p
          className="font-body"
          style={{
            fontSize: 'clamp(15px, 1vw, 17px)',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 300,
          }}
        >
          Analizziamo i tuoi file tecnici e ti rispondiamo entro 48 ore lavorative.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
          <a
            href="mailto:ordini@carpenteriapastro.it"
            className="inline-flex items-center justify-center font-display font-semibold uppercase px-10 transition-all duration-200 hover:opacity-90"
            style={{
              height: '44px',
              backgroundColor: '#fff',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              letterSpacing: '0.08em',
            }}
          >
            Invia i tuoi disegni
          </a>
          <a
            href="tel:+390000000000"
            className="inline-flex items-center justify-center font-display font-semibold uppercase px-10 transition-all duration-200"
            style={{
              height: '44px',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              letterSpacing: '0.08em',
            }}
          >
            Chiama i nostri tecnici
          </a>
        </div>
      </div>
    </section>
  )
}
