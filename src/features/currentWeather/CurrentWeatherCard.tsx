import type { CurrentWeatherResponse } from "./interface";
interface CurrentWeatherProps {
  currentWeather: CurrentWeatherResponse;
}
const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {
  return (
    <div className="border p-2 flex flex-col gap-2">
      <div className="border rounded p-3 flex flex-col gap-2 items-center">
        <p className="text-3xl font-bold">
          {currentWeather.name}, {currentWeather.sys.country}
        </p>
        <div className="flex border justify-center items-center">
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            className=" max-h-25"
            title={currentWeather.weather[0].main}
          />
          <div>
            <p className="text-3xl font-medium">{currentWeather.main.temp}°C</p>
            <p className="capitalize">{currentWeather.weather[0].description}</p>
          </div>
        </div>

        <p>Feels Like: {currentWeather.main.feels_like}°C</p>
      </div>

      <div className="border">
        <p>
          Sunrise: <i className="wi wi-sunrise"></i>
          {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          Sunset: <i className="wi wi-sunset"></i>
          {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>

      {/* Wind */}
      <div className="border">
        <p>Wind Conditions</p>
        <p>Speed: {currentWeather.wind.speed} m/s</p>
        <p>Degree: {currentWeather.wind.deg}°</p>
        <p>Gust: {currentWeather.wind.gust} m/s</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
