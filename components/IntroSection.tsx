import Image from 'next/image'

export default function IntroSection() {
  return (
    <section
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div className="space-y-10">
          <div
            className="inline-flex items-center px-3 py-1.5"
            style={{
              border: '1px solid rgba(77,143,212,0.4)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <span
              className="font-display font-semibold uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'var(--color-primary-light)',
              }}
            >
              Chi Siamo
            </span>
          </div>

          <h2
            className="font-display leading-[1.05] tracking-tight"
            style={{
              fontSize: 'clamp(32px, 4vw, 51px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            Tecnologia avanzata per la carpenteria metallica industriale.
          </h2>

          <p
            className="font-body leading-relaxed"
            style={{
              fontSize: 'clamp(15px, 1vw, 17px)',
              color: 'var(--color-text-muted)',
              maxWidth: '56ch',
              fontWeight: 300,
            }}
          >
            Da oltre tre decenni, Pastro rappresenta l'eccellenza nella lavorazione dei
            metalli. Il nostro stabilimento è equipaggiato con macchinari di ultima
            generazione per garantire tolleranze millimetriche su ogni componente, dal
            prototipo alla produzione in serie.
          </p>

          <div className="flex gap-16 pt-2">
            {[
              { value: 'ISO 9001', label: 'Certificazione Qualità' },
              { value: 'EN 1090', label: 'Esecuzione Strutture' },
            ].map((cert) => (
              <div key={cert.value} className="space-y-1">
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(19px, 2vw, 26px)',
                    fontWeight: 700,
                    color: 'var(--color-primary-light)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cert.value}
                </div>
                <p
                  className="font-body font-medium uppercase"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="relative group">
          <div
            className="overflow-hidden relative"
            style={{
              aspectRatio: '5/4',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-surface-2)',
            }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADb6OIRuxgzxq_SFNHuAj9-GvN9bAeH1zIQvJMgOC4ggbz5ajgkUa1fdXtC7cweldK2XBiroYw5eJkYjvbEKrgBdhK3MJD4L8bA4pgpPgv9pfFuDaTlkth5lbj7PcPoLPCy77ohoR67CzfWGb_GT3TIOGxe29IwVIwbPRSuJShPsmKlvJ3L_XsMarAy-j2wMnPfIEqhpqyQxkcw5x1lXBwMUTKxUAl1zX_FHT6VKTcHtcMOuXI90QPYfjErHTBdXTB7LCQtTa29g"
              alt="Interno stabilimento robotizzato Pastro"
              fill
              className="object-cover transition-all duration-1000 grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(27,79,138,0.08)', mixBlendMode: 'multiply' }}
            />
          </div>
          {/* Offset border decoration */}
          <div
            className="absolute -bottom-4 -right-4 w-full h-full -z-10"
            style={{ border: '1px solid rgba(255,255,255,0.04)' }}
          />
        </div>
      </div>
    </section>
  )
}
