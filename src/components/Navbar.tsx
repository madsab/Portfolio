import React from "react";
import { BrowserRouter as BRouter } from "react-router-dom";
import Button from "./atoms/Button";
import Reveal from "./animation/Reveal";
import githublogo from "../assets/img/githubLogo.png";
import linkdnLogo from "../assets/img/linkdnLogo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 pr-6 pl-6 z-30">
      <Reveal downwards={true} slider={false} width="100%" delay={0.5}>
        <nav className="flex h-20 items-center">
          <div className="grow flex space-x-10">
            <p className="flex justify-center text-xl ">About</p>
            <p className="flex justify-center text-xl">Skills</p>
            <p className="flex justify-center text-xl">Projects</p>
          </div>
          <div className="grow flex justify-end">
            <img src={linkdnLogo} alt="Linkdn logo" width={45} />
            <img src={githublogo} alt="Github logo" width={45} />
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
