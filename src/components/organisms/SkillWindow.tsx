import React from "react";
import SkillCard from "../atoms/SkillCard";
import PopUp from "../animation/PopUp";

interface Props {
  aquiredSkills: any[];
  trigger: boolean;
}
const SkillWindow = ({ aquiredSkills, trigger = false }: Props) => {
  return (
    <div className="absolute w-[50%] flex flex-col left-[27%] top-[20%]">
      <PopUp fire={trigger}>
        <div className="relative bg-slate-950 p-6 shadow-md shadow-slate-400 rounded-lg h-[30%] flex flex-col items-center justify-center">
          <p className="text-2xl mb-5">My Programming Languages</p>
          <div className="flex w-full">
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
        </div>
      </PopUp>
    </div>
  );
};

export default SkillWindow;
