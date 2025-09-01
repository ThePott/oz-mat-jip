import useBoundStore from "../../shared/store";
import type { Coords } from "../../shared/store/_deviceInterfaces";

export const useGeolocation = () => {
  const setCoords = useBoundStore((state) => state.setCoords);

  const handleLocationSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords: Coords = { lat, lon };
    setCoords(coords);
  };
  const handleLocationFail = () => {
    console.log("---- fail");
  };

  navigator.geolocation.getCurrentPosition(
    handleLocationSuccess,
    handleLocationFail,
    { timeout: 5000, maximumAge: 1000 * 60 * 60 },
  );
};
