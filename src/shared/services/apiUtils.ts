import CustomError from "./customError";

const extractPlaceholders = (endpoint: string): string[] => {
  const matches = endpoint.match(/\{([^}]+)\}/g);
  return matches ?? [];
};

export type Endpoint =
  | "/"
  | "/places"
  | "/users/places"
  | "/users/places/{placeId}";

export const makeUrlPlaces = (endpoint: Endpoint, ...params: string[]) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const placeholderArray = extractPlaceholders(endpoint);

  if (placeholderArray.length !== params.length) {
    throw new CustomError("PRE_API");
  }

  const url = placeholderArray.reduce((acc, placeholder, index) => {
    return acc.replace(placeholder, params[index]);
  }, `${baseUrl}${endpoint}`);
  return url;
};
