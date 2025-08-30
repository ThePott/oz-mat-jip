import CustomError from "./customError";

const easyFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new CustomError("API", json);
  }

  return json as T;
};

export default easyFetch;
