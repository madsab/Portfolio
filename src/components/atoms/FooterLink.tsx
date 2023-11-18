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
        "w-fit hover:bg-theme-accent rounded-sm group hover:text-black flex items-center duration-400 transition-all ease-linear transform text-3xl font-semibold px-2",
        props.className
      )}
    >
      <Icon
        icon={"entypo:triangle-right"}
        className="group-hover:text-black text-theme-accent group-hover:translate-x-2 duration-300"
      />
      <p>{props.name}</p>
    </Link>
  );
};

export default FooterLink;
