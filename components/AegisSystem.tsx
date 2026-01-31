import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Grid, Scaling, ShieldAlert, Home, ChevronRight, Phone } from 'lucide-react';

const GUARDIANS = [
  {
    id: 'hydro',
    name: 'HydroVortex™',
    icon: Droplets,
    color: 'bg-blue-600',
    textColor: 'text-blue-100',
    description: "Storm-hardened intake system that pulls in water fast even in downpours while keeping leaves, seeds, and pine needles out."
  },
  {
    id: 'mesh',
    name: 'SelfClean Mesh™',
    icon: Grid,
    color: 'bg-slate-600',
    textColor: 'text-gray-100',
    description: "Ultra-fine stainless mesh with low-stick tech that sheds debris naturally, no rinsing, no scooping, no ladders."
  },
  {
    id: 'pitch',
    name: 'PitchPerfect™',
    icon: Scaling,
    color: 'bg-indigo-600',
    textColor: 'text-indigo-100',
    description: "Custom-fitted to your exact roof angle so debris slides off, not on. Eliminates shelf buildup that dooms flat guards."
  },
  {
    id: 'copper',
    name: 'CopperCare™',
    icon: ShieldAlert,
    color: 'bg-orange-700',
    textColor: 'text-orange-100',
    description: "Every strand of mesh is copper-infused to fight and resist moss, mold, algae, and grime before they build up and block your system."
  },
  {
    id: 'shingle',
    name: 'ShingleSafe™',
    icon: Home,
    color: 'bg-emerald-700',
    textColor: 'text-emerald-100',
    description: "Protects the edge of your roof, guiding water under shingles without lifting, prying, or voiding your roof’s warranty."
  }
];

export const AegisSystem: React.FC = () => {
  const [activeId, setActiveId] = useState(GUARDIANS[0].id);
  const activeGuardian = GUARDIANS.find(g => g.id === activeId) || GUARDIANS[0];

  return (
    <section className="relative z-40 bg-[#131a29] py-24 rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#bb6622]/20 text-[#bb6622] border border-[#bb6622]/30 font-bold text-sm mb-6 uppercase tracking-wider">
            SECTION 4: AEGIS 5X SYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Five Guardians. One Guard. <br />
            <span className="text-[#bb6622]">The End of Gutter Failure.</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            MasterShield with AEGIS 5X™ delivers 5 patented layers of protection, each engineered to eliminate the exact failures that cause clogs, overflow, rot, mold, and roofline damage for good.
          </p>
          <p className="text-lg text-gray-400 font-medium">
            Other guards promise prevention. <span className="text-white font-bold">Only AEGIS 5X™ delivers a complete defense from roofline to downspout.</span>
          </p>
        </div>

        {/* Bento Grid Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[650px] mb-20">
          
          {/* Left Column: Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-3 h-full">
            {GUARDIANS.map((guardian) => (
              <button
                key={guardian.id}
                onClick={() => setActiveId(guardian.id)}
                className={`flex-1 group relative flex items-center justify-between px-6 rounded-2xl transition-all duration-300 border text-left
                  ${activeId === guardian.id 
                    ? 'bg-[#bb6622] text-white shadow-xl scale-[1.02] border-[#bb6622] z-10' 
                    : 'bg-gray-800/40 text-gray-300 hover:bg-gray-800 border-gray-700 hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${activeId === guardian.id ? 'bg-white/20' : 'bg-gray-900/50 group-hover:bg-gray-900'}`}>
                    <guardian.icon size={24} className={activeId === guardian.id ? 'text-white' : 'text-gray-400'} />
                  </div>
                  <span className="text-lg font-bold">{guardian.name}</span>
                </div>
                {activeId === guardian.id && (
                  <motion.div layoutId="active-arrow">
                    <ChevronRight size={24} />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Display Area */}
          <div className="lg:col-span-8 h-[500px] lg:h-full relative overflow-hidden rounded-3xl shadow-2xl border border-gray-700 bg-gray-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGuardian.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 w-full h-full ${activeGuardian.color} p-8 md:p-16 flex flex-col justify-center items-start`}
              >
                {/* Background Decor */}
                <activeGuardian.icon className="absolute -right-12 -bottom-12 w-96 h-96 text-white opacity-10 rotate-12" />
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30 text-white">
                    <activeGuardian.icon size={40} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    {activeGuardian.name}
                  </h3>
                  
                  <p className={`text-xl md:text-3xl font-medium leading-relaxed max-w-2xl ${activeGuardian.textColor}`}>
                    {activeGuardian.description}
                  </p>
                </motion.div>

                <div className="absolute top-8 right-8 text-white/30 font-black text-9xl select-none z-0">
                  {GUARDIANS.findIndex(g => g.id === activeId) + 1}
                </div>

                <motion.button
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.3 }}
                   className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all z-20 backdrop-blur-sm group"
                >
                   Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
            Ready to protect your home from roofline to downspout <br className="hidden md:block" /> 
            with the only guard that does it all?
          </h3>
          <button className="bg-[#bb6622] hover:bg-[#a0551c] text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(187,102,34,0.3)] hover:shadow-[0_0_30px_rgba(187,102,34,0.5)] flex items-center gap-3 mx-auto group transform hover:-translate-y-1">
            <Phone size={24} />
            Get a Free Estimate
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};