import { create } from "zustand";
import type { BoundState } from "./boundState";
import { createApiSlice } from "./_apiSlice";

const useBoundStore = create<BoundState>()((...a) => ({
  ...createApiSlice(...a),
}));

export default useBoundStore;
