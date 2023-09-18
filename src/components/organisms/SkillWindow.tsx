import React from "react";
import SkillCard from "../atoms/SkillCard";

interface Props {
  aquiredSkills: any[];
  trigger: boolean;
}
const SkillWindow = ({ aquiredSkills, trigger = false }: Props) => {
  return trigger ? (
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
  ) : (
    ""
  );
};

export default SkillWindow;
