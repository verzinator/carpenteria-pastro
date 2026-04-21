'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const servizi = [
  {
    num: '01',
    slug: 'TAGLIO',
    title: 'Taglio',
    body: 'Taglio di precisione con cesoie, plasma, laser a fibra e waterjet su acciaio al carbonio, inox e alluminio. Bordi netti per qualsiasi geometria, dai profili semplici alle sagome complesse.',
    specs: 'Metodi: Cesoie, Plasma, Laser fibra, Waterjet, Materiali: Acciaio al carbonio, Inox, Alluminio, Formati: DXF / DWG / PDF',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqBxiSgStyztx9cfVGphQZ2RVol_WT2ObK8nE4nJrJDenPq604EMEuWzJh2xDqLU0WzKQ_E7OjoWn1wY9AvahQG-o-ocNE0cJtuFOaOO4Kf6Mm0A_Ji9YTCNfBUkM8cu0ys9APymDisaY4k3iwRPzP5lugT7a2DMMlIk0Y9UIAL-aR__PJYwXC9fnAD90pwDkAt2-uA34XPa83RDO51iN66lKd4Sg_M5QHLlY3d6psXNt8OWTYFOMGRag8Cu2-IKsngANXwqpQw',
    alt: 'Taglio laser acciaio',
    reverse: false,
    highlight: false,
  },
  {
    num: '02',
    slug: 'PIEGATURA',
    title: 'Piegatura',
    body: 'Piegatura CNC su lamiera e profilati con controllo angolo digitale per ripetibilità assoluta. Lunghezze fino a 13 m: punto di forza per strutture di grande formato che richiedono precisione al decimo.',
    specs: 'Presse CNC, Lunghezza max: 13 m, Materiali: Acciaio al carbonio, Inox, Alluminio, Spessori: 0,5–20 mm',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDfsL-3KGfeKgj8Qo7K9uKIwYQCBWEw4wQAT305WrULYXytdNToL9EoSq1UfQbpo8cMy_hSk-b9gMKTgJn85Wlh8ZmLQpCauDYOVKJhUd-1KN9i921KqSJQWnTwmXNEFAgAibTrRYrIbPg5wZp9uLsd8dvWhAWUHB-9YWXh98ykOnzFLH9Gxby8dPamTE3099UUYaBIy8xIrtuqLHLg_wdL2w-UOxr5xnuhNHcssQH0BDY_PbWOtcmiKPbhPVeCMccmzMyAT-wg',
    alt: 'Pressa piegatrice CNC',
    reverse: true,
    highlight: true,
  },
  {
    num: '03',
    slug: 'SALDATURA',
    title: 'Saldatura',
    body: 'Giunzione strutturale con processi MIG/MAG, TIG e a elettrodo per assemblaggi su acciaio al carbonio, inox e alluminio. Giunti certificati conformi ISO 3834 / EN 1090 per applicazioni strutturali.',
    specs: 'Processi: MIG/MAG, TIG, Elettrodo, Materiali: Acciaio al carbonio, Inox, Alluminio, Cert.: ISO 3834, EN 1090',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDBd8t-OMrrcbVbyc6pRvQKjoBrCas2-sQR2dD3JNAVBuNPJlrX_9NDGlrvMLL22YGHxSatXc3FfPtD0sRq7Zr_WnhvfkvpbbUTO0sL_8Azqsc7_T-VwZ893U3BZeCRyxCCXMqOP4XS7j67h4JxfhZARp_wCcfkGDl18fPH73zJ65YKr7IxVbxvZREmE0A-zjxDE7y3_E8C4r74e-0fpmkp7l_0CqB3j5CHyATOHRrul5JLKswLQmwemIz_AeOxY6Ej-dHZAS-sw',
    alt: 'Saldatura industriale MIG TIG',
    reverse: false,
    highlight: false,
  },
  {
    num: '04',
    slug: 'FORATURA E PUNZONATURA',
    title: 'Foratura e Punzonatura',
    body: 'Realizzazione di fori, asole e aperture su componenti metallici con presse punzonatrici e foratura CNC. Tolleranze di precisione per accoppiamenti meccanici e passaggi normati.',
    specs: 'Presse punzonatrici, Foratura CNC, Materiali: Acciaio al carbonio, Inox, Alluminio, Tolleranze: IT7–IT9',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtOCI3blxtGR3pRsEnvNRSBOgZzMP_7rCDqByID8guySpUJATNRWtt-kLIV2SaXeU0aOnDlzuffz_OkowOkPRdUTBwsTivj1N0G-fMOdcZwfZjn1g82kFQPbbf195BOx-dQJGEVauJcsCXUW6BPL8u6DDzyn97MVMXLL5qPc6S2ZywTzrHED-yFMqu33NdnOXfioUkWwj8T2P3oki-9Yt3ASPZypdFTgESyzTvIV8-fk2xVOtJirwRAj8sNbCLVQiRVwEZU5hyQ',
    alt: 'Foratura e punzonatura su lamiera',
    reverse: true,
    highlight: false,
  },
  {
    num: '05',
    slug: 'FRESATURA E TORNITURA',
    title: 'Fresatura e Tornitura',
    body: 'Lavorazioni meccaniche di precisione su profilati e componenti con fresatrici CNC e torni. Adatte a quote funzionali con tolleranze strette, filettature e geometrie non ottenibili da taglio.',
    specs: 'Fresatura CNC, Tornitura, Materiali: Acciaio al carbonio, Inox, Alluminio, Tolleranze: fino a IT6',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE-i-wo2ZrYianVrL6MnocF7BxVDGxEA1D1xjegUJrI6DCVtnVDnoKrMlu5vM9YghVuyZ5NnjdO_aosBDidtG-10MPD540hx2TxgQNHYEiD5KPPtRiNHY2wYsyCAdW-9EEyKE1Vt_cnTxiWW1J7UjNBEkDoOjdALMki5XTBpCktT75A_xpGSGdbZJq1HyoRIjO-gEVmdxWkm9WmFT8DmO6ypM600EwRQgpywEeUNFT3heFTSenJBpGzp0wUzr7xKGvBZ8lop4gXw',
    alt: 'Fresatura CNC componenti metallici',
    reverse: false,
    highlight: false,
  },
  {
    num: '06',
    slug: 'CESOIATURA',
    title: 'Cesoiatura',
    body: 'Taglio di lamiere e piastre piane per pannelli, rivestimenti e serbatoi. Taglio dritto ad alta velocità su grandi formati con bordi netti e deformazione minima del materiale.',
    specs: 'Cesoie idrauliche, Dimensioni max lamiera: 4000×2000 mm, Spessori: 0,5–15 mm',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUHT-tzDuf0dH-xfsiMGcTOGi3NK-I_QTZC_dUSoq_ofRiVeR9XVfsX5vzEpDGp6Hr8eZIUeJHecpcW3FXsrCfooSmJbJs5opjhvPhOys4X0iIiI_nwcuUVRhDofkkfmG4KHVLeYhU0sIWDy8OMf4o-XU9n-Y_2fU-XXVqaouKrQcsFE-WtMS_m293vuN5rOgHzlgoobE7UFR_MmdOvIHO7gnOQRxRV-p0M6Z8_s-Fay4lA9YEi1f9CXqhi3-UZIUimRGWarcDbQ',
    alt: 'Cesoiatura lamiere industriali',
    reverse: true,
    highlight: false,
  },
  {
    num: '07',
    slug: 'TRATTAMENTI SUPERFICIALI',
    title: 'Trattamenti superficiali',
    body: 'Verniciatura, zincatura e sabbiatura per la protezione da corrosione e usura. Trattamenti applicabili su acciaio al carbonio e strutturale con metodi a polvere epossidica, zincatura a caldo o meccanica.',
    specs: 'Trattamenti: Verniciatura, Zincatura, Sabbiatura, Materiali: Acciaio al carbonio, Acciaio strutturale, Metodi: Polvere epossidica, Zincatura a caldo/meccanica',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7DKHPPvRyujibLD5T7d3U-us_CbMDQGPq810IOzFF_qqfrF6igoqO_XBECYWdjFM6NQf5XVqKu5DezdEYO7Ks8CM7D64HsXnsfRgzXvegQR9m2I8B4_vFMS3rr67mdNZurJha5D-mspgLeeOG-nDygGLGIO5lpRJJ5rdtdHvv-un5muvfMop_ZOq5sBrzlRfUDzfYpHDhNDskL552emYksN01NW2RNOlhvzdHyHagcUCC16aVZaPcElwVQa6V2wXrjnHt8OLkg',
    alt: 'Trattamenti superficiali acciaio',
    reverse: false,
    highlight: false,
  },
]

export default function ServiziSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return
      const viewCenter = window.innerHeight / 2
      let closest = -1
      let minDist = Infinity
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const dist = Math.abs(cardCenter - viewCenter)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActiveIndex(closest)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <section
      style={{ backgroundColor: 'var(--color-bg)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-12">
        {servizi.map((s, i) => (
          <div
            key={s.num}
            ref={(el) => { cardRefs.current[i] = el }}
            className={`group flex flex-col ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start md:items-center transition-all duration-300 p-6 md:p-8 lg:p-10`}
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              border: isMobile && activeIndex === i
                ? '1px solid rgba(77,143,212,0.64)'
                : '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              if (isMobile) return
              ;(e.currentTarget as HTMLElement).style.border = '1px solid rgba(77,143,212,0.64)'
            }}
            onMouseLeave={(e) => {
              if (isMobile) return
              ;(e.currentTarget as HTMLElement).style.border = '1px solid var(--color-border)'
            }}
          >
            {/* Text */}
            <div className="flex-1 space-y-5">
              <span
                className="font-body font-medium uppercase block"
                style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-primary-light)' }}
              >
                {s.num}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 800,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.title}
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: '16px',
                  color: 'var(--color-accent-silver)',
                  fontWeight: 300,
                }}
              >
                {s.body}
              </p>
              <p
                className="font-body uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'monospace',
                  paddingTop: '8px',
                }}
              >
                {s.specs}
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:flex-1 relative overflow-hidden" style={{ height: 'clamp(240px, 55vw, 380px)', borderRadius: 'var(--radius-md)' }}>
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
