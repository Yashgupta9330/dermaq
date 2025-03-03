import React from 'react';
import { Sun, Thermometer, Wind, Droplets } from 'lucide-react';
import { WeatherData } from '@/lib/types';


interface WeatherCardsProps {
  weatherData: WeatherData | null;
}

const WeatherCards: React.FC<WeatherCardsProps> = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl">
            <div className="animate-pulse flex space-x-4 w-full">
              <div className="rounded-full bg-gray-200 h-10 w-10"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full">
          <div className="w-8 h-8">
            <Sun className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-500">Temperature</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">{Math.round(weatherData.main.temp)}°C</span>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full">
          <div className="w-8 h-8 ">
            <Thermometer className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-500">Feels Like</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">{Math.round(weatherData.main.feels_like)}°C</span>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full">
          <div className="w-8 h-8">
            <Wind className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-500">Wind Speed</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">{weatherData.wind.speed.toFixed(2)} m/s</span>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full">
          <Droplets className="h-8 w-8 text-blue-400" />
        </div>
        <div>
          <div className="text-sm font-medium text-gray-500">Humidity</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">{weatherData.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
