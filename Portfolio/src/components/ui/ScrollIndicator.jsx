import { motion } from "motion/react";

function ScrollIndicator() {
  return (
    <motion.a
      href="#projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
      }}
      className="absolute bottom-8 left-1/2 z-20 flex h-14 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/30"
      aria-label="Scroll to projects"
    >
      <motion.span
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-sm text-white/70"
      >
        ↓
      </motion.span>
    </motion.a>
  );
}

export default ScrollIndicator;