import React from "react";
import SifuBg from "../assets/img/sifuStaff.png";

const SifuCharacter = () => {
  return (
    <img
      className="absolute top-0 left-0  min-w-fit "
      src={SifuBg}
      alt="Sifu character"
    />
  );
};

export default SifuCharacter;
