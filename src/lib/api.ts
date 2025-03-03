import { ForecastData, WeatherData } from "./types";

const KOLKATA_LAT = 22.5726;
const KOLKATA_LON = 88.3639;
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

if (!OPENWEATHER_API_KEY) {
  throw new Error('Missing OpenWeather API key');
}

export const fetchWeatherData = async (): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${KOLKATA_LAT}&lon=${KOLKATA_LON}&units=metric&appid=${OPENWEATHER_API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return await response.json();
};

export const fetchForecastData = async (): Promise<ForecastData> => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${KOLKATA_LAT}&lon=${KOLKATA_LON}&units=metric&appid=${OPENWEATHER_API_KEY}`)

  if (!response.ok) {
    throw new Error("Failed to fetch forecast data")
  }

  return response.json()
};
