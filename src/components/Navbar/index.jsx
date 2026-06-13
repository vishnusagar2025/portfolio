import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: 'home',            label: 'Home' },
  { to: 'about',           label: 'About' },
  { to: 'skills',          label: 'Skills' },
  { to: 'experience',      label: 'Experience' },
  { to: 'projects',        label: 'Projects' },
  { to: 'research',        label: 'Research' },
  { to: 'certifications',  label: 'Certifications' },
  { to: 'patent',          label: 'Patent' },
  { to: 'achievements',    label: 'Achievements' },
  { to: 'contact',         label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeSection, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Highlight active section
      const sections = navLinks.map(l => document.getElementById(l.to))
      sections.forEach((sec) => {
        if (!sec) return
        const rect = sec.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded bg-gold-500 flex items-center justify-center font-display font-bold text-navy-900 text-sm group-hover:bg-gold-400 transition-colors">
            V
          </span>
          <span className="font-display font-semibold text-slate-100 hidden sm:block">
            Vishnu Sagar <span className="text-gold-400">V</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <button
              key={to}
              onClick={() => scrollTo(to)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === to
                  ? 'text-gold-400 bg-gold-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-800/95 backdrop-blur-md border-b border-slate-700/50"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ to, label }) => (
                <button
                  key={to}
                  onClick={() => scrollTo(to)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
                    activeSection === to
                      ? 'text-gold-400 bg-gold-500/10'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
