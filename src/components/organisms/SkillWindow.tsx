import React from "react";
import PopUp from "../animation/PopUp";
import SkillCarousel from "./SkillCarousel";

interface Props {
  aquiredSkills: any[];
  trigger: boolean;
  className?: string;
  headLine: string;
}
const SkillWindow = ({
  aquiredSkills,
  trigger = false,
  className,
  headLine,
}: Props) => {
  return (
    <div className={`${className}`}>
      <PopUp fire={trigger}>
        <div className="relative bg-slate-950 p-6 shadow-md shadow-slate-400 rounded-lg h-[30%] flex flex-col items-center justify-center">
          <p className="text-2xl mb-5">{headLine}</p>
          <div className="w-full ">
            <SkillCarousel items={aquiredSkills} />
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default SkillWindow;
