import type { Endpoint } from "../services/apiUtils";
import type CustomError from "../services/customError";

export interface Place {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  description: string;
}

export type ApiMethod = "GET" | "POST" | "DELETE";

export interface ResourceState<T> {
  data: T | null;
  error: CustomError | null;
  isLoading: boolean;
}

type SortedBy = "DISTANCE";

export interface PlaceResponse {
  places: Place[];

  sortedBy?: SortedBy;
}

export type IdToIsFavorte = Record<string, true>;

export interface ApiState {
  placeArrayResponse: ResourceState<PlaceResponse>;
  idToIsFavorite: IdToIsFavorte;
  favoritePlaceArray: Place[];

  apiRequest: (
    method: ApiMethod,
    endpoint: Endpoint,
    body: any,
    ...params: string[]
  ) => void;
  toggleIsFavorite: (place: Place) => void;
  // filterFavoritePlaceArray: () => Place[];
}
