import React from 'react';
import { experience } from '../data/content';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-black text-primary-950 tracking-tight italic">Professional Journey</h2>
          <p className="text-primary-500 mt-4 text-xl font-medium italic">Building systems that scale and matter.</p>
        </motion.div>

        <div className="relative border-l-4 border-primary-50 ml-4 md:ml-10 space-y-20">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-accent-500 rounded-full shadow-accent-glow group-hover:scale-125 transition-transform"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-black text-primary-950 tracking-tight">{job.role}</h3>
                <span className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary-400 bg-primary-50 px-4 py-2 rounded-full mt-3 sm:mt-0 border-2 border-primary-100">
                  <Calendar size={14} className="mr-2 text-accent-500" />
                  {job.date}
                </span>
              </div>
              
              <div className="flex items-center text-accent-600 font-black uppercase tracking-widest text-sm mb-6">
                <Briefcase size={18} className="mr-3" />
                {job.company}
              </div>

              <div className="glass-card p-8 rounded-3xl relative overflow-hidden group-hover:border-accent-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <p className="text-primary-700 leading-relaxed font-medium text-lg relative z-10">
                  {job.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;