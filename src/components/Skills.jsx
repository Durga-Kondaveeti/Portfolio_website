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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary">Technical Toolkit</h2>
          <p className="text-secondary mt-2">Technologies I work with daily.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-accent mb-4">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-md border border-slate-100"
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