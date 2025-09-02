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
  idToIsFavorite: {},

  async apiRequest(method, endpoint, body, ...params) {
    const state = get();
    const prevPlaceArrayResponse = state.placeArrayResponse;

    if (
      method === "GET" &&
      prevPlaceArrayResponse.data &&
      prevPlaceArrayResponse.data.places
    ) {
      return;
    }

    if (method === "GET") {
      set({
        placeArrayResponse: { ...prevPlaceArrayResponse, isLoading: true },
      });
    }

    const url = makeUrlPlaces(endpoint, ...params);
    console.log({ params });
    debugger;
    const options = {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const [result, error] = await easyFetch<PlaceResponse>(url, options);

    if (method !== "GET") {
      return;
    }

    switch (endpoint) {
      case "/places":
        const placeArrayResponse: ResourceState<PlaceResponse> = {
          data: result,
          error: error,
          isLoading: false,
        };
        set({ placeArrayResponse });
        break;
      case "/users/places":
        break;
      default:
        break;
    }
  },

  toggleIsFavorite(place) {
    const state = get();
    const idToIsFavorite = { ...state.idToIsFavorite };
    idToIsFavorite[place.id] = !idToIsFavorite[place.id];
    set({ idToIsFavorite });
  },
});
