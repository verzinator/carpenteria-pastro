export default function CTASection() {
  return (
    <section
      id="contatti"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface-2)' }}
    >
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <h2
          className="font-display tracking-tight"
          style={{
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 900,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Iniziamo a{' '}
          <span style={{ color: 'var(--color-primary-light)' }}>progettare</span>
        </h2>
        <p
          className="font-body mx-auto"
          style={{
            fontSize: 'clamp(15px, 1vw, 17px)',
            color: 'var(--color-text-muted)',
            maxWidth: '52ch',
            fontWeight: 300,
          }}
        >
          Hai un progetto da presentarci? Mettici alla prova.
          <br />
          Analizzeremo i tuoi disegni tecnici per fornirti la migliore soluzione produttiva.
        </p>
        <div className="flex justify-center pt-4">
          <a
            href="mailto:ordini@carpenteriapastro.it"
            className="inline-flex items-center justify-center font-display font-semibold uppercase px-12 transition-all duration-200 hover:opacity-90"
            style={{
              height: '44px',
              background:
                'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary-hover) 100%)',
              color: '#fff',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              letterSpacing: '0.08em',
              boxShadow: '0 20px 40px rgba(27,79,138,0.3)',
            }}
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  )
}
