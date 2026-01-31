import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the very top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Logic: Hide if scrolling down (> 80px), Show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 text-white transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="https://mastershield.com/wp-content/uploads/2021/05/logo-png-new-e1630093099526.png" 
              alt="MasterShield" 
              className="h-12 w-auto"
            />
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