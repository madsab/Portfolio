import React, { useState } from "react";
import Reveal from "./animation/Reveal";
import SkillCard from "./atoms/SkillCard";
import { BackendSkills, FrontendSkills, OtherSkills } from "./utils/SkillLinks";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center min-h-screen w-full "
    >
      <Reveal>
        <p className="text-4xl font-bold mt-24">Skills</p>
      </Reveal>
      <div className="flex flex-wrap  w-full md:w-[90%] justify-evenly mt-10">
        <Reveal>
          <SkillCard
            number={1}
            title={{
              name: "Frontend",
              icon: "icon-park-outline:code-computer",
            }}
            skills={FrontendSkills}
          />
        </Reveal>
        <Reveal>
          <SkillCard
            number={2}
            title={{
              name: "Backend",
              icon: "ion:terminal-outline",
            }}
            skills={BackendSkills}
          />
        </Reveal>
        <Reveal>
          <SkillCard
            number={3}
            title={{
              name: "Other",
              icon: "carbon:tools",
            }}
            skills={OtherSkills}
          />
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
