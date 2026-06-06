import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700/50 bg-navy-800/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-semibold text-slate-100">
            Vishnu <span className="text-gold-400">SA</span>
          </p>
          <p className="text-sm text-slate-500 mt-1">Engineer · Researcher · Innovator</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yourhandle"
            target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <Link
            to="/contact"
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
            aria-label="Contact"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>

        <p className="text-xs text-slate-600">
          &copy; {year} Vishnu SA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
