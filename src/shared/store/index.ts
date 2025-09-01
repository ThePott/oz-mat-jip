import { create } from "zustand";
import type { BoundState } from "./boundState";
import { createApiSlice } from "./_apiSlice";
import { createDeviceSlice } from "./_deviceSlice";

const useBoundStore = create<BoundState>()((...a) => ({
  ...createApiSlice(...a),
  ...createDeviceSlice(...a),
}));

export default useBoundStore;
