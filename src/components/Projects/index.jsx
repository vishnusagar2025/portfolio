import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects'

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      className="card group flex flex-col h-full"
    >
      {project.featured && (
        <span className="inline-block mb-3 text-xs font-mono text-gold-400 border border-gold-500/30 rounded-full px-2 py-0.5 bg-gold-500/5">
          ★ Featured
        </span>
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-semibold text-slate-100 group-hover:text-gold-400 transition-colors duration-200">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs px-2 py-0.5 rounded bg-navy-700 text-slate-400 font-mono">
            {project.category}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-slate-700/50">
        {project.github && (
          <a
            href={project.github}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-gold-400 transition-colors text-sm"
          >
            <FaGithub size={14} /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-gold-400 transition-colors text-sm"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-24 bg-navy-800/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">Portfolio</p>
          <h2 className="section-heading mb-12">
            Featured <span className="text-gold-400">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
