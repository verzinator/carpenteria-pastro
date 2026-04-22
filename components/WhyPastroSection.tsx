'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const reasons = [
  {
    n: '01',
    title: 'Lavorazioni di Grandi Dimensioni',
    body: 'Macchine piegatrici e per il taglio per lamiere, fino a 13 metri di lunghezza lineare.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBPmWeUItkSRfI--O_g8C4c9cdHrRYRk9h-xWwT8IIWnPhJ8iOKuWcZHJUbI5evviyG3Rqzv_lsbOjnZePxyGwqrGkU7in0dW1geIL-D7S1xEfxqSw8g2g_x9R5WkADjJdMIgXhEAn3Xfka6wcTj9NTzNC0Y1Jzw9XvFYyJXJlm6JYdMT7aQfZgBxlQQ8jXHM1kmENR6YnOcLAJYBMFDOC6C79NLAMZwJWaMJH5mUQy4rIlNSD5MLIjViU_y3CJiHKKMHtyHn_zg',
    alt: 'Lavorazioni metalliche su grandi dimensioni',
  },
  {
    n: '02',
    title: 'Flessibilità Produttiva',
    body: 'Capacità dello staff organizzativo di fornire risposte in tempi estremamente rapidi, 48 ore dall\'ordine.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtOCI3blxtGR3pRsEnvNRSBOgZzMP_7rCDqByID8guySpUJATNRWtt-kLIV2SaXeU0aOnDlzuffz_OkowOkPRdUTBwsTivj1N0G-fMOdcZwfZjn1g82kFQPbbf195BOx-dQJGEVauJcsCXUW6BPL8u6DDzyn97MVMXLL5qPc6S2ZywTzrHED-yFMqu33NdnOXfioUkWwj8T2P3oki-9Yt3ASPZypdFTgESyzTvIV8-fk2xVOtJirwRAj8sNbCLVQiRVwEZU5hyQ',
    alt: 'Produzione flessibile carpenteria metallica',
  },
  {
    n: '03',
    title: 'Rispetto Tempistiche e Scadenze',
    body: 'Pianificazione produttiva avanzata e sistema di priorità per garantire la puntualità delle consegne.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAceCXbqO-PZXg_PRwjMWqaHTtDXRx6IcrPO5Cygn33o508lU3Xs7T4r8afeRilzLY0vcrEJkNe4NL6H7SUHz31_w_J0fkxKx1F0KUwC4nBNBE6qHUoI93EbWN5rJztXYINj-0tu2m63kmlZGK700zJLqPe4QeAOMJ50CA3B6AuozmfYFXV_gez2pNqOuc1hegfoh6OxsyP-KOI0xjGhOvU2TzVMoKDmUMymakFMqVpw5IGS3cW9SbgemgfX_dkTCU9h3L-F_XMqA',
    alt: 'Consegne puntuali carpenteria',
  },
  {
    n: '04',
    title: 'Consulenza Tecnica',
    body: 'Il nostro ufficio tecnico analizza i tuoi disegni e propone ottimizzazioni per ridurre costi e tempi.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXpGBAX9J_RLvckyG_3GSoU6lpv_kb4WXfnOdn0D4zH2I9DnzDyx7nqmSYHX8R1CljvcaUI9jhGVudlpiGtTu7YpHpy-IsrOImH5Q_ORsSb3IV-p8FzKsCPdf0DSoNFFys8yV5BKSNfQwwbbX0VTzPlh3lw05W6T-wcIceD6En6_9rIxWkrnHtqxMqzgLYK2RzpHGe8oHK8BPI5GH7qHv221F2ubMkL-M3WK_0xgcnbxnyLxY3S5sfrl5gWcKuwiSq8vXQFnF2Zw',
    alt: 'Consulenza tecnica ufficio disegno',
  },
  {
    n: '05',
    title: 'Esperienza',
    body: 'Consolidata in oltre 30 anni di attività tramandata in ogni singolo settore di lavorazione.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADb6OIRuxgzxq_SFNHuAj9-GvN9bAeH1zIQvJMgOC4ggbz5ajgkUa1fdXtC7cweldK2XBiroYw5eJkYjvbEKrgBdhK3MJD4L8bA4pgpPgv9pfFuDaTlkth5lbj7PcPoLPCy77ohoR67CzfWGb_GT3TIOGxe29IwVIwbPRSuJShPsmKlvJ3L_XsMarAy-j2wMnPfIEqhpqyQxkcw5x1lXBwMUTKxUAl1zX_FHT6VKTcHtcMOuXI90QPYfjErHTBdXTB7LCQtTa29g',
    alt: 'Esperienza storica carpenteria metallica',
  },
]

export default function WhyPastroSection() {
  const [open, setOpen] = useState('01')

  const active = reasons.find((r) => r.n === open) ?? reasons[0]

  return (
    <section
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display mb-12"
          style={{
            fontSize: 'clamp(32px, 4vw, 51px)',
            fontWeight: 800,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Perché scegliere Pastro
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image — crossfades on open change */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '4/3',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              {reasons.map((r) => (
                <Image
                  key={r.n}
                  src={r.img}
                  alt={r.alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  style={{ opacity: r.n === open ? 1 : 0 }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}
              {/* subtle blue tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(27,79,138,0.06)', mixBlendMode: 'multiply' }}
              />
            </div>
            {/* Offset border decoration */}
            <div
              className="absolute -z-10 -top-3 -left-3 w-full h-full"
              style={{ border: '1px solid rgba(77,143,212,0.12)' }}
            />
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3 order-1 lg:order-2">
            {reasons.map((r) => {
              const isOpen = open === r.n
              return (
                <button
                  key={r.n}
                  onClick={() => setOpen(r.n)}
                  className="text-left w-full p-6 transition-all duration-200"
                  style={{
                    backgroundColor: isOpen
                      ? 'var(--color-surface-2)'
                      : 'var(--color-surface)',
                    borderRadius: 'var(--radius-sm)',
                    border: isOpen
                      ? '1px solid rgba(77,143,212,0.4)'
                      : '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span
                        className="font-display font-bold tracking-tighter"
                        style={{
                          fontSize: 'clamp(17px, 1.5vw, 20px)',
                          color: isOpen
                            ? 'var(--color-primary-light)'
                            : 'rgba(77,143,212,0.35)',
                          transition: 'color 0.2s',
                        }}
                      >
                        {r.n}
                      </span>
                      <h4
                        className="font-display font-bold uppercase tracking-tight"
                        style={{
                          fontSize: 'clamp(13px, 1.2vw, 16px)',
                          color: isOpen ? 'var(--color-text)' : 'rgba(226,230,237,0.6)',
                          transition: 'color 0.2s',
                        }}
                      >
                        {r.title}
                      </h4>
                    </div>
                    <ChevronDown
                      size={15}
                      style={{
                        color: isOpen
                          ? 'var(--color-primary-light)'
                          : 'var(--color-text-muted)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s, color 0.2s',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  {isOpen && (
                    <p
                      className="font-body leading-relaxed mt-4"
                      style={{
                        paddingLeft: '3.5rem',
                        fontSize: 'clamp(14px, 1vw, 16px)',
                        color: 'var(--color-text-muted)',
                        fontWeight: 300,
                      }}
                    >
                      {r.body}
                    </p>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
