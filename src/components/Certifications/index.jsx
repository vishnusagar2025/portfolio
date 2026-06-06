import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import { certifications } from '../../data/certifications'

const categoryColors = {
  Cloud:      'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'AI/ML':    'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Management: 'text-green-400 bg-green-400/10 border-green-400/20',
  DevOps:     'text-orange-400 bg-orange-400/10 border-orange-400/20',
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="certifications" className="py-24 bg-navy-800/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">Credentials</p>
          <h2 className="section-heading mb-12">
            Certifications &amp; <span className="text-gold-400">Licenses</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                className="card group flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <FaAward className="text-gold-400" size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-slate-100 text-sm group-hover:text-gold-400 transition-colors duration-200 leading-snug">
                      {cert.title}
                    </h3>
                    <span
                      className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-mono ${
                        categoryColors[cert.category] ?? 'text-slate-400 bg-slate-400/10 border-slate-400/20'
                      }`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  <p className="text-gold-400 text-xs font-mono mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mb-3">{cert.date} &nbsp;·&nbsp; ID: {cert.credentialId}</p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-gold-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={10} /> Verify Credential
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
