import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const row1 = [
  {
    sector: 'Automotive Sector',
    title: 'Strutture portanti per linee robotizzate',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtOCI3blxtGR3pRsEnvNRSBOgZzMP_7rCDqByID8guySpUJATNRWtt-kLIV2SaXeU0aOnDlzuffz_OkowOkPRdUTBwsTivj1N0G-fMOdcZwfZjn1g82kFQPbbf195BOx-dQJGEVauJcsCXUW6BPL8u6DDzyn97MVMXLL5qPc6S2ZywTzrHED-yFMqu33NdnOXfioUkWwj8T2P3oki-9Yt3ASPZypdFTgESyzTvIV8-fk2xVOtJirwRAj8sNbCLVQiRVwEZU5hyQ',
    alt: 'Struttura metallica per linea produzione robotizzata',
    colClass: 'md:col-span-8',
  },
  {
    sector: 'Food & Beverage',
    title: 'Componentistica INOX',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVXfi5F6ACchgGdf2SA38Qp-R4S6BKzdU0wRKfOOnpmebNiQHdHNe0x6aDMy9wZ7VzLIhtx_gzvErzpa7G0xaar0xfztjk_HI8AhC88AjV44XlAMN3szFmzObr7DXsBRctkoPllZXlEROKweq4VQeQnAXmU0ZicTxQY7tZDwBAULTUfhJJ1sKnHE5BKVDThZr4ZaP5peNh0iyJkl65eBZQLtZQW42Pft6xd2PYEcoqFqUYgjF8_kvF-oAtLSN15g2NFiW6X1Mgug',
    alt: 'Serbatoi in acciaio inox per il settore alimentare',
    colClass: 'md:col-span-4',
  },
]

const row2 = [
  {
    sector: 'Design',
    title: 'Facciate Micro-forate',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUHT-tzDuf0dH-xfsiMGcTOGi3NK-I_QTZC_dUSoq_ofRiVeR9XVfsX5vzEpDGp6Hr8eZIUeJHecpcW3FXsrCfooSmJbJs5opjhvPhOys4X0iIiI_nwcuUVRhDofkkfmG4KHVLeYhU0sIWDy8OMf4o-XU9n-Y_2fU-XXVqaouKrQcsFE-WtMS_m293vuN5rOgHzlgoobE7UFR_MmdOvIHO7gnOQRxRV-p0M6Z8_s-Fay4lA9YEi1f9CXqhi3-UZIUimRGWarcDbQ',
    alt: 'Facciata microforata in metallo',
    colClass: 'md:col-span-4',
  },
  {
    sector: 'Agriculture',
    title: 'Basamenti per macchine agricole',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAceCXbqO-PZXg_PRwjMWqaHTtDXRx6IcrPO5Cygn33o508lU3Xs7T4r8afeRilzLY0vcrEJkNe4NL6H7SUHz31_w_J0fkxKx1F0KUwC4nBNBE6qHUoI93EbWN5rJztXYINj-0tu2m63kmlZGK700zJLqPe4QeAOMJ50CA3B6AuozmfYFXV_gez2pNqOuc1hegfoh6OxsyP-KOI0xjGhOvU2TzVMoKDmUMymakFMqVpw5IGS3cW9SbgemgfX_dkTCU9h3L-F_XMqA',
    alt: 'Basamento in acciaio per macchinario agricolo',
    colClass: 'md:col-span-8',
  },
]

function ProjectCard({
  sector,
  title,
  img,
  alt,
  colClass,
}: {
  sector: string
  title: string
  img: string
  alt: string
  colClass: string
}) {
  return (
    <div
      className={`${colClass} group relative overflow-hidden`}
      style={{ borderRadius: 'var(--radius-sm)', aspectRatio: '16/9', minHeight: '320px' }}
    >
      <Image
        src={img}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 66vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
        }}
      />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <div
          className="font-body font-medium uppercase mb-2"
          style={{
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'var(--color-primary-light)',
          }}
        >
          {sector}
        </div>
        <h3
          className="font-display"
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            fontWeight: 700,
            color: 'var(--color-text)',
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="text-center">
            <h2
              className="font-display mb-3"
              style={{
                fontSize: 'clamp(32px, 4vw, 51px)',
                fontWeight: 800,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              Portfolio Progetti
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: 'clamp(15px, 1vw, 17px)',
                color: 'var(--color-accent-silver)',
                fontWeight: 300,
                maxWidth: '55ch',
              }}
            >
              Casi reali, soluzioni concrete. Guarda cosa siamo capaci di fare.
            </p>
          </div>
          <a
            href="/progetti"
            className="inline-flex items-center gap-2 font-display font-semibold uppercase group transition-all duration-200"
            style={{
              fontSize: '13px',
              letterSpacing: '0.08em',
              color: 'var(--color-primary-light)',
              padding: '10px 24px',
              border: '1px solid rgba(77,143,212,0.3)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Vedi tutti i progetti
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Row 1: 8 + 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4" style={{ height: '420px' }}>
          {row1.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* Row 2: 4 + 8 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4" style={{ height: '360px' }}>
          {row2.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
