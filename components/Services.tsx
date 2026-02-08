
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white">Digital Core Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group glass p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-blue-400 text-sm font-bold flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
