import React, { useState } from "react";
import OfficeBG from "../assets/img/Bg_HomeOfficeRain.gif";
import LaptopOutlinePC from "../assets/img/LaptopOutline_PCView.svg";
import BoxOutlinePC from "../assets/img/Box-Outline.svg";
import Reveal from "./animation/Reveal";

import ReactLogo from "../assets/img/React_logo.svg";
import AWSLogo from "../assets/img/Amazon_Web_Services_Logo.svg";
import NextJsLogo from "../assets/img/next-js.jpg";
import StoryBookLogo from "../assets/img/storybook-logo.png";

import JsLogo from "../assets/img/JavaScript_logo.svg";
import TsLogo from "../assets/img/Typescript_logo.svg";
import JavaLogo from "../assets/img/java-icon.svg";
import CSSLogo from "../assets/img/CSS3_logo.svg";
import HTML5Logo from "../assets/img/HTML5_logo.svg";
import PythonLogo from "../assets/img/Python-logo.svg";

import SkillWindow from "./organisms/SkillWindow";

const Skills = () => {
  const [showSkill, setSkill] = useState(false);
  const [showTech, setTech] = useState(false);

  const aquiredTech = [
    {
      title: "React",
      icon: ReactLogo,
      alt: "React logo",
    },
    {
      title: "NextJs",
      icon: NextJsLogo,
      alt: "NextJs logo",
    },
    {
      title: "AWS",
      icon: AWSLogo,
      alt: "Aws logo",
    },
    {
      title: "Storybook",
      icon: StoryBookLogo,
      alt: "Storybook logo",
    },
  ];

  const aquiredSkills = [
    {
      title: "JavaScript",
      icon: JsLogo,
      alt: "JavaScriptLogo",
    },
    {
      title: "TypeScript",
      icon: TsLogo,
      alt: "TypeScriptLogo",
    },
    {
      title: "Java",
      icon: JavaLogo,
      alt: "Java Logo",
    },
    {
      title: "HTML5",
      icon: HTML5Logo,
      alt: "HTML5 logo",
    },
    {
      title: "CSS",
      icon: CSSLogo,
      alt: "CSS3 logo",
    },
    {
      title: "Python",
      icon: PythonLogo,
      alt: "Python logo",
    },
  ];

  const showTechs = () => {
    showTech ? setTech(false) : setTech(true);
    setSkill(false);
  };

  const showSkills = () => {
    setTech(false);
    showSkill ? setSkill(false) : setSkill(true);
  };
  return (
    <div id="skills" className="flex flex-col items-center min-h-screen">
      <Reveal>
        <p className="text-6xl font-bold">Skills</p>
      </Reveal>
      <div className=" relative w-[90%] overflow-hidden">
        <Reveal>
          <div className=" relative border-2 rounded-xl overflow-hidden shadow-md shadow-black">
            <img
              src={LaptopOutlinePC}
              alt="Outline of Laptop"
              className="absolute z-10 left-[47%] top-[55%] hover:cursor-pointer w-[10.8%] hover:opacity-75"
              onClick={showSkills}
            />
            <p className="absolute top-[71%] left-[50%] animate-bounce ">
              Click me!
            </p>
            <SkillWindow
              headLine="My Programming Languages"
              className="absolute w-[50%]  left-[27%] top-[20%]"
              trigger={showSkill}
              aquiredSkills={aquiredSkills}
            />

            <img
              src={BoxOutlinePC}
              alt="Outline of Laptop"
              className="absolute z-10 left-[17%] top-[78%] hover:cursor-pointer w-[10.8%] hover:opacity-75"
              onClick={showTechs}
            />
            <p className="absolute top-[75%] left-[20%] animate-bounce ">
              Click me!
            </p>
            <SkillWindow
              headLine="Used Tech"
              className="absolute w-[50%] left-2  top-[20%]"
              trigger={showTech}
              aquiredSkills={aquiredTech}
            />

            <img src={OfficeBG} alt="Office gif" className=" object-cover" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
