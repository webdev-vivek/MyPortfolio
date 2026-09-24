import { motion, useScroll } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
        fixed
        left-0
        top-0
        z-[60]
        h-[2px]
        w-full
        origin-left
        bg-gradient-to-r
        from-[#2563EB]
        via-[#7C3AED]
        to-[#A78BFA]
        shadow-[0_0_10px_rgba(124,58,237,0.8)]
      "
    />
  );
}

export default ScrollProgress;