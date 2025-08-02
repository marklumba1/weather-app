export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string; // e.g., "01d"
}

export interface MainWeatherData {
  temp: number;            // Temperature
  feels_like: number;      // Human perception of weather
  temp_min: number;        // Minimum temperature at the moment
  temp_max: number;        // Maximum temperature at the moment
  pressure: number;        // Atmospheric pressure (hPa)
  humidity: number;        // %
  sea_level?: number;      // Optional
  grnd_level?: number;     // Optional
}

export interface Wind {
  speed: number;  // meter/sec
  deg: number;    // wind direction in degrees
  gust?: number;  // gust speed
}

export interface Clouds {
  all: number; // cloudiness %
}

export interface Sys {
  type?: number;
  id?: number;
  country: string; // country code (e.g. "PH")
  sunrise: number; // UNIX UTC
  sunset: number;  // UNIX UTC
}

export interface CurrentWeatherResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherData;
  visibility: number; // in meters
  wind: Wind;
  clouds: Clouds;
  dt: number;       // Data time (UNIX UTC)
  sys: Sys;
  timezone: number; // Shift in seconds from UTC
  id: number;       // City ID
  name: string;     // City name
  cod: number;      // Internal code (200 = OK)
}
