export default function IntroSection() {
  const stats = [
    { value: '13 m', label: 'Lunghezza max' },
    { value: '3', label: 'Reparti specializzati' },
    { value: 'DXF\nDWG / STEP', label: 'Formati nativi', multiline: true },
  ]

  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: 'var(--space-24)',
        paddingBottom: 'var(--space-24)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-6">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            Come lavoriamo
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 4vw, 51px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            Flusso produttivo integrato
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{
              fontSize: 'clamp(15px, 1vw, 17px)',
              color: 'var(--color-accent-silver)',
              fontWeight: 300,
              maxWidth: '60ch',
            }}
          >
            Il nostro stabilimento funziona come un ecosistema sincronizzato dove
            progettazione tecnica e lavorazione pesante si incontrano. Integriamo
            ogni fase del ciclo produttivo, dalla selezione della materia prima alle
            finiture complesse, garantendo che ogni componente soddisfi i rigorosi
            standard dell'ingegneria industriale moderna.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col py-2"
              style={{ borderLeft: '1px solid rgba(77,143,212,0.3)', paddingLeft: '24px' }}
            >
              <span
                className="font-display font-bold whitespace-pre-line"
                style={{
                  fontSize: s.multiline ? 'clamp(16px, 2vw, 20px)' : 'clamp(28px, 3vw, 36px)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </span>
              <span
                className="font-body font-medium uppercase mt-2"
                style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--color-text-muted)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
