import React from 'react';
import { education } from '../data/content';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-32 bg-slate-50 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black text-primary-950 tracking-tight italic">Academic Background</h2>
          <p className="text-primary-500 mt-4 text-xl font-medium">Foundations in Computer Engineering & Computer Science.</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="p-4 bg-accent-50 text-accent-600 rounded-[1.25rem] border-2 border-accent-100 shadow-premium group-hover:scale-110 transition-transform">
                  <GraduationCap size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400 bg-white px-4 py-2 rounded-full border-2 border-primary-100 shadow-premium">
                  {edu.date}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-primary-950 mb-3 tracking-tight">{edu.school}</h3>
                <p className="text-accent-600 font-black uppercase tracking-widest text-xs mb-6">{edu.degree}</p>
                <div className="flex items-center text-sm text-primary-400 font-bold">
                  <MapPin size={16} className="mr-2 text-primary-300" />
                  {edu.location}
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-50/50 rounded-full blur-2xl group-hover:bg-accent-100/50 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;