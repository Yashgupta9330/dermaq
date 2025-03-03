import React, { useState, useRef, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  Area
} from 'recharts';
import { format } from 'date-fns';
import { ChevronDown } from 'lucide-react';
import CustomTooltip from './CustomTooltip';
import { generateForecastChartData, forecastDateRanges } from '../lib/data';
import { ForecastData } from '@/lib/types';


interface ForecastListProps {
  forecastData: ForecastData;
}

const ForecastChart: React.FC<ForecastListProps> = ({ forecastData }) => {
  const [selectedRange, setSelectedRange] = useState(forecastDateRanges[0]);
  const [chartData, setChartData] = useState(generateForecastChartData(selectedRange.data));
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(2); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChartData(generateForecastChartData(selectedRange.data));
  }, [selectedRange]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Custom dot for the active point
  const CustomDot = (props: any) => {
    const { cx, cy, index } = props;
    
    if (index === activeTooltipIndex) {
      return (
        <circle 
          cx={cx} 
          cy={cy} 
          r={4} 
          fill="#60A5FA" 
          stroke="#fff" 
          strokeWidth={2} 
        />
      );
    }
    
    return null;
  };

  // Format the x-axis ticks
  const formatXAxis = (tickItem: any) => {
    return format(new Date(tickItem), 'HH:mm');
  };

  // Format the y-axis ticks
  const formatYAxis = (tickItem: number) => {
    return `${tickItem}°C`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Temperature Forecast</h1>
        <div className="relative" ref={dropdownRef}>
          <button 
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedRange.label} <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <ul className="py-1">
                {forecastDateRanges.map((range) => (
                  <li key={range.id}>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedRange.id === range.id ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setSelectedRange(range);
                        setDropdownOpen(false);
                      }}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            onMouseMove={(e) => {
              if (e.activeTooltipIndex !== undefined) {
                setActiveTooltipIndex(e.activeTooltipIndex);
              }
            }}
          >
            <defs>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatXAxis} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              tickFormatter={formatYAxis} 
              domain={[15, 40]} 
              ticks={[15, 20, 25, 30, 35, 40]} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={false}
            />
            {activeTooltipIndex !== null && chartData[activeTooltipIndex] && (
              <ReferenceLine 
                x={chartData[activeTooltipIndex].date instanceof Date 
                  ? chartData[activeTooltipIndex].date.toISOString() 
                  : chartData[activeTooltipIndex].date} 
                stroke="#E5E7EB" 
                strokeDasharray="3 3" 
              />
            )}
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="none"
              fill="url(#colorThisMonth)"
            />
            <Line 
              type="monotone" 
              dataKey="lastMonth" 
              stroke="#F59E0B" 
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
            <Line 
              type="monotone" 
              dataKey="thisMonth" 
              stroke="#60A5FA" 
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForecastChart;