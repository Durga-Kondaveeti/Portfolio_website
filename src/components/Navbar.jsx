import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll for styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inside Navbar.jsx, find the navLinks array and update it:
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Spotlight', href: '#projects' }, // Renamed to match your request
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog-preview' }, // Scrolls to the blog section on home
  { name: 'Contact', href: '#contact' },
];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If not on home page, go home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If on home page, just scroll
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/70 backdrop-blur-xl border-b-2 border-primary-100 shadow-premium py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-black text-primary-950 tracking-tighter hover:text-accent-600 transition-colors">
          DK<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-bold text-primary-600 hover:text-accent-600 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-5 pl-4 border-l-2 border-primary-100">
            <a href="https://github.com/Durga-Kondaveeti" target="_blank" rel="noreferrer" className="text-primary-400 hover:text-primary-950 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kondaveetidurga/" target="_blank" rel="noreferrer" className="text-primary-400 hover:text-accent-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-primary-950 bg-primary-50 rounded-xl border-2 border-primary-100">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b-2 border-primary-100 py-8 px-6 flex flex-col space-y-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-bold text-primary-800 hover:text-accent-600"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;