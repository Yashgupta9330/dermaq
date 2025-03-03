import { ForecastData, ForecastDateRange } from "./types";



// New forecast data from the provided JSON
export const forecastData: ForecastData = {
  "list": [
    {
      "dt": 1741035600,
      "main": {
        "temp": 25.39,
        "feels_like": 25.66,
        "humidity": 64
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "wind": {
        "speed": 2.99
      },
      "dt_txt": "2025-03-03 21:00:00"
    },
    {
      "dt": 1741046400,
      "main": {
        "temp": 24.47,
        "feels_like": 24.7,
        "humidity": 66
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "wind": {
        "speed": 2.29
      },
      "dt_txt": "2025-03-04 00:00:00"
    },
    {
      "dt": 1741057200,
      "main": {
        "temp": 29.68,
        "feels_like": 28.01,
        "humidity": 21
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "wind": {
        "speed": 3.9
      },
      "dt_txt": "2025-03-04 03:00:00"
    },
    {
      "dt": 1741068000,
      "main": {
        "temp": 34.15,
        "feels_like": 31.7,
        "humidity": 14
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "wind": {
        "speed": 4.35
      },
      "dt_txt": "2025-03-04 06:00:00"
    }
  ]
};

// Create additional forecast data for different date ranges
export const forecastData2: ForecastData = {
  "list": forecastData.list.map(item => ({
    ...item,
    main: {
      ...item.main,
      temp: item.main.temp - 3 + Math.random() * 2 // Slightly cooler temperatures
    },
    dt: item.dt + 86400 * 7 // One week later
  }))
};

export const forecastData3: ForecastData = {
  "list": forecastData.list.map(item => ({
    ...item,
    main: {
      ...item.main,
      temp: item.main.temp + 2 + Math.random() * 2 // Slightly warmer temperatures
    },
    dt: item.dt + 86400 * 14 // Two weeks later
  }))
};

// Available forecast date ranges for the dropdown
export const forecastDateRanges: ForecastDateRange[] = [
  { id: 'week1', label: '03-04 Mar', data: forecastData },
  { id: 'week2', label: '10-11 Mar', data: forecastData2 },
  { id: 'week3', label: '17-18 Mar', data: forecastData3 }
];

// Generate chart data from forecast data
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


export function getlast5days(forecastData:ForecastData){
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