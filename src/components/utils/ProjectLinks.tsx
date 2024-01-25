import StoneImg from "../../assets/images/stone.png";
import Dredge from "../../assets/images/Dredge_06.jpeg";
import Portfolio from "../../assets/images/portfolio.png";
import { ProjectCardProps } from "../atoms/ProjectCard";

export const ProjectLinks: ProjectCardProps[] = [
  {
    title: "STONE",
    description: "Frontend & Design",
    languages: "HTML, CSS, JavaScript",
    extra: "Move the Whey icon into Dag's hand to reveal the website",
    siteUrl: "https://folk.ntnu.no/madsab/STONE/website/",
    githubUrl: "https://github.com/madsab/stone",
    image: StoneImg,
    imageAlt: "Stone Website",
    border: true,
  },
  {
    title: "Portfolio",
    description: "Frontend & Design",
    languages: "React, Typescript, TailwindCSS",
    siteUrl: "https://madsbarnes.com",
    githubUrl: "https://github.com/madsab/portfolio",
    image: Portfolio,
    imageAlt: "Portfolio Website",
    border: true,
  },
];
