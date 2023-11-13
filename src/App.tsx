import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PopUp from "./components/animation/PopUp";
import SifuCharacter from "./components/SifuCharacter";
import About from "./components/About";
import SoMeContainer from "./components/organisms/SoMeContainer";

function App() {
  const [trigger, setTrigger] = useState(true);
  return (
    <div
      id="top"
      className=" relative overflow-x-clip bg-gradient-to-r from-theme-gray to-theme-brown text-theme-text w-full "
    >
      <Navbar />
      <SoMeContainer className="sticky top-[65%] h-1 ml-7 max-sm:hidden" />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
