export interface WeatherData {
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      feels_like: number;
      humidity: number;
    };
    name: string;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
  }
  
  export interface ForecastData {
    list: {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      wind: {
        speed: number;
      };
      dt_txt: string;
    }[];
  }


   export interface ForecastChartData {
    date: Date;
    thisMonth: number;
    lastMonth: number;
  }
  
  export interface ForecastDateRange {
    id: string;
    label: string;
    data: ForecastData;
  }