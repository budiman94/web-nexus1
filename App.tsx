
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import AIAssistant, { AIAssistantRef } from './components/AIAssistant';
import Footer from './components/Footer';

function App() {
  const aiRef = useRef<AIAssistantRef>(null);

  const handleStartConversation = () => {
    aiRef.current?.open();
  };

  const handleServiceDetail = (serviceName: string) => {
    aiRef.current?.sendMessage(`Tell me more about your ${serviceName} services.`);
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero onStartChat={handleStartConversation} />
        
        {/* Trusted By Section */}
        <section className="py-12 border-y border-white/5 glass">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-2xl font-black">SAMSUNG</span>
              <span className="text-2xl font-black">ADOBE</span>
              <span className="text-2xl font-black">NVIDIA</span>
              <span className="text-2xl font-black">META</span>
              <span className="text-2xl font-black">INTEL</span>
            </div>
          </div>
        </section>

        <section id="services">
          <Services onDetail={handleServiceDetail} />
        </section>

        <Stats />

        <section id="portfolio">
          <Portfolio />
        </section>
        
        {/* Newsletter & Contact Section */}
        <section id="contact" className="py-24 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass p-12 lg:p-20 rounded-[40px] text-center border-blue-500/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
               
               <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
                Ready to transform <br />
                <span className="gradient-text">your digital future?</span>
               </h2>
               <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of industry leaders who chose Nexus for their critical digital infrastructure and innovation needs.
               </p>
               
               <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <button 
                  onClick={handleStartConversation}
                  className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95 flex items-center"
                 >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  Start A Conversation
                 </button>
                 <button 
                  onClick={() => aiRef.current?.sendMessage("I would like to request a formal quote for a project.")}
                  className="px-10 py-5 glass text-white font-bold rounded-2xl transition-all hover:bg-white/10"
                 >
                  Request A Quote
                 </button>
               </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIAssistant ref={aiRef} />
    </div>
  );
}

export default App;
