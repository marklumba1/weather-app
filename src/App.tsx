import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeather, fetchForecast } from "./api/api";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import useDebounce from "./utils/useDebounce";
import CurrentWeather from "./components/CurrentWeatherCard";
import "weather-icons/css/weather-icons.css";
import ForecastCard from "./components/ForecastCard";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentWeather", debouncedSearch],
    queryFn: () => fetchCurrentWeather(debouncedSearch),
  });

  const { data: forecast } = useQuery({
    queryKey: ["forecast", debouncedSearch],
    queryFn: () => fetchForecast(debouncedSearch),
  });

  const [forecastLimit, setForecastLimit] = useState(6); // default to 6

  // Check screen size once on mount only
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setForecastLimit(3);
    }
  }, []);

  return (
    <div className="py-10 flex flex-col justify-center items-center gap-10">
      <SearchBar value={search} onChange={setSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <CurrentWeather currentWeather={data} />
          <div className="bg-slate-800 min-w-dvw flex justify-center">
            <div className="flex p-5 min-w-dvw sm:min-w-auto sm:gap-10 ">
              {forecast &&
                forecast.list
                  .slice(0, forecastLimit)
                  .map((forecast) => (
                    <ForecastCard forecast={forecast} className={"flex-1"} />
                  ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
