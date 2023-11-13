import React from "react";
import SoMeCard from "../atoms/SoMeCard";
import { SoMeLinks } from "../utils/SoMeLinks";
import Reveal from "../animation/Reveal";

const SoMeContainer = ({ ...props }) => {
  return (
    <div className={props.className}>
      <Reveal delay={0.5} slider={false}>
        <div className="flex flex-col space-y-11">
          {SoMeLinks.map((link, index) => (
            <SoMeCard key={index} logo={link.logo} url={link.url} />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default SoMeContainer;
