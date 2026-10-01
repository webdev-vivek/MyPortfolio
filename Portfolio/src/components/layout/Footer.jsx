import { motion } from "motion/react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0A0A0A]
        font-sans
      "
    >
      {/* =====================================================
          AMBIENT VIOLET GLOW
      ====================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#8B5CF6]/[0.035]
          blur-[160px]
        "
      />

      {/* =====================================================
          TOP ANIMATED BORDER
      ====================================================== */}
      <div className="relative h-px w-full bg-white/[0.06]">
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-0
            top-0
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-transparent
            via-[#6D28D9]
            via-[#8B5CF6]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1480px]
          px-6
          py-20
          md:px-10
          md:py-24
        "
      >
        {/* =================================================
            MAIN FOOTER
        ================================================== */}
        <div className="grid gap-16 md:grid-cols-[1.3fr_0.7fr]">

          {/* =================================================
              BRAND
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
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* LOGO */}
            <a
              href="#home"
              className="
                inline-block
                text-3xl
                font-semibold
                tracking-[-0.045em]
                text-[#F8FAFC]
                transition-all
                duration-300
                hover:text-white
              "
            >
              Vivek
              <span className="text-[#8B5CF6]">
                .
              </span>
            </a>

            {/* STATEMENT */}
            <p
              className="
                mt-7
                max-w-xl
                text-lg
                font-medium
                leading-8
                tracking-[-0.01em]
                text-[#C4C4CC]
                md:text-xl
              "
            >
              Building thoughtful software, intelligent
              systems and digital experiences that turn
              ideas into something useful.
            </p>

            {/* AVAILABILITY */}
            <div className="mt-8 flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">
                {/* Glow */}
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

                {/* Dot */}
                <span
                  className="
                    relative
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#22C55E]
                    shadow-[0_0_14px_rgba(34,197,94,0.75)]
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A5A5B0]
                "
              >
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
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
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              grid
              grid-cols-2
              gap-10
              sm:grid-cols-3
              md:grid-cols-2
            "
          >

            {/* =================================================
                NAVIGATION
            ================================================== */}
            <div>
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8A8396]
                "
              >
                Navigate
              </span>

              <div className="mt-6 flex flex-col gap-4">

                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[#B8B8C2]
                      transition-all
                      duration-300
                      hover:text-[#F8FAFC]
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-[#8B5CF6]
                        transition-all
                        duration-300
                        group-hover:w-4
                      "
                    />

                    {item.label}
                  </a>
                ))}

              </div>
            </div>

            {/* =================================================
                CONNECT
            ================================================== */}
            <div>
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8A8396]
                "
              >
                Connect
              </span>

              <div className="mt-6 flex flex-col gap-4">

                {/* GITHUB */}
                <a
                  href="YOUR_GITHUB_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#F8FAFC]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  GitHub

                  <span
                    className="
                      text-[#A5A5B0]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#C4B5FD]
                    "
                  >
                    ↗
                  </span>
                </a>

                {/* LINKEDIN */}
                <a
                  href="YOUR_LINKEDIN_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#F8FAFC]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  LinkedIn

                  <span
                    className="
                      text-[#A5A5B0]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#C4B5FD]
                    "
                  >
                    ↗
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:your.email@example.com"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#F8FAFC]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  Email

                  <span
                    className="
                      text-[#A5A5B0]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#C4B5FD]
                    "
                  >
                    ↗
                  </span>
                </a>

              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          className="
            mt-20
            h-px
            origin-left
            bg-white/[0.08]
          "
        />

        {/* =====================================================
            FOOTER META
        ====================================================== */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#8A8396]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* COPYRIGHT */}
          <div className="flex flex-wrap items-center gap-4">

            <span>
              © 2026 Vivek
            </span>

            <span
              className="
                h-3
                w-px
                bg-white/10
              "
            />

            <span>
              Software Engineer
            </span>

          </div>

          {/* RIGHT META */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-5
            "
          >

            <span>
              Built with React · Tailwind · Motion
            </span>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              className="
                group
                flex
                items-center
                gap-2
                text-[#B8B8C2]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Back to top

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  text-[#B8B8C2]
                  transition-all
                  duration-300
                  group-hover:border-[#8B5CF6]/50
                  group-hover:bg-[#8B5CF6]/10
                  group-hover:text-[#C4B5FD]
                "
              >
                ↑
              </span>
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;