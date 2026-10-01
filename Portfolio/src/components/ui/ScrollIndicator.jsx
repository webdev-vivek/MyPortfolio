import { motion } from "motion/react";

function ScrollIndicator() {
  return (
    <motion.a
      href="#projects"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.08,
        borderColor: "rgba(139, 92, 246, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="
        group
        absolute
        bottom-8
        left-1/2
        z-20
        flex
        h-14
        w-8
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/25
        transition-colors
        duration-300
        hover:border-[#8B5CF6]/60
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#8B5CF6]/60
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#0A0A0A]
      "
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
        className="
          text-sm
          text-white/70
          transition-colors
          duration-300
          group-hover:text-[#C4B5FD]
        "
      >
        ↓
      </motion.span>
    </motion.a>
  );
}

export default ScrollIndicator;