import Contact from '../../components/Contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <p className="section-subheading">Reach Out</p>
        <h1 className="section-heading">
          Say <span className="text-gold-400">Hello</span>
        </h1>
      </div>
      <Contact />
    </div>
  )
}
