import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { isDarkMode, toggleTheme } = useTheme();

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-[#0a0a0b] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-[28px] font-extrabold text-white">
          <span className="text-emerald-400">&lt;</span>HT
          <span className="text-emerald-400">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  activeSection === sectionId
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Hire Me */}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/20 transition-all font-medium ml-4"
          >
            Hire Me
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-slate-800 border border-slate-700"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme}>
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 md:hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-slate-300 hover:text-emerald-400"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}