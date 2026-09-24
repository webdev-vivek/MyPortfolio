import { motion } from "motion/react";
import Container from "../ui/Container";
import TextReveal from "../ui/TextReveal";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0A0A0A] py-10 md:py-10"
    >
      <Container className="relative z-10">
        {/* =====================================================
            SECTION LABEL
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-sm text-[#60A5FA]">
            04
          </span>

          <span className="h-px w-12 bg-white/15" />

          <span className="text-xs uppercase tracking-[0.25em] text-white/45">
            Experience
          </span>
        </motion.div>

        {/* =====================================================
            HEADER
        ====================================================== */}
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
              WHERE I
              <br />

              <span className="text-white/40">
                BUILD
              </span>
            </h2>
          </TextReveal>

          {/* Introduction */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end lg:pb-2"
          >
            <p
              className="
                max-w-lg
                text-[17px]
                leading-[1.8]
                text-[#CBD5E1]
                md:text-[18px]
              "
            >
              A timeline of the projects, roles, and
              engineering experiences that have shaped the
              way I build software.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}
        <div className="relative mt-20 md:mt-24">
          {/* Vertical Line */}
          <div
            className="
              absolute
              bottom-0
              left-[7px]
              top-0
              w-px
              bg-white/10
              md:left-[119px]
            "
          />

          {/* Timeline Items */}
          <div>
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.year}-${experience.role}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  grid
                  gap-8
                  border-t
                  border-white/10
                  py-12
                  pl-12
                  md:grid-cols-[120px_1fr]
                  md:gap-16
                  md:pl-0
                  md:py-16
                "
              >
                {/* =================================================
                    YEAR — DESKTOP
                ================================================== */}
                <div className="hidden md:block">
                  <span
                    className="
                      font-mono
                      text-xs
                      tracking-[0.08em]
                      text-[#64748B]
                      transition-colors
                      duration-500
                      group-hover:text-[#60A5FA]
                    "
                  >
                    {experience.year}
                  </span>
                </div>

                {/* =================================================
                    TIMELINE DOT
                ================================================== */}
                <div
                  className="
                    absolute
                    left-0
                    top-[3rem]
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    md:left-[113px]
                    md:top-[4rem]
                  "
                >
                  {/* Outer ring */}
                  <span
                    className="
                      absolute
                      h-4
                      w-4
                      rounded-full
                      border
                      border-white/10
                      bg-[#0A0A0A]
                      transition-all
                      duration-500
                      group-hover:border-[#60A5FA]/40
                    "
                  />

                  {/* Inner dot */}
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/20
                      transition-all
                      duration-500
                      group-hover:bg-[#60A5FA]
                      group-hover:shadow-[0_0_14px_rgba(96,165,250,0.75)]
                    "
                  />
                </div>

                {/* =================================================
                    YEAR — MOBILE
                ================================================== */}
                <div className="md:hidden">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#60A5FA]/80
                    "
                  >
                    {experience.year}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}
                <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
                  {/* Main Information */}
                  <div>
                    {/* Type + Company */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-[#60A5FA]/75
                        "
                      >
                        {experience.type}
                      </span>

                      <span className="h-px w-6 bg-white/10" />

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-[#64748B]
                        "
                      >
                        {experience.company}
                      </span>
                    </div>

                    {/* Role */}
                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-semibold
                        uppercase
                        leading-none
                        tracking-[-0.045em]
                        text-[#F8FAFC]
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                        sm:text-4xl
                        md:text-5xl
                      "
                    >
                      {experience.role}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-6
                        max-w-2xl
                        text-[15px]
                        leading-7
                        text-[#94A3B8]
                        md:text-base
                      "
                    >
                      {experience.description}
                    </p>
                  </div>

                  {/* =================================================
                      TECHNOLOGIES
                  ================================================== */}
                  <div
                    className="
                      flex
                      flex-wrap
                      content-start
                      gap-2
                      lg:justify-end
                    "
                  >
                    {experience.technologies.map(
                      (technology, technologyIndex) => (
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
                            duration: 0.4,
                            delay:
                              index * 0.1 +
                              technologyIndex * 0.05,
                          }}
                          className="
                            rounded-full
                            border
                            border-white/10
                            px-4
                            py-2
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-[#64748B]
                            transition-all
                            duration-300
                            group-hover:border-white/15
                            group-hover:text-[#94A3B8]
                          "
                        >
                          {technology}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =====================================================
              END MARKER
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              absolute
              -bottom-2
              left-0
              flex
              h-4
              w-4
              items-center
              justify-center
              md:left-[113px]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A78BFA]
                shadow-[0_0_14px_rgba(167,139,250,0.7)]
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-7
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[#64748B]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            Software Engineering · AI / ML · Full Stack
          </span>

          <span className="flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-[#3B82F6]
                to-[#7C3AED]
              "
            />

            Continuous progression
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Experience;