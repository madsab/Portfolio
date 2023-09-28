import React from "react";
import { Link as LinkReact } from "react-scroll";

interface Props {
  to: string;
  children: JSX.Element | string;
  background?: string;
  scale?: boolean;
}
const Link = ({ to, background, children, scale = true }: Props) => {
  const isScaling = scale ? "hover:scale-125" : "";
  return (
    <LinkReact
      to={to}
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
      className={`rounded-full overflow-hidden cursor-pointer ${
        background + " " + isScaling
      }`}
    >
      {children}
    </LinkReact>
  );
};

export default Link;
