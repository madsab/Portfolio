import { FC, ReactNode, useState } from "react";
import ProjectCard, { ProjectCardProps } from "../atoms/ProjectCard";
interface CarouselProps {
  children: ProjectCardProps[];
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    console.log(newIndex);
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > children.length) {
      newIndex = children.length - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="w-full overflow-y-hidden flex justify-center border-2 px-5 max-h-[490px]">
      <div className="absolute bottom-36 left-24">
        <p className="text-8xl ml-12 font-light">0{activeIndex + 1}</p>
        <div className="border-b-[1px] w-[160px]"></div>
      </div>
      <div
        className={` -translate-y-[${
          activeIndex * 450
        }px] transform overflow-y-scroll transition duration-200 flex flex-col justify-start pt-5 px-3 items-end space-y-8 ml-28 `}
      >
        {children.map((child, index) => {
          return <ProjectCard key={index} {...child} />;
        })}
      </div>
      <div className="flex flex-col justify-center ml-10">
        <div>
          {children.map((child, index) => {
            return (
              <hr
                onClick={() => updateIndex(index)}
                className="bg-white rounded-lg hover:opacity-80 opacity-50 w-10 h-1 m-2 hover:cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
