import CustomError from "./customError";

/** T: type of response.json */
const easyFetch = async <T>(
  url: string,
  options?: RequestInit,
): Promise<[T | null, CustomError | null]> => {
  let responseJson: T | null = null;
  let customError: CustomError | null = null;
  try {
    // throw new Error("yeah whatever");
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok) {
      throw new CustomError("API", json);
    }

    responseJson = json;
  } catch (error) {
    console.error("---- API FAILED:", error);
    customError = new CustomError("API", error);
  }

  return [responseJson, customError];
};

export default easyFetch;
