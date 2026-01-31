import React, { useRef } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SuccessVsFailure: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0f172a] text-white relative z-[90] sticky top-0 rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Two Futures. One Decision.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
            {/* Column 1: Success (Shield Shape) */}
            <div className="relative group filter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div 
                    className="bg-gradient-to-b from-emerald-500 to-emerald-700 p-[2px] transition-all duration-300 group-hover:from-emerald-400 group-hover:to-emerald-600"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
                >
                    <div className="bg-[#0f172a] h-full w-full pt-12 pb-24 px-8 md:px-12 relative overflow-hidden">
                         {/* Background Tint */}
                         <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/30 transition-colors"></div>
                         
                         {/* Top Accent */}
                         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center uppercase tracking-wide">With MasterShield + AEGIS 5X</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-emerald-50 leading-relaxed">No more ladders, scooping, or seasonal stress</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-emerald-50 leading-relaxed">Storm after storm, your roofline stays sealed and dry</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-emerald-50 leading-relaxed">Foundation protected, landscaping untouched</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-emerald-50 leading-relaxed">Gutters stay clear — and stay off your mind</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-emerald-50 leading-relaxed">Confidence that lasts for decades, not just one season</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

             {/* Column 2: Failure (Broken Wall Shape) */}
             <div className="relative group filter drop-shadow-[0_0_15px_rgba(239,68,68,0.2)] mt-8 lg:mt-0">
                <div 
                    className="bg-gradient-to-b from-red-600 to-red-900 p-[2px] transition-all duration-300 group-hover:from-red-500 group-hover:to-red-800"
                    style={{ clipPath: "polygon(2% 0, 98% 1%, 100% 85%, 92% 95%, 82% 88%, 72% 98%, 60% 88%, 50% 98%, 38% 88%, 25% 98%, 12% 88%, 0 95%)" }}
                >
                    <div className="bg-[#0f172a] h-full w-full pt-12 pb-24 px-8 md:px-12 relative overflow-hidden">
                        {/* Background Tint */}
                        <div className="absolute inset-0 bg-red-900/10 group-hover:bg-red-900/20 transition-colors"></div>

                        {/* Top Crack Accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-red-500/50 blur-[1px]"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">Without MasterShield + AEGIS 5X? <br/><span className="text-lg font-normal text-red-200">Here’s What Usually Happens...</span></h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-red-50 leading-relaxed">Overflow returns, just like last season</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-red-50 leading-relaxed">Basement leaks and fascia rot reappear</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-red-50 leading-relaxed">That “lifetime” guard doesn’t live up to its promise</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-red-50 leading-relaxed">Back on the ladder… again</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-1">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-red-50 leading-relaxed">The small issues grow into big repair bills</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-2xl font-semibold mb-10 text-gray-200">
                The next storm doesn’t wait.<br/>
                Neither should your protection.
            </h3>
            <button className="w-full md:w-auto px-8 py-4 bg-[#bb6622] hover:bg-[#a0551c] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[#bb6622]/50 transition-all flex items-center justify-center gap-3 mx-auto group">
                See How the 5 Guardians Protect Your Home
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </motion.div>
    </section>
  );
};