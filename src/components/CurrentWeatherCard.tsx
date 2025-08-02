import Card from "./Card";
import type { CurrentWeatherResponse } from "../interface/weatherInterface";
interface CurrentWeatherProps {
  currentWeather: CurrentWeatherResponse;
}
const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {
  const date = new Date(
    (currentWeather.dt + currentWeather.timezone) * 1000
  ).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const weatherData = [
    {
      title: "Sunrise",
      data: new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString(),
      icon: "sunrise", // or "wi wi-sunrise" if you use that class
    },
    {
      title: "Sunset",
      data: new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString(),
      icon: "sunset",
    },
    {
      title: "Wind Speed",
      data: `${currentWeather.wind.speed} m/s`,
      icon: "strong-wind", // you can change icon as needed
    },
    {
      title: "Wind Degree",
      data: `${currentWeather.wind.deg}°`,
      icon: "direction", // optional icon
    },
    {
      title: "Wind Gust",
      data: `${currentWeather.wind.gust} m/s`,
      icon: "windy", // optional icon
    },
  ];
  return (
    <div className="text-center">
      <p className="font-bold text-3xl">{currentWeather.name}</p>
      <p className="capitalize">{currentWeather.weather[0].description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          title={currentWeather.weather[0].main}
          className=""
        />

        <div className="flex flex-col gap-1">
          <p className="  text-7xl text-center sm:text-start font-bold text-white">
            {currentWeather.main.temp.toFixed()}°C
          </p>
          <p className="text-sm ">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
