import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="section-subheading">Career Overview</p>
          <h1 className="section-heading mb-4">
            My <span className="text-gold-400">Resume</span>
          </h1>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download className="btn-primary">
              <FaDownload size={14} /> Download PDF
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">
              <FaExternalLinkAlt size={12} /> View Full Screen
            </a>
          </div>
        </motion.div>

        {/* PDF embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/30"
          style={{ height: '85vh' }}
        >
          <iframe
            src="/resume.pdf"
            title="Vishnu SA Resume"
            className="w-full h-full"
            style={{ border: 'none' }}
          >
            <p className="text-slate-400 p-8 text-center">
              Your browser doesn't support PDF embedding.{' '}
              <a href="/resume.pdf" className="text-gold-400 hover:underline">Download the PDF</a> instead.
            </p>
          </iframe>
        </motion.div>
      </div>
    </div>
  )
}
