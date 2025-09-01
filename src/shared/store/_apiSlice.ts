import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type { ApiState, PlaceResponse } from "./_apiInterfaces";
import { makeUrlPlaces } from "../services/apiUtils";
import easyFetch from "../services/easyFetch";

export const createApiSlice: StateCreator<BoundState, [], [], ApiState> = (
  set,
) => ({
  placeArray: [],
  setPlaceArray(placeArray) {
    set({ placeArray });
  },
  async apiRequest(method, endpoint, body, ...params) {
    const url = makeUrlPlaces(endpoint, ...params);
    console.log({ url });
    const options = {
      method,
      body,
    };
    const result = await easyFetch<PlaceResponse>(url, options);
    if (method === "GET") {
      const placeArray = result.places;
      const isResponseEmpty = placeArray.length === 0;
      set({ placeArray, isResponseEmpty });
    }
  },
  isResponseEmpty: false,
  setIsResponseEmpty(isResponseEmpty) {
    set({ isResponseEmpty });
  },
});
