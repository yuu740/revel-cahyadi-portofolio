import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },

  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 64;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      className="bg-[#1f262c] sticky top-0 z-50 p-4 shadow-lg border-b border-gray-700"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          href="#hero"
          className="text-xl font-bold text-white"
          onClick={(e) => handleNavClick(e, "#hero")}
          whileHover={{ scale: 1.05, color: "#d9c179" }}
          transition={{ duration: 0.3 }}
          aria-label="Home"
        >
          Revel Cahyadi
        </motion.a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        <motion.div
          className="hidden md:flex md:space-x-6"
          initial="visible"
          animate="visible"
          variants={navVariants}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 hover:text-[#d9c179] transition-colors text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              aria-label={link.label}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Mobile dropdown */}
      <motion.div
        className="md:hidden mt-2"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="block py-2 hover:text-[#d9c179] transition-colors text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label={link.label}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
