import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SifuBg from "./assets/img/sifuStaff.png";

function App() {
  return (
    <div className="bg-gradient-to-r from-theme-gray to-theme-brown text-white">
      <Navbar />
      <img
        className="absolute"
        src={SifuBg}
        style={{
          aspectRatio: "2/2",
          height: "500vh",
          left: "20vw",
          overflow: "scroll",
        }}
        alt="Sifu character"
      />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
