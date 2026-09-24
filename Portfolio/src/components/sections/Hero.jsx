import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import HeroScene from "../3d/HeroScene";
import ScrollIndicator from "../ui/ScrollIndicator";


function Hero() {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0.35]
  );

  const heroScale = useTransform(
    scrollY,
    [0, 500],
    [1, 0.96]
  );

  const heroY = useTransform(
    scrollY,
    [0, 500],
    [0, -60]
  );

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0A]"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Hero Content */}
      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
        className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center"
      >
        <div className="w-full max-w-7xl">

          {/* Main Title */}
          {/* Main Title */}
<div className="space-y-1">
  <motion.div
    initial={{
      opacity: 0,
      y: 100,
      filter: "blur(12px)",
    }}
    animate={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 1.1,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    <h1
      className="
        text-[15vw]
        font-bold
        uppercase
        leading-[0.82]
        tracking-[-0.07em]
        text-white
        sm:text-[14vw]
        md:text-[11vw]
      "
    >
      I'M
    </h1>
  </motion.div>

  <motion.div
    initial={{
      opacity: 0,
      y: 120,
      filter: "blur(12px)",
    }}
    animate={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 1.2,
      delay: 0.4,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    <h1
      className="
        text-[13vw]
        font-bold
        uppercase
        leading-[0.82]
        tracking-[-0.07em]
        text-white
        sm:text-[12vw]
        md:text-[9.5vw]
      "
    >
      VIVEK
    </h1>
  </motion.div>
</div>

          {/* Subtitle */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              text-white/80
              md:text-sm
              md:tracking-[0.18em]
            "
          >
            <span>Software Engineer</span>

            <span className="hidden text-white/30 md:inline">
              |
            </span>

            <span>Full Stack</span>

            <span className="hidden text-white/30 md:inline">
              |
            </span>

            <span>Problem Solver</span>
          </motion.div>

          {/* Small availability indicator */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-orange-300" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Available for opportunities
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-40 bg-gradient-to-t from-[#461DA8] to-transparent" /> */}

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

export default Hero;