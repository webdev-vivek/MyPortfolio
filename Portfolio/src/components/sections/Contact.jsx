import { motion } from "motion/react";
import Container from "../ui/Container";
import MagneticButton from "../ui/MagneticButton";
import TextReveal from "../ui/TextReveal";

function Contact() {
  return (
    <section
      id="contact"
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
            05
          </span>

          <span className="h-px w-12 bg-white/15" />

          <span className="text-xs uppercase tracking-[0.25em] text-white/45">
            Contact
          </span>
        </motion.div>

        {/* =====================================================
            MAIN CTA
        ====================================================== */}
        <TextReveal delay={0.08} duration={1}>
          <h2
            className="
              max-w-6xl
              text-[4.2rem]
              font-semibold
              uppercase
              leading-[0.84]
              tracking-[-0.07em]
              text-[#F8FAFC]
              sm:text-[5.5rem]
              md:text-[7rem]
              lg:text-[8rem]
              xl:text-[8.5rem]
            "
          >
            LET'S BUILD
            <br />

            <span className="text-white/40">
              SOMETHING
            </span>

            <br />

            USEFUL.
          </h2>
        </TextReveal>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            mt-20
            grid
            gap-16
            border-t
            border-white/10
            pt-10
            md:mt-24
            md:grid-cols-2
            md:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}
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
          >
            {/* Primary Text */}
            <p
              className="
                max-w-xl
                text-[17px]
                leading-[1.8]
                text-[#CBD5E1]
                md:text-[18px]
              "
            >
              Have an idea, a project, or an interesting
              engineering problem?
            </p>

            {/* Secondary Text */}
            <p
              className="
                mt-6
                max-w-lg
                text-[15px]
                leading-[1.9]
                text-[#94A3B8]
              "
            >
              I'm open to conversations about software,
              technology, and opportunities to build useful
              digital products.
            </p>

            {/* =================================================
                EMAIL
            ================================================== */}
            <MagneticButton
              href="mailto:your.email@example.com"
              strength={0.12}
              className="group mt-10 items-center gap-4"
            >
              <span
                className="
                  relative
                  text-lg
                  font-medium
                  text-[#F8FAFC]
                  md:text-xl
                "
              >
                your.email@example.com

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-[#3B82F6]
                    to-[#A78BFA]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </span>

              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/40
                  transition-all
                  duration-500
                  group-hover:border-[#A78BFA]/30
                  group-hover:bg-[#7C3AED]/10
                  group-hover:text-[#A78BFA]
                "
              >
                ↗
              </span>
            </MagneticButton>
          </motion.div>

          {/* =================================================
              RIGHT
          ================================================== */}
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
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between"
          >
            {/* =================================================
                STATUS
            ================================================== */}
            <div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#22C55E]
                      opacity-40
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#22C55E]
                      shadow-[0_0_10px_rgba(34,197,94,0.7)]
                    "
                  />
                </span>

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-[#94A3B8]
                  "
                >
                  Open to opportunities
                </span>
              </div>

              {/* =================================================
                  DETAILS
              ================================================== */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-8
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <div>
                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#64748B]
                    "
                  >
                    Location
                  </span>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-[#CBD5E1]
                    "
                  >
                    India
                  </p>
                </div>

                <div>
                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#64748B]
                    "
                  >
                    Focus
                  </span>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-[#CBD5E1]
                    "
                  >
                    Software + AI
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                SOCIALS
            ================================================== */}
            <div className="mt-16">
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#64748B]
                "
              >
                Connect
              </span>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="YOUR_GITHUB_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-xs
                    uppercase
                    tracking-[0.12em]
                    text-[#94A3B8]
                    transition-all
                    duration-300
                    hover:border-[#60A5FA]/30
                    hover:bg-[#3B82F6]/[0.06]
                    hover:text-[#F8FAFC]
                  "
                >
                  GitHub ↗
                </a>

                <a
                  href="YOUR_LINKEDIN_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-xs
                    uppercase
                    tracking-[0.12em]
                    text-[#94A3B8]
                    transition-all
                    duration-300
                    hover:border-[#A78BFA]/30
                    hover:bg-[#7C3AED]/[0.06]
                    hover:text-[#F8FAFC]
                  "
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL DIVIDER
        ====================================================== */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-24
            h-px
            origin-left
            bg-white/10
          "
        />

        {/* =====================================================
            CLOSING LINE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="
            mt-6
            flex
            items-center
            justify-between
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#64748B]
          "
        >
          <span>
            Have an idea?
          </span>

          <span className="flex items-center gap-3">
            Let's talk.

            <span className="text-[#A78BFA]">
              ↗
            </span>
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;