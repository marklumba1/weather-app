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

  return (
    <div className="text-center">
      <p className="font-bold text-3xl">{currentWeather.name}, {currentWeather.sys.country}</p>
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
