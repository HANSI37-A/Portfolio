import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5
          }}
          className="relative mb-8">
          
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-emerald-400 to-cyan-400">
            <img
              src="/WhatsApp_Image_2025-05-16_at_16.46.39_2ea74fe4.jpg"
              alt="Hansi Tharaki"
              className="w-full h-full rounded-full object-cover border-4 border-slate-950" />
            
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3,
              duration: 0.5
            }}
            className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-xl">
            
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1,
            duration: 0.5
          }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          
          Hi, I'm <span className="text-gradient">Hansi Tharaki</span>
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.5
          }}
          className="text-xl md:text-3xl font-medium text-slate-400 mb-6">
          
          Full Stack Developer | SE Undergraduate
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3,
            duration: 0.5
          }}
          className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed">
          
          Building elegant solutions to complex problems. Passionate about web
          technologies, open-source, and creating user-centric applications that
          make a difference.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.4,
            duration: 0.5
          }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all flex items-center justify-center gap-2 group">
            
            View My Work
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform" />
            
          </a>
          <a
            href="/cv.pdf"
            className="px-8 py-4 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-medium transition-all flex items-center justify-center gap-2 group">
            
            <Download
              size={18}
              className="group-hover:-translate-y-1 transition-transform" />
            
            Download CV
          </a>
        </motion.div>
      </div>
    </section>);

}