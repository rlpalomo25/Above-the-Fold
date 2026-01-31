import React, { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SimpleSteps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const steps = [
    {
      id: 1,
      title: "Get a Free, No-Pressure Home Evaluation",
      description: "We check your entire water pathway, not just the gutters."
    },
    {
      id: 2,
      title: "Receive Your Custom AEGIS 5X™ Guardian Plan",
      description: "Tailored to your roof, your risk, and your home’s future."
    },
    {
      id: 3,
      title: "Installation by MasterShield Certified Experts",
      description: "No mess. No ladders. No stress. Just five patented Guardians working for you."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative z-[80] sticky top-0 rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Three Simple Steps to <br className="hidden md:block"/> Permanent Gutter Protection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-20">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 z-0 -translate-y-1/2"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              {/* Number Container */}
              <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 relative">
                <span className="text-4xl font-black text-gray-300 group-hover:text-blue-600 transition-colors">
                  {step.id}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 max-w-[280px]">
                {step.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto px-8 py-4 bg-[#bb6622] hover:bg-[#a0551c] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[#bb6622]/50 transition-all flex items-center justify-center gap-3 group">
            See How the 5 Guardians Protect Your Home
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full md:w-auto px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md">
            <PlayCircle className="w-6 h-6" />
            Watch the 3-Year Time-Lapse
          </button>
        </div>

      </motion.div>
    </section>
  );
};