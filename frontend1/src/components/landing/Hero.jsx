import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const styles = [
    { name: 'Professional', color: 'from-slate-600 to-slate-700' },
    { name: 'Casual', color: 'from-slate-600 to-slate-700' },
    { name: 'Concise', color: 'from-slate-600 to-slate-700' },
    { name: 'Creative', color: 'from-slate-600 to-slate-700' }
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <span className="text-emerald-400 text-sm">🚀 Join the 2025 AI Revolution</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Transform Your Writing
          <br />
          <span className="text-emerald-400">
            Instantly
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
          Paste your text, pick a style, and watch AI rewrite it in seconds. Professional, casual, concise, or creative—your choice.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/editor"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-lg font-semibold transition transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-900/50"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-lg font-semibold transition">
            Watch Demo
          </button>
        </div>

        {/* Floating Style Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {styles.map((style, i) => (
            <div 
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:bg-slate-800 hover:border-emerald-500/30 transition transform hover:scale-105 cursor-pointer"
              style={{
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${style.color} mb-3 mx-auto`}></div>
              <p className="font-semibold text-slate-200">{style.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}