import React from "react";
import Reveal from "./animation/Reveal";

import CVPhoto from "../assets/img/CvPhoto.jpg";
import Button from "./atoms/Button";

const About = () => {
  return (
    <div
      id="about"
      className="w-screen h-screen flex items-center justify-center font-bold bg-theme-bg bg-opacity-50 snap-start "
    >
      <div className="max-md:px-5 md:w-2/3">
        <Reveal>
          <p className="text-8xl">
            <span className="text-theme-accent">I&apos;m</span> Mads
          </p>
        </Reveal>
        <Reveal>
          <p className=" text-2xl md:text-3xl mt-4 ">
            A Computer Science student at the Norwegian University of Science
            and Technology (NTNU). Seeing myself as a{" "}
            <span className="text-theme-accent">Fullstack</span> developer
            focusing my spare time on making projects that makes me a little bit
            more happy (<span className="text-theme-accent">Stupid Bugs</span>)
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
