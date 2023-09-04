import React from "react";
import Banner from "./components/sections/Banner";
import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-r from-theme-gray to-theme-brown text-white flex justify-center">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
