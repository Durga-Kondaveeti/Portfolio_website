import React from 'react';
import { skills } from '../data/content';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Terminal } from 'lucide-react';

const Skills = () => {
  // Helper to get icon based on category name
  const getIcon = (category) => {
    if (category.includes('Languages')) return <Code2 size={24} />;
    if (category.includes('Frontend')) return <Terminal size={24} />; // Using Terminal for generalized code
    if (category.includes('Backend')) return <Server size={24} />;
    if (category.includes('Cloud')) return <Cloud size={24} />;
    return <Code2 size={24} />;
  };

  return (
    <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-black text-primary-950 tracking-tight italic">Technical Expertise</h2>
          <p className="text-primary-500 mt-4 text-xl font-medium italic">A versatile toolkit for solving complex engineering challenges.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] group hover:border-accent-200/50"
            >
              <div className="text-accent-600 mb-8 p-4 bg-accent-50 rounded-2xl inline-block group-hover:bg-accent-600 group-hover:text-white border-2 border-accent-100 transition-all duration-500">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-xl font-black text-primary-950 mb-6 tracking-tight">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-white text-primary-600 text-xs font-black uppercase tracking-widest rounded-xl border-2 border-primary-100 shadow-premium group-hover:border-accent-100 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;