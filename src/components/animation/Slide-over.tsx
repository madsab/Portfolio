import { motion, useAnimation } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  children: JSX.Element;
}
const Controller = useAnimation();

const SlideOver = ({ children }: Props) => {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          start: { right: "100%" },
          end: { right: "0" },
        }}
        initial="start"
        animate={Controller}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
