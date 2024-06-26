import ProjectCard from "./atoms/ProjectCard";
import Reveal from "./animation/Reveal";
import { ProjectLinks } from "./utils/ProjectLinks";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" w-screen flex flex-col items-center snap-start"
    >
      <div className=" snap-mandatory snap-y max-md:space-y-48 ">
        {ProjectLinks.map((project, index) => {
          return (
            <div
              key={index}
              className="md:h-screen snap-start flex flex-col justify-center items-center"
            >
              {index == 0 && (
                <Reveal className="p-8">
                  <p className="text-5xl mb-3 font-bold">My Projects</p>
                </Reveal>
              )}
              <ProjectCard key={index} {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
