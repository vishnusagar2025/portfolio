import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { label: 'SkillRack Problems', value: '400+' },
  { label: 'LeetCode Problems', value: '80+' },
  { label: 'CodeChef Problems', value: '220+' },
  { label: 'NPTEL Score', value: '100%' },
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
          Passionate About <span className="text-gold-400">AI & Innovation</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I'm <span className="text-slate-200 font-medium">Vishnu Sagar V</span>, a B.E CSE (AI-ML) student at
              Sri Eshwar College of Engineering (SGPA: 7.95, Batch 2025–2029). I'm passionate about
              applying artificial intelligence to solve real-world problems.
            </p>
            <p>
              My journey spans medical imaging AI, robotics, financial risk prediction, and student performance analytics.
              I love combining creativity with technical depth to build impactful systems.
            </p>
            <p>
              Beyond coding, I'm the <span className="text-gold-400">Sergeant at Arms</span> of Sri Eshwar Toastmasters Club,
              a <span className="text-gold-400">Student Mentor</span> at my college, and an active competitive programmer
              across multiple platforms.
            </p>
            <div className="pt-2">
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Contact</p>
              <p className="text-sm">📧 vishnusagar.v2025aiml@sece.ac.in</p>
              <p className="text-sm">📞 +91 94880 86900</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                className="card text-center"
              >
                <p className="font-display text-4xl font-bold text-gold-400 mb-1">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
