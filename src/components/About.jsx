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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-8">About Me</h2>
        
        {/* Toggle Switch */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200 pb-2">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id)}
              className={`pb-2 text-sm font-medium transition-colors duration-300 ${
                activePersona === p.id 
                  ? 'text-accent border-b-2 border-accent' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {p.label} Perspective
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[120px]">
            <AnimatePresence mode='wait'>
                <motion.p 
                    key={activePersona}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg text-secondary leading-relaxed"
                >
                    {aboutPersonas[activePersona]}
                </motion.p>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;