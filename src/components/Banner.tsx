import React from "react";
import Reveal from "./animation/Reveal";

const Banner = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center snap-start">
      <div className="flex flex-col items-center">
        <Reveal>
          <p className="text-lg tracking-[0.6rem]">Mads Bårnes</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center space-x-4 max-sm:text-8xl text-9xl font-bold ">
            <p className=" underline text-theme-accent">Hello</p>
            <p>There!</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Banner;
