'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Azienda', href: '/azienda' },
  { label: 'Lavorazioni', href: '/lavorazioni' },
  { label: 'Settori', href: '/settori' },
  { label: 'Progetti', href: '/progetti' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{
        backgroundColor: 'rgba(10, 11, 13, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'rgba(255,255,255,0.04)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <a href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
          <Image
            src="/pastro-logo.png"
            alt="Carpenteria Pastro"
            width={180}
            height={50}
            priority
            className="w-auto h-auto max-h-12 md:max-h-14"
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-xs font-semibold uppercase transition-colors duration-200 px-4 py-2"
                style={{
                  letterSpacing: '0.1em',
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                  border: isActive ? '1px solid var(--color-border-highlight)' : '1px solid transparent',
                  borderRadius: 'var(--radius-sm)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = 'var(--color-text)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = 'var(--color-text-muted)'
                }}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="/contatti"
            className="font-display text-xs font-semibold uppercase px-4 py-2 transition-all duration-200 ml-2"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary-hover) 100%)',
              color: '#fff',
              borderRadius: 'var(--radius-sm)',
              letterSpacing: '0.1em',
            }}
          >
            Contattaci
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: 'var(--color-accent-silver)' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col gap-2 px-6 pb-6"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-xs font-semibold uppercase tracking-widest py-3"
                style={{
                  letterSpacing: '0.1em',
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                  borderLeft: isActive ? '2px solid var(--color-primary-light)' : '2px solid transparent',
                  paddingLeft: isActive ? '12px' : '0',
                }}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="/contatti"
            onClick={() => setOpen(false)}
            className="font-display text-xs font-semibold uppercase text-center py-3 mt-2 transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary-hover) 100%)',
              color: '#fff',
              borderRadius: 'var(--radius-sm)',
              letterSpacing: '0.1em',
            }}
          >
            Contattaci
          </a>
        </div>
      )}
    </nav>
  )
}
