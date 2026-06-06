import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import { research } from '../../data/research'

export default function Research() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="research" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subheading">Academia</p>
        <h2 className="section-heading mb-12">
          Research <span className="text-gold-400">Publications</span>
        </h2>

        <div className="space-y-6">
          {research.map((paper, i) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              className="card group"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-100 group-hover:text-gold-400 transition-colors duration-200 mb-1">
                    {paper.title}
                  </h3>
                  <p className="text-gold-400 font-mono text-sm">
                    {paper.journal} &nbsp;·&nbsp; {paper.year}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {paper.pdf && (
                    <a
                      href={paper.pdf}
                      target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-500 hover:text-gold-400 transition-colors text-sm"
                    >
                      <FaFilePdf size={14} /> PDF
                    </a>
                  )}
                  {paper.doi && (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-500 hover:text-gold-400 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt size={12} /> DOI
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{paper.abstract}</p>

              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
