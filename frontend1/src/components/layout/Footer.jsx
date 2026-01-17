import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SmartWriters</h3>
            <p className="text-slate-500">AI-powered writing assistant for the modern age.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/editor" className="text-slate-400 hover:text-emerald-400 transition">Editor</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-emerald-400 transition">Pricing</Link></li>
              <li><Link to="/#features" className="text-slate-400 hover:text-emerald-400 transition">Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Privacy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Terms</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© 2025 SmartWriters. Built for the AI Revolution.</p>
        </div>
      </div>
    </footer>
  );
}