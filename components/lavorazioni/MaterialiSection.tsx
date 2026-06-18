'use client'

const materiali = [
  {
    name: 'Acciaio al carbonio',
    body: 'Gradi strutturali ad alta resistenza per strutture industriali e infrastrutture.',
  },
  {
    name: 'Acciaio inox 304',
    body: 'Resistenza alla corrosione per applicazioni architettoniche e alimentari.',
  },
  {
    name: 'Acciaio inox 316',
    body: 'Acciaio marino per ambienti estremi e lavorazione di prodotti chimici.',
  },
  {
    name: 'Alluminio',
    body: 'Leghe leggere ed estetiche per macchinari specializzati e rivestimenti.',
  },
  {
    name: 'Acciaio zincato',
    body: 'Lamiere pre-trattate per utilizzo esterno immediato e durabilità strutturale.',
  },
  {
    name: 'Acciaio strutturale',
    body: 'Travi e profili pesanti (HEA, HEB, IPE) lavorati su specifica.',
  },
]

export default function MaterialiSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'var(--space-24)',
        paddingBottom: 'var(--space-24)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-12">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            Materie prime
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
            Materiali a magazzino
          </h2>
          <p
            className="font-body leading-relaxed mt-4"
            style={{
              fontSize: 'clamp(15px, 1vw, 17px)',
              color: 'var(--color-text-muted)',
              fontWeight: 300,
              maxWidth: '65ch',
            }}
          >
            4 magazzini automatici verticali per lamiere, tubolari e semilavorati per snellire e velocizzare al massimo i processi produttivi e garantire risposte rapide alle esigenze dei clienti. Capacità complessiva di stoccaggio: 5.000 quintali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {materiali.map(({ name, body }) => (
            <div
              key={name}
              className="transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,143,212,0.4)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
              }}
            >
              <h3
                className="font-display mb-3"
                style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)' }}
              >
                {name}
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 300 }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
