import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
const projects = [
{
  title: 'E-Commerce Platform',
  description:
  'A full-stack e-commerce solution with user authentication, product management, shopping cart, and Stripe payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Tailwind'],
  github: '#',
  live: '#',
  featured: true
},
{
  title: 'Task Management App',
  description:
  'A collaborative project management tool featuring real-time updates, drag-and-drop kanban boards, and role-based access control.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  github: '#',
  live: '#',
  featured: true
},
{
  title: 'Weather Dashboard',
  description:
  'A responsive weather application that provides real-time forecasts, interactive maps, and historical weather data visualization.',
  tech: ['React', 'Tailwind CSS', 'OpenWeather API', 'Recharts'],
  github: '#',
  live: '#',
  featured: false
},
{
  title: 'Portfolio Website',
  description:
  'A modern, responsive personal portfolio website built with React and Framer Motion to showcase my projects and skills.',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  github: '#',
  live: '#',
  featured: false
}];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
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
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Some things I've built recently. Ranging from full-stack
            applications to frontend experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) =>
          <motion.div
            key={project.title}
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
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors flex flex-col h-full">
            
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Folder size={24} />
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <a
                  href={project.github}
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="GitHub Repository">
                  
                    <FaGithub size={20} />
                  </a>
                  <a
                  href={project.live}
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="Live Demo">
                  
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech) =>
              <li
                key={tech}
                className="text-sm font-medium text-slate-500 font-mono">
                
                    {tech}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className="mt-16 text-center">
          
          <a
            href="#"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
            
            View Full Archive <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>);

}