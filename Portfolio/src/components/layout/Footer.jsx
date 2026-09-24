import { motion } from "motion/react";
import Container from "../ui/Container";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080D18]">
      <Container className="py-10 md:py-14">
        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-medium tracking-[0.08em] text-white"
          >
            Vivek.
          </motion.a>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/35 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <motion.a
            href="#"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white"
          >
            Back to top
            <span className="text-base">↑</span>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-white/25 md:flex-row md:items-center md:justify-between">
          <span>
            © {currentYear} Vivek. All rights reserved.
          </span>

          <span>
            Designed & built with React.
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;