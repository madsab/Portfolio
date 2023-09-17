import React, { useEffect, useState } from "react";
import Button from "./atoms/Button";
import Reveal from "./animation/Reveal";
import githubLogo from "../assets/img/github-mark-white.svg";
import linkdnLogo from "../assets/img/linkdnLogo.png";
import SifuIcon from "../assets/img/SifuIcon.svg";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  //Check user scrolling
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 150 ? setScrolling(true) : setScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarStyle = {
    backgroundColor: scrolling ? "black" : "transparent",
    opacity: "0.85",
    transition: "0.5s ease-in-out",
    paddingTop: scrolling ? 0 : 10,
  };

  return (
    <div className="sticky top-0 pr-6 pl-6 z-30 " style={navBarStyle}>
      <Reveal downwards={true} slider={false} width="100%" delay={0.5}>
        <nav className="flex h-20 items-center">
          <div className="grow flex space-x-10 items-center">
            <div className="bg-slate-200 rounded-3xl overflow-hidden">
              <img src={SifuIcon} alt="Sifu face" width={50} height={50} />
            </div>
            <p className="flex justify-center text-xl ">About</p>
            <p className="flex justify-center text-xl">Skills</p>
            <p className="flex justify-center text-xl">Projects</p>
          </div>
          <div className="grow flex justify-end">
            <img src={linkdnLogo} alt="Linkdn logo" width={45} />
            <img src={githubLogo} alt="Github logo" width={45} />
            <Button>
              <span className="text-2xl">Contact Me</span>
            </Button>
          </div>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
