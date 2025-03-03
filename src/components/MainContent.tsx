import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import WeatherCards from '@/components/WeatherCard';
import WeatherChart from '@/components/WeatherChart';
import ForecastList from '@/components/ForeCastList';
import { WeatherData } from '@/lib/types';
import { ScrollArea } from './ui/scroll-area';

interface MainContentProps {
  weatherData: WeatherData | null;
  forecastData: any;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activitySidebarOpen: boolean;
  setActivitySidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainContent: React.FC<MainContentProps> = ({
  weatherData,
  forecastData,
}) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <div className="hidden lg:flex flex-1 flex-col w-full">
        <ScrollArea className="flex-1 flex flex-col w-full">
          {/* Desktop/Tablet Header - Visible on md screens and above */}
          <header className="hidden md:block w-full p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Hello, Margaret</h1>
                <p className="text-gray-500">
                  {weatherData
                    ? `Currently ${weatherData.weather[0].description} in ${weatherData.name}`
                    : ''}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{currentDate}</span>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </header>

          {/* Main content area */}
          <div className="flex-1 w-full overflow-auto">
            <div className="p-4 sm:p-4 md:p-6">
              {/* Stats Cards */}
              <WeatherCards weatherData={weatherData} />

              {/* Chart */}
              <WeatherChart forecastData={forecastData} />

              {/* Forecast List */}
              <div className="flex items-center justify-between mb-4 mt-4">
                <h2 className="text-xl font-bold">Forecast Data</h2>
                <div className="flex items-center gap-4">
                  <button className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded-md">
                    <span>Week</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              <ForecastList forecastData={forecastData} />
            </div>
          </div>
        </ScrollArea>
      </div>

      <div className="lg:hidden flex-1 flex flex-col w-full">
        {/* Mobile Header - Visible only on small screens */}
        <div className="md:hidden px-4 py-3 w-full">
          <h1 className="text-xl font-bold">Hello, Margaret</h1>
          <p className="text-sm text-gray-500">
            {weatherData
              ? `Currently ${weatherData.weather[0].description} in ${weatherData.name}`
              : 'Loading weather data...'}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-600">{currentDate}</span>
            <div className="p-1.5 bg-gray-100 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 w-full overflow-auto">
          <div className="p-4 sm:p-4 md:p-6">
            {/* Stats Cards */}
            <WeatherCards weatherData={weatherData} />

            {/* Chart */}
            <WeatherChart forecastData={forecastData} />

            {/* Forecast List */}
            <div className="flex items-center justify-between mb-4 mt-4">
              <h2 className="text-xl font-bold">Forecast Data</h2>
              <div className="flex items-center gap-4">
                <button className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded-md">
                  <span>Week</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            <ForecastList forecastData={forecastData} />
          </div>
        </div>
      </div>
    </>
  );
};