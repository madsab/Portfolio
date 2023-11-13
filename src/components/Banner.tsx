import React from "react";
import Reveal from "./animation/Reveal";
import SoMeContainer from "./organisms/SoMeContainer";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Reveal>
          <p className="text-lg tracking-[0.6rem]">Mads Bårnes</p>
        </Reveal>
        <Reveal>
          <div className="flex space-x-4">
            <p className="text-9xl font-bold underline text-theme-accent">
              Hello
            </p>
            <p className="text-9xl font-bold">There!</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Banner;
