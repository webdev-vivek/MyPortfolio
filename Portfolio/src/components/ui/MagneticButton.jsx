import { useRef } from "react";
import { motion } from "motion/react";

function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  ...props
}) {
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    ref.current.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
    `;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`inline-flex transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default MagneticButton;