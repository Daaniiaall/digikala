import { configureStore } from "@reduxjs/toolkit";

import filterBarReducer from "./features/filterBar/filterbarSlice";

const store = configureStore({
  reducer: {
    filterBar: filterBarReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
