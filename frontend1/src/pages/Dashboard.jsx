import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, TrendingUp, Sparkles } from 'lucide-react';

export default function Dashboard() {
  // TODO: Fetch user data from API
  const stats = [
    { label: 'Texts Rewritten', value: '147', icon: FileText },
    { label: 'Time Saved', value: '12h', icon: Clock },
    { label: 'Most Used Style', value: 'Professional', icon: TrendingUp },
  ];

  const recentTexts = [
    { id: 1, style: 'Professional', preview: 'Dear team, I wanted to reach out...', date: '2 hours ago' },
    { id: 2, style: 'Casual', preview: 'Hey! Just checking in to see...', date: '5 hours ago' },
    { id: 3, style: 'Concise', preview: 'Meeting rescheduled to 3pm...', date: '1 day ago' },
  ];

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-xl text-slate-400">Welcome back! Here's your writing activity.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/editor"
              className="flex items-center gap-4 p-6 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition transform hover:scale-105"
            >
              <Sparkles className="w-8 h-8" />
              <div>
                <div className="font-semibold text-lg">New Rewrite</div>
                <div className="text-sm text-emerald-100">Start transforming text</div>
              </div>
            </Link>
            <button className="flex items-center gap-4 p-6 bg-slate-800 hover:bg-slate-700 rounded-lg transition text-left">
              <FileText className="w-8 h-8 text-slate-400" />
              <div>
                <div className="font-semibold text-lg text-white">View History</div>
                <div className="text-sm text-slate-400">Browse past rewrites</div>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentTexts.map((text) => (
              <div 
                key={text.id}
                className="flex items-start justify-between p-4 bg-slate-800 hover:bg-slate-750 rounded-lg transition cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">
                      {text.style}
                    </span>
                    <span className="text-slate-500 text-sm">{text.date}</span>
                  </div>
                  <p className="text-slate-300">{text.preview}</p>
                </div>
                <button className="text-slate-400 hover:text-emerald-400 transition">
                  <FileText className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}