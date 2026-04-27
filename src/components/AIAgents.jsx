import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const agents = [
  {
    name: "Claude",
    description: "Expertise in prompt engineering and complex reasoning tasks with Anthropic's Claude models.",
    logo: "/Claude.jpeg",
    accent: "group-hover:text-orange-600",
    bgColor: "bg-orange-50/50",
    borderColor: "hover:border-orange-200"
  },
  {
    name: "Gemini CLI",
    description: "Built and optimized terminal-based interfaces for Google's Gemini models for rapid development.",
    logo: "/Gemini.jpeg",
    accent: "group-hover:text-blue-600",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-200"
  },
  {
    name: "Antigravity",
    description: "Developing advanced agentic workflows focused on autonomous problem solving and task execution.",
    logo: "/Anti-Gravity.jpeg",
    accent: "group-hover:text-indigo-600",
    bgColor: "bg-indigo-50/50",
    borderColor: "hover:border-indigo-200"
  },
  {
    name: "Openclaw",
    description: "Open-source contribution and implementation of high-performance AI agent frameworks.",
    logo: "/Openclaw.jpeg",
    accent: "group-hover:text-red-600",
    bgColor: "bg-rose-50/50",
    borderColor: "hover:border-rose-200"
  }
];

const AIAgents = () => {
  return (
    <section id="ai-agents" className="py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-2 border-accent-100"
          >
            <Sparkles size={14} className="animate-pulse" />
            AI & Autonomous Agents
          </motion.div>
          <h2 className="text-6xl font-black text-primary-950 tracking-tight italic mb-8">Next-Gen Intelligence</h2>
          <p className="text-primary-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            Engineering autonomous systems and fine-tuning Large Language Models to bridge the gap between human intent and machine execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative ${agent.bgColor} backdrop-blur-sm p-12 rounded-[3.5rem] hover:-translate-y-3 transition-all duration-700 border-2 border-transparent ${agent.borderColor} overflow-hidden flex flex-col items-center text-center`}
            >
              {/* LARGE BACKGROUND LOGO ON HOVER - SLOW MOTION TOP TO BOTTOM */}
              <div 
                className="absolute right-0 top-0 w-1/2 h-full opacity-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-30 transition-all duration-1000 ease-out pointer-events-none z-0 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${agent.logo})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center right',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* SMALL LOGO (CENTERED WITH WHITE BG) */}
                <div className="mb-10 w-20 h-20 flex items-center justify-center bg-white rounded-2xl p-3 shadow-premium border border-primary-100 group-hover:scale-110 transition-transform duration-700">
                  <img 
                    src={agent.logo} 
                    alt={`${agent.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className={`text-2xl font-black text-primary-950 mb-4 tracking-tight transition-colors duration-500 ${agent.accent}`}>
                  {agent.name}
                </h3>
                <p className="text-primary-500 font-medium leading-relaxed text-sm max-w-[200px]">
                  {agent.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
