import React from "react";
import { Link as LinkReact } from "react-scroll";

interface Props {
  to: string;
  children: JSX.Element | string;
  background?: string;
}
const Link = ({ to, background, children }: Props) => {
  return (
    <LinkReact
      to={to}
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
      className={
        "rounded-full overflow-hidden hover:cursor-pointer hover:scale-125 " +
        background
      }
    >
      {children}
    </LinkReact>
  );
};

export default Link;
