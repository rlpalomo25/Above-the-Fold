import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Year 1', maintenance: 200, damage: 0 },
  { year: 'Year 2', maintenance: 400, damage: 150 },
  { year: 'Year 3', maintenance: 600, damage: 500 },
  { year: 'Year 5', maintenance: 1000, damage: 2500 },
  { year: 'Year 7', maintenance: 1400, damage: 6000 },
  { year: 'Year 10', maintenance: 2000, damage: 12000 },
];

export const CostChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl shadow-inner">
      <h3 className="text-center text-gray-800 font-bold mb-4">Cumulative Cost of Gutter Neglect vs. Maintenance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1f2937', color: '#fff', borderRadius: '8px', border: 'none' }}
          />
          <Area type="monotone" dataKey="damage" stackId="1" stroke="#ef4444" fill="#fca5a5" name="Potential Damage Cost" />
          <Area type="monotone" dataKey="maintenance" stackId="2" stroke="#3b82f6" fill="#93c5fd" name="Regular Cleaning Cost" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
