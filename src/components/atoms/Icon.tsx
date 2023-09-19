import React from "react";

interface props {
  src: string;
  alt: string;
  link?: string;
}
const Icon = ({ src, alt, link }: props) => {
  return (
    <div
      className={
        "w-14 border-2 border-slate-500 rounded-full flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all "
      }
      onClick={() => window.open(link, "_blank")}
    >
      <img src={src} alt={alt} width={30} />
    </div>
  );
};

export default Icon;
