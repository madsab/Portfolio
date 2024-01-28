import React from "react";
import Reveal from "./animation/Reveal";
import SkillCard from "./atoms/SkillCard";
import { BackendSkills, FrontendSkills, OtherSkills } from "./utils/SkillLinks";
import cn from "classnames";

const Skills = () => {
  return (
    <div
      id="skills"
      className={cn("flex flex-col items-center h-screen w-screen snap-start")}
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
        <Reveal delay={0.5}>
          <SkillCard
            number={2}
            title={{
              name: "Backend",
              icon: "ion:terminal-outline",
            }}
            skills={BackendSkills}
          />
        </Reveal>
        <Reveal delay={0.75}>
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
