'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function ProcessoSection() {
  const imgRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imgRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const viewH = window.innerHeight
      const progress = (viewH - rect.top) / (viewH + rect.height)
      const offset = (progress - 0.5) * 180
      imgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'var(--space-24)',
        paddingBottom: 'var(--space-24)',
      }}
    >
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1600px' }}>
        <div
          className="relative overflow-hidden"
          style={{
            height: 'clamp(380px, 45vw, 600px)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          {/* Parallax image wrapper */}
          <div
            ref={imgRef}
            className="absolute inset-0"
            style={{ top: '-90px', bottom: '-90px', willChange: 'transform' }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bXdAqBr_N0pcCHHGZU8U1LvJX4TLrCfD9qZBjhZS1d--xnyeZmASr642yIAcqK7SBwRm-bBKJQpbeP-y2VVu-ecv_aLhWF6EhsdG_HkoRnGPdXs74sy66pLwromSHK6lV98kbVhZnHhA0dCmkTlunM3kskMwfPS5s1x2gU7VyeBl9dvZlvcNd2jRO1MqJLmNbZQsxDPnC2VHH2d6MineQZj6jjCEPLb2SuLid4Er7G_ak3lS28iECvnmMFpIYeyf5LEF2WKf_A"
              alt="Stabilimento Carpenteria Pastro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
              quality={100}
              priority
            />
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08)), linear-gradient(to bottom, rgba(10,11,13,0.6) 0%, transparent 50%, rgba(10,11,13,0.3) 100%)',
            }}
          />

          {/* Text */}
          <div className="absolute top-0 left-0 p-10 md:p-14 z-20">
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 4vw, 51px)',
                fontWeight: 800,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                maxWidth: '600px',
              }}
            >
              Precisione che entra in produzione.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
