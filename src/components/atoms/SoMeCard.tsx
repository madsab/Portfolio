import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export type SoMeCardProps = {
  url: string;
  logo: string;
};

const SoMeCard: React.FC<SoMeCardProps> = ({ url, logo }) => {
  return (
    <Link to={url} target="_blank" className="text-2xl cursor-pointer">
      <Icon icon={logo} width="30" height="30" />
    </Link>
  );
};

export default SoMeCard;
