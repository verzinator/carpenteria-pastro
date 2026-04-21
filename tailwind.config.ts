import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      // mobile:  < 800px  (base — no prefix)
      // tablet:  800–1199px
      md: '800px',
      // desktop: ≥ 1200px
      lg: '1200px',
    },
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        'surface-3': 'var(--color-surface-3)',
        'c-border': 'var(--color-border)',
        'border-highlight': 'var(--color-border-highlight)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',
        'accent-silver': 'var(--color-accent-silver)',
        'accent-silver-bright': 'var(--color-accent-silver-bright)',
        'c-text': 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-faint': 'var(--color-text-faint)',
        divider: 'var(--color-divider)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        DEFAULT: 'var(--radius-sm)',
      },
    },
  },
  plugins: [],
}

export default config
