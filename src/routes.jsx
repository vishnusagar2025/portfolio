import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Certifications from './pages/Certifications'
import Patent from './pages/Patent'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"               element={<Home />} />
      <Route path="/projects"       element={<Projects />} />
      <Route path="/research"       element={<Research />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/patent"         element={<Patent />} />
      <Route path="/contact"        element={<Contact />} />
      <Route path="/resume"         element={<Resume />} />
    </Routes>
  )
}
