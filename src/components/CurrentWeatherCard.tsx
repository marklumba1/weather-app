import type { ReactNode } from "react";
import type { CurrentWeatherResponse } from "../interface/weatherInterface";
import Card from "./Card";
import Section from "./Section";
interface CurrentWeatherProps {
  currentWeather: CurrentWeatherResponse;
  children?: ReactNode;
}
const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  currentWeather,
  children,
}) => {
  const weatherCards = [
    {
      title: "Feels Like",
      data: `${currentWeather.main.feels_like.toFixed()}°C`,
      icon: "thermometer-exterior",
    },
    {
      title: "Wind Speed",
      data: `${currentWeather.wind.speed} m/s`,
      icon: "strong-wind",
    },

    {
      title: "Visibility",
      data: `${(currentWeather.visibility / 1000).toFixed(1)} km`,
      icon: "fog",
    },
    {
      title: "Cloudiness",
      data: `${currentWeather.clouds.all}%`,
      icon: "cloud",
    },
    {
      title: "Sunrise",
      data: new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString(),
      icon: "sunrise",
    },
    {
      title: "Sunset",
      data: new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString(),
      icon: "sunset",
    },
  ];
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="font-bold text-3xl sm:text-5xl">{currentWeather.name}</p>
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            title={currentWeather.weather[0].main}
            className="-ml-10 sm:ml-0"
          />

          <div className="flex flex-col justify-center">
            <p className="text-5xl font-bold text-start">
              {currentWeather.main.temp.toFixed()}°C
            </p>
            <p className="capitalize">
              {currentWeather.weather[0].description}
            </p>
          </div>
        </div>
      </div>
      {children}
      <Section
        title="Current Conditions"
        className="grid grid-cols-1 sm:grid-cols-3"
      >
        {weatherCards.map((card) => (
          <Card title={card.title} icon={card.icon} data={card.data} />
        ))}
      </Section>
    </>
  );
};

export default CurrentWeather;
