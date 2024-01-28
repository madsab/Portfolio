import { Icon } from "@iconify/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface SkillCardProps {
  number: number;
  title: {
    name: string;
    icon: string;
  };
  skills?: { name: string; icon: string; alt: string; url: string }[];
}
const SkillCard: FC<SkillCardProps> = ({ ...props }) => {
  return (
    <div className="px-4 my-8">
      <p className="flex text-3xl items-center font-thin tracking-[1rem]">
        {"0" + props.number}
        <span className="ml-3">{props.title.name}</span>
        <Icon icon={props.title.icon} className="text-theme-accent" />
      </p>
      <div className="p-2 flex flex-col items-start">
        {props.skills &&
          props.skills.map((skill, index) => (
            <Link
              key={index}
              to={skill.url}
              target="_blank"
              className="flex items-center hover:scale-110 duration-200 ease-linear transform cursor-pointer text-xl font-semibold "
            >
              <Icon
                icon={skill.icon}
                width={20}
                height={20}
                className="text-theme-text mr-5"
              />
              {skill.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SkillCard;
