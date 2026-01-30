import React from 'react';
import { ShieldCheck, Phone, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold tracking-tighter">MasterShield<span className="text-xs align-top">©</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#" className="hover:text-blue-300 transition-colors">Technology</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Performance</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Guarantee</a>
            <button className="bg-[#bb6622] hover:bg-[#a0551c] text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-[#bb6622]/50 flex items-center gap-2">
              <Phone size={18} />
              Get a Free Estimate
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-gray-200 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
