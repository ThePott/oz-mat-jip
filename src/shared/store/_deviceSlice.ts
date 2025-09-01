import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type { DeviceState } from "./_deviceInterfaces";
import type { PlaceResponse } from "./_apiInterfaces";
import { sortPlaceArray } from "../utils/distanceUtils";

export const createDeviceSlice: StateCreator<
  BoundState,
  [],
  [],
  DeviceState
> = (set, get) => ({
  coords: null,
  setCoords(coords) {
    set({ coords });
  },
  sortPlaceArrayByCoords() {
    const state = get();
    const prevPlaceArrayResponse = state.placeArrayResponse;
    const coords = state.coords;

    const prevData = prevPlaceArrayResponse.data;

    if (!coords || !prevData) {
      return;
    }

    if (prevData.sortedBy === "DISTANCE") {
      debugger;
      return;
    }

    const data: PlaceResponse | null = prevData
      ? {
          ...prevData,
          places: sortPlaceArray(coords, prevData.places),
          sortedBy: "DISTANCE",
        }
      : null;

    const placeArrayResponse = { ...prevPlaceArrayResponse, data };
    set({ placeArrayResponse });
  },
});
