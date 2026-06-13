import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { sendContactMessage } from '../../services/api'

const contactInfo = [
  { icon: FaEnvelope,     label: 'Email',    value: 'vishnusagar.v2025aiml@sece.ac.in', href: 'mailto:vishnusagar.v2025aiml@sece.ac.in' },
  { icon: FaPhone,        label: 'Phone',    value: '+91 94880 86900', href: 'tel:+919488086900' },
  { icon: FaLinkedin,     label: 'LinkedIn', value: 'linkedin.com/in/vishnusagar2025', href: 'https://linkedin.com/in/vishnusagar2025' },
  { icon: FaGithub,       label: 'GitHub',   value: 'github.com/vishnusagar2025', href: 'https://github.com/vishnusagar2025' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Coimbatore, Tamil Nadu, India', href: null },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-navy-800/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading mb-12">
            Let's <span className="text-gold-400">Connect</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm always open to new opportunities, collaborations, and interesting conversations.
                Whether it's an AI project, internship opportunity, or just a tech chat — feel free to reach out!
              </p>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <Icon className="text-gold-400" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-mono uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noreferrer"
                          className="text-slate-300 text-sm hover:text-gold-400 transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    className="w-full bg-navy-700 border border-slate-600/50 rounded-lg px-4 py-2.5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-colors"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-navy-700 border border-slate-600/50 rounded-lg px-4 py-2.5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-colors"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                  className="w-full bg-navy-700 border border-slate-600/50 rounded-lg px-4 py-2.5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-colors"
                  placeholder="What's this about?" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  className="w-full bg-navy-700 border border-slate-600/50 rounded-lg px-4 py-2.5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
                  placeholder="Tell me more..." />
              </div>
              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center disabled:opacity-60">
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-400 text-sm text-center">Message sent! I'll get back to you soon.</p>}
              {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
