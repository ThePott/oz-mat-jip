import { useEffect } from "react";
import useBoundStore from "../../shared/store";
import type { Coords } from "../../shared/store/_deviceInterfaces";

export const useGeolocation = () => {
  const setCoords = useBoundStore((state) => state.setCoords);
  const sortPlaceArrayByCoords = useBoundStore(
    (state) => state.sortPlaceArrayByCoords,
  );
  const myCoords = useBoundStore((state) => state.coords);
  const placeArrayResponse = useBoundStore((state) => state.placeArrayResponse);

  const handleLocationSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords: Coords = { lat, lon };
    setCoords(coords);
  };

  const handleLocationFail = () => {
    console.log("---- fail");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      handleLocationFail,
      { timeout: 5000, maximumAge: 1000 * 60 * 60 },
    );
  }, []);

  useEffect(() => {
    sortPlaceArrayByCoords();
  }, [myCoords, placeArrayResponse]);
};
