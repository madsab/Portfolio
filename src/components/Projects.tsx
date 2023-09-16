import React from "react";
import stoneImg from "../assets/img/StoneWebsite.png";
import ProjectCard from "./atoms/ProjectCard";

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
      title: "STONE - SpyWebsite",
      description:
        "School Project: Frontend design and development - Draw Whey icon to Dag's hand",
      imgUrl: stoneImg,
      siteUrl: "https://folk.ntnu.no/madsab/STONE/website/index.html",
    },
    {
      title: "STONE - SpyWebsite",
      description:
        "School Project: Frontend design and development - Draw Whey icon to Dag's hand",
      imgUrl: stoneImg,
      siteUrl: "https://folk.ntnu.no/madsab/STONE/website/index.html",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-5xl mb-3 font-bold">My Projects</p>
      <div className="border-2 rounded-xl w-[90%] flex flex-wrap shadow-2xl">
        {projects.map((p, index) => {
          return <ProjectCard key={index} {...p} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
