import React from "react";

const SkillCard = ({ title, icon, alt }: any) => {
  const iconSrc = icon ? icon : "";
  return (
    <div>
      <img src={iconSrc} alt={alt} width={45} />
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
