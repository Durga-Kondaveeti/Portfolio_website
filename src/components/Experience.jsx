import React from 'react';
import { experience } from '../data/content';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary">Work Experience</h2>
          <p className="text-secondary mt-2">My professional journey so far.</p>
        </motion.div>

        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-12">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-white border-4 border-accent rounded-full transform translate-y-1"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                <span className="inline-flex items-center text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                  <Calendar size={14} className="mr-2" />
                  {job.date}
                </span>
              </div>
              
              <div className="flex items-center text-accent font-medium mb-3">
                <Briefcase size={16} className="mr-2" />
                {job.company}
              </div>

              <p className="text-secondary leading-relaxed max-w-2xl">
                {job.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;