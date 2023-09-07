import React from "react";
import { BrowserRouter as BRouter } from "react-router-dom";
import Button from "./atoms/Button";
import Reveal from "./animation/Reveal";
// import { ReactComponent as GithubLogo } from "../assets/img/githubLogo.png";

const Navbar = () => {
  return (
    <Reveal downwards={true} slider={false} width="100%" delay={0.5}>
      <BRouter>
        <div className="flex h-20 items-center pr-6 pl-6">
          <p className="grow flex justify-center text-xl ">About</p>
          <p className="grow flex justify-center text-xl">Skills</p>
          <p className="grow flex justify-center text-5xl pt-3 ">
            Mads B&#229;rnes
          </p>
          <p className="grow flex justify-center text-xl">Projects</p>
          <div className="grow flex justify-center">
            <Button>
              <span className="text-2xl">Contact Me</span>
            </Button>
          </div>
        </div>
      </BRouter>
    </Reveal>
  );
};

export default Navbar;
