import ProjectCard from "./atoms/ProjectCard";
import Reveal from "./animation/Reveal";
import { ProjectLinks } from "./utils/ProjectLinks";
import Carousel from "./organisms/Carousel";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" w-full flex flex-col items-center justify-evenly min-h-screen"
    >
      <Reveal>
        <p className="text-5xl mb-3 font-bold">My Projects</p>
      </Reveal>
      <div className="flex w-full justify-center relative ">
        <div className=" w-full rounded-xl flex justify-center shadow-2xl">
          <Carousel children={ProjectLinks} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
