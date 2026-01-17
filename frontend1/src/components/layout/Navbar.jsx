import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-950/90 backdrop-blur-lg z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-emerald-500" />
            <span className="text-2xl font-bold text-white">
              SmartWriters
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-slate-300 hover:text-emerald-400 transition">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-slate-300 hover:text-emerald-400 transition">
              How it Works
            </Link>
            <Link to="/pricing" className="text-slate-300 hover:text-emerald-400 transition">
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition transform hover:scale-105"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/#features" 
              className="block text-slate-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#how-it-works" 
              className="block text-slate-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              to="/pricing" 
              className="block text-slate-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="block w-full px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}