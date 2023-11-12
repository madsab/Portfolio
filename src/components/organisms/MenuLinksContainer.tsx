import React from "react";
import Link from "../atoms/Link";
import MenuLinks from "../utils/MenuLinks";

const MenuLinksContainer = () => (
  <div className="col-span-2 flex justify-evenly items-center max-md:hidden">
    {MenuLinks.map((link, index) => {
      return (
        <Link key={index} to={link.to} className="text-xl">
          {link.label}
        </Link>
      );
    })}
  </div>
);

export default MenuLinksContainer;
