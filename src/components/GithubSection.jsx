import React, { useEffect, useState } from 'react';
import { Github, Book } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubSection = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  
  const graphColor = "3b82f6"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'Durga-Kondaveeti';
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        // List of specific repositories to feature
        const repoNames = [
          'Inventory_Manager',
          'Job-tracker',
          'Regex-Time-Travel-Debugger',
          'Llama-based-code-explainer-LLM',
          'image-scene-recognition-sift',
          'Crypto-trading-bot',
          'Synapse-Fitness'
        ];

        // Fetch each repository's data individually to ensure we get exactly these
        const repoPromises = repoNames.map(name => 
          fetch(`https://api.github.com/repos/${username}/${name}`).then(res => res.json())
        );
        
        const reposData = await Promise.all(repoPromises);
        
        // Filter out any that failed to load (e.g., if a name is wrong)
        const validRepos = reposData.filter(repo => repo.id);

        setStats(userData);
        setRepos(validRepos);
      } catch (error) {
        console.error("GitHub Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  if (!stats) return <div className="py-20 text-center text-slate-500">Loading GitHub Data...</div>;

  return (
    <section id="github" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-6 bg-primary-950 text-white rounded-[2rem] mb-6 shadow-premium"
          >
            <Github size={40} className="text-accent-400" />
          </motion.div>
          <h2 className="text-5xl font-black text-primary-950 tracking-tight italic">Builds and Contributions</h2>
          <p className="text-primary-500 mt-4 text-xl font-medium">A collection of engineering projects, open-source work, and system designs.</p>
        </div>

        {/* Contribution Graph */}
        <div className="mb-24 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-card rounded-[2.5rem] overflow-hidden"
          >
             <img 
               src={`https://ghchart.rshah.org/${graphColor}/Durga-Kondaveeti`} 
               alt="Durga's Github Chart" 
               className="w-full max-w-5xl opacity-80"
             />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <StatCard label="Public Repos" value={stats?.public_repos} />
          <StatCard label="Followers" value={stats?.followers} />
          <StatCard label="Following" value={stats?.following} />
        </div>

        {/* Repositories Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <motion.a 
              key={repo.id} 
              href={repo.html_url}
              target="_blank"
              rel="noreferrer" 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col h-full hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-accent-50 rounded-xl text-accent-600 group-hover:bg-accent-600 group-hover:text-white border-2 border-accent-100 transition-colors">
                  <Book size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-300">Public Repo</span>
              </div>
              
              <h3 className="text-xl font-black text-primary-950 mb-4 group-hover:text-accent-600 transition-colors tracking-tight">
                {repo.name}
              </h3>

              {repo.description && (
                <p className="text-primary-600 mb-8 line-clamp-3 flex-grow font-medium leading-relaxed">
                  {repo.description}
                </p>
              )}
              {!repo.description && <div className="flex-grow"></div>}

              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-primary-400 mt-auto pt-8 border-t border-primary-50">
                {repo.language && (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 hover:text-primary-900 transition-colors">
                  View Source &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="glass-card p-6 rounded-3xl text-center border-2 border-primary-100"
  >
    <div className="text-3xl font-black text-primary-950 tracking-tighter mb-1">{value}</div>
    <div className="text-[10px] font-black uppercase tracking-widest text-primary-400">{label}</div>
  </motion.div>
);

export default GithubSection;