
import React from 'react';
import { Service, Stat, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'AI Development',
    description: 'Custom AI solutions and LLM integrations to automate and scale your business processes.',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: '2',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud architecture designed for the high-demand digital landscape.',
    icon: '☁️',
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: '3',
    title: 'Modern Web Apps',
    description: 'High-performance, responsive web applications built with the latest technologies.',
    icon: '🌐',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    id: '4',
    title: 'Cybersecurity',
    description: 'Proactive protection and monitoring to keep your digital assets safe from modern threats.',
    icon: '🛡️',
    color: 'from-orange-500 to-red-400'
  }
];

export const STATS: Stat[] = [
  { label: 'Global Clients', value: 150, suffix: '+' },
  { label: 'Projects Completed', value: 480, suffix: '' },
  { label: 'Expert Engineers', value: 85, suffix: '' },
  { label: 'Customer Satisfaction', value: 99, suffix: '%' }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Aether Finance', category: 'FinTech', image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Solaris Cloud', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'NeoHealth AI', category: 'HealthCare', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Vortex ERP', category: 'SaaS', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
];

export const COMPANY_DATA = `
Nexus Digital Solutions is a premier digital transformation agency founded in 2020. 
We specialize in AI development, Cloud Infrastructure, Modern Web Applications, and Cybersecurity.
Our mission is to accelerate the digital evolution of companies worldwide through innovative technology.
Our headquarters is in the Cyber District of Neo-Jakarta.
Key leaders: CEO Arya Wijaya, CTO Dr. Elena Vance.
We have won the "Innovation Award 2023" and "Tech Growth Catalyst 2024".
`;
