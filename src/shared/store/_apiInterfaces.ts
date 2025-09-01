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
export interface PlaceResponse {
  places: Place[];
}
export type ApiMethod = "GET" | "POST" | "DELETE";

export interface ResourceState<T> {
  data: T | null;
  error: CustomError | null;
  isLoading: boolean;
}

export interface ApiState {
  placeArrayResponse: ResourceState<Place[]>;
  apiRequest: (
    method: ApiMethod,
    endpoint: Endpoint,
    body: any,
    ...params: string[]
  ) => void;
}
