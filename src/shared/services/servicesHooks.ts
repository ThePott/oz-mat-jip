import { useEffect } from "react";
import useBoundStore from "../store";
import type { Endpoint } from "./apiUtils";

export const useGetAfterMount = (...endpointArray: Endpoint[]) => {
  const apiRequest = useBoundStore((state) => state.apiRequest);
  useEffect(() => {
    endpointArray.forEach((endpoint) => apiRequest("GET", endpoint, undefined));
  }, []);
};
