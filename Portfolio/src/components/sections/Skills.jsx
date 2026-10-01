import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "../ui/Container";
import TextReveal from "../ui/TextReveal";
import { skillCategories } from "../../data/skills";

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#120D1F] py-10 md:py-10"
    >
      <Container className="relative z-10">
        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-sm text-[#8B5CF6]">02</span>
          <span className="h-px w-12 bg-white/15" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/45">
            Skills
          </span>
        </motion.div>

        {/* MAIN TITLE */}
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
              HOW I
              <br />
              <span className="text-white/40">ENGINEER</span>
            </h2>
          </TextReveal>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end lg:pb-2"
          >
            <p className="max-w-lg text-[17px] leading-[1.8] text-[#C9C5D6] md:text-[18px]">
              I work across frontend, backend, and
              intelligent systems to build software that is
              reliable, scalable, and designed around real
              problems.
            </p>
          </motion.div>
        </div>

        {/* SKILL SYSTEM */}
        <div className="mt-20 border-t border-white/10 pt-10 md:mt-24">
          <div className="grid lg:grid-cols-[280px_1fr] lg:gap-20">

            {/* CATEGORY NAVIGATION */}
            <div className="flex gap-2 overflow-x-auto pb-6 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {skillCategories.map((category) => {
                const active = activeCategory.id === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={
                      "group flex min-w-fit items-center gap-4 border px-5 py-3 text-left transition-all duration-300 lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-5 border-white/10 " +
                      (active
                        ? "text-[#F8FAFC]"
                        : "text-[#8A8396] hover:text-[#C9C5D6]")
                    }
                  >
                    {/* Category Number */}
                    <span
                      className={
                        "font-mono text-[10px] transition-colors duration-300 " +
                        (active ? "text-[#8B5CF6]" : "text-white/20")
                      }
                    >
                      {category.id}
                    </span>

                    {/* Category Name */}
                    <span
                      className={
                        "text-xs uppercase tracking-[0.16em] transition-colors duration-300 " +
                        (active ? "text-[#F8FAFC]" : "text-[#8A8396]")
                      }
                    >
                      {category.title}
                    </span>

                    {/* Arrow */}
                    <span
                      className={
                        "ml-auto hidden text-sm transition-all duration-300 lg:block " +
                        (active
                          ? "translate-x-0 text-[#C4B5FD]"
                          : "-translate-x-2 text-transparent group-hover:translate-x-0 group-hover:text-white/25")
                      }
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE SKILLS */}
            <div className="min-h-[390px] lg:min-h-[430px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* CATEGORY HEADER */}
                  <div className="flex items-start justify-between border-b border-white/10 pb-7">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5CF6]/80">
                        {activeCategory.id} / {activeCategory.title}
                      </span>

                      <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#9D96B0]">
                        {activeCategory.description}
                      </p>
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.12em] text-[#8A8396]">
                      {String(activeCategory.skills.length).padStart(2, "0")}{" "}
                      SKILLS
                    </span>
                  </div>

                  {/* SKILL LIST */}
                  <div className="grid sm:grid-cols-2">
                    {activeCategory.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group flex items-center justify-between border-b border-white/10 py-7 sm:px-5 sm:first:pl-0"
                      >
                        {/* Skill Name */}
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[10px] text-[#8A8396]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[17px] font-medium tracking-[-0.02em] text-[#C9C5D6] transition-colors duration-300 group-hover:text-[#F8FAFC]">
                            {skill}
                          </span>
                        </div>

                        {/* Skill Arrow */}
                        <span className="text-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C4B5FD]">
                          ↗
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
            text-[#8A8396]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>React · Node.js · Python · AI / ML</span>
          <span>Always learning · Always building</span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;