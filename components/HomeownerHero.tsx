import React from 'react';
import { Check, X } from 'lucide-react';

// -----------------------------------------------------------------------------
// INSTRUCTION: Replace this URL with the link to the image you attached.
// -----------------------------------------------------------------------------
const COUPLE_IMAGE_URL = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

export const HomeownerHero: React.FC = () => {
  return (
    <section className="relative z-30 min-h-[85vh] flex items-center bg-[#f2f2f2] shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
      
      {/* Right Side Image - Full Height */}
      <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0">
         <img 
            src={COUPLE_IMAGE_URL}
            alt="Homeowners protecting what matters most" 
            className="w-full h-full object-cover object-center"
         />
      </div>

      {/* Left Side Overlay - Gradient from solid gray to transparent */}
      {/* Adjusted gradient stops (via-50%) to ensure text is fully readable before the image fade starts */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f2f2f2] from-0% via-[#f2f2f2] via-40% to-transparent to-100% pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-xl lg:max-w-2xl py-24">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            You’re Not Just Protecting a Roof. <br />
            <span className="text-blue-600">You’re Protecting What Matters Most.</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10 font-medium">
            <p>
              Your home isn’t just an asset. It’s where life happens, where seasons pass, and where memories are made.
            </p>
            <p className="text-gray-900 font-bold">
              But when your roofline is compromised, everything below it is at risk.
            </p>
            <p>
              You’ve invested in your home, now protect it with a system built to last, not just to last a little longer than the last one.
            </p>
          </div>

          {/* The "No More" List - Clean layout without box */}
          <div className="mb-12">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0"><X size={14} strokeWidth={3} /></span>
                <span className="text-lg">No more ladders.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0"><X size={14} strokeWidth={3} /></span>
                <span className="text-lg">No more guessing or patch jobs.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0"><X size={14} strokeWidth={3} /></span>
                <span className="text-lg">No more clogs or overflow.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0"><X size={14} strokeWidth={3} /></span>
                <span className="text-lg">No more warranty calls.</span>
              </li>
            </ul>
            
            <div className="mt-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/30">
                <Check size={20} strokeWidth={3} />
              </span>
              <span className="text-blue-900 font-bold text-2xl tracking-tight">Just real, proven protection.</span>
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-6 py-2 bg-white/50 backdrop-blur-sm rounded-r-xl max-w-lg">
            <p className="text-xl font-bold text-gray-900 italic mb-2">
              "Do it once. Do it right. Never think about it again."
            </p>
            <p className="text-gray-500 font-semibold">
              Protect your roofline before the damage begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
