import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const navLinks = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Blogs',
  href: '#blogs'
},
{
  name: 'Contact',
  href: '#contact'
}];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-[#0a0a0b] py-5 border-b border-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#home"
          className="text-[28px] font-extrabold tracking-tight text-white flex items-center z-50">
          
          <span className="text-emerald-400 mr-2 font-mono">&lt;</span>
          HT
          <span className="text-emerald-400 ml-2 font-mono">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/20 transition-all font-medium ml-4">
            
            Hire Me
          </a>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-slate-800/80 border border-slate-700 text-yellow-400 hover:text-yellow-300 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all shadow-sm"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={toggleTheme}
            className="text-yellow-400 hover:text-yellow-300 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

      
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl md:hidden">
            
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors">
                
                    {link.name}
                  </a>
              )}
              </nav>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </header>);

}