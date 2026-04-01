import React from 'react';
import { projects } from '../data/content';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-black text-primary-950 mb-6 tracking-tight italic">Featured Projects</h2>
          <p className="text-xl text-primary-500 font-medium leading-relaxed">
            Technical engineering projects focused on scalability, system architecture, and machine learning.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
            >
              <a 
                href={project.demo || project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="block h-64 bg-slate-50 relative overflow-hidden p-6"
              >
                 <img 
                  src={project.img || `https://placehold.co/600x400/f8fafc/94a3b8?text=${encodeURIComponent(project.title)}`} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                 />
                
                {/* Floating Type Badge */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full text-primary-950 shadow-premium border-2 border-primary-100 z-20">
                  {project.type}
                </div>
              </a>

              <div className="p-10 flex flex-col flex-grow">
                <a 
                   href={project.demo || project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block mb-4"
                >
                    <h3 className="text-2xl font-black text-primary-950 group-hover:text-accent-600 transition-colors tracking-tight">
                    {project.title}
                    </h3>
                </a>

                <p className="text-primary-600 leading-relaxed mb-8 flex-grow font-medium">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-widest text-accent-700 bg-accent-50/80 px-3 py-1.5 rounded-lg border-2 border-accent-100">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8 mt-auto pt-8 border-t border-primary-50">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-xs font-black uppercase tracking-widest text-primary-400 hover:text-primary-950 transition-colors gap-2.5"
                  >
                    <Github size={18} className="text-accent-500" /> Source
                  </a>

                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-xs font-black uppercase tracking-widest text-primary-400 hover:text-accent-600 transition-colors gap-2.5"
                    >
                      <ExternalLink size={18} className="text-accent-500" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;