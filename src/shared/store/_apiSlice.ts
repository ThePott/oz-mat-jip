import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type { ApiState, PlaceResponse, ResourceState } from "./_apiInterfaces";
import { makeUrlPlaces } from "../services/apiUtils";
import easyFetch from "../services/easyFetch";

export const createApiSlice: StateCreator<BoundState, [], [], ApiState> = (
  set,
  get,
) => ({
  placeArrayResponse: { data: null, error: null, isLoading: true },

  async apiRequest(method, endpoint, body, ...params) {
    const prevPlaceArray = get().placeArrayResponse;
    set({ placeArrayResponse: { ...prevPlaceArray, isLoading: true } });

    const url = makeUrlPlaces(endpoint, ...params);
    const options = {
      method,
      body,
    };

    const [result, error] = await easyFetch<PlaceResponse>(url, options);
    console.log({ result, error });
    if (method === "GET") {
      const placeArrayResponse: ResourceState<PlaceResponse> = {
        data: result,
        error: error,
        isLoading: false,
      };
      set({ placeArrayResponse });
    }
  },
});
