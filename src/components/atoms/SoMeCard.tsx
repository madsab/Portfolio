import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export type SoMeCardProps = {
  url: string;
  logo: string;
};

const SoMeCard: React.FC<SoMeCardProps> = ({ url, logo }) => {
  return (
    <Link
      to={url}
      target="_blank"
      className="text-2xl rounded-full p-2 cursor-pointer  hover:bg-theme-secondary hover:text-theme-accent transition-all duration-200"
    >
      <Icon icon={logo} width="30" height="30" className="" />
    </Link>
  );
};

export default SoMeCard;
