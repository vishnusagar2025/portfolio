import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/80" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/5 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-500/8 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Profile photo placeholder */}
          <motion.div variants={item} className="animate-float">
            <div className="w-32 h-32 rounded-full border-4 border-gold-500/40 overflow-hidden bg-navy-700 flex items-center justify-center shadow-2xl shadow-gold-500/10">
              <img
                src="/profile-photo.jpg"
                alt="Vishnu SA"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML =
                    '<span class="font-display text-4xl font-bold text-gold-400">VS</span>'
                }}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="section-subheading">
            Engineer &nbsp;·&nbsp; Researcher &nbsp;·&nbsp; Innovator
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-slate-100 leading-none"
          >
            Vishnu <span className="text-gold-400">SA</span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={item}
            className="max-w-2xl text-lg text-slate-400 leading-relaxed"
          >
            Building intelligent systems at the intersection of software engineering,
            machine learning, and emerging technologies. Turning research into
            impactful, production-ready solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/resume" className="btn-outline">
              Download Resume
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-6 mt-2">
            <a
              href="https://github.com/yourhandle"
              target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <FaArrowDown size={12} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
