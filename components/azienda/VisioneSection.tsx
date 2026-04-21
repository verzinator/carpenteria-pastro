import Image from 'next/image'
import { Lightbulb, Leaf, Settings2 } from 'lucide-react'

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovazione Continua',
    body: 'Investiamo costantemente nel R&D per anticipare le sfide costruttive di domani.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilità Integrata',
    body: 'Processi produttivi a basso impatto e riciclo totale degli scarti metallici.',
  },
  {
    icon: Settings2,
    title: 'Precisione Assoluta',
    body: 'Ogni saldatura, ogni taglio è sottoposto a rigorosi test di qualità metrologica.',
  },
]

export default function VisioneSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface-2)',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-32)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header — same pattern as homepage */}
        <div className="mb-16">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            Visione
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
            Come lavoriamo, dove andiamo
          </h2>
        </div>

        {/* Split layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text + pillars */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p
              className="font-body leading-relaxed mb-12"
              style={{
                fontSize: 'clamp(15px, 1vw, 17px)',
                color: 'var(--color-accent-silver)',
                fontWeight: 300,
                maxWidth: '520px',
              }}
            >
              Il nostro approccio si fonda su tre principi che guidano ogni decisione produttiva e commerciale.
            </p>

            <div className="space-y-8">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10"
                    style={{
                      backgroundColor: 'rgba(27,79,138,0.15)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-primary-light)' }} />
                  </div>
                  <div>
                    <h4
                      className="font-display uppercase mb-1"
                      style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '0.08em' }}
                    >
                      {title}
                    </h4>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: '14px', color: 'var(--color-accent-silver)', fontWeight: 300 }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative min-h-[440px] overflow-hidden" style={{ borderRadius: 'var(--radius-sm)' }}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDB1SqaAYGuf8iZSZJwxhaF5-0b8WX_fwSJbN-JznjBb0D32Qoxq88YiN_C6UAPUOi-qpn9o8jysZA5Nks-xlcvI1oqdSLgbWfV5RQqFxxLfhOry5jSSrwtIKechta-XY2GsqHxTGg2lu7BV_E2vBSViKQ3X1ndZ2pFAaarbOWbIdhIeaWZ8d07IRhq-JRzMxPq7R1QDeo4CgCNuG8KMWB4DgNl2N62hSN3k0hd2Q84zvTvOEIxAvtvkTDzIH4D1vKsegEes27zA"
              alt="Stabilimento produttivo Pastro"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.7) contrast(1.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
