import StoneImg from "../../assets/images/stone.png";
import Portfolio from "../../assets/images/portfolio.png";
import Cinematrix from "../../assets/images/cinematrix.png";
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
  {
    title: "Cinematrix",
    description: "Frontend & Backend",
    languages: "Next.js, TailwindCSS, Firebase",
    siteUrl: "https://cinematrix.madsbarnes.com",
    githubUrl: "https://github.com/madsab/cinematrix",
    image: Cinematrix,
    imageAlt: "Cinematrix Website",
    border: false,
  },
];
