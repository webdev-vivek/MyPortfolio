import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ==========================================================
     ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navigation
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter(Boolean);

      if (!sections.length) return;

      const triggerPoint = 150;
      let active = "";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint) {
          active = `#${section.id}`;
        }
      }

      setActiveSection(active);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const handleNavigation = (href) => {
    setActiveSection(href);
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-4
        pt-4
        md:px-6
        md:pt-5
      "
    >
      {/* ======================================================
          NAVBAR OUTER
      ======================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          overflow-hidden
          rounded-full
          p-[1px]
        "
      >
        {/* ====================================================
            SUBTLE ANIMATED BORDER
        ===================================================== */}

        <motion.div
          className="
            absolute
            -inset-[180%]
          "
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #3B82F6 325deg, #7C3AED 342deg, #A78BFA 352deg, transparent 360deg)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ====================================================
            NAV
        ===================================================== */}

        <nav
          className="
            relative
            flex
            min-h-[58px]
            items-center
            justify-between
            rounded-full
            border
            border-white/[0.06]
            bg-[#15102A]/90
            px-5
            backdrop-blur-2xl
            shadow-[0_12px_40px_rgba(0,0,0,0.35)]
            sm:px-6
            md:min-h-[62px]
            md:px-7
          "
        >
          {/* ==================================================
              LOGO
          =================================================== */}

          <motion.a
            href="#home"
            whileHover={{
              x: 2,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              flex
              items-center
              gap-1
              text-[18px]
              font-semibold
              tracking-[-0.03em]
              text-[#F8FAFC]
            "
          >
            Vivek
            <span className="text-[#60A5FA]">.</span>
          </motion.a>

          {/* ==================================================
              DESKTOP NAV
          =================================================== */}

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="
          relative
          py-2
          text-[13px]
          font-medium
          tracking-[-0.01em]
          transition-all
          duration-300
        "
                  style={{
                    color: isActive ? "#A78BFA" : "#A1A1AA",
                    textShadow: isActive
                      ? "0 0 18px rgba(167,139,250,0.22)"
                      : "none",
                  }}
                >
                  {item.label}

                  {/* Very subtle active indicator */}
                  <span
                    className={`
            absolute
            -bottom-1
            left-1/2
            h-[2px]
            -translate-x-1/2
            rounded-full
            bg-[#A78BFA]
            transition-all
            duration-300
            ${isActive ? "w-5 opacity-100" : "w-0 opacity-0"}
          `}
                  />
                </a>
              );
            })}
          </div>

          {/* ==================================================
              STATUS
          =================================================== */}

          <div
            className="
              hidden
              items-center
              gap-2.5
              lg:flex
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#22C55E]
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#22C55E]
                  shadow-[0_0_9px_rgba(34,197,94,0.8)]
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.17em]
                text-[#94A3B8]
              "
            >
              Available
            </span>
          </div>

          {/* ==================================================
              MOBILE MENU BUTTON
          =================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              transition-colors
              duration-300
              hover:border-white/20
              lg:hidden
            "
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex w-4 flex-col gap-[5px]">
              <span
                className={`
                  h-px
                  w-full
                  bg-[#F8FAFC]
                  transition-all
                  duration-300
                  ${menuOpen ? "translate-y-[3px] rotate-45" : ""}
                `}
              />

              <span
                className={`
                  h-px
                  w-full
                  bg-[#F8FAFC]
                  transition-all
                  duration-300
                  ${menuOpen ? "opacity-0" : "opacity-100"}
                `}
              />

              <span
                className={`
                  h-px
                  w-full
                  bg-[#F8FAFC]
                  transition-all
                  duration-300
                  ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}
                `}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* ========================================================
          MOBILE MENU
      ========================================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 8,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-3
              w-full
              max-w-[1280px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0A0A0A]/95
              p-3
              shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <div className="flex flex-col">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-4
                      transition-colors
                      duration-300
                      hover:bg-white/[0.03]
                    "
                    style={{
                      color: isActive ? "#A78BFA" : "#64748B",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          h-1
                          w-1
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "bg-[#A78BFA] shadow-[0_0_8px_rgba(167,139,250,0.8)]"
                              : "bg-white/10"
                          }
                        `}
                      />

                      <span
                        className="
                          text-xs
                          font-medium
                          uppercase
                          tracking-[0.16em]
                        "
                      >
                        {item.label}
                      </span>
                    </div>

                    <span
                      className={`
                        text-sm
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "translate-x-0 text-[#A78BFA]"
                            : "-translate-x-1 text-white/10"
                        }
                      `}
                    >
                      →
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Status */}
            <div
              className="
                mt-2
                flex
                items-center
                gap-2.5
                border-t
                border-white/10
                px-4
                pt-4
                pb-2
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#22C55E]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-[#22C55E]
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-[#64748B]
                "
              >
                Available for opportunities
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
