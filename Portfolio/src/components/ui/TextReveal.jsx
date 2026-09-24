import { useRef } from "react";
import { motion, useInView } from "motion/react";

function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={{
          y: "100%",
          opacity: 0,
        }}
        animate={{
          y: isInView ? "0%" : "100%",
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default TextReveal;