import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- IMPORTS ---
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // <--- This was missing!
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import GithubSection from './components/GithubSection';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import { personalInfo } from './data/content';

// --- HOME COMPONENT ---
const Home = () => (
  <main className="bg-white">
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Education />
    <GithubSection />

    <section id="blog-preview" className="py-20 px-6 max-w-7xl mx-auto bg-gray-50">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-primary">Latest Writing</h2>
          <p className="text-secondary mt-2">Thoughts on code, cloud, and engineering.</p>
        </div>
      </div>
      <BlogList />
    </section>

    <Contact />
  </main>
);

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <Router>
      <div className="font-sans text-slate-900 bg-white selection:bg-blue-500 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <footer className="py-8 text-center text-gray-400 text-sm bg-white border-t border-gray-50">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;