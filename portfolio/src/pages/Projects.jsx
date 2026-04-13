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
  title: 'Book Fair Stall Booking System (Group Project)',
  description:
  'A web application for managing stall bookings at a book fair, allowing organizers to track reservations and vendors to manage their stalls.',
  tech: ['JavaScript', 'Java', 'HTML', 'CSS'],
  github: 'https://github.com/HANSI37-A/ReserveX',
  live: '#',
  featured: true
},
{
  title: 'Online Bookstore (Group Project)',
  description:
  'A responsive e-bookstore application that allows users to browse, search, and purchase digital books.',
  tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  github: 'https://github.com/BookNest-2025/readify',
  live: 'https://redify.infinityfree.me',
  featured: false
},
{
  title: 'Movie Website',
  description:
  'A modern, responsive movie information website built with React.',
  tech: ['React','CSS'],
  github: 'https://github.com/HANSI37-A/movieWorld',
  live: 'https://movie-world-sigma.vercel.app/',
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