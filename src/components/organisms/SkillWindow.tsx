import React from "react";
import SkillCard from "../atoms/SkillCard";
import PopUp from "../animation/PopUp";

interface Props {
  aquiredSkills: any[];
  trigger: boolean;
}
const SkillWindow = ({ aquiredSkills, trigger = false }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PopUp fire={trigger}>
        <div className="absolute w-[50%] top-[15%] left-[27.5%] bg-slate-950 shadow-md shadow-slate-400 rounded-lg h-[30%] flex items-center justify-center space-x-6">
          {aquiredSkills.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                alt={skill.alt}
              />
            );
          })}
        </div>
      </PopUp>
    </div>
  );
};

export default SkillWindow;
