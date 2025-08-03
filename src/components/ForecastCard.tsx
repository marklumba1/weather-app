import type { ForecastItem } from "../interface/forcastInterface";
interface ForecastCardProps {
  forecast: ForecastItem;
  className: string;
}
const ForecastCard: React.FC<ForecastCardProps> = ({ forecast, className }) => {
  const time = new Date(forecast.dt_txt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const iconCode = forecast.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const temp = Math.round(forecast.main.temp);
  return (
    <div
      className={`justify-between gap-3 flex sm:flex-col sm:justify-center items-center p-3 ${className}`}
    >
      <p className="text-center">{time}</p>
      <div className="flex items-center">
        <img
          src={iconUrl}
          title={forecast.weather[0].description}
          className="w-10 h-10 sm:w-15 sm:h-15 sm:-my-4"
        />
      </div>

      <p className="text-white text-xl font-bold">{temp}°C</p>
    </div>
  );
};

export default ForecastCard;
