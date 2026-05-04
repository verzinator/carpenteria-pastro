'use client'

import Image from 'next/image'

const milestones = [
  {
    year: '1998',
    title: 'Fondazione',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2ADuAWHtWE90SDZSCrB04s-wq--eMmwKkwgfVOIbaKcapGbi5K_FFOe1ld4eDiBCFsTVngTf_SbOkx9K5zCt_4jiw0QzfQUgPDEi7KDjh1KcU_YQAu276YEcJybaxTdHmVfyDwL06tTWoSXMQh4cYMRz9Nr5U82DKk8veTtlUhJLVdP8LiR6Z369oCLEhDCbK1FCiqXwpOt2XpZfYcQv03vC1YsZ2g6VczJV-wxLLQXf1-z7BkyFq6pRAcnME25mb-DvIgzQ_Ng',
    alt: 'Officina Pastro fondazione 1998 carpenteria',
  },
  {
    year: '2005',
    title: 'Espansione',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWS3JokfGTEX-6d8XRTYcr32-GrhKKLjZSbBxX9hs-20CIShrboylZ75O8Ii2ac8txFPzRfq6rMjYVXgzpn4Z8vpG0RDc68uYVsef4AfNbsYVIgELzlAfygVl5btXxOSTjzB0LnAyI3u2x7NSYPEb7mwFhQADFnLBcl2r3UYD66p037r9KdzyC-_v3SLKTatzmJMgfBgyfCJUFQ1zBQtsC0EYUsj6BX70oYBhVEMfW82LyCRjLQD3uwtXBC5yH7ITEV69mHtlCuQ',
    alt: 'Stabilimento Pastro industriale carpenteria 2005',
  },
  {
    year: '2015',
    title: 'Hi-Tech',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE-i-wo2ZrYianVrL6MnocF7BxVDGxEA1D1xjegUJrI6DCVtnVDnoKrMlu5vM9YghVuyZ5NnjdO_aosBDidtG-10MPD540hx2TxgQNHYEiD5KPPtRiNHY2wYsyCAdW-9EEyKE1Vt_cnTxiWW1J7UjNBEkDoOjdALMki5XTBpCktT75A_xpGSGdbZJq1HyoRIjO-gEVmdxWkm9WmFT8DmO6ypM600EwRQgpywEeUNFT3heFTSenJBpGzp0wUzr7xKGvBZ8lop4gXw',
    alt: 'Taglio laser Pastro CNC carpenteria',
  },
  {
    year: '2023',
    title: 'Industria 4.0',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    alt: 'Digital twin Pastro industria 4.0 carpenteria',
  },
]

export default function StoriaSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-surface)', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-32)' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            La nostra storia
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(32px, 4vw, 51px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            Trent'anni di crescita
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div key={m.year} className="group">
              <div className="relative overflow-hidden mb-0" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>
              <div
                className="text-left"
                style={{ padding: '24px 12px', borderTop: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: 'clamp(19px, 2vw, 22px)', fontWeight: 700, color: 'var(--color-text)' }}
                >
                  {m.year}, {m.title}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: 'clamp(14px, 1vw, 15px)', color: 'var(--color-text-muted)', fontWeight: 300 }}
                >
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
