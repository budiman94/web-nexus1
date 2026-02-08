
import React from 'react';
import { STATS } from '../constants';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const chartData = [
  { name: '2020', value: 40 },
  { name: '2021', value: 75 },
  { name: '2022', value: 120 },
  { name: '2023', value: 210 },
  { name: '2024', value: 340 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 rounded-[40px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-8">
              Reliable growth through <br />
              <span className="text-blue-500">proven performance</span>
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-heading font-extrabold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[300px] w-full bg-white/5 rounded-3xl p-6">
            <h4 className="text-white font-bold mb-4 text-center">Yearly Success Rate</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#f8fafc' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#3b82f6' : '#1e293b'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
