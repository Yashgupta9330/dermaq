import React from 'react';
import { format } from 'date-fns';
import { TooltipProps } from 'recharts';
import { ChartData } from '@/lib/types';


const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ChartData;
    
    return (
      <div className="bg-[#0F172A] text-white p-4 rounded-md shadow-lg border border-gray-700">
        <p className="text-gray-300 font-medium mb-2">{format(data.date, 'dd MMM yyyy')}</p>
        <div className="flex items-center mb-1">
          <div className="w-1 h-4 bg-[#60A5FA] mr-2"></div>
          <span className="text-gray-400">This month</span>
          <span className="ml-auto text-white">{data.thisMonth}h</span>
        </div>
        <div className="flex items-center">
          <div className="w-1 h-4 bg-[#F59E0B] mr-2"></div>
          <span className="text-gray-400">Last month</span>
          <span className="ml-auto text-white">{data.lastMonth}h</span>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;