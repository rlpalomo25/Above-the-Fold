import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const features = [
    { name: "HydroVortex™", ms: true, rc: false, ps: false },
    { name: "CopperCare™", ms: true, rc: false, ps: false },
    { name: "ShingleSafe™", ms: true, rc: false, ps: false },
    { name: "SelfClean Mesh™", ms: true, rc: false, ps: false },
    { name: "PitchPerfect™", ms: true, rc: false, ps: false },
  ];

  return (
    <section className="py-24 bg-white text-gray-900 relative z-50 rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            MasterShield Set the Standard <br className="hidden md:block"/> Other Guards Can’t Match…
          </h2>
          <div className="text-lg md:text-xl text-gray-600 space-y-4 font-medium leading-relaxed">
            <p>
              Other guards offer surface-level solutions.
            </p>
            <p className="text-gray-900 font-semibold">
              MasterShield is engineered with AEGIS 5X: Five guardians to stop failure where it starts, at the roofline.
            </p>
            <p className="italic text-red-600 text-2xl md:text-3xl font-black mt-6">
              The wrong guard doesn’t just fall short. It accelerates the very damage it claims to prevent.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left text-white bg-[#0f172a] text-lg font-bold w-1/4">Feature</th>
                  <th className="p-6 text-center text-white bg-[#d97706] text-xl font-bold w-1/4 border-l border-white/20 relative">
                     MasterShield AEGIS 5X
                     <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
                  </th>
                  <th className="p-6 text-center text-white bg-[#0f172a] text-lg font-bold w-1/4 border-l border-gray-700">Reverse Curve</th>
                  <th className="p-6 text-center text-white bg-[#0f172a] text-lg font-bold w-1/4 border-l border-gray-700">Plastic Screen</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-6 text-left font-bold text-gray-900 border-b border-gray-200 text-lg">
                      {feature.name}
                    </td>
                    <td className="p-6 text-center border-b border-gray-200 bg-orange-50/30 border-l border-r border-orange-100">
                      <div className="flex justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500 fill-green-100" />
                      </div>
                    </td>
                    <td className="p-6 text-center border-b border-gray-200 border-r">
                      <div className="flex justify-center opacity-30">
                        <XCircle className="w-10 h-10 text-gray-400" />
                      </div>
                    </td>
                    <td className="p-6 text-center border-b border-gray-200">
                      <div className="flex justify-center opacity-30">
                         <XCircle className="w-10 h-10 text-gray-400" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a 
            href="https://staging5.mastershield.com/compare/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-3"
          >
            View Full Brand Comparison
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};