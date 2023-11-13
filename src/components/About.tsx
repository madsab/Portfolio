import React from "react";
import Reveal from "./animation/Reveal";

import CVPhoto from "../assets/img/CvPhoto.jpg";
import Button from "./atoms/Button";

const About = () => {
  return (
    <div className=" z-10 w-full min-h-screen bg-black flex items-center pr-8 justify-evenly">
      <div className="z-10 flex w-[40%] pl-8">
        <Reveal>
          <p className="text-3xl">
            I&apos;m Mads, a{" "}
            <span className="text-theme-lightgray">Frontend Developer</span>
          </p>
        </Reveal>
        <Reveal>
          <p className="max-w-2xl">
            Currently studying a 3 year bachelor degree in Computer science at
            "Norwegian University of Science and Technology" in Trondheim. This
            is a site showing of my skills and projects in software development.
            If you&apos;d like to know more, please contact me.
          </p>
        </Reveal>
        <Reveal>
          <Button>
            <span className="text-xl">I don&apos;t bite</span>
          </Button>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
