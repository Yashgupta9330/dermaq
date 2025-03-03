import React from 'react';
import { Sun, Thermometer, CloudRain, Wind } from 'lucide-react';
import { ForecastData } from '@/lib/types';
import { getlast5days } from '@/lib/data';


interface ForecastListProps {
  forecastData: ForecastData;
}

const ForecastList: React.FC<ForecastListProps> = ({ forecastData }) => {
  const last5Days=getlast5days(forecastData);
  if (!forecastData) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="p-4 bg-white border border-gray-100 rounded-xl">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-16 w-16"></div>
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
    <div className="space-y-3">
      {last5Days.map((forecast: any, index: number) => {
        const date = new Date(forecast.dt * 1000);
        const formattedDate = date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });

        return (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-gray-100 rounded-xl"
          >
            <div className="flex items-center">
              {/* Weather Icon */}
              <div className="flex items-center justify-center w-16 h-16 mr-4 rounded-full">
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className="w-12 h-12"
                />
              </div>
              {/* Weather Description */}
              <div className="flex flex-col">
                <span className="font-medium text-lg">{forecast.weather[0].main}</span>
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </div>
            </div>

            {/* Weather Data */}
            <div className="flex items-center gap-4 mt-3 sm:mt-0 ml-14 sm:ml-0">
              <div className="flex items-center">
                <Sun className="h-4 w-4 mr-1 text-yellow-500" />
                <span className="font-medium text-gray-800 ml-2">{Math.round(forecast.main.temp)}°C</span>
              </div>
              <div className="flex items-center">
                <Thermometer className="h-4 w-4 mr-1 text-red-500" />
                <span className="font-medium text-gray-800 ml-2">{Math.round(forecast.main.feels_like)}°C</span>
              </div>
              <div className="flex items-center">
                <CloudRain className="h-4 w-4 mr-1 text-blue-500" />
                <span className="font-medium text-gray-800 ml-2">{forecast.main.humidity}%</span>
              </div>
              <div className="flex items-center">
                <Wind className="h-4 w-4 mr-1 text-emerald-500" />
                <span className="font-medium text-gray-800 ml-2">{(forecast.wind.speed * 3.6).toFixed(1)} km/h</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastList;
