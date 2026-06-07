import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowDown, FaEnvelope } from 'react-icons/fa'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/5 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-500/8 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-6">

          <motion.div variants={item} className="animate-float">
            <div className="w-36 h-36 rounded-full border-4 border-gold-500/40 overflow-hidden bg-navy-700 flex items-center justify-center shadow-2xl shadow-gold-500/10">
              <img
                src="/profile-photo.png"
                alt="Vishnu Sagar V"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<span class="font-display text-4xl font-bold text-gold-400">VS</span>'
                }}
              />
            </div>
          </motion.div>

          <motion.p variants={item} className="section-subheading">
            AI/ML Engineer &nbsp;·&nbsp; Problem Solver &nbsp;·&nbsp; Innovator
          </motion.p>

          <motion.h1 variants={item} className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-slate-100 leading-none">
            Vishnu <span className="text-gold-400">Sagar V</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-2xl text-lg text-slate-400 leading-relaxed">
            Aspiring AI/ML Engineer with strong foundations in Python, C++, and Data Structures & Algorithms.
            Building real-world AI solutions — from medical imaging to smart robotics — at Sri Eshwar College of Engineering.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button onClick={() => scrollTo('projects')} className="btn-primary">View Projects</button>
            <a href="/resume.pdf" download="Vishnu_Sagar_V_Resume.pdf" className="btn-outline">Download Resume</a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 mt-2">
            <a href="https://github.com/vishnusagar2025" target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors duration-200">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/vishnusagar2025" target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors duration-200">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:vishnusagar.v2025aiml@sece.ac.in"
              className="text-slate-500 hover:text-gold-400 transition-colors duration-200">
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <FaArrowDown size={12} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
