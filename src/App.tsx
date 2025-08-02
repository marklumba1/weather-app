import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeather } from "./features/currentWeather/api";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useDebounce from "./utils/useDebounce";
import CurrentWeather from "./features/currentWeather/CurrentWeatherCard";
import 'weather-icons/css/weather-icons.css';

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentWeather", debouncedSearch],
    queryFn: () => fetchCurrentWeather(debouncedSearch),
  });

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && <CurrentWeather currentWeather={data} />}
    </div>
  );
};

export default App;
