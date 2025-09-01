import CustomError from "../services/customError";
import type { ExtendedPlace } from "../store/_apiInterfaces";
import type { Coords } from "../store/_deviceInterfaces";

const toRad = (value: number) => {
  return (value * Math.PI) / 180;
};

export const calculateDistance = (coords1: Coords, coords2: Coords) => {
  const R = 6371;
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lon - coords1.lon);
  const l1 = toRad(coords1.lat);
  const l2 = toRad(coords2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export const makeDistanceString = (coords1: Coords, coords2: Coords) => {
  if (!coords1 || !coords2) {
    debugger;
    throw new CustomError("UI", { message: "NULL COORDS IS NOT VALID" });
  }
  const distanceInMeter = Math.round(
    calculateDistance(coords1, coords2) * 1000,
  );

  if (distanceInMeter < 1000) {
    const localeDistance = distanceInMeter.toLocaleString();
    return `${localeDistance} m`;
  }

  const distanceInKilometerInLocale = Math.round(
    distanceInMeter / 1000,
  ).toLocaleString();
  return `${distanceInKilometerInLocale} km`;
};

export const sortPlaceArray = (
  myCoords: Coords,
  placeArray: ExtendedPlace[],
): ExtendedPlace[] => {
  if (!myCoords) {
    debugger;
    throw new CustomError("UI", { message: "NULL COORDS IS NOT VALID" });
  }

  placeArray.sort(
    (a, b) => calculateDistance(myCoords, a) - calculateDistance(myCoords, b),
  );
  return placeArray;
};
