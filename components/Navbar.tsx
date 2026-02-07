
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">K</div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">Ke<span className="text-emerald-600">Homes</span></span>
            </div>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-emerald-500 text-sm font-medium text-slate-900">Browse</a>
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700">Rent</a>
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700">Buy</a>
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700">Verified Agents</a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Sign In</button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95">
              List Property
            </button>
          </div>
          <div className="md:hidden">
            <button className="p-2 text-slate-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
