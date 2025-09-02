import type { StateCreator } from "zustand";
import type { BoundState } from "./boundState";
import type {
  ApiState,
  IdToIsFavorite,
  Place,
  PlaceResponse,
  ResourceState,
} from "./_apiInterfaces";
import { makeUrlPlaces } from "../services/apiUtils";
import easyFetch from "../services/easyFetch";

const filterFavoritePlaceArray = (
  idToIsFavorite: IdToIsFavorite,
  placeArray: Place[],
) => {
  const favoriteIdArray = Object.keys(idToIsFavorite);

  const filteredArray = placeArray.filter((place) =>
    favoriteIdArray.includes(place.id),
  );
  return filteredArray;
};

export const createApiSlice: StateCreator<BoundState, [], [], ApiState> = (
  set,
  get,
) => ({
  placeArrayResponse: { data: null, error: null, isLoading: true },
  favoritePlaceArrayResponse: { data: null, error: null, isLoading: true },
  idToIsFavorite: {},
  favoritePlaceArray: [],

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

    const url = makeUrlPlaces(endpoint, ...params);
    console.log({ params });

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
        const favoritePlaceArrayResponse: ResourceState<PlaceResponse> = {
          data: result,
          error: error,
          isLoading: false,
        };
        set({ favoritePlaceArrayResponse });
        break;
      default:
        break;
    }
  },

  toggleIsFavorite(place) {
    const state = get();

    const idToIsFavorite = { ...state.idToIsFavorite };
    if (idToIsFavorite[place.id]) {
      delete idToIsFavorite[place.id];
    } else {
      idToIsFavorite[place.id] = true;
    }

    set({ idToIsFavorite });
  },
  updateFavoritePlaceArray() {
    const state = get();
    const idToIsFavorite = state.idToIsFavorite;
    const placeArray = state.placeArrayResponse.data?.places ?? [];

    const favoritePlaceArray = filterFavoritePlaceArray(
      idToIsFavorite,
      placeArray,
    );
    set({ favoritePlaceArray });
  },
  updateIdToIsFavorite() {
    const state = get();
    const responseData = state.favoritePlaceArrayResponse.data;
    if (!responseData) {
      return;
    }
    const favoritePlaceArray = responseData.places ?? [];
    const idToIsFavorite = favoritePlaceArray.reduce(
      (acc: IdToIsFavorite, place) => {
        acc[place.id] = true;
        return acc;
      },
      {},
    );
    set({ idToIsFavorite });
  },
});
