import React, { useEffect, useState } from "react";
import Button from "./atoms/Button";
import Reveal from "./animation/Reveal";

import githubLogo from "../assets/img/Github_logo_white.svg";
import linkdnLogo from "../assets/img/Linkdn_logo.png";
import SifuIcon from "../assets/img/SifuIcon.svg";
import Icon from "./atoms/Icon";
import Link from "./atoms/Link";

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
          <div className="grow flex space-x-10 items-center ml-4">
            <Link to="top" background="bg-slate-200">
              <img src={SifuIcon} alt="Sifu face" width={50} height={50} />
            </Link>
            <Link to="about">About</Link>
            <Link to="skills">Skills</Link>
            <Link to="projects">Projects</Link>
          </div>
          <div className="grow flex justify-end space-x-4">
            <Icon
              src={githubLogo}
              alt="Github logo"
              link="https://github.com/madsab"
            />
            <Icon
              src={linkdnLogo}
              alt="Linkdn logo"
              link="https://www.linkedin.com/in/mads-b%C3%A5rnes-a66b96272/"
            />
            <Button>
              <span className="text-2xl">
                <a href="mailto:mads.barnes@hotmail.com">Contact Me</a>
              </span>
            </Button>
          </div>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
