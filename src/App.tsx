import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SifuCharacter from "./components/SifuCharacter";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      id="top"
      className="bg-gradient-to-r from-theme-gray to-theme-brown text-white "
    >
      <SifuCharacter />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
