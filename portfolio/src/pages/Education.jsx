import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'University of Kelaniya',
    duration: '2023 – Present',
    description: 'Focusing on modern software development practices, web technologies, and software architecture. Engaged in various academic projects emphasizing scalable application design.',
    icon: GraduationCap,
    current: true,
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'H/Walasmulla National School',
    duration: '2018 – 2022',
    description: 'Physical Science stream. Developed a strong foundation in Mathematics, Physics, and Chemistry, which sparked an interest in analytical problem-solving and logic.',
    highlights: ['Z-Score: 1.5209'],
    icon: Award,
    current: false,
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-900/50 border-y border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            Education
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My academic journey and qualifications that have shaped my software engineering foundation.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 pl-8 ml-4 md:ml-6 space-y-12">
          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                
                <div className={`absolute -left-[41px] p-2 rounded-full border-2 ${item.current ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-700 text-slate-400'} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} />
                </div>

                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-colors backdrop-blur-sm relative overflow-hidden">
                 
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                          {item.degree}
                          {item.current && (
                            <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                              Present
                            </span>
                          )}
                        </h3>
                        <p className="text-emerald-400 font-medium text-lg mt-1">{item.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 w-fit">
                        <Calendar size={16} className="text-emerald-500" />
                        <span className="text-sm font-medium">{item.duration}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {item.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
