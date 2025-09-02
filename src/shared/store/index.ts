import { create } from "zustand";
import type { BoundState } from "./boundState";
import { createApiSlice } from "./_apiSlice";
import { createDeviceSlice } from "./_deviceSlice";
import { createJSONStorage, persist } from "zustand/middleware";

const useBoundStore = create<BoundState>()(
  persist(
    (...a) => ({
      ...createApiSlice(...a),
      ...createDeviceSlice(...a),
    }),
    {
      name: "mat-jip-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        // placeArrayResponse: state.placeArrayResponse,
        // idToIsFavorite: state.idToIsFavorite,
        // favoritePlaceArray: state.favoritePlaceArray,
      }),
    },
  ),
);
export default useBoundStore;
