import React from 'react';
import { Clock, Calendar, BadgeCheck, Home, Shield, MapPin, Infinity } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100 relative md:sticky md:top-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Service Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">45-minute home visit.</h3>
            <p className="text-gray-500 font-medium">No cost. No pressure.</p>
          </div>
          
          <div className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom quote locked in</h3>
            <p className="text-gray-500 font-medium">for 30 days.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <BadgeCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Backed by a less than</h3>
            <p className="text-blue-600 font-bold text-lg">0.00001% warranty claim rate.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-16"></div>

        {/* Bottom Row: Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
             <div className="flex-shrink-0 mr-4 bg-white p-3 rounded-xl shadow-sm text-blue-700">
               <Home size={28} strokeWidth={2} />
             </div>
             <div>
               <div className="text-2xl font-black text-gray-900">100,000+</div>
               <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Homes Protected</div>
             </div>
           </div>

           <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
             <div className="flex-shrink-0 mr-4 bg-white p-3 rounded-xl shadow-sm text-blue-700">
               <Shield size={28} strokeWidth={2} />
             </div>
             <div>
               <div className="text-lg font-bold text-gray-900 leading-tight">AEGIS 5X™</div>
               <div className="text-sm font-semibold text-gray-500">Five Guardians. One Guard.</div>
             </div>
           </div>

           <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
             <div className="flex-shrink-0 mr-4 bg-white p-3 rounded-xl shadow-sm text-blue-700">
               <MapPin size={28} strokeWidth={2} />
             </div>
             <div>
               <div className="text-lg font-bold text-gray-900 leading-tight">Local Installers</div>
               <div className="text-sm font-semibold text-gray-500">Background-Checked</div>
             </div>
           </div>

           <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
             <div className="flex-shrink-0 mr-4 bg-white p-3 rounded-xl shadow-sm text-blue-700">
               <Infinity size={28} strokeWidth={2} />
             </div>
             <div>
               <div className="text-lg font-bold text-gray-900 leading-tight">Lifetime Solution</div>
               <div className="text-sm font-semibold text-gray-500">Transferable Warranty</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};
