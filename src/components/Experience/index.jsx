import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    role: 'Sergeant at Arms',
    company: 'Sri Eshwar Toastmasters Club',
    period: '2025 – Present',
    type: 'Leadership',
    points: [
      'Completed the Pathways in Presentation Mastery, building strong public speaking and communication skills.',
      'Currently pursuing the Persuasive Influence Pathway to master advanced persuasion and leadership.',
      'Manage club operations and ensure smooth conduct of all Toastmasters meetings and events.',
    ],
    tech: ['Public Speaking', 'Leadership', 'Communication', 'Persuasion'],
  },
  {
    role: 'Student Mentor',
    company: 'Sri Eshwar College of Engineering',
    period: '2025 – Present',
    type: 'Mentorship',
    points: [
      'Mentoring junior students in programming fundamentals, AI/ML concepts, and problem-solving strategies.',
      'Helping peers navigate academic challenges and build strong technical foundations.',
      'Organising study sessions and guiding students on competitive programming platforms.',
    ],
    tech: ['Mentoring', 'Python', 'C++', 'AI/ML', 'DSA'],
  },
  {
    role: 'B.E CSE (AI-ML) Student',
    company: 'Sri Eshwar College of Engineering',
    period: '2025 – 2029',
    type: 'Education',
    points: [
      'Pursuing Bachelor of Engineering in Computer Science with specialisation in Artificial Intelligence & Machine Learning.',
      'Maintaining a strong SGPA of 7.95 while actively building real-world AI projects.',
      'Engaging in hackathons, paper presentations, and technical competitions at national level.',
    ],
    tech: ['AI/ML', 'Python', 'C++', 'Data Structures', 'Machine Learning'],
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
        <p className="section-subheading">Experience & Education</p>
        <h2 className="section-heading mb-12">
          My <span className="text-gold-400">Journey</span>
        </h2>

        <div className="relative">
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
                    {exp.tech.map((t) => <span key={t} className="tag">{t}</span>)}
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
