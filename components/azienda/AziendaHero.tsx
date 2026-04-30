export default function AziendaHero() {
  return (
    <section
      className="relative min-h-svh lg:min-h-[820px] flex items-center overflow-hidden blueprint-grid"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Gradient overlay top/bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-bg) 0%, transparent 20%, transparent 80%, var(--color-bg) 100%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 text-left relative z-10 max-w-5xl" style={{ transform: 'translateY(-40px)' }}>
        {/* Tag */}
        <div
          className="inline-flex items-center px-4 py-1 mb-6 font-body text-[10px] font-medium uppercase"
          style={{
            backgroundColor: 'rgba(27,79,138,0.15)',
            color: 'var(--color-primary-light)',
            borderLeft: '2px solid var(--color-primary-light)',
            letterSpacing: '0.2em',
          }}
        >
          Chi Siamo
        </div>

        <h1
          className="font-display leading-[1.0] tracking-tight mb-3"
          style={{
            fontSize: 'clamp(44px, 6vw, 96px)',
            fontWeight: 900,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          Tecnologie moderne con {' '}
          <span style={{ color: 'var(--color-primary-light)' }}>
          radici solide.
          </span>
        </h1>

        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: 'clamp(15px, 1vw, 18px)',
            color: 'var(--color-accent-silver)',
            maxWidth: '640px',
            fontWeight: 300,
          }}
        >
          Da oltre tre decenni affianchiamo aziende manifatturiere nella realizzazione di
          lavorazioni su disegno, garantendo continuità produttiva, precisione e affidabilità.
        </p>

      </div>
    </section>
  )
}
