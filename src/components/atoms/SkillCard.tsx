import React from "react";

const SkillCard = ({ title, icon, alt }: any) => {
  const iconSrc = icon ? icon : "";
  return (
    <div className="relative w-32 inline-flex items-center justify-center m-3">
      <div className=" relative bg-slate-950 flex flex-col items-center justify-center m-3 border-2 rounded-lg w-24 h-24 z-10 ">
        <div className=" rounded-lg overflow-hidden drop-shadow-3d-white ">
          <img src={iconSrc} alt={alt} width={45} />
        </div>
        <p>{title}</p>
      </div>
      <div className="absolute top-3.5 left-5 w-24 h-24 bg-white rounded-lg"></div>
    </div>
  );
};

export default SkillCard;
