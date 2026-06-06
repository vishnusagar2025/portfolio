import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subheading">Portfolio</p>
          <h1 className="section-heading">
            All <span className="text-gold-400">Projects</span>
          </h1>
          <p className="text-slate-400 mt-2 max-w-xl">
            A collection of projects spanning AI/ML, IoT, blockchain, and full-stack development.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
                active === cat
                  ? 'bg-gold-500 text-navy-900 font-semibold'
                  : 'border border-slate-600 text-slate-400 hover:border-gold-500/50 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card group flex flex-col h-full"
            >
              {project.featured && (
                <span className="inline-block mb-3 text-xs font-mono text-gold-400 border border-gold-500/30 rounded-full px-2 py-0.5 bg-gold-500/5 w-fit">
                  ★ Featured
                </span>
              )}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-slate-100 group-hover:text-gold-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded bg-navy-700 text-slate-400 font-mono">
                  {project.category}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => <span key={t} className="tag text-xs">{t}</span>)}
              </div>
              <div className="flex items-center gap-4 pt-3 border-t border-slate-700/50">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-gold-400 transition-colors text-sm">
                    <FaGithub size={14} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-gold-400 transition-colors text-sm">
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
