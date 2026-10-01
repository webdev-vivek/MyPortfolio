import { motion } from "motion/react";
import Container from "../ui/Container";
import TextReveal from "../ui/TextReveal";

const principles = [
  {
    number: "01",
    title: "BUILD",
    description:
      "I turn ideas into reliable software through clean architecture, modern technologies, and thoughtful implementation.",
  },
  {
    number: "02",
    title: "SOLVE",
    description:
      "I break complex problems into practical solutions, balancing technical depth with simplicity and usability.",
  },
  {
    number: "03",
    title: "EVOLVE",
    description:
      "I continuously learn, experiment, and improve the way I design, develop, and ship software.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#120D1F] py-10 md:py-10"
    >
      <Container className="relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-sm text-[#8B5CF6]">01</span>
          <span className="h-px w-12 bg-white/15" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/45">
            About
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
          {/* Left — Headline */}
          <div>
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
                <span className="text-[#F8FAFC]">I BUILD</span>
                <br />
                <span className="text-white/40">DIGITAL</span>
                <br />
                <span className="text-[#F8FAFC]">SYSTEMS.</span>
              </h2>
            </TextReveal>
          </div>

          {/* Right — Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-end lg:pb-2"
          >
            <p className="max-w-lg text-[17px] leading-[1.8] text-[#C9C5D6] md:text-[18px]">
              I'm a software engineer focused on building
              modern web applications, intelligent systems,
              and digital products that solve real-world
              problems.
            </p>

            <p className="mt-7 max-w-lg text-[15px] leading-[1.9] text-[#9D96B0]">
              I enjoy taking ideas from concept to
              implementation and turning complex requirements
              into simple, reliable experiences. My work
              combines full-stack development, frontend
              engineering, and AI/ML.
            </p>

            {/* Accent */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9D96B0]">
                Software engineered with intent
              </span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 h-px origin-left bg-white/10 md:mt-24"
        />

        {/* Principles */}
        <div className="mt-10 grid md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                "group py-7 md:px-8 md:py-4 " +
                (index !== 0
                  ? "border-t border-white/10 md:border-l md:border-t-0"
                  : "")
              }
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#8B5CF6]/75">
                  {principle.number}
                </span>

                <motion.span
                  whileHover={{ x: 5, y: -2 }}
                  className="text-white/20 transition-colors duration-300 group-hover:text-[#C4B5FD]"
                >
                  ↗
                </motion.span>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-7
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-[#F8FAFC]
                  transition-transform
                  duration-500
                  group-hover:translate-x-2
                "
              >
                {principle.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#8A8396] transition-colors duration-500 group-hover:text-[#9D96B0]">
                {principle.description}
              </p>

              {/* Hover Accent */}
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            mt-16
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
            Software Engineering · AI/ML · Full Stack
          </span>

          <span className="max-w-md text-left text-sm leading-6 text-[#8A8396] md:text-right">
            From concept to deployment, I focus on building
            software that is technically strong, useful, and
            built to evolve.
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;