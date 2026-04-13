import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database } from 'lucide-react';
export function AboutSection() {
  const stats = [
  {
    label: 'Years Coding',
    value: '3+'
  },
  {
    label: 'Projects Completed',
    value: '8+'
  },
  {
    label: 'Technologies',
    value: '10+'
  }];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="space-y-6 text-slate-400 text-lg leading-relaxed">
            
            <p>
              Hello! I'm Hansi Tharaki, a Software Engineering undergraduate at
              the University of Kelaniya with a deep passion for building modern
              web applications. My journey started when I wrote my first lines
              of code, and since then, I've been fascinated by how software can
              bring ideas to life.
            </p>
            <p>
              Currently, I'm focusing on building accessible, inclusive products
              and digital experiences. I enjoy bridging the gap between
              engineering and design - combining my technical knowledge with a
              keen eye for aesthetics to create beautiful, performant
              applications.
            </p>
            <p>
              When I'm not at my computer, you can usually find me exploring new
              technologies, contributing to open-source projects, or
              collaborating with fellow developers on exciting ideas.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) =>
              <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-emerald-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="relative">
            
            <div className="aspect-square rounded-2xl bg-slate-900 border border-slate-800 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="h-full flex flex-col justify-center space-y-8 relative z-10">
                <div className="flex items-center gap-6 p-6 rounded-xl bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Frontend
                    </h3>
                    <p className="text-slate-400 text-sm">
                      React, Vue, Tailwind
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-xl bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm transform translate-x-8 rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Backend
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Node.js, Python
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-xl bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Database
                    </h3>
                    <p className="text-slate-400 text-sm">
                      MySQL, MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}