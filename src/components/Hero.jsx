import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Linkedin, BookOpen } from 'lucide-react';
import resumePDF from '../Resume/Durga_Resume.pdf'; 

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const toRotate = ["Frontend", "Backend", "Full Stack"];
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
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8 border border-blue-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Open to Opportunities
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight min-h-[160px] md:min-h-[auto]"
        >
          Hello, I am Durga a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-indigo-600">
            {text}
          </span>
          <span className="text-slate-400 animate-pulse">|</span>
          &nbsp;Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
           Turning complex backend logic into seamless user experiences. 
           Specializing in Designing, Deploying, and Scalable Infrastructure.
        </motion.p>

        {/* Buttons Section - UPDATED */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
        {/* view my works button */}
        <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          {/* Resume Button */}
          <a 
            href={resumePDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FileText size={18} className="text-slate-300 group-hover:text-white" />
            Resume
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/kondaveetidurga/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          {/* Medium/Blog Button */}
          <a 
            href="https://medium.com/@kondaveetidurgashankar" // <--- REPLACE THIS
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-slate-800 hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            <BookOpen size={18} />
            Blog
          </a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-20 pt-10 border-t border-slate-100"
        >
           {/* <p className="text-sm text-slate-400 font-medium mb-4 ">POWERED BY</p>
           <div className="flex justify-center gap-8 grayscale">
              <span className="font-bold text-slate-600">AWS</span>
              <span className="font-bold text-slate-600">REACT</span>
              <span className="font-bold text-slate-600">PYTHON</span>
              <span className="font-bold text-slate-600">NODE.JS</span>
           </div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
