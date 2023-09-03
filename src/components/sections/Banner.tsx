import React from "react";
import { Reveal } from "../animation/Reveal";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center ">
      <div className="felx flex-col">
        <Reveal>
          <p className="text-9xl animate-bounce font-bold">Hello There!</p>
        </Reveal>
        <p className="text-3xl">I&apos;m Mads, a fronted developer</p>
        <p className="max-w-2xl">
          Currently studying a 3 year bachelor degree in Informatics at
          "Norwegian University of Science and Technology" in Trondheim. This is
          a site showing of my skills and projects in software development. If
          you&apos;d like to know more, please contact me.
        </p>
      </div>
    </section>
  );
};

export default Banner;
