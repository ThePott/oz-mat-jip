import type { Endpoint } from "../services/apiUtils";

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

export interface ApiState {
  placeArray: Place[];
  setPlaceArray: (placeArray: Place[]) => void;
  apiRequest: (
    method: ApiMethod,
    endpoint: Endpoint,
    body: any,
    ...params: string[]
  ) => void;
  isResponseEmpty: boolean;
  setIsResponseEmpty: (isResponseEmpty: boolean) => void;
}
