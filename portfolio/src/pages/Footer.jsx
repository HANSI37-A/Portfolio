import React from 'react';
import { ChevronUp } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Hansi Tharaki. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a
            href="https://github.com"
            className="hover:text-emerald-400 transition-colors">
            
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-emerald-400 transition-colors">
            
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-emerald-400 transition-colors">
            
            Twitter
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all absolute right-6 md:right-12 -top-5"
          aria-label="Scroll to top">
          
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>);

}