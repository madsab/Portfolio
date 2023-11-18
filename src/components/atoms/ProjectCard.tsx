import React, { FC } from "react";
import Reveal from "../animation/Reveal";
import { title } from "process";
import { Icon } from "@iconify/react";
import { JsxElement } from "typescript";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  languages: string;
  siteUrl: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}
const ProjectCard: FC<ProjectCardProps> = ({ ...props }) => {
  const dot = <Icon icon="mdi:circle-medium" />;
  return (
    <div className="w-full relative">
      <Link to={props.siteUrl} target="_blank">
        <img
          src={props.image}
          alt={props.imageAlt}
          className="rounded-3xl w-full h-4/5 object-cover cursor-pointer hover:scale-105 hover:mb-3 transition-all duration-200 ease-linear "
        />
      </Link>
      <p className="absolute text-7xl bottom-1/2 -left-20 font-extrabold h-0">
        {props.title}
      </p>
      <div className="flex items-center justify-center font-light">
        {props.title}
        {dot}
        {props.description}
        {dot}
        {props.languages}
      </div>
    </div>
  );
};

export default ProjectCard;
