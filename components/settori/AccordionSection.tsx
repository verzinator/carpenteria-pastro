'use client'

import Image from 'next/image'
import { useState } from 'react'

const settori = [
  {
    num: '01',
    title: 'Macchine e impianti industriali',
    description:
      'Componenti strutturali e carpenteria su disegno per costruttori di macchine e impianti industriali.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDBd8t-OMrrcbVbyc6pRvQKjoBrCas2-sQR2dD3JNAVBuNPJlrX_9NDGlrvMLL22YGHxSatXc3FfPtD0sRq7Zr_WnhvfkvpbbUTO0sL_8Azqsc7_T-VwZ893U3BZeCRyxCCXMqOP4XS7j67h4JxfhZARp_wCcfkGDl18fPH73zJ65YKr7IxVbxvZREmE0A-zjxDE7y3_E8C4r74e-0fpmkp7l_0CqB3j5CHyATOHRrul5JLKswLQmwemIz_AeOxY6Ej-dHZAS-sw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqBxiSgStyztx9cfVGphQZ2RVol_WT2ObK8nE4nJrJDenPq604EMEuWzJh2xDqLU0WzKQ_E7OjoWn1wY9AvahQG-o-ocNE0cJtuFOaOO4Kf6Mm0A_Ji9YTCNfBUkM8cu0ys9APymDisaY4k3iwRPzP5lugT7a2DMMlIk0Y9UIAL-aR__PJYwXC9fnAD90pwDkAt2-uA34XPa83RDO51iN66lKd4Sg_M5QHLlY3d6psXNt8OWTYFOMGRag8Cu2-IKsngANXwqpQw',
    ],
    topics: [
      {
        label: 'Telai e strutture portanti',
        body: 'Telai, basamenti e strutture di supporto lavorate su disegno, in acciaio al carbonio o inox, con tolleranze adatte all\'integrazione diretta in linea.',
      },
      {
        label: 'Componenti su commessa',
        body: 'Carter, protezioni, supporti e flange prodotti secondo le specifiche tecniche del costruttore. Nessuna interpretazione, nessuna approssimazione.',
      },
      {
        label: 'Serie ripetitive e prototipazione',
        body: 'Gestiamo sia la prima serie prototipale sia la produzione ripetitiva, con flessibilità su varianti e revisioni di disegno.',
      },
    ],
  },
  {
    num: '02',
    title: 'Strutture metalliche e costruzioni',
    description:
      'Carpenteria pesante e strutture saldate per capannoni, soppalchi e infrastrutture industriali.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDfsL-3KGfeKgj8Qo7K9uKIwYQCBWEw4wQAT305WrULYXytdNToL9EoSq1UfQbpo8cMy_hSk-b9gMKTgJn85Wlh8ZmLQpCauDYOVKJhUd-1KN9i921KqSJQWnTwmXNEFAgAibTrRYrIbPg5wZp9uLsd8dvWhAWUHB-9YWXh98ykOnzFLH9Gxby8dPamTE3099UUYaBIy8xIrtuqLHLg_wdL2w-UOxr5xnuhNHcssQH0BDY_PbWOtcmiKPbhPVeCMccmzMyAT-wg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5bXdAqBr_N0pcCHHGZU8U1LvJX4TLrCfD9qZBjhZS1d--xnyeZmASr642yIAcqK7SBwRm-bBKJQpbeP-y2VVu-ecv_aLhWF6EhsdG_HkoRnGPdXs74sy66pLwromSHK6lV98kbVhZnHhA0dCmkTlunM3kskMwfPS5s1x2gU7VyeBl9dvZlvcNd2jRO1MqJLmNbZQsxDPnC2VHH2d6MineQZj6jjCEPLb2SuLid4Er7G_ak3lS28iECvnmMFpIYeyf5LEF2WKf_A',
    ],
    topics: [
      {
        label: 'Carpenteria pesante fino a 13 metri',
        body: 'Travi, pilastri, capriate e strutture saldate per capannoni e infrastrutture industriali. Componenti fino a 13 metri, senza giunti intermedi.',
      },
      {
        label: 'Scale, passerelle e strutture di servizio',
        body: 'Scale industriali, passerelle e parapetti in acciaio zincato o verniciato, realizzati su disegno costruttivo.',
      },
      {
        label: 'Assemblaggio pre-montaggio',
        body: 'Pre-assemblaggio in officina prima della consegna: meno imprevisti in cantiere, tempi di montaggio più prevedibili.',
      },
    ],
  },
  {
    num: '03',
    title: 'Automazione e robotica',
    description:
      'Strutture di precisione per isole robotizzate, sistemi di movimentazione e impianti automatizzati.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCE-i-wo2ZrYianVrL6MnocF7BxVDGxEA1D1xjegUJrI6DCVtnVDnoKrMlu5vM9YghVuyZ5NnjdO_aosBDidtG-10MPD540hx2TxgQNHYEiD5KPPtRiNHY2wYsyCAdW-9EEyKE1Vt_cnTxiWW1J7UjNBEkDoOjdALMki5XTBpCktT75A_xpGSGdbZJq1HyoRIjO-gEVmdxWkm9WmFT8DmO6ypM600EwRQgpywEeUNFT3heFTSenJBpGzp0wUzr7xKGvBZ8lop4gXw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtOCI3blxtGR3pRsEnvNRSBOgZzMP_7rCDqByID8guySpUJATNRWtt-kLIV2SaXeU0aOnDlzuffz_OkowOkPRdUTBwsTivj1N0G-fMOdcZwfZjn1g82kFQPbbf195BOx-dQJGEVauJcsCXUW6BPL8u6DDzyn97MVMXLL5qPc6S2ZywTzrHED-yFMqu33NdnOXfioUkWwj8T2P3oki-9Yt3ASPZypdFTgESyzTvIV8-fk2xVOtJirwRAj8sNbCLVQiRVwEZU5hyQ',
    ],
    topics: [
      {
        label: 'Strutture per isole robotizzate',
        body: 'Culle, recinzioni e basamenti per isole di saldatura e asservimento automatizzato, con tolleranze compatibili con robot e sistemi di visione.',
      },
      {
        label: 'Guide e sistemi di movimentazione',
        body: 'Profili, guide di scorrimento e staffe per sistemi di trasporto interno, in acciaio o alluminio lavorati con la precisione richiesta dall\'automazione.',
      },
      {
        label: 'Prototipi e prime serie',
        body: 'Organizzati per rispondere velocemente su lotti piccoli nella fase di sviluppo, senza penalizzare la precisione esecutiva.',
      },
    ],
  },
  {
    num: '04',
    title: 'Energia e impiantistica',
    description:
      'Carpenteria per impianti fotovoltaici, cabine elettriche e contenitori tecnici in acciaio e inox.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUHT-tzDuf0dH-xfsiMGcTOGi3NK-I_QTZC_dUSoq_ofRiVeR9XVfsX5vzEpDGp6Hr8eZIUeJHecpcW3FXsrCfooSmJbJs5opjhvPhOys4X0iIiI_nwcuUVRhDofkkfmG4KHVLeYhU0sIWDy8OMf4o-XU9n-Y_2fU-XXVqaouKrQcsFE-WtMS_m293vuN5rOgHzlgoobE7UFR_MmdOvIHO7gnOQRxRV-p0M6Z8_s-Fay4lA9YEi1f9CXqhi3-UZIUimRGWarcDbQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7DKHPPvRyujibLD5T7d3U-us_CbMDQGPq810IOzFF_qqfrF6igoqO_XBECYWdjFM6NQf5XVqKu5DezdEYO7Ks8CM7D64HsXnsfRgzXvegQR9m2I8B4_vFMS3rr67mdNZurJha5D-mspgLeeOG-nDygGLGIO5lpRJJ5rdtdHvv-un5muvfMop_ZOq5sBrzlRfUDzfYpHDhNDskL552emYksN01NW2RNOlhvzdHyHagcUCC16aVZaPcElwVQa6V2wXrjnHt8OLkg',
    ],
    topics: [
      {
        label: 'Strutture per impianti fotovoltaici',
        body: 'Supporti fissi e tracker per impianti a terra e su copertura industriale, in acciaio zincato o alluminio, anche su grandi quantità.',
      },
      {
        label: 'Carpenteria per cabine elettriche',
        body: 'Telai, pannellature e strutture per quadri elettrici e cabine di trasformazione, in carbonio, zincato o inox secondo le condizioni di installazione.',
      },
      {
        label: 'Serbatoi e contenitori tecnici',
        body: 'Vasche e serbatoi in acciaio o inox, saldati con processi certificati e collaudati prima della consegna.',
      },
    ],
  },
  {
    num: '05',
    title: 'Agricoltura e movimento terra',
    description:
      'Componentistica strutturale robusta per macchine agricole e mezzi da cantiere, su disegno OEM.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqBxiSgStyztx9cfVGphQZ2RVol_WT2ObK8nE4nJrJDenPq604EMEuWzJh2xDqLU0WzKQ_E7OjoWn1wY9AvahQG-o-ocNE0cJtuFOaOO4Kf6Mm0A_Ji9YTCNfBUkM8cu0ys9APymDisaY4k3iwRPzP5lugT7a2DMMlIk0Y9UIAL-aR__PJYwXC9fnAD90pwDkAt2-uA34XPa83RDO51iN66lKd4Sg_M5QHLlY3d6psXNt8OWTYFOMGRag8Cu2-IKsngANXwqpQw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDBd8t-OMrrcbVbyc6pRvQKjoBrCas2-sQR2dD3JNAVBuNPJlrX_9NDGlrvMLL22YGHxSatXc3FfPtD0sRq7Zr_WnhvfkvpbbUTO0sL_8Azqsc7_T-VwZ893U3BZeCRyxCCXMqOP4XS7j67h4JxfhZARp_wCcfkGDl18fPH73zJ65YKr7IxVbxvZREmE0A-zjxDE7y3_E8C4r74e-0fpmkp7l_0CqB3j5CHyATOHRrul5JLKswLQmwemIz_AeOxY6Ej-dHZAS-sw',
    ],
    topics: [
      {
        label: 'Telai e bracci per macchine agricole',
        body: 'Strutture portanti e bracci di sollevamento in acciai ad alta resistenza, con saldature strutturali su sezioni importanti.',
      },
      {
        label: 'Protezioni e carter per movimento terra',
        body: 'Protezioni sottoscocca e coperture motore per escavatori e macchine da cantiere, con trattamenti superficiali antiusura su richiesta.',
      },
      {
        label: 'Componentistica su disegno OEM',
        body: 'Fornitura conto terzi per costruttori OEM: lavoriamo sul disegno dell\'ufficio tecnico cliente, rispettando qualità e piani di consegna.',
      },
    ],
  },
  {
    num: '06',
    title: 'Logistica e magazzini',
    description:
      'Strutture metalliche per scaffalature pesanti, sistemi automatizzati e soppalchi industriali.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDfsL-3KGfeKgj8Qo7K9uKIwYQCBWEw4wQAT305WrULYXytdNToL9EoSq1UfQbpo8cMy_hSk-b9gMKTgJn85Wlh8ZmLQpCauDYOVKJhUd-1KN9i921KqSJQWnTwmXNEFAgAibTrRYrIbPg5wZp9uLsd8dvWhAWUHB-9YWXh98ykOnzFLH9Gxby8dPamTE3099UUYaBIy8xIrtuqLHLg_wdL2w-UOxr5xnuhNHcssQH0BDY_PbWOtcmiKPbhPVeCMccmzMyAT-wg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5bXdAqBr_N0pcCHHGZU8U1LvJX4TLrCfD9qZBjhZS1d--xnyeZmASr642yIAcqK7SBwRm-bBKJQpbeP-y2VVu-ecv_aLhWF6EhsdG_HkoRnGPdXs74sy66pLwromSHK6lV98kbVhZnHhA0dCmkTlunM3kskMwfPS5s1x2gU7VyeBl9dvZlvcNd2jRO1MqJLmNbZQsxDPnC2VHH2d6MineQZj6jjCEPLb2SuLid4Er7G_ak3lS28iECvnmMFpIYeyf5LEF2WKf_A',
    ],
    topics: [
      {
        label: 'Strutture per scaffalature industriali',
        body: 'Spalle, traversi e colonne per scaffalature pesanti, in misure standard o fuori formato secondo layout e carichi di esercizio.',
      },
      {
        label: 'Sistemi di stoccaggio su misura',
        body: 'Carpenteria di supporto per AS/RS, trasloelevatori e magazzini verticali automatizzati, su ogni dimensione e vincolo di interasse.',
      },
      {
        label: 'Mezzanine e soppalchi industriali',
        body: 'Soppalchi portanti e strutture di servizio per ottimizzare gli spazi produttivi, dalla carpenteria primaria alle scale di accesso.',
      },
    ],
  },
]

function AccordionItem({ s, isOpen, onToggle }: {
  s: typeof settori[0]
  isOpen: boolean
  onToggle: () => void
}) {
  const [imgIndex, setImgIndex] = useState(0)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImgIndex((p) => (p - 1 + s.images.length) % s.images.length)
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImgIndex((p) => (p + 1) % s.images.length)
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: isOpen ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease',
      }}
    >
      {/* Header — single flex row, padding-based height */}
      <div
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '28px 24px',
          cursor: 'pointer',
        }}
      >
        <span
          className="font-body font-medium"
          style={{
            fontSize: '13px',
            letterSpacing: '0.1em',
            lineHeight: 1,
            color: isOpen ? 'var(--color-primary-light)' : 'var(--color-text-faint)',
            width: '40px',
            flexShrink: 0,
            alignSelf: 'flex-start',
            paddingTop: '5px',
          }}
        >
          {s.num}
        </span>

        <div style={{ flex: 1 }}>
          <span
            className="font-display"
            style={{
              display: 'block',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: isOpen ? 'var(--color-text)' : 'var(--color-accent-silver-bright)',
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease',
            }}
          >
            {s.title}
          </span>
          {isOpen && (
            <p
              className="font-body leading-relaxed"
              style={{
                fontSize: '14px',
                color: 'var(--color-accent-silver)',
                fontWeight: 300,
                marginTop: '8px',
                marginBottom: 0,
              }}
            >
              {s.description}
            </p>
          )}
        </div>

        <span
          className="font-body"
          style={{
            fontSize: '20px',
            lineHeight: 1,
            flexShrink: 0,
            alignSelf: 'flex-start',
            paddingTop: '3px',
            color: isOpen ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease, color 0.2s ease',
          }}
        >
          →
        </span>
      </div>

      {/* Expanded content */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '700px' : '0',
          transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          style={{ padding: '32px 40px 56px 40px' }}
        >
          {/* Left column — image + nav */}
          <div className="flex flex-col gap-3">
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                height: 'clamp(240px, 30vw, 380px)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <Image
                src={s.images[imgIndex]}
                alt={s.title}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>

            {/* Prev / Next buttons */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={prev}
                className="flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-surface-3)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                ←
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-surface-3)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Right column — sub-topics */}
          <div className="space-y-0">
            {s.topics.map((t, ti) => (
              <div
                key={t.label}
                style={{
                  paddingTop: ti === 0 ? '0' : '24px',
                  paddingBottom: '24px',
                  borderBottom: ti < s.topics.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <span
                  className="font-body font-medium uppercase block mb-2"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: 'var(--color-primary-light)',
                  }}
                >
                  {t.label}
                </span>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    fontSize: '15px',
                    color: '#e2e6ed',
                    fontWeight: 300,
                  }}
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingBottom: 'var(--space-24)',
      }}
    >
      <div className="mx-auto px-6 md:px-12 max-w-7xl flex flex-col gap-2">
        {settori.map((s, i) => (
          <AccordionItem
            key={s.num}
            s={s}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}
