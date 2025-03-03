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

  export interface WeatherData {
    lat: number;
    lon: number;
    timezone: string;
    hourly: HourlyData[];
  }
  
  export interface HourlyData {
    dt: number;
    temp: number;
    humidity: number;
    weather: Weather[];
  }
  
  export interface Weather {
    description: string;
    icon: string;
  }
  
  export interface ChartData {
    date: Date;
    thisMonth: number;
    lastMonth: number;
  }
  
  export interface DateRange {
    id: string;
    label: string;
  }

  export const dateRanges: DateRange[] = [
    { id: 'may', label: '01-07 May'},
    { id: 'june', label: '01-07 June'},
    { id: 'july', label: '01-07 July'}
  ];