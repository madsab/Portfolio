import { FC } from "react";
import { Link as LinkReact } from "react-scroll";
import cn from "classnames";
import React from "react";

interface LinkProps {
  to: string;
  children: JSX.Element | string;
  className?: string;
  animation?: boolean;
}
const Link: FC<LinkProps> = ({ to, animation = true, children, className }) => {
  return (
    <LinkReact
      to={to}
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
      className={cn("cursor-pointer group transition duration-300", className)}
    >
      {children}
      {animation && (
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme-text"></span>
      )}
    </LinkReact>
  );
};

export default Link;
