import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, MapPin, Shield, Lock, Activity } from 'lucide-react';

const AdminTraffic = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [visitorInfo, setVisitorInfo] = useState(null);

  // This fetches the info of the person currently looking at the admin page (you)
  // as a demonstration of the tracking capability.
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setVisitorInfo(data))
      .catch(err => console.error("Tracking Error:", err));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'durga2026') { // Simple password for your access
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Access Key");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-10 rounded-[2.5rem] w-full max-w-md border-2 border-primary-800"
        >
          <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <Lock className="text-accent-500" size={32} />
          </div>
          <h2 className="text-2xl font-black text-white text-center mb-2 tracking-tight">Admin Traffic Portal</h2>
          <p className="text-slate-400 text-center mb-8 text-sm font-medium">Enter your secure access key to view traffic.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access Key"
              className="w-full px-6 py-4 bg-slate-900 border-2 border-slate-800 rounded-2xl text-white focus:border-accent-500 outline-none transition-all font-bold"
            />
            <button className="w-full py-4 bg-accent-600 hover:bg-accent-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-premium">
              Unlock Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest mb-4 border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
              Live System Active
            </div>
            <h1 className="text-5xl font-black text-primary-950 tracking-tighter italic">Traffic Intelligence</h1>
          </div>
          
          <div className="flex gap-4">
             <a 
               href="https://analytics.google.com/" 
               target="_blank" 
               rel="noreferrer"
               className="px-6 py-3 bg-primary-950 text-white rounded-xl font-bold text-sm hover:bg-primary-800 transition-all flex items-center gap-2"
             >
               <Activity size={18} /> Open Full GA4 Report
             </a>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="glass-card p-8 rounded-[2rem] border-2 border-primary-50">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Globe size={20} /></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Primary Region</span>
              </div>
              <div className="text-3xl font-black text-primary-950">{visitorInfo?.region || "Loading..."}</div>
              <div className="text-sm text-primary-500 font-medium mt-1">{visitorInfo?.country_name}</div>
           </div>

           <div className="glass-card p-8 rounded-[2rem] border-2 border-primary-50">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><MapPin size={20} /></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Top City</span>
              </div>
              <div className="text-3xl font-black text-primary-950">{visitorInfo?.city || "Loading..."}</div>
              <div className="text-sm text-primary-500 font-medium mt-1">Zip: {visitorInfo?.postal}</div>
           </div>

           <div className="glass-card p-8 rounded-[2rem] border-2 border-primary-50">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Shield size={20} /></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Network Host</span>
              </div>
              <div className="text-xl font-black text-primary-950 truncate">{visitorInfo?.org || "ISP Hidden"}</div>
              <div className="text-sm text-primary-500 font-medium mt-1">IP: {visitorInfo?.ip}</div>
           </div>
        </div>

        {/* Google Analytics Embed Notice */}
        <div className="glass-card p-12 rounded-[3rem] text-center bg-slate-50 border-2 border-dashed border-primary-200">
           <h3 className="text-2xl font-black text-primary-950 mb-4">Full Geographic Analytics</h3>
           <p className="text-primary-500 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
             For detailed recruiter tracking (Virginia, California, Texas), use your Google Analytics 4 Dashboard. 
             It provides 100% accurate Heatmaps and User Journeys.
           </p>
           <div className="flex justify-center gap-4">
              <div className="px-6 py-3 bg-white rounded-xl border-2 border-primary-100 font-bold text-primary-600">
                Tracking Active for: {window.location.hostname}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AdminTraffic;
