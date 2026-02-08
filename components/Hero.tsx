
import React from 'react';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            ✨ Innovation at scale
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-tight mb-6">
            Evolving The <br />
            <span className="gradient-text">Digital Frontier</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            Nexus Digital Solutions empowers businesses with cutting-edge AI, cloud infrastructure, and bespoke software that redefines industry standards.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={scrollToServices}
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center group"
            >
              Explore Services
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              onClick={onStartChat}
              className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Consult Nexus AI
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
              alt="Technology Vision" 
              className="rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20 shadow-xl max-w-[200px] border-blue-500/30">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-emerald-400">Live Engine</span>
            </div>
            <p className="text-sm font-bold text-white">AI-Powered Decisions</p>
            <div className="mt-3 flex space-x-1">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-1 flex-1 bg-slate-700 rounded-full"><div className={`h-full bg-blue-500 rounded-full animate-[shimmer_2s_infinite]`} style={{width: `${i * 20}%`}}></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
