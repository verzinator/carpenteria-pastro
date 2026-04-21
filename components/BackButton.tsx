'use client'

import { useEffect } from 'react'

export default function BackButton({ href, label }: { href: string; label: string }) {
  useEffect(() => {
    const handlePopState = () => {
      window.location.href = href
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [href])

  return (
    <button
      onClick={() => { window.location.href = href }}
      className="font-body font-medium uppercase inline-flex items-center gap-2 mb-8"
      style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      ← {label}
    </button>
  )
}
