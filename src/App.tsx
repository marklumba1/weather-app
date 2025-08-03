import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeather, fetchForecast } from "./api/api";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import useDebounce from "./utils/useDebounce";
import CurrentWeather from "./components/CurrentWeatherCard";
import "weather-icons/css/weather-icons.css";
import ForecastCard from "./components/ForecastCard";
import Section from "./components/Section";
import Background from "./components/Background";

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

  const [prevCondition, setPrevCondition] = useState("Default");
  useEffect(() => {
    if (data?.weather?.[0]?.main) {
      setPrevCondition(data.weather[0].main);
    }
  }, [data]);

  return (
    <>
      <Background weatherCondition={prevCondition} />
      <div className="p-5 flex flex-col gap-3 relative">
        <Section>
          <SearchBar value={search} onChange={setSearch} />
        </Section>

        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {data && (
          <CurrentWeather currentWeather={data}>
            {forecast && (
              <Section title="Today's Forecast">
                <div className="flex flex-col sm:flex-row">
                  {forecast.list.slice(0, 6).map((forecast) => (
                    <ForecastCard
                      key={forecast.dt}
                      forecast={forecast}
                      className="flex-1 border-b-[1px] sm:border-r-[1px] last:border-0 sm:border-b-0 border-white/10"
                    />
                  ))}
                </div>
              </Section>
            )}
          </CurrentWeather>
        )}
      </div>
    </>
  );
};

export default App;
