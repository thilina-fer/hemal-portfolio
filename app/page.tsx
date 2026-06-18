import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import DatabaseExpertise from '@/components/DatabaseExpertise'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import CurrentlyExploring from '@/components/CurrentlyExploring'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DatabaseExpertise />
      <Experience />
      <Projects />
      <Education />
      <CurrentlyExploring />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
