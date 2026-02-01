import React from 'react';
import { projects } from '../data/content';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">
            A selection of technical projects focusing on performance, scalability, and developer experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
            >
              <a 
                href={project.demo || project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                // CHANGED: Added 'p-4' padding and 'bg-slate-50' so the image sits nicely inside
                className="block h-56 bg-slate-50 relative overflow-hidden cursor-pointer p-2"
              >
                 
                 <img 
                  src={project.img || `https://placehold.co/600x400/f8fafc/94a3b8?text=${encodeURIComponent(project.title)}`} 
                  alt={project.title}
                  // CHANGED: 'object-contain' (Fit whole image) instead of 'object-cover' (Crop)
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 z-10"
                 />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full text-slate-700 shadow-sm z-20 border border-white/50">
                  {project.type}
                </div>
              </a>

              <div className="p-8 flex flex-col flex-grow">
                <a 
                   href={project.demo || project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                    </h3>
                </a>

                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>

               {/* BUTTONS CONTAINER */}
                <div className="flex items-center gap-6 mt-auto pt-6 border-t border-slate-100">
                  
                  {/* Source Code Button (Always Visible) */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors gap-2"
                  >
                    <Github size={18} /> Source Code
                  </a>

                  {/* Demo Button (Visible ONLY if project.demo exists) */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors gap-2"
                    >
                      <ExternalLink size={18} /> Live Demo
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