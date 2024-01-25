import { FC, ReactNode, useState } from "react";
import ProjectCard, { ProjectCardProps } from "../atoms/ProjectCard";
import cn from "classnames";
interface CarouselProps {
  children: ProjectCardProps[];
  className?: string;
}

const Carousel: FC<CarouselProps> = ({ children, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number, element: HTMLHRElement) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > children.length) {
      newIndex = children.length - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div
      className={cn(
        "relative w-full overflow-y-hidden flex justify-center p-2",
        className
      )}
    >
      {/* <div className="flex flex-col justify-center pt-24 border-2 ">
        <p className="text-8xl font-light">0{activeIndex + 1}</p>
        <div className="border-b-[1px] w-[160px]"></div>
      </div> */}
      <div
        className={
          "w-full overflow-auto snap-mandatory snap-y scrollbar-hide flex justify-center border-2"
        }
      >
        <div className="translate-y-1/4 border-2">
          {children.map((child, index) => {
            return (
              <ProjectCard
                className="snap-center m-auto"
                key={index}
                {...child}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="flex flex-col justify-center border-2">
        <div className="w-full">
          {children.map((child, index) => {
            return (
              <hr
                key={index}
                data-index={index}
                onClick={(e) => updateIndex(index, e.currentTarget)}
                className={cn(
                  "bg-white rounded-lg hover:opacity-80 opacity-50 w-10 h-1 m-2 hover:cursor-pointer hover:w-16 transition-all duration-200 box-content",
                  activeIndex == index ? "w-16" : "w-10"
                )}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
