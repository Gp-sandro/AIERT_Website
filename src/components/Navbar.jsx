import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Product', href: '#product' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-bg/85 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'py-5'
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 relative z-10">
          <img src="/logo.png" alt="AIERT" className="w-9 h-9 rounded-full" />
          <span className="font-(--font-display) font-extrabold text-lg tracking-tight text-text">
            AIERT
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-(--font-display) text-sm font-medium text-text-dim hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="font-(--font-display) text-sm font-bold text-red border-2 border-red px-5 py-2 rounded-lg hover:bg-red hover:text-white transition-all"
          >
            Book a call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text z-60 relative"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {open ? (
          <div className="fixed inset-0 bg-bg/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-50 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-(--font-display) text-text text-2xl font-semibold hover:text-red transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="font-(--font-display) bg-red text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-red-hover transition-all"
            >
              Book a call
            </a>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
