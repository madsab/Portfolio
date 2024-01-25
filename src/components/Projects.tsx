import ProjectCard from "./atoms/ProjectCard";
import Reveal from "./animation/Reveal";
import { ProjectLinks } from "./utils/ProjectLinks";
import Carousel from "./organisms/Carousel";
import cn from "classnames";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" w-screen h-screen flex flex-col items-center snap-start"
    >
      <Reveal className="p-8">
        <p className="text-5xl mb-3 font-bold">My Projects</p>
      </Reveal>
      <Carousel className="flex-grow-0" children={ProjectLinks} />
    </div>
  );
};

export default Projects;
