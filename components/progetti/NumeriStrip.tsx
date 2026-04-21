const numeri = [
  { value: '+500', label: 'Commesse annuali' },
  { value: '30+', label: 'Anni di esperienza' },
  { value: '13 m', label: 'Max componente lungo' },
  { value: '6', label: 'Settori serviti' },
]

export default function NumeriStrip() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-16)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-wrap justify-between items-center gap-12">
        {numeri.map((n, i) => (
          <div key={n.label} className="flex items-center gap-12">
            <div className="flex flex-col">
              <span
                className="font-display font-bold"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: 'var(--color-primary-light)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {n.value}
              </span>
              <span
                className="font-body font-medium uppercase mt-2"
                style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-text-muted)' }}
              >
                {n.label}
              </span>
            </div>
            {i < numeri.length - 1 && (
              <div
                className="hidden md:block"
                style={{ width: '1px', height: '48px', backgroundColor: 'var(--color-border)' }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
