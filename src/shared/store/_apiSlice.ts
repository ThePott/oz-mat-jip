import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type { ApiState, Place } from "./_apiInterfaces";
import { makeUrlPlaces, type Endpoint } from "../services/apiUtils";
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
    const result = await easyFetch(url, options);
    if (method === "GET") {
      set({ placeArray: result as Place[] });
    }
  },
});
