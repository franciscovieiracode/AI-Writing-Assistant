import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center bg-slate-900 border border-slate-800 rounded-2xl p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Writing?
        </h2>
        <p className="text-xl text-slate-400 mb-8">
          Join thousands of writers using AI to create better content faster.
        </p>
        <Link 
          to="/editor"
          className="inline-block px-10 py-5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-lg shadow-emerald-900/50"
        >
          Start Writing Better Today
        </Link>
      </div>
    </div>
  );
}