import React from "react";
import ProjectCard from "./atoms/ProjectCard";
import Reveal from "./animation/Reveal";

import stoneImg from "../assets/img/StoneWebsite.png";
import portfolioImg from "../assets/img/PortfolioWebsite.png";

const Projects = () => {
  const projects = [
    {
      title: "STONE - SpyWebsite",
      description:
        "School Project: Frontend design and development - Draw Whey icon to Dag's hand",
      imgUrl: stoneImg,
      siteUrl: "https://folk.ntnu.no/madsab/STONE/website/index.html",
    },
    {
      title: "Porfolio - This site",
      description: "Personal portfolio to display me, my skills and projects",
      imgUrl: portfolioImg,
      siteUrl: "#",
    },
  ];

  return (
    <div className=" w-full flex flex-col items-center" id="projects">
      <Reveal>
        <p className="text-5xl mb-3 font-bold">My Projects</p>
      </Reveal>
      <div className="border-2 rounded-xl w-[90%] flex justify-center flex-wrap shadow-2xl">
        {projects.map((p, index) => {
          return <ProjectCard key={index} {...p} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
