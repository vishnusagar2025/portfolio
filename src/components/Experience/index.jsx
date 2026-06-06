import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Tech Corp Pvt Ltd',
    period: 'Jan 2024 – Present',
    type: 'Full-time',
    points: [
      'Architected and deployed microservices handling 100K+ daily API requests on AWS.',
      'Led a team of 4 engineers to deliver an AI-powered analytics dashboard, reducing report generation time by 70%.',
      'Implemented CI/CD pipelines with GitHub Actions, cutting deployment time from 45 min to 8 min.',
    ],
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Research Intern',
    company: 'AI Research Lab, IIT Madras',
    period: 'May 2023 – Dec 2023',
    type: 'Internship',
    points: [
      'Published research on deep learning for predictive maintenance in IEEE Transactions.',
      'Developed a Python library for time-series anomaly detection, now used by 3 industrial partners.',
      'Presented findings at the International Conference on AI (ICAI 2023).',
    ],
    tech: ['Python', 'PyTorch', 'LSTM', 'Scikit-learn'],
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: 'Jun 2022 – Apr 2023',
    type: 'Full-time',
    points: [
      'Built the end-to-end SaaS platform from scratch, onboarding 500+ customers in 3 months.',
      'Integrated third-party APIs (Stripe, Twilio, SendGrid) reducing manual workflows by 40%.',
      'Optimized database queries, improving page load speed by 3×.',
    ],
    tech: ['React', 'Express', 'MongoDB', 'Stripe API'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subheading">Career</p>
        <h2 className="section-heading mb-12">
          Work <span className="text-gold-400">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/60 via-slate-600/40 to-transparent ml-5 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-navy-800 border-2 border-gold-500/50 items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                </div>

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-semibold text-slate-100 text-lg">{exp.role}</h3>
                      <p className="text-gold-400 font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-sm font-mono">{exp.period}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-gold-500 mt-1.5 shrink-0">›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
