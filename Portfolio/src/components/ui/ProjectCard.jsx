import { useRef, useState } from "react";
import { motion } from "motion/react";
import TextReveal from "../ui/TextReveal";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current || !imageRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCursorPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    const moveX = ((x - centerX) / centerX) * 10;
    const moveY = ((y - centerY) / centerY) * 10;

    cardRef.current.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.015, 1.015, 1.015)
    `;

    imageRef.current.style.transform = `
      scale(1.06)
      translate(${moveX}px, ${moveY}px)
    `;
  };

  const handleMouseLeave = () => {
    setCursorPosition({
      x: 50,
      y: 50,
    });
    if (!cardRef.current || !imageRef.current) return;

    cardRef.current.style.transform = `
      perspective(1400px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;

    imageRef.current.style.transform = `
      scale(1)
      translate(0px, 0px)
    `;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group w-full"
    >
      <div className="grid w-full gap-8 sm:gap-10 lg:grid-cols-[70px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
        {/* PROJECT NUMBER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.12 + 0.15,
          }}
          className="self-start pt-1 font-mono text-sm text-white/25"
        >
          <span className="transition-colors duration-500 group-hover:text-orange-300">
            {project.id}
          </span>
        </motion.div>

        {/* PROJECT INFORMATION */}
        <div className="min-w-0">
          {/* CATEGORY */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <motion.p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              {project.category}
            </motion.p>

            {index === 0 && (
              <>
                <span className="h-px w-5 bg-white/10" />

                <span className="rounded-full border border-orange-300/20 bg-orange-300/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-orange-300">
                  Featured
                </span>
              </>
            )}
          </div>

          {/* TITLE */}
          <TextReveal delay={index * 0.08}>
            <h3 className="max-w-2xl text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.055em] text-white transition-transform duration-700 group-hover:translate-x-3 sm:text-5xl md:text-6xl lg:text-[4rem]">
              {project.title}
            </h3>
          </TextReveal>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/55">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-7 flex max-w-xl flex-wrap gap-2">
            {project.technologies?.map((technology, technologyIndex) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + technologyIndex * 0.05,
                }}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/45 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.04] group-hover:text-white/70"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* LINKS */}
          <div className="mt-8 flex items-center gap-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group/link relative flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                GitHub
                <span className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                  ↗
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
              </a>
            )}

            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="group/link relative flex items-center gap-2 text-sm text-white/35 transition-colors duration-300 hover:text-white"
              >
                Live Demo
                <span className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                  ↗
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover/link:w-full" />
              </a>
            )}
          </div>
        </div>

        {/* PROJECT VISUAL */}
        <div
          ref={cardRef}
          data-cursor="project"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#18222d] shadow-[0_30px_100px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {/* MOUSE GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/[0.08] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* PLACEHOLDER */}
            <div
              ref={imageRef}
              className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <motion.div
                className="pointer-events-none absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/[0.07] blur-[80px] transition-opacity duration-500"
                style={{
                  left: `${cursorPosition.x}%`,
                  top: `${cursorPosition.y}%`,
                }}
              />

              {/* existing project placeholder */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [8, 12, 8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-36 w-36 rounded-[28px] border border-white/10 bg-white/[0.035] shadow-2xl"
              >
                <div className="absolute inset-4 rounded-[20px] border border-white/10" />

                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_35px_rgba(255,180,80,0.8)]" />

                <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-white/20" />

                <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-white/10" />
              </motion.div>
            </div>

            {/* FUTURE IMAGE */}
            {project.image && (
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-[0.82]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            )}

            {/* DARK GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05090d] via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-300/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            {/* TOP NUMBER */}
            <div className="absolute right-6 top-6 z-20 flex items-center gap-3 font-mono text-xs text-white/35">
              <span className="h-px w-6 bg-white/20 transition-all duration-500 group-hover:w-10 group-hover:bg-orange-300/60" />

              <span className="transition-colors duration-500 group-hover:text-white/70">
                / {project.id}
              </span>
            </div>

            {/* VIEW PROJECT */}
            {(project.demo || project.github) && (
              <a
                href={project.demo || project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Explore ${project.title}`}
                className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-7"
              >
                <span className="translate-y-5 text-xs font-medium uppercase tracking-[0.2em] text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/80">
                  Explore Project
                </span>

                <span className="flex h-12 w-12 translate-y-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            )}

            {/* INNER BORDER */}
            <div className="pointer-events-none absolute inset-0 z-30 rounded-[28px] border border-transparent transition-colors duration-700 group-hover:border-orange-300/20" />
          </div>
        </div>
      </div>

      {/* PROJECT DIVIDER */}
      <div className="mt-12 h-px w-full bg-white/[0.08]">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full origin-left bg-white/20"
        />
      </div>
    </motion.article>
  );
}

export default ProjectCard;
