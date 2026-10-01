import { motion } from "motion/react";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import TextReveal from "../ui/TextReveal";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#120D1F] py-10 md:py-10"
    >
      <Container className="relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-20 md:mb-24">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 flex items-center gap-4"
          >
            <span className="font-mono text-sm text-[#8B5CF6]">03</span>
            <span className="h-px w-12 bg-white/15" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/45">
              Selected Work
            </span>
          </motion.div>

          {/* Title + Description */}
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
            <TextReveal delay={0.05} duration={1}>
              <h2
                className="
                  max-w-5xl
                  text-[4.2rem]
                  font-semibold
                  uppercase
                  leading-[0.86]
                  tracking-[-0.065em]
                  text-[#F8FAFC]
                  sm:text-[5.5rem]
                  md:text-[7rem]
                  lg:text-[6.7rem]
                  xl:text-[7.2rem]
                "
              >
                SELECTED
                <br />
                <span className="text-white/40">WORK</span>
              </h2>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-end lg:pb-2"
            >
              <p className="max-w-lg text-[17px] leading-[1.8] text-[#C9C5D6] md:text-[18px]">
                A selection of projects where software
                engineering, problem solving, and modern
                technology come together to create practical
                digital experiences.
              </p>
            </motion.div>
          </div>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-24 md:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* FOOTER STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            mt-20
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            Software · AI/ML · Full Stack
          </span>

          <span className="max-w-md text-left text-sm leading-6 text-[#8A8396] md:text-right">
            Built with a focus on thoughtful engineering,
            useful technology, and real-world impact.
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;