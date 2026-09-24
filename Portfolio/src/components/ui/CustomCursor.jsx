import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spotlight movement
  const glowX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
    mass: 0.6,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
    mass: 0.6,
  });

  // Faster center dot
  const dotX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseOver = (event) => {
      const target = event.target;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='project']") ||
        target.closest("canvas")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (event) => {
      const id = Date.now();

      setClicks((current) => [...current, { id }]);

      setTimeout(() => {
        setClicks((current) =>
          current.filter((click) => click.id !== id)
        );
      }, 700);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* ========================================
          CURSOR SPOTLIGHT
      ======================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[190]
          hidden
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          mix-blend-screen
          lg:block
        "
        animate={{
          width: isHovering ? 220 : 170,
          height: isHovering ? 220 : 170,
          opacity: isHovering ? 0.9 : 0.65,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(124,58,237,0.16) 28%, rgba(59,130,246,0.08) 50%, transparent 72%)",
          filter: "blur(18px)",
        }}
      />

      {/* ========================================
          SECONDARY BLUE/PURPLE AURA
      ======================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[191]
          hidden
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          mix-blend-screen
          lg:block
        "
        animate={{
          width: isHovering ? 90 : 65,
          height: isHovering ? 90 : 65,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.34) 0%, rgba(124,58,237,0.18) 42%, rgba(59,130,246,0.08) 65%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* ========================================
          CLICK RINGS
      ======================================== */}

      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            className="
              pointer-events-none
              fixed
              left-0
              top-0
              z-[195]
              hidden
              h-6
              w-6
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#A78BFA]/70
              mix-blend-screen
              lg:block
            "
            style={{
              left: mouseX,
              top: mouseY,
            }}
            initial={{
              scale: 0.5,
              opacity: 0.8,
            }}
            animate={{
              scale: 4,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* ========================================
          CENTER DOT
      ======================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[200]
          hidden
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#FFFFFF]
          mix-blend-screen
          lg:block
        "
        style={{
          x: dotX,
          y: dotY,
          boxShadow:
            "0 0 8px rgba(167,139,250,0.95), 0 0 18px rgba(124,58,237,0.65)",
        }}
      />
    </>
  );
}

export default CustomCursor;