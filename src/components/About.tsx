import React from "react";
import Reveal from "./animation/Reveal";

import CVPhoto from "../assets/img/CvPhoto.jpg";

const About = () => {
  return (
    <div className=" z-10 w-full min-h-screen bg-black flex items-center pr-8 justify-evenly">
      <div className="z-10 flex w-[40%] pl-8">
        <Reveal width="fit-content">
          <img
            className="rounded-full border-8 border-theme-lightgray"
            src={CVPhoto}
            alt="Me"
          ></img>
        </Reveal>
      </div>
      <div className="z-10 shadow-3xl ml-9 rounded-xl">
        <Reveal>
          <div className="bg-black rounded-xl p-6 space-y-5">
            <p className="text-3xl">About Me</p>
            <p className="">
              I&apos;m Mads, a 22-year-old programmer with a glimmer of hope and
              excitement about the future in programming. I was born and raised
              in Norway (still here). I&apos;ve always loved code and the idea
              of creating programs that not only look cool but also make
              people&apos;s lives a little bit easier.
            </p>
            <p>
              I&apos;m very engaged in what I do and love to learn new things.
              New technologies excite me, and because of this excitement, I
              joined a developer team at my student association that maintains
              the association&apos;s website:{" "}
              <a
                className="text-cyan-600"
                target="blank"
                href="https://online.ntnu.no/"
              >
                online.ntnu.no
              </a>{" "}
            </p>
            <p>
              I&apos;m ready for what the world brings. Haven&apos;t hit the
              bottom just yet :)
            </p>
            <p>PS: Yes, i got accepted at Hogwarts</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
