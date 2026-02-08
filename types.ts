
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}
