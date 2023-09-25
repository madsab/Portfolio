import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SifuBg from "./assets/img/sifuStaff.png";
import Skills from "./components/Skills";
import PopUp from "./components/animation/PopUp";

function App() {
  const [trigger, setTrigger] = useState(true);
  return (
    <div
      id="top"
      className="bg-gradient-to-r from-theme-gray to-theme-brown text-white"
    >
      <Navbar />
      {/* <img
        className="absolute"
        src={SifuBg}
        style={{
          aspectRatio: "2/2",
          height: "500vh",
          left: "20vw",
          overflow: "scroll",
        }}
        alt="Sifu character"
      /> */}
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
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
