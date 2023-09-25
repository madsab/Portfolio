import React from "react";
import SkillCard from "../atoms/SkillCard";
import PopUp from "../animation/PopUp";
import SkillCarousel from "./SkillCarousel";

interface Props {
  aquiredSkills: any[];
  trigger: boolean;
}
const SkillWindow = ({ aquiredSkills, trigger = false }: Props) => {
  return (
    <div className="absolute w-[50%]  left-[27%] top-[20%]">
      <PopUp fire={trigger}>
        <div className="relative bg-slate-950 p-6 shadow-md shadow-slate-400 rounded-lg h-[30%] flex flex-col items-center justify-center">
          <p className="text-2xl mb-5">My Programming Languages</p>
          <div className="w-full ">
            <SkillCarousel items={aquiredSkills} />
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default SkillWindow;
