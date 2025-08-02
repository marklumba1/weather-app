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

  const temp = Math.round(forecast.main.temp); // °C

  return(


  <div className={`text-center ${className}`}>
    <p className="font-semibold text-center text-slate-400">{time}</p>
    <img
      src={iconUrl}
      title={forecast.weather[0].description}
      className="w-20 h-auto mx-auto"
    />
    <p className="text-white text-xl font-bold">{temp}°C</p>
  </div>
    )
};

export default ForecastCard;
