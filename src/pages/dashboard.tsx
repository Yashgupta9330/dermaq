import { MainContent } from "@/components/MainContent";
import Rightside from "@/components/RightSide";
import Sidebar from "@/components/sidebar";
import { fetchForecastData, fetchWeatherData } from "@/lib/api";
import { ForecastData, WeatherData } from "@/lib/types";
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitySidebarOpen, setActivitySidebarOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const weatherResponse = await fetchWeatherData();
        setWeatherData(weatherResponse);

        const forecastResponse = await fetchForecastData();
        setForecastData(forecastResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainContent
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activitySidebarOpen={activitySidebarOpen}
        setActivitySidebarOpen={setActivitySidebarOpen}
        weatherData={weatherData}
        forecastData={forecastData}
      />
      <Rightside weatherData={weatherData} />
    </div>
  );
};

export default Dashboard;
