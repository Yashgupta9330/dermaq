
import { WeatherData } from '@/lib/types';
import { Moon, Sun, Thermometer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

interface RightsideProps {
  weatherData: WeatherData | null;
}

const Rightside: React.FC<RightsideProps> = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  const { temp_max, temp_min, feels_like } = weatherData.main;
  const { sunrise, sunset } = weatherData.sys;

  return (
    <div className="grid gap-6 md:grid-cols-1 p-4 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Temperature Variation</CardTitle>
          <CardDescription>Min, max, and average temperature</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Max Temperature */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Sun className="h-5 w-5 text-amber-500 mr-2" />
                <span>Max Temperature</span>
              </div>
              <span className="font-medium">{Math.round(temp_max)}°C</span>
            </div>
            <div className="h-2 bg-gray-100 rounded">
              <div
                style={{ width: `${(temp_max / 50) * 100}%` }}
                className="h-full bg-amber-500 rounded"
              ></div>
            </div>

            {/* Min Temperature */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 text-blue-500 mr-2" />
                <span>Min Temperature</span>
              </div>
              <span className="font-medium">{Math.round(temp_min)}°C</span>
            </div>
            <div className="h-2 bg-gray-100 rounded">
              <div
                style={{ width: `${(temp_min / 50) * 100}%` }}
                className="h-full bg-blue-500 rounded"
              ></div>
            </div>

            {/* Feels Like Temperature */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 text-purple-500 mr-2" />
                <span>Feels Like</span>
              </div>
              <span className="font-medium">{Math.round(feels_like)}°C</span>
            </div>
            <div className="h-2 bg-gray-100 rounded">
              <div
                style={{ width: `${(feels_like / 50) * 100}%` }}
                className="h-full bg-purple-500 rounded"
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sun Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Sun Schedule</CardTitle>
          <CardDescription>Sunrise and sunset times</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Sunrise */}
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Sun className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sunrise</p>
                  <p className="font-medium">
                    {new Date(sunrise * 1000).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>

              {/* Sunset */}
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Moon className="h-4 w-4 text-indigo-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sunset</p>
                  <p className="font-medium">
                    {new Date(sunset * 1000).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Daylight Duration */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Daylight Duration</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-100">
                      Sunrise
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">
                      Sunset
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                  <div
                    style={{
                      width: '100%' // Adjust this width based on daylight duration
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-amber-300 to-indigo-400"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rightside;
