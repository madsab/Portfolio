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
    <div
      className={cn(
        "w-full mx-5 relative flex flex-col items-center",
        props.className
      )}
    >
      <p className="z-20 sm:absolute text-3xl sm:text-5xl md:text-6xl lg:text-7xl bottom-[28%] max-md:left-[5%] left-[10%] transition-all font-extrabold ">
        {props.title}
      </p>
      <Link to={props.siteUrl} target="_blank">
        <img
          src={props.image}
          alt={props.imageAlt}
          className={cn(
            "mx-auto rounded-3xl w-2/3 max-md:w-4/5 object-cover cursor-pointer hover:scale-105 hover:mb-3 transition-all duration-200 ease-linear",
            border && "border-2 border-slate-500"
          )}
        />
      </Link>
      <div className="flex flex-col items-center justify-center mx-auto font-light max-sm:w-2/3 ">
        <div className="flex items-center justify-center max-sm:flex-wrap">
          {props.title}
          {dot}
          {props.description}
          {dot}
          {props.languages}
        </div>
        <p className="text-slate-400 text-center">{props.extra}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
