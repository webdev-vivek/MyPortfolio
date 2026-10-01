import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import HeroScene from "../3d/HeroScene";
import ScrollIndicator from "../ui/ScrollIndicator";

function Hero() {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.96]);
  const heroY = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-[#120D1F]"
    >
      <HeroScene />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="
          relative
          z-10
          flex
          h-full
          items-center
          justify-center
          px-6
          pt-20
          pb-16
          text-center
        "
      >
        <div className="w-full max-w-7xl">

          {/* ROLE LINE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="
              mb-8
              flex
              items-center
              justify-center
              gap-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#B3AEC4]
              sm:text-xs
            "
          >
            <span className="h-px w-8 bg-[#8B5CF6]/60" />
            <span>Software Engineer</span>
            <span className="text-[#8B5CF6]">·</span>
            <span>Full Stack</span>
            <span className="text-[#8B5CF6]">·</span>
            <span>AI / ML</span>
            <span className="h-px w-8 bg-[#8B5CF6]/60" />
          </motion.div>

          {/* MAIN TITLE */}
          <div className="space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 100, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[15vw] font-bold uppercase leading-[0.8] tracking-[-0.075em] text-[#F5F5F7] sm:text-[14vw] md:text-[11vw]">
                I'M
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 120, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[13vw] font-bold uppercase leading-[0.8] tracking-[-0.075em] text-[#F5F5F7] sm:text-[12vw] md:text-[9.5vw]">
                VIVEK
                <span className="text-[#8B5CF6]">.</span>
              </h1>
            </motion.div>
          </div>

          {/* PROFESSIONAL TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#B3AEC4]
              md:text-sm
              md:tracking-[0.2em]
            "
          >
            <span>Software Engineer</span>
            <span className="text-[#8B5CF6]">•</span>
            <span>Full Stack</span>
            <span className="text-[#8B5CF6]">•</span>
            <span>Problem Solver</span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              font-medium
              leading-7
              text-[#C9C5D6]
              md:text-lg
              md:leading-8
            "
          >
            I build modern web applications, full-stack products,
            and intelligent systems designed to solve real-world
            problems.
          </motion.p>

          {/* AVAILABILITY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#22C55E] shadow-[0_0_14px_rgba(34,197,94,0.75)]" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A39CBC]">
              Available for opportunities
            </span>
          </motion.div>

          {/* TECHNOLOGY STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-4
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#9D96B0]
              md:text-[10px]
            "
          >
            <span>React</span>
            <span className="text-[#8B5CF6]">•</span>
            <span>Node.js</span>
            <span className="text-[#8B5CF6]">•</span>
            <span>Python</span>
            <span className="text-[#8B5CF6]">•</span>
            <span>AI / ML</span>
          </motion.div>

        </div>
      </motion.div>

      <ScrollIndicator />

    </section>
  );
}

export default Hero;