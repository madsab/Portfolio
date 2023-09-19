import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

interface Props {
  children: JSX.Element;
  fire: boolean;
}

const PopUp = ({ children, fire = false }: Props) => {
  const Controller = useAnimation();

  useEffect(() => {
    if (fire) {
      Controller.start("visible");
    } else {
      Controller.start("hidden");
    }
  });
  return (
    <div>
      <motion.div
        variants={{
          hidden: { display: "none", scale: 0, y: 400 },
          visible: { display: "block", scale: 1, y: 300 },
        }}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        animate={Controller}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PopUp;
