import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  downwards?: boolean;
  slider?: boolean;
  delay?: number;
}

const Reveal = ({
  children,
  width = "fit-content",
  downwards = false,
  slider = true,
  delay = 0.25,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainController = useAnimation();
  const slideController = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainController.start("visible");
      slider
        ? slideController.start("visible")
        : slideController.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: downwards ? -75 : 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainController}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideController}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          display: slider ? "block" : "none",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#222138",
          borderRadius: "10px",
          zIndex: "20",
        }}
      />
    </div>
  );
};

export default Reveal;
