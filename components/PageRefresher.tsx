'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PageRefresher() {
  const router = useRouter()

  useEffect(() => {
    // Force re-fetch RSC payload on every mount (fixes stale router cache on gesture back)
    router.refresh()

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload()
    }
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [router])

  return null
}
