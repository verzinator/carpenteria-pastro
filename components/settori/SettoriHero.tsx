export default function SettoriHero() {
  return (
    <section
      className="relative min-h-[820px] flex items-center overflow-hidden blueprint-grid"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-bg) 0%, transparent 20%, transparent 80%, var(--color-bg) 100%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
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
          I NOSTRI SETTORI
        </div>

        <h1
          className="font-display leading-[1.0] tracking-tight mb-6"
          style={{
            fontSize: 'clamp(44px, 6vw, 96px)',
            fontWeight: 900,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          Ogni settore ha le sue esigenze.{' '}
          <span style={{ color: 'var(--color-primary-light)' }}>Noi le conosciamo.</span>
        </h1>

        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: 'clamp(15px, 1vw, 18px)',
            color: 'var(--color-accent-silver)',
            maxWidth: '580px',
            fontWeight: 300,
          }}
        >
          Strutture metalliche, componenti su commessa e carpenteria pesante
          per i settori industriali più esigenti. Un unico interlocutore tecnico.
        </p>
      </div>
    </section>
  )
}
