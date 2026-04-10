import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-[#0a0a0b]/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-xs">R</span>
        </div>
        <span className="text-white text-xs font-semibold tracking-widest uppercase">Reactive</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
        <a href="#about" className="hover:text-white transition">About Me</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
      </div>

      <button className="border border-gray-600 rounded-full px-6 py-2 text-xs text-white uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-all">
        Contact
        <span className="bg-[#d9f99d] text-black rounded-full p-1 w-5 h-5 flex items-center justify-center text-[10px]">↗</span>
      </button>
    </nav>
  );
};

export default Navbar;