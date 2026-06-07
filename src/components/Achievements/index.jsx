import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaStar, FaUsers } from 'react-icons/fa'

const achievements = [
  {
    icon: FaTrophy,
    title: '1st Place – Coding Carnival',
    description: 'Won first place in the Coding Carnival competition at Sri Eshwar College of Engineering.',
    year: '2025',
    color: 'text-gold-400',
  },
  {
    icon: FaStar,
    title: 'Top 1% – NPTEL Joy of Computing (Python)',
    description: 'Scored 100% in the NPTEL "Joy of Computing using Python" exam, ranking in the Top 1% nationwide.',
    year: '2025',
    color: 'text-purple-400',
  },
  {
    icon: FaUsers,
    title: 'Team Lead – Acumen Hackathon 2026',
    description: 'Led the team as Team Lead at Acumen Hackathon 2026 held at Kongu College of Engineering.',
    year: '2026',
    color: 'text-blue-400',
  },
  {
    icon: FaMedal,
    title: '2nd Place – Paper Presentation & Ideathon (CIET)',
    description: 'Secured second place in both paper presentation and ideathon at Hecura Contest 2026 (CIET).',
    year: '2026',
    color: 'text-green-400',
  },
  {
    icon: FaTrophy,
    title: 'Toastmasters – Presentation Mastery Pathway',
    description: 'Completed the Presentation Mastery Pathway at Sri Eshwar Toastmasters Club as Sergeant at Arms.',
    year: '2025',
    color: 'text-orange-400',
  },
  {
    icon: FaStar,
    title: 'Idea Patent Published',
    description: 'Published an idea patent at Sri Eshwar College of Engineering for an innovative technical solution.',
    year: '2026',
    color: 'text-gold-400',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  </div>
                  <p className="text-xs text-gold-500 font-mono mb-1">{item.year}</p>
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
