import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Linkedin, BookOpen } from 'lucide-react'; // Added ArrowDown
import resumePDF from '../resume/Durga_Resume.pdf'; 

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const toRotate = ["Frontend", "Backend", "Full -stack"];
  const TYPING_SPEED = 150;
  const PAUSE_TIME = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PAUSE_TIME);
    } 
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(TYPING_SPEED);
    }
    else {
      setDelta(TYPING_SPEED);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="blob-glow top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100"></div>
        <div className="blob-glow top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-100 animation-delay-2000"></div>
        <div className="blob-glow bottom-[-10%] right-[20%] w-[700px] h-[700px] bg-slate-100 animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md text-accent-700 text-sm font-bold mb-8 border-2 border-primary-100 shadow-premium"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Currently seeking Fall 2026 SDE Roles
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-primary-950 mb-8 leading-[1.1] min-h-[180px] md:min-h-[auto]"
        >
          Durga Kondaveeti <br />
          <span className="text-gradient">
            {text}
          </span>
          <span className="text-accent-300 animate-pulse">_</span>
          &nbsp;Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-primary-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
           Architecting high-performance systems and AI-driven solutions. 
           Master's in Computer Science candidate at <span className="text-primary-900 font-bold">George Mason University</span> with a proven record of engineering enterprise-scale cloud infrastructure.
        </motion.p>

        {/* Buttons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          {/* ROW 1: Primary Actions */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            
            {/* View Work Button */}
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-primary-950 text-white rounded-2xl font-bold hover:bg-primary-800 transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-1 flex items-center gap-3"
            >
              Explore Projects
              <ArrowDown size={20} className="text-accent-400 group-hover:text-white group-hover:animate-bounce" />
            </a>

            {/* Resume Button */}
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-4 glass-card text-primary-900 rounded-2xl font-bold hover:bg-white transition-all flex items-center gap-3"
            >
              <FileText size={20} className="text-accent-600" />
              Download Resume
            </a>
          </div>

          {/* ROW 2: Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/kondaveetidurga/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-accent-600 font-bold flex items-center gap-2.5 transition-colors group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Durga-Kondaveeti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-950 font-bold flex items-center gap-2.5 transition-colors group"
            >
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </div>

        </motion.div>

        {/* Tech Stack Preview */}
        {/* <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-20 pt-10 border-t border-slate-100"
        >
           <p className="text-sm text-slate-400 font-medium mb-4">POWERED BY</p>
           <div className="flex justify-center gap-8 grayscale opacity-50">
              <span className="font-bold text-slate-300">AWS</span>
              <span className="font-bold text-slate-300">REACT</span>
              <span className="font-bold text-slate-300">PYTHON</span>
              <span className="font-bold text-slate-300">NODE.JS</span>
           </div>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Hero;