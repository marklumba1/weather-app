import type { Coordinates, CurrentWeatherResponse } from "./interface";

const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchCurrentWeather = async (
  locale: string | Coordinates
): Promise<CurrentWeatherResponse> => {
  const query =
    typeof locale === "string"
      ? `q=${locale || "manila"}`
      : `lat=${locale.lat}&lon=${locale.lon}`;

  const response = await fetch(
    `${baseURL}/weather?${query}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const data = await response.json();
  return data as CurrentWeatherResponse;
};
