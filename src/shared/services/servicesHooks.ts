import { useEffect } from "react";
import useBoundStore from "../store";
import type { Endpoint } from "./apiUtils";

export const useGetAfterMount = (endpoint: Endpoint) => {
  const apiRequest = useBoundStore((state) => state.apiRequest);
  useEffect(() => {
    apiRequest("GET", endpoint, undefined);
  }, []);
};
