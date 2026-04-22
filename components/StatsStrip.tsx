const stats = [
  { value: '30+', label: 'Anni di Esperienza' },
  { value: '13m', label: 'Capacità di Piegatura' },
  { value: '4cm', label: 'Spessore lavorazione lamiere' },
]

export default function StatsStrip() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="pl-6"
              style={{ borderLeft: '1px solid rgba(77,143,212,0.3)' }}
            >
              <div
                className="font-display font-display"
                style={{
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 800,
                  color: 'var(--color-primary-light)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                className="font-body font-medium uppercase mt-2"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--color-text-muted)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
