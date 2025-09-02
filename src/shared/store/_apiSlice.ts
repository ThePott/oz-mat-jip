import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type {
  ApiState,
  ExtendedPlace,
  PlaceResponse,
  ResourceState,
} from "./_apiInterfaces";
import { makeUrlPlaces } from "../services/apiUtils";
import easyFetch from "../services/easyFetch";

export const createApiSlice: StateCreator<BoundState, [], [], ApiState> = (
  set,
  get,
) => ({
  placeArrayResponse: { data: null, error: null, isLoading: true },

  async apiRequest(method, endpoint, body, ...params) {
    const state = get();
    const prevPlaceArrayResponse = state.placeArrayResponse;

    if (prevPlaceArrayResponse.data && prevPlaceArrayResponse.data.places) {
      return;
    }

    set({ placeArrayResponse: { ...prevPlaceArrayResponse, isLoading: true } });

    const url = makeUrlPlaces(endpoint, ...params);
    const options = {
      method,
      body,
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
    const toggledPlace: ExtendedPlace = {
      ...place,
      isFavorite: !place.isFavorite,
    };

    const state = get();
    const placeArrayResponse = { ...state.placeArrayResponse };
    if (!placeArrayResponse.data) {
      debugger;
      return;
    }

    const placeArray = placeArrayResponse.data.places.map((el) =>
      el.id === toggledPlace.id ? toggledPlace : el,
    );

    placeArrayResponse.data.places = placeArray;
    set({ placeArrayResponse });
  },
});
