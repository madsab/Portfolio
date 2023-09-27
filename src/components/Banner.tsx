import React from "react";
import Reveal from "./animation/Reveal";
import Button from "./atoms/Button";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center ml-7 ">
      <div className="felx flex-col space-y-2">
        <Reveal>
          <p className="text-9xl font-bold">Hello There!</p>
        </Reveal>
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
    </section>
  );
};

export default Banner;
