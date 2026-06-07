import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-700/50 bg-navy-800/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <button onClick={() => scrollTo('home')} className="font-display text-lg font-semibold text-slate-100 hover:text-gold-400 transition-colors">
            Vishnu <span className="text-gold-400">Sagar V</span>
          </button>
          <p className="text-sm text-slate-500 mt-1">AI/ML Engineer · Problem Solver · Innovator</p>
          <p className="text-xs text-slate-600 mt-1">Sri Eshwar College of Engineering, Coimbatore</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/vishnusagar2025" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/vishnusagar2025" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:vishnusagar.v2025aiml@sece.ac.in"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200" aria-label="Email">
            <FaEnvelope size={20} />
          </a>
          <a href="tel:+919488086900"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200" aria-label="Phone">
            <FaPhone size={18} />
          </a>
        </div>

        <p className="text-xs text-slate-600">&copy; {year} Vishnu Sagar V. All rights reserved.</p>
      </div>
    </footer>
  )
}
