import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { locationApi } from "../apis/locationApi";

export const store = configureStore({
  reducer: {
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});

setupListeners(store.dispatch);
