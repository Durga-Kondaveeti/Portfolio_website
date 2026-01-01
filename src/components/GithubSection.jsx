import React, { useEffect, useState } from 'react';
import { Github, Book } from 'lucide-react';

const GithubSection = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  
  // Custom theme color for the graph (ma tches your blue accent)
  const graphColor = "3b82f6"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'Durga-Kondaveeti';
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const reposData = await reposRes.json();
        setStats(userData);
        setRepos(reposData);
      } catch (error) {
        console.error("GitHub Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  if (!stats) return <div className="py-20 text-center text-slate-500">Loading GitHub Data...</div>;

  return (
    <section id="github" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-slate-100 rounded-full mb-4 text-slate-900">
            <Github size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Open Source</h2>
        </div>

        {/* 1. The Contribution Graph (Added Back) */}
        <div className="mb-16 flex justify-center">
          <div className="p-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
             <img 
               src={`https://ghchart.rshah.org/${graphColor}/Durga-Kondaveeti`} 
               alt="Durga's Github Chart" 
               className="w-full max-w-4xl"
             />
          </div>
        </div>

        {/* 2. Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard label="Public Repos" value={stats?.public_repos} />
          <StatCard label="Followers" value={stats?.followers} />
          <StatCard label="Following" value={stats?.following} />
          <StatCard label="Total Gists" value={stats?.public_gists} />
        </div>

        {/* 3. Repositories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a 
              key={repo.id} 
              href={repo.html_url}
              target="_blank"
              rel="noreferrer" 
              className="group bg-slate-50 border border-slate-200 p-6 rounded-xl hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <Book size={20} className="text-blue-600" />
                <span className="text-xs font-mono text-slate-400">Public</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {repo.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
                {repo.description || "No description available."}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-200">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    {repo.language}
                  </span>
                )}
                
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">{label}</div>
  </div>
);

export default GithubSection;