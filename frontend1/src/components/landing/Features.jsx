import React from 'react';
import { Zap, Sparkles, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get your rewritten text in seconds. No waiting, no hassle. Just instant results powered by cutting-edge AI.'
    },
    {
      icon: Sparkles,
      title: 'Multiple Styles',
      description: 'Professional emails, casual messages, concise summaries, or creative content. One tool, infinite possibilities.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your text is processed securely and never stored. What you write stays private, always.'
    }
  ];

  return (
    <div id="features" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose <span className="text-emerald-400">SmartWriters</span>?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 transition"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}