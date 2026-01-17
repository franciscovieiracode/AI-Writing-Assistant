import React from 'react';

export default function HowItWorks() {
  const steps = [
    { 
      num: '01', 
      title: 'Paste Your Text', 
      desc: 'Copy and paste any text you want to transform' 
    },
    { 
      num: '02', 
      title: 'Choose Your Style', 
      desc: 'Select from professional, casual, concise, or creative presets' 
    },
    { 
      num: '03', 
      title: 'Get Instant Results', 
      desc: 'AI rewrites your text in seconds—copy and use immediately' 
    }
  ];

  return (
    <div id="how-it-works" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Three Simple Steps
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex items-start gap-6 bg-slate-900 border border-slate-800 rounded-xl p-8 hover:bg-slate-800 hover:border-emerald-500/30 transition"
            >
              <div className="text-6xl font-bold text-emerald-500">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}