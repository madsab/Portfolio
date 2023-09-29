import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PopUp from "./components/animation/PopUp";
import SifuCharacter from "./components/SifuCharacter";
import About from "./components/About";

function App() {
  const [trigger, setTrigger] = useState(true);
  return (
    <div
      id="top"
      className="bg-gradient-to-r from-theme-gray to-theme-brown text-white box-border overflow-y-hidden "
    >
      <SifuCharacter />
      <Navbar />
      <div className=" sticky top-[30%] left-[15%] z-30 ">
        <PopUp fire={trigger}>
          <div className="bg-black rounded-lg flex flex-col items-center justify-center p-10 space-y-5">
            <p className="text-6xl">UNDER CONSTRUCTION!</p>
            <p>
              This site is currently under construction. Because of this some
              features may not be complete or not been added. More updates
              coming soon
            </p>
            <button
              className="border-2 p-3 rounded-lg"
              onClick={() => setTrigger(false)}
            >
              Close
            </button>
          </div>
        </PopUp>
      </div>

      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
