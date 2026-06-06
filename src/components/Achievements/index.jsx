import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa'

const achievements = [
  {
    icon: FaTrophy,
    title: '1st Place – National Hackathon 2023',
    description: 'Won first place among 500+ teams for an AI-driven healthcare monitoring system.',
    year: '2023',
    color: 'text-gold-400',
  },
  {
    icon: FaMedal,
    title: 'Best Paper Award – ICAI 2023',
    description: 'Recognized for outstanding research contribution at the International Conference on AI.',
    year: '2023',
    color: 'text-blue-400',
  },
  {
    icon: FaStar,
    title: 'Dean\'s List – Academic Excellence',
    description: 'Consistently maintained top 5% academic standing throughout undergraduate studies.',
    year: '2022',
    color: 'text-purple-400',
  },
  {
    icon: FaTrophy,
    title: 'Smart India Hackathon Finalist',
    description: 'Selected among top 10 teams nationwide for innovative IoT-based smart city solution.',
    year: '2022',
    color: 'text-green-400',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subheading">Recognition</p>
        <h2 className="section-heading mb-12">
          Awards &amp; <span className="text-gold-400">Achievements</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="card flex gap-4 group"
              >
                <div className={`shrink-0 mt-1 ${item.color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-slate-100 text-sm group-hover:text-gold-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <span className="text-xs text-slate-600 font-mono">{item.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
