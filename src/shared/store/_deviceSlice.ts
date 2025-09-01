import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type { DeviceState } from "./_deviceInterfaces";

export const createDeviceSlice: StateCreator<
  BoundState,
  [],
  [],
  DeviceState
> = (set) => ({
  coords: null,
  setCoords(coords) {
    set({ coords });
  },
});
