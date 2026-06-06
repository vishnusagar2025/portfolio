import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Research Papers', value: '2' },
  { label: 'Certifications', value: '4+' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subheading">About Me</p>
        <h2 className="section-heading mb-8">
          Passionate About Building <span className="text-gold-400">Meaningful Tech</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I'm a software engineer and researcher with a deep passion for artificial
              intelligence, distributed systems, and cutting-edge product development.
              My work bridges the gap between academic research and industrial application.
            </p>
            <p>
              Currently focused on building scalable AI solutions and contributing to
              open-source projects that make technology more accessible and impactful
              for real-world use cases.
            </p>
            <p>
              When I'm not coding, I'm reading about emerging tech trends, writing
              research papers, or mentoring aspiring developers in my community.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                className="card text-center"
              >
                <p className="font-display text-4xl font-bold text-gold-400 mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
