import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Python3', 'C', 'C++'],
  },
  {
    category: 'AI & ML',
    skills: ['Machine Learning', 'Deep Learning', 'CNN', 'Data Analysis', 'Scikit-learn', 'TensorFlow'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'Postman'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'SQL'],
  },
  {
    category: 'Competitive Programming',
    skills: ['SkillRack (400+)', 'LeetCode (80+)', 'CodeChef (220+)', 'HackerRank'],
  },
  {
    category: 'Soft Skills',
    skills: ['Public Speaking', 'Team Leadership', 'Mentoring', 'Problem Solving'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-navy-800/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">Technical Expertise</p>
          <h2 className="section-heading mb-12">
            Skills &amp; <span className="text-gold-400">Technologies</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.1 + 0.2, duration: 0.5 }}
                className="card"
              >
                <h3 className="font-mono text-xs text-gold-400 tracking-widest uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
