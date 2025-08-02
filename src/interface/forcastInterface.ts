export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: CityInfo;
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
    temp_kf?: number;
  };
  weather: WeatherDescription[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility?: number;
  pop?: number; // precipitation probability (0 to 1)
  sys: {
    pod: "d" | "n";
  };
  dt_txt: string; // "YYYY-MM-DD HH:mm:ss"
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}
