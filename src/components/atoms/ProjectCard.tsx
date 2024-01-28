import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import cn from "classnames";

export interface ProjectCardProps {
  title: string;
  description: string;
  languages: string;
  extra?: string;
  siteUrl: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  border?: boolean;
}
const ProjectCard: FC<ProjectCardProps> = ({ border = false, ...props }) => {
  const dot = <Icon icon="mdi:circle-medium" />;
  return (
    <div className={cn(" max-w-[850px] relative", props.className)}>
      <Link to={props.siteUrl} target="_blank">
        <img
          src={props.image}
          alt={props.imageAlt}
          className={cn(
            "rounded-3xl w-full object-cover cursor-pointer hover:scale-105 hover:mb-3 transition-all duration-200 ease-linear",
            border && "border-2 border-slate-500"
          )}
        />
      </Link>
      <p className="absolute text-7xl bottom-[40%] -left-20 font-extrabold h-0">
        {props.title}
      </p>
      <div className="flex flex-col items-center justify-center font-light">
        <div className="flex items-center">
          {props.title}
          {dot}
          {props.description}
          {dot}
          {props.languages}
        </div>
        <div className=" text-slate-400">{props.extra}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
