import React, { useState } from 'react';
import { aboutPersonas } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activePersona, setActivePersona] = useState('recruiter');

  const personas = [
    { id: 'recruiter', label: 'Recruiter' },
    { id: 'manager', label: 'Manager' },
    { id: 'client', label: 'Client' },
  ];

  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-accent-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-primary-950 mb-4 tracking-tight">About Me</h2>
          <p className="text-primary-500 font-medium text-lg">Choose a perspective to learn more about my background.</p>
        </motion.div>
        
        {/* Toggle Switch */}
        <div className="inline-flex p-1.5 bg-primary-100/50 backdrop-blur-sm rounded-2xl mb-10 border-2 border-primary-200/50">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activePersona === p.id 
                  ? 'bg-white text-accent-600 shadow-premium border-2 border-accent-100' 
                  : 'text-primary-500 hover:text-primary-800'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[140px] relative">
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={activePersona}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="glass-card p-8 md:p-10 rounded-3xl"
                >
                    <p className="text-xl text-primary-800 leading-relaxed font-medium italic">
                       "{aboutPersonas[activePersona]}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-1 w-12 bg-accent-500 rounded-full"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-primary-400">
                        {activePersona} Insights
                      </span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;