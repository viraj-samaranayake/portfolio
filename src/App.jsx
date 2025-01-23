import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Certification from "./components/Certification"
import ScrollButton from "./components/ScrollButton"
import Footer from "./components/Footer"

export default function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <ScrollButton/>
      <Skills/>
      <Projects/>
      <Certification/>
      <Contact/>
      <Footer/>
    </>
  )
}

