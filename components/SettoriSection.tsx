import Image from 'next/image'

const settori = [
  {
    name: 'Automotive',
    items: ['Linee di assemblaggio', 'Strutture portanti robot', 'Telai di precisione'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7DKHPPvRyujibLD5T7d3U-us_CbMDQGPq810IOzFF_qqfrF6igoqO_XBECYWdjFM6NQf5XVqKu5DezdEYO7Ks8CM7D64HsXnsfRgzXvegQR9m2I8B4_vFMS3rr67mdNZurJha5D-mspgLeeOG-nDygGLGIO5lpRJJ5rdtdHvv-un5muvfMop_ZOq5sBrzlRfUDzfYpHDhNDskL552emYksN01NW2RNOlhvzdHyHagcUCC16aVZaPcElwVQa6V2wXrjnHt8OLkg',
    alt: 'Linee di produzione automotive',
  },
  {
    name: 'Food & Beverage',
    items: ['Serbatoi in acciaio INOX', 'Nastri trasportatori', 'Sistemi di lavaggio'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVXfi5F6ACchgGdf2SA38Qp-R4S6BKzdU0wRKfOOnpmebNiQHdHNe0x6aDMy9wZ7VzLIhtx_gzvErzpa7G0xaar0xfztjk_HI8AhC88AjV44XlAMN3szFmzObr7DXsBRctkoPllZXlEROKweq4VQeQnAXmU0ZicTxQY7tZDwBAULTUfhJJ1sKnHE5BKVDThZr4ZaP5peNh0iyJkl65eBZQLtZQW42Pft6xd2PYEcoqFqUYgjF8_kvF-oAtLSN15g2NFiW6X1Mgug',
    alt: 'Macchinari in acciaio inox per il settore alimentare',
  },
  {
    name: 'Agriculture',
    items: ['Scocche macchine agricole', 'Bracci telescopici', 'Attrezzature da fienile'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzIISEJH1FuemTjO_0QtGhryDvhE_ltWdC6895yq5GZxI2MKYFjT2pnNv9S9U6Bb5p6aiNul6fY3m4iSr_aa7Vyov8yT9JWUgY9J2UWT0PrCZcspsY1oYiaRopFowRG5myywnJhHjkC7x6HMYF8L6xRoVwSM7gx-GyGCT8hytpmepWPNxD1b1WkZeQAJ7yJNyUo0j0j6uSj8AvpsNX-We2zON8Ju7laqVPtTeim6mrlyYrwKBjIYLq31nNYTh3aNbX8DtuGJZTTg',
    alt: 'Componenti per macchinari agricoli',
  },
  {
    name: 'Architectural',
    items: ['Rivestimenti di facciata', 'Scale monumentali', 'Strutture di design'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx-u6-9i-jAmFDZ-322QjkOgJwQmXO-TW1uC494GLRIuNugmGIJxr3HRJ8I9UpDf3kal6tq91aNuBUH4sd_q94M_SG4iHnxo26bSxRCk5aLuD8AHm-KVG9zVe0eMOH0O6HddQPXLkGSdrAkUPprCUsy6PARJz6W95ZgO9cx97YAmeLPU96V_IvjoO53LTAsv0ISp45VVKRKLAuO0g8zo2u2zxgW3j9_irdgYK961n1KOOzI20Ots6GRNuPS00VIgFLaw7N7tNnsQ',
    alt: 'Facciata architettonica in metallo',
  },
  {
    name: 'Energy',
    items: ['Sostegni per fotovoltaico', 'Componenti per eolico', 'Cabine elettriche'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAYexID0czG6XQHazs-1XWU5rSYXEH5flxUU09YMI-ZmAWd9UTo008j6-sck7t4w4NyZHkievYug3w2BIANm4VM2667rPIAB4WlWo9fOX8sDYIKNHMnob6vGcX5U4M4KqLeATfvOJWSdFiqnyul4Oi4HwZu77y557CsNEdVmU0wPlCj71wpRlgIrcIB6fXN7Fejcjc8N5G65g25RVPsRDlIjJ_Mq8Sx0t-ArE5S7-cp3B6KJDzuZmoMTcIgex1UmNHdhWM7_if2A',
    alt: 'Infrastrutture energetiche in metallo',
  },
  {
    name: 'Machinery',
    items: ['Incastellature pesanti', 'Protezioni antinfortunistiche', 'Basamenti macchina'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwnWZGvFPMIiiitO01-7orKcrX7KQiyny-er0kZKtHmZARbql6B-ZRpkbkEfFVNoH4S3ZOwl7-qPEyaWLhA9HY4MjwIuONOHV2Qqt-lew0q_K9Z6DYdqnqfRdamVs9cWrAap6dKtSnp1gOsxuPlgcC-59trNhwOLoua8ikI381VIBmlKcnX4V6x-3zlot6WJQMHcVSVG2RQ7pk76Ux5tC0vtqvYOU9lcDZI3txCss6wFSrFSS8LO8_IX3iJx8GOBw80HkzY1MGpw',
    alt: 'Macchinari industriali pesanti',
  },
]

export default function SettoriSection() {
  return (
    <section
      id="settori"
      className="py-32 px-6 md:px-12 relative"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div
            className="font-body font-medium uppercase mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.3em', color: 'var(--color-primary-light)' }}
          >
            Settori di Attività
          </div>
          <h2
            className="font-display tracking-tight mb-3"
            style={{
              fontSize: 'clamp(32px, 4vw, 51px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            Settori Operativi
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: 'clamp(15px, 1vw, 17px)',
              color: 'var(--color-text-muted)',
              maxWidth: '60ch',
              fontWeight: 300,
            }}
          >
            Forniamo soluzioni di carpenteria metallica ad alta precisione per i settori
            industriali più esigenti, garantendo affidabilità e conformità tecnica.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {settori.map((s) => (
            <div
              key={s.name}
              className="group"
              style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  className="object-cover transition-all duration-700 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
                    opacity: 0.5,
                  }}
                />
              </div>
              <div className="p-8 space-y-4">
                <h3
                  className="font-display uppercase tracking-tight flex items-center gap-3"
                  style={{
                    fontSize: 'clamp(19px, 2vw, 22px)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                  }}
                >
                  <span
                    className="inline-block h-px w-8"
                    style={{ backgroundColor: 'var(--color-primary-light)' }}
                  />
                  {s.name}
                </h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-body font-medium uppercase"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-primary-light)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
