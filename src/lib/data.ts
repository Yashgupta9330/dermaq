import { ForecastData } from "./types";
import {
  Home, LayoutGrid, CheckSquare, Users, Settings, HelpCircle, LogOut
} from 'lucide-react';


export const generateForecastChartData = (data: ForecastData) => {
  return data.list.map((item) => {

    const thisMonthTemp = item.main.temp;
    const lastMonthTemp = item.main.feels_like || (thisMonthTemp - 1 - Math.random() * 2);

    return {
      date: new Date(item.dt * 1000),
      thisMonth: parseFloat(thisMonthTemp.toFixed(1)),
      lastMonth: parseFloat(lastMonthTemp.toFixed(1))
    };
  });
};


export function getlast5days(forecastData: ForecastData) {
  const uniqueDays = new Map();
  forecastData?.list.forEach((forecast: any) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    if (!uniqueDays.has(date)) {
      uniqueDays.set(date, forecast);
    }
  });
  const last5Days = Array.from(uniqueDays.values()).slice(0, 5);
  return last5Days;
}


export const menuItems = [
  { label: 'Dashboard', icon: Home, href: '#' },
  { label: 'Temperature', icon: LayoutGrid, hasButton: true },
  { label: 'Precipitations', icon: CheckSquare, hasButton: true },
  { label: 'Wind', icon: Users, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
];

export const actionItems = [
  { label: 'Help', icon: HelpCircle, href: '#' },
  { label: 'Log out', icon: LogOut, href: '#' },
];