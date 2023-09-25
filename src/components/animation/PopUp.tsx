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
    <motion.div
      variants={{
        hidden: { scaleX: 0, scaleY: 0.5, opacity: 0, y: 150 },
        visible: { scaleX: 1, scaleY: 1, opacity: 1, y: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.3 }}
      animate={Controller}
    >
      {children}
    </motion.div>
  );
};

export default PopUp;
