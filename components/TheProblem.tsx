import React from 'react';
import { AlertTriangle, ArrowDown, Droplets, Home, Zap } from 'lucide-react';

export const TheProblem: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative z-20 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden rounded-t-[3rem] -mt-16 sticky top-0">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 font-semibold text-sm mb-6">
              <AlertTriangle size={16} />
              <span>Critical Warning</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your Roofline Is Hiding a <span className="text-red-500">Costly Truth</span>.
            </h2>
            
            <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-8 border-l-4 border-red-500 pl-4">
              Clogs are just the beginning. The real damage builds silently at the roofline until it's too late.
            </h3>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Every season, it starts all over again: gutters fill, water overflows, and costly damage creeps in, often where you can’t see it.
              </p>
              <p>
                But it’s not just leaves. It’s the costly problems like fascia rot, mold, algae, basement leaks, and foundation cracks. Other gutter guards fail because they sit flat and overshoot, ignoring the slope of your roof and trapping debris.
              </p>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mt-8">
                <p className="text-white font-semibold mb-2">The Truth?</p>
                <p className="mb-4">
                  You’re not just battling water and debris. You’re battling <strong className="text-red-400">The Roofline Cascade™</strong>.
                </p>
                <p>
                   A chain reaction of failure that starts at the edge of your roof and silently spreads down to your walls, foundation, landscaping, and even your basement. And the wrong guard doesn’t stop it. It accelerates it.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Visual Cascade */}
          <div className="relative">
             {/* The Graphic Container */}
             <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-2">
                   The Roofline Cascade™
                </div>

                <div className="flex flex-col gap-0 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500 to-red-500/10 z-0 border-l-2 border-dashed border-red-500/30"></div>

                  {/* Step 1 */}
                  <div className="relative z-10 flex items-start gap-6 bg-gray-900/80 p-6 rounded-xl border border-gray-700 mb-4 transform hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/30 text-red-400">
                        <ArrowDown size={32} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-1">1. The Source</h4>
                        <p className="text-sm text-gray-400">Flat guards trap debris at the <span className="text-red-400">Roof Edge</span>, acting like a shelf for wet rot.</p>
                     </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 flex items-start gap-6 bg-gray-900/80 p-6 rounded-xl border border-gray-700 mb-4 transform hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/30 text-red-400">
                        <Zap size={32} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-1">2. The Spread</h4>
                        <p className="text-sm text-gray-400">Water wicks backward, rotting <span className="text-red-400">Fascia Boards</span> and invading siding.</p>
                     </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 flex items-start gap-6 bg-gray-900/80 p-6 rounded-xl border border-gray-700 mb-4 transform hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/30 text-red-400">
                        <Droplets size={32} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-1">3. The Breach</h4>
                        <p className="text-sm text-gray-400">Overflow pours down, cracking the <span className="text-red-400">Foundation</span> and flooding the basement.</p>
                     </div>
                  </div>
                  
                   {/* Step 4 */}
                   <div className="relative z-10 flex items-start gap-6 bg-red-600 p-6 rounded-xl shadow-lg shadow-red-900/50 transform hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        <Home size={32} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-1">Total Structural Risk</h4>
                        <p className="text-sm text-red-100">The entire integrity of the home is compromised.</p>
                     </div>
                  </div>

                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};