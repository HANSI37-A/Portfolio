import React, { Children } from 'react';
import { motion } from 'framer-motion';
const skillCategories = [
{
  title: 'Frontend',
  skills: [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Next.js',
  'Framer Motion',
  'HTML/CSS']

},
{
  title: 'Backend',
  skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL']
},
{
  title: 'Database',
  skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma ORM']
},
{
  title: 'Tools & Others',
  skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Linux']
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      
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
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A comprehensive list of technologies and tools I've worked with
            across various projects and coursework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) =>
          <motion.div
            key={category.title}
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
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
            
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {category.title}
              </h3>

              <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              className="flex flex-wrap gap-3">
              
                {category.skills.map((skill) =>
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default">
                
                    {skill}
                  </motion.span>
              )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}