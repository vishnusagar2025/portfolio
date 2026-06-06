import { motion } from 'framer-motion'
import { FaFilePdf, FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa'
import { research } from '../../data/research'

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subheading">Academia</p>
          <h1 className="section-heading">
            Research <span className="text-gold-400">Publications</span>
          </h1>
          <p className="text-slate-400 mt-2 max-w-xl">
            Peer-reviewed publications in AI, machine learning, and intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {research.map((paper, i) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              className="card group relative"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-slate-700/40" size={28} />

              <div className="mb-4">
                <h2 className="font-semibold text-slate-100 text-lg group-hover:text-gold-400 transition-colors duration-200 mb-2 pr-10 leading-snug">
                  {paper.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-gold-400 font-mono text-sm">{paper.journal}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-500 font-mono text-sm">{paper.year}</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{paper.abstract}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {paper.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>

              <div className="flex items-center gap-5 pt-4 border-t border-slate-700/50">
                {paper.pdf && (
                  <a href={paper.pdf} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-gold-400 transition-colors">
                    <FaFilePdf size={14} /> Download PDF
                  </a>
                )}
                {paper.doi && (
                  <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-gold-400 transition-colors">
                    <FaExternalLinkAlt size={12} /> View DOI
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
