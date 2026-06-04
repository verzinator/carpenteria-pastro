export default function ProgettiHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-2xl">
          <h1
            className="font-display font-black mb-6"
            style={{
              fontSize: 'clamp(48px, 6vw, 96px)',
              lineHeight: '1.1',
              color: 'var(--color-text)',
            }}
          >
            Progetti realizzati
          </h1>
          <p
            className="font-body font-light leading-relaxed"
            style={{
              fontSize: 'clamp(15px, 1vw, 17px)',
              color: 'var(--color-text-muted)',
              maxWidth: '65ch',
            }}
          >
            Scopri alcuni dei nostri progetti di carpenteria metallica industriale.
            Ogni realizzazione rappresenta la nostra esperienza tecnica e la capacità
            di trasformare specifiche complesse in soluzioni concrete.
          </p>
        </div>
      </div>
    </section>
  )
}
