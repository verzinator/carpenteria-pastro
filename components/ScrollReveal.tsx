'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return null
}
