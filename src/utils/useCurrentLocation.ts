import { useEffect, useState } from "react";
import type { Coordinates } from "../interface/weatherInterface";

interface GeolocationError {
  code: number;
  message: string;
}

const useCurrentLocation = () => {
  const [location, setLocation] = useState<Coordinates | null>();
  const [error, setError] = useState<GeolocationError | null>();

  useEffect(() => {
    if (!navigator.geolocation)
      setError({ code: 0, message: `GeoLocation not supported` });
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        setLocation({ lat: coords.latitude, lon: coords.longitude }),
      (error) => setError({ code: error.code, message: error.message })
    );
  }, []);

  return { location, error };
};
export default useCurrentLocation;
