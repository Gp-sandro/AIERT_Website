import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'py-3 bg-bg/85 backdrop-blur-xl border-b border-border'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="AIERT" className="w-10 h-10 rounded-full" />
          <span className="font-extrabold text-lg tracking-tight text-text">AIERT</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-text-secondary text-sm font-medium hover:text-coral transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-coral text-bg px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-coral-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-coral-glow-strong)] transition-all"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text z-[60]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 bg-bg/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-50 md:hidden">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-text text-2xl font-semibold hover:text-coral transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-coral text-bg px-8 py-3 rounded-lg text-lg font-bold hover:bg-coral-light transition-all"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
