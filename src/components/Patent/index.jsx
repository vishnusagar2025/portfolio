import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFileAlt } from 'react-icons/fa'

const patents = [
  {
    id: 1,
    title: 'DrainSafe Sentinel – AI-Robotics Hybrid System for Drainage Blockage and Toxic Gas Detection',
    patentNumber: 'Idea Patent – Sri Eshwar College of Engineering',
    filedDate: '2026',
    status: 'Published',
    inventors: ['Vishnu Sagar V'],
    abstract:
      'A novel hybrid system combining 60% Artificial Intelligence and 40% Robotics for autonomous detection of drainage blockages and harmful gas emissions in urban environments. The system provides real-time alerts and preventive measures to avoid hazardous situations in drainage infrastructure.',
    url: '',
  },
]

const statusColors = {
  Published: 'text-green-400 bg-green-400/10 border-green-400/30',
  Pending:   'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  Granted:   'text-gold-400 bg-gold-400/10 border-gold-400/30',
}

export default function Patent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="patent" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subheading">Intellectual Property</p>
        <h2 className="section-heading mb-12">
          Patents &amp; <span className="text-gold-400">Innovations</span>
        </h2>

        <div className="space-y-6">
          {patents.map((patent, i) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              className="card group"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mt-0.5">
                    <FaFileAlt className="text-gold-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 group-hover:text-gold-400 transition-colors duration-200 mb-1 max-w-2xl leading-snug">
                      {patent.title}
                    </h3>
                    <p className="text-gold-400 font-mono text-sm">{patent.patentNumber}</p>
                  </div>
                </div>
                <span className={`shrink-0 text-xs px-3 py-1 rounded-full border font-mono ${statusColors[patent.status]}`}>
                  {patent.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 pl-16">{patent.abstract}</p>

              <div className="pl-16 flex flex-wrap items-center gap-8 pt-4 border-t border-slate-700/50">
                <div>
                  <p className="text-xs text-slate-600 font-mono uppercase tracking-wider mb-0.5">Filed</p>
                  <p className="text-slate-300 text-sm">{patent.filedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-mono uppercase tracking-wider mb-0.5">Inventor</p>
                  <p className="text-slate-300 text-sm">{patent.inventors.join(', ')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
