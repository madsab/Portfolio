import React from "react";
import SifuBg from "../assets/img/SifuStaff.png";

const SifuCharacter = () => {
  return (
    <img
      className="absolute min-w-fit -z-9 "
      src={SifuBg}
      alt="Sifu character"
    />
  );
};

export default SifuCharacter;
