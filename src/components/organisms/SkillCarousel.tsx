import React, { useEffect, useState } from "react";
import SkillCard from "../atoms/SkillCard";

interface Props {
  items: any[];
}
const SkillCarousel = ({ items }: Props) => {
  useEffect(() => {});
  return (
    <div className="overflow-hidden w-full flex border-2  border-slate-400 shadow-inner shadow-slate-600 whitespace-nowrap cursor-grab ">
      <div className=" animate-slider ">
        {items.map((child, index) => {
          return (
            <SkillCard
              key={index}
              title={child.title}
              icon={child.icon}
              alt={child.alt}
            />
          );
        })}
      </div>
      <div className=" animate-slider ">
        {items.map((child, index) => {
          return (
            <SkillCard
              key={index}
              title={child.title}
              icon={child.icon}
              alt={child.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillCarousel;
