import { Icon } from "@iconify/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

interface FooterLinkProps {
  name: string;
  url: string;
  className?: string;
}

const FooterLink: FC<FooterLinkProps> = ({ ...props }) => {
  return (
    <Link
      to={props.url}
      target="_blank"
      className={cn(
        "w-fit hover:bg-theme-accent hover:text-black flex items-center space-x-2 hover:space-x-0 duration-400 transition-all ease-linear transform text-3xl font-semibold px-2",
        props.className
      )}
    >
      <Icon icon={"entypo:triangle-right"} />
      <p>{props.name}</p>
    </Link>
  );
};

export default FooterLink;
