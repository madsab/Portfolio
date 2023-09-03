import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: JSX.Element;
  width?: "object-cover" | "100%";
}

export const Reveal = ({ children, width = "object-cover" }: Props) => {
  return (
    <div className={width + " relative hidden"}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
};
