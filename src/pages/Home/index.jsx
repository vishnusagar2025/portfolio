import Hero          from '../../components/Hero'
import About         from '../../components/About'
import Skills        from '../../components/Skills'
import Experience    from '../../components/Experience'
import Projects      from '../../components/Projects'
import Research      from '../../components/Research'
import Certifications from '../../components/Certifications'
import Patent        from '../../components/Patent'
import Achievements  from '../../components/Achievements'
import Contact       from '../../components/Contact'

export default function Home() {
  return (
    <>
      <section id="home">        <Hero />          </section>
      <section id="about">       <About />         </section>
      <section id="skills">      <Skills />        </section>
      <section id="experience">  <Experience />    </section>
      <section id="projects">    <Projects />      </section>
      <section id="research">    <Research />      </section>
      <section id="certifications"><Certifications /></section>
      <section id="patent">      <Patent />        </section>
      <section id="achievements"><Achievements />  </section>
      <section id="contact">     <Contact />       </section>
    </>
  )
}
