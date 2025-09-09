import About from "../../components/About"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import SoMeContainer from "../../components/organisms/SoMeContainer"

const IndexPage = () => {
  return (
    <div id="top" className="relative bg-gradient-to-b from-[#202020] text-theme-text w-screen snap-mandatory snap-y">
      <Navbar />
      <SoMeContainer className="sticky top-[65%] h-1 ml-7 z-10 max-md:hidden" />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default IndexPage
