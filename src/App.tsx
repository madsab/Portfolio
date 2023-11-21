import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import SoMeContainer from "./components/organisms/SoMeContainer";
import Footer from "./components/Footer";

function App() {
  const [trigger, setTrigger] = useState(true);
  return (
    <div
      id="top"
      className="bg-gradient-to-b from-[#202020] text-theme-text w-screen h-screen overflow-auto snap-mandatory snap-y"
    >
      <Navbar />
      <SoMeContainer className="sticky top-[65%] h-1 ml-7 z-10 max-md:hidden" />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
