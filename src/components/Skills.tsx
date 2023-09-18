import React, { useState } from "react";
import OfficeBG from "../assets/img/Bg_HomeOfficeRain.gif";
import LaptopOutlinePC from "../assets/img/LaptopOutline_PCView.svg";
import Reveal from "./animation/Reveal";

import ReactLogo from "../assets/img/React_logo.svg";
import JsLogo from "../assets/img/JavaScript_logo.svg";
import JavaLogo from "../assets/img/java-icon.svg";
import SkillWindow from "./organisms/SkillWindow";

const Skills = () => {
  const [showSkill, setSkill] = useState(false);
  const aquiredSkills = [
    {
      title: "React",
      icon: ReactLogo,
      alt: "ReactLogo",
    },
    {
      title: "JavaScript",
      icon: JsLogo,
      alt: "JavaScriptLogo",
    },
  ];

  const showSkills = () => {
    showSkill ? setSkill(false) : setSkill(true);
  };
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <Reveal>
        <p className="text-6xl font-bold">Skills</p>
      </Reveal>
      <div className="w-[90%] overflow-hidden">
        <Reveal>
          <div className=" relative border-2 rounded-xl overflow-hidden shadow-md shadow-black">
            <img
              src={LaptopOutlinePC}
              alt="Outline of Laptop"
              className="absolute z-10 left-[47%] top-[55%] hover:cursor-pointer w-[10.8%]"
              onClick={showSkills}
            />
            <SkillWindow trigger={showSkill} aquiredSkills={aquiredSkills} />
            <p className="absolute top-[71%] left-[50%] animate-bounce ">
              Click me!
            </p>
            <img src={OfficeBG} alt="Office gif" className=" object-cover" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
