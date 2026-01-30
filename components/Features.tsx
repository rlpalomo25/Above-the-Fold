import React from 'react';
import { Droplets, Shield, Wind, Leaf } from 'lucide-react';
import { CostChart } from './CostChart';

export const Features: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24 relative z-40 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            AEGIS 5X™ Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The only gutter protection system that self-cleans and filters water like a pitcher.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
           <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Droplets size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">HydroVortex™ Suction</h3>
                  <p className="text-gray-600">Patented technology pulls water through the filter even in vertical downpours, ensuring zero overflow.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <Leaf size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Micro-Mesh Filtration</h3>
                  <p className="text-gray-600">Surgical-grade stainless steel mesh blocks everything but water. Pine needles, shingle grit, and moss don't stand a chance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <Wind size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Self-Cleaning Airflow</h3>
                  <p className="text-gray-600">Designed to pitch with your roofline, allowing wind to naturally sweep debris away from the filter.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <Shield size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No-Clog Guarantee</h3>
                  <p className="text-gray-600">If your gutters ever clog, we'll replace the system and refund your money. 100% Transferable Warranty.</p>
                </div>
              </div>
           </div>

           <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-lg"></div>
              <CostChart />
              <p className="text-center text-sm text-gray-500 mt-4 italic">Estimated costs over 10 years for a standard 2,500 sq ft home.</p>
           </div>
        </div>

        <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://picsum.photos/1200/400?grayscale')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop The Rot Today.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Don't wait for the next storm to reveal the damage. Secure your home's foundation and roofline with MasterShield.
            </p>
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Schedule Your Free Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
