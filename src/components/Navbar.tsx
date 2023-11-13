import React, { useEffect, useState } from "react";
import Reveal from "./animation/Reveal";

import Link from "./atoms/Link";
import MenuLinksContainer from "./organisms/MenuLinksContainer";
import MobileMenuContainer from "./organisms/MobileMenuContainer";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  //Check user scrolling
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 150 ? setScrolling(true) : setScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarStyle = {
    backgroundColor: scrolling ? "black" : "transparent",
    opacity: "0.85",
    transition: "0.5s ease-in-out",
    paddingTop: scrolling ? 0 : 10,
  };

  return (
    <div className="sticky top-0 z-30 w-full" style={navBarStyle}>
      <Reveal downwards={true} slider={false} width="100%" delay={0.5}>
        <nav className="grid grid-cols-5 py-4">
          <Link
            to="top"
            className="text-3xl ml-5 font-bold col-span-3"
            animation={false}
          >
            BARNES
          </Link>
          <MobileMenuContainer />
          <MenuLinksContainer />
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
