import React from "react";
import Reveal from "../animation/Reveal";

const ProjectCard = ({ title, description, imgUrl, siteUrl }: any) => {
  return (
    <div className="w-[30.8%]">
      <Reveal>
        <div
          className="group relative border-2 rounded-2xl shadow-lg shadow-black hover:cursor-pointer overflow-hidden m-4"
          onClick={() => window.open(siteUrl, "_blank")}
        >
          <img
            className="h-full object-cover group-hover:scale-125 transition-transform"
            src={imgUrl}
            alt="Stone School project website"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <p className="text-3xl font-bold mb-3">{title}</p>
            <p className="text-lg font-light italic text-slate-300">
              {description}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
