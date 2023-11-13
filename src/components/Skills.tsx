import React, { useState } from "react";
import OfficeBG from "../assets/img/Bg_HomeOfficeRain.gif";
import LaptopOutlinePC from "../assets/img/LaptopOutline_PCView.svg";
import BoxOutlinePC from "../assets/img/Box-Outline.svg";
import Reveal from "./animation/Reveal";

import SkillWindow from "./organisms/SkillWindow";

const Skills = () => {
  const [showSkill, setSkill] = useState(false);
  const [showTech, setTech] = useState(false);

  const showTechs = () => {
    showTech ? setTech(false) : setTech(true);
    setSkill(false);
  };

  const showSkills = () => {
    setTech(false);
    showSkill ? setSkill(false) : setSkill(true);
  };
  return (
    <div id="skills" className="flex flex-col items-center min-h-screen mb-10">
      <Reveal>
        <p className="text-6xl font-bold">Skills</p>
      </Reveal>
      <div className=" relative w-[90%] overflow-hidden">
        <Reveal>
          <div className=" relative border-2 rounded-xl overflow-hidden shadow-md shadow-black">
            <p className="absolute top-[71%] left-[50%] animate-bounce ">
              Click me!
            </p>
            <SkillWindow
              headLine="My Programming Languages"
              className="absolute w-[50%]  left-[27%] top-[20%]"
              trigger={showSkill}
              aquiredSkills={[]}
            />

            <p className="absolute top-[75%] left-[20%] animate-bounce ">
              Click me!
            </p>
            <SkillWindow
              headLine="Used Tech"
              className="absolute w-[50%] left-2  top-[20%]"
              trigger={showTech}
              aquiredSkills={[]}
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
